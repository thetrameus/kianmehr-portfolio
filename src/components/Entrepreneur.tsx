// EntrepreneurPricingPage.tsx  – dark seduction for founders
export default function EntrepreneurPricingPage() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        {/* headline */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
          Hire the
          <span className="bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
            {" "}
            Architect
          </span>{" "}
          of Scale
        </h1>

        {/* paragraph */}
        <p className="mt-6 text-lg text-neutral-300 leading-relaxed">
          I turn chaotic spreadsheets into clean dashboards, slow teams into
          sprint legends, and “we’ll figure it out” into predictable revenue. If
          you’re building something bold, bring me the blueprint— I’ll deliver
          the engine.
        </p>

        {/* pricing card */}
        <div className="mt-12 inline-block p-1 rounded-2xl bg-gradient-to-br from-neutral-700 via-neutral-800 to-neutral-900 shadow-2xl shadow-neutral-900/50">
          <div className="bg-black px-8 py-6 rounded-2xl">
            <div className="text-4xl font-bold">
              $3,900
              <span className="text-lg text-neutral-400 font-normal">
                {" "}
                / month
              </span>
            </div>
            <div className="text-sm text-neutral-500 mt-1">
              Fractional COO · 30-day guarantee
            </div>
          </div>
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="mt-10 inline-block px-10 py-4 rounded-full font-bold tracking-widest text-sm
                     bg-gradient-to-r from-white via-neutral-300 to-neutral-500
                     text-black transition-all duration-300 hover:scale-105 active:scale-95"
        >
          BOOK A CALL
        </a>
      </div>
    </section>
  );
}
