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

      // Get or create profile
      let { data: profile } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      // If no profile exists create one
      if (!profile) {
        const { data: newProfile } = await supabase
          .from("profiles")
          .upsert({
            id: user.id,
            email: user.email,
            full_name: user.user_metadata?.full_name || user.email?.split("@")[0],
            level: "kcse",
            study_streak: 0,
            subscription_tier: "free",
          })
          .select()
          .single();
        profile = newProfile;
      }

      // Update study streak
      const today = new Date().toISOString().split("T")[0];
      const lastStudy = profile?.last_study_date;

      if (lastStudy !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split("T")[0];

        const newStreak = lastStudy === yesterdayStr
          ? (profile?.study_streak || 0) + 1
          : 1;

        const { data: updated } = await supabase
          .from("profiles")
          .update({
            study_streak: newStreak,
            last_study_date: today,
          })
          .eq("id", user.id)
          .select()
          .single();

        profile = updated || profile;
      }

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
        <div className="text-center">
          <div className="font-serif text-3xl text-aubergine animate-pulse mb-2">
            Focus<span className="text-saffron">Fora</span>
          </div>
          <p className="text-[#5A4060] text-sm font-light">Loading your space...</p>
        </div>
      </div>
    );
  }

  const levelLabels: Record<string, string> = {
    cbc: "CBC Primary",
    kcse: "KCSE Student",
    university: "University",
    professional: "Professional Exams",
  };

  const firstName = profile?.full_name?.split(" ")[0] || 
                    user?.email?.split("@")[0] || 
                    "Scholar";

  const sections = [
    { icon: "📚", title: "Read", desc: "70,000+ free books", href: "/read", color: "bg-saffron-pale" },
    { icon: "✅", title: "Revise", desc: "KCSE past papers & quizzes", href: "/revise", color: "bg-aubergine/5" },
    { icon: "🧠", title: "Research", desc: "Papers simplified by AI", href: "/research", color: "bg-saffron-pale" },
    { icon: "🌱", title: "CBC", desc: "Guides for every grade", href: "/cbc", color: "bg-aubergine/5" },
    { icon: "🎓", title: "Pro Exams", desc: "CPA, ACCA, CIPS", href: "/exams", color: "bg-saffron-pale" },
    { icon: "📰", title: "Magazine", desc: "Vanva Publications", href: "/magazine", color: "bg-aubergine/5" },
    { icon: "📖", title: "Set Books", desc: "KCSE study guides", href: "/setbooks", color: "bg-saffron-pale" },
  ];

  const streakEmoji = (profile?.study_streak || 0) >= 7 ? "🔥" :
                      (profile?.study_streak || 0) >= 3 ? "⚡" : "✦";

  return (
    <div className="min-h-screen bg-offwhite">
      {/* Top bar */}
      <nav className="bg-aubergine px-6 md:px-12 py-4 flex justify-between items-center">
        <Link href="/" className="font-serif text-xl text-offwhite">
          Focus<span className="text-saffron">Fora</span>
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-offwhite/50 text-xs hidden md:block">
            {profile?.email || user?.email}
          </span>
          <span className="text-offwhite/60 text-xs hidden md:block">·</span>
          <span className="text-offwhite/60 text-xs hidden md:block">
            {profile?.level ? levelLabels[profile.level] : "KCSE Student"}
          </span>
          <button onClick={handleSignOut}
            className="text-xs text-offwhite/60 hover:text-saffron transition-colors uppercase tracking-wider">
            Sign Out
          </button>
        </div>
      </nav>

      <div className="px-6 md:px-12 py-10 max-w-5xl mx-auto">

        {/* Welcome header */}
        <div className="mb-10">
          <p className="ff-section-eyebrow mb-2">Your Dashboard</p>
          <h1 className="font-serif text-4xl md:text-5xl text-aubergine font-light">
            Welcome, <em className="text-saffron not-italic">{firstName}</em>
          </h1>
          <p className="text-[#5A4060] text-sm mt-2 font-light">
            {profile?.level ? `${levelLabels[profile.level]} · ` : ""}
            What are we learning today?
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-aubergine rounded-sm p-5">
            <div className="text-saffron text-xs uppercase tracking-widest mb-1">Study Streak</div>
            <div className="font-serif text-3xl text-offwhite font-light">
              {profile?.study_streak || 0} {streakEmoji}
            </div>
            <div className="text-offwhite/40 text-xs mt-1">days in a row</div>
          </div>

          <div className="bg-white border border-aubergine/[0.06] rounded-sm p-5">
            <div className="text-saffron text-xs uppercase tracking-widest mb-1">Plan</div>
            <div className="font-serif text-2xl text-aubergine font-light capitalize">
              {profile?.subscription_tier || "Free"}
            </div>
            <Link href="/pricing" className="text-aubergine/40 text-xs mt-1 hover:text-saffron transition-colors">
              Upgrade →
            </Link>
          </div>

          <div className="bg-white border border-aubergine/[0.06] rounded-sm p-5">
            <div className="text-saffron text-xs uppercase tracking-widest mb-1">Level</div>
            <div className="font-serif text-lg text-aubergine font-light">
              {profile?.level ? levelLabels[profile.level] : "KCSE"}
            </div>
            <button
              onClick={async () => {
                const newLevel = prompt("Enter level: cbc, kcse, university, professional");
                if (newLevel && ["cbc","kcse","university","professional"].includes(newLevel)) {
                  await supabase.from("profiles").update({ level: newLevel }).eq("id", user.id);
                  setProfile((p: any) => ({ ...p, level: newLevel }));
                }
              }}
              className="text-aubergine/40 text-xs mt-1 hover:text-saffron transition-colors">
              Change →
            </button>
          </div>

          <div className="bg-white border border-aubergine/[0.06] rounded-sm p-5">
            <div className="text-saffron text-xs uppercase tracking-widest mb-1">Member since</div>
            <div className="font-serif text-lg text-aubergine font-light">
              {profile?.created_at
                ? new Date(profile.created_at).toLocaleDateString("en-KE", { month: "short", year: "numeric" })
                : "Today"}
            </div>
            <div className="text-aubergine/40 text-xs mt-1">Focus Fora</div>
          </div>
        </div>

        {/* Sections grid */}
        <h2 className="font-serif text-2xl text-aubergine mb-4 font-light">Your Learning Space</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {sections.map((s) => (
            <Link key={s.href} href={s.href}
              className={`${s.color} p-6 rounded-sm border border-aubergine/[0.06] hover:shadow-lg hover:shadow-aubergine/10 hover:-translate-y-1 transition-all duration-300 group`}>
              <div className="text-3xl mb-3">{s.icon}</div>
              <div className="font-serif text-lg text-aubergine font-semibold mb-1">{s.title}</div>
              <div className="text-xs text-[#5A4060] font-light mb-3">{s.desc}</div>
              <div className="text-saffron text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Explore <span>→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Upgrade banner for free users */}
        {profile?.subscription_tier === "free" && (
          <div className="mt-10 bg-aubergine rounded-sm p-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="font-serif text-2xl text-offwhite mb-1">Upgrade to Scholar</h3>
              <p className="text-offwhite/60 text-sm font-light">Unlimited AI summaries, offline reading, full past paper library. KSh 249/month.</p>
            </div>
            <button className="bg-saffron text-aubergine text-xs font-medium px-8 py-3 rounded-sm uppercase tracking-wider hover:bg-saffron-light transition-colors whitespace-nowrap">
              Upgrade Now →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
