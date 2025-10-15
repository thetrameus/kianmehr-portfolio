// ContactMeDark.tsximport { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "./LanguageContext";

/* ---------- content unchanged ---------- */
const sections = [
    {
        id: "Business",
        label: { fa: "کسب و کار", en: "Business" },
        title: { fa: "مدیریت و اجرا", en: "Administration" },
        image: "/kianmehr-portfolio/brand.png",
        intro: {
            fa: "سیستم‌های معماری سطح بالا ساخته شده بر اساس نظم و انضباط.",
            en: "Architect-level systems built on swimming discipline.",
        },
        skills: {
            fa: ["مقیاس SaaS", "عدم توقف سرویس", "طراحی فرآیند"],
            en: ["SaaS Scale", "Zero-downtime", "Process Design"],
        },
        projects: {
            fa: ["Nexio MVP", "ISB CLUB", "FlowState Consulting"],
            en: ["Nexio MVP", "ISB CLUB", "FlowState Consulting"],
        },
        contact: "business@kianmehr.com",
    },
    {
        id: "Creator",
        label: { fa: "تولید محتوا", en: "Content Creation" },
        title: { fa: "تولید محتوا", en: "Content Production" },
        image: "/kianmehr-portfolio/brand.png",
        intro: {
            fa: "بیش از ۲ میلیون بازدید در حوزه‌های مهمان‌نواسی، املاک و سرگرمی.",
            en: "2 M+ views across hospitality, real-estate & entertainment.",
        },
        skills: {
            fa: ["قصه‌گویی", "صدای برند", "تدوین ویدیو"],
            en: ["Storytelling", "Brand Voice", "Video Editing"],
        },
        projects: {
            fa: [
                "Wonderland 2M بازدید",
                "SuperFrost 400% فروش",
                "پورتال مهستان",
            ],
            en: [
                "Wonderland 2M views",
                "SuperFrost 400 % sales",
                "Mahestan Portal",
            ],
        },
        contact: "creator@kianmehr.com",
    },
    {
        id: "Swimmm",
        label: { fa: "مربیگری شنا", en: "Swimming Coaching" },
        title: { fa: "مربی درجه ۳", en: "Level 3 Coach" },
        image: "/kianmehr-portfolio/brand.png",
        intro: {
            fa: "۱۵ سال تجربه در خطوط شنا + گواهینامه درجه ۳.",
            en: "15 years lanes + Level 3 certificate.",
        },
        skills: {
            fa: ["تکنیک استروک", "تمرین خصوصی", "انضباط"],
            en: ["Stroke Technique", "Private Coaching", "Discipline"],
        },
        projects: {
            fa: ["آکادمی قارمان", "استخر ۱۵ خرداد", "جلسات خصوصی"],
            en: ["Gharaman Academy", "15 Khordad Pool", "Private sessions"],
        },
        contact: "pool@kianmehr.com",
    },
    {
        id: "English",
        label: { fa: "زبان انگلیسی", en: "English Language" },
        title: { fa: "مربیگری TTC انگلیسی", en: "TTC English Coaching" },
        image: "/kianmehr-portfolio/brand.png",
        intro: {
            fa: "TTC + FCE/CAE — دروس مانند مکالمه احساس می‌شوند.",
            en: "TTC + FCE/CAE — lessons feel like conversations.",
        },
        skills: {
            fa: ["شفافیت", "معماری گرامر", "جریان مکالمه"],
            en: ["Clarity", "Grammar Architecture", "Conversational Flow"],
        },
        projects: {
            fa: ["موسسه آریانا", "گروه‌های سازمانی", "کلاس‌های خصوصی"],
            en: ["Ariana Institute", "Corporate groups", "Private classes"],
        },
        contact: "english@kianmehr.com",
    },
];

