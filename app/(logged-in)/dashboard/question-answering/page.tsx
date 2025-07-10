"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { MessageSquare, Loader } from "lucide-react";

export default function QuestionAnsweringPage() {
  const [context, setContext] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim() || !context.trim()) return;

    try {
      setLoading(true);
      const response = await fetch(
        "http://localhost:8000/api/question-answer",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ context: context, question: question }),
        }
      );
      setLoading(false);

      if (!response.ok) throw new Error("Failed to fetch answer");

      const data = await response.json();
      setAnswer(data.answer);
      setQuestion("");
    } catch (error) {
      console.error("Error fetching answer:", error);
      setAnswer(`Error fetching answer for: "${question}"`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-green-50">
      <header className="flex justify-between items-center p-6 bg-white/80 shadow-sm backdrop-blur">
        <h1 className="text-2xl font-bold text-green-700 flex items-center gap-2">
          <MessageSquare className="h-6 w-6" />
          AI Question Answering
        </h1>
        <Link href="/dashboard">
          <Button className="bg-green-300 hover:bg-green-400 text-green-900">
            Back to Dashboard
          </Button>
        </Link>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-2xl bg-white/90 rounded-lg shadow p-6 flex flex-col gap-4 border border-green-200">
          <p className="text-green-700 font-medium text-center">
            Provide some context and ask your question.
          </p>

          <form onSubmit={handleAsk} className="flex flex-col gap-4">
            <textarea
              disabled={loading}
              rows={5}
              placeholder="Enter context or background information..."
              value={context}
              onChange={(e) => setContext(e.target.value)}
              className="p-3 rounded border border-green-300 bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-green-400"
            />

            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <input
                disabled={loading}
                type="text"
                placeholder="Type your question here..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="flex-1 p-3 rounded border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-green-400"
              />
              <Button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2 justify-center py-6"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader className="h-4 w-4 animate-spin" />
                    Loading
                  </>
                ) : (
                  "Ask"
                )}
              </Button>
            </div>
          </form>
        </div>

        {answer && (
          <div className="w-full max-w-3xl mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded shadow border border-green-200">
              <p className="text-green-800">{answer}</p>
            </div>
          </div>
        )}
      </main>

      <div className="fixed bottom-4 right-4 opacity-10 text-green-400">
        <MessageSquare className="h-24 w-24" />
      </div>
    </div>
  );
}
