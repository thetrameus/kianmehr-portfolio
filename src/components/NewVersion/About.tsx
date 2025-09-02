// KianmehrAbout.tsx
// Icy-blue glass card with real data & subtle 3-D lift

import { CheckCircle, MapPin, Calendar, School } from "lucide-react";

const about = {
  title: "رزومه",
  summary:
    "من ابزارهای مدیریت کسب‌وکار می‌سازم که مثل یک مهارت ذاتی حس می‌شوند زاده‌ی نظم استخر، وضوح کلاس درس و تجربه‌ی کار در مقیاس محتوا.",
  guarantees: [
    "مربی شنا سطح ۳ با مدرک رسمی",
    "مدیریت کسب‌وکار @ دانشگاه خیام",
    "مدرک TTC زبان انگلیسی + FCE/CAE",
    "بیش از ۶ پروژه واقعی و فعال",
  ],
  quote: {
    text: "کیانمهر جریان‌های کاری پراکنده‌ی ما را به یک نفس تازه تبدیل کرد.",
    author: "مصطفی میرنجاد",
    role: "Mammoth Accelerator",
  },
};

export default function KianmehrAbout() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-200 to-gray-600 py-24">
      {/* floating orbs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-300/5 rounded-full blur-3xl -translate-z-10" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-300/5 rounded-full blur-3xl -translate-z-10" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* left */}
          <div className="space-y-5">
            <h2 className="text-3xl font-light text-white">{about.title}</h2>
            {/* <h4 className="text-stone-800">یه جریان باحال</h4> */}
            <p className="text-sm text-white leading-relaxed">
              {about.summary}
            </p>

            <ul className="space-y-3">
              {about.guarantees.map((g) => (
                <li key={g} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm text-white">{g}</span>
                </li>
              ))}
            </ul>

            {/* quick facts */}
            <div className="flex flex-col sm:flex-row gap-6 text-xs text-stone-50 mt-6">
              <div className="flex items-center gap-2">
                <Calendar size={14} className="" />
                <span>21 خرداد 1389</span>
              </div>
              <div className="flex items-center gap-2">
                <School size={14} className="" />
                <span>دانشجوی خیام نیشابوری و حافظ</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="" />
                <span>مشهدم</span>
              </div>
            </div>
          </div>

          {/* right — glass testimonial */}
          <aside className="p-6 bg-white/70 backdrop-blur-md border border-white/90 rounded-2xl shadow-xl">
            <blockquote className="text-sm text-black italic">
              “{about.quote.text}”
            </blockquote>
            <div className="mt-3 text-xs text-gray-900">
              <p className="font-medium">{about.quote.author}</p>
              <p>{about.quote.role}</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
