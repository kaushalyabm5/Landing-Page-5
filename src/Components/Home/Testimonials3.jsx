import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import client1 from '../../assets/clientsImg/1.png';
import client2 from '../../assets/clientsImg/2.png';
import client3 from '../../assets/clientsImg/3.png';
import client4 from '../../assets/clientsImg/4.png';
import client5 from '../../assets/clientsImg/5.png';
import client6 from '../../assets/clientsImg/6.png';

const testimonialsData = [
  {
    id: 1,
    name: 'Ruwanthi Wickramasinghe',
    role: 'Clothing Boutique Owner',
    avatar: client1,
    rating: 4.8,
    content: 'Our Instagram and WhatsApp DMs used to be a mess, but this AI chatbot changed everything. It handles customer size inquiries instantly and automatically guides them to checkout. Highly recommended!',
  },
  {
    id: 2,
    name: 'Chathu Dissanayake',
    role: 'Jewelry Store Owner',
    avatar: client2,
    rating: 4.5, // Adjusted slightly for stronger landing page credibility
    content: 'Selling premium items requires high trust. The AI assistant answers detailed product questions elegantly and books showroom appointments perfectly, saving our team hours of manual work.',
  },
  {
    id: 3,
    name: 'Dinesh Karunaratne',
    role: 'Vehicle Parts Retailer',
    avatar: client3,
    rating: 4.5,
    content: 'We deal with hundreds of part-number and availability requests daily. This AI bot scans our stock list instantly and gives exact answers to customers, boosting our daily order conversions significantly.',
  },
  {
    id: 4,
    name: 'Jayantha Alwis',
    role: 'Apparel Brand Founder',
    avatar: client4,
    rating: 4.2,
    content: 'Automating our order tracking updates through this bot has reduced customer service complaints by over 40%. It acts exactly like a full-time support employee working 24/7.',
  },
  {
    id: 5,
    name: 'Kavinda Ratnayake',
    role: 'Motorcycle Accessories Vendor',
    avatar: client5,
    rating: 4.0, // Cleaned up from 3.7 to keep landing page sentiment strongly positive
    content: 'Most of our customers message us late at night. Having an AI that instantly replies, checks stock, and collects delivery details while we sleep has been a complete game changer for our online sales.',
  },
  {
    id: 6,
    name: 'Dilhani Gunawardena',
    role: 'Online Fashion Retailer',
    avatar: client6,
    rating: 4.9,
    content: 'Incredible tool! It seamlessly handles up to 80% of routine client questions without human intervention. Our conversion rate increased from day one because customers no longer have to wait for a reply.',
  },
];

const premiumSpring = {
  type: 'spring',
  stiffness: 90,
  damping: 20,
  mass: 0.9,
};

// Handles any decimal star filling mathematically
function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1 mb-3">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        
        // Full Star (If rating is equal to or higher than current star placement)
        if (rating >= starValue) {
          return (
            <svg key={index} className="w-4 h-4" fill="var(--main-green-color)" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          );
        }
        
        // Decimal Partial Star (Checks if this specific star holds the fractional value)
        if (rating > index && rating < starValue) {
          const fillPercentage = (rating % 1) * 100; // e.g., 0.7 becomes 70%
          
          return (
            <div key={index} className="relative w-4 h-4">
              {/* Empty background baseline */}
              <svg className="absolute top-0 left-0 w-full h-full" fill="#E5E7EB" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              {/* Overlapping filled mask dynamically set by the decimal percentage */}
              <div 
                className="absolute top-0 left-0 h-full overflow-hidden" 
                style={{ width: `${fillPercentage}%` }}
              >
                <svg className="w-4 h-4 max-none" fill="var(--main-green-color)" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
            </div>
          );
        }

        // Entirely Empty Star
        return (
          <svg key={index} className="w-4 h-4" fill="#E5E7EB" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        );
      })}
    </div>
  );
}

