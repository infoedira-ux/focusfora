"use client";
import { useState } from "react";
import Link from "next/link";

const subjects = [
  { name: "Mathematics", icon: "📐", papers: 12 },
  { name: "English", icon: "📖", papers: 10 },
  { name: "Kiswahili", icon: "🗣️", papers: 10 },
  { name: "Biology", icon: "🔬", papers: 8 },
  { name: "Chemistry", icon: "⚗️", papers: 8 },
  { name: "Physics", icon: "⚡", papers: 8 },
  { name: "History", icon: "🏛️", papers: 6 },
  { name: "Geography", icon: "🌍", papers: 6 },
  { name: "CRE", icon: "✝️", papers: 6 },
  { name: "Business Studies", icon: "💼", papers: 6 },
  { name: "Computer Studies", icon: "💻", papers: 6 },
  { name: "Agriculture", icon: "🌱", papers: 6 },
];

const years = [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014];

export default function RevisePage() {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  return (
    <div className="min-h-screen bg-offwhite">
      {/* Nav */}
      <nav className="bg-aubergine px-6 md:px-12 py-4 flex justify-between items-center">
        <Link href="/dashboard" className="font-serif text-xl text-offwhite">
          Focus<span className="text-saffron">Fora</span>
        </Link>
        <Link href="/dashboard" className="text-offwhite/60 text-xs hover:text-saffron transition-colors uppercase tracking-wider">
          ← Dashboard
        </Link>
      </nav>

      <div className="px-6 md:px-12 py-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <span className="ff-section-eyebrow block mb-2">KCSE Revision</span>
          <h1 className="font-serif text-4xl md:text-5xl text-aubergine font-light mb-3">
            Past Papers & <em className="text-saffron not-italic">Quizzes</em>
          </h1>
          <p className="text-[#5A4060] text-sm font-light max-w-xl">
            Access KCSE past papers from 2014 to 2023. Practice with AI-generated quizzes and get instant feedback.
          </p>
        </div>

        {/* Filter bar */}
        <div className="bg-white border border-aubergine/[0.08] rounded-sm p-5 mb-8 flex flex-wrap gap-4 items-end">
          <div className="flex-1 min-w-[180px]">
            <label className="block text-xs font-medium text-aubergine uppercase tracking-wider mb-2">Subject</label>
            <select value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full border border-aubergine/20 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-saffron bg-offwhite">
              <option value="">All Subjects</option>
              {subjects.map((s) => (
                <option key={s.name} value={s.name}>{s.name}</option>
              ))}
            </select>
          </div>
          <div className="flex-1 min-w-[140px]">
            <label className="block text-xs font-medium text-aubergine uppercase tracking-wider mb-2">Year</label>
            <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full border border-aubergine/20 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-saffron bg-offwhite">
              <option value="">All Years</option>
              {years.map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>
          <button className="ff-btn-primary px-6 py-2.5 text-xs">
            Search Papers
          </button>
        </div>

        {/* Subjects grid */}
        <div className="mb-12">
          <h2 className="font-serif text-2xl text-aubergine mb-5">Browse by Subject</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {subjects.map((subject) => (
              <button key={subject.name}
                onClick={() => setSelectedSubject(subject.name)}
                className={`p-4 rounded-sm border text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
                  selectedSubject === subject.name
                    ? "border-saffron bg-saffron-pale"
                    : "border-aubergine/[0.08] bg-white hover:border-aubergine/20"
                }`}>
                <div className="text-2xl mb-2">{subject.icon}</div>
                <div className="font-medium text-aubergine text-sm">{subject.name}</div>
                <div className="text-xs text-[#5A4060] mt-0.5">{subject.papers} papers</div>
              </button>
            ))}
          </div>
        </div>

        {/* Recent papers */}
        <div>
          <h2 className="font-serif text-2xl text-aubergine mb-5">Recent Papers</h2>
          <div className="space-y-3">
            {[
              { subject: "Mathematics", year: 2023, paper: "Paper 1", hasAnswers: true },
              { subject: "Mathematics", year: 2023, paper: "Paper 2", hasAnswers: true },
              { subject: "English", year: 2023, paper: "Paper 1", hasAnswers: true },
              { subject: "English", year: 2023, paper: "Paper 2", hasAnswers: false },
              { subject: "Biology", year: 2023, paper: "Paper 1", hasAnswers: true },
              { subject: "Chemistry", year: 2023, paper: "Paper 1", hasAnswers: true },
              { subject: "Physics", year: 2022, paper: "Paper 1", hasAnswers: true },
              { subject: "Kiswahili", year: 2022, paper: "Paper 1", hasAnswers: false },
            ]
            .filter(p => !selectedSubject || p.subject === selectedSubject)
            .filter(p => !selectedYear || p.year === parseInt(selectedYear))
            .map((paper, i) => (
              <div key={i}
                className="bg-white border border-aubergine/[0.08] rounded-sm p-4 flex items-center justify-between hover:border-aubergine/20 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-saffron-pale flex items-center justify-center text-lg">
                    {subjects.find(s => s.name === paper.subject)?.icon || "📄"}
                  </div>
                  <div>
                    <div className="font-medium text-aubergine text-sm">{paper.subject} — {paper.paper}</div>
                    <div className="text-xs text-[#5A4060] mt-0.5">KCSE {paper.year} {paper.hasAnswers ? "· Marking scheme included" : ""}</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  {paper.hasAnswers && (
                    <span className="ff-tag-saffron text-[10px]">Answers</span>
                  )}
                  <button className="ff-btn-primary text-xs px-4 py-2">
                    View Paper
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coming soon quiz banner */}
        <div className="mt-12 bg-aubergine rounded-sm p-8 text-center">
          <div className="font-serif text-2xl text-offwhite mb-2">AI Quiz Mode <span className="text-saffron">Coming Soon</span></div>
          <p className="text-offwhite/60 text-sm font-light">
            Our AI will generate custom quiz questions from any past paper topic. Practice smarter.
          </p>
        </div>
      </div>
    </div>
  );
}
