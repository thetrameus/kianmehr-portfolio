import React from "react";import { useLang } from "../context/LangContext";

export default function Hero({ isDark }) {
    const { t, lang } = useLang();

    const pey = lang === "fa" ? "font-peyda" : "";

    const subText = isDark ? "text-green-300/60" : "text-green-900/70";
    const descText = isDark ? "text-gray-400/90" : "text-gray-600/90";
    const spanText = isDark ? "text-transparent" : "text-gray-800";

    return (
        <section className="max-w-6xl mx-auto px-6 pt-0 pb-16 md:pt-12 md:pb-24 text-center">
            {/* زیرعنوان */}
            <p
                className={`text-xs uppercase tracking-widest ${subText} mb-4 ${pey}`}>
                {/* متن فارسی/انگلیسی در صورت نیاز */}
            </p>

            {/* تیتر اصلی */}
            <h1
                className={`break-words text-[42px] md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-blue-100/90 via-green-100 to-blue-50/90 bg-clip-text text-transparent ${pey}`}>
                {/* متن اول */}
                <br />
                <span
                    className={`bg-gradient-to-r from-gray-500/90 via-blue-100 to-gray-800/80 bg-clip-text text-wrap ${spanText} ${pey}`}>
                    {t.hero.title2}
                </span>
            </h1>

            {/* توضیح */}
            <p
                className={`mt-5 text-base ${descText} max-w-3xl mx-auto ${pey}`}>
                {t.hero.desc}
            </p>

            {/* دکمه‌ها */}
            <div
                className={`mt-9 flex items-center ${
                    isDark ? "" : "text-white"
                } justify-center gap-4`}>
                <a
                    href="#contact"
                    className={`px-5 py-2.5 rounded-lg bg-gradient-to-r from-sky-500/30 to-sky-800
                     hover:bg-blue-900/30 transition-all duration-300 text-sm font-medium ${pey}`}>
                    {t.hero.cta1}
                </a>
            </div>
        </section>
    );
}
