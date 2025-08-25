// HeritageJourney.tsx
import { useState, useEffect } from "react";
import { Waves } from "lucide-react";

// Define a type for chapter
type Chapter = {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  image: string;
  content: string;
  skills: string[];
  influence: string;
};

const HeritageJourney = () => {
  const [activeChapter, setActiveChapter] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const chapters: Chapter[] = [
    {
      id: "swimming",
      title: "In Water, I Found Flow",
      subtitle: "Competitive Swimming & Life Philosophy",
      icon: Waves,
      color: "from-blue-500 to-cyan-400",
      image:
        "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&h=600&fit=crop",
      content: `
        Water taught me discipline before business did. ...
      `,
      skills: ["Discipline", "Systems Thinking", "Flow States", "Precision"],
      influence:
        "Translates to: Business process optimization and elegant problem-solving",
    },
    // ... rest of chapters
  ];

  return (
    <section
      id="heritage-journey"
      className="relative bg-gradient-to-b from-blue-50 via-white to-orange-50"
    >
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-600 to-orange-400 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      {/* ... all your existing JSX ... */}

      {/* Chapters */}
      <div id="chapters" className="relative">
        {chapters.map((chapter: Chapter) => (
          <div
            key={chapter.id}
            className="min-h-screen flex items-center py-24"
          >
            {/* ... content and images */}
          </div>
        ))}
      </div>

      {/* Floating Navigation */}
      <FloatingNav
        chapters={chapters}
        activeChapter={activeChapter}
        setActiveChapter={setActiveChapter}
      />
    </section>
  );
};

// Floating Navigation Component
type FloatingNavProps = {
  chapters: Chapter[];
  activeChapter: number;
  setActiveChapter: React.Dispatch<React.SetStateAction<number>>;
};

const FloatingNav = ({
  chapters,
  activeChapter,
  setActiveChapter,
}: FloatingNavProps) => {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
        <div className="space-y-3">
          {chapters.map((chapter: Chapter, index: number) => (
            <button
              key={chapter.id}
              onClick={() => {
                setActiveChapter(index);
                const chaptersEl = document.getElementById("chapters");
                if (chaptersEl) {
                  chaptersEl.children[index]?.scrollIntoView({
                    behavior: "smooth",
                  });
                }
              }}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                activeChapter === index
                  ? "bg-gradient-to-r from-blue-600 to-orange-400 text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <chapter.icon className="w-5 h-5" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export { HeritageJourney, FloatingNav };
