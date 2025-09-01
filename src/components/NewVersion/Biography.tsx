// BiographySection.tsx
// Icy-blue crystal cards, floating timeline, circular journey orb

import { useState } from "react";
import { Mail, MapPin } from "lucide-react";

const team = [
  {
    id: 1,
    name: "حمید لولائی",
    role: "مؤسس و مدیر ارشد",
    image: "/kianmehr-portfolio/Rasputin.jpg",
    bio: "برنامه‌نویسی را از ۱۲ سالگی آغاز کرد و اولین سرویس SaaS خود را در ۱۹ سالگی ساخت. حمید معتقد است مدیریت کسب‌وکار باید همچون یک توانایی ویژه احساس شود.",
    journey: [
      { year: 2018, text: "تأسیس BizFlow در یک خوابگاه دانشجویی" },
      { year: 2020, text: "کسب اولین ۱۰۰ مشتری" },
      { year: 2022, text: "دریافت سرمایه‌گذاری سری A" },
      { year: 2024, text: "بیش از ۵۰۰۰ تیم به ما اعتماد دارند" },
    ],
    location: "سان‌فرانسیسکو، کالیفرنیا",
    email: "alex@bizflow.com",
  },
  {
    id: 2,
    name: "افسانه بایگان",
    role: "مدیر طراحی",
    image: "/kianmehr-portfolio/zemn.jpg",
    journey: [
      { year: 2019, text: "به‌عنوان اولین طراح به تیم پیوست" },
      { year: 2021, text: "هدایت بازطراحی کامل برند" },
      { year: 2023, text: "ساخت سیستم طراحی اختصاصی" },
      { year: 2024, text: "مدیریت تیمی با ۱۲ طراح" },
    ],
    location: "بروکلین، نیویورک",
    email: "maya@bizflow.com",
  },
  {
    id: 3,
    name: "محسن رضایی",
    role: "مدیر ارشد فناوری (CTO)",
    image: "/kianmehr-portfolio/iphone16-2015.jpg",
    journey: [
      { year: 1897, text: "اولین مهندس تیم شد" },
      { year: 346, text: "زیرساخت اصلی رو از پایه ساخت" },
      { year: 1394, text: "سیستم رو به یک میلیون کاربر رسوند" },
      { year: 1402, text: "الان لیدر یه تیم ۳۰ نفره مهندسه" },
    ],
    location: "سیاتل، واشینگتن",
    email: "jordan@bizflow.com",
  },
];

export default function BiographySection() {
  const [active, setActive] = useState(0);
  const person = team[active];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-0 via-white to-cyan-10 py-24">
      {/* floating orbs */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-cyan-300/10 rounded-full blur-2xl -translate-z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-300/10 rounded-full blur-2xl -translate-z-10" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-sky-800">Meet the team</h2>
          <p className="text-sm text-sky-600 mt-1">
            Quiet architects behind the calm.
          </p>
        </div>

        {/* circular selector */}
        <div className="flex justify-center mb-10">
          <div className="flex gap-2 p-2 bg-white/40 backdrop-blur-sm border border-white/40 rounded-full">
            {team.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setActive(i)}
                className={`w-12 h-12 rounded-full text-xs font-medium transition-all duration-300 ${
                  active === i
                    ? "bg-sky-500 text-white shadow-lg"
                    : "bg-white/50 text-sky-700 hover:bg-sky-100"
                }`}
              >
                {t.name[0]}
              </button>
            ))}
          </div>
        </div>

        {/* crystal card */}
        <article
          className="relative grid md:grid-cols-5 gap-8 items-center p-6 bg-white/30 backdrop-blur-md border border-white/40 rounded-3xl shadow-2xl"
          style={{ perspective: "1000px" }}
        >
          {/* image */}
          <div className="md:col-span-2">
            <img
              src={person.image}
              alt={person.name}
              className={`w-full h-auto ${
                person.id === 3 ? "h-[402px]" : ""
              } rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105`}
            />
          </div>

          {/* text */}
          <div className="md:col-span-3 space-y-4">
            <header>
              <h3 className="text-2xl font-medium text-sky-800">
                {person.name}
              </h3>
              <p className="text-sm text-cyan-600">{person.role}</p>
              <p className="mt-2 text-sm text-gray-700 italic">{person.bio}</p>
            </header>

            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-cyan-500" />
                <span>{person.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-cyan-500" />
                <a href={`mailto:${person.email}`} className="hover:underline">
                  {person.email}
                </a>
              </div>
            </div>

            {/* floating timeline */}
            <div className="mt-4 space-y-2">
              {person.journey.map(({ year, text }) => (
                <div
                  key={year}
                  className="flex items-center gap-3 text-sm text-gray-700"
                >
                  <div className="w-8 h-8 flex items-center justify-center bg-sky-200/50 rounded-full text-xs font-bold text-sky-800">
                    {year}
                  </div>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
