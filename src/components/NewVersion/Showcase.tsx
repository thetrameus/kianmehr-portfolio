import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "../../LanguageContext";

const Showcase = () => {
  const { lang } = useLanguage();
  const isRTL = lang === 0;

  // Content based on language
  const content = {
    title: isRTL ? "نمونه‌کار" : "Portfolio",
    subtitle: isRTL ? "پویا، مطمعن، کاربردی" : "Dynamic, Reliable, Functional",
    description: isRTL
      ? "مجموعه‌ای از پروژه‌هایی که با دقت ساخته شده‌اند."
      : "A collection of meticulously crafted projects.",
    buttonText: isRTL ? "مشاهده همه" : "View All",
  };

  return (
    <section className="relative isolate text-gray-200 py-32 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* animated black & white gradient + rotating photo reel */}
      <div aria-hidden className="absolute inset-0 -z-10">
        {/* base gradient */}
        <div
          className="absolute inset-0 bg-black"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 20%, rgba(255,255,255,.04) 0%, transparent 60%)," +
              "radial-gradient(circle at 70% 80%, rgba(255,255,255,.03) 0%, transparent 50%)," +
              "conic-gradient(from 0deg at 50% 50%, #000 0deg, #0a0a0a 60deg, #000 120deg, #111 180deg, #000 240deg, #0a0a0a 300deg, #000 360deg)",
            animation: "alive 18s linear infinite",
          }}
        />

        {/* slow horizontal film strip */}
        <div
          className="absolute top-0 left-0 w-[200%] h-full flex opacity-10"
          style={{ animation: "scroll 60s linear infinite" }}
        >
          <img
            src="/kianmehr-portfolio/src/assets/1.jpg"
            alt=""
            className="w-1/4 h-full object-cover grayscale"
          />
          <img
            src="/kianmehr-portfolio/src/assets/2.jpg"
            alt=""
            className="w-1/4 h-full object-cover grayscale"
          />
          <img
            src="/kianmehr-portfolio/src/assets/3.jpg"
            alt=""
            className="w-1/4 h-full object-cover grayscale"
          />
          <img
            src="/kianmehr-portfolio/src/assets/4.jpg"
            alt=""
            className="w-1/4 h-full object-cover grayscale"
          />
        </div>
      </div>

      {/* content */}
      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div dir={isRTL ? "rtl" : "ltr"}>
          <h2 className="text-5xl md:text-6xl font-medium leading-tight">
            {content.title}
            <br />
            <span className="text-teal-400">{content.subtitle}</span>
          </h2>
          <p className="mt-6 max-w-md text-slate-300">{content.description}</p>
          <button className="mt-10 inline-flex items-center gap-2 px-5 py-2.5 bg-teal-600 text-white rounded-md text-sm font-medium hover:bg-teal-500 transition-colors">
            {content.buttonText}
            {isRTL ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
          </button>
        </div>

        {/* single large preview */}
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
          <img
            src="/kianmehr-portfolio/src/assets/5.jpg"
            alt={isRTL ? "پروژه منتخب" : "Featured project"}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      </div>

      <style jsx>{`
        @keyframes alive {
          0% {
            filter: hue-rotate(0deg) brightness(1);
          }
          50% {
            filter: hue-rotate(20deg) brightness(1.05);
          }
          100% {
            filter: hue-rotate(0deg) brightness(1);
          }
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default Showcase;
