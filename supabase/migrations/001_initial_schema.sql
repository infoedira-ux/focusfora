-- ==============================================
-- FOCUS FORA — Complete Database Schema
-- Run this in Supabase SQL Editor
-- ==============================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ==============================================
-- USERS & PROFILES
-- ==============================================

create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  email text unique not null,
  full_name text,
  avatar_url text,
  level text check (level in ('cbc', 'kcse', 'university', 'professional')) default 'kcse',
  subscription_tier text check (subscription_tier in ('free', 'scholar', 'institution')) default 'free',
  subscription_expires_at timestamptz,
  study_streak integer default 0,
  last_study_date date,
  total_study_minutes integer default 0,
  school_id uuid,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name)
  values (new.id, new.email, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ==============================================
-- BOOKS (Gutenberg Cache)
-- ==============================================

create table public.books (
  id integer primary key, -- Gutenberg ID
  title text not null,
  author text,
  cover_url text,
  subjects text[] default '{}',
  language text default 'en',
  download_count integer default 0,
  is_kenyan_curriculum boolean default false,
  gutenberg_url text,
  cached_text text, -- Store simplified version
  ai_summary text,
  created_at timestamptz default now()
);

-- ==============================================
-- RESEARCH PAPERS
-- ==============================================

create table public.research_papers (
  id uuid primary key default uuid_generate_v4(),
  external_id text unique, -- arXiv ID, CORE ID etc
  title text not null,
  authors text[] default '{}',
  abstract text,
  simplified_abstract text, -- AI simplified version
  full_summary text, -- AI full summary
  source text check (source in ('arxiv', 'pubmed', 'core', 'semantic_scholar')),
  url text,
  pdf_url text,
  published_date date,
  subjects text[] default '{}',
  view_count integer default 0,
  created_at timestamptz default now()
);

-- ==============================================
-- PAST PAPERS
-- ==============================================

create table public.past_papers (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  subject text not null,
  year integer not null,
  level text check (level in ('kcse', 'kcpe', 'university', 'cpa', 'acca', 'cips', 'cfa')) not null,
  paper_number integer default 1, -- Paper 1, Paper 2 etc
  file_url text,
  answers_url text,
  has_answers boolean default false,
  download_count integer default 0,
  created_at timestamptz default now()
);

-- ==============================================
-- CBC GUIDES
-- ==============================================

create table public.cbc_guides (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  grade integer check (grade between 1 and 9) not null,
  strand text not null,
  sub_strand text,
  learning_outcomes text[] default '{}',
  activities jsonb default '[]',
  parent_tips text[] default '{}',
  teacher_notes text,
  term integer check (term in (1, 2, 3)),
  created_at timestamptz default now()
);

-- ==============================================
-- QUIZZES
-- ==============================================

create table public.quizzes (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  subject text not null,
  level text not null,
  source_type text check (source_type in ('book', 'paper', 'past_paper', 'cbc', 'custom')),
  source_id text,
  questions jsonb not null default '[]',
  is_ai_generated boolean default true,
  created_by uuid references public.profiles,
  is_public boolean default true,
  play_count integer default 0,
  created_at timestamptz default now()
);

create table public.quiz_results (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.profiles on delete cascade not null,
  quiz_id uuid references public.quizzes on delete cascade not null,
  score integer not null,
  total integer not null,
  percentage numeric(5,2) generated always as (score::numeric / total * 100) stored,
  time_taken_seconds integer,
  answers jsonb default '{}',
  created_at timestamptz default now()
);

-- ==============================================
-- BOOKMARKS & PROGRESS
-- ==============================================

create table public.bookmarks (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.profiles on delete cascade not null,
  content_type text check (content_type in ('book', 'paper', 'past_paper', 'cbc_guide', 'quiz')),
  content_id text not null,
  content_title text,
  notes text,
  created_at timestamptz default now(),
  unique(user_id, content_type, content_id)
);

create table public.reading_progress (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.profiles on delete cascade not null,
  book_id integer references public.books,
  current_position integer default 0, -- Character position in text
  total_length integer,
  percentage numeric(5,2) generated always as (
    case when total_length > 0 then current_position::numeric / total_length * 100 else 0 end
  ) stored,
  last_read_at timestamptz default now(),
  unique(user_id, book_id)
);

create table public.study_sessions (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.profiles on delete cascade not null,
  content_type text,
  content_id text,
  duration_minutes integer not null,
  session_date date default current_date,
  created_at timestamptz default now()
);

-- ==============================================
-- SCHOOLS / INSTITUTIONS
-- ==============================================

create table public.schools (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  type text check (type in ('primary', 'secondary', 'university', 'college', 'tutoring')),
  county text,
  contact_email text,
  subscription_tier text default 'institution',
  subscription_expires_at timestamptz,
  student_count integer default 0,
  created_at timestamptz default now()
);

-- ==============================================
-- ROW LEVEL SECURITY
-- ==============================================

alter table public.profiles enable row level security;
alter table public.bookmarks enable row level security;
alter table public.reading_progress enable row level security;
alter table public.quiz_results enable row level security;
alter table public.study_sessions enable row level security;

-- Profiles: users can only see/edit their own
create policy "Users can view own profile"
  on public.profiles for select using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update using (auth.uid() = id);

-- Bookmarks: own only
create policy "Users can manage own bookmarks"
  on public.bookmarks for all using (auth.uid() = user_id);

-- Reading progress: own only
create policy "Users can manage own reading progress"
  on public.reading_progress for all using (auth.uid() = user_id);

-- Quiz results: own only
create policy "Users can manage own quiz results"
  on public.quiz_results for all using (auth.uid() = user_id);

-- Public content readable by all authenticated users
create policy "Authenticated users can read books"
  on public.books for select to authenticated using (true);

create policy "Authenticated users can read papers"
  on public.research_papers for select to authenticated using (true);

create policy "Authenticated users can read past papers"
  on public.past_papers for select to authenticated using (true);

create policy "Authenticated users can read cbc guides"
  on public.cbc_guides for select to authenticated using (true);

create policy "Authenticated users can read quizzes"
  on public.quizzes for select to authenticated using (is_public = true);

-- ==============================================
-- INDEXES for performance
-- ==============================================

create index idx_books_subjects on public.books using gin(subjects);
create index idx_books_kenyan on public.books(is_kenyan_curriculum);
create index idx_papers_subjects on public.research_papers using gin(subjects);
create index idx_past_papers_level_subject on public.past_papers(level, subject, year desc);
create index idx_cbc_guides_grade on public.cbc_guides(grade, strand);
create index idx_quiz_results_user on public.quiz_results(user_id, created_at desc);
create index idx_bookmarks_user on public.bookmarks(user_id, content_type);
create index idx_study_sessions_user_date on public.study_sessions(user_id, session_date desc);

-- ==============================================
-- SEED: Sample CBC Guides
-- ==============================================

insert into public.cbc_guides (title, grade, strand, sub_strand, learning_outcomes, activities, parent_tips, teacher_notes, term)
values
(
  'Communication in English - Listening and Speaking',
  3, 'Communication Skills', 'Listening and Speaking',
  ARRAY['Listen attentively to instructions', 'Respond appropriately to questions', 'Speak clearly in complete sentences'],
  '[{"title": "Story Circle", "description": "Students sit in a circle and each adds one sentence to a growing story"}, {"title": "Question Ball", "description": "Toss a ball and whoever catches it must answer a question"}]',
  ARRAY['Ask your child about their day using open questions', 'Read stories together every evening', 'Encourage them to retell what happened at school'],
  'Focus on confidence building. Avoid correcting grammar harshly during speaking activities.',
  1
),
(
  'Mathematical Activities - Numbers 1-100',
  2, 'Mathematical Activities', 'Numbers and Number Sense',
  ARRAY['Count objects from 1 to 100', 'Write numbers in words up to 20', 'Compare numbers using more and less'],
  '[{"title": "Number Hunt", "description": "Find numbers around the classroom and identify them"}, {"title": "Counting with Stones", "description": "Use stones or bottle tops to practice counting"}]',
  ARRAY['Practice counting while climbing stairs or doing chores', 'Play simple counting games during car journeys', 'Use mangoes or maize to make counting concrete'],
  'Use locally available materials. Bottle tops, stones, and seeds work perfectly for counting activities.',
  1
);

-- ==============================================
-- DONE
-- ==============================================
-- Run this entire file in Supabase SQL Editor
-- Then add your storage buckets for past paper PDFs
