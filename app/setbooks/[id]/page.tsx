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
