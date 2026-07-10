import React from 'react';
import { ArrowLeft } from 'lucide-react';

const GoBackHomeDemo = () => {
  return (
    <a
      href="/#features-section"
      className="fixed top-6 left-6 z-50 flex items-center gap-2 px-5 py-2.5 
      bg-white/10 backdrop-blur-lg border border-white/20 
      text-white font-medium rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] 
      transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-95"
    >
      <ArrowLeft size={18} strokeWidth={2.5} />
      <span className='text-[.9rem]'>Go Back To Home</span>
    </a>
  );
};

export default GoBackHomeDemo;