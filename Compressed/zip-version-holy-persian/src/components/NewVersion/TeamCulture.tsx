const TeamCulture = () => {
  const cultureValues = [
    {
      title: "Warmth First",
      description:
        "We believe technology should feel like a warm handshake, not a cold transaction",
      icon: "🤝",
      color: "from-orange-400 to-pink-400",
    },
    {
      title: "Always Learning",
      description:
        "Every challenge is an opportunity to grow, every mistake a lesson in disguise",
      icon: "📚",
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "Human-Centered",
      description:
        "Behind every business metric is a human story worth celebrating",
      icon: "❤️",
      color: "from-green-400 to-blue-400",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Our
            <span className="text-transparent bg-gradient-to-r from-blue-600 to-orange-400 bg-clip-text">
              {" "}
              Culture
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The values that drive everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cultureValues.map((value, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform`}
                >
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamCulture;
