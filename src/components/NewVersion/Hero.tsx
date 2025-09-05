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

  return (
    <section className="relative isolate text-white min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-950 to-black">
      {/* ---------- content ---------- */}
      <div
        className={`max-w-4xl text-center md:text-${isRTL ? "right" : "left"}`}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <h1
          className={`text-7xl md:text-7xl font-bold leading-tight tracking-[-0.04em] font-${
            isRTL ? "yekan" : "head"
          } text-mask`}
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

      <style>{`
        /* moving image inside text */
        .text-mask {
          background: url("/kianmehr-portfolio/zemn.jpg")
                      center/cover no-repeat;
          -webkit-background-clip: text;
                  background-clip: text;
          color: transparent;
          animation: pan 20s linear infinite;
        }
        @keyframes pan {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
