// src/components/sections/Hero.jsx

// imports
import React from 'react';
import './Hero.css';

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

      {/* content */}
      <div className="content">
        <h1>Arts & Technology <br />Hackathon</h1>
        <p>August 15-18, 2026</p>
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