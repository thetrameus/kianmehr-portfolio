// FeedbackHeaderStrip.tsx – full-width gradient header + horizontal auto-scroll cards
import { useEffect, useRef } from "react";

const comments = [
  {
    name: "Alex Rivera",
    title: "Serial Founder",
    text: "Ops went from chaos to clockwork in 30 days.",
  },
  {
    name: "Lena Zhao",
    title: "CEO, ScaleUp",
    text: "Finally a dashboard that investors actually love.",
  },
  {
    name: "Mark Chen",
    title: "CTO",
    text: "Hiring them was cheaper than a single wrong sprint.",
  },
  {
    name: "Nina Patel",
    title: "Product Lead",
    text: "We shipped 2× faster after one alignment call.",
  },
  {
    name: "Sara Lee",
    title: "COO",
    text: "Revenue doubled with half the meetings.",
  },
];

export default function FeedbackHeaderStrip() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // auto-scroll every 3 s
  useEffect(() => {
    const scroller = scrollRef.current;
    if (!scroller) return;
    let pos = 0;
    const interval = setInterval(() => {
      pos = (pos + 1) % comments.length;
      scroller.scrollTo({ left: pos * 320, behavior: "smooth" });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full py-12 px-4 bg-gradient-to-br from-black via-neutral-800 to-neutral-900">
      <h2 className="text-center text-4xl font-black tracking-tighter text-white mb-8">
        Feedbacks
      </h2>

      <div
        ref={scrollRef}
        className="flex gap-6 px-4 overflow-x-auto snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {comments.map((c, i) => (
          <div
            key={i}
            className="flex-none w-80 bg-neutral-900/50 backdrop-blur-sm border border-white/10 rounded-2xl
                       shadow-xl shadow-black/60 p-6 snap-center transition-transform duration-300 hover:scale-105"
          >
            {/* avatar + name */}
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-neutral-500 to-white/50 blur-sm opacity-30" />
                <div className="relative w-9 h-9 rounded-full bg-neutral-500" />
              </div>
              <div>
                <p className="font-semibold text-sm text-white">{c.name}</p>
                <p className="text-xs text-neutral-400">{c.title}</p>
              </div>
            </div>

            <blockquote className="text-sm text-neutral-200 leading-relaxed">
              {c.text}
            </blockquote>

            {/* thin white accent */}
            <div className="mt-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
        ))}
      </div>
    </header>
  );
}
