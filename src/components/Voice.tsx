// RealisticParagraphReveal.tsx – faster, natural-feel word append
import { useState, useEffect, useRef } from "react";

import Kianzemn from "./../assets/ant.jpg";

const paragraph =
  "I architect systems that turn chaos into compounding cash-flow for visionary founders.";

export default function RealisticParagraphReveal() {
  const [words, setWords] = useState<string[]>([]);
  const [playing, setPlaying] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startReveal = () => {
    if (playing) return;
    setPlaying(true);
    setWords([]);
    const wordArray = paragraph.split(" ");
    let idx = 0;

    intervalRef.current = setInterval(() => {
      setWords((prev) => [...prev, wordArray[idx]]);
      idx++;
      if (idx >= wordArray.length) {
        clearInterval(intervalRef.current!);
        setPlaying(false);
      }
    }, 180); // ≈ 5–6 words / sec
  };

  useEffect(
    () => () => intervalRef.current && clearInterval(intervalRef.current),
    []
  );

  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="w-full max-w-3xl flex flex-col items-center">
        {/* clickable photo */}
        <img
          src={Kianzemn}
          alt="start"
          className={`w-full max-w-md h-64 object-cover rounded-2xl cursor-pointer
                      transition-transform duration-300 hover:scale-105
                      ${playing ? "pointer-events-none opacity-70" : ""}`}
          onClick={startReveal}
        />

        {/* paragraph container */}
        <div className="mt-8 w-full max-w-md min-h-[120px] p-4 rounded-2xl bg-neutral-900 border border-neutral-800">
          <p className="text-2xl font-bold tracking-tight text-white leading-snug">
            {words.map((w, i) => (
              <span
                key={i}
                className="inline-block mr-1.5 animate-fadeInUp"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {w}
              </span>
            ))}
          </p>
          {!playing && words.length === 0 && (
            <span className="text-neutral-500 text-lg">
              Click photo to begin…
            </span>
          )}
        </div>

        {/* reset */}
        {words.length > 0 && !playing && (
          <button
            onClick={() => setWords([])}
            className="mt-6 px-6 py-2 rounded-lg bg-white text-black font-bold text-sm
                       transition-transform hover:scale-105 active:scale-95"
          >
            Replay
          </button>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
