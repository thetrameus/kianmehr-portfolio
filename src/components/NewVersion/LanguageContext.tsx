// LanguageContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";

interface LanguageContextType {
  lang: number;
  setLang: (lang: number) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [lang, setLangState] = useState(() => {
    const savedLang = localStorage.getItem("lang");
    return savedLang !== null ? parseInt(savedLang) : 0;
  });

  const setLang = (newLang: number) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang.toString());
  };

  useEffect(() => {
    localStorage.setItem("lang", lang.toString());
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
