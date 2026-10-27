import React from 'react';
import { motion } from 'framer-motion';
import { Brain, MousePointer2, Timer, Search } from 'lucide-react';

const principles = [
  {
    icon: <Search className="w-6 h-6" />,
    title: 'Message hierarchy',
    text: 'I decide what visitors need to notice first, then give supporting information a clear order.',
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'Useful simplicity',
    text: 'I remove or group details that distract from the page goal, while keeping the information people need.',
  },
  {
    icon: <MousePointer2 className="w-6 h-6" />,
    title: 'Scroll rhythm',
    text: 'I consider how each section leads into the next so the page feels connected instead of like a stack of blocks.',
  },
  {
    icon: <Timer className="w-6 h-6" />,
    title: 'Intentional motion',
    text: 'In this experiment, I use motion to explore visual rhythm and keep the primary action distinct.',
  },
];

interface MethodologyProps {
  onNavigate?: (path: string) => void;
}

export const Methodology: React.FC<MethodologyProps> = ({ onNavigate }) => (
  <div className="max-w-5xl mx-auto px-6 py-20">
    <header className="mb-20 text-center md:text-left">
      <span className="text-[10px] uppercase tracking-[0.4em] text-stone-500 mb-4 block">My approach</span>
      <h1 className="text-5xl md:text-8xl font-editorial italic text-stone-100 leading-tight mb-8">
        Clear intent. <br /><span className="text-[#C19A6B]">Considered design.</span>
      </h1>
      <p className="text-stone-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
        I treat these as practical design choices, not guaranteed conversion results. I shape the page around its audience, purpose, and the information people need to act.
      </p>
    </header>

    <section className="grid md:grid-cols-2 gap-x-16 gap-y-14 mb-24" aria-label="Design principles">
      {principles.map((principle, index) => (
        <motion.article
          key={principle.title}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.08 }}
          viewport={{ once: true }}
          className="group"
        >
          <div className="flex flex-col gap-5">
            <div className="w-14 h-14 rounded-full border border-stone-800 flex items-center justify-center text-[#C19A6B] group-hover:bg-[#C19A6B] group-hover:text-white transition-colors duration-300">
              {principle.icon}
            </div>
            <h2 className="text-2xl font-editorial italic text-stone-100">{principle.title}</h2>
            <p className="text-stone-400 font-light leading-relaxed">{principle.text}</p>
          </div>
        </motion.article>
      ))}
    </section>

    <section className="bg-stone-900/30 border border-stone-800 p-8 md:p-14 text-center">
      <h2 className="text-3xl md:text-4xl font-editorial italic text-stone-200 mb-5 max-w-2xl mx-auto leading-relaxed">
        Have a page that needs a clearer direction?
      </h2>
      <p className="text-stone-400 max-w-lg mx-auto mb-8 font-light leading-relaxed">
        I can help you define its structure and build a focused frontend around your goal.
      </p>
      <button
        type="button"
        onClick={() => onNavigate?.('get-started')}
        className="inline-block px-8 py-4 bg-[#C19A6B] text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-stone-100 hover:text-black transition-colors"
      >
        Get in touch
      </button>
    </section>
  </div>
);
