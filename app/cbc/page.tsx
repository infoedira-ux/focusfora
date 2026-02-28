"use client";
import { useState } from "react";
import Link from "next/link";

const GRADES = [
  { level: "PP1", name: "Pre-Primary 1", age: "4-5 yrs", icon: "🌱" },
  { level: "PP2", name: "Pre-Primary 2", age: "5-6 yrs", icon: "🌿" },
  { level: "Grade 1", name: "Grade 1", age: "6-7 yrs", icon: "⭐" },
  { level: "Grade 2", name: "Grade 2", age: "7-8 yrs", icon: "⭐⭐" },
  { level: "Grade 3", name: "Grade 3", age: "8-9 yrs", icon: "⭐⭐⭐" },
  { level: "Grade 4", name: "Grade 4", age: "9-10 yrs", icon: "🎯" },
  { level: "Grade 5", name: "Grade 5", age: "10-11 yrs", icon: "🎯🎯" },
  { level: "Grade 6", name: "Grade 6", age: "11-12 yrs", icon: "🎓" },
  { level: "Grade 7", name: "Grade 7", age: "12-13 yrs", icon: "🔥" },
  { level: "Grade 8", name: "Grade 8", age: "13-14 yrs", icon: "🔥🔥" },
  { level: "Grade 9", name: "Grade 9", age: "14-15 yrs", icon: "🏆" },
];

