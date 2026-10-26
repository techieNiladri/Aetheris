import React from 'react';
import { ArrowDownRight, ArrowUpRight, ArrowRight, Check, Mail, MapPin } from 'lucide-react';

const projects = [
  {
    name: 'Neural-Decider',
    type: 'AI-assisted reflection experiment',
    image: '/work/neural-decider-screenshot.png',
    alt: 'Neural-Decider opening screen',
    description: 'I built a choice-based experience that explores how people approach everyday decisions, with generated reflections and visual summaries.',
    stack: 'React · TypeScript · Google Generative AI',
    links: [
      { label: 'Open experiment', href: 'https://decision-timer.vercel.app/' },
      { label: 'Source code', href: 'https://github.com/techieNiladri/Neural-Decider' },
    ],
  },
  {
    name: 'Keeper App',
    type: 'Responsive notes app',
    image: '/work/keeperapp-screenshot.png',
    alt: 'Keeper App notes interface',
    description: 'I made a lightweight notes interface inspired by Google Keep, with a responsive layout and create and delete interactions.',
    stack: 'React · Material UI',
    links: [
      { label: 'Live demo', href: 'https://techieniladri.github.io/KeeperApp/' },
      { label: 'Source code', href: 'https://github.com/techieNiladri/KeeperApp' },
    ],
  },
];

const services = [
  { number: '01', title: 'A clear first website', text: 'I can build a focused, mobile-friendly landing page that explains what your business does and makes it easy for customers to contact you.' },
  { number: '02', title: 'A website refresh', text: 'I can help improve an existing small-business website so its layout, message, and next steps are easier to understand on a phone or desktop.' },
  { number: '03', title: 'A useful web interface', text: 'For a small app or internal tool, I can work with you to shape the core flow and build a practical frontend around it.' },
];

const steps = ['We talk through your business, customers, and what the website should help them do.', 'I outline the pages, content, and visual direction so we agree on the shape before I build.', 'I build the agreed experience and share a working version for your feedback.', 'I refine the details, check the main screen sizes, and prepare the finished site for handoff or launch.'];

export default function App() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Niladri Dey home"><span className="wordmark-mark">N.</span><span>Niladri Dey</span></a>
        <nav aria-label="Main navigation"><a href="#services">Services</a><a href="#work">Work</a><a href="#process">How I work</a></nav>
        <a className="header-cta" href="#contact">Let’s talk <ArrowUpRight size={15} aria-hidden="true" /></a>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Independent web developer <span className="eyebrow-divider">/</span> Kolkata, India</p>
          <h1>I build thoughtful<br /><span>web experiences</span><br />for growing businesses.</h1>
          <p className="hero-intro">I help local businesses and independent teams turn a clear idea into a polished, useful website. I focus on the details people notice: a message that makes sense, a smooth mobile experience, and a dependable path to get in touch.</p>
          <div className="hero-actions"><a className="button button-dark" href="#contact">Tell me what you need <ArrowUpRight size={17} aria-hidden="true" /></a><a className="text-link" href="#work">See my work <ArrowDownRight size={16} aria-hidden="true" /></a></div>
        </div>
        <div className="hero-art" aria-label="Abstract layered shapes illustrating a web page layout" role="img">
          <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
          <div className="art-window"><div className="art-window-top"><span /><span /><span /><i>nd.studio</i></div><div className="art-window-content"><div className="art-kicker">A GOOD IDEA, MADE CLEAR</div><div className="art-line art-line-large" /><div className="art-line art-line-large short" /><div className="art-line" /><div className="art-action" /><div className="art-cards"><span /><span /><span /></div></div></div>
          <div className="art-caption"><span>DESIGN WITH PURPOSE</span><span>01 / 03</span></div>
        </div>
        <a className="scroll-cue" href="#services">SCROLL TO EXPLORE <ArrowDownRight size={15} aria-hidden="true" /></a>
      </section>

      <section className="services section-wrap" id="services">
        <div className="section-heading"><p className="eyebrow">WHAT I CAN HELP WITH <span className="eyebrow-divider">/</span> 01—03</p><h2>Good websites make<br />the next step <em>obvious.</em></h2><p className="section-lead">I work best with a clear goal, open communication, and a practical scope. Here are a few ways I can help.</p></div>
        <div className="service-list">{services.map((service) => <article className="service-row" key={service.number}><span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.text}</p><ArrowUpRight className="service-arrow" size={20} aria-hidden="true" /></article>)}</div>
      </section>

      <section className="work section-wrap" id="work">
        <div className="work-heading"><div><p className="eyebrow">SELECTED WORK <span className="eyebrow-divider">/</span> 02—03</p><h2>Things I’ve <em>made.</em></h2></div><p className="section-lead">A couple of projects that show how I think through an interface and bring it to life.</p></div>
        <div className="project-grid">{projects.map((project, index) => <article className={`project-card project-${index + 1}`} key={project.name}>
          <a className="project-image" href={project.links[0].href} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}><img src={project.image} alt={project.alt} loading="lazy" /><span className="image-open"><ArrowUpRight size={19} aria-hidden="true" /></span></a>
          <div className="project-info"><div className="project-meta"><span>{project.type}</span><span>0{index + 1}</span></div><h3>{project.name}</h3><p>{project.description}</p><p className="project-stack">{project.stack}</p><div className="project-links">{project.links.map((link) => <a href={link.href} target="_blank" rel="noreferrer" key={link.label}>{link.label}<ArrowUpRight size={14} aria-hidden="true" /></a>)}</div></div>
        </article>)}</div>
      </section>

      <section className="approach section-wrap" id="process">
        <div className="approach-intro"><p className="eyebrow">A STRAIGHTFORWARD PROCESS <span className="eyebrow-divider">/</span> 03—03</p><h2>Clear steps.<br /><em>Good collaboration.</em></h2><p>I keep the work visible, ask questions early, and make decisions with your goals in mind.</p></div>
        <ol className="steps-list">{steps.map((step, index) => <li key={step}><span className="step-check"><Check size={15} aria-hidden="true" /></span><span className="step-number">0{index + 1}</span><p>{step}</p></li>)}</ol>
      </section>

      <section className="contact section-wrap" id="contact"><div className="contact-top"><p className="eyebrow"><span className="status-dot" /> AVAILABLE FOR SELECT PROJECTS</p><span className="contact-index">LET’S MAKE SOMETHING USEFUL</span></div><h2>Have a website<br />in <em>mind?</em></h2><div className="contact-bottom"><p>Tell me a little about your business and what you’re hoping to improve. I’ll get back to you by email.</p><a className="button button-light" href="mailto:deyniladri937@gmail.com?subject=Website%20project%20enquiry">Start a conversation <ArrowUpRight size={17} aria-hidden="true" /></a></div><div className="contact-details"><a href="mailto:deyniladri937@gmail.com"><Mail size={15} aria-hidden="true" /> deyniladri937@gmail.com</a><span><MapPin size={15} aria-hidden="true" /> Kolkata, India · Open to remote</span></div></section>

      <footer className="site-footer"><a className="wordmark" href="#home"><span className="wordmark-mark">N.</span><span>Niladri Dey</span></a><p>I build useful websites with care.</p><div><a href="https://github.com/techieNiladri" target="_blank" rel="noreferrer">GitHub <ArrowRight size={13} aria-hidden="true" /></a><a href="https://www.linkedin.com/in/niladri-dey-280710d/" target="_blank" rel="noreferrer">LinkedIn <ArrowRight size={13} aria-hidden="true" /></a><span>© {new Date().getFullYear()} Niladri Dey</span></div></footer>
    </main>
  );
}

