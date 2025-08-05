// CountdownRevealPage.tsx – 5 → 1 then white gradient button
import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function CountdownRevealPage() {
  const [count, setCount] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  // trigger when page is in view
  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && count === null) {
          setVisible(true);
          setCount(5);
        }
      },
      { threshold: 0.8 }
    );
    io.observe(document.getElementById("counter")!);
    return () => io.disconnect();
  }, [count]);

  // countdown engine
  useEffect(() => {
    if (count === null || count === 0) return;
    const t = setTimeout(() => setCount((c) => c! - 1), 800);
    return () => clearTimeout(t);
  }, [count]);

  return (
    <section
      id="counter"
      className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden"
    >
      {/* animated background orbs */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #ffffff05 0%, transparent 50%)," +
            "radial-gradient(circle at 70% 70%, #ffffff05 0%, transparent 50%)",
          animation: "pulse 4s ease-in-out infinite alternate",
        }}
      />

      {/* countdown numbers */}
      {visible && count !== 0 && (
        <span
          key={count}
          className="text-[25vw] md:text-[20vw] font-black text-white z-10
                     animate-fadeOutUp"
          style={{ animationDuration: "0.7s" }}
        >
          {count}
        </span>
      )}

      {/* gradient button appears after countdown */}
      {count === 0 && (
        <button className="relative z-10 px-10 py-4 rounded-full text-black font-bold tracking-widest text-lg">
          {/* moving gradient */}
          <span
            className="absolute inset-0 rounded-full bg-gradient-to-r from-white via-neutral-200 to-white
                       animate-gradientX"
          />
          <Link
            to="/kianmehr-portfolio/presentation-room"
            className="relative z-10"
          >
            Engage
          </Link>
        </button>
      )}

      <style jsx>{`
        @keyframes pulse {
          from {
            opacity: 0.3;
            transform: scale(1);
          }
          to {
            opacity: 0.6;
            transform: scale(1.3);
          }
        }
        @keyframes fadeOutUp {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-60px);
          }
        }
        @keyframes gradientX {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradientX {
          background-size: 200% 200%;
          animation: gradientX 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
