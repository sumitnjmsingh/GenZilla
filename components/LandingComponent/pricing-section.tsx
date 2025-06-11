import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function PricingSection() {
  return (
    <>
      <section className="py-16 px-6  relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {[
            {
              title: "Free",
              price: "$0",
              features: [
                "Basic summarization",
                "Basic paraphrasing",
                "Limited translations",
              ],
              buttonStyle: "bg-gray-100 hover:bg-gray-200 text-gray-800",
            },
            {
              title: "Pro",
              price: "$19/mo",
              features: [
                "Unlimited summarization",
                "Advanced paraphrasing",
                "Unlimited translations",
                "Priority support",
              ],
              buttonStyle:
                "bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-400 hover:to-blue-400 text-white",
            },
          ].map((plan, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border border-gray-200 shadow-md transition-transform hover:-translate-y-2 hover:shadow-xl bg-white group"
            >
              <h3 className="text-2xl font-semibold mb-2 text-gray-800 text-center">
                {plan.title}
              </h3>
              <p className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
                {plan.price}
              </p>
              <ul className="space-y-2 mb-6 text-gray-600 text-sm text-center">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-center gap-2"
                  >
                    <CheckCircle size={16} className="text-teal-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex justify-center">
                <Button
                  className={`${plan.buttonStyle} font-medium rounded-full px-6 py-2 shadow-sm transition`}
                >
                  {plan.title === "Free" ? "Try Now" : "Upgrade"}
                </Button>
              </div>
              <div className="mt-4 h-0.5 w-2/3 mx-auto bg-gradient-to-r from-teal-400 to-blue-400 group-hover:scale-x-110 transition-transform origin-center" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
