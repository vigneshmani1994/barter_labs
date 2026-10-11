"use client";

import { ArrowRight } from "lucide-react";

const primaryWords = ["BARTER LABS", "BUILD", "LEARN", "COLLABORATE", "SHIP", "EXPERIENCE"];
const secondaryWords = ["PROJECTS", "WORKSHOPS", "INTERNSHIPS", "INDUSTRY EXPERIENCE"];

function BarterLabsLogo() {
  return (
    <div className="barter-logo">
      <img
        className="barter-logo-image"
        src={`${process.env.NODE_ENV === "production" ? "/barter_labs" : ""}/images/barter-labs-logo.webp`}
        alt="Barter Labs — People × AI × Real World Projects"
        width={400}
        height={136}
      />
    </div>
  );
}

function MarqueeTrack({ words, secondary = false }: { words: string[]; secondary?: boolean }) {
  const content = [...words, ...words, ...words, ...words];
  return <div className={`marquee-track ${secondary ? "marquee-secondary" : ""}`} aria-hidden="true">
    {content.map((word, index) => <span className="marquee-word" key={`${word}-${index}`}>{word}<b>{secondary ? " → " : " · "}</b></span>)}
  </div>;
}

export default function BarterLabsSection() {
  return <section id="barter-labs" className="barter-section">
    <div className="barter-topline"><span>03 / LEARNING INITIATIVE</span><span>WITHIN ARCHER WAVE</span></div>
    <div className="barter-content">
      <div className="barter-brand-line"><BarterLabsLogo /><span className="barter-label">AN ARCHER WAVE INITIATIVE</span></div>
      <h2>Learn by<br /><em>building.</em></h2>
      <div className="barter-bottom">
        <p className="barter-statement">Learn by building.<br /><span>Experience how technology is actually built.</span></p>
        <div className="barter-description"><p>Barter Labs is our project-based learning initiative, built around hands-on technology, real projects and industry experience.</p><a href="#contact" className="barter-cta">Explore Barter Labs <ArrowRight size={17} /></a></div>
      </div>
    </div>
    <div className="marquee-shell"><MarqueeTrack words={primaryWords} /></div>
    <div className="marquee-shell secondary-shell"><MarqueeTrack words={secondaryWords} secondary /></div>
    <div className="barter-footerline"><span>LEARN BY MAKING</span><span>BUILD SOMETHING REAL ↗</span></div>
  </section>;
}
