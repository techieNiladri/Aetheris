import React from 'react';
import { motion } from 'framer-motion';

export const CTASection: React.FC = () => (
  <section className="py-32 px-6 relative flex flex-col items-center">
    <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
      <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#C19A6B] via-transparent to-transparent" />
    </div>
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative z-10 max-w-4xl text-center"
    >
      <p className="text-[10px] uppercase tracking-[0.4em] text-stone-500 mb-5">Have a website in mind?</p>
      <h2 className="text-4xl md:text-7xl font-editorial italic text-stone-100 mb-8 leading-tight">
        Let’s make the next step <span className="text-[#C19A6B]">clear.</span>
      </h2>
      <p className="text-stone-400 text-base md:text-lg mb-10 max-w-xl mx-auto font-light leading-relaxed">
        Tell me what your business does, who you want to reach, and what you want the website to help them do.
      </p>
      <a
        href="mailto:deyniladri937@gmail.com?subject=Website%20project%20enquiry"
        className="inline-flex px-10 py-5 bg-stone-100 text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors duration-300 rounded-sm text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C19A6B]"
      >
        Email me about a project
      </a>
    </motion.div>
  </section>
);
