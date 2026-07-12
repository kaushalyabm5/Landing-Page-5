import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async'; // SEO Meta Tags සඳහා

export default function FeaturesHero() {

  // Smooth Scroll function to view content below hero
  const scrollToBottom = () => {
    window.scrollTo({
      top: window.innerHeight - 60, // Adjusts perfectly to land right below full screen hero
      behavior: 'smooth'
    });
  };

  return (
    <section id='hero' className='scroll-mt-[74px] relative bg-white overflow-hidden min-h-screen flex flex-col items-center justify-center px-4 py-12'>
      
      {/* SEO META TAGS - DYNAMICALLY INJECTED INTO HEAD */}
      <Helmet>
        <title>Features - 12 Ways to Automate Your Orders</title>
        <meta name="description" content="Discover how Jezzy AI automates late-night customer chats, handles local slang, recovers ghosted carts, and turns WhatsApp messages into confirmed e-commerce sales." />
        <link rel="canonical" href="https://jezzyai.com/features" /> {/*Features Page URL*/}
        
        {/* Open Graph Tags for Social Media */}
        <meta property="og:title" content="Jezzy AI Features - Complete WhatsApp Automation Capabilities" />
        <meta property="og:description" content="Explore real conversation patterns, slang handling, and order automation features built for Sri Lankan businesses." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* PREMIUM LIGHT-MODE AMBIENT EMERALD GLOW EFFECT */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-7xl h-[40vh] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.06)_0%,transparent_70%)] blur-[60px] md:blur-[100px]" />
      </div>

      {/* HEADER & TEXT CONTENT */}
      <div className="w-full max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center my-auto px-6">
        
        {/* Badge */}
        <span className="inline-flex items-center gap-[8px] px-3.5 py-1 rounded-full bg-neutral-50 border border-neutral-200 text-xs font-semibold text-[var(--main-green-color)] tracking-tight mb-5 shadow-sm select-none">
          Features - in detail
        </span>
        
        {/* Semantic H1 Tag - Perfect for Google Crawlers */}
        <h1 className="font-medium text-3xl sm:text-5xl md:text-6xl lg:text-[4.4rem] leading-[1.2] md:leading-[1.3] tracking-tight mb-6 text-neutral-900 w-full z-10 px-10 sm:px-16 md:px-0">
          12 ways Agent Jezzy turns chats into <span className='bg-gradient-to-r from-[#25D366] via-[#1877F2] to-[#E1306C] bg-clip-text text-transparent font-semibold'>confirmed orders</span> <br className="hidden sm:inline" />
        </h1>
        
        {/* Subtitle Description */}
        <p className="text-[.9rem] text-neutral-600 max-w-[580px] mb-10 leading-relaxed font-normal opacity-90">
          Every example below is a real conversation pattern from stores using Jezzy AI—handling local slang, late-night messages, ghosting customers, and everything in between.
        </p>

        {/* Premium Minimalist Scroll Button */}
        <motion.button
          onClick={scrollToBottom}
          aria-label="Scroll down to explore features in detail" // Accessibility/Lighthouse සඳහා
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