const LEARNING_AREAS: Record<string, any[]> = {
  "PP1": [
    { name: "Language Activities", icon: "🗣️", strands: ["Listening and Speaking", "Pre-reading", "Pre-writing", "Motor Development"] },
    { name: "Mathematical Activities", icon: "🔢", strands: ["Numbers 1-10", "Sorting and Classifying", "Patterns", "Shapes"] },
    { name: "Environmental Activities", icon: "🌍", strands: ["Self and Family", "Animals and Plants", "Weather", "Community Helpers"] },
    { name: "Psychomotor & Creative Arts", icon: "🎨", strands: ["Drawing", "Painting", "Music and Movement", "Drama"] },
    { name: "Religious Education", icon: "✝️", strands: ["Christian Religious Education", "Islamic Religious Education"] },
  ],
  "PP2": [
    { name: "Language Activities", icon: "🗣️", strands: ["Listening and Speaking", "Phonological Awareness", "Pre-reading Skills", "Pre-writing Skills"] },
    { name: "Mathematical Activities", icon: "🔢", strands: ["Numbers 1-20", "Addition", "Subtraction", "Measurement", "Geometry"] },
    { name: "Environmental Activities", icon: "🌍", strands: ["My Body", "My School", "Food and Nutrition", "Safety"] },
    { name: "Psychomotor & Creative Arts", icon: "🎨", strands: ["Fine Motor Skills", "Gross Motor Skills", "Music", "Art and Craft"] },
    { name: "Religious Education", icon: "✝️", strands: ["CRE", "IRE"] },
  ],
  "Grade 1": [
    { name: "Literacy Activities", icon: "📖", strands: ["Listening", "Speaking", "Reading", "Writing"] },
    { name: "Kiswahili", icon: "🇰🇪", strands: ["Kusikiliza na Kuzungumza", "Kusoma", "Kuandika"] },
    { name: "Mathematical Activities", icon: "🔢", strands: ["Numbers up to 99", "Addition", "Subtraction", "Measurement", "Geometry"] },
    { name: "Environmental Activities", icon: "🌍", strands: ["Living Things", "Non-living Things", "Our Environment"] },
    { name: "Creative Arts", icon: "🎨", strands: ["Visual Arts", "Music", "Movement and Creative Dance"] },
    { name: "Physical Education", icon: "⚽", strands: ["Games and Sports", "Physical Fitness"] },
    { name: "Religious Education", icon: "✝️", strands: ["CRE", "IRE", "HRE"] },
  ],
  "Grade 2": [
    { name: "Literacy Activities", icon: "📖", strands: ["Listening and Speaking", "Reading", "Writing", "Grammar"] },
    { name: "Kiswahili", icon: "🇰🇪", strands: ["Kusikiliza na Kuzungumza", "Kusoma", "Kuandika", "Sarufi"] },
    { name: "Mathematics", icon: "🔢", strands: ["Numbers up to 999", "Addition and Subtraction", "Multiplication", "Fractions", "Measurement"] },
    { name: "Environmental Activities", icon: "🌍", strands: ["Plants", "Animals", "Weather and Climate", "Our Community"] },
    { name: "Creative Arts", icon: "🎨", strands: ["Drawing and Painting", "Craft", "Music", "Dance and Drama"] },
    { name: "Physical Education", icon: "⚽", strands: ["Athletics", "Games", "Swimming"] },
    { name: "Religious Education", icon: "✝️", strands: ["CRE", "IRE", "HRE"] },
  ],
  "Grade 3": [
    { name: "English", icon: "📖", strands: ["Listening and Speaking", "Reading", "Writing", "Grammar and Vocabulary"] },
    { name: "Kiswahili", icon: "🇰🇪", strands: ["Kusikiliza na Kuzungumza", "Kusoma", "Kuandika", "Sarufi"] },
    { name: "Mathematics", icon: "🔢", strands: ["Numbers up to 9999", "Operations", "Fractions and Decimals", "Geometry", "Measurement", "Data Handling"] },
    { name: "Integrated Science", icon: "🔬", strands: ["Living Things", "Materials", "Forces and Energy", "Earth and Space"] },
    { name: "Social Studies", icon: "🌍", strands: ["Our County", "Citizenship", "Economic Activities"] },
    { name: "Creative Arts & Sports", icon: "🎨", strands: ["Visual Arts", "Performing Arts", "Sports"] },
    { name: "Religious Education", icon: "✝️", strands: ["CRE", "IRE", "HRE"] },
  ],
  "Grade 4": [
    { name: "English", icon: "📖", strands: ["Oracy", "Reading", "Writing", "Grammar"] },
    { name: "Kiswahili / KSL", icon: "🇰🇪", strands: ["Mazungumzo", "Kusoma", "Kuandika", "Sarufi"] },
    { name: "Mathematics", icon: "🔢", strands: ["Number", "Algebra", "Measurement", "Geometry", "Statistics"] },
    { name: "Integrated Science", icon: "🔬", strands: ["Biological Concepts", "Physical Concepts", "Chemical Concepts", "Earth and Environment"] },
    { name: "Social Studies", icon: "🌍", strands: ["Geography of Kenya", "History of Kenya", "Citizenship"] },
    { name: "Creative Arts & Sports", icon: "🎨", strands: ["Visual Arts", "Music", "Dance", "Drama", "Sports"] },
    { name: "Religious Education", icon: "✝️", strands: ["CRE", "IRE", "HRE"] },
    { name: "Life Skills", icon: "💡", strands: ["Self Awareness", "Relationships", "Decision Making", "Problem Solving"] },
  ],
  "Grade 5": [
    { name: "English", icon: "📖", strands: ["Listening and Speaking", "Reading", "Writing", "Language Structure"] },
    { name: "Kiswahili / KSL", icon: "🇰🇪", strands: ["Kusikiliza na Kuzungumza", "Kusoma", "Kuandika", "Muundo wa Lugha"] },
    { name: "Mathematics", icon: "🔢", strands: ["Number and Operations", "Algebra", "Measurement", "Geometry", "Data and Probability"] },
    { name: "Integrated Science", icon: "🔬", strands: ["Living Things and their Environment", "Matter", "Energy", "Earth and Space Science"] },
    { name: "Social Studies", icon: "🌍", strands: ["Physical Environment", "Human Environment", "Civic Education"] },
    { name: "Creative Arts & Sports", icon: "🎨", strands: ["Visual Arts", "Performing Arts", "Sports and Physical Activities"] },
    { name: "Religious Education", icon: "✝️", strands: ["CRE", "IRE", "HRE"] },
    { name: "Agriculture & Nutrition", icon: "🌾", strands: ["Crop Production", "Animal Production", "Nutrition and Food"] },
  ],
  "Grade 6": [
    { name: "English", icon: "📖", strands: ["Oracy Skills", "Reading Skills", "Writing Skills", "Grammar Skills"] },
    { name: "Kiswahili / KSL", icon: "🇰🇪", strands: ["Stadi za Mazungumzo", "Stadi za Kusoma", "Stadi za Kuandika", "Sarufi"] },
    { name: "Mathematics", icon: "🔢", strands: ["Numbers", "Algebra", "Measurement and Geometry", "Statistics and Probability"] },
    { name: "Integrated Science", icon: "🔬", strands: ["Biological", "Physical", "Chemical", "Earth Science"] },
    { name: "Social Studies", icon: "🌍", strands: ["Geography", "History", "Government and Civics"] },
    { name: "Pre-Technical Studies", icon: "🔧", strands: ["Drawing and Design", "Woodwork", "Metalwork", "Electricity"] },
    { name: "Creative Arts & Sports", icon: "🎨", strands: ["Fine Art", "Music", "Drama", "Dance", "Sports"] },
    { name: "Agriculture & Nutrition", icon: "🌾", strands: ["Crop Husbandry", "Animal Husbandry", "Food and Nutrition"] },
    { name: "Religious Education", icon: "✝️", strands: ["CRE", "IRE", "HRE"] },
  ],
  "Grade 7": [
    { name: "English", icon: "📖", strands: ["Listening and Speaking", "Reading", "Writing", "Grammar and Vocabulary", "Literature"] },
    { name: "Kiswahili / KSL", icon: "🇰🇪", strands: ["Kusikiliza na Kuzungumza", "Kusoma", "Kuandika", "Fasihi", "Sarufi"] },
    { name: "Mathematics", icon: "🔢", strands: ["Number", "Algebra", "Geometry", "Measurement", "Statistics", "Financial Mathematics"] },
    { name: "Integrated Science", icon: "🔬", strands: ["Biology Concepts", "Chemistry Concepts", "Physics Concepts", "Environmental Science"] },
    { name: "Social Studies", icon: "🌍", strands: ["Geography", "History and Government", "Economics", "Citizenship"] },
    { name: "Pre-Technical & Pre-Career Education", icon: "🔧", strands: ["Technical Drawing", "Construction", "Electrical", "Career Guidance"] },
    { name: "Creative Arts & Sports", icon: "🎨", strands: ["Visual Arts", "Music", "Performing Arts", "Sports Science"] },
    { name: "Agriculture & Nutrition", icon: "🌾", strands: ["Land and Soil", "Crops", "Livestock", "Nutrition"] },
    { name: "Religious Education", icon: "✝️", strands: ["CRE", "IRE", "HRE"] },
    { name: "Foreign Languages", icon: "🌐", strands: ["French", "German", "Mandarin", "Arabic"] },
  ],
  "Grade 8": [
    { name: "English", icon: "📖", strands: ["Oracy", "Reading", "Writing", "Grammar", "Literature in English"] },
    { name: "Kiswahili / KSL", icon: "🇰🇪", strands: ["Mazungumzo", "Kusoma", "Kuandika", "Fasihi", "Sarufi"] },
    { name: "Mathematics", icon: "🔢", strands: ["Number Theory", "Algebra", "Geometry and Mensuration", "Statistics", "Financial Maths"] },
    { name: "Integrated Science", icon: "🔬", strands: ["Cells and Organisms", "Matter and Energy", "Forces and Motion", "Ecosystems"] },
    { name: "Social Studies", icon: "🌍", strands: ["Physical Geography", "Human Geography", "History", "Government", "Economics"] },
    { name: "Pre-Technical Studies", icon: "🔧", strands: ["Technical Drawing", "Building Technology", "Electrical Technology", "Metalwork"] },
    { name: "Creative Arts & Sports", icon: "🎨", strands: ["Applied Visual Arts", "Music Theory and Practice", "Performing Arts", "Sports"] },
    { name: "Agriculture & Nutrition", icon: "🌾", strands: ["Soil Science", "Crop Production", "Animal Science", "Food Technology"] },
    { name: "Religious Education", icon: "✝️", strands: ["CRE", "IRE", "HRE"] },
    { name: "Business Studies", icon: "💼", strands: ["Entrepreneurship", "Financial Literacy", "Record Keeping", "Marketing"] },
  ],
  "Grade 9": [
    { name: "English", icon: "📖", strands: ["Advanced Oracy", "Critical Reading", "Creative and Functional Writing", "Grammar", "Literature"] },
    { name: "Kiswahili / KSL", icon: "🇰🇪", strands: ["Mazungumzo ya Juu", "Kusoma kwa Kina", "Uandishi wa Ubunifu", "Fasihi", "Sarufi ya Juu"] },
    { name: "Mathematics", icon: "🔢", strands: ["Advanced Algebra", "Trigonometry", "Statistics and Probability", "Financial Mathematics", "Calculus Introduction"] },
    { name: "Integrated Science", icon: "🔬", strands: ["Advanced Biology", "Advanced Chemistry", "Advanced Physics", "Environmental Science"] },
    { name: "Social Studies", icon: "🌍", strands: ["Regional Geography", "World History", "Government and Politics", "Economics", "Global Citizenship"] },
    { name: "Pre-Technical Studies", icon: "🔧", strands: ["Advanced Drawing", "Construction Technology", "Electrical Systems", "ICT Integration"] },
    { name: "Creative Arts & Sports", icon: "🎨", strands: ["Professional Visual Arts", "Advanced Music", "Theatre and Film", "Sports Leadership"] },
    { name: "Agriculture & Nutrition", icon: "🌾", strands: ["Agribusiness", "Advanced Crop Science", "Veterinary Basics", "Food Science"] },
    { name: "Business Studies", icon: "💼", strands: ["Business Planning", "Accounting", "Marketing", "Enterprise Skills"] },
    { name: "Religious Education", icon: "✝️", strands: ["CRE", "IRE", "HRE"] },
    { name: "Foreign Languages", icon: "🌐", strands: ["French", "German", "Mandarin", "Arabic"] },
  ],
};

