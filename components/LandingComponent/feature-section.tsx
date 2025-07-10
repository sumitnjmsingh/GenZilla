"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Rocket, Users } from "lucide-react";

const features = [
  {
    id: 1,
    title: "AI Summarization",
    desc: "Effortlessly distill complex content into concise insights. Just paste your article or upload a file, and our AI will do the rest.",
    icon: <Sparkles size={120} strokeWidth={1.2} />,
  },
  {
    id: 2,
    title: "Content Generation",
    desc: "Generate engaging blogs, social posts, or emails. Select the tone, provide a few keywords, and hit generate.",
    icon: <Rocket size={120} strokeWidth={1.2} />,
  },
  {
    id: 3,
    title: "Translation & Paraphrasing",
    desc: "Translate or reword content across languages while preserving intent and tone. Great for localization and academic use.",
    icon: <Users size={120} strokeWidth={1.2} />,
  },
];

export default function FeatureSliderSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="w-full py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-2 text-center">
            <h2 className="text-3xl font-bold text-black z-20 ">
              Explore{" "}
              <span className="inline-block transform bg-gradient-to-r from-blue-500 to-gray-800 font-extrabold bg-clip-text text-transparent transition-transform duration-300 ease-in-out">
                GenerativeAI
              </span>{" "}
              Features
            </h2>
            <p className="text-gray-900 mt-2">
              Scroll or wait to discover all the tools
            </p>
          </div>

          <div className="relative h-[400px] md:h-[450px] overflow-hidden rounded-3xl shadow-xl p-6 bg-[#151744]">
            <AnimatePresence mode="wait">
              <motion.div
                key={features[current].id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-4 p-4"
              >
                <div className="text-[#948979] md:w-1/2 flex justify-center md:justify-around">
                  {features[current].icon}
                </div>
                <div className="text-center md:text-left md:w-1/2">
                  <h3 className="text-2xl font-semibold text-[#948979] brightness-150">
                    {features[current].title}
                  </h3>
                  <p className="mt-4 text-white/30 text-base">
                    {features[current].desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex justify-center gap-3">
            {features.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-3 w-3 rounded-full transition-all ${
                  i === current ? "bg-lime-600 w-6" : "bg-gray-800"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
