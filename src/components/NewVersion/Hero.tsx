// HeroSection.jsx - Updated Colors
import React from "react";
import { ArrowRight, Play, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-orange-50/30 to-white">
      {/* Background Elements - Warm Blue + Orange */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      {/* Grid Pattern - Subtle Gray */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge - Warm Blue with Orange Accent */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium animate-fade-in">
              <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse"></span>
              Transforming Business Administration
            </div>

            {/* Main Heading - Blue to Orange Gradient */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
              Streamline Your
              <span className="bg-gradient-to-r from-blue-600 to-orange-400 bg-clip-text text-transparent">
                {" "}
                Business
              </span>
              <br />
              Operations
            </h1>

            {/* Description - Warm Gray */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Modern business administration solutions that combine efficiency
              with warmth. Experience the future of streamlined operations
              designed for ambitious teams.
            </p>

            {/* Stats */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-orange-400 fill-current"
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">
                  4.9/5 from 500+ teams
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-blue-600 to-orange-400 text-white px-8 py-4 rounded-full font-medium hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="group border border-gray-300 text-gray-700 px-8 py-4 rounded-full font-medium hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center">
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="relative">
            {/* Dashboard Preview - Clean White with Warm Accents */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="bg-gradient-to-br from-gray-50 to-blue-50/20 rounded-xl p-4">
                {/* Mock Dashboard */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="h-4 bg-blue-600 rounded w-24"></div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                      <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                      <div className="h-2 bg-gray-300 rounded w-16 mb-2"></div>
                      <div className="h-6 bg-blue-600 rounded w-20"></div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                      <div className="h-2 bg-gray-300 rounded w-16 mb-2"></div>
                      <div className="h-6 bg-orange-400 rounded w-20"></div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                      <div className="h-2 bg-gray-300 rounded w-16 mb-2"></div>
                      <div className="h-6 bg-gray-700 rounded w-20"></div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                    <div className="h-2 bg-gray-300 rounded w-32 mb-3"></div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-100 rounded w-full"></div>
                      <div className="h-3 bg-gray-100 rounded w-4/5"></div>
                      <div className="h-3 bg-gray-100 rounded w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards - Warm Blue & Orange */}
            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 animate-float border border-orange-100">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">+24%</div>
                  <div className="text-xs text-gray-500">Efficiency</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 animate-float animation-delay-2000 border border-blue-100">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">98%</div>
                  <div className="text-xs text-gray-500">Accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Warm Gray */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

// Color Palette Reference:
/*
Primary Warm Blues:
- bg-blue-600 (#2563eb) - Primary blue
- text-blue-700 (#1d4ed8) - Dark blue
- bg-blue-100 (#dbeafe) - Light blue
- bg-blue-50 (#eff6ff) - Ultra light blue

Warm Accents:
- bg-orange-400 (#fb923c) - Warm orange
- text-orange-400 - Orange text
- bg-orange-100 (#fed7aa) - Light orange
- bg-orange-50 (#fff7ed) - Ultra light orange

Neutrals:
- text-gray-900 (#111827) - Dark gray/black
- text-gray-700 (#374151) - Medium gray
- text-gray-600 (#4b5563) - Warm gray
- border-gray-100 (#f3f4f6) - Light gray border
- bg-gray-50 (#f9fafb) - Lightest gray
- bg-gray-100 (#f3f4f6) - Light gray
*/

export default HeroSection;
