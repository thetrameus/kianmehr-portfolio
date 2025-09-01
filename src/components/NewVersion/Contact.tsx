// ContactFooter.tsx
// Contact + glass ribbon footer with depth, blur & floating elements

import ContactSection from "./ContactSection";

export default function ContactFooter() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-cyan-50">
      {/* CONTACT */}
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-sky-800">ارتباط با من</h2>
          <p className="text-sm text-sky-600 mt-1">
            باهام یک مورد متفاوت و جالب رو طراحی کنیم.
          </p>
        </div>

        <ContactSection />
      </div>

      {/* GLASS FOOTER — elementful, blurred, floating */}
      <footer className="relative">
        {/* backdrop blur layer */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-lg" />

        <div className="relative max-w-7xl mx-auto px-6 py-12">
          {/* floating glass ribbon */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* left: mini-grid */}
            <div className="flex gap-6 text-xs">
              {["حریم خصوصی", "قوانین", "کلوچه ها", "نمیدونم"].map((l) => (
                <a
                  key={l}
                  href="#"
                  className="text-sky-800 hover:text-sky-600 transition"
                >
                  {l}
                </a>
              ))}
            </div>

            {/* center: floating circles */}
            <div className="flex gap-4">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 bg-white/40 backdrop-blur-sm border border-white/50 rounded-full flex items-center justify-center text-sky-700 text-xs font-bold shadow-md"
                >
                  {["©", "K", "M"][i]}
                </div>
              ))}
            </div>

            {/* right: social icons */}
            <div className="flex gap-4">
              {["X", "in", "GH"].map((label) => (
                <a
                  key={label}
                  href="#"
                  className="w-7 h-7 flex items-center justify-center bg-white/40 backdrop-blur-sm border border-white/50 rounded-full text-xs text-sky-800 shadow hover:bg-white/60 transition"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* subtle bottom line */}
          <hr className="mt-8 border-white/20" />
          <p
            className="text-center text-xs text-sky-800/60 mt-4"
            style={{ direction: "ltr" }}
          >
            © 2024 <strong>Kianmehr</strong> — Bulit on calm.
          </p>
        </div>
      </footer>
    </section>
  );
}
