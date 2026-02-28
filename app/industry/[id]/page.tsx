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

  "workplace-communication": {
    title: "Workplace Communication",
    category: "Corporate Life",
    icon: "💬",
    tagline: "Emails, meetings and difficult conversations — the skills that determine how far you go",
    overview: "Technical skills get you hired. Communication skills determine how far you rise. The ability to write a clear email, run an effective meeting, give difficult feedback and manage conflict professionally separates average performers from exceptional ones at every level.",
    sections: [
      { title: "Email That Gets Results", content: "Every email should have one clear purpose. State it in the subject line and the first sentence. Use short paragraphs. End with a specific action request and deadline. The most common email failure is burying the request in paragraph four. Busy people read the first two sentences and decide whether to continue. Make those sentences do the work." },
      { title: "Meetings That Are Worth Attending", content: "Most meetings fail because they lack a clear purpose, the right people, or a decision-making structure. Before calling a meeting ask: could this be an email? If you must meet, send an agenda 24 hours before, start on time, assign a timekeeper, end with clear actions, owners and deadlines. The person who runs tight, purposeful meetings builds a reputation for respecting other people's time." },
      { title: "Giving Difficult Feedback", content: "The SBI model works: Situation (when this happened), Behaviour (I observed this specific action), Impact (it had this effect). Avoid character judgements — 'you are disorganised' — and describe specific behaviour instead: 'the report was submitted two days after the deadline three times this month.' Specific, observable, non-personal feedback is far more likely to change behaviour." },
      { title: "Receiving Feedback Without Defensiveness", content: "Defensive responses to feedback damage your reputation more than the original issue. When receiving critical feedback: listen fully without interrupting, ask one clarifying question, say thank you, then decide later whether you agree. You do not have to accept every piece of feedback — but you do have to receive it professionally." },
      { title: "The Kenya Workplace Communication Context", content: "Kenyan workplaces often blend formal and informal communication styles. WhatsApp groups have become primary communication channels in many organisations — understand what should and should not go on a work WhatsApp. Senior people expect to be addressed formally, especially in writing. Code-switching between formal English, Kiswahili and Sheng depending on context is a genuine professional skill." },
    ],
    kenya_context: "WhatsApp has transformed Kenyan workplace communication — decisions are made, complaints aired and gossip spread on work groups. Protect yourself: never write anything on a work WhatsApp you would not say in a formal meeting. Screenshot culture is real. Formal decisions should always be confirmed in email.",
    action_steps: [
      "Audit your last 10 emails — did each have a clear subject, clear purpose and clear action request?",
      "Run your next meeting with a written agenda sent in advance — measure whether it finishes on time",
      "Give one piece of specific behavioural feedback this week using the SBI model",
      "Next time you receive criticism, try responding only with 'thank you, let me think about that'",
      "Identify one communication habit you have that costs you credibility — commit to changing it",
    ],
    myths: [
      { myth: "Good communication is about being articulate and eloquent", truth: "Good communication is about being clear, relevant and timely. Simple language that is understood beats sophisticated language that confuses." },
      { myth: "If I send a long detailed email I have communicated well", truth: "Length is not thoroughness. A long email that buries the key point has failed. Brevity that respects the reader's time is a skill." },
    ],
  },
  "personal-branding": {
    title: "Personal Branding at Work",
    category: "Corporate Life",
    icon: "✨",
    tagline: "Being seen, remembered and respected — the professional reputation you build deliberately",
    overview: "Personal branding is not vanity. It is the deliberate management of how colleagues, managers and the industry perceive your professional value. In a competitive job market, two equally skilled people with different personal brands will have very different career outcomes. Your brand is being built whether you manage it or not.",
    sections: [
      { title: "What Your Brand Currently Is", content: "Your personal brand is what people say about you when you leave the room. To discover it, ask yourself: what do colleagues come to me for? What am I known for solving? What do I do better than almost anyone in my team? The answers describe your current brand. The question is whether that brand matches your ambitions." },
      { title: "Visibility Without Self-Promotion", content: "Many professionals — particularly women in Kenyan workplaces — are taught that promoting yourself is arrogant. The reframe: visibility is about ensuring your contributions are connected to your name. Volunteer to present your team's work. Write a brief summary email after completing a major project. These are not boasts — they are professional communications." },
      { title: "Digital Professional Presence", content: "LinkedIn matters in Kenya's professional market. A complete, active LinkedIn profile signals seriousness. Post about your work, your industry, lessons you are learning. Comment thoughtfully on relevant posts. Recruiters, potential clients and senior industry figures are watching. The cost of a strong LinkedIn presence is one hour per week." },
      { title: "Consistency as Brand Foundation", content: "The strongest personal brands are built on consistency — always being early, always following through on commitments, always being prepared. These unglamorous habits create the most powerful professional reputation. Consistency over years creates the 'go-to person' reputation that generates opportunities without effort." },
      { title: "The Kenya Professional Brand Context", content: "In Kenya's relatively small professional circles, reputation travels fast. Nairobi's business community is interconnected — the person you treat poorly today may be interviewing you in three years. Invest in treating everyone with respect: receptionists, interns, security guards. Your reputation is built across all of these interactions." },
    ],
    kenya_context: "Professional associations in Kenya — ICPAK, LSK, CIPM, KISM — are powerful brand-building platforms. Active participation in your professional body, attending events and eventually speaking or holding office creates visibility in exactly the circles that generate career opportunities.",
    action_steps: [
      "Complete your LinkedIn profile fully — photo, headline, summary, all experience",
      "Post one professional insight on LinkedIn this week",
      "Identify the three words you want colleagues to use to describe you — are you earning those words daily?",
      "Find one professional association event to attend this month",
      "Ask a trusted colleague: what am I known for in this organisation?",
    ],
    myths: [
      { myth: "Personal branding is only for entrepreneurs and influencers", truth: "Every professional has a personal brand whether they manage it or not. The question is whether yours is working for you or against you." },
      { myth: "If I do great work my reputation will build itself", truth: "Great work that is invisible does not build a career. Visibility and quality together build reputation." },
    ],
  },
  "managing-your-boss": {
    title: "Managing Your Boss",
    category: "Corporate Life",
    icon: "🤝",
    tagline: "The most important professional relationship you have — and how to make it work for you",
    overview: "Your manager controls your salary, your projects, your promotion and your daily experience of work. Managing this relationship upward — understanding what your manager needs and making yourself indispensable to their success — is one of the highest-return professional skills you can develop.",
    sections: [
      { title: "Understand What Your Manager Actually Needs", content: "Your manager has their own pressures, targets and political challenges. Understanding what keeps them up at night lets you position your contributions as solutions to their problems. Ask directly: 'What would make this year a success for you?' Their answer tells you exactly where to focus your energy." },
      { title: "Make Their Life Easier", content: "The most valued employees solve problems before they reach the manager. Bring solutions not just problems. Anticipate what information they will need before a meeting and prepare it. Complete tasks before reminders are needed. Each of these behaviours deposits trust in the relationship account." },
      { title: "Manage Expectations Proactively", content: "Never let your manager be surprised by bad news. If a deadline is at risk, tell them early with a revised plan. If you make a mistake, own it immediately with a solution. Surprises damage trust. Proactive communication — even with bad news — builds it." },
      { title: "When Your Manager Is Difficult", content: "A micromanager usually has a trust deficit — build trust through consistent delivery and they typically give more autonomy over time. A manager who takes credit for your work needs to be managed with documentation and strategic visibility. A manager who is genuinely abusive — insulting, discriminatory, bullying — requires HR involvement. Know the difference." },
      { title: "The Kenya Boss Culture Context", content: "Kenyan management culture often expects deference to seniority. Challenging your manager publicly is rarely a good strategy. Raise disagreements privately, respectfully and with evidence. The phrase 'I wanted to get your view on something before I proceed' signals both respect and initiative. It is more effective than either silent compliance or public challenge." },
    ],
    kenya_context: "In many Kenyan organisations, the relationship with your manager is also shaped by the relationship with their EA or PA. Being genuinely respectful to administrative staff is not just ethics — it is strategy. The EA knows the manager's mood, priorities and schedule. They can make your life easier or harder.",
    action_steps: [
      "Schedule a one-on-one with your manager and ask: what are your top three priorities right now?",
      "For one week, bring a proposed solution every time you bring a problem",
      "Identify one thing your manager worries about that you could take off their plate",
      "If your manager micromanages, proactively send a daily 3-bullet progress update — reduce their need to ask",
      "Reflect: what does your manager think your greatest strength is? Does it match what you think?",
    ],
    myths: [
      { myth: "Managing your boss is manipulative", truth: "Understanding what your manager needs and aligning your work to it is not manipulation — it is professional intelligence." },
      { myth: "A good boss should just let me do my job", truth: "Even excellent managers need managing. The relationship is a two-way responsibility." },
    ],
  },
  "commercial-finance": {
    title: "Commercial Finance Basics",
    category: "Finance & Accounting",
    icon: "💰",
    tagline: "P&L, cash flow and balance sheets explained so clearly you will wonder why they ever seemed confusing",
    overview: "Three financial statements tell the complete story of any business: the Profit and Loss account (what happened), the Balance Sheet (what you have), and the Cash Flow statement (where the money went). Every manager who understands these three documents makes better decisions than those who do not — regardless of their role.",
    sections: [
      { title: "The Profit and Loss Account", content: "The P&L answers: did we make money this period? Revenue at the top — what customers paid. Cost of Goods Sold below — what it cost to deliver. Gross Profit = Revenue minus COGS. Then operating expenses (salaries, rent, utilities). Operating Profit = Gross Profit minus operating expenses. Then interest, tax. Net Profit at the bottom. Every line above net profit is a decision point for management." },
      { title: "The Balance Sheet", content: "The balance sheet is a photograph of the business at one moment: what it owns (assets), what it owes (liabilities), and what is left for owners (equity). Assets = Liabilities + Equity — always, by accounting law. Current assets (cash, debtors, stock) can be converted to cash within a year. Fixed assets (land, equipment) are long-term. Understanding the balance sheet reveals whether a business is financially healthy or technically insolvent despite showing profit." },
      { title: "Cash Flow — Why Profit Is Not Cash", content: "A business can be profitable and run out of cash simultaneously. This is called a cash flow crisis and it kills profitable businesses regularly. If you sell on 60-day credit terms but must pay suppliers in 30 days, you are profitable but cash-strapped. The cash flow statement tracks actual money movement: operations, investing and financing. Watch the operating cash flow line especially — it shows whether the core business generates real cash." },
      { title: "Key Financial Ratios Every Manager Should Know", content: "Current ratio (current assets ÷ current liabilities) measures short-term liquidity — above 1.5 is generally healthy. Gross margin (gross profit ÷ revenue) measures pricing and production efficiency. Debtor days (debtors ÷ revenue × 365) measures how long customers take to pay. These three ratios give a quick health check of any business." },
      { title: "Kenya Business Finance Context", content: "Kenyan businesses face specific financial challenges: mobile money has transformed payment speed (M-Pesa collections are instant), but bank lending remains expensive at 13-18% interest. Many SMEs are cash-flow constrained despite profitability. Understanding the difference between profit and cash is survival-critical for any Kenyan business owner or manager." },
    ],
    kenya_context: "KRA (Kenya Revenue Authority) requires businesses to file financial statements for tax purposes. Understanding your P&L helps you understand your tax liability before the KRA does. VAT (Value Added Tax at 16%), income tax and withholding tax all flow from the P&L. A manager who understands financial statements protects their business from preventable tax surprises.",
    action_steps: [
      "Request the P&L for your department or organisation and identify the three largest cost lines",
      "Calculate the gross margin percentage for your business or a product you manage",
      "Check the current ratio of your organisation — is it above 1?",
      "Ask your finance team: what are our debtor days? Is this improving or worsening?",
      "Find one cost line on the P&L that you could influence and make a proposal to reduce it",
    ],
    myths: [
      { myth: "Finance is only for accountants", truth: "Every manager who controls a budget, manages a team or makes purchasing decisions is making financial decisions. Understanding the numbers makes every decision better." },
      { myth: "If we are profitable we are fine", truth: "Profit is an accounting concept. Cash is survival. Many profitable businesses fail due to cash flow crises." },
    ],
  },
  "accounting-fundamentals": {
    title: "Accounting Fundamentals",
    category: "Finance & Accounting",
    icon: "📒",
    tagline: "Debits, credits and the accounting cycle — finally explained in language that makes sense",
    overview: "Accounting is the language of business. You do not need to be an accountant to benefit from understanding it. Knowing how transactions are recorded, how accounts work and how financial statements are produced makes you a more effective manager, a better entrepreneur and a more credible professional in any business conversation.",
    sections: [
      { title: "The Double Entry Principle", content: "Every financial transaction affects two accounts — always. When you receive cash from a customer, cash increases (debit) and revenue increases (credit). When you pay rent, expenses increase (debit) and cash decreases (credit). This is double-entry bookkeeping, invented in 15th century Italy and still the foundation of all accounting worldwide. Every debit must have an equal and opposite credit. The books must balance." },
      { title: "The Chart of Accounts", content: "Every business organises its transactions into categories called accounts: Assets (what you own), Liabilities (what you owe), Equity (owners' interest), Revenue (income earned), Expenses (costs incurred). The chart of accounts is the filing system for every financial transaction. Understanding which category a transaction falls into is the foundation of accounting." },
      { title: "The Accounting Cycle", content: "Transactions occur → they are recorded in journals → posted to ledgers → a trial balance is prepared (checking debits = credits) → adjustments are made → financial statements are produced. This cycle repeats monthly. Accounting software automates most steps — but understanding the underlying cycle lets you identify where errors occur and why." },
      { title: "Accruals vs Cash Basis", content: "Cash basis accounting records transactions when money moves. Accrual basis records them when they are earned or incurred, regardless of when cash moves. IFRS (International Financial Reporting Standards, used in Kenya) requires accrual basis for all companies. The practical implication: a sale is recorded when the invoice is raised, not when the customer pays. This gap creates debtors — and cash flow risk." },
      { title: "Kenya Accounting Standards", content: "Kenya adopted IFRS for SMEs in 2014. All listed companies and banks use full IFRS. The Institute of Certified Public Accountants of Kenya (ICPAK) regulates the profession. CPA (Kenya) is the main professional qualification — offered by KASNEB across three sections (Foundation, Advanced, Final) covering 18 papers total." },
    ],
    kenya_context: "The Kenya Revenue Authority requires proper accounting records for tax compliance. The Tax Procedures Act 2015 requires businesses to maintain records for 5 years. Digital tax systems (eTIMS — Electronic Tax Invoice Management System) now require electronic invoicing for VAT-registered businesses. Understanding accounting is not just professional development — it is legal compliance.",
    action_steps: [
      "Record five of your own personal transactions using double-entry — cash in, cash out, bills paid",
      "Identify five accounts in a business you know: two assets, one liability, one revenue, one expense",
      "Find a simple set of financial statements and identify which figures came from which accounting entries",
      "If you run a business, confirm whether you are on cash or accrual basis accounting — and why",
      "Look up KASNEB and find the CPA Kenya syllabus — understand what the full qualification covers",
    ],
    myths: [
      { myth: "Accounting is just bookkeeping — it is a basic clerical function", truth: "Senior accountants and CFOs make strategic business decisions. Accounting is a foundation for finance, strategy and governance at the highest levels." },
      { myth: "Accounting software means you do not need to understand accounting", truth: "Software automates correct inputs. If you input incorrectly, the software produces wrong outputs beautifully. Understanding accounting principles is essential for using accounting software correctly." },
    ],
  },
  "tax-kenya": {
    title: "Tax in Kenya",
    category: "Finance & Accounting",
    icon: "🏛️",
    tagline: "PAYE, VAT, corporate tax and WHT — simplified and Kenya-specific",
    overview: "Kenya's tax system is administered by the Kenya Revenue Authority (KRA) and covers income, consumption and transaction taxes. Understanding the basics protects individuals from unknowing non-compliance and helps businesses manage their tax burden legally and efficiently. Tax avoidance (legal) is smart business. Tax evasion (illegal) destroys businesses and careers.",
    sections: [
      { title: "PAYE — Pay As You Earn", content: "PAYE is deducted from employee salaries by employers and remitted to KRA monthly. The tax bands for 2024: up to KSh 288,000 annually taxed at 10%, KSh 288,001-388,000 at 25%, above KSh 388,000 at 30%. The personal relief of KSh 28,800 annually reduces everyone's tax liability. Your payslip should show gross pay, PAYE deducted, NHIF, NSSF and net pay." },
      { title: "VAT — Value Added Tax", content: "VAT at 16% is charged on most goods and services sold in Kenya. Businesses with annual turnover above KSh 5 million must register for VAT. They charge VAT on sales (output tax) and reclaim VAT on purchases (input tax). The difference is remitted to KRA monthly. Zero-rated items (basic food, exports) have 0% VAT. Exempt items (medical services, financial services) have no VAT." },
      { title: "Corporate Income Tax", content: "Companies registered in Kenya pay corporate income tax at 30% on taxable profits. Newly listed companies pay 25% for 5 years. SMEs (annual turnover KSh 500,000 to KSh 15 million) pay turnover tax at 1% on gross sales — simpler than full corporate tax. KRA's eTIMS system requires electronic invoicing for VAT-registered businesses from 2024." },
      { title: "Withholding Tax", content: "Withholding Tax (WHT) is deducted at source on certain payments. Rent paid to a landlord: 10% WHT. Professional fees to a consultant: 5% WHT. Dividends paid to shareholders: 15% WHT. The payer deducts WHT and remits to KRA. The recipient receives the net amount and can offset the WHT against their final tax liability." },
      { title: "Tax Compliance and KRA", content: "KRA's iTax platform (itax.kra.go.ke) is where all returns are filed, payments made and certificates downloaded. Monthly obligations: PAYE by the 9th of the following month, VAT by the 20th. Annual corporate tax return: 6 months after financial year end. Late filing attracts penalties and interest. Tax compliance certificates are required for tenders and some bank facilities." },
    ],
    kenya_context: "KRA has significantly enhanced enforcement through data matching — cross-referencing bank records, MPESA transactions, land registry and company records. The days of hiding income are effectively over for businesses with digital transactions. Proactive compliance is less expensive than penalties, interest and the reputational damage of a KRA audit.",
    action_steps: [
      "Log into iTax and verify your personal tax compliance certificate is current",
      "Check your last 3 payslips — is PAYE being deducted correctly for your salary band?",
      "If you run a business with turnover above KSh 5M, confirm VAT registration status",
      "Identify all WHT obligations in your business — are you deducting and remitting correctly?",
      "Find a registered tax agent or accountant for a one-hour consultation on your specific tax position",
    ],
    myths: [
      { myth: "Tax is optional if your business is small", truth: "Any business with turnover above KSh 500,000 has tax obligations. Ignorance of the law is not a defence and KRA enforcement is increasing." },
      { myth: "KRA only goes after big companies", truth: "KRA's data systems now flag individual discrepancies. An MPESA statement showing regular large inflows with no tax filing will attract attention." },
    ],
  },
  "budgeting-forecasting": {
    title: "Budgeting & Forecasting",
    category: "Finance & Accounting",
    icon: "📊",
    tagline: "Building, defending and managing budgets — the skill that makes managers credible",
    overview: "The budget is management's promise to the organisation. Forecasting is management's honest assessment of what will actually happen. Understanding both — how to build them, defend them in review meetings, and manage performance against them — is essential for any manager who controls resources.",
    sections: [
      { title: "How Budgets Are Built", content: "Good budgets start with strategy, not spreadsheets. What are we trying to achieve? What resources do we need? Budget approaches: zero-based (justify every line from scratch — rigorous but time-consuming), incremental (last year plus or minus a percentage — fast but perpetuates past inefficiencies), activity-based (budget follows planned activities). Most organisations use incremental budgeting with strategic adjustments." },
      { title: "Revenue Budgeting", content: "Revenue forecasts should be built bottom-up: number of customers × average transaction value × frequency. Not top-down: 'we want to grow 20% so revenue will be X.' Bottom-up forces honest interrogation of assumptions. What drives each revenue line? Is it realistic? What has to be true for this number to be achieved? Stretch targets are valid — but the basis must be credible." },
      { title: "Cost Budgeting", content: "Classify costs: fixed (same regardless of volume — rent, salaried staff), variable (move with volume — materials, commission), semi-variable (partly fixed, partly variable — utilities). Budget each differently. Fixed costs need approval to change. Variable costs need a rate assumption. Understanding cost behaviour is the foundation of budget accuracy." },
      { title: "Variance Analysis", content: "Every month, compare budget to actual. The difference is the variance. Favourable variance: actual is better than budget (more revenue or less cost). Adverse variance: actual is worse (less revenue or more cost). The key management question is not the size of the variance but its cause and whether it is controllable. Reporting variances with explanations and corrective actions is the core of financial management." },
      { title: "Kenya Budget Context", content: "Kenya's financial year runs July to June, matching the government cycle. Many organisations, particularly those with government contracts or NGO funding, align their budgets to this cycle. Donor-funded organisations face additional complexity: donor budget formats, allowable expenditure rules and reporting requirements that sit alongside internal management accounts." },
    ],
    kenya_context: "The national budget speech in June sets the economic context for all business budgeting: tax changes, infrastructure spending, interest rate environment. Understanding how the national budget affects your industry helps make more accurate business forecasts. Sectors like construction, agriculture and consumer goods are directly affected by government spending decisions.",
    action_steps: [
      "Request your team's budget for this period and calculate the variance-to-date on three key lines",
      "Identify one budget line you can influence and model two scenarios: 5% saving and 10% saving",
      "Next time you are asked for a budget estimate, build it bottom-up rather than top-down",
      "After any significant variance, write a 3-sentence explanation: what happened, why, what you will do",
      "Attend or request access to your organisation's budget review meeting at least once",
    ],
    myths: [
      { myth: "Budget season is finance's job", truth: "Every manager who controls costs or generates revenue is a budget owner. Finance consolidates — managers are responsible for their numbers." },
      { myth: "A perfect budget never needs revision", truth: "The world changes. Forecasts that stubbornly ignore new information are not discipline — they are denial. Good managers revise forecasts when facts change." },
    ],
  },
  "process-improvement": {
    title: "Process Improvement",
    category: "Business Operations",
    icon: "⚙️",
    tagline: "Spotting inefficiency, fixing it and making the improvement stick",
    overview: "Every organisation has processes that waste time, create errors or frustrate customers. Process improvement is the systematic identification and elimination of this waste. It is not about working harder — it is about working smarter. The manager who consistently improves processes builds a reputation as someone who makes organisations better.",
    sections: [
      { title: "How to Map a Process", content: "Before improving a process, document it as it actually works — not as the manual says it works. Walk the actual steps with the people who do them. Draw a simple flowchart: inputs, activities, decisions, outputs. Time each step. Identify handoffs between departments. You will almost certainly discover that the actual process differs significantly from the documented one." },
      { title: "Lean Thinking — Eliminating Waste", content: "Lean identifies seven types of waste (from Toyota's manufacturing system, now applied everywhere): overproduction, waiting, transportation, over-processing, inventory, motion, defects. In a Kenyan office context: waiting for approvals (waiting waste), printing documents that are never read (overproduction), entering the same data in multiple systems (motion), fixing errors in reports (defects). Identify and eliminate." },
      { title: "The 5 Whys", content: "When a problem occurs, ask 'why?' five times. Customer complaint about late delivery. Why late? Warehouse picked wrong item. Why wrong item? Product codes on system did not match warehouse labels. Why mismatch? Labels not updated when codes changed in 2022. Why not updated? No process for synchronising system changes with physical labels. Root cause identified. Now fix the root cause, not the symptom." },
      { title: "Making Improvements Stick", content: "Process improvements fail when they are not documented, not trained and not measured. For every improvement: update the written procedure, train all affected staff, measure the key metric before and after. If the improvement is not measured, you cannot know whether it worked. If it is not trained, people default to old habits within weeks." },
      { title: "Kenya Process Context", content: "Many Kenyan organisations have deeply manual processes where automation would dramatically improve efficiency. Common opportunities: manual approval chains that could be digital, Excel-based tracking that could be a simple system, physical filing that could be scanned. The constraint is often not technology cost but change management — getting people to adopt new ways of working." },
    ],
    kenya_context: "The Kenyan public sector has significant process improvement opportunity — wait times in hospitals, land registry processing, court backlogs. Many NGOs and county governments are actively seeking process improvement professionals. Private sector: manufacturing, logistics and financial services have invested heavily in lean and Six Sigma approaches.",
    action_steps: [
      "Choose one recurring process in your work and map every step it actually takes",
      "Time the process end-to-end — most people are shocked by how long simple processes take",
      "Identify the single biggest waste in the process using the lean waste categories",
      "Apply the 5 Whys to one recurring problem in your team",
      "Implement one small process improvement this week and measure its impact",
    ],
    myths: [
      { myth: "Process improvement requires expensive consultants", truth: "The best process improvements come from the people who do the work every day. The 5 Whys and basic flow mapping cost nothing." },
      { myth: "If it is not broken do not fix it", truth: "Processes that work adequately often conceal enormous waste. 'Not broken' is a low bar for a competitive organisation." },
    ],
  },
  "project-management": {
    title: "Project Management",
    category: "Business Operations",
    icon: "📋",
    tagline: "Delivering on time, within budget and to specification — the three promises every project manager must keep",
    overview: "A project is a temporary effort to create a unique result. Project management is the discipline of planning, executing and closing that effort successfully. Every professional manages projects — whether formally titled or not. Learning the fundamentals dramatically improves your ability to deliver results.",
    sections: [
      { title: "The Project Triangle", content: "Every project has three constraints that are permanently in tension: Scope (what are we delivering?), Time (by when?), Cost (with what resources?). Change one and the others are affected. Add scope without changing time or cost and quality suffers. Compress time without reducing scope and costs rise. Understanding this triangle is the foundation of every project conversation." },
      { title: "Project Initiation — Starting Right", content: "Most project failures are planned at the start. A clear project charter prevents this: what is the project's purpose? What will it deliver? Who are the stakeholders? What are the assumptions and constraints? What defines success? Getting agreement on these questions before work begins prevents the arguments that derail most projects." },
      { title: "Planning and Scheduling", content: "Break the project into a Work Breakdown Structure — all the tasks required to deliver the outcome. Sequence tasks: which must be done before others can start? Identify the critical path — the longest sequence of dependent tasks that determines minimum project duration. Build in buffers for risk. Create a simple Gantt chart showing who does what by when." },
      { title: "Stakeholder Management", content: "Every project has stakeholders with different interests: sponsors (want results), team members (want clarity and resources), clients (want quality), finance (want cost control), operations (want minimal disruption). Map stakeholders by influence and interest. Communicate proactively with those with high influence. Never let a high-influence stakeholder be surprised by project developments." },
      { title: "Kenya Project Management Context", content: "Kenya has a strong project management community — PMI Kenya Chapter is active, and the Association of Project Management Professionals Kenya (APMPK) runs certification programmes. Many government projects (Huduma Centres, SGR, Last Mile Electricity) have created demand for project management professionals. PMP certification is highly valued in Kenya's growing infrastructure sector." },
    ],
    kenya_context: "Kenya's Vision 2030 has generated enormous project activity — infrastructure, housing, digital economy. This has created real demand for project management professionals at all levels. County governments managing devolved funds need project oversight capability. The World Bank and development partners fund significant projects requiring formal project management. This is a growth career path.",
    action_steps: [
      "Write a one-page project charter for any current initiative you are managing",
      "Create a simple Work Breakdown Structure for a project you have this month",
      "Identify the critical path — which tasks, if delayed, delay everything?",
      "Map your project stakeholders: who has high influence and high interest?",
      "Run a weekly 15-minute project status meeting: what was done, what is planned, what is blocked",
    ],
    myths: [
      { myth: "Project management only applies to large formal projects", truth: "Any effort with a start, end and deliverable benefits from project management thinking. Organising an event, launching a product or improving a process are all projects." },
      { myth: "A project manager's job is to write plans", truth: "Plans are a tool. A project manager's job is to deliver outcomes — which requires managing people, risks, budgets and stakeholders, not just updating Gantt charts." },
    ],
  },
  "negotiation": {
    title: "Negotiation Skills",
    category: "Professional Skills",
    icon: "🤜",
    tagline: "Getting what you want without burning bridges — the most underrated professional skill",
    overview: "Every professional negotiates constantly: salary, budgets, deadlines, scope, terms with suppliers, resources from colleagues. Most people negotiate badly — either too aggressively (winning the battle, losing the relationship) or too passively (leaving value on the table to avoid conflict). Principled negotiation gets better outcomes while building relationships.",
    sections: [
      { title: "Separate People From Positions", content: "A position is what someone says they want. An interest is why they want it. The most common negotiation failure is treating positions as fixed when interests are negotiable. The classic example: two people want the last orange. Position: both want the whole orange. Interests: one wants the juice, one wants the rind for baking. Both can get 100% of what they actually need. Always ask: why do they want this?" },
      { title: "Know Your BATNA", content: "BATNA: Best Alternative To a Negotiated Agreement. Your BATNA is your power. If negotiation fails, what is your best option? The stronger your BATNA, the less you need this deal, the more confidently you negotiate. Before any negotiation, clarify your BATNA and try to understand the other party's. Never accept an agreement worse than your BATNA." },
      { title: "The Anchoring Effect", content: "The first number mentioned in a negotiation anchors the discussion. Research consistently shows that the party who states a number first has a significant advantage. The anchor should be ambitious but credible — with justification. When the other party anchors first with an extreme number, do not counter from their anchor. Re-anchor: 'That is not in the range I had in mind. I was thinking of...' and state your number." },
      { title: "Salary Negotiation in Kenya", content: "Most Kenyan professionals do not negotiate salary. They accept the first offer. Research shows this costs the average professional hundreds of thousands of shillings over a career. The counter-offer rarely results in a withdrawn offer. The formula: research market rate, anchor high but credibly, justify with value you bring, silence is powerful after you state your number. Let them speak first after your ask." },
      { title: "Cultural Context in Kenyan Negotiations", content: "Kenyan business culture values relationship before transaction. Rushing to price before establishing rapport is a common foreign mistake. Take time to build personal connection. Harambee spirit — collective contribution — influences business negotiations. Flexibility and face-saving matter. Publicly forcing someone into a corner damages the relationship even if you win. Give the other party a way to agree that preserves their dignity." },
    ],
    kenya_context: "Procurement negotiations in Kenya are often constrained by public procurement rules that limit flexibility. However, in the private sector, almost everything is negotiable — payment terms, delivery schedules, warranties, service levels. The professional who understands negotiation principles wins better deals for their organisation and builds stronger supplier and client relationships.",
    action_steps: [
      "Before your next salary review, research market rates for your role on BrighterMonday and LinkedIn",
      "In your next negotiation, identify the other party's interest, not just their position",
      "Practise anchoring: state your number first in your next price discussion",
      "Identify your BATNA before your next important negotiation",
      "After a negotiation, review: did you leave value on the table? What would you do differently?",
    ],
    myths: [
      { myth: "Good negotiators are aggressive", truth: "The best negotiators are curious — they ask questions to understand interests. Aggression closes options; curiosity opens them." },
      { myth: "Negotiating salary is greedy or pushy", truth: "Employers expect negotiation. Not negotiating signals either unawareness of your market value or willingness to be underpaid. Neither is a good signal." },
    ],
  },
  "critical-thinking": {
    title: "Critical Thinking",
    category: "Professional Skills",
    icon: "🧩",
    tagline: "Analysing problems clearly, questioning assumptions and making better decisions",
    overview: "Critical thinking is the ability to analyse information objectively, identify assumptions, evaluate evidence and reach well-reasoned conclusions. In a world of misinformation, complexity and cognitive shortcuts, critical thinking is the professional skill that separates reactive responders from strategic thinkers.",
    sections: [
      { title: "Identifying Assumptions", content: "Every argument rests on assumptions. Most arguments fail at the assumption level, not the logic level. 'We should expand to Mombasa because our Nairobi market is saturated.' Assumptions: Mombasa has similar demand, we have the operational capacity to expand, Nairobi is actually saturated. Before accepting any conclusion, list the assumptions it depends on and test each one." },
      { title: "Evaluating Evidence", content: "Not all evidence is equal. Primary research (original data you collected) is stronger than secondary research (someone else's summary). Recent evidence is stronger than old. Large sample sizes are stronger than anecdotes. Controlled studies are stronger than correlations. When evaluating any claim, ask: what is the source? How was this measured? What alternative explanations exist?" },
      { title: "Logical Fallacies to Avoid", content: "Ad hominem: attacking the person making the argument rather than the argument. Straw man: misrepresenting someone's argument to make it easier to attack. False dichotomy: presenting two options as the only options when more exist. Correlation is not causation: just because two things happen together does not mean one causes the other. Spotting these in others' arguments — and your own — sharpens thinking significantly." },
      { title: "Decision Making Under Uncertainty", content: "Good decisions under uncertainty require: defining the decision clearly, identifying options, assessing probabilities of outcomes, considering reversibility. The 10/10/10 rule: how will you feel about this decision in 10 minutes, 10 months, 10 years? Pre-mortem thinking: imagine it is one year later and the decision failed — what went wrong? This technique surfaces risks before commitment." },
      { title: "Kenya Critical Thinking Context", content: "Kenya's media environment includes significant misinformation — particularly on WhatsApp. Critical thinking applied to news means checking sources, looking for original reporting, being sceptical of emotionally compelling stories, and seeking multiple perspectives. The same skills apply in business: question the data, interrogate assumptions, be especially sceptical of proposals that confirm what you already want to believe." },
    ],
    kenya_context: "Critical thinking is increasingly valued by Kenyan employers who report that graduates struggle with analytical tasks. The shift from 8-4-4 (which rewarded memorisation) to CBC (which develops thinking skills) reflects a recognition that memorised knowledge is less valuable than the ability to reason. Critical thinking skills differentiate professionals in a competitive job market.",
    action_steps: [
      "Next time someone presents data to you, ask: what assumptions does this rest on?",
      "Find a news story on WhatsApp this week and trace it to its original source",
      "Before your next major decision, run a pre-mortem: assume it fails and list why",
      "In your next meeting, identify one logical fallacy in the discussion",
      "Read one book on thinking: Thinking Fast and Slow (Kahneman), The Righteous Mind (Haidt), or Factfulness (Rosling)",
    ],
    myths: [
      { myth: "Critical thinking means being negative or contrarian", truth: "Critical thinking means being rigorous — questioning your own assumptions as vigorously as others'. It produces better conclusions, not just objections." },
      { myth: "Smart people think critically by default", truth: "Intelligence and critical thinking are different skills. Many highly intelligent people hold beliefs that do not survive critical examination." },
    ],
  },
  "emotional-intelligence": {
    title: "Emotional Intelligence",
    category: "Professional Skills",
    icon: "❤️",
    tagline: "Reading people, managing yourself and leading with empathy",
    overview: "Emotional Intelligence (EQ) is the ability to recognise, understand and manage emotions — your own and others'. Research consistently shows EQ is a stronger predictor of career success than IQ at senior levels. Technical skills get you to management. EQ determines whether you succeed there.",
    sections: [
      { title: "The Four Components of EQ", content: "Self-awareness: knowing your own emotions as they happen. Self-regulation: managing your emotional responses constructively. Social awareness (empathy): reading others' emotions accurately. Relationship management: using emotional understanding to navigate social situations skillfully. Most people are stronger in some areas than others. The first step is honest self-assessment." },
      { title: "Self-Awareness in Practice", content: "Self-awareness requires noticing your emotional state in real time — especially under stress. Before a difficult meeting, check in: am I anxious? Defensive? Resentful? These states distort perception and response. Keeping a brief emotional journal — what happened, how I felt, how I responded, what I wish I had done — accelerates self-awareness development significantly." },
      { title: "Emotional Regulation Under Pressure", content: "The amygdala hijack happens when emotional threat triggers a fight-or-flight response that bypasses rational thinking. In a work context: someone challenges your idea in a meeting and your heart rate spikes and you respond defensively. The 6-second pause gives the rational brain time to engage. Breathe. Name the emotion — 'I am feeling threatened right now.' Naming it reduces its intensity." },
      { title: "Empathy as a Leadership Tool", content: "Empathy is not agreeing with everyone — it is accurately understanding their perspective. A manager with empathy knows when a team member is struggling before it becomes a performance problem. They understand why a client is frustrated beyond what they are saying. Empathy does not mean avoiding difficult conversations — it means having them in a way that preserves the relationship." },
      { title: "EQ in Kenyan Workplace Culture", content: "Kenyan workplace culture places high value on respect, dignity and face-saving. These are essentially EQ values. A manager who publicly humiliates a subordinate — even when correct about the error — has failed emotionally and organisationally. Private correction, public praise. Understanding the deep cultural value of dignity in Kenyan professional contexts is itself an exercise in cultural emotional intelligence." },
    ],
    kenya_context: "Mental health awareness is growing in Kenyan workplaces, but stigma remains significant. EQ-developed managers create environments where team members can acknowledge stress without fear of being perceived as weak. This reduces presenteeism (being physically present but mentally absent) — a significant productivity drain in Kenyan organisations where many employees are managing significant personal financial and family pressures.",
    action_steps: [
      "For one week, notice and name your emotional state at three points during each working day",
      "Before your next difficult conversation, spend 2 minutes considering how the other person is feeling",
      "When you next feel a strong negative emotion at work, try the 6-second pause before responding",
      "Ask for feedback from someone you trust: how do I come across when I am under pressure?",
      "Read Emotional Intelligence by Daniel Goleman or take a free EQ assessment online",
    ],
    myths: [
      { myth: "Emotions should be left at the door — work is professional", truth: "Emotions are always present. The question is whether they are managed consciously or unconsciously. Unmanaged emotions cause more disruption than acknowledged ones." },
      { myth: "EQ means being nice all the time", truth: "High EQ includes the ability to have difficult conversations, give hard feedback and make unpopular decisions — done with awareness and skill, not avoidance." },
    ],
  },
  "data-analysis": {
    title: "Data Analysis Basics",
    category: "Professional Skills",
    icon: "📈",
    tagline: "Excel, numbers and making decisions that are evidence-based rather than gut-based",
    overview: "Data literacy is the ability to read, understand and communicate with data. It does not require statistics expertise. It requires the ability to ask good questions of data, identify patterns, spot errors and translate numbers into actionable insights. In Kenya's increasingly data-driven economy, basic data skills differentiate professionals at every level.",
    sections: [
      { title: "Excel Fundamentals Every Professional Needs", content: "VLOOKUP (now XLOOKUP) for connecting data across tables. SUMIF and COUNTIF for conditional calculations. Pivot tables for rapid summarisation of large datasets. Basic charts: bar for comparison, line for trends, pie only for proportions (and even then, bar charts are usually clearer). These five skills handle 80% of professional data tasks. If you cannot do all five fluently, you have a gap worth filling." },
      { title: "Asking the Right Questions of Data", content: "Data does not speak for itself — it answers the questions you ask. Before any analysis, define: what decision am I trying to make? What data would help me make it? What do I already know? What would change my conclusion? Starting with the decision, not the data, prevents the common trap of producing beautiful analysis that answers the wrong question." },
      { title: "Spotting Bad Data", content: "Garbage in, garbage out. Common data quality problems: duplicates (the same record entered twice), missing values (blanks that skew averages), outliers (errors that distort analysis), inconsistent formats (dates in multiple formats, names spelled differently). Always check for these before analysis. A clean dataset is the foundation of reliable insight." },
      { title: "Communicating Data Insights", content: "The best analysis fails if it cannot be communicated. Rule: one chart, one insight. Title your charts with the conclusion, not the subject: not 'Monthly Sales by Region' but 'Nairobi Region Outselling All Others by 40%.' Remove chart clutter: gridlines, 3D effects, unnecessary labels. Present to the decision-maker's question, not to your methodology." },
      { title: "Kenya Data Context", content: "Kenya generates enormous amounts of data through M-Pesa transactions, Huduma services, county health systems and agricultural extension. The Kenya National Bureau of Statistics (KNBS) publishes extensive open data. Data skills are increasingly valued across all sectors — particularly in healthcare, agriculture, finance and government. Kenya's data economy is growing faster than the supply of data-literate professionals." },
    ],
    kenya_context: "The Kenya Open Data Initiative and various government portals publish data that professionals can use for market analysis, research and decision making. Learning to access, clean and analyse publicly available Kenya data is a differentiating skill. County-level data on demographics, health and agriculture is increasingly available and relevant for businesses targeting specific regions.",
    action_steps: [
      "If you cannot build a pivot table from scratch in Excel, learn this week — free tutorials on YouTube",
      "Take any dataset you have and identify one insight that would help a business decision",
      "Clean a messy spreadsheet: remove duplicates, standardise formats, identify and flag outliers",
      "Present one data insight to a colleague using one chart with a conclusion as the title",
      "Find one Kenya-specific dataset on KNBS website and extract one meaningful insight",
    ],
    myths: [
      { myth: "Data analysis requires programming skills", truth: "Excel handles the majority of professional data analysis needs. Python and R are powerful but optional at entry and mid-career level." },
      { myth: "More data always means better decisions", truth: "Relevant, clean data beats large, messy data every time. Focus on data quality before data quantity." },
    ],
  },
  "business-planning": {
    title: "Business Planning",
    category: "Entrepreneurship",
    icon: "📝",
    tagline: "From idea to viable business — the discipline of testing before committing",
    overview: "Most businesses fail not because of bad execution but because of bad planning — specifically, insufficient testing of assumptions before committing resources. A good business plan is not a document for investors. It is a thinking tool for the entrepreneur — a structured way of examining whether your idea can actually work before you stake your savings on it.",
    sections: [
      { title: "The Business Model Canvas", content: "The Business Model Canvas (Osterwalder) maps a business on one page across nine building blocks: Customer Segments (who?), Value Propositions (why will they pay?), Channels (how do you reach them?), Customer Relationships (how do you retain them?), Revenue Streams (how do you make money?), Key Resources (what do you need?), Key Activities (what must you do?), Key Partners (who do you need?), Cost Structure (what does it cost?). Fill this before writing any longer document." },
      { title: "Validating the Problem", content: "The most common startup mistake: building a solution before confirming the problem exists. Before writing a business plan, talk to 20 potential customers. Not family and friends who will be supportive — strangers who match your target customer profile. Ask: do they have this problem? How do they solve it today? How much does the current solution cost them? What would they pay for a better solution? Real customer data beats assumption." },
      { title: "The Financial Model", content: "A business plan without financial projections is a wish list. Build three-year projections: revenue (units × price, built bottom-up), cost of goods sold, gross margin, operating expenses (staff, rent, marketing, technology), EBITDA. Then cash flow: when do you actually collect revenue, when do you pay bills? The gap between profit and cash is where businesses die. Identify when you need external funding." },
      { title: "Competitive Analysis", content: "Every business has competition — direct (doing the same thing) and indirect (solving the same problem differently). Map your competitors: what do they offer, at what price, with what quality, to which customers? Where are the gaps in the market? Your value proposition must be clearly differentiated — better quality, lower price, more convenient, more specialised. 'We are better' is not differentiation. Specific, verifiable advantages are." },
      { title: "Kenya Business Environment", content: "Starting a business in Kenya requires: business registration (eCitizen takes 1-3 days for a sole trader, longer for a limited company), county business permit (varies by county and business type), PIN certificate from KRA, and sector-specific licences (food handling certificate, pharmacy licence, security licence). The Kenya Kwanza government has reduced business registration requirements — check eCitizen for current process." },
    ],
    kenya_context: "Kenya's startup ecosystem is East Africa's most developed: iHub, Nairobi Garage, and ALX Hub provide incubation support. Funding sources include UWEZO Fund, Youth Enterprise Fund, Women Enterprise Fund, and KENVO (Kenya Venture Capital). Impact investors (Novastar, Acumen, GSMA Innovation Fund) target Kenyan startups solving social and environmental problems. The ecosystem support is real — use it.",
    action_steps: [
      "Fill in a Business Model Canvas for your current or planned business — one page, all nine blocks",
      "Interview 5 potential customers about the problem you intend to solve before building anything",
      "Build a 12-month cash flow projection — month by month, revenue in, costs out",
      "Map your top 3 competitors — be honest about where they are better than you",
      "Register your business on eCitizen if you have not — formalisation opens funding opportunities",
    ],
    myths: [
      { myth: "I need a long formal business plan to start", truth: "A one-page Business Model Canvas and customer validation interviews are more valuable than a 40-page document nobody reads." },
      { myth: "My idea is unique — there is no competition", truth: "If there is no competition, there may be no market. Existing competition validates that customers have this problem and will pay to solve it." },
    ],
  },
  "startup-funding-kenya": {
    title: "Startup Funding in Kenya",
    category: "Entrepreneurship",
    icon: "💸",
    tagline: "Banks, angels, VCs and grants — navigating Kenya's funding landscape honestly",
    overview: "Kenya has one of Africa's most active startup funding ecosystems. But most entrepreneurs pursue funding before they are ready, approach the wrong sources for their stage, or misunderstand what investors actually want. Understanding the funding landscape — who funds what, at what stage, on what terms — prevents wasted time and costly mistakes.",
    sections: [
      { title: "Bootstrapping First", content: "The best funding is revenue. Businesses that generate their own cash before seeking external funding have stronger negotiating positions, retain more equity, and are forced to validate their model before scaling. Most successful Kenyan businesses — Equity Bank, Safaricom, Java House — bootstrapped significantly before raising external capital. If you can fund growth from operations, do so as long as possible." },
      { title: "Government Funds", content: "UWEZO Fund (young people and women, up to KSh 500,000 per group), Youth Enterprise Development Fund (youth 18-35, loans from KSh 50,000), Women Enterprise Fund (women-led businesses, loans and grants), Biashara Kenya Fund (consolidates multiple government funds). These are real opportunities but require business registration, business plan and often a group application structure. Apply through eCitizen or Huduma Centres." },
      { title: "Banks and SACCOs", content: "Commercial bank lending in Kenya is expensive (13-18%) and requires collateral most startups lack. SACCOs (Savings and Credit Cooperatives) offer better terms to members — 12% is achievable. Equity Bank's Equitel and KCB's KCB M-Pesa offer mobile-based credit for small businesses. Faulu and Kenya Women Finance Trust (KWFT) serve microenterprises. Match the lender to your stage and collateral position." },
      { title: "Angel Investors and VCs", content: "Kenya's angel network includes informal groups (Nairobi Business Angels, investors connected through iHub) and formal VC funds (Novastar Ventures, E3 Capital, Savannah Fund, Chandaria Capital). Angels invest at idea/early stage, typically KSh 500,000-5 million. VCs invest at growth stage, typically $100,000+. They take equity — usually 10-30%. In return they offer capital, networks and mentorship. Prepare a compelling pitch deck, traction data and a credible financial model." },
      { title: "Grants and Competitions", content: "Non-dilutive funding (no equity given up): Tony Elumelu Foundation (TEF) — $5,000 non-refundable seed capital for African entrepreneurs, annual competition. Hult Prize — student entrepreneurs, annual UN-linked competition. Seedstars — global startup competition with Kenya chapter. GSMA Innovation Fund — mobile-related startups. Grants require compelling impact narratives and rigorous applications. They are competitive but worth pursuing." },
    ],
    kenya_context: "The Nairobi Securities Exchange (NSE) Growth Enterprise Market Segment (GEMS) allows smaller companies to list and raise public capital. Several Kenyan tech companies have raised international capital including from Silicon Valley investors. The ecosystem is genuine — but it concentrates in Nairobi and tech sectors. Businesses in agriculture, manufacturing or outside Nairobi have fewer options and need to work harder to access funding.",
    action_steps: [
      "Assess your current stage honestly — are you at idea, validation, early revenue or growth stage?",
      "Apply to the Tony Elumelu Foundation if you have not — applications open annually",
      "Join a SACCO in your sector — build a savings history before you need a loan",
      "Attend one Nairobi startup event (iHub, Nairobi Garage events) to build the ecosystem network",
      "Prepare a 10-slide pitch deck even if you are not actively fundraising — the discipline clarifies your thinking",
    ],
    myths: [
      { myth: "VCs are the main funding source for Kenyan startups", truth: "The vast majority of Kenyan businesses are funded through personal savings, family, SACCOs and government programmes. VC is real but accessible to very few." },
      { myth: "Grants are free money with no strings attached", truth: "Grants have reporting requirements, spending restrictions and sometimes equity or IP conditions. Read every grant agreement carefully." },
    ],
  },
  "marketing-kenya": {
    title: "Marketing in Kenya",
    category: "Entrepreneurship",
    icon: "📣",
    tagline: "Digital, word of mouth and brand building that actually works in the Kenyan market",
    overview: "Marketing in Kenya operates in a uniquely mobile-first, community-connected, rapidly digitalising environment. Strategies that work in Western markets often fail in Kenya. Understanding the Kenyan consumer — how they discover products, how they make decisions, how they share recommendations — is the foundation of effective Kenyan marketing.",
    sections: [
      { title: "The Kenyan Consumer", content: "Kenya has 22+ million internet users, 30+ million M-Pesa users and one of Africa's highest mobile penetration rates. Consumers are price-conscious but quality-aware. Social proof matters enormously — a product endorsed by someone in your community or church is trusted far more than advertising. WhatsApp is where purchase decisions are discussed and shared. The successful Kenyan marketer understands this fundamentally social decision-making process." },
      { title: "WhatsApp Marketing", content: "WhatsApp is Kenya's most powerful marketing channel and it is almost free. Build a WhatsApp business account. Create a broadcast list (not a group) of customers who have opted in. Share product updates, offers and valuable content — not just promotions. One-to-one WhatsApp conversations close more sales than any billboard. Status updates reach your entire contact list for free. Used ethically and respectfully, WhatsApp marketing generates remarkable ROI." },
      { title: "Social Media in Kenya", content: "Facebook still has the largest Kenyan user base (over 8 million). Instagram drives aspirational consumer purchasing, particularly in fashion, food and lifestyle. TikTok is growing explosively among under-25s. Twitter/X is where Kenyan opinion leaders, journalists and politicians engage — powerful for brand reputation management. LinkedIn for B2B marketing and professional services. Choose platforms based on where your specific customer actually spends time." },
      { title: "Word of Mouth and Community Marketing", content: "Kenya's church networks, chama groups, work WhatsApp groups and neighbourhood communities are powerful marketing channels that cost nothing but relationship. A product recommended in a church of 2,000 people reaches more qualified prospects than most paid advertising. Identify the community connectors in your target market and earn their recommendation. One respected endorser in a tight community outperforms expensive mass advertising." },
      { title: "Digital Marketing Fundamentals", content: "SEO (Search Engine Optimisation): appear when Kenyans search Google for your product or service. Google My Business: free listing that puts your business on Google Maps — essential for any local business. Facebook and Instagram ads: highly targeted, starting from KSh 500 per day. Email marketing: if you have customer emails, MailChimp's free tier sends up to 500 emails per day. These four tools cover most digital marketing needs at low cost." },
    ],
    kenya_context: "Kenyan consumers are sophisticated and sceptical of advertising. Authenticity consistently outperforms polish. A genuine testimonial video shot on a smartphone outperforms an expensive production. Behind-the-scenes content showing how products are made or services delivered builds trust. Pricing transparency — showing value rather than hiding it — resonates in a price-conscious market.",
    action_steps: [
      "Set up a WhatsApp Business account with a complete profile, catalogue and auto-replies",
      "Claim and complete your Google My Business listing — it is free and immediately increases local visibility",
      "Identify your 5 most enthusiastic customers and ask for a video or written testimonial",
      "Find the three most relevant WhatsApp groups or Facebook groups where your customers gather",
      "Run one KSh 1,000 Facebook ad with a specific target audience and measure the result",
    ],
    myths: [
      { myth: "You need a big budget to market effectively in Kenya", truth: "WhatsApp, Google My Business, organic social media and word of mouth are largely free. The biggest cost is time and creativity, not money." },
      { myth: "Digital marketing replaces relationship marketing in Kenya", truth: "Digital amplifies relationship marketing in Kenya. The most effective digital marketing is digital word of mouth — testimonials, recommendations and referrals shared through social platforms." },
    ],
  },
  "legal-business-kenya": {
    title: "Legal Basics for Business",
    category: "Entrepreneurship",
    icon: "⚖️",
    tagline: "Registration, contracts and compliance — the legal foundation every business needs",
    overview: "Many Kenyan businesses operate with unnecessary legal risk because the founder does not understand the basics of business law. You do not need a law degree to protect your business. You need to understand the key legal structures, what contracts must say, and when to spend money on a lawyer — which is less often than lawyers would like you to believe.",
    sections: [
      { title: "Business Registration Structures", content: "Sole proprietorship: simplest, cheapest, but owner is personally liable for all business debts. Partnership: two or more owners sharing profits and liability — must have a written partnership agreement. Private Limited Company (Ltd): separate legal entity, shareholders' liability limited to share value, requires at least one director. Limited Liability Partnership (LLP): combines partnership flexibility with limited liability. For most serious businesses, a private limited company offers the best protection." },
      { title: "Contracts — What They Must Include", content: "A valid contract requires: offer, acceptance, consideration (what each party gives), intention to create legal relations, and capacity (both parties are legally able to contract). Every business contract should specify: parties, services/goods, price and payment terms, delivery obligations and timelines, intellectual property ownership, confidentiality, dispute resolution, and termination conditions. An unsigned email exchange can constitute a contract in Kenyan law." },
      { title: "Employment Law Basics", content: "Kenya's Employment Act 2007 governs the employment relationship. Every employee should have a written employment contract. Statutory obligations: NSSF (National Social Security Fund), NHIF (National Health Insurance Fund) and PAYE contributions. Termination requirements: notice period (typically one month for monthly-paid employees), redundancy compensation (15 days pay per year served), and fair hearing before dismissal. Non-compliance with employment law is expensive." },
      { title: "Intellectual Property Protection", content: "Trade marks protect your brand name and logo — register with Kenya Industrial Property Institute (KIPI). Copyright protects creative works automatically on creation. Patents protect inventions — also registered with KIPI. For most Kenyan SMEs, trade mark registration (approximately KSh 5,000-15,000) is the most important IP protection. Register before you spend heavily on building brand recognition." },
      { title: "When to Use a Lawyer", content: "Spend on legal advice for: company registration (a good lawyer ensures structure is correct from the start), significant contracts (any contract above KSh 500,000), employment disputes (before they become Labour Court cases), land transactions (title deed verification is essential), and any regulatory compliance matter. Not worth spending on: standard low-value contracts (use templates), routine communications, or any matter where the legal cost exceeds the transaction value." },
    ],
    kenya_context: "Kenya's Business Laws Amendment Act 2020 significantly simplified business registration and removed requirements that hindered entrepreneurs. The eCitizen platform now handles most registration processes digitally. The Judiciary's e-filing system and small claims court (handling claims up to KSh 1 million) have improved access to legal remedies for businesses. Business dispute resolution through the Nairobi Centre for International Arbitration (NCIA) is often faster than court.",
    action_steps: [
      "Verify your business registration is current and in the correct structure for your stage",
      "Review any unsigned contracts you have operating on — formalise them",
      "Register your brand trade mark with KIPI if you have not — it is inexpensive and protects your investment",
      "Check NSSF and NHIF compliance for all employees — penalties are significant",
      "Identify one legal risk in your business and get a one-hour legal consultation on it",
    ],
    myths: [
      { myth: "Legal formalities are for big companies", truth: "Small businesses are more vulnerable to legal problems because they have fewer resources to defend themselves. Basic legal protection is proportionally more important for SMEs." },
      { myth: "A verbal agreement is as good as a written one", truth: "Verbal agreements are legally valid in Kenya but nearly impossible to prove in court. If it matters, write it down and sign it." },
    ],
  },
  "scaling": {
    title: "Scaling Your Business",
    category: "Entrepreneurship",
    icon: "🚀",
    tagline: "Growing without losing control — the discipline most entrepreneurs underestimate",
    overview: "Most businesses can start. Far fewer can scale. Scaling requires systematising what works, building a team that operates without you in every transaction, and managing the cash flow demands of rapid growth. The skills that make a founder successful at 5 employees are different from — and sometimes in conflict with — what is required at 50.",
    sections: [
      { title: "Systems Before Scale", content: "The prerequisite for scaling is systemisation — documenting every key process so that it can be performed consistently by someone other than the founder. If the business stops when the founder is away, it is not scalable. The franchise model is the extreme of systemisation: McDonald's can operate consistently across 100 countries because every process is documented and trained. Apply the same thinking at micro scale: what must be documented before you hire person number 5?" },
      { title: "The Hiring Challenge", content: "Scaling requires hiring people who are excellent at things the founder is not. This is psychologically difficult for entrepreneurs who are accustomed to being the most capable person in every room. Hire for attitude and culture first, skill second (skills can be trained). Be honest in job descriptions — the first hires define your culture. A bad hire at senior level costs 1-3x annual salary to fix." },
      { title: "Cash Flow in Growth", content: "Fast growth kills profitable businesses. When you grow revenue quickly, you must fund the working capital gap: you pay staff and suppliers before customers pay you. A business growing at 50% annually may need 50% more working capital. Model your cash flow requirements 6 months ahead. Fund growth from retained profits if possible — growth funded entirely by debt creates fragility." },
      { title: "From Founder to CEO", content: "The founder transition is where most Kenyan businesses stall. The founder who made every decision must become the CEO who builds a team that makes good decisions. This requires: deliberately building decision-making capacity in others, tolerating imperfect decisions (better than no decisions), focusing personal energy on strategy and relationships rather than execution, and accepting that the business must eventually be able to run without the founder's daily involvement." },
      { title: "Kenya Scaling Context", content: "Scaling across Kenya's counties requires understanding that Nairobi is not Kenya. Consumer behaviour, spending power, infrastructure and competitive landscape vary significantly between Nairobi, Mombasa, Kisumu, Nakuru and rural counties. Businesses that attempt to replicate their Nairobi model unchanged in other counties frequently fail. Localisation — adapting products, pricing, distribution and marketing to each market — is essential for national scale." },
    ],
    kenya_context: "Kenya's logistics infrastructure has improved significantly with the SGR, road expansion and cold chain development. This makes scaling physical businesses more achievable than a decade ago. Digital scaling (SaaS, content, marketplace businesses) can reach all 47 counties at near-zero marginal cost. The East African Community (EAC) free trade area in principle allows Kenya-based businesses to scale to Uganda, Tanzania, Rwanda, Burundi and South Sudan — a market of 300+ million people.",
    action_steps: [
      "Document the three most critical processes in your business that currently live only in your head",
      "Identify the single hire that would most accelerate your business — what role, what skill?",
      "Build a 6-month cash flow projection that shows the impact of 30% growth",
      "Identify one decision you currently make that someone else in your team could make with the right training",
      "Visit one market outside Nairobi and interview 10 potential customers — understand the differences",
    ],
    myths: [
      { myth: "Scale just means doing more of what you already do", truth: "Scale requires doing things differently — systems, teams and structures that do not exist at small scale." },
      { myth: "The founder should always remain the face of the business", truth: "The founder as permanent bottleneck is the most common barrier to scale. Building a team that can operate independently is the founder's most important long-term task." },
    ],
  },
  "investment-myths": {
    title: "Investment Myths Busted",
    category: "Myths Decoded",
    icon: "💡",
    tagline: "The things Kenyans believe about investing that are costing them wealth",
    overview: "Kenya has a sophisticated financial market — the Nairobi Securities Exchange, T-bills, money market funds, SACCOs, real estate. Yet most Kenyans either do not invest at all or invest poorly because of persistent myths. Busting these myths is the first step toward building real wealth.",
    sections: [
      { title: "Myth: Only the Rich Invest", content: "Reality: You can invest from KSh 100 on M-Pesa money market funds (Etica, CIC, Zimele). CIC's money market fund accepts KSh 500 minimum. Government T-bills (91-day) require KSh 100,000 but SACCO-pooled investments lower this threshold. NSE's Hisa mobile app allows share purchases from KSh 500. The barrier to investing in Kenya has never been lower. The barrier is knowledge and habit, not capital." },
      { title: "Myth: Real Estate is the Safest Investment", content: "Reality: Real estate is illiquid (you cannot sell a quarter of your plot when you need emergency cash), capital-intensive, management-intensive (tenants, maintenance) and increasingly overvalued in many Kenyan urban markets. The exceptional returns of 2000-2015 were partly fuelled by post-liberalisation dynamics that have since moderated. A diversified portfolio including equities, T-bills and REITs typically outperforms undiversified real estate exposure over long periods." },
      { title: "Myth: The NSE is Gambling", content: "Reality: Short-term trading in individual shares can resemble gambling. Long-term investing in quality companies at reasonable valuations is evidence-backed wealth building. Equity Bank, Safaricom, KCB, East African Breweries — these companies have compounded shareholder wealth over decades. Index investing in the NSE 20 Share Index removes single-company risk. Time in the market beats timing the market." },
      { title: "Myth: SACCOs Are Risky", content: "Reality: SACCO Societies Regulatory Authority (SASRA) regulated deposit-taking SACCOs (DTSs) are among Kenya's safest financial institutions. SACCO deposit and loan rates typically beat commercial bank equivalents. Dividend-linked savings in SACCOs have consistently returned 8-15% annually. The risk is in unregulated informal groups ('investment clubs') that lack legal protection. Check SASRA registration before depositing." },
      { title: "Myth: You Need Financial Expertise to Invest", content: "Reality: A simple investment strategy — regular monthly contributions to a money market fund, T-bills and the NSE through an ETF or SACCO shares — requires no financial expertise. The enemy of good investing is complexity, not simplicity. Warren Buffett's advice for non-experts: low-cost index funds, regular contributions, do not panic-sell in downturns. This advice applies in Kenya as well as America." },
    ],
    kenya_context: "The Capital Markets Authority (CMA) regulates investment products in Kenya. Only invest in CMA-regulated products and SASRA-regulated SACCOs. Pyramid schemes and informal investment groups (especially those promising 30%+ monthly returns) have destroyed Kenyan family wealth regularly — Ekeza SACCO, MMM, and dozens of others. If returns sound too good to be true, they are.",
    action_steps: [
      "Open a money market fund today — CIC, Etica, Zimele or NCBA all have mobile-accessible options",
      "Check whether your current SACCO is SASRA registered at sasra.go.ke",
      "Calculate what 10% of your monthly income invested at 12% annual return over 20 years would be worth",
      "Open an NSE Hisa account and make one small share purchase — learn the process with low stakes",
      "Read one book on investing: The Richest Man in Babylon (Clason) or Rich Dad Poor Dad (Kiyosaki) as a start",
    ],
    myths: [
      { myth: "Informal investment groups offering high returns are a good opportunity", truth: "Groups promising 20-30%+ monthly returns are almost always pyramid schemes or Ponzi structures. They redistribute existing members' money to new recruits until they collapse. Thousands of Kenyans have lost savings this way." },
    ],
  },
  "career-myths": {
    title: "Career Myths Busted",
    category: "Myths Decoded",
    icon: "💡",
    tagline: "The career beliefs holding Kenyans back — and what actually works",
    overview: "Kenya's job market is competitive, rapidly changing and full of myths that cause talented people to make poor career decisions. From the belief that a specific degree determines your destiny to the idea that job security comes from loyalty alone — these myths are worth examining honestly.",
    sections: [
      { title: "Myth: Your Degree Determines Your Career Ceiling", content: "Reality: Your degree gets you through the first door. After 3-5 years of work experience, almost no employer cares about your university — they care about what you have accomplished and what you can do. Some of Kenya's most successful entrepreneurs — in tech, real estate, media — did not complete degrees. Professional qualifications (CPA, ACCA, PMP, CIPS) often carry more market weight than degrees in their respective fields." },
      { title: "Myth: Government Jobs Are the Most Secure", content: "Reality: Public sector employment in Kenya has been significantly disrupted by austerity measures, restructuring and digitisation that has reduced headcount. County governments face financial constraints. National government hiring has slowed. Private sector jobs in growing sectors (technology, financial services, healthcare) often offer better pay, faster advancement and skill development than equivalent public sector roles. Security comes from skills, not sector." },
      { title: "Myth: Networking Is for Extroverts", content: "Reality: Networking is relationship building — and it can be done in ways that match any personality. Introverts often build deeper, more authentic professional relationships than extroverts who collect connections superficially. Online networking (LinkedIn, professional WhatsApp groups, Twitter) allows quality relationship building without the energy drain of large events. The introvert who writes thoughtful LinkedIn content often builds a stronger professional network than the extrovert who collects business cards at events." },
      { title: "Myth: Changing Jobs Too Often Damages Your Career", content: "Reality: Strategic career moves, each one adding skills and increasing compensation, is the fastest career development path. The penalty for 'job hopping' applies to people who move without clear growth rationale. A move every 2-3 years with demonstrably increasing responsibility is standard career progression in most industries. The real risk is staying too long in roles that are not developing you." },
      { title: "Myth: The Best Candidates Get the Jobs", content: "Reality: The best-prepared candidates with the strongest relevant networks get the jobs. Many roles in Kenya are filled through referral before being advertised publicly. The shortlisted candidate who is known to the panel has a significant advantage. Preparation matters enormously — candidates who research the organisation, prepare specific examples, and articulate clear value dramatically outperform equally qualified unprepared candidates." },
    ],
    kenya_context: "Kenya's job market is increasingly skills-based rather than credentials-based, particularly in technology, digital marketing, and the growing gig economy. Platforms like Upwork, Fiverr and Toptal allow Kenyan freelancers to earn in dollars. The remote work revolution post-2020 has opened international opportunities for Kenyans with strong English, technical skills and internet access. Career possibilities have never been broader.",
    action_steps: [
      "Update your LinkedIn profile and connect with 5 people in your target field this week",
      "Identify the three skills most valued in your field and honestly assess your level in each",
      "Ask a trusted mentor: what is holding me back from the next level?",
      "Research one international remote work opportunity relevant to your skills",
      "Prepare your career story — 2 minutes that explains your journey and value compellingly",
    ],
    myths: [
      { myth: "Passion should drive all career decisions", truth: "Passion is important but insufficient. Markets that reward passion (music, sports, art) are brutally competitive. The sweet spot is the intersection of what you are good at, what the market values, and what you can sustain across decades." },
    ],
  },
  "business-myths": {
    title: "Business Myths Busted",
    category: "Myths Decoded",
    icon: "💡",
    tagline: "The business beliefs that sound wise but lead Kenyan entrepreneurs astray",
    overview: "Kenya's entrepreneurship culture is vibrant but carries persistent myths — about funding, about what makes businesses succeed, about competition, and about what customers actually want. Examining these myths honestly saves entrepreneurs years of misdirection.",
    sections: [
      { title: "Myth: You Need Capital to Start", content: "Reality: You need customers before you need capital. Most successful Kenyan businesses started with services or products that could be pre-sold or delivered before major capital was required. Equity Bank started with a community cooperative. M-Pesa was built on existing mobile infrastructure. Service businesses (consulting, agency, professional services) can reach six figures of revenue with minimal startup capital. Start with a paying customer, not a loan." },
      { title: "Myth: Kenyan Customers Only Care About Price", content: "Reality: Kenyan consumers pay premium prices for products and services that demonstrably deliver better quality, reliability or status. Java House, Art Caffe, and premium supermarkets thrive despite higher prices. Nairobi's premium real estate market is one of Africa's most expensive. The persistent belief that Kenyans only want cheap has caused many businesses to race to the bottom on price rather than race to the top on quality." },
      { title: "Myth: Competition Means the Market Is Saturated", content: "Reality: Competition validates that a market exists. No competition usually means no market — or that you have not yet found your competitors. The question is not whether others are doing this but whether you can do it better for a specific segment of customers. M-Pesa entered a market with existing mobile money providers. Safaricom won by being better for the mass market segment. Competition is a feature, not a bug." },
      { title: "Myth: The Idea Is the Most Important Thing", content: "Reality: Execution is 100 times more important than the idea. Great ideas poorly executed fail. Average ideas brilliantly executed succeed. The founders matter more than the concept. Many successful businesses are the 10th company to pursue an idea — the ones that succeeded were better at execution, not more original in concept. Protect your idea less zealously and execute it more intensely." },
      { title: "Myth: Scale Fast or Fail", content: "Reality: Premature scaling is among the top causes of startup failure globally. Growing faster than your operations, team and capital can support destroys businesses. Kenya's most durable businesses (Equity Bank, Nation Media, Bidco) scaled carefully, built strong foundations at each stage, and expanded only when each market was profitable. Sustainable growth beats explosive growth that exhausts the business." },
    ],
    kenya_context: "Kenya's Juakali (informal sector) businesses demonstrate that basic business fundamentals — understand your customer, deliver value, manage cash, reinvest profits — work regardless of formality. The jua kali artisan who serves a loyal local market for 20 years often builds more durable wealth than the funded startup that burns through investment without achieving profitability.",
    action_steps: [
      "Identify whether your business idea can generate its first KSh 10,000 without external funding",
      "Interview 10 target customers — do they actually care about price above all else?",
      "List your top 5 competitors and identify one thing each does better than you",
      "Focus on executing one thing excellently before adding new products or markets",
      "Calculate your break-even point — at what revenue do you cover all costs? Is it achievable?",
    ],
    myths: [
      { myth: "Failing is always a learning experience worth celebrating", truth: "Failure is sometimes just failure. The romanticisation of failure in startup culture can normalise avoidable mistakes. Learn from failure when it happens — but prefer to learn from others' failures rather than your own." },
    ],
  },
  "money-myths": {
    title: "Money Myths Busted",
    category: "Myths Decoded",
    icon: "💡",
    tagline: "The financial beliefs costing Kenyans wealth — and what to believe instead",
    overview: "Financial literacy in Kenya is improving but still low. Persistent myths about money — how it works, how to build it, what the wealthy do differently — cause most Kenyans to work hard for money that does not accumulate. Understanding the truth about money is the foundation of financial independence.",
    sections: [
      { title: "Myth: Saving Alone Builds Wealth", content: "Reality: Saving is necessary but not sufficient. Inflation in Kenya averages 6-8% annually. A savings account earning 3% loses purchasing power in real terms. Money saved must be invested to beat inflation and build wealth. The formula: income → save a fixed percentage immediately → invest the savings → allow compound returns to do the work over time. Saving without investing is wealth preservation at best, slow loss at worst." },
      { title: "Myth: I Will Start Saving When I Earn More", content: "Reality: The habit of saving is established at low income. People who do not save 10% of KSh 30,000 do not save 10% of KSh 300,000 — their lifestyle expands to fill available income. Start the 10% savings habit immediately, regardless of income level. Compound interest rewards time above all else: KSh 5,000 per month at 12% annual return for 30 years = KSh 17 million. Starting 10 years later at KSh 10,000 per month produces less." },
      { title: "Myth: A Good Salary Means Financial Security", content: "Reality: Income is not wealth. Wealth is assets minus liabilities. A doctor earning KSh 500,000 monthly with a car loan, mortgage, and school fees commitments consuming 90% of income has less financial security than a teacher earning KSh 80,000 who saves and invests 30%. Financial security comes from the gap between what you earn and what you spend — and from turning that gap into assets." },
      { title: "Myth: Chama Is Enough", content: "Reality: Chamas (informal savings groups) are excellent for financial discipline and community. But most chamas cycle money rather than grow it — members take turns with the pooled amount, no compound growth occurs. Chamas that invest collectively in assets (real estate, unit trusts, shares) build wealth. Pure merry-go-round chamas are better than nothing but far less powerful than invested savings." },
      { title: "Myth: Sending Money Home Is the Right Priority", content: "Reality: Supporting family is a genuine obligation in Kenyan culture and should not be abandoned. But financially destroying yourself to support family members who could work is not sustainable for anyone. The aeroplane rule applies: put on your own oxygen mask first. Building your own financial security first enables you to support family more sustainably over the long term. A conversation with family about realistic support levels is often worth having." },
    ],
    kenya_context: "The National Treasury's financial inclusion strategy has made basic investment products accessible on mobile phones. But financial education remains insufficient — many Kenyans have M-Pesa but use it only for transactions, not savings or investment. The Kenya Bankers Association and various NGOs run financial literacy programmes. CMA's investor education resources are freely available. The information to build financial literacy is available — the challenge is habit change.",
    action_steps: [
      "Calculate your current savings rate — what percentage of your income are you saving?",
      "Move your savings into a money market fund that earns above inflation",
      "Set up an automatic monthly transfer to savings on the day your salary arrives",
      "Calculate your net worth: total assets minus total debts — do this quarterly",
      "Read I Will Teach You To Be Rich (Ramit Sethi) or The Automatic Millionaire (Bach) — adapt for Kenya",
    ],
    myths: [
      { myth: "Financial stress is just about not earning enough", truth: "Financial stress is primarily about not managing what you earn effectively. Studies consistently show that income increases alone do not resolve financial stress without behaviour change." },
    ],
  },


  "workplace-communication": {
    title: "Workplace Communication",
    category: "Corporate Life",
    icon: "💬",
    tagline: "Emails, meetings and difficult conversations — the skills that determine how far you go",
    overview: "Technical skills get you hired. Communication skills determine how far you rise. The ability to write a clear email, run an effective meeting, give difficult feedback and manage conflict professionally separates average performers from exceptional ones at every level.",
    sections: [
      { title: "Email That Gets Results", content: "Every email should have one clear purpose. State it in the subject line and the first sentence. Use short paragraphs. End with a specific action request and deadline. The most common email failure is burying the request in paragraph four. Busy people read the first two sentences and decide whether to continue. Make those sentences do the work." },
      { title: "Meetings That Are Worth Attending", content: "Most meetings fail because they lack a clear purpose, the right people, or a decision-making structure. Before calling a meeting ask: could this be an email? If you must meet, send an agenda 24 hours before, start on time, assign a timekeeper, end with clear actions, owners and deadlines. The person who runs tight, purposeful meetings builds a reputation for respecting other people's time." },
      { title: "Giving Difficult Feedback", content: "The SBI model works: Situation (when this happened), Behaviour (I observed this specific action), Impact (it had this effect). Avoid character judgements — 'you are disorganised' — and describe specific behaviour instead: 'the report was submitted two days after the deadline three times this month.' Specific, observable, non-personal feedback is far more likely to change behaviour." },
      { title: "Receiving Feedback Without Defensiveness", content: "Defensive responses to feedback damage your reputation more than the original issue. When receiving critical feedback: listen fully without interrupting, ask one clarifying question, say thank you, then decide later whether you agree. You do not have to accept every piece of feedback — but you do have to receive it professionally." },
      { title: "The Kenya Workplace Communication Context", content: "Kenyan workplaces often blend formal and informal communication styles. WhatsApp groups have become primary communication channels in many organisations — understand what should and should not go on a work WhatsApp. Senior people expect to be addressed formally, especially in writing. Code-switching between formal English, Kiswahili and Sheng depending on context is a genuine professional skill." },
    ],
    kenya_context: "WhatsApp has transformed Kenyan workplace communication — decisions are made, complaints aired and gossip spread on work groups. Protect yourself: never write anything on a work WhatsApp you would not say in a formal meeting. Screenshot culture is real. Formal decisions should always be confirmed in email.",
    action_steps: [
      "Audit your last 10 emails — did each have a clear subject, clear purpose and clear action request?",
      "Run your next meeting with a written agenda sent in advance — measure whether it finishes on time",
      "Give one piece of specific behavioural feedback this week using the SBI model",
      "Next time you receive criticism, try responding only with 'thank you, let me think about that'",
      "Identify one communication habit you have that costs you credibility — commit to changing it",
    ],
    myths: [
      { myth: "Good communication is about being articulate and eloquent", truth: "Good communication is about being clear, relevant and timely. Simple language that is understood beats sophisticated language that confuses." },
      { myth: "If I send a long detailed email I have communicated well", truth: "Length is not thoroughness. A long email that buries the key point has failed. Brevity that respects the reader's time is a skill." },
    ],
  },
  "personal-branding": {
    title: "Personal Branding at Work",
    category: "Corporate Life",
    icon: "✨",
    tagline: "Being seen, remembered and respected — the professional reputation you build deliberately",
    overview: "Personal branding is not vanity. It is the deliberate management of how colleagues, managers and the industry perceive your professional value. In a competitive job market, two equally skilled people with different personal brands will have very different career outcomes. Your brand is being built whether you manage it or not.",
    sections: [
      { title: "What Your Brand Currently Is", content: "Your personal brand is what people say about you when you leave the room. To discover it, ask yourself: what do colleagues come to me for? What am I known for solving? What do I do better than almost anyone in my team? The answers describe your current brand. The question is whether that brand matches your ambitions." },
      { title: "Visibility Without Self-Promotion", content: "Many professionals — particularly women in Kenyan workplaces — are taught that promoting yourself is arrogant. The reframe: visibility is about ensuring your contributions are connected to your name. Volunteer to present your team's work. Write a brief summary email after completing a major project. These are not boasts — they are professional communications." },
      { title: "Digital Professional Presence", content: "LinkedIn matters in Kenya's professional market. A complete, active LinkedIn profile signals seriousness. Post about your work, your industry, lessons you are learning. Comment thoughtfully on relevant posts. Recruiters, potential clients and senior industry figures are watching. The cost of a strong LinkedIn presence is one hour per week." },
      { title: "Consistency as Brand Foundation", content: "The strongest personal brands are built on consistency — always being early, always following through on commitments, always being prepared. These unglamorous habits create the most powerful professional reputation. Consistency over years creates the 'go-to person' reputation that generates opportunities without effort." },
      { title: "The Kenya Professional Brand Context", content: "In Kenya's relatively small professional circles, reputation travels fast. Nairobi's business community is interconnected — the person you treat poorly today may be interviewing you in three years. Invest in treating everyone with respect: receptionists, interns, security guards. Your reputation is built across all of these interactions." },
    ],
    kenya_context: "Professional associations in Kenya — ICPAK, LSK, CIPM, KISM — are powerful brand-building platforms. Active participation in your professional body, attending events and eventually speaking or holding office creates visibility in exactly the circles that generate career opportunities.",
    action_steps: [
      "Complete your LinkedIn profile fully — photo, headline, summary, all experience",
      "Post one professional insight on LinkedIn this week",
      "Identify the three words you want colleagues to use to describe you — are you earning those words daily?",
      "Find one professional association event to attend this month",
      "Ask a trusted colleague: what am I known for in this organisation?",
    ],
    myths: [
      { myth: "Personal branding is only for entrepreneurs and influencers", truth: "Every professional has a personal brand whether they manage it or not. The question is whether yours is working for you or against you." },
      { myth: "If I do great work my reputation will build itself", truth: "Great work that is invisible does not build a career. Visibility and quality together build reputation." },
    ],
  },
  "managing-your-boss": {
    title: "Managing Your Boss",
    category: "Corporate Life",
    icon: "🤝",
    tagline: "The most important professional relationship you have — and how to make it work for you",
    overview: "Your manager controls your salary, your projects, your promotion and your daily experience of work. Managing this relationship upward — understanding what your manager needs and making yourself indispensable to their success — is one of the highest-return professional skills you can develop.",
    sections: [
      { title: "Understand What Your Manager Actually Needs", content: "Your manager has their own pressures, targets and political challenges. Understanding what keeps them up at night lets you position your contributions as solutions to their problems. Ask directly: 'What would make this year a success for you?' Their answer tells you exactly where to focus your energy." },
      { title: "Make Their Life Easier", content: "The most valued employees solve problems before they reach the manager. Bring solutions not just problems. Anticipate what information they will need before a meeting and prepare it. Complete tasks before reminders are needed. Each of these behaviours deposits trust in the relationship account." },
      { title: "Manage Expectations Proactively", content: "Never let your manager be surprised by bad news. If a deadline is at risk, tell them early with a revised plan. If you make a mistake, own it immediately with a solution. Surprises damage trust. Proactive communication — even with bad news — builds it." },
      { title: "When Your Manager Is Difficult", content: "A micromanager usually has a trust deficit — build trust through consistent delivery and they typically give more autonomy over time. A manager who takes credit for your work needs to be managed with documentation and strategic visibility. A manager who is genuinely abusive — insulting, discriminatory, bullying — requires HR involvement. Know the difference." },
      { title: "The Kenya Boss Culture Context", content: "Kenyan management culture often expects deference to seniority. Challenging your manager publicly is rarely a good strategy. Raise disagreements privately, respectfully and with evidence. The phrase 'I wanted to get your view on something before I proceed' signals both respect and initiative. It is more effective than either silent compliance or public challenge." },
    ],
    kenya_context: "In many Kenyan organisations, the relationship with your manager is also shaped by the relationship with their EA or PA. Being genuinely respectful to administrative staff is not just ethics — it is strategy. The EA knows the manager's mood, priorities and schedule. They can make your life easier or harder.",
    action_steps: [
      "Schedule a one-on-one with your manager and ask: what are your top three priorities right now?",
      "For one week, bring a proposed solution every time you bring a problem",
      "Identify one thing your manager worries about that you could take off their plate",
      "If your manager micromanages, proactively send a daily 3-bullet progress update — reduce their need to ask",
      "Reflect: what does your manager think your greatest strength is? Does it match what you think?",
    ],
    myths: [
      { myth: "Managing your boss is manipulative", truth: "Understanding what your manager needs and aligning your work to it is not manipulation — it is professional intelligence." },
      { myth: "A good boss should just let me do my job", truth: "Even excellent managers need managing. The relationship is a two-way responsibility." },
    ],
  },
  "commercial-finance": {
    title: "Commercial Finance Basics",
    category: "Finance & Accounting",
    icon: "💰",
    tagline: "P&L, cash flow and balance sheets explained so clearly you will wonder why they ever seemed confusing",
    overview: "Three financial statements tell the complete story of any business: the Profit and Loss account (what happened), the Balance Sheet (what you have), and the Cash Flow statement (where the money went). Every manager who understands these three documents makes better decisions than those who do not — regardless of their role.",
    sections: [
      { title: "The Profit and Loss Account", content: "The P&L answers: did we make money this period? Revenue at the top — what customers paid. Cost of Goods Sold below — what it cost to deliver. Gross Profit = Revenue minus COGS. Then operating expenses (salaries, rent, utilities). Operating Profit = Gross Profit minus operating expenses. Then interest, tax. Net Profit at the bottom. Every line above net profit is a decision point for management." },
      { title: "The Balance Sheet", content: "The balance sheet is a photograph of the business at one moment: what it owns (assets), what it owes (liabilities), and what is left for owners (equity). Assets = Liabilities + Equity — always, by accounting law. Current assets (cash, debtors, stock) can be converted to cash within a year. Fixed assets (land, equipment) are long-term. Understanding the balance sheet reveals whether a business is financially healthy or technically insolvent despite showing profit." },
      { title: "Cash Flow — Why Profit Is Not Cash", content: "A business can be profitable and run out of cash simultaneously. This is called a cash flow crisis and it kills profitable businesses regularly. If you sell on 60-day credit terms but must pay suppliers in 30 days, you are profitable but cash-strapped. The cash flow statement tracks actual money movement: operations, investing and financing. Watch the operating cash flow line especially — it shows whether the core business generates real cash." },
      { title: "Key Financial Ratios Every Manager Should Know", content: "Current ratio (current assets ÷ current liabilities) measures short-term liquidity — above 1.5 is generally healthy. Gross margin (gross profit ÷ revenue) measures pricing and production efficiency. Debtor days (debtors ÷ revenue × 365) measures how long customers take to pay. These three ratios give a quick health check of any business." },
      { title: "Kenya Business Finance Context", content: "Kenyan businesses face specific financial challenges: mobile money has transformed payment speed (M-Pesa collections are instant), but bank lending remains expensive at 13-18% interest. Many SMEs are cash-flow constrained despite profitability. Understanding the difference between profit and cash is survival-critical for any Kenyan business owner or manager." },
    ],
    kenya_context: "KRA (Kenya Revenue Authority) requires businesses to file financial statements for tax purposes. Understanding your P&L helps you understand your tax liability before the KRA does. VAT (Value Added Tax at 16%), income tax and withholding tax all flow from the P&L. A manager who understands financial statements protects their business from preventable tax surprises.",
    action_steps: [
      "Request the P&L for your department or organisation and identify the three largest cost lines",
      "Calculate the gross margin percentage for your business or a product you manage",
      "Check the current ratio of your organisation — is it above 1?",
      "Ask your finance team: what are our debtor days? Is this improving or worsening?",
      "Find one cost line on the P&L that you could influence and make a proposal to reduce it",
    ],
    myths: [
      { myth: "Finance is only for accountants", truth: "Every manager who controls a budget, manages a team or makes purchasing decisions is making financial decisions. Understanding the numbers makes every decision better." },
      { myth: "If we are profitable we are fine", truth: "Profit is an accounting concept. Cash is survival. Many profitable businesses fail due to cash flow crises." },
    ],
  },
  "accounting-fundamentals": {
    title: "Accounting Fundamentals",
    category: "Finance & Accounting",
    icon: "📒",
    tagline: "Debits, credits and the accounting cycle — finally explained in language that makes sense",
    overview: "Accounting is the language of business. You do not need to be an accountant to benefit from understanding it. Knowing how transactions are recorded, how accounts work and how financial statements are produced makes you a more effective manager, a better entrepreneur and a more credible professional in any business conversation.",
    sections: [
      { title: "The Double Entry Principle", content: "Every financial transaction affects two accounts — always. When you receive cash from a customer, cash increases (debit) and revenue increases (credit). When you pay rent, expenses increase (debit) and cash decreases (credit). This is double-entry bookkeeping, invented in 15th century Italy and still the foundation of all accounting worldwide. Every debit must have an equal and opposite credit. The books must balance." },
      { title: "The Chart of Accounts", content: "Every business organises its transactions into categories called accounts: Assets (what you own), Liabilities (what you owe), Equity (owners' interest), Revenue (income earned), Expenses (costs incurred). The chart of accounts is the filing system for every financial transaction. Understanding which category a transaction falls into is the foundation of accounting." },
      { title: "The Accounting Cycle", content: "Transactions occur → they are recorded in journals → posted to ledgers → a trial balance is prepared (checking debits = credits) → adjustments are made → financial statements are produced. This cycle repeats monthly. Accounting software automates most steps — but understanding the underlying cycle lets you identify where errors occur and why." },
      { title: "Accruals vs Cash Basis", content: "Cash basis accounting records transactions when money moves. Accrual basis records them when they are earned or incurred, regardless of when cash moves. IFRS (International Financial Reporting Standards, used in Kenya) requires accrual basis for all companies. The practical implication: a sale is recorded when the invoice is raised, not when the customer pays. This gap creates debtors — and cash flow risk." },
      { title: "Kenya Accounting Standards", content: "Kenya adopted IFRS for SMEs in 2014. All listed companies and banks use full IFRS. The Institute of Certified Public Accountants of Kenya (ICPAK) regulates the profession. CPA (Kenya) is the main professional qualification — offered by KASNEB across three sections (Foundation, Advanced, Final) covering 18 papers total." },
    ],
    kenya_context: "The Kenya Revenue Authority requires proper accounting records for tax compliance. The Tax Procedures Act 2015 requires businesses to maintain records for 5 years. Digital tax systems (eTIMS — Electronic Tax Invoice Management System) now require electronic invoicing for VAT-registered businesses. Understanding accounting is not just professional development — it is legal compliance.",
    action_steps: [
      "Record five of your own personal transactions using double-entry — cash in, cash out, bills paid",
      "Identify five accounts in a business you know: two assets, one liability, one revenue, one expense",
      "Find a simple set of financial statements and identify which figures came from which accounting entries",
      "If you run a business, confirm whether you are on cash or accrual basis accounting — and why",
      "Look up KASNEB and find the CPA Kenya syllabus — understand what the full qualification covers",
    ],
    myths: [
      { myth: "Accounting is just bookkeeping — it is a basic clerical function", truth: "Senior accountants and CFOs make strategic business decisions. Accounting is a foundation for finance, strategy and governance at the highest levels." },
      { myth: "Accounting software means you do not need to understand accounting", truth: "Software automates correct inputs. If you input incorrectly, the software produces wrong outputs beautifully. Understanding accounting principles is essential for using accounting software correctly." },
    ],
  },
  "tax-kenya": {
    title: "Tax in Kenya",
    category: "Finance & Accounting",
    icon: "🏛️",
    tagline: "PAYE, VAT, corporate tax and WHT — simplified and Kenya-specific",
    overview: "Kenya's tax system is administered by the Kenya Revenue Authority (KRA) and covers income, consumption and transaction taxes. Understanding the basics protects individuals from unknowing non-compliance and helps businesses manage their tax burden legally and efficiently. Tax avoidance (legal) is smart business. Tax evasion (illegal) destroys businesses and careers.",
    sections: [
      { title: "PAYE — Pay As You Earn", content: "PAYE is deducted from employee salaries by employers and remitted to KRA monthly. The tax bands for 2024: up to KSh 288,000 annually taxed at 10%, KSh 288,001-388,000 at 25%, above KSh 388,000 at 30%. The personal relief of KSh 28,800 annually reduces everyone's tax liability. Your payslip should show gross pay, PAYE deducted, NHIF, NSSF and net pay." },
      { title: "VAT — Value Added Tax", content: "VAT at 16% is charged on most goods and services sold in Kenya. Businesses with annual turnover above KSh 5 million must register for VAT. They charge VAT on sales (output tax) and reclaim VAT on purchases (input tax). The difference is remitted to KRA monthly. Zero-rated items (basic food, exports) have 0% VAT. Exempt items (medical services, financial services) have no VAT." },
      { title: "Corporate Income Tax", content: "Companies registered in Kenya pay corporate income tax at 30% on taxable profits. Newly listed companies pay 25% for 5 years. SMEs (annual turnover KSh 500,000 to KSh 15 million) pay turnover tax at 1% on gross sales — simpler than full corporate tax. KRA's eTIMS system requires electronic invoicing for VAT-registered businesses from 2024." },
      { title: "Withholding Tax", content: "Withholding Tax (WHT) is deducted at source on certain payments. Rent paid to a landlord: 10% WHT. Professional fees to a consultant: 5% WHT. Dividends paid to shareholders: 15% WHT. The payer deducts WHT and remits to KRA. The recipient receives the net amount and can offset the WHT against their final tax liability." },
      { title: "Tax Compliance and KRA", content: "KRA's iTax platform (itax.kra.go.ke) is where all returns are filed, payments made and certificates downloaded. Monthly obligations: PAYE by the 9th of the following month, VAT by the 20th. Annual corporate tax return: 6 months after financial year end. Late filing attracts penalties and interest. Tax compliance certificates are required for tenders and some bank facilities." },
    ],
    kenya_context: "KRA has significantly enhanced enforcement through data matching — cross-referencing bank records, MPESA transactions, land registry and company records. The days of hiding income are effectively over for businesses with digital transactions. Proactive compliance is less expensive than penalties, interest and the reputational damage of a KRA audit.",
    action_steps: [
      "Log into iTax and verify your personal tax compliance certificate is current",
      "Check your last 3 payslips — is PAYE being deducted correctly for your salary band?",
      "If you run a business with turnover above KSh 5M, confirm VAT registration status",
      "Identify all WHT obligations in your business — are you deducting and remitting correctly?",
      "Find a registered tax agent or accountant for a one-hour consultation on your specific tax position",
    ],
    myths: [
      { myth: "Tax is optional if your business is small", truth: "Any business with turnover above KSh 500,000 has tax obligations. Ignorance of the law is not a defence and KRA enforcement is increasing." },
      { myth: "KRA only goes after big companies", truth: "KRA's data systems now flag individual discrepancies. An MPESA statement showing regular large inflows with no tax filing will attract attention." },
    ],
  },
  "budgeting-forecasting": {
    title: "Budgeting & Forecasting",
    category: "Finance & Accounting",
    icon: "📊",
    tagline: "Building, defending and managing budgets — the skill that makes managers credible",
    overview: "The budget is management's promise to the organisation. Forecasting is management's honest assessment of what will actually happen. Understanding both — how to build them, defend them in review meetings, and manage performance against them — is essential for any manager who controls resources.",
    sections: [
      { title: "How Budgets Are Built", content: "Good budgets start with strategy, not spreadsheets. What are we trying to achieve? What resources do we need? Budget approaches: zero-based (justify every line from scratch — rigorous but time-consuming), incremental (last year plus or minus a percentage — fast but perpetuates past inefficiencies), activity-based (budget follows planned activities). Most organisations use incremental budgeting with strategic adjustments." },
      { title: "Revenue Budgeting", content: "Revenue forecasts should be built bottom-up: number of customers × average transaction value × frequency. Not top-down: 'we want to grow 20% so revenue will be X.' Bottom-up forces honest interrogation of assumptions. What drives each revenue line? Is it realistic? What has to be true for this number to be achieved? Stretch targets are valid — but the basis must be credible." },
      { title: "Cost Budgeting", content: "Classify costs: fixed (same regardless of volume — rent, salaried staff), variable (move with volume — materials, commission), semi-variable (partly fixed, partly variable — utilities). Budget each differently. Fixed costs need approval to change. Variable costs need a rate assumption. Understanding cost behaviour is the foundation of budget accuracy." },
      { title: "Variance Analysis", content: "Every month, compare budget to actual. The difference is the variance. Favourable variance: actual is better than budget (more revenue or less cost). Adverse variance: actual is worse (less revenue or more cost). The key management question is not the size of the variance but its cause and whether it is controllable. Reporting variances with explanations and corrective actions is the core of financial management." },
      { title: "Kenya Budget Context", content: "Kenya's financial year runs July to June, matching the government cycle. Many organisations, particularly those with government contracts or NGO funding, align their budgets to this cycle. Donor-funded organisations face additional complexity: donor budget formats, allowable expenditure rules and reporting requirements that sit alongside internal management accounts." },
    ],
    kenya_context: "The national budget speech in June sets the economic context for all business budgeting: tax changes, infrastructure spending, interest rate environment. Understanding how the national budget affects your industry helps make more accurate business forecasts. Sectors like construction, agriculture and consumer goods are directly affected by government spending decisions.",
    action_steps: [
      "Request your team's budget for this period and calculate the variance-to-date on three key lines",
      "Identify one budget line you can influence and model two scenarios: 5% saving and 10% saving",
      "Next time you are asked for a budget estimate, build it bottom-up rather than top-down",
      "After any significant variance, write a 3-sentence explanation: what happened, why, what you will do",
      "Attend or request access to your organisation's budget review meeting at least once",
    ],
    myths: [
      { myth: "Budget season is finance's job", truth: "Every manager who controls costs or generates revenue is a budget owner. Finance consolidates — managers are responsible for their numbers." },
      { myth: "A perfect budget never needs revision", truth: "The world changes. Forecasts that stubbornly ignore new information are not discipline — they are denial. Good managers revise forecasts when facts change." },
    ],
  },
  "process-improvement": {
    title: "Process Improvement",
    category: "Business Operations",
    icon: "⚙️",
    tagline: "Spotting inefficiency, fixing it and making the improvement stick",
    overview: "Every organisation has processes that waste time, create errors or frustrate customers. Process improvement is the systematic identification and elimination of this waste. It is not about working harder — it is about working smarter. The manager who consistently improves processes builds a reputation as someone who makes organisations better.",
    sections: [
      { title: "How to Map a Process", content: "Before improving a process, document it as it actually works — not as the manual says it works. Walk the actual steps with the people who do them. Draw a simple flowchart: inputs, activities, decisions, outputs. Time each step. Identify handoffs between departments. You will almost certainly discover that the actual process differs significantly from the documented one." },
      { title: "Lean Thinking — Eliminating Waste", content: "Lean identifies seven types of waste (from Toyota's manufacturing system, now applied everywhere): overproduction, waiting, transportation, over-processing, inventory, motion, defects. In a Kenyan office context: waiting for approvals (waiting waste), printing documents that are never read (overproduction), entering the same data in multiple systems (motion), fixing errors in reports (defects). Identify and eliminate." },
      { title: "The 5 Whys", content: "When a problem occurs, ask 'why?' five times. Customer complaint about late delivery. Why late? Warehouse picked wrong item. Why wrong item? Product codes on system did not match warehouse labels. Why mismatch? Labels not updated when codes changed in 2022. Why not updated? No process for synchronising system changes with physical labels. Root cause identified. Now fix the root cause, not the symptom." },
      { title: "Making Improvements Stick", content: "Process improvements fail when they are not documented, not trained and not measured. For every improvement: update the written procedure, train all affected staff, measure the key metric before and after. If the improvement is not measured, you cannot know whether it worked. If it is not trained, people default to old habits within weeks." },
      { title: "Kenya Process Context", content: "Many Kenyan organisations have deeply manual processes where automation would dramatically improve efficiency. Common opportunities: manual approval chains that could be digital, Excel-based tracking that could be a simple system, physical filing that could be scanned. The constraint is often not technology cost but change management — getting people to adopt new ways of working." },
    ],
    kenya_context: "The Kenyan public sector has significant process improvement opportunity — wait times in hospitals, land registry processing, court backlogs. Many NGOs and county governments are actively seeking process improvement professionals. Private sector: manufacturing, logistics and financial services have invested heavily in lean and Six Sigma approaches.",
    action_steps: [
      "Choose one recurring process in your work and map every step it actually takes",
      "Time the process end-to-end — most people are shocked by how long simple processes take",
      "Identify the single biggest waste in the process using the lean waste categories",
      "Apply the 5 Whys to one recurring problem in your team",
      "Implement one small process improvement this week and measure its impact",
    ],
    myths: [
      { myth: "Process improvement requires expensive consultants", truth: "The best process improvements come from the people who do the work every day. The 5 Whys and basic flow mapping cost nothing." },
      { myth: "If it is not broken do not fix it", truth: "Processes that work adequately often conceal enormous waste. 'Not broken' is a low bar for a competitive organisation." },
    ],
  },
  "project-management": {
    title: "Project Management",
    category: "Business Operations",
    icon: "📋",
    tagline: "Delivering on time, within budget and to specification — the three promises every project manager must keep",
    overview: "A project is a temporary effort to create a unique result. Project management is the discipline of planning, executing and closing that effort successfully. Every professional manages projects — whether formally titled or not. Learning the fundamentals dramatically improves your ability to deliver results.",
    sections: [
      { title: "The Project Triangle", content: "Every project has three constraints that are permanently in tension: Scope (what are we delivering?), Time (by when?), Cost (with what resources?). Change one and the others are affected. Add scope without changing time or cost and quality suffers. Compress time without reducing scope and costs rise. Understanding this triangle is the foundation of every project conversation." },
      { title: "Project Initiation — Starting Right", content: "Most project failures are planned at the start. A clear project charter prevents this: what is the project's purpose? What will it deliver? Who are the stakeholders? What are the assumptions and constraints? What defines success? Getting agreement on these questions before work begins prevents the arguments that derail most projects." },
      { title: "Planning and Scheduling", content: "Break the project into a Work Breakdown Structure — all the tasks required to deliver the outcome. Sequence tasks: which must be done before others can start? Identify the critical path — the longest sequence of dependent tasks that determines minimum project duration. Build in buffers for risk. Create a simple Gantt chart showing who does what by when." },
      { title: "Stakeholder Management", content: "Every project has stakeholders with different interests: sponsors (want results), team members (want clarity and resources), clients (want quality), finance (want cost control), operations (want minimal disruption). Map stakeholders by influence and interest. Communicate proactively with those with high influence. Never let a high-influence stakeholder be surprised by project developments." },
      { title: "Kenya Project Management Context", content: "Kenya has a strong project management community — PMI Kenya Chapter is active, and the Association of Project Management Professionals Kenya (APMPK) runs certification programmes. Many government projects (Huduma Centres, SGR, Last Mile Electricity) have created demand for project management professionals. PMP certification is highly valued in Kenya's growing infrastructure sector." },
    ],
    kenya_context: "Kenya's Vision 2030 has generated enormous project activity — infrastructure, housing, digital economy. This has created real demand for project management professionals at all levels. County governments managing devolved funds need project oversight capability. The World Bank and development partners fund significant projects requiring formal project management. This is a growth career path.",
    action_steps: [
      "Write a one-page project charter for any current initiative you are managing",
      "Create a simple Work Breakdown Structure for a project you have this month",
      "Identify the critical path — which tasks, if delayed, delay everything?",
      "Map your project stakeholders: who has high influence and high interest?",
      "Run a weekly 15-minute project status meeting: what was done, what is planned, what is blocked",
    ],
    myths: [
      { myth: "Project management only applies to large formal projects", truth: "Any effort with a start, end and deliverable benefits from project management thinking. Organising an event, launching a product or improving a process are all projects." },
      { myth: "A project manager's job is to write plans", truth: "Plans are a tool. A project manager's job is to deliver outcomes — which requires managing people, risks, budgets and stakeholders, not just updating Gantt charts." },
    ],
  },
  "negotiation": {
    title: "Negotiation Skills",
    category: "Professional Skills",
    icon: "🤜",
    tagline: "Getting what you want without burning bridges — the most underrated professional skill",
    overview: "Every professional negotiates constantly: salary, budgets, deadlines, scope, terms with suppliers, resources from colleagues. Most people negotiate badly — either too aggressively (winning the battle, losing the relationship) or too passively (leaving value on the table to avoid conflict). Principled negotiation gets better outcomes while building relationships.",
    sections: [
      { title: "Separate People From Positions", content: "A position is what someone says they want. An interest is why they want it. The most common negotiation failure is treating positions as fixed when interests are negotiable. The classic example: two people want the last orange. Position: both want the whole orange. Interests: one wants the juice, one wants the rind for baking. Both can get 100% of what they actually need. Always ask: why do they want this?" },
      { title: "Know Your BATNA", content: "BATNA: Best Alternative To a Negotiated Agreement. Your BATNA is your power. If negotiation fails, what is your best option? The stronger your BATNA, the less you need this deal, the more confidently you negotiate. Before any negotiation, clarify your BATNA and try to understand the other party's. Never accept an agreement worse than your BATNA." },
      { title: "The Anchoring Effect", content: "The first number mentioned in a negotiation anchors the discussion. Research consistently shows that the party who states a number first has a significant advantage. The anchor should be ambitious but credible — with justification. When the other party anchors first with an extreme number, do not counter from their anchor. Re-anchor: 'That is not in the range I had in mind. I was thinking of...' and state your number." },
      { title: "Salary Negotiation in Kenya", content: "Most Kenyan professionals do not negotiate salary. They accept the first offer. Research shows this costs the average professional hundreds of thousands of shillings over a career. The counter-offer rarely results in a withdrawn offer. The formula: research market rate, anchor high but credibly, justify with value you bring, silence is powerful after you state your number. Let them speak first after your ask." },
      { title: "Cultural Context in Kenyan Negotiations", content: "Kenyan business culture values relationship before transaction. Rushing to price before establishing rapport is a common foreign mistake. Take time to build personal connection. Harambee spirit — collective contribution — influences business negotiations. Flexibility and face-saving matter. Publicly forcing someone into a corner damages the relationship even if you win. Give the other party a way to agree that preserves their dignity." },
    ],
    kenya_context: "Procurement negotiations in Kenya are often constrained by public procurement rules that limit flexibility. However, in the private sector, almost everything is negotiable — payment terms, delivery schedules, warranties, service levels. The professional who understands negotiation principles wins better deals for their organisation and builds stronger supplier and client relationships.",
    action_steps: [
      "Before your next salary review, research market rates for your role on BrighterMonday and LinkedIn",
      "In your next negotiation, identify the other party's interest, not just their position",
      "Practise anchoring: state your number first in your next price discussion",
      "Identify your BATNA before your next important negotiation",
      "After a negotiation, review: did you leave value on the table? What would you do differently?",
    ],
    myths: [
      { myth: "Good negotiators are aggressive", truth: "The best negotiators are curious — they ask questions to understand interests. Aggression closes options; curiosity opens them." },
      { myth: "Negotiating salary is greedy or pushy", truth: "Employers expect negotiation. Not negotiating signals either unawareness of your market value or willingness to be underpaid. Neither is a good signal." },
    ],
  },
  "critical-thinking": {
    title: "Critical Thinking",
    category: "Professional Skills",
    icon: "🧩",
    tagline: "Analysing problems clearly, questioning assumptions and making better decisions",
    overview: "Critical thinking is the ability to analyse information objectively, identify assumptions, evaluate evidence and reach well-reasoned conclusions. In a world of misinformation, complexity and cognitive shortcuts, critical thinking is the professional skill that separates reactive responders from strategic thinkers.",
    sections: [
      { title: "Identifying Assumptions", content: "Every argument rests on assumptions. Most arguments fail at the assumption level, not the logic level. 'We should expand to Mombasa because our Nairobi market is saturated.' Assumptions: Mombasa has similar demand, we have the operational capacity to expand, Nairobi is actually saturated. Before accepting any conclusion, list the assumptions it depends on and test each one." },
      { title: "Evaluating Evidence", content: "Not all evidence is equal. Primary research (original data you collected) is stronger than secondary research (someone else's summary). Recent evidence is stronger than old. Large sample sizes are stronger than anecdotes. Controlled studies are stronger than correlations. When evaluating any claim, ask: what is the source? How was this measured? What alternative explanations exist?" },
      { title: "Logical Fallacies to Avoid", content: "Ad hominem: attacking the person making the argument rather than the argument. Straw man: misrepresenting someone's argument to make it easier to attack. False dichotomy: presenting two options as the only options when more exist. Correlation is not causation: just because two things happen together does not mean one causes the other. Spotting these in others' arguments — and your own — sharpens thinking significantly." },
      { title: "Decision Making Under Uncertainty", content: "Good decisions under uncertainty require: defining the decision clearly, identifying options, assessing probabilities of outcomes, considering reversibility. The 10/10/10 rule: how will you feel about this decision in 10 minutes, 10 months, 10 years? Pre-mortem thinking: imagine it is one year later and the decision failed — what went wrong? This technique surfaces risks before commitment." },
      { title: "Kenya Critical Thinking Context", content: "Kenya's media environment includes significant misinformation — particularly on WhatsApp. Critical thinking applied to news means checking sources, looking for original reporting, being sceptical of emotionally compelling stories, and seeking multiple perspectives. The same skills apply in business: question the data, interrogate assumptions, be especially sceptical of proposals that confirm what you already want to believe." },
    ],
    kenya_context: "Critical thinking is increasingly valued by Kenyan employers who report that graduates struggle with analytical tasks. The shift from 8-4-4 (which rewarded memorisation) to CBC (which develops thinking skills) reflects a recognition that memorised knowledge is less valuable than the ability to reason. Critical thinking skills differentiate professionals in a competitive job market.",
    action_steps: [
      "Next time someone presents data to you, ask: what assumptions does this rest on?",
      "Find a news story on WhatsApp this week and trace it to its original source",
      "Before your next major decision, run a pre-mortem: assume it fails and list why",
      "In your next meeting, identify one logical fallacy in the discussion",
      "Read one book on thinking: Thinking Fast and Slow (Kahneman), The Righteous Mind (Haidt), or Factfulness (Rosling)",
    ],
    myths: [
      { myth: "Critical thinking means being negative or contrarian", truth: "Critical thinking means being rigorous — questioning your own assumptions as vigorously as others'. It produces better conclusions, not just objections." },
      { myth: "Smart people think critically by default", truth: "Intelligence and critical thinking are different skills. Many highly intelligent people hold beliefs that do not survive critical examination." },
    ],
  },
  "emotional-intelligence": {
    title: "Emotional Intelligence",
    category: "Professional Skills",
    icon: "❤️",
    tagline: "Reading people, managing yourself and leading with empathy",
    overview: "Emotional Intelligence (EQ) is the ability to recognise, understand and manage emotions — your own and others'. Research consistently shows EQ is a stronger predictor of career success than IQ at senior levels. Technical skills get you to management. EQ determines whether you succeed there.",
    sections: [
      { title: "The Four Components of EQ", content: "Self-awareness: knowing your own emotions as they happen. Self-regulation: managing your emotional responses constructively. Social awareness (empathy): reading others' emotions accurately. Relationship management: using emotional understanding to navigate social situations skillfully. Most people are stronger in some areas than others. The first step is honest self-assessment." },
      { title: "Self-Awareness in Practice", content: "Self-awareness requires noticing your emotional state in real time — especially under stress. Before a difficult meeting, check in: am I anxious? Defensive? Resentful? These states distort perception and response. Keeping a brief emotional journal — what happened, how I felt, how I responded, what I wish I had done — accelerates self-awareness development significantly." },
      { title: "Emotional Regulation Under Pressure", content: "The amygdala hijack happens when emotional threat triggers a fight-or-flight response that bypasses rational thinking. In a work context: someone challenges your idea in a meeting and your heart rate spikes and you respond defensively. The 6-second pause gives the rational brain time to engage. Breathe. Name the emotion — 'I am feeling threatened right now.' Naming it reduces its intensity." },
      { title: "Empathy as a Leadership Tool", content: "Empathy is not agreeing with everyone — it is accurately understanding their perspective. A manager with empathy knows when a team member is struggling before it becomes a performance problem. They understand why a client is frustrated beyond what they are saying. Empathy does not mean avoiding difficult conversations — it means having them in a way that preserves the relationship." },
      { title: "EQ in Kenyan Workplace Culture", content: "Kenyan workplace culture places high value on respect, dignity and face-saving. These are essentially EQ values. A manager who publicly humiliates a subordinate — even when correct about the error — has failed emotionally and organisationally. Private correction, public praise. Understanding the deep cultural value of dignity in Kenyan professional contexts is itself an exercise in cultural emotional intelligence." },
    ],
    kenya_context: "Mental health awareness is growing in Kenyan workplaces, but stigma remains significant. EQ-developed managers create environments where team members can acknowledge stress without fear of being perceived as weak. This reduces presenteeism (being physically present but mentally absent) — a significant productivity drain in Kenyan organisations where many employees are managing significant personal financial and family pressures.",
    action_steps: [
      "For one week, notice and name your emotional state at three points during each working day",
      "Before your next difficult conversation, spend 2 minutes considering how the other person is feeling",
      "When you next feel a strong negative emotion at work, try the 6-second pause before responding",
      "Ask for feedback from someone you trust: how do I come across when I am under pressure?",
      "Read Emotional Intelligence by Daniel Goleman or take a free EQ assessment online",
    ],
    myths: [
      { myth: "Emotions should be left at the door — work is professional", truth: "Emotions are always present. The question is whether they are managed consciously or unconsciously. Unmanaged emotions cause more disruption than acknowledged ones." },
      { myth: "EQ means being nice all the time", truth: "High EQ includes the ability to have difficult conversations, give hard feedback and make unpopular decisions — done with awareness and skill, not avoidance." },
    ],
  },
  "data-analysis": {
    title: "Data Analysis Basics",
    category: "Professional Skills",
    icon: "📈",
    tagline: "Excel, numbers and making decisions that are evidence-based rather than gut-based",
    overview: "Data literacy is the ability to read, understand and communicate with data. It does not require statistics expertise. It requires the ability to ask good questions of data, identify patterns, spot errors and translate numbers into actionable insights. In Kenya's increasingly data-driven economy, basic data skills differentiate professionals at every level.",
    sections: [
      { title: "Excel Fundamentals Every Professional Needs", content: "VLOOKUP (now XLOOKUP) for connecting data across tables. SUMIF and COUNTIF for conditional calculations. Pivot tables for rapid summarisation of large datasets. Basic charts: bar for comparison, line for trends, pie only for proportions (and even then, bar charts are usually clearer). These five skills handle 80% of professional data tasks. If you cannot do all five fluently, you have a gap worth filling." },
      { title: "Asking the Right Questions of Data", content: "Data does not speak for itself — it answers the questions you ask. Before any analysis, define: what decision am I trying to make? What data would help me make it? What do I already know? What would change my conclusion? Starting with the decision, not the data, prevents the common trap of producing beautiful analysis that answers the wrong question." },
      { title: "Spotting Bad Data", content: "Garbage in, garbage out. Common data quality problems: duplicates (the same record entered twice), missing values (blanks that skew averages), outliers (errors that distort analysis), inconsistent formats (dates in multiple formats, names spelled differently). Always check for these before analysis. A clean dataset is the foundation of reliable insight." },
      { title: "Communicating Data Insights", content: "The best analysis fails if it cannot be communicated. Rule: one chart, one insight. Title your charts with the conclusion, not the subject: not 'Monthly Sales by Region' but 'Nairobi Region Outselling All Others by 40%.' Remove chart clutter: gridlines, 3D effects, unnecessary labels. Present to the decision-maker's question, not to your methodology." },
      { title: "Kenya Data Context", content: "Kenya generates enormous amounts of data through M-Pesa transactions, Huduma services, county health systems and agricultural extension. The Kenya National Bureau of Statistics (KNBS) publishes extensive open data. Data skills are increasingly valued across all sectors — particularly in healthcare, agriculture, finance and government. Kenya's data economy is growing faster than the supply of data-literate professionals." },
    ],
    kenya_context: "The Kenya Open Data Initiative and various government portals publish data that professionals can use for market analysis, research and decision making. Learning to access, clean and analyse publicly available Kenya data is a differentiating skill. County-level data on demographics, health and agriculture is increasingly available and relevant for businesses targeting specific regions.",
    action_steps: [
      "If you cannot build a pivot table from scratch in Excel, learn this week — free tutorials on YouTube",
      "Take any dataset you have and identify one insight that would help a business decision",
      "Clean a messy spreadsheet: remove duplicates, standardise formats, identify and flag outliers",
      "Present one data insight to a colleague using one chart with a conclusion as the title",
      "Find one Kenya-specific dataset on KNBS website and extract one meaningful insight",
    ],
    myths: [
      { myth: "Data analysis requires programming skills", truth: "Excel handles the majority of professional data analysis needs. Python and R are powerful but optional at entry and mid-career level." },
      { myth: "More data always means better decisions", truth: "Relevant, clean data beats large, messy data every time. Focus on data quality before data quantity." },
    ],
  },
  "business-planning": {
    title: "Business Planning",
    category: "Entrepreneurship",
    icon: "📝",
    tagline: "From idea to viable business — the discipline of testing before committing",
    overview: "Most businesses fail not because of bad execution but because of bad planning — specifically, insufficient testing of assumptions before committing resources. A good business plan is not a document for investors. It is a thinking tool for the entrepreneur — a structured way of examining whether your idea can actually work before you stake your savings on it.",
    sections: [
      { title: "The Business Model Canvas", content: "The Business Model Canvas (Osterwalder) maps a business on one page across nine building blocks: Customer Segments (who?), Value Propositions (why will they pay?), Channels (how do you reach them?), Customer Relationships (how do you retain them?), Revenue Streams (how do you make money?), Key Resources (what do you need?), Key Activities (what must you do?), Key Partners (who do you need?), Cost Structure (what does it cost?). Fill this before writing any longer document." },
      { title: "Validating the Problem", content: "The most common startup mistake: building a solution before confirming the problem exists. Before writing a business plan, talk to 20 potential customers. Not family and friends who will be supportive — strangers who match your target customer profile. Ask: do they have this problem? How do they solve it today? How much does the current solution cost them? What would they pay for a better solution? Real customer data beats assumption." },
      { title: "The Financial Model", content: "A business plan without financial projections is a wish list. Build three-year projections: revenue (units × price, built bottom-up), cost of goods sold, gross margin, operating expenses (staff, rent, marketing, technology), EBITDA. Then cash flow: when do you actually collect revenue, when do you pay bills? The gap between profit and cash is where businesses die. Identify when you need external funding." },
      { title: "Competitive Analysis", content: "Every business has competition — direct (doing the same thing) and indirect (solving the same problem differently). Map your competitors: what do they offer, at what price, with what quality, to which customers? Where are the gaps in the market? Your value proposition must be clearly differentiated — better quality, lower price, more convenient, more specialised. 'We are better' is not differentiation. Specific, verifiable advantages are." },
      { title: "Kenya Business Environment", content: "Starting a business in Kenya requires: business registration (eCitizen takes 1-3 days for a sole trader, longer for a limited company), county business permit (varies by county and business type), PIN certificate from KRA, and sector-specific licences (food handling certificate, pharmacy licence, security licence). The Kenya Kwanza government has reduced business registration requirements — check eCitizen for current process." },
    ],
    kenya_context: "Kenya's startup ecosystem is East Africa's most developed: iHub, Nairobi Garage, and ALX Hub provide incubation support. Funding sources include UWEZO Fund, Youth Enterprise Fund, Women Enterprise Fund, and KENVO (Kenya Venture Capital). Impact investors (Novastar, Acumen, GSMA Innovation Fund) target Kenyan startups solving social and environmental problems. The ecosystem support is real — use it.",
    action_steps: [
      "Fill in a Business Model Canvas for your current or planned business — one page, all nine blocks",
      "Interview 5 potential customers about the problem you intend to solve before building anything",
      "Build a 12-month cash flow projection — month by month, revenue in, costs out",
      "Map your top 3 competitors — be honest about where they are better than you",
      "Register your business on eCitizen if you have not — formalisation opens funding opportunities",
    ],
    myths: [
      { myth: "I need a long formal business plan to start", truth: "A one-page Business Model Canvas and customer validation interviews are more valuable than a 40-page document nobody reads." },
      { myth: "My idea is unique — there is no competition", truth: "If there is no competition, there may be no market. Existing competition validates that customers have this problem and will pay to solve it." },
    ],
  },
  "startup-funding-kenya": {
    title: "Startup Funding in Kenya",
    category: "Entrepreneurship",
    icon: "💸",
    tagline: "Banks, angels, VCs and grants — navigating Kenya's funding landscape honestly",
    overview: "Kenya has one of Africa's most active startup funding ecosystems. But most entrepreneurs pursue funding before they are ready, approach the wrong sources for their stage, or misunderstand what investors actually want. Understanding the funding landscape — who funds what, at what stage, on what terms — prevents wasted time and costly mistakes.",
    sections: [
      { title: "Bootstrapping First", content: "The best funding is revenue. Businesses that generate their own cash before seeking external funding have stronger negotiating positions, retain more equity, and are forced to validate their model before scaling. Most successful Kenyan businesses — Equity Bank, Safaricom, Java House — bootstrapped significantly before raising external capital. If you can fund growth from operations, do so as long as possible." },
      { title: "Government Funds", content: "UWEZO Fund (young people and women, up to KSh 500,000 per group), Youth Enterprise Development Fund (youth 18-35, loans from KSh 50,000), Women Enterprise Fund (women-led businesses, loans and grants), Biashara Kenya Fund (consolidates multiple government funds). These are real opportunities but require business registration, business plan and often a group application structure. Apply through eCitizen or Huduma Centres." },
      { title: "Banks and SACCOs", content: "Commercial bank lending in Kenya is expensive (13-18%) and requires collateral most startups lack. SACCOs (Savings and Credit Cooperatives) offer better terms to members — 12% is achievable. Equity Bank's Equitel and KCB's KCB M-Pesa offer mobile-based credit for small businesses. Faulu and Kenya Women Finance Trust (KWFT) serve microenterprises. Match the lender to your stage and collateral position." },
      { title: "Angel Investors and VCs", content: "Kenya's angel network includes informal groups (Nairobi Business Angels, investors connected through iHub) and formal VC funds (Novastar Ventures, E3 Capital, Savannah Fund, Chandaria Capital). Angels invest at idea/early stage, typically KSh 500,000-5 million. VCs invest at growth stage, typically $100,000+. They take equity — usually 10-30%. In return they offer capital, networks and mentorship. Prepare a compelling pitch deck, traction data and a credible financial model." },
      { title: "Grants and Competitions", content: "Non-dilutive funding (no equity given up): Tony Elumelu Foundation (TEF) — $5,000 non-refundable seed capital for African entrepreneurs, annual competition. Hult Prize — student entrepreneurs, annual UN-linked competition. Seedstars — global startup competition with Kenya chapter. GSMA Innovation Fund — mobile-related startups. Grants require compelling impact narratives and rigorous applications. They are competitive but worth pursuing." },
    ],
    kenya_context: "The Nairobi Securities Exchange (NSE) Growth Enterprise Market Segment (GEMS) allows smaller companies to list and raise public capital. Several Kenyan tech companies have raised international capital including from Silicon Valley investors. The ecosystem is genuine — but it concentrates in Nairobi and tech sectors. Businesses in agriculture, manufacturing or outside Nairobi have fewer options and need to work harder to access funding.",
    action_steps: [
      "Assess your current stage honestly — are you at idea, validation, early revenue or growth stage?",
      "Apply to the Tony Elumelu Foundation if you have not — applications open annually",
      "Join a SACCO in your sector — build a savings history before you need a loan",
      "Attend one Nairobi startup event (iHub, Nairobi Garage events) to build the ecosystem network",
      "Prepare a 10-slide pitch deck even if you are not actively fundraising — the discipline clarifies your thinking",
    ],
    myths: [
      { myth: "VCs are the main funding source for Kenyan startups", truth: "The vast majority of Kenyan businesses are funded through personal savings, family, SACCOs and government programmes. VC is real but accessible to very few." },
      { myth: "Grants are free money with no strings attached", truth: "Grants have reporting requirements, spending restrictions and sometimes equity or IP conditions. Read every grant agreement carefully." },
    ],
  },
  "marketing-kenya": {
    title: "Marketing in Kenya",
    category: "Entrepreneurship",
    icon: "📣",
    tagline: "Digital, word of mouth and brand building that actually works in the Kenyan market",
    overview: "Marketing in Kenya operates in a uniquely mobile-first, community-connected, rapidly digitalising environment. Strategies that work in Western markets often fail in Kenya. Understanding the Kenyan consumer — how they discover products, how they make decisions, how they share recommendations — is the foundation of effective Kenyan marketing.",
    sections: [
      { title: "The Kenyan Consumer", content: "Kenya has 22+ million internet users, 30+ million M-Pesa users and one of Africa's highest mobile penetration rates. Consumers are price-conscious but quality-aware. Social proof matters enormously — a product endorsed by someone in your community or church is trusted far more than advertising. WhatsApp is where purchase decisions are discussed and shared. The successful Kenyan marketer understands this fundamentally social decision-making process." },
      { title: "WhatsApp Marketing", content: "WhatsApp is Kenya's most powerful marketing channel and it is almost free. Build a WhatsApp business account. Create a broadcast list (not a group) of customers who have opted in. Share product updates, offers and valuable content — not just promotions. One-to-one WhatsApp conversations close more sales than any billboard. Status updates reach your entire contact list for free. Used ethically and respectfully, WhatsApp marketing generates remarkable ROI." },
      { title: "Social Media in Kenya", content: "Facebook still has the largest Kenyan user base (over 8 million). Instagram drives aspirational consumer purchasing, particularly in fashion, food and lifestyle. TikTok is growing explosively among under-25s. Twitter/X is where Kenyan opinion leaders, journalists and politicians engage — powerful for brand reputation management. LinkedIn for B2B marketing and professional services. Choose platforms based on where your specific customer actually spends time." },
      { title: "Word of Mouth and Community Marketing", content: "Kenya's church networks, chama groups, work WhatsApp groups and neighbourhood communities are powerful marketing channels that cost nothing but relationship. A product recommended in a church of 2,000 people reaches more qualified prospects than most paid advertising. Identify the community connectors in your target market and earn their recommendation. One respected endorser in a tight community outperforms expensive mass advertising." },
      { title: "Digital Marketing Fundamentals", content: "SEO (Search Engine Optimisation): appear when Kenyans search Google for your product or service. Google My Business: free listing that puts your business on Google Maps — essential for any local business. Facebook and Instagram ads: highly targeted, starting from KSh 500 per day. Email marketing: if you have customer emails, MailChimp's free tier sends up to 500 emails per day. These four tools cover most digital marketing needs at low cost." },
    ],
    kenya_context: "Kenyan consumers are sophisticated and sceptical of advertising. Authenticity consistently outperforms polish. A genuine testimonial video shot on a smartphone outperforms an expensive production. Behind-the-scenes content showing how products are made or services delivered builds trust. Pricing transparency — showing value rather than hiding it — resonates in a price-conscious market.",
    action_steps: [
      "Set up a WhatsApp Business account with a complete profile, catalogue and auto-replies",
      "Claim and complete your Google My Business listing — it is free and immediately increases local visibility",
      "Identify your 5 most enthusiastic customers and ask for a video or written testimonial",
      "Find the three most relevant WhatsApp groups or Facebook groups where your customers gather",
      "Run one KSh 1,000 Facebook ad with a specific target audience and measure the result",
    ],
    myths: [
      { myth: "You need a big budget to market effectively in Kenya", truth: "WhatsApp, Google My Business, organic social media and word of mouth are largely free. The biggest cost is time and creativity, not money." },
      { myth: "Digital marketing replaces relationship marketing in Kenya", truth: "Digital amplifies relationship marketing in Kenya. The most effective digital marketing is digital word of mouth — testimonials, recommendations and referrals shared through social platforms." },
    ],
  },
  "legal-business-kenya": {
    title: "Legal Basics for Business",
    category: "Entrepreneurship",
    icon: "⚖️",
    tagline: "Registration, contracts and compliance — the legal foundation every business needs",
    overview: "Many Kenyan businesses operate with unnecessary legal risk because the founder does not understand the basics of business law. You do not need a law degree to protect your business. You need to understand the key legal structures, what contracts must say, and when to spend money on a lawyer — which is less often than lawyers would like you to believe.",
    sections: [
      { title: "Business Registration Structures", content: "Sole proprietorship: simplest, cheapest, but owner is personally liable for all business debts. Partnership: two or more owners sharing profits and liability — must have a written partnership agreement. Private Limited Company (Ltd): separate legal entity, shareholders' liability limited to share value, requires at least one director. Limited Liability Partnership (LLP): combines partnership flexibility with limited liability. For most serious businesses, a private limited company offers the best protection." },
      { title: "Contracts — What They Must Include", content: "A valid contract requires: offer, acceptance, consideration (what each party gives), intention to create legal relations, and capacity (both parties are legally able to contract). Every business contract should specify: parties, services/goods, price and payment terms, delivery obligations and timelines, intellectual property ownership, confidentiality, dispute resolution, and termination conditions. An unsigned email exchange can constitute a contract in Kenyan law." },
      { title: "Employment Law Basics", content: "Kenya's Employment Act 2007 governs the employment relationship. Every employee should have a written employment contract. Statutory obligations: NSSF (National Social Security Fund), NHIF (National Health Insurance Fund) and PAYE contributions. Termination requirements: notice period (typically one month for monthly-paid employees), redundancy compensation (15 days pay per year served), and fair hearing before dismissal. Non-compliance with employment law is expensive." },
      { title: "Intellectual Property Protection", content: "Trade marks protect your brand name and logo — register with Kenya Industrial Property Institute (KIPI). Copyright protects creative works automatically on creation. Patents protect inventions — also registered with KIPI. For most Kenyan SMEs, trade mark registration (approximately KSh 5,000-15,000) is the most important IP protection. Register before you spend heavily on building brand recognition." },
      { title: "When to Use a Lawyer", content: "Spend on legal advice for: company registration (a good lawyer ensures structure is correct from the start), significant contracts (any contract above KSh 500,000), employment disputes (before they become Labour Court cases), land transactions (title deed verification is essential), and any regulatory compliance matter. Not worth spending on: standard low-value contracts (use templates), routine communications, or any matter where the legal cost exceeds the transaction value." },
    ],
    kenya_context: "Kenya's Business Laws Amendment Act 2020 significantly simplified business registration and removed requirements that hindered entrepreneurs. The eCitizen platform now handles most registration processes digitally. The Judiciary's e-filing system and small claims court (handling claims up to KSh 1 million) have improved access to legal remedies for businesses. Business dispute resolution through the Nairobi Centre for International Arbitration (NCIA) is often faster than court.",
    action_steps: [
      "Verify your business registration is current and in the correct structure for your stage",
      "Review any unsigned contracts you have operating on — formalise them",
      "Register your brand trade mark with KIPI if you have not — it is inexpensive and protects your investment",
      "Check NSSF and NHIF compliance for all employees — penalties are significant",
      "Identify one legal risk in your business and get a one-hour legal consultation on it",
    ],
    myths: [
      { myth: "Legal formalities are for big companies", truth: "Small businesses are more vulnerable to legal problems because they have fewer resources to defend themselves. Basic legal protection is proportionally more important for SMEs." },
      { myth: "A verbal agreement is as good as a written one", truth: "Verbal agreements are legally valid in Kenya but nearly impossible to prove in court. If it matters, write it down and sign it." },
    ],
  },
  "scaling": {
    title: "Scaling Your Business",
    category: "Entrepreneurship",
    icon: "🚀",
    tagline: "Growing without losing control — the discipline most entrepreneurs underestimate",
    overview: "Most businesses can start. Far fewer can scale. Scaling requires systematising what works, building a team that operates without you in every transaction, and managing the cash flow demands of rapid growth. The skills that make a founder successful at 5 employees are different from — and sometimes in conflict with — what is required at 50.",
    sections: [
      { title: "Systems Before Scale", content: "The prerequisite for scaling is systemisation — documenting every key process so that it can be performed consistently by someone other than the founder. If the business stops when the founder is away, it is not scalable. The franchise model is the extreme of systemisation: McDonald's can operate consistently across 100 countries because every process is documented and trained. Apply the same thinking at micro scale: what must be documented before you hire person number 5?" },
      { title: "The Hiring Challenge", content: "Scaling requires hiring people who are excellent at things the founder is not. This is psychologically difficult for entrepreneurs who are accustomed to being the most capable person in every room. Hire for attitude and culture first, skill second (skills can be trained). Be honest in job descriptions — the first hires define your culture. A bad hire at senior level costs 1-3x annual salary to fix." },
      { title: "Cash Flow in Growth", content: "Fast growth kills profitable businesses. When you grow revenue quickly, you must fund the working capital gap: you pay staff and suppliers before customers pay you. A business growing at 50% annually may need 50% more working capital. Model your cash flow requirements 6 months ahead. Fund growth from retained profits if possible — growth funded entirely by debt creates fragility." },
      { title: "From Founder to CEO", content: "The founder transition is where most Kenyan businesses stall. The founder who made every decision must become the CEO who builds a team that makes good decisions. This requires: deliberately building decision-making capacity in others, tolerating imperfect decisions (better than no decisions), focusing personal energy on strategy and relationships rather than execution, and accepting that the business must eventually be able to run without the founder's daily involvement." },
      { title: "Kenya Scaling Context", content: "Scaling across Kenya's counties requires understanding that Nairobi is not Kenya. Consumer behaviour, spending power, infrastructure and competitive landscape vary significantly between Nairobi, Mombasa, Kisumu, Nakuru and rural counties. Businesses that attempt to replicate their Nairobi model unchanged in other counties frequently fail. Localisation — adapting products, pricing, distribution and marketing to each market — is essential for national scale." },
    ],
    kenya_context: "Kenya's logistics infrastructure has improved significantly with the SGR, road expansion and cold chain development. This makes scaling physical businesses more achievable than a decade ago. Digital scaling (SaaS, content, marketplace businesses) can reach all 47 counties at near-zero marginal cost. The East African Community (EAC) free trade area in principle allows Kenya-based businesses to scale to Uganda, Tanzania, Rwanda, Burundi and South Sudan — a market of 300+ million people.",
    action_steps: [
      "Document the three most critical processes in your business that currently live only in your head",
      "Identify the single hire that would most accelerate your business — what role, what skill?",
      "Build a 6-month cash flow projection that shows the impact of 30% growth",
      "Identify one decision you currently make that someone else in your team could make with the right training",
      "Visit one market outside Nairobi and interview 10 potential customers — understand the differences",
    ],
    myths: [
      { myth: "Scale just means doing more of what you already do", truth: "Scale requires doing things differently — systems, teams and structures that do not exist at small scale." },
      { myth: "The founder should always remain the face of the business", truth: "The founder as permanent bottleneck is the most common barrier to scale. Building a team that can operate independently is the founder's most important long-term task." },
    ],
  },
  "investment-myths": {
    title: "Investment Myths Busted",
    category: "Myths Decoded",
    icon: "💡",
    tagline: "The things Kenyans believe about investing that are costing them wealth",
    overview: "Kenya has a sophisticated financial market — the Nairobi Securities Exchange, T-bills, money market funds, SACCOs, real estate. Yet most Kenyans either do not invest at all or invest poorly because of persistent myths. Busting these myths is the first step toward building real wealth.",
    sections: [
      { title: "Myth: Only the Rich Invest", content: "Reality: You can invest from KSh 100 on M-Pesa money market funds (Etica, CIC, Zimele). CIC's money market fund accepts KSh 500 minimum. Government T-bills (91-day) require KSh 100,000 but SACCO-pooled investments lower this threshold. NSE's Hisa mobile app allows share purchases from KSh 500. The barrier to investing in Kenya has never been lower. The barrier is knowledge and habit, not capital." },
      { title: "Myth: Real Estate is the Safest Investment", content: "Reality: Real estate is illiquid (you cannot sell a quarter of your plot when you need emergency cash), capital-intensive, management-intensive (tenants, maintenance) and increasingly overvalued in many Kenyan urban markets. The exceptional returns of 2000-2015 were partly fuelled by post-liberalisation dynamics that have since moderated. A diversified portfolio including equities, T-bills and REITs typically outperforms undiversified real estate exposure over long periods." },
      { title: "Myth: The NSE is Gambling", content: "Reality: Short-term trading in individual shares can resemble gambling. Long-term investing in quality companies at reasonable valuations is evidence-backed wealth building. Equity Bank, Safaricom, KCB, East African Breweries — these companies have compounded shareholder wealth over decades. Index investing in the NSE 20 Share Index removes single-company risk. Time in the market beats timing the market." },
      { title: "Myth: SACCOs Are Risky", content: "Reality: SACCO Societies Regulatory Authority (SASRA) regulated deposit-taking SACCOs (DTSs) are among Kenya's safest financial institutions. SACCO deposit and loan rates typically beat commercial bank equivalents. Dividend-linked savings in SACCOs have consistently returned 8-15% annually. The risk is in unregulated informal groups ('investment clubs') that lack legal protection. Check SASRA registration before depositing." },
      { title: "Myth: You Need Financial Expertise to Invest", content: "Reality: A simple investment strategy — regular monthly contributions to a money market fund, T-bills and the NSE through an ETF or SACCO shares — requires no financial expertise. The enemy of good investing is complexity, not simplicity. Warren Buffett's advice for non-experts: low-cost index funds, regular contributions, do not panic-sell in downturns. This advice applies in Kenya as well as America." },
    ],
    kenya_context: "The Capital Markets Authority (CMA) regulates investment products in Kenya. Only invest in CMA-regulated products and SASRA-regulated SACCOs. Pyramid schemes and informal investment groups (especially those promising 30%+ monthly returns) have destroyed Kenyan family wealth regularly — Ekeza SACCO, MMM, and dozens of others. If returns sound too good to be true, they are.",
    action_steps: [
      "Open a money market fund today — CIC, Etica, Zimele or NCBA all have mobile-accessible options",
      "Check whether your current SACCO is SASRA registered at sasra.go.ke",
      "Calculate what 10% of your monthly income invested at 12% annual return over 20 years would be worth",
      "Open an NSE Hisa account and make one small share purchase — learn the process with low stakes",
      "Read one book on investing: The Richest Man in Babylon (Clason) or Rich Dad Poor Dad (Kiyosaki) as a start",
    ],
    myths: [
      { myth: "Informal investment groups offering high returns are a good opportunity", truth: "Groups promising 20-30%+ monthly returns are almost always pyramid schemes or Ponzi structures. They redistribute existing members' money to new recruits until they collapse. Thousands of Kenyans have lost savings this way." },
    ],
  },
  "career-myths": {
    title: "Career Myths Busted",
    category: "Myths Decoded",
    icon: "💡",
    tagline: "The career beliefs holding Kenyans back — and what actually works",
    overview: "Kenya's job market is competitive, rapidly changing and full of myths that cause talented people to make poor career decisions. From the belief that a specific degree determines your destiny to the idea that job security comes from loyalty alone — these myths are worth examining honestly.",
    sections: [
      { title: "Myth: Your Degree Determines Your Career Ceiling", content: "Reality: Your degree gets you through the first door. After 3-5 years of work experience, almost no employer cares about your university — they care about what you have accomplished and what you can do. Some of Kenya's most successful entrepreneurs — in tech, real estate, media — did not complete degrees. Professional qualifications (CPA, ACCA, PMP, CIPS) often carry more market weight than degrees in their respective fields." },
      { title: "Myth: Government Jobs Are the Most Secure", content: "Reality: Public sector employment in Kenya has been significantly disrupted by austerity measures, restructuring and digitisation that has reduced headcount. County governments face financial constraints. National government hiring has slowed. Private sector jobs in growing sectors (technology, financial services, healthcare) often offer better pay, faster advancement and skill development than equivalent public sector roles. Security comes from skills, not sector." },
      { title: "Myth: Networking Is for Extroverts", content: "Reality: Networking is relationship building — and it can be done in ways that match any personality. Introverts often build deeper, more authentic professional relationships than extroverts who collect connections superficially. Online networking (LinkedIn, professional WhatsApp groups, Twitter) allows quality relationship building without the energy drain of large events. The introvert who writes thoughtful LinkedIn content often builds a stronger professional network than the extrovert who collects business cards at events." },
      { title: "Myth: Changing Jobs Too Often Damages Your Career", content: "Reality: Strategic career moves, each one adding skills and increasing compensation, is the fastest career development path. The penalty for 'job hopping' applies to people who move without clear growth rationale. A move every 2-3 years with demonstrably increasing responsibility is standard career progression in most industries. The real risk is staying too long in roles that are not developing you." },
      { title: "Myth: The Best Candidates Get the Jobs", content: "Reality: The best-prepared candidates with the strongest relevant networks get the jobs. Many roles in Kenya are filled through referral before being advertised publicly. The shortlisted candidate who is known to the panel has a significant advantage. Preparation matters enormously — candidates who research the organisation, prepare specific examples, and articulate clear value dramatically outperform equally qualified unprepared candidates." },
    ],
    kenya_context: "Kenya's job market is increasingly skills-based rather than credentials-based, particularly in technology, digital marketing, and the growing gig economy. Platforms like Upwork, Fiverr and Toptal allow Kenyan freelancers to earn in dollars. The remote work revolution post-2020 has opened international opportunities for Kenyans with strong English, technical skills and internet access. Career possibilities have never been broader.",
    action_steps: [
      "Update your LinkedIn profile and connect with 5 people in your target field this week",
      "Identify the three skills most valued in your field and honestly assess your level in each",
      "Ask a trusted mentor: what is holding me back from the next level?",
      "Research one international remote work opportunity relevant to your skills",
      "Prepare your career story — 2 minutes that explains your journey and value compellingly",
    ],
    myths: [
      { myth: "Passion should drive all career decisions", truth: "Passion is important but insufficient. Markets that reward passion (music, sports, art) are brutally competitive. The sweet spot is the intersection of what you are good at, what the market values, and what you can sustain across decades." },
    ],
  },
  "business-myths": {
    title: "Business Myths Busted",
    category: "Myths Decoded",
    icon: "💡",
    tagline: "The business beliefs that sound wise but lead Kenyan entrepreneurs astray",
    overview: "Kenya's entrepreneurship culture is vibrant but carries persistent myths — about funding, about what makes businesses succeed, about competition, and about what customers actually want. Examining these myths honestly saves entrepreneurs years of misdirection.",
    sections: [
      { title: "Myth: You Need Capital to Start", content: "Reality: You need customers before you need capital. Most successful Kenyan businesses started with services or products that could be pre-sold or delivered before major capital was required. Equity Bank started with a community cooperative. M-Pesa was built on existing mobile infrastructure. Service businesses (consulting, agency, professional services) can reach six figures of revenue with minimal startup capital. Start with a paying customer, not a loan." },
      { title: "Myth: Kenyan Customers Only Care About Price", content: "Reality: Kenyan consumers pay premium prices for products and services that demonstrably deliver better quality, reliability or status. Java House, Art Caffe, and premium supermarkets thrive despite higher prices. Nairobi's premium real estate market is one of Africa's most expensive. The persistent belief that Kenyans only want cheap has caused many businesses to race to the bottom on price rather than race to the top on quality." },
      { title: "Myth: Competition Means the Market Is Saturated", content: "Reality: Competition validates that a market exists. No competition usually means no market — or that you have not yet found your competitors. The question is not whether others are doing this but whether you can do it better for a specific segment of customers. M-Pesa entered a market with existing mobile money providers. Safaricom won by being better for the mass market segment. Competition is a feature, not a bug." },
      { title: "Myth: The Idea Is the Most Important Thing", content: "Reality: Execution is 100 times more important than the idea. Great ideas poorly executed fail. Average ideas brilliantly executed succeed. The founders matter more than the concept. Many successful businesses are the 10th company to pursue an idea — the ones that succeeded were better at execution, not more original in concept. Protect your idea less zealously and execute it more intensely." },
      { title: "Myth: Scale Fast or Fail", content: "Reality: Premature scaling is among the top causes of startup failure globally. Growing faster than your operations, team and capital can support destroys businesses. Kenya's most durable businesses (Equity Bank, Nation Media, Bidco) scaled carefully, built strong foundations at each stage, and expanded only when each market was profitable. Sustainable growth beats explosive growth that exhausts the business." },
    ],
    kenya_context: "Kenya's Juakali (informal sector) businesses demonstrate that basic business fundamentals — understand your customer, deliver value, manage cash, reinvest profits — work regardless of formality. The jua kali artisan who serves a loyal local market for 20 years often builds more durable wealth than the funded startup that burns through investment without achieving profitability.",
    action_steps: [
      "Identify whether your business idea can generate its first KSh 10,000 without external funding",
      "Interview 10 target customers — do they actually care about price above all else?",
      "List your top 5 competitors and identify one thing each does better than you",
      "Focus on executing one thing excellently before adding new products or markets",
      "Calculate your break-even point — at what revenue do you cover all costs? Is it achievable?",
    ],
    myths: [
      { myth: "Failing is always a learning experience worth celebrating", truth: "Failure is sometimes just failure. The romanticisation of failure in startup culture can normalise avoidable mistakes. Learn from failure when it happens — but prefer to learn from others' failures rather than your own." },
    ],
  },
  "money-myths": {
    title: "Money Myths Busted",
    category: "Myths Decoded",
    icon: "💡",
    tagline: "The financial beliefs costing Kenyans wealth — and what to believe instead",
    overview: "Financial literacy in Kenya is improving but still low. Persistent myths about money — how it works, how to build it, what the wealthy do differently — cause most Kenyans to work hard for money that does not accumulate. Understanding the truth about money is the foundation of financial independence.",
    sections: [
      { title: "Myth: Saving Alone Builds Wealth", content: "Reality: Saving is necessary but not sufficient. Inflation in Kenya averages 6-8% annually. A savings account earning 3% loses purchasing power in real terms. Money saved must be invested to beat inflation and build wealth. The formula: income → save a fixed percentage immediately → invest the savings → allow compound returns to do the work over time. Saving without investing is wealth preservation at best, slow loss at worst." },
      { title: "Myth: I Will Start Saving When I Earn More", content: "Reality: The habit of saving is established at low income. People who do not save 10% of KSh 30,000 do not save 10% of KSh 300,000 — their lifestyle expands to fill available income. Start the 10% savings habit immediately, regardless of income level. Compound interest rewards time above all else: KSh 5,000 per month at 12% annual return for 30 years = KSh 17 million. Starting 10 years later at KSh 10,000 per month produces less." },
      { title: "Myth: A Good Salary Means Financial Security", content: "Reality: Income is not wealth. Wealth is assets minus liabilities. A doctor earning KSh 500,000 monthly with a car loan, mortgage, and school fees commitments consuming 90% of income has less financial security than a teacher earning KSh 80,000 who saves and invests 30%. Financial security comes from the gap between what you earn and what you spend — and from turning that gap into assets." },
      { title: "Myth: Chama Is Enough", content: "Reality: Chamas (informal savings groups) are excellent for financial discipline and community. But most chamas cycle money rather than grow it — members take turns with the pooled amount, no compound growth occurs. Chamas that invest collectively in assets (real estate, unit trusts, shares) build wealth. Pure merry-go-round chamas are better than nothing but far less powerful than invested savings." },
      { title: "Myth: Sending Money Home Is the Right Priority", content: "Reality: Supporting family is a genuine obligation in Kenyan culture and should not be abandoned. But financially destroying yourself to support family members who could work is not sustainable for anyone. The aeroplane rule applies: put on your own oxygen mask first. Building your own financial security first enables you to support family more sustainably over the long term. A conversation with family about realistic support levels is often worth having." },
    ],
    kenya_context: "The National Treasury's financial inclusion strategy has made basic investment products accessible on mobile phones. But financial education remains insufficient — many Kenyans have M-Pesa but use it only for transactions, not savings or investment. The Kenya Bankers Association and various NGOs run financial literacy programmes. CMA's investor education resources are freely available. The information to build financial literacy is available — the challenge is habit change.",
    action_steps: [
      "Calculate your current savings rate — what percentage of your income are you saving?",
      "Move your savings into a money market fund that earns above inflation",
      "Set up an automatic monthly transfer to savings on the day your salary arrives",
      "Calculate your net worth: total assets minus total debts — do this quarterly",
      "Read I Will Teach You To Be Rich (Ramit Sethi) or The Automatic Millionaire (Bach) — adapt for Kenya",
    ],
    myths: [
      { myth: "Financial stress is just about not earning enough", truth: "Financial stress is primarily about not managing what you earn effectively. Studies consistently show that income increases alone do not resolve financial stress without behaviour change." },
    ],
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
