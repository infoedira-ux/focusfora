"use client";
import { useState } from "react";
import Link from "next/link";

const CHAPTERS = [
  {
    num: "1", title: "Sovereignty and Supreme Law", icon: "🏛️",
    overview: "The Constitution of Kenya 2010 is the supreme law of the Republic. Any law, including Acts of Parliament, that is inconsistent with this Constitution is void to the extent of the inconsistency.",
    articles: [
          { num: "Article 1", title: "Sovereignty of the People", text: "All sovereign power belongs to the people of Kenya and shall be exercised only in accordance with this Constitution. Sovereign power is delegated to Parliament, the national executive, the judiciary, and county governments." },
          { num: "Article 2", title: "Supremacy of the Constitution", text: "This Constitution is the supreme law of Kenya. Any act or omission in contravention of this Constitution is invalid." },
          { num: "Article 3", title: "Defence of the Constitution", text: "Every person has an obligation to respect, uphold and defend this Constitution. Any attempt to establish a government otherwise than through the Constitution is unlawful." },
    ],
    context: "Every Kenyan citizen has a constitutional duty to defend this Constitution. You cannot be punished for refusing to obey an unconstitutional order.",
    rights: ["A police officer cannot arrest you simply because a superior ordered it — the order must be lawful", "No court, Parliament or President can override the Constitution", "Citizens have standing to challenge unconstitutional laws in court"],
  },
  {
    num: "2", title: "The Republic", icon: "🗺️",
    overview: "Kenya is a sovereign republic with a multi-party democratic system of government. The national values and principles of governance bind all state organs, public officials and all persons.",
    articles: [
          { num: "Article 4", title: "Declaration of the Republic", text: "Kenya is a sovereign republic. The Republic of Kenya shall be a multi-party democratic state founded on the national values and principles of governance." },
          { num: "Article 10", title: "National Values and Principles", text: "The national values include: patriotism, national unity, sharing and devolution of power, the rule of law, democracy, participation of the people, human dignity, equity, social justice, inclusiveness, equality, human rights, non-discrimination, protection of the marginalised, good governance, integrity, transparency and accountability." },
          { num: "Article 11", title: "Culture", text: "Culture is the foundation of the nation. The State shall promote all forms of national and cultural expression." },
    ],
    context: "Article 10 national values are binding on Parliament, courts, tribunals and all state officers. If a government decision ignores these values, it can be challenged.",
    rights: ["Public officers are legally bound by Article 10 values — not just ethically", "Any person can petition court if a government decision violates these values", "Transparency and accountability are constitutional obligations, not options"],
  },
  {
    num: "3", title: "Citizenship", icon: "🪪",
    overview: "Citizenship determines your rights as a Kenyan. Understanding citizenship by birth, descent and registration is essential for documentation, travel and civil rights.",
    articles: [
          { num: "Article 13", title: "Retention and acquisition of citizenship", text: "A citizen by birth does not lose citizenship by acquiring citizenship of another country. Kenya recognises dual citizenship." },
          { num: "Article 14", title: "Citizenship by birth", text: "A person is a citizen by birth if on the day of the person's birth, whether or not the person is born in Kenya, either the mother or father of the person is a citizen." },
          { num: "Article 15", title: "Citizenship by registration", text: "A person who has been married to a citizen for a period of at least seven years is entitled to apply for citizenship by registration." },
    ],
    context: "Kenya recognises dual citizenship since 2010. Kenyans in the diaspora can hold both Kenyan and foreign citizenship without losing Kenyan rights.",
    rights: ["Children born abroad to Kenyan parents are Kenyan citizens by birth", "Dual citizenship is constitutionally guaranteed — you cannot be stripped of Kenyan citizenship for holding another", "Stateless persons have a path to citizenship under Article 16"],
  },
  {
    num: "4", title: "The Bill of Rights", icon: "⚖️",
    overview: "Chapter 4 is the heart of Kenya's Constitution. It contains fundamental rights and freedoms that every person in Kenya is entitled to — not just citizens. These rights are justiciable, meaning you can enforce them in court.",
    articles: [
          { num: "Article 26", title: "Right to Life", text: "Every person has the right to life. The life of a person begins at conception. A person shall not be deprived of life intentionally except in execution of a court order." },
          { num: "Article 27", title: "Equality and Freedom from Discrimination", text: "Every person is equal before the law and has the right to equal protection and equal benefit of the law. Discrimination on grounds of race, sex, pregnancy, marital status, health status, ethnic or social origin, colour, age, disability, religion, conscience, belief, culture, dress, language or birth is prohibited." },
          { num: "Article 28", title: "Human Dignity", text: "Every person has inherent dignity and the right to have that dignity respected and protected." },
          { num: "Article 29", title: "Freedom and Security of the Person", text: "Every person has the right to freedom and security including the right not to be detained without trial, not to be subjected to any form of violence, torture, or cruel, inhuman or degrading treatment." },
          { num: "Article 31", title: "Privacy", text: "Every person has the right to privacy including the right not to have their person, home or property searched, their possessions seized, information relating to their family or private affairs unnecessarily required or revealed, or the privacy of their communications infringed." },
          { num: "Article 33", title: "Freedom of Expression", text: "Every person has the right to freedom of expression including freedom to seek, receive or impart information or ideas." },
          { num: "Article 35", title: "Access to Information", text: "Every citizen has the right of access to information held by the State and information held by another person and required for the exercise or protection of any right or fundamental freedom." },
          { num: "Article 36", title: "Freedom of Association", text: "Every person has the right to freedom of association." },
          { num: "Article 39", title: "Freedom of Movement and Residence", text: "Every person has the right to move freely in Kenya, to leave Kenya, to enter Kenya and to a passport." },
          { num: "Article 40", title: "Protection of Right to Property", text: "Every person has the right, either individually or in association with others, to acquire and own property of any description in any part of Kenya." },
    ],
    context: "The Bill of Rights applies to all persons in Kenya — not only citizens. A non-citizen whose rights are violated can enforce them in court.",
    rights: ["You cannot be arrested without being told why — Article 49", "You have the right to remain silent upon arrest — this is constitutional", "Any evidence obtained through torture or inhumane treatment is inadmissible", "You must be brought before a court within 24 hours of arrest (48 hours on weekend/holiday)", "Bail is a constitutional right unless there are compelling reasons to deny it"],
  },
  {
    num: "5", title: "Land and Environment", icon: "🌍",
    overview: "Land is the most litigated subject in Kenyan courts. The Constitution transformed land law fundamentally — vesting all land in the people of Kenya and classifying it into public, community and private land.",
    articles: [
          { num: "Article 61", title: "Classification of land", text: "All land in Kenya belongs to the people of Kenya collectively as a nation, as communities and as individuals. Land is classified as public land, community land and private land." },
          { num: "Article 63", title: "Community Land", text: "Community land includes land lawfully held, managed or used by specific communities as community forests, grazing areas or shrines, ancestral lands, and any other land declared community land." },
          { num: "Article 64", title: "Private Land", text: "Private land includes land held by a person under freehold tenure, leasehold tenure or any other tenure." },
          { num: "Article 66", title: "Regulation of land use", text: "The State may regulate the use of any land in the interest of defence, public safety, public order, public morality, public health or land use planning." },
    ],
    context: "Land in Kenya has a maximum leasehold of 99 years for private individuals and companies. Freehold is only for citizens. Non-citizens cannot own freehold land in Kenya.",
    rights: ["Always search the land registry before purchasing any land — title deed verification is essential", "Historical land injustices can be reported to the National Land Commission", "Community land cannot be sold without the consent of the community", "Squatters who have occupied land for 12 years may have adverse possession rights — seek legal advice"],
  },
  {
    num: "6", title: "Leadership and Integrity", icon: "🎖️",
    overview: "Chapter 6 sets the standards of integrity for all state officers. It has been used to challenge the eligibility of candidates for public office and to remove officials from office. Every Kenyan should know it.",
    articles: [
          { num: "Article 73", title: "Responsibilities of leadership", text: "Authority assigned to a state officer is a public trust to be exercised in a manner consistent with the purposes and objects of this Constitution. State officers must bring honour to the nation and dignity to the office." },
          { num: "Article 75", title: "Conduct of state officers", text: "A state officer shall behave, whether in public or private life, in a manner that avoids conflicts of interest. A state officer shall not maintain a bank account outside Kenya except in accordance with the law." },
          { num: "Article 76", title: "Financial probity of state officers", text: "A full-time state officer shall not participate in any other gainful employment." },
          { num: "Article 77", title: "Restriction on activities of state officers", text: "A full-time state officer shall not participate in any other gainful employment." },
    ],
    context: "Chapter 6 has been used successfully to challenge politicians, public servants and judicial officers who do not meet integrity standards. The Ethics and Anti-Corruption Commission (EACC) enforces these provisions.",
    rights: ["Any citizen can petition the EACC regarding a state officer who violates Chapter 6", "Wealth declaration is mandatory for all state officers — failure is a constitutional violation", "A state officer convicted of a corruption-related offence must vacate office", "Chapter 6 applies to all state officers including county assembly members and ward administrators"],
  },
  {
    num: "7", title: "Representation of the People", icon: "🗳️",
    overview: "This chapter governs elections, political parties and the electoral system. Understanding it protects your vote and enables you to challenge electoral irregularities.",
    articles: [
          { num: "Article 82", title: "Legislation on elections", text: "Parliament shall enact legislation to provide for the nomination of candidates for election and the conduct of elections and referenda." },
          { num: "Article 86", title: "Voting", text: "At every election, the Independent Electoral and Boundaries Commission shall ensure that votes are cast in secret, the counting of votes and announcement of results is transparent, and the results are announced promptly." },
          { num: "Article 88", title: "Independent Electoral and Boundaries Commission", text: "The IEBC is responsible for conducting or supervising referenda and elections to any elective body. The IEBC is independent." },
    ],
    context: "Election results can be challenged in court. Presidential results must be challenged within 7 days of declaration. The Supreme Court determines presidential election petitions.",
    rights: ["You have a constitutional right to a secret ballot — no one can tell you how to vote", "Register to vote — it is both a right and a civic duty", "Political parties must respect internal democracy — members can enforce this", "Election observers have constitutional standing to access polling stations"],
  },
  {
    num: "8", title: "Devolution", icon: "🏙️",
    overview: "Devolution is one of the most transformative elements of Kenya's 2010 Constitution. It created 47 county governments with their own executives and assemblies. Understanding devolution helps citizens hold county governments accountable.",
    articles: [
          { num: "Article 174", title: "Objects of devolution", text: "The objects of devolution include: promoting democratic and accountable exercise of power, fostering national unity, recognising the right of communities to manage their own affairs, protecting and promoting the interests and rights of minorities and marginalised communities, and ensuring equitable sharing of national and local resources." },
          { num: "Article 175", title: "Principles of devolution", text: "County governments shall be based on democratic principles and separation of powers and shall have reliable sources of revenue." },
          { num: "Article 176", title: "County governments", text: "There shall be a county government for each county, consisting of a county assembly and a county executive." },
    ],
    context: "County governments control significant resources — approximately 15 percent of national revenue is allocated to counties. Citizens can attend county assembly sessions, which are public.",
    rights: ["County assembly sessions are open to the public — attend and watch your representative", "County budgets must be publicly available — request one from your county government", "Citizens can petition county assemblies directly — no lawyer required", "County governors are subject to impeachment by county assemblies"],
  },
  {
    num: "9", title: "National Security", icon: "🛡️",
    overview: "This chapter governs the National Police Service, Kenya Defence Forces and National Intelligence Service. It contains important provisions about your rights when dealing with security forces.",
    articles: [
          { num: "Article 238", title: "National security", text: "National security is subject to the authority of the Constitution and Parliament. National security shall be pursued in compliance with the law." },
          { num: "Article 244", title: "Objects of the National Police Service", text: "The National Police Service shall strive for the highest standards of professionalism and discipline among its members, prevention of corruption and promotion of and respect for human rights." },
    ],
    context: "Police officers are bound by the Constitution and cannot claim to be following orders when violating rights. The Independent Policing Oversight Authority (IPOA) investigates police misconduct.",
    rights: ["You can file a complaint against any police officer at IPOA — ipoa.go.ke", "Police must identify themselves — they must show their service card if asked", "You have the right to legal representation from the moment of arrest", "A police officer who beats you has committed a criminal offence — document everything"],
  },
  {
    num: "10", title: "Constitutional Implementation", icon: "📋",
    overview: "Understanding how to enforce your constitutional rights is as important as knowing what they are. Kenya has multiple institutions established specifically to protect constitutional rights.",
    articles: [
          { num: "Article 22", title: "Enforcement of Bill of Rights", text: "Every person has the right to institute court proceedings claiming that a right or fundamental freedom in the Bill of Rights has been denied, violated or infringed." },
          { num: "Article 23", title: "Authority of courts to uphold and enforce the Bill of Rights", text: "In any proceedings brought under Article 22, a court may grant appropriate relief including a declaration of rights, an injunction, a conservatory order, or an order for compensation." },
    ],
    context: "You do not need a lawyer to file a constitutional petition. The courts have been directed to be accessible. Filing fees are waived for Bill of Rights petitions in many cases.",
    rights: ["The Kenya National Human Rights Commission (KNHRC) handles rights complaints for free", "The Commission on Administrative Justice (Ombudsman) investigates maladministration", "Legal Aid is available through the National Legal Aid Service (NLAS) for those who cannot afford lawyers", "Constitutional petitions can be filed in the High Court in any county"],
  },
];

