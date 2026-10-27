
import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Zap, Layers, Compass } from 'lucide-react';

const solutions = [
  {
    icon: <Eye className="w-5 h-5" />,
    title: "Visual Hierarchy",
    desc: "I give the main offer and primary action clear visual priority."
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Intentional Motion",
    desc: "I use restrained motion to explore feedback and rhythm while keeping the content readable."
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: "Editorial Logic",
    desc: "I pair expressive typography with concise supporting copy so each section is easier to scan."
  },
  {
    icon: <Compass className="w-5 h-5" />,
    title: "Clear Next Steps",
    desc: "I keep the primary next step easy to find and limit competing calls to action."
  }
];

export const Solution: React.FC = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20">
          <span className="text-[10px] uppercase tracking-[0.4em] text-stone-500 mb-4 block">My approach</span>
          <h2 className="text-4xl md:text-6xl font-editorial italic text-stone-100">I start with what matters</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {solutions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="flex gap-6">
                <div className="w-12 h-12 flex items-center justify-center bg-stone-900 border border-stone-800 text-[#C19A6B] group-hover:bg-[#C19A6B] group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-medium text-stone-100 mb-3 uppercase tracking-wider">{item.title}</h3>
                  <p className="text-stone-500 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
