// BiographySection.jsx - The Complete Story
import { useState } from "react";
import {
  Linkedin,
  Twitter,
  Mail,
  Award,
  Heart,
  MapPin,
  Calendar,
} from "lucide-react";

const Biography = () => {
  const [activePerson, setActivePerson] = useState(0);

  const teamMembers = [
    {
      name: "Alex Rivera",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "Started coding at 12, built first SaaS at 19. Alex believes business administration should feel like having a superpower - intuitive, warm, and incredibly effective.",
      journey: [
        { year: 2018, event: "Founded BizFlow in college dorm" },
        { year: 2020, event: "First 100 customers" },
        { year: 2022, event: "Series A funding" },
        { year: 2024, event: "5000+ teams trust BizFlow" },
      ],
      passions: ["Mentoring startups", "Ocean photography", "Sourdough baking"],
      location: "San Francisco, CA",
      funFact:
        "Has a collection of 200+ business books, all annotated in the margins",
      social: { linkedin: "#", twitter: "#", email: "alex@bizflow.com" },
    },
    {
      name: "Maya Patel",
      role: "Head of Design",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b332-3fc7?w=400&h=400&fit=crop",
      bio: "Maya transforms complex systems into delightful experiences. Her philosophy: 'Technology should feel like a warm conversation with a smart friend who genuinely wants to help you succeed.'",
      journey: [
        { year: 2019, event: "Joined as first designer" },
        { year: 2021, event: "Led complete rebrand" },
        { year: 2023, event: "Built design system from scratch" },
        { year: 2024, event: "Team of 12 incredible designers" },
      ],
      passions: ["Watercolor painting", "User research", "Teaching yoga"],
      location: "Brooklyn, NY",
      funFact:
        "Once designed an app interface using only colors from her grandmother's sari collection",
      social: { linkedin: "#", twitter: "#", email: "maya@bizflow.com" },
    },
    {
      name: "Jordan Kim",
      role: "CTO",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      bio: "Jordan builds systems that scale from 10 users to 10 million without breaking a sweat. His secret? Making the complex simple, and the simple powerful.",
      journey: [
        { year: 2020, event: "Joined as founding engineer" },
        { year: 2021, event: "Built core infrastructure" },
        { year: 2023, event: "Scaled to 1M+ users" },
        { year: 2024, event: "Leading 30+ engineers" },
      ],
      passions: ["Rock climbing", "Open source", "Coffee roasting"],
      location: "Seattle, WA",
      funFact:
        "Maintains a side project that helps 50,000+ developers learn system design",
      social: { linkedin: "#", twitter: "#", email: "jordan@bizflow.com" },
    },
    {
      name: "Sofia Chen",
      role: "Head of Customer Success",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      bio: "Sofia turns customers into raving fans. She believes the best technology is invisible - it just works so well you forget it's there.",
      journey: [
        { year: 2021, event: "Started as first support hire" },
        { year: 2022, event: "Built customer success playbook" },
        { year: 2023, event: "Achieved 98% satisfaction" },
        { year: 2024, event: "Team of 25 success managers" },
      ],
      passions: [
        "Community building",
        "Travel photography",
        "Mental health advocacy",
      ],
      location: "Austin, TX",
      funFact:
        "Has personally responded to over 10,000 customer messages with an average response time of 2 minutes",
      social: { linkedin: "#", twitter: "#", email: "sofia@bizflow.com" },
    },
  ];

  return (
    <section
      id="biography"
      className="py-24 bg-gradient-to-br from-blue-50 via-orange-50/30 to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Meet the
            <span className="text-transparent bg-gradient-to-r from-blue-600 to-orange-400 bg-clip-text">
              {" "}
              Dream Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The humans behind the magic, building the future of business
            administration together
          </p>
        </div>

        {/* Team Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/50 backdrop-blur-sm rounded-full p-2 shadow-lg">
            <div className="flex space-x-2">
              {teamMembers.map((member, index) => (
                <button
                  key={index}
                  onClick={() => setActivePerson(index)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activePerson === index
                      ? "bg-gradient-to-r from-blue-600 to-orange-400 text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {member.name.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Biography Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative group">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={teamMembers[activePerson].image}
                  alt={teamMembers[activePerson].name}
                  className="w-full h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                {/* Floating Name Card */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {teamMembers[activePerson].name}
                    </h3>
                    <p className="text-blue-600 font-medium">
                      {teamMembers[activePerson].role}
                    </p>
                    <div className="flex items-center mt-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-1" />
                      {teamMembers[activePerson].location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="absolute top-6 right-6 flex space-x-2">
                {Object.entries(teamMembers[activePerson].social).map(
                  ([platform, link]) => (
                    <a
                      key={platform}
                      href={link}
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
                    >
                      {platform === "linkedin" && (
                        <Linkedin className="w-5 h-5" />
                      )}
                      {platform === "twitter" && (
                        <Twitter className="w-5 h-5" />
                      )}
                      {platform === "email" && <Mail className="w-5 h-5" />}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            {/* Bio */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4 space-x-2">
                <Heart className="w-5 h-5 text-orange-400" />
                <span className="text-sm font-medium text-orange-400">
                  Personal Story
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "{teamMembers[activePerson].bio}"
              </p>
            </div>

            {/* Journey Timeline */}
            <div className="bg-gradient-to-br from-blue-50 to-orange-50/50 rounded-2xl p-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                Journey
              </h4>
              <div className="space-y-4">
                {teamMembers[activePerson].journey.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">
                        {step.year}
                      </span>
                    </div>
                    <div className="pt-2">
                      <p className="text-gray-700">{step.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Passions */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4 space-x-2">
                <Award className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-blue-600">
                  Passions & Fun Facts
                </span>
              </div>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">
                    What drives me:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {teamMembers[activePerson].passions.map(
                      (passion, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm"
                        >
                          {passion}
                        </span>
                      )
                    )}
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-gray-600 italic">
                    <span className="font-semibold">Fun fact:</span>{" "}
                    {teamMembers[activePerson].funFact}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white text-center">
            <div className="text-3xl font-bold">4</div>
            <div className="text-blue-100">Core Team Members</div>
          </div>
          <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl p-6 text-white text-center">
            <div className="text-3xl font-bold">5000+</div>
            <div className="text-orange-100">Teams Helped</div>
          </div>
          <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-6 text-white text-center">
            <div className="text-3xl font-bold">98%</div>
            <div className="text-gray-300">Success Rate</div>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-orange-400 rounded-2xl p-6 text-white text-center">
            <div className="text-3xl font-bold">24/7</div>
            <div className="text-gray-100">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

// const BiographyModal = ({ member, isOpen, onClose }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//       <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
//         <div className="relative">
//           <img
//             src={member.image}
//             alt={member.name}
//             className="w-full h-64 object-cover rounded-t-3xl"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
//           >
//             <span className="text-white text-2xl">×</span>
//           </button>

//           <div className="absolute bottom-6 left-6 right-6">
//             <h2 className="text-3xl font-bold text-white mb-2">
//               {member.name}
//             </h2>
//             <p className="text-white/80">{member.role}</p>
//           </div>
//         </div>

//         <div className="p-8 space-y-8">
//           {/* Extended Content */}
//           <div>
//             <h3 className="text-xl font-semibold mb-4">The Full Story</h3>
//             <p className="text-gray-700 leading-relaxed">{member.bio}</p>
//           </div>

//           {/* Additional sections would go here */}
//         </div>
//       </div>
//     </div>
//   );
// };

export default Biography;
