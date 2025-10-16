// src/components/ImageSlider.lazy.tsx
import React, { useEffect, useState, memo } from "react";
import { useLang } from "../context/LangContext";

/* ----------  تایپ‌ها  ---------- */
interface Slide {
  id: number;
  src: string;
  alt: string;
  title: string;
  desc: string;
  descPersian: string;
}

interface ImageSliderCoreProps {
  isDark: boolean;
  images?: Slide[];
}

type Direction = "next" | "prev";

/* ----------  کامپوننت اصلی اسلایدر  ---------- */
const ImageSliderCore: React.FC<ImageSliderCoreProps> = ({
  isDark,
  images = [],
}) => {
  const { lang } = useLang();
  const pey = lang === "fa" ? "font-peyda" : "";

  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const defaultImages: Slide[] = [
    {
      id: 1,
      src: `/kianmehr-portfolio/images/brand/${isDark ? "white" : "dark"}.webp`,
      alt: "Project 1",
      title: "",
      desc: "Strategic planning session",
      descPersian: "جلسات ورکشاپ کیانمهر",
    },
    {
      id: 2,
      src: "/kianmehr-portfolio/images/brand/hybrid-green-yellow.webp",
      alt: "Project 2",
      title: "",
      desc: "Behind the scenes",
      descPersian: "پشت صحنه با دوستان",
    },
    {
      id: 3,
      src: "/kianmehr-portfolio/images/brand/hybrid.webp",
      alt: "Project 3",
      title: "",
      desc: "Training session",
      descPersian: "جلسات توسعه و فرایند",
    },
  ];

  const slides = images.length ? images : defaultImages;

  const changeSlide = (direction: Direction) => {
    if (isAnimating) return;
    setIsAnimating(true);
    const newIndex =
      direction === "next"
        ? (current + 1) % slides.length
        : (current - 1 + slides.length) % slides.length;
    setCurrent(newIndex);
    setTimeout(() => setIsAnimating(false), 600);
  };

  useEffect(() => {
    const interval = setInterval(() => changeSlide("next"), 5000);
    return () => clearInterval(interval);
  }, [current, isAnimating]);

  return (
    <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
      <div className="text-center mb-12">
        <h2
          className={`text-4xl md:text-5xl font-extrabold mb-3 ${
            isDark ? "text-white" : "text-gray-800"
          } ${pey}`}
        >
          {lang === "fa" ? "گالری تصاویر" : "Image Gallery"}
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-sky-800 to-cyan-900 mx-auto rounded-full" />
      </div>

      <div
        className={`relative rounded-3xl overflow-hidden shadow-2xl ${
          isDark ? "bg-gray-900/50" : "bg-white"
        }`}
      >
        <div className="relative aspect-video w-full overflow-hidden">
          <div
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              isAnimating ? "scale-110 opacity-0" : "scale-100 opacity-100"
            }`}
          >
            <img
              src={slides[current].src}
              alt={slides[current].alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          <div className="absolute bottom-3 left-6 right-6 text-white">
            <h3
              className={`text-2xl md:text-3xl font-bold mb-2 ${pey} ${
                isAnimating
                  ? "translate-y-4 opacity-0"
                  : "translate-y-0 opacity-100"
              } transition-all duration-500 delay-200`}
            >
              {slides[current].title}
            </h3>
            <p
              className={`text-sm md:text-base opacity-90 ${
                isAnimating
                  ? "translate-y-4 opacity-0"
                  : "translate-y-0 opacity-100"
              } transition-all duration-500 delay-300 ${
                lang === "fa" ? "font-peyda-light" : ""
              }`}
            >
              {lang === "en"
                ? slides[current].desc
                : slides[current].descPersian}
            </p>
          </div>
        </div>

        <button
          onClick={() => changeSlide("prev")}
          className={`absolute left-4 top-1/2 -translate-y-1/2 p-0.5 rounded-full ${
            isDark ? "bg-white/20" : "bg-gray-800"
          } backdrop-blur-sm hover:bg-white/30 transition-all duration-300 ${
            isAnimating ? "scale-90 opacity-50" : "scale-100 opacity-100"
          } group`}
          aria-label="Previous"
        >
          <svg
            className="w-5 h-5 text-white group-hover:scale-110 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={() => changeSlide("next")}
          className={`absolute right-4 top-1/2 -translate-y-1/2 p-0.5 rounded-full ${
            isDark ? "bg-white/20" : "bg-gray-800"
          } backdrop-blur-sm hover:bg-white/30 transition-all duration-300 ${
            isAnimating ? "scale-90 opacity-50" : "scale-100 opacity-100"
          } group`}
          aria-label="Next"
        >
          <svg
            className="w-5 h-5 text-white group-hover:scale-110 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <div className="flex justify-center gap-3 mt-6">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => !isAnimating && setCurrent(i)}
            className={`relative w-2 h-2 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-sky-100 scale-125"
                : isDark
                ? "bg-gray-600 hover:bg-gray-500"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          >
            {i === current && (
              <span className="absolute inset-0 bg-gray-100 rounded-full animate-ping opacity-75" />
            )}
          </button>
        ))}
      </div>

      <div className="max-w-xs mx-auto mt-4 h-1 bg-gray-200/50 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-sky-300 to-cyan-800 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${((current + 1) / slides.length) * 100}%` }}
        />
      </div>
    </section>
  );
};

/* ----------  Lazy Wrapper  ---------- */
interface ImageSliderProps {
  isDark: boolean;
  images?: Slide[];
}

const ImageSlider = memo<ImageSliderProps>(({ isDark, images }) => {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const el = document.getElementById("lazy-slider");
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setHasLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasLoaded]);

  if (!hasLoaded) {
    return (
      <section
        id="lazy-slider"
        className="max-w-5xl mx-auto px-6 py-16 md:py-24"
      >
        <div className="h-96 bg-gray-200 dark:bg-gray-800 rounded-2xl animate-pulse" />
      </section>
    );
  }

  return <ImageSliderCore isDark={isDark} images={images} />;
});

export default ImageSlider;
