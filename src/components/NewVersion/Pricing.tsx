// Pricing.jsx - Feather-Light Pricing
import React, { useState } from "react";
import { Check, Star, Heart, Zap, Moon, Sun, Sparkles } from "lucide-react";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const plans = [
    {
      name: "Spark",
      price: { monthly: 29, yearly: 290 },
      description: "Perfect for individuals starting their journey",
      features: [
        "Basic business analysis",
        "Email support",
        "Community access",
        "Monthly insights report",
      ],
      color: "from-blue-400 to-cyan-300",
      icon: Sparkles,
      popular: false,
    },
    {
      name: "Flow",
      price: { monthly: 79, yearly: 790 },
      description: "Ideal for growing teams and entrepreneurs",
      features: [
        "Advanced analytics suite",
        "Priority support",
        "Weekly strategy calls",
        "Custom dashboards",
        "Swimming-inspired workflows",
      ],
      color: "from-purple-500 to-pink-400",
      icon: Heart,
      popular: true,
      badge: "Most Popular",
    },
    {
      name: "Transform",
      price: { monthly: 149, yearly: 1490 },
      description: "For businesses ready to revolutionize",
      features: [
        "Everything in Flow",
        "Unlimited consultations",
        "Epigenetic business coaching",
        "Architectural system design",
        "Teaching methodology integration",
        "White-glove onboarding",
      ],
      color: "from-orange-500 to-amber-400",
      icon: Zap,
      popular: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-orange-50/30 relative overflow-hidden"
    >
      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
            Choose Your
            <span className="text-transparent bg-gradient-to-r from-blue-600 to-orange-400 bg-clip-text">
              {" "}
              Flow
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transparent pricing that grows with your ambitions, like water
            finding its natural level
          </p>

          {/* Billing Toggle */}
          <div className="flex justify-center mt-8">
            <div className="bg-white/50 backdrop-blur-sm rounded-full p-1 shadow-lg">
              <div className="flex space-x-1">
                <button
                  onClick={() => setBillingCycle("monthly")}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    billingCycle === "monthly"
                      ? "bg-white shadow-md text-gray-900"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle("yearly")}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    billingCycle === "yearly"
                      ? "bg-white shadow-md text-gray-900"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Yearly <span className="text-green-600">(Save 20%)</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative group ${plan.popular ? "md:scale-105" : ""}`}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Card */}
              <div
                className={`relative rounded-3xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  hoveredPlan === index ? "transform -translate-y-2" : ""
                }`}
              >
                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                <div className="relative p-8 space-y-6">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center text-white`}
                  >
                    <plan.icon className="w-8 h-8" />
                  </div>

                  {/* Name & Price */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-4xl font-bold text-gray-900">
                        ${plan.price[billingCycle]}
                      </span>
                      <span className="text-gray-600">
                        /{billingCycle === "yearly" ? "year" : "month"}
                      </span>
                    </div>
                    <p className="text-gray-600 mt-2">{plan.description}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    className={`w-full py-4 rounded-2xl font-medium transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/25"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    Start with {plan.name}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">
            <Check className="w-4 h-4" />
            <span>30-day money-back guarantee • No questions asked</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// HireMe.jsx - Irresistible Call to Action
const HireMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    budget: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Project inquiry:", formData);
  };

  return (
    <section
      id="hire-me"
      className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-6xl font-bold text-white">
                Ready to
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                  {" "}
                  Create Magic
                </span>
                Together?
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Let's blend swimming discipline, teaching clarity, architectural
                precision, and epigenetic wisdom to transform your business into
                something extraordinary.
              </p>
            </div>

            {/* Value Props */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Sun className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    Swimming-Inspired Discipline
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Consistent, flowing progress toward your goals
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <Moon className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    Teaching-Level Clarity
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Complex concepts made beautifully simple
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    Architectural Precision
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Solid foundations that scale with your growth
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 text-gray-300">
                <span className="text-sm">📧 hello@yourname.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <span className="text-sm">🚀 2-week turnaround average</span>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Tell Me About Your Vision
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white/80 text-sm mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="What's your name?"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-white/80 text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-white/80 text-sm mb-2">
                    Project Description
                  </label>
                  <textarea
                    placeholder="Tell me about your dream project..."
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors resize-none"
                    value={formData.project}
                    onChange={(e) =>
                      setFormData({ ...formData, project: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-white/80 text-sm mb-2">
                    Budget Range
                  </label>
                  <select
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-white/40 transition-colors"
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                  >
                    <option value="" className="text-gray-900">
                      Select budget range
                    </option>
                    <option value="under-5k" className="text-gray-900">
                      Under $5,000
                    </option>
                    <option value="5k-15k" className="text-gray-900">
                      $5,000 - $15,000
                    </option>
                    <option value="15k-50k" className="text-gray-900">
                      $15,000 - $50,000
                    </option>
                    <option value="50k+" className="text-gray-900">
                      $50,000+
                    </option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-medium hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
                >
                  Let's Build Something Amazing
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-300 text-sm">
                  Response within 24 hours • Free consultation call
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Quick Contact Widget
const QuickContactWidget = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full p-4 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 cursor-pointer">
        <Heart className="w-6 h-6" />
      </div>
    </div>
  );
};

// Export both components
export { Pricing, HireMe, QuickContactWidget };
