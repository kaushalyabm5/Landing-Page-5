import React from 'react';

// Importing your brand assets
import logo1 from '../../assets/brand-logos/1.1.png';
import logo2 from '../../assets/brand-logos/2.2.png';
import logo3 from '../../assets/brand-logos/3.3.png';
import logo4 from '../../assets/brand-logos/4.4.png';
import logo5 from '../../assets/brand-logos/5.5.png';

const Brands1 = () => {
  const brands = [
    { src: logo1, alt: "Brand One" },
    { src: logo2, alt: "Brand Two" },
    { src: logo3, alt: "Brand Three" },
    { src: logo4, alt: "Brand Four" },
    { src: logo5, alt: "Brand Five" },
  ];

  return (
    <section className="w-full bg-white py-20 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center gap-12">
          {brands.map((brand, index) => (
            <div 
              key={index} 
              className="w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 ease-in-out cursor-pointer"
            >
              <img 
                src={brand.src} 
                alt={brand.alt} 
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands1;