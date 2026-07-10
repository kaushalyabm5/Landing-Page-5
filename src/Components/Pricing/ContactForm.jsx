import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    whatsappNumber: '',
    dailyOrders: '',
    platform: '',
    selectedPlan: '',
    monthlyBudget: '',
    biggestProblem: ''
  });

  const handleTextChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectOption = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    // Current Step එකේ validation එක pass නම් විතරක් ඉස්සරහට යන්න දෙනවා
    if (!activeQ.disableNext) {
      if (currentStep < totalSteps - 1) {
        setDirection(1);
        setCurrentStep((prev) => prev + 1);
      } else {
        setIsSubmitted(true);
        console.log("Psychologically Optimized Lead Data:", formData);
      }
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep((prev) => prev - 1); // 💡 මෙතන තිබ්බ +1 බග් එක ෆික්ස් කරා! දැන් හරියටම අඩු වෙනවා.
    }
  };

  const handleKeyDown = (e, isDisable) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Default form submission එක නවත්තනවා
      if (!isDisable) {
        handleNext();
      }
    }
  };

  /* 🧠 EMOTIONAL MARKETING OPTIMIZED QUESTIONS */
  const questions = [
    {
      id: "fullName",
      type: "text",
      label: "Your Name",
      sub: "Let's start this partnership on a first-name basis.",
      placeholder: "Enter your full name...",
      value: formData.fullName,
      disableNext: !formData.fullName.trim()
    },
    {
      id: "businessName",
      type: "text",
      label: "Business Name",
      sub: "Tell us the brand we are going to help scale to the next level.",
      placeholder: "e.g., Apex Clothing",
      value: formData.businessName,
      disableNext: !formData.businessName.trim()
    },
    {
      id: "email",
      type: "email",
      label: "Email Address",
      sub: "No spam, ever. Only your blueprint and premium strategy onboarding tools.",
      placeholder: "name@company.com",
      value: formData.email,
      disableNext: !formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    },
    {
      id: "whatsappNumber",
      type: "tel",
      label: "WhatsApp Number",
      sub: "Where should we drop your strategy? Enter an active number to bypass the queue.",
      placeholder: "+94 7X XXX XXXX",
      value: formData.whatsappNumber,
      disableNext: !formData.whatsappNumber.trim()
    },
    {
      id: "dailyOrders",
      type: "select",
      label: "Average Daily Orders?",
      sub: "This allows us to properly calculate and reserve server power for your growth spikes.",
      options: ["Under 10", "10 - 50", "51 - 200", "200+ Orders"],
      disableNext: !formData.dailyOrders
    },
    {
      id: "platform",
      type: "select",
      label: "Where do you sell?",
      sub: "Every platform acts differently. We optimize specifically to your native sales channel.",
      options: ["Shopify / Website", "Facebook / Instagram", "WhatsApp Only", "Other"],
      disableNext: !formData.platform
    },
    {
      id: "selectedPlan",
      type: "select",
      label: "Select Your Preferred Plan",
      sub: "Pick the trajectory that perfectly matches your current ambition and setup.",
      options: ["Basic Growth Plan", "Standard Pro Plan", "Premium Custom Architecture"],
      disableNext: !formData.selectedPlan
    },
    {
      id: "monthlyBudget",
      type: "select",
      label: "Estimated Monthly Budget?",
      sub: "Investing smart drives faster growth. Choose a range comfortable for your ROI goals.",
      options: ["Below $100 / mo", "$100 - $300 / mo", "$300 - $800 / mo", "$800+ Custom Budget"],
      disableNext: !formData.monthlyBudget
    },
    {
      id: "biggestProblem",
      type: "select",
      label: "Your Biggest Problem?",
      sub: "Be honest. What's holding your business back from making more money today?",
      options: [
        "Slow replies to customers",
        "Manually taking order details",
        "Hard to broadcast promotions",
        "Hiring chat agents is costly"
      ],
      disableNext: !formData.biggestProblem
    }
  ];

  const totalSteps = questions.length;
  const activeQ = questions[currentStep];

  const slideVariants = {
    enter: (dir) => ({ y: dir > 0 ? 30 : -30, opacity: 0 }),
    center: { y: 0, opacity: 1 },
    exit: (dir) => ({ y: dir > 0 ? -30 : 30, opacity: 0 })
  };

  return (
    <div className="bg-[#050709] text-slate-100 antialiased w-full flex flex-col justify-center items-center relative overflow-hidden select-none px-6">

      
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#25D366]/02 rounded-full blur-[140px] pointer-events-none" />
      
      {/* PERFECT BALANCED WRAPPER */}
      <div className="w-full mt-30 mb-30 max-w-md flex flex-col gap-6 relative z-10 bg-white/[0.01] border border-white/[0.03] p-8 rounded-2xl backdrop-blur-md">
        
        {/* HEADER */}
        <header className="w-full flex justify-between items-center border-b border-white/5 pb-4">
          <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
            {isSubmitted ? "System Calibrated" : `Step ${currentStep + 1} of ${totalSteps}`}
          </span>
          {!isSubmitted && (
            /* 📈 Percentage එක දැන් Forward/Backward දෙකටම 100% ක්‍රියාකාරීයි */
            <span className="text-[10px] font-mono text-[#25D366] bg-[#25D366]/05 border border-[#25D366]/10 px-2 py-0.5 rounded">
              {Math.round(((currentStep + 1) / totalSteps) * 100)}%
            </span>
          )}
        </header>

        {/* CORE INTERACTIVE ENGINE */}
        <div className="w-full min-h-[240px] flex items-center">
          <AnimatePresence mode="wait" custom={direction}>
            {!isSubmitted ? (
              <motion.div
                key={currentStep}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="w-full"
              >
                {/* Question Label */}
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-1.5">
                  {activeQ.label}
                </h1>

                {/* Subtext / Explanation Layer */}
                <p className="text-xs text-slate-400 mb-5 leading-relaxed font-normal">
                  {activeQ.sub}
                </p>

                {/* INPUTS */}
                {activeQ.type === "text" || activeQ.type === "email" || activeQ.type === "tel" ? (
                  <div className="relative w-full py-2">
                    <input
                      autoFocus
                      autoComplete="new-password"
                      type={activeQ.type}
                      name={activeQ.id}
                      value={activeQ.value}
                      onChange={handleTextChange}
                      onKeyDown={(e) => handleKeyDown(e, activeQ.disableNext)}
                      placeholder={activeQ.placeholder}
                      className="w-full bg-transparent border-b border-white/10 focus:border-[#25D366] outline-none text-lg py-2 text-white placeholder-slate-700 transition-all rounded-none autofill:bg-transparent autofill:text-white transition-colors duration-[50000s] ease-in-out"
                    />
                  </div>
                ) : (
                  /* Manual Selection Grid */
                  <div className="grid gap-2 w-full">
                    {activeQ.options.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleSelectOption(activeQ.id, option)}
                        className={`w-full px-4 py-3 text-left rounded-xl border text-sm transition-all duration-150 cursor-pointer flex items-center justify-between ${
                          formData[activeQ.id] === option
                            ? 'bg-[#25D366]/10 border-[#25D366] text-white font-medium shadow-[0_0_15px_rgba(37,211,102,0.05)]'
                            : 'bg-white/[0.01] border-white/[0.05] text-slate-400 border-transparent hover:bg-white/[0.04] hover:text-white'
                        }`}
                      >
                        <span>{option}</span>
                        {formData[activeQ.id] === option && (
                          <span className="text-[#25D366] text-xs">✓</span>
                        )}
                      </button>
                    ))}
                  </div>
                )}

                {/* CONTROLS */}
                <div className="flex items-center gap-3 mt-8 pt-4 border-t border-white/5">
                  {currentStep > 0 && (
                    <button type="button" onClick={handlePrev} className="p-2.5 bg-white/5 border border-white/10 rounded-xl text-slate-400 hover:text-white cursor-pointer transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
                    </button>
                  )}
                  
                  <button
                    type="button"
                    disabled={activeQ.disableNext}
                    onClick={handleNext}
                    className="flex-1 py-2.5 bg-gradient-to-r from-emerald-500 to-[#25D366] text-[#050709] font-bold text-xs uppercase tracking-wider rounded-xl hover:opacity-95 transition-all disabled:opacity-20 disabled:pointer-events-none cursor-pointer flex items-center justify-center gap-1"
                  >
                    <span>{currentStep === totalSteps - 1 ? "Secure Slot" : "Next"}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                  </button>
                </div>
              </motion.div>
            ) : (
              /* BALANCED SUCCESS WITH HIGH-VALUE REASSURANCE */
              <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="w-full text-center py-4">
                <div className="w-12 h-12 bg-[#25D366]/10 border border-[#25D366]/20 rounded-full flex items-center justify-center mb-4 mx-auto shadow-[0_0_20px_rgba(37,211,102,0.1)]">
                  <span className="text-[#25D366] text-xl font-bold">✓</span>
                </div>
                <h2 className="text-xl font-bold text-white mb-2">You are officially in the queue!</h2>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto mb-6">
                  Thanks <span className="text-white font-medium">{formData.fullName}</span>. We've locked in your preference for the <span className="text-white font-medium">{formData.selectedPlan}</span>. Keep an eye on your WhatsApp (<span className="text-[#25D366] font-mono font-medium">{formData.whatsappNumber}</span>)—your custom growth breakdown is coming up next.
                </p>

                <button
                  type="button"
                  onClick={() => window.location.href = '/'}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white rounded-xl text-xs font-medium transition-all cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
                  Return to Dashboard
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* FOOTER */}
        <footer className="w-full border-t border-white/5 pt-4 text-center text-[10px] font-mono text-slate-500">
          🔒 Priority Onboarding Window Open
        </footer>

      </div>
    </div>
  );
}