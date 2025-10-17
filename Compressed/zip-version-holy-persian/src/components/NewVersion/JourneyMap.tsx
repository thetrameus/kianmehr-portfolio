// JourneyMap.jsx - Your Story Come Alive
import React, { useState, useEffect, useRef } from "react";
import { MapPin, Clock, Heart, Target } from "lucide-react";

const JourneyMap = () => {
  const [activeChapter, setActiveChapter] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const journey = [
    {
      year: "2018",
      title: "First Stroke",
      description: "Competitive swimming taught discipline before business did",
      icon: "🏊‍♂️",
      color: "from-blue-400 to-cyan-300",
      position: { x: 10, y: 20 },
    },
    {
      year: "2020",
      title: "Teaching Clarity",
      description: "English classrooms became laboratories of understanding",
      icon: "📚",
      color: "from-orange-400 to-amber-300",
      position: { x: 35, y: 45 },
    },
    {
      year: "2022",
      title: "Architectural Vision",
      description: "Father's blueprints revealed structure in chaos",
      icon: "🏗️",
      color: "from-gray-600 to-gray-400",
      position: { x: 65, y: 30 },
    },
    {
      year: "2024",
      title: "Genetic Wisdom",
      description: "Mother's epigenetics unlocked sustainable transformation",
      icon: "🧬",
      color: "from-purple-500 to-pink-400",
      position: { x: 85, y: 60 },
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="hidden lg:block py-24 bg-gradient-to-b from-white to-blue-50/20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
            Your Journey
            <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              {" "}
              Visualized
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Mouse over the path to explore each chapter of your transformation
          </p>
        </div>

        {/* Interactive Map Container */}
        <div
          ref={containerRef}
          className="relative h-96 bg-gradient-to-br from-blue-100/50 to-orange-100/50 rounded-3xl overflow-hidden"
        >
          {/* Floating Path */}
          <svg className="absolute inset-0 w-full h-full">
            <path
              d="M 50 300 Q 200 100 400 200 T 700 250"
              stroke="url(#gradient)"
              strokeWidth="3"
              fill="none"
              className="animate-pulse"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
            </defs>
          </svg>

          {/* Interactive Points */}
          {journey.map((chapter, index) => (
            <div
              key={chapter.year}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300"
              style={{
                left: `${chapter.position.x}%`,
                top: `${chapter.position.y}%`,
                transform: `scale(${activeChapter === index ? 1.2 : 1})`,
              }}
              onMouseEnter={() => setActiveChapter(index)}
            >
              <div
                className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${chapter.color} flex items-center justify-center text-2xl shadow-lg hover:shadow-2xl transition-all duration-300`}
              >
                {chapter.icon}

                {/* Ripple Effect */}
                {activeChapter === index && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-orange-400/20 animate-ping"></div>
                )}
              </div>

              {/* Tooltip */}
              {activeChapter === index && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-white rounded-2xl p-4 shadow-xl min-w-max">
                  <h4 className="font-bold text-gray-900">{chapter.year}</h4>
                  <p className="text-sm text-gray-600">{chapter.title}</p>
                  <p className="text-xs text-gray-500 mt-1 max-w-xs">
                    {chapter.description}
                  </p>
                </div>
              )}
            </div>
          ))}

          {/* Mouse Follower */}
          <div
            className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-orange-400 pointer-events-none transition-transform duration-100"
            style={{
              left: `${mousePosition.x * 100}%`,
              top: `${mousePosition.y * 100}%`,
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default JourneyMap;
