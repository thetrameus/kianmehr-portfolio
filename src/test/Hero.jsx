import { useLang } from "./LangContext";

export default function Hero({ isDark }) {
  const { dict, lang } = useLang();
  return (
    <div
      className={`max-w-6xl mx-auto py-24 text-center ${
        lang === "fa" ? "font-peyda" : ""
      }`}
    >
      <div className="my-10">
        <h1 className={`text-6xl font-extrabold leading-tight text-gray-800`}>
          {dict.hero.title}
        </h1>
        <p className="max-w-3xl mx-auto py-5 text-base text-gray-600">
          {dict.hero.text}
        </p>

        <button
          className={`bg-gradient-to-r from-sky-500 from-1% via-sky-600 to-sky-600 rounded-xl px-4 py-2 cursor-pointer ${
            isDark ? "text-gray-100" : "text-white"
          } hover:from-sky-600 hover:via-sky-700 hover:to-sky-600 transition-colors duration-400`}
        >
          شروع همکاری
        </button>
      </div>
    </div>
  );
}
