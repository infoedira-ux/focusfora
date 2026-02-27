"use client";
import { useState } from "react";
import Link from "next/link";

// Books with direct Gutenberg text — these load fine
const GUTENBERG_BOOKS = [
  { id: "1342", title: "Pride and Prejudice", author: "Jane Austen", emoji: "💌", tag: "Classic" },
  { id: "84", title: "Frankenstein", author: "Mary Shelley", emoji: "⚡", tag: "Classic" },
  { id: "11", title: "Alice in Wonderland", author: "Lewis Carroll", emoji: "🐇", tag: "Classic" },
  { id: "1661", title: "Sherlock Holmes", author: "Arthur Conan Doyle", emoji: "🔍", tag: "Classic" },
  { id: "98", title: "A Tale of Two Cities", author: "Charles Dickens", emoji: "🏙️", tag: "Classic" },
  { id: "345", title: "Dracula", author: "Bram Stoker", emoji: "🧛", tag: "Classic" },
  { id: "76", title: "Huckleberry Finn", author: "Mark Twain", emoji: "🚣", tag: "Classic" },
  { id: "5200", title: "Metamorphosis", author: "Franz Kafka", emoji: "🪲", tag: "Classic" },
  { id: "2701", title: "Moby Dick", author: "Herman Melville", emoji: "🐋", tag: "Classic" },
  { id: "1080", title: "The Odyssey", author: "Homer", emoji: "⚓", tag: "Classic" },
  { id: "2542", title: "A Doll's House", author: "Henrik Ibsen", emoji: "🏠", tag: "Classic" },
  { id: "1952", title: "The Yellow Wallpaper", author: "Charlotte Perkins Gilman", emoji: "🌿", tag: "Classic" },
  { id: "1232", title: "The Prince", author: "Niccolò Machiavelli", emoji: "👑", tag: "Philosophy" },
  { id: "132", title: "The Art of War", author: "Sun Tzu", emoji: "⚔️", tag: "Strategy" },
  { id: "2680", title: "Meditations", author: "Marcus Aurelius", emoji: "🧘", tag: "Philosophy" },
  { id: "46", title: "A Christmas Carol", author: "Charles Dickens", emoji: "🎄", tag: "Classic" },
  { id: "1400", title: "Great Expectations", author: "Charles Dickens", emoji: "🎩", tag: "Classic" },
  { id: "2591", title: "Grimm's Fairy Tales", author: "Brothers Grimm", emoji: "🧚", tag: "Stories" },
  { id: "30155", title: "Relativity", author: "Albert Einstein", emoji: "🌌", tag: "Science" },
];

// Kenyan set books — redirect to our beautiful study guides
const KENYAN_SETBOOKS = [
  { id: "river-between", title: "The River Between", author: "Ngũgĩ wa Thiong'o", emoji: "🌊", tag: "Kenya Set Book" },
  { id: "grain-of-wheat", title: "A Grain of Wheat", author: "Ngũgĩ wa Thiong'o", emoji: "🌾", tag: "Kenya Set Book" },
  { id: "weep-not-child", title: "Weep Not, Child", author: "Ngũgĩ wa Thiong'o", emoji: "😢", tag: "Kenya Set Book" },
  { id: "betrayal-city", title: "Betrayal in the City", author: "Francis Imbuga", emoji: "🏙️", tag: "Kenya Set Book" },
  { id: "river-source", title: "The River and the Source", author: "Margaret Ogola", emoji: "💧", tag: "Kenya Set Book" },
  { id: "merchant-venice", title: "The Merchant of Venice", author: "William Shakespeare", emoji: "⚖️", tag: "Kenya Set Book" },
  { id: "blossoms-savannah", title: "Blossoms of the Savannah", author: "Henry Ole Kulet", emoji: "🌸", tag: "Kenya Set Book" },
  { id: "caucasian-chalk", title: "The Caucasian Chalk Circle", author: "Bertolt Brecht", emoji: "🎭", tag: "Kenya Set Book" },
  { id: "whale-rider", title: "The Whale Rider", author: "Witi Ihimaera", emoji: "🐋", tag: "Kenya Set Book" },
];

const TAGS = ["All", "Kenya Set Book", "Classic", "Philosophy", "Strategy", "Science", "Stories"];

