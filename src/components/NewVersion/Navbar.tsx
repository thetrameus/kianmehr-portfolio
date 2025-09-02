// Navbar.jsx - Updated Colors
import { useState, useEffect } from "react";
import { useLanguage } from "../../LanguageContext";

const Navbar = () => {
  const { lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: { en: "Services", fa: "خدمات" }, href: "#services" },
    { name: { en: "About", fa: "درباره" }, href: "#about" },
    { name: { en: "Solutions", fa: "تدابیر" }, href: "#solutions" },
    { name: { en: "Contact", fa: "تماس" }, href: "#contact" },
  ];

  const handleLanguage = (index: number) => {
    setLang(index);
    setIsOpen(false); // Close mobile menu when language changes
  };

  const isRTL = lang === 0;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-md shadow-sm text-gray-800 "
          : "bg-transparent"
      }`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Warm Blue */}
          <div className="flex-shrink-0">
            <a
              href="#"
              className="text-2xl text-gray-50 font-bold bg-gradient-to-r from-black to-sky-800 bg-clip-text"
            >
              KIANMEHR یا کیانمهر
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={isRTL ? item.name.fa : item.name.en}
                  href={item.href}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                >
                  {isRTL ? item.name.fa : item.name.en}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button - Warm Blue Gradient */}
          <div className="hidden md:flex gap-2">
            <button className="bg-gradient-to-r from-[#111620] to-sky-800 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
              {lang === 0 ? "باهام تماس بگیر" : "Contact Me"}
            </button>
            <div className="flex items-center gap-2">
              {["🇮🇷", "🇺🇸"].map((flag, idx) => (
                <button
                  key={idx}
                  onClick={() => handleLanguage(idx)}
                  className={`w-7 h-7 rounded-full text-xs transition-all duration-300 ${
                    lang === idx
                      ? "bg-cyan-600 text-white scale-110"
                      : "bg-gray-800 text-gray-200 hover:bg-gray-700"
                  }`}
                >
                  {flag}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            {/* <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button> */}

            <div className="flex items-center gap-2">
              {["🇮🇷", "🇺🇸"].map((flag, idx) => (
                <button
                  key={idx}
                  onClick={() => setLang(idx)}
                  className={`w-7 h-7 rounded-full text-xs transition-all duration-300 ${
                    lang === idx
                      ? "bg-cyan-600 text-white scale-110"
                      : "bg-gray-800 text-gray-200 hover:bg-gray-700"
                  }`}
                >
                  {flag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-50/10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItemsPersian.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 pb-3 border-t  border-gray-50/10">
              <button className="w-full bg-gradient-to-r from-[#111620] to-sky-800 text-white px-6 py-2 rounded-full text-sm font-medium">
                باهام تماس بگیر
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
