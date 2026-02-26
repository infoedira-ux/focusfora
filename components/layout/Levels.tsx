const levels = [
  { num: "01", title: "CBC Primary (Grades 1–9)", desc: "Activity guides, parent explainers, portfolio ideas", href: "/cbc" },
  { num: "02", title: "KCSE Revision", desc: "Past papers, topic summaries, auto-quizzes", href: "/revise" },
  { num: "03", title: "University Level", desc: "Research simplified, textbooks, CAT prep", href: "/research" },
  { num: "04", title: "Professional Exams", desc: "CPA, ACCA, CIPS — notes & past papers", href: "/exams" },
];

const sources = [
  "Project Gutenberg", "arXiv", "PubMed", "CORE.ac.uk",
  "KNEC Past Papers", "KICD CBC Frameworks", "Semantic Scholar", "Khan Academy",
];

export default function Levels() {
  return (
    <section className="py-24 px-8 md:px-16 bg-offwhite">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="ff-section-eyebrow block mb-4">Content Sources</span>
          <h2 className="ff-section-title text-3xl md:text-4xl mb-6">
            Built on the world's best free knowledge
          </h2>
          <p className="text-[#5A4060] text-sm leading-relaxed font-light mb-8">
            We pull from the most trusted open-access sources globally, then transform them into the most beautiful, accessible reading experience ever built for African students.
          </p>
          <div className="flex flex-wrap gap-2">
            {sources.map((s, i) => (
              <span key={s} className={i % 2 === 0 ? "ff-tag" : "ff-tag-saffron"}>{s}</span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {levels.map((level) => (
            <a
              key={level.num}
              href={level.href}
              className="flex items-center gap-4 p-4 rounded-sm border-l-2 border-transparent bg-offwhite-warm hover:border-saffron hover:bg-white transition-all duration-300 group"
            >
              <span className="font-serif text-2xl text-saffron font-semibold min-w-[2rem]">{level.num}</span>
              <div>
                <strong className="block text-sm text-aubergine mb-0.5">{level.title}</strong>
                <span className="text-xs text-[#5A4060]">{level.desc}</span>
              </div>
              <span className="ml-auto text-aubergine/30 group-hover:text-saffron group-hover:translate-x-1 transition-all">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
