"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Read", href: "/read" },
  { label: "Revise", href: "/revise" },
  { label: "Research", href: "/research" },
  { label: "CBC", href: "/cbc" },
  { label: "Pro Exams", href: "/exams" },
  { label: "For Schools", href: "/schools" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-4 bg-offwhite/90 backdrop-blur-md border-b border-aubergine/[0.07]">
      <Link href="/" className="font-serif text-2xl font-semibold text-aubergine tracking-wide">
        Focus<span className="text-saffron">Fora</span>
      </Link>

      {/* Desktop */}
      <ul className="hidden md:flex gap-8 list-none">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-xs font-medium uppercase tracking-widest text-[#5A4060] hover:text-aubergine transition-colors duration-200"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="hidden md:flex gap-3 items-center">
        <Link href="/auth/login" className="text-xs font-medium text-aubergine/70 hover:text-aubergine transition-colors uppercase tracking-widest">
          Sign In
        </Link>
        <Link href="/auth/register" className="ff-btn-primary text-xs">
          Join Free
        </Link>
      </div>

      {/* Mobile toggle */}
      <button className="md:hidden text-aubergine" onClick={() => setOpen(!open)}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-offwhite border-b border-aubergine/10 px-8 py-6 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-aubergine uppercase tracking-wider"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-3 pt-2">
            <Link href="/auth/login" className="ff-btn-secondary text-xs flex-1 text-center py-2">Sign In</Link>
            <Link href="/auth/register" className="ff-btn-primary text-xs flex-1 text-center py-2">Join Free</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
