import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "../../LanguageContext";

// Bilingual content for all sections
const sections = [
  {
    id: "Business",
    label: { fa: "کسب و کار", en: "Business" },
    title: { fa: "مدیریت و اجرا", en: "Administration" },
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400",
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
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=400",
    intro: {
      fa: "بیش از ۲ میلیون بازدید در حوزه‌های مهمان‌نوازی، املاک و سرگرمی.",
      en: "2 M+ views across hospitality, real-estate & entertainment.",
    },
    skills: {
      fa: ["قصه‌گویی", "صدای برند", "تدوین ویدیو"],
      en: ["Storytelling", "Brand Voice", "Video Editing"],
    },
    projects: {
      fa: ["Wonderland 2M بازدید", "SuperFrost 400% فروش", "پورتال مهستان"],
      en: ["Wonderland 2M views", "SuperFrost 400 % sales", "Mahestan Portal"],
    },
    contact: "creator@kianmehr.com",
  },
  {
    id: "Swimming",
    label: { fa: "مربیگری شنا", en: "Swimming Coaching" },
    title: { fa: "مربی درجه ۳", en: "Level 3 Coach" },
    image:
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&h=400",
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
    image:
      "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&h=400",
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

  // UI text based on language
  const uiText = {
    skills: isRTL ? "مهارت‌ها" : "Skills",
    work: isRTL ? "کارها" : "Work",
    callMe: isRTL ? "تماس با من" : "Call Me",
    callAIToCallMe: isRTL
      ? "تماس هوش مصنوعی برای تماس با من"
      : "Call AI to Call Me",
  };

  return (
    <section className="bg-black text-gray-100 min-h-screen flex items-center justify-center px-6">
      {!active ? (
        <div className="space-y-2">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveId(s.id)}
              className="group relative flex items-center gap-4 px-5 py-3 bg-black border-t border-b border-gray-200/20
                   hover:border-gray-100/70 transition-colors duration-300 w-72"
              dir={isRTL ? "rtl" : "ltr"}
            >
              {/* invisible number counter */}
              <span className="text-[10px] text-gray-600 font-mono tracking-widest">
                {s.id}
              </span>

              {/* label */}
              <span className="text-sm text-gray-200 tracking-wide">
                {isRTL ? s.label.fa : s.label.en}
              </span>

              {/* thin arrow that appears */}
              <span
                className={`absolute ${
                  isRTL ? "right-5 origin-right" : "left-5 origin-left"
                } h-px w-4 bg-gray-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
              />
            </button>
          ))}
        </div>
      ) : (
        <div
          className="w-full max-w-md p-6 bg-black/50 backdrop-blur-sm border border-white/5 rounded-xl space-y-4 text-center animate-fade"
          dir={isRTL ? "rtl" : "ltr"}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-xl text-gray-100">
              {isRTL ? active.title.fa : active.title.en}
            </h2>
            <button
              onClick={() => setActiveId(null)}
              className="text-xs text-gray-400 hover:text-white"
            >
              {isRTL ? <ArrowRight size={14} /> : <ArrowLeft size={14} />}
            </button>
          </div>

          <img
            src={active.image}
            alt={isRTL ? active.title.fa : active.title.en}
            className="w-full h-48 object-cover rounded"
          />

          <p className="text-sm text-gray-300">
            {isRTL ? active.intro.fa : active.intro.en}
          </p>

          <div>
            <h4 className="text-xs text-gray-400 mb-1">{uiText.skills}</h4>
            <div className="flex flex-wrap gap-1 justify-center">
              {(isRTL ? active.skills.fa : active.skills.en).map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-0.5 text-xs text-gray-400 bg-transparent border border-gray-600 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs text-gray-400 mb-1">{uiText.work}</h4>
            <ul className="text-xs text-gray-300 space-y-0.5">
              {(isRTL ? active.projects.fa : active.projects.en).map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>

          <a
            href={`mailto:${active.contact}`}
            className="inline-block px-2 py-1 text-xs text-cyan-400 border border-cyan-500/30 rounded hover:bg-cyan-500/10 transition"
          >
            {active.contact}
          </a>
          <button
            onClick={() => window.open("tel:+77438014489", "_self")}
            className="relative w-full py-2 text-xs text-gray-200 rounded group overflow-hidden"
          >
            <span className="absolute inset-0 rounded border border-gray-700/80" />
            <span
              className="absolute inset-0 rounded border border-transparent bg-gradient-to-r from-gray-300/10 via-black to-gray-400/10 animate-pulse"
              style={{ animationDuration: "2s" }}
            />
            <span className="relative">{uiText.callMe}</span>
          </button>
          <button
            onClick={() => window.open("tel:+77438014489", "_self")}
            className="relative w-full py-2 text-xs text-gray-200 rounded group overflow-hidden"
          >
            <span className="absolute inset-0 rounded border border-gray-700/80" />
            <span
              className="absolute inset-0 rounded border border-transparent bg-gradient-to-r from-cyan-300/10 via-cyan-500/10 to-cyan-800 animate-pulse"
              style={{ animationDuration: "8s" }}
            />
            <span className="relative">{uiText.callAIToCallMe}</span>
          </button>
        </div>
      )}
      <style jsx>{`
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

        @keyframes orbit-glow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .border-cyan-500//20
        {
          animation: orbit-glow 12s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ContactMeDark;
