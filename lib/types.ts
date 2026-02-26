// User & Auth
export interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  avatar_url?: string;
  level: "cbc" | "kcse" | "university" | "professional";
  subscription_tier: "free" | "scholar" | "institution";
  study_streak: number;
  created_at: string;
}

// Content
export interface Book {
  id: number;
  title: string;
  author: string;
  cover_url?: string;
  subjects: string[];
  language: string;
  download_count: number;
  is_kenyan_curriculum: boolean;
}

export interface ResearchPaper {
  id: string;
  title: string;
  authors: string[];
  abstract: string;
  simplified_abstract?: string;
  source: "arxiv" | "pubmed" | "core";
  url: string;
  published_date: string;
  subjects: string[];
}

export interface PastPaper {
  id: string;
  title: string;
  subject: string;
  year: number;
  level: "kcse" | "university" | "cpa" | "acca" | "cips";
  file_url: string;
  has_answers: boolean;
}

export interface CBCGuide {
  id: string;
  title: string;
  grade: number;
  strand: string;
  sub_strand: string;
  learning_outcomes: string[];
  activities: string[];
  parent_tips: string[];
  teacher_notes: string;
}

// Quiz
export interface Quiz {
  id: string;
  title: string;
  subject: string;
  level: string;
  questions: QuizQuestion[];
  created_at: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
}

export interface QuizResult {
  id: string;
  user_id: string;
  quiz_id: string;
  score: number;
  total: number;
  time_taken: number;
  answers: Record<string, string>;
  created_at: string;
}

// Navigation
export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  badge?: string;
}

// Subscription plans
export interface Plan {
  id: "free" | "scholar" | "institution";
  name: string;
  price_kes: number;
  price_label: string;
  features: string[];
  is_featured: boolean;
}
