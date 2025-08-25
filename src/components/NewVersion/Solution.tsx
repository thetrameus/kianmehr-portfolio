import React from "react";
import { Zap, Target, Globe } from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process workflows 10x faster with our optimized engine",
      metric: "10x",
      color: "text-blue-600",
    },
    {
      icon: Target,
      title: "Precision Analytics",
      description: "Make decisions with 99% accuracy using our AI insights",
      metric: "99%",
      color: "text-orange-400",
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Support teams across 50+ countries with local compliance",
      metric: "50+",
      color: "text-gray-700",
    },
  ];

  return (
    <section
      id="solutions"
      className="py-24 bg-gradient-to-b from-blue-50/30 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Solutions that
            <span className="text-orange-400"> Scale</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From startups to enterprises, our platform grows with your ambitions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {solutions.map((solution, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <solution.icon className={`w-10 h-10 ${solution.color}`} />
              </div>
              <div className={`text-4xl font-bold ${solution.color} mb-3`}>
                {solution.metric}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {solution.title}
              </h3>
              <p className="text-gray-600">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
