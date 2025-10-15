// HeroMinimal.tsx
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../../LanguageContext";

export default function HeroMinimal() {
  const { lang } = useLanguage();
  const isRTL = lang === 0;

  const content = {
    title: lang === 1 ? "KIANMEHR" : "کیانمهر",
    subtitle: lang === 1 ? "Alive, Simple, Powerful" : "زنده، پیشرو، قدرتمند",
    description:
      lang === 1
        ? "Business management like an innate skill. Transparent."
        : "مدیریت کسب‌وکار . یک مهارت ذاتی",
    buttonText: lang === 1 ? "Work with me" : "کار با من",
  };

  /* 4-kB grey noise – already base-64 */
  const noise = "zemn.jpg";

  return (
    <section className="relative isolate grid md:grid-cols-2 min-h-screen overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-950 to-black">
      {/* LEFT: text always lives here */}
      <div
        className={`flex items-center justify-center px-6 text-center md:text-${
          isRTL ? "right" : "left"
        }`}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="max-w-xl">
          {/* mobile text-mask | desktop solid colour */}
          <h1
            className={`text-6xl md:text-5xl lg:text-7xl font-light lg:font-bold leading-tight tracking-[-0.04em] font-${
              isRTL ? "yekan" : "head"
            } md:text-white text-mask`}
          >
            {content.title}
            <br />
            <span className="text-gray-300">{content.subtitle}</span>
          </h1>

          <p
            className={`mt-6 max-w-md text-gray-400 [word-spacing:0.25rem] leading-6 font-${
              isRTL ? "yekan" : "head"
            }`}
          >
            {content.description}
          </p>

          <button
            className={`mt-10 inline-flex items-center gap-2 px-5 py-2 bg-white text-black rounded-sm font-${
              isRTL ? "yekan" : "head"
            } text-sm hover:bg-gray-200 transition-colors tracking-wide`}
          >
            {content.buttonText}
            <ArrowRight size={14} className={isRTL ? "rotate-180" : ""} />
          </button>
        </div>
      </div>

      {/* RIGHT: image only on desktop */}
      <div
        className="hidden md:block bg-cover bg-center"
        style={{ backgroundImage: `url(${noise})` }}
      />

      <style>{`
        /* mobile-only text fill */
        @media (max-width: 767px) {
          .text-mask {
            background: url("${noise}") repeat;
            -webkit-background-clip: text;
                    background-clip: text;
            color: transparent;
            animation: pan 20s linear infinite;
          }
          @keyframes pan {
            0%   { background-position: 0 0; }
            100% { background-position: 200px 200px; }
          }
        }
      `}</style>
    </section>
  );
}
