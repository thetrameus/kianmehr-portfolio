import React, { useState } from "react";import { useLang } from "../context/LangContext";

export default function CurrentProjects({ isDark }) {
    const { lang } = useLang();
    const pey = lang === "fa" ? "font-peyda" : "";

    const [active, setActive] = useState(0);

    const cardBase = isDark
        ? "border-gray-800 bg-gray-900/40 backdrop-blur-sm"
        : "border-gray-200 bg-white/70 shadow-sm";
    const txtTitle = isDark ? "text-gray-100" : "text-gray-900";
    const txtBody = isDark ? "text-gray-300/90" : "text-gray-800";
    const txtDesc = isDark ? "text-gray-400" : "text-gray-600";
    const progGrad = "from-slate-600 to-slate-800";
    const bdrProg = isDark ? "border-gray-700" : "border-gray-200";

    // متن‌های inline
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
        <section
            id="projects"
            className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <div className="text-center mb-10">
                <p
                    className={`text-xs uppercase tracking-widest ${txtDesc} mb-3 ${pey}`}>
                    {T[lang].caption}
                </p>
                <h2
                    className={`text-4xl md:text-5xl font-extrabold ${
                        isDark ? "text-white" : "text-black"
                    } ${pey}`}>
                    {T[lang].title1}{" "}
                    <span className={isDark ? "text-red-600" : "text-red-500"}>
                        {T[lang].title2}
                    </span>
                </h2>
            </div>

            {/* سه آیتم ردیفی - ریسپانسیو */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
                {projects.map((p, i) => (
                    <div
                        key={p.id}
                        onClick={() => setActive(i)}
                        className={`relative rounded-2xl border p-6 cursor-pointer transition-all duration-300 ${
                            i === active
                                ? "scale-105 shadow-xl"
                                : "hover:scale-102"
                        } ${cardBase}`}>
                        {/* شماره پیشرفت در گوشه */}
                        <div
                            className={`absolute top-3 ${
                                lang === "fa" ? "left" : "right"
                            }-3 text-xs px-2 py-1 rounded-md border ${
                                isDark
                                    ? "border-gray-700 bg-gray-800/60 text-gray-300"
                                    : "border-gray-300 bg-gray-100 text-gray-700"
                            }`}>
                            <span className=""> {p.progress}%</span>
                        </div>

                        {/* آیکون + عنوان */}
                        <div className="flex items-center gap-3 mb-3">
                            <div
                                className={`w-8 h-8 rounded-lg border border-slate-400/30 text-slate-500 dark:text-slate-400 grid place-items-center`}>
                                {/* آیکون ثابت برای هر دو زبان */}
                                {p.id === "biz" && (
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        className="w-6 h-6">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.8}
                                            d="M5 18h14M5 14h14M5 10h14M5 6h14"
                                        />
                                    </svg>
                                )}
                                {p.id === "swim" && (
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        className="w-6 h-6">
                                        <path
                                            d="M2.5 10.5c2.1 0 4.1.8 5.6 2.3l1.9 1.8c.7.7 1.9.7 2.6 0l1.9-1.8c1.5-1.5 3.5-2.3 5.6-2.3M12 21v-4M8 17l4-4 4 4"
                                            strokeWidth={1.8}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                )}
                                {p.id === "lang" && (
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        className="w-6 h-6">
                                        <path
                                            d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                                            strokeWidth={1.8}
                                        />
                                        <path
                                            d="M8 12h8m-4-4v8"
                                            strokeWidth={1.8}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                )}
                            </div>
                            <h4
                                className={`text-base font-semibold ${txtTitle} ${pey}`}>
                                {p.title}
                            </h4>
                        </div>

                        {/* توضیح کوتاه - همیشه نمایش داده می‌شود */}
                        <p className={`text-sm ${txtBody} mb-3 ${pey}`}>
                            {p.short}
                        </p>

                        {/* توضیح بلند - فقط آیتم فعال */}
                        <div
                            className={`text-xs ${txtDesc} space-y-1 transition-all duration-300 ${
                                i === active
                                    ? "max-h-40 opacity-100"
                                    : "max-h-0 opacity-0 overflow-hidden"
                            }`}>
                            <p className={pey}>{p.long}</p>
                        </div>

                        {/* نوار پیشرفت - تنها رنگ برجسته */}
                        <div
                            className={`w-full h-1.5 rounded-full ${bdrProg} overflow-hidden mt-3`}>
                            <div
                                className={`h-full rounded-full bg-gradient-to-r ${progGrad} transition-all duration-700`}
                                style={{ width: `${p.progress}%` }}
                            />
                        </div>

                        {/* دکمه موبایل: آیکون وضعیت */}
                        <div className="md:hidden mt-3 flex items-center justify-between">
                            <span
                                className={`text-xs ${txtDesc} ${pey}`}></span>
                            <svg
                                className="w-4 h-4 text-slate-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA پایانی */}
            <div className="mt-12 text-center">
                <a
                    href="#contact"
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border transition-all duration-300 ${
                        isDark
                            ? "bg-gradient-to-r from-sky-500/30 to-sky-800/30 border-sky-700/40 hover:from-sky-500/40 hover:to-sky-700/40 text-sky-100"
                            : "bg-gradient-to-r from-gray-800 to-gray-900 border-gray-700 hover:bg-gray-700 text-white"
                    } ${pey}`}>
                    <span>{T[lang].join}</span>
                    <span className="group-hover:translate-x-1 transition-transform">
                        →
                    </span>
                </a>
            </div>
        </section>
    );
}
