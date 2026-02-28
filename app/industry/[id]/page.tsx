"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

const INDUSTRY_CONTENT: Record<string, any> = {
  "corporate-politics": {
    title: "Corporate Politics",
    category: "Corporate Life",
    icon: "🏢",
    tagline: "How power actually works in organisations — and how to navigate it without losing yourself",
    overview: "Corporate politics is not optional. The moment two people work together, politics begins. The question is not whether to engage but how. Those who pretend politics does not exist are usually its victims. Those who understand it use it to do better work, build stronger teams and advance more fairly.",
    sections: [
      {
        title: "What Corporate Politics Actually Is",
        content: "Politics is simply the management of competing interests within an organisation. Everyone has interests — career advancement, departmental budget, recognition, influence. When these interests conflict, politics happens. It is not inherently corrupt or dishonest. It becomes toxic only when personal interest consistently overrides organisational good."
      },
      {
        title: "The Power Map",
        content: "Every organisation has a formal hierarchy — the org chart. And an informal power structure — who actually makes things happen. These are rarely the same. The EA to the CEO often has more real power than several VPs. The long-serving accounts manager knows where every body is buried. Map both structures. Know who influences decisions before they reach the formal decision-maker."
      },
      {
        title: "Allies, Neutrals and Opponents",
        content: "For any initiative or career goal, people fall into three categories. Allies support you — invest in these relationships. Neutrals have no strong view — they can be won over with information and inclusion. Opponents have competing interests — understand why they oppose before trying to change their mind. Never make enemies unnecessarily. Today's opponent on one issue is tomorrow's ally on another."
      },
      {
        title: "The Kenya Corporate Context",
        content: "Kenyan organisations have specific political dynamics worth understanding. Ethnic networks operate quietly but powerfully in many organisations — be aware without being paranoid. Seniority is highly respected — showing deference to experienced colleagues is politically smart not just culturally appropriate. The 'Big Man' culture means that access to powerful individuals matters enormously. Building relationships upward is not sycophancy — it is professional survival."
      },
      {
        title: "Protecting Yourself",
        content: "Document important decisions and agreements in writing — a follow-up email after a verbal agreement protects you. Maintain relationships across departments so you have allies everywhere. Never gossip — it always gets back. Disagree privately before opposing publicly. Build a reputation for delivery — competence is the best political protection."
      },
      {
        title: "Playing Politics with Integrity",
        content: "The goal is not to win at politics but to use political understanding to do better work. Use your understanding of interests to build coalitions around good ideas. Use your power map to get resources for your team. Use your relationships to break down silos. Political skill in service of genuine organisational value is leadership. Political skill in service only of personal advancement is what gives politics its bad name."
      },
    ],
    kenya_context: "In Kenya's corporate environment, relationships built outside the office — church, school networks, family connections — often matter as much as formal professional relationships. Investing in community relationships is professional investment. The Kenyan business culture also places high value on respect for age and experience — navigate generational dynamics carefully.",
    action_steps: [
      "Draw your organisation's informal power map — who influences whom",
      "Identify your three most important allies and invest in those relationships this week",
      "For your next initiative, map stakeholders into allies, neutrals and opponents before starting",
      "Find one opponent on a current issue and have a genuine conversation to understand their perspective",
      "Build one new cross-departmental relationship every month",
    ],
    myths: [
      { myth: "I just keep my head down and do good work — politics doesn't affect me", truth: "Keeping your head down means others make decisions about your career, your resources and your work without your input. Good work alone is necessary but not sufficient." },
      { myth: "Playing politics means being dishonest", truth: "Understanding power dynamics and building relationships is not dishonesty. Lying and manipulation are dishonest. Knowing who to talk to and how to frame an idea is skill." },
    ]
  },
  "corporate-ladder": {
    title: "The Corporate Ladder",
    category: "Corporate Life",
    icon: "📈",
    tagline: "The unwritten rules of getting promoted that no one tells you at the interview",
    overview: "Promotion decisions are made long before the formal process begins. By the time a role is posted, the decision-maker usually already has someone in mind. Understanding how promotion actually works — rather than how HR says it works — is the difference between waiting to be noticed and actively building toward the next level.",
    sections: [
      {
        title: "Visibility is Not Vanity",
        content: "You cannot be promoted into a role your manager does not know you can do. Making your work visible — in meetings, in reports, in conversations — is professional responsibility not self-promotion. If your manager does not know your best work, that is a communication failure worth fixing."
      },
      {
        title: "Do the Job Before You Have the Title",
        content: "The fastest path to promotion is to start doing the next level's work before being asked. Take on projects that stretch beyond your current role. Solve problems that are slightly above your pay grade. When the promotion conversation happens, you are confirming what is already true — not making a case for what might be."
      },
      {
        title: "Your Manager is Your Most Important Relationship",
        content: "Your manager does not just evaluate your performance — they advocate for you in rooms you are not in. A manager who believes in you will create opportunities, protect you from political attacks and push for your promotion. A manager who is indifferent or hostile can block you regardless of your performance. Managing this relationship upward is critical."
      },
      {
        title: "The Kenyan Promotion Reality",
        content: "In many Kenyan organisations, loyalty and tenure are weighted heavily alongside performance. Jumping ship frequently can signal unreliability even if each move was a genuine step up. Internal promotions also often depend on sponsor relationships — a senior person who actively advocates for you. Find your sponsor: someone two levels above you who sees your potential and is willing to say your name in rooms you are not in."
      },
      {
        title: "When to Ask and When to Wait",
        content: "Asking for promotion too early signals impatience and poor self-awareness. Waiting too long signals lack of ambition or confidence. The right time to have the promotion conversation is when you can point to consistent delivery at the next level, not just competence at your current level. Have the conversation privately with your manager before any formal process begins."
      },
    ],
    kenya_context: "Kenyan corporate culture often rewards those who combine performance with institutional loyalty. Being seen as someone who builds the organisation — not just their own career — matters. Mentorship relationships with senior leaders are particularly valuable in Kenyan organisations where informal sponsorship is often more powerful than formal processes.",
    action_steps: [
      "Ask your manager directly: what would I need to demonstrate to be considered for the next level?",
      "Identify one responsibility currently above your grade and volunteer for it",
      "Find a sponsor — someone senior who knows your work and will advocate for you",
      "Make your wins visible — send a monthly update to your manager highlighting key achievements",
      "Study the person currently doing the role you want — what do they do that you do not yet do?",
    ],
    myths: [
      { myth: "If I work hard enough I will be promoted automatically", truth: "Promotion requires visibility, relationships and timing — not just effort. Hard work is the floor, not the ceiling." },
      { myth: "Asking for promotion is pushy", truth: "Managers rarely promote people who have not signalled they want to grow. Asking the right way, at the right time, signals ambition and self-awareness." },
    ]
  },
  "supplier-management": {
    title: "Supplier Management",
    category: "Business Operations",
    icon: "🤝",
    tagline: "How to source, negotiate and manage vendors so they work as hard for your business as you do",
    overview: "Your suppliers can make or break your business. A great supplier gives you competitive advantage — better quality, better prices, better terms, faster delivery. A poor supplier — or poor management of a good supplier — creates cost, delay and customer dissatisfaction. Supplier management is not an administrative function. It is a strategic one.",
    sections: [
      {
        title: "Supplier Selection",
        content: "The best time to manage a supplier is before you sign the contract. Due diligence matters — financial stability, references, capacity, quality systems. A cheap supplier who cannot deliver consistently is more expensive than a slightly pricier reliable one. For critical suppliers, visit their facilities if possible. For smaller ones, start with a trial order before committing to volume."
      },
      {
        title: "The Contract",
        content: "Every supplier relationship should be documented — even if it is just a one-page letter of agreement. Key terms to define: price and payment terms, delivery timelines and penalties, quality standards and rejection processes, minimum order quantities, exclusivity (if any), and exit clauses. In Kenya, payment terms are often negotiated hard — 30, 60 or 90 days. Know your cash flow needs before agreeing."
      },
      {
        title: "Ongoing Performance Management",
        content: "Set clear KPIs for your critical suppliers — on-time delivery rate, defect rate, response time on issues. Review these regularly — quarterly for major suppliers, annually for smaller ones. Share feedback honestly. Good suppliers want to know when they are underperforming so they can fix it. Bad suppliers will ignore feedback — that information is also useful."
      },
      {
        title: "Relationship not just Transaction",
        content: "Your best suppliers should see you as a valued customer, not just an account. Pay on time — it sounds basic but many Kenyan businesses fail here and then wonder why suppliers prioritise other customers. Communicate demand forecasts so suppliers can plan. Recognise good performance. The supplier who trusts you will go the extra mile when you need emergency stock or a special favour."
      },
      {
        title: "The Kenya Supplier Context",
        content: "Kenya's supply chain has specific challenges — infrastructure delays, forex fluctuations for imports, informality in many sectors. Build buffer stock for critical items. Develop local alternatives to imported goods where quality is adequate — local sourcing reduces forex exposure and delivery uncertainty. The informal supplier sector is large and often offers competitive prices but needs closer quality monitoring."
      },
    ],
    kenya_context: "Import-dependent businesses in Kenya face particular supplier management challenges — forex availability, port delays at Mombasa and customs clearance unpredictability all affect supply. Developing local supplier alternatives and maintaining 4-6 weeks of critical stock provides important buffer. Building relationships with local clearing agents who can navigate customs efficiently is often as important as the supplier relationship itself.",
    action_steps: [
      "List your top 10 suppliers by spend and assess each on delivery, quality and relationship",
      "For your top 3 suppliers, ensure you have written agreements covering key terms",
      "Set up a simple scorecard — track on-time delivery and defect rates monthly",
      "Pay your most important supplier one week earlier than required — watch the relationship improve",
      "Identify your single biggest supplier risk and develop a backup supplier option",
    ],
    myths: [
      { myth: "Always squeeze suppliers on price for maximum value", truth: "The cheapest supplier is often the most expensive when quality failures and delivery delays are counted. Sustainable relationships create more value than transactional extraction." },
      { myth: "Supplier management is purchasing's job", truth: "Any manager who depends on external suppliers needs supplier management skills — it is not just for procurement specialists." },
    ]
  },
  "audit-processes": {
    title: "Audit Processes",
    category: "Finance & Accounting",
    icon: "🔍",
    tagline: "What auditors actually do, why it matters, and how to make audit season less painful",
    overview: "Many professionals dread audit season — the requests for documents, the questions about processes, the disruption to normal work. But understanding what auditors are actually doing and why transforms audit from an ordeal into a useful governance tool. Auditors are not the enemy. They are checking that the systems your organisation depends on are actually working.",
    sections: [
      {
        title: "What Audit Actually Is",
        content: "An audit is an independent examination of financial records, processes or systems to verify that they are accurate, complete and compliant with relevant standards. External audits examine financial statements for accuracy. Internal audits examine operational processes for efficiency and risk. Both serve the same fundamental purpose — providing assurance that things are as they should be."
      },
      {
        title: "What Auditors Are Looking For",
        content: "Auditors test three things: existence (do the assets and transactions actually exist?), completeness (are all transactions recorded?), and accuracy (are amounts correctly stated?). They also check compliance — are processes following the rules they are supposed to follow? Understanding these objectives helps you anticipate what they will ask and why."
      },
      {
        title: "Preparing for Audit",
        content: "The best audit preparation is good record-keeping throughout the year — not a scramble in the weeks before auditors arrive. Ensure invoices are filed against purchase orders. Bank reconciliations are complete and signed off monthly. Expense claims have supporting receipts. Fixed assets are tagged and recorded. If you do these things consistently, audit preparation is minimal."
      },
      {
        title: "The Audit Process",
        content: "A typical external audit follows a predictable path: planning (auditors understand the business and identify risk areas), fieldwork (testing transactions and controls), reporting (findings and management responses), and sign-off (the audit opinion). The management letter that follows the audit is valuable — it identifies control weaknesses that create risk. Read it carefully and act on it."
      },
      {
        title: "Kenya Audit Context",
        content: "Kenya's audit environment is shaped by several factors. For companies, the Companies Act and ICPAK standards govern financial reporting. For NGOs and donor-funded organisations, donor audit requirements often exceed statutory requirements. Government auditing by the Controller and Auditor General follows specific public finance management frameworks. Know which standards apply to your organisation."
      },
    ],
    kenya_context: "Kenya Revenue Authority audits are a specific type of audit that businesses face — tax audits that examine whether declared tax liabilities are accurate. These require particular preparation: maintaining transaction records for the required retention period (typically 7 years), ensuring VAT returns reconcile to financial statements, and having transfer pricing documentation if dealing with related parties across borders.",
    action_steps: [
      "Review last year's management letter — are the control weaknesses identified still unaddressed?",
      "Ensure bank reconciliations are being completed and signed off monthly",
      "Check that your fixed asset register reflects actual assets — when did you last verify it?",
      "Brief your team before audit fieldwork begins — cooperation, not defensiveness, is the goal",
      "Meet with your auditors outside audit season — understand their concerns before they become findings",
    ],
    myths: [
      { myth: "A clean audit means the business is well-run", truth: "A clean audit means the financial statements are fairly presented. It does not assess strategy, culture or operational effectiveness." },
      { myth: "Auditors are trying to catch us out", truth: "Auditors are providing assurance to shareholders and stakeholders. Working with them transparently is both the right approach and makes the audit faster." },
    ]
  },
  "work-myths": {
    title: "Work Myths Busted",
    category: "Myths Decoded",
    icon: "💡",
    tagline: "The things they told you about professional success that were always wrong",
    overview: "Most career advice is either platitude or lie. Hard work alone gets you promoted. Loyalty is rewarded. Your degree determines your ceiling. Keep your head down and good things will happen. These beliefs are not just wrong — they are actively harmful, causing talented people to mismanage their careers for years before discovering the reality.",
    sections: [
      {
        title: "Myth: Hard Work Alone Gets You Promoted",
        content: "Reality: Hard work is necessary but not sufficient. Promotion requires visibility, relationships, timing and political acumen alongside performance. The hardest workers are often the most exploited — valued in their current roles, not promoted out of them because they are too useful where they are. Work hard AND make your work visible AND build relationships AND have the promotion conversation."
      },
      {
        title: "Myth: Loyalty to Your Employer is Rewarded",
        content: "Reality: Organisations are not loyal to individuals — they respond to economic incentives. The colleague who leaves and returns often gets a higher salary than the one who stayed and asked for increments. This does not mean job-hopping is optimal — tenure builds expertise and trust. But expecting loyalty to be reciprocated automatically is naive. Negotiate your value regularly."
      },
      {
        title: "Myth: Your Academic Qualification Determines Your Career Ceiling",
        content: "Reality: Your qualification gets you through the first door. After 3-5 years of work experience, almost no one cares about your university degree — they care about what you have done and who you know. In Kenya's entrepreneurial economy, some of the most successful business owners never finished university. Qualifications open doors. Skills, relationships and execution keep you in the room."
      },
      {
        title: "Myth: Keep Your Head Down and Good Things Will Happen",
        content: "Reality: Keeping your head down means others make decisions about your career without your input. In most organisations, the people who get the interesting projects, the promotions and the salary increases are the ones who actively manage their careers — who signal what they want, build the right relationships and position themselves for opportunities. Passivity is a strategy — just not a good one."
      },
      {
        title: "Myth: The Best Idea Wins",
        content: "Reality: The best-communicated idea from the most trusted person wins. Brilliant ideas presented by people without credibility or relationships get ignored. Average ideas from respected, politically savvy people get implemented. This is not fair — but it is almost universally true. Build credibility first, then present ideas."
      },
      {
        title: "Myth: Work-Life Balance Means Working Less",
        content: "Reality: Work-life balance is about sustainability and intentionality — not minimising work hours. Some periods require intense work. The question is whether you are building something that gives you energy or depleting yourself for something that does not. Career satisfaction comes from meaning, autonomy and growth — not from watching the clock."
      },
    ],
    kenya_context: "In Kenya's job market, where formal employment is competitive and unemployment high, many professionals feel they cannot afford to challenge myths about loyalty and hard work. The fear of losing employment creates compliance. But understanding these myths does not mean becoming cynical or disloyal — it means engaging with your career intelligently rather than hoping that good behaviour will automatically be rewarded.",
    action_steps: [
      "Audit your career assumptions — which of these myths have you been operating on?",
      "Have a direct conversation with your manager about what promotion requires in your organisation",
      "Negotiate your salary or contract terms at your next opportunity — passivity costs you money",
      "Identify one thing you have been doing out of misplaced loyalty that does not serve you",
      "Build one new senior relationship this month — visibility requires investment",
    ],
    myths: [
      { myth: "These myths are cynical — I prefer to believe in good systems", truth: "Understanding how systems actually work is not cynicism — it is pragmatism. You can operate with integrity and good values while also understanding organisational reality." },
    ]
  },
};