export default function ConstitutionPage() {
  const [activeChapter, setActiveChapter] = useState<number|null>(null);
  const [activeTab, setActiveTab] = useState("Overview");
  const [search, setSearch] = useState("");

  const chapter = activeChapter !== null ? CHAPTERS[activeChapter] : null;

  const filtered = search.length > 1
    ? CHAPTERS.filter(c =>
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.overview.toLowerCase().includes(search.toLowerCase()) ||
        c.articles.some((a:any) => a.title.toLowerCase().includes(search.toLowerCase()) || a.text.toLowerCase().includes(search.toLowerCase()))
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
          {activeChapter !== null && <button onClick={() => setActiveChapter(null)} className="text-offwhite/60 text-xs hover:text-saffron transition-colors uppercase tracking-wider">All Chapters</button>}
          <button onClick={() => share("Kenya Constitution 2010")} className="bg-[#25D366] text-white text-xs font-medium px-3 py-2 rounded-sm hover:bg-[#20bc5a] transition-colors">Share</button>
          <Link href="/dashboard" className="text-offwhite/60 text-xs hover:text-saffron transition-colors uppercase tracking-wider hidden md:block">Dashboard</Link>
        </div>
      </nav>

      <div className="px-6 md:px-12 py-10 max-w-5xl mx-auto">
        {activeChapter === null && (
          <>
            <p className="ff-section-eyebrow mb-2">Kenya Constitution 2010</p>
            <h1 className="font-serif text-4xl text-aubergine font-light mb-2">Constitution and Law</h1>
            <p className="text-[#5A4060] text-sm font-light mb-6">Every Kenyan's rights — explained in plain English. Search any article, chapter or right.</p>

            <div className="relative mb-8">
              <input
                type="text"
                placeholder="Search rights, articles, chapters..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full border border-aubergine/20 rounded-sm px-4 py-3 text-sm text-aubergine placeholder-aubergine/30 focus:outline-none focus:border-aubergine bg-white"
              />
              <span className="absolute right-4 top-3 text-aubergine/30 text-sm">🔍</span>
            </div>

            {search.length > 1 && filtered.length === 0 && (
              <p className="text-[#5A4060] text-sm">No results for that search. Try different keywords.</p>
            )}

            <div className="grid md:grid-cols-2 gap-4">
              {filtered.map((ch, i) => (
                <button key={ch.num} onClick={() => { setActiveChapter(CHAPTERS.indexOf(ch)); setActiveTab("Overview"); }}
                  className="bg-white border border-aubergine/[0.06] p-6 rounded-sm text-left hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{ch.icon}</div>
                    <div className="flex-1">
                      <p className="text-saffron text-xs font-medium mb-1">Chapter {ch.num}</p>
                      <h3 className="font-serif text-lg text-aubergine font-semibold mb-2">{ch.title}</h3>
                      <p className="text-xs text-[#5A4060] font-light leading-relaxed line-clamp-2">{ch.overview}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-xs text-[#5A4060]">{ch.articles.length} articles · {ch.rights.length} key rights</span>
                    <span className="text-xs text-aubergine font-medium group-hover:underline">Read</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-10 bg-aubergine rounded-sm p-6">
              <h2 className="font-serif text-xl text-offwhite mb-3">Know Your Rights When Arrested</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {["You must be told why you are being arrested — Article 49","You have the right to remain silent — Article 49","You must be brought to court within 24 hours — Article 49","You have the right to a lawyer from the moment of arrest — Article 50","Bail is your constitutional right — it can only be denied for compelling reasons","Torture and inhumane treatment are unconstitutional and criminal — Article 29"].map((right, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-saffron mt-0.5 flex-shrink-0">✦</span>
                    <p className="text-offwhite/80 text-xs leading-relaxed">{right}</p>
                  </div>
                ))}
              </div>
              <button onClick={() => share("Know Your Rights When Arrested")} className="mt-4 bg-[#25D366] text-white text-xs font-medium px-4 py-2 rounded-sm">Share These Rights</button>
            </div>
          </>
        )},
        {activeChapter !== null && chapter && (
          <>
            <div className="bg-aubergine rounded-sm p-8 mb-8">
              <p className="text-saffron text-xs uppercase tracking-widest mb-1">{chapter.icon} Chapter {chapter.num}</p>
              <h1 className="font-serif text-4xl text-offwhite font-light mb-3">{chapter.title}</h1>
              <p className="text-offwhite/70 text-sm font-light leading-relaxed mb-6">{chapter.overview}</p>
              <button onClick={() => share(chapter.title)} className="bg-[#25D366] text-white text-xs font-medium px-4 py-2 rounded-sm hover:bg-[#20bc5a] transition-colors">Share Chapter</button>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {["Overview","Articles","Key Rights","Kenya Context"].map(t => (
                <button key={t} onClick={() => setActiveTab(t)} className={"text-xs font-medium px-4 py-2 rounded-sm transition-all " + (activeTab === t ? "bg-aubergine text-offwhite" : "bg-white border border-aubergine/10 text-[#5A4060]")}>{t}</button>
              ))}
            </div>

            {activeTab === "Overview" && (
              <div className="bg-white border border-aubergine/[0.06] rounded-sm p-6">
                <p className="text-sm text-[#5A4060] leading-relaxed">{chapter.overview}</p>
              </div>
            )},
            {activeTab === "Articles" && (
              <div className="space-y-4">
                {chapter.articles.map((art:any, i:number) => (
                  <div key={i} className="bg-white border border-aubergine/[0.06] rounded-sm p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-saffron text-aubergine text-xs font-bold px-2 py-1 rounded-sm">{art.num}</span>
                      <h3 className="font-serif text-base text-aubergine font-semibold">{art.title}</h3>
                    </div>
                    <p className="text-sm text-[#5A4060] leading-relaxed">{art.text}</p>
                  </div>
                ))}
              </div>
            )},
            {activeTab === "Key Rights" && (
              <div className="space-y-3">
                {chapter.rights.map((right:string, i:number) => (
                  <div key={i} className="bg-white border border-aubergine/[0.06] rounded-sm p-5 flex items-start gap-4">
                    <div className="bg-saffron text-aubergine font-bold w-8 h-8 rounded-sm flex items-center justify-center flex-shrink-0 text-sm">{i+1}</div>
                    <p className="text-sm text-[#5A4060] leading-relaxed pt-1">{right}</p>
                  </div>
                ))}
                <button onClick={() => share(chapter.title + " — Key Rights")} className="w-full bg-[#25D366] text-white text-sm font-medium py-3 rounded-sm hover:bg-[#20bc5a] transition-colors">Share These Rights on WhatsApp</button>
              </div>
            )},
            {activeTab === "Kenya Context" && (
              <div className="bg-white border border-aubergine/[0.06] rounded-sm p-6">
                <h3 className="font-serif text-lg text-aubergine mb-3">Practical Kenya Context</h3>
                <p className="text-sm text-[#5A4060] leading-relaxed">{chapter.context}</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
