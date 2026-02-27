import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get("query");
  if (!query) return NextResponse.json({ papers: [] });

  try {
    const res = await fetch(
      `https://export.arxiv.org/search/?query=${encodeURIComponent(query)}&start=0&max_results=12&searchtype=all`,
      { headers: { "User-Agent": "FocusFora/1.0 (focusfora.vercel.app)" } }
    );
    const text = await res.text();
    const papers = [];
    const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
    let match;
    while ((match = entryRegex.exec(text)) !== null) {
      const entry = match[1];
      const getId = (tag: string) => {
        const m = entry.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`));
        return m ? m[1].trim() : "";
      };
      const authors = [...entry.matchAll(/<name>([\s\S]*?)<\/name>/g)]
        .slice(0, 3).map(a => a[1].trim()).join(", ");
      papers.push({
        id: getId("id"),
        title: getId("title").replace(/\s+/g, " "),
        summary: getId("summary").replace(/\s+/g, " "),
        authors,
        published: getId("published").substring(0, 10),
      });
    }
    return NextResponse.json({ papers });
  } catch (err: any) {
    return NextResponse.json({ papers: [], error: err.message });
  }
}