export default function ReadPage() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [searching, setSearching] = useState(false);
  const [activeTag, setActiveTag] = useState("All");

  async function handleSearch() {
    if (!search.trim()) return;
    setSearching(true);
    try {
      const res = await fetch(`https://gutendex.com/books/?search=${encodeURIComponent(search)}`);
      const data = await res.json();
      setResults(data.results || []);
    } catch {
      setResults([]);
    }
    setSearching(false);
  }

  const allBooks = [
    ...KENYAN_SETBOOKS,
    ...GUTENBERG_BOOKS,
  ];

  const filtered = activeTag === "All"
    ? allBooks
    : allBooks.filter(b => b.tag === activeTag);

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

      <div className="px-6 md:px-12 py-10 max-w-6xl mx-auto">
        <p className="ff-section-eyebrow mb-2">Project Gutenberg + KCSE Set Books</p>
        <h1 className="font-serif text-4xl text-aubergine font-light mb-2">Library</h1>
        <p className="text-[#5A4060] text-sm font-light mb-8">
          Free books to read — plus full study guides for Kenya set books.
        </p>

        {/* Search */}
        <div className="flex gap-3 mb-8 max-w-xl">
          <input value={search} onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Search 70,000+ books by title or author..."
            className="flex-1 border border-aubergine/20 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-saffron bg-white" />
          <button onClick={handleSearch} disabled={searching}
            className="ff-btn-primary px-6 disabled:opacity-50">
            {searching ? "..." : "Search"}
          </button>
        </div>

        {/* Search results */}
        {results.length > 0 ? (
          <>
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-serif text-xl text-aubergine">Search Results</h2>
              <button onClick={() => { setResults([]); setSearch(""); }}
                className="text-xs text-[#5A4060] hover:text-saffron transition-colors">
                Clear ×
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">
              {results.slice(0, 20).map((book: any) => (
                <Link key={book.id} href={`/read/${book.id}`}
                  className="bg-white p-4 rounded-sm border border-aubergine/[0.06] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
                  <div className="text-3xl mb-3">📖</div>
                  <div className="font-serif text-sm text-aubergine font-semibold leading-tight mb-1 line-clamp-2">{book.title}</div>
                  <div className="text-xs text-[#5A4060] line-clamp-1">{book.authors?.[0]?.name}</div>
                  <div className="mt-3 text-saffron text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">Read →</div>
                </Link>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Kenya Set Books banner */}
            <div className="bg-aubergine rounded-sm p-6 mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <p className="text-saffron text-xs uppercase tracking-widest mb-1">✦ Full Study Guides</p>
                <h2 className="font-serif text-xl text-offwhite mb-1">Kenya Set Books</h2>
                <p className="text-offwhite/60 text-sm font-light">Chapter summaries, themes, characters, essays and exam quotes.</p>
              </div>
              <Link href="/setbooks" className="bg-saffron text-aubergine text-xs font-medium px-6 py-3 rounded-sm uppercase tracking-wider hover:bg-saffron-light transition-colors whitespace-nowrap">
                Browse Set Books →
              </Link>
            </div>

            {/* Tag filters */}
            <div className="flex flex-wrap gap-2 mb-6">
              {TAGS.map(tag => (
                <button key={tag} onClick={() => setActiveTag(tag)}
                  className={`text-xs font-medium px-4 py-2 rounded-sm transition-all ${
                    activeTag === tag
                      ? "bg-aubergine text-offwhite"
                      : "bg-white border border-aubergine/10 text-[#5A4060] hover:border-aubergine/30"
                  }`}>
                  {tag}
                </button>
              ))}
            </div>

            {/* Books grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {filtered.map((book: any) => {
                const isSetBook = book.tag === "Kenya Set Book";
                const href = isSetBook ? `/setbooks/${book.id}` : `/read/${book.id}`;
                return (
                  <Link key={book.id} href={href}
                    className="bg-white p-4 rounded-sm border border-aubergine/[0.06] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group relative">
                    {isSetBook && (
                      <span className="absolute top-2 right-2 text-[9px] bg-saffron text-aubergine px-1.5 py-0.5 rounded-sm font-medium">
                        Study Guide
                      </span>
                    )}
                    <div className="text-3xl mb-3">{book.emoji}</div>
                    <div className="font-serif text-sm text-aubergine font-semibold leading-tight mb-1">{book.title}</div>
                    <div className="text-xs text-[#5A4060] mb-2">{book.author}</div>
                    <div className="mt-3 text-saffron text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      {isSetBook ? "Study guide →" : "Read free →"}
                    </div>
                  </Link>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
