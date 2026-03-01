"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function BooksPage() {
  const router = useRouter();
  useEffect(() => { router.replace("/read"); }, []);
  return null;
}
