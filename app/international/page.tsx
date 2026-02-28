"use client";
import { useState } from "react";
import Link from "next/link";

const CURRICULA = [
  {
    id: "igcse",
    name: "IGCSE",
    fullName: "International General Certificate of Secondary Education",
    body: "Cambridge Assessment International Education",
    flag: "🇬🇧",
    ages: "14-16 years (Year 10-11)",
    color: "bg-aubergine",
    textLight: true,
    desc: "The world's most popular international qualification for 14-16 year olds. Recognised by universities globally.",
    subjects: [
      { name: "English Language", code: "0500", type: "Core" },
      { name: "English Literature", code: "0475", type: "Core" },
      { name: "Mathematics", code: "0580", type: "Core" },
      { name: "Additional Mathematics", code: "0606", type: "Extended" },
      { name: "Biology", code: "0610", type: "Science" },
      { name: "Chemistry", code: "0620", type: "Science" },
      { name: "Physics", code: "0625", type: "Science" },
      { name: "Combined Science", code: "0653", type: "Science" },
      { name: "History", code: "0470", type: "Humanities" },
      { name: "Geography", code: "0460", type: "Humanities" },
      { name: "Economics", code: "0455", type: "Humanities" },
      { name: "Business Studies", code: "0450", type: "Business" },
      { name: "Accounting", code: "0452", type: "Business" },
      { name: "Computer Science", code: "0478", type: "Technology" },
      { name: "French", code: "0520", type: "Languages" },
      { name: "Kiswahili", code: "0538", type: "Languages" },
    ],
    grading: [
      { grade: "A*", desc: "Outstanding performance", equiv: "Above 90%" },
      { grade: "A", desc: "Excellent performance", equiv: "80-89%" },
      { grade: "B", desc: "Good performance", equiv: "70-79%" },
      { grade: "C", desc: "Satisfactory performance", equiv: "60-69%" },
      { grade: "D", desc: "Limited performance", equiv: "50-59%" },
      { grade: "E", desc: "Very limited performance", equiv: "40-49%" },
      { grade: "F/G", desc: "Extremely limited", equiv: "Below 40%" },
    ],
    tips: [
      "Past papers are your most valuable resource — Cambridge releases all past papers going back 10+ years",
      "Mark schemes show exactly what examiners want — study them as carefully as the questions",
      "Command words matter: 'State' wants a fact, 'Explain' wants cause and effect, 'Discuss' wants balanced argument",
      "Extended response questions are where A* candidates separate themselves — practice writing under timed conditions",
      "Coursework and practical components contribute to your final grade — don't neglect them",
    ],
    universities: "IGCSE is accepted by universities in UK, USA, Canada, Australia, India, Kenya and 160+ countries. Grade C or above is typically required for entry.",
  },
  {
    id: "alevel",
    name: "A-Levels",
    fullName: "Advanced Level Qualifications",
    body: "Cambridge / Edexcel / AQA",
    flag: "🎓",
    ages: "16-18 years (Year 12-13)",
    color: "bg-saffron",
    textLight: false,
    desc: "The gold standard pre-university qualification. Students specialise in 3-4 subjects studied in depth for 2 years.",
    subjects: [
      { name: "Mathematics", code: "9709", type: "Core" },
      { name: "Further Mathematics", code: "9231", type: "Advanced" },
      { name: "Biology", code: "9700", type: "Science" },
      { name: "Chemistry", code: "9701", type: "Science" },
      { name: "Physics", code: "9702", type: "Science" },
      { name: "English Literature", code: "9695", type: "Humanities" },
      { name: "History", code: "9489", type: "Humanities" },
      { name: "Geography", code: "9696", type: "Humanities" },
      { name: "Economics", code: "9708", type: "Business" },
      { name: "Business", code: "9609", type: "Business" },
      { name: "Accounting", code: "9706", type: "Business" },
      { name: "Computer Science", code: "9618", type: "Technology" },
      { name: "Psychology", code: "9990", type: "Social Sciences" },
      { name: "Sociology", code: "9699", type: "Social Sciences" },
    ],
    grading: [
      { grade: "A*", desc: "Exceptional", equiv: "90%+" },
      { grade: "A", desc: "Excellent", equiv: "80-89%" },
      { grade: "B", desc: "Good", equiv: "70-79%" },
      { grade: "C", desc: "Satisfactory", equiv: "60-69%" },
      { grade: "D", desc: "Limited", equiv: "50-59%" },
      { grade: "E", desc: "Minimum pass", equiv: "40-49%" },
    ],
    tips: [
      "Choose subjects aligned with your university course — check entry requirements before selecting",
      "A-Level content is significantly harder than IGCSE — expect to work 2-3 hours per subject per day",
      "Essay subjects (History, Economics, Literature) reward structured argument — practice planning before writing",
      "Science practicals are assessed — keep detailed lab notebooks throughout the course",
      "University applications (UCAS) use predicted grades — build a strong relationship with your teachers",
    ],
    universities: "3 A-Levels at grades A*AA to BBC typically required by UK universities. Used for entry to universities in UK, USA (with SAT), Canada, Australia and worldwide.",
  },
  {
    id: "ib",
    name: "IB Diploma",
    fullName: "International Baccalaureate Diploma Programme",
    body: "International Baccalaureate Organization",
    flag: "🌐",
    ages: "16-19 years",
    color: "bg-aubergine/5",
    textLight: false,
    desc: "A rigorous 2-year programme balancing breadth and depth. Students study 6 subjects plus Theory of Knowledge, Extended Essay and CAS.",
    subjects: [
      { name: "Group 1: Language & Literature", code: "HL/SL", type: "Language" },
      { name: "Group 2: Language Acquisition", code: "HL/SL", type: "Language" },
      { name: "Group 3: Individuals & Societies", code: "HL/SL", type: "Humanities" },
      { name: "Group 4: Sciences", code: "HL/SL", type: "Science" },
      { name: "Group 5: Mathematics", code: "HL/SL/AI/AA", type: "Mathematics" },
      { name: "Group 6: The Arts", code: "HL/SL", type: "Arts" },
      { name: "Theory of Knowledge (TOK)", code: "Core", type: "Core" },
      { name: "Extended Essay (EE)", code: "Core 4000 words", type: "Core" },
      { name: "Creativity, Activity, Service (CAS)", code: "Core", type: "Core" },
    ],
    grading: [
      { grade: "7", desc: "Excellent", equiv: "Top level" },
      { grade: "6", desc: "Very Good", equiv: "Strong pass" },
      { grade: "5", desc: "Good", equiv: "Average pass" },
      { grade: "4", desc: "Satisfactory", equiv: "Minimum pass" },
      { grade: "3", desc: "Mediocre", equiv: "Below average" },
      { grade: "2", desc: "Poor", equiv: "Weak" },
      { grade: "1", desc: "Very Poor", equiv: "Minimum" },
    ],
    tips: [
      "The Extended Essay (4000 words) takes an entire year — choose your topic carefully in Year 1",
      "TOK is unique to IB — it asks 'how do we know what we know?' Practice this kind of meta-thinking",
      "CAS (Creativity, Activity, Service) requires genuine reflection, not just activity logging",
      "HL subjects (Higher Level) are taught in more depth — typically 240 teaching hours vs 150 for SL",
      "The IB diploma score (max 45) is highly respected — 40+ points opens doors to top global universities",
    ],
    universities: "IB Diploma accepted by universities worldwide. Highly valued by US Ivy League, UK Russell Group, and top universities in Europe, Canada and Australia. Minimum 24 points typically required.",
  },
  {
    id: "american",
    name: "American Curriculum",
    fullName: "US Common Core / AP Program",
    body: "College Board / Common Core State Standards",
    flag: "🇺🇸",
    ages: "K-12 (Ages 5-18)",
    color: "bg-saffron-pale",
    textLight: false,
    desc: "The US curriculum system covers Kindergarten through Grade 12. Advanced Placement (AP) courses allow high school students to earn college credit.",
    subjects: [
      { name: "AP Calculus AB/BC", code: "Mathematics", type: "STEM" },
      { name: "AP Statistics", code: "Mathematics", type: "STEM" },
      { name: "AP Biology", code: "Science", type: "STEM" },
      { name: "AP Chemistry", code: "Science", type: "STEM" },
      { name: "AP Physics 1/2/C", code: "Science", type: "STEM" },
      { name: "AP English Language", code: "English", type: "Humanities" },
      { name: "AP English Literature", code: "English", type: "Humanities" },
      { name: "AP US History", code: "History", type: "Humanities" },
      { name: "AP World History", code: "History", type: "Humanities" },
      { name: "AP Economics (Micro/Macro)", code: "Social Sciences", type: "Business" },
      { name: "AP Computer Science A", code: "Technology", type: "STEM" },
      { name: "AP Psychology", code: "Social Sciences", type: "Humanities" },
    ],
    grading: [
      { grade: "A (4.0)", desc: "Excellent — 90-100%", equiv: "Grade A" },
      { grade: "B (3.0)", desc: "Good — 80-89%", equiv: "Grade B" },
      { grade: "C (2.0)", desc: "Average — 70-79%", equiv: "Grade C" },
      { grade: "D (1.0)", desc: "Below Average — 60-69%", equiv: "Grade D" },
      { grade: "F (0.0)", desc: "Failing — Below 60%", equiv: "Fail" },
    ],
    tips: [
      "GPA (Grade Point Average) is central to US university admissions — consistent performance matters",
      "AP exams scored 1-5: score of 3+ often earns college credit, saving money and time at university",
      "SAT/ACT scores complement GPA for US university applications — start preparing in Grade 10",
      "Extracurricular activities matter enormously for US university applications — pursue genuine interests",
      "The Common App essay is your chance to show personality — authenticity beats perfection",
    ],
    universities: "US universities use GPA, SAT/ACT, AP scores and extracurriculars holistically. Top universities (Harvard, MIT, Stanford) typically require 3.9+ GPA and 1500+ SAT.",
  },
];

