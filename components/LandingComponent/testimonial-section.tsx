export default function TestimonialSection() {
  return (
    <>
      <section className="py-16 px-6 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
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
              className="bg-white border border-gray-200 rounded-xl p-8 shadow-md transition hover:shadow-xl group"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full border-2 border-teal-200 shadow-sm transition-transform group-hover:scale-110"
                />
              </div>
              <p className="italic text-gray-600 mb-4 text-center">
                "{testimonial.quote}"
              </p>
              <p className="font-medium text-gray-800 text-center">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