const ACTIVITY_GUIDES: Record<string, any[]> = {
  "PP1": [
    { strand: "Language Activities", activity: "Story Circle", desc: "Gather children in a circle. Tell a simple story with actions — clap, stomp, jump at key moments. Ask children to repeat key words. Builds listening, vocabulary and confidence.", materials: "No materials needed", duration: "20 mins", competency: "Communication and Collaboration" },
    { strand: "Mathematical Activities", activity: "Stone Sorting", desc: "Collect 20 stones of different sizes. Ask children to sort by big/small, rough/smooth. Count together. Arrange in order from smallest to largest. Builds number sense and classification.", materials: "Stones, leaves, sticks", duration: "25 mins", competency: "Critical Thinking" },
    { strand: "Environmental Activities", activity: "Family Tree Drawing", desc: "Each child draws their family — parents, siblings, grandparents. Name each person. Discuss roles. Builds identity, family awareness and early social understanding.", materials: "Paper, crayons", duration: "30 mins", competency: "Self Awareness" },
    { strand: "Creative Arts", activity: "Rain Painting", desc: "Put drops of paint on paper. Take outside in light rain. Watch how rain creates patterns. Bring inside and let dry. Discuss what happened. Combines science, art and wonder.", materials: "Paper, paint, outdoor space", duration: "40 mins", competency: "Creativity and Imagination" },
  ],
  "Grade 3": [
    { strand: "Mathematics", activity: "Market Simulation", desc: "Set up a classroom market. Give children play money. Price items using cards. Children buy and sell, giving change. Real-world application of addition, subtraction and financial literacy.", materials: "Play money, price tags, classroom objects", duration: "45 mins", competency: "Critical Thinking and Problem Solving" },
    { strand: "Integrated Science", activity: "Bean Germination Diary", desc: "Each child plants a bean in cotton wool in a glass. Observe daily for 2 weeks. Draw and write observations. Compare results. Teaches scientific observation and recording.", materials: "Beans, cotton wool, glasses, notebooks", duration: "2 weeks observation", competency: "Scientific Inquiry" },
    { strand: "English", activity: "Story Stones", desc: "Paint simple images on smooth stones — a house, tree, person, animal, cloud. Children arrange stones and tell stories. Builds narrative skills, vocabulary and creativity.", materials: "Smooth stones, paint, sealant", duration: "60 mins total", competency: "Communication and Creativity" },
    { strand: "Social Studies", activity: "Community Map", desc: "Children draw their route from home to school. Mark key landmarks — shops, churches, rivers, roads. Share and compare maps. Builds geographical thinking and community awareness.", materials: "Large paper, markers", duration: "50 mins", competency: "Critical Thinking" },
  ],
  "Grade 7": [
    { strand: "Mathematics", activity: "Budgeting Challenge", desc: "Give teams KSh 5000 budget to plan a class party for 30 people. Research real prices online or from shops. Prepare itemised budget. Present and justify decisions. Applies algebra, ratios and financial literacy.", materials: "Budget worksheets, devices for research", duration: "2 lessons", competency: "Financial Literacy and Problem Solving" },
    { strand: "Integrated Science", activity: "Water Quality Testing", desc: "Collect water samples from different sources — tap, river, rain, borehole. Test pH, turbidity, smell. Compare results. Discuss purification methods. Real-world environmental science.", materials: "pH strips, sample containers, microscope if available", duration: "2 lessons", competency: "Scientific Inquiry and Environmental Awareness" },
    { strand: "English", activity: "Podcast Production", desc: "Research a local issue — deforestation, youth unemployment, climate. Write script. Record using phone. Edit and share. Combines research, writing, speaking and digital skills.", materials: "Smartphones, free audio editing app", duration: "1 week project", competency: "Communication and Digital Literacy" },
    { strand: "Business Studies", activity: "Mini Enterprise", desc: "Teams identify a school need, create a product or service, price it, market it and sell to classmates and teachers. Keep accounts. Analyse profit and loss. Real entrepreneurship in action.", materials: "Startup budget of KSh 200 per team", duration: "3 weeks", competency: "Entrepreneurship and Financial Literacy" },
  ],
};

