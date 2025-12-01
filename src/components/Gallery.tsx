import React from 'react';
import { Section } from './ui/Section';

const images = [
  { url: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80", label: "Jawai Landscapes" },
  { url: "https://images.unsplash.com/photo-1615963244664-5b845b2025ee?auto=format&fit=crop&q=80", label: "Leopard Sightings" },
  { url: "https://images.unsplash.com/photo-1540541338287-417002060d60?auto=format&fit=crop&q=80", label: "Luxury Interiors" },
  { url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80", label: "Campfire Evenings" },
  { url: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&q=80", label: "Cultural Heritage" },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-charcoal text-white overflow-hidden">
      <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
          <span className="text-desert uppercase tracking-widest text-sm font-bold">Visual Journey</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">Through the Lens</h2>
        </div>
        <a href="#" className="hidden md:block text-sm uppercase tracking-widest border-b border-white/30 pb-1 hover:text-desert hover:border-desert transition-colors">
          View All Photos
        </a>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="flex overflow-x-auto space-x-6 px-6 pb-8 scrollbar-hide snap-x">
        {images.map((img, idx) => (
          <div key={idx} className="flex-none w-[80vw] md:w-[400px] h-[500px] relative group snap-center cursor-pointer">
            <img 
              src={img.url} 
              alt={img.label} 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
              <p className="font-serif text-xl italic">{img.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
