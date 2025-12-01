import React from 'react';
import { Section, FadeIn } from './ui/Section';

export const Conservation = () => {
  return (
    <Section id="conservation" className="bg-sandstone/30">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-8">
          <FadeIn>
            <span className="text-deep-red uppercase tracking-widest text-sm font-bold">Our Philosophy</span>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mt-4 leading-tight">
              Guardians of the Granite Hills
            </h2>
            <p className="text-gray-700 font-light text-lg leading-relaxed">
              At Jawai Wildframe, conservation is not just a concept; it is the foundation of our existence. We believe in a model of tourism that gives back more than it takes.
            </p>
            <p className="text-gray-700 font-light text-lg leading-relaxed">
              Through close partnerships with the local communities and responsible land management, we ensure that the leopards of Jawai continue to thrive in their natural habitat, coexisting peacefully with the people who share this land.
            </p>
            <div className="pt-4">
              <button className="text-charcoal uppercase tracking-widest text-sm font-bold border-b border-charcoal pb-1 hover:text-deep-red hover:border-deep-red transition-colors">
                Learn About Our Initiatives
              </button>
            </div>
          </FadeIn>
        </div>
        <div className="lg:col-span-7 relative">
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&q=80" 
                alt="Community" 
                className="w-full h-64 object-cover translate-y-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e596e35?auto=format&fit=crop&q=80" 
                alt="Leopard Conservation" 
                className="w-full h-64 object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
};
