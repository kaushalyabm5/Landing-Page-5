import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async'; // Perfect SEO සඳහා helmet-async භාවිතය

export default function PricingHero() {
  const conversation = [
    { type: 'in', text: 'Hi! Do you have linen shirts in white, medium size?', time: '14:02' },
    { type: 'out', text: 'Hi there! Yes, we do. Our Premium Linen Shirt is available in White / Medium. It is priced at Rs. 4,800 with free delivery. Shall I secure one for you?', time: '14:02' },
    { type: 'in', text: 'Yes please! Shipping address is 42, Galle Road, Colombo 03.', time: '14:03' },
    { type: 'typing', time: '' },
    { 
      type: 'order', 
      id: 'ORDER #2481', 
      items: [
        { name: 'Premium Linen Shirt (White / M)', qty: 1, price: 'Rs. 4,800' }
      ],
      total: 'Rs. 4,800'
    },
    { type: 'out', text: 'Order confirmed! 🎉 Above is your summary. I have sent a secure card payment link via SMS/WhatsApp. We will ship as soon as the payment clears!', time: '14:03' }
  ];

  const [visibleMessages, setVisibleMessages] = useState([]);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    let timers = [];
    let currentIdx = 0;

    const runChatSequence = () => {
      setVisibleMessages([]);
      currentIdx = 0;

      const showNextMessage = () => {
        if (currentIdx < conversation.length) {
          const currentMsg = conversation[currentIdx];

          if (currentMsg.type === 'typing') {
            setVisibleMessages((prev) => [...prev, currentMsg]);
            
            timers.push(setTimeout(() => {
              setVisibleMessages((prev) => prev.filter(m => m.type !== 'typing'));
              currentIdx++;
              showNextMessage();
            }, 1200));
          } else {
            setVisibleMessages((prev) => [...prev, currentMsg]);
            currentIdx++;
            
            let delay = 2200;
            if (currentMsg.type === 'order') delay = 1800;
            timers.push(setTimeout(showNextMessage, delay));
          }
        } else {
          timers.push(setTimeout(runChatSequence, 4000));
        }
      };

      showNextMessage();
    };

    runChatSequence();
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [visibleMessages]);

  const scrollToBottom = () => {
    window.scrollTo({
      top: window.innerHeight - 60, 
      behavior: 'smooth'
    });
  };

  return (
    <section id='hero' className='scroll-mt-[74px] relative bg-[#030705] overflow-hidden min-h-screen flex flex-col items-center justify-center px-4 py-12'>
      
      {/* SEO META TAGS - INJECTED INTO HEAD WITH DIRECT URLS */}
      <Helmet>
        <title>Affordable Pricing Plans for WhatsApp AI Automation</title>
        <meta name="description" content="Choose the perfect plan to scale your social commerce sales on autopilot. Compare features for local chat commerce automation, automated order replies, and CRM integrations." />
        
        {/* Canonical Link */}
        <link rel="canonical" href="https://jezzyai.com/pricing" /> 
        
        {/* Open Graph Tags for Social Links */}
        <meta property="og:title" content="Jezzy AI Pricing - Flexible Plans to Automate Chat Sales" />
        <meta property="og:description" content="Supercharge your social commerce with advanced AI support, deep integrations, and robust CRM tools. Select your path and start scaling today." />
        <meta property="og:type" content="website" />
        
        {/* Social Media URL */}
        <meta property="og:url" content="https://jezzyai.com/pricing" />
      </Helmet>

      {/* REFLECT-STYLE DEEP EMERALD ECLIPSE GLOW EFFECT */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-7xl h-[40vh] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.12)_0%,transparent_70%)] blur-[60px] md:blur-[100px]" />
      </div>

      {/* HEADER & TEXT CONTENT */}
      <div className="w-full max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center my-auto">
        
        {/* Badge */}
        <span className="inline-flex items-center gap-[8px] px-3.5 py-1 rounded-full bg-white/[0.03] backdrop-blur-md border border-white/10 text-xs font-medium text-[var(--main-green-color)] tracking-tight mb-5 shadow-sm select-none">
          Pricing - plans
        </span>
        
        {/* Main Heading with Target Keywords */}
        <h1 className="font-medium text-3xl sm:text-5xl md:text-6xl lg:text-[4.4rem] leading-[1.2] md:leading-[1.3] tracking-tight mb-6 text-white w-full z-10 px-10 sm:px-16 md:px-0">
          Scale Your Sales on <span className='bg-gradient-to-r from-[#25D366] via-[#1877F2] to-[#E1306C] bg-clip-text text-transparent font-semibold'> Autopilot</span> <br className="hidden sm:inline" />
        </h1>

        {/* Subtitle Description */}
        <p className="text-[.9rem] text-neutral-400 max-w-[580px] mb-10 leading-relaxed font-normal opacity-90">
          Supercharge your social commerce with advanced AI support, deep integrations, and robust CRM tools. Select your path and start scaling today.
        </p>

        {/* Premium Minimalist Scroll Button */}
        <motion.button
          onClick={scrollToBottom}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center gap-2 group cursor-pointer focus:outline-none select-none"
          aria-label="Scroll down to explore core features and pricing plans"
        >
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] group-hover:text-[#25D366] transition-colors duration-300 text-neutral-200">
            Explore Plans
          </span>
          
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-6 h-10 rounded-full border border-white/20 group-hover:border-[#25D366]/40 bg-white/[0.01] flex items-start justify-center p-1.5 backdrop-blur-sm transition-colors duration-300 shadow-[0_12px_24px_-8px_rgba(0,0,0,0.5)]"
            aria-hidden="true"
          >
            {/* Minimalist Scrolling Wheel Dot */}
            <motion.div 
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 rounded-full bg-emerald-400 group-hover:bg-[#25D366]" 
            />
          </motion.div>
        </motion.button>

      </div>

      {/* Embedded Animations Keyframes */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blink {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        @keyframes rise {
          0% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animation-delay-2200 {
          animation-delay: 2.2s !important;
        }
      `}} />
    </section>
  );
}