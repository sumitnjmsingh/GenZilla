import Link from "next/link";
import {
  BrainCircuit,
} from "lucide-react";

export default function HeroSection() {
  return (
    <>
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
        <BrainCircuit className="w-[100rem] h-[100rem] text-gray-300 dark:text-gray-600/10" />
      </div>
      <section className="flex flex-col justify-center items-center text-center py-24 px-6 relative z-10 overflow-hidden">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight z-10">
          Welcome to{" "}
          <span className="inline-block transform rotate-[-3deg] bg-gradient-to-r from-blue-400 to-gray-500 bg-clip-text text-transparent hover:rotate-[1deg] transition-transform duration-300 ease-in-out">
            GenZilla
          </span>
        </h1>
<p className="text-lg md:text-xl max-w-2xl text-gray-600 mb-6 z-10">
  Elevate your workflow with AI tools for summarization, paraphrasing,
  translation, and more.
</p>
        <Link
          href="/dashboard"
          className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium shadow transition inline-block z-10"
        >
          Get Started
        </Link>
      </section>
    </>
  );
}