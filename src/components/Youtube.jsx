import React, { useState } from "react";
import { useLang } from "../context/LangContext";

export default function YouTubeStrip({ isDark }) {
    const { t, lang } = useLang();
    const pey = lang === "fa" ? "font-peyda" : "";

    const [playPulse, setPlayPulse] = useState(false);

    // اعداد و ارقام ثابت می‌مانند؛ فقط لیبل‌ها ترجمه می‌شوند
    // const stats = [
    //     { num: "85K", label: t.youtube.sub },
    //     { num: "12.3M", label: t.youtube.views },
    //     { num: "156", label: t.youtube.videos },
    //     { num: "4.8%", label: t.youtube.eng },
    // ];

    return (
        <section
            className={`max-w-6xl mx-auto px-6 py-16 md:py-24 overflow-hidden ${
                lang === "fa" ? "font-peyda-light" : ""
            }`}>
            {/* headline */}
            <div className="text-center mb-10">
                <p
                    className={`text-xs uppercase tracking-widest ${
                        isDark ? "text-gray-400" : "text-gray-700"
                    } mb-3`}>
                    {t.youtube.caption}
                </p>
                <h2
                    className={`text-4xl md:text-5xl font-extrabold ${
                        isDark ? "text-white" : "text-gray-700"
                    } ${pey}`}>
                    {t.youtube.title1}{" "}
                    <span
                        className={
                            isDark
                                ? "text-gray-300"
                                : "bg-gradient-to-r bg-clip-text from-gray-800 to-red-600 text-transparent "
                        }>
                        {t.youtube.title2}
                    </span>
                </h2>
            </div>

            {/* central card */}
            <div
                className={`relative mx-auto max-w-3xl rounded-3xl border ${
                    isDark
                        ? "border-gray-800 bg-white-900/40"
                        : "border-gray-200/80 bg-white"
                } p-8 group`}>
                {/* subtle moving gradient */}
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-red-500/10 via-white/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* big youtube icon */}
                <div className="flex justify-center mb-6">
                    <a
                        href="https://youtube.com/@KianMehr"
                        target="_blank"
                        rel="noreferrer"
                        onMouseEnter={() => setPlayPulse(true)}
                        onMouseLeave={() => setPlayPulse(false)}
                        className={`relative rounded-full p-5 bg-gradient-to-br from-red-600/20 to-red-800/20 border border-red-700/30
                   hover:border-red-500 transition-all duration-300
                   ${playPulse ? "animate-pulse" : ""}`}>
                        <svg
                            viewBox="0 0 24 24"
                            className="w-16 h-16 text-red-500 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"
                            fill="currentColor">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 3.46 9.502C2.512 12.019 2.512 12 2.512 12s0 .019 1.066 2.498a3.015 3.015 0 0 0 2.122 2.136c1.87.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C21.488 12 21.488 12 21.488 12s0 .019-1.066-2.498zM9.545 15.568V8.432l6.182 3.568-6.182 3.568z" />
                        </svg>
                        {/* tiny play arrow overlay */}
                        <span className="absolute inset-0 grid place-items-center">
                            <svg
                                className="w-6 h-6 text-white drop-shadow-lg"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </span>
                    </a>
                </div>

                {/* description */}
                <p
                    className={`text-center leading-relaxed ${
                        isDark ? "text-gray-300/90" : "text-gray-700"
                    } ${pey} ${lang === "fa" ? "font-peyda-lights" : ""} `}>
                    {/* {t.youtube.desc} */}
                    <span>
                        {`${
                            lang === "fa" ? "بزودی قرارش میدم" : "Coming soon"
                        }...`}
                    </span>
                </p>

                {/* stats grid */}
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {/* {stats.map((s) => (
                        <div
                            key={s.label}
                            className={`rounded-xl border ${
                                isDark
                                    ? "border-gray-800 bg-gray-900/60"
                                    : "border-gray-400/50 bg-white"
                            }
                  p-4 text-center hover:-translate-y-1 hover:border-gray-700 transition-all duration-300`}>
                            <div
                                className={`text-xl font-bold ${
                                    isDark ? "text-white" : "text-gray-700"
                                }`}>
                                {s.num}
                            </div>
                            <div
                                className={`text-xs ${
                                    isDark ? "text-gray-400" : "text-gray-500"
                                } mt-1`}>
                                {s.label}
                            </div>
                        </div>
                    ))} */}
                </div>

                {/* CTA */}
                <div className="mt-8 flex justify-center ">
                    <a
                        href="https://youtube.com/@KianMehr"
                        target="_blank"
                        rel="noreferrer"
                        className={`px-5 py-2.5 rounded-lg
               bg-gradient-to-r from-red-500/20 to-red-700/20 border border-red-700/40
               hover:from-red-500/30 hover:to-red-800/30
               transition-all duration-300 text-sm font-medium ${pey} ${
                            isDark ? "text-red-200" : "text-red-600"
                        }`}>
                        {t.youtube.cta}
                    </a>
                </div>
            </div>
        </section>
    );
}
