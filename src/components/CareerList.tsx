// ProjectsTimelinePage.tsx – animated year filter, creative b↔w gradient
import { useState, useMemo } from "react";

const projectsDB = {
  2023: [
    {
      title: "ScaleUp Dashboard",
      desc: "50-user SaaS analytics",
      color: "#007bff",
    },
    { title: "Ops Playbook", desc: "Internal SOP library", color: "#007bff" },
  ],
  2024: [
    { title: "Vision OS", desc: "AR workflow prototype", color: "#e60000" },
    { title: "AI Ops Engine", desc: "Predictive pipeline", color: "#e60000" },
    { title: "Founder OS", desc: "Fractional COO portal", color: "#e60000" },
  ],
  2025: [
    {
      title: "Quantum Ledger",
      desc: "Next-gen finance stack",
      color: "#f5f5f5",
    },
    { title: "MindMesh", desc: "Neuro-interface CRM", color: "#f5f5f5" },
  ],
};

const years = Object.keys(projectsDB)
  .map(Number)
  .sort((a, b) => b - a);

export default function ProjectsTimelinePage() {
  const [activeYear, setActiveYear] = useState<number>(years[0]);

  const activeProjects = useMemo(
    () => projectsDB[activeYear as keyof typeof projectsDB],
    [activeYear]
  );

  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center py-20 px-6">
      {/* header */}
      <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-10">
        Projects
      </h1>

      {/* year filter */}
      <div className="flex space-x-3 mb-12">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setActiveYear(year)}
            className={`relative px-5 py-2 rounded-full font-bold text-sm transition-all duration-500
                        ${
                          activeYear === year
                            ? "text-black"
                            : "text-neutral-400"
                        }`}
            style={{
              background:
                activeYear === year
                  ? "linear-gradient(135deg,#fff 0%,#e0e0e0 100%)"
                  : "#000",
              boxShadow: activeYear === year ? "0 0 20px #ffffff40" : "none",
            }}
          >
            {year}
          </button>
        ))}
      </div>

      {/* project grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl
                   transition-all duration-700"
        key={activeYear}
      >
        {activeProjects.map((p, i) => (
          <div
            key={i}
            className="relative p-5 rounded-2xl bg-neutral-900 border border-neutral-800
                       hover:scale-105 transition-all duration-300"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            {/* color accent bar */}
            <div
              className="absolute top-0 left-0 w-full h-1 rounded-t-2xl"
              style={{ background: p.color }}
            />
            <h3 className="font-bold text-lg text-white">{p.title}</h3>
            <p className="text-sm text-neutral-400 mt-1">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
