import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const mainRef = useRef(null);
  
  const features = [
    {
      id: "resolution",
      num: "01",
      tabTitle: "AI Chat Resolution",
      badge: "Performance Core",
      painPoint: "High support ticket volumes overwhelm reps, causing delayed responses, frustrated prospects, and massive dropoffs.",
      solutionTitle: "98% Conversation Resolution",
      solutionDesc: "Jezzy handles conversational pipelines end to end automatically, routing custom or critical requests seamlessly to your team.",
      metric: "98% Auto Resolved",
      visual: (isFixed) => (
        <div className="w-full h-[210px] bg-[#f2f6f3] rounded-2xl p-4 relative overflow-hidden flex flex-col justify-between border border-emerald-100/80 shadow-inner">
          <div className="flex items-center justify-between border-b border-emerald-900/10 pb-2">
            <span className="text-[10px] font-mono text-emerald-700/60 font-bold tracking-wider">RESOLUTION_CORE</span>
            <div className={`w-2 h-2 rounded-full ${isFixed ? 'bg-[#25D366] shadow-[0_0_8px_#25D366]' : 'bg-rose-500 shadow-[0_0_8px_#f43f5e]'}`} />
          </div>
          <div className="flex-1 flex items-center justify-between gap-4">
            <div className="flex flex-col">
              <span className="text-xs text-neutral-400 font-mono">Resolution Rate</span>
              <div className={`text-4xl font-bold tracking-tight ${isFixed ? 'text-emerald-950' : 'text-rose-950'}`}>
                {isFixed ? "98%" : "22%"}
              </div>
            </div>
            <div className="flex-1 space-y-1.5 max-w-[120px]">
              <div className={`h-1.5 rounded-full ${isFixed ? 'bg-[#25D366] w-full' : 'bg-rose-500 w-[22%]'}`} />
              <div className="h-1.5 bg-neutral-200/60 w-[70%] rounded-full" />
            </div>
          </div>
        </div>
      )
    },
    {
      id: "sync",
      num: "02",
      tabTitle: "Live Catalog Sync",
      badge: "Inventory Core",
      painPoint: "Manually checking product sheets or stock databases during a sales chat leads to pricing errors and unfulfilled orders.",
      solutionTitle: "Live Product Catalog Sync",
      solutionDesc: "Connect your sheet or store once. Prices, photos and stock stay completely accurate in every automated reply.",
      metric: "Real-Time Matching",
      visual: (isFixed) => (
        <div className="w-full h-[210px] bg-[#f2f6f3] rounded-2xl p-4 relative overflow-hidden flex items-center justify-around gap-2 border border-emerald-100/80 shadow-inner">
          <div className="flex flex-col items-center gap-1">
            <div className="w-9 h-9 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-sm shadow-sm">📦</div>
            <span className="text-[9px] text-neutral-400 font-mono font-bold">STORE</span>
          </div>
          <div className="flex-1 max-w-[90px] relative flex items-center justify-center">
            <div className={`w-full h-[1px] border-t border-dashed ${isFixed ? 'border-emerald-400' : 'border-rose-300'}`} />
            {isFixed ? (
              <motion.div animate={{ x: [-25, 25] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="absolute w-2 h-2 rounded-full bg-[#25D366]" />
            ) : (
              <div className="absolute w-2 h-2 rounded-full bg-rose-500 left-1/2 -translate-x-1/2" />
            )}
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-9 h-9 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-sm shadow-sm">
              {isFixed ? "🔄" : "⚠️"}
            </div>
            <span className="text-[9px] text-neutral-500 font-mono font-bold tracking-wider">{isFixed ? "LIVE_SYNC" : "OUT_OF_SYNC"}</span>
          </div>
        </div>
      )
    },
    {
      id: "languages",
      num: "03",
      tabTitle: "Multilingual Engine",
      badge: "Localization",
      painPoint: "Global customers break off conversations completely when support options fail to respond natively to regional dialects.",
      solutionTitle: "Speaks Your Customer's Language",
      solutionDesc: "Switches seamlessly between global languages mid-conversation instantly to match incoming buyer inquiries.",
      metric: "Zero Language Gaps",
      visual: (isFixed) => (
        <div className="w-full h-[210px] bg-[#f2f6f3] rounded-2xl p-4 relative overflow-hidden flex flex-col justify-center gap-3 border border-emerald-100/80 shadow-inner">
          <div className="bg-white border border-neutral-200 text-neutral-700 text-[11px] px-3 py-1.5 rounded-xl rounded-bl-none w-max max-w-[85%] shadow-sm">
            Hello! How can I help you?
          </div>
          <div className="flex justify-end">
            <div className={`text-[11px] px-3 py-1.5 rounded-xl rounded-br-none w-max max-w-[85%] shadow-sm font-medium border ${isFixed ? 'bg-emerald-900 text-white border-emerald-800' : 'bg-rose-100 text-rose-900 border-rose-200'}`}>
              {isFixed ? "ආයුබෝවන්! මට ඔබට උදව් කරන්නේ කෙසේද?" : "[Translation Error]"}
            </div>
          </div>
        </div>
      )
    },
    {
      id: "payments",
      num: "04",
      tabTitle: "In-Chat Payments",
      badge: "Transactions Engine",
      painPoint: "Redirecting an active customer out to external landing links causes immediate friction and cart abandonment.",
      solutionTitle: "Frictionless Payments in Chat",
      solutionDesc: "Sends automated checkout payment links securely and confirms instantaneous receipts inside the active conversion window.",
      metric: "Instant Cash Flow",
      visual: (isFixed) => (
        <div className="w-full h-[210px] bg-[#f2f6f3] rounded-2xl p-4 flex flex-col justify-between relative overflow-hidden border border-emerald-100/80 shadow-inner">
          <div className="h-10 bg-white rounded-lg p-2.5 flex items-center justify-between border border-neutral-200 shadow-sm mt-2">
            <span className="text-[11px] font-mono text-neutral-700 font-semibold">💳 LKR 13,800</span>
            <div className={`h-5 px-1.5 border rounded text-[9px] font-mono font-bold tracking-wider flex items-center justify-center ${isFixed ? 'bg-emerald-50 border-emerald-200 text-emerald-600' : 'bg-rose-50 border-rose-200 text-rose-600'}`}>
              {isFixed ? "PAID" : "FAILED"}
            </div>
          </div>
          <div className={`h-10 rounded-lg flex items-center justify-center shadow-sm mb-2 text-white font-mono font-bold text-[11px] tracking-widest ${isFixed ? 'bg-[#25D366]' : 'bg-neutral-300'}`}>
            {isFixed ? "TAP_TO_PAY" : "BOUNCED"}
          </div>
        </div>
      )
    },
    {
      id: "handoff",
      num: "05",
      tabTitle: "Human Handoff",
      badge: "Handoff Matrix",
      painPoint: "Bots crash entirely on highly complex custom deals or leave internal human sales teams blind without context logs.",
      solutionTitle: "Human Handoff Matrix",
      solutionDesc: "Take over complex high-ticket sales loops in one single tap. Flow Agent steps back safely with complete interaction logs.",
      metric: "100% Shared Context",
      visual: (isFixed) => (
        <div className="w-full h-[210px] border border-dashed border-emerald-200 rounded-2xl flex items-center justify-center bg-[#f2f6f3] relative shadow-inner">
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-9 h-9 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-sm">🤖</div>
            <span className={`text-[11px] font-mono font-bold tracking-widest ${isFixed ? 'text-emerald-600' : 'text-rose-400'}`}>
              {isFixed ? "⟶ LIVE LOGS ⟶" : "⟵ BLIND ⟵"}
            </span>
            <div className={`w-9 h-9 rounded-full flex items-center justify-center text-[10px] font-mono font-bold text-white shadow-sm ${isFixed ? 'bg-emerald-900' : 'bg-neutral-400'}`}>UX</div>
          </div>
        </div>
      )
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isFixed, setIsFixed] = useState(true);
  const autoPlayRef = useRef(null);

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, [activeIndex, isFixed]);

  // GSAP Scroll Initialization
  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Header Entrance
      gsap.fromTo('[data-animate="features-header"]',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: '[data-animate="features-header"]', start: "top 85%" }
        }
      );

      // 2. Framework Platform Box Frame Reveal
      gsap.fromTo('[data-animate="features-framework"]',
        { opacity: 0, y: 40, scale: 0.98 },
        {
          opacity: 1, y: 0, scale: 1, duration: 1.1, ease: "power2.out",
          scrollTrigger: { trigger: '[data-animate="features-framework"]', start: "top 80%" }
        }
      );
    }, mainRef);

    return () => ctx.revert();
  }, []);

  const startTimer = () => {
    stopTimer();
    if (isFixed) {
      autoPlayRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % features.length);
      }, 4000);
    }
  };

  const stopTimer = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };

  const handleTabClick = (index) => {
    stopTimer();
    setActiveIndex(index);
    setIsFixed(true); 
  };

  return (
    <section ref={mainRef} className="w-full bg-[white] text-neutral-900 py-25 lg:py-25 px-4 sm:px-6 flex flex-col justify-center items-center antialiased select-none">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-8 sm:gap-11">
        
        {/* ================= PERFECTLY CENTERED SECTION HEADER ================= */}
        <div data-animate="features-header" className="max-w-6xl lg:max-w-5xl mx-auto text-center mb-5 lg:mb-6 flex flex-col items-center opacity-0">
          <span className="inline-flex items-center gap-[8px] px-3.5 py-1 rounded-full bg-white/[0.03] backdrop-blur-md border border-[var(--main-green-color)] text-xs font-medium text-[var(--main-green-color)] tracking-tight mb-5 shadow-sm select-none">
            Features & Capabilities
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl tracking-[-0.03em] leading-[1.2] font-semibold text-[#000000]">
            Everything between a message and a <span className="text-[var(--main-green-color)]"> completed sale.</span>
          </h2>
          <p className="text-[#3D5247] max-w-2xl mt-8 mb-0 text-[.9rem]">
            Toggle between infrastructure modes below to evaluate how our feature architecture repairs processing leaks.
          </p>
        </div>

        {/* 3-Column Framework Container */}
        <div data-animate="features-framework" className="w-full bg-white border border-neutral-200 shadow-[0_10px_40px_rgba(0,0,0,0.3)] rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[370px] opacity-0">
          
          {/* COLUMN 1: INTERACTIVE CORE FEATURES NAV */}
          <div className="lg:col-span-4 bg-neutral-50/50 p-4 sm:p-6 flex flex-col justify-start gap-1 border-b lg:border-b-0 lg:border-r border-neutral-200/80">
            <span className="text-[9px] font-mono tracking-widest text-neutral-400 font-bold uppercase mb-3 block px-2">
              System Capabilities
            </span>
            <div className="space-y-1 w-full">
              {features.map((feature, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={feature.id}
                    onClick={() => handleTabClick(idx)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-all duration-200 relative group cursor-pointer ${
                      isActive 
                        ? 'bg-white text-emerald-950 font-medium border border-neutral-200/80 shadow-sm' 
                        : 'hover:bg-neutral-200/30 text-neutral-400 hover:text-neutral-600'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-[#25D366]' : 'text-neutral-300'}`}>
                        {feature.num}
                      </span>
                      <span className={`text-xs font-semibold tracking-tight ${isActive ? 'text-neutral-900 font-bold' : ''}`}>
                        {feature.tabTitle}
                      </span>
                    </div>
                    <span className={`text-[10px] transition-transform duration-300 ${isActive ? 'translate-x-0 opacity-100 text-neutral-400 font-bold' : 'translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'}`}>
                      ➔
                    </span>

                    {/* Ribbon indicator line */}
                    {isActive && (
                      <motion.div 
                        layoutId="activeIndicatorLine"
                        className={`absolute left-0 top-2.5 bottom-2.5 w-0.5 rounded-r ${isFixed ? 'bg-[#25D366]' : 'bg-rose-500'}`}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* COLUMN 2: STRATEGIC BEFORE / AFTER CARD CONTROLLER */}
          <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between items-start border-b lg:border-b-0 lg:border-r border-neutral-200/80 bg-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex + String(isFixed)}
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 4 }}
                transition={{ duration: 0.15 }}
                className="space-y-3.5 text-left w-full flex-1 flex flex-col justify-center"
              >
                <span className={`inline-block text-[9px] uppercase font-mono font-bold tracking-wider px-1.5 py-0.5 rounded w-max ${isFixed ? 'text-emerald-700 bg-emerald-50 border border-emerald-100' : 'text-rose-700 bg-rose-50 border border-rose-100'}`}>
                  {features[activeIndex].badge}
                </span>

                <div>
                  <h3 className="text-sm font-bold text-neutral-400 font-mono uppercase tracking-tight">
                    {isFixed ? "Optimized Process" : "Operational Vulnerability"}
                  </h3>
                  <h4 className="text-lg font-bold text-neutral-900 tracking-tight leading-snug mt-0.5">
                    {isFixed ? features[activeIndex].solutionTitle : `The Cost of Hidden Errors`}
                  </h4>
                </div>

                <p className="text-xs text-neutral-500 leading-relaxed min-h-[54px]">
                  {isFixed ? features[activeIndex].solutionDesc : features[activeIndex].painPoint}
                </p>

                {/* INTERACTIVE CONTROLLER SWITCH */}
                <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-2.5 w-full flex items-center justify-between shadow-inner">
                  <div className="flex flex-col pl-1">
                    <span className="text-[9px] font-mono text-neutral-400 uppercase">System Metric</span>
                    <span className={`text-sm font-bold font-mono tracking-tight mt-0.5 ${isFixed ? 'text-emerald-600' : 'text-rose-500 line-through'}`}>
                      {features[activeIndex].metric}
                    </span>
                  </div>

                  <div className="bg-white border border-neutral-200/80 rounded-lg p-0.5 flex gap-0.5 shadow-sm">
                    <button 
                      onClick={() => { stopTimer(); setIsFixed(false); }}
                      className={`px-2 py-1 text-[10px] font-mono font-bold rounded cursor-pointer transition-all ${!isFixed ? 'bg-rose-500 text-white shadow-sm' : 'text-neutral-400 hover:text-neutral-700'}`}
                    >
                      BEFORE
                    </button>
                    <button 
                      onClick={() => { stopTimer(); setIsFixed(true); }}
                      className={`px-2 py-1 text-[10px] font-mono font-bold rounded cursor-pointer transition-all ${isFixed ? 'bg-[#25D366] text-white shadow-sm' : 'text-neutral-400 hover:text-neutral-700'}`}
                    >
                      FIXED
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* COLUMN 3: LIVE RE-MATCHING SYSTEM VISUALS */}
          <div className="lg:col-span-4 p-4 sm:p-6 flex items-center justify-center bg-white relative">
            <div className="w-full flex items-center justify-center max-w-[280px] lg:max-w-none mx-auto relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex + String(isFixed)}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="w-full flex items-stretch"
                >
                  {features[activeIndex].visual(isFixed)}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* Rail Dot Navigation */}
        <div className="flex justify-center items-center gap-1.5">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`h-1 rounded-full transition-all duration-500 ${
                index === activeIndex ? `w-6 ${isFixed ? 'bg-[#25D366]' : 'bg-rose-500'}` : 'w-1 bg-neutral-300 hover:bg-neutral-400'
              }`}
              aria-label={`Show capability panel ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}