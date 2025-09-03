// GlassyEffectBio.tsx
// full-page, background-driven, minimal reveal

import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const sections = [
  {
    id: "business",
    label: { en: "Business", fa: "تجارت" },
    title: { en: "Administration", fa: "مدیریت" },
    image: "/kianmehr-portfolio/brand.png",
    intro: {
      en: "Architect-level systems. Zero-downtime.",
      fa: "سیستم‌های معماری‌سطح. بدون وقفه.",
    },
    skills: {
      en: ["SaaS Scale", "Zero-downtime", "Process Design"],
      fa: ["مقیاس SaaS", "بدون وقفه", "طراحی فرآیند"],
    },
    projects: {
      en: ["Nexio MVP", "ISB CLUB", "FlowState"],
      fa: ["Nexio MVP", "ISB CLUB", "FlowState"],
    },
    contact: "business@kianmehr.com",
  },
  {
    id: "creator",
    label: { en: "Creator", fa: "سازنده" },
    title: { en: "Content Production", fa: "تولید محتوا" },
    image: "/kianmehr-portfolio/brand.png",
    intro: {
      en: "2 M+ views across hospitality, real-estate & entertainment.",
      fa: "بیش از ۲ میلیون بازدید در مهمان‌نوازی، املاک و سرگرمی.",
    },
    skills: {
      en: ["Storytelling", "Brand Voice", "Video Editing"],
      fa: ["داستان‌گویی", "صدای برند", "ویرایش ویدیو"],
    },
    projects: {
      en: ["Wonderland 2M views", "SuperFrost 400 % sales", "Mahestan Portal"],
      fa: [
        "Wonderland ۲ میلیون بازدید",
        "SuperFrost ۴۰۰٪ فروش",
        "پرتال ماهستان",
      ],
    },
    contact: "creator@kianmehr.com",
  },
  {
    id: "swimming",
    label: { en: "Swimming", fa: "شنا" },
    title: { en: "Level 3 Coach", fa: "مربی سطح ۳" },
    image: "/kianmehr-portfolio/brand.png",
    intro: {
      en: "15 years lanes + Level 3 certificate.",
      fa: "۱۵ سال خطوط + مدرک سطح ۳.",
    },
    skills: {
      en: ["Stroke Technique", "Private Coaching", "Discipline"],
      fa: ["تکنیک ضربه", "مربی خصوصی", "انضباط"],
    },
    projects: {
      en: ["Gharaman Academy", "15 Khordad Pool", "Private sessions"],
      fa: ["آکادمی قهرمان", "استخر ۱۵ خرداد", "جلسات خصوصی"],
    },
    contact: "pool@kianmehr.com",
  },
];

export default function GlassyEffectBio() {
  const [lang, setLang] = useState(0); // 0 = Farsi, 1 = English
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="relative isolate text-white min-h-screen flex items-center justify-center px-4 font-mono">
      {/* full-screen background */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&h=900)",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {!active ? (
        // floating language toggle + grid
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className="relative group overflow-hidden rounded-xl"
              >
                <img
                  src={s.image}
                  alt={s.label[lang]}
                  className="w-full h-72 object-cover rounded-xl group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                  <span className="text-xl font-light text-white">
                    {s.label[lang]}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </>
      ) : (
        // full card
        <div
          key={active.id}
          className="w-full max-w-2xl p-6 bg-black/60 backdrop-blur-sm border border-white/10 rounded-xl space-y-4 animate-fade"
          dir={lang === 0 ? "rtl" : "ltr"}
        >
          <img
            src={active.image}
            alt={active.title[lang]}
            className="w-full h-64 object-cover rounded"
          />
          <h2 className="text-2xl font-light text-white">
            {active.title[lang]}
          </h2>
          <p className="text-sm text-gray-300">{active.intro[lang]}</p>
          <div className="flex flex-wrap gap-1 justify-center">
            {(lang === 0 ? active.skills.fa : active.skills.en).map((skill) => (
              <span
                key={skill}
                className="px-2 py-0.5 text-xs text-gray-300 bg-transparent border border-gray-600 rounded"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-1 justify-center">
            {(lang === 0 ? active.projects.fa : active.projects.en).map((p) => (
              <span key={p} className="text-xs text-gray-400">
                • {p}
              </span>
            ))}
          </div>
          <a
            href={`mailto:${active.contact}`}
            className="inline-block px-3 py-1 text-xs text-cyan-300 border border-cyan-400/30 rounded"
          >
            {active.contact}
          </a>
          <button
            onClick={() => setActive(null)}
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
          >
            {lang === 0 ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
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
      `}</style>
    </section>
  );
}
