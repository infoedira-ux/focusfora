"use client";
import { useState } from "react";
import Link from "next/link";

const SUBJECTS = ["Biology", "Chemistry", "Physics", "Mathematics", "English", "History", "Geography", "Business Studies", "Agriculture", "Computer Studies"];
const FORMS = ["Form 1", "Form 2", "Form 3", "Form 4"];

const TOPIC_SUGGESTIONS: Record<string, string[]> = {
  "Biology": ["Photosynthesis", "Cell Structure", "Reproduction", "Genetics", "Ecology", "Nutrition", "Transport in Plants", "Respiration"],
  "Chemistry": ["Acids and Bases", "Organic Chemistry", "Electrochemistry", "Atomic Structure", "Chemical Bonding", "Rates of Reaction"],
  "Physics": ["Waves", "Electricity", "Magnetism", "Mechanics", "Optics", "Radioactivity", "Heat Transfer"],
  "Mathematics": ["Quadratic Equations", "Trigonometry", "Statistics", "Vectors", "Matrices", "Integration", "Differentiation"],
  "English": ["Essay Writing", "Comprehension", "Grammar", "Oral Skills", "Functional Writing", "Poetry Analysis"],
  "History": ["Nationalism in Africa", "Colonial Period", "Independence Movements", "Post-Independence Kenya"],
  "Geography": ["Agriculture in Kenya", "Population", "Climate", "Map Reading", "Natural Resources"],
};

