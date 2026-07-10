import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PricingComparison = () => {
  // Track activated column for an interactive mobile/desktop highlighting experience
  const [hoveredPlan, setHoveredPlan] = useState('standard');

  const features = [
    { name: 'Supported Channels', basic: 'WhatsApp Only', standard: 'WhatsApp + FB Messenger', premium: 'WhatsApp, FB, & Instagram', type: 'channels' },
    { name: 'User Accounts', basic: '3 Users', standard: '10 Users', premium: 'Unlimited', type: 'text' },
    { name: 'AI Smart Auto-Replies', basic: true, standard: true, premium: true, type: 'check' },
    { name: 'E-commerce Catalog Sync', basic: false, standard: true, premium: true, type: 'check' },
    { name: 'Advanced Sales Analytics', basic: false, standard: true, premium: true, type: 'check' },
    { name: 'Multi-Agent Live Chat Hub', basic: false, standard: true, premium: true, type: 'check' }, // Fixed typo in previous array
    { name: 'Custom AI Voice Notes Support', basic: false, standard: false, premium: true, type: 'check' },
    { name: 'Customer Support', basic: 'Email Only', standard: '24/7 Chat Support', premium: 'Dedicated Account Manager', type: 'text' },
  ];

  // Premium Custom Micro-Icons
  const CheckIcon = () => (
    <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.2)]">
      <svg className="w-2.5 h-2.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );

  const CrossIcon = () => (
    <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/[0.02] border border-white/5 text-neutral-700">
      <svg className="w-2 h-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
  );

  return (
    <section className="bg-[#030705] text-white py-24 px-4 border-t border-neutral-900 relative overflow-hidden">
      
      {/* Dynamic Background Studio Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[70vw] h-[35vh] bg-[radial-gradient(circle,rgba(16,185,129,0.04)_0%,transparent_70%)] blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-10 right-10 w-[300px] h-[300px] bg-emerald-500/[0.02] blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Apple-Style Badge & Typography */}
       


         {/* Header */}
        <div className="max-w-[700px] lg:max-w-[600px] mx-auto text-center mb-12 sm:mb-16 flex flex-col items-center">
        

          <span className="inline-flex items-center gap-[8px] px-3.5 py-1 rounded-full bg-white/[0.03] backdrop-blur-md border border-[var(--main-green-color)] text-xs font-medium text-[var(--main-green-color)] tracking-tight mb-5 shadow-sm select-none">
          
           Capabilities Dashboard
        </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl tracking-[-0.03em] leading-[1.2] font-semibold text-emerald-100">
            Compare Full <span className="text-[var(--main-green-color)]">Features </span>
          </h2>

           <p className="text-neutral-400 mt-8 mb-5 text-[.9rem]">
            Choose the ultimate automated selling powerhouse built specifically for modern social commerce.
          </p>
        </div>

        {/* Modern Bento Comparison Grid Table Container */}
        <div className="overflow-x-auto rounded-2xl border border-white/5 bg-[#070908]/40 backdrop-blur-xl shadow-[0_24px_60px_-15px_rgba(0,0,0,0.8)]">
          <table className="w-full text-left border-collapse min-w-[800px] table-fixed">
            <thead>
              <tr className="border-b border-white/5 bg-white/[0.01]">
                {/* Metric Info Column */}
                <th className="p-6 text-xs text-neutral-400 font-medium w-[28%] align-middle">
                  <span className="text-[10px] font-mono tracking-wider uppercase opacity-50 block mb-1">Matrix Specs</span>
                  <span className="text-white text-base font-semibold tracking-tight">Feature Engine</span>
                </th>
                
                {/* Basic Plan Column */}
                <th 
                  className={`p-6 text-center w-[24%] transition-all duration-300 relative cursor-pointer ${hoveredPlan === 'basic' ? 'bg-white/[0.02]' : ''}`}
                  onMouseEnter={() => setHoveredPlan('basic')}
                >
                  <span className="block text-[11px] text-neutral-500 font-mono tracking-widest uppercase mb-1">01 // Starter</span>
                  <span className="text-xl font-bold text-white tracking-tight">Basic</span>
                  <div className="mt-1 flex items-baseline justify-center gap-0.5">
                    <span className="text-2xl font-extrabold text-white tracking-tighter">$15</span>
                    <span className="text-neutral-500 text-xs font-normal">/mo</span>
                  </div>
                </th>
                
                {/* Standard Plan Column (UX Highlighted) */}
                <th 
                  className={`p-6 text-center w-[24%] transition-all duration-300 relative cursor-pointer ${hoveredPlan === 'standard' ? 'bg-emerald-500/[0.03]' : ''}`}
                  onMouseEnter={() => setHoveredPlan('standard')}
                >
                  {/* Subtle Top Neon Line Indicator */}
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 to-teal-400 transition-opacity duration-300 ${hoveredPlan === 'standard' ? 'opacity-100' : 'opacity-40'}`} />
                  
                  <span className="inline-flex items-center bg-emerald-500/10 text-emerald-400 text-[9px] font-mono font-bold px-2 py-0.5 rounded-full uppercase tracking-wider mb-2">
                    Most Popular
                  </span>
                  <span className="block text-xl font-bold text-white tracking-tight">Standard</span>
                  <div className="mt-1 flex items-baseline justify-center gap-0.5">
                    <span className="text-2xl font-extrabold text-emerald-400 tracking-tighter">$50</span>
                    <span className="text-neutral-500 text-xs font-normal">/mo</span>
                  </div>
                </th>
                
                {/* Premium Plan Column */}
                <th 
                  className={`p-6 text-center w-[24%] transition-all duration-300 relative cursor-pointer ${hoveredPlan === 'premium' ? 'bg-white/[0.02]' : ''}`}
                  onMouseEnter={() => setHoveredPlan('premium')}
                >
                  <span className="block text-[11px] text-neutral-500 font-mono tracking-widest uppercase mb-1">03 // Scale</span>
                  <span className="text-xl font-bold text-white tracking-tight">Premium</span>
                  <div className="mt-1 flex items-baseline justify-center gap-0.5">
                    <span className="text-2xl font-extrabold text-white tracking-tighter">$150</span>
                    <span className="text-neutral-500 text-xs font-normal">/mo</span>
                  </div>
                </th>
              </tr>
            </thead>
            
            <tbody>
              {features.map((row, index) => (
                <tr 
                  key={index} 
                  className="border-b border-white/[0.03] hover:bg-white/[0.01] transition-colors duration-200 group"
                >
                  {/* Feature Label Description */}
                  <td className="p-5 text-sm text-neutral-300 font-normal group-hover:text-white transition-colors duration-200">
                    {row.name}
                  </td>
                  
                  {/* Basic Column Data */}
                  <td className={`p-5 text-center text-xs transition-all duration-300 ${hoveredPlan === 'basic' ? 'bg-white/[0.015]' : ''}`}>
                    {row.type === 'check' ? (row.basic ? <CheckIcon /> : <CrossIcon />) : (
                      row.type === 'channels' ? (
                        <span className="inline-flex items-center gap-1.5 bg-[#25D366]/10 text-[#25D366] text-[11px] px-2.5 py-1 rounded-full font-medium border border-[#25D366]/20 shadow-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" /> WhatsApp
                        </span>
                      ) : <span className="font-medium text-neutral-400 group-hover:text-neutral-200">{row.basic}</span>
                    )}
                  </td>
                  
                  {/* Standard Column Data (UX Auto-glow element) */}
                  <td className={`p-5 text-center text-xs transition-all duration-300 ${hoveredPlan === 'standard' ? 'bg-emerald-500/[0.02]' : ''}`}>
                    {row.type === 'check' ? (row.standard ? <CheckIcon /> : <CrossIcon />) : (
                      row.type === 'channels' ? (
                        <div className="flex flex-wrap gap-1.5 justify-center items-center">
                          <span className="inline-flex items-center gap-1 bg-[#25D366]/10 text-[#25D366] text-[11px] px-2.5 py-0.5 rounded-full font-medium border border-[#25D366]/20">
                            WhatsApp
                          </span>
                          <span className="inline-flex items-center gap-1 bg-[#1877F2]/10 text-[#1877F2] text-[11px] px-2.5 py-0.5 rounded-full font-medium border border-[#1877F2]/20">
                            Messenger
                          </span>
                        </div>
                      ) : <span className="font-semibold text-emerald-400">{row.standard}</span>
                    )}
                  </td>
                  
                  {/* Premium Column Data */}
                  <td className={`p-5 text-center text-xs transition-all duration-300 ${hoveredPlan === 'premium' ? 'bg-white/[0.015]' : ''}`}>
                    {row.type === 'check' ? (row.premium ? <CheckIcon /> : <CrossIcon />) : (
                      row.type === 'channels' ? (
                        <div className="flex flex-wrap gap-1.5 justify-center items-center">
                          <span className="inline-flex items-center bg-[#25D366]/10 text-[#25D366] text-[11px] px-2 py-0.5 rounded-full font-medium border border-[#25D366]/20">WA</span>
                          <span className="inline-flex items-center bg-[#1877F2]/10 text-[#1877F2] text-[11px] px-2 py-0.5 rounded-full font-medium border border-[#1877F2]/20">FB</span>
                          <span className="inline-flex items-center bg-gradient-to-r from-[#f9ce34]/10 via-[#ee2a7b]/10 to-[#6228d7]/10 text-[#ee2a7b] text-[11px] px-2.5 py-0.5 rounded-full font-medium border border-[#ee2a7b]/30 shadow-sm">
                            Instagram
                          </span>
                        </div>
                      ) : <span className="font-medium text-neutral-300 group-hover:text-white">{row.premium}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
      </div>
    </section>
  );
};

export default PricingComparison;