import Image from "next/image";

export default function TestimonialSection() {
  return (
    <>
      <section className="py-16 px-6 relative bg-[#0A0C2C]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#948979]">
          What Our Users Say
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {[
            {
              name: "Alex Johnson",
              quote:
                "GenZilla has transformed how I approach research – it's streamlined and efficient.",
              avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
              name: "Maria Rodriguez",
              quote:
                "The AI tools are top-notch. I can summarize and repurpose content quickly and easily.",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#151744] rounded-xl p-8 shadow-xl transition hover:shadow-xl group"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={56}
                  height={56}
                  className="w-14 h-14 rounded-full border-2 border-teal-200 shadow-sm transition-transform group-hover:scale-110"
                />
              </div>
              <p className="italic text-neutral-400 mb-4 text-center">
                &quot;{testimonial.quote}&quot;
              </p>
              <p className="font-medium text-white text-center">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
