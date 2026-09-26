import React from 'react';

export const ComingSoonBanner: React.FC = () => {
  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center overflow-hidden rounded-[inherit] bg-white/60 backdrop-blur-[2px]">
      <img
        src="/images/coming-soon.png"
        alt="Coming Soon"
        className="w-[150%] max-w-none select-none pointer-events-none drop-shadow-xl"
      />
    </div>
  );
};
