import React, { useState, useEffect } from "react";
import { useLang } from "../context/LangContext";

type NavKey = "about" | "services" | "contact";

interface NavbarProps {
  isDark: boolean;
  setIsDark: (value: boolean | ((prev: boolean) => boolean)) => void;
}

const navKeys: NavKey[] = ["about", "services", "contact"];

const Navbar: React.FC<NavbarProps> = ({ isDark, setIsDark }) => {
  const { t, lang, toggleLang } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const handleLanguage = () => {
    toggleLang();
  };
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bg = isDark
    ? "bg-gray-900/90 backdrop-blur-xl border-gray-800"
    : "bg-white/90 backdrop-blur-xl border-transparent border-gray-200";
  const txt = isDark ? "text-gray-300" : "text-gray-700";

  return (
    <nav
      className={`sticky top-0 z-50 border-transparent ${
        scrolled ? bg : "bg-transparent"
      } ${lang === "fa" ? "font-peyda" : ""}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* لوگو */}
        <a
          href="/"
          className={`text-xl font-semibold tracking-tight bg-gradient-to-r ${
            isDark ? "from-gray-50 to-gray-300" : "from-gray-800 to-gray-600"
          } bg-clip-text text-transparent`}
        >
          {t.app.brand}
        </a>

        {/* دسکتاپ منو */}
        <ul className={`hidden md:flex items-center gap-6 text-sm ${txt}`}>
          {navKeys.map((k) => (
            <li key={k}>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById(k);
                  if (!target) return;

                  const isMobile = window.innerWidth < 768; // هر سایزی که موبایل حساب کنی
                  const offset = isMobile ? 80 : 0; // پیکسل‌هایی که می‌خوای بالاتر بیاد

                  const top =
                    target.getBoundingClientRect().top +
                    window.pageYOffset -
                    offset;

                  window.scrollTo({ top, behavior: "smooth" });
                }}
                className={`relative px-2 py-1 transition-colors cursor-pointer
      after:absolute after:left-1/2 after:bottom-0 after:h-0.5 after:w-0
      after:bg-blue-200 after:transition-all after:duration-300
      hover:after:w-full hover:after:left-0 
      hover:${isDark ? "text-gray-white" : "text-gray-500"} `}
              >
                {t.nav[k]}
              </a>
            </li>
          ))}
        </ul>

        {/* دکمه‌ها */}
        <div className="flex items-center gap-3 font-mono">
          {/* سوییچ زبان */}
          <button
            onClick={handleLanguage}
            className={`px-3 py-1 rounded-full border text-sm font-medium transition
              ${
                isDark
                  ? "border-gray-700/50 bg-gray-800/40 hover:bg-gray-700/40 text-gray-200"
                  : "border-gray-100 bg-white hover:bg-gray-100 text-gray-800"
              }`}
            aria-label="toggle language"
          >
            {t.dir === "rtl" ? "EN" : "FA"}
          </button>

          {/* سوییچ تم */}
          <button
            onClick={() => setIsDark((d) => !d)}
            className={`group grid place-items-center w-9 h-9 rounded-full border-0 ${
              isDark
                ? "border-gray-500/50 bg-gray-800/40 hover:bg-gray-100/40"
                : "border-gray-100 bg-white hover:bg-gray-100"
            } transition`}
            aria-label="toggle theme"
          >
            <svg
              className={`w-5 h-5 ${
                isDark ? "text-yellow-400" : "text-gray-700"
              } group-hover:rotate-180 transition-transform`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeWidth="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </button>

          {/* همبرگ موبایل */}
          <button
            className={`md:hidden p-2 rounded-md transition ${
              isDark ? "hover:bg-gray-800/60" : "hover:bg-gray-200/60"
            }`}
            onClick={() => setOpen((v) => !v)}
            aria-label="toggle menu"
          >
            <svg
              className={`w-6 h-6 ${
                isDark ? "text-gray-200" : "text-gray-700"
              } transition-transform`}
              style={{
                transform: open ? "rotate(180deg)" : "rotate(0)",
              }}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* پنل موبایل */}
      <div
        className={`md:hidden grid transition-all duration-500 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <ul
            className={`flex flex-col items-center gap-3 px-6 pb-6 pt-2 ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {navKeys.map((k, i) => (
              <li
                key={k}
                className={`transition-all duration-300 ease-out ${
                  open
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <a
                  href={`#${k}`}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-2 rounded-md transition ${
                    isDark
                      ? "hover:bg-gray-800/70 hover:text-white"
                      : "hover:bg-gray-200/70 hover:text-gray-900"
                  }`}
                >
                  {t.nav[k]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
