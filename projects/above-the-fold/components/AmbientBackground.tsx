
import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export const AmbientBackground: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Dynamically shift gradient based on scroll
  const gradientY = useTransform(smoothProgress, [0, 1], ['20%', '60%']);
  const gradientX = useTransform(smoothProgress, [0, 1], ['10%', '30%']);
  const opacity = useTransform(smoothProgress, [0, 0.5, 1], [0.3, 0.5, 0.3]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#050505]">
      {/* Soft light blob 1 */}
      <motion.div
        className="absolute w-[80vw] h-[80vw] rounded-full blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(193, 154, 107, 0.08) 0%, rgba(5, 5, 5, 0) 70%)',
          top: '-10%',
          right: '-10%',
          x: useTransform(smoothProgress, [0, 1], [0, -100]),
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Soft light blob 2 */}
      <motion.div
        className="absolute w-[60vw] h-[60vw] rounded-full blur-[100px]"
        style={{
          background: 'radial-gradient(circle, rgba(193, 154, 107, 0.05) 0%, rgba(5, 5, 5, 0) 70%)',
          bottom: gradientY,
          left: gradientX,
          opacity: opacity,
        }}
      />

      {/* Film Grain / Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/40 to-[#050505]" />
    </div>
  );
};
