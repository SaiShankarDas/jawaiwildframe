import React from 'react';

interface CardSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  index?: number;
}

export const CardSection: React.FC<CardSectionProps> = ({ children, className = '', id, index = 0 }) => {
  return (
    <div 
      id={id}
      className={`sticky top-0 h-screen min-h-screen flex flex-col overflow-hidden shadow-[0_-50px_100px_rgba(0,0,0,0.2)] rounded-t-3xl ${className}`}
      style={{ 
        zIndex: index * 10,
        marginTop: index === 0 ? 0 : '-5vh' // Slight overlap visual
      }}
    >
      <div className="flex-1 w-full h-full overflow-y-auto scrollbar-hide">
        {/* Changed justify-center to justify-start and reduced pt-32 to pt-24 to remove gap */}
        <div className="min-h-full flex flex-col justify-start pt-24 pb-20">
          {children}
        </div>
      </div>
    </div>
  );
};
