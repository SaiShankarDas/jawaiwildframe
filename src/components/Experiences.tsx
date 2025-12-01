import React from 'react';
import { Section, FadeIn } from './ui/Section';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Leopard Safari",
    image: "https://images.unsplash.com/photo-1603499151566-489a9419459f?auto=format&fit=crop&q=80",
    desc: "Track the ghosts of the granite hills."
  },
  {
    title: "Luxury Tented Stay",
    image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&q=80",
    desc: "Sleep under canvas, surrounded by nature."
  },
  {
    title: "Jawai Village Walk",
    image: "https://images.unsplash.com/photo-1591533985313-a431526563bc?auto=format&fit=crop&q=80",
    desc: "Walk with the Rabari shepherds."
  },
  {
    title: "Hill Sunrise",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80",
    desc: "Golden hour atop the ancient rocks."
  },
  {
    title: "Bush Dinner",
    image: "https://images.unsplash.com/photo-1533254773296-862a8151c957?auto=format&fit=crop&q=80",
    desc: "Dining under a canopy of stars."
  },
  {
    title: "Birdwatching",
    image: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&q=80",
    desc: "Discover the avian life of the dam."
  }
];

export const Experiences = () => {
  return (
    <Section id="experiences" className="bg-white">
      <div className="text-center mb-16">
        <span className="text-desert uppercase tracking-widest text-sm font-bold">Curated Moments</span>
        <h2 className="font-serif text-4xl md:text-5xl text-charcoal mt-4">Signature Experiences</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {experiences.map((exp, index) => (
          <FadeIn key={index} delay={index * 0.1} className="group relative h-[400px] overflow-hidden cursor-pointer">
            <img 
              src={exp.image} 
              alt={exp.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
              <h3 className="font-serif text-2xl mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                {exp.title}
              </h3>
              <p className="text-sm font-light opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
                {exp.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};
