// src/pages/Landing.jsx

// imports
import { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Impact from '../components/sections/Impact';
import Past from '../components/sections/Past';
import Faq from '../components/sections/Faq';
import Sponsors from '../components/sections/Sponsors';
import Team from '../components/sections/Team';
import './Landing.css';

// Landing component
export default function Landing() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    const elementsToReveal = document.querySelectorAll('.reveal-on-scroll');
    elementsToReveal.forEach((elem) => observer.observe(elem));

    return () => {
      elementsToReveal.forEach((elem) => observer.unobserve(elem));
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Impact />
      <Past />
      <Faq />
      <Sponsors />
      <Team />
      <Footer />
    </>
  );
}
