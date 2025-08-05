import "./App.css";
import { useEffect, useRef, useState } from "react";
import CareerClipPath from "./components/Career";
import ScrollGallery from "./components/Items";
import PortfolioCard3D from "./components/Portfolio";
import ContactAbout from "./components/Contact";
import CreativeFooter from "./components/Section/Footer";
import QuickCart from "./components/Carts";
import BrandShowcase3D from "./components/Brands";
import ScrollCountdownReveal from "./components/Unused/Presentation";

function App() {
  const [open, setOpen] = useState(false);

  const textRef = useRef(null);
  const bgRef = useRef(null);
  const title = "Business Admin".split("");

  useEffect(() => {
    // stagger-in text
    const chars = [...textRef.current.querySelectorAll("span")];
    chars.forEach((c, i) => {
      c.style.transform = "translateY(40px)";
      c.style.opacity = "0";
      setTimeout(() => {
        c.style.transition = "transform .6s ease, opacity .6s ease";
        c.style.transform = "translateY(0)";
        c.style.opacity = "1";
      }, 60 * i);
    });

    // subtle parallax on scroll
    const onScroll = () => {
      const y = window.scrollY;
      bgRef.current.style.transform = `translateY(${y * 0.25}px)`;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className=""></div>

      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        className={`fixed top-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full
                    bg-gradient-to-br from-slate-900 via-slate-950 to-black shadow-lg
                    hover:shadow-sky-500/30 focus:outline-none transition-all duration-300 ${
                      open ? "rotate-90" : ""
                    }`}
      >
        <span className="relative h-5 w-5">
          <span
            className={`absolute block h-0.5 w-full bg-gradient-to-r from-sky-400 to-sky-600
                        transition-all duration-300 top-0 origin-center
                        ${open ? "top-1.5 rotate-45" : "rotate-0"}`}
          />
          <span
            className={`absolute top-2 block h-0.5 w-full bg-gradient-to-r from-sky-400 to-sky-600
                        transition-opacity duration-300 ${
                          open ? "opacity-0" : "opacity-100"
                        }`}
          />
          <span
            className={`absolute block h-0.5 w-full bg-gradient-to-r from-sky-400 to-sky-600
                        transition-all duration-300 top-4 origin-center
                        ${open ? "top-1.5 -rotate-45" : "rotate-0"}`}
          />
        </span>
      </button>
      <nav
        className={`fixed inset-0 z-40 flex flex-col bg-gradient-to-b from-slate-900 via-slate-950 to-black
                    transition-transform duration-500 ease-in-out
                    ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="mt-24 space-y-6 px-8 text-right">
          {["Dashboard", "Reports", "Tasks", "Finance", "Account"].map(
            (label) => (
              <li key={label}>
                <a
                  href="#"
                  onClick={() => setOpen(false)}
                  className="block text-2xl font-light tracking-wider text-slate-300
                         hover:text-sky-400 transition-colors duration-300"
                >
                  {label}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>

      <section className="relative overflow-hidden bg-gradient-to-b from-neutral-900 via-neutral-950 to-black h-[60vh] min-h-[480px] flex items-center justify-center">
        {/* animated background lines */}
        <div ref={bgRef} className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,#ffffff03_0%,transparent_100%)]"></div>
        </div>

        {/* content */}
        <div className="relative z-10 text-center px-6">
          <h1
            ref={textRef}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-none"
          >
            {title.map((char, i) => (
              <span key={i} className="inline-block">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>

          <p className="mt-6 max-w-md mx-auto text-neutral-400 text-lg md:text-xl">
            Centralize your workflow, control your numbers, grow your business —
            in black & white.
          </p>

          <button
            className="mt-10 px-8 py-3 rounded-full bg-white text-black font-semibold
                           hover:bg-neutral-300 transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </button>
        </div>
      </section>

      <CareerClipPath />

      <ScrollGallery />

      <PortfolioCard3D
        photo="https://picsum.photos/id/1027/800/800"
        name="Jane Doe"
        role="Senior Product Manager"
        bio="12+ years turning complex data into elegant business solutions."
      />

      <ContactAbout />

      <BrandShowcase3D />

      <ScrollCountdownReveal />

      <QuickCart />

      <CreativeFooter />
    </>
  );
}

export default App;