export default function QuizPage() {
  const [subject, setSubject] = useState("Biology");
  const [form, setForm] = useState("Form 3");
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const [quiz, setQuiz] = useState<any>(null);
  const [error, setError] = useState("");
  const [showScheme, setShowScheme] = useState<Record<number, boolean>>({});
  const [mode, setMode] = useState<"setup" | "exam">("setup");

  async function generateQuiz() {
    if (!topic.trim()) return;
    setLoading(true);
    setError("");
    setQuiz(null);
    setShowScheme({});

    try {
      const res = await fetch("/api/quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, form: parseInt(form.replace("Form ", "")), topic }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setQuiz(data);
      setMode("exam");
    } catch (e: any) {
      setError(e.message || "Could not generate questions. Try again.");
    } finally {
      setLoading(false);
    }
  }

  function shareToWhatsApp() {
    if (!quiz) return;
    const text = `📝 *KCSE Practice: ${quiz.subject} — ${quiz.topic}*%0A%0A${quiz.questions.length} exam questions with mark schemes%0AForm ${quiz.form} · ${quiz.total_marks} marks%0A%0AGenerate your own free on Focus Fora 👇%0Ahttps://focusfora.vercel.app/quiz`;
    window.open(`https://wa.me/?text=${text}`, "_blank");
  }

  const suggestions = TOPIC_SUGGESTIONS[subject] || [];

  return (
    <div className="min-h-screen bg-offwhite">
      <nav className="bg-aubergine px-6 md:px-12 py-4 flex justify-between items-center sticky top-0 z-10">
        <Link href="/dashboard" className="font-serif text-xl text-offwhite">
          Focus<span className="text-saffron">Fora</span>
        </Link>
        <div className="flex items-center gap-4">
          {mode === "exam" && (
            <button onClick={() => { setMode("setup"); setQuiz(null); }}
              className="text-offwhite/60 text-xs hover:text-saffron transition-colors uppercase tracking-wider">
              ← New Quiz
            </button>
          )}
          <Link href="/dashboard" className="text-offwhite/60 text-xs hover:text-saffron transition-colors uppercase tracking-wider">
            Dashboard
          </Link>
        </div>
      </nav>

      {mode === "setup" ? (
        <div className="px-6 md:px-12 py-10 max-w-2xl mx-auto">
          <p className="ff-section-eyebrow mb-2">KNEC Simulation Engine</p>
          <h1 className="font-serif text-4xl text-aubergine font-light mb-2">Practice Questions</h1>
          <p className="text-[#5A4060] text-sm font-light mb-10">
            AI-generated KCSE-style questions with mark schemes. New questions every time.
          </p>

          <div className="bg-white border border-aubergine/[0.06] rounded-sm p-8 space-y-6">
            {/* Subject */}
            <div>
              <label className="block text-xs font-medium text-aubergine uppercase tracking-wider mb-3">Subject</label>
              <div className="flex flex-wrap gap-2">
                {SUBJECTS.map(s => (
                  <button key={s} onClick={() => { setSubject(s); setTopic(""); }}
                    className={`text-xs font-medium px-4 py-2 rounded-sm transition-all ${
                      subject === s ? "bg-aubergine text-offwhite" : "bg-offwhite border border-aubergine/10 text-[#5A4060] hover:border-aubergine/30"
                    }`}>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Form */}
            <div>
              <label className="block text-xs font-medium text-aubergine uppercase tracking-wider mb-3">Form Level</label>
              <div className="flex gap-2">
                {FORMS.map(f => (
                  <button key={f} onClick={() => setForm(f)}
                    className={`flex-1 text-xs font-medium py-3 rounded-sm transition-all ${
                      form === f ? "bg-saffron text-aubergine" : "bg-offwhite border border-aubergine/10 text-[#5A4060] hover:border-aubergine/30"
                    }`}>
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Topic */}
            <div>
              <label className="block text-xs font-medium text-aubergine uppercase tracking-wider mb-3">Topic</label>
              <input value={topic} onChange={(e) => setTopic(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && generateQuiz()}
                placeholder={`e.g. ${suggestions[0] || "Enter topic"}`}
                className="w-full border border-aubergine/20 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-saffron bg-offwhite mb-3" />
              {suggestions.length > 0 && (
                <div>
                  <p className="text-xs text-[#5A4060]/60 mb-2">Quick topics:</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestions.map(s => (
                      <button key={s} onClick={() => setTopic(s)}
                        className="text-xs bg-saffron-pale text-aubergine px-3 py-1 rounded-sm hover:bg-saffron transition-colors">
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button onClick={generateQuiz} disabled={!topic.trim() || loading}
              className="w-full ff-btn-primary py-4 text-sm disabled:opacity-40 disabled:cursor-not-allowed">
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="animate-spin">⟳</span> Generating KCSE questions...
                </span>
              ) : (
                "Generate 10 Questions →"
              )}
            </button>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-sm p-4 text-sm text-red-700">
                {error}
              </div>
            )}
          </div>

          {/* Info cards */}
          <div className="grid grid-cols-3 gap-3 mt-6">
            {[
              { icon: "🎓", label: "KNEC Format", desc: "Real exam style" },
              { icon: "📝", label: "Mark Schemes", desc: "See how to answer" },
              { icon: "♾️", label: "Unlimited", desc: "New questions every time" },
            ].map(card => (
              <div key={card.label} className="bg-white border border-aubergine/[0.06] rounded-sm p-4 text-center">
                <div className="text-2xl mb-1">{card.icon}</div>
                <div className="text-xs font-medium text-aubergine">{card.label}</div>
                <div className="text-[10px] text-[#5A4060] mt-0.5">{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="px-6 md:px-12 py-10 max-w-3xl mx-auto">
          {/* Quiz header */}
          <div className="bg-aubergine rounded-sm p-6 mb-8">
            <p className="text-saffron text-xs uppercase tracking-widest mb-1">KNEC Simulation</p>
            <h2 className="font-serif text-2xl text-offwhite mb-1">
              {quiz?.subject} — {quiz?.topic}
            </h2>
            <div className="flex items-center justify-between">
              <p className="text-offwhite/60 text-sm">
                Form {quiz?.form} · {quiz?.questions?.length} questions · {quiz?.total_marks} marks
              </p>
              <div className="flex gap-2">
                <button onClick={shareToWhatsApp}
                  className="flex items-center gap-1 bg-[#25D366] text-white text-xs font-medium px-3 py-2 rounded-sm hover:bg-[#20bc5a] transition-colors">
                  📲 Share
                </button>
                <button onClick={() => { setMode("setup"); setQuiz(null); }}
                  className="bg-white/10 text-offwhite text-xs font-medium px-3 py-2 rounded-sm hover:bg-white/20 transition-colors">
                  New Quiz
                </button>
              </div>
            </div>
          </div>

          {/* Questions */}
          <div className="space-y-6">
            {quiz?.questions?.map((q: any) => (
              <div key={q.question_number} className="bg-white border border-aubergine/[0.06] rounded-sm overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="bg-aubergine text-offwhite font-serif text-sm font-semibold w-8 h-8 rounded-sm flex items-center justify-center flex-shrink-0">
                        {q.question_number}
                      </span>
                      <span className={`text-[10px] font-medium px-2 py-0.5 rounded-sm ${
                        q.type === "structured" ? "bg-aubergine/10 text-aubergine" : "bg-saffron-pale text-saffron"
                      }`}>
                        {q.type?.replace("_", " ")}
                      </span>
                    </div>
                    <span className="text-xs font-medium text-saffron bg-saffron-pale px-3 py-1 rounded-sm">
                      {q.marks} mark{q.marks !== 1 ? "s" : ""}
                    </span>
                  </div>

                  <p className="text-sm text-aubergine leading-relaxed font-medium mb-4">
                    {q.question_text}
                  </p>

                  {/* Answer space */}
                  <textarea
                    placeholder="Write your answer here..."
                    className="w-full border border-aubergine/10 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-saffron bg-offwhite resize-none"
                    rows={3}
                  />
                </div>

                {/* Mark scheme toggle */}
                <div className="border-t border-aubergine/[0.06]">
                  <button
                    onClick={() => setShowScheme(p => ({ ...p, [q.question_number]: !p[q.question_number] }))}
                    className="w-full px-6 py-3 text-xs font-medium text-aubergine hover:bg-saffron-pale transition-colors flex items-center justify-between">
                    <span>📋 {showScheme[q.question_number] ? "Hide" : "Show"} Mark Scheme</span>
                    <span className="text-aubergine/30">{showScheme[q.question_number] ? "▲" : "▼"}</span>
                  </button>

                  {showScheme[q.question_number] && (
                    <div className="px-6 pb-6 bg-saffron-pale/50">
                      <p className="text-xs font-medium text-aubergine uppercase tracking-wider mb-3 pt-3">
                        Marking Scheme — {q.marks} marks
                      </p>
                      <div className="space-y-2">
                        {q.mark_scheme?.map((point: any, j: number) => (
                          <div key={j} className="flex items-start justify-between gap-4">
                            <div className="flex items-start gap-2">
                              <span className="text-saffron mt-0.5 flex-shrink-0">✦</span>
                              <span className="text-xs text-[#5A4060]">{point.point || point.step}</span>
                            </div>
                            <span className="text-[10px] font-medium text-aubergine bg-white px-2 py-0.5 rounded-sm flex-shrink-0">
                              {point.marks}m
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-8 text-center space-y-3">
            <button onClick={generateQuiz}
              className="ff-btn-primary px-8 py-3">
              ⟳ Generate New Questions on {quiz?.topic}
            </button>
            <div>
              <button onClick={() => { setMode("setup"); setQuiz(null); }}
                className="text-xs text-[#5A4060] hover:text-saffron transition-colors">
                ← Try a different topic
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
