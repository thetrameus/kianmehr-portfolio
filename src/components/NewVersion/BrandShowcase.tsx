// BrandShowcaseSection.tsx
// Full client list wrapped in the same icy-blue crystal style

import { useState } from "react";
import type { FC } from "react";

const brands = [
  {
    name: "Mammoth Accelerator",
    cat: "استودیو استارتاپ",
    stat: "موتور محتوایی ساخته شد",
    icon: "🚀",
  },
  {
    name: "Mahestan",
    cat: "پرتال املاک",
    stat: "۷۰۰٪ رشد جذب مشتری",
    icon: "🏢",
  },
  {
    name: "SuperFrost",
    cat: "برند غذایی",
    stat: "۴۰۰٪ افزایش فروش آنلاین",
    icon: "🧊",
  },
  {
    name: "Wonderland Amusement",
    cat: "پارک سرگرمی",
    stat: "بیش از ۲ میلیون بازدید تابستانی",
    icon: "🎡",
  },
  {
    name: "Atlas Cinema Buffet",
    cat: "میزبانی و پذیرایی",
    stat: "۳۰۰٪ افزایش گردش میزها",
    icon: "🎬",
  },
  {
    name: "ISB CLUB",
    cat: "جامعه آنلاین",
    stat: "۱۰ هزار عضو فعال",
    icon: "👥",
  },
  {
    name: "Nexio",
    cat: "MVP نرم‌افزار SaaS",
    stat: "۵۰٪ کاهش ریزش کاربران",
    icon: "⚙️",
  },
  {
    name: "ADLAY Company",
    cat: "زنجیره خرده‌فروشی",
    stat: "یکپارچه‌سازی صدای برند",
    icon: "🛒",
  },
];

const Orbs: FC = () => (
  <>
    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-300/5 rounded-full blur-3xl -translate-z-10" />
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-300/5 rounded-full blur-3xl -translate-z-10" />
  </>
);

const BrandCard: FC<{ proj: (typeof brands)[0]; active: boolean }> = ({
  proj,
  active,
}) => (
  <article
    style={{ perspective: "1000px" }}
    className={`relative p-6 bg-white/30 backdrop-blur-sm border border-white/40 rounded-2xl shadow-lg transition-all duration-500 ${
      active
        ? "scale-105 shadow-2xl -translate-y-2 rotate-x-2 rotate-y-2"
        : "hover:shadow-xl hover:-translate-y-1"
    }`}
  >
    <div
      className={`absolute inset-0 rounded-2xl border-2 transition-opacity duration-500 ${
        active ? "border-cyan-300/40" : "border-transparent"
      }`}
    />
    {/* client logo / icon */}
    <div className="w-12 h-12 mb-4 flex items-center justify-center bg-gray-900 rounded-full text-white text-xl shadow-md">
      {proj.icon}
    </div>

    <h3 className="text-xl font-medium text-gray-900">{proj.name}</h3>
    <p className="text-sm text-cyan-700">{proj.cat}</p>
    <p className="mt-3 text-xs text-gray-700 italic">“{proj.stat}”</p>
  </article>
);

export default function BrandShowcaseSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50 py-24">
      <Orbs />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900">
            Brands & Projects{" "}
            <span className="text-cyan-600">quietly shaped</span>
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Every line of code, every clip, every calm metric.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {brands.map((b, i) => (
            <div
              key={b.name}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <BrandCard proj={b} active={hovered === i} />
            </div>
          ))}
        </div>

        {/* floating crystal stat */}
        <div className="mt-16 flex justify-center">
          <div className="flex flex-wrap gap-6 px-6 py-4 bg-white/60 backdrop-blur border border-white/30 rounded-2xl shadow-lg justify-center">
            {["۸+", "۴۰۰٪", "۱۰ هزار", "۲ میلیون+", "۵۰٪"].map((v, i) => (
              <div key={i} className="text-center min-w-[80px]">
                <p className="font-semibold text-sm text-gray-900">{v}</p>
                <p className="text-xs text-gray-500">
                  {
                    [
                      "پروژه",
                      "میانگین بازگشت سرمایه",
                      "اعضا",
                      "بازدیدها",
                      "کاهش ریزش",
                    ][i]
                  }
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
