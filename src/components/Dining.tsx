import React, { useRef } from 'react';
import { Section, FadeIn } from './ui/Section';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Dining = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <Section id="dining" fullWidth className="p-0 py-0 overflow-hidden">
      <div ref={ref} className="relative h-[90vh] overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80" 
            alt="Bush Dinner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
        
        <div className="absolute inset-0 flex items-center justify-center relative z-10">
          <FadeIn className="bg-warm-white/95 backdrop-blur-sm p-12 md:p-20 max-w-3xl text-center mx-4 shadow-2xl border border-white/20">
            <span className="text-deep-red uppercase tracking-widest text-sm font-bold">Culinary Arts</span>
            <h2 className="font-serif text-4xl md:text-6xl text-charcoal my-8">
              Dining Under the Stars
            </h2>
            <p className="text-gray-600 font-light text-lg mb-10 leading-relaxed">
              Savor the authentic flavors of Rajasthan, prepared with fresh, farm-to-table ingredients. Whether it's a breakfast in the bush or a romantic candlelight dinner by the lake, every meal is an occasion.
            </p>
            <button className="px-10 py-4 border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300 uppercase tracking-widest text-xs font-bold">
              View Menu
            </button>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
};
