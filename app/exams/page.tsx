"use client";
import { useState } from "react";
import Link from "next/link";

// Full professional exams - rebuilt
const CATS = [];

export default function ExamsPage() {
  const [activeCat, setActiveCat] = useState<string|null>(null);
  return (
    <div className="min-h-screen bg-offwhite">
      <nav className="bg-aubergine px-6 md:px-12 py-4 flex justify-between items-center">
        <Link href="/dashboard" className="font-serif text-xl text-offwhite">Focus<span className="text-saffron">Fora</span></Link>
        <Link href="/dashboard" className="text-offwhite/60 text-xs">Dashboard</Link>
      </nav>
      <div className="px-6 md:px-12 py-10 max-w-5xl mx-auto">
        <p className="ff-section-eyebrow mb-2">Professional Qualifications</p>
        <h1 className="font-serif text-4xl text-aubergine font-light mb-2">Professional Exams</h1>
        <p className="text-[#5A4060] text-sm font-light mb-10">Complete guides for every major professional qualification in Kenya.</p>
        <p className="text-saffron text-sm">Full content coming — CPA ACCA CFA CIPS Law Nursing HR Banking ICT Engineering</p>
      </div>
    </div>
  );
}