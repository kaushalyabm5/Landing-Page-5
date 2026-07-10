import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // සජීවීව ස්ක්‍රෝල් පිහිටීම නිරීක්ෂණය කිරීම
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // පිටුවේ ඉහළටම සුමටව ස්ක්‍රෝල් කරවන ශ්‍රිතය
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          whileHover={{ 
            backgroundColor: '#122B21', // Hover වන විට Gold පැහැයට හැරේ
            borderColor: '#B98A2F',
            shadow: '0 20px 35px -10px rgba(13,31,22,0.4)' 
          }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-100 w-12 h-12 rounded-[1rem] bg-[var(--main-green-color)] text-white border border-[#1F7A4D]/20 flex items-center justify-center shadow-[0_15px_30px_-8px_rgba(13,31,22,0.3)] cursor-pointer transition-colors duration-300 group"
          aria-label="Scroll to top"
        >
          {/* ඉහළට විහිදෙන ඊතල සලකුණ */}
          <svg
            className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="19" x2="12" y2="5"></line>
            <polyline points="5 12 12 5 19 12"></polyline>
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}