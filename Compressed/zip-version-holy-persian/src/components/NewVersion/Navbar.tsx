// Navbar.jsx - Updated Colors
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Solutions", href: "#solutions" },
    { name: "Contact", href: "#contact" },
  ];

  const navItemsPersian = [
    { name: "خدمات", href: "#services" },
    { name: "درباره", href: "#about" },
    { name: "تدابیر", href: "#solutions" },
    { name: "تماس", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Warm Blue */}
          <div className="flex-shrink-0">
            <a
              href="#"
              className="text-2xl font-bold bg-gradient-to-r from-black to-sky-800 bg-clip-text text-transparent"
            >
              KIANZEMN یا کیانمهر
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItemsPersian.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#000000] to-[#009688] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button - Warm Blue Gradient */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-[#000000] to-[#009688] text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
              باهام تماس بگیر
            </button>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 pb-3 border-t border-gray-200">
              <button className="w-full bg-gradient-to-r  from-[#000000] to-[#009688] text-white px-6 py-2 rounded-full text-sm font-medium">
                باهام تماس بگیر
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
