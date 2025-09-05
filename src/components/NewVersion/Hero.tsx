// HeroMinimal.tsx
// sharper, lighter, professional, zero color

import { ArrowRight } from "lucide-react";
import { useLanguage } from "../../LanguageContext";

export default function HeroMinimal() {
  const { lang } = useLanguage();
  const isRTL = lang === 0;

  const content = {
    title: lang === 1 ? "KIANMEHR" : "کیانمهر",
    subtitle: lang === 1 ? "Alive, Simple, Powerful" : "زنده, پیشرو, قدرتمند",
    description:
      lang === 1
        ? "Business management like an innate skill. Transparent."
        : "مدیریت کسب و کار . یک مهارت ذاتی",
    buttonText: lang === 0 ? "Work with me" : "کار با من",
  };

  return (
    <section className="relative isolate text-white min-h-screen flex items-center justify-center px-6 font-mono tracking-tight">
      {/* soft black gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-gray-900 to-black" />

      <div
        className={`max-w-4xl text-center md:text-${isRTL ? "right" : "left"}`}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <h1 className="text-6xl md:text-7xl font-light leading-tight">
          {content.title}
          <br />
          <span className="text-gray-300">{content.subtitle}</span>
        </h1>

        <p className="mt-6 max-w-md text-gray-400 [word-spacing:0.2rem]">
          {content.description}
        </p>

        <button className="mt-10 inline-flex items-center gap-2 px-5 py-2 bg-white text-black rounded-sm text-sm hover:bg-gray-200 transition-colors">
          {content.buttonText}
          <ArrowRight size={14} className={isRTL ? "rotate-180" : ""} />
        </button>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400&display=swap');
        body { font-family: 'Inter', monospace; letter-spacing: -0.01em; }
      `}</style>
    </section>
  );
}
