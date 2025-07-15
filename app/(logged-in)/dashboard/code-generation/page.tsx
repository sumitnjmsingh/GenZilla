"use client";

import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CodeGenerationPage() {
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState("");
  const [generatedCode, setGeneratedCode] = useState<string>("");

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!description.trim()) return;
    setLoading(true);

    try {
      const response = await fetch(
        "https://genzilla-pythonbackend.onrender.com/api/code-generation",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: description }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to generate code");
      }

      const data = await response.json();

      const newCode = data.code || "// No code generated. Please try again.";

      setGeneratedCode(newCode);
      setDescription("");
    } catch (error) {
      console.error("Code generation error:", error);
      setGeneratedCode("Error generating code. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white p-8 flex flex-col items-center">
      <div className="max-w-3xl w-full bg-gray-800/90 rounded-lg shadow-lg p-6 flex flex-col items-center gap-6 border border-gray-600">
        <h1 className="text-4xl font-extrabold text-cyan-400 mb-2 font-mono tracking-wide">
          Code Generation
        </h1>
        <p className="text-gray-300 text-center mb-4 font-light">
          Enter a description and let the AI generate code snippets for you.
        </p>

        <form
          onSubmit={handleGenerate}
          className="w-full flex flex-col gap-4 items-center"
        >
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the functionality you want..."
            className="w-full px-4 py-2 border border-cyan-500 rounded font-mono bg-gray-900 text-cyan-300 placeholder-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <Button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 text-white w-full"
            disabled={loading}
          >
             {loading ? (
              <div className="flex items-center justify-center gap-2">
                <LoaderCircle className="animate-spin h-5 w-5" />
                <span>Generating...</span>
              </div>
            ) : (
              "Generate Code"
            )}
          </Button>
        </form>

        <Link href="/dashboard" className="w-full">
          <Button className="bg-gray-600 hover:bg-gray-700 text-white w-full">
            Back to Dashboard
          </Button>
        </Link>
      </div>

      {generatedCode && (
        <div className="max-w-6xl w-full mt-8">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-4 font-mono">
            Generated Code Snippets
          </h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gray-800/90 rounded-lg shadow p-4 border border-cyan-400 flex flex-col">
              <pre className="bg-gray-900 text-green-400 text-xs p-2 rounded overflow-x-auto">
                {generatedCode}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
