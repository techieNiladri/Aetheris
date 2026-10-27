import React from 'react';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, Menu } from 'lucide-react';

const projects = [
  {
    name: 'Neural-Decider',
    type: 'AI-assisted reflection experiment',
    image: './work/neural-decider-screenshot.png',
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
    image: './work/keeperapp-screenshot.png',
    alt: 'Keeper App notes interface',
    description: 'I made a lightweight notes interface inspired by Google Keep, with a responsive layout and create and delete interactions.',
    stack: 'React · Material UI',
    links: [
      { label: 'Live demo', href: 'https://techieniladri.github.io/KeeperApp/' },
      { label: 'Source code', href: 'https://github.com/techieNiladri/KeeperApp' },
    ],
  },
  {
    name: 'Royal Shef Hotel',
    type: 'Multi-page hospitality concept',
    image: './work/royal-shef-concept.svg',
    alt: 'Concept cover for my Royal Shef Hotel website design',
    description: 'I explored a hotel website across rooms, dining, amenities, and contact pages. The date and guest controls are visual only; the concept does not process reservations.',
    stack: 'Multi-page frontend concept · Booking flow not implemented',
    links: [
      { label: 'View concept', href: 'https://royal-shef-hotel-web-109l.bolt.host/' },
    ],
  },
  {
    name: 'Above the Fold',
    type: 'Landing-page design experiment',
    image: './work/above-the-fold-cover.svg',
    alt: 'Concept cover for my Above the Fold landing-page experiment',
    description: 'I use this frontend experiment to explore clear message hierarchy, page rhythm, and focused calls to action. It is a design study, not a measured conversion case study.',
    stack: 'React · Vite · Tailwind CSS · Framer Motion',
    links: [
      { label: 'View my experiment', href: './above-the-fold/index.html' },
    ],
  },
];

const featuredProjects = projects.filter(({ name }) =>
  name === 'Neural-Decider' || name === 'Above the Fold',
);

const services = [
  { title: 'A clear first website', text: 'I can build a focused, mobile-friendly landing page that explains what your business does and makes it easy for customers to contact you.' },
  { title: 'A website refresh', text: 'I can improve an existing small-business website so its layout, message, and next steps are easier to understand on a phone or desktop.' },
  { title: 'A useful web interface', text: 'For a small app or internal tool, I can help shape the core flow and build a practical frontend around it.' },
];

const steps = [
  'I start by talking with you about your business, customers, and what the website should help them do.',
  'I outline the pages, content, and visual direction so we agree on the shape before I build.',
  'I build the agreed experience and share a working version for your feedback.',
  'I refine the details, check the main screen sizes, and prepare the finished site for handoff or launch.',
];

const navigation = [
  { id: 'home', label: 'Home', href: './' },
  { id: 'services', label: 'Services', href: './services.html' },
  { id: 'work', label: 'Work', href: './work.html' },
  { id: 'about', label: 'About', href: './about.html' },
  { id: 'contact', label: 'Contact', href: './contact.html' },
] as const;

type PageId = (typeof navigation)[number]['id'];

function NavigationLinks({ currentPage }: { currentPage: PageId }) {
  return <>{navigation.map((item) => <a key={item.id} href={item.href} aria-current={item.id === currentPage ? 'page' : undefined}>{item.label}</a>)}</>;
}

function SiteHeader({ currentPage }: { currentPage: PageId }) {
  return (
    <header className="site-header">
      <nav className="desktop-nav" aria-label="Main navigation"><NavigationLinks currentPage={currentPage} /></nav>
      <details className="mobile-menu">
        <summary><Menu size={16} aria-hidden="true" /><span>Menu</span></summary>
        <nav className="mobile-menu-panel" aria-label="Mobile navigation"><NavigationLinks currentPage={currentPage} /></nav>
      </details>
      <a className="header-cta" href="./contact.html">Let’s talk <ArrowUpRight size={15} aria-hidden="true" /></a>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <a className="footer-signature-link" href="./" aria-label="Back to the home page"><img className="footer-signature" src="./signature.png" alt="My handwritten signature" /></a>
      <p>I build useful websites with care.</p>
      <div className="footer-links">
        <a href="https://github.com/techieNiladri" target="_blank" rel="noreferrer">GitHub <ArrowRight size={13} aria-hidden="true" /></a>
        <a href="https://www.linkedin.com/in/niladri-dey-280710d/" target="_blank" rel="noreferrer">LinkedIn <ArrowRight size={13} aria-hidden="true" /></a>
        <a href="https://techieniladri.github.io/niladridey_portfolio/" target="_blank" rel="noreferrer">My professional portfolio <ArrowRight size={13} aria-hidden="true" /></a>
        <span>© {new Date().getFullYear()} Niladri Dey</span>
      </div>
    </footer>
  );
}

