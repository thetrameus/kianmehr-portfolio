// ServicesSection.jsx
import React from "react";
import { BarChart3, Users, Shield, TrendingUp } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Real-time insights with warm, intuitive data visualization",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Users,
      title: "Team Management",
      description: "Collaborative tools designed for modern teams",
      color: "from-orange-400 to-orange-500",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security with warm user experience",
      color: "from-gray-700 to-gray-800",
    },
    {
      icon: TrendingUp,
      title: "Growth Strategy",
      description: "Data-driven insights for business expansion",
      color: "from-blue-600 to-orange-400",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-white to-blue-50/30"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Business Solutions that
            <span className="text-blue-600"> Actually Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Streamline your operations with tools designed for the modern
            business landscape
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
