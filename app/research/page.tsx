"use client";
import { useState } from "react";
import Link from "next/link";

export default function ResearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [searching, setSearching] = useState(false);
  const [simplified, setSimplified] = useState<Record<string, string>>({});
  const [simplifying, setSimplifying] = useState<Record<string, boolean>>({});

  async function handleSearch() {
    if (!query.trim()) return;
    setSearching(true);
    const res = await fetch(`https://export.arxiv.org/search/?query=${encodeURIComponent(query)}&start=0&max_results=10&searchtype=all`);
    const text = await res.text();
    const parser = new DOMParser();
    const xml = parser.parseFromString(text, "text/xml");
    const entries = Array.from(xml.querySelectorAll("entry"));
    const papers = entries.map(e => ({
      id: e.querySelector("id")?.textContent,
      title: e.querySelector("title")?.textContent?.trim(),
      summary: e.querySelector("summary")?.textContent?.trim(),
      authors: Array.from(e.querySelectorAll("author name")).map(a => a.textContent).join(", "),
      published: e.querySelector("published")?.textContent?.substring(0, 10),
    }));
    setResults(papers);
    setSearching(false);
  }

  async function handleSimplify(paper: any) {
    setSimplifying(p => ({ ...p, [paper.id]: true }));
    const res = await fetch("/api/ai/simplify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: paper.summary, title: paper.title }),
    });
    const data = await res.json();
    setSimplified(p => ({ ...p, [paper.id]: data.result }));
    setSimplifying(p => ({ ...p, [paper.id]: false }));
  }

  return (
    <div className="min-h-screen bg-offwhite">
      <nav className="bg-aubergine px-6 md:px-12 py-4 flex justify-between items-center">
        <Link href="/dashboard" className="font-serif text-xl text-offwhite">Focus<span className="text-saffron">Fora</span></Link>
        <Link href="/dashboard" className="text-offwhite/60 text-xs hover:text-saffron transition-colors uppercase tracking-wider">← Dashboard</Link>
      </nav>

      <div className="px-6 md:px-12 py-10 max-w-4xl mx-auto">
        <p className="ff-section-eyebrow mb-2">Academic Research</p>
        <h1 className="font-serif text-4xl text-aubergine font-light mb-2">Research Simplified</h1>
        <p className="text-[#5A4060] text-sm font-light mb-8">Search millions of research papers. Click "Simplify" to get a plain English explanation powered by AI.</p>

        <div className="flex gap-3 mb-10 max-w-xl">
          <input value={query} onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="e.g. climate change Kenya, machine learning..."
            className="flex-1 border border-aubergine/20 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-saffron bg-white" />
          <button onClick={handleSearch} disabled={searching} className="ff-btn-primary px-6 disabled:opacity-50">
            {searching ? "..." : "Search"}
          </button>
        </div>

        <div className="space-y-4">
          {results.map((paper) => (
            <div key={paper.id} className="bg-white p-6 rounded-sm border border-aubergine/[0.06]">
              <h3 className="font-serif text-lg text-aubergine mb-1">{paper.title}</h3>
              <p className="text-xs text-[#5A4060] mb-3">{paper.authors} · {paper.published}</p>
              {simplified[paper.id] ? (
                <div className="bg-saffron-pale p-4 rounded-sm mb-3">
                  <p className="text-xs text-saffron font-medium uppercase tracking-wider mb-2">✦ AI Simplified</p>
                  <p className="text-sm text-aubergine leading-relaxed">{simplified[paper.id]}</p>
                </div>
              ) : (
                <p className="text-sm text-[#5A4060] leading-relaxed mb-3 line-clamp-3">{paper.summary}</p>
              )}
              <button onClick={() => handleSimplify(paper)} disabled={simplifying[paper.id]}
                className="ff-btn-primary text-xs py-2 px-4 disabled:opacity-50">
                {simplifying[paper.id] ? "Simplifying..." : "✦ Simplify with AI"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
