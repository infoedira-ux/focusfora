import Link from "next/link";

const features = [
  {
    icon: "📖",
    title: "KCSE Set Books",
    desc: "Complete study guides for every set book — chapter summaries, themes, character analysis, essay questions and exam quotes. For students and nostalgic alumni.",
    href: "/setbooks",
    badge: "Most Popular",
    badgeColor: "bg-saffron text-aubergine",
  },
  {
    icon: "🎯",
    title: "AI Practice Questions",
    desc: "Type any topic — get 10 KCSE-style questions with mark schemes instantly. Form 1–4, all subjects. New questions every time. Built on KNEC exam format.",
    href: "/quiz",
    badge: "New",
    badgeColor: "bg-aubergine text-offwhite",
  },
  {
    icon: "💼",
    title: "Industry Knowledge",
    desc: "Corporate politics, audit processes, supplier management, career myths and more. Everything schools never taught but employers expect. Kenya-contextualised.",
    href: "/industry",
    badge: "For Professionals",
    badgeColor: "bg-aubergine/10 text-aubergine",
  },
  {
    icon: "📚",
    title: "70,000+ Free Books",
    desc: "A world-class library in your pocket. Classic literature, philosophy, science and strategy — all free, beautifully formatted with font controls and pagination.",
    href: "/read",
  },
  {
    icon: "🧠",
    title: "Academic Research",
    desc: "Millions of research papers from arXiv, simplified and searchable. Find studies on climate, health, technology and more — in plain English.",
    href: "/research",
  },
  {
    icon: "✅",
    title: "KCSE Revision",
    desc: "Past papers, revision notes and exam resources organised by subject. Everything you need to walk into the exam room with confidence.",
    href: "/revise",
  },
  {
    icon: "🌱",
    title: "CBC Guides",
    desc: "Activity guides, portfolio ideas and parent explainers — aligned to KICD standards for every grade and strand. Primary and junior secondary covered.",
    href: "/cbc",
  },
  {
    icon: "🎓",
    title: "Professional Exams",
    desc: "CPA, ACCA, CIPS, CFA — simplified notes and smart revision. Study smarter for the qualifications that transform careers.",
    href: "/exams",
  },
  {
    icon: "🌍",
    title: "International Education",
    desc: "IGCSE, A-Levels, IB Diploma and American curriculum — subject guides, grading systems and university pathways. For Kenya's international school students.",
    href: "/international",
    badge: "New",
    badgeColor: "bg-aubergine text-offwhite",
  },
  {
    icon: "📰",
    title: "Vanva Magazine",
    desc: "Three issues of beautiful design, innovation and culture from Vanva Innovations — readable in-browser. More issues coming.",
    href: "/magazine",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-8 md:px-16 bg-offwhite-warm">
      <div className="text-center mb-14">
        <span className="ff-section-eyebrow block mb-3">Everything Inside Focus Fora</span>
        <h2 className="ff-section-title text-4xl md:text-5xl">
          One platform.<br />Every Kenyan. Every level.
        </h2>
        <p className="text-[#5A4060] text-sm font-light mt-4 max-w-xl mx-auto">
          From Form 1 to the boardroom — Focus Fora grows with you.
        </p>
      </div>

      {/* Featured three — full width cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-6">
        {features.slice(0, 3).map((f) => (
          <Link key={f.title} href={f.href || "#"}
            className="ff-card group relative overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 block">
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-saffron transition-all duration-500 group-hover:w-full" />
            {f.badge && (
              <span className={`text-[10px] font-medium px-2 py-0.5 rounded-sm mb-4 inline-block ${f.badgeColor}`}>
                {f.badge}
              </span>
            )}
            <div className="w-12 h-12 rounded-full bg-saffron-pale flex items-center justify-center text-2xl mb-5">
              {f.icon}
            </div>
            <h3 className="font-serif text-xl text-aubergine font-semibold mb-3">{f.title}</h3>
            <p className="text-[#5A4060] text-sm leading-relaxed font-light">{f.desc}</p>
            <div className="mt-4 text-saffron text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
              Explore <span>→</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Rest — smaller grid */}
      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {features.slice(3).map((f) => (
          <Link key={f.title} href={f.href || "#"}
            className="ff-card group relative overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 block py-5">
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-saffron transition-all duration-500 group-hover:w-full" />
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-saffron-pale flex items-center justify-center text-xl flex-shrink-0">
                {f.icon}
              </div>
              <div>
                <h3 className="font-serif text-base text-aubergine font-semibold mb-1">{f.title}</h3>
                <p className="text-[#5A4060] text-xs leading-relaxed font-light">{f.desc}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-14">
        <Link href="/register"
          className="ff-btn-primary inline-block px-10 py-4 text-base">
          Start Free Today →
        </Link>
        <p className="text-[#5A4060]/50 text-xs mt-3">No payment required · All core features free</p>
      </div>
    </section>
  );
}
