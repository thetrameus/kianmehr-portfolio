// CareerClipPath.jsx
import { useState, useRef, useEffect } from "react";

const roles = [
  {
    title: "Senior Analyst",
    desc: "Transform raw data into executive decisions",
    icon: "📈",
  },
  {
    title: "Growth Strategist",
    desc: "Architect scalable market expansion",
    icon: "📊",
  },
  {
    title: "Operations Lead",
    desc: "Orchestrate seamless supply-chain flows",
    icon: "⚙️",
  },
  {
    title: "Finance Controller",
    desc: "Guard fiscal integrity & forecasting",
    icon: "🔍",
  },
];

export default function CareerClipPath() {
  const [active, setActive] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null); // or whatever type you need

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return; // <- guard

    el.style.clipPath = "polygon(0 0, 0 0, 0 100%, 0 100%)";
    setTimeout(() => {
      el.style.transition = "clip-path 1s cubic-bezier(.4,0,.2,1)";
      el.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
    }, 100);
  }, []);

  return (
    <section className="bg-neutral-950 text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-12">
          Career Paths
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left list */}
          <ul className="space-y-4">
            {roles.map((r, i) => (
              <li key={i}>
                <button
                  onClick={() => setActive(i)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300
                              ${
                                active === i
                                  ? "bg-neutral-800 shadow-lg"
                                  : "hover:bg-neutral-800/50"
                              }`}
                >
                  <span className="text-2xl mr-3">{r.icon}</span>
                  <span className="text-lg font-medium">{r.title}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* Right clip-path card */}
          <div
            ref={cardRef}
            className="relative h-80 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="h-full w-full bg-[radial-gradient(circle_at_25%_25%,white_0.5px,transparent_1px)]
                              bg-[length:32px_32px] animate-pulse"
              ></div>
            </div>

            <div className="absolute inset-0 flex flex-col justify-center p-8">
              <span className="text-5xl">{roles[active].icon}</span>
              <h3 className="mt-4 text-3xl font-bold">{roles[active].title}</h3>
              <p className="mt-2 text-neutral-400">{roles[active].desc}</p>

              <button
                className="mt-6 w-fit px-6 py-2 rounded-full border border-neutral-600
                                 hover:bg-neutral-700 hover:border-neutral-500 transition-all duration-300"
              >
                Apply
              </button>
            </div>

            {/* animated corner accent */}
            <div
              className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 rounded-full"
              style={{
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                animation: "spin 15s linear infinite",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
