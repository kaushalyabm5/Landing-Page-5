import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react'; // Imported ArrowRight from lucide-react
import { HashLink } from 'react-router-hash-link';

export default function CTA() {
  return (
    <section className="pt-25 pb-35 bg-white px-6 sm:px-8">
      {/* Premium Rounded Container with Vibe-aligned Shadow */}
      <div 
        className="max-w-[1180px] mx-auto bg-neutral-900 text-white relative overflow-hidden border border-[#25D366]/20 shadow-[0_30px_70px_-15px_rgba(11,36,23,0.6)] rounded-3xl"
      >
        
        {/* ========================================================================= */}
        {/* 3D AMBIENT WHATSAPP-GREEN GLOW BACKGROUND */}
        {/* ========================================================================= */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
          
          {/* Subtle Cybernetic Grid Pattern Overlay to reinforce the tech vibe */}
          <div 
            className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
            style={{
              backgroundImage: `linear-gradient(#25D366 1px, transparent 1px), linear-gradient(90deg, #25D366 1px, transparent 1px)`,
              backgroundSize: '32px 32px'
            }}
          />
        </div>

        {/* ========================================================================= */}
        {/* Core Layout Wrap */}
        {/* ========================================================================= */}
        <div className="max-w-7xl mx-auto px-7 py-20 text-center relative z-10 flex flex-col items-center">
          
          {/* Main Headline - Using Sans Font & WhatsApp Green Gradient Highlight */}
          <h2 className="font-semibold text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.15] tracking-tight text-emerald-50 mb-6 max-w-[720px] drop-shadow-sm">
            Your next order is already
            <br />
            <span className="bg-gradient-to-r from-[#25D366] via-[#34E0A1] to-[#128C7E] bg-clip-text text-transparent font-bold">
              typing "Hi".
            </span>
          </h2>

          {/* Contextual Paragraph */}
          <p className="text-neutral-300 text-[1.05rem] leading-relaxed max-w-[480px] mx-auto mb-10 font-normal drop-shadow">
            Connect your WhatsApp in under 10 minutes. Agent Jezzy takes the next message and every one after that.
          </p>
          
          {/* Flex Wrapper for Dual Buttons (Responsive Layout) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto relative z-20">
            
            {/* Primary Action Button — Start Free Trial */}
            <HashLink to='/contact-form'
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center bg-[#25D366] text-neutral-950 font-bold text-sm px-9 py-4 rounded-[.5rem] transition-all duration-300 select-none cursor-pointer tracking-wide group w-full sm:w-auto hover:bg-[#20ba59]"
            >
              Get Started 
              {/* Dynamic Lucide Icon with animation applied to the wrapper */}
              <span className="ml-2 group-hover:translate-x-1 transition-transform flex items-center">
                <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
              </span>
            </HashLink>

            {/* Secondary Action Button — Contact Us */}
            <HashLink to='/contact-us'
              whileHover={{ y: -3, backgroundColor: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(37,211,102,0.6)" }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center bg-transparent border border-white/30 text-white font-semibold text-sm px-9 py-4 rounded-[.5rem] transition-all duration-300 select-none cursor-pointer tracking-wide w-full sm:w-auto backdrop-blur-sm"
            >
              Contact Us
            </HashLink>

          </div>
          
        </div>
      </div>
    </section>
  );
}