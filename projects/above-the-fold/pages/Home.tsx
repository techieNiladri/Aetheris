
import React from 'react';
import { Hero } from '../components/Hero';
import { Problem } from '../components/Problem';
import { Solution } from '../components/Solution';
import { LiveProof } from '../components/LiveProof';
import { Filters } from '../components/Filters';
import { CTASection } from '../components/CTASection';
import { Footer } from '../components/Footer';

interface HomeProps {
  onNavigate: (path: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <>
      <div id="home">
        <Hero onNavigate={onNavigate} />
      </div>
      <div id="process">
        <Problem />
      </div>
      <div id="methodology-preview">
        <Solution />
      </div>
      <div id="proof">
        <LiveProof />
      </div>
      <div id="who">
        <Filters />
      </div>
      <div id="get-started">
        <CTASection />
      </div>
      <Footer onNavigate={onNavigate} />
    </>
  );
};
