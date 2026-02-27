"use client";
import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

const levels = [
  { id: "cbc", icon: "🌱", title: "CBC Primary", desc: "Grades 1–9, activity guides and parent support" },
  { id: "kcse", icon: "📝", title: "KCSE Student", desc: "Form 1–4, revision, past papers and quizzes" },
  { id: "university", icon: "🎓", title: "University", desc: "Degree level, research simplified and CAT prep" },
  { id: "professional", icon: "💼", title: "Professional Exams", desc: "CPA, ACCA, CIPS and other professional qualifications" },
];

export default function OnboardingPage() {
  const [selected, setSelected] = useState("");
  const [saving, setSaving] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    async function check() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { router.push("/login"); return; }
      setUserId(user.id);
    }
    check();
  }, []);

  async function handleContinue() {
    if (!selected || !userId) return;
    setSaving(true);

    // First try update, then insert if not exists
    const { error: updateError } = await supabase
      .from("profiles")
      .update({ level: selected })
      .eq("id", userId);

    if (updateError) {
      // Profile doesn't exist yet, insert it
      await supabase.from("profiles").insert({
        id: userId,
        level: selected,
        subscription_tier: "free",
        study_streak: 0,
      });
    }

    router.push("/dashboard");
  }

  return (
    <div className="min-h-screen bg-offwhite flex items-center justify-center px-4">
      <div className="w-full max-w-lg">
        <div className="text-center mb-10">
          <div className="font-serif text-3xl text-aubergine mb-2">
            Focus<span className="text-saffron">Fora</span>
          </div>
          <h1 className="font-serif text-3xl text-aubergine mb-2">Welcome aboard 🎉</h1>
          <p className="text-[#5A4060] text-sm font-light">What best describes you? We'll personalise your experience.</p>
        </div>
        <div className="grid grid-cols-1 gap-3 mb-8">
          {levels.map((level) => (
            <button key={level.id} onClick={() => setSelected(level.id)}
              className={`flex items-center gap-4 p-5 rounded-sm border-2 text-left transition-all duration-200 ${
                selected === level.id
                  ? "border-saffron bg-saffron-pale"
                  : "border-aubergine/10 bg-white hover:border-aubergine/30"
              }`}>
              <span className="text-3xl">{level.icon}</span>
              <div>
                <div className="font-medium text-aubergine text-sm">{level.title}</div>
                <div className="text-xs text-[#5A4060] mt-0.5 font-light">{level.desc}</div>
              </div>
              {selected === level.id && <span className="ml-auto text-saffron text-lg">✦</span>}
            </button>
          ))}
        </div>
        <button onClick={handleContinue} disabled={!selected || saving}
          className="w-full ff-btn-primary py-4 disabled:opacity-40 disabled:cursor-not-allowed">
          {saving ? "Setting up your space..." : "Enter Focus Fora →"}
        </button>
      </div>
    </div>
  );
}
