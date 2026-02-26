import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Focus Fora — Where Minds Gather and Grow",
  description:
    "Kenya's most powerful learning platform. CBC, KCSE revision, university research simplified, and professional exam prep — all in one beautiful place.",
  keywords: ["KCSE revision", "CBC Kenya", "CPA revision", "university Kenya", "past papers Kenya"],
  openGraph: {
    title: "Focus Fora",
    description: "Where Kenyan Minds Gather and Grow",
    url: "https://focusfora.co.ke",
    siteName: "Focus Fora",
    locale: "en_KE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
