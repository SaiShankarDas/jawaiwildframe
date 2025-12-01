import React from 'react';
import { ASSETS } from '../data/assets';
import CircularGallery from './ui/CircularGallery';

export const Gallery = () => {
  // Map existing assets to the format CircularGallery expects
  const galleryItems = ASSETS.gallery.map(item => ({
    image: item.url
  }));

  return (
    <div className="container mx-auto px-6 h-full flex flex-col">
      {/* Header Section - Aligned to top */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-4 md:mb-8">
        <div>
          <span className="text-desert uppercase tracking-widest text-sm font-bold">Visual Journey</span>
          <h2 className="font-serif text-4xl md:text-7xl mt-4">Through the Lens</h2>
        </div>
        <a href="#" className="hidden md:block text-sm uppercase tracking-widest border-b border-white/30 pb-1 hover:text-desert hover:border-desert transition-colors mb-2">
          View All Photos
        </a>
      </div>

      {/* Container for the CircularGallery - Increased height to fill section */}
      <div className="flex-1 w-full relative min-h-[85vh]">
        <CircularGallery 
          items={galleryItems}
          bend={3}
          borderRadius={0.05}
          scrollEase={0.05}
        />
      </div>
    </div>
  );
};
