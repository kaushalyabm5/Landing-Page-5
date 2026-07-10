import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';

export default function Navbar3() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false); 
  const location = useLocation();

  // STRICTOR CHECK: Array of routes that require the dark neutral theme
  const darkThemeRoutes = ['/pricing', '/contact-form', '/contact-us'];
  const isDarkNavbarPage = darkThemeRoutes.includes(location.pathname);

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
    { label: 'Home', to: '/', id: 'hero' },
    { label: 'About', to: '/#about', id: 'about' },
    { label: 'Features', to: '/features', id: 'features-page', isExternal: true },
    { label: 'Demo', to: '/demo', id: 'demo-page', isExternal: true },
    { label: 'Pricing', to: '/pricing', id: 'pricing-page', isExternal: true }, 
    { label: 'FAQ', to: '/#faq', id: 'faq' },
  ];

  // Scroll effect for dynamic shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer Logic
  useEffect(() => {
    if (location.pathname !== '/') {
      return;
    }

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

    const timer = setTimeout(() => {
      navLinks.forEach((link) => {
        if (link.isExternal) return; 

        const el = document.getElementById(link.id);
        if (el) observer.observe(el);
      });
    }, 150);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [location.pathname]); 

  // Active State Page Sync
  useEffect(() => {
    if (location.pathname === '/features') {
      setActiveSection('features-page');
    } else if (location.pathname === '/demo') {
      setActiveSection('demo-page');
    } else if (location.pathname === '/pricing') {
      setActiveSection('pricing-page');
    } else if (location.pathname === '/contact-form' || location.pathname === '/contact-us') {
      setActiveSection('contact-page');
    } else if (location.pathname !== '/') {
      setActiveSection('');
    }
  }, [location.pathname]);

  return (
    <nav className={`fixed top-0 xl:top-0 z-51 w-full max-w-full xl:w-[100%] left-1/2 -translate-x-1/2 border-b xl:border xl:rounded-[0rem] transition-all duration-300 ${
      isDarkNavbarPage 
        ? 'bg-neutral-950 border-neutral-800 text-neutral-100' 
        : 'bg-white border-neutral-300 text-[#122B21]'
    } ${isScrolled ? 'shadow-md' : 'shadow-none'}`}> 
      <div className="lg:max-w-7xl px-10 mx-auto flex items-center justify-between h-[65px] gap-4">
        
        {/* Brand Logo */}
        <HashLink className="flex items-center gap-2.5 font-bold text-lg tracking-tight shrink-0 group z-50" to="/" onClick={closeMenu}>
          <span className="font-bold text-[1.8rem] tracking-tight text-[var(--main-green-color)]">JEZZY</span>
        </HashLink>

        {/* Desktop Navigation Links */}
        <ul className="hidden xl:flex gap-[3rem] list-none items-center">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.label} className="relative py-2">
                <HashLink 
                  to={link.to}
                  smooth
                  className={`text-[0.82rem] font-medium transition-colors duration-200 relative block ${
                    isActive 
                      ? 'text-[var(--main-green-color)] font-bold' 
                      : isDarkNavbarPage 
                        ? 'text-neutral-400 hover:text-[var(--main-green-color)]' 
                        : 'text-[#000000] hover:text-[var(--main-green-color)]'
                  }`}>
                    {link.label}
                  {isActive && (
                    <motion.span layoutId="activeDot" className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#B98A2F]/0 rounded-full" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
                  )}
                </HashLink>
              </li>
            );
          })}
        </ul>

        {/* Actions Menu */}
        <div className="flex items-center gap-4 z-50">
          {/* Log in Button */}
          <HashLink 
            to="/login" 
            className={`hidden xl:inline-flex p-[8px_15px] text-[0.82rem] items-center gap-2 rounded-[.5rem] border font-medium transition-all duration-200 ${
              isDarkNavbarPage 
                ? 'bg-neutral-800 text-neutral-100 border-neutral-700 hover:bg-neutral-700' 
                : 'bg-white text-black border-neutral-300'
            }`}
          >
            Log in
          </HashLink>

          {/* Get Started Button */}
          <HashLink 
            to="/contact-form" 
            className="hidden xl:inline-flex p-[8px_15px] text-[0.82rem] items-center gap-2 rounded-[.5rem] bg-[var(--main-green-color)] border border-[var(--main-green-color)] hover:bg-[var(--main-green-color)]/90 text-white font-medium transition-all duration-200"
          >
            Get Started
          </HashLink>
          
          <button 
            className="xl:hidden flex items-center justify-center p-2 text-[var(--main-green-color)] hover:text-[#1F7A4D] transition-colors cursor-pointer"
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
            className={`xl:hidden fixed inset-0 h-screen w-screen z-40 flex flex-col items-center justify-center pt-[74px] ${
              isDarkNavbarPage ? 'bg-neutral-900 text-neutral-100' : 'bg-white text-[#122B21]'
            }`}
          >
            <ul className="list-none w-full flex flex-col items-center justify-center gap-3 px-7 overflow-y-auto max-h-[70vh]">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.label} className="w-full text-center">
                    <HashLink 
                      to={link.to} 
                      smooth
                      className={`block py-2.5 text-2xl font-bold transition-all duration-200 ${
                        isActive 
                          ? 'text-[#1F7A4D]' 
                          : isDarkNavbarPage 
                            ? 'text-neutral-400 hover:text-neutral-100' 
                            : 'text-[#3D5247] hover:text-[#122B21]'
                      }`}
                      onClick={closeMenu}
                    >
                      {link.label}
                    </HashLink>
                  </li>
                );
              })}
              
              <li className={`w-full text-center my-1 ${isDarkNavbarPage ? 'text-neutral-700' : 'text-neutral-300'}`}>|</li>

              <li className="w-full text-center mt-2">
                <HashLink 
                  to="/login" 
                  className="p-[12px_36px] text-[1.05rem] inline-flex items-center justify-center rounded-[.8rem] bg-[white] hover:bg-[white] border border-neutral-400 text-black font-bold transition-all duration-200 w-full max-w-[260px] mx-auto"
                  onClick={closeMenu}
                >
                  Log In
                </HashLink>
              </li>

              <li className="w-full text-center mt-2">
                <HashLink 
                  to="/contact-form"
                  className="p-[12px_36px] text-[1.05rem] inline-flex items-center justify-center rounded-[.8rem] bg-[var(--main-green-color)]/90 hover:bg-[var(--main-green-color)]/90 border border-[var(--main-green-color)] text-white font-bold transition-all duration-200 w-full max-w-[260px] mx-auto"
                  onClick={closeMenu}
                >
                  Get Started
                </HashLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}