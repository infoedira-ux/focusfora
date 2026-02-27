"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

const SETBOOK_CONTENT: Record<string, any> = {
  "river-between": {
    title: "The River Between",
    author: "Ngũgĩ wa Thiong'o",
    year: "1965",
    emoji: "🌊",
    overview: "Set in the Kikuyu highlands of Kenya during the colonial era, The River Between tells the story of Waiyaki, a young man torn between two worlds — the traditional African community of Kameno and the Christian-influenced village of Makuyu, separated by the Honia river.",
    chapters: [
      { number: 1, title: "The Hills", summary: "The novel opens with a description of the two ridges, Kameno and Makuyu, separated by the Honia river. The river symbolises both division and potential unity. We learn of the prophecy of a saviour who will unite the ridges." },
      { number: 2, title: "Chege and Waiyaki", summary: "Chege reveals to his son Waiyaki that he is descended from the great seer Mugo wa Kibiro. He sends Waiyaki to the mission school to learn the 'white man's wisdom' so he can use it to save his people." },
      { number: 3, title: "The Mission School", summary: "Waiyaki attends Siriana Mission School where he meets Joshua's daughters, Muthoni and Nyambura. He excels academically and absorbs Western education while still holding onto his African identity." },
      { number: 4, title: "Muthoni's Choice", summary: "Muthoni, daughter of the strict Christian Joshua, shocks everyone by declaring she wants to undergo female circumcision — the traditional initiation rite. She wants to be both a Christian and a Kikuyu woman." },
      { number: 5, title: "The Circumcision", summary: "Muthoni undergoes the rite despite her father's furious opposition. The act represents her desire to reconcile tradition and Christianity. Her father disowns her completely." },
      { number: 6, title: "Muthoni's Death", summary: "Muthoni dies from complications after the circumcision. Her death deepens the rift between the two ridges and between Joshua and the traditional community. Waiyaki is devastated." },
      { number: 7, title: "Waiyaki the Teacher", summary: "Waiyaki returns from Siriana and establishes schools across the ridges. Education becomes his mission and his way of fulfilling the prophecy. The people call him Teacher." },
      { number: 8, title: "Love and Conflict", summary: "Waiyaki falls in love with Nyambura, Muthoni's sister. This love is forbidden — she is the daughter of his community's greatest enemy. Their relationship becomes a symbol of the possibility of unity." },
      { number: 9, title: "Kamau and Kinuthia", summary: "Kamau, jealous of Waiyaki, begins to plot against him. He represents those who use tradition as a weapon against progress. Kinuthia remains Waiyaki's loyal friend." },
      { number: 10, title: "The Kiama", summary: "The Kiama, a council of elders, demands that Waiyaki renounce Nyambura and prove his loyalty to tradition. Waiyaki tries to make them see that education and tradition can coexist." },
      { number: 11, title: "Betrayal and Judgement", summary: "Kamau exposes Waiyaki's relationship with Nyambura to the Kiama. Waiyaki is brought before the people and condemned. The novel ends ambiguously — Waiyaki's fate is uncertain, suggesting the ongoing struggle between tradition and modernity." },
    ],
    themes: [
      { title: "Education vs Tradition", content: "Waiyaki believes education is the tool for African liberation but struggles with whether Western education destroys African culture. The tension between acquiring the coloniser's knowledge and preserving indigenous identity runs throughout." },
      { title: "Unity and Division", content: "The Honia river both separates and connects Kameno and Makuyu. Ngũgĩ uses the river as a central symbol of division that could become unity. Waiyaki's greatest dream is to unite the two ridges." },
      { title: "Christianity and African Religion", content: "Joshua represents extreme Christianity that rejects all African tradition. Muthoni tries to reconcile both faiths and dies for it. Ngũgĩ presents Christianity as a colonial tool that divides communities." },
      { title: "The Role of the Saviour", content: "The prophecy of Mugo wa Kibiro sets up Waiyaki as a messianic figure. But he fails to fulfil the prophecy because he focuses on education and ignores politics. True liberation requires both." },
      { title: "Love Across Division", content: "Waiyaki and Nyambura's love represents the possibility of unity between the two ridges. Their relationship is ultimately destroyed by the community's inability to transcend division." },
      { title: "Colonialism", content: "Though the white colonisers appear only in the background, their influence is felt everywhere — in the mission schools, the churches, and the destruction of traditional society." },
    ],
    characters: [
      { name: "Waiyaki", role: "Protagonist", description: "The central character, descended from the prophet Mugo wa Kibiro. Educated, idealistic and visionary, he believes education will liberate his people. His fatal flaw is his inability to translate vision into political action." },
      { name: "Chege", role: "Waiyaki's Father", description: "The keeper of the prophecy. Sends Waiyaki to the mission school to learn the enemy's secrets. He represents the bridge between the ancient prophecy and the modern world." },
      { name: "Joshua", role: "Antagonist", description: "A fanatical Christian convert who rejects all African tradition. He disowns his daughter Muthoni for seeking circumcision. Represents the destructive extremism of religious conversion." },
      { name: "Muthoni", role: "Symbol of Reconciliation", description: "Joshua's daughter who wants to be both Christian and Kikuyu. Her desire for circumcision represents the longing for cultural wholeness. Her death shows the tragic cost of trying to bridge worlds." },
      { name: "Nyambura", role: "Love Interest", description: "Muthoni's sister who falls in love with Waiyaki. Unlike her father, she is open to love across divides. Her relationship with Waiyaki symbolises the possibility of unity." },
      { name: "Kamau", role: "Antagonist", description: "Waiyaki's jealous rival who betrays him to the Kiama. Represents those who use tradition and politics for personal gain rather than community good." },
      { name: "Kinuthia", role: "Loyal Friend", description: "Waiyaki's steadfast companion who supports his educational mission. Represents the ordinary person who believes in change." },
    ],
    quotes: [
      { quote: "The river was called Honia, which meant cure, or bring-back-to-life.", context: "Opening lines — establishing the river's symbolic significance as both barrier and healing force." },
      { quote: "Salvation shall come from the hills. A man shall arise and save the people in their hour of need.", context: "The prophecy of Mugo wa Kibiro — sets up the messianic expectation around Waiyaki." },
      { quote: "I want to be a woman made beautiful in the manner of the tribe.", context: "Muthoni explaining her desire for circumcision — her longing for cultural wholeness." },
      { quote: "Education is life. Education is everything.", context: "Waiyaki's central belief — his idealistic faith in education as liberation." },
      { quote: "The ridges were his enemies. How could he unite people who did not want to be united?", context: "Waiyaki's moment of despair — realising the depth of division he faces." },
    ],
    essays: [
      { question: "Discuss the role of education in The River Between.", points: ["Waiyaki sees education as the tool of liberation", "Chege wants Waiyaki to learn the enemy's wisdom to defeat them", "Education creates a new class that is caught between two worlds", "Education alone without political consciousness is insufficient — Waiyaki's failure", "Compare to Ngũgĩ's own experience with colonial education"] },
      { question: "How does Ngũgĩ use the River Honia as a symbol in the novel?", points: ["The river literally separates Kameno and Makuyu", "'Honia' means cure — ironic since it divides rather than heals", "The river represents the colonial division of African society", "Waiyaki's vision is to build a bridge — metaphorically unite the ridges", "The river could symbolise hope — it flows continuously, suggesting change is possible"] },
      { question: "Examine the theme of tradition versus modernity in The River Between.", points: ["Joshua represents extreme rejection of tradition", "The Kiama represents extreme defence of tradition", "Muthoni tries to reconcile both and dies", "Waiyaki tries to reconcile both and is condemned", "Ngũgĩ suggests neither extreme is healthy — balance is needed"] },
      { question: "Is Waiyaki a tragic hero? Discuss.", points: ["He has noble qualities — vision, intelligence, compassion", "He has a fatal flaw — idealism without political action", "He is brought down by forces beyond his control — the Kiama, Kamau", "His fate is ambiguous — neither fully tragic nor triumphant", "Compare to classical tragic hero structure"] },
    ],
  },
  "grain-of-wheat": {
    title: "A Grain of Wheat",
    author: "Ngũgĩ wa Thiong'o",
    year: "1967",
    emoji: "🌾",
    overview: "Set during the final days of Kenya's struggle for independence (Uhuru), A Grain of Wheat weaves together the stories of several villagers in Thabai who are preparing for independence celebrations while haunted by secrets, betrayals and trauma from the Mau Mau rebellion.",
    chapters: [
      { number: 1, title: "Four Days to Uhuru", summary: "The novel begins four days before Kenyan independence. We are introduced to Mugo, a reclusive man regarded as a hero by the village for his apparent suffering under colonialism. The village plans to honour him at the Uhuru celebrations." },
      { number: 2, title: "Gikonyo and Mumbi", summary: "We learn of Gikonyo and Mumbi's love story. Gikonyo was detained during the Emergency and Mumbi waited for him. But during his detention, Mumbi had a child with Karanja." },
      { number: 3, title: "The Detention", summary: "Through flashbacks we see the brutal conditions of British detention camps. Gikonyo confesses the Mau Mau oath to secure his release — an act of betrayal he carries with shame." },
      { number: 4, title: "Kihika the Hero", summary: "Kihika was the great freedom fighter of Thabai, hanged by the British. The village reveres him. But someone betrayed him to the authorities — and that secret drives the novel's central mystery." },
      { number: 5, title: "Mugo's Secret", summary: "In flashbacks we learn Mugo's true story. He is not a hero — he is the man who betrayed Kihika to the colonial authorities. His entire life since has been tormented by guilt." },
      { number: 6, title: "Karanja the Collaborator", summary: "Karanja worked with the colonial administration as a homeguard. He is despised by the community. At Uhuru he hopes for forgiveness and a new beginning but finds neither." },
      { number: 7, title: "Confession and Uhuru", summary: "At the Uhuru celebration, Mugo shocks everyone by publicly confessing that he betrayed Kihika. It is a moment of extraordinary moral courage. He is taken away to face justice. Independence arrives but with all its contradictions." },
    ],
    themes: [
      { title: "Betrayal and Guilt", content: "The novel is built around acts of betrayal — Mugo betraying Kihika, Gikonyo betraying the oath, Mumbi betraying her marriage. Ngũgĩ explores how guilt shapes and destroys individuals." },
      { title: "The Complexity of Heroism", content: "Kihika is the celebrated hero but was he truly selfless? Mugo is seen as a hero but is a traitor. Ngũgĩ questions simplistic notions of heroism and collaboration." },
      { title: "Independence and Disillusionment", content: "Uhuru arrives but brings disappointment. The new Kenya reproduces old inequalities. Independence is a grain of wheat — it must be buried and die before it can bear fruit." },
      { title: "Memory and Trauma", content: "The novel moves back and forth in time through characters' memories. The past cannot be escaped — it shapes every present moment. The detention camps leave permanent psychological wounds." },
      { title: "Community and Individual", content: "Characters struggle between their personal survival and their obligation to the community. Mugo's betrayal was self-preservation. Kihika sacrificed himself for the community." },
    ],
    characters: [
      { name: "Mugo", role: "Protagonist", description: "The novel's complex central character. Regarded as a hero, he is actually the man who betrayed Kihika. His eventual public confession is an act of moral courage that redeems him partially." },
      { name: "Kihika", role: "The Martyr", description: "The freedom fighter who was hanged by the British. His memory haunts the entire novel. He represents the ideal of selfless sacrifice for independence." },
      { name: "Gikonyo", role: "The Broken Man", description: "A skilled carpenter who was detained and broke under pressure, confessing the oath. Returns to find his wife has had a child with another man. His journey is about rebuilding." },
      { name: "Mumbi", role: "Kihika's Sister", description: "Gikonyo's wife who waited faithfully but was vulnerable in his absence. Her relationship with Karanja and her child represent the impossible choices people faced during the Emergency." },
      { name: "Karanja", role: "The Collaborator", description: "Worked with the colonial administration. Loves Mumbi. Represents those Kenyans who chose collaboration for survival. At Uhuru he finds himself homeless in his own country." },
      { name: "Wambui", role: "The Freedom Fighter", description: "An older woman who was active in the Mau Mau movement. She is determined that Kihika's betrayer must be found and punished even at Uhuru." },
    ],
    quotes: [
      { quote: "A grain of wheat must first die in the ground before it can bear fruit.", context: "The epigraph from the Bible — sets up the novel's central metaphor that sacrifice is necessary for new life." },
      { quote: "I have been asked to speak about Kihika. But what can I say about a man I betrayed?", context: "Mugo's confession at the Uhuru celebration — the novel's climactic moment of truth." },
      { quote: "We shall never have Uhuru without the blood of the people.", context: "Kihika — his belief that independence requires sacrifice." },
    ],
    essays: [
      { question: "Discuss the theme of betrayal in A Grain of Wheat.", points: ["Mugo betrays Kihika — the central betrayal", "Gikonyo betrays the oath under torture", "Mumbi 'betrays' her marriage during Gikonyo's absence", "Karanja betrays his community by collaborating", "Ngũgĩ presents betrayal as complex — often arising from fear and impossible circumstances"] },
      { question: "How does Ngũgĩ present the theme of independence and disillusionment?", points: ["Uhuru arrives but the celebrations feel hollow", "Old inequalities persist in the new Kenya", "The title suggests independence is a seed that must die before bearing fruit", "Characters expected liberation but found continuation of suffering", "The novel ends with tentative hope — Gikonyo and Mumbi may reconcile"] },
    ],
  },
};

