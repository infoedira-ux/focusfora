import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Simplify a research paper or complex text
export async function simplifyContent(
  content: string,
  level: "primary" | "kcse" | "university" | "professional" = "kcse"
): Promise<string> {
  const levelMap = {
    primary: "a Grade 6 student",
    kcse: "a Form 4 student preparing for KCSE",
    university: "a first-year university student",
    professional: "someone studying for a professional exam like CPA",
  };

  const message = await anthropic.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 1024,
    messages: [
      {
        role: "user",
        content: `You are a brilliant Kenyan educator. Simplify the following content for ${levelMap[level]}.
        
Use clear, simple English. Break it into short paragraphs. Use examples from everyday Kenyan life where helpful.
Format with clear headings. Make it engaging and easy to remember.

Content to simplify:
${content.substring(0, 3000)}`,
      },
    ],
  });

  return (message.content[0] as { text: string }).text;
}

// Generate quiz questions from content
export async function generateQuiz(
  content: string,
  numQuestions = 5,
  subject = "General"
): Promise<QuizQuestion[]> {
  const message = await anthropic.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 1500,
    messages: [
      {
        role: "user",
        content: `You are a Kenyan exam question setter. Generate ${numQuestions} multiple choice questions from this ${subject} content.

Return ONLY valid JSON in this exact format, nothing else:
{
  "questions": [
    {
      "question": "Question text here?",
      "options": ["A) Option one", "B) Option two", "C) Option three", "D) Option four"],
      "correct": "A",
      "explanation": "Brief explanation why A is correct"
    }
  ]
}

Content:
${content.substring(0, 2000)}`,
      },
    ],
  });

  const text = (message.content[0] as { text: string }).text;
  const parsed = JSON.parse(text.replace(/```json|```/g, "").trim());
  return parsed.questions;
}

// Generate a study summary
export async function generateSummary(
  content: string,
  format: "bullet" | "paragraph" | "mindmap" = "bullet"
): Promise<string> {
  const message = await anthropic.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 800,
    messages: [
      {
        role: "user",
        content: `Summarize this content in ${format} format for a Kenyan student. 
Be concise, clear and memorable. Focus on key facts they need to remember for exams.

Content:
${content.substring(0, 2500)}`,
      },
    ],
  });

  return (message.content[0] as { text: string }).text;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correct: string;
  explanation: string;
}
