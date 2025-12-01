import React from 'react';
import { Section, FadeIn } from './ui/Section';
import { ParallaxImage } from './ui/ParallaxImage';

const suites = [
  {
    title: "Luxury Stone Cottage",
    desc: "Hewn from local stone and blending seamlessly into the landscape, our cottages offer cool respite and absolute privacy. Featuring private verandas that overlook the wilderness.",
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&q=80",
    features: ["Private Veranda", "En-suite Bath", "Air Conditioning"]
  },
  {
    title: "Signature Tented Suite",
    desc: "Experience the romance of the safari era. Our spacious canvas suites combine old-world charm with modern luxury, featuring handcrafted furniture and sweeping views of the granite hills.",
    image: "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?auto=format&fit=crop&q=80",
    features: ["Canvas Walls", "King Size Bed", "Panoramic Views"]
  }
];

export const Suites = () => {
  return (
    <Section id="stays" className="bg-warm-white">
      <div className="text-center mb-24">
        <FadeIn>
          <span className="text-desert uppercase tracking-widest text-sm font-bold">Accommodations</span>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mt-4">Sanctuaries of Comfort</h2>
        </FadeIn>
      </div>

      <div className="space-y-32">
        {suites.map((suite, index) => (
          <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}>
            <FadeIn className="w-full lg:w-1/2">
              <ParallaxImage 
                src={suite.image} 
                alt={suite.title} 
                height="h-[500px] md:h-[600px]"
                className="shadow-xl"
              />
            </FadeIn>
            <FadeIn delay={0.2} className="w-full lg:w-1/2 space-y-8">
              <h3 className="font-serif text-3xl md:text-5xl text-charcoal leading-tight">{suite.title}</h3>
              <p className="text-gray-600 font-light text-lg leading-relaxed">
                {suite.desc}
              </p>
              <ul className="flex flex-wrap gap-x-8 gap-y-4 pt-4 border-t border-gray-200">
                {suite.features.map((feature, i) => (
                  <li key={i} className="text-xs uppercase tracking-widest text-charcoal/70 font-bold flex items-center">
                    <span className="w-1.5 h-1.5 bg-desert rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="pt-6">
                <button className="px-10 py-4 border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300 uppercase tracking-widest text-xs font-bold">
                  View Details
                </button>
              </div>
            </FadeIn>
          </div>
        ))}
      </div>
    </Section>
  );
};
