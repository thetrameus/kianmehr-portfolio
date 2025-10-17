import { useState, useEffect } from "react";

export default function CreativeFooter() {
  const [tick, setTick] = useState(0);

  // gentle parallax ticker
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 0.2), 30);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="relative overflow-hidden bg-neutral-950 text-white">
      {/* animated background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url(https://picsum.photos/id/1018/1920/600)",
          transform: `translateY(${tick}px) scale(1.05)`,
        }}
      />

      {/* gradient clip-path overlay */}
      <div
        className="relative z-10 py-20 px-6"
        style={{
          clipPath:
            "polygon(0 20%, 10% 0, 20% 20%, 30% 0, 40% 20%, 50% 0, 60% 20%, 70% 0, 80% 20%, 90% 0, 100% 20%, 100% 100%, 0 100%)",
          background:
            "linear-gradient(135deg, rgba(0,0,0,.9) 0%, rgba(10,10,10,.7) 50%, rgba(20,20,20,.9) 100%)",
          animation: "wave 8s ease-in-out infinite alternate",
        }}
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-black tracking-tighter">AdminSuite</h3>
            <p className="text-xs text-neutral-400 mt-2">
              Business administration re-imagined.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-col space-y-2">
            {["Dashboard", "Reports", "Tasks", "Careers"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-sm text-neutral-400 hover:text-white transition-colors"
              >
                {l}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-end space-x-4">
            {["GitHub", "LinkedIn", "Twitter"].map((s) => (
              <a
                key={s}
                href="#"
                className="text-xs text-neutral-500 hover:text-white transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* bottom line */}
        <p className="text-center mt-10 text-xs text-neutral-600">
          © {new Date().getFullYear()} AdminSuite. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
