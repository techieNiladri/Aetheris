import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AUDIENCES = [
  {
    id: 'local',
    label: 'Local businesses',
    challenge: 'Visitors need to understand the offer, location, and easiest way to get in touch.',
    response: 'I would put the essential details and contact action where people can find them quickly, especially on mobile.',
  },
  {
    id: 'independent',
    label: 'Independent professionals',
    challenge: 'A personal website has to make the work, experience, and next step easy to scan.',
    response: 'I would organize the page around clear proof of work, concise context, and a direct contact route.',
  },
  {
    id: 'small-teams',
    label: 'Small product teams',
    challenge: 'A product page can feel crowded when every feature asks for equal attention.',
    response: 'I would give the main user problem and product value a clear place before supporting details.',
  },
];

export const Filters: React.FC = () => {
  const [activeId, setActiveId] = useState(AUDIENCES[0].id);
  const active = AUDIENCES.find((audience) => audience.id === activeId) ?? AUDIENCES[0];

  return (
    <section className="py-28 px-6 flex justify-center">
      <div className="max-w-4xl w-full text-center">
        <span className="text-[10px] uppercase tracking-[0.4em] text-stone-500 mb-8 block">Different needs, clear choices</span>
        <h2 className="text-3xl md:text-5xl font-editorial italic text-stone-100 mb-12">Who I design for.</h2>
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-12" role="group" aria-label="Choose a business type">
          {AUDIENCES.map((audience) => (
            <button
              key={audience.id}
              type="button"
              aria-pressed={activeId === audience.id}
              onClick={() => setActiveId(audience.id)}
              className={`text-xs uppercase tracking-widest px-5 py-3 border transition-colors duration-300 ${
                activeId === audience.id
                  ? 'bg-stone-100 text-black border-stone-100'
                  : 'text-stone-400 border-stone-800 hover:border-stone-500'
              }`}
            >
              {audience.label}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="grid md:grid-cols-2 gap-5 text-left"
          >
            <article className="p-7 md:p-8 border border-stone-800">
              <h3 className="text-[10px] uppercase tracking-widest text-stone-500 mb-4">A common design challenge</h3>
              <p className="text-lg text-stone-200 font-light leading-relaxed">{active.challenge}</p>
            </article>
            <article className="p-7 md:p-8 border border-[#C19A6B]/30 bg-[#C19A6B]/5">
              <h3 className="text-[10px] uppercase tracking-widest text-[#C19A6B] mb-4">How I’d approach it</h3>
              <p className="text-lg text-stone-200 font-light leading-relaxed">{active.response}</p>
            </article>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
