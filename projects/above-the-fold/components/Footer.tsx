
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer-section" className="pt-24 pb-12 px-8 border-t border-stone-900 bg-[#050505] relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-end gap-12">

        {/* Profile Details */}
        <div className="flex flex-col items-center md:items-start gap-6">
          <div className="w-20 h-20 bg-stone-800 rounded-full overflow-hidden border border-stone-700 grayscale hover:grayscale-0 transition-all duration-700">
            <img
              src="https://github.com/techieNiladri.png"
              alt="Niladri Dey"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-stone-100 font-medium tracking-wide text-lg">Niladri Dey</h4>
            <p className="text-stone-500 text-[10px] uppercase tracking-[0.3em] mt-1 font-semibold">Frontend Developer</p>
          </div>
        </div>

        {/* Socials & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex gap-8">
            <a href="https://github.com/techieNiladri" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-[#C19A6B] transition-colors group">
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.linkedin.com/in/niladri-dey-280710d/" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-[#C19A6B] transition-colors group">
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a href="mailto:deyniladri937@gmail.com" className="text-stone-500 hover:text-[#C19A6B] transition-colors group">
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>
          <p className="text-center md:text-right text-[10px] text-stone-700 uppercase tracking-[0.4em]">
            © {currentYear} · My frontend experiment.
          </p>
        </div>

      </div>
    </footer>
  );
};
