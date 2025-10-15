import React, { useState, useRef, useEffect } from "react";
import { useLang } from "../context/LangContext";

const RadioFacePage = () => {
    const { lang } = useLang();
    const pey = lang === "fa" ? "font-peyda" : "";

    const [playing, setPlaying] = useState(false);
    const audioRef = useRef(null);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (!audio) return;
        playing ? audio.pause() : audio.play();
        setPlaying((p) => !p);
    };
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handleEnded = () => setPlaying(false);
        audio.addEventListener("ended", handleEnded);
        return () => audio.removeEventListener("ended", handleEnded);
    }, []);
    // متن‌های inline
    const txt = {
        en: {
            title: "Kianmehr Voice",
            cta: "Hit the button and feel the wave — a voice message from Kianmehr, updated every week.",
        },
        fa: {
            title: "صدای کیان‌مهر",
            cta: "دکمه رو بزن و موج رو حس کن — پیام صوتی از کیان‌مهر، هر هفته به‌روزرسانی می‌شه.",
        },
    };

    return (
        <>
            <audio ref={audioRef} preload="none" src="/voice.ogg" />

            <main className="relative min-h-screen bg-black text-white overflow-hidden">
                {/* عکس چهره سیاه‌وسفید */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-30"
                    style={{ backgroundImage: "url(/images/face-sample.png)" }}
                />

                {/* محتوا */}
                <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
                    <div
                        className={`rounded-3xl border border-gray-800 bg-gray-900/40 backdrop-blur-sm p-8 shadow-2xl ${pey}`}>
                        <h1 className="text-3xl font-extrabold mb-6 text-center tracking-tight bg-gradient-to-r from-blue-100 to-green-100 bg-clip-text text-transparent">
                            {txt[lang].title}
                        </h1>

                        {/* دکمه با هدست و امواج زرد-کرمی-نارنجی */}
                        <button
                            onClick={togglePlay}
                            className="group relative mx-auto flex items-center justify-center
                       w-40 h-40 rounded-full
                       bg-gradient-to-br from-gray-800 to-black
                       border border-gray-700 hover:border-yellow-500
                       transition-all duration-300 hover:scale-105"
                            aria-label={
                                lang === "fa" ? "پخش / توقف" : "Play / Pause"
                            }>
                            {/* هدست */}
                            <svg
                                viewBox="0 0 24 24"
                                className={`w-10 h-10 text-yellow-300 transition-transform duration-300
                       ${playing ? "scale-110 rotate-12" : "scale-100"}`}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5">
                                <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" />
                            </svg>

                            {/* امواج زرد-کرمی-نارنجی با ارتفاع متفاوت */}
                            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-end gap-1.5 h-10">
                                {[...Array(7)].map((_, i) => (
                                    <span
                                        key={i}
                                        className="w-2 rounded-full bg-gradient-to-t from-orange-400 via-yellow-300 to-yellow-100
                           transition-all duration-700 ease-in-out"
                                        style={{
                                            animation: playing
                                                ? "waveReal 1.8s ease-in-out infinite"
                                                : "none",
                                            animationDelay: `${i * 220}ms`,
                                            height: playing
                                                ? `${
                                                      12 +
                                                      Math.sin(i * 0.9) * 14
                                                  }px`
                                                : "6px",
                                        }}
                                    />
                                ))}
                            </div>
                        </button>

                        <p
                            className={`mt-10 text-center text-sm text-gray-400 max-w-md ${pey}`}>
                            {txt[lang].cta}
                        </p>
                    </div>
                </div>

                {/* انیمیشن امواج واقعی */}
                <style jsx>{`
                    @keyframes waveReal {
                        0%,
                        100% {
                            height: 6px;
                        }
                        50% {
                            height: calc(6px + 14px);
                        }
                    }
                `}</style>
            </main>
        </>
    );
};

export default RadioFacePage;
