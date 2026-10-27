
import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Approach', id: 'methodology' },
    { label: 'Work', id: 'case-studies' },
  ];

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 }
      }}
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50 px-5 md:px-8 py-4 md:py-6 flex justify-between items-center bg-[#050505]/40 backdrop-blur-lg border-b border-stone-900/50"
    >
      <button
        onClick={() => onNavigate('home')}
        className="text-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.3em] font-medium text-stone-400 hover:text-stone-100 transition-colors"
      >
        Above the Fold
      </button>
      <nav className="flex gap-3 sm:gap-6 md:gap-10 items-center">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.08em] sm:tracking-widest transition-colors duration-300 ${
              currentPath === item.id ? 'text-[#C19A6B]' : 'text-stone-500 hover:text-stone-100'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </motion.header>
  );
};
