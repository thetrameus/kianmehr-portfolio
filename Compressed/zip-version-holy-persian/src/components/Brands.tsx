// BrandShowcase3D.jsx  – pure CSS 3D showcase (no extra libs)
import { useRef } from "react";

const brands = [
  { name: "Apple", icon: "", color: "#A2AAAD" },
  { name: "Stripe", icon: "⬟", color: "#635BFF" },
  { name: "Spotify", icon: "♫", color: "#1DB954" },
  { name: "Slack", icon: "⚡", color: "#4A154B" },
  { name: "Figma", icon: "◯", color: "#F24E1E" },
  { name: "Netflix", icon: "▬", color: "#E50914" },
  { name: "Google", icon: "G", color: "#4285F4" },
  { name: "Microsoft", icon: "⊞", color: "#00A4EF" },
];

export default function BrandShowcase3D() {
  const wrapRef = useRef<HTMLDivElement>(null);

  // mouse-move 3D tilt
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = wrapRef.current;
    if (!el) return;

    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 20;
    const y = (e.clientY - top - height / 2) / 20;
    el.style.transform = `rotateX(${-y}deg) rotateY(${x}deg)`;
  };

  const handleLeave = () => {
    const el = wrapRef.current;
    if (!el) return;
    el.style.transform = "rotateX(0) rotateY(0)";
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-neutral-950 py-24">
      <div className="text-center">
        <h2 className="text-5xl font-bold tracking-tighter text-white mb-4">
          Trusted By
        </h2>
        <p className="text-neutral-400 mb-12 text-sm">
          A few brands we’ve shaped solutions for.
        </p>

        <div
          ref={wrapRef}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          className="relative grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-20"
          style={{
            transformStyle: "preserve-3d",
            transition: "transform .3s ease-out",
          }}
        >
          {brands.map((b, i) => (
            <div
              key={b.name}
              className="group"
              style={{
                transformStyle: "preserve-3d",
                animation: `float 6s ease-in-out ${
                  i * 0.2
                }s infinite alternate`,
              }}
            >
              {/* icon plate */}
              <div
                className="relative w-28 h-28 rounded-2xl bg-neutral-800/40 flex items-center justify-center
                           border border-neutral-700/50 shadow-xl shadow-black/60
                           group-hover:shadow-[0_0_32px_rgba(255,255,255,.08)] transition-shadow duration-500"
                style={{
                  transform: "translateZ(40px)",
                  backgroundImage: `radial-gradient(circle at 30% 30%, ${b.color}22, transparent 70%)`,
                }}
              >
                <span
                  className="text-4xl md:text-5xl"
                  style={{
                    color: b.color,
                    filter: "drop-shadow(0 2px 6px rgba(0,0,0,.7))",
                    transition: "transform .4s",
                  }}
                >
                  {b.icon}
                </span>

                {/* subtle floating ring */}
                <div
                  className="absolute inset-0 rounded-2xl border border-neutral-600/30
                             group-hover:border-white/20 scale-110 opacity-0 group-hover:opacity-100
                             transition-all duration-500"
                  style={{ transform: "translateZ(10px)" }}
                />
              </div>

              {/* label */}
              <p className="mt-4 text-xs tracking-widest text-neutral-400">
                {b.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
