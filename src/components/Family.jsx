import React from "react";import { useLang } from "../context/LangContext";

export default function Bio({ isDark }) {
    const { t, lang } = useLang();
    const pey = lang === "fa" ? "font-peyda" : "";

    const cardBase = isDark
        ? "border-gray-700 bg-gray-800/40 backdrop-blur-sm"
        : "border-gray-200 bg-white/70 shadow-sm";

    const txtTitle = isDark ? "text-gray-100" : "text-gray-900";
    const txtBody = isDark ? "text-gray-100/90" : "text-gray-800";
    const gradHead = isDark
        ? "from-blue-50/10 to-gray-800/30"
        : "from-blue-100/10 to-gray-400/30";

    return (
        <section id="about" className="max-w-4xl mx-auto px-6 py-16 md:py-24">
            <div className="mb-10 text-center">
                <p
                    className={`text-xs uppercase tracking-widest ${
                        isDark ? "text-gray-400" : "text-gray-600"
                    } mb-3 ${lang === "fa" ? "font-peyda-light" : ""}`}>
                    {t.bio.caption}
                </p>
                <h2
                    className={`text-4xl md:text-5xl font-extrabold break-words ${
                        isDark ? "text-white" : "text-black"
                    } ${pey}`}>
                    {t.bio.firstName}{" "}
                    <span
                        className={isDark ? "text-blue-400" : "text-blue-500"}>
                        {t.bio.lastName}
                    </span>
                </h2>
            </div>

            {/* تک باکس اختصاصی */}
            <div
                className={`rounded-3xl p-8 bg-gradient-to-br ${gradHead} ${cardBase} `}>
                <h3 className={`text-2xl font-bold mb-4 ${txtTitle} ${pey}`}>
                    {t.bio.title}
                </h3>
                <p
                    className={`text-sm ${
                        isDark ? "text-gray-400" : "text-gray-700"
                    } ${lang === "fa" ? "font-peyda-light" : ""} mb-4`}>
                    {t.bio.born}
                </p>

                <p className={`text-base ${txtBody} leading-relaxed ${pey}`}>
                    {t.bio.text}
                </p>
            </div>
        </section>
    );
}
