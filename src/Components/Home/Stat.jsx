import React, { useEffect, useState, useRef } from 'react';

const CountUp = ({ end, duration = 1800, startAnimation }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;
    const isDecimal = end.includes('.');
    const target = parseFloat(end);
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(timer);
        setCount(target);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, startAnimation]);

  const isDecimal = end.includes('.');
  return <span>{isDecimal ? count.toFixed(1) : Math.floor(count)}</span>;
};

export default function Stat() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  // We will attach this ref directly to the grid containing the numbers
  const cardsContainerRef = useRef(null);

  const statsData = [
    { value: "300", suffix: "+", label: "Active App Users", sub: "Global footprint" },
    { value: "3", suffix: "s", label: "Avg Response Time", sub: "Edge optimized" },
    { value: "2.4", suffix: "×", label: "Conversion Rate", sub: "Validated performance" },
    { value: "24", suffix: "/7", label: "Automated Core", sub: "Zero human friction" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        // 0.25 means 25% of the numbers grid must be clearly visible before counting starts
        threshold: 0.25, 
        rootMargin: "0px 0px -50px 0px" // Delays it slightly so it doesn't trigger on sneaky browser edges
      }
    );

    if (cardsContainerRef.current) {
      observer.observe(cardsContainerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="results" 
      className="py-25 lg:pt-25 lg:pb-40 bg-white text-[#122B21]"
    >
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-[700px] lg:max-w-[700px] mx-auto text-center mb-12 sm:mb-16 flex flex-col items-center">
          <span className="inline-flex items-center gap-[8px] px-3.5 py-1 rounded-full bg-white border border-[var(--main-green-color)] text-xs font-medium text-[var(--main-green-color)] tracking-tight mb-5 shadow-sm select-none">
            Core Performance
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl tracking-[-0.03em] leading-[1.2] font-semibold text-[#000000]">
            The numbers our customers <span className="text-[var(--main-green-color)]">brag about.</span>
          </h2>
        </div>

        {/* REFIXED: Added ref directly to the grid wrapper */}
        <div 
          ref={cardsContainerRef}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 max-w-md sm:max-w-3xl xl:max-w-none mx-auto"
        >
          {statsData.map((stat, index) => (
            <div 
              key={index} 
              className="group relative p-6 sm:p-8 bg-neutral-900 border border-[#112b1e] rounded-[32px] shadow-[0_12px_28px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center text-center h-[220px] sm:h-[240px] overflow-hidden transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Subtle premium background glow accents */}
              <div className="absolute -right-8 -top-8 w-28 h-28 bg-emerald-500/10 blur-[40px] rounded-full pointer-events-none group-hover:bg-emerald-500/15 transition-colors duration-500" />
              <div className="absolute -left-8 -bottom-8 w-28 h-28 bg-blue-500/10 blur-[40px] rounded-full pointer-events-none group-hover:bg-blue-500/15 transition-colors duration-500" />
              
              {/* Number and Suffix Display */}
              <div className="mb-4 sm:mb-5">
                <b className="font-poppins font-medium text-[4rem] tracking-tight block leading-none bg-gradient-to-r from-[#25D366] via-[#1877F2] to-[#E1306C] bg-clip-text text-transparent">
                  <CountUp end={stat.value} startAnimation={isIntersecting} />
                  <span className="bg-gradient-to-r from-[#25D366] via-[#1877F2] to-[#E1306C] bg-clip-text text-transparent text-[4rem] ml-0.5">
                    {stat.suffix}
                  </span>
                </b>
              </div>

              {/* Text Information */}
              <div className="w-full px-2">
                <h3 className="text-sm sm:text-[1.05rem] font-bold tracking-tight text-[var(--main-green-color)] line-clamp-1">
                  {stat.label}
                </h3>
                <p className="text-[0.75rem] sm:text-[0.82rem] text-neutral-300 tracking-wide mt-1 uppercase line-clamp-1">
                  {stat.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}