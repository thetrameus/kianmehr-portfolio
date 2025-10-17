// MicroJourney.jsx - Synchronized & Perfect
import React, { useState, useEffect } from "react";
import { Waves, BookOpen, Building2, Dna } from "lucide-react";

const MicroJourney = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const steps = [
    {
      year: "2018",
      title: "Swimming",
      icon: Waves,
      color: "text-blue-500",
      bg: "bg-blue-100",
    },
    {
      year: "2020",
      title: "Teaching",
      icon: BookOpen,
      color: "text-orange-500",
      bg: "bg-orange-100",
    },
    {
      year: "2022",
      title: "Architecture",
      icon: Building2,
      color: "text-gray-600",
      bg: "bg-gray-100",
    },
    {
      year: "2024",
      title: "Genetics",
      icon: Dna,
      color: "text-purple-500",
      bg: "bg-purple-100",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev + 0.5) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
          My Journey <span className="text-blue-600">Flow</span>
        </h2>

        {/* Micro Timeline */}
        <div className="relative">
          {/* Flowing Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 rounded-full">
            <div
              className="h-full bg-gradient-to-r from-blue-400 via-orange-400 to-purple-400 rounded-full transition-all duration-300"
              style={{ width: `${(activeStep + 1) * 25}%` }}
            />
          </div>

          {/* Connected Steps */}
          <div className="flex justify-between items-center relative">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Interactive Circle */}
                <button
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeStep === index
                      ? `${step.bg} ${step.color} shadow-lg scale-110`
                      : "bg-gray-200 text-gray-400 hover:scale-105"
                  }`}
                  onClick={() => setActiveStep(index)}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  <step.icon className="w-6 h-6" />
                </button>

                {/* Connected Labels */}
                <div
                  className={`mt-2 text-center transition-all duration-300 ${
                    activeStep === index ? "opacity-100" : "opacity-60"
                  }`}
                >
                  <div className="text-xs font-semibold text-gray-900">
                    {step.year}
                  </div>
                  <div className="text-xs text-gray-600">{step.title}</div>
                </div>

                {/* Tooltip */}
                {activeStep === index && (
                  <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-full">
                    {step.title}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mt-8 text-center">
          <div className="text-sm text-gray-600">
            {steps[activeStep].title}:{" "}
            {steps[activeStep].title === "Swimming" &&
              "Discipline through water"}
            {steps[activeStep].title === "Teaching" &&
              "Clarity through connection"}
            {steps[activeStep].title === "Architecture" &&
              "Structure through design"}
            {steps[activeStep].title === "Genetics" &&
              "Adaptation through evolution"}
          </div>
        </div>
      </div>
    </section>
  );
};

// Ultra-Minimal: Single Line Version
const NanoJourney = () => {
  const steps = [
    { icon: "🏊‍♂️", label: "Swimming → Discipline" },
    { icon: "📚", label: "Teaching → Clarity" },
    { icon: "🏗️", label: "Architecture → Structure" },
    { icon: "🧬", label: "Genetics → Adaptation" },
  ];

  return (
    <div className="flex flex-col md:flex-row items-start gap-4 px-12 py-5 md:items-center justify-center space-x-6 md:py-8">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm">
            {step.icon}
          </div>
          <span className="text-xs text-gray-600">{step.label}</span>
          {index < steps.length - 1 && <span className="text-gray-400">→</span>}
        </div>
      ))}
    </div>
  );
};

export { MicroJourney, NanoJourney };
