"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";

export default function ParaphrasingPage() {
  const [loading, setLoading] = useState(false);
  const [inputText, setInputText] = useState("");
  const [paraphrase, setParaphrase] = useState<string>("");

  const handleParaphrase = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    setLoading(true);

    try {
      const response = await fetch(
        "https://genzilla-pythonbackend.onrender.com/api/paraphrase",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: inputText }),
        }
      );

      if (!response.ok) throw new Error("Failed to fetch paraphrase");

      const data = await response.json();

      setParaphrase(data.paraphrased_text);
      setInputText("");
    } catch (error) {
      console.error("Error paraphrasing text:", error);
      setParaphrase(`Error paraphrasing: "${inputText}"`);
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 flex flex-col items-center p-8 text-purple-900">
      <div className="max-w-2xl w-full bg-white/90 rounded-lg shadow-lg p-6 flex flex-col gap-6 border border-purple-300">
        <h1 className="text-4xl font-bold text-purple-700 tracking-tight">
          Paraphrasing
        </h1>
        <p className="text-purple-600 text-center font-medium">
          Rewrite your text to improve clarity and style. Let the AI make your
          writing shine!
        </p>

        <form
          onSubmit={handleParaphrase}
          className="flex flex-col gap-4 w-full"
        >
          <textarea
            rows={3}
            placeholder="Enter the text you want to paraphrase..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="p-3 rounded border border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-purple-50 placeholder-purple-400"
          />
          <Button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white w-full"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <LoaderCircle className="animate-spin h-5 w-5" />
                <span>Paraphrasing...</span>
              </div>
            ) : (
              "Paraphrase"
            )}
          </Button>
        </form>

        <Link href="/dashboard" className="w-full">
          <Button className="bg-purple-300 hover:bg-purple-400 text-purple-900 w-full">
            Back to Dashboard
          </Button>
        </Link>
      </div>

      {paraphrase && (
        <div className="max-w-3xl w-full mt-8">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">
            Paraphrased Results
          </h2>
          <div className="grid grid-cols-1">
            <div className="bg-white/90 p-4 rounded shadow border border-purple-300 flex flex-col">
              <p className="text-purple-700">{paraphrase}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
