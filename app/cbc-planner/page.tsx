"use client";
import { useState } from "react";
import Link from "next/link";

const GRADES = [
  { id:"pp1", label:"PP1", age:"4-5 yrs" }, { id:"pp2", label:"PP2", age:"5-6 yrs" },
  { id:"g1", label:"Grade 1", age:"6-7 yrs" }, { id:"g2", label:"Grade 2", age:"7-8 yrs" },
  { id:"g3", label:"Grade 3", age:"8-9 yrs" }, { id:"g4", label:"Grade 4", age:"9-10 yrs" },
  { id:"g5", label:"Grade 5", age:"10-11 yrs" }, { id:"g6", label:"Grade 6", age:"11-12 yrs" },
  { id:"g7", label:"Grade 7", age:"12-13 yrs" }, { id:"g8", label:"Grade 8", age:"13-14 yrs" },
  { id:"g9", label:"Grade 9", age:"14-15 yrs" },
];

const TERMS = [
  { id:"t1", label:"Term 1", months:"Jan — Apr", weeks:13 },
  { id:"t2", label:"Term 2", months:"May — Aug", weeks:13 },
  { id:"t3", label:"Term 3", months:"Sep — Nov", weeks:10 },
];

const PLANS: Record<string, Record<string, any[]>> = {
  pp1: {
    t1: [
      { week:"1-2", theme:"All About Me", strand:"Language Activities", activities:["Name recognition games","Body parts song","Draw self-portrait","My family circle"], assessment:"Observation — can child identify self and family members?", portfolio:"Self-portrait drawing" },
      { week:"3-4", theme:"My Family", strand:"Environmental Activities", activities:["Family tree drawing","Family roles roleplay","Community helpers discussion","Family photo sharing"], assessment:"Oral presentation of family drawing", portfolio:"Family tree artwork" },
      { week:"5-6", theme:"Colours Around Us", strand:"Creative Arts", activities:["Colour sorting safari","Rainbow painting","Colour hunt outdoors","Colour mixing experiment"], assessment:"Can child name 6 basic colours?", portfolio:"Colour mixing artwork" },
      { week:"7-8", theme:"Shapes and Numbers", strand:"Mathematical Activities", activities:["Shape hunt around school","Counting stones 1-10","Shape collage","Number formation in sand"], assessment:"Count objects to 10 reliably", portfolio:"Shape collage" },
      { week:"9-10", theme:"Animals and Plants", strand:"Environmental Activities", activities:["Nature walk observation","Animal sounds game","Planting seeds","Drawing favourite animal"], assessment:"Names 5 common animals and their sounds", portfolio:"Seed planting diary (page 1)" },
      { week:"11-12", theme:"Water and Weather", strand:"Environmental Activities", activities:["Rain painting","Weather chart daily","Water play and measurement","Cloud observation"], assessment:"Daily weather observation chart completed", portfolio:"Weather chart" },
      { week:"13", theme:"Review and Celebration", strand:"All Strands", activities:["Portfolio review with child","Share favourite work","Class celebration of learning","Parent sharing session"], assessment:"Portfolio review — growth from Week 1", portfolio:"Complete Term 1 portfolio" },
    ],
    t2: [
      { week:"1-2", theme:"Food and Nutrition", strand:"Environmental Activities", activities:["Healthy plate activity","Food sorting game","Visit market or kitchen","Cook simple dish with class"], assessment:"Can identify healthy vs unhealthy foods?", portfolio:"Healthy plate drawing" },
      { week:"3-4", theme:"Our School", strand:"Language Activities", activities:["School map drawing","Meet school workers","Rules and responsibility","Letter to teacher"], assessment:"Names all school workers visited", portfolio:"School map" },
      { week:"5-6", theme:"Transport", strand:"Environmental Activities", activities:["Vehicle sorting","Sounds of transport","Build vehicles from boxes","Road safety rules"], assessment:"Names 5 types of transport and their uses", portfolio:"Transport artwork" },
      { week:"7-8", theme:"Numbers 11-20", strand:"Mathematical Activities", activities:["Counting groups of objects","Teen number songs","Number line walking","Comparing quantities"], assessment:"Counts reliably to 20", portfolio:"Number book page" },
      { week:"9-10", theme:"My Body Keeps Me Healthy", strand:"Psychomotor Activities", activities:["Exercise routines","Hygiene practice","Healthy habits chart","Body parts functions"], assessment:"Demonstrates 5 daily hygiene habits", portfolio:"Hygiene habits chart" },
      { week:"11-12", theme:"Stories and Songs", strand:"Language Activities", activities:["Storytelling circle","Create class story","Traditional songs and dances","Story illustration"], assessment:"Retells a 3-part story in sequence", portfolio:"Story illustration" },
      { week:"13", theme:"Term Review", strand:"All Strands", activities:["Portfolio assembly","Favourite learning display","Parent sharing afternoon","Term celebration"], assessment:"Complete portfolio review", portfolio:"Term 2 complete portfolio" },
    ],
    t3: [
      { week:"1-2", theme:"Celebrations and Culture", strand:"Creative Arts", activities:["Traditional dance","Cultural dress day","Celebration foods","Cultural art patterns"], assessment:"Participates confidently in cultural activities", portfolio:"Cultural art piece" },
      { week:"3-4", theme:"The Environment", strand:"Environmental Activities", activities:["Litter cleanup","Recycling sorting","Plant care","Environmental pledge"], assessment:"Demonstrates understanding of caring for environment", portfolio:"Environmental pledge artwork" },
      { week:"5-6", theme:"Growing Up", strand:"Language Activities", activities:["Baby photos to now","What I can do now","Future dreams drawing","Growth timeline"], assessment:"Articulates personal growth with examples", portfolio:"Growth timeline" },
      { week:"7-8", theme:"Revision and Consolidation", strand:"All Strands", activities:["Favourite activities from the year","Skills demonstration","Peer teaching","Class yearbook"], assessment:"Demonstrates key competencies from all strands", portfolio:"Class yearbook page" },
      { week:"9-10", theme:"Year-End Celebration", strand:"All Strands", activities:["Portfolio presentation to parents","Graduation ceremony preparation","Thank you cards","Next year discussion"], assessment:"Full year portfolio review and presentation", portfolio:"Complete year portfolio presented" },
    ],
  },
  g4: {
    t1: [
      { week:"1-2", theme:"Number Systems", strand:"Mathematics", activities:["Place value to 10,000","Rounding and estimation","Number patterns","Real-world application: market prices"], assessment:"Writes numbers to 10,000 in words and figures", portfolio:"Number systems investigation" },
      { week:"3-4", theme:"Our Environment — Kenya", strand:"Social Studies", activities:["Kenya map drawing — 47 counties","Physical features of Kenya","Climate zones","County research project"], assessment:"Labels Kenya map with major counties and features", portfolio:"Kenya map poster" },
      { week:"5-6", theme:"Living Things", strand:"Integrated Science", activities:["Classification of living things","Local ecosystem survey","Food chain diagrams","Microscope observation"], assessment:"Constructs accurate food chain from local ecosystem", portfolio:"Ecosystem diagram" },
      { week:"7-8", theme:"Narrative Writing", strand:"English", activities:["Story structure: beginning, middle, end","Character development","Setting description","Peer editing"], assessment:"Writes a 150-word narrative with clear structure", portfolio:"Published narrative story" },
      { week:"9-10", theme:"Fractions", strand:"Mathematics", activities:["Fraction models with food","Equivalent fractions","Ordering fractions","Fraction word problems"], assessment:"Compares and orders fractions with unlike denominators", portfolio:"Fraction investigation book" },
      { week:"11-12", theme:"Kenya Historical Heritage", strand:"Social Studies", activities:["Pre-colonial Kenya","Colonial period","Independence","Interview elder project"], assessment:"Presents timeline of Kenyan history with key events", portfolio:"Kenya history timeline" },
      { week:"13", theme:"Term Review and Portfolios", strand:"All Learning Areas", activities:["Portfolio curation","Best work selection","Self-assessment","Parent sharing"], assessment:"Complete portfolio with self-assessment form", portfolio:"Term 1 portfolio" },
    ],
    t2: [
      { week:"1-2", theme:"Multiplication and Division", strand:"Mathematics", activities:["Multiplication strategies","Long division","Real-world problems","Times table mastery"], assessment:"Multiplies 3-digit by 2-digit numbers correctly", portfolio:"Problem-solving journal" },
      { week:"3-4", theme:"Matter and Materials", strand:"Integrated Science", activities:["States of matter experiments","Properties of materials","Changing materials","Investigation design"], assessment:"Designs and conducts simple investigation on materials", portfolio:"Science investigation report" },
      { week:"5-6", theme:"Expository Writing", strand:"English", activities:["Research a topic","Note-taking skills","Paragraph structure","Bibliography basics"], assessment:"Writes 200-word expository piece with 3 sources", portfolio:"Research essay" },
      { week:"7-8", theme:"Agriculture and Food", strand:"Agriculture and Nutrition", activities:["Crop types in Kenya","Food preservation methods","School garden project","Nutritional value of local foods"], assessment:"Identifies 10 crops, their regions and nutritional value", portfolio:"Food and agriculture project" },
      { week:"9-10", theme:"Life Skills — Decision Making", strand:"Life Skills", activities:["Decision-making scenarios","Peer pressure roleplay","Responsible choices","Community contribution project"], assessment:"Demonstrates decision-making process in 3 scenarios", portfolio:"Decision-making journal" },
      { week:"11-12", theme:"Geometry", strand:"Mathematics", activities:["Properties of 2D and 3D shapes","Area and perimeter","Scale drawing","Architecture connection"], assessment:"Calculates area and perimeter of compound shapes", portfolio:"Scale drawing of classroom" },
      { week:"13", theme:"Term Review", strand:"All Learning Areas", activities:["Portfolio assembly","Skills demonstration","Peer review","Parent presentation"], assessment:"Peer-reviewed portfolio with teacher sign-off", portfolio:"Term 2 portfolio" },
    ],
    t3: [
      { week:"1-2", theme:"Data Handling", strand:"Mathematics", activities:["Collecting data","Bar graphs and pictographs","Interpreting data","Class survey project"], assessment:"Creates and interprets bar graph from own data", portfolio:"Class survey report" },
      { week:"3-4", theme:"Technology and Innovation", strand:"Pre-Technical Studies", activities:["Simple machines","Problem identification","Design challenge","Build and test"], assessment:"Completes design cycle for a simple solution", portfolio:"Design challenge record" },
      { week:"5-6", theme:"Creative Writing", strand:"English", activities:["Poetry forms","Descriptive writing","Publishing work","Reading own work aloud"], assessment:"Writes and performs an original poem", portfolio:"Published poem" },
      { week:"7-8", theme:"Year Revision — Mathematics", strand:"Mathematics", activities:["Mixed problem solving","Number games","Peer tutoring","Real-world maths challenges"], assessment:"End of year mathematics assessment", portfolio:"Best mathematics work from the year" },
      { week:"9-10", theme:"Year-End Projects and Celebration", strand:"All Learning Areas", activities:["Showcase project preparation","Portfolio curation","Parent afternoon","Certificate ceremony"], assessment:"Full year portfolio presented to audience", portfolio:"Complete year portfolio" },
    ],
  },
};

