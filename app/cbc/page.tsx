"use client";
import Link from "next/link";

const grades = [1,2,3,4,5,6,7,8,9];
const strands = [
  { name: "Communication Skills", icon: "🗣️" },
  { name: "Mathematical Activities", icon: "🔢" },
  { name: "Environmental Activities", icon: "🌍" },
  { name: "Creative Arts", icon: "🎨" },
  { name: "Physical Education", icon: "⚽" },
  { name: "Religious Education", icon: "✝️" },
  { name: "Life Skills", icon: "💡" },
];

export default function CBCPage() {
  return (
    <div className="min-h-screen bg-offwhite">
      <nav className="bg-aubergine px-6 md:px-12 py-4 flex justify-between items-center">
        <Link href="/dashboard" className="font-serif text-xl text-offwhite">Focus<span className="text-saffron">Fora</span></Link>
        <Link href="/dashboard" className="text-offwhite/60 text-xs hover:text-saffron transition-colors uppercase tracking-wider">← Dashboard</Link>
      </nav>

      <div className="px-6 md:px-12 py-10 max-w-5xl mx-auto">
        <p className="ff-section-eyebrow mb-2">Competency Based Curriculum</p>
        <h1 className="font-serif text-4xl text-aubergine font-light mb-2">CBC Guides</h1>
        <p className="text-[#5A4060] text-sm font-light mb-10">Activity guides, parent tips and teacher notes for every grade and strand.</p>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-serif text-xl text-aubergine mb-4">Browse by Grade</h2>
            <div className="grid grid-cols-3 gap-3">
              {grades.map(g => (
                <button key={g} className="bg-white border border-aubergine/10 rounded-sm p-4 hover:border-saffron hover:bg-saffron-pale transition-all group">
                  <div className="font-serif text-2xl text-aubergine font-light">{g}</div>
                  <div className="text-xs text-[#5A4060] mt-1">Grade {g}</div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-serif text-xl text-aubergine mb-4">Browse by Strand</h2>
            <div className="space-y-2">
              {strands.map(s => (
                <button key={s.name} className="w-full flex items-center gap-3 bg-white border border-aubergine/10 rounded-sm p-4 hover:border-saffron transition-all text-left group">
                  <span className="text-xl">{s.icon}</span>
                  <span className="text-sm text-aubergine font-medium">{s.name}</span>
                  <span className="ml-auto text-aubergine/20 group-hover:text-saffron transition-colors">→</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 bg-aubergine rounded-sm p-8">
          <h2 className="font-serif text-2xl text-offwhite mb-2">For Parents 👨‍👩‍👧</h2>
          <p className="text-offwhite/60 text-sm font-light mb-4">Confused about CBC? You're not alone. We break it down simply so you can support your child at home.</p>
          <button className="bg-saffron text-aubergine text-xs font-medium px-6 py-3 rounded-sm uppercase tracking-wider hover:bg-saffron-light transition-colors">
            Parent Guide →
          </button>
        </div>
      </div>
    </div>
  );
}
