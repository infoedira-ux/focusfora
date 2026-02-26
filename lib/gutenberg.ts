const GUTENBERG_API = "https://gutendex.com";

export interface GutenbergBook {
  id: number;
  title: string;
  authors: { name: string; birth_year: number | null; death_year: number | null }[];
  subjects: string[];
  languages: string[];
  download_count: number;
  formats: Record<string, string>;
  summaries: string[];
}

export interface GutenbergResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: GutenbergBook[];
}

export async function searchBooks(query: string, page = 1): Promise<GutenbergResponse> {
  const res = await fetch(
    `${GUTENBERG_API}/books?search=${encodeURIComponent(query)}&page=${page}`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) throw new Error("Failed to fetch books");
  return res.json();
}

export async function getBook(id: number): Promise<GutenbergBook> {
  const res = await fetch(`${GUTENBERG_API}/books/${id}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("Failed to fetch book");
  return res.json();
}

export async function getBooksBySubject(subject: string): Promise<GutenbergResponse> {
  const res = await fetch(
    `${GUTENBERG_API}/books?topic=${encodeURIComponent(subject)}`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) throw new Error("Failed to fetch books by subject");
  return res.json();
}

export async function getBookText(book: GutenbergBook): Promise<string> {
  const textUrl =
    book.formats["text/plain; charset=utf-8"] ||
    book.formats["text/plain; charset=us-ascii"] ||
    book.formats["text/plain"];
  if (!textUrl) throw new Error("No plain text version available");
  const res = await fetch(textUrl);
  if (!res.ok) throw new Error("Failed to fetch book text");
  return res.text();
}

// Books relevant to Kenyan curriculum
export const KENYAN_CURRICULUM_BOOKS = [
  { id: 2155, title: "Things Fall Apart", author: "Chinua Achebe" },
  { id: 764,  title: "The River Between", author: "Ngugi wa Thiong'o" },
  { id: 1399, title: "Anna Karenina", author: "Leo Tolstoy" },
  { id: 1342, title: "Pride and Prejudice", author: "Jane Austen" },
  { id: 2701, title: "Moby Dick", author: "Herman Melville" },
  { id: 11,   title: "Alice in Wonderland", author: "Lewis Carroll" },
  { id: 1661, title: "Sherlock Holmes", author: "Arthur Conan Doyle" },
  { id: 84,   title: "Frankenstein", author: "Mary Shelley" },
];
