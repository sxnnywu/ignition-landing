// src/pages/Landing.jsx

// imports
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Impact from '../components/sections/Impact';
import Past from '../components/sections/Past';
import Faq from '../components/sections/Faq';
import Sponsors from '../components/sections/Sponsors';
import Team from '../components/sections/Team';
import './Landing.css';

// Landing component
export default function Landing() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Impact />
            <Past />
            <Faq />
            <Sponsors />
            <Team />
            <Footer />
        </>
    )
}