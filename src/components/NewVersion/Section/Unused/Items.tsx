// ScrollGallery.jsx
import { useRef, useEffect } from "react";

const items = [
  {
    id: 1,
    title: "Dashboard",
    img: "https://picsum.photos/id/180/800/600",
    tags: ["UI", "Analytics"],
  },
  {
    id: 2,
    title: "Reports",
    img: "https://picsum.photos/id/201/800/600",
    tags: ["Finance", "PDF"],
  },
  {
    id: 3,
    title: "Tasks",
    img: "https://picsum.photos/id/250/800/600",
    tags: ["Kanban", "Team"],
  },
  {
    id: 4,
    title: "Operations",
    img: "https://picsum.photos/id/28/800/600",
    tags: ["Logistics", "Map"],
  },
  {
    id: 5,
    title: "Finance",
    img: "https://picsum.photos/id/48/800/600",
    tags: ["Ledger", "Audit"],
  },
  {
    id: 6,
    title: "Account",
    img: "https://picsum.photos/id/64/800/600",
    tags: ["Profile", "Billing"],
  },
];

export default function ScrollGallery() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const el = e.target as HTMLDivElement;
          if (e.isIntersecting) {
            el.style.transform = "translateY(0) scale(1)";
            el.style.opacity = "1";
          } else {
            el.style.transform = "translateY(80px) scale(0.9)";
            el.style.opacity = "0";
          }
        });
      },
      { threshold: 0.25 }
    );

    refs.current.forEach((r) => r && io.observe(r));
    return () => io.disconnect();
  }, []);

  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-16 text-center">
          Explore Our Modules
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div
              key={item.id}
              ref={(el) => {
                refs.current[i] = el;
              }} // ✅ OK now
              className="relative group rounded-2xl overflow-hidden cursor-pointer
               transform transition-all duration-700 opacity-0"
              style={{ transform: "translateY(80px) scale(0.9)" }}
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

              {/* Tags */}
              <div className="absolute top-4 left-4 flex gap-2">
                {item.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs
                               border border-white/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Title */}
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-bold">{item.title}</h3>
              </div>

              {/* Hover ring */}
              <div
                className="absolute inset-0 rounded-2xl ring-2 ring-white/0 group-hover:ring-white/30
                           transition-all duration-300"
              />

              {/* corner reveal */}
              <div
                className="absolute top-0 right-0 w-0 h-0 border-t-transparent border-r-transparent
                           border-b-transparent border-l-transparent group-hover:w-12 group-hover:h-12
                           transition-all duration-300"
                style={{
                  borderTop: "12px solid white",
                  borderRight: "12px solid white",
                  borderLeft: "12px solid transparent",
                  borderBottom: "12px solid transparent",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
