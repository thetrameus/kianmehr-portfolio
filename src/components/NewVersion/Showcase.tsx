import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "../../LanguageContext";

const Showcase = () => {
  const { lang } = useLanguage();
  const isRTL = lang === 0;

  // Content based on language
  const content = {
    title: isRTL ? "نمونه‌کار" : "Portfolio",
    subtitle: isRTL
      ? "پویا | مطمعن | کاربردی."
      : "Dynamic, Reliable, Functional",
    description: isRTL
      ? "مجموعه‌ای از پروژه‌هایی که با دقت ساخته شده‌اند."
      : "A collection of meticulously crafted projects.",
    buttonText: isRTL ? "مشاهده همه" : "View All",
  };

  return (
    <section className="relative isolate text-white py-32 px-6 max-w-7xl mx-auto overflow-hidden font-mono">
      {/* clean gradient + sharp image */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-gradient-to-br from-stone-900 via-black to-black"
          style={{
            animation: "pulse 20s ease-in-out infinite alternate",
          }}
        />

        {/* single large rotating image */}
        <div
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-20"
          style={{ animation: "rotate 40s linear infinite" }}
        >
          <img
            src="/kianmehr-portfolio/5.jpg"
            alt="kianmehr"
            className="w-1/2 h-auto rounded opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </div>

      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div dir={isRTL ? "rtl" : "ltr"}>
          <h2 className="text-5xl md:text-6xl font-mono leading-tight">
            {content.title}
            <br />
            <span className="text-cyan-300"> {content.subtitle} </span>
          </h2>
          <p className="mt-6 max-w-md text-gray-400">{content.description}</p>
          <button className="mt-10 inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-400 text-black rounded-md text-sm font-mono hover:bg-cyan-300 transition-colors">
            {content.buttonText}
            {isRTL ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
          </button>
        </div>

        <div className="relative w-full aspect-[4/3] rounded">
          <img
            src="/kianmehr-portfolio/5.jpg"
            alt={isRTL ? "پروژه منتخب" : "Featured project"}
            className="w-full h-full object-cover rounded opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            filter: brightness(1);
          }
          50% {
            filter: brightness(1.05);
          }
        }
        @keyframes rotate {
          0% {
            transform: rotate(0deg) scale(1);
          }
          100% {
            transform: rotate(360deg) scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default Showcase;
