// UnifiedNav.tsx – combined mobile/desktop nav
import { useState, useEffect } from "react";

const navItems = ["Dashboard", "Reports", "Tasks", "Finance", "Account"];

export default function UnifiedNav() {
  const [open, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsDesktop(window.innerWidth >= 1024);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  if (isDesktop) {
    return (
      <nav className="sticky top-0 z-50 flex items-center justify-between h-16 px-8 bg-gradient-to-r from-neutral-900/70 via-black/70 to-neutral-900/70 backdrop-blur-md border-b border-neutral-700/30">
        {/* brand */}
        <span className="text-xl font-black text-white tracking-tighter">
          AdminSuite
        </span>

        {/* links */}
        <ul className="flex space-x-8">
          {["Dashboard", "Reports", "Tasks", "Finance", "Account"].map(
            (item) => (
              <li key={item}>
                <a
                  href="#"
                  className="relative px-4 py-2 text-sm font-medium text-neutral-300 hover:text-white transition-colors"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-white to-neutral-400 scale-x-0 hover:scale-x-100 transition-transform duration-300" />
                </a>
              </li>
            )
          )}
        </ul>

        {/* cta */}
        <button className="px-5 py-2 rounded-md bg-gradient-to-r from-white to-neutral-300 text-black text-sm font-bold tracking-widest hover:scale-105 transition-transform">
          Hire
        </button>
      </nav>
    );
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        className={`fixed top-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full
                    bg-black border border-neutral-800 shadow-lg shadow-black/60
                    transition-all duration-300 ${open ? "rotate-90" : ""}`}
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-white">
          <path
            d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
            fill="currentColor"
          />
        </svg>
      </button>

      <nav
        className={`fixed inset-0 z-40 flex flex-col bg-black transition-transform duration-500 ease-in-out
                    ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="flex flex-col space-y-1 mt-24 px-8">
          {navItems.map((label) => (
            <li key={label}>
              <a
                href="#"
                onClick={() => setOpen(false)}
                className="block py-3 text-2xl font-light tracking-wider text-neutral-400
                           border-b border-neutral-800 hover:text-white hover:border-neutral-600
                           transition-all duration-300"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
