// FamilyScrollJourney.tsx  – black-first, accent-driven scroll rooms
import { useEffect, useRef, useState } from "react";

const rooms = [
  {
    id: "swim",
    title: "Swimming",
    sub: "Fluid motion, endless laps",
    accent: "#007bff", // blue
    icon: "🌊",
    bio: "Discipline in the pool — every stroke counts, every breath is a choice.",
  },
  {
    id: "english",
    title: "English Teacher",
    sub: "Words that bridge worlds",
    accent: "#e60000", // red
    icon: "✒️",
    bio: "Grammar is the architecture of thought; literature is the blueprint of empathy.",
  },
  {
    id: "family",
    title: "Mother & Father",
    sub: "Epigenetics × Architecture",
    accent: "#f5f5f5", // whitesmoke
    icon: "🧬 🏛️",
    bio: "She codes life, he designs space. Together they raise futures in spirals and steel.",
  },
];

export default function FamilyScrollJourney() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = rooms.findIndex((r) => r.id === e.target.id);
            setActive(idx);
          }
        });
      },
      { threshold: 0.6 }
    );
    refs.current.forEach((r) => r && io.observe(r));
    return () => io.disconnect();
  }, []);

  return (
    <>
      {rooms.map((room, idx) => (
        <section
          key={room.id}
          id={room.id}
          ref={(el) => (refs.current[idx] = el)}
          className="min-h-screen flex items-center justify-center relative bg-black"
        >
          {/* animated gradient overlay */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${room.accent}11 0%, transparent 70%)`,
              animation: `pulse 6s ease-in-out infinite`,
            }}
          />

          {/* subtle diagonal slash */}
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              clipPath: "polygon(0 0, 0 40%, 100% 60%, 100% 0)",
              background: `linear-gradient(135deg, ${room.accent} 0%, transparent 100%)`,
              opacity: active === idx ? 0.25 : 0,
              transition: "opacity .8s ease",
            }}
          />

          {/* content card */}
          <div
            className="relative z-10 w-full max-w-lg p-10 rounded-2xl bg-neutral-900 border border-neutral-800
                       shadow-2xl shadow-black/70 transition-all duration-700"
            style={{
              transform:
                active === idx
                  ? "translateY(0) scale(1)"
                  : "translateY(40px) scale(.95)",
              borderColor: active === idx ? room.accent : "transparent",
            }}
          >
            <div className="text-7xl mb-6">{room.icon}</div>

            <h2
              className="text-5xl font-black tracking-tighter"
              style={{ color: room.accent }}
            >
              {room.title}
            </h2>
            <p className="mt-1 text-sm uppercase tracking-widest text-neutral-500">
              {room.sub}
            </p>

            {/* razor-sharp divider */}
            <hr className="my-6 border-neutral-700" />

            <p className="text-neutral-300 leading-relaxed">{room.bio}</p>

            {/* micro-interaction button */}
            <button
              className="mt-8 px-8 py-3 rounded-full bg-black border border-neutral-800
                         text-sm font-bold tracking-widest transition-all duration-300
                         hover:scale-105 hover:border-current active:scale-95"
              style={{ color: room.accent }}
            >
              Discover
            </button>
          </div>
        </section>
      ))}

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.15);
          }
        }
      `}</style>
    </>
  );
}
