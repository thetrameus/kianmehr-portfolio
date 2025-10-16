import React, { useState } from "react";
import { useLang } from "../context/LangContext";

export default function CurrentProjects({ isDark }) {
  const { lang } = useLang();
  const pey = lang === "fa" ? "font-peyda" : "";
  const [active, setActive] = useState(0);

  const T = {
    en: {
      caption: "In Progress",
      title1: "Current",
      title2: "Projects",
      join: "Join Beta List",
      projects: [
        {
          id: "biz",
          title: "Business Platform",
          short: "KPI dashboard & process automation",
          long: "Integrated hub for team performance, project management and auto-reporting. Alpha scheduled summer 2024.",
          progress: 68,
        },
        {
          id: "swim",
          title: "Swim Analytics",
          short: "Bio-mechanics tracker for athletes",
          long: "Records heart-rate, splits and stroke form in real-time. Beta ready June 2024.",
          progress: 45,
        },
        {
          id: "lang",
          title: "Language Hub",
          short: "Micro-lesson platform with CEFR levels",
          long: "Interactive cards, smart pronunciation and live leaderboard. Early design phase.",
          progress: 28,
        },
      ],
    },
    fa: {
      caption: "در حال انجام",
      title1: "پروژه‌های",
      title2: "جاری",
      join: "عضویت در خبرنامه",
      projects: [
        {
          id: "biz",
          title: "پلتفرم کسب‌وکار",
          short: "داشبورد KPI و اتوماسیون فرایندها",
          long: "مرکز یکپارچه برای عملکرد تیم، مدیریت پروژه و گزارش‌گیری خودکار. آلفا تابستان ۱۴۰۳.",
          progress: 68,
        },
        {
          id: "swim",
          title: "آنالیتیکس شنا",
          short: "ردیاب بیومکانیک برای ورزشکاران",
          long: "ثبت ضربان قلب، اسپلیت و فرم ضربه در زمان واقعی. بتا خرداد ۱۴۰۳ آماده‌است.",
          progress: 45,
        },
        {
          id: "lang",
          title: "مرکز زبان",
          short: "پلتفرم درس‌های خرد با سطوح CEFR",
          long: "کارت‌های تعاملی، تلفظ هوشمند و جدول امتیاز زنده. فاز طراحی اولیه.",
          progress: 28,
        },
      ],
    },
  };

  const projects = T[lang].projects;

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      {/* هدر بخش با انیمیشن */}
      <div className="text-center mb-12">
        <p
          className={`text-sm uppercase tracking-widest ${
            isDark ? "text-gray-400" : "text-gray-600"
          } mb-3 ${pey}`}
        >
          {T[lang].caption}
        </p>
        <h2
          className={`text-4xl md:text-5xl font-extrabold mb-4 ${
            isDark ? "text-white" : "text-gray-900"
          } ${pey}`}
        >
          {T[lang].title1}{" "}
          <span className="text-red-500 bg-clip-text">{T[lang].title2}</span>
        </h2>
        <div className="w-24 h-1 text-red-500 mx-auto rounded-full" />
      </div>

      {/* کارت‌ها با گرید مدرن */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div
            key={p.id}
            onClick={() => setActive(i)}
            className={`group relative rounded-2xl p-6 cursor-pointer transition-all duration-500 ${
              isDark
                ? "bg-gray-900/40 border border-gray-800 hover:border-gray-700"
                : "bg-white/70 border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl"
            } ${
              active === i
                ? "scale-105 ring-0 ring-red-500/50"
                : "hover:scale-102"
            }`}
          >
            {/* بک‌گرادینت پویا */}
            <div
              className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                isDark
                  ? "bg-gradient-to-br from-gray-800/50 to-gray-900/50"
                  : "bg-gradient-to-br from-gray-50 to-white"
              }`}
            />

            {/* شماره پیشرفت */}
            <div
              className={`absolute top-4 ${
                lang === "fa" ? "left-4" : "right-4"
              } z-10`}
            >
              <div
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  isDark
                    ? "bg-gray-800/80 text-gray-300"
                    : "bg-gray-100/80 text-gray-700"
                } backdrop-blur-sm`}
              >
                {p.progress}%
              </div>
            </div>

            {/* آیکون و عنوان */}
            <div className="relative z-10 mb-4">
              <div className={`flex items-center gap-3 mb-3`}>
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isDark
                      ? "bg-gray-800/50 border border-gray-700"
                      : "bg-gray-100/50 border border-gray-200"
                  } group-hover:scale-110 transition-transform duration-300`}
                >
                  {p.id === "biz" && (
                    <svg
                      className="w-5 h-5 text-red-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  )}
                  {p.id === "swim" && (
                    <svg
                      className="w-5 h-5 text-red-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  )}
                  {p.id === "lang" && (
                    <svg
                      className="w-5 h-5 text-red-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  )}
                </div>
                <h3
                  className={`text-lg font-semibold ${
                    isDark ? "text-white" : "text-gray-900"
                  } ${pey}`}
                >
                  {p.title}
                </h3>
              </div>
            </div>

            {/* محتوای اصلی */}
            <div className="relative z-10">
              <p
                className={`text-sm mb-4 ${
                  isDark ? "text-gray-300" : "text-gray-700"
                } ${pey}`}
              >
                {p.short}
              </p>

              {/* توضیحات کامل با انیمیشن */}
              <div
                className={`transition-all duration-500 ease-in-out ${
                  active === i ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <p
                  className={`text-xs leading-relaxed ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  } mb-4 ${pey}`}
                >
                  {p.long}
                </p>
              </div>

              {/* نوار پیشرفت با انیمیشن */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span
                    className={`text-xs ${
                      isDark ? "text-gray-500" : "text-gray-500"
                    } ${pey}`}
                  >
                    {lang === "fa" ? "پیشرفت" : "Progress"}
                  </span>
                  <span
                    className={`text-xs font-medium ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {p.progress}%
                  </span>
                </div>
                <div
                  className={`w-full h-1.5 rounded-full overflow-hidden ${
                    isDark ? "bg-gray-800" : "bg-gray-200"
                  }`}
                >
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-red-500 to-yellow-500 transition-all duration-1000 ease-out"
                    style={{ width: `${p.progress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* شناور موبایل */}
            <div
              className={`md:hidden absolute bottom-4 ${
                lang === "fa" ? "left-4" : "right-4"
              } transition-transform ${active === i ? "rotate-5" : ""}`}
            ></div>
          </div>
        ))}

        {/* CTA نهایی */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className={`group inline-flex items-center gap-3 px-6 py-3 rounded-xl  transition-all duration-300 ${
              isDark
                ? "bg-gradient-to-r from-red-500 to-yellow-700  text-red-100"
                : "bg-gradient-to-r from-red-500 to-red-500 border-transparent text-white hover:shadow-lg"
            } hover:scale-105`}
          >
            <span className={`font-medium text-center ${pey}`}>
              {T[lang].join}
            </span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
