import React from 'react';
import { motion } from 'framer-motion';
import { ASSETS } from '../data/assets';

export const About = () => {
  return (
    <div className="container mx-auto px-6 md:px-12 h-full flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
      {/* Text Content */}
      <div className="lg:w-1/2 relative pt-12 lg:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center lg:text-left flex flex-col gap-8"
        >
          {/* Headline - Large Serif */}
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] text-charcoal leading-[1.15]">
            A pioneering Jawai wildlife experience, set in the land of leopards, culture & ancient granite hills.
          </h2>

          {/* Sub-headline - Medium Sans-serif */}
          <h3 className="font-sans text-lg md:text-xl text-charcoal/90 font-medium tracking-wide leading-relaxed">
            Discover the raw beauty of Jawai, where wildlife, rural heritage, and nature coexist in extraordinary harmony.
          </h3>

          {/* Body Text - Light Color, Smaller */}
          <div className="relative">
            <p className="text-gray-500 font-light text-base md:text-lg leading-loose max-w-xl mx-auto lg:mx-0 text-justify lg:text-left">
              Jawai Wildframe curates immersive safaris through one of India’s most enchanting wildernesses — a landscape where leopards roam the granite hills, migratory birds fill the skies, and local communities live in rare harmony with wildlife. Guided by expert naturalist Balveer Singh Mewar, every experience blends authenticity, conservation, and deep storytelling.
            </p>
            
            {/* Minimal Illustrated Leopard Icon - Bottom Right */}
            <div className="flex justify-center lg:justify-end mt-10 opacity-80">
               <img 
                 src="https://cdn-icons-png.flaticon.com/512/15707/15707379.png" 
                 alt="Leopard Icon" 
                 className="w-16 h-16 object-contain opacity-60 hover:opacity-100 transition-opacity duration-500" 
               />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Images Grid - Preserving structure but ensuring smooth transitions */}
      <div className="lg:w-1/2 relative h-[50vh] lg:h-[70vh] w-full">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-0 right-0 w-3/4 h-3/4 shadow-2xl overflow-hidden rounded-sm"
        >
          <img 
            src={ASSETS.about.safariSilhouette} 
            alt="Safari Silhouette" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s] ease-out"
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-0 left-0 w-2/3 h-2/3 shadow-2xl overflow-hidden rounded-sm border-4 border-warm-white"
        >
          <img 
            src={ASSETS.about.luxuryDeck} 
            alt="Luxury Deck" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s] ease-out"
          />
        </motion.div>
      </div>
    </div>
  );
};
