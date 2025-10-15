// Showcase.tsximport { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "./LanguageContext";

const Showcase = () => {
    const { lang } = useLanguage();
    const isRTL = lang === 0;

    const content = {
        title: isRTL ? "نمونه‌کار" : "Portfolio",
        subtitle: isRTL
            ? "پویا | مطمئن | کاربردی"
            : "Dynamic • Reliable • Functional",
        description: isRTL
            ? "مجموعه‌ای از پروژه‌هایی که با دقت ساخته شده‌اند."
            : "A collection of meticulously crafted projects.",
        buttonText: isRTL ? "مشاهده همه" : "View All",
    };

    /* choose font class per language */
    const fontClass = isRTL ? "font-yekan" : "font-head";

    return (
        <section className="relative isolate text-white py-32 px-6 max-w-7xl mx-auto overflow-hidden">
            {/* animated gradient background */}
            <div aria-hidden className="absolute inset-0 -z-10">
                <div
                    className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-black to-neutral-800"
                    style={{
                        animation: "pulse 20s ease-in-out infinite alternate",
                    }}
                />
                {/* slow rotating halo image */}
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 blur-2xl"
                    style={{
                        background:
                            "radial-gradient(circle, #06b6d4 0%, transparent 70%)",
                        animation: "spin 60s linear infinite",
                    }}
                />
            </div>

            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center pt-44">
                <div dir={isRTL ? "rtl" : "ltr"}>
                    <h2
                        className={`text-5xl md:text-6xl font-light leading-tight ${fontClass}`}>
                        {content.title}
                        <br />
                        <span className="text-cyan-300">
                            {content.subtitle}
                        </span>
                    </h2>
                    <p className={`mt-6 max-w-md text-gray-300 ${fontClass}`}>
                        {content.description}
                    </p>
                    <button
                        className={`mt-10 inline-flex items-center gap-2 px-5 py-2.5 bg-sky-800 text-white rounded-md text-sm ${fontClass} hover:bg-sky-600 transition-colors shadow-lg shadow-cyan-500/20`}>
                        {content.buttonText}
                        {isRTL ? (
                            <ArrowLeft size={16} />
                        ) : (
                            <ArrowRight size={16} />
                        )}
                    </button>
                </div>

                {/* project preview */}
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden group">
                    <img
                        src="/kianmehr-portfolio/5.jpg"
                        alt={isRTL ? "پروژه منتخب" : "Featured project"}
                        className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
            </div>

            <style>{`
        @keyframes pulse {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.05); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
        </section>
    );
};

export default Showcase;
