// import { useScroll, useTransform, motion } from 'framer-motion';
// import { useScroll } from 'framer-motion/dom';

import { motion, useScroll, useTransform } from "motion/react";

const GrayMedalSection = () => {
  const { scrollYProgress } = useScroll();

  /* medal moves down & toward camera */
  const translateY = useTransform(scrollYProgress, [0, 1], ["-10vh", "-150vh"]); // downward
  const translateZ = useTransform(scrollYProgress, [0, 1], [0, 160]); // forward
  const rotateY = useTransform(scrollYProgress, [0, 1], [-25, 25]); // gentle twist
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1.2]);

  /* paragraph fades in after medal reaches bottom */
  const paraOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
  const paraY = useTransform(scrollYProgress, [0.8, 1], [20, 0]);

  return (
    <section className="relative isolate text-gray-200 h-[220vh] w-full">
      {/* animated black & white gradient */}
      <div
        aria-hidden
        className="sticky top-0 h-screen w-full bg-black -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 80%, rgba(255,255,255,.05) 0%, transparent 60%)," +
            "radial-gradient(circle at 80% 20%, rgba(255,255,255,.03) 0%, transparent 50%)," +
            "conic-gradient(from 90deg at 50% 50%, #000 0deg, #111 60deg, #000 120deg, #0d0d0d 180deg, #000 240deg, #111 300deg, #000 360deg)",
          animation: "alive 18s linear infinite",
        }}
      />

      {/* medal */}
      <motion.div
        className="sticky top-0 flex items-center justify-center h-screen"
        style={{ perspective: 1200 }}
      >
        <motion.div
          className="relative w-64 h-64 md:w-80 md:h-80"
          style={{
            y: translateY,
            scale,
            rotateY,
            translateZ,
            transformStyle: "preserve-3d",
          }}
        >
          {/* detailed gray coin */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-400 via-gray-600 to-gray-800 shadow-[0_0_60px_rgba(0,0,0,.4)]" />
          <div className="absolute inset-4 rounded-full border border-gray-300/30" />
          <div className="absolute inset-8 rounded-full border border-gray-300/20" />
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "repeating-conic-gradient(from 0deg, transparent 0deg 2deg, rgba(255,255,255,.08) 2deg 4deg)",
            }}
          />
          <div className="absolute inset-12 rounded-full bg-gray-700/80 flex items-center justify-center">
            <span className="text-6xl">🏅</span>
          </div>
          <div className="absolute top-[15%] left-[15%] w-1/4 h-1/4 rounded-full bg-gradient-radial from-white/15 to-transparent blur-md" />
        </motion.div>
      </motion.div>

      {/* paragraph appears at bottom */}
      <motion.div
        className="absolute bottom-24 left-1/2 -translate-x-1/2 max-w-lg text-center"
        style={{ opacity: paraOpacity, y: paraY }}
      >
        <p className="text-lg text-gray-200">
          اینجا پایان سفر نیست؛ آغاز یک همکاری متفاوت است.
        </p>
      </motion.div>

      <style jsx>{`
        @keyframes alive {
          0% {
            filter: hue-rotate(0deg) brightness(1);
          }
          50% {
            filter: hue-rotate(20deg) brightness(1.05);
          }
          100% {
            filter: hue-rotate(0deg) brightness(1);
          }
        }
      `}</style>
    </section>
  );
};

export default GrayMedalSection;
