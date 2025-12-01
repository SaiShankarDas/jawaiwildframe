import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSectionWrapper } from './components/About'; // Updated Import
import { Experiences } from './components/Experiences';
import { Suites } from './components/Suites';
import { Conservation } from './components/Conservation';
import { Gallery } from './components/Gallery';
import { Dining } from './components/Dining';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="font-sans text-charcoal bg-charcoal overflow-x-hidden selection:bg-desert selection:text-white">
      <Navbar />
      
      {/* Hero Section - Sticky & Lower Z-Index */}
      <div className="relative z-0">
        <Hero />
      </div>

      {/* Main Content - Slides over Hero */}
      <div className="relative z-10 bg-warm-white shadow-[0_-50px_100px_rgba(0,0,0,0.3)] rounded-t-3xl md:rounded-none mt-[-20px] md:mt-0">
        <AboutSectionWrapper />
        <Experiences />
        <Suites />
        <Conservation />
        <Gallery />
        <Dining />
        <Reviews />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