const TABS = ["Overview", "Chapters", "Themes", "Characters", "Quotes", "Essays"];

export default function SetbookPage() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("Overview");
  const [expandedChapter, setExpandedChapter] = useState<number | null>(null);
  const [expandedEssay, setExpandedEssay] = useState<number | null>(null);

  const book = SETBOOK_CONTENT[id as string];

  if (!book) return (
    <div className="min-h-screen bg-offwhite flex items-center justify-center">
      <div className="text-center">
        <div className="text-5xl mb-4">📚</div>
        <p className="font-serif text-2xl text-aubergine mb-2">Coming Soon</p>
        <p className="text-[#5A4060] text-sm mb-6">We're writing the study guide for this book.</p>
        <Link href="/setbooks" className="ff-btn-primary">← All Set Books</Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-offwhite">
      <nav className="bg-aubergine px-6 md:px-12 py-4 flex justify-between items-center sticky top-0 z-10">
        <Link href="/setbooks" className="font-serif text-xl text-offwhite">
          Focus<span className="text-saffron">Fora</span>
        </Link>
        <Link href="/setbooks" className="text-offwhite/60 text-xs hover:text-saffron transition-colors uppercase tracking-wider">
          ← Set Books
        </Link>
      </nav>

      {/* Book header */}
      <div className="bg-aubergine px-6 md:px-12 py-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-saffron text-xs uppercase tracking-widest mb-2">{book.emoji} KCSE Set Book Study Guide</p>
          <h1 className="font-serif text-4xl md:text-5xl text-offwhite font-light mb-2">{book.title}</h1>
          <p className="text-offwhite/60 text-sm">{book.author} · {book.year}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-aubergine/10 sticky top-[57px] z-10">
        <div className="max-w-4xl mx-auto px-6 md:px-12 flex gap-1 overflow-x-auto">
          {TABS.map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`text-xs font-medium px-4 py-4 whitespace-nowrap border-b-2 transition-all ${
                activeTab === tab
                  ? "border-saffron text-aubergine"
                  : "border-transparent text-[#5A4060] hover:text-aubergine"
              }`}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 py-10">

        {activeTab === "Overview" && (
          <div>
            <h2 className="font-serif text-2xl text-aubergine mb-4">About the Book</h2>
            <p className="text-[#5A4060] leading-relaxed mb-8">{book.overview}</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { label: "Chapters covered", value: `${book.chapters?.length} chapters` },
                { label: "Themes analysed", value: `${book.themes?.length} themes` },
                { label: "Characters profiled", value: `${book.characters?.length} characters` },
                { label: "Essay questions", value: `${book.essays?.length} questions` },
              ].map(stat => (
                <div key={stat.label} className="bg-saffron-pale border border-aubergine/[0.06] rounded-sm p-4">
                  <div className="text-xs text-saffron uppercase tracking-wider mb-1">{stat.label}</div>
                  <div className="font-serif text-2xl text-aubergine">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Chapters" && (
          <div>
            <h2 className="font-serif text-2xl text-aubergine mb-6">Chapter Summaries</h2>
            <div className="space-y-3">
              {book.chapters?.map((ch: any) => (
                <div key={ch.number} className="bg-white border border-aubergine/[0.06] rounded-sm overflow-hidden">
                  <button
                    onClick={() => setExpandedChapter(expandedChapter === ch.number ? null : ch.number)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-saffron-pale transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="text-saffron font-serif text-lg font-light w-8">{ch.number}</span>
                      <span className="font-medium text-aubergine text-sm">{ch.title}</span>
                    </div>
                    <span className="text-aubergine/30 text-lg">{expandedChapter === ch.number ? "−" : "+"}</span>
                  </button>
                  {expandedChapter === ch.number && (
                    <div className="px-5 pb-5 border-t border-aubergine/5">
                      <p className="text-sm text-[#5A4060] leading-relaxed pt-4">{ch.summary}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Themes" && (
          <div>
            <h2 className="font-serif text-2xl text-aubergine mb-6">Themes & Symbolism</h2>
            <div className="space-y-4">
              {book.themes?.map((theme: any, i: number) => (
                <div key={i} className="bg-white border border-aubergine/[0.06] rounded-sm p-6">
                  <h3 className="font-serif text-lg text-aubergine mb-2 flex items-center gap-2">
                    <span className="text-saffron">✦</span> {theme.title}
                  </h3>
                  <p className="text-sm text-[#5A4060] leading-relaxed">{theme.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Characters" && (
          <div>
            <h2 className="font-serif text-2xl text-aubergine mb-6">Character Analysis</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {book.characters?.map((char: any, i: number) => (
                <div key={i} className="bg-white border border-aubergine/[0.06] rounded-sm p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif text-lg text-aubergine font-semibold">{char.name}</h3>
                    <span className="text-[10px] bg-saffron text-aubergine px-2 py-0.5 rounded-sm font-medium">{char.role}</span>
                  </div>
                  <p className="text-sm text-[#5A4060] leading-relaxed">{char.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Quotes" && (
          <div>
            <h2 className="font-serif text-2xl text-aubergine mb-6">Key Quotes for Exams</h2>
            <div className="space-y-4">
              {book.quotes?.map((q: any, i: number) => (
                <div key={i} className="bg-white border-l-4 border-saffron rounded-sm p-6">
                  <blockquote className="font-serif text-lg text-aubergine italic mb-3">
                    "{q.quote}"
                  </blockquote>
                  <p className="text-xs text-[#5A4060] font-medium uppercase tracking-wider">Context:</p>
                  <p className="text-sm text-[#5A4060] mt-1">{q.context}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Essays" && (
          <div>
            <h2 className="font-serif text-2xl text-aubergine mb-2">Essay Questions & Model Answers</h2>
            <p className="text-[#5A4060] text-sm font-light mb-6">Click each question to see suggested answer points.</p>
            <div className="space-y-4">
              {book.essays?.map((essay: any, i: number) => (
                <div key={i} className="bg-white border border-aubergine/[0.06] rounded-sm overflow-hidden">
                  <button
                    onClick={() => setExpandedEssay(expandedEssay === i ? null : i)}
                    className="w-full flex items-start justify-between p-5 text-left hover:bg-saffron-pale transition-colors">
                    <p className="font-medium text-aubergine text-sm pr-4">{i + 1}. {essay.question}</p>
                    <span className="text-aubergine/30 text-lg flex-shrink-0">{expandedEssay === i ? "−" : "+"}</span>
                  </button>
                  {expandedEssay === i && (
                    <div className="px-5 pb-5 border-t border-aubergine/5">
                      <p className="text-xs text-saffron uppercase tracking-wider mt-4 mb-3 font-medium">Suggested Answer Points:</p>
                      <ul className="space-y-2">
                        {essay.points.map((point: string, j: number) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-[#5A4060]">
                            <span className="text-saffron mt-0.5 flex-shrink-0">✦</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
