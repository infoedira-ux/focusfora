"use client";
import Link from "next/link";

const SCHOOLS = [
  { name:"Aga Khan Academy Nairobi", curriculum:"IB (PYP/MYP/DP)", website:"agakhanacademies.org", founded:"2003", notes:"Full IB continuum from Early Years to Diploma. Strong arts and leadership programmes." },
  { name:"Braeburn Schools Kenya", curriculum:"British (IGCSE/A-Levels)", website:"braeburn.ac.ke", founded:"1979", notes:"Multiple campuses. Well established British curriculum provider in Kenya." },
  { name:"Brookhouse Schools", curriculum:"British (IGCSE/A-Levels) + IB", website:"brookhouse.ac.ke", founded:"1981", notes:"Offers both British curriculum and IB Diploma. Known for strong academic outcomes." },
  { name:"Hillcrest International Schools", curriculum:"British (IGCSE/A-Levels)", website:"hillcrest.ac.ke", founded:"1966", notes:"One of Kenya oldest international schools. Strong co-curricular programme." },
  { name:"International School of Kenya (ISK)", curriculum:"US Curriculum + IB", website:"isk.ac.ke", founded:"1976", notes:"Serves diplomatic and international community. IB Diploma and US curriculum." },
  { name:"Nairobi Academy", curriculum:"British (IGCSE/A-Levels)", website:"nairobiacademy.ac.ke", founded:"1978", notes:"Established British curriculum school with strong academic reputation." },
  { name:"Peponi School", curriculum:"British (IGCSE/A-Levels)", website:"peponischool.org", founded:"1986", notes:"Boarding school. Known for strong pastoral care and academic standards." },
  { name:"Rosslyn Academy", curriculum:"US Curriculum (AP)", website:"rosslynacademy.com", founded:"1967", notes:"Christian mission school. US curriculum with Advanced Placement courses." },
  { name:"St Andrews Turi", curriculum:"British (IGCSE/A-Levels)", website:"standrewsturi.com", founded:"1931", notes:"Boarding school in the Rift Valley. One of East Africa oldest established schools." },
  { name:"Nairobi International School (NIS)", curriculum:"IB (PYP/MYP/DP)", website:"nis.ac.ke", founded:"1994", notes:"Full IB continuum school. Serves international and Kenyan families." },
  { name:"Greensteds International School", curriculum:"British (IGCSE/A-Levels)", website:"greensteds.com", founded:"1949", notes:"Boarding and day school in the Rift Valley. Strong sports and outdoor education." },
  { name:"Banda School", curriculum:"British (IGCSE/A-Levels)", website:"bandaschool.com", founded:"1966", notes:"Well-regarded primary and secondary school with British curriculum." },
  { name:"Riara Springs School", curriculum:"British (IGCSE/A-Levels)", website:"riaraschools.com", founded:"2005", notes:"Growing reputation for academic excellence and holistic development." },
  { name:"Light International School", curriculum:"British + IB", website:"lightinternationalschool.com", founded:"2003", notes:"Offers British curriculum at primary and IB Diploma at secondary level." },
  { name:"Kenya High School", curriculum:"CBC/KCSE (National)", website:"kenyahigh.ac.ke", founded:"1908", notes:"Premier national girls boarding school. Transitioning to CBC curriculum." },
  { name:"Alliance High School", curriculum:"CBC/KCSE (National)", website:"alliancehigh.ac.ke", founded:"1926", notes:"Kenya most prestigious national boys school. Iconic academic legacy." },
  { name:"Starehe Boys Centre", curriculum:"CBC/KCSE (National)", website:"stareheboys.ac.ke", founded:"1959", notes:"Renowned for transforming disadvantaged boys. Strong national examination results." },
  { name:"Precious Blood Riruta", curriculum:"CBC/KCSE (National)", website:"pbr.ac.ke", founded:"1955", notes:"Premier national girls school. Consistently strong KCSE performance." },
];

