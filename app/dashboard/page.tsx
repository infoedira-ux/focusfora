"use client";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    async function loadUser() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push("/login");
        return;
      }
      setUser(user);
      const { data: profile } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();
      setProfile(profile);
      setLoading(false);
    }
    loadUser();
  }, []);

  async function handleSignOut() {
    await supabase.auth.signOut();
    router.push("/");
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-offwhite flex items-center justify-center">
        <div className="font-serif text-2xl text-aubergine animate-pulse">Loading your space...</div>
      </div>
    );
  }

  const levelLabels: Record<string, string> = {
    cbc: "CBC Primary",
    kcse: "KCSE Student",
    university: "University",
    professional: "Professional Exams",
  };

  const sections = [
    { icon: "📚", title: "Read", desc: "70,000+ free books", href: "/read", color: "bg-saffron-pale" },
    { icon: "✅", title: "Revise", desc: "KCSE past papers & quizzes", href: "/revise", color: "bg-aubergine/5" },
    { icon: "🧠", title: "Research", desc: "Papers simplified by AI", href: "/research", color: "bg-saffron-pale" },
    { icon: "🌱", title: "CBC", desc: "Guides for every grade", href: "/cbc", color: "bg-aubergine/5" },
    { icon: "🎓", title: "Pro Exams", desc: "CPA, ACCA, CIPS", href: "/exams", color: "bg-saffron-pale" },
    { icon: "📰", title: "Magazine", desc: "Vanva Publications", href: "/magazine", color: "bg-aubergine/5" },
  ];

  return (
    <div className="min-h-screen bg-offwhite">
      {/* Top bar */}
      <nav className="bg-aubergine px-6 md:px-12 py-4 flex justify-between items-center">
        <Link href="/" className="font-serif text-xl text-offwhite">
          Focus<span className="text-saffron">Fora</span>
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-offwhite/60 text-xs hidden md:block">
            {profile?.level ? levelLabels[profile.level] : "Student"}
          </span>
          <button onClick={handleSignOut}
            className="text-xs text-offwhite/60 hover:text-saffron transition-colors uppercase tracking-wider">
            Sign Out
          </button>
        </div>
      </nav>

      {/* Welcome */}
      <div className="px-6 md:px-12 py-10">
        <div className="mb-10">
          <p className="ff-section-eyebrow mb-2">Your Dashboard</p>
          <h1 className="font-serif text-4xl text-aubergine font-light">
            Welcome, <em className="text-saffron not-italic">{profile?.full_name?.split(" ")[0] || "Scholar"}</em>
          </h1>
          <p className="text-[#5A4060] text-sm mt-2 font-light">
            {profile?.level ? `${levelLabels[profile.level]} · ` : ""}
            What are we learning today?
          </p>
        </div>

        {/* Study streak */}
        <div className="bg-aubergine rounded-sm p-6 mb-8 flex items-center justify-between max-w-sm">
          <div>
            <div className="text-saffron text-xs uppercase tracking-widest mb-1">Study Streak</div>
            <div className="font-serif text-4xl text-offwhite font-light">
              {profile?.study_streak || 0} <span className="text-2xl">🔥</span>
            </div>
            <div className="text-offwhite/50 text-xs mt-1">days in a row</div>
          </div>
          <div className="text-5xl opacity-20">✦</div>
        </div>

        {/* Sections grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl">
          {sections.map((s) => (
            <Link key={s.href} href={s.href}
              className={`${s.color} p-6 rounded-sm border border-aubergine/[0.06] hover:shadow-lg hover:shadow-aubergine/10 hover:-translate-y-1 transition-all duration-300 group`}>
              <div className="text-3xl mb-3">{s.icon}</div>
              <div className="font-serif text-lg text-aubergine font-semibold mb-1">{s.title}</div>
              <div className="text-xs text-[#5A4060] font-light">{s.desc}</div>
              <div className="mt-3 text-saffron text-xs font-medium group-hover:gap-2 flex items-center gap-1 transition-all">
                Explore <span>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
