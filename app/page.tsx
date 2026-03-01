'use client';
import Link from 'next/link';

const FEATURES = [
  { icon: "📚", title: "KCSE Set Books", desc: "19 set books with full guides, themes, characters and essay plans. Plus 70,000 books free.", href: "/setbooks", tag: "Form 1-4" },
  { icon: "🌱", title: "CBC Guides", desc: "PP1 to Grade 9 — 60+ illustrated activities, parent guides and portfolio ideas.", href: "/cbc", tag: "PP1-Grade 9" },
  { icon: "📅", title: "CBC Term Planner", desc: "Week-by-week schemes of work for every grade and term. Saves teachers 3-4 hours per week.", href: "/cbc-planner", tag: "For Teachers" },
  { icon: "🌍", title: "International Curricula", desc: "IGCSE, A-Levels, IB and US curriculum guides for Kenya international school students.", href: "/international", tag: "IGCSE · IB · A-Levels" },
  { icon: "🏫", title: "Schools Directory", desc: "18 top schools in Kenya — curricula, notes and official websites.", href: "/schools", tag: "International & National" },
  { icon: "🏢", title: "Industry Hub", desc: "27 topics across Corporate Life, Finance, Operations, Skills and Entrepreneurship.", href: "/industry", tag: "All Professionals" },
  { icon: "🎓", title: "Professional Exams", desc: "CPA, ACCA, CFA, CIPS, Law, Nursing, HR, Banking, ICT and Engineering — full study guides.", href: "/exams", tag: "All Professions" },
  { icon: "⚖️", title: "Constitution and Law", desc: "Every Kenyan's rights explained in plain English — searchable by article, chapter or right.", href: "/constitution", tag: "All Citizens" },
  { icon: "🔬", title: "Research Library", desc: "70,000+ books from Project Gutenberg and arXiv research papers. Free forever.", href: "/books", tag: "Students & Researchers" },
];

