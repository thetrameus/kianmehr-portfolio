import { createContext, useContext, useState, useEffect } from "react";
import { dict } from "../lang/dict";

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

    const toggleLang = () => setLang((l) => (l === "fa" ? "en" : "fa"));

    const value = { lang, toggleLang, t: dict[lang] };

    return (
        <LangContext.Provider value={value}>{children}</LangContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLang = () => {
    const ctx = useContext(LangContext);
    if (!ctx) throw new Error("useLang must be used inside LangProvider");
    return ctx;
};
