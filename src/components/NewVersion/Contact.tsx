import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Ready to
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text">
              {" "}
              Transform
            </span>
            Your Business?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join thousands of teams already using BizFlow to streamline their
            operations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>hello@bizflow.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6">
              <h4 className="text-lg font-semibold mb-3">
                Start your free trial
              </h4>
              <p className="text-gray-300 mb-4">
                No credit card required • 14-day free trial
              </p>
              <button className="w-full bg-gradient-to-r from-blue-600 to-orange-400 text-white py-3 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                Start Free Trial
              </button>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-orange-400 text-white py-3 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
