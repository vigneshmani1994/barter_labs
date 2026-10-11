import { ArrowDownRight, ArrowRight, Braces, Cpu, Layers3, Network, Workflow, MoveUpRight } from "lucide-react";
import BarterLabsSection from "@/components/BarterLabsSection";

const capabilities = [
  { number: "01", icon: Braces, title: "Software Engineering", description: "From applications and platforms to backend systems and automation, we build software around how people and businesses actually work.", tags: ["Applications", "Platforms", "Automation"] },
  { number: "02", icon: Cpu, title: "AI & Intelligent Systems", description: "We explore and build practical AI systems — from intelligent automation to data-driven applications.", tags: ["Computer Vision", "Applied AI", "Data Systems"] },
  { number: "03", icon: Network, title: "Enterprise Technology", description: "Deep technical engineering for complex enterprise environments, integrations and business-critical systems.", tags: ["Cloud", "Integrations", "Infrastructure"] },
  { number: "04", icon: Layers3, title: "Product Engineering", description: "Turning ideas into working products through rapid prototyping, iterative development and engineering-led execution.", tags: ["Prototyping", "Build", "Iteration"] },
];

const work = [
  { id: "01", label: "Computer vision · Applied AI", title: "Project Helios", description: "Exploring traffic intelligence from road video, including vehicle detection, motion analysis and road-level signals.", status: "Research & development", visual: "helios" },
  { id: "02", label: "Software · Engineering", title: "More experiments in progress", description: "We build, test and iterate on ideas. More work will be shared here as projects are ready to show.", status: "Ongoing", visual: "systems" },
];

