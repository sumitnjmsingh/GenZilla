"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { useState } from "react";

export default function ContentGenerationPage() {
  const [content, setContent] = useState<string>("");
  const [input, setInput] = useState("");

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    try {
      const response = await fetch(
        "http://localhost:8000/api/generate-content",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ "prompt": input }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to generate content");
      }

      const data = await response.json();
      setContent(data.content);
      setInput("");
    } catch (error) {
      console.error("Content generation error:", error);
      setContent(` Error generating content for: "${input}"`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-yellow-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none flex justify-center items-center">
        <Sparkles className="h-[300px] w-[300px] text-yellow-100/40 animate-pulse" />
      </div>

      <header className="flex justify-between items-center p-6 bg-yellow-100/80 shadow-md backdrop-blur z-10">
        <h1 className="text-3xl font-extrabold text-yellow-800 flex items-center gap-2">
          <Sparkles className="h-6 w-6" />
          Content Generation
        </h1>
        <Link href="/dashboard">
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900">
            Back to Dashboard
          </Button>
        </Link>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center p-8 z-10">
        <div className="w-full max-w-xl bg-white/80 backdrop-blur rounded-xl shadow-lg p-6 flex flex-col gap-4 border border-yellow-200">
          <p className="text-yellow-700 font-semibold text-center text-lg">
            Generate engaging content for blogs, social media, and more!
          </p>
          <form
            onSubmit={handleGenerate}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="text"
              placeholder="Describe what you want to generate..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-3 rounded border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-yellow-400"
            />
            <Button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white"
            >
              Generate
            </Button>
          </form>
        </div>

        { content && (
        <div className="w-full max-w-2xl mt-8 grid grid-cols-1  gap-4">
            <div
              className="bg-white/90 rounded shadow p-4 border border-yellow-200 text-yellow-900"
            >
              {content.split("\n").map((line, index) => (
                <p key={index} className="mb-2 last:mb-0">
                  {line.trim() || "No content generated."}
                </p>
              ))}
            </div>
        </div>
        )}
      </main>

      <div className="absolute bottom-4 left-4 opacity-10 text-yellow-400">
        <Sparkles className="h-24 w-24" />
      </div>
    </div>
  );
}
