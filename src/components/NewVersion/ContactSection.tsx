// ContactSection.tsx
// Balanced, RTL-friendly layout with equal vertical rhythm

import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-teal-50 py-24">
      {/* background orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-300/5 rounded-full blur-3xl -translate-z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-300/5 rounded-full blur-3xl -translate-z-10" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-center gap-10 lg:gap-16">
          {/* RTL contact rings (equal spacing) */}
          <div
            className="flex flex-col space-y-6 w-full lg:w-1/3"
            style={{ direction: "rtl" }}
          >
            {[
              {
                icon: Mail,
                text: "hello@kianmehr.com",
                href: "mailto:hello@kianmehr.com",
              },
              {
                icon: Phone,
                text: "+7 7438-0144-89",
                href: "tel:+77438014489",
              },
              { icon: MapPin, text: "San Francisco, CA" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/40 backdrop-blur-sm border border-white/50 hover:bg-white/60 transition-all duration-300"
              >
                <span
                  className="flex-1 text-sm text-sky-800"
                  style={{ direction: "ltr" }}
                >
                  {item.text}
                </span>
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-sky-600 rounded-full text-white shadow-md">
                  <item.icon size={16} />
                </div>
              </a>
            ))}
          </div>

          {/* glass form (equal vertical space) */}
          <form
            onSubmit={handleSubmit}
            className="w-full lg:w-2/3 max-w-lg p-8 bg-white/40 backdrop-blur-md border border-white/50 rounded-3xl shadow-xl space-y-5"
          >
            <input
              type="text"
              placeholder="اسم"
              required
              className="w-full px-4 py-2 bg-white/60 border border-white/60 rounded-lg text-sm focus:ring-2 focus:ring-sky-400 outline-none"
            />
            <input
              type="email"
              placeholder="ایمیل یا تلفن همراه"
              required
              className="w-full px-4 py-2 bg-white/60 border border-white/60 rounded-lg text-sm focus:ring-2 focus:ring-sky-400 outline-none"
            />
            <textarea
              rows={3}
              placeholder="پیامتون"
              required
              className="w-full px-4 py-2 bg-white/60 border border-white/60 rounded-lg text-sm resize-none focus:ring-2 focus:ring-sky-400 outline-none"
            />
            <button
              type="submit"
              className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm transition-all ${
                sent
                  ? "bg-sky-600 text-white"
                  : "bg-sky-600/80 text-white hover:bg-sky-700 hover:shadow-lg"
              }`}
            >
              {sent ? "ارسال شد ✓" : "ثبت"}
              {!sent && <ArrowRight size={14} />}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
