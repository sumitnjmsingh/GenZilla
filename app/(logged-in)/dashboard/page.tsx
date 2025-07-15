"use client";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { tasks } from "@/utils/tasks";
import DashboardInfo from "@/components/DashboardInfo";

export default function Dashboard() {

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex flex-col gap-8">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-4xl font-extrabold text-cyan-800">
          AI Playground Dashboard
        </h1>
        <UserButton />
      </header>

      <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl shadow-xl p-8 flex flex-col md:flex-row items-center gap-6 transition hover:scale-102 duration-300">
        <div className="flex-1 text-white">
          <h2 className="text-2xl font-bold mb-2">PDF Summarization</h2>
          <p className="mb-4">
            Summarize your PDF files in seconds and get concise insights.
          </p>
          <Link
            href="/dashboard/pdf-summarization"
            className="bg-white text-blue-700 hover:bg-white/90 font-semibold rounded-full shadow px-6 py-2"
          >
            Summarize
          </Link>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <svg
            className="w-32 h-32 text-white/30"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M4 4v16h16V4H4z" />
            <path d="M8 4v16" />
            <path d="M16 4v16" />
            <path d="M4 8h16" />
            <path d="M4 16h16" />
          </svg>
        </div>
      </div>

      <div>
        <div className="hidden md:flex overflow-x-auto gap-6 py-4 hide-scrollbar">
          {tasks.map((task, index) => (
            <Link
              key={index}
              href={task.route}
              className={`flex-shrink-0 w-64 rounded-3xl shadow-lg p-6 transform transition-transform hover:scale-105 bg-gradient-to-br ${task.bgGradient} text-white flex flex-col justify-between`}
            >
              <div>
                <h2 className="text-xl font-bold">{task.title}</h2>
                <p className="text-sm opacity-80">{task.description}</p>
              </div>
              <div className="flex justify-end mt-4">
                <Button className="bg-white text-black hover:bg-white/80 font-semibold rounded-full px-4 py-2">
                  Go
                </Button>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-4 md:hidden">
          {tasks.map((task, index) => (
            <Link
              key={index}
              href={task.route}
              className={`rounded-3xl shadow-lg p-6 bg-gradient-to-br ${task.bgGradient} text-white flex flex-col justify-between transition-transform hover:scale-105`}
            >
              <div>
                <h2 className="text-lg font-bold">{task.title}</h2>
                <p className="text-sm opacity-80">{task.description}</p>
              </div>
              <div className="flex justify-end mt-4">
                <Button className="bg-white text-black hover:bg-white/80 font-semibold rounded-full px-4 py-2">
                  Go
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <DashboardInfo />
    </section>
  );
}
