import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'How It Works', href: '#how-it-works', id: 'how-it-works' },
    { label: 'Features', href: '#features', id: 'features' },
    { label: 'Demo', href: '#demo', id: 'demo' },
    { label: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { label: 'Pricing', href: '#pricing', id: 'pricing' },
    { label: 'FAQ', href: '#faq', id: 'faq' },
  ];

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 xl:top-3 z-50 w-full max-w-7xl xl:w-7xl left-1/2 -translate-x-1/2 bg-[#060f0a] backdrop-blur-[14px] border xl:border xl:rounded-[1rem] shadow-2xl border-neutral-900 text-[#142e24] transition-all duration-300">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8 flex items-center justify-between h-[64px] gap-4">
        
        {/* Brand Logo */}
        <a className="flex items-center gap-2.5 font-bold text-lg tracking-tight shrink-0 group z-50" href="#hero" onClick={closeMenu}>
          <span className="w-[34px] h-[34px] rounded-[11px] bg-gradient-to-br from-[#1F7A4D] to-[#145C39] grid place-items-center text-white shrink-0 transition-all duration-300">
            <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
            </svg>
          </span>
          <span className="font-sans font-bold text-xl tracking-tight text-[#1ad176]">Jezzy AI</span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden xl:flex gap-[2rem] list-none items-center">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.label} className="relative py-2">
                <a href={link.href} className={`text-[0.88rem] font-semibold transition-colors duration-200 relative block ${isActive ? 'text-[#1ad176]' : 'text-[#7b9989] hover:text-[#122B21]'}`}>
                  {link.label}
                  {isActive && (
                    <motion.span layoutId="activeDot" className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#B98A2F]/0 rounded-full" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Actions Menu */}
        <div className="flex items-center gap-3 z-50">
          {/* Desktop Button - Only shows on xl screens and above */}
          <a href="#pricing" className="hidden xl:inline-flex p-[10px_22px] text-[0.85rem] items-center gap-2 rounded-full bg-[#1F7A4D] hover:bg-[#145C39] text-white font-bold transition-all duration-200 shadow-md">
            Start free trial
          </a>
          
          {/* Mobile Menu Icon */}
          <button 
            className="xl:hidden flex items-center justify-center p-2 text-[#122B21] hover:text-[#1F7A4D] transition-colors cursor-pointer"
            onClick={toggleMenu}
            aria-label="Toggle menu" 
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={26} strokeWidth={2.2} /> : <Menu size={26} strokeWidth={2.2} />}
          </button>
        </div>
      </div>

      {/* Full Screen Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="xl:hidden fixed inset-0 h-screen w-screen bg-[#F4F6F1] z-40 flex flex-col items-center justify-center pt-[74px]"
          >
            <ul className="list-none w-full flex flex-col items-center justify-center gap-3 px-7 overflow-y-auto max-h-[70vh]">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.label} className="w-full text-center">
                    <a 
                      href={link.href} 
                      className={`block py-2.5 text-2xl font-bold transition-all duration-200 ${isActive ? 'text-[#1F7A4D]' : 'text-[#3D5247] hover:text-[#122B21]'}`}
                      onClick={closeMenu}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
              
              {/* Mobile Free Trial Button - Correctly placed ONLY inside mobile menu panel */}
              <li className="w-full text-center mt-6">
                <a 
                  href="#pricing" 
                  className="p-[12px_36px] text-[1.05rem] inline-flex items-center justify-center rounded-full bg-[#1F7A4D] hover:bg-[#145C39] text-white font-bold transition-all duration-200 shadow-md w-max mx-auto"
                  onClick={closeMenu}
                >
                  Start free trial
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}