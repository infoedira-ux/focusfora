"use client";
import { useState } from "react";
import Link from "next/link";

const CATEGORIES = [
  {
    id: "corporate-life",
    icon: "🏢",
    title: "Corporate Life",
    desc: "Navigate office politics, climb the ladder, build your brand",
    color: "bg-aubergine",
    textLight: true,
    topics: [
      { id: "corporate-politics", title: "Corporate Politics", desc: "How power actually works in organisations" },
      { id: "corporate-ladder", title: "The Corporate Ladder", desc: "Unwritten rules of getting promoted" },
      { id: "workplace-communication", title: "Workplace Communication", desc: "Emails, meetings and difficult conversations" },
      { id: "personal-branding", title: "Personal Branding at Work", desc: "Being seen, respected and remembered" },
      { id: "managing-your-boss", title: "Managing Your Boss", desc: "Making the relationship work for you" },
    ]
  },
  {
    id: "finance",
    icon: "💰",
    title: "Finance & Accounting",
    desc: "From invoices to financial statements — demystified",
    color: "bg-saffron",
    textLight: false,
    topics: [
      { id: "commercial-finance", title: "Commercial Finance Basics", desc: "P&L, cash flow and balance sheets explained" },
      { id: "accounting-fundamentals", title: "Accounting Fundamentals", desc: "Debits, credits and the accounting cycle" },
      { id: "audit-processes", title: "Audit Processes", desc: "What auditors do and how to prepare" },
      { id: "tax-kenya", title: "Tax in Kenya", desc: "PAYE, VAT, corporate tax simplified" },
      { id: "budgeting-forecasting", title: "Budgeting & Forecasting", desc: "Building and defending a budget" },
    ]
  },
  {
    id: "business-operations",
    icon: "⚙️",
    title: "Business Operations",
    desc: "Make businesses run better, faster and smarter",
    color: "bg-aubergine/5",
    textLight: false,
    topics: [
      { id: "supplier-management", title: "Supplier Management", desc: "Sourcing, negotiating and managing vendors" },
      { id: "customer-relations", title: "Customer Relations", desc: "Retention, complaints and loyalty" },
      { id: "process-improvement", title: "Process Improvement", desc: "Spotting inefficiency and fixing it" },
      { id: "project-management", title: "Project Management", desc: "Delivering on time and on budget" },
      { id: "supply-chain", title: "Supply Chain Basics", desc: "From manufacturer to customer" },
    ]
  },
  {
    id: "skills",
    icon: "🧠",
    title: "Professional Skills",
    desc: "The skills schools never taught but employers demand",
    color: "bg-saffron-pale",
    textLight: false,
    topics: [
      { id: "negotiation", title: "Negotiation Skills", desc: "Getting what you want without burning bridges" },
      { id: "data-analysis", title: "Data Analysis Basics", desc: "Excel, numbers and making decisions" },
      { id: "presentation-skills", title: "Presentation Skills", desc: "Slides, delivery and persuasion" },
      { id: "critical-thinking", title: "Critical Thinking", desc: "Analysing problems and making better decisions" },
      { id: "emotional-intelligence", title: "Emotional Intelligence", desc: "Reading people and managing yourself" },
    ]
  },
  {
    id: "entrepreneurship",
    icon: "🚀",
    title: "Entrepreneurship",
    desc: "Start, build and grow a Kenyan business",
    color: "bg-aubergine/5",
    textLight: false,
    topics: [
      { id: "business-planning", title: "Business Planning", desc: "From idea to viable business model" },
      { id: "startup-funding-kenya", title: "Startup Funding in Kenya", desc: "Banks, angels, VCs and grants" },
      { id: "marketing-kenya", title: "Marketing in Kenya", desc: "Digital, word of mouth and brand building" },
      { id: "legal-business-kenya", title: "Legal Basics for Business", desc: "Registration, contracts and compliance" },
      { id: "scaling", title: "Scaling Your Business", desc: "Growing without losing control" },
    ]
  },
  {
    id: "myths-decoded",
    icon: "💡",
    title: "Myths Decoded",
    desc: "What they told you about work that was wrong",
    color: "bg-aubergine",
    textLight: true,
    topics: [
      { id: "work-myths", title: "Work Myths Busted", desc: "Hard work alone gets you promoted — and other lies" },
      { id: "money-myths", title: "Money Myths Busted", desc: "Saving alone builds wealth — and other misconceptions" },
      { id: "career-myths", title: "Career Myths Busted", desc: "Your degree determines your career — really?" },
      { id: "business-myths", title: "Business Myths Busted", desc: "You need capital to start — and other excuses" },
      { id: "investment-myths", title: "Investment Myths Busted", desc: "Only the rich invest — and other barriers" },
    ]
  },
];

