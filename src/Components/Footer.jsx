import React from 'react';
import { HashLink } from 'react-router-hash-link';

export default function Footer() {
  // Organized Navigation Arrays
  const productLinks = [
    { label: "Home", href: "/#hero" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
  ];

  const companyLinks = [
    { label: "About Us", href: "/#about" },
    { label: "Testimonials", href: "/#testimonials3" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "/contact-us" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ];

  return (
    <footer className="relative bg-[#07050f] text-[#E2E8F0] border-t border-white/10 pt-20 pb-10 antialiased overflow-hidden">
      
      {/* ================= TESTIMONIAL VIBE BACKGROUND GLOWS ================= */}
      {/* Left Glow: WhatsApp Green */}
      <div className="absolute top-[-20%] left-[-10%] w-[450px] h-[450px] bg-[#25D366]/10 rounded-full blur-[120px] pointer-events-none" />
      {/* Center Glow: Facebook Blue */}
      <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-[#1877F2]/10 rounded-full blur-[110px] pointer-events-none" />
      {/* Right Glow: Instagram Pink/Purple Gradient */}
      <div className="absolute bottom-[-30%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-[#E1306C]/10 via-[#C13584]/8 to-[#833AB4]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1180px] mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Top Section: Responsive Grid Structure */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr_1.4fr] gap-10 lg:gap-6 pb-16">
          
          {/* Column 1: Brand Profile */}
          <div className="space-y-4 col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-1">
            <HashLink to='/' className="inline-flex items-center gap-3 group select-none">
           
              <span className="uppercase font-bold text-xl tracking-tight text-[var(--main-green-color)]">
                Jezzy AI
              </span>
            </HashLink>
            <p className="text-sm text-white/60 leading-relaxed max-w-[280px]">
              Answering chats, creating carts, and closing sales for your brand 24/7.
            </p>
          </div>

          {/* Column 2: Product */}
          <div className="flex flex-col space-y-3.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#25D366] font-mono">Product</span>
            {productLinks.map((link, idx) => (
              <a key={idx} href={link.href} className="text-[0.9rem] text-white/50 hover:text-white transition-colors duration-200">
                {link.label}
              </a>
            ))}
          </div>

          {/* Column 3: Company */}
          <div className="flex flex-col space-y-3.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1877F2] font-mono">Company</span>
            {companyLinks.map((link, idx) => (
              <a key={idx} href={link.href} className="text-[0.9rem] text-white/50 hover:text-white transition-colors duration-200">
                {link.label}
              </a>
            ))}
          </div>

          {/* Column 4: Legal */}
          <div className="flex flex-col space-y-3.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#E1306C] font-mono">Legal</span>
            {legalLinks.map((link, idx) => (
              <a key={idx} href={link.href} className="text-[0.9rem] text-white/50 hover:text-white transition-colors duration-200">
                {link.label}
              </a>
            ))}
          </div>

          {/* Column 5: Call to Action Input Form */}
          <div className="space-y-4 sm:col-span-2 md:col-span-3 lg:col-span-1 lg:pl-6 pt-4 lg:pt-0 border-t border-white/5 lg:border-none">
            <span className="text-xs font-semibold uppercase tracking-wider text-white/80 block">Stay Updated</span>
            <p className="text-xs text-white/50 leading-relaxed max-w-[340px]">
              Get tips on conversational commerce and product feature drops.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex max-w-[320px] h-10 relative items-center">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full h-full bg-white/5 border border-white/10 rounded-lg pl-3 pr-10 text-xs text-white placeholder:text-white/20 focus:outline-none focus:border-[#1877F2] transition-colors backdrop-blur-sm"
                required
              />
              <button className="absolute right-1 w-8 h-8 rounded-md bg-white/10 border border-white/10 cursor-pointer text-white hover:bg-white/20 flex items-center justify-center transition-colors">
                ➔
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Section: Copyright Line & Social Indicator */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 gap-4 text-center md:text-left">
          <div>
            &copy; {new Date().getFullYear()} Jezzy AI. All rights reserved.
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-1.5 font-medium">
            <span>Made for businesses that sell where customers chat.</span>
            <span className="hidden sm:inline">💬</span>
          </div>
        </div>

      </div>
    </footer>
  );
}