// ServicesSection.tsx
// سرویس‌های پویا، ساخته‌شده از مسیر کیانمهر — همچنان آرام و آبی-یخی

import { useState, useEffect } from "react";
import {
  BarChart3,
  ClipboardList,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

// سرویس‌های مرتبط (نه کاملاً مستقیم)
const baseServices = [
  {
    icon: BarChart3,
    title: "داشبورد تحلیل",
    lead: "بینش‌های لحظه‌ای که در یک نگاه قابل درک‌اند.",
  },
  {
    icon: ClipboardList,
    title: "مدیریت تیم",
    lead: "ابزاری که اجازه می‌دهد افراد روی کار تمرکز کنند، نه روی روندها.",
  },
  {
    icon: ShieldCheck,
    title: "امنیت و انطباق",
    lead: "در حد سازمانی، بدون دردسرهای اضافی.",
  },
  {
    icon: TrendingUp,
    title: "استراتژی رشد",
    lead: "گام‌های بعدی روشن، پشتیبانی‌شده با داده‌های شفاف.",
  },
];

// تغییر ظریف برای تازه‌ماندن لیست
const randomizeLead = (lead: string) => {
  const flavors = ["آرام", "بی‌صدا", "شفاف", "روان", "پایدار", "ملایم"];
  return lead.replace(
    "—",
    `— ${flavors[Math.floor(Math.random() * flavors.length)]} `
  );
};

export default function ServicesSection() {
  const [leads, setLeads] = useState(baseServices.map((s) => s.lead));

  useEffect(() => {
    const interval = setInterval(() => {
      setLeads((prev) => prev.map(randomizeLead));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br py-20">
      {/* دایره‌های شناور */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-cyan-300/5 rounded-full blur-3xl -translate-z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-300/5 rounded-full blur-3xl -translate-z-10" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <header className="text-center mb-12">
          <h2 className="text-3xl font-light text-sky-800">
            آنچه میخوام ارائه می‌دهم
          </h2>
          <p className="text-sm text-sky-600 mt-1">
            چهار تا سرویس برآمده از تجربه، تلاش و طراحی.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {baseServices.map(({ icon: Icon, title }, i) => (
            <div
              key={title}
              className="group p-6 bg-white/40 backdrop-blur-sm border border-white/50 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <Icon className="w-7 h-7 text-cyan-600 mb-3 transition-transform group-hover:scale-110" />
              <h3 className="text-base font-medium text-slate-900">{title}</h3>
              <p className="text-xs text-gray-700 mt-2 transition-opacity">
                {leads[i]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
