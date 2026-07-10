import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react'; 
import { Link } from 'react-router-dom';

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Starter',
      desc: 'Best if you mainly sell through one WhatsApp number.',
      monthlyPrice: "15,000",
      yearlyPrice: "126,000", 
      features: ['1 WhatsApp Business number', '1,000 AI message credits', 'Unlimited CRM user access', 'Guided WhatsApp setup support'],
      isPopular: false,
    },
    {
      name: 'Professional Plan',
      desc: 'Best for growing brands that need a website, advanced AI training, and stronger business support.',
      monthlyPrice: "35,000",
      yearlyPrice: "294,000", 
      features: ['Everything in Starter Plan', '10,000 AI message credits', 'Unlimited WhatsApp Business numbers', 'Dedicated success support', 'Guided WhatsApp setup assistance'],
      isPopular: true, 
    },
    {
      name: 'Enterprise Plan',
      desc: 'Best for multi-branch businesses, ERP integrations, POS systems, and fully customized workflows.',
      monthlyPrice: "99,000",
      yearlyPrice: "831,600", 
      features: ['Custom implementation', 'ERP, POS, or internal system integration', 'White-glove onboarding support', 'Guided WhatsApp setup assistance'],
      isPopular: false,
    },
  ];

  return (
    <section className="bg-[#030303] border-t border-neutral-900 text-white py-20 sm:py-32 xl:py-40 px-4 relative overflow-hidden">
      {/* Dynamic CSS Animation for the complete card entry */}
      <style>{`
        @keyframes cardFadeIn {
          from { 
            opacity: 0; 
            transform: translateY(15px); 
            filter: blur(4px);
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
            filter: blur(0);
          }
        }
        .animate-card-switch {
          animation: cardFadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* Glow Effects */}
      <div className="absolute top-1/3 -left-20 w-[400px] h-[400px] bg-[#25D366] opacity-[0.12] blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-[#1877F2] opacity-[0.12] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] opacity-[0.1] blur-[150px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        
        {/* Header */}
        <div className="max-w-[700px] lg:max-w-[600px] mx-auto text-center mb-10 sm:mb-14 flex flex-col items-center">
          <span className="inline-flex items-center gap-[8px] px-3.5 py-1 rounded-full bg-white/[0.03] backdrop-blur-md border border-[var(--main-green-color)] text-xs font-medium text-[var(--main-green-color)] tracking-tight mb-5 shadow-sm select-none">
            Simple Plan, No Hidden Costs
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl tracking-[-0.03em] leading-[1.2] font-semibold text-emerald-100">
            Find Your Perfect <span className="text-[#25D366]">Plan</span>
          </h2>
          <p className="text-neutral-400 mt-4 text-sm sm:text-[.9rem] leading-relaxed">
            Choose the ultimate automated selling powerhouse built specifically for modern social commerce.
          </p>
        </div>
        
        {/* Toggle Switch */}
        <div className="inline-flex bg-[#121214] p-1 rounded-full border border-[#222224] mb-12 sm:mb-16">
          <button
            onClick={() => setIsYearly(false)}
            className={`px-4 cursor-pointer py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${!isYearly ? 'bg-[#25D366] text-black' : 'text-white'}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={`px-4 py-1.5 cursor-pointer rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1.5 ${isYearly ? 'bg-[#25D366] text-black' : 'text-white'}`}
          >
            Yearly <span className="bg-[#25D366] text-black text-[10px] px-1.5 py-0.5 rounded-full font-bold">Save 30%</span>
          </button>
        </div>

        {/* Pricing Cards Grid — Enhanced Column Distribution for Tablet Display Systems */}
        <div key={isYearly} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch max-w-md md:max-w-4xl xl:max-w-none mx-auto animate-card-switch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl p-6 sm:p-8 text-left flex flex-col justify-between transition-all duration-500 border w-full
                ${plan.isPopular
                  ? 'bg-gradient-to-b from-[#0e3a1d] to-[#030a05] border-[#25D366] shadow-[0_0_40px_-10px_rgba(37,211,102,0.3)]'
                  : 'bg-[#0d0d11] border-[#1f1f23]'
                }
                ${index === 2 && 'md:col-span-2 xl:col-span-1 md:max-w-md md:mx-auto xl:max-w-none w-full'}
              `}
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-2 gap-2">
                  <h3 className="text-xl font-semibold tracking-tight text-white">{plan.name}</h3>
                  {plan.isPopular && (
                    <span className="bg-[#25D366]/20 text-[#25D366] text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-md tracking-wider border border-[#25D366]/30 whitespace-nowrap">
                      Recommended
                    </span>
                  )}
                </div>
                
                <p className="text-neutral-400 text-xs min-h-[32px] mb-6 leading-relaxed">{plan.desc}</p>
                
                <div className="flex items-baseline gap-1 mb-6 flex-wrap">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
                    LKR {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-500 text-xs font-medium">/{isYearly ? 'year' : 'month'}</span>
                </div>

                <ul className="space-y-4 flex-1">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3 text-xs text-neutral-300">
                      <svg
                        className={`w-4 h-4 mt-0.5 shrink-0 ${plan.isPopular ? 'text-[#25D366]' : 'text-gray-400'}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to='/contact-form' className="w-full mt-8 block">
                  <button
                    className={`w-full cursor-pointer py-3.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 border transition-all duration-300
                      ${plan.isPopular
                        ? 'bg-white text-black border-white hover:bg-gray-100' 
                        : 'bg-transparent text-white border-[#2c2c35] hover:bg-[#16161a]'
                      }
                    `}
                  >
                    Get Started <ArrowRight size={14} strokeWidth={3} />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;