function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: React.ReactNode; children: React.ReactNode }) {
  return <section className="page-intro section-wrap"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><div className="page-intro-copy">{children}</div></section>;
}

function ProjectCard({ project }: { project: (typeof projects)[number]; key?: React.Key }) {
  return (
    <article className="project-card">
      <a className="project-image" href={project.links[0].href} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}>
        <img src={project.image} alt={project.alt} loading="lazy" />
        <span className="image-open"><ArrowUpRight size={19} aria-hidden="true" /></span>
      </a>
      <div className="project-info">
        <div className="project-meta"><span>{project.type}</span></div>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <p className="project-stack">{project.stack}</p>
        <div className="project-links">{project.links.map((link) => <a href={link.href} target="_blank" rel="noreferrer" key={link.label}>{link.label}<ArrowUpRight size={14} aria-hidden="true" /></a>)}</div>
      </div>
    </article>
  );
}

function ServiceRows() {
  return <div className="service-list">{services.map((service) => <article className="service-row" key={service.title}><h2>{service.title}</h2><p>{service.text}</p></article>)}</div>;
}

function HomePage() {
  return <>
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> Kolkata, India</p>
        <h1>I build thoughtful<br /><span>web experiences</span><br />for growing businesses.</h1>
        <p className="hero-intro">I help local businesses and independent teams turn a clear idea into a polished, useful website. I focus on the details people notice: a message that makes sense, a smooth mobile experience, and a dependable path to get in touch.</p>
        <div className="hero-actions"><a className="button button-dark" href="./contact.html">Tell me what you need <ArrowUpRight size={17} aria-hidden="true" /></a><a className="text-link" href="./work.html">See my work <ArrowDownRight size={16} aria-hidden="true" /></a></div>
      </div>
      <div className="hero-art" aria-label="Abstract layered shapes illustrating a web page layout" role="img">
        <div className="art-window"><div className="art-window-top"><span /><span /><span /><i>SITE PREVIEW</i></div><div className="art-window-content"><div className="art-kicker">A GOOD IDEA, MADE CLEAR</div><div className="art-line art-line-large" /><div className="art-line art-line-large short" /><div className="art-line" /><div className="art-action" /><div className="art-cards"><span /><span /><span /></div></div></div>
      </div>

    </section>

    <section className="home-services section-wrap">
      <div className="home-section-heading"><p className="eyebrow">WHAT I CAN HELP WITH</p><h2>Good websites make<br />the next step <em>obvious.</em></h2><a className="text-link" href="./services.html">Explore my services <ArrowUpRight size={15} aria-hidden="true" /></a></div>
      <div className="home-service-grid">{services.map((service) => <article key={service.title}><h3>{service.title}</h3><p>{service.text}</p></article>)}</div>
    </section>

    <section className="work section-wrap">
      <div className="work-heading"><div><p className="eyebrow">SELECTED WORK</p><h2>Things I’ve <em>made.</em></h2></div><a className="text-link" href="./work.html">Explore my work <ArrowUpRight size={15} aria-hidden="true" /></a></div>
      <div className="project-grid">{featuredProjects.map((project) => <ProjectCard key={project.name} project={project} />)}</div>
    </section>
  </>;
}

function ServicesPage() {
  return <>
    <PageIntro eyebrow="SERVICES" title={<>A clear website<br />for the work <em>you do.</em></>}>
      <p>I shape each project around your customers, the information they need, and the next step you want them to take. I’ll help define the right scope before I start building.</p>
    </PageIntro>
    <section className="services section-wrap">
      <div className="section-heading"><p className="eyebrow">WAYS I CAN HELP</p><h2>Focused work.<br /><em>Useful outcomes.</em></h2><p className="section-lead">I take on small, clearly scoped projects and keep you involved as the site takes shape.</p></div>
      <ServiceRows />
    </section>
    <section className="service-details section-wrap">
      <div><p className="eyebrow">WHAT I PLAN FOR</p><h2>Every page earns<br />its <em>place.</em></h2></div>
      <div className="service-details-copy"><p>I plan the page structure and content flow with you, so visitors can find the information they need without digging through unrelated sections.</p><ul><li>Page structure and content hierarchy</li><li>Mobile-first layouts and accessible controls</li><li>Responsive implementation and handoff</li></ul></div>
    </section>
  </>;
}

