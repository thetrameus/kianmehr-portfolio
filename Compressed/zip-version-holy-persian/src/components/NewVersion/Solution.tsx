// SolutionsSection.tsx
// Subtle, concise, still breathing.

import { Zap, Target, Globe } from "lucide-react";

const solutions = [
  { icon: Zap, title: "جریان‌کار سریع‌تر", lead: "۱۰ برابر سرعت، بدون حاشیه." },
  {
    icon: Target,
    title: "تصمیم‌های شفاف",
    lead: "بینش‌های هوش مصنوعی که واقعاً قابل اعتمادند.",
  },
  {
    icon: Globe,
    title: "دسترسی جهانی",
    lead: "انطباق محلی، در بیش از ۵۰ کشور.",
  },
];

const SolutionsSection = () => (
  <section className="py-20 px-6 max-w-5xl mx-auto">
    <header className="text-center mb-10">
      <h2 className="text-3xl font-medium text-slate-900">قدرتی آرام</h2>
      <p className="mt-1 text-sm text-slate-600">
        ساخته‌شده برای رشد، بدون دردسرهای رشد.
      </p>
    </header>

    <div className="grid md:grid-cols-3 gap-6">
      {solutions.map(({ icon: Icon, title, lead }) => (
        <div
          key={title}
          className="p-5 border border-slate-200 rounded-lg bg-white/60 backdrop-blur hover:border-teal-500 hover:-translate-y-1 transition-all"
        >
          <Icon className="w-5 h-5 text-teal-600 mb-2" />
          <h3 className="text-sm font-medium text-slate-900">{title}</h3>
          <p className="text-xs text-slate-600 mt-1">{lead}</p>
        </div>
      ))}
    </div>
  </section>
);

export default SolutionsSection;
