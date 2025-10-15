import { useState } from "react";import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "./LanguageContext";

const sections = [
    {
        id: "business",
        title: { en: "Rasputin", fa: "مدیریت" },
        image: "/kianmehr-portfolio/brand.png",
        text: {
            en: "Architect-level systems. Zero-downtime.",
            fa: "سیستم‌های معماری‌سطح. بدون وقفه.",
        },
        skills: {
            en: ["SaaS Scale", "Zero-downtime"],
            fa: ["مقیاس SaaS", "بدون وقفه"],
        },
    },
    {
        id: "creator",
        title: { en: "Content Production", fa: "تولید محتوا" },
        image: "/kianmehr-portfolio/brand.png",
        text: {
            en: "2 M+ views across hospitality, real-estate & entertainment.",
            fa: "بیش از ۲ میلیون بازدید در مهمان‌نوازی، املاک و سرگرمی.",
        },
        skills: {
            en: ["Storytelling", "Video Editing"],
            fa: ["داستان‌گویی", "ویرایش ویدیو"],
        },
    },
];

export default function AccordionReveal() {
    const [active, setActive] = useState<string | null>(null);
    const { lang } = useLanguage();
    const isRTL = lang === 0;

    return (
        <section
            className="relative isolate text-white min-h-screen flex items-center justify-center px-4 font-mono"
            dir={isRTL ? "rtl" : "ltr"}>
            <div
                className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url(/kianmehr-portfolio/Rasputin.jpg)",
                }}>
                <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* mobile accordion */}
            <div className="md:hidden w-full max-w-md space-y-4">
                {sections.map((s) => (
                    <div key={s.id} className="overflow-hidden">
                        <button
                            onClick={() =>
                                setActive(active === s.id ? null : s.id)
                            }
                            className="flex justify-between items-center w-full px-4 py-3 bg-black/40 backdrop-blur-sm border border-white/5 rounded-lg">
                            <span className="text-sm font-light">
                                {isRTL ? s.title.fa : s.title.en}
                            </span>
                            <ArrowDown
                                className={`w-4 h-4 text-cyan-400 transition-transform duration-300 ${
                                    active === s.id ? "rotate-180" : ""
                                }`}
                            />
                        </button>
                        {active === s.id && (
                            <div className="mt-2 px-4 py-3 bg-black/50 backdrop-blur-sm border border-white/5 rounded-b-lg animate-fade">
                                <img
                                    src={s.image}
                                    alt={isRTL ? s.title.fa : s.title.en}
                                    className="w-full h-48 object-cover rounded"
                                />
                                <p className="text-xs text-gray-300 mt-2">
                                    {isRTL ? s.text.fa : s.text.en}
                                </p>
                                <div className="flex flex-wrap gap-1 mt-2">
                                    {(isRTL ? s.skills.fa : s.skills.en).map(
                                        (sk) => (
                                            <span
                                                key={sk}
                                                className="px-2 py-0.5 text-xs text-gray-400 border border-gray-600 rounded">
                                                {sk}
                                            </span>
                                        ),
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* desktop side panel */}
            <div className="hidden md:flex items-center gap-8 max-w-7xl">
                <div className="flex flex-col space-y-4 w-72">
                    {sections.map((s) => (
                        <button
                            key={s.id}
                            onClick={() => setActive(s.id)}
                            className="flex items-center gap-3 px-4 py-3 bg-black/40 backdrop-blur-sm border border-white/5 rounded-lg">
                            {isRTL ? (
                                <ArrowRight
                                    className={`w-4 h-4 text-cyan-400 transition-transform duration-300 ${
                                        active === s.id ? "rotate-90" : ""
                                    }`}
                                />
                            ) : (
                                <ArrowLeft
                                    className={`w-4 h-4 text-cyan-400 transition-transform duration-300 ${
                                        active === s.id ? "-rotate-90" : ""
                                    }`}
                                />
                            )}
                            <span className="text-sm font-light">
                                {isRTL ? s.title.fa : s.title.en}
                            </span>
                        </button>
                    ))}
                </div>

                <div
                    className={`w-full max-w-lg p-6 bg-black/50 backdrop-blur-sm border border-white/5 rounded-xl transition-all duration-300 ${
                        active
                            ? "translate-x-0 opacity-100"
                            : "translate-x-full opacity-0"
                    }`}>
                    {active && (
                        <>
                            <img
                                src={
                                    sections.find((s) => s.id === active)?.image
                                }
                                alt={
                                    isRTL
                                        ? sections.find((s) => s.id === active)
                                              ?.title.fa
                                        : sections.find((s) => s.id === active)
                                              ?.title.en
                                }
                                className="w-full h-48 object-cover rounded"
                            />
                            <h2 className="text-xl font-light text-white mt-4">
                                {isRTL
                                    ? sections.find((s) => s.id === active)
                                          ?.title.fa
                                    : sections.find((s) => s.id === active)
                                          ?.title.en}
                            </h2>
                            <p className="text-xs text-gray-300 mt-2">
                                {isRTL
                                    ? sections.find((s) => s.id === active)
                                          ?.text.fa
                                    : sections.find((s) => s.id === active)
                                          ?.text.en}
                            </p>
                            <div className="flex flex-wrap gap-1 mt-2">
                                {(isRTL
                                    ? sections.find((s) => s.id === active)
                                          ?.skills.fa
                                    : sections.find((s) => s.id === active)
                                          ?.skills.en
                                )?.map((sk) => (
                                    <span
                                        key={sk}
                                        className="px-2 py-0.5 text-xs text-gray-400 border border-gray-600 rounded">
                                        {sk}
                                    </span>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>

            <style>{`
        .animate-fade {
          animation: fade 0.3s ease-out;
        }
        @keyframes fade {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
        </section>
    );
}
