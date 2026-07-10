import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function DemoHero() {
  const conversation = [
    { type: 'in', text: 'Hi! Do you have linen shirts in white, medium size?', time: '14:02' },
    { type: 'out', text: 'Hi there! Yes, we do. Our Premium Linen Shirt is available in White / Medium. It is priced at Rs. 4,800 with free delivery. Shall I secure one for you?', time: '14:02' },
    { type: 'in', text: 'Yes please! Shipping address is 42, Galle Road, Colombo 03.', time: '14:03' },
    { type: 'typing', time: '' },
    { 
      type: 'order', 
      id: 'ORDER #2481', 
      items: [
        { name: 'Premium Linen Shirt (White / M)', qty: 1, price: 'Rs. 4, 800' }
      ],
      total: 'Rs. 4, 800'
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
    <section id='hero' className='scroll-mt-[74px] relative bg-white overflow-hidden min-h-screen flex flex-col items-center justify-center px-4 py-12'>
      
      {/* LIGHT-OPTIMIZED AMBIENT GLOW EFFECT */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-7xl h-[40vh] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.06)_0%,transparent_70%)] blur-[60px] md:blur-[100px]" />
      </div>

      {/* HEADER & TEXT CONTENT */}
      <div className="w-full max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center my-auto px-6">
        
        {/* Badge */}
        <span className="inline-flex items-center gap-[8px] px-3.5 py-1 rounded-full bg-neutral-50 border border-neutral-200 text-xs font-semibold text-[var(--main-green-color)] tracking-tight mb-5 shadow-sm select-none">
          Live Simulation
        </span>
        
        <h1 className="font-medium text-3xl sm:text-5xl md:text-6xl lg:text-[4.4rem] leading-[1.2] md:leading-[1.3] tracking-tight mb-6 text-neutral-900 w-full z-10 px-10 sm:px-16 md:px-0">
          Test It Yourself: See How <span className='bg-gradient-to-r from-[#25D366] via-[#1877F2] to-[#E1306C] bg-clip-text text-transparent font-semibold'>Feels!</span> <br className="hidden sm:inline" />
        </h1>
        
        {/* Subtitle Description */}
        <p className="text-[.9rem] text-neutral-500 max-w-[580px] mb-10 leading-relaxed font-normal opacity-90">
          A close-up look at how the AI assistant interprets user inputs and delivers instant, context-aware replies through WhatsApp, maintaining a genuine human touch throughout the chat.
        </p>

        {/* Premium Minimalist Scroll Button */}
           <motion.button
          onClick={scrollToBottom}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center gap-2 group cursor-pointer focus:outline-none select-none"
        >
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-neutral-700 group-hover:text-emerald-600 transition-colors duration-300">
            Explore Features
          </span>
          
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-6 h-10 rounded-full border border-neutral-800 group-hover:border-emerald-500/40 bg-neutral-50/50 flex items-start justify-center p-1.5 transition-colors duration-300 shadow-sm"
          >
            {/* Minimalist Scrolling Wheel Dot */}
            <motion.div 
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 rounded-full bg-emerald-500 group-hover:bg-neutral-900" 
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