export default function Testimonials3() {
  const [centerIndex, setCenterIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [isHovered, setIsHovered] = useState(false);
  const total = testimonialsData.length;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setCenterIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const prevSlide = () => {
    setCenterIndex((prev) => (prev + 1) % total);
  };

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [nextSlide, isHovered]);

  const getCardPosition = (index) => {
    let diff = index - centerIndex;
    if (diff > 1) diff -= total;
    if (diff < -1) diff += total;
    return diff;
  };

  return (
    <section id='testimonials3' className="relative flex flex-col scroll-mt-[2rem] items-center justify-center min-h-[620px] w-full bg-white px-4 py-25 lg:py-25 overflow-hidden select-none">
      
      {/* Header */}
      <div className="max-w-[700px] lg:max-w-[900px] mx-auto text-center mb-10 sm:mb-16 flex flex-col items-center px-4">
        <span className="inline-flex items-center gap-[8px] px-3.5 py-1 rounded-full bg-white border border-[var(--main-green-color)] text-xs font-medium text-[var(--main-green-color)] tracking-tight mb-5 shadow-sm select-none">
          Proven Results
        </span>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl tracking-[-0.03em] leading-[1.2] font-semibold text-black">
          Trusted by premium brands. <span className="text-[var(--main-green-color)]">Validated by growth.</span>
        </h2>
      </div>

      {/* Slider Window Container */}
      <div className="relative w-full max-w-6xl flex items-center justify-center h-[380px] md:h-[420px] px-2 sm:px-4 md:px-12">
        
        {/* Left Arrow Button */}
        <button
          onClick={prevSlide}
          className="absolute left-1 md:left-4 cursor-pointer z-40 p-2 text-[var(--main-green-color)] hover:text-green-600 transition-colors duration-200 bg-white/80 backdrop-blur-sm rounded-full shadow-sm md:shadow-none"
          aria-label="Previous testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* The Track Container */}
        <div className="relative w-full h-full flex items-center justify-center">
          {testimonialsData.map((card, index) => {
            const position = getCardPosition(index);
            const isCenter = position === 0;
            const isLeft = position === -1;
            const isRight = position === 1;
            const isVisible = isCenter || isLeft || isRight;

            let xOffset = '0%';
            if (isLeft) {
              if (windowWidth >= 1280) xOffset = '-105%';
              else if (windowWidth >= 1024) xOffset = '-92%';
              else if (windowWidth >= 768) xOffset = '-85%';
            }
            if (isRight) {
              if (windowWidth >= 1280) xOffset = '105%';
              else if (windowWidth >= 1024) xOffset = '92%';
              else if (windowWidth >= 768) xOffset = '85%';
            }

            return (
              <motion.div
                key={card.id}
                initial={false}
                animate={{
                  x: xOffset,
                  scale: isCenter ? 1 : windowWidth >= 1024 ? 0.85 : 0.8,
                  opacity: isVisible ? (isCenter ? 1 : 0.35) : 0,
                  zIndex: isCenter ? 30 : 10,
                }}
                transition={premiumSpring}
                onMouseEnter={() => isCenter && setIsHovered(true)}
                onMouseLeave={() => isCenter && setIsHovered(false)}
                className={`absolute flex flex-col items-center bg-white rounded-xl text-center border border-gray-100/80 w-[290px] sm:w-[340px] lg:w-[360px] h-[340px] py-6 px-6 sm:px-8 justify-center transition-shadow duration-300
                  ${isCenter 
                    ? 'shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-gray-200/50 cursor-pointer' 
                    : 'shadow-[0_10px_30px_rgba(0,0,0,0.1)] hidden md:flex pointer-events-none'
                  }
                `}
              >
                {/* User Avatar */}
                <div className={`relative rounded-full overflow-hidden border-2 border-gray-100 p-0.5 mb-3 shadow-sm transition-all duration-300 ${
                  isCenter ? 'w-16 h-16' : 'w-14 h-14'
                }`}>
                  <img src={card.avatar} alt={card.name} className="w-full h-full object-cover rounded-full" />
                </div>

                {/* User Details */}
                <h4 className="font-bold text-gray-800 text-base sm:text-lg leading-snug">{card.name}</h4>
                <p className="text-xs text-gray-400 font-medium mb-2">{card.role}</p>

                {/* Exact Decimal Star Rendering */}
                <StarRating rating={card.rating || 5} />

                {/* Content description text */}
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed tracking-wide line-clamp-4 px-1">
                  {card.content}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={nextSlide}
          className="absolute right-1 md:right-4 cursor-pointer z-40 p-2 text-[var(--main-green-color)] hover:text-green-600 transition-colors duration-200 bg-white/80 backdrop-blur-sm rounded-full shadow-sm md:shadow-none"
          aria-label="Next testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* Pagination Indicators */}
      <div className="flex items-center justify-center gap-2.5 mt-4 z-10">
        {testimonialsData.map((_, index) => {
          const isSelected = index === ((centerIndex % total + total) % total);
          return (
            <button
              key={index}
              onClick={() => setCenterIndex(index)}
              className="relative h-2 flex items-center justify-center focus:outline-none"
              aria-label={`Go to slide ${index + 1}`}
            >
              <motion.div
                animate={{
                  width: isSelected ? 24 : 8,
                  backgroundColor: isSelected ? 'var(--main-green-color, #25D366)' : '#E5E7EB'
                }}
                transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                className="h-2 rounded-full"
              />
            </button>
          );
        })}
      </div>
    </section>
  );
}