const SECTION_TABS = ["Overview", "Deep Dive", "Kenya Context", "Action Steps", "Myths"];

export default function IndustryTopicPage() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("Overview");

  const topic = INDUSTRY_CONTENT[id as string];

  function shareToWhatsApp() {
    const text = `💼 *${topic?.title}* — Professional Guide%0A%0A${topic?.tagline}%0A%0ARead free on Focus Fora 👇%0Ahttps://focusfora.vercel.app/industry/${id}`;
    window.open(`https://wa.me/?text=${text}`, "_blank");
  }

  if (!topic) return (
    <div className="min-h-screen bg-offwhite flex items-center justify-center">
      <div className="text-center">
        <div className="text-5xl mb-4">💼</div>
        <p className="font-serif text-2xl text-aubergine mb-2">Coming Soon</p>
        <p className="text-[#5A4060] text-sm mb-6">We are writing this guide — check back soon.</p>
        <Link href="/industry" className="ff-btn-primary">← Industry Hub</Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-offwhite">
      <nav className="bg-aubergine px-6 md:px-12 py-4 flex justify-between items-center sticky top-0 z-10">
        <Link href="/industry" className="font-serif text-xl text-offwhite">
          Focus<span className="text-saffron">Fora</span>
        </Link>
        <Link href="/industry" className="text-offwhite/60 text-xs hover:text-saffron transition-colors uppercase tracking-wider">
          ← Industry Hub
        </Link>
      </nav>

      {/* Header */}
      <div className="bg-aubergine px-6 md:px-12 py-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-saffron text-xs uppercase tracking-widest mb-2">{topic.icon} {topic.category}</p>
          <h1 className="font-serif text-4xl md:text-5xl text-offwhite font-light mb-2">{topic.title}</h1>
          <p className="text-offwhite/60 text-sm italic mb-4">{topic.tagline}</p>
          <div className="flex gap-3">
            <button onClick={shareToWhatsApp}
              className="flex items-center gap-2 bg-[#25D366] text-white text-xs font-medium px-4 py-2 rounded-sm hover:bg-[#20bc5a] transition-colors">
              📲 Share on WhatsApp
            </button>
            <button onClick={() => navigator.clipboard.writeText(`https://focusfora.vercel.app/industry/${id}`)}
              className="flex items-center gap-2 bg-white/10 text-offwhite text-xs font-medium px-4 py-2 rounded-sm hover:bg-white/20 transition-colors">
              🔗 Copy Link
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-aubergine/10 sticky top-[57px] z-10">
        <div className="max-w-4xl mx-auto px-6 md:px-12 flex gap-1 overflow-x-auto">
          {SECTION_TABS.map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`text-xs font-medium px-4 py-4 whitespace-nowrap border-b-2 transition-all ${
                activeTab === tab ? "border-saffron text-aubergine" : "border-transparent text-[#5A4060] hover:text-aubergine"
              }`}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 py-10">

        {activeTab === "Overview" && (
          <div>
            <p className="text-[#5A4060] leading-relaxed text-base mb-8">{topic.overview}</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { label: "Sections", value: `${topic.sections?.length} deep dives` },
                { label: "Kenya Context", value: "Localised insights" },
                { label: "Action Steps", value: `${topic.action_steps?.length} things to do` },
                { label: "Myths Busted", value: `${topic.myths?.length} debunked` },
              ].map(stat => (
                <div key={stat.label} className="bg-saffron-pale border border-aubergine/[0.06] rounded-sm p-4">
                  <div className="text-xs text-saffron uppercase tracking-wider mb-1">{stat.label}</div>
                  <div className="font-serif text-xl text-aubergine">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Deep Dive" && (
          <div className="space-y-6">
            {topic.sections?.map((section: any, i: number) => (
              <div key={i} className="bg-white border border-aubergine/[0.06] rounded-sm p-6">
                <h3 className="font-serif text-xl text-aubergine mb-3 flex items-center gap-2">
                  <span className="text-saffron font-light">{i + 1}.</span> {section.title}
                </h3>
                <p className="text-sm text-[#5A4060] leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Kenya Context" && (
          <div className="bg-white border border-aubergine/[0.06] rounded-sm p-8">
            <h2 className="font-serif text-2xl text-aubergine mb-4 flex items-center gap-2">
              🇰🇪 Kenya Context
            </h2>
            <p className="text-sm text-[#5A4060] leading-relaxed">{topic.kenya_context}</p>
          </div>
        )}

        {activeTab === "Action Steps" && (
          <div>
            <h2 className="font-serif text-2xl text-aubergine mb-2">Action Steps</h2>
            <p className="text-[#5A4060] text-sm font-light mb-6">Do these. Not someday — this week.</p>
            <div className="space-y-3">
              {topic.action_steps?.map((step: string, i: number) => (
                <div key={i} className="bg-white border border-aubergine/[0.06] rounded-sm p-5 flex items-start gap-4">
                  <div className="bg-saffron text-aubergine font-serif text-lg font-semibold w-8 h-8 rounded-sm flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-sm text-[#5A4060] leading-relaxed pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Myths" && (
          <div>
            <h2 className="font-serif text-2xl text-aubergine mb-2">Myths Busted</h2>
            <p className="text-[#5A4060] text-sm font-light mb-6">Common beliefs about this topic that are wrong — and what is actually true.</p>
            <div className="space-y-4">
              {topic.myths?.map((item: any, i: number) => (
                <div key={i} className="bg-white border border-aubergine/[0.06] rounded-sm overflow-hidden">
                  <div className="bg-red-50 border-l-4 border-red-300 p-4">
                    <p className="text-xs font-medium text-red-600 uppercase tracking-wider mb-1">❌ Myth</p>
                    <p className="text-sm text-red-800 font-medium">{item.myth}</p>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-300 p-4">
                    <p className="text-xs font-medium text-green-600 uppercase tracking-wider mb-1">✅ Reality</p>
                    <p className="text-sm text-green-800">{item.truth}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
