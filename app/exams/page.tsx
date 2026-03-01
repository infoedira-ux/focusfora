"use client";
import { useState } from "react";
import Link from "next/link";

const CATS = [
  {
    id: "accounting", icon: "📊", title: "Accounting and Finance", color: "bg-aubergine", light: true,
    exams: [
      {
        id: "cpa", title: "CPA Kenya", body: "KASNEB", icon: "📊",
        desc: "Kenya premier accounting qualification. 18 papers across 3 sections.",
        sections: [
          { name: "Section 1 Foundation", papers: ["Financial Accounting", "Business Law", "Entrepreneurship and Communication", "Economics", "Business Mathematics and Statistics", "Introduction to Management and Leadership"] },
          { name: "Section 2 Intermediate", papers: ["Corporate Law", "Financial Management", "Financial Reporting", "Auditing and Assurance", "Management Accounting", "Tax Planning and Management"] },
          { name: "Section 3 Final", papers: ["Advanced Financial Reporting", "Advanced Auditing and Assurance", "Advanced Financial Management", "Advanced Taxation", "Strategic Management", "Governance and Ethics"] },
        ],
        tips: ["Financial Accounting and Management Accounting are the backbone — master these first before moving to later sections", "Tax Planning requires constant updating as Finance Acts change annually — always use the current Finance Act", "Advanced Financial Reporting IFRS is the hardest paper — allocate double preparation time", "Past papers from KASNEB website are essential — examiners consistently recycle question formats", "Join a CPA study group — peer learning and accountability dramatically improve pass rates"],
        career: "CPA holders work in audit firms, corporates, NGOs, banks and government. Senior CPA Kenya holders typically earn KSh 150,000 to 500,000 monthly. ICPAK membership required for full practice rights.",
        registration: "Register at kasneb.or.ke. Exam fees per paper approximately KSh 3,500 to 5,500. Exam centres across Kenya. Exams sit twice yearly.",
        passrate: "Section 1 approximately 60 to 65 percent. Section 2 approximately 45 to 55 percent. Section 3 approximately 35 to 45 percent. Consistent study over 2 to 3 years is the typical completion timeline.",
      },
      {
        id: "acca", title: "ACCA", body: "ACCA Global", icon: "💹",
        desc: "Globally recognised accounting qualification accepted in 180 countries. 13 papers across 3 levels.",
        sections: [
          { name: "Applied Knowledge", papers: ["Business and Technology BT", "Management Accounting MA", "Financial Accounting FA"] },
          { name: "Applied Skills", papers: ["Corporate and Business Law Kenya variant", "Performance Management PM", "Taxation TX Kenya variant", "Financial Reporting FR", "Audit and Assurance AA", "Financial Management FM"] },
          { name: "Strategic Professional", papers: ["Strategic Business Leader SBL case study", "Strategic Business Reporting SBR", "Plus two optional: AFM APM ATX or AAA"] },
        ],
        tips: ["BT MA and FA can be sat on-demand online — complete these quickly to build momentum", "TX paper — always select the Kenya variant which tests Kenyan tax law not UK tax", "SBL is a case study exam requiring application and judgement not just technical recall", "ACCA exemptions available for CPA Kenya holders — check the exemption calculator before registering", "Strathmore University is an ACCA Gold approved learning partner in Nairobi"],
        career: "ACCA is highly valued by multinationals, Big 4 audit firms and international NGOs. Often commands a salary premium over CPA Kenya in international-facing roles.",
        registration: "Register at accaglobal.com. Annual subscription plus per-paper fees. Exam sittings in March, June, September and December.",
        passrate: "Applied Knowledge 60 to 70 percent. Applied Skills 45 to 55 percent. Strategic Professional 35 to 50 percent.",
      },
      {
        id: "cfa", title: "CFA", body: "CFA Institute", icon: "📈",
        desc: "The gold standard for investment professionals globally. Three levels typically 3 to 5 years to complete.",
        sections: [
          { name: "Level I Knowledge", papers: ["Ethical and Professional Standards", "Quantitative Methods", "Economics", "Financial Statement Analysis", "Corporate Issuers", "Equity Investments", "Fixed Income", "Derivatives", "Alternative Investments", "Portfolio Management"] },
          { name: "Level II Application", papers: ["Complex application of all Level I topics", "Equity Valuation Methods", "Fixed Income Analysis", "Derivatives Valuation", "Alternative Investment Analysis"] },
          { name: "Level III Synthesis", papers: ["Portfolio Management and Wealth Planning", "Asset Allocation", "Fixed Income and Equity Portfolio Management", "Risk Management", "Performance Evaluation"] },
        ],
        tips: ["300 plus hours of study per level — plan 18 months per level if working full time", "Use Schweser Notes alongside the CFA Institute curriculum — both are needed", "Ethics section appears in all three levels and can be the pass or fail differentiator — never underweight it", "Mock exams in the final 8 weeks are more valuable than any other preparation at that stage", "Level III essay questions require a completely different skill from multiple choice — practise written responses extensively"],
        career: "CFA charterholders in Kenya work in investment banking, fund management, pension funds and financial regulation. NSE, CMA, NSSF, Stanbic and Standard Chartered all value CFA significantly.",
        registration: "Register at cfainstitute.org. Exam fee approximately USD 900 to 1200 per level. Testing centres in Nairobi.",
        passrate: "Level I approximately 40 percent. Level II approximately 45 percent. Level III approximately 52 percent. Only about 20 percent of candidates who begin ultimately earn the charter.",
      },
    ],
  },
  {
    id: "procurement", icon: "📦", title: "Procurement and Supply", color: "bg-saffron", light: false,
    exams: [
      {
        id: "cips", title: "CIPS", body: "Chartered Institute of Procurement and Supply", icon: "📦",
        desc: "The global standard for procurement professionals. Widely recognised in Kenya.",
        sections: [
          { name: "CIPS Level 2 Certificate", papers: ["Procurement and Supply Operations", "Procurement and Supply Environments", "Ethical Procurement and Supply"] },
          { name: "CIPS Level 4 Diploma", papers: ["Scope and Influence of Procurement and Supply", "Negotiating and Contracting", "Sourcing in Procurement and Supply", "Managing Risks in Supply Chains", "Ethical Procurement"] },
          { name: "CIPS Level 6 Advanced Diploma MCIPS", papers: ["Strategic Ethical Leadership", "Corporate and Business Strategy", "Sustainability and Social Responsibility", "Contracting in Procurement and Supply", "Managing Supply Chain Risk", "Category Management"] },
        ],
        tips: ["Kenya Public Procurement and Asset Disposal Act 2015 is essential reading for public sector roles", "CIPS case studies use real-world scenarios — practise applying theory to context not just reciting it", "MCIPS requires 5 years procurement experience in addition to passing all papers — document experience from day one", "Procurement fraud and ethics questions appear in every level — study these thoroughly", "Join KISM alongside CIPS for the local professional network and Kenya-specific context"],
        career: "Procurement professionals with CIPS are in high demand in Kenya public sector, international NGOs and multinationals. Senior procurement managers earn KSh 200,000 to 600,000 monthly.",
        registration: "Register at cips.org or through KISM at kism.or.ke. Online study available globally.",
        passrate: "CIPS global pass rate approximately 55 to 65 percent per paper.",
      },
      {
        id: "cpsp", title: "CPSP-K", body: "Kenya Institute of Supplies Management", icon: "🏭",
        desc: "Certified Procurement and Supply Professional Kenya — locally recognised for public sector procurement.",
        sections: [
          { name: "Part I", papers: ["Principles of Procurement", "Business Communication", "Business Mathematics and Statistics", "Fundamentals of Accounting", "Information Technology"] },
          { name: "Part II", papers: ["Procurement Planning", "Contract Management", "Public Procurement Law", "Supplier Relationship Management", "Logistics and Inventory Management"] },
          { name: "Part III", papers: ["Strategic Procurement", "Project Management", "Supply Chain Management", "Ethics in Procurement", "Research Methods"] },
        ],
        tips: ["CPSP-K is increasingly required for public sector procurement roles — many county positions specify it", "Public Procurement and Asset Disposal Act 2015 and Regulations 2020 are tested directly — read them in full", "County government procurement is the fastest-growing employment sector for CPSP-K holders", "KISM membership and networking is as valuable as the qualification itself in Kenya market"],
        career: "CPSP-K holders are preferred candidates for procurement roles in county governments, parastatals and public institutions.",
        registration: "Register at kism.or.ke. Exam centres across Kenya including county towns.",
        passrate: "Approximately 55 to 65 percent per paper.",
      },
    ],
  },
  {
    id: "hr", icon: "👥", title: "Human Resources", color: "bg-aubergine/5", light: false,
    exams: [
      {
        id: "chrp", title: "CHRP", body: "Institute of Human Resource Management Kenya", icon: "👥",
        desc: "Certified Human Resource Professional — Kenya HR qualification recognised across all sectors.",
        sections: [
          { name: "Foundation Level", papers: ["Introduction to HRM", "Business Communication", "Labour Law", "Organisational Behaviour", "Economics for HR"] },
          { name: "Diploma Level", papers: ["Recruitment and Selection", "Training and Development", "Performance Management", "Compensation and Benefits", "Employee Relations"] },
          { name: "Higher Diploma Level", papers: ["Strategic HRM", "HR Analytics", "Talent Management", "Change Management", "HR Metrics and Measurement"] },
        ],
        tips: ["Employment Act 2007 and Labour Relations Act 2007 are tested across multiple papers — know them thoroughly", "HR Analytics is increasingly important — build basic Excel and data skills alongside the qualification", "Industrial Court of Kenya cases are valuable case study material for employee relations papers", "IHRM membership provides access to HR practitioners who provide practical Kenyan workplace context", "Performance management and compensation papers have very practical questions — relate answers to real organisations"],
        career: "HR professionals with CHRP work across all sectors. Senior HR managers earn KSh 150,000 to 400,000 monthly. HR Director roles increasingly require CHRP plus a related degree.",
        registration: "Register at ihrm.or.ke. Exam sittings twice yearly in Nairobi and other major towns.",
        passrate: "Approximately 55 to 65 percent per paper.",
      },
    ],
  },
  {
    id: "law", icon: "⚖️", title: "Law and Legal Practice", color: "bg-aubergine", light: true,
    exams: [
      {
        id: "advocate", title: "Advocates Training Programme", body: "Kenya School of Law", icon: "⚖️",
        desc: "The bar examination and practical training required for admission as an Advocate of the High Court of Kenya.",
        sections: [
          { name: "Bar Examinations 11 Papers", papers: ["Legal Systems and Methods", "Constitutional Law and Practice", "Law of Contract", "Law of Torts", "Criminal Law and Procedure", "Civil Procedure", "Commercial Law", "Land Law", "Family Law", "Law of Evidence", "Ethics and Professional Responsibility"] },
          { name: "Pupillage Practical Training", papers: ["6-month supervised practice at an approved law firm", "Advocacy and legal drafting skills assessment", "Professional conduct evaluation"] },
        ],
        tips: ["Bar exams are essay-based — structure every answer with IRAC: Issue Rule Application Conclusion", "Constitutional Law 2010 is foundational to every paper — understand it deeply not superficially", "The Evidence paper is among the hardest — practise applying the Evidence Act to specific factual scenarios", "Mock trials at KSL are invaluable — advocacy cannot be learned from books alone", "Land Law is heavily examined given Kenya land tenure complexity — understand both registered and customary land", "Ethics and Professional Responsibility is critical for admission — take it as seriously as any other paper"],
        career: "Advocates are admitted to the High Court and all subordinate courts. Entry-level salaries range KSh 50,000 to 150,000. Partners in major firms earn significantly more. LSK practising certificate required annually.",
        registration: "Enrol at Kenya School of Law at ksl.ac.ke. Entry requirement: LLB degree from a recognised university.",
        passrate: "Bar pass rates typically 50 to 70 percent overall.",
      },
      {
        id: "paralegal", title: "Paralegal Studies", body: "Kenya School of Law and various providers", icon: "📜",
        desc: "Entry qualification for legal support professionals — growing demand across law firms, corporates and NGOs.",
        sections: [
          { name: "Core Modules", papers: ["Introduction to Law and Legal Systems", "Legal Research and Writing", "Conveyancing and Land Transactions", "Court Procedures and Filing", "Contract Drafting", "Legal Ethics and Professional Conduct"] },
        ],
        tips: ["Strong legal research and writing skills differentiate paralegals more than any other factor", "Land law and conveyancing knowledge is highly valuable — one of Kenya busiest legal practice areas", "Many advocates specifically prefer paralegals with court filing and conveyancing experience", "LSK-certified paralegal training carries the strongest market recognition among employers"],
        career: "Paralegals support advocates in law firms, corporate legal departments and NGOs. Salaries KSh 30,000 to 80,000 entry level rising with experience.",
        registration: "Multiple providers. Kenya School of Law offers KSL-certified programmes with strong employer recognition.",
        passrate: "Varies by provider.",
      },
    ],
  },
  {
    id: "banking", icon: "🏦", title: "Banking and Insurance", color: "bg-saffron-pale", light: false,
    exams: [
      {
        id: "akib", title: "AKIB Diploma", body: "Kenya Institute of Bankers", icon: "🏦",
        desc: "Associate of Kenya Institute of Bankers — foundational qualification for banking professionals in Kenya.",
        sections: [
          { name: "Stage I Foundation", papers: ["Introduction to Banking", "Business Law", "Accounting", "Economics", "Marketing of Financial Services"] },
          { name: "Stage II Intermediate", papers: ["Credit Management", "Treasury Management", "Bank Operations", "Risk Management", "Regulatory Framework"] },
          { name: "Stage III Advanced", papers: ["Corporate Banking", "Trade Finance", "Digital Banking", "Bank Strategy", "Financial Analysis"] },
        ],
        tips: ["CBK Prudential Guidelines are essential for all regulatory papers — download current versions from cbk.go.ke", "Credit management is the most heavily examined area — understand the full credit lifecycle", "Digital banking has expanded significantly — M-Pesa, mobile banking and digital lending are directly tested", "Practical banking experience alongside the qualification dramatically accelerates learning and career progression", "Risk management paper — understand Basel II and III requirements in the Kenyan banking context"],
        career: "AKIB holders work across Kenyan commercial banks, microfinance institutions and mobile banking providers. Senior bank professionals earn KSh 150,000 to 600,000.",
        registration: "Register at kib.ac.ke. Exam centres in Nairobi, Mombasa, Kisumu and Nakuru.",
        passrate: "Approximately 55 to 65 percent per paper.",
      },
      {
        id: "cik", title: "Chartered Insurance of Kenya", body: "Insurance Institute of Kenya", icon: "🛡️",
        desc: "Professional qualification for insurance practitioners across underwriting, claims and broking.",
        sections: [
          { name: "Certificate Level", papers: ["Principles of Insurance", "Practice of Insurance", "Insurance Law", "Motor Insurance", "Life Insurance Fundamentals"] },
          { name: "Diploma Level", papers: ["Advanced Insurance Law", "Underwriting", "Claims Management", "Reinsurance", "Marine and Aviation Insurance", "Life Assurance"] },
          { name: "Advanced Diploma CIK", papers: ["Insurance Management", "Corporate Risk Management", "Actuarial Concepts", "Insurance Regulation in Kenya", "Strategic Management"] },
        ],
        tips: ["Insurance Act CAP 487 and IRA regulations are tested across all levels — keep updated versions", "Claims management papers have very practical questions — understand the full claims process end to end", "Motor insurance is Kenya largest insurance class — understand it deeply regardless of your specialisation", "IRA publishes industry statistics useful for examination context — review the annual insurance industry report"],
        career: "Insurance professionals work in underwriting, claims, broking and risk management. Senior roles earn KSh 150,000 to 400,000.",
        registration: "Register at iik.ac.ke. Exam sittings twice yearly.",
        passrate: "Approximately 55 to 65 percent per paper.",
      },
    ],
  },
  {
    id: "technology", icon: "💻", title: "Technology and ICT", color: "bg-aubergine/5", light: false,
    exams: [
      {
        id: "cict", title: "CICT", body: "KASNEB", icon: "💻",
        desc: "Certified Information Communication Technologist — Kenya ICT professional qualification.",
        sections: [
          { name: "Section 1", papers: ["ICT Foundations", "Business Communication", "Introduction to Programming", "Computer Hardware and Networking", "Web Technologies"] },
          { name: "Section 2", papers: ["Systems Analysis and Design", "Database Management", "Software Development", "Network Administration", "Information Security"] },
          { name: "Section 3", papers: ["Enterprise Systems", "Project Management in ICT", "IT Governance", "Cloud Computing", "Emerging Technologies"] },
        ],
        tips: ["Programming papers require actual hands-on coding practice — do not study theory only", "Information security is Kenya fastest-growing ICT specialisation — prioritise this strand", "CICT combined with CompTIA, Cisco or AWS certifications creates a strong market package", "Cloud computing paper — AWS and Azure free tier accounts allow practical experience at no cost", "Network administration requires practical experience — use free virtual labs such as Cisco Packet Tracer"],
        career: "CICT holders work in software development, network administration, database management and IT management. Senior ICT professionals earn KSh 150,000 to 500,000.",
        registration: "Register at kasneb.or.ke.",
        passrate: "Approximately 55 to 65 percent per paper.",
      },
      {
        id: "pmp", title: "PMP Certification", body: "Project Management Institute", icon: "📋",
        desc: "Project Management Professional — global gold standard for project managers across all industries.",
        sections: [
          { name: "Exam Domains", papers: ["People 42 percent: Leading and managing project teams", "Process 50 percent: Managing technical aspects of projects", "Business Environment 8 percent: Strategy, compliance and benefits realisation"] },
        ],
        tips: ["35 hours of project management education required before sitting PMP — log all relevant training", "PMBOK Guide is the reference but the exam tests application not memorisation of the guide", "Agile and hybrid approaches now constitute 50 percent of PMP exam content — do not neglect this half", "PMI Kenya Chapter runs study groups and exam preparation sessions — join before you start studying", "Sit at least 3 full mock exams before the real thing — the question style is very specific"],
        career: "PMP certified professionals in Kenya work in infrastructure, IT, NGOs and construction. Average salary premium over non-certified peers is 20 to 25 percent.",
        registration: "Register at pmi.org. Exam fee approximately USD 400 for PMI members. Testing centres in Nairobi.",
        passrate: "Approximately 60 to 65 percent.",
      },
    ],
  },
  {
    id: "health", icon: "🏥", title: "Health and Nursing", color: "bg-saffron", light: false,
    exams: [
      {
        id: "krn", title: "NCK Licensing — Kenya Registered Nurse", body: "Nursing Council of Kenya", icon: "🏥",
        desc: "Kenya Registered Nurse licensing examination — mandatory for all nursing graduates before practice.",
        sections: [
          { name: "KRN Examination Papers", papers: ["Medical Nursing", "Surgical Nursing", "Paediatric Nursing", "Obstetric and Gynaecological Nursing", "Psychiatric Nursing", "Community Health Nursing", "Nursing Management and Ethics"] },
          { name: "KRCHN Community Health", papers: ["Primary Health Care", "Community Health Principles", "Maternal and Child Health", "Disease Prevention and Control", "Environmental Health"] },
        ],
        tips: ["Clinical placement hours are as important as academic papers — engage fully with every ward placement", "NCK examination questions are scenario-based — practise applying knowledge to patient scenarios", "Kenya Essential Medicines List and Standard Treatment Guidelines are directly tested — use current MoH versions", "Ethics and professional conduct requires thorough knowledge of the NCK Code of Professional Conduct", "Kenyan nurses are in high demand internationally — UK, Canada, Australia and Gulf States actively recruit KRN holders"],
        career: "Registered nurses in Kenya public sector earn KSh 30,000 to 80,000 plus allowances. Private sector and international organisations offer significantly more.",
        registration: "Register with Nursing Council of Kenya at nurseskenya.co.ke. Exam sittings twice yearly.",
        passrate: "Approximately 65 to 75 percent.",
      },
      {
        id: "co", title: "Clinical Officer Licensing", body: "Clinical Officers Council of Kenya", icon: "🩺",
        desc: "Licensing examination for Clinical Officers — the frontline of Kenya health system.",
        sections: [
          { name: "Licensing Examination Papers", papers: ["Internal Medicine", "Surgery", "Paediatrics and Child Health", "Obstetrics and Gynaecology", "Community Health", "Psychiatry", "Clinical Pharmacology"] },
        ],
        tips: ["Kenya Clinical Guidelines are the reference standard — use current Ministry of Health version", "Reproductive health and maternal mortality are priority examination areas given national health targets", "Higher Diploma specialisations in surgery, ENT or anaesthesia significantly expand career options", "Practical competence is assessed rigorously — engage fully with all clinical postings"],
        career: "Clinical Officers work in public hospitals, health centres and private practice. Starting salary KSh 35,000 to 50,000 in public sector.",
        registration: "Register with Clinical Officers Council of Kenya.",
        passrate: "Approximately 65 to 75 percent.",
      },
    ],
  },
  {
    id: "education", icon: "📚", title: "Education and Teaching", color: "bg-aubergine", light: true,
    exams: [
      {
        id: "tsc", title: "TSC Registration", body: "Teachers Service Commission", icon: "📚",
        desc: "Teachers Service Commission registration — mandatory for all teachers in Kenya public school system.",
        sections: [
          { name: "Primary Teacher Education", papers: ["Foundation of Education", "Early Childhood Education", "Teaching Methods across core subjects", "Curriculum and Instruction", "Educational Assessment and Evaluation", "Professional Ethics in Teaching"] },
          { name: "Secondary Teaching PGDE or BEd", papers: ["Education Theory and Practice", "Subject Methodology two teaching subjects", "Curriculum Development and Implementation", "Educational Psychology", "School Administration and Management"] },
        ],
        tips: ["TSC registration is mandatory before any teaching employment in Kenya — register immediately after graduating", "CBC has changed teaching methodologies significantly — ensure CPD reflects current KICD approaches", "Continuous Professional Development is required for TSC licence renewal every 3 years", "School management courses significantly improve promotion prospects within the TSC career structure", "International school teaching typically requires TSC registration plus the international school own vetting process"],
        career: "TSC teachers earn KSh 20,000 to 80,000 plus allowances. Secondary teachers earn more than primary. Headteacher positions carry significant salary supplements. International school teaching pays 3 to 5 times TSC rates.",
        registration: "Register at tsc.go.ke. Present original teaching qualification, transcripts and identification.",
        passrate: "Registration-based rather than examination-based.",
      },
    ],
  },
  {
    id: "engineering", icon: "🔧", title: "Engineering and Architecture", color: "bg-saffron-pale", light: false,
    exams: [
      {
        id: "ebk", title: "EBK Registration", body: "Engineers Board of Kenya", icon: "🔧",
        desc: "Graduate and Registered Engineer status — mandatory for engineering practice in Kenya.",
        sections: [
          { name: "Registration Process", papers: ["Academic qualification verification", "Supervised practice portfolio minimum 2 years", "Professional Interview with EBK panel", "Engineering ethics examination", "Continuing Professional Development plan"] },
        ],
        tips: ["Start your supervised practice log from day one of employment — retroactive documentation is very difficult", "EBK professional interview tests engineering judgement and ethics not just technical knowledge", "Registered Engineer status is required for signing off drawings and taking project responsibility", "Specialist qualifications such as MICE, IStructE or CIBSE add significant value alongside EBK registration"],
        career: "Registered engineers earn KSh 200,000 to 600,000 monthly. Infrastructure development from Vision 2030 has sustained strong engineering demand.",
        registration: "Register at ebk.or.ke. Registration requires accredited degree plus supervised practice.",
        passrate: "Approximately 70 to 80 percent of candidates who complete the full process.",
      },
      {
        id: "boraqs", title: "BORAQS Registration", body: "Board of Registration of Architects and Quantity Surveyors", icon: "🏗️",
        desc: "Mandatory registration for architects and quantity surveyors practising in Kenya.",
        sections: [
          { name: "Registration Requirements", papers: ["Academic qualification from accredited institution", "Minimum 2 years post-qualification experience", "Professional Practice Examination", "Portfolio of completed projects", "Professional ethics assessment"] },
        ],
        tips: ["Document every project you work on from your first day — portfolio quality determines registration success", "NCA National Construction Authority registration is a separate but related requirement for contractors", "Kenya construction sector is growing rapidly — registered professionals are in high demand", "Specialisation in sustainable design or infrastructure is increasingly valued by major clients and donors"],
        career: "Registered architects and QSs earn KSh 100,000 to 400,000 in practice. Partnership and directorship significantly more.",
        registration: "Register at boraqs.or.ke.",
        passrate: "Varies by examination sitting.",
      },
    ],
  },
];

