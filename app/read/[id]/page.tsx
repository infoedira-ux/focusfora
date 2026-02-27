"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function BookPage() {
  const { id } = useParams();
  const [book, setBook] = useState<any>(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    async function load() {
      const res = await fetch(`https://gutendex.com/books/${id}`);
      const data = await res.json();
      setBook(data);
      const textUrl = data.formats["text/plain; charset=utf-8"] || data.formats["text/plain"];
      if (textUrl) {
        const textRes = await fetch(textUrl);
        const raw = await textRes.text();
        setText(raw.substring(0, 50000));
      }
      setLoading(false);
    }
    load();
  }, [id]);

  if (loading) return (
    <div className="min-h-screen bg-offwhite flex items-center justify-center">
      <div className="font-serif text-2xl text-aubergine animate-pulse">Loading book...</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-offwhite">
      <nav className="bg-aubergine px-6 md:px-12 py-4 flex justify-between items-center sticky top-0 z-10">
        <Link href="/read" className="font-serif text-xl text-offwhite">
          Focus<span className="text-saffron">Fora</span>
        </Link>
        <div className="flex items-center gap-4">
          <button onClick={() => setFontSize(f => Math.max(12, f - 2))} className="text-offwhite/60 hover:text-saffron text-lg">A-</button>
          <button onClick={() => setFontSize(f => Math.min(24, f + 2))} className="text-offwhite/60 hover:text-saffron text-lg">A+</button>
          <Link href="/read" className="text-offwhite/60 text-xs hover:text-saffron transition-colors uppercase tracking-wider">← Library</Link>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-10">
        <h1 className="font-serif text-3xl text-aubergine mb-1">{book?.title}</h1>
        <p className="text-[#5A4060] text-sm mb-8">{book?.authors?.[0]?.name}</p>
        <div className="prose prose-sm max-w-none" style={{ fontSize: `${fontSize}px`, lineHeight: 1.9, color: "#1E0A28", fontFamily: "DM Sans, sans-serif", whiteSpace: "pre-wrap" }}>
          {text || "Text not available for this book."}
        </div>
      </div>
    </div>
  );
}
