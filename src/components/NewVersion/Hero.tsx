// HeroSection.tsx
// مینیمال، زنده، اما آرام.
// فقط از سه رنگ استفاده شده: slate-50, slate-900, و teal-600.

import { ArrowLeft, ArrowRight } from "lucide-react";

const HeroSection = () => (
  <section className="grid md:grid-cols-2 gap-10 md:gap-20 items-center py-44 px-6 max-w-6xl mx-auto">
    {/* سمت چپ */}
    <div className="space-y-6">
      <h1
        style={{ textAlign: "center" }}
        className="text-5xl md:text-left md:text-5xl font-medium leading-tight text-slate-900"
      >
        کیانمهر مزلوگه
        <br />
        <span className="text-teal-600">عملیات</span>
      </h1>

      <p className="text-slate-600 max-w-md">
        مدیریت کسب‌وکار مثل یک مهارت ذاتی. شفاف، آرام، و ساخته‌شده برای تیم‌های
        جاه‌طلبی که ترجیح می‌دهند از سروصدا دوری کنند.
      </p>

      <div className="flex items-center gap-6 text-sm text-slate-500">
        <span>۴.۹ / ۵ از بیش از ۵۰۰ تیم</span>
        <span>•</span>
        <span>بیش از ۵۰۰۰ کاربر فعال</span>
      </div>

      <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-600 text-white rounded-md text-sm font-medium hover:bg-teal-700 transition-colors">
        همکاری با من
        <ArrowLeft size={16} />
      </button>
    </div>

    {/* سمت راست – کارت زنده */}
    <div className="relative">
      {/* هاله محو و متحرک */}
      <div className="absolute inset-0 rounded-xl bg-teal-400/10 blur-2xl animate-pulse" />
      <div className="relative bg-white/70 backdrop-blur border border-slate-200 rounded-xl p-6 shadow-sm">
        <div className="text-sm font-medium text-slate-900 mb-4">داشبورد</div>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-xl font-semibold text-teal-600">$84.2K</div>
            <div className="text-xs text-slate-500">درآمد</div>
          </div>
          <div>
            <div className="text-xl font-semibold text-slate-700">$42.7K</div>
            <div className="text-xs text-slate-500">هزینه‌ها</div>
          </div>
          <div>
            <div className="text-xl font-semibold text-slate-700">$41.5K</div>
            <div className="text-xs text-slate-500">سود</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
