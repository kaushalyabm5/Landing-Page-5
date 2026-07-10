import React from "react";

const testimonialsRow1 = [
  {
    quote: "Flow Agent changed how we handle customer requests. It answers instantly using our real catalog and rules.",
    author: "Shiran Jayawardena",
    role: "Founder, Mara Studio",
    tag: "E-Commerce"
  },
  {
    quote: "The response layout and absolute accuracy are unmatched. It feels like automated dark luxury software.",
    author: "Elena Rostova",
    role: "Operations Director",
    tag: "Consulting"
  },
  {
    quote: "Boosted our conversions by 40% in just two weeks. Automated links and checkout work flawlessly.",
    author: "Amjad Hassan",
    role: "Digital Specialist",
    tag: "Retail Brand"
  }
];

const testimonialsRow2 = [
  {
    quote: "Beautiful, clean structure. It fully fits our custom requirements without bloated features.",
    author: "Kasun Perera",
    role: "Tech Lead, Axstar",
    tag: "Fintech"
  },
  {
    quote: "Voice note responses and image drop capabilities make this look like it's built in 2030. Exceptional.",
    author: "Sarah Jenkins",
    role: "Product Owner",
    tag: "SaaS"
  },
  {
    quote: "No more waiting times for our clients. It handles everything from pricing to secure payment links.",
    author: "Dinuka Fernando",
    role: "Managing Director",
    tag: "Logistics"
  }
];

const testimonialsRow3 = [
  {
    quote: "Integration was seamless. We connected our entire WhatsApp Business API in less than an hour.",
    author: "Thilina Silva",
    role: "CTO, NextGen Apparel",
    tag: "Fashion"
  },
  {
    quote: "The multi-direction scroll layout on the site looks amazing. The product performs even better.",
    author: "Michael Chang",
    role: "Growth Head",
    tag: "D2C Brand"
  },
  {
    quote: "Customer retention has skyrocketed. It proactively follows up on abandoned carts gracefully.",
    author: "Nisansala De Silva",
    role: "E-commerce Manager",
    tag: "Wellness"
  }
];

export default function Testimonials() {
  return (
    <section id='testimonials' className="py-20 bg-[#F4F6F1] text-[#122B21] relative overflow-hidden select-none">
      
      {/* Background Decorative Gradient Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#F4F6F1] rounded-full blur-[120px] pointer-events-none opacity-70" />

      {/* Centered Header Block */}
      <div className="max-w-[1180px] mx-auto px-7 mb-14 relative z-10 text-center">
        <div className="max-w-2xl mx-auto space-y-3">
          <span className="font-mono text-[11px] font-semibold tracking-[0.15em] uppercase text-[#1F7A4D] block">
            
          </span>

            <span className="text-[0.7rem] tracking-[0.2em] uppercase text-[#1F7A4D] inline-block w-max mb-4 font-semibold px-3 py-1 bg-[#DCF5E4] rounded-full">
    Proven Results
  </span>
          <h2 className="font-sans font-semibold text-3xl md:text-5xl leading-[1.12] tracking-tight">
            Trusted by premium brands. <br />
            <span className="text-[#1F7A4D]">Validated by growth.</span>
          </h2>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full space-y-2 z-10">
        
        {/* ROW 1: Right to Left Scrolling */}
        <div className="w-full overflow-hidden flex">
          <div className="flex gap-2 animate-marquee-left whitespace-nowrap py-0">
            {[...testimonialsRow1, ...testimonialsRow1].map((item, idx) => (
              <div 
                key={idx} 
                className="w-[380px] md:w-[440px] bg-[#0D1F16] rounded-xl p-7 flex flex-col justify-between shrink-0 shadow-[0_12px_30px_-10px_rgba(13,31,22,0.15)] border border-emerald-950/20 transition-all duration-300 hover:scale-[1.01]"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="px-2.5 py-0.5 bg-[#B98A2F]/10 text-[#B98A2F] font-mono text-[9px] font-bold uppercase tracking-wider rounded">
                      {item.tag}
                    </span>
                    <div className="flex text-[#B98A2F] text-xs tracking-wider">★★★★★</div>
                  </div>
                  <p className="text-[#43ca43] text-xs md:text-[13px] leading-relaxed whitespace-normal font-normal">
                    "{item.quote}"
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-emerald-900/40 flex justify-between items-center">
                  <div>
                    <h4 className="font-sans font-bold text-xs text-white">{item.author}</h4>
                    <p className="text-[10px] text-emerald-100/70 font-medium">{item.role}</p>
                  </div>
                  <span className="text-[#1F7A4D] font-mono text-xs opacity-50"></span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Left to Right Scrolling */}
        <div className="w-full overflow-hidden flex">
          <div className="flex gap-2 animate-marquee-right whitespace-nowrap py-0">
            {[...testimonialsRow2, ...testimonialsRow2].map((item, idx) => (
              <div 
                key={idx} 
                className="w-[380px] md:w-[440px] bg-[#0D1F16] rounded-xl p-7 flex flex-col justify-between shrink-0 shadow-[0_12px_30px_-10px_rgba(13,31,22,0.15)] border border-emerald-950/20 transition-all duration-300 hover:scale-[1.01]"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="px-2.5 py-0.5 bg-[#1F7A4D]/20 text-emerald-400 font-mono text-[9px] font-bold uppercase tracking-wider rounded">
                      {item.tag}
                    </span>
                    <div className="flex text-[#B98A2F] text-xs tracking-wider">★★★★★</div>
                  </div>
                  <p className="text-[#43ca43] text-xs md:text-[13px] leading-relaxed whitespace-normal font-normal">
                    "{item.quote}"
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-emerald-900/40 flex justify-between items-center">
                  <div>
                    <h4 className="font-sans font-bold text-xs text-white">{item.author}</h4>
                    <p className="text-[10px] text-emerald-100/70 font-medium">{item.role}</p>
                  </div>
                  <span className="text-[#B98A2F] font-mono text-xs opacity-50"></span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 3: Right to Left Scrolling */}
        <div className="w-full overflow-hidden flex">
          <div className="flex gap-2 animate-marquee-left whitespace-nowrap py-0">
            {[...testimonialsRow3, ...testimonialsRow3].map((item, idx) => (
              <div 
                key={idx} 
                className="w-[380px] md:w-[440px] bg-[#0D1F16] rounded-xl p-7 flex flex-col justify-between shrink-0 shadow-[0_12px_30px_-10px_rgba(13,31,22,0.15)] border border-emerald-950/20 transition-all duration-300 hover:scale-[1.01]"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="px-2.5 py-0.5 bg-[#B98A2F]/10 text-[#B98A2F] font-mono text-[9px] font-bold uppercase tracking-wider rounded">
                      {item.tag}
                    </span>
                    <div className="flex text-[#B98A2F] text-xs tracking-wider">★★★★★</div>
                  </div>
                  <p className="text-[#43ca43] text-xs md:text-[13px] leading-relaxed whitespace-normal font-normal">
                    "{item.quote}"
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-emerald-900/40 flex justify-between items-center">
                  <div>
                    <h4 className="font-sans font-bold text-xs text-white">{item.author}</h4>
                    <p className="text-[10px] text-emerald-100/70 font-medium">{item.role}</p>
                  </div>
                  <span className="text-[#1F7A4D] font-mono text-xs opacity-50"></span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Embedded CSS Core Animations (Speed optimized to 65s for an ultra-smooth slow scroll) */}
      <style jsx global>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marqueeLeft 65s linear infinite;
        }
        .animate-marquee-right {
          animation: marqueeRight 65s linear infinite;
        }
      `}</style>
    </section>
  );
}