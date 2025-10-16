import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { dict, Dictionary, Lang } from "../lang/dict";

/* ---------- TYPE DEFINITIONS ---------- */
type LangType = "fa" | "en";

interface LangContextValue {
  lang: LangType;
  toggleLang: () => void;
  t: Dictionary; // ترجمه‌های متناسب با زبان فعلی
}

/* ---------- CONTEXT ---------- */
const LangContext = createContext<LangContextValue | undefined>(undefined);

/* ---------- PROVIDER ---------- */
interface LangProviderProps {
  children: ReactNode;
}

export const LangProvider: React.FC<LangProviderProps> = ({ children }) => {
  const [lang, setLang] = useState<LangType>(() => {
    const saved = localStorage.getItem("lang") as LangType | null;
    return saved && ["fa", "en"].includes(saved) ? saved : "fa";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.setAttribute("dir", dict[lang].dir);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang((l) => (l === "fa" ? "en" : "fa"));

  const value: LangContextValue = {
    lang,
    toggleLang,
    t: dict[lang],
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

/* ---------- HOOK ---------- */
export const useLang = (): LangContextValue => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
};
