import { NextRequest, NextResponse } from "next/server";

const BOOK_DATA: Record<string, { title: string; author: string; textUrl: string }> = {
  "1342": { title: "Pride and Prejudice", author: "Jane Austen", textUrl: "https://www.gutenberg.org/cache/epub/1342/pg1342.txt" },
  "84": { title: "Frankenstein", author: "Mary Shelley", textUrl: "https://www.gutenberg.org/cache/epub/84/pg84.txt" },
  "11": { title: "Alice in Wonderland", author: "Lewis Carroll", textUrl: "https://www.gutenberg.org/cache/epub/11/pg11.txt" },
  "1661": { title: "Sherlock Holmes", author: "Arthur Conan Doyle", textUrl: "https://www.gutenberg.org/cache/epub/1661/pg1661.txt" },
  "98": { title: "A Tale of Two Cities", author: "Charles Dickens", textUrl: "https://www.gutenberg.org/cache/epub/98/pg98.txt" },
  "345": { title: "Dracula", author: "Bram Stoker", textUrl: "https://www.gutenberg.org/cache/epub/345/pg345.txt" },
  "76": { title: "Huckleberry Finn", author: "Mark Twain", textUrl: "https://www.gutenberg.org/cache/epub/76/pg76.txt" },
  "5200": { title: "Metamorphosis", author: "Franz Kafka", textUrl: "https://www.gutenberg.org/cache/epub/5200/pg5200.txt" },
  "2701": { title: "Moby Dick", author: "Herman Melville", textUrl: "https://www.gutenberg.org/cache/epub/2701/pg2701.txt" },
  "1080": { title: "The Odyssey", author: "Homer", textUrl: "https://www.gutenberg.org/cache/epub/1080/pg1080.txt" },
  "2542": { title: "A Doll's House", author: "Henrik Ibsen", textUrl: "https://www.gutenberg.org/cache/epub/2542/pg2542.txt" },
  "1952": { title: "The Yellow Wallpaper", author: "Charlotte Perkins Gilman", textUrl: "https://www.gutenberg.org/cache/epub/1952/pg1952.txt" },
  "1232": { title: "The Prince", author: "Machiavelli", textUrl: "https://www.gutenberg.org/cache/epub/1232/pg1232.txt" },
  "132": { title: "The Art of War", author: "Sun Tzu", textUrl: "https://www.gutenberg.org/cache/epub/132/pg132.txt" },
  "2680": { title: "Meditations", author: "Marcus Aurelius", textUrl: "https://www.gutenberg.org/cache/epub/2680/pg2680.txt" },
  "46": { title: "A Christmas Carol", author: "Charles Dickens", textUrl: "https://www.gutenberg.org/cache/epub/46/pg46.txt" },
  "1400": { title: "Great Expectations", author: "Charles Dickens", textUrl: "https://www.gutenberg.org/cache/epub/1400/pg1400.txt" },
  "2591": { title: "Grimm's Fairy Tales", author: "Brothers Grimm", textUrl: "https://www.gutenberg.org/cache/epub/2591/pg2591.txt" },
};

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  const book = BOOK_DATA[id];
  if (!book) return NextResponse.json({ error: "Book not found" }, { status: 404 });

  try {
    const res = await fetch(book.textUrl, {
      headers: { "User-Agent": "Mozilla/5.0 FocusFora/1.0" },
    });
    if (!res.ok) throw new Error(`Gutenberg returned ${res.status}`);

    const contentType = res.headers.get("content-type") || "";
    if (contentType.includes("html")) throw new Error("Book text not available");

    const raw = await res.text();

    let cleaned = raw;
    const startIdx = cleaned.search(/\*\*\* ?START OF (THIS|THE)/i);
    if (startIdx !== -1) cleaned = cleaned.substring(cleaned.indexOf("\n", startIdx) + 1);
    const endIdx = cleaned.search(/\*\*\* ?END OF (THIS|THE)/i);
    if (endIdx !== -1) cleaned = cleaned.substring(0, endIdx);

    return NextResponse.json({
      id,
      title: book.title,
      author: book.author,
      text: cleaned.trim(),
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
