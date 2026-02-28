"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen grid md:grid-cols-2 items-center px-8 md:px-16 pt-28 pb-16 relative overflow-hidden bg-offwhite">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-saffron/[0.07] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-aubergine/[0.05] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-xl animate-fade-up">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-6 h-px bg-saffron" />
          <span className="ff-section-eyebrow">A Vanva Innovations Product</span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl font-light text-aubergine leading-[1.1] mb-6">
          Where Kenyan<br />
          Minds <em className="text-saffron not-italic">Gather</em><br />
          and Grow
        </h1>

        <p className="text-[#5A4060] text-lg leading-relaxed mb-8 font-light max-w-md">
          KCSE set books, AI practice questions, industry knowledge and 70,000+ free books — one beautiful platform built for Kenya.
        </p>

        <div className="flex gap-4 items-center flex-wrap">
          <Link href="/register" className="ff-btn-primary">
            Start Learning Free
          </Link>
          <Link href="#features" className="text-aubergine text-sm font-medium flex items-center gap-2 group">
            See what's inside
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap gap-4 text-xs text-[#5A4060]/60 font-medium uppercase tracking-wider">
          <span>✦ KCSE Set Books</span>
          <span>✦ AI Quiz Generator</span>
          <span>✦ Industry Guides</span>
          <span>✦ Free Forever</span>
        </div>
      </div>

      {/* Orbit Visual */}
      <div className="hidden md:flex justify-center items-center relative">
        <div className="relative w-[420px] h-[420px]">
          <div className="absolute inset-0 m-auto w-[160px] h-[160px] rounded-full border border-aubergine/10" style={{top:'50%',left:'50%',transform:'translate(-50%,-50%)'}} />
          <div className="absolute rounded-full border border-dashed border-saffron/20 animate-spin-slow" style={{width:'260px',height:'260px',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}} />
          <div className="absolute rounded-full border border-aubergine/[0.07]" style={{width:'380px',height:'380px',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}} />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] rounded-full bg-aubergine flex items-center justify-center shadow-2xl shadow-aubergine/40">
            <span className="font-serif text-saffron text-sm italic text-center leading-tight">Focus<br/>Fora</span>
          </div>

          <div className="absolute top-4 -left-8 bg-white rounded-lg shadow-lg shadow-aubergine/10 p-3 animate-float">
            <div className="text-saffron text-[10px] uppercase tracking-wider font-medium mb-1">Set Books</div>
            <div className="font-serif text-aubergine text-sm">River Between ✓</div>
          </div>

          <div className="absolute bottom-8 -right-6 bg-white rounded-lg shadow-lg shadow-aubergine/10 p-3 animate-float [animation-delay:2s]">
            <div className="text-saffron text-[10px] uppercase tracking-wider font-medium mb-1">Quiz Generated</div>
            <div className="font-serif text-aubergine text-sm">10 questions ✓</div>
          </div>

          <div className="absolute top-1/2 -right-10 bg-aubergine rounded-lg p-3 animate-float [animation-delay:1s]">
            <div className="text-saffron text-[10px] uppercase tracking-wider font-medium mb-1">Streak</div>
            <div className="font-serif text-saffron-light text-sm">14 days 🔥</div>
          </div>

          <div className="absolute bottom-4 -left-10 bg-saffron rounded-lg p-3 animate-float [animation-delay:3s]">
            <div className="text-aubergine text-[10px] uppercase tracking-wider font-medium mb-1">Industry</div>
            <div className="font-serif text-aubergine text-sm">Corp Politics →</div>
          </div>
        </div>
      </div>
    </section>
  );
}
