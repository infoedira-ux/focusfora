"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Free Unsplash images — education themed
const GRADE_IMAGES: Record<string, string> = {
  "PP1": "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&q=80",
  "PP2": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80",
  "Grade 1": "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80",
  "Grade 2": "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80",
  "Grade 3": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&q=80",
  "Grade 4": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=80",
  "Grade 5": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&q=80",
  "Grade 6": "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&q=80",
  "Grade 7": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80",
  "Grade 8": "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400&q=80",
  "Grade 9": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80",
};

const ACTIVITY_IMAGES: Record<string, string> = {
  "art": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&q=80",
  "math": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&q=80",
  "science": "https://images.unsplash.com/photo-1532094349884-543559b8e78d?w=400&q=80",
  "reading": "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&q=80",
  "outdoor": "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=400&q=80",
  "music": "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&q=80",
  "cooking": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80",
  "garden": "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80",
  "technology": "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&q=80",
  "drama": "https://images.unsplash.com/photo-1503095396549-807759245b35?w=400&q=80",
  "sports": "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=400&q=80",
  "writing": "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&q=80",
};

const GRADES = [
  { level: "PP1", name: "Pre-Primary 1", age: "4-5 yrs", icon: "🌱", color: "bg-green-50 border-green-200" },
  { level: "PP2", name: "Pre-Primary 2", age: "5-6 yrs", icon: "🌿", color: "bg-green-50 border-green-200" },
  { level: "Grade 1", name: "Grade 1", age: "6-7 yrs", icon: "⭐", color: "bg-yellow-50 border-yellow-200" },
  { level: "Grade 2", name: "Grade 2", age: "7-8 yrs", icon: "⭐⭐", color: "bg-yellow-50 border-yellow-200" },
  { level: "Grade 3", name: "Grade 3", age: "8-9 yrs", icon: "⭐⭐⭐", color: "bg-yellow-50 border-yellow-200" },
  { level: "Grade 4", name: "Grade 4", age: "9-10 yrs", icon: "🎯", color: "bg-blue-50 border-blue-200" },
  { level: "Grade 5", name: "Grade 5", age: "10-11 yrs", icon: "🎯🎯", color: "bg-blue-50 border-blue-200" },
  { level: "Grade 6", name: "Grade 6", age: "11-12 yrs", icon: "🎓", color: "bg-blue-50 border-blue-200" },
  { level: "Grade 7", name: "Grade 7", age: "12-13 yrs", icon: "🔥", color: "bg-aubergine/5 border-aubergine/20" },
  { level: "Grade 8", name: "Grade 8", age: "13-14 yrs", icon: "🔥🔥", color: "bg-aubergine/5 border-aubergine/20" },
  { level: "Grade 9", name: "Grade 9", age: "14-15 yrs", icon: "🏆", color: "bg-aubergine/5 border-aubergine/20" },
];

const LEARNING_AREAS: Record<string, any[]> = {
  "PP1": [
    { name: "Language Activities", icon: "🗣️", strands: ["Listening and Speaking", "Pre-reading", "Pre-writing", "Motor Development"] },
    { name: "Mathematical Activities", icon: "🔢", strands: ["Numbers 1-10", "Sorting and Classifying", "Patterns", "Shapes"] },
    { name: "Environmental Activities", icon: "🌍", strands: ["Self and Family", "Animals and Plants", "Weather", "Community Helpers"] },
    { name: "Psychomotor & Creative Arts", icon: "🎨", strands: ["Drawing", "Painting", "Music and Movement", "Drama"] },
    { name: "Religious Education", icon: "✝️", strands: ["CRE", "IRE"] },
  ],
  "PP2": [
    { name: "Language Activities", icon: "🗣️", strands: ["Phonological Awareness", "Pre-reading Skills", "Pre-writing Skills", "Oral Communication"] },
    { name: "Mathematical Activities", icon: "🔢", strands: ["Numbers 1-20", "Addition Concepts", "Subtraction Concepts", "Measurement", "Geometry"] },
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
    { name: "Kiswahili", icon: "🇰🇪", strands: ["Mazungumzo", "Kusoma", "Kuandika", "Sarufi"] },
    { name: "Mathematics", icon: "🔢", strands: ["Numbers up to 999", "Addition and Subtraction", "Multiplication", "Fractions", "Measurement"] },
    { name: "Environmental Activities", icon: "🌍", strands: ["Plants", "Animals", "Weather and Climate", "Our Community"] },
    { name: "Creative Arts", icon: "🎨", strands: ["Drawing and Painting", "Craft", "Music", "Dance and Drama"] },
    { name: "Physical Education", icon: "⚽", strands: ["Athletics", "Games", "Swimming"] },
    { name: "Religious Education", icon: "✝️", strands: ["CRE", "IRE", "HRE"] },
  ],
  "Grade 3": [
    { name: "English", icon: "📖", strands: ["Listening and Speaking", "Reading", "Writing", "Grammar and Vocabulary"] },
    { name: "Kiswahili", icon: "🇰🇪", strands: ["Kusikiliza na Kuzungumza", "Kusoma", "Kuandika", "Sarufi"] },
    { name: "Mathematics", icon: "🔢", strands: ["Numbers up to 9999", "Operations", "Fractions", "Geometry", "Measurement", "Data Handling"] },
    { name: "Integrated Science", icon: "🔬", strands: ["Living Things", "Materials", "Forces and Energy", "Earth and Space"] },
    { name: "Social Studies", icon: "🌍", strands: ["Our County", "Citizenship", "Economic Activities"] },
    { name: "Creative Arts & Sports", icon: "🎨", strands: ["Visual Arts", "Performing Arts", "Sports"] },
    { name: "Religious Education", icon: "✝️", strands: ["CRE", "IRE", "HRE"] },
  ],
  "Grade 4": [
    { name: "English", icon: "📖", strands: ["Oracy", "Reading", "Writing", "Grammar"] },
    { name: "Kiswahili / KSL", icon: "🇰🇪", strands: ["Mazungumzo", "Kusoma", "Kuandika", "Sarufi"] },
    { name: "Mathematics", icon: "🔢", strands: ["Number", "Algebra", "Measurement", "Geometry", "Statistics"] },
    { name: "Integrated Science", icon: "🔬", strands: ["Biological", "Physical", "Chemical", "Earth and Environment"] },
    { name: "Social Studies", icon: "🌍", strands: ["Geography of Kenya", "History of Kenya", "Citizenship"] },
    { name: "Creative Arts & Sports", icon: "🎨", strands: ["Visual Arts", "Music", "Dance", "Drama", "Sports"] },
    { name: "Religious Education", icon: "✝️", strands: ["CRE", "IRE", "HRE"] },
    { name: "Life Skills", icon: "💡", strands: ["Self Awareness", "Relationships", "Decision Making", "Problem Solving"] },
  ],
  "Grade 5": [
    { name: "English", icon: "📖", strands: ["Listening and Speaking", "Reading", "Writing", "Language Structure"] },
    { name: "Kiswahili / KSL", icon: "🇰🇪", strands: ["Kusikiliza na Kuzungumza", "Kusoma", "Kuandika", "Muundo wa Lugha"] },
    { name: "Mathematics", icon: "🔢", strands: ["Number and Operations", "Algebra", "Measurement", "Geometry", "Data and Probability"] },
    { name: "Integrated Science", icon: "🔬", strands: ["Living Things", "Matter", "Energy", "Earth and Space Science"] },
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
    { name: "English", icon: "📖", strands: ["Listening and Speaking", "Reading", "Writing", "Grammar", "Literature"] },
    { name: "Kiswahili / KSL", icon: "🇰🇪", strands: ["Kusikiliza", "Kusoma", "Kuandika", "Fasihi", "Sarufi"] },
    { name: "Mathematics", icon: "🔢", strands: ["Number", "Algebra", "Geometry", "Measurement", "Statistics", "Financial Mathematics"] },
    { name: "Integrated Science", icon: "🔬", strands: ["Biology", "Chemistry", "Physics", "Environmental Science"] },
    { name: "Social Studies", icon: "🌍", strands: ["Geography", "History and Government", "Economics", "Citizenship"] },
    { name: "Pre-Technical & Pre-Career", icon: "🔧", strands: ["Technical Drawing", "Construction", "Electrical", "Career Guidance"] },
    { name: "Creative Arts & Sports", icon: "🎨", strands: ["Visual Arts", "Music", "Performing Arts", "Sports Science"] },
    { name: "Agriculture & Nutrition", icon: "🌾", strands: ["Land and Soil", "Crops", "Livestock", "Nutrition"] },
    { name: "Religious Education", icon: "✝️", strands: ["CRE", "IRE", "HRE"] },
    { name: "Foreign Languages", icon: "🌐", strands: ["French", "German", "Mandarin", "Arabic"] },
  ],
  "Grade 8": [
    { name: "English", icon: "📖", strands: ["Oracy", "Reading", "Writing", "Grammar", "Literature"] },
    { name: "Kiswahili / KSL", icon: "🇰🇪", strands: ["Mazungumzo", "Kusoma", "Kuandika", "Fasihi", "Sarufi"] },
    { name: "Mathematics", icon: "🔢", strands: ["Number Theory", "Algebra", "Geometry", "Statistics", "Financial Maths"] },
    { name: "Integrated Science", icon: "🔬", strands: ["Cells and Organisms", "Matter and Energy", "Forces", "Ecosystems"] },
    { name: "Social Studies", icon: "🌍", strands: ["Physical Geography", "Human Geography", "History", "Government", "Economics"] },
    { name: "Pre-Technical Studies", icon: "🔧", strands: ["Technical Drawing", "Building Technology", "Electrical", "Metalwork"] },
    { name: "Creative Arts & Sports", icon: "🎨", strands: ["Applied Visual Arts", "Music Theory", "Performing Arts", "Sports"] },
    { name: "Agriculture & Nutrition", icon: "🌾", strands: ["Soil Science", "Crop Production", "Animal Science", "Food Technology"] },
    { name: "Business Studies", icon: "💼", strands: ["Entrepreneurship", "Financial Literacy", "Record Keeping", "Marketing"] },
    { name: "Religious Education", icon: "✝️", strands: ["CRE", "IRE", "HRE"] },
  ],
  "Grade 9": [
    { name: "English", icon: "📖", strands: ["Advanced Oracy", "Critical Reading", "Creative Writing", "Grammar", "Literature"] },
    { name: "Kiswahili / KSL", icon: "🇰🇪", strands: ["Mazungumzo ya Juu", "Kusoma kwa Kina", "Uandishi", "Fasihi", "Sarufi ya Juu"] },
    { name: "Mathematics", icon: "🔢", strands: ["Advanced Algebra", "Trigonometry", "Statistics", "Financial Maths", "Calculus Intro"] },
    { name: "Integrated Science", icon: "🔬", strands: ["Advanced Biology", "Advanced Chemistry", "Advanced Physics", "Environmental Science"] },
    { name: "Social Studies", icon: "🌍", strands: ["Regional Geography", "World History", "Government", "Economics", "Global Citizenship"] },
    { name: "Pre-Technical Studies", icon: "🔧", strands: ["Advanced Drawing", "Construction Technology", "Electrical Systems", "ICT"] },
    { name: "Creative Arts & Sports", icon: "🎨", strands: ["Professional Visual Arts", "Advanced Music", "Theatre", "Sports Leadership"] },
    { name: "Agriculture & Nutrition", icon: "🌾", strands: ["Agribusiness", "Advanced Crop Science", "Veterinary Basics", "Food Science"] },
    { name: "Business Studies", icon: "💼", strands: ["Business Planning", "Accounting", "Marketing", "Enterprise Skills"] },
    { name: "Religious Education", icon: "✝️", strands: ["CRE", "IRE", "HRE"] },
    { name: "Foreign Languages", icon: "🌐", strands: ["French", "German", "Mandarin", "Arabic"] },
  ],
};

