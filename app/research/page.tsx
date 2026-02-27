"use client";
import { useState } from "react";
import Link from "next/link";

export default function ResearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [searching, setSearching] = useState(false);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  async function handleSearch() {
    if (!query.trim()) return;
    setSearching(true);
    const res = await fetch(`https://export.arxiv.org/search/?query=${encodeURIComponent(query)}&start=0&max_results=12&searchtype=all`);
    const text = await res.text();
    const parser = new DOMParser();
    const xml = parser.parseFromString(text, "text/xml");
    const entries = Array.from(xml.querySelectorAll("entry"));
    const papers = entries.map(e => ({
      id: e.querySelector("id")?.textContent,
      title: e.querySelector("title")?.textContent?.trim(),
      summary: e.querySelector("summary")?.textContent?.trim(),
      authors: Array.from(e.querySelectorAll("author name")).map(a => a.textContent).slice(0, 3).join(", "),
      published: e.querySelector("published")?.textContent?.substring(0, 10),
      link: e.querySelector("id")?.textContent,
    }));
    setResults(papers);
    setSearching(false);
  }

  const suggestions = ["climate change Kenya", "machine learning Africa", "mobile health Kenya", "food security East Africa", "renewable energy Kenya", "education technology Africa"];

  return (
    <div className="min-h-screen bg-offwhite">
      <nav className="bg-aubergine px-6 md:px-12 py-4 flex justify-between items-center">
        <Link href="/dashboard" className="font-serif text-xl text-offwhite">Focus<span className="text-saffron">Fora</span></Link>
        <Link href="/dashboard" className="text-offwhite/60 text-xs hover:text-saffron transition-colors uppercase tracking-wider">← Dashboard</Link>
      </nav>

      <div className="px-6 md:px-12 py-10 max-w-4xl mx-auto">
        <p className="ff-section-eyebrow mb-2">Academic Research</p>
        <h1 className="font-serif text-4xl text-aubergine font-light mb-2">Research Library</h1>
        <p className="text-[#5A4060] text-sm font-light mb-8">Search millions of free research papers from arXiv. Read abstracts, access full PDFs.</p>

        <div className="flex gap-3 mb-4 max-w-xl">
          <input value={query} onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Search by topic, author or keyword..."
            className="flex-1 border border-aubergine/20 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-saffron bg-white" />
          <button onClick={handleSearch} disabled={searching} className="ff-btn-primary px-6 disabled:opacity-50">
            {searching ? "Searching..." : "Search"}
          </button>
        </div>

        {results.length === 0 && (
          <div className="mb-10">
            <p className="text-xs text-[#5A4060] mb-3 uppercase tracking-wider">Try these searches:</p>
            <div className="flex flex-wrap gap-2">
              {suggestions.map(s => (
                <button key={s} onClick={() => { setQuery(s); }}
                  className="ff-tag-saffron cursor-pointer hover:bg-saffron transition-colors">
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="space-y-4">
          {results.map((paper) => (
            <div key={paper.id} className="bg-white p-6 rounded-sm border border-aubergine/[0.06] hover:shadow-md transition-all">
              <h3 className="font-serif text-lg text-aubergine mb-1 leading-tight">{paper.title}</h3>
              <p className="text-xs text-saffron font-medium mb-1">{paper.authors}</p>
              <p className="text-xs text-[#5A4060]/60 mb-3">Published: {paper.published}</p>

              <p className={`text-sm text-[#5A4060] leading-relaxed ${expanded[paper.id!] ? "" : "line-clamp-3"}`}>
                {paper.summary}
              </p>

              <div className="mt-4 flex gap-3 items-center">
                <button onClick={() => setExpanded(p => ({ ...p, [paper.id!]: !p[paper.id!] }))}
                  className="text-xs text-aubergine font-medium hover:text-saffron transition-colors">
                  {expanded[paper.id!] ? "Show less ↑" : "Read full abstract ↓"}
                </button>
                <a href={paper.link?.replace("abs", "pdf")} target="_blank" rel="noopener noreferrer"
                  className="ff-btn-primary text-xs py-2 px-4">
                  View PDF →
                </a>
                <a href={paper.link!} target="_blank" rel="noopener noreferrer"
                  className="ff-btn-secondary text-xs py-2 px-4">
                  arXiv Page
                </a>
              </div>
            </div>
          ))}
        </div>

        {results.length > 0 && (
          <div className="mt-6 text-center">
            <p className="text-xs text-[#5A4060]/50">Showing {results.length} results from arXiv · All papers are free to access</p>
          </div>
        )}
      </div>
    </div>
  );
}
