import { useEffect, useState } from "react";
import { LangProvider } from "./LangContext";
import Header from "./Header";
import Hero from "./Hero";

export default function Test() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const themeClass = isDark ? "bg-gray-900" : "bg-white";

  return (
    <>
      <LangProvider>
        <div className={`h-screen w-screen ` + themeClass}>
          <Header isDark={isDark} setIsDark={setIsDark} />
          <Hero isDark={isDark} />
        </div>
      </LangProvider>
    </>
  );
}
