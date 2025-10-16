import React from "react";
import { useLang } from "../context/LangContext";

// بخش social با آیکون‌های ساده و حرفه‌ای از Lucide Icons
const social = [
    {
        name: "09150089201",
        url: "https://wa.me/0910xxx2220",
        icon: (
            <svg className="w-7 h-7 bg-[#]" viewBox="0 0 24 24">
                <path
                    fill="#048132"
                    d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C9.61 21 3 14.39 3 6c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                />
            </svg>
        ),
    },
    {
        name: "09150089201",
        url: "https://t.me/Kianmehr",
        icon: (
            <svg className="w-7 h-7" viewBox="0 0 24 24">
                <path
                    fill="#0088cc"
                    d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm4.2 6.3-1.4 6.6c-.2.8-.7 1-1.3.6l-2.1-1.6-1 1c-.4.4-.7.2-.6-.4l.7-3.9 3.8-2.3c.5-.3.4-.5-.2-.3l-5.6 3.5-.8-.3c-.4-.1-.4-.5.1-.8l10.4-6c.5-.3.9-.1.7.4z"
                />
            </svg>
        ),
    },
    {
        name: "kianmehr@gmail.com",
        url: "mailto:kianmehr@gmail.com",
        icon: (
            <svg className="w-7 h-7" viewBox="0 0 24 24">
                <path
                    fill="#ad8500"
                    d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                />
            </svg>
        ),
    },
];

export default function ContactSection({ isDark }) {
    const { lang } = useLang();
    const pey = lang === "fa" ? "font-peyda" : "";

    const T = {
        en: {
            caption: "Get In Touch",
            title1: "Let's Build",
            title2: "Together",
        },
        fa: { caption: "در ارتباط باشیم", title1: "باهم", title2: "صحبت کنیم" },
    };

    return (
        <section id="contact" className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <div className="text-center mb-10">
                <p
                    className={`text-xs uppercase tracking-widest ${
                        isDark ? "text-gray-300" : "text-gray-900"
                    } ${pey} mb-3`}>
                    {T[lang].caption}
                </p>
                <h2
                    className={`text-4xl md:text-5xl font-extrabold ${
                        isDark ? "text-white" : "text-gray-700"
                    } ${pey}`}>
                    {T[lang].title1}{" "}
                    <span
                        className={
                            isDark ? "text-green-500" : "text-green-600"
                        }>
                        {T[lang].title2}
                    </span>
                </h2>
            </div>

            {/* چینش عمودی - 3 خط */}
            <div className="flex flex-col items-center gap-4">
                {social.map((s) => (
                    <a
                        key={s.name}
                        href={s.url}
                        target="_blank"
                        rel="noreferrer"
                        className={`group flex items-center gap-4 px-5 py-3 rounded-xl border ${
                            isDark
                                ? "border-gray-700 hover:border-gray-500"
                                : "border-gray-300 hover:border-gray-400"
                        } hover:shadow-md hover:-translate-y-0.5 transition-all duration-300`}>
                        {s.icon}
                        <span
                            className={`text-base font-medium ${pey} ${
                                isDark ? "text-gray-200" : "text-gray-700"
                            } group-hover:text-current`}>
                            {s.name}
                        </span>
                    </a>
                ))}
            </div>
        </section>
    );
}
