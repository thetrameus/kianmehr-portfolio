/* eslint-disable @typescript-eslint/no-explicit-any */
// Pricing.jsx  —  monochrome, whisper-soft, still alive
import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Spark",
    price: { monthly: 29, yearly: 290 },
    lead: "طرح اولیه",
    features: ["آنالیز پایه", "پشتیبانی ایمیلی", "انجمن کاربران"],
  },
  {
    name: "Flow",
    price: { monthly: 79, yearly: 790 },
    lead: "حفظ پیشرفت",
    features: ["آنالیز کامل", "پشتیبانی اولویت‌دار", "نمایش‌های سفارشی"],
    badge: "پرطرفدارترین",
  },
  {
    name: "Transform",
    price: { monthly: 149, yearly: 1490 },
    lead: "پیشرفته تر از قبلی",
    features: ["همه امکانات", "راه‌اندازی ویژه", "بررسی فصلی"],
  },
];

const Pricing = () => {
  const [billing, setBilling] = useState("monthly");

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      {/* toggle */}
      <div className="flex justify-center mb-12">
        <button
          onClick={() => setBilling("monthly")}
          className={`px-4 py-1.5 text-sm rounded-r-full transition ${
            billing === "monthly"
              ? "bg-slate-800 text-white"
              : "bg-slate-200 text-slate-600"
          }`}
        >
          ماهانه
        </button>
        <button
          onClick={() => setBilling("yearly")}
          className={`px-4 py-1.5 text-sm rounded-l-full transition ${
            billing === "yearly"
              ? "bg-slate-800 text-white"
              : "bg-slate-200 text-slate-600"
          }`}
        >
          سالانه
        </button>
      </div>

      {/* cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((p: any) => (
          <div
            key={p.name}
            className="group relative border border-slate-200 rounded-2xl bg-white/50 backdrop-blur p-6 transition hover:shadow-lg hover:-translate-y-1"
          >
            {p.badge && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs bg-slate-800 text-white px-3 py-1 rounded-full">
                {p.badge}
              </span>
            )}
            <h3 className="text-lg font-medium text-slate-900">{p.name}</h3>
            <p className="text-sm text-slate-500 mb-4">{p.lead}</p>

            <div className="flex items-baseline">
              <span className="text-3xl font-medium text-slate-900">
                ${p.price[billing]}
              </span>
              <span className="ml-1 text-sm text-slate-500">
                /{billing === "monthly" ? "ماه" : "سال"}
              </span>
            </div>

            <ul className="mt-4 space-y-1.5 text-sm text-slate-600">
              {p.features.map((f: any) => (
                <li key={f} className="flex items-center gap-2">
                  <Check size={14} className="text-slate-400" />
                  {f}
                </li>
              ))}
            </ul>

            <button className="w-full mt-6 flex items-center justify-center gap-2 py-2 text-sm font-medium text-slate-900 border border-slate-300 rounded-lg hover:bg-slate-800 hover:text-white transition">
              انتخاب {p.name} <ArrowRight size={14} />
            </button>
          </div>
        ))}
      </div>

      <p className="text-center mt-8 text-xs text-slate-500">
        تا 30 روز هم میشه کنسل کنین ، من کمکتون می کنم
      </p>
    </section>
  );
};

export default Pricing;
