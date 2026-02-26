# Focus Fora 🌍

**Where Kenyan Minds Gather and Grow**

A Vanva Innovations Product.

Focus Fora is Kenya's most powerful learning platform — CBC guides, KCSE revision, university research simplified by AI, and professional exam prep (CPA, ACCA, CIPS), all in one beautiful, low-data-friendly platform.

---

## Tech Stack

| Layer | Tool |
|---|---|
| Frontend | Next.js 14 (App Router) |
| Styling | Tailwind CSS (custom design tokens) |
| Database | Supabase (PostgreSQL) |
| Auth | Supabase Auth |
| AI | Claude API (Anthropic) |
| Books | Project Gutenberg API |
| Research | arXiv, CORE, PubMed APIs |
| Payments | Flutterwave (M-Pesa) |
| Deploy | Vercel |
| Email | Resend |

---

## Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/infoedira-ux/focusfora.git
cd focusfora
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
```bash
cp .env.local.example .env.local
# Fill in your keys (see below)
```

### 4. Set up Supabase
- Create a project at [supabase.com](https://supabase.com)
- Go to SQL Editor and run `supabase/migrations/001_initial_schema.sql`
- Copy your Project URL and Anon Key into `.env.local`

### 5. Run locally
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Environment Variables

| Variable | Where to get it |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase Dashboard > Settings > API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase Dashboard > Settings > API |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase Dashboard > Settings > API |
| `ANTHROPIC_API_KEY` | [console.anthropic.com](https://console.anthropic.com) |
| `FLUTTERWAVE_PUBLIC_KEY` | [dashboard.flutterwave.com](https://dashboard.flutterwave.com) |
| `FLUTTERWAVE_SECRET_KEY` | [dashboard.flutterwave.com](https://dashboard.flutterwave.com) |
| `RESEND_API_KEY` | [resend.com](https://resend.com) |

---

## Project Structure

```
focusfora/
├── app/
│   ├── auth/           # Login, register, onboarding
│   ├── dashboard/      # Student dashboard
│   ├── read/           # Book reader (Gutenberg)
│   ├── revise/         # KCSE past papers + quizzes
│   ├── research/       # University paper simplifier
│   ├── cbc/            # CBC guides
│   ├── exams/          # Professional exams
│   └── api/            # API routes (AI, payments)
├── components/
│   ├── layout/         # Nav, Hero, Footer etc
│   ├── ui/             # Reusable UI components
│   ├── reader/         # Book reader components
│   └── quiz/           # Quiz components
├── lib/
│   ├── supabase/       # DB client helpers
│   ├── gutenberg.ts    # Gutenberg API
│   ├── ai.ts           # Claude AI helpers
│   └── types.ts        # TypeScript types
└── supabase/
    └── migrations/     # Database schema
```

---

## Deployment

This project is configured for [Vercel](https://vercel.com):

1. Push to GitHub
2. Import repo in Vercel
3. Add all environment variables
4. Deploy — auto-deploys on every push to `main`

---

## Design System

Colors:
- **Aubergine** `#3D1A47` — primary, authority, knowledge
- **Saffron** `#E8A020` — energy, warmth, reward
- **Off-white** `#FAF7F2` — clean, easy on eyes for long study sessions

Typography:
- **Cormorant Garamond** — headings (scholarly, elegant)
- **DM Sans** — body text (clean, readable)

---

## Roadmap

- [x] Landing page
- [x] Database schema
- [x] Design system
- [ ] Auth (login/register/onboarding)
- [ ] Book reader (Gutenberg)
- [ ] KCSE past papers
- [ ] AI research simplifier
- [ ] Quiz engine
- [ ] CBC guides
- [ ] M-Pesa payments (Flutterwave)
- [ ] Study streak system
- [ ] School/institution dashboard
- [ ] Mobile app (React Native)

---

Built with ❤️ in Nairobi by [Vanva Innovations](https://vanvainnovations.co.ke)
