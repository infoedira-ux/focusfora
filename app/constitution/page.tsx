"use client";
import { useState } from "react";
import Link from "next/link";

const CHAPTERS: any[] = [
  {
    num: "1", title: "Sovereignty and Supreme Law", icon: "🏛️",
    overview: "All sovereign power belongs to the people of Kenya. The Constitution is the supreme law — any law inconsistent with it is void.",
    articles: [
          { num: "Article 1", title: "Sovereignty of the People", text: "All sovereign power belongs to the people of Kenya and shall be exercised only in accordance with this Constitution." },
          { num: "Article 2", title: "Supremacy of the Constitution", text: "This Constitution is the supreme law of Kenya. Any law inconsistent with this Constitution is void to the extent of the inconsistency." },
          { num: "Article 3", title: "Defence of the Constitution", text: "Every person has an obligation to respect, uphold and defend this Constitution." }
    ],
    context: "You cannot be punished for refusing to obey an unconstitutional order. Any attempt to overthrow the Constitution is unlawful.",
    rights: ["No court, Parliament or President can override the Constitution", "Citizens have standing to challenge unconstitutional laws", "Defending the Constitution is every citizen's legal duty"],
  },
  {
    num: "2", title: "The Republic", icon: "🗺️",
    overview: "Kenya is a sovereign republic. National values including human dignity, equity, transparency and accountability bind all state organs and public officers.",
    articles: [
          { num: "Article 4", title: "Declaration of the Republic", text: "Kenya is a sovereign republic founded on national values and principles of governance." },
          { num: "Article 10", title: "National Values", text: "The national values include: patriotism, rule of law, democracy, human dignity, equity, social justice, equality, human rights, good governance, integrity, transparency and accountability." },
          { num: "Article 11", title: "Culture", text: "Culture is the foundation of the nation. The State shall promote all forms of national and cultural expression." }
    ],
    context: "Article 10 national values are legally binding on Parliament, courts and all state officers — not just aspirational.",
    rights: ["Public officers are legally bound by Article 10 — not just ethically", "Any person can petition court if a government decision violates these values", "Transparency and accountability are constitutional obligations"],
  },
  {
    num: "3", title: "Citizenship", icon: "🪪",
    overview: "Kenya recognises dual citizenship. A person born to a Kenyan mother or father is a citizen by birth regardless of where they are born.",
    articles: [
          { num: "Article 13", title: "Retention of Citizenship", text: "A citizen by birth does not lose citizenship by acquiring citizenship of another country." },
          { num: "Article 14", title: "Citizenship by Birth", text: "A person is a citizen by birth if on the day of birth either the mother or father is a citizen." },
          { num: "Article 15", title: "Citizenship by Registration", text: "A person married to a citizen for at least seven years is entitled to apply for citizenship by registration." },
          { num: "Article 16", title: "Dual Citizenship", text: "A citizen by birth who acquires citizenship of another country retains Kenyan citizenship." }
    ],
    context: "Kenyans in the diaspora can hold both Kenyan and foreign citizenship without losing any Kenyan rights.",
    rights: ["Children born abroad to Kenyan parents are citizens by birth", "Dual citizenship is constitutionally guaranteed", "Stateless persons lawfully resident in Kenya may apply for citizenship under Article 15.", "Citizenship cannot be arbitrarily revoked"],
  },
  {
    num: "4", title: "The Bill of Rights", icon: "⚖️",
    overview: "The heart of the Constitution. Fundamental rights and freedoms that every person in Kenya is entitled to — not just citizens. Enforceable in court.",
    articles: [
          { num: "Article 26", title: "Right to Life", text: "Every person has the right to life." },
          { num: "Article 27", title: "Equality and Non-Discrimination", text: "Every person is equal before the law. Discrimination on grounds of race, sex, pregnancy, marital status, health status, ethnic origin, colour, age, disability, religion, belief, culture, dress, language or birth is prohibited." },
          { num: "Article 28", title: "Human Dignity", text: "Every person has inherent dignity and the right to have that dignity respected and protected." },
          { num: "Article 29", title: "Freedom and Security", text: "Every person has the right not to be detained without trial, not to be subjected to violence, torture, or cruel, inhuman or degrading treatment." },
          { num: "Article 31", title: "Privacy", text: "Every person has the right to privacy of their person, home, property and communications." },
          { num: "Article 33", title: "Freedom of Expression", text: "Every person has the right to freedom of expression including freedom to seek, receive or impart information." },
          { num: "Article 35", title: "Access to Information", text: "Every citizen has the right of access to information held by the State." },
          { num: "Article 36", title: "Freedom of Association", text: "Every person has the right to freedom of association." },
          { num: "Article 39", title: "Freedom of Movement", text: "Every person has the right to move freely in Kenya, to leave Kenya, to enter Kenya and to a passport." },
          { num: "Article 40", title: "Right to Property", text: "Every person has the right to acquire and own property of any description in any part of Kenya." },
          { num: "Article 43", title: "Economic and Social Rights", text: "Every person has the right to the highest attainable standard of health, adequate housing, reasonable standards of sanitation, freedom from hunger and clean water." },
          { num: "Article 49", title: "Rights of an Arrested Person", text: "An arrested person has the right to be informed of the reason for arrest, to remain silent, to communicate with an advocate, and to be brought before a court within 24 hours." },
          { num: "Article 50", title: "Fair Hearing", text: "Every person has the right to have any dispute resolved by application of law decided in a fair and public hearing before a court." }
    ],
    context: "The Bill of Rights applies to ALL persons in Kenya — not only citizens. A non-citizen whose rights are violated can enforce them in court.",
    rights: ["You must be told why you are being arrested — Article 49", "You have the right to remain silent upon arrest", "You must be brought before a court within 24 hours of arrest", "Bail is a constitutional right under Article 49, but may be denied where compelling reasons exist such as flight risk or interference with witnesses.", "Torture and inhumane treatment are unconstitutional and criminal", "You have the right to a lawyer from the moment of arrest", "Economic and social rights including housing, food and water are enforceable"],
  },
  {
    num: "5", title: "Land and Environment", icon: "🌍",
    overview: "All land in Kenya belongs to the people. Land is classified as public, community or private. Non-citizens cannot own freehold land.",
    articles: [
          { num: "Article 60", title: "Principles of Land Policy", text: "Land in Kenya shall be held, used and managed in a manner that is equitable, efficient, productive and sustainable." },
          { num: "Article 61", title: "Classification of Land", text: "All land in Kenya belongs to the people of Kenya collectively. Land is classified as public land, community land and private land." },
          { num: "Article 63", title: "Community Land", text: "Community land includes land lawfully held by specific communities as forests, grazing areas, shrines and ancestral lands." },
          { num: "Article 64", title: "Private Land", text: "Private land includes land held by a person under freehold or leasehold tenure." },
          { num: "Article 66", title: "Regulation of Land Use", text: "The State may regulate land use in the interest of defence, public safety, public order, public health or land use planning." },
          { num: "Article 69", title: "Obligations in Respect of the Environment", text: "The State shall ensure sustainable exploitation of natural resources. Every person has a duty to cooperate with State organs to protect the environment." }
    ],
    context: "Always search the land registry before purchasing any land. Non-citizens cannot hold freehold land — maximum leasehold is 99 years.",
    rights: ["Always verify title deed at the land registry before any purchase", "Historical land injustices can be reported to the National Land Commission", "Community land cannot be sold without community consent", "Claims of adverse possession are governed by statutory law (Limitation of Actions Act), not directly by the Constitution.", "Environmental protection is a constitutional duty of every person"],
  },
  {
    num: "6", title: "Leadership and Integrity", icon: "🎖️",
    overview: "Chapter 6 sets integrity standards for all state officers. Used to challenge candidates and remove officials from office. Every citizen should know it.",
    articles: [
          { num: "Article 73", title: "Responsibilities of Leadership", text: "Authority assigned to a state officer is a public trust. State officers must bring honour to the nation and dignity to the office." },
          { num: "Article 74", title: "Oath of Office", text: "Before assuming office a state officer shall take and subscribe to an oath of office." },
          { num: "Article 75", title: "Conduct of State Officers", text: "A state officer shall avoid conflicts of interest and shall not maintain a bank account outside Kenya except as permitted by law." },
          { num: "Article 76", title: "Financial Probity", text: "A full-time state officer shall not participate in any other gainful employment." },
          { num: "Article 77", title: "Restriction on Activities", text: "State officers shall not engage in activities that amount to abuse of office." },
          { num: "Article 79", title: "Ethics and Anti-Corruption Commission", text: "Parliament shall enact legislation to establish an independent ethics and anti-corruption commission." }
    ],
    context: "The EACC enforces Chapter 6. Any citizen can report a state officer who fails integrity standards.",
    rights: ["Any citizen can petition EACC regarding a state officer violating Chapter 6", "Wealth declaration is mandatory for all state officers", "A state officer may be removed from office for violation of Chapter 6 or upon conviction for corruption, subject to due process.", "Chapter 6 applies to all state officers including ward administrators", "Conflict of interest must be declared and the officer must recuse themselves"],
  },
  {
    num: "7", title: "Representation of the People", icon: "🗳️",
    overview: "Governs elections, political parties and the electoral system. Understanding it protects your vote and enables you to challenge electoral irregularities.",
    articles: [
          { num: "Article 81", title: "General Principles", text: "The electoral system shall comply with universal suffrage based on the aspiration for fair representation and equality of vote." },
          { num: "Article 82", title: "Legislation on Elections", text: "Parliament shall enact legislation to provide for nomination of candidates and conduct of elections and referenda." },
          { num: "Article 83", title: "Qualifications for Registration", text: "A citizen who has attained the age of 18 years is entitled to be registered as a voter." },
          { num: "Article 86", title: "Voting", text: "The IEBC shall ensure votes are cast in secret, counting is transparent, and results announced promptly." },
          { num: "Article 88", title: "IEBC", text: "The IEBC is responsible for conducting and supervising elections. It is an independent commission." },
          { num: "Article 91", title: "Basic Requirements for Political Parties", text: "Every political party shall have a national character, promote national unity and democracy." }
    ],
    context: "Election results can be challenged in court. Presidential results must be challenged within 7 days of declaration at the Supreme Court.",
    rights: ["You have a constitutional right to a secret ballot", "Register to vote — it is both a right and a civic duty", "Political parties must respect internal democracy", "Presidential petitions must be filed within 7 days of declaration", "IEBC commissioners can be removed for violating the Constitution"],
  },
  {
    num: "8", title: "The Legislature", icon: "🏛️",
    overview: "Parliament consists of the National Assembly and the Senate. Parliament makes laws, approves budgets and oversees the executive.",
    articles: [
          { num: "Article 93", title: "Establishment of Parliament", text: "There is established a Parliament of Kenya which shall consist of the National Assembly and the Senate." },
          { num: "Article 94", title: "Role of Parliament", text: "Parliament manifests the diversity of the nation, represents the will of the people and exercises sovereign power on behalf of the people." },
          { num: "Article 95", title: "Role of the National Assembly", text: "The National Assembly represents the constituencies and special interests, enacts legislation and approves the budget." },
          { num: "Article 96", title: "Role of the Senate", text: "The Senate represents the counties and serves to protect the interests of the counties and their governments." },
          { num: "Article 116", title: "Bills", text: "A Bill may be introduced in Parliament by any Member of Parliament or by a Cabinet Secretary." }
    ],
    context: "Parliamentary sessions are open to the public. Citizens can petition Parliament directly through their MP or Senator — no lawyer required.",
    rights: ["Parliamentary sessions are public — you can attend and observe", "Any citizen can petition Parliament through their MP", "The Senate protects county interests — county issues go to Senate", "Budget must be approved by Parliament — citizens can make submissions", "MPs and Senators can be recalled by constituents for failing duties"],
  },
  {
    num: "9", title: "The Executive", icon: "👔",
    overview: "The executive consists of the President, Deputy President and Cabinet. The President is both Head of State and Head of Government.",
    articles: [
          { num: "Article 130", title: "The National Executive", text: "The national executive of the Republic comprises the President, the Deputy President and the rest of the Cabinet." },
          { num: "Article 131", title: "Authority of the President", text: "The President is the Head of State, Head of Government and Commander-in-Chief of the Kenya Defence Forces." },
          { num: "Article 132", title: "Functions of the President", text: "The President shall address the opening of each newly elected Parliament and may address Parliament at any time." },
          { num: "Article 147", title: "Functions of the Deputy President", text: "The Deputy President is the principal assistant of the President and shall deputise for the President." },
          { num: "Article 152", title: "Cabinet", text: "The Cabinet consists of the President, Deputy President, Attorney General and Cabinet Secretaries." }
    ],
    context: "The President can be impeached by Parliament. A petition signed by one million voters can trigger a referendum on any matter.",
    rights: ["The President can be impeached for gross violation of the Constitution", "Cabinet Secretaries are vetted by Parliament before appointment", "The President must respect court orders — no one is above the law", "Citizens can petition the President directly through State House", "Executive orders must comply with the Constitution"],
  },
  {
    num: "10", title: "Judiciary", icon: "⚖️",
    overview: "The Judiciary is independent. It interprets the Constitution and resolves disputes. Citizens have the right to access courts without paying fees for Bill of Rights cases.",
    articles: [
          { num: "Article 159", title: "Judicial Authority", text: "Judicial authority is derived from the people and vests in and shall be exercised by the courts and tribunals." },
          { num: "Article 160", title: "Independence of the Judiciary", text: "The Judiciary shall be subject only to the Constitution and the law and shall not be subject to control or direction of any person or authority." },
          { num: "Article 165", title: "High Court", text: "The High Court has unlimited original jurisdiction in criminal and civil matters and jurisdiction to determine whether a right or fundamental freedom has been infringed." },
          { num: "Article 163", title: "Supreme Court", text: "The Supreme Court consists of the Chief Justice, Deputy Chief Justice and five other judges. It has exclusive jurisdiction on presidential election petitions." },
          { num: "Article 169", title: "Subordinate Courts", text: "The subordinate courts include magistrates courts, kadhi courts, courts martial and any other court established by Parliament." }
    ],
    context: "You do not need a lawyer to file a constitutional petition in the High Court. Filing fees are waived for Bill of Rights cases in many instances.",
    rights: ["The Judiciary is independent — judges cannot be directed by the President or Parliament", "You can file a constitutional petition without a lawyer", "Bill of Rights petition filing fees are waived in many cases", "The High Court can issue orders against any person including the President", "Judicial Service Commission vets and appoints judges transparently"],
  },
  {
    num: "11", title: "Devolution", icon: "🏙️",
    overview: "47 county governments with their own executives and assemblies. Counties receive at least 15 percent of national revenue. Citizens can hold county governments directly accountable.",
    articles: [
          { num: "Article 174", title: "Objects of Devolution", text: "Devolution promotes democratic exercise of power, national unity, community management of affairs and equitable sharing of resources." },
          { num: "Article 175", title: "Principles of County Governments", text: "County governments shall be based on democratic principles and separation of powers." },
          { num: "Article 176", title: "County Governments", text: "There shall be a county government for each county consisting of a county assembly and a county executive." },
          { num: "Article 187", title: "Transfer of Functions", text: "A function of government at one level may be transferred to a government at the other level by agreement." },
          { num: "Article 203", title: "Equitable Share", text: "At least 15 percent of national revenue shall be allocated to county governments each year." }
    ],
    context: "County assembly sessions are open to the public. County budgets must be publicly available — request one from your county government.",
    rights: ["County assembly sessions are open to the public — attend and observe", "County budgets must be publicly available — request from your county", "Citizens can petition county assemblies directly without a lawyer", "County governors can be impeached by the county assembly", "At least 30 percent of county seats must go to gender not well represented"],
  },
  {
    num: "12", title: "Public Finance", icon: "💰",
    overview: "Governs how public money is collected, managed and spent. Every Kenyan has the right to know how public funds are used.",
    articles: [
          { num: "Article 201", title: "Principles of Public Finance", text: "Public finance in Kenya shall be guided by openness and accountability and the public shall participate in financial matters." },
          { num: "Article 202", title: "Equitable Sharing of Revenue", text: "Revenue raised nationally shall be shared equitably among the national and county governments." },
          { num: "Article 206", title: "Consolidated Fund", text: "There is established the Consolidated Fund into which all money raised or received by the national government shall be paid." },
          { num: "Article 210", title: "Imposition of Tax", text: "No tax or licensing fee may be imposed except as provided by legislation." },
          { num: "Article 228", title: "Controller of Budget", text: "The Controller of Budget shall oversee the implementation of the budgets of the national and county governments." }
    ],
    context: "The Controller of Budget and Auditor General reports are public documents. Any citizen can access them and use them to hold government accountable.",
    rights: ["No new tax can be imposed without an Act of Parliament", "The national budget process must involve public participation", "Controller of Budget reports are public — access them online", "Auditor General reports reveal how public money was spent", "Citizens can sue government for misuse of public funds"],
  },
  {
    num: "13", title: "The Public Service", icon: "👥",
    overview: "The public service must reflect Kenya's diversity. Merit-based appointments. No more than two-thirds of any public body from one gender.",
    articles: [
          { num: "Article 232", title: "Values and Principles of Public Service", text: "The values of public service include high standards of professional ethics, efficient use of resources, accountability, transparency, merit and equity." },
          { num: "Article 233", title: "Public Service Commission", text: "The Public Service Commission is responsible for establishing and abolishing offices in the public service and appointing persons to those offices." },
          { num: "Article 234", title: "Functions of the Commission", text: "The Commission shall recruit and appoint persons to offices in the public service and promote the values and principles of public service." }
    ],
    context: "Public service appointments must be merit-based. Nepotism and tribalism in appointments are unconstitutional.",
    rights: ["Public service appointments must be merit-based — tribalism is unconstitutional", "No more than two-thirds of any public body from one gender", "Whistleblowing on public service corruption is protected", "Citizens can petition PSC on appointments that violate the Constitution", "Public officers are personally liable for willful misuse of public resources"],
  },
  {
    num: "14", title: "National Security", icon: "🛡️",
    overview: "The National Police Service, Kenya Defence Forces and National Intelligence Service are all subject to civilian oversight and the Constitution.",
    articles: [
          { num: "Article 238", title: "National Security", text: "National security is subject to the authority of the Constitution and Parliament and shall be pursued in compliance with the law." },
          { num: "Article 239", title: "National Security Organs", text: "The national security organs are the Kenya Defence Forces, the National Intelligence Service and the National Police Service." },
          { num: "Article 244", title: "Objects of the National Police Service", text: "The police service shall prevent corruption, promote human rights and maintain professionalism and discipline." },
          { num: "Article 247", title: "Independent Policing Oversight Authority", text: "Parliament shall enact legislation to establish an independent policing oversight authority." }
    ],
    context: "IPOA (Independent Policing Oversight Authority) investigates police misconduct. Every police officer is bound by the Constitution.",
    rights: ["File police misconduct complaints at IPOA — ipoa.go.ke", "Police must show their service card if asked to identify themselves", "You have the right to legal representation from the moment of arrest", "A police officer who beats you has committed a criminal offence — document everything", "The President may deploy KDF internally under Article 241, but such deployment must be reported to Parliament, which may approve or terminate it."],
  },
  {
    num: "15", title: "Commissions and Independent Offices", icon: "🔍",
    overview: "Eighteen constitutional commissions and independent offices that protect democracy, rights and accountability. Every citizen should know what each does.",
    articles: [
          { num: "Article 249", title: "Objects of Commissions", text: "The commissions and independent offices bring impartial application of the law, secure enjoyment of rights and freedoms and promote democratic governance." },
          { num: "Article 250", title: "Composition of Commissions", text: "Each commission shall consist of at least three but not more than nine members appointed through a competitive process." },
          { num: "Article 251", title: "Removal from Office", text: "A member of a commission or independent office may only be removed from office through a specific process involving a tribunal." }
    ],
    context: "The Constitution establishes 18 commissions and independent offices, including IEBC, EACC, KNHRC, NCIC and the Commission on Administrative Justice.",
    rights: ["KNHRC handles rights complaints for free — knchr.org", "EACC investigates corruption — eacc.go.ke", "Commission on Administrative Justice handles maladministration complaints", "IEBC manages all elections independently", "National Cohesion Commission handles hate speech and discrimination"],
  },
  {
    num: "16", title: "Amendment of the Constitution", icon: "📜",
    overview: "The Constitution can only be changed through a rigorous process. Some provisions require a referendum. Citizens have the power to initiate constitutional amendments.",
    articles: [
          { num: "Article 255", title: "Amendment by Popular Initiative", text: "An amendment to this Constitution may be proposed by a popular initiative signed by at least one million registered voters." },
          { num: "Article 256", title: "Amendment by Parliamentary Initiative", text: "Parliament may amend this Constitution if the amendment is approved by at least two-thirds of all members of each House." },
          { num: "Article 257", title: "Referendum", text: "An amendment to this Constitution that would alter the Bill of Rights, the Chapter on Sovereignty or the Chapter on Devolution must be approved by a referendum." }
    ],
    context: "One million Kenyans can propose a constitutional amendment through a popular initiative. The Bill of Rights and devolution chapters can only be changed by referendum.",
    rights: ["One million registered voters may initiate a constitutional amendment through a popular initiative under Article 257.", "The Bill of Rights cannot be amended without a referendum", "Devolution provisions require a referendum to change", "Any amendment reducing county allocation requires a referendum", "Citizens can participate in public hearings on proposed constitutional amendments"],
  },
  {
    num: "17", title: "General Provisions", icon: "📋",
    overview: "Transitional provisions, interpretation and general provisions that complete the constitutional framework.",
    articles: [
          { num: "Article 259", title: "Interpretation", text: "This Constitution shall be interpreted in a manner that promotes its purposes, values and principles, advances the rule of law and permits development of the law." },
          { num: "Article 260", title: "Definitions", text: "This article defines key terms used throughout the Constitution including citizen, public officer, State and State organ." },
          { num: "Article 261", title: "Legislation Required", text: "Parliament shall enact all legislation required by this Constitution within the period specified in the Fifth Schedule." }
    ],
    context: "The Constitution must be interpreted broadly and generously to advance rights and the rule of law — not narrowly to restrict them.",
    rights: ["Courts must interpret the Constitution generously in favour of rights", "International human rights standards inform constitutional interpretation", "Any person can petition court for failure to implement the Constitution", "The Constitution is a living document meant to evolve with society"],
  },
  {
    num: "18", title: "Transitional and Consequential Provisions", icon: "📋",
    overview: "Provides for the transition from the former constitutional order to the current framework, including transitional arrangements for institutions, officers and pending matters. The Sixth Schedule contains most of the transitional provisions.",
    articles: [
          { num: "First Schedule", title: "Counties", text: "Lists all 47 counties of Kenya and their areas." },
          { num: "Second Schedule", title: "National Symbols", text: "Specifies the national flag, national anthem and coat of arms." },
          { num: "Fourth Schedule", title: "Distribution of Functions", text: "Lists functions of the national government and functions of county governments." },
          { num: "Fifth Schedule", title: "Legislation", text: "Lists all legislation that Parliament was required to enact to implement the Constitution." },
          { num: "Sixth Schedule", title: "Transitional and Consequential Provisions", text: "Governs the transition from the old to the new constitutional order." }
    ],
    context: "The Schedules are separate from the Chapters. The Six Schedules (including the Fourth Schedule on distribution of functions and the Sixth Schedule on transitional provisions) supplement the main constitutional text but are not numbered chapters.",
    rights: ["Fourth Schedule determines whether to petition national or county government", "County functions include health services, early childhood education and local roads", "National functions include defence, foreign affairs, immigration and national security", "When a service fails, the Fourth Schedule tells you which government is responsible", "The Fifth Schedule lists all laws that Parliament was required to pass"],
  },
];

