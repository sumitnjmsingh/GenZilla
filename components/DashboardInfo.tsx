import { sections } from "@/utils/tasks";

const DashboardInfo = () => {
  return (
    <section className="flex flex-col gap-12 mt-16">
      {sections.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-6 rounded-3xl shadow-2xl p-6 border border-white/10 transition hover:scale-[1.02] bg-gradient-to-br ${item.color} text-white`}
          >
            <div className="flex-shrink-0 flex items-center justify-center w-24 h-24 rounded-full bg-white/20 backdrop-blur-md shadow-lg">
              <Icon size={48} className="text-white" />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="leading-relaxed">{item.desc}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default DashboardInfo;
