
import React from 'react';
import { motion } from 'framer-motion';

export const Problem: React.FC = () => {
  return (
    <section className="py-32 px-6 flex justify-center bg-[#080808] overflow-hidden">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl md:text-5xl font-editorial italic text-stone-200 mb-8 leading-tight">
            The world is loud. <br />
            Clarity is <span className="text-[#C19A6B]">scarce.</span>
          </h2>
          <div className="space-y-6 text-stone-400 font-light text-lg mb-12">
            <p>
              I think a landing page loses clarity when every message and visual competes for the same attention.
            </p>
            <p>
              I start by making the offer, audience, and next step easier to understand.
            </p>
          </div>
          <div className="border border-stone-800 bg-stone-950/60 p-6">
            <p className="text-[9px] uppercase tracking-[0.3em] text-[#C19A6B] mb-3">My starting point</p>
            <p className="text-sm text-stone-400 leading-relaxed">I look for the one message a visitor needs first, then shape the layout around that and its next action.</p>
          </div>
        </motion.div>

        <div className="relative">
          <div className="relative z-10 aspect-[4/5] bg-stone-900 border border-stone-800 flex flex-col items-center justify-center p-8 overflow-hidden shadow-2xl">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ margin: "-50px" }}
              animate={{
                boxShadow: ["0px 0px 0px rgba(193, 154, 107, 0)", "0px 0px 40px rgba(193, 154, 107, 0.05)", "0px 0px 0px rgba(193, 154, 107, 0)"]
              }}
              transition={{
                scale: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 1.2 },
                boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative w-full max-w-[280px] aspect-[3/4] bg-[#050505] border border-stone-700/50 p-10 flex flex-col justify-between"
            >
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-[#C19A6B]" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-[#C19A6B]" />

              <div className="space-y-6">
                <div className="w-8 h-8 rounded-full border border-stone-800 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-1.5 h-1.5 rounded-full bg-[#C19A6B]"
                  />
                </div>

                <div className="space-y-3">
                  <motion.div
                    animate={{ width: ["20%", "40%", "20%"] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="h-1 bg-[#C19A6B]/30"
                  />
                  <h4 className="text-2xl font-editorial italic text-stone-100 leading-tight">Clarity over <br/> Complexity.</h4>
                </div>

                <div className="space-y-2 opacity-30">
                  <div className="h-1 w-full bg-stone-800" />
                  <div className="h-1 w-4/5 bg-stone-800" />
                  <div className="h-1 w-2/3 bg-stone-800" />
                </div>
              </div>

              <div className="mt-8">
                <div className="h-12 w-full bg-[#C19A6B]/10 border border-[#C19A6B]/30 flex items-center justify-center relative overflow-hidden group">
                  <span className="text-[8px] uppercase tracking-[0.3em] text-[#C19A6B] font-bold z-10">Singular Action</span>
                  <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C19A6B]/5 to-transparent"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#C19A6B]/20 to-transparent pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
