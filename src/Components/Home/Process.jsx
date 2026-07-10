import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { MessageSquareText, Bot, HelpCircle, ShoppingCart, RefreshCw } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const compRef = useRef(null);

  const steps = [
    {
      title: "Customers message you",
      description: "On WhatsApp, your website, or Instagram, every message lands with Jezzy first.",
      color: "from-pink-100 to-rose-100",
      textColor: "text-rose-600",
      brandIconBg: "bg-[#25D366] rounded-xl text-white",
      Icon: MessageSquareText
    },
    {
      title: "Jezzy reply like a human",
      description: "Your tone, your language. Customers rarely realize they're not talking to staff.",
      color: "from-purple-100 to-indigo-100",
      textColor: "text-indigo-600",
      brandIconBg: "bg-[#25D366] rounded-xl text-white",
      Icon: Bot
    },
    {
      title: "I answer questions",
      description: "Prices, stock, sizes, delivery times pulled live from your catalog.",
      color: "from-blue-100 to-cyan-100",
      textColor: "text-blue-600",
      brandIconBg: "bg-[#25D366] rounded-xl text-white",
      Icon: HelpCircle
    },
    {
      title: "I take orders",
      description: "Items, quantity, address, payment link, captured neatly into one order.",
      color: "from-emerald-100 to-teal-100",
      textColor: "text-emerald-600",
      brandIconBg: "bg-[#25D366] rounded-xl text-white",
      Icon: ShoppingCart
    },
    {
      title: "I follow up",
      description: "Abandoned carts, pending payments, reorders. No lead goes cold.",
      color: "from-amber-100 to-orange-100",
      textColor: "text-amber-600",
      brandIconBg: "bg-[#25D366] rounded-xl text-white",
      Icon: RefreshCw
    }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Header Entrance
      gsap.fromTo('[data-animate="process-header"]', 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '[data-animate="process-header"]',
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );

      // 2. Sequential Step Card Stagger (including connecting arrows)
      gsap.fromTo('.process-step-node', 
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.process-grid-container',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );

    }, compRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={compRef} id="how-it-works" className="bg-white py-25 lg:py-25 scroll-mt-[2rem] overflow-hidden">
        <section 
          id="process" 
          aria-labelledby="process-heading"
          className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 antialiased"
        >
          {/* ================= SECTION HEADER ================= */}
          <div data-animate="process-header" className="max-w-6xl lg:max-w-5xl mx-auto text-center mb-12 sm:mb-16 flex flex-col items-center opacity-0">
            <span className="inline-flex items-center gap-[8px] px-3.5 py-1 rounded-full bg-white/[0.03] backdrop-blur-md border border-[var(--main-green-color)] text-xs font-medium text-[var(--main-green-color)] tracking-tight mb-5 shadow-sm select-none">
              Super Simple 5-Step Process
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl tracking-[-0.03em] leading-[1.2] font-semibold text-[#000000]">
              From "Hi" to paid order, <span className="text-[var(--main-green-color)]"> completely on autopilot.</span>
            </h2>
            <p className="text-[#3D5247] max-w-2xl mt-8 mb-5 text-[.9rem]">
              Here is how I securely guide your shoppers from their very first hello into a finalized sale across WhatsApp, Instagram, and your website.
            </p>
          </div>

          {/* ================= PROCESS GRID ================= */}
          <div className="relative process-grid-container">
            <ol className="flex xl:grid xl:grid-cols-5 gap-8 xl:gap-5 overflow-x-auto xl:overflow-x-visible p-4 pb-8 xl:pb-4 snap-x snap-mandatory xl:snap-none items-stretch">
              {steps.map((step, index) => {
                const isLastStep = index === steps.length - 1;
                const StepIcon = step.Icon;

                return (
                  <li 
                    key={index} 
                    className="process-step-node relative flex flex-row items-center flex-shrink-0 w-[290px] sm:w-[320px] xl:w-auto snap-center xl:snap-none group opacity-0"
                  >
                    {/* Bento Card Design with Framer Motion Layout Hovers */}
                    <motion.div 
                      whileHover={{ y: -6, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="w-full flex flex-col bg-white border-2 border-[var(--main-green-color)]/40 rounded-[28px] p-6 relative z-10 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.3)] min-h-[290px] xl:min-h-[310px] items-center text-center"
                    >
                      <div className="flex flex-col flex-grow items-center w-full">
                        
                        {/* Centered Brand Icon Badge */}
                        <div className="flex items-center justify-center mb-5 h-10 w-10 relative">
                          <div className={`flex items-center justify-center w-10 h-10 shadow-sm ${step.brandIconBg}`}>
                            <StepIcon size={18} strokeWidth={2.5} />
                          </div>
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${step.color} opacity-80 absolute -top-1 -right-1`} />
                        </div>

                        {/* Title Layer */}
                        <div className="min-h-[48px] flex items-center justify-center mb-2">
                          <h3 className="text-base font-bold tracking-tight text-neutral-800 leading-snug">
                            {step.title}
                          </h3>
                        </div>

                        {/* Description Layer */}
                        <div className="flex-grow flex items-start justify-center">
                          <p className="text-[13px] sm:text-[14px] text-neutral-500 leading-relaxed font-normal">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Rounded Arrow Head Between Cards */}
                    {!isLastStep && (
                      <div 
                        aria-hidden="true" 
                        className="flex items-center justify-center pointer-events-none mx-2 xl:mx-0 xl:absolute xl:right-[-18px] xl:top-1/2 xl:-translate-y-1/2 xl:z-20"
                      >
                        <div className="w-12 h-12 rounded-full bg-white border-2 shadow-sm flex items-center justify-center text-emerald-500 border-emerald-400">
                          <svg 
                            className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform duration-300" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor" 
                            strokeWidth="3.5"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </section>
      </div>
    </>
  );
}