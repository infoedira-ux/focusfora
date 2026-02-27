"use client";
import Link from "next/link";

const issues = [
  { id: 1, title: "Issue 01", subtitle: "The Design Edition", desc: "Exploring the intersection of art, design and innovation in East Africa.", color: "bg-aubergine" },
  { id: 2, title: "Issue 02", subtitle: "The Innovation Edition", desc: "How Kenyan creatives are redefining what's possible with technology.", color: "bg-saffron" },
  { id: 3, title: "Issue 03", subtitle: "The Culture Edition", desc: "Stories from the heart of Nairobi's creative scene.", color: "bg-aubergine-mid" },
];

export default function MagazinePage() {
  return (
    <div className="min-h-screen bg-offwhite">
      <nav className="bg-aubergine px-6 md:px-12 py-4 flex justify-between items-center">
        <Link href="/dashboard" className="font-serif text-xl text-offwhite">Focus<span className="text-saffron">Fora</span></Link>
        <Link href="/dashboard" className="text-offwhite/60 text-xs hover:text-saffron transition-colors uppercase tracking-wider">← Dashboard</Link>
      </nav>

      <div className="px-6 md:px-12 py-10 max-w-5xl mx-auto">
        <p className="ff-section-eyebrow mb-2">Vanva Innovations</p>
        <h1 className="font-serif text-4xl text-aubergine font-light mb-2">Publications</h1>
        <p className="text-[#5A4060] text-sm font-light mb-10">Our magazine series exploring design, innovation and culture in East Africa.</p>

        <div className="grid md:grid-cols-3 gap-6">
          {issues.map(issue => (
            <div key={issue.id} className="group cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <div className={`${issue.color} rounded-sm aspect-[3/4] flex items-end p-6 mb-4 shadow-xl shadow-aubergine/20`}>
                <div>
                  <div className="text-offwhite/50 text-xs uppercase tracking-widest mb-1">Vanva Magazine</div>
                  <div className={`font-serif text-2xl font-light mb-1 ${issue.color === 'bg-saffron' ? 'text-aubergine' : 'text-offwhite'}`}>{issue.title}</div>
                  <div className={`font-serif text-sm italic ${issue.color === 'bg-saffron' ? 'text-aubergine/70' : 'text-offwhite/70'}`}>{issue.subtitle}</div>
                </div>
              </div>
              <p className="text-xs text-[#5A4060] font-light mb-3">{issue.desc}</p>
              <button className="ff-btn-primary text-xs py-2 px-4 w-full">
                Read Issue {issue.id} →
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-offwhite-warm border border-aubergine/10 rounded-sm p-8 text-center">
          <p className="font-serif text-xl text-aubergine mb-2">PDFs coming soon</p>
          <p className="text-[#5A4060] text-sm font-light">Upload your 3 PDF issues and they'll appear here as fully readable magazines.</p>
        </div>
      </div>
    </div>
  );
}
