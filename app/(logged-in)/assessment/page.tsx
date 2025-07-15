"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  {
    id: 1,
    question: "What type of generative AI tool are you most interested in?",
    options: [
      "Text Summarization",
      "Code Generation",
      "Image Generation",
      "Chatbot",
    ],
  },
  {
    id: 2,
    question: "How often do you or your team use GenAI tools?",
    options: ["Daily", "Weekly", "Monthly", "Rarely"],
  },
  {
    id: 3,
    question:
      "Which language model provider are you currently using or planning to use?",
    options: ["Hugging Face", "OpenAI", "Google Gemini", "Not Sure"],
  },
];

export default function AssessmentPage() {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (questionId: number, option: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen px-6 py-16 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur shadow-lg rounded-2xl p-8 border border-purple-200">
        <h1 className="text-4xl font-extrabold text-center text-purple-900 mb-12 font-mono">
          🎯 GenZilla AI Assessment
        </h1>

        {!submitted ? (
          <div className="space-y-12">
            {questions.map((q) => (
              <div key={q.id} className="space-y-4">
                <h2 className="text-xl font-bold text-purple-800">
                  {q.question}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {q.options.map((opt) => (
                    <motion.button
                      key={opt}
                      whileTap={{ scale: 0.95 }}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => handleAnswer(q.id, opt)}
                      className={`transition border-2 px-4 py-3 rounded-xl text-sm font-medium shadow-sm
                        ${
                          answers[q.id] === opt
                            ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-transparent"
                            : "bg-white text-purple-700 border-purple-300 hover:bg-purple-50"
                        }
                      `}
                    >
                      {opt}
                    </motion.button>
                  ))}
                </div>
              </div>
            ))}

            <Button
              onClick={handleSubmit}
              className="mt-10 w-full py-3 text-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 transition-all duration-200"
            >
              Submit Assessment
            </Button>
          </div>
        ) : (
          <AnimatePresence>
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center text-purple-800"
            >
              <CheckCircle2 className="mx-auto h-20 w-20 text-green-500 mb-6 animate-pulse" />
              <h2 className="text-3xl font-bold mb-2">
                Assessment Submitted ✅
              </h2>
              <p className="text-md text-purple-600">
                Thanks for sharing! We&#39;ll tailor GenAI experiences that
                align with your needs.
              </p>
              <div className="mt-6 text-sm text-gray-500">
                Explore your personalized{" "}
                <span className="underline font-medium">dashboard</span> next.
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </main>
  );
}