const ALL_ACTIVITIES: Record<string, any[]> = {
  "PP1": [
    { activity: "Story Circle with Actions", strand: "Language", image: "drama", duration: "20 mins", age: "4-5", materials: "No materials needed", competency: "Communication and Collaboration", teacher_note: "Sit children in a circle on the floor. Use exaggerated facial expressions and voices. Encourage shy children by giving them simple repeated lines.", portfolio: "Take a photo of children during the activity. Write one sentence about what each child contributed.", desc: "Tell a simple story — a farmer, a cow, and rain. At key moments (the cow moos, the rain falls) everyone does an action together. Ask children to predict what happens next. Repeat their ideas back to build vocabulary." },
    { activity: "Stone Sorting Safari", strand: "Mathematics", image: "outdoor", duration: "25 mins", age: "4-5", materials: "Stones, leaves, sticks collected outside", competency: "Critical Thinking", teacher_note: "Let children collect their own objects — ownership increases engagement. Accept multiple sorting criteria. Ask 'why did you put this here?' to build reasoning language.", portfolio: "Photograph each child's sorted collection with a label card.", desc: "Go outside and collect 10-15 natural objects each. Return inside and sort by colour, size, texture. Count each group. Which group has the most? Which has the fewest? Build a simple graph with the objects." },
    { activity: "Rain Painting", strand: "Creative Arts", image: "art", duration: "40 mins", age: "4-5", materials: "Paper, powder paint, outdoor space or water spray", competency: "Creativity and Curiosity", teacher_note: "If it is not raining, use a spray bottle to simulate rain. Let children observe what happens before analysing. This combines science exploration with creative expression.", portfolio: "Display finished paintings with the child's name and one sentence: 'I made this by...'", desc: "Put drops of powder paint on paper. Take outside in light rain or spray with water. Watch patterns form. Bring inside and observe while drying. Discuss: what happened? Why did the colours move?" },
    { activity: "My Family Drawing", strand: "Environmental Activities", image: "writing", duration: "30 mins", age: "4-5", materials: "Paper, crayons, pencils", competency: "Self Awareness and Identity", teacher_note: "Accept all family structures without comment. Some children may draw grandparents, aunties, or guardians as family. All are correct. Ask each child to tell you about their drawing.", portfolio: "Display drawings on a class family wall. Each child's drawing is their first portfolio piece.", desc: "Each child draws their family — as many people as they know. Name each person in the drawing. Ask: who takes care of you? What do they do? Builds identity, family awareness and oral vocabulary." },
    { activity: "Body Parts Song and Dance", strand: "Language / PE", image: "music", duration: "15 mins", age: "4-5", materials: "No materials needed", competency: "Communication and Physical Development", teacher_note: "Do this as a transition activity between lessons. Children who are restless will refocus after physical movement. Can be done in Kiswahili for language integration.", portfolio: "Note which children can name 10+ body parts accurately.", desc: "Sing and point: 'Head, shoulders, knees and toes' — but speed up each time! Then switch to Kiswahili body parts. Then invent new verses: 'Eyes and ears and nose and cheeks.' Children love creating their own verses." },
    { activity: "Seed Planting", strand: "Environmental Activities", image: "garden", duration: "30 mins + daily observation", age: "4-5", materials: "Bean seeds, small cups, soil, water", competency: "Scientific Curiosity", teacher_note: "Each child plants their own seed so they feel ownership. Check daily — children who remember to water their plant are developing responsibility. Connect to nutrition: beans are food.", portfolio: "Children draw their plant each week. By week 3, they have a growth sequence — their first science portfolio.", desc: "Each child plants a bean seed in a cup of soil. Water gently. Place on windowsill. Check every day: what do you see? When the first shoot appears — celebration! Discuss: what does the plant need to grow?" },
  ],
  "PP2": [
    { activity: "Letter Sound Hunt", strand: "Language", image: "reading", duration: "25 mins", age: "5-6", materials: "Magazine pictures, scissors, glue, paper", competency: "Literacy Foundation", teacher_note: "Focus on one letter sound per session. Connect to objects in the classroom. Children who can hear initial sounds are ready for formal reading instruction.", portfolio: "Each letter collage becomes a page in the child's personal alphabet book.", desc: "Choose a letter — say 'B'. Hunt through old magazines for pictures starting with that sound. Cut and paste them onto a big B. Say each word clearly. 'Ball, banana, butterfly...' Display all children's letters on the alphabet wall." },
    { activity: "Number Line Jump", strand: "Mathematics", image: "sports", duration: "20 mins", age: "5-6", materials: "Chalk or tape on floor, number cards 0-20", competency: "Number Sense", teacher_note: "Physical movement helps number sense develop. Children who struggle with abstract numbers often understand when they can jump on them. This is kinesthetic learning at its best.", portfolio: "Record which number range each child can navigate confidently.", desc: "Draw a number line on the floor from 0 to 20 (chalk outside or tape inside). Call a number — children jump to it. Then: 'Jump 3 more!' Where are you now? 'Jump 2 back!' Mathematical language: forward, backward, more, less, before, after." },
    { activity: "Weather Scientist", strand: "Environmental Activities", image: "science", duration: "10 mins daily", age: "5-6", materials: "Weather chart, crayons", competency: "Scientific Observation", teacher_note: "Make this a daily routine — first 10 minutes of school. The child who is 'weather scientist' for the day feels important. Consistency builds vocabulary and observation skills.", portfolio: "The completed monthly weather chart is a portfolio piece showing data collection.", desc: "Each morning, the day's 'Weather Scientist' looks outside and draws today's weather on the class chart: sunny, cloudy, rainy, windy. At month end, count each type. Which weather happened most? Create a simple bar chart." },
    { activity: "Shape City", strand: "Mathematics / Creative Arts", image: "art", duration: "45 mins", age: "5-6", materials: "Coloured paper, scissors, glue, large background paper", competency: "Geometry and Creativity", teacher_note: "Pre-cut shapes for children who struggle with scissors. Accept all interpretations of 'city' — some children will make rural scenes, space, or animals. All are valid explorations of shape.", portfolio: "Shape cities make beautiful classroom displays. Photograph and add shape vocabulary labels.", desc: "Use only shapes — circles, squares, rectangles, triangles — to build a city scene. Houses are rectangles and triangles. The sun is a circle. Windows are squares. Name every shape as you place it. Can you find all four shapes in your city?" },
    { activity: "Community Helper Roleplay", strand: "Environmental Activities", image: "drama", duration: "40 mins", age: "5-6", materials: "Simple props — bandage, toy tools, notebooks", competency: "Social Awareness", teacher_note: "Assign roles before the activity. After 15 minutes, rotate roles so every child experiences different work. Discuss after: what did each helper do? Why is their work important?", portfolio: "Each child draws their community helper role. Write the name of the role underneath.", desc: "Set up stations: doctor, teacher, farmer, shopkeeper, police officer. Each child visits each station and 'does the job' for 5 minutes. What tools do they use? What do they help people with? How would we feel without them?" },
    { activity: "Texture Book", strand: "Language / Creative Arts", image: "art", duration: "35 mins", age: "5-6", materials: "Cardboard pages, sandpaper, fabric, bark, cotton wool, foil", competency: "Sensory Exploration and Language", teacher_note: "Texture vocabulary is rich: rough, smooth, bumpy, soft, hard, scratchy. Children who develop rich sensory vocabulary are better writers later. Blind-testing (feel without looking) adds excitement.", portfolio: "Each child's texture book is a complete portfolio piece they can take home to share.", desc: "Each child makes a personal texture book. Stick different textured materials on each page: sandpaper (rough), cotton wool (soft), foil (smooth), bark (bumpy). Write the texture word on each page. Read the book to a friend using only your fingers — no looking!" },
  ],
  "Grade 1": [
    { activity: "Phonics Treasure Hunt", strand: "Literacy", image: "reading", duration: "30 mins", age: "6-7", materials: "Letter cards hidden around classroom, collection bags", competency: "Reading Foundation", teacher_note: "Hide letter cards at varying difficulty levels so all children find success. Children who find their cards can help classmates. Competition should be cooperative, not individual.", portfolio: "Record which blends each child can decode confidently. Track progress termly.", desc: "Hide letter cards around the classroom before children arrive. Each child has a list of sounds to find (sh, ch, th, ai, ee). When they find a card, they write a word using that sound. End by sharing all the words found — create a class phonics wall." },
    { activity: "Counting Market", strand: "Mathematics", image: "cooking", duration: "45 mins", age: "6-7", materials: "Play money, items to buy and sell, price tags", competency: "Number Operations and Financial Literacy", teacher_note: "Prices should match what children can add and subtract at their level. Start with round numbers (KSh 5, 10, 20). The shopkeeper role is particularly good for confident children to practise giving change.", portfolio: "Record which children can add prices accurately and which can give change.", desc: "Set up a classroom shop with everyday items and price tags (5, 10, 20 shillings). Give each child play KSh 50. They must buy exactly 3 items, add up the total, and ask for the right change. The 'shopkeeper' checks the maths. Real-world addition and subtraction." },
    { activity: "Life Cycle Circles", strand: "Environmental Activities", image: "science", duration: "50 mins", age: "6-7", materials: "Large circles drawn on paper, pencils, reference images", competency: "Scientific Understanding", teacher_note: "Start with a familiar organism — a chicken. Children know eggs, chicks, chickens. Then apply the cycle concept to a less familiar organism. Drawing (not writing) allows all levels to participate.", portfolio: "Life cycle circles displayed on classroom wall show conceptual understanding.", desc: "Draw life cycles in circles: egg → caterpillar → chrysalis → butterfly. Frog: egg → tadpole → froglet → frog. Chicken: egg → chick → hen. What do they all have in common? They go round and round — nothing ends, it begins again." },
    { activity: "Sentence Building Blocks", strand: "Literacy", image: "writing", duration: "35 mins", age: "6-7", materials: "Word cards (nouns, verbs, adjectives on different colours)", competency: "Grammar and Writing", teacher_note: "Colour code by word type — nouns (blue), verbs (red), adjectives (yellow). Children learn grammar through colour before they learn the words for word types. This visual system sticks.", portfolio: "Each child photographs or draws their best sentence. Collect in a class sentence book.", desc: "Give each table a set of word cards. Challenge: make the funniest sentence you can. 'The green elephant runs quickly to school.' Then make the longest sentence. Then the shortest. Reading their sentences aloud develops fluency and confidence." },
    { activity: "Kenyan Animal Research Posters", strand: "Environmental Activities / Art", image: "art", duration: "60 mins", age: "6-7", materials: "Large paper, reference books or printed images, colours", competency: "Research Skills and Creativity", teacher_note: "Assign different animals so the class creates a diverse collection. Pair confident and developing learners. The teacher role is to ask questions: 'What does it eat? Where does it live? Is it endangered?'", portfolio: "Animal research posters make a complete classroom wildlife gallery.", desc: "Each child or pair gets a Kenyan animal: elephant, giraffe, lion, zebra, flamingo, crocodile, vervet monkey. Draw and colour the animal. Write three facts. Where does it live? What does it eat? Is it found in Kenya? Present to the class — their first research presentation." },
    { activity: "Rhythm Band", strand: "Creative Arts / Music", image: "music", duration: "30 mins", age: "6-7", materials: "Improvised instruments: tins, bottles with rice, sticks", competency: "Creativity and Cultural Expression", teacher_note: "Making instruments from found materials connects to sustainability values. The creative process of making is as valuable as the performance. Display the finished instruments with labels.", portfolio: "Video or photograph the performance. Each child names their instrument and explains how it makes sound.", desc: "Make instruments from found materials: a tin with stones (shaker), a plastic bottle with rice, two sticks (clapper). Learn a simple pattern: shake-shake-clap-clap. Add a second pattern. Layer them together. You have a rhythm band — perform for another class." },
  ],
  "Grade 2": [
    { activity: "Story Map Adventure", strand: "Literacy", image: "writing", duration: "50 mins", age: "7-8", materials: "Large paper, markers, coloured pencils", competency: "Reading Comprehension and Creativity", teacher_note: "Read the story aloud first, then children create their map from memory and inference. Second reading confirms and adds detail. Children who draw well but struggle with writing find equal success here.", portfolio: "Story maps show comprehension visually. Add a written key for vocabulary development.", desc: "After reading a story, draw the setting as a map. Where did the characters start? Where did they go? What obstacles did they face? Mark the path of the journey. Add illustrations of key events. Compare maps with a partner — what did you remember differently?" },
    { activity: "Multiplication Arrays", strand: "Mathematics", image: "math", duration: "40 mins", age: "7-8", materials: "Buttons, beans or stones, grid paper", competency: "Multiplication Concepts", teacher_note: "Arrays make multiplication visual before it is abstract. 3×4 becomes three rows of four objects. Children who struggle with multiplication tables often understand when they can see and touch the arrays.", portfolio: "Photographs of children's arrays with written equations beside them.", desc: "Arrange buttons in rows and columns. 3 rows of 4 = 12. 4 rows of 3 = still 12! Why? This is the commutative property — but don't use that word yet. Let them discover: does the order matter? Photograph their arrays and write the multiplication sentence beside each." },
    { activity: "Rain Water Experiment", strand: "Environmental Activities", image: "science", duration: "45 mins + observation", age: "7-8", materials: "Bottles, measuring containers, funnels, labels", competency: "Scientific Investigation", teacher_note: "This works best at the start of a rainy season. Connect to water conservation — a real Kenyan issue children understand. Introduce the concept of measuring — why do scientists measure rather than just look?", portfolio: "Data recording sheets become science portfolio pages. Graph rainfall over several days.", desc: "Set up rain collectors in different locations: open ground, under a tree, on the roof edge. After rain, measure how much water each collected. Why are the amounts different? Record over a week and graph. Discuss: where does our water come from? How can we save it?" },
    { activity: "Community Interview Project", strand: "Social Studies / English", image: "writing", duration: "2 lessons", age: "7-8", materials: "Interview question sheets, notebooks", competency: "Communication and Community Awareness", teacher_note: "Prepare simple interview questions in advance. Practice the interview with a classmate before doing it with a real community member. Debrief after: what surprised you? What did you learn that you didn't know?", portfolio: "Written interview report with a drawing of the community member.", desc: "Each child interviews one community member (parent, shopkeeper, teacher, guard). Prepared questions: What is your job? What do you like about it? How does it help our community? Write up the interview. Share with the class. Build a 'Community Helpers' display." },
    { activity: "Mini Greenhouse", strand: "Environmental Activities / Science", image: "garden", duration: "30 mins setup + 2 weeks observation", age: "7-8", materials: "Clear plastic bottles cut in half, soil, seeds, labels", competency: "Scientific Enquiry and Environmental Stewardship", teacher_note: "Plastic bottle greenhouses are a practical sustainability lesson — reusing waste materials. Compare plants grown in the greenhouse vs outside. The greenhouse effect is a real concept introduced through this experiment.", portfolio: "Weekly observation drawings with written notes form a science journal.", desc: "Cut plastic bottles in half. Fill bottom with soil and plant seeds. Place the top half back on as a lid — a miniature greenhouse. Place one beside an uncovered pot with the same seeds. Observe daily: which grows faster? Why might the greenhouse be warmer? Connect to climate science." },
    { activity: "Newspaper Maths", strand: "Mathematics / Literacy", image: "reading", duration: "40 mins", age: "7-8", materials: "Old newspapers, scissors, highlighters", competency: "Real World Maths and Media Literacy", teacher_note: "Old newspapers are free and connect learning to real life. Children discover that maths is everywhere — prices, dates, scores, measurements. This activity develops financial literacy naturally.", portfolio: "Collage of found numbers with mathematical sentences written about them.", desc: "Give each child an old newspaper. Hunt for: the biggest number you can find, prices, dates, temperatures, sports scores. Cut them out and create a number collage. Write a mathematical sentence about each: 'This newspaper costs more than...' 'The score means team A scored ____ more goals than...'" },
  ],
  "Grade 3": [
    { activity: "Market Day Simulation", strand: "Mathematics / Social Studies", image: "cooking", duration: "90 mins", age: "8-9", materials: "Play money, items with price tags, receipt books", competency: "Financial Literacy and Problem Solving", teacher_note: "Assign roles: shopkeepers, customers, bank (teacher). Rotate roles after 30 minutes. Debrief on who made profit and why. Introduce vocabulary: profit, loss, change, receipt, budget.", portfolio: "Each child keeps their receipts and calculates total spending. Compare budgets.", desc: "Set up a complete market: vegetable stall, hardware stall, clothing stall, food stall. Each child gets a budget of KSh 100 and a shopping list. They must buy everything on their list, add up costs, give correct money and check their change. Real financial skills in a safe environment." },
    { activity: "Bean Germination Diary", strand: "Integrated Science", image: "garden", duration: "2 weeks daily observation", age: "8-9", materials: "Beans, cotton wool, glass jars, measurement rulers", competency: "Scientific Method", teacher_note: "Set up jars in different conditions: dark, light, no water, with water. Children observe that all conditions are needed. The controlled experiment teaches scientific method before they know the term.", portfolio: "Daily observation diary with measurements forms a complete science investigation portfolio.", desc: "Plant beans in cotton wool in glass jars. Observe daily for two weeks. Measure the root and shoot growth with a ruler each day. Draw what you see. Write: what changed from yesterday? By the end, graph the growth. Present findings: what do beans need to germinate?" },
    { activity: "Story Stones Narrative", strand: "English / Creative Arts", image: "art", duration: "60 mins", age: "8-9", materials: "Smooth stones, acrylic paint, varnish", competency: "Creative Narrative and Oral Presentation", teacher_note: "Stone painting takes one lesson; story telling takes another. Children swap stones with other groups — they must tell a story with stones they did not paint. Tests narrative flexibility and improvisation.", portfolio: "Photograph the stone sets with a written story outline. Display as a class narrative collection.", desc: "Each group of 4 paints a set of 8 story stones: a character, a place, a problem, a helper, a journey, a danger, a solution, an ending image. Swap stones with another group. Tell a complete story using only the stones you were given. The constraint makes creativity flourish." },
    { activity: "Our County Brochure", strand: "Social Studies", image: "writing", duration: "2 lessons", age: "8-9", materials: "A3 paper, reference materials, colours, photographs cut from magazines", competency: "Geographical Awareness and Communication", teacher_note: "This works best if you focus on the county the school is in. Children should identify real landmarks, real products, and real communities. Connect to identity and pride in local place.", portfolio: "County brochures can be bound into a class 'County Guide' — a real publication.", desc: "Design a tourist brochure for your county. Include: a map showing key places, major economic activities, famous landmarks, traditional foods, cultural practices, reasons to visit. Use colour, headings and images. Present your brochure as a tourist guide to the class." },
    { activity: "Fraction Pizza Party", strand: "Mathematics", image: "cooking", duration: "45 mins", age: "8-9", materials: "Paper circles, scissors, colours", competency: "Fraction Concepts", teacher_note: "Paper pizzas make fractions concrete before they are abstract. Children who cut their pizza into equal pieces naturally understand the concept of equal parts. Connect to real sharing situations.", portfolio: "Each child's fraction pizza set (½, ¼, ⅛, ⅓) with labels forms a mathematics portfolio piece.", desc: "Cut paper circles into pizzas. Fold and cut into halves, quarters, eighths, thirds. How many pieces make a whole? If you eat ¼, how much is left? If you share ½ between 2 people, what fraction does each person get? Order fractions from smallest to largest on a number line." },
    { activity: "Water Cycle in a Bag", strand: "Integrated Science", image: "science", duration: "30 mins setup + observation", age: "8-9", materials: "Clear zip-lock bags, water, blue food colouring, tape", competency: "Earth Science and Environmental Awareness", teacher_note: "Tape bags to the window in direct sunlight. The condensation and evaporation are clearly visible within hours on a hot day. Connect immediately to Kenya's rainfall patterns and drought concerns.", portfolio: "Diagram of the water cycle with labelled observations from the bag experiment.", desc: "Pour 3cm of water (add blue food colouring) into a clear zip-lock bag. Seal it. Tape it to a sunny window. Over the day observe: water evaporates, condenses on the bag sides, drips back down — rain! You have created a mini water cycle. Draw and label what you see." },
  ],
  "Grade 4": [
    { activity: "Kenya Map Making", strand: "Social Studies", image: "writing", duration: "60 mins", age: "9-10", materials: "Outline maps of Kenya, atlases, coloured pencils", competency: "Geographical Thinking", teacher_note: "Start with counties students already know personally. Build outward. Children who have travelled can share knowledge — peer teaching strengthens both teacher and learner.", portfolio: "Completed annotated maps show geographical knowledge. Add a key and compass rose.", desc: "Start with a blank outline of Kenya. Add: the 47 counties (colour-coded by region), major towns, rivers, lakes, national parks, neighbouring countries. Create a key. Present your map: explain two things that surprised you during the research." },
    { activity: "Simple Machines Investigation", strand: "Integrated Science", image: "science", duration: "60 mins", age: "9-10", materials: "Ramp, roller, lever (ruler + eraser), pulley (string + wheel)", competency: "Physics Concepts and Engineering Thinking", teacher_note: "Children should discover the advantage of each machine through testing, not through being told. Ask: is it easier with or without the machine? Why? What jobs use this machine?", portfolio: "Investigation record: prediction, test, result, conclusion for each machine.", desc: "Test the 6 simple machines: lever, wheel and axle, pulley, inclined plane, wedge, screw. For each: predict whether it makes work easier. Test it. Record results. Why do machines make work easier? Where do you see these machines in everyday Kenyan life?" },
    { activity: "Debate Club Starter", strand: "English / Life Skills", image: "drama", duration: "50 mins", age: "9-10", materials: "Motion cards, timer", competency: "Critical Thinking and Communication", teacher_note: "Assign children to argue positions they may not personally hold — this develops empathy and thinking flexibility. Focus on the structure of argument rather than 'winning'. All opinions are valid if supported with reasons.", portfolio: "Written debate speech outline shows structured argumentation skills.", desc: "Introduce a simple motion: 'School uniform should be abolished' or 'Homework should be banned.' Divide into FOR and AGAINST teams. Each team gets 10 minutes to list their arguments. Each speaker gets 2 minutes. Classmates vote on who argued most convincingly — not who they agree with." },
    { activity: "Healthy Plate Challenge", strand: "Agriculture & Nutrition", image: "cooking", duration: "45 mins", age: "9-10", materials: "Paper plates, food magazines, scissors, glue", competency: "Health and Nutrition Awareness", teacher_note: "Kenyan children often have food insecurity contexts. Approach nutrition positively — celebrate locally available nutritious foods. Avoid comparing what families can afford.", portfolio: "Healthy plate collages with written explanation of food groups.", desc: "Using food images from magazines, build the perfect Kenyan healthy plate: ½ vegetables and fruits, ¼ carbohydrates (ugali, rice, bread), ¼ protein (beans, eggs, meat, fish). Label each food group. Calculate: which foods are locally grown in Kenya? Which are imported?" },
    { activity: "Traditional Games Olympics", strand: "Physical Education / Social Studies", image: "sports", duration: "90 mins", age: "9-10", materials: "Chalk, ropes, stones, open space", competency: "Physical Development and Cultural Appreciation", teacher_note: "Interview older family members for forgotten game variations. Each ethnic community has unique traditional games — this diversity is a learning resource. Connect to Olympic values: participation, respect, excellence.", portfolio: "Written description of one traditional game: how to play, where it comes from, what skills it develops.", desc: "Research and teach traditional Kenyan games: Kati (dodge ball), Bano (marbles), Bladder ball, Three sticks. Each group learns one game from an elder, teaches it to the class, explains its cultural origin. Hold a Traditional Games Olympic Day with all games. Celebrate Kenya's play heritage." },
    { activity: "Science Fair Experiment", strand: "Integrated Science", image: "science", duration: "1 week project", age: "9-10", materials: "Varies by experiment chosen", competency: "Scientific Method and Presentation", teacher_note: "Guide children to choose experiments with simple materials available at home. Fair tests are the key concept: change only one variable. The presentation skills are as important as the experiment itself.", portfolio: "Full science fair project: question, hypothesis, method, results, conclusion.", desc: "Each child designs and conducts a fair test experiment. Options: which soil holds most water? Does warm water dissolve sugar faster than cold? Which paper towel is most absorbent? Present findings on a poster: What did I test? What did I predict? What happened? What did I learn?" },
  ],
  "Grade 5": [
    { activity: "Newspaper Journalism", strand: "English", image: "writing", duration: "2 lessons", age: "10-11", materials: "Notebooks, pens, old newspapers for reference", competency: "Functional Writing and Media Literacy", teacher_note: "Teach the inverted pyramid structure: most important information first. Who, What, Where, When, Why in the first paragraph. Children will apply this to writing across all subjects.", portfolio: "Published class newspaper with each child's article. Can be photocopied and distributed.", desc: "Create a class newspaper. Each child is a journalist reporting on a school event, a community issue, or a science discovery. Study real newspaper articles: headline, byline, lead paragraph. Interview sources. Write 200-300 words. Edit each other's work. Publish the class newspaper." },
    { activity: "Ecosystem Diorama", strand: "Integrated Science", image: "outdoor", duration: "3 lessons", age: "10-11", materials: "Shoe boxes, natural materials, modelling clay, paint", competency: "Environmental Systems Thinking", teacher_note: "Assign different Kenyan ecosystems: Lake Victoria, Mara grassland, Mt Kenya forest, coastal mangrove, Northern Frontier desert. The class creates a complete Kenya ecosystem collection.", portfolio: "Diorama with written ecosystem description, food chain, and threats.", desc: "Build a shoe box diorama of a Kenyan ecosystem: savannah, forest, lake, wetland, desert. Include: 5 plants and 5 animals that live there, the food chain, what humans take from this ecosystem, and one threat facing it. Present your ecosystem to the class — you are the expert." },
    { activity: "Financial Literacy Market", strand: "Mathematics / Life Skills", image: "cooking", duration: "2 lessons", age: "10-11", materials: "Budget worksheets, calculator, price lists", competency: "Financial Planning", teacher_note: "Use real Kenyan prices from a recent visit to a local market. The closer to reality, the more meaningful the learning. Connect to family budgeting — respectfully, without exposing family financial situations.", portfolio: "Completed budget plan showing income, expenses, savings calculation.", desc: "You have KSh 5,000 to feed a family of 5 for one week. Use real prices from a local market. Plan a nutritious weekly menu. List all ingredients needed. Calculate the total cost. Are you within budget? If not, what would you change? Present your budget and justify every decision." },
    { activity: "Digital Storytelling", strand: "English / Technology", image: "technology", duration: "2 lessons", age: "10-11", materials: "Smartphones or tablets, free presentation app", competency: "Digital Literacy and Narrative", teacher_note: "One device between two children works well. The child not typing is directing, editing, selecting images — both roles are creative. Free tools: Google Slides, Canva for Education, PowerPoint.", portfolio: "Digital story exported as PDF or presented to class.", desc: "Create a 6-slide digital story about a Kenyan hero: Wangari Maathai, Kipchoge Keino, Mekatilili wa Menza, Dedan Kimathi. Each slide: image, one key fact, written in own words. Add a title slide and conclusion: what can we learn from this person? Present to class." },
    { activity: "Water Purification Challenge", strand: "Integrated Science / Life Skills", image: "science", duration: "60 mins", age: "10-11", materials: "Gravel, sand, charcoal, cotton wool, plastic bottles", competency: "Engineering Design and Environmental Awareness", teacher_note: "Use genuinely dirty water (muddy water from outside). Emphasise that their filter removes dirt but not all pathogens — real water still needs boiling or treatment. Connect to Kenya's water access challenges.", portfolio: "Engineering design process: problem, design, build, test, evaluate, improve.", desc: "Design a water filter using: gravel, sand, charcoal, cotton wool, a plastic bottle. Layer materials, pour dirty water through. How clean is the output water? Compare different designs. Which layer does what job? Connect to how Nairobi's water treatment works. Why does clean water matter?" },
  ],
  "Grade 6": [
    { activity: "Social Enterprise Project", strand: "Business Studies / Life Skills", image: "cooking", duration: "1 week", age: "11-12", materials: "Startup budget KSh 200 per group", competency: "Entrepreneurship and Financial Literacy", teacher_note: "The best enterprises solve a real school problem. Encourage children to identify needs before proposing solutions. Keep accounting simple: income and expenses only. Profit or loss at the end is less important than the process.", portfolio: "Business plan, accounts record, and reflection report.", desc: "Groups identify a school need and create a business to solve it: snack stall, repair service, tutoring service, creative product. Write a one-page business plan. Get KSh 200 startup funding. Run the business for one week. Keep accounts. At week end: what was profit/loss? What worked? What would you change?" },
    { activity: "Heritage Interview Documentary", strand: "Social Studies / English", image: "technology", duration: "2 weeks", age: "11-12", materials: "Smartphones for recording, notebooks", competency: "Historical Inquiry and Digital Literacy", teacher_note: "Many children have grandparents who witnessed Kenya's independence, Mau Mau, or early nation-building. These are primary historical sources. Treat the knowledge of elders with deep respect.", portfolio: "Written interview transcript plus key historical facts discovered.", desc: "Interview a grandparent or elderly community member about Kenya's history. Questions: What was Kenya like in your childhood? What do you remember about independence? What has changed most? What do you wish the young generation knew? Record, transcribe, share with the class. History comes alive." },
    { activity: "Architecture and Design Challenge", strand: "Pre-Technical Studies", image: "technology", duration: "2 lessons", age: "11-12", materials: "Cardboard, straws, tape, ruler, ruler, scissors", competency: "Engineering Thinking and Spatial Reasoning", teacher_note: "Introduce the concept of structural strength: triangles are stronger than squares. Children discover this through testing, not telling. Connect to real Kenyan buildings and infrastructure.", portfolio: "Technical drawing of design plus test results and reflection.", desc: "Challenge: build the tallest freestanding tower using only 20 straws and 30cm of tape. Then: build a bridge from card that holds the most weight. What shapes make structures stronger? Draw your design before building. Test and improve. Connect: how do engineers design real bridges and buildings?" },
    { activity: "Climate Change Action Plan", strand: "Integrated Science / Social Studies", image: "outdoor", duration: "3 lessons", age: "11-12", materials: "Research materials, poster paper", competency: "Environmental Stewardship and Critical Thinking", teacher_note: "Ground this in Kenya's specific climate challenges: irregular rainfall, drought in northern Kenya, flooding in Kisumu, glaciers on Mt Kenya disappearing. Local specificity makes global issues meaningful.", portfolio: "Action plan poster: problem, evidence, local impact, what we can do.", desc: "Research one climate change impact in Kenya: disappearing Lake Turkana water, Mt Kenya glaciers, Mara River flooding, ASAL drought. Understand the cause. Identify who is most affected. Design a community action plan: what can your school do? What can you personally do? Present to school assembly." },
    { activity: "Traditional Food Technology", strand: "Agriculture & Nutrition", image: "cooking", duration: "60 mins", age: "11-12", materials: "Traditional Kenyan foods: fermented milk, dried meat, githeri, sukuma wiki", competency: "Cultural Appreciation and Food Science", teacher_note: "Every Kenyan community has food preservation traditions. This activity should celebrate diversity. Invite parents or grandparents to demonstrate. Connect traditional preservation methods to modern food science.", portfolio: "Recipe card with cultural context, nutritional information, and food science explanation.", desc: "Research traditional Kenyan food preservation methods: drying meat (nyama choma tradition), fermenting milk (mursik), smoking fish (Luo tradition), sun-drying vegetables. Why did communities develop these methods? What is the food science behind them? How do they connect to modern refrigeration and canning?" },
  ],
  "Grade 7": [
    { activity: "Podcast Production", strand: "English", image: "technology", duration: "1 week project", age: "12-13", materials: "Smartphones with voice recorder, free editing app", competency: "Communication and Digital Literacy", teacher_note: "Assign topics relevant to students' lives: social media pressure, peer influence, climate anxiety, career choices. Research is as important as recording. Three drafts minimum before final recording.", portfolio: "Published podcast episode with show notes and script.", desc: "Research a local issue — deforestation, youth unemployment, mental health in schools, plastic pollution. Write a 5-minute podcast script. Interview one expert or community member. Record, edit (remove stumbles, add music intro). Share the podcast with the class and on school notice board." },
    { activity: "Water Quality Investigation", strand: "Integrated Science", image: "science", duration: "2 lessons", age: "12-13", materials: "pH strips, turbidity tubes, sample bottles, water from 5 sources", competency: "Scientific Methodology and Environmental Awareness", teacher_note: "Collect water from genuinely different sources: tap, river, borehole, rainwater, purchased bottled water. Results will differ meaningfully. Discuss: what treatment does each source need to be safe to drink?", portfolio: "Full investigation report with data table, graph, analysis and conclusion.", desc: "Collect water samples from 5 different sources in your community. Test each for: pH, turbidity (clarity), colour, smell. Record data in a table. Graph results. Compare to WHO safe drinking water standards. Conclusion: which source is safest? Which needs the most treatment? What does this tell us about water access inequality?" },
    { activity: "Budget Planning Reality Check", strand: "Mathematics / Business", image: "math", duration: "2 lessons", age: "12-13", materials: "Budget worksheets, current price lists", competency: "Financial Mathematics and Life Planning", teacher_note: "Use real current prices. Children often have no idea what things cost. The shock of discovering that rent, food and transport can easily exceed an entry-level salary is a powerful motivator for career ambition.", portfolio: "Completed monthly budget with reflection: what surprised me, what I will do differently.", desc: "Create a realistic monthly budget for a young adult living alone in Nairobi: rent (estimate for a bedsitter in different areas), food, transport, electricity, water, phone data, clothing, savings. Research real prices. What salary do you need to survive? What salary do you need to thrive? How does this affect your career thinking?" },
    { activity: "Mini Documentary", strand: "English / Social Studies / Technology", image: "technology", duration: "2 weeks", age: "12-13", materials: "Smartphones, free video editing app (CapCut, InShot)", competency: "Research, Communication and Digital Production", teacher_note: "Focus on a genuinely local subject — a community elder, a local business, a historical site nearby. The more local, the more unique the content. Screen the documentaries at a school film festival.", portfolio: "Published video documentary (3-5 minutes) with written production notes.", desc: "Produce a 3-5 minute documentary on a local heritage subject: a traditional craft, a community elder's story, a historical building, a local ecosystem under threat. Script, film, interview, edit. Add title cards and narration. Screen at a class film festival. This is real media production." },
    { activity: "Entrepreneurship Pitch", strand: "Business Studies / Life Skills", image: "drama", duration: "2 lessons", age: "12-13", materials: "Pitch presentation materials, judges (other teachers)", competency: "Entrepreneurship and Presentation", teacher_note: "Invite real entrepreneurs or parents as judges if possible. Feedback from real adults is more motivating than teacher-only feedback. Focus on the problem being solved rather than the product.", portfolio: "Business pitch deck (5 slides minimum) with financial projections.", desc: "Identify a problem in your school or community. Design a business to solve it. Prepare a 5-minute investor pitch: What is the problem? How does your business solve it? Who are your customers? How will you make money? What do you need to start? Pitch to a panel of judges including real business people if possible." },
  ],
  "Grade 8": [
    { activity: "STEM Engineering Challenge", strand: "Integrated Science / Pre-Technical", image: "technology", duration: "3 lessons", age: "13-14", materials: "Limited materials set: cardboard, tape, string, paper clips, rubber bands", competency: "Engineering Design Process", teacher_note: "Constrained resources drive creativity. Groups that run out of tape before finishing must problem-solve without teacher intervention. Debrief focuses on process: what did your group do when things went wrong?", portfolio: "Engineering design portfolio: brief, design sketches, test results, reflection.", desc: "Challenge: design and build a device that transports a raw egg safely across 3 metres without it breaking, using only the provided materials. Teams have 45 minutes to design, build and test. Only one egg per team. Connect to real engineering: crash test dummies, protective packaging, egg drop spacecraft challenges." },
    { activity: "Investigative Journalism", strand: "English / Social Studies", image: "writing", duration: "2 weeks", age: "13-14", materials: "Notebooks, recording device, research access", competency: "Critical Thinking and Communication", teacher_note: "Ethical journalism: teach the difference between fact and opinion. Multiple sources. Right of reply. Accuracy over speed. Connect to media literacy — how do we know if news is true?", portfolio: "Published investigative article (400-600 words) with sources cited.", desc: "Investigate a real local issue: litter in the school, food quality in the canteen, transport challenges for students, air quality near a factory. Gather evidence: photographs, measurements, interviews with at least 3 sources. Write an investigative article. Propose solutions. Submit to the school magazine or notice board." },
    { activity: "Historical Simulation", strand: "Social Studies", image: "drama", duration: "2 lessons", age: "13-14", materials: "Role cards, scenario documents", competency: "Historical Empathy and Critical Thinking", teacher_note: "Assign roles carefully — avoid giving students roles that might feel personally uncomfortable. Debrief is essential: what was it like to be in that role? What choices did people have? What would you have done?", portfolio: "Written reflection: what I learned from being in this historical role.", desc: "Simulate a historical moment: the Lancaster House independence negotiations (1963), the Mau Mau trial, the Nairobi City Council founding. Each student plays a historical figure with defined interests and position. Make decisions as that figure. Debrief: how do historical decisions get made? Who has power? Who doesn't?" },
    { activity: "Financial Investment Simulation", strand: "Business Studies / Mathematics", image: "math", duration: "4 weeks simulation", age: "13-14", materials: "Simulated portfolio sheets, current NSE data", competency: "Financial Literacy and Mathematical Application", teacher_note: "Use real current share prices from the Nairobi Securities Exchange (NSE). The simulation makes abstract financial concepts concrete. Debrief weekly on why prices changed — connect to news events.", portfolio: "Investment portfolio record with weekly tracking, final profit/loss analysis.", desc: "Each student receives simulated KSh 100,000 to invest in 3 companies on the Nairobi Securities Exchange. Research companies before investing. Track share prices weekly for 4 weeks. Calculate weekly portfolio value. Final session: who made the most money? Why? What does this teach about risk and diversification?" },
  ],
  "Grade 9": [
    { activity: "Social Enterprise Launch", strand: "Business Studies / Life Skills", image: "cooking", duration: "Full term project", age: "14-15", materials: "Real startup budget (KSh 500 per group)", competency: "Entrepreneurship, Financial Literacy and Leadership", teacher_note: "Grade 9 students are ready for real business responsibility. The enterprise should operate for a full term, not just one week. Connect to potential career paths — some students may continue their enterprise.", portfolio: "Full business portfolio: plan, accounts, marketing materials, impact report, exit strategy.", desc: "Identify a genuine community need. Launch a social enterprise that both makes money and creates social impact. Options: tutoring younger students, recycling initiative, school supplies cooperative, food production. Operate for one full term. Keep proper accounts. Present annual report to school at term end." },
    { activity: "Extended Research Essay", strand: "English / All Subjects", image: "writing", duration: "3 weeks", age: "14-15", materials: "Research access, citation guide", competency: "Academic Writing and Critical Research", teacher_note: "This prepares students directly for secondary school and ultimately university writing. Teach citation and plagiarism honestly — explain why academic integrity matters. Give feedback on structure before students write the full essay.", portfolio: "2000-word research essay with bibliography — their most advanced writing yet.", desc: "Write a 2000-word research essay on a topic of genuine interest intersecting with curriculum. Examples: 'How has mobile money changed financial inclusion in Kenya?' 'What are the environmental consequences of the Standard Gauge Railway?' Learn: thesis statement, literature review, argument, evidence, conclusion, bibliography." },
    { activity: "TED-Style Talk", strand: "English / Life Skills", image: "drama", duration: "2 weeks preparation", age: "14-15", materials: "Optional slides, timer", competency: "Public Speaking and Intellectual Confidence", teacher_note: "Watch real TED talks together first. Analyse the structure: hook, idea, evidence, story, call to action. No more than 5 minutes. Practice is essential — three rehearsals minimum. Peer feedback between rehearsals.", portfolio: "Video recording of final talk plus written speech notes.", desc: "Develop and deliver a 5-minute TED-style talk on any topic you genuinely care about. Requirements: one clear central idea, at least one personal story, one piece of evidence or data, a call to action for the audience. Video record the final performance. Watch yourself back — what would you improve?" },
    { activity: "Community Impact Project", strand: "All Learning Areas / CAS prep", image: "outdoor", duration: "Full term", age: "14-15", materials: "Varies by project", competency: "Community Service, Leadership and Interdisciplinary Application", teacher_note: "This is a direct preparation for IB CAS and A-Level Extended Project. Students who do this in Grade 9 are significantly better prepared for international curriculum requirements. Document everything — process matters as much as outcome.", portfolio: "Complete project documentation: planning, action, reflection, evidence of impact.", desc: "Design and implement a community impact project addressing a real need in your school or neighbourhood. Examples: school garden, library renovation, awareness campaign, environmental clean-up programme, mentoring younger students. Document everything. At year end, present impact evidence: what changed because of your project?" },
  ],
};

