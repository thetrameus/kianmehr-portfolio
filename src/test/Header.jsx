import { useLang } from "./LangContext";

export default function Header({ isDark, setIsDark }) {
  const { dict, lang, toggleLang } = useLang();
  const NAV_ITEMS = ["services", "about", "contact"];
  const isPersian = lang === "fa";
  const isCurrentlyDark = isDark ? true : false;
  const handleTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <div>
      <div className="sticky top-0 z-50">
        <div
          className={`max-w-6xl mx-auto px-4 py-6 flex justify-between items-center ${
            isPersian ? "font-peyda" : " "
          } transition`}
        >
          <div
            className={`font-semibold text-xl ${
              isCurrentlyDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {dict.app.brand}
          </div>
          <ul
            className={`hidden md:flex justify-center items-center gap-6 ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {NAV_ITEMS.map((k) => (
              <a
                key={k}
                className={`
                  relative px-1 py-2
                   after:absolute after:bg-blue-200 after:left-1/2 after:w-0 after:h-0.5 after:duration-300 after:transition-all hover:after:w-full hover:after:left-0  `}
                href={`#${k}`}
              >
                <li key={k}>{dict.nav[k]}</li>
              </a>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <button
              className="rounded-md bg-gray-100/80 px-3 py-1 uppercase text-sm font-mono font-semibold cursor-pointer
              border-1 border-transparent hover:bg-gray-300/30 hover:border-gray-200 transition duration-200
            "
              onClick={toggleLang}
            >
              {lang}
            </button>
            <button
              onClick={handleTheme}
              className="border-1 border-gray-300 rounded-full w-7.5 h-7.5"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}
