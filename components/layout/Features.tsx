const features = [
  {
    icon: "📚",
    title: "Read Beautifully",
    desc: "70,000+ classic books in a modern distraction-free reader. Set books, literature, philosophy — all free.",
  },
  {
    icon: "🧠",
    title: "Understand Deeply",
    desc: "Dense research papers and textbooks simplified by AI into plain English any Kenyan student can act on.",
  },
  {
    icon: "✅",
    title: "Pass with Confidence",
    desc: "KCSE past papers, AI-generated quizzes, and exam summaries written in the exact format examiners reward.",
  },
  {
    icon: "🌱",
    title: "CBC Made Simple",
    desc: "Activity guides, portfolio ideas, and parent explainers — all aligned to KICD standards for every grade and strand.",
  },
  {
    icon: "🎓",
    title: "Professional Exams",
    desc: "CPA, ACCA, CIPS, CFA — simplified notes, past papers, and smart quizzes. Study smarter, not harder.",
  },
  {
    icon: "📡",
    title: "Low Data Friendly",
    desc: "Built for Kenyan internet realities. Lightweight, fast, and offline-capable. Study even when bundles run low.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-8 md:px-16 bg-offwhite-warm">
      <div className="text-center mb-14">
        <span className="ff-section-eyebrow block mb-3">What Focus Fora Does</span>
        <h2 className="ff-section-title text-4xl md:text-5xl">
          One platform.<br />Every student. Every level.
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((f) => (
          <div key={f.title} className="ff-card group relative overflow-hidden">
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-saffron transition-all duration-500 group-hover:w-full" />
            <div className="w-12 h-12 rounded-full bg-saffron-pale flex items-center justify-center text-2xl mb-5">
              {f.icon}
            </div>
            <h3 className="font-serif text-xl text-aubergine font-semibold mb-3">{f.title}</h3>
            <p className="text-[#5A4060] text-sm leading-relaxed font-light">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
