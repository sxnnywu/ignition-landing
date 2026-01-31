// src/components/sections/Hero.jsx

// imports
import React from 'react';
import './Hero.css';
import sign from '../../assets/illustrations/hero-sign.svg';
import signs from '../../assets/illustrations/hero-signs.svg';
import tree from '../../assets/illustrations/hero-tree.svg';

// Hero component
export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero">

      {/* left */}
      <div className="left">

        {/* tree */}
        <img src={tree} alt="Palm Tree Illustration" className="hero-tree" />

        {/* signs */}
        <div className="signs-container">
          <img src={signs} alt="Signs Illustration" className="hero-signs" />
          <p className="about" onClick={() => scrollToSection('about-section')}>About</p>
          <p className="faq" onClick={() => scrollToSection('faq-section')}>FAQ</p>
          <p className="gallery" onClick={() => scrollToSection('past-section')}>Gallery</p>
          <p className="stats" onClick={() => scrollToSection('impact-section')}>Stats</p>
          <p className="sponsors" onClick={() => scrollToSection('sponsors-section')}>Sponsors</p>
          <p className="team" onClick={() => scrollToSection('team-section')}>Team</p>
        </div>

        {/* sign */}
        <div className="sign-container">
          <img src={sign} alt="Sign Illustration" className="hero-sign" />

          {/* Curved texwxt over the oval using SVG textPath */}
          <svg className="ignition-svg" viewBox="0 0 640 140" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              {/* mobile/768 curve */}
              <path id="arcPathMobile" d="M20,100 A320,75 0 0,1 620,100" />
              {/* desktop curve (more round) */}
              <path id="arcPathDesktop" d="M20,100 A320,55 0 0,1 620,100" />
            </defs>
            <text textAnchor="middle" className="ignition-text-mobile">
              <textPath xlinkHref="#arcPathMobile" startOffset="50%" className="ignition-text">IGNITION HACKS</textPath>
            </text>
            <text textAnchor="middle" className="ignition-text-desktop">
              <textPath xlinkHref="#arcPathDesktop" startOffset="50%" className="ignition-text">IGNITION HACKS</textPath>
            </text>
              {/* Version placed slightly below the arc, centered and nudged right */}
              <text x="320" y="105" textAnchor="middle" className="version-text">V. 7</text>
          </svg>
        </div>

      </div>

      {/* right */}
      <div className="right">

        {/* heading */}
        <h1>Arts & Technology <br />Hackathon</h1>

        {/* date */}
        <p>August 15-18, 2026</p>

        {/* button */}
        <button>Apply Now!</button>

      </div>

      {/* What is Ignition Hacks section */}
      <div className="hero-description" id="about-section">
        <h2>What is Ignition Hacks</h2>
        <p>Ignition Hacks is a student-led hackathon built to empower the next generation of innovative minds. This year, we are creating more than just a hackathon, we want to use our platform to build an organization supporting education and opportunities for students to help.</p>
      </div>

    </section>
  );
}