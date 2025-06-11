import { Sparkles, Rocket, Users } from "lucide-react";

export default function FeatureSection() {
  return (
    <>
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Key Features
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: <Sparkles size={32} />,
              title: "AI Summarization",
              desc: "Effortlessly distill complex content into concise insights.",
            },
            {
              icon: <Rocket size={32} />,
              title: "Content Generation",
              desc: "Produce engaging blog posts, social media content, and more.",
            },
            {
              icon: <Users size={32} />,
              title: "Translation & Paraphrasing",
              desc: "Refine or translate your content for clear communication.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl shadow-md border border-gray-200 bg-white/80 backdrop-blur-md transition-transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-teal-600 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 text-center">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 text-center">
                {feature.desc}
              </p>
              <div className="mt-4 h-0.5 w-2/3 mx-auto bg-gradient-to-r from-teal-400 to-blue-400 group-hover:scale-x-110 transition-transform origin-center" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
