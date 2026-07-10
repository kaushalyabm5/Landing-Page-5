import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ROICalculator = () => {
  const [dailyMessages, setDailyMessages] = useState(150);

  // Simple, realistic business calculations
  const hoursSaved = Math.round((dailyMessages * 3) / 60 * 30); 
  const supportCostSaved = Math.round(hoursSaved * 12); 
  const extraRevenue = Math.round(dailyMessages * 0.15 * 25 * 30); 

  return (
    <section className="bg-[#030705] text-white py-24 px-6 md:px-12 border-t border-neutral-900 relative overflow-hidden">
      
      {/* Subtle Ambient Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[40vw] h-[40vh] bg-[radial-gradient(circle,rgba(16,185,129,0.02)_0%,transparent_70%)] blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* LEFT COLUMN: Clean Typography & Business Context */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <span className="w-max inline-flex items-center gap-[6px] px-3.5 py-1 rounded-full bg-white/[0.03] backdrop-blur-md border border-[var(--main-green-color)] text-xs font-medium text-[var(--main-green-color)] tracking-tight mb-5 shadow-sm">
            
            ROI Calculator
          </span>

          
          
          <h2 className="font-poppins font-semibold text-3xl md:text-5xl tracking-tight text-emerald-100 leading-[1.1] mb-5">
            See how much you save and <span className='text-[var(--main-green-color)]'> earn</span>
          </h2>
          
          <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
            Slide to select your average daily customer messages and see the direct financial impact of automating your social commerce storefront.
          </p>
        </div>

        {/* RIGHT COLUMN: Premium Clean Split Console */}
        <div className="lg:col-span-7 w-full grid grid-cols-1 md:grid-cols-12 gap-0 rounded-2xl border border-white/5 bg-[#070908]/50 backdrop-blur-xl shadow-[0_32px_64px_-20px_rgba(0,0,0,0.85)] overflow-hidden">
          
          {/* CONTROL INTERFACE (LEFT HALF OF THE CONSOLE) */}
          <div className="md:col-span-6 p-6 md:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/[0.04]">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500 block mb-6">
                Your Store Volume
              </span>

              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs text-neutral-400 font-medium">Daily Messages</span>
                  <span className="text-2xl font-bold text-white tracking-tight">
                    {dailyMessages}
                  </span>
                </div>
                
                {/* Premium Clean Slider Component */}
                <div className="pt-2">
                  <input
                    type="range"
                    min="10"
                    max="1000"
                    step="10"
                    value={dailyMessages}
                    onChange={(e) => setDailyMessages(Number(e.target.value))}
                    className="w-full h-1.5 bg-neutral-900 rounded-lg appearance-none cursor-pointer accent-emerald-500 focus:outline-none"
                    style={{
                      background: `linear-gradient(to right, #10b981 0%, #10b981 ${(dailyMessages - 10) / 9.9}%, #1f2220 ${(dailyMessages - 10) / 9.9}%, #1f2220 100%)`
                    }}
                  />
                  <div className="flex justify-between text-[10px] text-neutral-600 font-medium mt-2">
                    <span>10</span>
                    <span>500</span>
                    <span>1,000+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Practical Business Hint */}
            <p className="text-[11px] text-neutral-400 leading-relaxed bg-emerald-500/[0.02] border border-emerald-500/10 p-3.5 rounded-xl mt-8">
              <span className="text-emerald-400 font-semibold">Did you know?</span> Our agents automate up to 85% of standard product and delivery questions instantly without human intervention.
            </p>
          </div>

          {/* RESULTS DISPLAY (RIGHT HALF OF THE CONSOLE) */}
          <div className="md:col-span-6 p-6 md:p-8 bg-white/[0.01] flex flex-col justify-center space-y-6">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500 block">
              Estimated Monthly Results
            </span>

            {/* Output Metric 1 */}
            <div className="group">
              <span className="text-xs text-neutral-400 font-medium block">Time Saved</span>
              <motion.span 
                key={hoursSaved}
                initial={{ scale: 0.96, opacity: 0.8 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-xl font-bold text-white block mt-0.5"
              >
                {hoursSaved} Hours
              </motion.span>
            </div>

            {/* Output Metric 2 */}
            <div className="group">
              <span className="text-xs text-neutral-400 font-medium block">Support Cost Saved</span>
              <motion.span 
                key={supportCostSaved}
                initial={{ scale: 0.96, opacity: 0.8 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-xl font-bold text-emerald-400 block mt-0.5"
              >
                ${supportCostSaved.toLocaleString()}
              </motion.span>
            </div>

            {/* Output Metric 3 */}
            <div className="group">
              <span className="text-xs text-neutral-400 font-medium block">Potential Extra Revenue</span>
              <motion.span 
                key={extraRevenue}
                initial={{ scale: 0.96, opacity: 0.8 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-xl font-bold text-teal-400 block mt-0.5"
              >
                ${extraRevenue.toLocaleString()}+
              </motion.span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ROICalculator;