// HeroSection.tsx – visible on all devices
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const textRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const title = "Business Admin".split("");

  useEffect(() => {
    // stagger-in text
    const chars = [...textRef.current!.querySelectorAll("span")];
    chars.forEach((c, i) => {
      c.style.transform = "translateY(40px)";
      c.style.opacity = "0";
      setTimeout(() => {
        c.style.transition = "transform .6s ease, opacity .6s ease";
        c.style.transform = "translateY(0)";
        c.style.opacity = "1";
      }, 60 * i);
    });

    // subtle parallax on scroll
    const onScroll = () => {
      const y = window.scrollY;
      bgRef.current!.style.transform = `translateY(${y * 0.25}px)`;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-neutral-900 via-neutral-950 to-black h-[60vh] min-h-[480px] flex items-center justify-center">
      {/* animated background lines */}
      <div ref={bgRef} className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,#ffffff03_0%,transparent_100%)]"></div>
      </div>

      {/* content */}
      <div className="relative z-10 text-center px-6">
        <h1
          ref={textRef}
          className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-none"
        >
          {title.map((char, i) => (
            <span key={i} className="inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <p className="mt-6 max-w-md mx-auto text-neutral-400 text-lg md:text-xl">
          Centralize your workflow, control your numbers, grow your business —
          in black & white.
        </p>

        <button
          className="mt-10 px-8 py-3 rounded-full bg-white text-black font-semibold
                     hover:bg-neutral-300 transition-all duration-300 transform hover:scale-105"
        >
          Get Started
        </button>
      </div>
    </section>
  );
}
