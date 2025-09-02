// KianmehrBiography.tsx
// Minimal, alive, icy-blue crystal scroll — complete text woven into glass layers

import { useState, useEffect } from "react";
import { Calendar, School, Users, Briefcase } from "lucide-react";

const bio = {
  name: "کیانمهر سعید افخم‌الاشراف",
  born: "۳۱ اکتبر ۲۰۰۵ · مشهد",
  summary:
    "فرزند یک معمار و یک ژنتیک‌دان؛ شناگر سابق که به تولیدکننده محتوا تبدیل شد و اکنون در سکوت، کار های خوبی می کند.",
  sections: [
    {
      id: "pool",
      title: "در آب، جریان را یافتم",
      icon: <Calendar size={20} />,
      image: "/kianmehr-portfolio/swimming.jpg",
      text: `شنا را در شش‌سالگی زیر نظر مربی علیرضا ولی‌زاده در استخر کاظمیان آغاز کردم. واترپلو نوجوانان در آکادمی قهرمان (برادران تجددین) نظم تیمی را در من شکل داد. بعدها به‌صورت انفرادی در استخرهای فرومندی و ۱۵ خرداد تمرین کردم. زمستان ۲۰۲۵ — اخذ مدرک مربیگری شنا سطح ۳ زیر نظر مشتاق و ولی‌زاده تاکسی.`,
      skills: ["انضباط", "جریان تربیتی", "دقت"],
    },
    {
      id: "school",
      title: "کلاس‌ها و مدرسه ها",
      icon: <School size={20} />,
      image: "/kianmehr-portfolio/kidding.jpg",
      text: `مدرسه امید (۱ تا ۶) → نور امام رضا (۷) → علامه طباطبایی (۸) → پژوهش (۹). دبیرستان علوم انسانی در فرهنگ دهخدا، کاوش و حسینیه. پاییز ۲۰۲۴ — پذیرش در دانشگاه خیام مشهد، رشته مدیریت بازرگانی. یادگیری به معماری تبدیل شد.`,
      skills: ["کنجکاوی", "ساختار", "نگرش علوم انسانی"],
    },
    {
      id: "language",
      title: "واژه‌هایی که پل می‌سازند",
      icon: <Users size={20} />,
      image: "/kianmehr-portfolio/man.jpg",
      text: `انگلیسی  رو در کالج ماهان آغاز کردم و در مؤسسه آریانا عمیق‌تر یاد گرفتم. پاییز ۲۰۲۴ — اخذ مدرک TTC + آزمون‌های FCE و CAE. تدریس آشکار ساخت: شفافیت همان معماری است؛ هر واژه وزنی دارد. دانشجویان نخستین آزمونگران UX شدند.`,
      skills: ["شفافیت", "همدلی", "آموزش"],
    },
    {
      id: "content",
      title: "پیکسل‌ها و پروژه‌ها",
      icon: <Briefcase size={20} />,
      image: "/kianmehr-portfolio/brand.png",
      text: `کارآموزی خرداد ۲۰۲۴ در شتاب‌دهنده ماموت زیر نظر مصطفی میرنجاد و حمید حامد: مهستان، آوا لایف‌استایل، رویا طرح، سوپرفراست، واندرلند، پارک ملت، مجموعه قهرمانان. آذر ۲۰۲۴ — فعالیت مستقل به‌عنوان خالق محتوا با: کاردان، ISB، قصر موزاییک، نکسـیو، پخشوپلا، کاش پلاس.`,
      skills: ["داستان‌سرایی", "مقیاس", "ترکوندن"],
    },
  ],
};

export default function KianmehrBiography() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () =>
      setScrollProgress(
        (window.pageYOffset /
          (document.documentElement.scrollHeight - window.innerHeight)) *
          100
      );
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden ">
      {/* sky progress */}
      <div className="fixed top-0 left-0 w-full h-1 bg-sky-200 z-50">
        <div
          className="h-full bg-sky-600 transition-all"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero */}
      <div className="min-h-screen flex items-center justify-center px-6 text-center space-y-4">
        <div>
          <h1 className="text-5xl font-light text-gray-300">{bio.name}</h1>
          <p className="text-lg text-gray-300">{bio.born}</p>
          <p className="text-sm text-gray-400 max-w-md mx-auto mt-4">
            {bio.summary}
          </p>
        </div>
      </div>

      {/* Glass chapters */}
      <div className="max-w-5xl mx-auto px-6 space-y-32 py-20">
        {bio.sections.map((section) => (
          <article
            key={section.id}
            className="grid md:grid-cols-2 gap-8 p-6 backdrop-blur-md border border-white/13 rounded-3xl shadow-md shadow-blue-200/35"
          >
            {/* image */}
            <div className="relative">
              <img
                src={section.image}
                alt={section.title}
                className="w-full sm:h-[350px] md:h-[300px] rounded-2xl shadow-lg"
              />
              <div className="absolute -top-5 left-5 w-12 h-12 flex items-center justify-center bg-white text-black rounded-full shadow-md">
                {section.icon}
              </div>
            </div>

            {/* text */}
            <div className="space-y-3">
              <h2 className="text-2xl font-medium text-gray-100">
                {section.title}
              </h2>
              <p className="text-sm text-white/80 leading-relaxed">
                {section.text}
              </p>
              <div className="flex flex-wrap gap-2">
                {section.skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 bg-white/95 text-black text-xs rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* crystal outro */}
      <div className="py-16 text-center">
        <h2 className="text-3xl font-light text-white">استادم گفت</h2>
        <p className="text-sm text-white mt-2">
          {/* From pool to pixels — one calm wave at a time. */}
          {/* گویند اگر می بخوری عرش بلرزد عرشی که به یک جام بلرزر چه ارزد؟ */}
        </p>
        <p className="mt-1">در خانه ما زیر زمینی است</p>
        <p className="mt-1">یک خمر خوری خشتی از آن نیز نلرزد</p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-6 px-5 py-2 border border-white/8 rounded-full text-sm text-white hover:bg-sky-100 transition"
        >
          از اول ببینم
        </button>
      </div>
    </section>
  );
}
