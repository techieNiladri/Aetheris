
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export const LiveProof: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const springProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const scale = useTransform(springProgress, [0.2, 0.5, 0.8], [0.95, 1, 0.95]);
  const opacity = useTransform(springProgress, [0.2, 0.5, 0.8], [0.3, 1, 0.3]);
  const yOffset = useTransform(springProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} className="py-32 px-6 flex flex-col items-center overflow-hidden">
      <div className="text-center mb-20 max-w-2xl">
        <span className="text-[10px] uppercase tracking-[0.4em] text-stone-500 mb-4 block">Interface study</span>
        <h2 className="text-3xl md:text-5xl font-editorial italic text-stone-100 mb-6">
          A small interface study.
        </h2>
        <p className="text-stone-500 font-light">
          I use this animated mock-up to explore visual hierarchy, timing, and the placement of a primary action. It is a design experiment, not measured user or conversion data.
        </p>
      </div>

      <motion.div
        style={{ scale, opacity, y: yOffset }}
        className="w-full max-w-5xl bg-[#0a0a0a] border border-stone-800 rounded-sm shadow-2xl relative p-5 sm:p-8 md:aspect-video md:p-12"
      >
        <div className="w-full flex flex-col gap-6 md:h-full md:gap-8">
          <div className="flex justify-between items-center opacity-40">
            <div className="w-24 h-4 bg-stone-800" />
            <div className="flex gap-4">
              <div className="w-12 h-4 bg-stone-800" />
              <div className="w-12 h-4 bg-stone-800" />
            </div>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:flex-grow md:gap-8">
            <div className="flex-grow space-y-6">
              <motion.div
                className="h-16 w-3/4 bg-stone-900 border border-stone-800"
                style={{
                  width: useTransform(springProgress, [0.4, 0.6], ["75%", "90%"])
                }}
              />
              <div className="h-4 w-full bg-stone-900/50" />
              <div className="h-4 w-5/6 bg-stone-900/50" />
              <div className="h-4 w-2/3 bg-stone-900/50" />

              <motion.div
                className="h-12 w-40 bg-[#C19A6B]"
                style={{
                  opacity: useTransform(springProgress, [0.4, 0.5], [0.2, 1])
                }}
              />
            </div>
            <div className="w-full md:w-1/3 aspect-square md:aspect-auto bg-stone-900 border border-stone-800 flex items-center justify-center">
              <motion.div
                className="w-1/2 h-1/2 rounded-full border border-stone-800"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>
        </div>

        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-stone-700" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-stone-700" />
      </motion.div>
    </section>
  );
};
