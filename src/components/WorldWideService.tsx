// GlobalGuidanceSection.tsx – worldwide service reveal with complex clip-path
import { useState } from "react";

export default function GlobalGuidanceSection() {
  const [hover, setHover] = useState(false);

  return (
    <section className="min-h-screen bg-black flex items-center justify-center p-6">
      {/* animated globe backdrop */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 50%, #ffffff 0%, transparent 50%), " +
            "radial-gradient(circle at 70% 50%, #ffffff 0%, transparent 50%)",
          animation: "spin 30s linear infinite",
        }}
      />

      {/* main card */}
      <div
        className="relative w-full max-w-4xl"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {/* outer glowing ring */}
        <div
          className="absolute -inset-4 rounded-[3rem] bg-gradient-to-r from-neutral-700 via-white/20 to-neutral-700 blur-xl opacity-30"
          style={{
            clipPath: hover
              ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
              : "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
            transition: "clip-path .8s cubic-bezier(.4,0,.2,1)",
          }}
        />

        {/* content clipped inside */}
        <div
          className="relative z-10 bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl shadow-black/50
                     overflow-hidden"
          style={{
            clipPath: hover
              ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
              : "polygon(5% 0%, 95% 0%, 100% 5%, 95% 100%, 5% 100%, 0% 95%, 0% 5%)",
            transition: "clip-path .8s cubic-bezier(.4,0,.2,1)",
          }}
        >
          {/* left accent diagonal */}
          <div
            className="absolute top-0 left-0 w-32 h-full bg-gradient-to-b from-neutral-700 to-neutral-900"
            style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
          />

          <div className="relative z-10 p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
            {/* text */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
                Worldwide <span className="text-neutral-400">Guidance</span>
              </h2>
              <p className="mt-3 text-neutral-300 leading-relaxed">
                From Tokyo to Toronto, I help founders architect scale without
                borders. Remote sessions, async feedback, and timezone-proof
                workflows.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-400">
                <li>● 24/7 Slack channel</li>
                <li>● Quarterly in-person sprints</li>
                <li>● Global KPI benchmark</li>
              </ul>
            </div>

            {/* interactive globe button */}
            <div className="flex justify-center">
              <button
                className="relative w-36 h-36 rounded-full bg-gradient-to-br from-white via-neutral-200 to-neutral-400
                           text-black font-bold tracking-widest text-sm
                           transition-transform hover:scale-110 active:scale-95
                           shadow-lg shadow-black/40"
                style={{
                  clipPath: "circle(50% at 50% 50%)",
                }}
              >
                Engage
                {/* inner rotating ring */}
                <span
                  className="absolute inset-2 rounded-full border border-black/20"
                  style={{ animation: "spin 8s linear infinite" }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
