"use client";
import { useState } from "react";
import Link from "next/link";

const FEATURED_BOOKS = [
  { id: 2701, title: "Moby Dick", author: "Herman Melville", emoji: "🐋" },
  { id: 1342, title: "Pride and Prejudice", author: "Jane Austen", emoji: "💌" },
  { id: 84, title: "Frankenstein", author: "Mary Shelley", emoji: "⚡" },
  { id: 11, title: "Alice in Wonderland", author: "Lewis Carroll", emoji: "🐇" },
  { id: 1661, title: "The Adventures of Sherlock Holmes", author: "Arthur Conan Doyle", emoji: "🔍" },
  { id: 98, title: "A Tale of Two Cities", author: "Charles Dickens", emoji: "🏙️" },
  { id: 1952, title: "The Yellow Wallpaper", author: "Charlotte Perkins Gilman", emoji: "🌿" },
  { id: 345, title: "Dracula", author: "Bram Stoker", emoji: "🧛" },
  { id: 1080, title: "The Odyssey", author: "Homer", emoji: "⚓" },
  { id: 2542, title: "A Doll's House", author: "Henrik Ibsen", emoji: "🏠" },
  { id: 76, title: "Adventures of Huckleberry Finn", author: "Mark Twain", emoji: "🚣" },
  { id: 5200, title: "Metamorphosis", author: "Franz Kafka", emoji: "🪲" },
];

export default function ReadPage() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [searching, setSearching] = useState(false);

  async function handleSearch() {
    if (!search.trim()) return;
    setSearching(true);
    const res = await fetch(`https://gutendex.com/books?search=${encodeURIComponent(search)}`);
    const data = await res.json();
    setResults(data.results);
    setSearching(false);
  }

  return (
    <div className="min-h-screen bg-offwhite">
      <nav className="bg-aubergine px-6 md:px-12 py-4 flex justify-between items-center">
        <Link href="/dashboard" className="font-serif text-xl text-offwhite">
          Focus<span className="text-saffron">Fora</span>
        </Link>
        <Link href="/dashboard" className="text-offwhite/60 text-xs hover:text-saffron transition-colors uppercase tracking-wider">← Dashboard</Link>
      </nav>

      <div className="px-6 md:px-12 py-10 max-w-6xl mx-auto">
        <p className="ff-section-eyebrow mb-2">Library</p>
        <h1 className="font-serif text-4xl text-aubergine font-light mb-2">Read</h1>
        <p className="text-[#5A4060] text-sm font-light mb-8">70,000+ free books. Search or browse below.</p>

        <div className="flex gap-3 mb-10 max-w-xl">
          <input value={search} onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Search by title or author..."
            className="flex-1 border border-aubergine/20 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-saffron bg-white" />
          <button onClick={handleSearch} disabled={searching}
            className="ff-btn-primary px-6 disabled:opacity-50">
            {searching ? "..." : "Search"}
          </button>
        </div>

        {results.length > 0 ? (
          <>
            <h2 className="font-serif text-xl text-aubergine mb-4">Search Results</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {results.slice(0, 12).map((book) => (
                <Link key={book.id} href={`/read/${book.id}`}
                  className="bg-white p-4 rounded-sm border border-aubergine/[0.06] hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl mb-3">📖</div>
                  <div className="font-serif text-sm text-aubergine font-semibold leading-tight mb-1 line-clamp-2">{book.title}</div>
                  <div className="text-xs text-[#5A4060]">{book.authors[0]?.name}</div>
                </Link>
              ))}
            </div>
          </>
        ) : (
          <>
            <h2 className="font-serif text-xl text-aubergine mb-4">Featured Books</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {FEATURED_BOOKS.map((book) => (
                <Link key={book.id} href={`/read/${book.id}`}
                  className="bg-white p-4 rounded-sm border border-aubergine/[0.06] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
                  <div className="text-4xl mb-3">{book.emoji}</div>
                  <div className="font-serif text-sm text-aubergine font-semibold leading-tight mb-1">{book.title}</div>
                  <div className="text-xs text-[#5A4060] mb-3">{book.author}</div>
                  <div className="text-saffron text-xs font-medium group-hover:gap-2 flex items-center gap-1 transition-all">Read free →</div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
