// SmartNavigation.jsx - Flawless Design
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const SmartNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { name: "Home", href: "#hero", section: "hero" },
    { name: "Journey", href: "#journey", section: "journey" },
    { name: "Pricing", href: "#pricing", section: "pricing" },
    { name: "Work", href: "#brands", section: "brands" },
    { name: "Contact", href: "#hire-me", section: "hire-me" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Determine active section based on scroll position
      navItems.forEach((item) => {
        const element = document.getElementById(item.section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(item.section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getBackgroundColor = () => {
    switch (activeSection) {
      case "hero":
        return "from-blue-500/90 to-cyan-500/90";
      case "journey":
        return "from-orange-500/90 to-amber-500/90";
      case "pricing":
        return "from-purple-500/90 to-pink-500/90";
      case "brands":
        return "from-teal-500/90 to-blue-500/90";
      case "hire-me":
        return "from-gray-800/90 to-gray-900/90";
      default:
        return "from-white/90 to-white/90";
    }
  };

  const getTextColor = () => {
    return ["hero", "journey", "pricing", "brands", "hire-me"].includes(
      activeSection
    )
      ? "text-white"
      : "text-gray-900";
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div
        className={`mx-auto px-6 py-4 rounded-b-3xl bg-gradient-to-r ${getBackgroundColor()} backdrop-blur-md border border-white/10`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className={`text-2xl font-bold ${getTextColor()}`}>
            YourName
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`${getTextColor()} text-sm font-medium relative group ${
                  activeSection === item.section
                    ? "opacity-100"
                    : "opacity-75 hover:opacity-100"
                }`}
              >
                {item.name}
                {activeSection === item.section && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-white rounded-full"></span>
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${getTextColor()}`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-4 py-2 rounded-lg ${getTextColor()} hover:bg-white/10 transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default SmartNavigation;
