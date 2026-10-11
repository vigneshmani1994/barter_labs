"use client";

import { ArrowRight } from "lucide-react";

const primaryWords = ["BARTER LABS", "BUILD", "LEARN", "COLLABORATE", "SHIP", "EXPERIENCE"];
const secondaryWords = ["PROJECTS", "WORKSHOPS", "INTERNSHIPS", "INDUSTRY EXPERIENCE"];

function BarterLabsLogo() {
  return (
    <div className="barter-logo" role="img" aria-label="Barter Labs">
      <svg className="barter-logo-mark" viewBox="0 0 52 52" aria-hidden="true">
        <path d="M7 4h13v17h9c10 0 17 6 17 15S39 48 29 48H7V4Zm13 27v7h9c3 0 5-1 5-4s-2-3-5-3h-9Z" fill="currentColor" />
        <path d="M7 4h13v17" fill="none" stroke="#1765f5" strokeWidth="3" />
      </svg>
      <span className="barter-logo-word"><span>barter</span><span>labs</span></span>
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
