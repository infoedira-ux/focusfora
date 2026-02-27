"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function BookPage() {
  const { id } = useParams();
  const [book, setBook] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [fontSize, setFontSize] = useState(16);
  const [page, setPage] = useState(0);
  const PAGE_SIZE = 6000;

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/api/book?id=${id}`);
        const text = await res.text();
        let data;
        try {
          data = JSON.parse(text);
        } catch {
          throw new Error("Invalid response from server");
        }
        if (data.error) throw new Error(data.error);
        setBook(data);
      } catch (e: any) {
        setError(e.message || "Could not load this book.");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id]);

  const text = book?.text || "";
  const pages: string[] = [];
  for (let i = 0; i < text.length; i += PAGE_SIZE) {
    pages.push(text.slice(i, i + PAGE_SIZE));
  }
  const totalPages = pages.length;

  if (loading) return (
    <div className="min-h-screen bg-offwhite flex items-center justify-center">
      <div className="text-center">
        <div className="font-serif text-3xl text-aubergine animate-pulse mb-2">Loading book...</div>
        <p className="text-[#5A4060] text-sm font-light">Fetching from Project Gutenberg</p>
      </div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen bg-offwhite flex items-center justify-center">
      <div className="text-center">
        <div className="text-5xl mb-4">📚</div>
        <p className="font-serif text-xl text-aubergine mb-2">Not available</p>
        <p className="text-[#5A4060] text-sm mb-6">{error}</p>
        <Link href="/read" className="ff-btn-primary">← Back to Library</Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-offwhite">
      <nav className="bg-aubergine px-6 md:px-12 py-4 flex justify-between items-center sticky top-0 z-10">
        <Link href="/read" className="font-serif text-xl text-offwhite">
          Focus<span className="text-saffron">Fora</span>
        </Link>
        <div className="flex items-center gap-3">
          <button onClick={() => setFontSize(f => Math.max(12, f - 2))}
            className="text-offwhite/60 hover:text-saffron font-medium px-2">A-</button>
          <span className="text-offwhite/30 text-xs">{fontSize}px</span>
          <button onClick={() => setFontSize(f => Math.min(26, f + 2))}
            className="text-offwhite/60 hover:text-saffron font-medium px-2">A+</button>
          <Link href="/read" className="text-offwhite/60 text-xs hover:text-saffron uppercase tracking-wider ml-2">
            ← Library
          </Link>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-10">
        <div className="mb-8 pb-8 border-b border-aubergine/10">
          <h1 className="font-serif text-3xl text-aubergine mb-1">{book.title}</h1>
          <p className="text-[#5A4060] text-sm">{book.author}</p>
          {totalPages > 0 && (
            <p className="text-aubergine/40 text-xs mt-2">
              Page {page + 1} of {totalPages} · {Math.round(text.length / 1000)}k characters
            </p>
          )}
        </div>

        <div style={{
          fontSize: `${fontSize}px`,
          lineHeight: 1.9,
          color: "#2D1040",
          fontFamily: "DM Sans, sans-serif",
          whiteSpace: "pre-wrap"
        }}>
          {pages[page]}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-between items-center border-t border-aubergine/10 pt-8 mt-12">
            <button
              onClick={() => { setPage(p => Math.max(0, p - 1)); window.scrollTo(0, 0); }}
              disabled={page === 0}
              className="ff-btn-secondary text-xs py-2 px-6 disabled:opacity-30">
              ← Previous
            </button>
            <span className="text-xs text-[#5A4060]">{page + 1} / {totalPages}</span>
            <button
              onClick={() => { setPage(p => Math.min(totalPages - 1, p + 1)); window.scrollTo(0, 0); }}
              disabled={page === totalPages - 1}
              className="ff-btn-primary text-xs py-2 px-6 disabled:opacity-30">
              Next →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
