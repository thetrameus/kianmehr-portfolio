// JourneyRoadmap.jsx - Minimal & Perfectly Linked
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const JourneyRoadmap = () => {
  const [activeStep, setActiveStep] = useState(0);

  const journey = [
    {
      year: "2018",
      title: "Swimming Discipline",
      description: "10,000 hours in pools → Systems thinking",
      icon: "🏊‍♂️",
      color: "bg-blue-500",
    },
    {
      year: "2020",
      title: "Teaching Clarity",
      description: "English classrooms → Human communication",
      icon: "📚",
      color: "bg-orange-500",
    },
    {
      year: "2022",
      title: "Architectural Precision",
      description: "Blueprint mindset → Scalable design",
      icon: "🏗️",
      color: "bg-gray-600",
    },
    {
      year: "2024",
      title: "Epigenetic Wisdom",
      description: "Genetic adaptation → Business transformation",
      icon: "🧬",
      color: "bg-purple-500",
    },
  ];

  return (
    <section
      id="journey"
      className="py-16 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">My Journey</h2>
          <p className="text-gray-600">
            How every experience shaped my approach to business
          </p>
        </div>

        {/* Clean Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-orange-400 to-purple-400"></div>

          {/* Timeline Items */}
          <div className="space-y-8">
            {journey.map((step, index) => (
              <div key={index} className="relative flex items-start">
                {/* Dot */}
                <div
                  className="absolute left-6 w-4 h-4 rounded-full bg-white border-4 border-current mt-1.5"
                  style={{ borderColor: step.color.replace("bg-", "") }}
                ></div>

                {/* Content */}
                <div className="ml-16">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-2xl">{step.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {step.title}
                      </h3>
                      <span className="text-sm text-gray-500">{step.year}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-700">
            <span>All experiences converged into</span>
            <span className="font-semibold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              unique business transformation approach
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Alternative: Floating Cards Version (Even More Minimal)
const JourneyCards = () => {
  const journey = [
    {
      title: "Swimming → Systems",
      description: "Discipline from 10K hours in water",
      icon: "🏊‍♂️",
      color: "from-blue-400 to-blue-500",
    },
    {
      title: "Teaching → Clarity",
      description: "Human connection from classrooms",
      icon: "📚",
      color: "from-orange-400 to-orange-500",
    },
    {
      title: "Architecture → Structure",
      description: "Precision from blueprints",
      icon: "🏗️",
      color: "from-gray-400 to-gray-500",
    },
    {
      title: "Genetics → Adaptation",
      description: "Evolution from molecular wisdom",
      icon: "🧬",
      color: "from-purple-400 to-purple-500",
    },
  ];

  return (
    <section id="journey" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          From Experience to <span className="text-blue-600">Excellence</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {journey.map((card, index) => (
            <div key={index} className="group">
              <div
                className={`p-6 rounded-2xl bg-gradient-to-br ${card.color} text-white shadow-sm hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{card.icon}</span>
                  <div>
                    <h3 className="font-semibold">{card.title}</h3>
                    <p className="text-sm opacity-90">{card.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { JourneyRoadmap, JourneyCards };
