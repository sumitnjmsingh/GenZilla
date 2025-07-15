"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function CodeExplanationPage() {
  const [codeSnippet, setCodeSnippet] = useState("");
  const [language, setLanguage] = useState("c++");
  const [explanation, setExplanation] = useState<string>("");

  const handleExplain = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!codeSnippet.trim() || !language.trim()) return;

    try {
      const response = await fetch(
        "https://genzilla-pythonbackend.onrender.com/api/code-explain",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ code: codeSnippet, language }),
        }
      );

      if (!response.ok) throw new Error("Failed to fetch explanation");

      const data = await response.json();

      const newExplanation = data.explanation || "No explanation provided.";

      setExplanation(newExplanation);
      setCodeSnippet("");
    } catch (error) {
      console.error("Error explaining code:", error);
      setExplanation("⚠️ Error getting explanation from backend.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 to-emerald-200 p-8 flex flex-col items-center">
      <div className="max-w-3xl w-full bg-white/80 rounded-lg shadow border border-emerald-300 p-6 flex flex-col items-center gap-6">
        <h1 className="text-4xl font-mono font-bold text-emerald-700 mb-2">
          Code Explanation
        </h1>
        <p className="text-gray-700 text-center mb-4 font-light">
          Get AI-powered explanations, refactor suggestions, or debugging tips
          for your code snippets.
        </p>

        <form
          onSubmit={handleExplain}
          className="w-full flex flex-col gap-4 items-center"
        >
          {/* Language input */}
          <input
            type="text"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            placeholder="Enter programming language (e.g., python, c++)"
            className="w-full px-4 py-2 border border-emerald-400 rounded bg-white/90 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />

          {/* Code input */}
          <textarea
            value={codeSnippet}
            onChange={(e) => setCodeSnippet(e.target.value)}
            placeholder="Paste your code snippet here..."
            rows={5}
            className="w-full px-4 py-2 border border-emerald-400 rounded font-mono bg-white/90 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          ></textarea>

          <Button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 text-white w-full"
          >
            Explain Code
          </Button>
        </form>

        <Link href="/dashboard" className="mt-2 w-full">
          <Button className="bg-gray-800 hover:bg-gray-900 text-white w-full">
            Back to Dashboard
          </Button>
        </Link>
      </div>

      {/* Explanation results */}
      {explanation && (
        <div className="max-w-6xl w-full mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            AI Explanations
          </h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col p-4 border-l-4 border-emerald-400">
              <p className="text-gray-700 text-sm">{explanation}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