export default function ConstitutionPage() {
  const [active, setActive] = useState<number|null>(null);
  const [tab, setTab] = useState("Overview");
  const [search, setSearch] = useState("");

  const chapter = active !== null ? CHAPTERS[active] : null;

  const filtered = search.length > 1
    ? CHAPTERS.filter(c =>
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.overview.toLowerCase().includes(search.toLowerCase()) ||
        c.articles.some((a: any) => a.title.toLowerCase().includes(search.toLowerCase()))
      )
    : CHAPTERS;

  function share(title: string) {
    window.open("https://wa.me/?text=" + encodeURIComponent("Kenya Constitution 2010 — " + title + "\n\nRead and understand your rights at focusfora.vercel.app/constitution"), "_blank");
  }

  return (
    <div className="min-h-screen bg-offwhite">
      <nav className="bg-aubergine px-6 md:px-12 py-4 flex justify-between items-center sticky top-0 z-10">
        <Link href="/dashboard" className="font-serif text-xl text-offwhite">Focus<span className="text-saffron">Fora</span></Link>
        <div className="flex items-center gap-3">
          {active !== null && <button onClick={() => setActive(null)} className="text-offwhite/60 text-xs hover:text-saffron transition-colors uppercase tracking-wider">All Chapters</button>}
          <button onClick={() => share("Kenya Constitution 2010")} className="bg-[#25D366] text-white text-xs font-medium px-3 py-2 rounded-sm">Share</button>
          <Link href="/dashboard" className="text-offwhite/60 text-xs hover:text-saffron transition-colors uppercase tracking-wider hidden md:block">Dashboard</Link>
        </div>
      </nav>

      <div className="px-6 md:px-12 py-10 max-w-5xl mx-auto">
        {active === null && (
          <>
            <p className="ff-section-eyebrow mb-2">Kenya Constitution 2010</p>
            <h1 className="font-serif text-4xl text-aubergine font-light mb-2">Constitution and Law</h1>
            <p className="text-[#5A4060] text-sm font-light mb-6">All 18 chapters — every right explained in plain English. Search any article, chapter or right.</p>

            <div className="relative mb-8">
              <input type="text" placeholder="Search rights, articles, chapters..." value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full border border-aubergine/20 rounded-sm px-4 py-3 text-sm text-aubergine placeholder-aubergine/30 focus:outline-none focus:border-aubergine bg-white" />
              <span className="absolute right-4 top-3 text-aubergine/30">🔍</span>
            </div>

            <p className="text-xs text-[#5A4060] bg-saffron/10 border border-saffron/20 rounded-sm px-4 py-3 mb-6">
              This is a simplified civic education summary of the Constitution of Kenya 2010. For the official legal text, refer to the Kenya Law website at kenyalaw.org.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {filtered.map((ch, i) => (
                <button key={ch.num} onClick={() => { setActive(CHAPTERS.indexOf(ch)); setTab("Overview"); }}
                  className="bg-white border border-aubergine/[0.06] p-5 rounded-sm text-left hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{ch.icon}</span>
                    <div className="flex-1">
                      <p className="text-saffron text-xs font-medium mb-0.5">Chapter {ch.num}</p>
                      <h3 className="font-serif text-base text-aubergine font-semibold mb-1">{ch.title}</h3>
                      <p className="text-xs text-[#5A4060] font-light leading-relaxed line-clamp-2">{ch.overview}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex justify-between items-center">
                    <span className="text-xs text-[#5A4060]">{ch.articles.length} articles · {ch.rights.length} key rights</span>
                    <span className="text-xs text-aubergine font-medium group-hover:underline">Read →</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="bg-aubergine rounded-sm p-6">
              <h2 className="font-serif text-xl text-offwhite mb-4">Know Your Rights When Arrested</h2>
              <div className="grid md:grid-cols-2 gap-2">
                {["You must be told why you are being arrested — Article 49","You have the right to remain silent — Article 49","You must be brought to court within 24 hours — Article 49","You have the right to a lawyer from moment of arrest — Article 50","Bail is your constitutional right — can only be denied for compelling reasons","Torture and inhumane treatment are unconstitutional and criminal — Article 29"].map((r, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-saffron mt-0.5 flex-shrink-0">✦</span>
                    <p className="text-offwhite/80 text-xs leading-relaxed">{r}</p>
                  </div>
                ))}
              </div>
              <button onClick={() => share("Know Your Rights When Arrested")} className="mt-4 bg-[#25D366] text-white text-xs font-medium px-4 py-2 rounded-sm">Share These Rights</button>
            </div>
          </>
        )}

        {active !== null && chapter && (
          <>
            <div className="bg-aubergine rounded-sm p-8 mb-8">
              <p className="text-saffron text-xs uppercase tracking-widest mb-1">{chapter.icon} Chapter {chapter.num} of 18</p>
              <h1 className="font-serif text-4xl text-offwhite font-light mb-3">{chapter.title}</h1>
              <p className="text-offwhite/70 text-sm font-light leading-relaxed mb-6">{chapter.overview}</p>
              <button onClick={() => share(chapter.title)} className="bg-[#25D366] text-white text-xs font-medium px-4 py-2 rounded-sm">Share Chapter</button>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {["Overview","Articles","Key Rights","Kenya Context"].map(t => (
                <button key={t} onClick={() => setTab(t)}
                  className={"text-xs font-medium px-4 py-2 rounded-sm transition-all " + (tab === t ? "bg-aubergine text-offwhite" : "bg-white border border-aubergine/10 text-[#5A4060]")}>{t}</button>
              ))}
            </div>

            {tab === "Overview" && (
              <div className="bg-white border border-aubergine/[0.06] rounded-sm p-6">
                <p className="text-sm text-[#5A4060] leading-relaxed">{chapter.overview}</p>
              </div>
            )}
            {tab === "Articles" && (
              <div className="space-y-4">
                {chapter.articles.map((art: any, i: number) => (
                  <div key={i} className="bg-white border border-aubergine/[0.06] rounded-sm p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-saffron text-aubergine text-xs font-bold px-2 py-1 rounded-sm">{art.num}</span>
                      <h3 className="font-serif text-base text-aubergine font-semibold">{art.title}</h3>
                    </div>
                    <p className="text-sm text-[#5A4060] leading-relaxed">{art.text}</p>
                  </div>
                ))}
              </div>
            )}
            {tab === "Key Rights" && (
              <div className="space-y-3">
                {chapter.rights.map((r: string, i: number) => (
                  <div key={i} className="bg-white border border-aubergine/[0.06] rounded-sm p-5 flex items-start gap-4">
                    <div className="bg-saffron text-aubergine font-bold w-8 h-8 rounded-sm flex items-center justify-center flex-shrink-0 text-sm">{i+1}</div>
                    <p className="text-sm text-[#5A4060] leading-relaxed pt-1">{r}</p>
                  </div>
                ))}
                <button onClick={() => share(chapter.title + " — Key Rights")} className="w-full bg-[#25D366] text-white text-sm font-medium py-3 rounded-sm">Share These Rights on WhatsApp</button>
              </div>
            )}
            {tab === "Kenya Context" && (
              <div className="bg-white border border-aubergine/[0.06] rounded-sm p-6">
                <h3 className="font-serif text-lg text-aubergine mb-3">Practical Kenya Context</h3>
                <p className="text-sm text-[#5A4060] leading-relaxed">{chapter.context}</p>
              </div>
            )}

            <div className="flex justify-between mt-8">
              {active > 0 && <button onClick={() => { setActive(active-1); setTab("Overview"); }} className="text-xs text-aubergine font-medium hover:text-saffron transition-colors">← Chapter {CHAPTERS[active-1].num}: {CHAPTERS[active-1].title}</button>}
              {active < CHAPTERS.length-1 && <button onClick={() => { setActive(active+1); setTab("Overview"); }} className="text-xs text-aubergine font-medium hover:text-saffron transition-colors ml-auto">Chapter {CHAPTERS[active+1].num}: {CHAPTERS[active+1].title} →</button>}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