const FAMILY = [
  { person: "Primary school child", use: "CBC activity guides with teacher", icon: "👦" },
  { person: "Secondary student", use: "KCSE set books + quiz generator", icon: "📖" },
  { person: "International school student", use: "IGCSE and IB study guides", icon: "🌍" },
  { person: "Parent", use: "CBC parent guides and term planner", icon: "👩" },
  { person: "Teacher", use: "CBC scheme of work — all grades", icon: "👩‍🏫" },
  { person: "CPA candidate", use: "Professional exam study guide", icon: "📊" },
  { person: "New professional", use: "Industry knowledge and career skills", icon: "💼" },
  { person: "Any citizen", use: "Constitution and know your rights", icon: "⚖️" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-offwhite">

      {/* Nav — light */}
      <nav className="bg-offwhite px-6 md:px-12 py-4 flex justify-between items-center border-b border-aubergine/[0.08]">
        <span className="font-serif text-2xl text-aubergine">Focus<span className="text-saffron">Fora</span></span>
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="text-aubergine/50 text-xs hover:text-aubergine transition-colors uppercase tracking-wider hidden md:block">Dashboard</Link>
          <Link href="/dashboard" className="bg-aubergine text-offwhite text-xs font-semibold px-5 py-2.5 rounded-sm hover:bg-aubergine/90 transition-colors">Get Started Free</Link>
        </div>
      </nav>

      {/* Hero — offwhite background, saffron energy */}
      <div className="px-6 md:px-12 py-20 md:py-28 max-w-5xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-block bg-saffron/15 text-aubergine text-xs font-semibold px-3 py-1.5 rounded-sm uppercase tracking-widest mb-6">
            Kenya Learning Platform
          </div>
          <h1 className="font-serif text-5xl md:text-7xl text-aubergine font-light mb-6 leading-tight">
            One platform.<br />
            <span className="text-saffron">Every</span> Kenyan<br />
            learner.
          </h1>
          <p className="text-[#5A4060] text-lg font-light mb-3 max-w-xl leading-relaxed">
            From PP1 to professional exams. CBC to KCSE. IGCSE to CPA. Constitution to career skills.
          </p>
          <p className="text-aubergine/40 text-sm mb-10">Built for Kenya · Free · No Ads</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/dashboard" className="bg-aubergine text-offwhite font-semibold px-8 py-4 rounded-sm hover:bg-aubergine/90 transition-colors text-sm text-center">
              Start Learning Free
            </Link>
            <Link href="/cbc" className="border-2 border-aubergine/20 text-aubergine px-8 py-4 rounded-sm hover:border-saffron hover:text-saffron transition-colors text-sm text-center">
              Explore CBC Guides
            </Link>
          </div>
        </div>
      </div>

      {/* Saffron divider band */}
      <div className="bg-saffron px-6 md:px-12 py-6">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-6 justify-between items-center">
          {[["19","KCSE Set Books"],["60+","CBC Activities"],["27","Industry Topics"],["18","Exam Qualifications"],["70k+","Free Books"],["47","Counties Served"]].map(([num, label]) => (
            <div key={label} className="text-center">
              <p className="font-serif text-2xl text-aubergine font-semibold">{num}</p>
              <p className="text-aubergine/70 text-xs">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* One family every need */}
      <div className="px-6 md:px-12 py-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="ff-section-eyebrow text-center mb-2">Who This Is For</p>
          <h2 className="font-serif text-3xl text-aubergine text-center font-light mb-2">One family. Every need.</h2>
          <p className="text-[#5A4060] text-sm text-center font-light mb-10">Every member of a Kenyan family at a different stage — one platform serves them all.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {FAMILY.map((f, i) => (
              <div key={i} className="bg-offwhite border border-aubergine/[0.06] rounded-sm p-4 hover:border-saffron/40 transition-colors">
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
            <Link key={i} href={f.href} className="bg-white border border-aubergine/[0.06] p-6 rounded-sm hover:-translate-y-1 hover:shadow-lg hover:border-saffron/30 transition-all duration-300 group block">
              <div className="text-4xl mb-4">{f.icon}</div>
              <span className="text-saffron text-xs font-medium">{f.tag}</span>
              <h3 className="font-serif text-xl text-aubergine font-semibold mt-1 mb-2">{f.title}</h3>
              <p className="text-sm text-[#5A4060] font-light leading-relaxed">{f.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Constitution CTA — aubergine used sparingly here for impact */}
      <div className="mx-6 md:mx-12 mb-16 bg-aubergine rounded-sm p-10 max-w-5xl md:mx-auto">
        <div className="max-w-2xl">
          <p className="text-saffron text-xs uppercase tracking-widest mb-3">New on Focus Fora</p>
          <h2 className="font-serif text-3xl text-offwhite font-light mb-3">Know Your Constitutional Rights</h2>
          <p className="text-offwhite/70 text-sm font-light mb-6 leading-relaxed">Kenya Constitution 2010 explained in plain English — searchable by article, chapter or right. For every citizen, student, lawyer and civic educator.</p>
          <Link href="/constitution" className="bg-saffron text-aubergine font-semibold px-8 py-3 rounded-sm hover:bg-saffron/90 transition-colors text-sm inline-block">
            Read the Constitution
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 md:px-12 py-8 border-t border-aubergine/[0.08] text-center">
        <p className="font-serif text-xl text-aubergine mb-1">Focus<span className="text-saffron">Fora</span></p>
        <p className="text-[#5A4060] text-xs mb-4">Kenya Learning Platform · Free · No Ads · Built for Every Kenyan</p>
        <div className="flex flex-wrap justify-center gap-4">
          {[["CBC","/cbc"],["KCSE","/setbooks"],["International","/international"],["Schools","/schools"],["Industry","/industry"],["Exams","/exams"],["Constitution","/constitution"],["Books","/books"]].map(([label,href]) => (
            <Link key={href} href={href} className="text-xs text-[#5A4060] hover:text-saffron transition-colors">{label}</Link>
          ))}
        </div>
      </div>

    </div>
  );
}
