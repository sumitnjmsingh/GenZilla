"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface Stat {
  value: string;
  label: string;
  emphasis: string;
}

const stats: Stat[] = [
  {
    value: "55%",
    label: "Employees using",
    emphasis: "Document Summarization",
  },
  {
    value: "20%",
    label: "Employees using",
    emphasis: "code generation",
  },
  {
    value: "25%",
    label: "Employees using",
    emphasis: "Other AI tools",
  },
];

export default function StatsHighlights() {
  return (
    <section className="w-full bg-white py-16 px-4 flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-gray-900">
        GenZilla Customers Discover
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-5xl font-extrabold text-black">{stat.value}</h3>
            <p className="text-gray-600">
              {stat.label}{" "}
              <span className="font-semibold text-black">{stat.emphasis}</span>
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <Link
          href="/assessment"
          className="inline-flex items-center gap-2 bg-black text-white text-sm font-semibold rounded-full px-6 py-3 hover:bg-gray-900 transition"
        >
          Get an Assessment
          <span className="bg-lime-400 text-black p-1 rounded-full">
            <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
        <p className="mt-4 text-gray-500 text-sm text-center">
          What are your numbers?
        </p>
      </div>
    </section>
  );
}