// Default planner for grades without specific data
function getDefaultPlan(gradeId: string, termId: string) {
  const isSecondary = ["g7","g8","g9"].includes(gradeId);
  const baseWeeks = termId === "t3" ? 10 : 13;
  const weeks = [];
  const topics = isSecondary
    ? [["Introduction and Baseline Assessment","All Learning Areas"],["Core Concepts — Unit 1","Mathematics and Science"],["Core Concepts — Unit 1","Languages"],["Unit 1 Review and Assessment","Mathematics and Science"],["Unit 2 — Application","All Learning Areas"],["Unit 2 — Application","Languages"],["Mid-Term Review","All Learning Areas"],["Unit 3 — Analysis","Science and Technology"],["Unit 3 — Analysis","Humanities"],["Unit 3 Review","All Learning Areas"],["Unit 4 — Synthesis","All Learning Areas"],["Unit 4 Projects","All Learning Areas"],["Term Review and Portfolio","All Learning Areas"]]
    : [["Introduction and Baseline","All Learning Areas"],["Literacy and Language","Language Activities"],["Mathematics — Numbers","Mathematical Activities"],["Environmental Exploration","Environmental Activities"],["Creative Expression","Creative Arts"],["Physical Development","Psychomotor Activities"],["Mid-Term Review","All Learning Areas"],["Integrated Theme","Multiple Strands"],["Community and Culture","Environmental Activities"],["Language and Communication","Language Activities"],["Mathematics — Measurement","Mathematical Activities"],["Science and Nature","Environmental Activities"],["Term Review and Celebration","All Learning Areas"]];

  for (let i = 0; i < Math.min(baseWeeks, topics.length); i++) {
    const wk = i < 12 ? (i === 6 ? "7-8" : i === 8 ? "9-10" : i === 10 ? "11-12" : String(i*1+1)+"-"+String(i*1+2)) : "13";
    weeks.push({
      week: wk,
      theme: topics[i][0],
      strand: topics[i][1],
      activities: ["Introduce topic with engaging hook activity","Core lesson with hands-on learning","Practice and application activity","Assessment and reflection"],
      assessment: "Teacher observation and portfolio entry",
      portfolio: "Work sample from this unit",
    });
  }
  return weeks;
}
export default function TermPlannerPage() {
  const [grade, setGrade] = useState<string|null>(null);
  const [term, setTerm] = useState<string|null>(null);
  const [activeWeek, setActiveWeek] = useState<number|null>(null);

  const gradeObj = GRADES.find(g => g.id === grade);
  const termObj = TERMS.find(t => t.id === term);

  const rawPlan = grade && term ? (PLANS[grade]?.[term] || getDefaultPlan(grade, term)) : null;
  const plan = rawPlan;

  function share() {
    const txt = `CBC Term Planner on Focus Fora\n\n${gradeObj?.label || ""} ${termObj?.label || ""} week-by-week plan with activities, assessments and portfolio ideas.\n\nFree at focusfora.vercel.app/cbc-planner`;
    window.open("https://wa.me/?text=" + encodeURIComponent(txt), "_blank");
  }

  return (
    <div className="min-h-screen bg-offwhite">
      <nav className="bg-aubergine px-6 md:px-12 py-4 flex justify-between items-center sticky top-0 z-10">
        <Link href="/dashboard" className="font-serif text-xl text-offwhite">Focus<span className="text-saffron">Fora</span></Link>
        <div className="flex items-center gap-3">
          {(grade || term) && <button onClick={() => { setGrade(null); setTerm(null); setActiveWeek(null); }} className="text-offwhite/60 text-xs hover:text-saffron transition-colors uppercase tracking-wider">Reset</button>}
          {plan && <button onClick={share} className="bg-[#25D366] text-white text-xs font-medium px-3 py-2 rounded-sm hover:bg-[#20bc5a] transition-colors">Share Plan</button>}
          <Link href="/dashboard" className="text-offwhite/60 text-xs hover:text-saffron transition-colors uppercase tracking-wider hidden md:block">Dashboard</Link>
        </div>
      </nav>

      <div className="px-6 md:px-12 py-10 max-w-5xl mx-auto">
        <p className="ff-section-eyebrow mb-2">For Teachers</p>
        <h1 className="font-serif text-4xl text-aubergine font-light mb-2">CBC Term Planner</h1>
        <p className="text-[#5A4060] text-sm font-light mb-8">Select your grade and term to get a complete week-by-week scheme of work with activities, assessments and portfolio ideas. Save 3-4 hours of planning per week.</p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <p className="text-xs font-medium text-aubergine uppercase tracking-wider mb-3">Select Grade</p>
            <div className="grid grid-cols-3 gap-2">
              {GRADES.map(g => (
                <button key={g.id} onClick={() => { setGrade(g.id); setActiveWeek(null); }}
                  className={"p-3 rounded-sm text-xs font-medium transition-all border " + (grade === g.id ? "bg-aubergine text-offwhite border-aubergine" : "bg-white text-[#5A4060] border-aubergine/10 hover:border-aubergine/40")}>
                  {g.label}<br/><span className="font-normal opacity-60">{g.age}</span>
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-medium text-aubergine uppercase tracking-wider mb-3">Select Term</p>
            <div className="space-y-2">
              {TERMS.map(t => (
                <button key={t.id} onClick={() => { setTerm(t.id); setActiveWeek(null); }}
                  className={"w-full p-4 rounded-sm text-left transition-all border " + (term === t.id ? "bg-aubergine text-offwhite border-aubergine" : "bg-white text-[#5A4060] border-aubergine/10 hover:border-aubergine/40")}>
                  <span className={"text-sm font-medium " + (term === t.id ? "text-offwhite" : "text-aubergine")}>{t.label}</span>
                  <span className={"text-xs ml-2 " + (term === t.id ? "text-offwhite/60" : "text-[#5A4060]")}>{t.months} · {t.weeks} weeks</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {plan && (
          <>
            <div className="bg-aubergine rounded-sm p-6 mb-6 flex justify-between items-center">
              <div>
                <p className="text-saffron text-xs uppercase tracking-widest mb-1">Week-by-Week Scheme of Work</p>
                <h2 className="font-serif text-2xl text-offwhite">{gradeObj?.label} · {termObj?.label} · {termObj?.months}</h2>
                <p className="text-offwhite/60 text-xs mt-1">{plan.length} weeks · click any week to expand</p>
              </div>
            </div>

            <div className="space-y-2">
              {plan.map((week: any, i: number) => (
                <div key={i} className="bg-white border border-aubergine/[0.06] rounded-sm overflow-hidden">
                  <button className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-aubergine/[0.02] transition-colors"
                    onClick={() => setActiveWeek(activeWeek === i ? null : i)}>
                    <div className="flex items-center gap-4">
                      <span className="bg-saffron text-aubergine text-xs font-bold px-2 py-1 rounded-sm min-w-[60px] text-center">Wk {week.week}</span>
                      <div>
                        <p className="font-serif text-base text-aubergine font-semibold">{week.theme}</p>
                        <p className="text-xs text-[#5A4060]">{week.strand}</p>
                      </div>
                    </div>
                    <span className={"text-aubergine transition-transform " + (activeWeek === i ? "rotate-180" : "")}>▼</span>
                  </button>
                  {activeWeek === i && (
                    <div className="px-5 pb-5 border-t border-aubergine/[0.06]">
                      <div className="grid md:grid-cols-3 gap-4 mt-4">
                        <div>
                          <p className="text-xs text-saffron font-medium uppercase tracking-wider mb-2">Activities</p>
                          <ul className="space-y-1">
                            {week.activities.map((act: string, j: number) => (
                              <li key={j} className="text-xs text-[#5A4060] flex items-start gap-2"><span className="text-saffron mt-0.5">✦</span>{act}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs text-saffron font-medium uppercase tracking-wider mb-2">Assessment</p>
                          <p className="text-xs text-[#5A4060] leading-relaxed">{week.assessment}</p>
                        </div>
                        <div>
                          <p className="text-xs text-saffron font-medium uppercase tracking-wider mb-2">Portfolio Idea</p>
                          <p className="text-xs text-[#5A4060] leading-relaxed">{week.portfolio}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        {!plan && (
          <div className="bg-white border border-aubergine/[0.06] rounded-sm p-10 text-center">
            <div className="text-5xl mb-4">📅</div>
            <h3 className="font-serif text-xl text-aubergine mb-2">Select a Grade and Term to Begin</h3>
            <p className="text-[#5A4060] text-sm">Your week-by-week CBC scheme of work will appear here — ready to use, adapt and share.</p>
          </div>
        )}
      </div>
    </div>
  );
}
