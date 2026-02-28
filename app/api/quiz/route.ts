import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are a senior KNEC (Kenya National Examinations Council) examiner with 20+ years of experience setting KCSE examinations.

Your task is to generate authentic KCSE-style examination questions that strictly follow:
- Official KCSE structure
- Correct command terms (State, Explain, Describe, Calculate, Distinguish, Outline, Account for)
- Proper mark allocation
- Correct cognitive level for the given Form (1-4)
- Realistic mark schemes matching KNEC standards

Rules:
1. Questions must match the specified Subject, Form level and Topic
2. Difficulty scaling:
   - Form 1: Recall and basic understanding
   - Form 2: Application and structured understanding
   - Form 3: Analytical and multi-step reasoning
   - Form 4: Evaluation, synthesis, complex problem solving
3. Mark Allocation:
   - 1 mark = single clear fact
   - 2 marks = two distinct points
   - 3+ marks = structured explanation or multi-step reasoning
   - Calculation questions MUST show marking breakdown per step
4. Structure — include:
   - 4 short questions (1-2 marks)
   - 4 medium structured (3-5 marks)
   - 2 high-order questions (6+ marks)
5. Marking Scheme: bullet-point format, clear mark per point
6. Each question MUST begin with an official KCSE command term
7. Sum of marks in each question's mark_scheme MUST equal the question's total marks
8. Questions must mirror real KCSE past paper style from 2015-2023
9. Return VALID JSON ONLY — no commentary, no markdown, no text outside JSON`;

function getSubjectInstructions(subject: string): string {
  const s = subject.toLowerCase();
  if (s.includes("math")) {
    return `Mathematics questions must include calculation steps, final answer with units, and marking breakdown per step. Use format: { "type": "calculation", "working_required": true }`;
  }
  if (s.includes("english")) {
    return `English questions may include functional writing, comprehension, grammar transformation and essay prompts with rubric (Content 20, Language 12, Organization 8).`;
  }
  if (s.includes("biology") || s.includes("chemistry") || s.includes("physics")) {
    return `Science questions must include practical-based questions, data interpretation, diagram descriptions and experiment-based reasoning.`;
  }
  return `Generate questions appropriate for the subject's KCSE examination format.`;
}

export async function POST(req: NextRequest) {
  try {
    const { subject, form, topic } = await req.json();

    if (!subject || !form || !topic) {
      return NextResponse.json({ error: "Missing subject, form or topic" }, { status: 400 });
    }

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json({ error: "API key not configured" }, { status: 500 });
    }

    const subjectInstructions = getSubjectInstructions(subject);

    const userPrompt = `Generate 10 KCSE-style exam questions.

Subject: ${subject}
Form: ${form}
Topic: ${topic}
Paper Type: ${subject.toLowerCase().includes("math") ? "Paper 1" : "Paper 2 structured"}

${subjectInstructions}

Return this exact JSON structure:
{
  "subject": "${subject}",
  "form": ${form},
  "topic": "${topic}",
  "paper_type": "Paper 2",
  "total_marks": 40,
  "questions": [
    {
      "question_number": 1,
      "type": "short_answer",
      "marks": 2,
      "question_text": "...",
      "mark_scheme": [
        { "point": "...", "marks": 1 },
        { "point": "...", "marks": 1 }
      ]
    }
  ]
}

CRITICAL: Return ONLY the JSON. No text before or after. No markdown backticks.`;

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 4000,
        temperature: 0.2,
        system: SYSTEM_PROMPT,
        messages: [{ role: "user", content: userPrompt }]
      })
    });

    const data = await response.json();
    if (!response.ok) {
      return NextResponse.json({ error: data.error?.message || "Claude API error" }, { status: 500 });
    }

    const text = data.content?.[0]?.text || "";
    
    // Clean and parse JSON
    const cleaned = text.replace(/```json|```/g, "").trim();
    const quiz = JSON.parse(cleaned);

    return NextResponse.json(quiz);

  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
