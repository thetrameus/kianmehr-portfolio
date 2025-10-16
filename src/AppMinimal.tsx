import React, { useEffect, useState } from "react";
import { LangProvider } from "./context/LangContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Fields from "./components/Fields";
import Projects from "./components/Projects";
import ImageSlider from "./components/ImageSlider";
import Family from "./components/Family";
import Youtube from "./components/Youtube";
import Sound from "./components/Sound";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import DeviceInfo from "./components/DeviceInfo";

const AppMinimal: React.FC = () => {
  window.location.href = "https://test.fourty7.ir";
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const themeClasses = isDark
    ? "bg-gray-900 text-gray-200"
    : "bg-gray-50 text-gray-900";

  return (
    <LangProvider>
      <div className={themeClasses}>
        <Navbar isDark={isDark} setIsDark={setIsDark} />
        {/* <Hero isDark={isDark} />
        <Fields isDark={isDark} />
        <Projects isDark={isDark} />
        <ImageSlider isDark={isDark} />
        <Family isDark={isDark} />
        <Youtube isDark={isDark} />
        <Sound />
        <Contact isDark={isDark} />
        <Footer isDark={isDark} /> */}
        <DeviceInfo />
      </div>
    </LangProvider>
  );
};

export default AppMinimal;
