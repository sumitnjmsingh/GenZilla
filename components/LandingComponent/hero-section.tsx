import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0"></div>
      <section className="flex flex-col justify-center items-center text-center py-24 px-6 relative z-10 overflow-hidden">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight z-10 text-black brightness-150">
          Welcome to{" "}
          <span className="inline-block transform rotate-[-3deg] bg-gradient-to-r from-blue-500 to-gray-800 bg-clip-text text-transparent hover:rotate-[1deg] transition-transform duration-300 ease-in-out">
            GenZilla
          </span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl text-black mb-6 z-10">
          Elevate your workflow with AI tools for summarization, paraphrasing,
          translation, and more.
        </p>
        <Link
          href="/dashboard"
          className="bg-lime-600 hover:bg-lime-700 text-black px-8 py-3 rounded-full font-medium shadow transition inline-block z-10"
        >
          Get Started
        </Link>
      </section>
    </>
  );
}
