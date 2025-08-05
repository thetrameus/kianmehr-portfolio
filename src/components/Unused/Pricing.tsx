// UltraCreativePricing.tsx – interactive white-button showcase
import { useState, useRef, useEffect } from "react";

export default function UltraCreativePricing() {
  const [hover, setHover] = useState(false);
  const [step, setStep] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  /* little timeline that loops */
  useEffect(() => {
    const t = setInterval(() => setStep((s) => (s + 1) % 4), 1500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div
        ref={cardRef}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="relative w-full max-w-lg aspect-square overflow-hidden"
      >
        {/* rotating outer ring */}
        <div
          className="absolute inset-0 rounded-[3rem] border border-white/10"
          style={{
            transform: `rotate(${step * 90}deg)`,
            transition: "transform 1.5s ease-in-out",
          }}
        />

        {/* inner animated gradient mask */}
        <div
          className="absolute inset-2 rounded-[2.5rem]"
          style={{
            background: `conic-gradient(from ${
              step * 90
            }deg, #fff0 0deg, #fff2 30deg, #fff0 60deg)`,
            mask: "radial-gradient(circle, transparent 40%, black 41%)",
          }}
        />

        {/* content clipped into sharp shards */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center p-8"
          style={{
            clipPath: hover
              ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
              : "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
            transition: "clip-path .6s cubic-bezier(.4,0,.2,1)",
          }}
        >
          <h1 className="text-3xl md:text-4xl font-black tracking-tighter leading-tight">
            Fractional<span className="text-neutral-400">COO</span>
          </h1>
          <p className="mt-3 text-sm text-neutral-300 max-w-xs">
            I architect systems that turn chaos into compounding cash-flow.
          </p>
        </div>

        {/* white interactive button */}
        <a
          href="#contact"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 px-10 py-4 rounded-full bg-white text-black font-bold
                     tracking-widest text-sm transition-all duration-500
                     hover:scale-110 active:scale-95"
          style={{
            clipPath: hover
              ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
              : "polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)",
            boxShadow: hover
              ? "0 0 0 2px #000, 0 0 20px #ffffff80"
              : "0 0 0 2px #000, 0 0 0 #fff0",
          }}
        >
          ENGAGE
        </a>

        {/* floating glyphs */}
        {[..."⚙️📈🧩"].map((g, i) => (
          <span
            key={i}
            className="absolute text-2xl transition-all duration-700"
            style={{
              top: `${20 + i * 25}%`,
              left: `${10 + i * 30}%`,
              transform: hover
                ? `translateY(-10px) scale(1.2)`
                : "translateY(0) scale(1)",
              opacity: hover ? 1 : 0.4,
            }}
          >
            {g}
          </span>
        ))}
      </div>
    </section>
  );
}
