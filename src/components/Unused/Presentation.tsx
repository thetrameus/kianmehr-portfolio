// ScrollRevealLink.jsx
import { useEffect, useState, useRef } from "react";

export default function ScrollRevealLink() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.8 }
    );
    io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div className="h-[10vh]" /> {/* scroll space above */}
      <section
        ref={sectionRef}
        className="h-[50vh] flex items-center justify-center bg-neutral-950"
      >
        {/* gradient link revealed only when in view */}
        <a
          href="/presentation-room"
          className={`relative inline-block rounded-full px-10 py-5 text-lg font-bold text-white tracking-widest
                      transition-all duration-700 ease-out
                      ${
                        visible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                      }`}
        >
          {/* animated gradient fill */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-600 animate-pulse" />

          {/* shine sweep (loops once revealed) */}
          {visible && (
            <span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent
                         -skew-x-12 -translate-x-full animate-shine"
            />
          )}

          <span className="relative">Present</span>
        </a>
      </section>
      <div className="h-[20vh]" /> {/* scroll space below */}
      <style jsx>{`
        @keyframes shine {
          to {
            transform: translateX(200%);
          }
        }
        .animate-shine {
          animation: shine 1.2s ease-in-out forwards;
        }
      `}</style>
    </>
  );
}
