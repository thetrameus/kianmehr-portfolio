// PencilSplashPage.tsx – giant pencil + animated ink spill
import { useState } from "react";

export default function PencilSplashPage() {
  const [written, setWritten] = useState(false);

  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="relative w-full max-w-4xl h-[60vh] flex items-center">
        {/* giant pencil */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
          style={{ transform: "rotate(-45deg) translateY(-10%)" }}
        >
          {/* tip spreading blue */}
          <div
            className="absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full"
            style={{
              background:
                "radial-gradient(circle, #007bff 0%, #007bff44 60%, transparent 100%)",
              animation: "pulse 2s ease-in-out infinite",
            }}
          />

          {/* pencil body */}
          <div className="w-12 h-[120px] bg-gradient-to-b from-neutral-200 via-neutral-400 to-neutral-600 rounded-t-lg" />
          {/* graphite tip */}
          <div className="w-4 h-4 bg-neutral-900 rounded-full absolute bottom-[-8px] left-1/2 -translate-x-1/2" />
        </div>

        {/* text block */}
        <div className="ml-44 space-y-4">
          <h2 className="text-3xl font-black tracking-tighter text-white">
            Craft the Future
          </h2>
          <p
            className="text-neutral-300 leading-relaxed transition-all duration-700"
            style={{
              maxWidth: written ? "100%" : "0",
              opacity: written ? 1 : 0,
            }}
          >
            Ink meets idea, idea meets execution. With every stroke, we sketch
            the roadmap from chaos to compounding cash-flow. Sign below and let
            the pencil do the rest.
          </p>

          {/* reveal button */}
          <button
            onClick={() => setWritten(true)}
            disabled={written}
            className="mt-6 px-8 py-3 rounded-full bg-white text-black font-bold tracking-widest
                       text-sm transition-transform hover:scale-110 active:scale-95
                       disabled:opacity-50"
          >
            {written ? "Signed ✔" : "Reveal Text"}
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.3);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
