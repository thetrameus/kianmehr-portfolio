import { useLanguage } from "../../LanguageContext";

const Footer = () => {
  const { lang } = useLanguage();
  const isRTL = lang === 0;

  // Content based on language
  const content = {
    brand: isRTL ? "کیانمهر" : "Kianmehr",
    copyright: "© 2025",
    navItems: [
      { href: "#", text: isRTL ? "درباره" : "About" },
      { href: "#", text: isRTL ? "تماس" : "Contact" },
      { href: "#", text: isRTL ? "پروژه‌ها" : "Projects" },
    ],
    socialItems: [
      { href: "#", text: "LinkedIn" },
      { href: "#", text: "Telegram" },
    ],
  };

  return (
    <footer
      className="font-mono relative isolate text-gray-300/80 grid md:grid-cols-3 gap-8 items-center py-12 px-6 max-w-7xl mx-auto overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* animated black & white gradient (same as hero) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-black"
        style={{
          backgroundImage:
            "radial-gradient(circle at 60% 80%, rgba(255,255,255,.04) 0%, transparent 60%)," +
            "radial-gradient(circle at 20% 40%, rgba(255,255,255,.03) 0%, transparent 50%)," +
            "conic-gradient(from 180deg at 50% 50%, #000 0deg, #0a0a0a 60deg, #000 120deg, #111 180deg, #000 240deg, #0a0a0a 300deg, #000 360deg)",
          animation: "alive 18s linear infinite reverse",
        }}
      />

      {/* left – minimal branding */}
      <div className="text-sm font-medium">
        {content.brand}
        <span className="text-teal-400 ml-1">{content.copyright}</span>
      </div>

      {/* center – micro navigation */}
      <nav className="flex justify-center gap-6 text-xs tracking-wider">
        {content.navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="hover:text-teal-400 transition-colors"
          >
            {item.text}
          </a>
        ))}
      </nav>

      {/* right – social line */}
      <div className="flex md:justify-end gap-5 text-xs">
        {content.socialItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="hover:text-teal-400 transition-colors"
          >
            {item.text}
          </a>
        ))}
      </div>

      <style jsx>{`
        @keyframes alive {
          0% {
            filter: hue-rotate(0deg) brightness(1);
          }
          50% {
            filter: hue-rotate(20deg) brightness(1.05);
          }
          100% {
            filter: hue-rotate(0deg) brightness(1);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
