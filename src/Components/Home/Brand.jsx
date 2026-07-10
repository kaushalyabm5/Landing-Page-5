import React from 'react';

// 1. Import your 5 new PNG assets
import img1 from '../../assets/brand-logos/1.1.png';
import img2 from '../../assets/brand-logos/2.2.png';
import img3 from '../../assets/brand-logos/3.3.png';
import img4 from '../../assets/brand-logos/4.png';
import img5 from '../../assets/brand-logos/5.png';

export default function Brand() {
  // 2. Define the new list of logos
  const logos = [
    { src: img1, alt: 'Logo 1' },
    { src: img2, alt: 'Logo 2' },
    { src: img3, alt: 'Logo 3' },
    { src: img4, alt: 'Logo 4' },
    { src: img5, alt: 'Logo 5' },
  ];

  // 3. Reusable component for the logo items
  const LogoTrack = () => (
    <div className="flex gap-24 items-center whitespace-nowrap">
      {logos.map((logo, index) => (
        <React.Fragment key={index}>
          <div className="h-8 flex items-center hover:opacity-70 transition-opacity duration-300">
            <img src={logo.src} alt={logo.alt} className="h-full w-auto object-contain" />
          </div>
          {/* Divider Dot */}
          <span className="text-white/10 text-xs">✦</span>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="w-full border-y border-neutral-200 bg-white py-10 overflow-hidden select-none relative z-20">
      {/* Infinite Scrolling Track */}
      <div className="flex gap-24 w-max animate-[brandScroll_32s_linear_infinite] hover:[animation-play-state:paused] items-center text-[var(--main-green-color)]">
        
        <LogoTrack />
        
        {/* Duplicate for infinite loop */}
        <div aria-hidden="true" className="flex gap-24 items-center whitespace-nowrap">
          <LogoTrack />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes brandScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
}