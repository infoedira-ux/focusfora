"use client";
import { useState } from "react";
import Link from "next/link";

const SUBJECTS = [
  "Mathematics", "English", "Kiswahili", "Biology", "Chemistry",
  "Physics", "History", "Geography", "CRE", "IRE", "Business Studies",
  "Economics", "Agriculture", "Computer Studies", "Home Science"
];

const YEARS = [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014];

const RESOURCES = [
  {
    title: "KNEC Past Papers",
    desc: "Official Kenya National Examinations Council past papers",
    url: "https://www.knec-portal.ac.ke",
    icon: "📋",
    tag: "Official"
  },
  {
    title: "Elimu Library",
    desc: "Free KCSE and KCPE past papers and revision materials",
    url: "https://elimulib.com",
    icon: "📚",
    tag: "Free"
  },
  {
    title: "Muthurwa Marketplace",
    desc: "KCSE revision books and past papers",
    url: "https://muthurwa.com",
    icon: "🛒",
    tag: "Resource"
  },
  {
    title: "Kenya Education Cloud",
    desc: "Free learning resources from the Ministry of Education",
    url: "https://kec.ac.ke",
    icon: "☁️",
    tag: "Free"
  },
  {
    title: "Longhorn Publishers",
    desc: "Revision books and study guides for all subjects",
    url: "https://longhornpublishers.com",
    icon: "📖",
    tag: "Resource"
  },
  {
    title: "Viusasa Elimu",
    desc: "Video lessons and revision content in Swahili",
    url: "https://viusasa.com",
    icon: "🎥",
    tag: "Video"
  },
];

export default function RevisePage() {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  return (
    <div className="min-h-screen bg-offwhite">
      <nav className="bg-aubergine px-6 md:px-12 py-4 flex justify-between items-center">
        <Link href="/dashboard" className="font-serif text-xl text-offwhite">Focus<span className="text-saffron">Fora</span></Link>
        <Link href="/dashboard" className="text-offwhite/60 text-xs hover:text-saffron transition-colors uppercase tracking-wider">← Dashboard</Link>
      </nav>

      <div className="px-6 md:px-12 py-10 max-w-5xl mx-auto">
        <p className="ff-section-eyebrow mb-2">KCSE Revision</p>
        <h1 className="font-serif text-4xl text-aubergine font-light mb-2">Revise</h1>
        <p className="text-[#5A4060] text-sm font-light mb-10">Past papers, revision resources and study materials for KCSE.</p>

        {/* Filter */}
        <div className="bg-white p-6 rounded-sm border border-aubergine/[0.06] mb-8">
          <h2 className="font-serif text-xl text-aubergine mb-4">Find Past Papers</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs font-medium text-aubergine uppercase tracking-wider mb-2">Subject</label>
              <select value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full border border-aubergine/20 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-saffron bg-offwhite">
                <option value="">All Subjects</option>
                {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-aubergine uppercase tracking-wider mb-2">Year</label>
              <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full border border-aubergine/20 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-saffron bg-offwhite">
                <option value="">All Years</option>
                {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>
          </div>
          <a href={`https://www.knec-portal.ac.ke`} target="_blank" rel="noopener noreferrer"
            className="ff-btn-primary text-sm inline-block">
            Search KNEC Portal →
          </a>
        </div>

        {/* Subject grid */}
        <h2 className="font-serif text-2xl text-aubergine mb-4">Browse by Subject</h2>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-10">
          {SUBJECTS.map(subject => (
            <button key={subject}
              onClick={() => setSelectedSubject(subject)}
              className={`p-3 rounded-sm border text-xs font-medium transition-all duration-200 text-left ${
                selectedSubject === subject
                  ? "border-saffron bg-saffron-pale text-aubergine"
                  : "border-aubergine/10 bg-white text-[#5A4060] hover:border-aubergine/30"
              }`}>
              {subject}
            </button>
          ))}
        </div>

        {/* Free resources */}
        <h2 className="font-serif text-2xl text-aubergine mb-4">Free Revision Resources</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {RESOURCES.map(r => (
            <a key={r.title} href={r.url} target="_blank" rel="noopener noreferrer"
              className="bg-white p-5 rounded-sm border border-aubergine/[0.06] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group flex gap-4">
              <div className="text-3xl">{r.icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-serif text-base text-aubergine font-semibold">{r.title}</h3>
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded-sm ${r.tag === "Free" ? "bg-saffron text-aubergine" : "bg-aubergine text-offwhite"}`}>
                    {r.tag}
                  </span>
                </div>
                <p className="text-xs text-[#5A4060] font-light">{r.desc}</p>
              </div>
              <span className="text-aubergine/20 group-hover:text-saffron transition-colors self-center">→</span>
            </a>
          ))}
        </div>

        {/* Quick tips */}
        <div className="bg-aubergine rounded-sm p-8">
          <h2 className="font-serif text-2xl text-offwhite mb-4">✦ Revision Tips</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { tip: "Start with past papers", desc: "Do at least 5 years of past papers per subject before your exam." },
              { tip: "Time yourself", desc: "Practice under exam conditions. 2.5 hours for most papers." },
              { tip: "Mark your own work", desc: "Use marking schemes to understand exactly what examiners want." },
            ].map(t => (
              <div key={t.tip} className="bg-white/5 rounded-sm p-4">
                <div className="text-saffron font-medium text-sm mb-1">✦ {t.tip}</div>
                <div className="text-offwhite/60 text-xs font-light">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
