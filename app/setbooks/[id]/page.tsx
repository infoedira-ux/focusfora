"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

const SETBOOK_CONTENT: Record<string, any> = {
  "weep-not-child": {
    title: "Weep Not, Child",
    author: "Ngũgĩ wa Thiong'o",
    year: "1964",
    emoji: "😢",
    overview: "Ngũgĩ's first published novel, Weep Not Child is set during Kenya's Mau Mau rebellion of the 1950s. It follows young Njoroge, who believes education will save his family and his country, as the Emergency tears apart everything he loves. It is a coming-of-age story set against the brutal backdrop of colonial violence.",
    chapters: [
      { number: 1, title: "The Promise of Education", summary: "Young Njoroge is thrilled when his family scrapes together money to send him to school. Education represents hope — his mother Nyokabi believes it will lift the family out of poverty. Njoroge's optimism and faith in learning are established as his defining characteristics." },
      { number: 2, title: "The Land Question", summary: "Njoroge's father Ngotho works on land that was taken from his family by the white settler Mr Howlands. The resentment over lost land is the emotional core of the family's suffering. Ngotho believes the prophecy that the land will return." },
      { number: 3, title: "Mau Mau Rising", summary: "The Mau Mau rebellion intensifies. Njoroge's brothers Boro and Kamau are drawn into the freedom struggle. Boro, traumatised by World War II where he fought for Britain only to return to colonialism, is the most radicalised." },
      { number: 4, title: "School and Hope", summary: "Njoroge continues to excel at school, finding refuge in learning while the world outside grows violent. He develops feelings for Mwihaki, Mr Jacobo's daughter — their friendship crosses the divide between collaborator and freedom fighter families." },
      { number: 5, title: "Ngotho's Humiliation", summary: "Ngotho joins a workers' strike but it fails. He is beaten by Mr Howlands, the man who farms his ancestral land. The humiliation breaks something in the family's patriarch. His authority and spirit are visibly crushed." },
      { number: 6, title: "Arrest and Torture", summary: "The Emergency intensifies. Ngotho is arrested and tortured by colonial authorities. Njoroge's brother Boro kills Jacobo, believing him a traitor. The family is torn apart by the violence that now touches everyone." },
      { number: 7, title: "The End of Innocence", summary: "Njoroge is forced to leave school. His father dies from torture injuries. Boro is captured and likely faces execution. Njoroge, stripped of his faith in education and God, attempts suicide. He is saved by his mothers. The novel ends bleakly — the Emergency has destroyed his world." },
    ],
    themes: [
      { title: "Education as Hope and Disillusionment", content: "Njoroge's faith in education as salvation is the novel's emotional engine. He believes schooling will save his family and his country. By the end, education has not saved anything — the Emergency destroys his world regardless of his academic promise." },
      { title: "Land and Identity", content: "The theft of Ngotho's ancestral land by Howlands is the root cause of all the family's suffering. Land is not just economic — it is spiritual identity for the Kikuyu. The land question drives men to the Mau Mau and drives the colonial response." },
      { title: "The Cost of Colonial Violence", content: "The Emergency destroys families indiscriminately. The innocent suffer alongside the guilty. Njoroge loses his father, his brothers, his education and his faith — all collateral damage of colonialism's brutal final phase." },
      { title: "Faith and Disillusionment", content: "Njoroge is deeply religious and believes God has a special plan for him. His faith sustains him through hardship. But when everything is taken, his faith collapses with everything else — suggesting that colonialism destroys even the spiritual resources of its victims." },
      { title: "The Father-Son Relationship", content: "Ngotho's humiliation and death represent the destruction of African patriarchal authority by colonialism. His inability to protect his family or reclaim his land emasculates him. Njoroge inherits a broken legacy." },
    ],
    characters: [
      { name: "Njoroge", role: "Protagonist", description: "A sensitive, intelligent boy whose faith in education and God is tested to destruction by the Emergency. His attempted suicide at the end is the novel's most devastating moment — the death of innocence and hope." },
      { name: "Ngotho", role: "The Father", description: "Works on his own stolen ancestral land as a squatter. His dignity is repeatedly destroyed by colonialism. His death from torture injuries represents the fate of an entire generation of Kenyan men." },
      { name: "Boro", role: "The Radicalised Son", description: "Fought for Britain in World War II and returned to find colonialism unchanged. His rage transforms into Mau Mau militancy. He kills Jacobo and faces execution — the novel's most tragic arc." },
      { name: "Mwihaki", role: "Love Interest", description: "Daughter of Jacobo, the African collaborator. Her friendship and love for Njoroge crosses family divides. Their relationship represents the possibility of human connection across political division." },
      { name: "Mr Howlands", role: "The Coloniser", description: "The white settler who farms Ngotho's stolen land. Complex — he understands the land's meaning but refuses to relinquish it. His relationship with the land mirrors Ngotho's, which makes their conflict more tragic." },
    ],
    quotes: [
      { quote: "Weep not, child, for he who has fought and lost lives to fight again.", context: "The epigraph — from a Whitman poem. Sets up the novel's exploration of loss and the possibility of continuing despite defeat." },
      { quote: "Education was everything. A man with education could do anything.", context: "Njoroge's foundational belief — which the novel systematically dismantles." },
      { quote: "The land was his — he would never rest till the white man left his land.", context: "Ngotho — capturing the spiritual dimension of the land question for the Kikuyu." },
    ],
    essays: [
      { question: "Discuss the role of education in Weep Not, Child.", points: ["Education is Njoroge's central hope and the family's sacrifice", "It represents upward mobility and escape from colonial poverty", "But education cannot protect against colonial violence — the Emergency destroys everything regardless", "Njoroge's academic promise counts for nothing when he is forced to leave school", "Ngũgĩ critiques the colonial education system as ultimately serving colonial interests"] },
      { question: "How does Ngũgĩ present the theme of land in the novel?", points: ["Ngotho's stolen land is the root cause of all suffering", "Land is not merely economic — it is spiritual and ancestral identity", "Howlands farms the same land with the same attachment — a tragic irony", "The land question drives the Mau Mau rebellion in the novel", "Recovery of land is the unfulfilled promise at the novel's end"] },
      { question: "Is Njoroge a tragic hero? Discuss.", points: ["He has noble qualities — intelligence, faith, sensitivity and hope", "His fatal flaw is his passivity — he believes others will act while he studies", "He is destroyed by forces entirely beyond his control", "His attempted suicide is the tragic hero's fall", "Unlike classical tragedy, there is no catharsis — only bleak survival"] },
    ],
  },
  "caucasian-chalk": {
    title: "The Caucasian Chalk Circle",
    author: "Bertolt Brecht",
    year: "1944",
    emoji: "🎭",
    overview: "Bertolt Brecht's epic theatre masterpiece, set in the Caucasus. A servant girl Grusha rescues and raises a noble child abandoned during a revolution, risking everything for a child not her own. The play uses Brecht's signature techniques of alienation to make audiences think rather than feel, questioning justice, motherhood and social order.",
    chapters: [
      { number: 1, title: "Prologue — The Dispute", summary: "Soviet collective farmers dispute ownership of a valley after World War II. A storyteller proposes a parable to help resolve it — the ancient story of the Chalk Circle." },
      { number: 2, title: "The Noble Child", summary: "Governor Azdak of Grusinia is executed during a revolution. His wife Natella flees, abandoning her infant son Michael in the chaos. The palace burns." },
      { number: 3, title: "Grusha's Flight", summary: "Grusha, a kitchen maid, rescues baby Michael and flees from the pursuing Ironshirts. She crosses a crumbling bridge, buys milk for the baby, finds shelter — each act of care increasing her attachment and danger." },
      { number: 4, title: "The Northern Mountains", summary: "Grusha takes Michael to her brother Lavrenti's home. To provide the child legitimacy, she marries a supposedly dying peasant Jussup — only for him to recover when the war ends. Her real love Simon returns from war." },
      { number: 5, title: "Azdak the Judge", summary: "In a parallel story, Azdak — a village scrivener — accidentally shelters the fleeing Grand Duke. When the revolution is suppressed, he is made judge as a joke. He proves an unexpectedly wise and humane judge who always sides with the poor." },
      { number: 6, title: "The Chalk Circle Test", summary: "Natella returns to reclaim Michael for his inheritance. Grusha and Natella both claim motherhood. Azdak draws a chalk circle, places Michael in the centre and orders both women to pull. Grusha releases rather than hurt the child. Azdak awards Michael to Grusha — the true mother is the one who loves, not the one who bore him." },
    ],
    themes: [
      { title: "True Motherhood and Love", content: "The central question: what makes a true mother? Brecht argues it is not biology but care, sacrifice and love. Grusha mothers Michael through enormous sacrifice. Natella abandoned him. The chalk circle test rewards love over birth right." },
      { title: "Justice and the Law", content: "Azdak's absurd justice is more truly just than formal law. He consistently sides with the poor against the powerful. Brecht suggests that official justice serves the ruling class — real justice requires turning things upside down." },
      { title: "Alienation Effect (Verfremdungseffekt)", content: "Brecht deliberately prevents audience emotional identification. Songs interrupt action, the storyteller narrates events, characters speak directly to the audience. He wants audiences to think critically about the story's social lessons, not lose themselves in emotion." },
      { title: "Social Class and Power", content: "The revolution exposes the arbitrariness of class power. Natella's claim rests on birth and property, not love. The Ironshirts serve whoever pays them. Brecht presents class society as fundamentally unjust." },
      { title: "Practicality versus Idealism", content: "Grusha's journey is a series of practical choices made under impossible conditions. Each choice is morally tested — when is survival more important than principle? Brecht explores ethics in extreme circumstances." },
    ],
    characters: [
      { name: "Grusha", role: "Protagonist", description: "A kitchen maid whose decision to rescue baby Michael transforms her life. Her journey is one of enormous practical heroism — she sacrifices safety, love and comfort for a child not her own. The play's moral centre." },
      { name: "Azdak", role: "The Judge", description: "A village scrivener accidentally elevated to judge. Crude, corrupt by conventional standards but instinctively just toward the poor. His judgements consistently favour human need over legal right. One of Brecht's most memorable characters." },
      { name: "Michael", role: "The Child", description: "The abandoned noble child who becomes the centre of the custody dispute. He barely speaks — he is a symbol of innocence that the play asks both characters and audience to fight for." },
      { name: "Simon", role: "Grusha's Love", description: "A soldier who loves Grusha and goes to war. He returns to find her apparently married with a child. His faith in Grusha and ultimate reunion represents the human cost of historical upheaval." },
      { name: "Natella", role: "The Governor's Wife", description: "Abandons Michael to save her dresses. Returns to claim him for his inheritance. She represents property-based motherhood — the child as asset rather than person loved." },
    ],
    quotes: [
      { quote: "What there is shall belong to those who are good for it.", context: "The play's central moral — things belong to those who use them well and care for them, not those who own them by birth or law." },
      { quote: "Terrible is the temptation to do good.", context: "Grusha — on the moment she decides to take Michael, knowing the danger. One of Brecht's most famous lines." },
      { quote: "The law was made for the exploitation of those who do not understand it, by those who do.", context: "Azdak — his philosophy of justice that underpins all his eccentric judgements." },
    ],
    essays: [
      { question: "What is the significance of the chalk circle test in the play?", points: ["It resolves the central conflict between biological and chosen motherhood", "Grusha releases Michael — love over possession", "Azdak reverses the original Solomon story's logic", "The test makes visible what the whole play has argued — love creates true parenthood", "Brecht uses it to make a broader social argument about ownership and belonging"] },
      { question: "How does Brecht use Azdak to present ideas about justice?", points: ["Azdak is corrupt by conventional standards but just by human ones", "He always sides with the poor, the weak, the outcast", "His justice is improvisational and contextual — not rule-bound", "He represents Brecht's argument that official law serves the powerful", "His removal at the end suggests true justice is always temporary in class society"] },
      { question: "Discuss Brecht's use of the alienation effect in the play.", points: ["Songs interrupt action to make audiences reflect rather than feel", "The storyteller narrates events, distancing us from characters", "The prologue frame reminds us it is a story with a lesson", "Characters address the audience directly at key moments", "Brecht wants critical engagement not emotional immersion"] },
    ],
  },
  "blossoms-savannah": {
    title: "Blossoms of the Savannah",
    author: "Henry Ole Kulet",
    year: "2008",
    emoji: "🌸",
    overview: "Blossoms of the Savannah is a contemporary Kenyan novel set in Maasailand. It follows sisters Resian and Taiyo who dream of education and freedom but face forced female genital mutilation and early marriage. Their struggle against these practices, supported by their father Ole Kaelo's conflicted modernism, is a powerful exploration of tradition, gender and human rights.",
    chapters: [
      { number: 1, title: "The Move to Nasila", summary: "The Kaelo family moves from Nakuru to their ancestral Maasai home in Nasila. The sisters Resian and Taiyo are excited but quickly discover the conservative traditions they must now navigate. Their father has modernist values but is under pressure from community elders." },
      { number: 2, title: "The Dreams of the Sisters", summary: "Resian and Taiyo dream of going to Egerton University. They are bright, ambitious girls whose aspirations clash with community expectations that they will be circumcised and married. Taiyo is musical; Resian is the stronger fighter." },
      { number: 3, title: "Oloisudori's Threat", summary: "Oloisudori, a wealthy but brutal businessman, demands Resian as a wife. He is connected to criminal networks and the family is threatened. Ole Kaelo is torn between protecting his daughter and the powerful man's pressure." },
      { number: 4, title: "The Circumcision Pressure", summary: "Community elders pressure the family to have the girls circumcised. Without the rite, they are considered unfit for marriage and a source of shame. Ole Kaelo's modern education conflicts with his need for community acceptance." },
      { number: 5, title: "Taiyo's Ordeal", summary: "Taiyo is forcibly circumcised. The trauma is depicted with harrowing clarity. Her dream of becoming a singer is threatened. Resian vows to fight and flee." },
      { number: 6, title: "Escape and Rescue", summary: "Resian escapes with the help of Nabaru, a herdswoman, and reaches Minik ene Nkoitoi — the Inkorienk — a Maasai woman who runs a ranch and advocates against FGM. Resian is saved and her university dreams become possible." },
    ],
    themes: [
      { title: "Female Genital Mutilation and Human Rights", content: "FGM is the novel's central subject. Ole Kulet presents it as a harmful practice that destroys girls' futures and health. He uses fiction to argue for its abolition while honestly depicting why communities maintain it." },
      { title: "Education as Liberation", content: "Education is the sisters' dream and their only route to freedom. Resian and Taiyo understand that university is their escape from circumcision and forced marriage. The novel presents education as a fundamental right." },
      { title: "Tradition versus Modernity", content: "Ole Kaelo embodies the impossible tension — educated and modern yet bound to community tradition. His failure to fully protect his daughters shows the limitations of individual modernism against communal pressure." },
      { title: "Gender and Power", content: "The novel is fundamentally about male power over female bodies. Oloisudori treats Resian as property. The elders treat the sisters as community assets. Minik represents the possibility of female power and solidarity." },
      { title: "Community Pressure and Individual Agency", content: "Both Ole Kaelo and the sisters are caught between individual desire and community expectation. The novel explores how tradition enforces conformity and how individuals find spaces for resistance." },
    ],
    characters: [
      { name: "Resian", role: "Protagonist", description: "The stronger and more rebellious of the two sisters. Her refusal to accept circumcision and forced marriage drives the plot. Her escape and arrival at Minik's ranch is the novel's triumphant conclusion." },
      { name: "Taiyo", role: "Resian's Sister", description: "Musical and artistic, she dreams of becoming a singer. Her forced circumcision is the novel's most painful scene. She is the cost of Resian's eventual freedom." },
      { name: "Ole Kaelo", role: "The Father", description: "A modernised Maasai man who cannot fully protect his daughters from tradition. His conflict between his values and community pressure makes him a tragic figure — neither villain nor hero." },
      { name: "Oloisudori", role: "The Antagonist", description: "A wealthy, connected and brutal man who demands Resian as his wife. He represents the patriarchal power that treats women as commodities." },
      { name: "Minik ene Nkoitoi", role: "The Rescuer", description: "Called 'the Inkorienk' — a powerful Maasai woman who runs a ranch and actively fights against FGM. She represents hope — proof that Maasai women can have power, wealth and dignity." },
    ],
    quotes: [
      { quote: "A flower cannot blossom without sunshine, and a woman cannot live without love.", context: "On the novel's central metaphor — the blossoms of the savannah are women whose potential is destroyed by harmful traditions." },
      { quote: "I will not be cut. I will go to university. No one can stop me.", context: "Resian — her declaration of resistance that drives the novel's second half." },
      { quote: "The greatest gift a father can give his daughter is education.", context: "The novel's central argument about the relationship between education and female liberation." },
    ],
    essays: [
      { question: "Discuss how Ole Kulet presents the theme of tradition versus modernity in Blossoms of the Savannah.", points: ["Ole Kaelo represents the modernised African torn between worlds", "The elders represent tradition as communal enforcement mechanism", "Resian and Taiyo represent the new generation demanding choice", "Minik shows that modernity and Maasai identity can coexist", "Ole Kulet argues tradition must be questioned when it harms individuals"] },
      { question: "How does Ole Kulet use the sisters' contrasting fates to make his argument about FGM?", points: ["Taiyo's circumcision represents the cost of tradition's victory", "Resian's escape represents the possibility of resistance", "The contrast between their fates makes the argument without polemic", "Both sisters' dreams — music and university — are threatened by the same force", "Ole Kulet uses fiction to argue what direct advocacy cannot always achieve"] },
      { question: "Examine the role of Minik ene Nkoitoi as a symbol of hope in the novel.", points: ["She is a Maasai woman who has achieved power and independence", "Her ranch provides sanctuary for girls fleeing FGM and forced marriage", "She proves Ole Kulet's argument that tradition and dignity can coexist", "She is the answer to Ole Kaelo's failure — female solidarity succeeds where male ambivalence fails", "Her character suggests the solution to gender oppression must come from within the community"] },
    ],
  },
  "whale-rider": {
    title: "The Whale Rider",
    author: "Witi Ihimaera",
    year: "1987",
    emoji: "🐋",
    overview: "A New Zealand novel by Māori author Witi Ihimaera. Young Kahu is destined to lead her people as the descendant of the legendary whale rider Paikea, but her grandfather Koro refuses to acknowledge her because she is a girl. The novel weaves Māori mythology with a contemporary story about tradition, gender and the fight for one's rightful place.",
    chapters: [
      { number: 1, title: "The Ancient Legend", summary: "The novel opens with the legend of Paikea, who rode a whale to Aotearoa New Zealand and founded the Ngāti Konohi tribe. His descendants are expected to lead. The tribe is waiting for a new leader — a firstborn son." },
      { number: 2, title: "Kahu's Birth", summary: "Kahu is born — a girl — and her twin brother is stillborn. Her grandfather Koro is devastated. He wanted a male heir to continue Paikea's line. Kahu's father Porourangi leaves New Zealand in grief and disappointment." },
      { number: 3, title: "Kahu and Koro", summary: "Kahu grows up devoted to her grandfather despite his rejection of her. She follows him everywhere, learns everything she can, desperately seeking his love and approval. Koro's blindness to her gifts is the novel's central tragedy." },
      { number: 4, title: "The School for Boys", summary: "Koro establishes a school to find the new leader among the village boys. Kahu is explicitly excluded. She watches from outside, absorbs everything and clearly outperforms the boys — but Koro refuses to see it." },
      { number: 5, title: "The Whales Beach", summary: "A huge pod of whales beaches themselves — an omen of the tribe's spiritual crisis. The people try to save them but cannot. Kahu speaks to the lead whale in a language only she knows. She rides the whale back to sea, fulfilling the ancient prophecy." },
      { number: 6, title: "Koro's Recognition", summary: "Kahu nearly dies from the cold sea. Koro finally recognises her as the chosen leader. His grief at almost losing her breaks his patriarchal blindness. The tribe's future is secured — led by a girl." },
    ],
    themes: [
      { title: "Gender and Leadership", content: "The central conflict is Koro's refusal to recognise female leadership despite clear evidence of Kahu's gifts. Ihimaera argues that tradition must evolve — excluding women from leadership is a failure of tradition, not its fulfilment." },
      { title: "Tradition and Change", content: "The novel respects Māori tradition deeply while arguing it must adapt. Koro's rigid interpretation of tradition nearly destroys the tribe. True tradition is about the spirit, not the letter." },
      { title: "The Natural World and Spiritual Connection", content: "Kahu's connection to whales is the novel's supernatural heart. Māori spirituality sees humans as part of nature. The whales' beaching represents the tribe's spiritual sickness — disconnection from its true leader." },
      { title: "Intergenerational Love and Conflict", content: "Kahu's love for her grandfather despite his rejection is deeply moving. Koro's eventual recognition is the emotional climax. Ihimaera explores how love can transcend even deep prejudice." },
      { title: "Identity and Belonging", content: "Kahu must claim her identity and destiny against all opposition. Her journey is about knowing your worth even when authority denies it. She never gives up her love for Koro or her certainty about who she is." },
    ],
    characters: [
      { name: "Kahu (Kahutia Te Rangi)", role: "Protagonist", description: "The chosen leader who must prove herself against her grandfather's prejudice. Her love for Koro despite his rejection, and her ultimate riding of the whale, make her one of children's literature's most compelling heroines." },
      { name: "Koro Apirana", role: "The Grandfather", description: "The tribe's leader who cannot see past his gender prejudice to recognise Kahu's destiny. His blindness is not malicious but tragically stubborn. His eventual recognition is the emotional heart of the novel." },
      { name: "Nanny Flowers", role: "The Grandmother", description: "Kahu's champion who sees her granddaughter's gifts clearly. She represents the wisdom that Koro's patriarchal pride prevents him from accessing. Her support sustains Kahu through rejection." },
      { name: "Porourangi", role: "Kahu's Father", description: "Leaves New Zealand after Kahu's birth, unable to face his father's disappointment. His absence adds to Kahu's burden. His eventual return is part of the novel's healing." },
    ],
    quotes: [
      { quote: "E kui ma, e koro ma, it is not the death of the old that we should mourn but rather the failure to cherish the new.", context: "On the novel's central argument — tradition must embrace new forms, including female leadership." },
      { quote: "The little girl wanted so much to please her grandfather. But he would not see her.", context: "The heartbreaking summary of Kahu's situation — love denied by prejudice." },
      { quote: "She was the one. She had always been the one.", context: "The novel's revelation — Kahu was destined to lead from birth, regardless of her gender." },
    ],
    essays: [
      { question: "How does Ihimaera use Kahu's relationship with Koro to explore the theme of tradition versus change?", points: ["Koro represents tradition rigidly interpreted — only a male can lead", "Kahu represents tradition's true spirit — leadership through gifts and destiny", "Their love makes the conflict more painful and the resolution more powerful", "Koro's blindness nearly destroys the tribe — showing the cost of rigid tradition", "His recognition of Kahu suggests tradition can evolve without being abandoned"] },
      { question: "Discuss the significance of the whale in the novel.", points: ["Whales are the tribe's ancestral connection — Paikea rode one to New Zealand", "The beaching represents spiritual crisis and leadership vacuum", "Kahu's ability to communicate with the whale proves her destiny", "Her riding the whale home fulfils the ancient prophecy in female form", "Ihimaera uses the whale to bridge mythology and contemporary story"] },
      { question: "Is The Whale Rider a feminist novel? Discuss.", points: ["It explicitly argues against gender discrimination in leadership", "Kahu must fight tradition and authority to claim her rightful place", "Nanny Flowers represents female wisdom overlooked by patriarchal tradition", "But the novel is also deeply respectful of Māori tradition overall", "Ihimaera argues for inclusion within tradition rather than rejection of it"] },
    ],
  },
  "parliament-owls": {
    title: "Parliament of Owls",
    author: "Compiled by various Kenyan authors",
    year: "2010s",
    emoji: "🦉",
    overview: "Parliament of Owls is a collection of short stories used as a Kenya Certificate of Secondary Education set text. The anthology brings together stories exploring Kenyan social issues including corruption, family, tradition, urban life and personal struggles. Each story offers a window into different aspects of Kenyan society.",
    chapters: [
      { number: 1, title: "The Parliament Metaphor", summary: "The title story uses owls — traditionally symbols of wisdom in Western culture but of ill omen in many African traditions — to satirise corrupt leadership. Those in power present themselves as wise while causing harm." },
      { number: 2, title: "Urban Stories", summary: "Several stories deal with life in Nairobi — the struggles of urban migration, poverty, crime and the gap between rich and poor. These stories capture the texture of modern Kenyan urban experience with sharp social observation." },
      { number: 3, title: "Rural and Traditional Life", summary: "Other stories return to village settings and explore how tradition operates, how communities enforce norms and how individuals navigate between old and new expectations." },
      { number: 4, title: "Family and Relationships", summary: "Stories about marriage, parenthood, betrayal and love. These more intimate narratives explore personal relationships against the backdrop of social change." },
    ],
    themes: [
      { title: "Corruption and Leadership", content: "Several stories satirise political corruption and the gap between leaders' rhetoric and reality. The owl parliament metaphor captures leaders who appear wise but cause harm." },
      { title: "Tradition and Modernity", content: "The anthology spans rural and urban, traditional and modern Kenya. Stories explore how individuals navigate between these worlds and what is lost and gained in the transition." },
      { title: "Social Inequality", content: "The gap between rich and poor, urban and rural, educated and uneducated runs through many stories. The anthology gives voice to those usually marginalised from official narratives." },
      { title: "Gender and Family", content: "Several stories deal with gender dynamics, marriage expectations and family conflict. Female characters often navigate between personal desire and communal expectation." },
    ],
    characters: [
      { name: "Various Protagonists", role: "Multiple", description: "As an anthology, the collection features many different protagonists across stories — students, farmers, politicians, mothers, children. Each story's characters illuminate different aspects of Kenyan social experience." },
    ],
    quotes: [
      { quote: "Those who hoot loudest in the parliament of owls are not always the wisest.", context: "Central satirical metaphor — apparent wisdom and real wisdom are different things in corrupt leadership." },
    ],
    essays: [
      { question: "How do the stories in Parliament of Owls reflect Kenyan social realities?", points: ["Stories capture urban Nairobi — migration, poverty, inequality", "Rural stories show tradition under pressure from modernity", "Corruption is a repeated target of satire across multiple stories", "Family relationships reflect broader social tensions", "The anthology as a form allows multiple voices and perspectives"] },
      { question: "Discuss the use of satire in Parliament of Owls.", points: ["The owl parliament metaphor sets up the satirical frame", "Leaders are presented as appearing wise while being harmful", "Satire allows criticism of power that direct statement might not", "Compare satirical techniques across different stories in the anthology", "Satire serves a social function — it names what cannot be named directly"] },
    ],
  },
  "inheritance": {
    title: "Inheritance",
    author: "David Mulwa",
    year: "2004",
    emoji: "🏛️",
    overview: "David Mulwa's Inheritance is a political play set in the fictional African state of Kutula. It explores the post-colonial inheritance of corruption — how African leaders reproduce colonial oppression after independence. King Lacuna Kasoo rules tyrannically while his people starve, and a foreign mining company exploits the country's resources with his complicity.",
    chapters: [
      { number: 1, title: "Kutula at Independence", summary: "The play opens showing Kutula's political situation. King Lacuna Kasoo rules with colonial-era methods — suppression, corruption and collaboration with foreign interests. The people suffer while the elite prosper." },
      { number: 2, title: "The Mining Deal", summary: "Lacuna negotiates with foreign mining company Goldburg International. He allows exploitation of Kutula's resources in exchange for personal enrichment. His advisor Judas facilitates the corrupt deal." },
      { number: 3, title: "The People's Suffering", summary: "Ordinary Kutulans suffer poverty, oppression and hopelessness. The contrast between the ruling elite's wealth and the people's misery is sharply drawn. Lulu and Sangoi represent the suffering populace." },
      { number: 4, title: "Resistance and Betrayal", summary: "A resistance movement emerges but is betrayed from within. Mulwa shows how colonialism creates psychological damage — some Africans internalise the oppressor's values and become their instruments." },
      { number: 5, title: "The Reckoning", summary: "The contradictions of Lacuna's rule intensify. The play ends with ambiguity — change is demanded but the forces maintaining the status quo are powerful. The inheritance of colonialism is not easily escaped." },
    ],
    themes: [
      { title: "Neo-colonialism", content: "The most important theme. Mulwa shows that formal independence does not end colonial exploitation — it continues through African leaders who serve foreign interests. Goldburg International exploits Kutula's resources exactly as colonial companies did." },
      { title: "The Betrayal of Independence", content: "Like Imbuga's Betrayal in the City, Inheritance shows African leaders betraying the ideals of independence. Lacuna is the coloniser in a black skin — he has inherited the methods of oppression along with power." },
      { title: "Corruption and Greed", content: "Personal enrichment at national expense is Lacuna's governing principle. The corruption is total — political, economic and moral. Judas represents those who facilitate corruption for personal gain." },
      { title: "Foreign Exploitation", content: "Goldburg International represents continued Western economic exploitation of Africa. They need a corrupt African leader as their instrument. The relationship is mutually beneficial for the elites and catastrophic for ordinary people." },
      { title: "Hope and Resistance", content: "Despite the darkness, Mulwa suggests resistance is possible. The suffering people are not passive — they seek change. The question is whether structural change can overcome entrenched corruption." },
    ],
    characters: [
      { name: "King Lacuna Kasoo", role: "Antagonist/Ruler", description: "The post-colonial dictator who has inherited colonial methods of rule. His collaboration with foreign capital makes him a neo-colonial figure. He is the embodiment of the betrayal of African independence." },
      { name: "Judas Iscariot Bengo", role: "The Collaborator", description: "Lacuna's advisor whose biblical name signals his function — betrayer. He facilitates the corrupt deals between Lacuna and foreign interests. His name is Mulwa's clearest allegorical signal." },
      { name: "Lulu and Sangoi", role: "The People", description: "Ordinary Kutulans who represent the suffering populace. Their lives show the human cost of Lacuna's corruption. They seek change but are powerless against the entrenched system." },
      { name: "Robert Rollerstone", role: "The Foreign Exploiter", description: "Representative of Goldburg International. He needs African political corruption to access resources — he and Lacuna are mutually dependent. He represents continued Western economic imperialism." },
    ],
    quotes: [
      { quote: "What we have inherited from the colonialists is not freedom — it is the skill of oppression.", context: "The play's central argument — African leaders have inherited colonial methods along with political power." },
      { quote: "Independence is a mask. Behind it, the same face looks out.", context: "On neo-colonialism — formal independence disguises continued exploitation and oppression." },
    ],
    essays: [
      { question: "How does Mulwa present the theme of neo-colonialism in Inheritance?", points: ["Lacuna rules with colonial methods — suppression, corruption, exploitation", "Goldburg International continues economic extraction begun under colonialism", "The relationship between Lacuna and Rollerstone mirrors colonial governor and metropolitan power", "African independence has changed the face of power but not its substance", "Mulwa argues true independence requires economic as well as political liberation"] },
      { question: "Compare the presentation of corrupt leadership in Inheritance and Betrayal in the City.", points: ["Both plays use fictional African states to critique real post-colonial regimes", "Boss and Lacuna both betray independence ideals", "Imbuga focuses on political repression; Mulwa adds economic exploitation", "Both use ordinary citizens to show the human cost of corrupt leadership", "Both end ambiguously — suggesting critique without easy resolution"] },
    ],
  },

  "petals-of-blood": {
    title: "Petals of Blood",
    author: "Ngũgĩ wa Thiong'o",
    year: "1977",
    emoji: "🌺",
    overview: "Ngũgĩ's most ambitious novel, set in post-independence Kenya. Four characters — Munira, Abdulla, Wanja and Karega — journey from the village of Ilmorog to Nairobi, watching their country's independence dreams turn into exploitation by a new African elite. Three directors of a brewery are murdered and the four are suspects. The novel is a searing indictment of neo-colonialism.",
    chapters: [
      { number: 1, title: "The Murder Investigation", summary: "Three directors of the Theng'eta Brewery are found murdered. Munira, Abdulla, Wanja and Karega are arrested as suspects. The novel unfolds in flashback as each tells their story to the investigating inspector." },
      { number: 2, title: "Ilmorog — The Village", summary: "The four characters have come together in Ilmorog, a forgotten village. Munira is a teacher. Abdulla runs a shop. Wanja is a barmaid with a mysterious past. Karega is Munira's student-turned-colleague. The village is poor and overlooked by the new Kenyan government." },
      { number: 3, title: "The Drought and the Journey", summary: "Drought devastates Ilmorog. The community decides to march to Nairobi to petition their MP. The journey is epic — through wilderness, bureaucracy and the shocking wealth of Nairobi's elite. Their MP has forgotten them entirely." },
      { number: 4, title: "The Transformation of Ilmorog", summary: "After the journey attracts attention, businessmen and politicians discover Ilmorog's potential. The village is 'developed' — but for profit, not the people. The poor are displaced. Wanja opens a bar and then a brothel to survive. The Theng'eta Brewery is built on stolen community land." },
      { number: 5, title: "The Characters' Histories", summary: "Through flashbacks we learn each character's past. Wanja's child died. Abdulla fought in the Mau Mau. Karega discovers his brother was a freedom fighter hanged by colonists. Each history shows how colonialism and its aftermath destroyed lives." },
      { number: 6, title: "The Murders and Resolution", summary: "The murdered brewery directors were corrupt exploiters of the community. The novel's resolution reveals the murderer and the complex web of personal and political motives. Karega emerges as the voice of revolutionary hope." },
    ],
    themes: [
      { title: "Neo-colonialism and Class Betrayal", content: "Post-independence Kenya reproduces colonial exploitation with African faces. The new elite — politicians, lawyers, businessmen — exploit the poor exactly as the colonisers did. Ngũgĩ argues independence without economic transformation is meaningless." },
      { title: "The Destruction of Community", content: "Ilmorog's transformation from village to industrial town destroys community bonds. Development serves capital not people. The original villagers become squatters in their own land." },
      { title: "Women and Exploitation", content: "Wanja's journey from barmaid to prostitute to businesswoman shows how capitalism exploits women's bodies. She is both victim and, ultimately, an agent of resistance. Her complexity is one of the novel's greatest achievements." },
      { title: "Religion and False Consciousness", content: "Munira turns to religious fundamentalism as an escape from political reality. Ngũgĩ presents religion as a tool that diverts the poor from understanding their exploitation." },
      { title: "Revolutionary Consciousness", content: "Karega's journey toward revolutionary politics is the novel's hopeful strand. Through reading, organising and understanding history, he develops consciousness that names the system and demands its transformation." },
    ],
    characters: [
      { name: "Karega", role: "The Revolutionary", description: "A teacher who develops revolutionary political consciousness. His journey from confused young man to committed organiser represents the novel's hopeful argument — understanding leads to resistance." },
      { name: "Wanja", role: "The Survivor", description: "The most complex character — beautiful, traumatised, resourceful. Her transformation from barmaid to prostitute to murderer traces the human cost of neo-colonial capitalism on women specifically." },
      { name: "Munira", role: "The Escapist", description: "A teacher who retreats into religious fundamentalism rather than face social reality. He is ultimately revealed as the murderer — his act a confused religious rather than political one." },
      { name: "Abdulla", role: "The Forgotten Fighter", description: "A Mau Mau veteran reduced to running a small shop in a forgotten village. He represents the generation that fought for independence and was abandoned by the leaders they brought to power." },
    ],
    quotes: [
      { quote: "In a bourgeois state, the law is an instrument of oppression of the many by the few.", context: "Karega — expressing his developing revolutionary consciousness about the nature of law and the state." },
      { quote: "We have to get rid of the system. The whole system.", context: "Karega's conclusion — reform is insufficient, structural transformation is necessary." },
      { quote: "The years of blood and tears — were they all for this?", context: "Abdulla — on the betrayal of the Mau Mau generation by post-independence leaders." },
    ],
    essays: [
      { question: "How does Ngũgĩ present the theme of neo-colonialism in Petals of Blood?", points: ["The brewery represents foreign and local capital exploiting community resources", "The new African elite behaves exactly as colonial exploiters did", "Ilmorog's development destroys rather than uplifts its original community", "Karega's political education names the system as neo-colonial", "Ngũgĩ argues formal independence without economic liberation is meaningless"] },
      { question: "Discuss the significance of the journey to Nairobi in the novel.", points: ["It exposes the gap between rural poverty and elite urban wealth", "The community discovers their MP has completely forgotten them", "The journey is an education in how the post-colonial state works", "It triggers the development that destroys the community", "The journey is both literal and a metaphor for post-independence disillusionment"] },
      { question: "How does Ngũgĩ use Wanja to explore the exploitation of women under capitalism?", points: ["Her body is commodified at every stage of the novel", "She moves from barmaid to prostitute as 'development' destroys her alternatives", "Her murders are an act of resistance against her exploiters", "She represents women as both victims and potential agents of resistance", "Ngũgĩ connects gender exploitation to class exploitation throughout"] },
    ],
  },
  "african-child": {
    title: "The African Child",
    author: "Camara Laye",
    year: "1953",
    emoji: "👦🏾",
    overview: "Camara Laye's autobiographical novel set in Guinea, West Africa. It follows young Laye's childhood in Kouroussa, his father's blacksmith compound where mystical traditions blend with daily life, and his eventual journey to France for education. A lyrical celebration of African childhood and a poignant record of what is lost in the encounter with Western education.",
    chapters: [
      { number: 1, title: "The Snake and the Father", summary: "The novel opens with young Laye playing in his father's blacksmith workshop. A mysterious black snake appears — his father's totem animal. His father has a mystical relationship with the snake that gives him special powers as a goldsmith. Laye watches with wonder." },
      { number: 2, title: "The Golden Ceremony", summary: "A merchant brings gold for Laye's father to work. The ceremony of smelting gold is described with extraordinary detail — the prayers, the songs, the care. It is presented as a spiritual as well as physical act, connecting the craftsman to ancestral power." },
      { number: 3, title: "School in Kouroussa", summary: "Laye attends school and is an excellent student. His talent is recognised. The dual education — his father's traditional wisdom and the school's Western knowledge — shapes his identity. He is being prepared for a world beyond Kouroussa." },
      { number: 4, title: "The Initiation", summary: "Laye undergoes the male initiation ceremony — a central rite of passage in his culture. The ceremony is described with reverence. It marks his passage from boy to man and his full membership in the community." },
      { number: 5, title: "Tindican — His Mother's Village", summary: "Laye spends time at his mother's family's village where the harvest is a communal celebration. These pastoral scenes are among the most lyrical in the novel — a record of a way of life already changing." },
      { number: 6, title: "Conakry and France", summary: "Laye's talent earns him a scholarship first to Conakry and then to France. Each departure tears him further from home. His mother weeps — she knows that those who go to France rarely return unchanged. The novel ends with Laye on his way to Europe, looking back." },
    ],
    themes: [
      { title: "African Childhood and Tradition", content: "The novel is fundamentally a celebration of Laye's Malinke childhood — its warmth, its rituals, its community. The blacksmith compound is a world of beauty, mystery and love that Laye clearly mourns even as he writes from distance." },
      { title: "Education and Loss", content: "Every step of Laye's educational journey takes him further from home. Education is presented as both gift and loss. The tension between what is gained and what is left behind is the novel's emotional centre." },
      { title: "The Mystical and the Everyday", content: "Laye presents African spiritual practice not as primitive superstition but as a profound dimension of everyday life. His father's connection to the snake, the gold ceremony's spiritual dimension — these are treated with complete seriousness." },
      { title: "Colonialism and Cultural Change", content: "Though colonialism is not the explicit subject, it is the force reshaping Laye's world. The French school, the journey to France — colonial education pulls him away from his roots. The novel is written in French, the coloniser's language — itself a complex irony." },
      { title: "Mother and Son", content: "Laye's relationship with his mother is one of the novel's most moving threads. Her love is fierce and protective. Her grief at each of his departures captures what African modernisation costs African families." },
    ],
    characters: [
      { name: "Laye", role: "Protagonist/Narrator", description: "The autobiographical narrator — a sensitive, observant child whose gifts carry him away from everything he loves. His love for his family and community is evident on every page." },
      { name: "Father", role: "The Craftsman-Mystic", description: "A goldsmith and blacksmith with a profound spiritual connection to his craft and his totem snake. He represents the best of traditional African knowledge — practical, spiritual and dignified." },
      { name: "Mother", role: "The Protective Guardian", description: "Fierce in her love for Laye, she has spiritual powers of her own — the ability to stop crocodiles. Her grief at Laye's departures is the novel's most emotionally powerful thread." },
    ],
    quotes: [
      { quote: "My father was a man of great goodness. He was a man of great skill. But above all, he was a man of great spirit.", context: "Laye's tribute to his father — capturing the three qualities Laye most admires." },
      { quote: "I was weeping. I knew that I would not see my homeland for a long time.", context: "Laye leaving for France — the novel's final emotional note, looking back at what education costs." },
      { quote: "The snake was my father's guiding spirit, his protective genius.", context: "On the mystical dimension of his father's craft — presented with complete seriousness." },
    ],
    essays: [
      { question: "How does Laye present African tradition in The African Child?", points: ["Tradition is presented with reverence — not as primitive but as profound", "The gold ceremony shows spiritual depth of African craftsmanship", "The initiation ceremony is presented as meaningful rite of passage", "Traditional knowledge — his father's, his mother's — is shown as genuinely powerful", "Laye writes from France but his heart remains in Kouroussa"] },
      { question: "Discuss the theme of education and loss in The African Child.", points: ["Each educational step takes Laye further from his roots", "His mother weeps at every departure — she understands the cost", "Education is presented as both gift and grief", "The novel itself — written in French — embodies the tension between gain and loss", "Laye's nostalgia pervades the whole narrative — he is writing about a world already gone"] },
    ],
  },
  "a-man-for-all": {
    title: "A Man for All Seasons",
    author: "Robert Bolt",
    year: "1960",
    emoji: "👑",
    overview: "Robert Bolt's celebrated historical play about Sir Thomas More, who refuses to endorse King Henry VIII's divorce and remarriage. More's principled stand against royal power — his insistence on following his conscience even unto death — makes him one of drama's great moral heroes. The play explores integrity, compromise, law and the individual conscience against state power.",
    chapters: [
      { number: 1, title: "Act One — The King's Great Matter", summary: "Sir Thomas More is England's Lord Chancellor — the most powerful man after the King. Henry VIII wants an annulment from Catherine of Aragon to marry Anne Boleyn. He needs More's public support to give it legitimacy. More refuses to endorse what his conscience will not accept, but tries to stay silent rather than oppose directly." },
      { number: 2, title: "The Common Man", summary: "Bolt uses a chorus figure called the Common Man who plays multiple roles — steward, boatman, jailer, juror. He represents ordinary pragmatic self-interest — the opposite of More's principled integrity. He always chooses survival over principle." },
      { number: 3, title: "Cromwell and Rich", summary: "Thomas Cromwell works to trap More into either public support or public opposition. Richard Rich, More's former protégé, is seduced by ambition into betraying him. Rich becomes the instrument of More's downfall in exchange for the position of Attorney General for Wales." },
      { number: 4, title: "Act Two — The Trap Closes", summary: "More resigns as Lord Chancellor to avoid the issue. He retreats into private silence — he will neither support nor condemn. But silence is not enough for Henry. Cromwell and Rich construct a legal trap. The Act of Supremacy demands all subjects swear the King is head of the Church." },
      { number: 5, title: "The Trial and Death", summary: "More is tried for treason. Rich perjures himself to convict More. More is found guilty and executed. Before his death he speaks — his conscience will not allow him to die without witness to his integrity. He is 'the King's good servant but God's first.'" },
    ],
    themes: [
      { title: "Conscience and Integrity", content: "More's conscience is his absolute — he will not act against it regardless of consequence. Bolt presents integrity not as easy virtue but as costly commitment. More loses everything — position, freedom, life — rather than compromise." },
      { title: "The Law and Justice", content: "More is a lawyer who believes in the law as society's protection. His famous speech about cutting down every law to get at the devil — if you cut down the law, where will you hide when the devil turns on you? — is one of drama's great arguments for the rule of law." },
      { title: "Silence and Complicity", content: "More tries to use silence as protection — he will neither affirm nor deny. The play explores how far silence can protect integrity and when silence itself becomes complicity. In the end, silence is not enough." },
      { title: "Ambition and Corruption", content: "Richard Rich represents the corruption of ambition — he betrays More for career advancement. His famous exchange with More — he is given Wales in exchange for his perjury — is one of the play's most bitter moments." },
      { title: "The Individual Against the State", content: "The play's central conflict is between More's individual conscience and the totalitarian demands of the Tudor state. Bolt wrote it partly as a comment on the McCarthy era — the demand for ideological conformity in any age." },
    ],
    characters: [
      { name: "Sir Thomas More", role: "Protagonist/Martyr", description: "Lord Chancellor of England who refuses to endorse the King's remarriage. His integrity is absolute — he will not say what his conscience forbids even to save his life. One of drama's most admirable characters." },
      { name: "King Henry VIII", role: "The Demanding King", description: "Appears briefly but dominates the play's world. His desire for More's approval reveals that even tyrants need the legitimacy that true integrity can confer. He respects More while destroying him." },
      { name: "Richard Rich", role: "The Betrayer", description: "More's former protégé who chooses ambition over integrity. His perjury convicts More. He is the anti-More — the man who has a price. His final position — Attorney General for Wales — is Bolt's bitterest joke." },
      { name: "Thomas Cromwell", role: "The Political Operator", description: "The King's instrument for destroying More. He is brilliant, ruthless and entirely amoral — a political professional who serves power without conscience." },
      { name: "The Common Man", role: "Chorus/Everyman", description: "Bolt's theatrical invention — a figure who represents ordinary pragmatic self-interest. He always chooses survival. He is not evil — just ordinary. His contrast with More defines what makes More extraordinary." },
    ],
    quotes: [
      { quote: "I am the King's good servant — but God's first.", context: "More's final words before execution — the perfect summary of his position. He serves the King loyally but his conscience answers to a higher authority." },
      { quote: "What would you do? Cut a great road through the law to get after the Devil? And when the last law was down and the Devil turned round on you — where would you hide?", context: "More to Roper — his famous argument for the rule of law as humanity's only protection." },
      { quote: "Why Richard, it profits a man nothing to give his soul for the whole world... but for Wales?", context: "More to Rich after the betrayal — the play's most devastating line, mixing moral grandeur with devastating wit." },
    ],
    essays: [
      { question: "How does Bolt present the theme of conscience in A Man for All Seasons?", points: ["More's conscience is absolute — not flexible or negotiable", "He tries silence rather than direct opposition — conscience allows this", "When silence becomes impossible, conscience demands speech even at cost of life", "The play argues true integrity cannot be indefinitely preserved by compromise", "Bolt contrasts More's conscience with Rich's ambition and the Common Man's pragmatism"] },
      { question: "What is the significance of Richard Rich in the play?", points: ["He represents the corruption of potential — More tried to save him from ambition", "His betrayal for Wales is the play's most bitter irony", "He is the anti-More — shows what More could have been with different values", "His perjury makes him morally worse than those who oppose More openly", "He embodies Bolt's argument that small compromises lead to complete moral collapse"] },
      { question: "How does Bolt use the Common Man to comment on More's integrity?", points: ["The Common Man represents ordinary pragmatic self-interest — not evil, just human", "His survival contrasts with More's principled death", "He addresses the audience directly — asking us where we stand", "He makes More's choice seem extraordinary precisely because ordinary people would not make it", "Bolt uses him to prevent simple moralising — most of us are the Common Man"] },
    ],
  },
  "memories-we-lost": {
    title: "Memories We Lost",
    author: "Edited by Chris Wakling",
    year: "2016",
    emoji: "🧠",
    overview: "Memories We Lost and Other Stories is an anthology of African short stories exploring mental illness — a subject rarely addressed directly in African literature. The stories come from across the continent and approach psychosis, depression, trauma and community responses to mental illness with sensitivity, honesty and literary craft.",
    chapters: [
      { number: 1, title: "Memories We Lost", summary: "The title story by Lidudumalingani follows a sister who tries to protect her younger sibling who has schizophrenia from the community's violent responses. Set in a South African village, it shows how mental illness is understood through spiritual rather than medical frameworks, and the impossible choices families face." },
      { number: 2, title: "Urban Mental Health Stories", summary: "Several stories deal with mental illness in African cities — Nairobi, Lagos, Johannesburg. They explore how urbanisation, poverty and social pressure create psychological damage, and how those with mental illness navigate hostile urban environments." },
      { number: 3, title: "Traditional Healing and Modern Medicine", summary: "Multiple stories explore the tension between traditional explanations of mental illness — spirit possession, curses, witchcraft — and biomedical approaches. Characters and communities navigate between these frameworks with different outcomes." },
      { number: 4, title: "Stigma and Community", summary: "A recurring theme across stories is the stigma attached to mental illness and its consequences — abandonment, violence, exclusion. The stories argue for understanding and compassion without romanticising the difficulties." },
    ],
    themes: [
      { title: "Mental Illness and Stigma", content: "The anthology's central subject. African communities often lack both vocabulary and resources for mental illness. Stigma leads to exclusion and violence against those who suffer. The stories argue for new understanding." },
      { title: "Traditional versus Biomedical Frameworks", content: "Mental illness is understood through spirit possession, curses or divine punishment in traditional frameworks. Modern medicine offers different explanations. The stories explore how individuals and families navigate between these competing understandings." },
      { title: "Family and Caregiving", content: "The burden of caring for mentally ill family members falls heavily on women and siblings. The stories explore caregiving love alongside its exhaustion and impossible demands." },
      { title: "Community and Exclusion", content: "Communities often respond to mental illness with fear and exclusion. The stories explore how stigma operates at the community level and what its human costs are." },
    ],
    characters: [
      { name: "The Sister (Memories We Lost)", role: "Protagonist", description: "The narrator who tries to protect her schizophrenic sister from community violence. Her love and desperation capture the impossible position of families dealing with mental illness without support." },
      { name: "Various Protagonists", role: "Multiple", description: "As an anthology, characters vary across stories — patients, caregivers, community members, traditional healers and doctors all appear. Each story focuses on different dimensions of the mental illness experience." },
    ],
    quotes: [
      { quote: "She was not mad. She saw things differently. And the world punished her for it.", context: "From the title story — challenging the boundary between madness and different perception." },
      { quote: "In our village, there was no word for what she had. There was only what people said she was.", context: "On the role of language and naming in how communities understand and treat mental illness." },
    ],
    essays: [
      { question: "How does the anthology Memories We Lost challenge attitudes toward mental illness?", points: ["Stories humanise those with mental illness — they are not dangerous monsters", "Traditional explanations are presented with respect but also questioned", "The stigma and its consequences are shown with unflinching honesty", "Caregivers are given voice — their burden is made visible", "The anthology argues for compassion and resources rather than fear and exclusion"] },
      { question: "Discuss how one story from the anthology presents the relationship between tradition and mental health.", points: ["Identify the specific story and its setting", "Describe the traditional framework used to understand mental illness in the story", "Show how this framework shapes the community's response", "Consider whether the story endorses, critiques or simply presents this framework", "Connect to broader questions about the meeting of traditional and biomedical knowledge"] },
    ],
  },
  "poetry-oral": {
    title: "Oral Poetry",
    author: "Various African Poets",
    year: "Various",
    emoji: "📜",
    overview: "Oral poetry is the foundation of African literary tradition — poems composed and transmitted through performance rather than writing. The KCSE oral poetry section covers praise poetry, dirges, war songs, work songs and riddles from across East Africa. Understanding oral poetry requires understanding performance, context and community function.",
    chapters: [
      { number: 1, title: "Praise Poetry (Eulogies)", summary: "Praise poems celebrate heroes, chiefs, animals and places. They use elaborate imagery, repetition and hyperbole. Giriama, Luo, Kikuyu and other Kenyan communities have rich praise poetry traditions. The praise singer (griot in West Africa) holds a respected social role." },
      { number: 2, title: "Dirges and Funeral Songs", summary: "Songs of mourning that express grief while also celebrating the deceased's life. They follow formal conventions — addressing the dead directly, listing their qualities, expressing the community's loss. They serve psychological and social functions in processing grief." },
      { number: 3, title: "War Songs and Heroic Poetry", summary: "Poems celebrating warriors and military achievement. They pump up fighters before battle and celebrate victories after. They use powerful rhythm, repetition and martial imagery. They also serve to pass on community histories of conflict." },
      { number: 4, title: "Work Songs", summary: "Songs that accompany communal labour — farming, grinding grain, building. The rhythm of the song coordinates work effort. Work songs make difficult labour bearable and strengthen community bonds." },
      { number: 5, title: "Riddles and Tongue Twisters", summary: "Short oral forms that challenge the mind and tongue. Riddles test knowledge and cleverness. They are educational and entertaining. In performance contexts they create competitive, playful community interaction." },
    ],
    themes: [
      { title: "Community and Identity", content: "Oral poetry defines and reinforces community identity. Praise poems celebrate what the community values. Dirges affirm community bonds in grief. War songs unify fighters. All oral poetry is fundamentally communal rather than individual." },
      { title: "Performance and Context", content: "Oral poetry cannot be separated from its performance context. The audience participates. The occasion shapes the poem. The same words in different contexts mean different things. Written versions are always partial representations." },
      { title: "Memory and Transmission", content: "Oral poetry is how communities store and transmit knowledge, history and values. Before literacy, the praise singer was the community's memory. Oral poetry is both art and archive." },
      { title: "Nature and Environment", content: "East African oral poetry is deeply rooted in the natural environment — animals, weather, landscape. The imagery draws on specific ecological knowledge. Understanding the poetry requires understanding the environment it comes from." },
    ],
    characters: [
      { name: "The Praise Singer", role: "Performer", description: "The professional oral poet who holds the community's memory and celebrates its heroes. A skilled craftsperson who must compose, perform and remember simultaneously." },
      { name: "The Community", role: "Audience and Participant", description: "In oral poetry, the audience is never passive. They respond, repeat refrains, challenge and affirm. The community is co-creator of the performance." },
    ],
    quotes: [
      { quote: "When the music changes, so does the dance — and so does the poem.", context: "On the inseparability of oral poetry from its performance context and the changes it undergoes in transmission." },
      { quote: "A story told is never the same twice — and that is its power.", context: "On the living, adaptive quality of oral tradition that distinguishes it from fixed written texts." },
    ],
    essays: [
      { question: "What features distinguish oral poetry from written poetry?", points: ["Oral poetry is composed for performance — voice, gesture, rhythm are inseparable from meaning", "The audience participates — oral poetry is collaborative", "Repetition serves memory as well as aesthetics", "Context shapes meaning — the same poem in different occasions means differently", "Written versions are always translations that lose performance dimensions"] },
      { question: "Discuss the social functions of oral poetry in East African communities.", points: ["Praise poetry celebrates community values and heroes", "Dirges process grief and reinforce community bonds in loss", "War songs unify and motivate fighters", "Work songs coordinate labour and make it bearable", "Oral poetry is education, entertainment, history and spiritual practice simultaneously"] },
    ],
  },
  "poetry-collection": {
    title: "Poems from East Africa",
    author: "David Cook and David Rubadiri (eds.)",
    year: "1971",
    emoji: "✍️",
    overview: "The landmark anthology edited by David Cook and David Rubadiri that brought together the first generation of East African poets writing in English. Including poets from Kenya, Uganda and Tanzania, the collection captures East Africa's encounter with colonialism, independence, modernity and cultural identity. It remains a foundational text for understanding East African literary history.",
    chapters: [
      { number: 1, title: "Independence and Nationhood", summary: "Poems celebrating and questioning independence. The excitement of uhuru mixed with anxiety about what it means. Poets like Okot p'Bitek and Joseph Buruga address the promises and contradictions of national independence." },
      { number: 2, title: "Cultural Identity", summary: "Poems about what it means to be African, East African, modern. The encounter between African tradition and Western modernity creates the central tension in many poems. Who are we when we are no longer colonial subjects but not yet fully free?" },
      { number: 3, title: "Urban Experience", summary: "Poems about Nairobi, Kampala, Dar es Salaam — the new cities of independent East Africa. The excitement and dislocation of urban migration, the distance from rural roots, the new social forms emerging." },
      { number: 4, title: "Nature and Place", summary: "Poems deeply rooted in East African landscapes — Lake Victoria, Mount Kenya, the savannah. Place is not merely setting but identity. These poems establish East African poetry's distinctive relationship with its environment." },
      { number: 5, title: "Love and Personal Experience", summary: "More intimate poems about love, loss, family and personal experience. These poems show that East African poetry is not only political — it also explores the full range of human emotional experience." },
    ],
    themes: [
      { title: "Colonial Encounter and its Legacy", content: "The anthology captures the psychological and cultural impact of colonialism. Poets write from the aftermath — what has been taken, what remains, what new identity must be constructed from the pieces." },
      { title: "Cultural Conflict and Syncretism", content: "East African poets writing in English are already crossing cultural lines. The anthology explores this crossing with honesty — what is gained, what is lost, what new synthesis emerges." },
      { title: "Political Hope and Disillusionment", content: "Written at the moment of independence, many poems carry both hope and anxiety. Some look forward with confidence; others are already suspicious that political independence will not bring true liberation." },
      { title: "The African Voice in English", content: "All these poets are writing in the coloniser's language. The anthology raises the question — can English carry African experience? Most poets answer yes, through adaptation, code-switching and deliberate transformation of the language." },
    ],
    characters: [
      { name: "Okot p'Bitek", role: "Major Contributor", description: "Ugandan poet whose Song of Lawino captures the voice of a traditional woman watching her husband abandon African ways for Western culture. One of East African literature's most distinctive and celebrated voices." },
      { name: "David Rubadiri", role: "Editor and Poet", description: "Malawian poet and co-editor. His poem An African Thunderstorm is one of the anthology's most taught poems — using the storm as metaphor for colonialism's violent arrival." },
    ],
    quotes: [
      { quote: "Husband now you despise me / Because I cannot walk in the white man's way.", context: "From Okot p'Bitek's Song of Lawino — the voice of a woman whose husband has abandoned African culture for Western ways." },
      { quote: "A storm is coming / Turning the trees / like women possessed.", context: "From Rubadiri's An African Thunderstorm — the colonial arrival rendered as natural violence." },
    ],
    essays: [
      { question: "How do the poems in East African Poetry reflect the experience of independence?", points: ["Independence is met with excitement and anxiety simultaneously", "Poets question what political independence means without economic liberation", "Cultural identity — what to keep, what to transform — is a central preoccupation", "The use of English itself reflects the colonial inheritance these poets navigate", "Compare optimistic and pessimistic poems in the anthology"] },
      { question: "Discuss how one poet in the anthology uses nature as a literary device.", points: ["Identify the specific poem and poet", "Describe the natural imagery used", "Explain what the natural imagery symbolises or represents", "Consider whether the imagery is realistic or metaphorical", "Connect the natural imagery to the poem's larger themes and argument"] },
    ],
  },

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
  "betrayal-city": {
    title: "Betrayal in the City",
    author: "Francis Imbuga",
    year: "1976",
    emoji: "🏙️",
    overview: "Betrayal in the City is a satirical play set in the fictional African state of Kafira. It explores political oppression, corruption, and the betrayal of independence ideals in post-colonial Africa. The play follows Adika's family as they struggle against a brutal authoritarian regime.",
    chapters: [
      { number: 1, title: "Act One — The Graveyard", summary: "Adika's parents Doga and Nina perform shaving rites at their son's grave. Adika was killed by the government for leading student protests. Soldiers Mulili and Jere arrive and disrupt the ceremony, representing the state's intrusion into private grief." },
      { number: 2, title: "Act One — The Prison", summary: "Mosese and Jere are in prison. Mosese was jailed for questioning the regime. Through their conversations we learn the extent of Kafira's political repression. Mosese represents the betrayed intellectual class." },
      { number: 3, title: "Act Two — The University", summary: "Boss holds a meeting about independence celebrations. He wants everything perfect for foreign visitors. Regina, Adika's sister, has been forced into prostitution by poverty. The hypocrisy of celebrating freedom while citizens suffer is exposed." },
      { number: 4, title: "Act Two — The Cell", summary: "Mosese reflects on the state of Kafira. Jere begins to question his role as a soldier of the oppressive state. Mosese's speech about the meaning of freedom is the philosophical heart of the play." },
      { number: 5, title: "Act Three — The Celebration", summary: "Independence celebrations go ahead. Mosese is released to perform in a propaganda play but subverts it by speaking truth. He is re-arrested — the cycle of oppression continues but resistance is possible." },
    ],
    themes: [
      { title: "Political Oppression and Tyranny", content: "Boss rules Kafira through fear, violence and propaganda. Citizens cannot question authority. Adika was killed for leading protests. The state machinery — soldiers, prisons, celebrations — all serve to maintain the dictator's power." },
      { title: "Betrayal of Independence", content: "Kafira celebrates independence while its citizens are less free than under colonialism. The independence fighters betrayed the ideals they fought for. The title refers to this fundamental betrayal of the people." },
      { title: "Education and Disillusionment", content: "Mosese and Adika are educated men destroyed by the system. Education gives them awareness but no power. Imbuga questions whether education under a corrupt system is meaningful." },
      { title: "Corruption and Hypocrisy", content: "Mulili, Boss's cousin, is promoted despite being ignorant and brutal. He represents nepotism and corruption. The celebrations are a show for foreigners while citizens suffer." },
      { title: "Hope and Resistance", content: "Despite the oppression, Mosese and Jere show resistance is possible. Jere's growing conscience represents potential for change from within the system itself." },
      { title: "Gender and Exploitation", content: "Regina's prostitution represents how state failure affects women most severely. She is victim of both poverty and patriarchy — double oppression in post-colonial Kafira." },
    ],
    characters: [
      { name: "Boss", role: "The Dictator", description: "The unnamed dictator of Kafira. His namelessness makes him a universal symbol of African tyranny. Paranoid, ruthless and hypocritical — talks about freedom while imprisoning citizens." },
      { name: "Mosese", role: "The Intellectual", description: "Educated prisoner who represents the betrayed intellectual. Originally a teacher, jailed for questioning the regime. His eloquence makes him the voice of reason and hope." },
      { name: "Jere", role: "The Conflicted Soldier", description: "A soldier who begins to question the regime he serves. His journey from oppressor to sympathiser represents the possibility of conscience winning over blind duty." },
      { name: "Adika", role: "The Martyr", description: "Never appears on stage — killed before the play begins. His death drives all the action and represents citizens killed for demanding their rights." },
      { name: "Mulili", role: "The Corrupt Opportunist", description: "Boss's cousin, promoted despite incompetence. Speaks broken English signalling his unsuitability for power. Represents how corruption rewards loyalty over merit." },
      { name: "Doga and Nina", role: "Adika's Parents", description: "Simple rural people devastated by their son's killing. Represent ordinary citizens ground down by the state. Their grief is repeatedly disrupted by state power." },
      { name: "Regina", role: "Adika's Sister", description: "Forced into prostitution by poverty. Represents female victims of political and economic oppression. Her situation shows how state failure destroys entire families." },
    ],
    quotes: [
      { quote: "When the madness of an entire nation disturbs a solitary mind, it is not enough to say the man is mad.", context: "Mosese — one of the most famous lines in Kenyan literature. Suggests individual dissent against collective madness is sanity, not madness." },
      { quote: "We had a wonderful opportunity to build a new country. But what did we do with it?", context: "Mosese reflecting on the betrayal of independence ideals by the new ruling class." },
      { quote: "This is Kafira. Here we do not question. We obey.", context: "Mulili — capturing the authoritarian demand for blind obedience over critical thought." },
    ],
    essays: [
      { question: "Discuss the theme of betrayal in Betrayal in the City.", points: ["The title itself signals the central theme of the play", "Political leaders betray independence ideals they fought for", "Soldiers betray their conscience by serving tyranny", "Mulili betrays merit by exploiting nepotism and family connections", "Adika's death is the ultimate betrayal of the young generation", "Jessica elopes — personal betrayal mirrors political betrayal"] },
      { question: "How does Imbuga use the independence celebrations to expose hypocrisy?", points: ["Celebrations are staged for foreign eyes — not genuine", "Citizens are imprisoned while officials celebrate freedom", "Mosese is released only to perform in propaganda theatre", "The contrast between rhetoric and reality is Imbuga's central satire", "Adika died demanding the very freedom being celebrated"] },
      { question: "Examine the role of Mosese as the voice of reason in the play.", points: ["His education gives him language to articulate oppression clearly", "His prison conversations are the philosophical heart of the play", "His famous speech about madness challenges the audience directly", "He is ultimately powerless — reason alone cannot defeat tyranny", "His re-arrest suggests hope is fragile but resistance is never extinguished"] },
    ],
  },
  "river-source": {
    title: "The River and the Source",
    author: "Margaret Ogola",
    year: "1994",
    emoji: "💧",
    overview: "An epic multigenerational saga following four generations of Luo women in Kenya, from the pre-colonial era to the modern day. It traces the lives of Akoko, her daughter Awiti, granddaughter Vera and great-granddaughter Wandia — showing how each generation navigates the changing currents of Kenyan history with extraordinary strength.",
    chapters: [
      { number: 1, title: "Akoko — The Source", summary: "We meet Akoko, the original matriarch — a strong-willed Luo woman married to Chief Owuor Kembo. Her strength and independence establish the family's enduring character. She bears children and manages her household with quiet authority." },
      { number: 2, title: "Akoko's Fight for Justice", summary: "After her husband's death, male relatives attempt to dispossess Akoko and her children. In a remarkable act for a woman of her era, she travels to Kisumu to seek justice from British colonial authorities — and wins her case." },
      { number: 3, title: "The Mission Encounter", summary: "Akoko and her grandchildren encounter Christianity at a Catholic mission. The new religion brings education and new opportunities but also conflict with Luo traditions. The family begins its transformation." },
      { number: 4, title: "Awiti's Generation", summary: "Akoko's daughter Awiti navigates the colonial era. Her children are educated at mission schools, opening new worlds. The family's engagement with Christianity deepens, creating both opportunity and cultural tension." },
      { number: 5, title: "Vera's Story", summary: "Vera, educated and modern, makes a cross-cultural marriage to a Kikuyu man — unusual and controversial at the time. Their love story represents post-independence Kenya's idealism and the possibility of unity across ethnic lines." },
      { number: 6, title: "Wandia — The River Continues", summary: "Wandia becomes a doctor — the fourth generation's culmination. Her achievement proves that Akoko's strength flows through all generations. The river has reached its fullest expression." },
    ],
    themes: [
      { title: "The Strength of Women", content: "Every generation's story centres on a woman's extraordinary resilience. From Akoko defying patriarchal tradition to Wandia becoming a doctor, women are the river's source. Ogola celebrates female strength across all historical periods." },
      { title: "Tradition and Change", content: "The novel traces how Luo traditions are maintained, adapted or lost across generations. Ogola neither romanticises tradition nor dismisses it — she shows its strengths and limitations with honesty and care." },
      { title: "Christianity and African Identity", content: "The encounter with Christianity is nuanced throughout. It brings education and liberation for women but also creates cultural ruptures. Ogola presents faith as compatible with, not opposed to, African identity." },
      { title: "Education as Liberation", content: "Each generation gains more education than the last. Education is consistently the key to women's liberation — it gives them choices their mothers never had and possibilities their grandmothers could not imagine." },
      { title: "The River Metaphor", content: "The source is Akoko — all strength flows from her through all generations. Each woman carries the source's power forward. The metaphor celebrates continuity, resilience and the power of maternal inheritance." },
      { title: "Colonialism's Complex Legacy", content: "Colonial rule disrupts traditional structures but also creates new opportunities. Akoko's use of colonial courts to defend her rights shows the complexity — the coloniser's tools used against colonial injustice." },
    ],
    characters: [
      { name: "Akoko", role: "The Source/Matriarch", description: "The foundational character whose strength defines all subsequent generations. Her courage in seeking colonial justice established the family's fighting spirit that flows through four generations." },
      { name: "Awiti", role: "Second Generation", description: "Akoko's daughter who bridges the traditional and colonial worlds. Her children's education at mission schools begins the family's formal engagement with Western culture and Christianity." },
      { name: "Vera", role: "Third Generation", description: "Educated, modern and bold. Her cross-cultural marriage to a Kikuyu man represents post-independence Kenya's possibility. Her life is more complex and conflicted than her grandmother's simpler world." },
      { name: "Wandia", role: "Fourth Generation/Culmination", description: "A doctor who represents the fullest flowering of Akoko's legacy. Her achievement is the living proof that strong women produce strong daughters across every generation." },
      { name: "Chief Owuor Kembo", role: "Akoko's Husband", description: "A good and fair chief who respects Akoko's strength. His death leaves Akoko vulnerable to male relatives' scheming, setting up her heroic defence of her children and her rights." },
    ],
    quotes: [
      { quote: "A river does not forget its source.", context: "The central metaphor — each generation carries the strength of those who came before. The title's deepest meaning." },
      { quote: "She had the bearing of one who knew her own worth and would not be diminished.", context: "Description of Akoko — establishing her as an extraordinary woman from the very first pages." },
      { quote: "What is a woman? A woman is the source of all things.", context: "The novel's central celebration of female strength and the generative power of mothers." },
    ],
    essays: [
      { question: "Discuss the role of women as agents of change in The River and the Source.", points: ["Akoko defies patriarchal tradition to defend her family single-handedly", "Each generation's woman drives the family forward against all odds", "Women navigate colonialism, Christianity and modernity with strength", "Ogola presents women not as victims but as active agents of history", "Compare the four generations — each faces different challenges but the same inner strength"] },
      { question: "How does Ogola present the theme of tradition versus modernity?", points: ["Akoko represents pre-colonial Luo tradition at its most powerful", "The mission school generation begins the shift toward modernity", "Vera's cross-cultural marriage is the most dramatic break with tradition", "Wandia's career as a doctor is tradition's complete transformation", "Ogola suggests change is inevitable but roots must always be honoured"] },
      { question: "Examine the significance of the river metaphor in the novel.", points: ["The source is Akoko — all strength flows from her", "Each generation is a new stretch of the same continuous river", "Rivers can be blocked or diverted but always find their way forward", "The metaphor celebrates continuity across disruption and historical change", "Compare to actual Luo geography — Ogola's setting near Lake Victoria is deliberate"] },
    ],
  },
  "merchant-venice": {
    title: "The Merchant of Venice",
    author: "William Shakespeare",
    year: "1600",
    emoji: "⚖️",
    overview: "A Shakespearean tragicomedy set in Venice and Belmont. Antonio borrows money from Shylock the moneylender to help his friend Bassanio woo the wealthy Portia. When Antonio cannot repay, Shylock demands his bond — a pound of flesh. The play explores justice, mercy, prejudice and love through one of literature's most complex villains.",
    chapters: [
      { number: 1, title: "Act One — Venice and Belmont", summary: "Antonio agrees to guarantee Bassanio's loan from Shylock. If Antonio defaults, Shylock gets a pound of his flesh. In Belmont, Portia is bound by her father's will — suitors must choose between gold, silver and lead caskets. The wrong choice ends their pursuit." },
      { number: 2, title: "Act Two — Elopement", summary: "The Prince of Morocco chooses gold and fails the casket test. Jessica, Shylock's daughter, elopes with Lorenzo, a Christian, stealing her father's money and jewels. Shylock's grief and rage over his daughter and his ducats is both comic and deeply human." },
      { number: 3, title: "Act Three — Crisis", summary: "All Antonio's ships are reported lost. Shylock, hardened by Jessica's betrayal, insists on his bond. Bassanio chooses the lead casket and wins Portia. He rushes to Venice to save his friend from Shylock's knife." },
      { number: 4, title: "Act Four — The Trial", summary: "The climactic trial scene. Shylock demands his pound of flesh. Portia, disguised as a lawyer Balthazar, pleads for mercy. When Shylock refuses, she uses a technicality — he can have flesh but no blood. Shylock is ruined and forced to convert to Christianity." },
      { number: 5, title: "Act Five — Belmont Reunion", summary: "The lovers reunite in Belmont. The ring subplot — Portia and Nerissa testing their husbands — is resolved happily. Antonio's ships miraculously arrive safe. The play ends in celebration, though Shylock's fate leaves a bitter taste." },
    ],
    themes: [
      { title: "Justice and Mercy", content: "The central tension is Shylock's demand for strict legal justice versus Portia's appeal for mercy. Her famous speech argues mercy is divine. But modern readers question — is forced conversion merciful? The play raises questions Shakespeare may not have fully intended." },
      { title: "Prejudice and Anti-Semitism", content: "Shylock is subjected to constant anti-Jewish prejudice — spat upon, called a dog, his daughter encouraged to steal. Modern readings must wrestle with whether the play endorses or critiques this prejudice." },
      { title: "Appearances and Reality", content: "The casket test is literally about looking beyond surface to substance. All that glitters is not gold. Characters must choose between appearance and reality in love, in law and in identity." },
      { title: "Money and Human Value", content: "Commercial Venice versus romantic Belmont drives the plot. Shylock conflates his daughter with his ducats — both stolen from him. Money determines power and ultimately humanity throughout the play." },
      { title: "Love and Friendship", content: "Antonio risks his life for Bassanio. Portia and Bassanio's love is tested by the ring subplot. Shakespeare explores different forms of love — friendship, romantic love, loyalty — and their different demands." },
    ],
    characters: [
      { name: "Shylock", role: "Villain or Victim", description: "The play's most complex character. Is he a villain demanding murderous justice or a victim pushed too far by relentless persecution? His 'Hath not a Jew eyes?' speech is one of literature's greatest claims for common humanity." },
      { name: "Portia", role: "The Heroine", description: "Brilliant and resourceful, constrained by her father's will yet she outsmarts every man in the play. Her disguise as a lawyer and her legal argument are the play's intellectual triumph." },
      { name: "Antonio", role: "The Merchant", description: "The eponymous merchant — curiously passive and melancholy. His willingness to die for Bassanio is the play's test of true friendship. His sadness at the opening has never been fully explained." },
      { name: "Bassanio", role: "The Romantic Lead", description: "Charming but not particularly deep. He borrows money to woo Portia, raising questions about his motives. He chooses the lead casket correctly, showing substance over surface." },
      { name: "Jessica", role: "Shylock's Daughter", description: "Elopes with Lorenzo and steals from her father. Her betrayal hardens Shylock into his most vindictive. Morally complex — her escape from her strict household is sympathetic but her theft is troubling." },
    ],
    quotes: [
      { quote: "The quality of mercy is not strained. It droppeth as the gentle rain from heaven.", context: "Portia's famous trial speech — arguing mercy is superior to strict justice. One of Shakespeare's most celebrated passages." },
      { quote: "Hath not a Jew eyes? Hath not a Jew hands, organs, dimensions, senses, affections, passions?", context: "Shylock's powerful claim for Jewish humanity — one of literature's greatest speeches against prejudice and dehumanisation." },
      { quote: "All that glitters is not gold — often have you heard that told.", context: "Inscription on the gold casket — the play's central lesson about appearances versus reality in all things." },
      { quote: "If you prick us, do we not bleed? If you tickle us, do we not laugh? If you poison us, do we not die?", context: "Shylock — his argument for the shared humanity of all people regardless of religion or race." },
    ],
    essays: [
      { question: "Is Shylock a villain or a victim? Discuss with reference to the play.", points: ["He is a victim of anti-Semitic persecution — spat on, insulted throughout", "His daughter's betrayal and theft harden him beyond reason", "His demand for a pound of flesh is monstrous — the villain argument", "But the Christians who condemn him are equally motivated by money", "Modern reading: the play exposes the hypocrisy of Christian mercy", "Shakespeare may have intended villain but created a far more complex figure"] },
      { question: "Discuss the theme of mercy versus justice in The Merchant of Venice.", points: ["Shylock represents strict legal justice — the bond must be honoured", "Portia represents mercy — the divine quality that seasons justice", "But the mercy shown to Shylock — forced conversion — is arguably unjust", "The play raises moral questions Shakespeare may not have intended", "The trial scene is the thematic and dramatic climax of the entire play"] },
      { question: "Examine the role of Portia as Shakespeare's most capable female character.", points: ["She is constrained by her father's will — no agency in choosing a husband", "Yet she outsmarts every male character in the entire play", "Her legal argument saves Antonio when all the men are helpless", "The ring subplot shows her testing and ultimately controlling her marriage", "She represents Shakespeare's complex and admiring attitude toward intelligent women"] },
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
  "silent-song": {
    title: "The Silent Song and Other Stories",
    author: "Various Authors",
    year: "2010s",
    emoji: "🎵",
    overview: "The Silent Song and Other Stories is a short story anthology prescribed for Kenyan secondary schools. It brings together works by various East African authors exploring themes of love, betrayal, tradition, modernity, family conflict and social change in contemporary African society. Each story offers a self-contained narrative while contributing to the anthology's broader exploration of the human condition in modern Kenya and East Africa.",
    chapters: [
      { number: 1, title: "The Silent Song", summary: "The title story explores communication breakdown within a family. The protagonist discovers that silence can be as powerful as words — the things left unsaid between family members carry as much weight as those spoken. The story interrogates the gap between generations and the loneliness that grows in modern families." },
      { number: 2, title: "The Stranger", summary: "A stranger arrives in a rural community and disrupts its established order. The community's reaction reveals their fears, prejudices and the fragility of social cohesion. The story questions what it means to belong and who gets to define community boundaries." },
      { number: 3, title: "The Return", summary: "A character returns home after years away and finds home transformed — or finds themselves transformed beyond belonging. The gap between who they were and who they have become is the story's emotional core." },
      { number: 4, title: "Market Day", summary: "Set around a rural market, the story uses economic exchange as a metaphor for social relationships. Characters negotiate not just prices but power, dignity and belonging. The market becomes a microcosm of broader social tensions." },
      { number: 5, title: "The Old Man and the Bicycle", summary: "An elderly man's relationship with his bicycle becomes a meditation on time, dignity and change. As the world modernises around him, the old man and his bicycle represent a generation being left behind — a gentle, melancholic story about ageing and irrelevance." },
    ],
    themes: [
      { title: "Communication and Silence", content: "Across the anthology, the failure to communicate — the things left unsaid, the conversations not had — drives conflict and tragedy. The title story establishes silence as a form of expression that can wound as deeply as words. Characters consistently struggle to articulate their deepest needs to those closest to them." },
      { title: "Tradition versus Modernity", content: "Many stories place characters at the intersection of traditional values and modern pressures. Education, urbanisation and globalisation pull characters away from their roots while family and community pull them back. Neither world offers complete belonging." },
      { title: "Family and Belonging", content: "The family unit — its tensions, loyalties, failures and moments of grace — is the anthology's recurring subject. Parents and children, husbands and wives, siblings and extended family all navigate relationships shaped by changing social expectations." },
      { title: "Social Change in East Africa", content: "The anthology documents East African society in transition. Rural-urban migration, changing gender roles, economic inequality and generational conflict are woven through the stories. The authors bear witness to a society rapidly transforming." },
      { title: "Identity and Self-Discovery", content: "Characters across the anthology grapple with who they are in relation to their community, their family and the wider world. Identity is rarely fixed — it is negotiated, contested and redefined across the stories." },
    ],
    characters: [
      { name: "The Protagonist — The Silent Song", role: "Central Character", description: "A family member — often a child or young adult — who observes the breakdown of communication around them. Their silence mirrors the family's dysfunction. They are witnesses to what is unsaid as much as participants in it." },
      { name: "The Elder", role: "Recurring Figure", description: "Across several stories, an older character represents traditional wisdom being displaced by modernity. Sometimes respected, sometimes ignored, the elder figure embodies the tension between inherited knowledge and contemporary relevance." },
      { name: "The Returnee", role: "Catalytic Figure", description: "A character who has left and come back — educated, urbanised or changed. Their return disrupts the status quo and forces other characters to confront how much — or how little — has changed in their absence." },
    ],
    quotes: [
      { quote: "Sometimes the loudest things are never said.", context: "From the title story — encapsulating the anthology's central preoccupation with what goes unspoken in families and communities." },
      { quote: "Home is not a place you return to. It is a feeling you have lost.", context: "From The Return — capturing the migrant's alienation and the impossibility of going back to something that exists only in memory." },
    ],
    essays: [
      { question: "How do the stories in The Silent Song explore the theme of communication failure?", points: ["The title story establishes silence as the anthology's central motif", "Characters consistently fail to express their deepest needs to loved ones", "Communication breakdown drives conflict across multiple stories", "The authors suggest that modernisation has disrupted traditional channels of communication", "Resolution often comes through non-verbal understanding rather than direct conversation"] },
      { question: "Discuss how the anthology presents the tension between tradition and modernity.", points: ["Characters are caught between inherited values and contemporary pressures", "Education and urbanisation are shown as both liberating and alienating", "Elders represent traditional wisdom that is increasingly marginalised", "The authors neither romanticise tradition nor uncritically celebrate modernity", "Resolution comes when characters integrate rather than choose between the two worlds"] },
      { question: "What does the anthology reveal about family relationships in contemporary East Africa?", points: ["Families are sites of love, conflict, silence and misunderstanding simultaneously", "Economic pressure strains familial bonds across multiple stories", "Generational conflict between parents and children is a recurring pattern", "The extended family offers both support and suffocating obligation", "The anthology suggests that communication is the foundation of healthy family life"] },
    ],
  },
  "samaritan": {
    title: "The Samaritan",
    author: "John Lara",
    year: "2010s",
    emoji: "🤝",
    overview: "The Samaritan is a contemporary Kenyan novel that draws on the biblical parable of the Good Samaritan to explore themes of compassion, prejudice, community responsibility and moral courage in modern Kenya. Set against the backdrop of ethnic tensions, economic inequality and urban-rural divides, the novel asks who our neighbours truly are and what we owe each other as human beings.",
    chapters: [
      { number: 1, title: "The Road", summary: "The novel opens on a Kenyan highway — a liminal space where different worlds collide. The setting establishes the social geography of inequality that will drive the narrative. We meet travellers from different backgrounds whose paths are about to intersect in unexpected ways." },
      { number: 2, title: "The Victim", summary: "A man is attacked and left for dead — not merely by bandits but by circumstances the novel treats as equally brutal: corruption, ethnic prejudice and institutional indifference. The victim's identity is strategically withheld to challenge the reader's assumptions about who deserves sympathy." },
      { number: 3, title: "Those Who Pass By", summary: "Individuals who should help — those with status, resources or professional obligation — find reasons not to. The novel dissects the psychology of bystander indifference with uncomfortable precision. Each character who passes by is given a rationale the reader can partly understand." },
      { number: 4, title: "The Unexpected Helper", summary: "Help comes from the least expected quarter — someone from a community or background that society would not predict as a source of compassion. The helper's act challenges every assumption about who is capable of goodness." },
      { number: 5, title: "The Aftermath", summary: "The consequences of the act of help ripple outward. The novel examines how a single act of compassion changes multiple lives — the victim, the helper, those who witnessed and those who did not act. The community must reckon with what happened on its road." },
      { number: 6, title: "Reckoning", summary: "Characters confront the moral weight of their choices. Those who passed by must live with what they did not do. The helper navigates the unexpected complications of having done the right thing in a society not always structured to reward virtue." },
    ],
    themes: [
      { title: "Compassion Across Difference", content: "The novel's central argument is that compassion must transcend ethnic, economic and social boundaries. The Samaritan figure helps across every line that Kenyan society draws — and the novel insists this is not extraordinary heroism but basic human responsibility." },
      { title: "Ethnic Prejudice and its Costs", content: "The novel maps how ethnic prejudice operates in Kenya — not through overt hatred but through quiet assumptions that determine who we help, who we trust and who we see as fully human. The costs of this prejudice are measured in lives diminished and communities divided." },
      { title: "Moral Courage versus Social Conformity", content: "Those who pass by are not monsters — they are people shaped by social norms that reward self-preservation and punish crossing boundaries. The helper's moral courage is shown as genuinely difficult, genuinely costly and genuinely rare." },
      { title: "Community and Collective Responsibility", content: "Who is responsible for those who fall on our roads? The novel argues for an expansive understanding of community that includes those we do not know, do not like and would not choose as neighbours. Collective responsibility is not optional." },
      { title: "The Kenyan Social Contract", content: "The novel interrogates what Kenyans owe each other as citizens. Against a backdrop of inequality and institutional failure, it asks whether the social contract still holds — and what happens to a society when individuals stop believing it does." },
    ],
    characters: [
      { name: "The Helper — The Samaritan Figure", role: "Protagonist", description: "Comes from a community that society would not expect to be a source of help to the victim. Their act of compassion is costly — it takes time, money and exposes them to suspicion. They act anyway. The novel resists making them a simple hero — their complexity is the point." },
      { name: "The Victim", role: "Central Figure", description: "Identity and background are strategically revealed gradually. The delay forces the reader to extend sympathy before knowing whether they would have done so had they known earlier. By the time we know who the victim is, we are already committed to caring." },
      { name: "The Bystanders", role: "Moral Foils", description: "Each bystander represents a different failure of community responsibility — the professional who fears involvement, the ethnic insider who cannot see across the divide, the ordinary person who simply does not want trouble. Their excuses are familiar because they are our own." },
      { name: "The Community", role: "Collective Character", description: "The community itself is a character — its norms, prejudices and occasional grace are as important as any individual. The novel asks what kind of community we are building and what kind we want to be." },
    ],
    quotes: [
      { quote: "A neighbour is not the person next door. A neighbour is the person in front of you who needs you.", context: "The novel's thematic statement — redefining neighbourliness beyond geography and ethnicity to encompass shared humanity." },
      { quote: "The road does not care where you come from. It only asks what you will do.", context: "The highway as moral testing ground — the road strips away social identity and leaves only the choice of action or inaction." },
      { quote: "It is easy to love humanity. It is hard to love the specific human being in front of you.", context: "Capturing the gap between abstract values and concrete moral action that the novel consistently explores." },
    ],
    essays: [
      { question: "How does The Samaritan explore the theme of compassion in contemporary Kenya?", points: ["Compassion is shown as requiring active choice against social norms", "The helper crosses ethnic and social lines that society reinforces", "The novel distinguishes between abstract goodwill and concrete costly action", "Institutional structures are shown to obstruct individual compassion", "The novel argues that compassion is both a personal virtue and a social necessity"] },
      { question: "Discuss the significance of the bystander characters in The Samaritan.", points: ["Each bystander represents a recognisable social type and failure mode", "Their rationalisations are shown as understandable but morally insufficient", "They collectively represent social norms that make compassion difficult", "Their inaction has real consequences — the novel quantifies the cost of indifference", "The reader is implicated — we recognise our own potential for bystander behaviour"] },
      { question: "What does The Samaritan say about ethnic relations in Kenya?", points: ["Ethnic prejudice operates through quiet assumption rather than overt hatred", "The novel maps how ethnicity determines patterns of help and solidarity", "The helper crosses ethnic lines — presented as remarkable precisely because it should not be", "The victim and helper are from communities with historical tension", "The novel argues for a citizenship identity that transcends ethnic belonging"] },
    ],
  },

};

const TABS = ["Overview", "Chapters", "Themes", "Characters", "Quotes", "Essays"];

function shareToWhatsApp(title: string, id: string) {
  const text = `📖 *${title}* — KCSE Study Guide%0A%0AChapter summaries, themes, characters, essay questions and exam quotes.%0A%0ARead free on Focus Fora 👇%0Ahttps://focusfora.vercel.app/setbooks/${id}`;
  window.open(`https://wa.me/?text=${text}`, "_blank");
}

function copyLink(id: string) {
  navigator.clipboard.writeText(`https://focusfora.vercel.app/setbooks/${id}`);
  alert("Link copied!");
}


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
        <div className="flex gap-3 mt-4">
          <button
            onClick={() => shareToWhatsApp(book.title, id as string)}
            className="flex items-center gap-2 bg-[#25D366] text-white text-xs font-medium px-4 py-2 rounded-sm hover:bg-[#20bc5a] transition-colors">
            📲 Share on WhatsApp
          </button>
          <button
            onClick={() => navigator.clipboard.writeText(`https://focusfora.vercel.app/setbooks/${id}`).then(() => alert("Link copied!"))}
            className="flex items-center gap-2 bg-white/10 text-offwhite text-xs font-medium px-4 py-2 rounded-sm hover:bg-white/20 transition-colors">
            🔗 Copy Link
          </button>
        </div>
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
