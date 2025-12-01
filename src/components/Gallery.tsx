import React from 'react';
import { ASSETS } from '../data/assets';

export const Gallery = () => {
  return (
    // Changed justify-center to justify-start
    <div className="container mx-auto px-6 h-full flex flex-col justify-start">
      <div className="flex justify-between items-end mb-12">
        <div>
          <span className="text-desert uppercase tracking-widest text-sm font-bold">Visual Journey</span>
          <h2 className="font-serif text-4xl md:text-6xl mt-4">Through the Lens</h2>
        </div>
        <a href="#" className="hidden md:block text-sm uppercase tracking-widest border-b border-white/30 pb-1 hover:text-desert hover:border-desert transition-colors">
          View All Photos
        </a>
      </div>

      <div className="flex overflow-x-auto space-x-6 pb-8 scrollbar-hide snap-x h-[60vh]">
        {ASSETS.gallery.map((img, idx) => (
          <div key={idx} className="flex-none w-[80vw] md:w-[500px] h-full relative group snap-center cursor-pointer overflow-hidden rounded-lg">
            <img 
              src={img.url} 
              alt={img.label} 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 to-transparent">
              <p className="font-serif text-2xl italic text-white">{img.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