export default function ExamsPage() {
  const [activeCat, setActiveCat] = useState<string|null>(null);
  const [activeExam, setActiveExam] = useState<string|null>(null);
  const [tab, setTab] = useState("Overview");
  const cat = CATS.find(c => c.id === activeCat);
  const exam = cat?.exams.find((e:any) => e.id === activeExam);
  function share(title: string) {
    window.open("https://wa.me/?text=" + encodeURIComponent(title + " Study Guide on Focus Fora\n\nPaper structure, study tips, career paths and registration.\n\nFree at focusfora.vercel.app/exams"), "_blank");
  }
  return (
    <div className="min-h-screen bg-offwhite">
      <nav className="bg-aubergine px-6 md:px-12 py-4 flex justify-between items-center sticky top-0 z-10">
        <Link href="/dashboard" className="font-serif text-xl text-offwhite">Focus<span className="text-saffron">Fora</span></Link>
        <div className="flex items-center gap-3">
          {activeExam && <button onClick={() => setActiveExam(null)} className="text-offwhite/60 text-xs hover:text-saffron transition-colors uppercase tracking-wider">Back</button>}
          {activeCat && !activeExam && <button onClick={() => setActiveCat(null)} className="text-offwhite/60 text-xs hover:text-saffron transition-colors uppercase tracking-wider">All Exams</button>}
          <button onClick={() => share("Professional Exams")} className="bg-[#25D366] text-white text-xs font-medium px-3 py-2 rounded-sm hover:bg-[#20bc5a] transition-colors">Share</button>
          <Link href="/dashboard" className="text-offwhite/60 text-xs hover:text-saffron transition-colors uppercase tracking-wider hidden md:block">Dashboard</Link>
        </div>
      </nav>
      <div className="px-6 md:px-12 py-10 max-w-5xl mx-auto">
        {!activeCat && (
          <>
            <p className="ff-section-eyebrow mb-2">Professional Qualifications</p>
            <h1 className="font-serif text-4xl text-aubergine font-light mb-2">Professional Exams</h1>
            <p className="text-[#5A4060] text-sm font-light mb-2">Complete guides for every major professional qualification in Kenya — paper structure, study tips, career paths and registration.</p>
            <p className="text-saffron text-xs font-medium mb-10">CPA · ACCA · CFA · CIPS · Law · Nursing · HR · Banking · ICT · Engineering · Teaching</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {CATS.map((c:any) => (
                <button key={c.id} onClick={() => setActiveCat(c.id)} className={c.color + " p-6 rounded-sm text-left hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border border-aubergine/[0.06]"}>
                  <div className="text-4xl mb-4">{c.icon}</div>
                  <h2 className={"font-serif text-xl font-semibold mb-2 " + (c.light ? "text-offwhite" : "text-aubergine")}>{c.title}</h2>
                  <p className={"text-xs mb-3 " + (c.light ? "text-offwhite/60" : "text-[#5A4060]")}>{c.exams.length} qualification{c.exams.length > 1 ? "s" : ""} with full study guides</p>
                  <p className={"text-xs font-medium " + (c.light ? "text-saffron" : "text-aubergine")}>Explore</p>
                </button>
              ))}
            </div>
          </>
        )}
        {activeCat && !activeExam && (
          <>
            <p className="ff-section-eyebrow mb-2">{cat?.icon} Professional Qualifications</p>
            <h1 className="font-serif text-4xl text-aubergine font-light mb-8">{cat?.title}</h1>
            <div className="grid md:grid-cols-2 gap-5">
              {cat?.exams.map((ex:any) => (
                <button key={ex.id} onClick={() => { setActiveExam(ex.id); setTab("Overview"); }} className="bg-white border border-aubergine/[0.06] p-6 rounded-sm text-left hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
                  <div className="text-4xl mb-3">{ex.icon}</div>
                  <h3 className="font-serif text-xl text-aubergine font-semibold mb-1">{ex.title}</h3>
                  <p className="text-xs text-saffron mb-2">{ex.body}</p>
                  <p className="text-sm text-[#5A4060] font-light mb-4">{ex.desc}</p>
                  <p className="text-xs text-aubergine font-medium group-hover:underline">Full Study Guide</p>
                </button>
              ))}
            </div>
          </>
        )}
        {activeExam && exam && (
          <>
            <div className="bg-aubergine rounded-sm p-8 mb-8">
              <p className="text-saffron text-xs uppercase tracking-widest mb-1">{(exam as any).icon} {cat?.title}</p>
              <h1 className="font-serif text-4xl text-offwhite font-light mb-1">{(exam as any).title}</h1>
              <p className="text-offwhite/60 text-sm mb-2">{(exam as any).body}</p>
              <p className="text-offwhite/80 text-sm font-light mb-6">{(exam as any).desc}</p>
              <button onClick={() => share((exam as any).title)} className="bg-[#25D366] text-white text-xs font-medium px-4 py-2 rounded-sm hover:bg-[#20bc5a] transition-colors">Share this Guide</button>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Overview","Paper Structure","Study Tips","Career Paths","Registration"].map(t => (
                <button key={t} onClick={() => setTab(t)} className={"text-xs font-medium px-4 py-2 rounded-sm transition-all " + (tab === t ? "bg-aubergine text-offwhite" : "bg-white border border-aubergine/10 text-[#5A4060]")}>{t}</button>
              ))}
            </div>
            {tab === "Overview" && (
              <div className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-saffron-pale border border-aubergine/[0.06] rounded-sm p-5"><p className="text-xs text-saffron uppercase tracking-wider mb-1">Sections</p><p className="font-serif text-xl text-aubergine">{(exam as any).sections?.length} levels</p></div>
                  <div className="bg-saffron-pale border border-aubergine/[0.06] rounded-sm p-5"><p className="text-xs text-saffron uppercase tracking-wider mb-1">Total Papers</p><p className="font-serif text-xl text-aubergine">{(exam as any).sections?.reduce((a:number,s:any)=>a+s.papers.length,0)} papers</p></div>
                  <div className="bg-saffron-pale border border-aubergine/[0.06] rounded-sm p-5"><p className="text-xs text-saffron uppercase tracking-wider mb-1">Awarding Body</p><p className="font-serif text-lg text-aubergine">{(exam as any).body}</p></div>
                </div>
                <div className="bg-white border border-aubergine/[0.06] rounded-sm p-6"><h3 className="font-serif text-lg text-aubergine mb-3">Pass Rate Information</h3><p className="text-sm text-[#5A4060] leading-relaxed">{(exam as any).passrate}</p></div>
              </div>
            )}
            {tab === "Paper Structure" && (
              <div className="space-y-4">
                {(exam as any).sections?.map((s:any,i:number) => (
                  <div key={i} className="bg-white border border-aubergine/[0.06] rounded-sm p-5">
                    <h3 className="font-serif text-lg text-aubergine font-semibold mb-3"><span className="text-saffron">{i+1}. </span>{s.name}</h3>
                    <div className="grid md:grid-cols-2 gap-2">
                      {s.papers.map((p:string,j:number) => <div key={j} className="flex items-center gap-2 text-sm text-[#5A4060]"><span className="text-saffron">✦</span>{p}</div>)}
                    </div>
                  </div>
                ))}
              </div>
            )}
            {tab === "Study Tips" && (
              <div className="space-y-3">
                {(exam as any).tips?.map((t:string,i:number) => (
                  <div key={i} className="bg-white border border-aubergine/[0.06] rounded-sm p-5 flex items-start gap-4">
                    <div className="bg-saffron text-aubergine font-bold w-8 h-8 rounded-sm flex items-center justify-center flex-shrink-0 text-sm">{i+1}</div>
                    <p className="text-sm text-[#5A4060] leading-relaxed pt-1">{t}</p>
                  </div>
                ))}
              </div>
            )}
            {tab === "Career Paths" && <div className="bg-white border border-aubergine/[0.06] rounded-sm p-6"><h2 className="font-serif text-xl text-aubergine mb-4">Career Outcomes</h2><p className="text-sm text-[#5A4060] leading-relaxed">{(exam as any).career}</p></div>}
            {tab === "Registration" && <div className="bg-white border border-aubergine/[0.06] rounded-sm p-6"><h2 className="font-serif text-xl text-aubergine mb-4">How to Register</h2><p className="text-sm text-[#5A4060] leading-relaxed">{(exam as any).registration}</p></div>}
          </>
        )}
      </div>
    </div>
  );
}
