import React from 'react';
import { Section, FadeIn } from './ui/Section';
import { Quote } from 'lucide-react';

export const Reviews = () => {
  return (
    <Section className="bg-warm-white">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <Quote size={48} className="text-desert mx-auto mb-8 opacity-50" />
          <h3 className="font-serif text-2xl md:text-4xl text-charcoal leading-normal italic mb-8">
            "An experience that transcends the ordinary. The connection with nature, the impeccable hospitality, and the sheer beauty of Jawai left us speechless. Truly a wild paradise."
          </h3>
          <div className="flex flex-col items-center">
            <span className="uppercase tracking-widest font-bold text-sm text-charcoal">Sarah & James Mitchell</span>
            <span className="text-gray-500 text-xs mt-1 uppercase tracking-wider">London, UK</span>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
};