const PARENT_GUIDES = [
  { title: "What CBC Actually Is", content: "CBC (Competency Based Curriculum) replaced the old 8-4-4 system. Instead of memorising facts for exams, children develop competencies — real skills like critical thinking, creativity, communication and problem solving. Assessment is continuous, not just end-of-year exams." },
  { title: "How to Support Learning at Home", content: "CBC learning happens everywhere, not just school. Ask your child what they did in school — not what they learned, what they DID. Discuss news events. Cook together and talk about nutrition. Count change at the shop. Every activity is a learning opportunity." },
  { title: "Understanding Portfolios", content: "Your child builds a portfolio — a collection of their best work, projects and activities. Unlike exams, portfolios show growth over time. Help your child organise their portfolio. Celebrate progress, not just perfect results." },
  { title: "The Assessment System", content: "CBC uses formative assessment — ongoing evaluation rather than one final exam. Teachers observe children working, assess projects and give feedback. Grades use: Exceeds Expectation (EE), Meets Expectation (ME), Approaches Expectation (AE), Below Expectation (BE)." },
  { title: "Supporting Different Learning Styles", content: "CBC recognises that children learn differently. Some are visual learners, some auditory, some kinesthetic. If your child struggles with reading, try audiobooks. If they struggle with maths, use physical objects to count. There is no one right way to learn." },
  { title: "Transition to Junior Secondary (Grade 7-9)", content: "Grade 7 marks the start of Junior Secondary — a significant transition. Children now have subject teachers instead of one class teacher. They encounter more complex content and are expected to think more independently. Support your child through this transition with patience and encouragement." },
];

