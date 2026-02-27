import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { content, title } = await req.json();

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json({ result: "API key not configured." }, { status: 500 });
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 500,
        messages: [{
          role: "user",
          content: `Simplify this research paper for a Kenyan university student in 3 clear sentences. Plain English only.

Title: ${title}
Abstract: ${content}`
        }]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ result: `API Error: ${data.error?.message || "Unknown error"}` });
    }

    const result = data.content?.[0]?.text || "Could not simplify.";
    return NextResponse.json({ result });

  } catch (err: any) {
    return NextResponse.json({ result: `Error: ${err.message}` });
  }
}
