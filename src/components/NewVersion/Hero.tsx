import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "../../LanguageContext";

const HeroSection = () => {
  const { lang } = useLanguage();
  const isRTL = lang === 0;

  // Content based on language
  const content = {
    title: isRTL ? "کیانمهر" : "Kianmehr",
    subtitle: isRTL ? "زنده، ساده، قدرتمند" : "Alive, Simple, Powerful",
    description: isRTL
      ? "مدیریت کسب‌وکار مثل یک مهارت ذاتی. شفاف."
      : "Business management like an innate skill. Transparent.",
    buttonText: isRTL ? "همکاری با من" : "Work with me",
  };

  return (
    <section className="text-gray-200 grid md:grid-cols-1 gap-10 md:gap-20 items-center pt-44 pb-44 px-6 max-w-6xl mx-auto">
      {/* Content */}
      <div className="space-y-6" dir={isRTL ? "rtl" : "ltr"}>
        <h1 className="text-6xl md:text-7xl font-medium leading-tight">
          {content.title}
          <br />
          <span className="text-teal-400">{content.subtitle}</span>
        </h1>

        <p className="text-slate-300 max-w-md">{content.description}</p>

        <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-600 text-white rounded-md text-sm font-medium hover:bg-teal-500 transition-colors">
          {content.buttonText}
          {isRTL ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
        </button>
      </div>
    </section>
  );
};

// export function NewHero() {
//   const isRTL = lang === 0;

//   // Content based on language
//   const content = {
//     title: isRTL ? "کیانمهر" : "Kianmehr",
//     subtitle: isRTL ? "زنده، ساده، قدرتمند" : "Alive, Simple, Powerful",
//     description: isRTL
//       ? "مدیریت کسب‌وکار مثل یک مهارت ذاتی. شفاف."
//       : "Business management like an innate skill. Transparent.",
//     buttonText: isRTL ? "همکاری با من" : "Work with me",
//   };

//   return (
//     <section className="relative isolate text-gray-200 grid md:grid-cols-2 gap-10 md:gap-20 items-center min-h-screen px-6 max-w-7xl mx-auto overflow-hidden">
//       {/* Animated black & white gradient */}
//       <div
//         aria-hidden
//         className="absolute inset-0 -z-10 bg-black"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle at 40% 50%, rgba(255,255,255,.05) 0%, transparent 60%)," +
//             "radial-gradient(circle at 80% 20%, rgba(255,255,255,.04) 0%, transparent 50%)," +
//             "conic-gradient(from 0deg at 50% 50%, #000 0deg, #0a0a0a 60deg, #000 120deg, #111 180deg, #000 240deg, #0a0a0a 300deg, #000 360deg)",
//           animation: "alive 18s linear infinite",
//         }}
//       />

//       {/* Left side */}
//       <div className="space-y-6" dir={isRTL ? "rtl" : "ltr"}>
//         <h1 className="text-6xl md:text-7xl font-medium leading-tight">
//           {content.title}
//           <br />
//           <span className="text-teal-400">{content.subtitle}</span>
//         </h1>

//         <p className="text-slate-300 max-w-md">{content.description}</p>

//         <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-600 text-white rounded-md text-sm font-medium hover:bg-teal-500 transition-colors">
//           {content.buttonText}
//           {isRTL ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
//         </button>
//       </div>

//       {/* Right side - Dashboard */}
//       <div dir={isRTL ? "rtl" : "ltr"}>
//         <Dashboard lang={lang} />
//       </div>

//       {/* Keyframes */}
//       <style jsx>{`
//         @keyframes alive {
//           0% {
//             filter: hue-rotate(0deg) brightness(1);
//           }
//           50% {
//             filter: hue-rotate(20deg) brightness(1.05);
//           }
//           100% {
//             filter: hue-rotate(0deg) brightness(1);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

// export function Dashboard({ lang }: { lang: number }) {
//   const isRTL = lang === 0;

//   // Dashboard content based on language
//   const dashboardContent = {
//     title: isRTL ? "داشبورد" : "Dashboard",
//     income: isRTL ? "درآمد" : "Income",
//     expenses: isRTL ? "هزینه‌ها" : "Expenses",
//     profit: isRTL ? "سود" : "Profit",
//   };

//   return (
//     <div className="relative">
//       {/* Faded and animated halo */}
//       <div className="absolute inset-0 rounded-xl bg-teal-400/10 blur-2xl animate-pulse" />
//       <div className="relative bg-white/70 backdrop-blur border border-slate-200 rounded-xl p-6 shadow-sm">
//         <div className="text-sm font-medium text-slate-900 mb-4">
//           {dashboardContent.title}
//         </div>
//         <div className="grid grid-cols-3 gap-4 text-center">
//           <div>
//             <div className="text-xl font-semibold text-teal-600">$84.2K</div>
//             <div className="text-xs text-slate-500">
//               {dashboardContent.income}
//             </div>
//           </div>
//           <div>
//             <div className="text-xl font-semibold text-slate-700">$42.7K</div>
//             <div className="text-xs text-slate-500">
//               {dashboardContent.expenses}
//             </div>
//           </div>
//           <div>
//             <div className="text-xl font-semibold text-slate-700">$41.5K</div>
//             <div className="text-xs text-slate-500">
//               {dashboardContent.profit}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default HeroSection;
