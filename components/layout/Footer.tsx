import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1E0A28] px-8 md:px-16 py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 mb-10">
        <div className="md:col-span-2">
          <div className="font-serif text-2xl text-offwhite mb-2">
            Focus<span className="text-saffron">Fora</span>
          </div>
          <p className="text-offwhite/40 text-xs leading-relaxed font-light max-w-xs">
            Where Kenyan minds gather and grow. From CBC to professional exams — beautiful, simple, powerful.
          </p>
          <div className="mt-4 text-offwhite/30 text-[10px] uppercase tracking-wider">
            A Vanva Innovations Product · Nairobi, Kenya
          </div>
        </div>

        <div>
          <div className="text-offwhite/60 text-[10px] uppercase tracking-widest mb-4">Platform</div>
          {["Read", "Revise", "Research", "CBC", "Pro Exams"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase().replace(" ", "-")}`}
              className="block text-offwhite/40 hover:text-saffron text-xs mb-2 transition-colors">
              {item}
            </Link>
          ))}
        </div>

        <div>
          <div className="text-offwhite/60 text-[10px] uppercase tracking-widest mb-4">Company</div>
          {["About", "For Schools", "Pricing", "Contact"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase().replace(" ", "-")}`}
              className="block text-offwhite/40 hover:text-saffron text-xs mb-2 transition-colors">
              {item}
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-offwhite/[0.06] pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
        <div className="text-offwhite/30 text-[10px]">© 2025 Vanva Innovations. All rights reserved.</div>
        <div className="flex gap-6">
          {["Privacy", "Terms"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`}
              className="text-offwhite/30 hover:text-offwhite/60 text-[10px] transition-colors">
              {item}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