function WorkPage() {
  return <>
    <PageIntro eyebrow="WORK" title={<>A few things<br />I’ve <em>built.</em></>}>
      <p>These projects show the kinds of interfaces and software flows I like working through. I describe what each one does and link directly to the demo or source.</p>
    </PageIntro>
    <section className="work section-wrap work-page">
      <div className="project-grid">{projects.map((project) => <ProjectCard key={project.name} project={project} />)}</div>
      <div className="broader-portfolio"><p>I share more about my development background and current projects in my professional portfolio.</p><a className="text-link" href="https://techieniladri.github.io/niladridey_portfolio/" target="_blank" rel="noreferrer">View my professional portfolio <ArrowUpRight size={15} aria-hidden="true" /></a></div>
    </section>
  </>;
}

function AboutPage() {
  return <>
    <PageIntro eyebrow="ABOUT & PROCESS" title={<>I care about how<br />the whole flow <em>works.</em></>}>
      <p>I’m Niladri, based in Kolkata. I build interfaces and full-stack projects by thinking through the user journey, the data behind it, and the small details that make the experience dependable.</p>
    </PageIntro>
    <section className="about-grid section-wrap">
      <div className="about-copy"><p className="eyebrow">HOW I THINK ABOUT THE WORK</p><h2>A screen is one part<br />of the <em>system.</em></h2><p>I like understanding what a person is trying to do, what information the interface needs, and what should happen when a step succeeds or fails. That thinking shapes the code and the experience together.</p><p>I’m early in my development career, so I keep my claims grounded in the work I’ve actually built. I’m continuing to deepen my frontend, backend, and data skills through practical projects.</p><a className="text-link" href="https://techieniladri.github.io/niladridey_portfolio/" target="_blank" rel="noreferrer">More about me and my work <ArrowUpRight size={15} aria-hidden="true" /></a></div>
      <aside className="about-note"><p className="eyebrow">MY APPROACH</p><ul><li><Check size={16} aria-hidden="true" /><span>I clarify the goal before choosing a solution.</span></li><li><Check size={16} aria-hidden="true" /><span>I keep the interface and the data flow in view.</span></li><li><Check size={16} aria-hidden="true" /><span>I make room for feedback and refine the details.</span></li></ul></aside>
    </section>
    <section className="approach section-wrap">
      <div className="approach-intro"><p className="eyebrow">HOW A PROJECT MOVES</p><h2>Clear steps.<br /><em>Good collaboration.</em></h2><p>I keep the work visible, ask questions early, and make decisions with your goals in mind.</p></div>
      <ol className="steps-list">{steps.map((step) => <li key={step}><span className="step-check"><Check size={15} aria-hidden="true" /></span><p>{step}</p></li>)}</ol>
    </section>
  </>;
}

function ContactBand() {
  return <section className="contact-band section-wrap"><p className="eyebrow"><span className="status-dot" /> HAVE A PROJECT IN MIND?</p><div className="contact-band-row"><h2>Let’s make it <em>clear.</em></h2><a className="button button-light" href="./contact.html">Talk about your project <ArrowUpRight size={17} aria-hidden="true" /></a></div></section>;
}

function ContactPage() {
  return <>
    <PageIntro eyebrow="CONTACT" title={<>Tell me what<br />you’re <em>working on.</em></>}>
      <p>Share the goal, who the website is for, and what you want it to help people do. I’ll reply by email so we can work out whether the scope is a good fit.</p>
    </PageIntro>
    <section className="contact-page section-wrap">
      <div className="contact-page-primary"><p className="eyebrow">START A CONVERSATION</p><a className="contact-email" href="mailto:deyniladri937@gmail.com?subject=Website%20project%20enquiry">deyniladri937@gmail.com <ArrowUpRight size={22} aria-hidden="true" /></a><p>I handle enquiries by email; this site doesn’t collect or store form submissions.</p></div>
      <div className="contact-page-details"><div><span>LOCATION</span><p>Kolkata, India</p></div><div><span>ELSEWHERE</span><p><a href="https://www.linkedin.com/in/niladri-dey-280710d/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} aria-hidden="true" /></a><a href="https://github.com/techieNiladri" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} aria-hidden="true" /></a></p></div></div>
    </section>
    <ContactBand />
  </>;
}

export default function App() {
  const root = document.getElementById('root');
  const currentPage = (root?.getAttribute('data-page') ?? 'home') as PageId;
  const pageContent = {
    home: <HomePage />,
    services: <ServicesPage />,
    work: <WorkPage />,
    about: <AboutPage />,
    contact: <ContactPage />,
  }[currentPage] ?? <HomePage />;

  return <><SiteHeader currentPage={currentPage} /><main>{pageContent}</main><SiteFooter /></>;
}