export default function IndustryPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const active = CATEGORIES.find(c => c.id === activeCategory);

  return (
    <div className="min-h-screen bg-offwhite">
      <nav className="bg-aubergine px-6 md:px-12 py-4 flex justify-between items-center">
        <Link href="/dashboard" className="font-serif text-xl text-offwhite">
          Focus<span className="text-saffron">Fora</span>
        </Link>
        <div className="flex items-center gap-4">
          {activeCategory && (
            <button onClick={() => setActiveCategory(null)}
              className="text-offwhite/60 text-xs hover:text-saffron transition-colors uppercase tracking-wider">
              ← All Categories
            </button>
          )}
          <Link href="/dashboard" className="text-offwhite/60 text-xs hover:text-saffron transition-colors uppercase tracking-wider">
            Dashboard
          </Link>
        </div>
      </nav>

      <div className="px-6 md:px-12 py-10 max-w-5xl mx-auto">
        {!activeCategory ? (
          <>
            <p className="ff-section-eyebrow mb-2">Professional Development</p>
            <h1 className="font-serif text-4xl text-aubergine font-light mb-2">Industry Knowledge</h1>
            <p className="text-[#5A4060] text-sm font-light mb-2">
              Everything schools never taught you about how business actually works.
            </p>
            <p className="text-saffron text-xs font-medium mb-10">
              ✦ For professionals, entrepreneurs and ambitious graduates
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {CATEGORIES.map(cat => (
                <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
                  className={`${cat.color} p-6 rounded-sm text-left hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group`}>
                  <div className="text-4xl mb-4">{cat.icon}</div>
                  <h2 className={`font-serif text-xl mb-2 font-semibold ${cat.textLight ? "text-offwhite" : "text-aubergine"}`}>
                    {cat.title}
                  </h2>
                  <p className={`text-xs font-light mb-4 ${cat.textLight ? "text-offwhite/60" : "text-[#5A4060]"}`}>
                    {cat.desc}
                  </p>
                  <div className={`text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all ${cat.textLight ? "text-saffron" : "text-aubergine"}`}>
                    {cat.topics.length} topics <span>→</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Pro teaser */}
            <div className="mt-12 bg-aubergine rounded-sm p-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <p className="text-saffron text-xs uppercase tracking-widest mb-2">✦ Coming Soon</p>
                <h3 className="font-serif text-2xl text-offwhite mb-1">Professional Tier</h3>
                <p className="text-offwhite/60 text-sm font-light">
                  Full access to all industry guides, case studies and professional tools. KSh 499/month.
                </p>
              </div>
              <button className="bg-saffron text-aubergine text-xs font-medium px-8 py-3 rounded-sm uppercase tracking-wider whitespace-nowrap">
                Notify Me →
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="ff-section-eyebrow mb-2">{active?.icon} Industry Knowledge</p>
            <h1 className="font-serif text-4xl text-aubergine font-light mb-2">{active?.title}</h1>
            <p className="text-[#5A4060] text-sm font-light mb-10">{active?.desc}</p>

            <div className="grid md:grid-cols-2 gap-4">
              {active?.topics.map(topic => (
                <Link key={topic.id} href={`/industry/${topic.id}`}
                  className="bg-white p-6 rounded-sm border border-aubergine/[0.06] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
                  <h3 className="font-serif text-lg text-aubergine font-semibold mb-1">{topic.title}</h3>
                  <p className="text-xs text-[#5A4060] font-light mb-4">{topic.desc}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                      {["Overview", "Deep Dive", "Kenya Context", "Action Steps"].map(t => (
                        <span key={t} className="text-[10px] text-aubergine/40">✓ {t}</span>
                      ))}
                    </div>
                    <span className="text-saffron text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">Read →</span>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
