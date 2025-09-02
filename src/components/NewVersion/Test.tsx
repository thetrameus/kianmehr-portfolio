// KianmehrBiography.tsx
// Dark hero + crystal resume cards on a suave backdrop

import { useState } from "react";
import { ArrowLeft, Mail } from "lucide-react";

const sections = [
  {
    id: "story",
    title: "The Story",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&h=600", // suited portrait
    text: "Architect’s son. Geneticist’s child. Swimmer turned quiet systems-builder.",
    skills: ["Discipline", "Clarity", "Scale"],
    projects: ["Wonderland 2 M views", "Nexio MVP", "Level 3 Coach"],
    contact: "hello@kianmehr.com",
  },
  {
    id: "pool",
    title: "Water Discipline",
    image:
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=900&h=600",
    text: "15 years lanes → Level 3 Coach 2025. Gharaman, Foroumandi, 15 Khordad.",
    skills: ["Stroke Technique", "Private Coaching", "Endurance"],
    projects: ["Gharaman Academy", "Private sessions"],
    contact: "pool@kianmehr.com",
  },
  {
    id: "education",
    title: "Classrooms & Cameras",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&h=600",
    text: "Khayyam University, Business Management. TTC + FCE/CAE. Calm classrooms, loud pixels.",
    skills: ["Storytelling", "Curriculum Design", "Scale"],
    projects: ["Ariana Institute", "Corporate classes"],
    contact: "english@kianmehr.com",
  },
];

export default function KianmehrBiography() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="relative min-h-screen bg-gray-900 text-gray-100">
      {/* backdrop image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&h=900)",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-16">
        {!active ? (
          // minimal 3 buttons
          <div className="flex flex-col md:flex-row gap-6">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className="px-8 py-4 bg-white/10 backdrop-blur border border-white/20 rounded-xl text-white hover:bg-white/20 transition"
              >
                {s.title}
              </button>
            ))}
          </div>
        ) : (
          // full card
          <div className="w-full max-w-2xl p-10 bg-black/60 backdrop-blur-lg border border-white/10 rounded-2xl space-y-6 animate-fade">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-light text-white">
                {sections.find((s) => s.id === active)?.title}
              </h2>
              <button
                onClick={() => setActive(null)}
                className="p-2 text-white hover:bg-white/10 rounded"
              >
                <ArrowLeft size={18} />
              </button>
            </div>

            <img
              src={sections.find((s) => s.id === active)?.image}
              alt={sections.find((s) => s.id === active)?.title}
              className="w-full h-64 object-cover rounded-xl"
            />

            <p className="text-sm text-gray-300 leading-relaxed">
              {sections.find((s) => s.id === active)?.text}
            </p>

            <div>
              <h3 className="text-sm font-medium text-cyan-300 mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {sections
                  .find((s) => s.id === active)
                  ?.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-800 text-gray-200 text-xs rounded"
                    >
                      {skill}
                    </span>
                  ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-cyan-300 mb-2">Work</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                {sections
                  .find((s) => s.id === active)
                  ?.projects.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
              </ul>
            </div>

            <a
              href={`mailto:${sections.find((s) => s.id === active)?.contact}`}
              className="inline-flex items-center gap-2 text-sm text-cyan-300 hover:underline"
            >
              <Mail size={14} />{" "}
              {sections.find((s) => s.id === active)?.contact}
            </a>
          </div>
        )}
      </div>

      <style jsx>{`
        .animate-fade {
          animation: fade 0.4s ease-out;
        }
        @keyframes fade {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
