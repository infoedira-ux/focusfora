"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

const BOOK_DATA: Record<string, { title: string; author: string; emoji: string }> = {
  "1342": { title: "Pride and Prejudice", author: "Jane Austen", emoji: "💌" },
  "84": { title: "Frankenstein", author: "Mary Shelley", emoji: "⚡" },
  "11": { title: "Alice in Wonderland", author: "Lewis Carroll", emoji: "🐇" },
  "1661": { title: "The Adventures of Sherlock Holmes", author: "Arthur Conan Doyle", emoji: "🔍" },
  "98": { title: "A Tale of Two Cities", author: "Charles Dickens", emoji: "🏙️" },
  "345": { title: "Dracula", author: "Bram Stoker", emoji: "🧛" },
  "76": { title: "Huckleberry Finn", author: "Mark Twain", emoji: "🚣" },
  "5200": { title: "Metamorphosis", author: "Franz Kafka", emoji: "🪲" },
  "2701": { title: "Moby Dick", author: "Herman Melville", emoji: "🐋" },
  "1080": { title: "The Odyssey", author: "Homer", emoji: "⚓" },
  "2542": { title: "A Doll's House", author: "Henrik Ibsen", emoji: "🏠" },
  "1952": { title: "The Yellow Wallpaper", author: "Charlotte Perkins Gilman", emoji: "🌿" },
  "1232": { title: "The Prince", author: "Niccolò Machiavelli", emoji: "👑" },
  "132": { title: "The Art of War", author: "Sun Tzu", emoji: "⚔️" },
  "2680": { title: "Meditations", author: "Marcus Aurelius", emoji: "🧘" },
  "46": { title: "A Christmas Carol", author: "Charles Dickens", emoji: "🎄" },
  "1400": { title: "Great Expectations", author: "Charles Dickens", emoji: "🎩" },
  "2591": { title: "Grimm's Fairy Tales", author: "Brothers Grimm", emoji: "🧚" },
  "30155": { title: "Relativity", author: "Albert Einstein", emoji: "🌌" },
};

const PAGE_SIZE = 5000;

export default function BookReaderPage() {
  const { id } = useParams();
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(0);
  const [fontSize, setFontSize] = useState(17);
  const [copied, setCopied] = useState(false);

  const book = BOOK_DATA[id as string] || { title: "Book", author: "Unknown", emoji: "📖" };

  useEffect(() => {
    async function fetchBook() {
      setLoading(true);
      try {
        const res = await fetch(`/api/book?id=${id}`);
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        setText(data.text || "");
      } catch (e: any) {
        setError(e.message || "Could not load book.");
      } finally {
        setLoading(false);
      }
    }
    fetchBook();
  }, [id]);

  const pages = [];
  for (let i = 0; i < text.length; i += PAGE_SIZE) {
    pages.push(text.slice(i, i + PAGE_SIZE));
  }
  const totalPages = pages.length;
  const currentText = pages[page] || "";

  function shareToWhatsApp() {
    const text = `📚 I'm reading *${book.title}* by ${book.author} on Focus Fora%0A%0AOver 70,000 free books available 👇%0Ahttps://focusfora.vercel.app/read/${id}`;
    window.open(`https://wa.me/?text=${text}`, "_blank");
  }

  function copyLink() {
    navigator.clipboard.writeText(`https://focusfora.vercel.app/read/${id}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="min-h-screen bg-offwhite">
      {/* Nav */}
      <nav className="bg-aubergine px-6 md:px-12 py-4 flex justify-between items-center sticky top-0 z-10">
        <Link href="/read" className="font-serif text-xl text-offwhite">
          Focus<span className="text-saffron">Fora</span>
        </Link>
        <div className="flex items-center gap-3">
          <button onClick={shareToWhatsApp}
            className="flex items-center gap-1 bg-[#25D366] text-white text-xs font-medium px-3 py-2 rounded-sm hover:bg-[#20bc5a] transition-colors">
            📲 Share
          </button>
          <button onClick={copyLink}
            className="text-offwhite/60 text-xs hover:text-saffron transition-colors">
            {copied ? "Copied! ✓" : "🔗 Copy"}
          </button>
          <Link href="/read" className="text-offwhite/60 text-xs hover:text-saffron transition-colors uppercase tracking-wider">
            ← Library
          </Link>
        </div>
      </nav>

      {/* Book header */}
      <div className="bg-aubergine px-6 md:px-12 py-8 border-t border-white/5">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div>
            <p className="text-saffron text-xs uppercase tracking-widest mb-1">{book.emoji} Free Book</p>
            <h1 className="font-serif text-2xl text-offwhite font-light">{book.title}</h1>
            <p className="text-offwhite/50 text-sm">{book.author}</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setFontSize(f => Math.max(12, f - 2))}
              className="w-8 h-8 bg-white/10 text-offwhite rounded-sm text-xs hover:bg-white/20 transition-colors">A-</button>
            <button onClick={() => setFontSize(f => Math.min(26, f + 2))}
              className="w-8 h-8 bg-white/10 text-offwhite rounded-sm text-sm hover:bg-white/20 transition-colors">A+</button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-10">
        {loading ? (
          <div className="text-center py-24">
            <div className="font-serif text-3xl text-aubergine animate-pulse mb-3">{book.emoji}</div>
            <p className="text-[#5A4060] text-sm font-light">Loading {book.title}...</p>
          </div>
        ) : error ? (
          <div className="text-center py-24">
            <p className="text-red-500 text-sm mb-4">{error}</p>
            <Link href="/read" className="ff-btn-primary">← Back to Library</Link>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-sm border border-aubergine/[0.06] p-8 md:p-12 mb-8 shadow-sm">
              <p className="text-xs text-[#5A4060]/50 mb-6 uppercase tracking-wider">
                Page {page + 1} of {totalPages}
              </p>
              <div className="font-serif text-aubergine leading-relaxed whitespace-pre-wrap"
                style={{ fontSize: `${fontSize}px`, lineHeight: "1.9" }}>
                {currentText}
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center">
              <button onClick={() => { setPage(p => Math.max(0, p - 1)); window.scrollTo(0, 0); }}
                disabled={page === 0}
                className="ff-btn-primary disabled:opacity-30 disabled:cursor-not-allowed px-6 py-2 text-sm">
                ← Previous
              </button>
              <div className="text-center">
                <p className="text-xs text-[#5A4060]">{page + 1} / {totalPages}</p>
                <button onClick={shareToWhatsApp}
                  className="text-xs text-[#25D366] font-medium mt-1 hover:underline">
                  📲 Share this book
                </button>
              </div>
              <button onClick={() => { setPage(p => Math.min(totalPages - 1, p + 1)); window.scrollTo(0, 0); }}
                disabled={page === totalPages - 1}
                className="ff-btn-primary disabled:opacity-30 disabled:cursor-not-allowed px-6 py-2 text-sm">
                Next →
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