const PARENT_GUIDES = [
  { title: "What CBC Actually Is — And Is Not", icon: "📚", content: "CBC replaced the 8-4-4 system to develop competencies — real skills like critical thinking, creativity, communication and collaboration — not just exam performance. Children are expected to apply knowledge, not just memorise it. Assessment is continuous throughout the year, not just at year end." },
  { title: "How to Support Learning at Home Daily", icon: "🏠", content: "CBC learning happens everywhere. When cooking together, discuss measurements and fractions. When watching news, ask your child what they think about current events. Count change at the shop. Discuss what happened in school — not 'what did you learn?' but 'what did you DO today?' The doing is the learning." },
  { title: "Understanding the Portfolio System", icon: "📁", content: "Your child builds a portfolio — a collection of their best work, projects, artwork and activities across all subjects. Unlike exam papers that disappear, portfolios show growth over time. Ask to see your child's portfolio regularly. Celebrate progress. Ask: what are you most proud of in here? What would you do better if you did it again?" },
  { title: "The Four Assessment Levels Explained", icon: "📊", content: "EE (Exceeds Expectation) — your child is working beyond the expected level. ME (Meets Expectation) — they have achieved what is required. AE (Approaches Expectation) — they are progressing but need more support. BE (Below Expectation) — significant additional help is needed. If your child consistently receives AE or BE, request a meeting with the class teacher immediately." },
  { title: "The Junior Secondary Transition (Grade 7)", icon: "🎓", content: "Grade 7 is Kenya's biggest school transition since primary school began. Children move to Junior Secondary — often a different school or section, different teachers for each subject, more independence expected. Prepare your child: visit the new school together, discuss what will be different, maintain consistent study routines, and watch for signs of anxiety or social difficulty in the first term." },
  { title: "Helping Without Doing the Work", icon: "🤝", content: "CBC expects children to develop independence. Help by asking questions: 'What do you think would happen if...?' 'How could you find that out?' 'What do you already know about this?' Never do the project for your child — even if it looks messy or incomplete. A child's own imperfect work develops competency. Your perfect work teaches nothing except that you are competent." },
  { title: "Screen Time and Digital Learning", icon: "📱", content: "CBC increasingly uses digital tools in Grade 7-9. Supervised screen time for educational purposes is different from unsupervised entertainment. Set clear rules: educational use at the desk or kitchen table, all devices in common areas, no screens after 8pm. Monitor what your child is accessing — not through suspicion but through genuine interest in their learning." },
  { title: "When to Be Concerned", icon: "⚠️", content: "Seek a teacher meeting if your child: consistently avoids school or claims illness on school days, brings home no work or portfolio pieces, cannot name what subjects they are studying, seems socially isolated, or has not improved across two consecutive terms. Early intervention works. Waiting and hoping rarely does." },
];

