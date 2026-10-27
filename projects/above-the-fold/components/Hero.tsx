import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onNavigate: (path: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => (
  <section className="min-h-screen flex flex-col justify-center items-center px-6 relative pt-24 pb-20">
    <div className="max-w-4xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-10"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-stone-500 mb-4 block">
          My landing-page experiment
        </span>
        <h1 className="text-5xl md:text-8xl font-editorial italic text-stone-100 leading-[1.1] mb-8">
          Make the first <br />
          <span className="text-[#C19A6B]">impression clear.</span>
        </h1>
        <p className="text-stone-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-12">
          I design focused landing pages that help visitors understand what a business offers and how to take the next step.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        <a
          href="#get-started"
          className="px-8 py-4 bg-[#C19A6B] text-white text-xs font-semibold tracking-widest uppercase rounded-sm text-center min-w-[200px] hover:bg-[#d0aa7b] transition-colors"
        >
          Tell me about your site
        </a>
        <button
          type="button"
          onClick={() => onNavigate('methodology')}
          className="text-stone-400 text-xs font-semibold tracking-widest uppercase hover:text-stone-100 transition-colors py-4 px-8 border border-stone-800 hover:border-stone-500 rounded-sm text-center min-w-[200px]"
        >
          See my approach
        </button>
      </motion.div>
    </div>
    <motion.a
      href="#process"
      aria-label="Scroll to the design challenge section"
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute bottom-8 text-[9px] uppercase tracking-[0.3em] text-stone-600"
    >
      Scroll to explore
    </motion.a>
  </section>
);
