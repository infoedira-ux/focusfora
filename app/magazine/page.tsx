"use client";
import { useState } from "react";
import Link from "next/link";

const issues = [
  {
    id: 1,
    title: "Issue 01",
    subtitle: "The First Edition",
    desc: "The debut issue from Vanva Innovations — exploring design, art and innovation in East Africa.",
    color: "bg-aubergine",
    textColor: "text-offwhite",
    embedUrl: "https://drive.google.com/file/d/11xafaxzd1ZZRPjVPjo5lyRhi8s04UDdx/preview",
  },
  {
    id: 2,
    title: "Issue 02",
    subtitle: "The Second Edition",
    desc: "Volume two — deeper into the stories shaping Kenya's creative and innovation scene.",
    color: "bg-saffron",
    textColor: "text-aubergine",
    embedUrl: "https://drive.google.com/file/d/11LuA_sxnpqTZ8Dfc_GHZrvjTIbM4CDb3/preview",
  },
  {
    id: 3,
    title: "Issue 03",
    subtitle: "The Third Edition",
    desc: "The latest issue — culture, technology and the future of East African creativity.",
    color: "bg-aubergine-mid",
    textColor: "text-offwhite",
    embedUrl: "https://drive.google.com/file/d/1GLnMdvXPKlrIfI5glmB5ULR_bFF3WQqm/preview",
  },
];

export default function MagazinePage() {
  const [activeIssue, setActiveIssue] = useState<number | null>(null);

  const current = issues.find(i => i.id === activeIssue);

  if (activeIssue && current) {
    return (
      <div className="min-h-screen bg-[#1E0A28] flex flex-col">
        <nav className="px-6 py-4 flex justify-between items-center bg-aubergine">
          <Link href="/dashboard" className="font-serif text-xl text-offwhite">
            Focus<span className="text-saffron">Fora</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-offwhite/60 text-xs font-serif italic">{current.title} — {current.subtitle}</span>
            <button onClick={() => setActiveIssue(null)}
              className="text-offwhite/60 text-xs hover:text-saffron transition-colors uppercase tracking-wider">
              ← Back to Magazine
            </button>
          </div>
        </nav>
        <div className="flex-1">
          <iframe
            src={current.embedUrl}
            className="w-full h-full min-h-[85vh]"
            allow="autoplay"
            title={`${current.title} — Vanva Magazine`}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-offwhite">
      <nav className="bg-aubergine px-6 md:px-12 py-4 flex justify-between items-center">
        <Link href="/dashboard" className="font-serif text-xl text-offwhite">
          Focus<span className="text-saffron">Fora</span>
        </Link>
        <Link href="/dashboard" className="text-offwhite/60 text-xs hover:text-saffron transition-colors uppercase tracking-wider">
          ← Dashboard
        </Link>
      </nav>

      <div className="px-6 md:px-12 py-10 max-w-5xl mx-auto">
        <p className="ff-section-eyebrow mb-2">Vanva Innovations</p>
        <h1 className="font-serif text-4xl text-aubergine font-light mb-2">Publications</h1>
        <p className="text-[#5A4060] text-sm font-light mb-12">
          Our magazine series exploring design, innovation and culture in East Africa.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {issues.map(issue => (
            <div key={issue.id} className="group cursor-pointer" onClick={() => setActiveIssue(issue.id)}>
              {/* Magazine cover */}
              <div className={`${issue.color} rounded-sm aspect-[3/4] flex flex-col justify-between p-6 mb-4 shadow-xl shadow-aubergine/20 hover:-translate-y-2 transition-all duration-300`}>
                <div className="flex justify-between items-start">
                  <div className={`text-[10px] font-medium uppercase tracking-[0.15em] ${issue.textColor} opacity-60`}>
                    Vanva Magazine
                  </div>
                  <div className={`text-[10px] font-medium uppercase tracking-wider px-2 py-1 rounded-sm ${
                    issue.color === 'bg-saffron' ? 'bg-aubergine text-offwhite' : 'bg-saffron text-aubergine'
                  }`}>
                    Free
                  </div>
                </div>

                <div>
                  <div className={`font-serif text-5xl font-light mb-1 opacity-10 ${issue.textColor}`}>✦</div>
                  <div className={`font-serif text-2xl font-light mb-1 ${issue.textColor}`}>{issue.title}</div>
                  <div className={`font-serif text-sm italic opacity-70 ${issue.textColor}`}>{issue.subtitle}</div>
                </div>
              </div>

              <p className="text-xs text-[#5A4060] font-light mb-4 leading-relaxed">{issue.desc}</p>

              <button
                onClick={() => setActiveIssue(issue.id)}
                className="ff-btn-primary text-xs py-3 px-6 w-full group-hover:bg-saffron group-hover:text-aubergine transition-all">
                Read Issue {issue.id} →
              </button>
            </div>
          ))}
        </div>

        {/* About Vanva */}
        <div className="mt-16 border-t border-aubergine/10 pt-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="ff-section-eyebrow mb-3">About the Publisher</p>
            <h2 className="font-serif text-3xl text-aubergine font-light mb-3">Vanva Innovations</h2>
            <p className="text-[#5A4060] text-sm font-light leading-relaxed">
              Vanva Innovations is a Nairobi-based creative studio specialising in art, design and digital innovation.
              Our publications celebrate the stories, people and ideas shaping East Africa's creative future.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {["Design", "Innovation", "Culture", "Technology", "Art", "Kenya"].map(tag => (
              <div key={tag} className="bg-aubergine/5 border border-aubergine/10 rounded-sm p-3 text-center">
                <span className="text-xs text-aubergine font-medium">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