const STUDY_TIPS: Record<string, any[]> = {
  igcse: [
    { subject: "Mathematics (0580)", tips: ["Show all working — method marks are awarded even if final answer is wrong", "Extended paper (grades A*-E) vs Core paper (grades C-G) — choose carefully", "Practise graph drawing and interpretation — always included", "Calculator paper and non-calculator paper require different preparation"] },
    { subject: "Biology (0610)", tips: ["Learn definitions precisely — one word wrong loses the mark", "Diagrams must be labelled with full names, not abbreviations", "Practical papers test experimental skills — understand apparatus and methods", "Key topics: cells, transport, reproduction, genetics, ecology"] },
    { subject: "Chemistry (0620)", tips: ["Memorise the reactivity series — it underpins many questions", "Balancing equations correctly is essential — practise daily", "Understand the difference between atomic number and mass number", "Industrial processes (Haber, Contact, electrolysis) are always examined"] },
    { subject: "Physics (0625)", tips: ["Understand the equations — derive them, don't just memorise", "Practise P-V graphs, I-V characteristics and wave diagrams", "Know units for every quantity — marks are lost for missing units", "Multiple choice paper rewards speed and accuracy — practise under timed conditions"] },
    { subject: "English Language (0500)", tips: ["Reading questions: find quotes, don't paraphrase unless asked", "Directed writing: match the form — letter, report, speech each has conventions", "Composition: plan before writing — structure earns marks", "Vocabulary in context questions need the surrounding sentence to answer accurately"] },
  ],
};

