import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Neural-Decider',
    category: 'AI-assisted reflection experiment',
    description: 'I built a choice-based experience with generated reflections and visual summaries. I present it as an exploration, not a validated psychological assessment.',
    links: [
      { label: 'Open experiment', href: 'https://decision-timer.vercel.app/' },
      { label: 'Source code', href: 'https://github.com/techieNiladri/Neural-Decider' },
    ],
    color: 'bg-stone-900',
  },
  {
    title: 'Keeper App',
    category: 'Responsive notes app',
    description: 'I made a lightweight note-taking interface inspired by Google Keep, with responsive layouts and create and delete interactions.',
    links: [
      { label: 'Live demo', href: 'https://techieniladri.github.io/KeeperApp/' },
      { label: 'Source code', href: 'https://github.com/techieNiladri/KeeperApp' },
    ],
    color: 'bg-stone-800',
  },
  {
    title: 'Royal Shef Hotel',
    category: 'Multi-page hospitality concept',
    description: 'I explored a hotel website across rooms, dining, amenities, and contact pages. The date and guest controls are a visual prototype; it does not process reservations.',
    links: [
      { label: 'View concept', href: 'https://royal-shef-hotel-web-109l.bolt.host/' },
    ],
    color: 'bg-stone-900',
  },
];

export const CaseStudies: React.FC = () => (
  <div className="max-w-7xl mx-auto px-6 py-20">
    <header className="mb-16">
      <span className="text-[10px] uppercase tracking-[0.4em] text-stone-500 mb-4 block">Selected experiments</span>
      <h1 className="text-5xl md:text-8xl font-editorial italic text-stone-100 leading-tight">
        Ideas made <br /> <span className="text-[#C19A6B]">tangible.</span>
      </h1>
      <p className="text-stone-400 text-base md:text-lg font-light leading-relaxed max-w-2xl mt-8">
        I describe each project by what I built and link to its live version or source where available. The Royal Shef site is a concept, not a real hotel booking service.
      </p>
    </header>

    <section className="grid gap-6" aria-label="Selected projects">
      {projects.map((project, index) => (
        <motion.article
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
          className="group relative overflow-hidden flex flex-col md:flex-row border border-stone-800 bg-stone-900/20 hover:border-stone-600 transition-colors duration-300"
        >
          <div className={`w-full md:w-2/5 min-h-48 md:min-h-64 ${project.color} overflow-hidden flex items-center justify-center p-8 relative`}>
            <div className="absolute inset-0 bg-gradient-to-br from-[#C19A6B]/10 to-transparent" />
            <div className="relative z-10 text-[#C19A6B] font-editorial text-3xl md:text-4xl italic text-center">{project.title}</div>
          </div>
          <div className="p-7 md:p-10 flex-grow flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-stone-500">{project.category}</span>
              <h2 className="text-3xl font-editorial italic text-stone-100 mt-3 mb-4">{project.title}</h2>
              <p className="text-stone-400 font-light leading-relaxed max-w-2xl">{project.description}</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-stone-300 hover:text-[#C19A6B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C19A6B]"
                >
                  {link.label}<ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </motion.article>
      ))}
    </section>
  </div>
);
