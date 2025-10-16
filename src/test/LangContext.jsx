import { createContext, useContext, useEffect, useState } from "react";
import { dict } from "./dict";

const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("lang") || "fa";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.setAttribute("dir", dict[lang].dir);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => {
    setLang((lang) => (lang === "fa" ? "en" : "fa"));
  };

  const value = {
    dict: dict[lang],
    lang,
    toggleLang,
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

export const useLang = () => {
  const ctx = useContext(LangContext);
  if (!ctx)
    throw new Error(
      "Something unxcepted happenes. Please give us time to fix it"
    );

  return ctx;
};
