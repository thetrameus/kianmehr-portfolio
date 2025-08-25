import { CheckCircle } from "lucide-react";

const About = () => {
  const features = [
    "99.9% uptime guarantee",
    "Enterprise-grade security",
    "24/7 customer support",
    "GDPR & CCPA compliant",
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Built for
              <span className="text-transparent bg-gradient-to-r from-blue-600 to-orange-400 bg-clip-text">
                {" "}
                Ambitious Teams
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We understand that modern businesses need tools that are both
              powerful and approachable. That's why we've created a platform
              that combines enterprise functionality with consumer-grade
              simplicity.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-400" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">A</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Sarah Chen
                    </div>
                    <div className="text-sm text-gray-600">
                      Operations Director
                    </div>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic">
                  "BizFlow transformed how we manage our 200-person team. The
                  warm interface makes complex tasks feel approachable."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
