import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      tier: "Starter",
      monthlyPrice: "15,000",
      yearlyPrice: "12,000", // Fixed pricing format consistency
      savedAmount: "36,000",
      description: "Best if you mainly sell through one WhatsApp number.",
      features: [
        { text: "1 WhatsApp Business number", available: true },
        { text: "1000 AI Message Credits", available: true },
        { text: "Unlimited CRM user access", available: true },
        { text: "Guided WhatsApp setup support", available: true },
      ],
      cta: "Get Started",
      isPopular: false,
    },
    {
      tier: "Professional Plan",
      monthlyPrice: "35,000",
      yearlyPrice: "28,000",
      savedAmount: "84,000",
      description: "Best for growing brands that need a website, advanced AI training, and stronger business support",
      features: [
        { text: "Everything in Starter Plan", available: true },
        { text: "10,000 AI message credits", available: true },
        { text: "Unlimited WhatsApp Business numbers", available: true },
        { text: "Dedicated success support", available: true },
        { text: "Guided WhatsApp setup assistance", available: true },
      ],
      cta: "Get Started",
      isPopular: true,
    },
    {
      tier: "Enterprise Plan",
      monthlyPrice: "99,000",
      yearlyPrice: "79,200",
      savedAmount: "237,600",
      description: "Best for multi-branch businesses, ERP integrations, POS systems, and fully customized workflows.",
      features: [
        { text: "Custom implementation", available: true },
        { text: "ERP, POS, or internal system integration", available: true },
        { text: "White-glove onboarding support", available: true },
        { text: "Guided WhatsApp setup assistance", available: true },
      ],
      cta: "Get Started",
      isPopular: false,
    }
  ];

  return (
    <div id='pricing' className="bg-[#050709] text-slate-200 antialiased relative overflow-hidden min-h-screen flex items-center justify-center py-16 lg:py-24">
      
      {/* ==================== BACKGROUND AMBIENT GLOWS ==================== */}
      <div className="absolute top-[-10%] left-[-10%] w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-[#25D366]/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none select-none" />
      <div className="absolute top-[-10%] right-[-10%] w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-[#1877F2]/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none select-none" />
      <div className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 w-[400px] sm:w-[700px] h-[300px] sm:h-[500px] bg-gradient-to-r from-[#E1306C]/10 via-[#C13584]/08 to-[#F77737]/10 rounded-full blur-[110px] sm:blur-[150px] pointer-events-none select-none" />

      {/* ======================== PRICING CONTENT ======================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        {/* Header */}
        <div className="max-w-[700px] lg:max-w-[900px] mx-auto text-center mb-10 sm:mb-14 flex flex-col items-center">
          <span className="inline-flex items-center gap-[8px] px-3.5 py-1 rounded-full bg-white/[0.03] backdrop-blur-md border border-[var(--main-green-color)] text-xs font-medium text-[var(--main-green-color)] tracking-tight mb-5 shadow-sm select-none">
            Pricing Plans
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl tracking-[-0.03em] leading-[1.2] font-semibold text-emerald-100">
            Pays for itself by the <span className="text-[var(--main-green-color)]">second order</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-[.95rem] mt-4 max-w-md leading-relaxed">
            Start free for 14 days on any plan. No card needed, cancel anytime.
          </p>
        </div>

        {/* Billing Period Toggle */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 bg-white/[0.02] backdrop-blur-md border border-white/[0.08] p-1.5 rounded-full shadow-inner">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-200 cursor-pointer ${
                !isYearly ? 'bg-[#25D366] text-[#050709] font-bold shadow-md shadow-[#25D366]/20' : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-5 py-2 rounded-full font-semibold text-sm flex items-center gap-2 transition-all duration-200 cursor-pointer ${
                isYearly ? 'bg-[#25D366] text-[#050709] font-bold shadow-md shadow-[#25D366]/20' : 'text-slate-400 hover:text-white'
              }`}
            >
              Yearly 
              <span className={`font-mono text-[10px] tracking-[0.08em] uppercase ${isYearly ? 'text-[#050709] font-extrabold' : 'text-[#25D366]'}`}>
                save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Responsive Grid System Layout optimized for Hub/Pad Formats */}
        <div className="w-full relative">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={isYearly ? "yearly-cards" : "monthly-cards"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 xl:gap-6 items-stretch max-w-md md:max-w-4xl xl:max-w-none mx-auto w-full pt-4"
            >
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`p-6 sm:p-8 md:p-9 flex flex-col relative transition-all duration-300 border backdrop-blur-xl w-full
                    ${plan.isPopular 
                      ? 'bg-gradient-to-b from-[#25D366]/05 to-[#0b2116]/25 border-[#25D366]/30 xl:scale-[1.03] z-10 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.8),_0_0_30px_0_rgba(37,211,102,0.04)]' 
                      : 'bg-white/[0.02] border-white/[0.07] shadow-[0_30px_60px_-12px_rgba(0,0,0,0.6)]'
                    }
                    ${index === 2 && 'md:col-span-2 xl:col-span-1 md:max-w-md md:mx-auto xl:max-w-none xl:w-full'}
                  `}
                  style={{ borderRadius: '26px' }}
                >
                  {plan.isPopular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-[#050709] font-sans text-[11px] font-extrabold tracking-[0.06em] uppercase px-4 py-1.5 rounded-full whitespace-nowrap shadow-md shadow-[#25D366]/20">
                      ★ Most popular
                    </span>
                  )}

                  <div className="flex justify-between items-center mb-4">
                    <span className={`font-mono text-[11px] tracking-[0.14em] uppercase font-bold ${
                      plan.isPopular ? 'text-[#25D366]' : 'text-slate-400'
                    }`}>
                      {plan.tier}
                    </span>
                    {!plan.isPopular && index === 2 && (
                      <span className="bg-white/5 text-slate-300 font-mono text-[9px] font-bold uppercase px-2 py-0.5 rounded border border-white/10">
                        Best Value
                      </span>
                    )}
                  </div>

                  {/* Price Display Box */}
                  <div className={`p-4 sm:p-5 rounded-2xl mb-5 flex flex-col justify-center border backdrop-blur-md ${
                    plan.isPopular ? 'bg-[#25D366]/05 border-[#25D366]/10' : 'bg-white/[0.01] border-white/[0.04]'
                  }`}>
                    <div className="font-medium tracking-tight flex items-baseline text-white flex-wrap">
                      <span className="text-xl sm:text-2xl font-semibold mr-1.5 text-slate-300">LKR</span>
                      <span className="font-bold text-[2rem] sm:text-[2.25rem] xl:text-[2.5rem] tracking-tight leading-none"> 
                        {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-xs sm:text-sm font-medium ml-1 text-slate-400">
                        /month
                      </span>
                    </div>
                    {isYearly && (
                      <span className={`text-[11px] font-mono mt-2 block ${plan.isPopular ? 'text-[#25D366]' : 'text-emerald-400'}`}>
                        Billed annually (save LKR {plan.savedAmount}/yr)
                      </span>
                    )}
                  </div>

                  <p className="text-sm mb-6 min-h-[44px] leading-relaxed text-neutral-400 font-medium">
                    {plan.description}
                  </p>

                  {/* Features List */}
                  <ul className="grid gap-3.5 mb-8 flex-1">
                    {plan.features.map((feat, fIndex) => (
                      <li 
                        key={fIndex} 
                        className={`text-[13px] pl-7 relative flex items-start text-neutral-300 font-normal transition-opacity ${
                          !feat.available ? 'opacity-25' : ''
                        }`}
                      >
                        <span 
                          className={`absolute left-0 top-0.5 w-[18px] h-[18px] rounded-full text-[10px] font-medium flex items-center justify-center ${
                            !feat.available 
                              ? 'bg-white/5 text-slate-600' 
                              : plan.isPopular 
                                ? 'bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30' 
                                : 'bg-white/10 text-white border border-white/10'
                          }`}
                        >
                          {feat.available ? "✓" : "–"}
                        </span>
                        <span className="leading-tight">{feat.text}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Button */}
                  <Link
                    to="/contact-form"
                    className={`w-full py-3.5 font-bold rounded-xl text-center text-sm tracking-wide transition-all duration-200 flex items-center justify-center shadow-md ${
                      plan.isPopular
                        ? 'bg-[var(--main-green-color)] text-white hover:opacity-90 hover:shadow-xl hover:shadow-[#25D366]/10 hover:-translate-y-0.5'
                        : 'bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom CTA Group */}
        <div className="text-center mt-10 sm:mt-14 flex flex-col items-center gap-4">
          <Link to='/pricing'
            className="inline-flex mt-4 mb-2 items-center gap-2 px-6 py-3 bg-[var(--main-green-color)] rounded-[.5rem] font-bold text-sm tracking-wide text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 shadow-md shadow-[#25D366]/10"
          >
            More About Pricing
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>

          <p className="text-xs sm:text-sm text-slate-400">
            Need something custom?{' '}
            <HashLink to='/contact-us' className="text-[#25D366] font-semibold hover:underline">
              Contact us
            </HashLink>{' '}
            — we set up enterprise plans within a week.
          </p>
        </div>

      </section>
    </div>
  );
}