import React from 'react';

export default function LoadingScreen({ isExiting }) {
  return (
    <>
      {/* Custom CSS Keyframes */}
      <style>{`
        @keyframes customTracking {
          0% { letter-spacing: -0.1em; filter: blur(4px); opacity: 0; }
          100% { letter-spacing: 0.15em; filter: blur(0); opacity: 1; }
        }
        @keyframes dotBounce {
          0%, 100% { transform: translateY(0); opacity: 0.4; }
          50% { transform: translateY(-6px); opacity: 1; }
        }
        .animate-custom-tracking {
          animation: customTracking 1.2s ease-out forwards;
        }
        .animate-dot-1 { animation: dotBounce 1.2s infinite ease-in-out; }
        .animate-dot-2 { animation: dotBounce 1.2s infinite ease-in-out 0.2s; }
        .animate-dot-3 { animation: dotBounce 1.2s infinite ease-in-out 0.4s; }
      `}</style>

      <div 
        className={`fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center transition-all duration-700 ease-in-out select-none
          ${isExiting ? 'opacity-0 pointer-events-none -translate-y-full' : 'opacity-100'}`}
      >
        <div className="flex flex-col items-center gap-5 z-10">
          
          {/* Centered Brand Text */}
          <div className="text-center">
            <h1 className="font-semibold text-[3rem] text-[#25D366] uppercase tracking-tight animate-custom-tracking">
              JEZZY.AI
            </h1>
            
            {/* Animated Loading Dots */}
            <div className="flex justify-center items-center gap-2 mt-6">
              <span className="w-3 h-3 bg-[#25D366] rounded-full animate-dot-1"></span>
              <span className="w-3 h-3 bg-[#25D366] rounded-full animate-dot-2"></span>
              <span className="w-3 h-3 bg-[#25D366] rounded-full animate-dot-3"></span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}