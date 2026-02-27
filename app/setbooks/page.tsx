"use client";
import { useState } from "react";
import Link from "next/link";

const SETBOOKS = [
  // Novels
  { id: "river-between", title: "The River Between", author: "Ngũgĩ wa Thiong'o", year: "1965", emoji: "🌊", category: "Novel", era: "60s-80s" },
  { id: "grain-of-wheat", title: "A Grain of Wheat", author: "Ngũgĩ wa Thiong'o", year: "1967", emoji: "🌾", category: "Novel", era: "60s-80s" },
  { id: "weep-not-child", title: "Weep Not, Child", author: "Ngũgĩ wa Thiong'o", year: "1964", emoji: "😢", category: "Novel", era: "60s-80s" },
  { id: "petals-of-blood", title: "Petals of Blood", author: "Ngũgĩ wa Thiong'o", year: "1977", emoji: "🌺", category: "Novel", era: "60s-80s" },
  { id: "african-child", title: "The African Child", author: "Camara Laye", year: "1953", emoji: "👦🏾", category: "Novel", era: "60s-80s" },
  { id: "ole-kulet", title: "Blossoms of the Savannah", author: "Henry Ole Kulet", year: "2008", emoji: "🌸", category: "Novel", era: "2000s+" },
  { id: "coming-apart", title: "Coming Apart", author: "Margaret Ogola", year: "2004", emoji: "💔", category: "Novel", era: "2000s+" },
  { id: "silent-song", title: "The Silent Song", author: "Various", year: "2010s", emoji: "🎵", category: "Novel", era: "2000s+" },
  { id: "father-of-sins", title: "Father of Sins", author: "John Lara", year: "2010s", emoji: "⛪", category: "Novel", era: "2000s+" },
  // Plays
  { id: "caucasian-chalk", title: "The Caucasian Chalk Circle", author: "Bertolt Brecht", year: "1944", emoji: "🎭", category: "Play", era: "60s-80s" },
  { id: "a-man-for-all", title: "A Man for All Seasons", author: "Robert Bolt", year: "1960", emoji: "⚖️", category: "Play", era: "60s-80s" },
  { id: "the-government-inspector", title: "The Government Inspector", author: "Nikolai Gogol", year: "1836", emoji: "🎩", category: "Play", era: "60s-80s" },
  { id: "sinners", title: "Sinners", author: "John Lara", year: "2010s", emoji: "😈", category: "Play", era: "2000s+" },
  { id: "inheritance", title: "Inheritance", author: "David Mulwa", year: "2004", emoji: "👑", category: "Play", era: "2000s+" },
  { id: "memories-we-lost", title: "Memories We Lost", author: "Various", year: "2016", emoji: "🧠", category: "Short Stories", era: "2000s+" },
  // Poetry
  { id: "poetry-oral", title: "Oral Poetry", author: "Various African Poets", year: "Various", emoji: "📜", category: "Poetry", era: "60s-80s" },
  { id: "poetry-collection", title: "Poems from East Africa", author: "Cook & Rubadiri", year: "1971", emoji: "✍️", category: "Poetry", era: "60s-80s" },
];

const CATEGORIES = ["All", "Novel", "Play", "Poetry", "Short Stories"];
const ERAS = ["All Eras", "60s-80s", "2000s+"];

export default function SetbooksPage() {
  const [category, setCategory] = useState("All");
  const [era, setEra] = useState("All Eras");
  const [search, setSearch] = useState("");

  const filtered = SETBOOKS.filter(b => {
    const matchCat = category === "All" || b.category === category;
    const matchEra = era === "All Eras" || b.era === era;
    const matchSearch = !search || 
      b.title.toLowerCase().includes(search.toLowerCase()) || 
      b.author.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchEra && matchSearch;
  });

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
        <p className="ff-section-eyebrow mb-2">Kenya Literature Bureau · KNEC</p>
        <h1 className="font-serif text-4xl text-aubergine font-light mb-2">Set Books</h1>
        <p className="text-[#5A4060] text-sm font-light mb-2">
          Chapter summaries, themes, character analysis, essay questions and exam quotes.
        </p>
        <p className="text-saffron text-xs font-medium mb-8">
          ✦ For current students and nostalgic alumni — every generation covered
        </p>

        {/* Search and filters */}
        <div className="flex flex-col md:flex-row gap-3 mb-6">
          <input value={search} onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by title or author..."
            className="flex-1 border border-aubergine/20 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-saffron bg-white" />
        </div>

        <div className="flex flex-wrap gap-2 mb-3">
          {CATEGORIES.map(c => (
            <button key={c} onClick={() => setCategory(c)}
              className={`text-xs font-medium px-4 py-2 rounded-sm transition-all ${
                category === c ? "bg-aubergine text-offwhite" : "bg-white border border-aubergine/10 text-[#5A4060] hover:border-aubergine/30"
              }`}>
              {c}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {ERAS.map(e => (
            <button key={e} onClick={() => setEra(e)}
              className={`text-xs font-medium px-4 py-2 rounded-sm transition-all ${
                era === e ? "bg-saffron text-aubergine" : "bg-white border border-aubergine/10 text-[#5A4060] hover:border-aubergine/30"
              }`}>
              {e}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(book => (
            <Link key={book.id} href={`/setbooks/${book.id}`}
              className="bg-white p-5 rounded-sm border border-aubergine/[0.06] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">{book.emoji}</span>
                <div className="flex gap-1">
                  <span className="text-[10px] bg-aubergine/5 text-aubergine px-2 py-0.5 rounded-sm">{book.category}</span>
                  <span className="text-[10px] bg-saffron-pale text-saffron px-2 py-0.5 rounded-sm">{book.era}</span>
                </div>
              </div>
              <h3 className="font-serif text-base text-aubergine font-semibold mb-1 leading-tight">{book.title}</h3>
              <p className="text-xs text-[#5A4060] mb-3">{book.author} · {book.year}</p>
              <div className="grid grid-cols-2 gap-1 mb-3">
                {["Summaries", "Themes", "Characters", "Essays"].map(f => (
                  <span key={f} className="text-[10px] text-aubergine/50 flex items-center gap-1">
                    <span className="text-saffron">✓</span> {f}
                  </span>
                ))}
              </div>
              <div className="text-saffron text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Study now →
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="font-serif text-xl text-aubergine mb-2">No books found</p>
            <p className="text-[#5A4060] text-sm">Try a different search or filter</p>
          </div>
        )}

        {/* Nostalgia banner */}
        <div className="mt-12 bg-aubergine rounded-sm p-8">
          <h2 className="font-serif text-2xl text-offwhite mb-2">📚 Did you study these?</h2>
          <p className="text-offwhite/60 text-sm font-light mb-4">
            Revisit the books that shaped your education. Whether you studied them in 1985 or 2024 — the themes, the characters and the essays are all here.
          </p>
          <div className="flex flex-wrap gap-2">
            {["The River Between", "Weep Not Child", "Caucasian Chalk Circle", "A Grain of Wheat"].map(t => (
              <span key={t} className="text-xs bg-white/10 text-offwhite px-3 py-1 rounded-sm">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
