"use client";
import Link from "next/link";

const exams = [
  { id: "cpa", title: "CPA Kenya", body: "KASNEB", icon: "📊", papers: 18, desc: "Certified Public Accountant — all sections and past papers" },
  { id: "acca", title: "ACCA", body: "ACCA Global", icon: "💹", papers: 24, desc: "Association of Chartered Certified Accountants" },
  { id: "cips", title: "CIPS", body: "CIPS Global", icon: "📦", papers: 12, desc: "Chartered Institute of Procurement & Supply" },
  { id: "cfa", title: "CFA", body: "CFA Institute", icon: "📈", papers: 8, desc: "Chartered Financial Analyst — all three levels" },
  { id: "cik", title: "CIK", body: "Insurance Institute", icon: "🛡️", papers: 10, desc: "Chartered Insurance of Kenya" },
  { id: "icpak", title: "ICPAK CPD", body: "ICPAK", icon: "🏛️", papers: 6, desc: "Continuing Professional Development resources" },
];

export default function ExamsPage() {
  return (
    <div className="min-h-screen bg-offwhite">
      <nav className="bg-aubergine px-6 md:px-12 py-4 flex justify-between items-center">
        <Link href="/dashboard" className="font-serif text-xl text-offwhite">Focus<span className="text-saffron">Fora</span></Link>
        <Link href="/dashboard" className="text-offwhite/60 text-xs hover:text-saffron transition-colors uppercase tracking-wider">← Dashboard</Link>
      </nav>

      <div className="px-6 md:px-12 py-10 max-w-5xl mx-auto">
        <p className="ff-section-eyebrow mb-2">Professional Qualifications</p>
        <h1 className="font-serif text-4xl text-aubergine font-light mb-2">Professional Exams</h1>
        <p className="text-[#5A4060] text-sm font-light mb-10">Simplified notes, past papers and smart quizzes for every major professional qualification in Kenya.</p>

        <div className="grid md:grid-cols-2 gap-4">
          {exams.map(exam => (
            <div key={exam.id} className="bg-white p-6 rounded-sm border border-aubergine/[0.06] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="text-4xl">{exam.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-serif text-xl text-aubergine font-semibold">{exam.title}</h3>
                    <span className="ff-tag-saffron">{exam.papers} papers</span>
                  </div>
                  <p className="text-xs text-[#5A4060] mb-1">{exam.body}</p>
                  <p className="text-sm text-[#5A4060] font-light">{exam.desc}</p>
                </div>
              </div>
              <div className="mt-4 flex gap-3">
                <button className="ff-btn-primary text-xs py-2 px-4">Past Papers</button>
                <button className="ff-btn-secondary text-xs py-2 px-4">Study Notes</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