export default function InternationalPage() {
  const [activeCurriculum, setActiveCurriculum] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("Overview");

  const curriculum = CURRICULA.find(c => c.id === activeCurriculum);

  function shareToWhatsApp() {
    const text = `🌍 *International Education Guides on Focus Fora*%0A%0AIGCSE · A-Levels · IB Diploma · American Curriculum%0A%0ASubject guides, grading systems and study tips 👇%0Ahttps://focusfora.vercel.app/international`;
    window.open(`https://wa.me/?text=${text}`, "_blank");
  }

  return (
    <div className="min-h-screen bg-offwhite">
      <nav className="bg-aubergine px-6 md:px-12 py-4 flex justify-between items-center sticky top-0 z-10">
        <Link href="/dashboard" className="font-serif text-xl text-offwhite">
          Focus<span className="text-saffron">Fora</span>
        </Link>
        <div className="flex items-center gap-4">
          {activeCurriculum && (
            <button onClick={() => setActiveCurriculum(null)}
              className="text-offwhite/60 text-xs hover:text-saffron transition-colors uppercase tracking-wider">
              ← All Curricula
            </button>
          )}
          <button onClick={shareToWhatsApp}
            className="bg-[#25D366] text-white text-xs font-medium px-3 py-2 rounded-sm hover:bg-[#20bc5a] transition-colors">
            📲 Share
          </button>
          <Link href="/dashboard" className="text-offwhite/60 text-xs hover:text-saffron transition-colors uppercase tracking-wider">
            Dashboard
          </Link>
        </div>
      </nav>

      <div className="px-6 md:px-12 py-10 max-w-5xl mx-auto">
        {!activeCurriculum ? (
          <>
            <p className="ff-section-eyebrow mb-2">Global Education · International Schools</p>
            <h1 className="font-serif text-4xl text-aubergine font-light mb-2">International Education</h1>
            <p className="text-[#5A4060] text-sm font-light mb-2">
              IGCSE, A-Levels, IB Diploma and American curriculum — guides, subject tips and university pathways.
            </p>
            <p className="text-saffron text-xs font-medium mb-10">
              ✦ For students at international schools in Kenya and across East Africa
            </p>

            <div className="grid md:grid-cols-2 gap-5 mb-10">
              {CURRICULA.map(c => (
                <button key={c.id} onClick={() => setActiveCurriculum(c.id)}
                  className={`${c.color} p-6 rounded-sm text-left hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group border border-aubergine/[0.06]`}>
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-4xl">{c.flag}</span>
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-sm ${c.textLight ? "bg-white/20 text-white" : "bg-aubergine/10 text-aubergine"}`}>
                      {c.ages}
                    </span>
                  </div>
                  <h2 className={`font-serif text-2xl font-semibold mb-1 ${c.textLight ? "text-offwhite" : "text-aubergine"}`}>
                    {c.name}
                  </h2>
                  <p className={`text-xs mb-2 ${c.textLight ? "text-offwhite/60" : "text-saffron"}`}>{c.body}</p>
                  <p className={`text-sm font-light mb-4 ${c.textLight ? "text-offwhite/70" : "text-[#5A4060]"}`}>{c.desc}</p>
                  <div className={`text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all ${c.textLight ? "text-saffron" : "text-aubergine"}`}>
                    {c.subjects.length} subjects · Study guides → 
                  </div>
                </button>
              ))}
            </div>

            {/* International schools in Kenya */}
            <div className="bg-aubergine rounded-sm p-8">
              <h2 className="font-serif text-2xl text-offwhite mb-2">International Schools in Kenya</h2>
              <p className="text-offwhite/60 text-sm font-light mb-6">Major international schools and their curricula — for parents making school choices.</p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { name: "Aga Khan Academy Nairobi", curriculum: "IB Diploma + MYP", location: "Westlands" },
                  { name: "Braeburn Schools", curriculum: "Cambridge IGCSE + A-Levels", location: "Multiple campuses" },
                  { name: "ISK (International School of Kenya)", curriculum: "American + IB", location: "Lavington" },
                  { name: "Rosslyn Academy", curriculum: "American Curriculum + AP", location: "Rosslyn" },
                  { name: "Brookhouse School", curriculum: "Cambridge IGCSE + A-Levels", location: "Karen" },
                  { name: "Peponi School", curriculum: "Cambridge IGCSE + A-Levels", location: "Ruiru" },
                  { name: "Banda School", curriculum: "Cambridge Primary + IGCSE", location: "Karen" },
                  { name: "Hillcrest International Schools", curriculum: "Cambridge IGCSE + A-Levels", location: "Lang'ata" },
                ].map(school => (
                  <div key={school.name} className="bg-white/10 rounded-sm p-4">
                    <h3 className="text-offwhite font-medium text-sm mb-1">{school.name}</h3>
                    <p className="text-saffron text-xs">{school.curriculum}</p>
                    <p className="text-offwhite/40 text-xs">{school.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Curriculum detail */}
            <div className={`${curriculum?.color} rounded-sm p-8 mb-8`}>
              <p className={`text-xs uppercase tracking-widest mb-1 ${curriculum?.textLight ? "text-saffron" : "text-saffron"}`}>
                {curriculum?.flag} {curriculum?.body}
              </p>
              <h1 className={`font-serif text-4xl font-light mb-1 ${curriculum?.textLight ? "text-offwhite" : "text-aubergine"}`}>
                {curriculum?.name}
              </h1>
              <p className={`text-sm mb-1 ${curriculum?.textLight ? "text-offwhite/60" : "text-[#5A4060]"}`}>
                {curriculum?.fullName}
              </p>
              <p className={`text-xs ${curriculum?.textLight ? "text-offwhite/40" : "text-aubergine/50"}`}>
                {curriculum?.ages}
              </p>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {["Overview", "Subjects", "Grading", "Study Tips", "Universities"].map(tab => (
                <button key={tab} onClick={() => setActiveTab(tab)}
                  className={`text-xs font-medium px-4 py-2 rounded-sm transition-all ${
                    activeTab === tab ? "bg-aubergine text-offwhite" : "bg-white border border-aubergine/10 text-[#5A4060]"
                  }`}>
                  {tab}
                </button>
              ))}
            </div>

            {activeTab === "Overview" && (
              <div>
                <p className="text-[#5A4060] leading-relaxed mb-8">{curriculum?.desc}</p>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { label: "Subjects Available", value: `${curriculum?.subjects.length}+` },
                    { label: "Grade Levels", value: curriculum?.ages || "" },
                    { label: "Recognised By", value: "160+ countries" },
                  ].map(stat => (
                    <div key={stat.label} className="bg-saffron-pale border border-aubergine/[0.06] rounded-sm p-4">
                      <div className="text-xs text-saffron uppercase tracking-wider mb-1">{stat.label}</div>
                      <div className="font-serif text-xl text-aubergine">{stat.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "Subjects" && (
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {Array.from(new Set(curriculum?.subjects.map((s: any) => s.type))).map((type: any) => (
                    <span key={type} className="text-xs bg-aubergine/5 text-aubergine px-3 py-1 rounded-sm">{type}</span>
                  ))}
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {curriculum?.subjects.map((subject: any) => (
                    <div key={subject.name} className="bg-white border border-aubergine/[0.06] rounded-sm p-4 flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-aubergine">{subject.name}</h3>
                        <p className="text-xs text-[#5A4060]">{subject.code}</p>
                      </div>
                      <span className="text-[10px] bg-saffron-pale text-saffron px-2 py-0.5 rounded-sm">{subject.type}</span>
                    </div>
                  ))}
                </div>

                {/* Subject specific tips */}
                {activeCurriculum === "igcse" && (
                  <div className="mt-8">
                    <h2 className="font-serif text-xl text-aubergine mb-4">Subject-Specific Tips</h2>
                    <div className="space-y-4">
                      {STUDY_TIPS.igcse.map((item, i) => (
                        <div key={i} className="bg-white border border-aubergine/[0.06] rounded-sm p-5">
                          <h3 className="font-serif text-base text-aubergine font-semibold mb-3">{item.subject}</h3>
                          <ul className="space-y-2">
                            {item.tips.map((tip: string, j: number) => (
                              <li key={j} className="flex items-start gap-2 text-sm text-[#5A4060]">
                                <span className="text-saffron flex-shrink-0 mt-0.5">✦</span>
                                {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === "Grading" && (
              <div className="space-y-3">
                {curriculum?.grading.map((g: any, i: number) => (
                  <div key={i} className="bg-white border border-aubergine/[0.06] rounded-sm p-4 flex items-center gap-4">
                    <div className="bg-aubergine text-offwhite font-serif text-xl font-semibold w-12 h-12 rounded-sm flex items-center justify-center flex-shrink-0">
                      {g.grade}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-aubergine">{g.desc}</p>
                    </div>
                    <span className="text-xs text-saffron font-medium bg-saffron-pale px-3 py-1 rounded-sm">{g.equiv}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "Study Tips" && (
              <div className="space-y-4">
                {curriculum?.tips.map((tip: string, i: number) => (
                  <div key={i} className="bg-white border border-aubergine/[0.06] rounded-sm p-5 flex items-start gap-4">
                    <div className="bg-saffron text-aubergine font-serif text-lg font-semibold w-8 h-8 rounded-sm flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-sm text-[#5A4060] leading-relaxed pt-1">{tip}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "Universities" && (
              <div className="bg-white border border-aubergine/[0.06] rounded-sm p-6">
                <h2 className="font-serif text-xl text-aubergine mb-4">University Recognition</h2>
                <p className="text-sm text-[#5A4060] leading-relaxed">{curriculum?.universities}</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
