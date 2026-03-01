'use client';
import Link from 'next/link';

const FEATURES = [
  { icon: '📚', title: 'KCSE Set Books', desc: '19 set books with full guides, themes, characters and essay plans. Plus 70,000+ books free.', href: '/setbooks', tag: 'Form 1-4' },
  { icon: '🌱', title: 'CBC Guides', desc: 'PP1 to Grade 9 — 60+ illustrated activities, parent guides and portfolio ideas.', href: '/cbc', tag: 'PP1-Grade 9' },
  { icon: '📅', title: 'CBC Term Planner', desc: 'Week-by-week schemes of work for every grade and term. Saves teachers 3-4 hours per week.', href: '/cbc-planner', tag: 'For Teachers' },
  { icon: '🌍', title: 'International Curricula', desc: 'IGCSE, A-Levels, IB and US curriculum guides for Kenya international school students.', href: '/international', tag: 'IGCSE · IB · A-Levels' },
  { icon: '🏫', title: 'Schools Directory', desc: '18 top schools in Kenya — curricula, notes and official websites. No wrong locations.', href: '/schools', tag: 'International & National' },
  { icon: '🏢', title: 'Industry Knowledge Hub', desc: '27 topics across Corporate Life, Finance, Operations, Skills and Entrepreneurship.', href: '/industry', tag: 'All Professionals' },
  { icon: '🎓', title: 'Professional Exams', desc: 'CPA, ACCA, CFA, CIPS, Law, Nursing, HR, Banking, ICT and Engineering — full study guides.', href: '/exams', tag: 'All Professions' },
  { icon: '⚖️', title: 'Constitution and Law', desc: "Every Kenyan's rights explained in plain English — searchable by article, chapter or right.", href: '/constitution', tag: 'All Citizens' },
  { icon: '🔬', title: 'Research Library', desc: '70,000+ books from Project Gutenberg and arXiv research papers. Free forever.', href: '/books', tag: 'Students & Researchers' },
];

const FAMILY = [
  { person: 'Primary school child', use: 'CBC activity guides with teacher', icon: '👦' },
  { person: 'Secondary student', use: 'KCSE set books + quiz generator', icon: '📖' },
  { person: 'International school student', use: 'IGCSE and IB study guides', icon: '🌍' },
  { person: 'Parent', use: 'CBC parent guides and term planner', icon: '👩' },
  { person: 'Teacher', use: 'CBC scheme of work — all grades', icon: '👩‍🏫' },
  { person: 'CPA candidate', use: 'Professional exam study guide', icon: '📊' },
  { person: 'New professional', use: 'Industry knowledge and career skills', icon: '💼' },
  { person: 'Any citizen', use: 'Constitution and know your rights', icon: '⚖️' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-offwhite">
      {/* Nav */}
      <nav className="bg-aubergine px-6 md:px-12 py-4 flex justify-between items-center">
        <span className="font-serif text-xl text-offwhite">Focus<span className="text-saffron">Fora</span></span>
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="text-offwhite/60 text-xs hover:text-saffron transition-colors uppercase tracking-wider">Dashboard</Link>
          <Link href="/dashboard" className="bg-saffron text-aubergine text-xs font-semibold px-4 py-2 rounded-sm hover:bg-saffron/90 transition-colors">Get Started</Link>
        </div>
      </nav>

      {/* Hero */}
      <div className="bg-aubergine px-6 md:px-12 py-20 text-center">
        <p className="text-saffron text-xs uppercase tracking-widest mb-4">Kenya Learning Platform</p>
        <h1 className="font-serif text-5xl md:text-6xl text-offwhite font-light mb-6 leading-tight">
          One platform.<br />Every Kenyan learner.
        </h1>
        <p className="text-offwhite/70 text-lg font-light mb-4 max-w-2xl mx-auto">
          From PP1 to professional exams. CBC to KCSE. IGCSE to CPA. Constitution to career skills.
        </p>
        <p className="text-offwhite/50 text-sm mb-10">Built for Kenya. Free to use. No ads.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/dashboard" className="bg-saffron text-aubergine font-semibold px-8 py-4 rounded-sm hover:bg-saffron/90 transition-colors text-sm">
            Start Learning Free
          </Link>
          <Link href="/cbc" className="border border-offwhite/20 text-offwhite px-8 py-4 rounded-sm hover:border-saffron hover:text-saffron transition-colors text-sm">
            Explore CBC Guides
          </Link>
        </div>
      </div>

      {/* One family, every need */}
      <div className="px-6 md:px-12 py-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="ff-section-eyebrow text-center mb-2">Who This Is For</p>
          <h2 className="font-serif text-3xl text-aubergine text-center font-light mb-2">One family. Every need.</h2>
          <p className="text-[#5A4060] text-sm text-center font-light mb-10">Every member of a Kenyan family at a different stage — one platform serves them all.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {FAMILY.map((f, i) => (
              <div key={i} className="bg-offwhite border border-aubergine/[0.06] rounded-sm p-4">
                <div className="text-2xl mb-2">{f.icon}</div>
                <p className="text-aubergine font-medium text-sm mb-1">{f.person}</p>
                <p className="text-[#5A4060] text-xs font-light">{f.use}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features grid */}
      <div className="px-6 md:px-12 py-16 max-w-5xl mx-auto">
        <p className="ff-section-eyebrow text-center mb-2">Everything on the Platform</p>
        <h2 className="font-serif text-3xl text-aubergine text-center font-light mb-10">Nine learning destinations</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f, i) => (
            <Link key={i} href={f.href} className="bg-white border border-aubergine/[0.06] p-6 rounded-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group block">
              <div className="text-4xl mb-4">{f.icon}</div>
              <span className="text-saffron text-xs font-medium">{f.tag}</span>
              <h3 className="font-serif text-xl text-aubergine font-semibold mt-1 mb-2">{f.title}</h3>
              <p className="text-sm text-[#5A4060] font-light leading-relaxed">{f.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Constitution CTA */}
      <div className="bg-aubergine px-6 md:px-12 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-saffron text-xs uppercase tracking-widest mb-3">New on Focus Fora</p>
          <h2 className="font-serif text-3xl text-offwhite font-light mb-3">Know Your Constitutional Rights</h2>
          <p className="text-offwhite/70 text-sm font-light mb-6">Kenya Constitution 2010 explained in plain English — searchable by article, chapter or right. For every citizen, student, lawyer and civic educator.</p>
          <Link href="/constitution" className="bg-saffron text-aubergine font-semibold px-8 py-3 rounded-sm hover:bg-saffron/90 transition-colors text-sm inline-block">
            Read the Constitution
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 md:px-12 py-8 bg-aubergine/5 text-center">
        <p className="font-serif text-xl text-aubergine mb-1">Focus<span className="text-saffron">Fora</span></p>
        <p className="text-[#5A4060] text-xs">Kenya Learning Platform · Free · No Ads · Built for Every Kenyan</p>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {[["CBC","/cbc"],["KCSE","/setbooks"],["International","/international"],["Schools","/schools"],["Industry","/industry"],["Exams","/exams"],["Constitution","/constitution"],["Books","/books"]].map(([label,href]) => (
            <Link key={href} href={href} className="text-xs text-[#5A4060] hover:text-saffron transition-colors">{label}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
