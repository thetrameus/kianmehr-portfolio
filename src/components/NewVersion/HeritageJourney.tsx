// HeritageJourney.jsx - Your Complete Story
import React, { useState, useEffect } from "react";
import {
  Waves,
  BookOpen,
  Building2,
  Dna,
  ChevronDown,
  Star,
  Heart,
  Target,
} from "lucide-react";

const HeritageJourney = () => {
  const [activeChapter, setActiveChapter] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

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

  const chapters = [
    {
      id: "swimming",
      title: "In Water, I Found Flow",
      subtitle: "Competitive Swimming & Life Philosophy",
      icon: Waves,
      color: "from-blue-500 to-cyan-400",
      image:
        "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&h=600&fit=crop",
      content: `
        Water taught me discipline before business did. Every morning at 5:30 AM, 
        the pool became my meditation chamber. The rhythm of breathing, the precision 
        of movement, the patience of improvement — these became the foundation of 
        how I approach complex business challenges.

        Swimming 10,000 meters daily shaped my understanding of systems thinking. 
        Like water finding its path around obstacles, I learned to flow around 
        business constraints while maintaining forward momentum. The lane ropes 
        became my first experience with structured boundaries, teaching me that 
        creativity thrives within elegant constraints.
      `,
      skills: ["Discipline", "Systems Thinking", "Flow States", "Precision"],
      influence:
        "Translates to: Business process optimization and elegant problem-solving",
    },
    {
      id: "teaching",
      title: "Words That Build Bridges",
      subtitle: "English Teaching & Communication Mastery",
      icon: BookOpen,
      color: "from-orange-500 to-amber-400",
      image:
        "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&h=600&fit=crop",
      content: `
        Teaching English revealed that language is architecture — each word a 
        carefully placed beam, each sentence a supporting structure. My students 
        became my first clients, and I learned that clarity is the ultimate luxury.

        Watching non-native speakers find their voice taught me that business 
        communication isn't about complexity; it's about creating pathways for 
        understanding. The way I break down complex business concepts today 
        mirrors how I taught verb tenses — with patience, visual metaphors, 
        and incremental mastery.
      `,
      skills: [
        "Clarity",
        "Empathy",
        "Simplification",
        "Cross-cultural Communication",
      ],
      influence:
        "Translates to: User experience design and clear business communication",
    },
    {
      id: "father",
      title: "Lines That Shape Space",
      subtitle: "Architectural Heritage from My Father",
      icon: Building2,
      color: "from-gray-700 to-gray-600",
      image:
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
      content: `
        My father's blueprints taught me that every line serves a purpose. Watching 
        him work, I saw how empty space becomes possibility, how form follows 
        function, and how beauty emerges from mathematical precision.

        Architecture runs deeper than buildings — it's a philosophy of creating 
        structures that serve human needs. This inheritance shaped how I design 
        business systems: with the same attention to human flow, natural light, 
        and sustainable foundations that my father brings to physical spaces.
      `,
      skills: [
        "Structural Thinking",
        "Design Principles",
        "User-Centered Design",
        "Sustainability",
      ],
      influence:
        "Translates to: System architecture and scalable business design",
    },
    {
      id: "mother",
      title: "Code Written in Cells",
      subtitle: "Epigenetic Wisdom from My Mother",
      icon: Dna,
      color: "from-purple-600 to-pink-500",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      content: `
        My mother's work in epigenetics revealed that we're all living libraries, 
        carrying wisdom in our cells while continuously rewriting our story. She 
        showed me that change isn't just possible — it's the natural state of 
        being.

        This understanding transformed how I approach business transformation. 
        Like genes expressing differently based on environment, businesses can 
        unlock dormant potential through the right conditions. My mother's 
        research taught me that sustainable change happens at the molecular 
        level — small, consistent signals that create lasting transformation.
      `,
      skills: [
        "Adaptability",
        "Continuous Learning",
        "Micro-Changes",
        "Environmental Design",
      ],
      influence:
        "Translates to: Business transformation and sustainable change management",
    },
  ];

  const interconnectedInsights = [
    {
      title: "The Synthesis",
      description:
        "How swimming discipline, teaching clarity, architectural precision, and epigenetic wisdom create a unique approach to business administration",
      connections: [
        {
          from: "swimming",
          to: "business",
          text: "Flow states → System optimization",
        },
        {
          from: "teaching",
          to: "communication",
          text: "Clarity → User experience",
        },
        {
          from: "architecture",
          to: "structure",
          text: "Design principles → Scalable systems",
        },
        {
          from: "epigenetics",
          to: "transformation",
          text: "Adaptability → Sustainable change",
        },
      ],
    },
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
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="text-center space-y-6 relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900">
            My Story Flows Like
            <span className="text-transparent bg-gradient-to-r from-blue-600 to-orange-400 bg-clip-text">
              {" "}
              Water
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
            From Olympic pools to English classrooms, from architectural
            drawings to genetic codes — every experience has shaped how I help
            businesses grow with grace and purpose.
          </p>
          <button
            onClick={() =>
              document
                .getElementById("chapters")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="mt-8 inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-orange-400 text-white rounded-full font-medium hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
          >
            Begin the Journey
            <ChevronDown className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Chapters */}
      <div id="chapters" className="relative">
        {chapters.map((chapter, index) => (
          <div
            key={chapter.id}
            className="min-h-screen flex items-center py-24"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div
                  className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${chapter.color} flex items-center justify-center text-white`}
                    >
                      <chapter.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">
                        Chapter {index + 1}
                      </h3>
                      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                        {chapter.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 italic">
                    {chapter.subtitle}
                  </p>

                  <div className="prose prose-lg text-gray-700 leading-relaxed">
                    {chapter.content.split("\n\n").map((paragraph, pIndex) => (
                      <p key={pIndex} className="mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Core Skills Developed
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {chapter.skills.map((skill, sIndex) => (
                          <span
                            key={sIndex}
                            className="px-3 py-1 bg-gradient-to-r from-blue-100 to-orange-100 text-gray-700 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-4">
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">Translates to:</span>{" "}
                        {chapter.influence.split(":")[1]}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div
                  className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-orange-400 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity blur-xl"></div>
                    <img
                      src={chapter.image}
                      alt={chapter.title}
                      className="relative rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Interconnection Section */}
        <div className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">
              Where All Stories
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text">
                {" "}
                Converge
              </span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              <div className="space-y-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center">
                  <Waves className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold">Fluid Systems</h3>
                <p className="text-gray-300">Like water finding its path</p>
              </div>

              <div className="space-y-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-orange-400 to-amber-400 flex items-center justify-center">
                  <BookOpen className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold">Clear Communication</h3>
                <p className="text-gray-300">
                  Teaching that transcends barriers
                </p>
              </div>

              <div className="space-y-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-gray-400 to-gray-300 flex items-center justify-center">
                  <Building2 className="w-10 h-10 text-gray-900" />
                </div>
                <h3 className="text-xl font-semibold">Solid Foundations</h3>
                <p className="text-gray-300">
                  Architecture of lasting solutions
                </p>
              </div>

              <div className="space-y-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
                  <Dna className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold">Adaptive Evolution</h3>
                <p className="text-gray-300">
                  Change that's encoded for growth
                </p>
              </div>
            </div>

            <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold mb-6">The Synthesis</h3>
              <p className="text-lg leading-relaxed">
                Every stroke in the pool taught me discipline. Every student
                taught me patience. Every blueprint taught me structure. Every
                genetic sequence taught me adaptation. Together, they create a
                unique approach to business administration:
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text font-semibold">
                  {" "}
                  fluid yet structured, clear yet sophisticated, adaptive yet
                  enduring.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-24 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8 px-6">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Ready to Dive Into
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text">
              {" "}
              Your Story?
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Let's build something beautiful together, using the wisdom of water,
            the clarity of language, the precision of architecture, and the
            adaptability of life itself.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-orange-400 rounded-full font-medium hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300">
            Begin Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

// Floating Navigation Component
const FloatingNav = ({ chapters, activeChapter, setActiveChapter }) => {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
        <div className="space-y-3">
          {chapters.map((chapter, index) => (
            <button
              key={chapter.id}
              onClick={() => {
                setActiveChapter(index);
                document
                  .getElementById("chapters")
                  .children[index * 2].scrollIntoView({ behavior: "smooth" });
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

// Export the complete section
export { HeritageJourney, FloatingNav };