export default function CBCPage() {
  const [activeGrade, setActiveGrade] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("Learning Areas");
  const [activeSection, setActiveSection] = useState("Grades");

  const grade = GRADES.find(g => g.level === activeGrade);
  const learningAreas = activeGrade ? LEARNING_AREAS[activeGrade] || [] : [];
  const activities = activeGrade ? ACTIVITY_GUIDES[activeGrade] || ACTIVITY_GUIDES["Grade 3"] : [];

  return (
    <div className="min-h-screen bg-offwhite">
      <nav className="bg-aubergine px-6 md:px-12 py-4 flex justify-between items-center sticky top-0 z-10">
        <Link href="/dashboard" className="font-serif text-xl text-offwhite">
          Focus<span className="text-saffron">Fora</span>
        </Link>
        <div className="flex items-center gap-4">
          {activeGrade && (
            <button onClick={() => setActiveGrade(null)}
              className="text-offwhite/60 text-xs hover:text-saffron transition-colors uppercase tracking-wider">
              ← All Grades
            </button>
          )}
          <Link href="/dashboard" className="text-offwhite/60 text-xs hover:text-saffron transition-colors uppercase tracking-wider">
            Dashboard
          </Link>
        </div>
      </nav>

      <div className="px-6 md:px-12 py-10 max-w-5xl mx-auto">
        {!activeGrade ? (
          <>
            <p className="ff-section-eyebrow mb-2">Kenya Institute of Curriculum Development</p>
            <h1 className="font-serif text-4xl text-aubergine font-light mb-2">CBC Guides</h1>
            <p className="text-[#5A4060] text-sm font-light mb-2">
              Complete guides for every grade — for teachers, parents and learners.
            </p>
            <p className="text-saffron text-xs font-medium mb-8">
              ✦ PP1 through Grade 9 · All learning areas · Activity guides · Parent explainers
            </p>

            {/* Section tabs */}
            <div className="flex gap-2 mb-8">
              {["Grades", "Activity Guides", "Parent Guide"].map(s => (
                <button key={s} onClick={() => setActiveSection(s)}
                  className={`text-xs font-medium px-4 py-2 rounded-sm transition-all ${
                    activeSection === s ? "bg-aubergine text-offwhite" : "bg-white border border-aubergine/10 text-[#5A4060] hover:border-aubergine/30"
                  }`}>
                  {s}
                </button>
              ))}
            </div>

            {activeSection === "Grades" && (
              <>
                {/* Pre-Primary */}
                <div className="mb-8">
                  <h2 className="font-serif text-xl text-aubergine mb-4 flex items-center gap-2">
                    <span className="text-saffron">✦</span> Pre-Primary (Ages 4-6)
                  </h2>
                  <div className="grid grid-cols-2 gap-3">
                    {GRADES.slice(0, 2).map(g => (
                      <button key={g.level} onClick={() => setActiveGrade(g.level)}
                        className="bg-saffron-pale p-5 rounded-sm text-left hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group border border-aubergine/[0.06]">
                        <div className="text-3xl mb-2">{g.icon}</div>
                        <div className="font-serif text-lg text-aubergine font-semibold">{g.level}</div>
                        <div className="text-xs text-[#5A4060]">{g.name} · {g.age}</div>
                        <div className="text-saffron text-xs font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity">Explore →</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Lower Primary */}
                <div className="mb-8">
                  <h2 className="font-serif text-xl text-aubergine mb-4 flex items-center gap-2">
                    <span className="text-saffron">✦</span> Lower Primary (Grades 1-3)
                  </h2>
                  <div className="grid grid-cols-3 gap-3">
                    {GRADES.slice(2, 5).map(g => (
                      <button key={g.level} onClick={() => setActiveGrade(g.level)}
                        className="bg-white p-5 rounded-sm text-left hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group border border-aubergine/[0.06]">
                        <div className="text-3xl mb-2">{g.icon}</div>
                        <div className="font-serif text-lg text-aubergine font-semibold">{g.level}</div>
                        <div className="text-xs text-[#5A4060]">{g.age}</div>
                        <div className="text-saffron text-xs font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity">Explore →</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Upper Primary */}
                <div className="mb-8">
                  <h2 className="font-serif text-xl text-aubergine mb-4 flex items-center gap-2">
                    <span className="text-saffron">✦</span> Upper Primary (Grades 4-6)
                  </h2>
                  <div className="grid grid-cols-3 gap-3">
                    {GRADES.slice(5, 8).map(g => (
                      <button key={g.level} onClick={() => setActiveGrade(g.level)}
                        className="bg-white p-5 rounded-sm text-left hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group border border-aubergine/[0.06]">
                        <div className="text-3xl mb-2">{g.icon}</div>
                        <div className="font-serif text-lg text-aubergine font-semibold">{g.level}</div>
                        <div className="text-xs text-[#5A4060]">{g.age}</div>
                        <div className="text-saffron text-xs font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity">Explore →</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Junior Secondary */}
                <div className="mb-8">
                  <h2 className="font-serif text-xl text-aubergine mb-4 flex items-center gap-2">
                    <span className="text-saffron">✦</span> Junior Secondary (Grades 7-9)
                  </h2>
                  <div className="grid grid-cols-3 gap-3">
                    {GRADES.slice(8).map(g => (
                      <button key={g.level} onClick={() => setActiveGrade(g.level)}
                        className="bg-aubergine/5 p-5 rounded-sm text-left hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group border border-aubergine/[0.06]">
                        <div className="text-3xl mb-2">{g.icon}</div>
                        <div className="font-serif text-lg text-aubergine font-semibold">{g.level}</div>
                        <div className="text-xs text-[#5A4060]">{g.age}</div>
                        <div className="text-saffron text-xs font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity">Explore →</div>
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}

            {activeSection === "Activity Guides" && (
              <div className="space-y-6">
                {Object.entries(ACTIVITY_GUIDES).map(([grade, activities]) => (
                  <div key={grade}>
                    <h2 className="font-serif text-xl text-aubergine mb-4">{grade} Activities</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {activities.map((act, i) => (
                        <div key={i} className="bg-white border border-aubergine/[0.06] rounded-sm p-5">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-serif text-base text-aubergine font-semibold">{act.activity}</h3>
                            <span className="text-[10px] bg-saffron-pale text-saffron px-2 py-0.5 rounded-sm">{act.duration}</span>
                          </div>
                          <p className="text-xs text-saffron mb-2">{act.strand}</p>
                          <p className="text-sm text-[#5A4060] leading-relaxed mb-3">{act.desc}</p>
                          <div className="flex flex-wrap gap-3 text-xs text-aubergine/50">
                            <span>📦 {act.materials}</span>
                            <span>🎯 {act.competency}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeSection === "Parent Guide" && (
              <div className="space-y-4">
                <div className="bg-aubergine rounded-sm p-6 mb-6">
                  <h2 className="font-serif text-2xl text-offwhite mb-2">For Parents & Guardians</h2>
                  <p className="text-offwhite/60 text-sm font-light">Everything you need to support your child through CBC — explained clearly.</p>
                </div>
                {PARENT_GUIDES.map((guide, i) => (
                  <div key={i} className="bg-white border border-aubergine/[0.06] rounded-sm p-6">
                    <h3 className="font-serif text-lg text-aubergine mb-3 flex items-center gap-2">
                      <span className="text-saffron font-light">{i + 1}.</span> {guide.title}
                    </h3>
                    <p className="text-sm text-[#5A4060] leading-relaxed">{guide.content}</p>
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <>
            {/* Grade detail view */}
            <div className="bg-aubergine rounded-sm p-6 mb-8">
              <p className="text-saffron text-xs uppercase tracking-widest mb-1">{grade?.icon} CBC · {grade?.age}</p>
              <h1 className="font-serif text-3xl text-offwhite font-light">{grade?.level} — {grade?.name}</h1>
            </div>

            <div className="flex gap-2 mb-6">
              {["Learning Areas", "Activities", "Assessment"].map(tab => (
                <button key={tab} onClick={() => setActiveTab(tab)}
                  className={`text-xs font-medium px-4 py-2 rounded-sm transition-all ${
                    activeTab === tab ? "bg-aubergine text-offwhite" : "bg-white border border-aubergine/10 text-[#5A4060]"
                  }`}>
                  {tab}
                </button>
              ))}
            </div>

            {activeTab === "Learning Areas" && (
              <div className="space-y-4">
                {learningAreas.length > 0 ? learningAreas.map((area, i) => (
                  <div key={i} className="bg-white border border-aubergine/[0.06] rounded-sm p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{area.icon}</span>
                      <h3 className="font-serif text-lg text-aubergine font-semibold">{area.name}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {area.strands.map((strand: string) => (
                        <span key={strand} className="text-xs bg-saffron-pale text-aubergine px-3 py-1 rounded-sm">
                          ✦ {strand}
                        </span>
                      ))}
                    </div>
                  </div>
                )) : (
                  <div className="text-center py-12">
                    <p className="text-[#5A4060] text-sm">Content for {activeGrade} coming soon.</p>
                  </div>
                )}
              </div>
            )}

            {activeTab === "Activities" && (
              <div className="grid md:grid-cols-2 gap-4">
                {activities.length > 0 ? activities.map((act, i) => (
                  <div key={i} className="bg-white border border-aubergine/[0.06] rounded-sm p-5">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-serif text-base text-aubergine font-semibold">{act.activity}</h3>
                      <span className="text-[10px] bg-saffron-pale text-saffron px-2 py-0.5 rounded-sm">{act.duration}</span>
                    </div>
                    <p className="text-xs text-saffron mb-2">{act.strand}</p>
                    <p className="text-sm text-[#5A4060] leading-relaxed mb-3">{act.desc}</p>
                    <div className="text-xs text-aubergine/50">📦 {act.materials}</div>
                  </div>
                )) : (
                  <div className="col-span-2 text-center py-12">
                    <p className="text-[#5A4060] text-sm">Activities for {activeGrade} coming soon.</p>
                  </div>
                )}
              </div>
            )}

            {activeTab === "Assessment" && (
              <div className="space-y-4">
                {[
                  { level: "EE", name: "Exceeds Expectation", desc: "The learner has surpassed the expected level. They demonstrate deeper understanding, can apply knowledge in new contexts and help peers.", color: "bg-green-50 border-green-200 text-green-800" },
                  { level: "ME", name: "Meets Expectation", desc: "The learner has achieved the expected level of competency. They demonstrate the required knowledge, skills and attitudes.", color: "bg-blue-50 border-blue-200 text-blue-800" },
                  { level: "AE", name: "Approaches Expectation", desc: "The learner is progressing toward the expected level but has not yet fully achieved it. Additional support and practice needed.", color: "bg-yellow-50 border-yellow-200 text-yellow-800" },
                  { level: "BE", name: "Below Expectation", desc: "The learner requires significant additional support to reach the expected level. Intervention and differentiated instruction recommended.", color: "bg-red-50 border-red-200 text-red-800" },
                ].map(level => (
                  <div key={level.level} className={`border rounded-sm p-5 ${level.color}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-serif text-2xl font-bold">{level.level}</span>
                      <span className="font-medium text-sm">{level.name}</span>
                    </div>
                    <p className="text-sm leading-relaxed">{level.desc}</p>
                  </div>
                ))}
                <div className="bg-aubergine rounded-sm p-5 mt-4">
                  <h3 className="font-serif text-lg text-offwhite mb-2">Continuous Assessment Tests (CATs)</h3>
                  <p className="text-offwhite/60 text-sm font-light">CBC uses continuous assessment rather than one final exam. Teachers observe learners working, assess portfolios, projects and activities throughout the term. This gives a fuller picture of each learner's development.</p>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
