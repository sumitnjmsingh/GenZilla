// app/api/pdf-summarize/route.ts
import { NextRequest, NextResponse } from "next/server";
import pdfParse from "pdf-parse/lib/pdf-parse.js";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;


    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const parsed = await pdfParse(buffer);

    const text = parsed.text;
    const summarizerResponse = await fetch("http://localhost:8000/api/summarize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    const result = await summarizerResponse.json();
    return NextResponse.json({ summary: result.summary });
  } catch (err) {
    console.error("PDF summarization error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