export default function Home() {
  return (
    <main id="top" className="min-h-screen overflow-hidden">
      <header className="site-header">
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#top" className="brand-lockup" aria-label="Archer Wave home">
            <img className="brand-logo" src="./images/archerwave-logo.png" alt="Archer Wave" />
          </a>
          <div className="nav-links">
            <a href="#work">Work</a><a href="#capabilities">Capabilities</a><a href="#barter-labs">Barter Labs</a><a href="#about">About</a>
          </div>
          <a className="nav-contact" href="#contact">Contact <MoveUpRight size={14} /></a>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-grid-lines" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> SOFTWARE <span>·</span> AI <span>·</span> ENGINEERING</div>
            <h1>We build technology<br />for the <em>real world.</em></h1>
            <p className="hero-lede">Software, AI and engineering solutions designed to solve complex problems, improve operations and turn ideas into working products.</p>
            <div className="hero-actions"><a href="#work" className="button-primary">Explore our work <ArrowRight size={17} /></a><a href="#contact" className="button-text">Talk to us <ArrowDownRight size={17} /></a></div>
            <div className="hero-footnote"><span className="footnote-line" /> Independent thinking. Engineering-led execution.</div>
          </div>
          <div className="hero-art orbital-sun" aria-label="Archer Wave symbol with planets orbiting on fixed elliptical tracks">
            <div className="orbit orbit-one" aria-hidden="true" />
            <div className="orbit orbit-two" aria-hidden="true" />
            <div className="orbit orbit-three" aria-hidden="true" />
            <div className="orbit-mover mover-one" aria-hidden="true"><span className="orbit-sphere sphere-blue" /></div>
            <div className="orbit-mover mover-two" aria-hidden="true"><span className="orbit-sphere sphere-cyan" /></div>
            <div className="orbit-mover mover-three" aria-hidden="true"><span className="orbit-sphere sphere-navy" /></div>
            <div className="art-core"><img className="core-logo" src="./images/archerwave-symbol.png" alt="" /></div>
          </div>
        <div className="hero-bottomline"><span>BUILT AROUND REAL PROBLEMS</span><span>SCROLL TO EXPLORE ↓</span><span>ARCHER WAVE LIMITED · 2026</span></div>
      </section>

      <section id="capabilities" className="section-wrap capabilities-section">
        <div className="section-heading">
          <div><p className="section-kicker">01 / CAPABILITIES</p><h2>Technology,<br /><em>built with purpose.</em></h2></div>
          <p className="section-intro">We combine software engineering, AI and enterprise technology to build practical, scalable systems around real-world problems.</p>
        </div>
        <div className="capability-grid">
          {capabilities.map(({ number, icon: Icon, title, description, tags }) => <article className="capability-item" key={number}>
            <div className="capability-top"><span>{number}</span><Icon size={21} strokeWidth={1.5} /></div>
            <h3>{title}</h3><p>{description}</p>
            <div className="tag-row">{tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          </article>)}
        </div>
      </section>

      <section id="work" className="section-wrap work-section">
        <div className="section-heading work-heading"><div><p className="section-kicker">02 / SELECTED WORK</p><h2>Things we’re<br /><em>building.</em></h2></div><p className="section-intro">We don’t just talk about technology. We build, test and iterate on it.</p></div>
        <div className="work-list">
          {work.map(item => <article className="work-card" key={item.id}>
            <div className={`work-visual ${item.visual}`}>
              {item.visual === "helios" ? <><img className="work-photo" src="./images/project-helios.svg" alt="Illustration of Indian city traffic with computer-vision vehicle detection and lane tracking" /><div className="photo-caption"><span>PROJECT HELIOS</span><span>COMPUTER VISION / 01</span></div></> : <><div className="system-lines" /><div className="system-block block-a">INPUT</div><div className="system-block block-b">PROCESS</div><div className="system-block block-c">OUTPUT</div><div className="system-connector" /><div className="vision-hud"><span>AW / LAB</span><span>EXPERIMENT 02</span></div></>}
            </div>
            <div className="work-copy"><div className="work-meta"><span>{item.id} / {item.label}</span><span className="status-dot">{item.status}</span></div><h3>{item.title}</h3><p>{item.description}</p><a href="#contact" className="inline-link">Discuss a project <ArrowRight size={16} /></a></div>
          </article>)}
        </div>
      </section>

      <BarterLabsSection />

      <section id="about" className="about-section">
        <div className="about-inner">
          <div><p className="section-kicker">04 / ABOUT ARCHER WAVE</p><h2>Engineering<br /><em>beyond the obvious.</em></h2></div>
          <div className="about-copy"><p>Archer Wave is a technology company focused on software engineering, AI and enterprise technology.</p><p>We build practical systems around real problems — combining technical depth with rapid experimentation and product-focused thinking.</p><div className="about-signature"><img className="signature-mark" src="./images/archerwave-symbol.png" alt="" /><span>SOFTWARE · AI · ENGINEERING</span></div></div>
        </div>
        <div className="about-index" aria-hidden="true">AW / 04</div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-inner"><p className="section-kicker">05 / CONTACT</p><h2>Have a problem<br /><em>worth solving?</em></h2><p>Tell us what you’re working on. Let’s see what we can build.</p><a href="https://archerwave.in/" className="button-primary">Start a conversation <ArrowRight size={17} /></a><span className="contact-note">Contact details can be added here before launch.</span></div>
        <div className="contact-graphic" aria-hidden="true"><div className="contact-ring ring-one" /><div className="contact-ring ring-two" /><div className="contact-ring ring-three" /><img className="contact-monogram" src="./images/archerwave-symbol.png" alt="" /></div>
      </section>

      <footer className="site-footer">
        <div className="footer-top"><a href="#top" className="brand-lockup"><img className="brand-logo footer-brand-logo" src="./images/archerwave-logo.png" alt="Archer Wave" /></a><p>SOFTWARE · AI · ENGINEERING</p><a href="#top" className="back-top">BACK TO TOP ↑</a></div>
        <div className="footer-bottom"><div><span className="footer-barter">BARTER LABS</span><span>A project-based learning initiative by Archer Wave.</span></div><span>© 2026 Archer Wave Limited. All rights reserved.</span></div>
      </footer>
    </main>
  );
}