const CURRICULA = ["All","British (IGCSE/A-Levels)","IB (PYP/MYP/DP)","US Curriculum (AP)","British + IB","CBC/KCSE (National)"];
export default function SchoolsPage() {
  const [filter, setFilter] = (require("react") as any).useState("All");
  const [search, setSearch] = (require("react") as any).useState("");

  const filtered = SCHOOLS.filter(s => {
    const matchCurriculum = filter === "All" || s.curriculum === filter;
    const matchSearch = search.length < 2 || s.name.toLowerCase().includes(search.toLowerCase()) || s.curriculum.toLowerCase().includes(search.toLowerCase()) || s.notes.toLowerCase().includes(search.toLowerCase());
    return matchCurriculum && matchSearch;
  });

  function share() {
    window.open("https://wa.me/?text=" + encodeURIComponent("International and National Schools in Kenya on Focus Fora\n\nCurricula, websites and notes for 18 top schools.\n\nfocusfora.vercel.app/schools"), "_blank");
  }

  return (
    <div className="min-h-screen bg-offwhite">
      <nav className="bg-aubergine px-6 md:px-12 py-4 flex justify-between items-center sticky top-0 z-10">
        <Link href="/dashboard" className="font-serif text-xl text-offwhite">Focus<span className="text-saffron">Fora</span></Link>
        <div className="flex items-center gap-3">
          <button onClick={share} className="bg-[#25D366] text-white text-xs font-medium px-3 py-2 rounded-sm hover:bg-[#20bc5a] transition-colors">Share</button>
          <Link href="/dashboard" className="text-offwhite/60 text-xs hover:text-saffron transition-colors uppercase tracking-wider hidden md:block">Dashboard</Link>
          <Link href="/international" className="text-offwhite/60 text-xs hover:text-saffron transition-colors uppercase tracking-wider hidden md:block">International Curricula</Link>
        </div>
      </nav>
      <div className="px-6 md:px-12 py-10 max-w-5xl mx-auto">
        <p className="ff-section-eyebrow mb-2">Schools Directory</p>
        <h1 className="font-serif text-4xl text-aubergine font-light mb-2">Schools in Kenya</h1>
        <p className="text-[#5A4060] text-sm font-light mb-1">International, national and boarding schools — curricula, notes and official websites.</p>
        <p className="text-xs text-aubergine/40 mb-6">Visit each school website for current location, fees and admission details — this information changes regularly.</p>

        <div className="relative mb-4">
          <input type="text" placeholder="Search schools or curriculum..." value={search} onChange={(e:any) => setSearch(e.target.value)}
            className="w-full border border-aubergine/20 rounded-sm px-4 py-3 text-sm text-aubergine placeholder-aubergine/30 focus:outline-none focus:border-aubergine bg-white" />
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {CURRICULA.map(c => (
            <button key={c} onClick={() => setFilter(c)}
              className={"text-xs font-medium px-3 py-2 rounded-sm transition-all " + (filter === c ? "bg-aubergine text-offwhite" : "bg-white border border-aubergine/10 text-[#5A4060]")}>{c}</button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {filtered.map((school, i) => (
            <div key={i} className="bg-white border border-aubergine/[0.06] rounded-sm p-5 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-serif text-lg text-aubergine font-semibold leading-tight flex-1 pr-2">{school.name}</h3>
                <span className="bg-saffron/10 text-aubergine text-xs px-2 py-1 rounded-sm flex-shrink-0">{school.founded}</span>
              </div>
              <p className="text-saffron text-xs font-medium mb-2">{school.curriculum}</p>
              <p className="text-xs text-[#5A4060] font-light leading-relaxed mb-3">{school.notes}</p>
              <a href={"https://" + school.website} target="_blank" rel="noopener noreferrer"
                className="text-xs text-aubergine font-medium hover:text-saffron transition-colors underline underline-offset-2">
                {school.website} →
              </a>
            </div>
          ))}
        </div>
        <p className="text-xs text-aubergine/30 mt-8 text-center">This directory is for reference only. Always verify current details directly with each school.</p>
      </div>
    </div>
  );
}
