"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { Globe } from "lucide-react";

export default function TranslationPage() {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState<string | null>(null);

  const handleTranslate = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: inputText }),
      });

      if (!response.ok) {
        throw new Error("Translation API failed.");
      }

      const data = await response.json();
      setTranslatedText(data.translated_text);
    } catch (error) {
      console.error("Translation error:", error);
      setTranslatedText("⚠️ Error translating text. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 to-green-50 flex flex-col relative overflow-hidden">
      {/* Decorative Globe icon */}
      <div className="absolute -top-10 -right-10 text-teal-200 opacity-20">
        <Globe className="w-[300px] h-[300px] rotate-12" />
      </div>

      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-white/70 backdrop-blur shadow z-10">
        <h1 className="text-3xl font-extrabold text-teal-700 flex items-center gap-2">
          <Globe className="h-6 w-6 text-teal-500" />
          Translation
        </h1>
        <Link href="/dashboard">
          <Button className="bg-teal-500 hover:bg-teal-600 text-white">
            Back to Dashboard
          </Button>
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center items-center p-6 z-10">
        <form
          onSubmit={handleTranslate}
          className="bg-white rounded-xl shadow-lg p-6 w-full max-w-lg flex flex-col gap-4 border border-teal-200"
        >
          <label className="text-teal-700 font-semibold">
            Enter text to translate:
          </label>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type something here..."
            className="w-full p-3 rounded border border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder-teal-400"
            rows={4}
          />
          <Button
            type="submit"
            className="bg-teal-500 hover:bg-teal-600 text-white self-end"
          >
            Translate
          </Button>
        </form>

        {/* Display Translated Text */}
        {translatedText && (
          <div className="mt-6 bg-white rounded-xl shadow p-4 border border-teal-300 max-w-lg text-teal-800">
            <p className="font-medium">Translation Result:</p>
            <p>{translatedText}</p>
          </div>
        )}
      </main>

      {/* Extra Decorative Globe */}
      <div className="absolute bottom-4 left-4 opacity-10 text-teal-400">
        <Globe className="h-24 w-24 animate-spin-slow" />
      </div>
    </div>
  );
}
