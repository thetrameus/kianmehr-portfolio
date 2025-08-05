// GlobalServicesLight.tsx – interactive light-mode page, black accents
import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Remote COO",
    desc: "24/7 fractional leadership",
    icon: "👔",
  },
  { id: 2, title: "Scale Sprint", desc: "30-day growth burst", icon: "🚀" },
  { id: 3, title: "Data Pipeline", desc: "Real-time analytics", icon: "📊" },
];

export default function GlobalServicesLight() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 flex flex-col items-center justify-center p-6">
      {/* soft animated blob */}
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full bg-black/5 blur-3xl"
        style={{ animation: "float 15s ease-in-out infinite alternate" }}
      />

      <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-black">
        Global Services
      </h1>
      <p className="mt-3 text-neutral-600">
        Light-mode guidance, worldwide reach.
      </p>

      {/* service grid */}
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.id}
            onMouseEnter={() => setActive(s.id)}
            onMouseLeave={() => setActive(null)}
            className={`relative w-64 h-40 p-6 rounded-2xl bg-white border border-neutral-200
                        shadow-lg shadow-black/10 transition-all duration-500 cursor-pointer
                        ${
                          active === s.id
                            ? "scale-110 shadow-xl border-black/30"
                            : ""
                        }`}
            style={{
              clipPath:
                active === s.id
                  ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                  : "polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)",
            }}
          >
            <div className="text-3xl mb-2">{s.icon}</div>
            <h3 className="font-bold text-black">{s.title}</h3>
            <p className="text-sm text-neutral-600">{s.desc}</p>

            {/* sliding black underline */}
            <div
              className="absolute bottom-4 left-6 right-6 h-0.5 bg-black"
              style={{
                transform: active === s.id ? "scaleX(1)" : "scaleX(0)",
                transition: "transform .5s",
              }}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          from {
            transform: translate(-50px, -50px) scale(1);
          }
          to {
            transform: translate(50px, 50px) scale(1.2);
          }
        }
      `}</style>
    </main>
  );
}
