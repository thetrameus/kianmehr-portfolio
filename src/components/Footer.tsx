import React, { useState, useEffect } from "react";
import { useLang } from "../context/LangContext";

/* -------------  تنظیمات تصویر پس‌زمینه  ------------- */
const ROTATE = 20; // زاویه چرخش به سمت راست (درجه) */
const OPACITY = 0.08; // شفافیت تصویر (0-1) */

export default function Footer({ isDark }) {
  const { lang } = useLang();
  const pey = lang === "fa" ? "font-peyda" : "";
  const BG_IMAGE = isDark ? "/k-white.png" : "/k-black.png";
  const [showLines, setShowLines] = useState(false);

  useEffect(() => {
    if (isDark) {
      const t = setTimeout(() => setShowLines(true), 400);
      return () => clearTimeout(t);
    } else {
      setShowLines(false);
    }
  }, [isDark]);

  const bg = isDark ? "bg-gray-50 text-gray-900" : "bg-gray-900 text-white";
  const txt = isDark ? "text-gray-700" : "text-gray-300";
  const bdr = isDark ? "border-gray-200" : "border-gray-800";

  const [pulse, setPulse] = useState(false);
  const copyBrandColor = async () => {
    await navigator.clipboard.writeText("#0ea5e9");
    setPulse(true);
    setTimeout(() => setPulse(false), 600);
  };

  /* خطوط شناور (بدون تغییر) */
  const FloatingLines = () => (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`absolute h-px rounded-full transition-all duration-1000 ease-out
            ${showLines ? "opacity-60 scale-100" : "opacity-0 scale-95"}`}
          style={{
            width: `${16 + i * 12}rem`,
            top: `${18 + i * 9}%`,
            left: `${-6 + i * 5}%`,
            background: `linear-gradient(90deg, transparent, rgba(100,116,139,.4), transparent)`,
            transform: `rotate(${-10 + i * 5}deg)`,
            transitionDelay: `${i * 150}ms`,
            animation: showLines
              ? `morph 14s ease-in-out infinite ${i * 1.2}s`
              : "none",
          }}
        />
      ))}
      <style jsx>{`
        @keyframes morph {
          0%,
          100% {
            transform: rotate(var(--r)) scaleX(1) translateX(0);
          }
          50% {
            transform: rotate(calc(var(--r) + 3deg)) scaleX(1.08)
              translateX(1rem);
          }
        }
      `}</style>
    </div>
  );

  /* متن‌های چندزبانه */
  const T = {
    en: {
      strategy: "Strategy · Content · Coaching",
      crafted: "Crafted with",
      in: "in Tehran · ©",
      about: "About",
      services: "Services",
      contact: "Contact",
      top: "Back to top",
    },
    fa: {
      strategy: "استراتژی · محتوا · کوچینگ",
      crafted: "ساخته‌شده با",
      in: "در تهران · ©",
      about: "درباره‌ی من",
      services: "خدمات",
      contact: "تماس با من",
      top: "بازگشت به بالا",
    },
  };

  return (
    <footer className={`relative overflow-hidden border-t ${bdr}  ${bg}`}>
      {/* 1️⃣ تصویر پس‌زمینه: grayscale + شفافیت + چرخش 3 بعدی */}

      {/* 2️⃣ خطوط شناور + محتوا (z-index بالاتر) */}
      {isDark && <FloatingLines />}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div
              onClick={copyBrandColor}
              className={`group grid place-items-center w-14 h-14 rounded-2xl cursor-pointer bg-gradient-to-br from-sky-500/20 to-sky-800/20 border border-sky-200/30 hover:border-sky-500 transition-all duration-300 ${
                pulse ? "animate-pulse" : ""
              }`}
            >
              <svg
                className="w-6 h-6 text-sky-400 group-hover:rotate-12 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className={`text-xl font-bold tracking-tight ${pey}`}>
                Kianmehr
              </h3>
              <p className={`text-xs ${txt} ${pey}`}>{T[lang].strategy}</p>
            </div>
          </div>

          <div className="flex items-center gap-4"></div>
        </div>

        <div className="mt-10 text-center">
          <p className={`inline-flex items-center gap-2 text-sm ${txt} ${pey}`}>
            {T[lang].crafted}{" "}
            <span className="inline-block animate-pulse text-red-500">♥</span>{" "}
            {T[lang].in} {new Date().getFullYear()} Kianmehr
          </p>
        </div>

        <div
          className={`mt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm ${txt} ${
            lang === "fa" ? "font-peyda-light" : ""
          }`}
        >
          <div className="flex gap-6">
            <a href="#about" className="hover:text-gray-200 transition">
              {T[lang].about}
            </a>
            <a href="#services" className="hover:text-gray-200 transition">
              {T[lang].services}
            </a>
            <a href="#contact" className="hover:text-gray-200 transition">
              {T[lang].contact}
            </a>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`group flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-700 hover:border-gray-500 hover:text-gray-200 transition ${pey}`}
          >
            <svg
              className="w-4 h-4 group-hover:-translate-y-0.5 transition"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeWidth="2" d="M5 15l7-7 7 7" />
            </svg>
            {T[lang].top}
          </button>
        </div>
      </div>
    </footer>
  );
}