export default function CBCPage() {
  const [activeGrade, setActiveGrade] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("Learning Areas");
  const [activeSection, setActiveSection] = useState("Grades");

  const grade = GRADES.find(g => g.level === activeGrade);
  const learningAreas = activeGrade ? LEARNING_AREAS[activeGrade] || [] : [];
  const activities = activeGrade ? ALL_ACTIVITIES[activeGrade] || [] : [];

  function shareGrade(level: string) {
    const text = `🌱 *CBC ${level} Guide on Focus Fora*%0A%0ALearning areas, activity guides, and parent tips for ${level}.%0A%0AFree at 👇%0Ahttps://focusfora.vercel.app/cbc`;
    window.open(`https://wa.me/?text=${text}`, "_blank");
  }

  function shareActivity(activity: any) {
    const text = `🎯 *CBC Activity: ${activity.activity}*%0A%0A${activity.strand} · ${activity.duration} · ${activity.age} years%0A%0A${activity.desc.slice(0, 100)}...%0A%0AMore free CBC activities at 👇%0Ahttps://focusfora.vercel.app/cbc`;
    window.open(`https://wa.me/?text=${text}`, "_blank");
  }

  function shareSection() {
    const text = `🌍 *CBC Complete Guides on Focus Fora*%0A%0APP1 through Grade 9 · Learning areas · Activity guides · Parent tips%0A%0AAll free at 👇%0Ahttps://focusfora.vercel.app/cbc`;
    window.open(`https://wa.me/?text=${text}`, "_blank");
  }

  return (
    <div className="min-h-screen bg-offwhite">
      <nav className="bg-aubergine px-6 md:px-12 py-4 flex justify-between items-center sticky top-0 z-10">
        <Link href="/dashboard" className="font-serif text-xl text-offwhite">
          Focus<span className="text-saffron">Fora</span>
        </Link>
        <div className="flex items-center gap-3">
          {activeGrade && (
            <button onClick={() => setActiveGrade(null)}
              className="text-offwhite/60 text-xs hover:text-saffron transition-colors uppercase tracking-wider">
              ← All Grades
            </button>
          )}
          <button onClick={shareSection}
            className="flex items-center gap-1 bg-[#25D366] text-white text-xs font-medium px-3 py-2 rounded-sm hover:bg-[#20bc5a] transition-colors">
            📲 Share
          </button>
          <Link href="/dashboard" className="text-offwhite/60 text-xs hover:text-saffron transition-colors uppercase tracking-wider hidden md:block">
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
            <div className="flex flex-wrap gap-2 mb-8">
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
                {[
                  { label: "Pre-Primary", subtitle: "Ages 4-6", grades: GRADES.slice(0, 2), bg: "bg-green-50" },
                  { label: "Lower Primary", subtitle: "Grades 1-3 · Ages 6-9", grades: GRADES.slice(2, 5), bg: "bg-yellow-50" },
                  { label: "Upper Primary", subtitle: "Grades 4-6 · Ages 9-12", grades: GRADES.slice(5, 8), bg: "bg-blue-50" },
                  { label: "Junior Secondary", subtitle: "Grades 7-9 · Ages 12-15", grades: GRADES.slice(8), bg: "bg-aubergine/5" },
                ].map(section => (
                  <div key={section.label} className="mb-10">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h2 className="font-serif text-xl text-aubergine flex items-center gap-2">
                          <span className="text-saffron">✦</span> {section.label}
                        </h2>
                        <p className="text-xs text-[#5A4060]">{section.subtitle}</p>
                      </div>
                    </div>
                    <div className={`grid grid-cols-2 md:grid-cols-3 gap-4`}>
                      {section.grades.map(g => (
                        <button key={g.level} onClick={() => setActiveGrade(g.level)}
                          className="bg-white border border-aubergine/[0.06] rounded-sm overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group text-left">
                          <div className="relative h-32 overflow-hidden">
                            <img
                              src={GRADE_IMAGES[g.level]}
                              alt={g.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                            />
                            <div className="absolute inset-0 bg-aubergine/30 flex items-end p-3">
                              <span className="text-white font-serif text-lg font-semibold">{g.level}</span>
                            </div>
                          </div>
                          <div className="p-4">
                            <div className="text-2xl mb-1">{g.icon}</div>
                            <div className="text-xs text-[#5A4060]">{g.age}</div>
                            <div className="text-xs text-aubergine/50 mt-1">{learningAreas.length > 0 ? `${(LEARNING_AREAS[g.level] || []).length} learning areas` : ""}</div>
                            <div className="text-saffron text-xs font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Explore →</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </>
            )}

            {activeSection === "Activity Guides" && (
              <div className="space-y-8">
                {Object.entries(ALL_ACTIVITIES).map(([gradeLevel, acts]) => (
                  <div key={gradeLevel}>
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="font-serif text-xl text-aubergine">{gradeLevel} Activities</h2>
                      <button onClick={() => shareGrade(gradeLevel)}
                        className="text-xs bg-[#25D366] text-white px-3 py-1 rounded-sm hover:bg-[#20bc5a] transition-colors">
                        📲 Share
                      </button>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {acts.map((act, i) => (
                        <div key={i} className="bg-white border border-aubergine/[0.06] rounded-sm overflow-hidden group">
                          <div className="relative h-40 overflow-hidden">
                            <img
                              src={ACTIVITY_IMAGES[act.image] || ACTIVITY_IMAGES["outdoor"]}
                              alt={act.activity}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                            />
                            <div className="absolute top-2 right-2 flex gap-1">
                              <span className="bg-aubergine text-offwhite text-[10px] px-2 py-0.5 rounded-sm">{act.duration}</span>
                              <span className="bg-saffron text-aubergine text-[10px] px-2 py-0.5 rounded-sm">{act.age} yrs</span>
                            </div>
                          </div>
                          <div className="p-5">
                            <div className="flex items-start justify-between mb-2">
                              <h3 className="font-serif text-base text-aubergine font-semibold">{act.activity}</h3>
                            </div>
                            <p className="text-xs text-saffron mb-2 font-medium">{act.strand}</p>
                            <p className="text-sm text-[#5A4060] leading-relaxed mb-3">{act.desc}</p>

                            {/* Expandable details */}
                            <div className="border-t border-aubergine/5 pt-3 space-y-2">
                              <div className="flex items-start gap-2 text-xs text-aubergine/60">
                                <span>📦</span><span>{act.materials}</span>
                              </div>
                              <div className="flex items-start gap-2 text-xs text-aubergine/60">
                                <span>🎯</span><span>{act.competency}</span>
                              </div>
                              {act.teacher_note && (
                                <div className="flex items-start gap-2 text-xs text-aubergine/60">
                                  <span>👩‍🏫</span><span><strong>Teacher note:</strong> {act.teacher_note}</span>
                                </div>
                              )}
                              {act.portfolio && (
                                <div className="flex items-start gap-2 text-xs text-aubergine/60">
                                  <span>📁</span><span><strong>Portfolio:</strong> {act.portfolio}</span>
                                </div>
                              )}
                            </div>

                            <button onClick={() => shareActivity(act)}
                              className="mt-3 w-full bg-[#25D366] text-white text-xs font-medium py-2 rounded-sm hover:bg-[#20bc5a] transition-colors">
                              📲 Share this Activity
                            </button>
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
                  <p className="text-offwhite/60 text-sm font-light mb-4">Everything you need to support your child through CBC — written clearly, without jargon.</p>
                  <button onClick={shareSection}
                    className="bg-[#25D366] text-white text-xs font-medium px-4 py-2 rounded-sm hover:bg-[#20bc5a] transition-colors">
                    📲 Share with other parents
                  </button>
                </div>
                {PARENT_GUIDES.map((guide, i) => (
                  <div key={i} className="bg-white border border-aubergine/[0.06] rounded-sm p-6">
                    <h3 className="font-serif text-lg text-aubergine mb-3 flex items-center gap-2">
                      <span>{guide.icon}</span> {guide.title}
                    </h3>
                    <p className="text-sm text-[#5A4060] leading-relaxed">{guide.content}</p>
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <>
            {/* Grade header with image */}
            <div className="relative rounded-sm overflow-hidden mb-8">
              <img
                src={GRADE_IMAGES[activeGrade] || ""}
                alt={activeGrade}
                className="w-full h-48 object-cover"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-aubergine/70 flex items-end p-6">
                <div className="flex-1">
                  <p className="text-saffron text-xs uppercase tracking-widest mb-1">{grade?.icon} CBC · {grade?.age}</p>
                  <h1 className="font-serif text-3xl text-offwhite font-light">{grade?.level} — {grade?.name}</h1>
                </div>
                <button onClick={() => shareGrade(activeGrade)}
                  className="bg-[#25D366] text-white text-xs font-medium px-4 py-2 rounded-sm hover:bg-[#20bc5a] transition-colors">
                  📲 Share
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {["Learning Areas", "Activities", "Assessment", "Portfolio Ideas"].map(tab => (
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
                  <p className="text-center text-[#5A4060] py-12">Content for {activeGrade} coming soon.</p>
                )}
              </div>
            )}

            {activeTab === "Activities" && (
              <div className="grid md:grid-cols-2 gap-4">
                {activities.length > 0 ? activities.map((act, i) => (
                  <div key={i} className="bg-white border border-aubergine/[0.06] rounded-sm overflow-hidden">
                    <div className="relative h-40">
                      <img
                        src={ACTIVITY_IMAGES[act.image] || ACTIVITY_IMAGES["outdoor"]}
                        alt={act.activity}
                        className="w-full h-full object-cover"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                      />
                      <div className="absolute top-2 right-2">
                        <span className="bg-aubergine text-offwhite text-[10px] px-2 py-0.5 rounded-sm">{act.duration}</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-serif text-base text-aubergine font-semibold mb-1">{act.activity}</h3>
                      <p className="text-xs text-saffron mb-2">{act.strand}</p>
                      <p className="text-sm text-[#5A4060] leading-relaxed mb-3">{act.desc}</p>
                      <div className="space-y-1 mb-3">
                        <p className="text-xs text-aubergine/50">📦 {act.materials}</p>
                        <p className="text-xs text-aubergine/50">🎯 {act.competency}</p>
                        {act.teacher_note && <p className="text-xs text-aubergine/50">👩‍🏫 {act.teacher_note}</p>}
                      </div>
                      <button onClick={() => shareActivity(act)}
                        className="w-full bg-[#25D366] text-white text-xs font-medium py-2 rounded-sm hover:bg-[#20bc5a] transition-colors">
                        📲 Share this Activity
                      </button>
                    </div>
                  </div>
                )) : (
                  <p className="col-span-2 text-center text-[#5A4060] py-12">Activities for {activeGrade} coming soon.</p>
                )}
              </div>
            )}

            {activeTab === "Assessment" && (
              <div className="space-y-4">
                {[
                  { level: "EE", name: "Exceeds Expectation", desc: "The learner has surpassed the expected level. Demonstrates deeper understanding, applies knowledge in new contexts and supports peers.", color: "bg-green-50 border-green-300", text: "text-green-800" },
                  { level: "ME", name: "Meets Expectation", desc: "The learner has achieved the expected competency level. Demonstrates required knowledge, skills and attitudes consistently.", color: "bg-blue-50 border-blue-300", text: "text-blue-800" },
                  { level: "AE", name: "Approaches Expectation", desc: "The learner is progressing but has not fully achieved the expected level. Additional support and practice needed.", color: "bg-yellow-50 border-yellow-300", text: "text-yellow-800" },
                  { level: "BE", name: "Below Expectation", desc: "The learner requires significant additional support. Intervention and differentiated instruction are recommended urgently.", color: "bg-red-50 border-red-300", text: "text-red-800" },
                ].map(l => (
                  <div key={l.level} className={`border rounded-sm p-5 ${l.color}`}>
                    <div className={`flex items-center gap-3 mb-2 ${l.text}`}>
                      <span className="font-serif text-2xl font-bold">{l.level}</span>
                      <span className="font-medium">{l.name}</span>
                    </div>
                    <p className={`text-sm ${l.text}`}>{l.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "Portfolio Ideas" && (
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { idea: "Nature Collection Journal", desc: "Pressed leaves, flowers, soil samples collected on nature walks. Each item labelled with name, where found, and one observation.", subject: "Environmental Activities / Science" },
                  { idea: "Mathematics Scrapbook", desc: "Real-world maths: receipts, measurements, shapes found in daily life, graphs of family activities. Shows maths is everywhere.", subject: "Mathematics" },
                  { idea: "Reading Response Journal", desc: "Brief written or drawn responses to every book read. Favourite character, most surprising moment, what you would change.", subject: "English / Literacy" },
                  { idea: "Art Portfolio", desc: "Photographs of all art work with the child's explanation of what they made and what they were trying to express.", subject: "Creative Arts" },
                  { idea: "Science Investigation Records", desc: "Questions asked, experiments conducted, results and conclusions. Shows scientific thinking development across the year.", subject: "Integrated Science" },
                  { idea: "Community Service Record", desc: "Photographs and written reflections on helping in school, family or community. Connects to values and citizenship.", subject: "Life Skills / Social Studies" },
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-aubergine/[0.06] rounded-sm p-5">
                    <h3 className="font-serif text-base text-aubergine font-semibold mb-1">{item.idea}</h3>
                    <p className="text-xs text-saffron mb-2">{item.subject}</p>
                    <p className="text-sm text-[#5A4060] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
