import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Section } from './ui/Section';

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress within this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effects for images
  // Left image moves slightly faster than scroll
  const yLeft = useTransform(scrollYProgress, [0, 1], ["-10%", "20%"]);
  // Right image moves slower/differently
  const yRight = useTransform(scrollYProgress, [0, 1], ["10%", "-20%"]);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[180vh] bg-warm-white overflow-hidden hidden lg:block"
    >
      {/* Sticky Text Container */}
      <div className="sticky top-0 h-screen flex items-center justify-center z-10 pointer-events-none">
        <div className="max-w-3xl text-center px-6 pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-desert uppercase tracking-widest text-sm font-bold block mb-6">
              The Wilderness
            </span>
            <h2 className="font-serif text-5xl md:text-7xl text-charcoal leading-tight mb-8">
              Rajasthan's most unique <br/> safari experience.
            </h2>
            <div className="w-24 h-0.5 bg-deep-red/60 mx-auto mb-8" />
            <p className="text-gray-600 font-light text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Framed by granite hills and the ancient Aravalli mountain range, the <span className="font-serif italic text-charcoal">Jawai Wildframe</span> experience is defined by the magical intermingling of wildlife and rural village life that has coexisted peacefully for centuries.
            </p>
            <p className="text-gray-600 font-light text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mt-6">
              Encounters with wildlife are punctuated by engagements with local communities and a deep immersion into the local culture. Village walks, horse riding, hiking, temple visits and walking safaris with the Rabari tribe are just some of the ways to connect with this magical land.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Floating Images (Absolute Positioned) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        {/* Left Image - Positioned higher */}
        <motion.div 
          style={{ y: yLeft }}
          className="absolute top-[15%] left-[5%] w-[28vw] h-[35vw] shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1552458742-53994329acde?auto=format&fit=crop&q=80" 
            alt="Safari Silhouette" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Image - Positioned lower */}
        <motion.div 
          style={{ y: yRight }}
          className="absolute top-[55%] right-[5%] w-[28vw] h-[35vw] shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1534234828563-0255139fdb7d?auto=format&fit=crop&q=80" 
            alt="Luxury Deck" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

// Mobile Version (Standard Stack)
const AboutMobile = () => {
  return (
    <Section className="bg-warm-white lg:hidden">
      <div className="space-y-12">
        <div className="relative h-[400px] w-full overflow-hidden shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1552458742-53994329acde?auto=format&fit=crop&q=80" 
            alt="Safari Silhouette" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="text-center px-4">
          <span className="text-desert uppercase tracking-widest text-sm font-bold block mb-4">
            The Wilderness
          </span>
          <h2 className="font-serif text-4xl text-charcoal leading-tight mb-6">
            Rajasthan's most unique safari experience.
          </h2>
          <div className="w-16 h-0.5 bg-deep-red/60 mx-auto mb-6" />
          <p className="text-gray-600 font-light text-lg leading-relaxed">
            Framed by granite hills and the ancient Aravalli mountain range, the Jawai Wildframe experience is defined by the magical intermingling of wildlife and rural village life.
          </p>
        </div>

        <div className="relative h-[400px] w-full overflow-hidden shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1534234828563-0255139fdb7d?auto=format&fit=crop&q=80" 
            alt="Luxury Deck" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Section>
  );
};

// Main Export that switches based on viewport
export const AboutSectionWrapper = () => {
  return (
    <>
      <About />
      <AboutMobile />
    </>
  );
};

// Re-export as default for cleaner imports if needed, 
// but keeping named export to match previous file structure
export { AboutSectionWrapper as default };
