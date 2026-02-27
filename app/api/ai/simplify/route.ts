import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { content, title } = await req.json();
  
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.ANTHROPIC_API_KEY!,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 500,
      messages: [{
        role: "user",
        content: `You are a brilliant Kenyan educator. Simplify this research paper abstract for a university student in 3-4 clear sentences. Use simple English. No jargon.

Title: ${title}
Abstract: ${content}`
      }]
    })
  });

  const data = await response.json();
  const result = data.content?.[0]?.text || "Could not simplify this paper.";
  return NextResponse.json({ result });
}
