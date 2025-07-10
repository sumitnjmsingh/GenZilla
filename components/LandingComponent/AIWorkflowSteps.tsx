"use client";

import { CheckCircle } from "lucide-react";

const steps = [
  {
    title: "Explore",
    desc: "Browse a wide range of AI tools for content creation, code assistance, and more",
    step: 1,
  },
  {
    title: "Select Tool",
    desc: "Choose from text summarization, translation, image generation, captioning, and other GenAI capabilities",
    step: 2,
  },
  {
    title: "Generate",
    desc: "Submit your input and let our AI models—powered by Hugging Face & LangChain—do the work instantly",
    step: 3,
  },
  {
    title: "Refine",
    desc: "Edit, copy, or enhance generated results using built-in controls and additional AI suggestions",
    step: 4,
  },
  {
    title: "Download / Share",
    desc: "Export content, download images, or share outputs across your workflow with ease",
    step: 5,
    isRightAligned: true,
  },
];

export default function AIWorkflowSteps() {
  return (
    <section className="bg-[#0A0C2C] text-white py-16 px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Text */}
        <div className="text-white space-y-6 z-10">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Instantly access and manage powerful Generative AI tools for text,
            code, and image creation — all in one platform
          </h2>
        </div>

        {/* Right Flow Chart */}
        <div className="relative bg-[#151744] rounded-xl p-6 border border-indigo-700">
          <div className="flex flex-col gap-6">
            {steps.map(({ title, desc, step, isRightAligned }) => (
              <div
                key={step}
                className={`flex items-start justify-between ${
                  isRightAligned ? "pl-12" : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center text-sm font-bold text-black bg-lime-400 w-6 h-6 rounded-full p-1">
                    {step}
                  </div>
                  <div
                    className={`${isRightAligned ? "text-right w-full" : ""}`}
                  >
                    <p className="text-white font-semibold text-lg">{title}</p>
                    <p className="text-sm text-indigo-200">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer line */}
          <div className="mt-10 flex justify-center text-sm text-indigo-300 gap-6 border-t border-indigo-600 pt-4">
            <span>Create</span>
            <span>|</span>
            <span>Generate</span>
            <span>|</span>
            <span>Explore</span>
          </div>
        </div>
      </div>
    </section>
  );
}
