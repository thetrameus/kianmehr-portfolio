// BrandShowcaseSection.jsx - Fixed Version
import { useState, useEffect } from "react";
import { Star, Sparkles, Gem } from "lucide-react";

const BrandShowcaseSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0); // Fixed: Added scrollProgress state

  // Fixed: Moved brands array inside component scope
  const brands = [
    {
      name: "TechFlow Solutions",
      logo: "TF",
      color: "from-blue-500 to-cyan-400",
      glowColor: "shadow-blue-500/50",
      category: "Technology",
      testimonial:
        "Transformed our business operations with elegant design thinking",
      project: "Complete brand redesign & system optimization",
      year: "2024",
      impact: "300% increase in user engagement",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
    },
    {
      name: "OceanWave Athletics",
      logo: "OW",
      color: "from-teal-500 to-blue-400",
      glowColor: "shadow-teal-500/50",
      category: "Sports & Wellness",
      testimonial:
        "Brought competitive swimming philosophy to business strategy",
      project: "Brand identity & digital ecosystem",
      year: "2023",
      impact: "500% growth in membership",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    },
    {
      name: "LinguaBridge Academy",
      logo: "LB",
      color: "from-orange-500 to-amber-400",
      glowColor: "shadow-orange-500/50",
      category: "Education",
      testimonial: "Made complex concepts beautifully simple",
      project: "Educational platform & curriculum design",
      year: "2023",
      impact: "10,000+ students empowered",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop",
    },
    {
      name: "ArchVision Studios",
      logo: "AV",
      color: "from-gray-600 to-gray-400",
      glowColor: "shadow-gray-500/50",
      category: "Architecture",
      testimonial: "Applied architectural precision to digital spaces",
      project: "3D visualization platform & branding",
      year: "2024",
      impact: "Revolutionary client presentation experience",
      image:
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop",
    },
    {
      name: "GeneTech Innovations",
      logo: "GT",
      color: "from-purple-600 to-pink-500",
      glowColor: "shadow-purple-500/50",
      category: "Biotechnology",
      testimonial: "Brought epigenetic adaptability to business transformation",
      project: "Data visualization & brand strategy",
      year: "2024",
      impact: "Breakthrough in client understanding",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d3a3c56?w=400&h=300&fit=crop",
    },
    {
      name: "FlowState Consulting",
      logo: "FS",
      color: "from-emerald-500 to-teal-400",
      glowColor: "shadow-emerald-500/50",
      category: "Business Consulting",
      testimonial: "Integrated all experiences into transformative consulting",
      project: "Complete business transformation",
      year: "2024",
      impact: "Average 400% ROI for clients",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    },
  ];

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

  // Rest of your component remains the same...

  // 3D Card Component
  const BrandCard = ({ brand, index, isActive, isHovered }) => {
    const rotation = isActive ? 0 : isHovered ? 5 : -10;
    const scale = isActive ? 1 : isHovered ? 1.05 : 0.9;
    const zIndex = isActive ? 10 : isHovered ? 5 : 1;

    return (
      <div
        className="relative group"
        style={{
          transform: `perspective(1000px) rotateY(${rotation}deg) scale(${scale})`,
          zIndex,
          transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        onMouseEnter={() => setHoveredCard(index)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <div
          className={`relative w-80 h-96 rounded-3xl overflow-hidden shadow-2xl ${brand.glowColor} transition-all duration-500`}
        >
          {/* Background Gradient */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-90`}
          ></div>

          {/* Rest of BrandCard component */}
          <div className="relative z-10 h-full flex flex-col justify-between p-6">
            {/* Logo */}
            <div className="flex justify-between items-start">
              <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                {brand.logo}
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  {brand.name}
                </h3>
                <p className="text-white/80 text-sm">{brand.category}</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-white/70 text-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>{brand.impact}</span>
                </div>
                <div className="text-white/60 text-xs">{brand.project}</div>
                <div className="text-white/60 text-xs">{brand.year}</div>
              </div>

              <blockquote className="text-white/90 text-sm italic">
                "{brand.testimonial}"
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Carousel Controls
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % brands.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + brands.length) % brands.length);
  };

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(nextSlide, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, activeIndex]);

  return (
    <section id="brand-showcase" className="relative py-24 overflow-hidden">
      {/* Background with fixed scrollProgress usage */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, #3b82f6 1px, transparent 1px),
              linear-gradient(to bottom, #3b82f6 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            transform: `translateX(${scrollProgress * 0.2}px)`, // Fixed: Using scrollProgress
          }}
        />
      </div>

      {/* Rest of the component */}
      <div className="text-center space-y-4 mb-16 relative z-10">
        <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
          Brands I've
          <span className="text-transparent bg-gradient-to-r from-blue-600 to-orange-400 bg-clip-text">
            {" "}
            Transformed
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          From startups to enterprises, each brand became a masterpiece of
          strategic design
        </p>
      </div>

      {/* Simplified Grid Layout (as fallback) */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <div key={brand.name} className="relative group">
              <div
                className={`relative rounded-3xl bg-gradient-to-br ${brand.color} p-6 transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2`}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-3xl blur opacity-30 group-hover:opacity-75 transition-opacity"></div>

                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${brand.color} flex items-center justify-center text-2xl font-bold text-white`}
                    >
                      {brand.logo}
                    </div>
                    <Gem className="w-6 h-6 text-gray-400" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {brand.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{brand.category}</p>

                  <div className="space-y-2">
                    <div className="text-gray-700 text-sm font-medium">
                      {brand.impact}
                    </div>
                    <div className="text-gray-500 text-xs">
                      {brand.project} • {brand.year}
                    </div>
                  </div>

                  <blockquote className="text-gray-600 text-sm italic mt-4 pt-4 border-t border-gray-200">
                    "{brand.testimonial}"
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mt-20">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-400 bg-clip-text text-transparent">
              6+
            </div>
            <div className="text-gray-600">Brands Transformed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-400 bg-clip-text text-transparent">
              400%
            </div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-400 bg-clip-text text-transparent">
              50K+
            </div>
            <div className="text-gray-600">Users Impacted</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-400 bg-clip-text text-transparent">
              98%
            </div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandShowcaseSection;
