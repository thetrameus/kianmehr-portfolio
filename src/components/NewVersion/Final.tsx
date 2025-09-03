// import { motion } from 'framer-motion';

import { motion } from "motion/react";

const UnequalGallery = () => {
  const items = [
    { id: 1, title: "A", w: "col-span-2", h: "row-span-2" },
    { id: 2, title: "B", w: "col-span-1", h: "row-span-1" },
    { id: 3, title: "C", w: "col-span-1", h: "row-span-2" },
    { id: 4, title: "D", w: "col-span-2", h: "row-span-1" },
    { id: 5, title: "E", w: "col-span-1", h: "row-span-1" },
    { id: 6, title: "F", w: "col-span-1", h: "row-span-1" },
  ];

  return (
    <section className="relative isolate bg-black text-gray-200 px-6 py-20 max-w-7xl mx-auto">
      {/* animated base */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,255,255,.03) 0%, transparent 70%)",
        }}
      />

      <div className="grid grid-cols-3 gap-4 md:gap-6 auto-rows-[120px] md:auto-rows-[160px]">
        {items.map(({ id, title, w, h }) => (
          <motion.div
            key={id}
            className={`relative ${w} ${h} rounded-lg overflow-hidden group cursor-pointer`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            {/* border */}
            <span className="absolute inset-0 rounded-lg border border-gray-700/80 pointer-events-none" />

            {/* animated gradient layer */}
            <span
              className="absolute inset-0 rounded-lg border border-transparent bg-gradient-to-br from-gray-300/5 via-black to-gray-300/5 animate-pulse"
              style={{ animationDuration: `${3 + id}s` }}
            />

            {/* subtle hover sweep */}
            <span className="absolute inset-0 rounded-lg bg-teal-400/0 group-hover:bg-teal-400/10 transition-colors duration-300" />

            {/* content */}
            <span className="absolute inset-0 flex items-center justify-center text-3xl font-medium text-gray-300">
              {title}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default UnequalGallery;
