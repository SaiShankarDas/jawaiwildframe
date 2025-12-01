import React from 'react';
import { motion } from 'framer-motion';
import { ASSETS } from '../data/assets';

export const About = () => {
  return (
    <div className="container mx-auto px-6 md:px-12 h-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
      {/* Text Content */}
      <div className="lg:w-1/2 space-y-8 text-center lg:text-left pt-10 lg:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-desert uppercase tracking-widest text-sm font-bold block mb-6">
            The Wilderness
          </span>
          <h2 className="font-serif text-5xl md:text-7xl text-charcoal leading-tight mb-8">
            Rajasthan's most unique <br/> safari experience.
          </h2>
          <div className="w-24 h-0.5 bg-deep-red/60 mx-auto lg:mx-0 mb-8" />
          <p className="text-gray-600 font-light text-lg md:text-xl leading-relaxed">
            Framed by granite hills and the ancient Aravalli mountain range, the <span className="font-serif italic text-charcoal">Jawai Wildframe</span> experience is defined by the magical intermingling of wildlife and rural village life.
          </p>
          <p className="text-gray-600 font-light text-lg md:text-xl leading-relaxed mt-6">
            Encounters with wildlife are punctuated by engagements with local communities and a deep immersion into the local culture.
          </p>
        </motion.div>
      </div>

      {/* Images Grid */}
      <div className="lg:w-1/2 relative h-[50vh] lg:h-[70vh] w-full">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-0 right-0 w-3/4 h-3/4 shadow-2xl overflow-hidden rounded-lg"
        >
          <img 
            src={ASSETS.about.safariSilhouette} 
            alt="Safari Silhouette" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute bottom-0 left-0 w-2/3 h-2/3 shadow-2xl overflow-hidden rounded-lg border-4 border-white"
        >
          <img 
            src={ASSETS.about.luxuryDeck} 
            alt="Luxury Deck" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </motion.div>
      </div>
    </div>
  );
};