const ContactMeDark = () => {
    const { lang } = useLanguage();
    const [activeId, setActiveId] = useState<string | null>(null);
    const active = sections.find((s) => s.id === activeId);
    const isRTL = lang === 0;

    const uiText = {
        skills: isRTL ? "مهارت‌ها" : "Skills",
        work: isRTL ? "کارها" : "Work",
        callMe: isRTL ? "تماس با من" : "Call Me",
        callAIToCallMe: isRTL
            ? "همراه با هوش مصنوعی برای تماس با من"
            : "Call AI to Call Me",
    };

    /* font helper */
    const fontClass = isRTL ? "font-yekan" : "font-head";

    return (
        <section className="bg-black text-gray-100 min-h-screen flex items-center justify-center px-6">
            {!active ? (
                /* ----------- card grid ----------- */
                <div className="grid gap-3 w-full max-w-2xl">
                    {sections.map((s, idx) => (
                        <button
                            key={s.id}
                            onClick={() => setActiveId(s.id)}
                            className={`group relative flex items-center gap-4 px-5 py-3 rounded-lg border border-white/10 hover:border-cyan-400/40 transition-all duration-300 ${fontClass}`}
                            dir={isRTL ? "rtl" : "ltr"}>
                            {/* traveling highlight */}
                            <span
                                className={`absolute bottom-0 h-px bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${
                                    isRTL ? "origin-right" : "origin-left"
                                }`}
                            />

                            <span className="text-xs text-gray-500">
                                0{idx + 1}
                            </span>
                            <span className="text-sm tracking-wide text-gray-100 group-hover:text-white">
                                {isRTL ? s.label.fa : s.label.en}
                            </span>
                            <ArrowRight
                                size={16}
                                className={`text-gray-400 group-hover:text-white transition-transform duration-300 ${
                                    isRTL ? "rotate-180 ml-auto" : "ml-auto"
                                } group-hover:translate-x-1`}
                            />
                        </button>
                    ))}
                </div>
            ) : (
                /* ----------- detail card ----------- */
                <div
                    className={`w-full max-w-md p-6 bg-neutral-900/70 backdrop-blur-md border border-white/10 rounded-2xl space-y-5 animate-fade ${fontClass}`}
                    dir={isRTL ? "rtl" : "ltr"}>
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl text-white">
                            {isRTL ? active.title.fa : active.title.en}
                        </h2>
                        <button
                            onClick={() => setActiveId(null)}
                            className="text-xs text-gray-400 hover:text-white">
                            {isRTL ? (
                                <ArrowRight size={14} />
                            ) : (
                                <ArrowLeft size={14} />
                            )}
                        </button>
                    </div>

                    <img
                        src={active.image}
                        alt={isRTL ? active.title.fa : active.title.en}
                        className="w-full h-48 object-cover rounded-lg"
                    />

                    <p className="text-sm text-gray-300">
                        {isRTL ? active.intro.fa : active.intro.en}
                    </p>

                    <div>
                        <h4 className="text-xs text-gray-400 mb-2">
                            {uiText.skills}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {(isRTL ? active.skills.fa : active.skills.en).map(
                                (skill) => (
                                    <span
                                        key={skill}
                                        className="px-2.5 py-1 text-xs text-cyan-200 bg-cyan-900/40 border border-cyan-500/20 rounded">
                                        {skill}
                                    </span>
                                ),
                            )}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs text-gray-400 mb-2">
                            {uiText.work}
                        </h4>
                        <ul className="text-xs text-gray-300 space-y-1">
                            {(isRTL
                                ? active.projects.fa
                                : active.projects.en
                            ).map((p) => (
                                <li key={p}>• {p}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-2">
                        <button
                            onClick={() =>
                                window.open("tel:+77438014489", "_self")
                            }
                            className="relative w-full py-2 text-xs text-gray-200 rounded group overflow-hidden">
                            <span className="absolute inset-0 rounded border border-gray-700/80" />
                            <span
                                className="absolute inset-0 rounded border border-transparent bg-gradient-to-l from-gray-300/10 via-black to-gray-400/10 animate-pulse"
                                style={{ animationDuration: "2s" }}
                            />
                            <span className="relative">{uiText.callMe}</span>
                        </button>
                        <button
                            onClick={() =>
                                window.open("tel:+77438014489", "_self")
                            }
                            className="relative px-3 py-2 text-xs text-center text-gray-200 rounded border border-white/10 hover:border-white/20 transition overflow-hidden">
                            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-transparent to-cyan-400/10 animate-pulse" />
                            <span className="relative">{uiText.callMe}</span>
                        </button>
                    </div>
                </div>
            )}

            <style>{`
        .animate-fade {
          animation: fade 0.3s ease-out;
        }
        @keyframes fade {
          from {
            opacity: 0;
            transform: scale(0.98);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
        </section>
    );
};

export default ContactMeDark;
