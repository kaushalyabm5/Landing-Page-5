import React, { useState, useEffect, useRef } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Helmet } from 'react-helmet-async'; // SEO Meta Tags සදහා
import { BadgeCheck } from 'lucide-react'; 
import { FaWhatsapp } from 'react-icons/fa'; 
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Local images ආනයනය කිරීම
import user1 from '../../assets/clientsImg/1.png';
import user2 from '../../assets/clientsImg/2.png';
import user3 from '../../assets/clientsImg/3.png';
import metaLogo from '../../assets/homeherologo/meta1.png'; 

const userImages = [user1, user2, user3];
gsap.registerPlugin(ScrollTrigger);

export default function HomeHero() {
  const [activeStep, setActiveStep] = useState(0);
  const compRef = useRef(null); 

  const conversation = [
    { type: 'out', sender: 'Customer', text: 'Hi! Do you have linen shirts in white, medium size?', time: '14:02' },
    { type: 'typing', sender: 'Jezzy' },
    { type: 'in', sender: 'Jezzy', text: 'Hi there! Yes, we do. Our Premium Linen Shirt is available in White / Medium. It is priced at Rs. 4,800 with free delivery. Shall I secure one for you?', time: '14:02' },
    { type: 'out', sender: 'Customer', text: 'Yes please! Shipping address is 42, Galle Road, Colombo 03.', time: '14:03' },
    { type: 'typing', sender: 'Jezzy' },
    { 
      type: 'order', 
      sender: 'Jezzy',
      id: 'ORDER #2481', 
      items: [
        { name: 'Premium Linen Shirt (White / M)', qty: 1, price: 'Rs. 4,800' }
      ],
      total: 'Rs. 4,800'
    },
    { type: 'typing', sender: 'Jezzy' },
    { type: 'in', sender: 'Jezzy', text: 'Order confirmed! 🎉 Here is your order summary. I have sent a secure card payment link via SMS/WhatsApp. We will ship as soon as the payment clears!', time: '14:03', triggerNotification: true }
  ];

  const [visibleMessages, setVisibleMessages] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const chatContainerRef = useRef(null);

  // GSAP Animations
  useEffect(() => {
    let ctx = gsap.context(() => {
      const entranceTl = gsap.timeline({
        defaults: { ease: 'power3.out', duration: 1 }
      });

      entranceTl
        .fromTo('[data-animate="badge"]', { opacity: 0, y: -20 }, { opacity: 1, y: 0, delay: 0.2 })
        .fromTo('[data-animate="title"]', { opacity: 0, y: 30 }, { opacity: 1, y: 0 }, '-=0.7')
        .fromTo('[data-animate="desc"]', { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, '-=0.8')
        .fromTo('[data-animate="trust-row"]', { opacity: 0, y: 15 }, { opacity: 1, y: 0 }, '-=0.8')
        .fromTo('[data-animate="cta-buttons"]', { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, '-=0.8')
        .fromTo('[data-animate="trust-cards"]', { opacity: 0, y: 30 }, { opacity: 1, y: 0 }, '-=0.7');

      gsap.fromTo('[data-animate="device-wrapper"]', 
        { opacity: 0, x: -50, scale: 0.95 },
        { 
          opacity: 1, 
          x: 0, 
          scale: 1,
          ease: 'power2.out',
          duration: 1.2,
          scrollTrigger: {
            trigger: '[data-animate="device-wrapper"]',
            start: 'top 80%', 
            toggleActions: 'play none none none'
          }
        }
      );

      gsap.fromTo('[data-animate="feature-info"]', 
        { opacity: 0, x: 50 },
        { 
          opacity: 1, 
          x: 0,
          ease: 'power2.out',
          duration: 1.2,
          scrollTrigger: {
            trigger: '[data-animate="feature-info"]',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );

    }, compRef);

    return () => ctx.revert(); 
  }, []);

  // Step Rotator Logic
  useEffect(() => {
    const stepInterval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(stepInterval);
  }, []);

  // Chat Sequence Stream Engine
  useEffect(() => {
    let timers = [];
    let currentIdx = 0;

    const runChatSequence = () => {
      setVisibleMessages([]);
      setShowNotification(false);
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
            
            if (currentMsg.triggerNotification) {
              setShowNotification(true);
            }

            currentIdx++;
            
            let delay = 2200;
            if (currentMsg.type === 'order') delay = 1800;
            if (currentMsg.triggerNotification) delay = 5500;
            
            timers.push(setTimeout(showNextMessage, delay));
          }
        } else {
          timers.push(setTimeout(runChatSequence, 1500));
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

  return (
    <section ref={compRef} id='hero' className='scroll-mt-[74px] relative bg-[white] overflow-hidden min-h-screen flex flex-col items-center justify-start pt-20 md:pt-28 pb-16 px-4'>
      
      {/* SEO META TAGS - DYNAMICALLY INJECTED INTO HEAD */}
      <Helmet>
        <title>Jezzy AI | Sri Lanka's No 01 Active AI Employee</title>
        <meta name="description" content="Jezzy AI is an authorized WhatsApp Official Partner that automated customer chat replies, accepts orders, and increases e-commerce sales in Sri Lanka 24/7." />
        <link rel="canonical" href="https://jezzyai.com/" /> {/*domain*/}
        
        {/* Open Graph Tags for Social Media Sharing */}
        <meta property="og:title" content="Jezzy AI - #1 Active AI Employee Built for Your Business" />
        <meta property="og:description" content="Automate customer support, take orders, and follow up automatically 24/7 with the authorized WhatsApp Partner in Sri Lanka." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* HEADER SECTION */}
      <div className="w-full max-w-7xl mx-auto text-center relative z-10 flex flex-col items-center mb-12 sm:mb-20 px-2">
        <span data-animate="badge" className="inline-flex items-center gap-[5px] px-3.5 py-1 rounded-full bg-neutral-50 border border-neutral-200 text-[11px] sm:text-xs font-medium text-[var(--main-green-color)] tracking-tight mb-5 shadow-sm select-none opacity-0">
          <FaWhatsapp className="w-5 h-5" aria-hidden="true" />
          Authorized WhatsApp Official Partner
        </span>
        
        <div data-animate="title" className="relative w-full max-w-6xl flex justify-center items-center opacity-0">
          <h1 className="font-medium text-[2.9rem] md:text-[3.8rem] lg:text-[4.4rem] leading-[1.2] md:leading-[1.3] tracking-tight mb-6 text-neutral-900 w-full z-10 px-4 sm:px-16 md:px-0">
            Sri Lanka’s <span className='bg-gradient-to-r from-[#25D366] via-[#1877F2] to-[#E1306C] bg-clip-text text-transparent font-semibold'>#1 Active AI Employee </span> <br className="hidden sm:inline" /> Built for Your Business.
          </h1>
        </div>
        
        <p data-animate="desc" className="text-xs sm:text-sm md:text-[0.92rem] text-neutral-600 max-w-[780px] mb-8 leading-relaxed font-normal opacity-0 px-2">
          Jezzy AI replies to your customers like a human, answers questions, takes orders, and follows up automatically, 24/7. It helps you respond faster, close more sales, increase revenue, and grow profits while you simply watch the orders arrive.
        </p>

        {/* TRUSTED BY ROW */}
        <div data-animate="trust-row" className="flex flex-col sm:flex-row items-center gap-3 mb-8 select-none opacity-0">
          <div className="flex -space-x-2">
            {userImages.map((imageSrc, index) => (
              <img 
                key={index} 
                className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover" 
                src={imageSrc} 
                alt={`Satisfied business client profile avatar ${index + 1}`} 
              />
            ))}
            <div className="flex items-center justify-center h-7 w-7 rounded-full bg-emerald-950 ring-2 ring-white text-emerald-400 font-semibold text-[10px]">
              +
            </div>
          </div>
          <p className="text-xs md:text-sm text-neutral-600 font-normal tracking-wide text-center sm:text-left">
            Trusted by <span className="text-neutral-900 font-semibold">300+ businesses</span> handling 40k+ chats a month
          </p>
        </div>
        
        {/* CALL TO ACTIONS */}
        <div data-animate="cta-buttons" className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 sm:px-0 mb-12 opacity-0">
          <HashLink to='/contact-us' className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 pl-7 pr-2.5 py-2 rounded-[.5rem] bg-[var(--main-green-color)] hover:bg-[var(--main-green-color)]/90 text-white font-semibold text-[0.92rem] tracking-tight transition-all duration-300 shadow-[0_10px_30px_rgba(16,185,129,0.25)] transform hover:-translate-y-0.5">
            Contact Us
            <span className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-colors duration-300">
              <svg className="w-4 h-4 text-white transform group-hover:translate-x-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </HashLink>
          <a href="#demo" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-[.5rem] bg-neutral-900 backdrop-blur-sm border border-white/10 hover:border-white/20 text-neutral-100 font-semibold text-[0.92rem] tracking-tight transition-all duration-300 hover:bg-black transform hover:-translate-y-0.5">
            Try the live demo
          </a>
        </div>

        {/* VERIFICATION BADGE CARDS */}
        <div data-animate="trust-cards" className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4 px-4 mt-2 opacity-0">
          {/* META CARD */}
          <div className="flex flex-col cursor-pointer items-start bg-neutral-50 border border-neutral-200/80 rounded-2xl p-5 shadow-[0_10px_40px_rgba(0,0,0,0.3)] text-left relative overflow-hidden transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)] hover:border-neutral-300">
            <div className="flex items-center justify-between w-full mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ceecf1] to-[#ffffff] flex items-center justify-center shadow-sm p-1.5">
                  <img src={metaLogo} alt="Official Meta Partner Badge Identification" className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="text-[13px] font-bold text-neutral-900 tracking-tight flex items-center gap-1.5">
                    Meta Verified
                    <span className='text-blue-600 bg-blue-50 text-[10px] font-bold rounded-full px-2 py-0.5 border border-blue-100'>Verified</span>
                  </div>
                  <div className="text-[11px] font-semibold text-neutral-500">Business Partner</div>
                </div>
              </div>
              <BadgeCheck className="w-6 h-6 text-blue-500 flex-shrink-0" aria-hidden="true" />
            </div>
            <div className="font-bold text-neutral-800 text-xs mb-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Official Cloud API Access
            </div>
            <p className="text-neutral-600 text-[11px] sm:text-xs leading-normal">
              Directly integrated with Meta's official enterprise architecture to guarantee maximum messaging uptime, instant backend auto-scaling, and secure production delivery ecosystem.
            </p>
          </div>

          {/* WHATSAPP CARD */}
          <div className="flex flex-col cursor-pointer items-start bg-neutral-50 border border-neutral-200/80 rounded-2xl p-5 shadow-[0_10px_40px_rgba(0,0,0,0.3)] text-left relative overflow-hidden transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)] hover:border-neutral-300">
            <div className="flex items-center justify-between w-full mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#25D366] to-emerald-600 flex items-center justify-center shadow-sm">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M2.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.455L0 24zm6.59-3.571c1.554.921 3.19 1.408 4.86 1.409 5.4 0 9.794-4.339 9.797-9.673.001-2.584-1.002-5.014-2.825-6.837-1.822-1.823-4.25-2.827-6.834-2.828-5.405 0-9.802 4.342-9.806 9.677-.001 1.748.461 3.454 1.34 4.97l-.988 3.606 3.708-.959zM17.14 14.1c-.282-.141-1.666-.812-1.924-.906-.257-.094-.444-.141-.63.141-.187.281-.722.906-.886 1.093-.163.188-.328.211-.61.071-.282-.141-1.19-.435-2.267-1.383-.839-.739-1.405-1.651-1.569-1.933-.164-.282-.018-.434.123-.574.127-.127.282-.328.423-.492.141-.164.188-.282.282-.469.094-.188.047-.352-.023-.492-.071-.141-.63-1.499-.863-2.062-.227-.547-.457-.473-.63-.482-.162-.008-.35-.01-.539-.01-.189 0-.497.07-.757.352-.26.282-.992.957-.992 2.334 0 1.378 1.016 2.707 1.157 2.895.141.188 2.001 3.012 4.848 4.215.678.286 1.206.457 1.616.585.681.213 1.3.183 1.79.111.545-.081 1.666-.671 1.9-.1.319-.234.61-.796.61-1.377 0-.581-.285-.862-.41-.952z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-[13px] font-bold text-neutral-900 tracking-tight">WhatsApp Official</div>
                  <div className="text-[11px] font-semibold text-neutral-500">Partner Node</div>
                </div>
              </div>
              <BadgeCheck className="w-6 h-6 text-emerald-500 flex-shrink-0" aria-hidden="true" />
            </div>
            <div className="font-bold text-neutral-800 text-xs mb-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Verified Green Badge Ready
            </div>
            <p className="text-neutral-600 text-[11px] sm:text-xs leading-normal">
              Unlock official green badge profiles. Deliver high-volume interactive broadcast matrices, verified custom catalog nodes, and structural real-time consumer tracking safely.
            </p>
          </div>
        </div>
      </div>

      {/* DEVICE GRAPHICS LAYOUT */}
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-4 lg:gap-6 px-2 mt-17 mb-17 sm:px-6 relative z-10">
        
        {/* Animated Smartphone Container via ScrollTrigger */}
        <div data-animate="device-wrapper" className="flex-shrink-0 w-full lg:w-auto flex justify-center opacity-0">
          <div className="w-fit relative px-4 sm:px-12 md:px-20">
            <div className="w-[250px] sm:w-[260px] h-[490px] sm:h-[510px] bg-neutral-900 rounded-[40px] p-[4px] shadow-[0_45px_100px_rgba(0,0,0,0.85),inset_0_1px_2px_rgba(255,255,255,0.2)] border border-neutral-800 relative flex flex-col overflow-hidden transition-transform duration-500 hover:scale-[1.02] z-30">
              <div className="w-full h-full bg-[#040a07] rounded-[36px] overflow-hidden relative flex flex-col">
                
                {/* Push Notification Banner */}
                <div className={`absolute top-10 left-[5%] right-[5%] z-40 bg-black/95 border border-white/10 rounded-2xl p-3 flex gap-2.5 items-start shadow-2xl transition-all duration-500 transform ${showNotification ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-24 opacity-0 scale-95 pointer-events-none'}`}>
                  <span className="w-7 h-7 rounded-lg bg-emerald-500/20 flex flex-shrink-0 items-center justify-center text-[0.9rem] text-emerald-400">🎉</span>
                  <div className="text-left">
                    <div className="flex items-center justify-between gap-1 w-full">
                      <span className="text-[0.68rem] font-bold text-white">Jezzy AI</span>
                      <span className="text-[0.55rem] font-medium text-neutral-400">now</span>
                    </div>
                    <p className="text-[0.6rem] text-neutral-300 font-normal mt-0.5 leading-snug">Order Confirmed! Summary updated. Payment link sent.</p>
                  </div>
                </div>

                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[14px] h-[14px] bg-black rounded-full z-40 flex items-center justify-center">
                  <div className="w-[4px] h-[4px] rounded-full bg-[#1a1a1a]" />
                </div>

                {/* Status Bar */}
                <div className="h-[34px] bg-[#1F2C34] w-full pt-3.5 px-5 flex justify-between items-center text-white/70 text-[7.5px] font-normal select-none z-30">
                  <span className="font-sans">09:41</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[6.5px] font-bold opacity-60 tracking-tighter">5G</span>
                    <svg className="w-2.5 h-2.5 opacity-70" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M2 22h20V2L2 22z"/></svg>
                    <svg className="w-3 h-3 opacity-70" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17 5H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-1 1.5v2H8v-2h8z"/></svg>
                  </div>
                </div>

                {/* WhatsApp Chat Header */}
                <div className="bg-[#1F2C34] text-[#E9EDEF] p-[2px_14px_10px] flex items-center justify-between z-30 relative border-b border-white/[0.03]">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <svg className="w-4 h-4 text-[#00a884] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                    <div className="relative flex-shrink-0 ml-0.5">
                      <span className="w-[28px] h-[28px] rounded-full bg-gradient-to-br from-emerald-600 to-emerald-900 flex items-center justify-center font-bold text-[0.6rem] text-white shadow-sm border border-white/10">FA</span>
                    </div>
                    <div className="leading-tight ml-1 truncate">
                      <strong className="text-[0.72rem] block font-medium tracking-tight text-[#E9EDEF]">Jezzy AI</strong>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-[#AEBAC1] pl-2 flex-shrink-0">
                    <svg className="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C9.1 6.42 8.9 5.23 8.9 4 c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.62c0-.55-.45-1-1-1z"/></svg>
                  </div>
                </div>

                {/* Conversation Canvas Stream */}
                <div ref={chatContainerRef} className="whatsapp-chat-bg flex-1 p-[14px_12px_6px] flex flex-col gap-3 overflow-y-auto justify-start relative scrollbar-none z-20">
                  {visibleMessages.map((msg, index) => {
                    if (msg.type === 'in') {
                      return (
                        <div key={index} className="max-w-[88%] p-2 px-2.5 bg-[#18251e] rounded-lg rounded-tl-none text-[0.68rem] leading-snug self-start shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] relative animate-[rise_0.4s_ease-out_forwards] text-[#E9EDEF]">
                          <span className="block text-[0.55rem] font-bold text-[#86ffd3] mb-0.5">{msg.sender}</span>
                          {msg.text}
                          <time className="block opacity-40 text-[6px] mt-0.5 text-right font-normal text-white">{msg.time}</time>
                        </div>
                      );
                    }
                    if (msg.type === 'out') {
                      return (
                        <div key={index} className="max-w-[88%] p-2 px-2.5 bg-[#005c4b] rounded-lg rounded-tr-none text-[0.68rem] leading-snug self-end shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] relative animate-[rise_0.4s_ease-out_forwards] text-[#E9EDEF]">
                          <span className="block text-[0.55rem] font-bold text-neutral-400 mb-0.5">{msg.sender}</span>
                          {msg.text}
                          <time className="block opacity-60 text-[6px] mt-0.5 text-right font-normal text-[#86ffd3]">{msg.time}</time>
                        </div>
                      );
                    }
                    if (msg.type === 'typing') {
                      return (
                        <div key={index} className="self-start bg-[#18251e] rounded-lg rounded-tl-none p-2.5 px-3 flex flex-col gap-1 shadow-[0_1px_0.5px_rgba(0,0,0,0.13)]">
                          <span className="block text-[0.55rem] font-bold text-neutral-400">{msg.sender} typing</span>
                          <div className="flex gap-0.5 items-center">
                            <span className="w-1 h-1 rounded-full bg-[#10a367] opacity-60 animate-[blink_1.2s_infinite]" />
                            <span className="w-1 h-1 rounded-full bg-[#10a367] opacity-60 animate-[blink_1.2s_infinite_0.2s]" />
                            <span className="w-1 h-1 rounded-full bg-[#10a367] opacity-60 animate-[blink_1.2s_infinite_0.4s]" />
                          </div>
                        </div>
                      );
                    }
                    if (msg.type === 'order') {
                      return (
                        <div key={index} className="self-start bg-[#18251e] border-l-[3px] border-l-[#39a670] p-2.5 w-full max-w-[88%] rounded-lg shadow-md animate-[rise_0.4s_ease-out_forwards] text-[0.65rem] text-[#E9EDEF]">
                          <span className="block text-[0.55rem] font-bold text-[#7bc9a0] mb-1">{msg.sender}</span>
                          <div className="font-sans text-[7.5px] tracking-wider text-[#7bc9a0] mb-0.5 font-bold uppercase">{msg.id}</div>
                          {msg.items.map((item, i) => (
                            <div key={i} className="flex justify-between gap-[10px] text-white/70 font-medium">
                              <span className="truncate">{item.name} × {item.qty}</span>
                              <span className="whitespace-nowrap font-semibold text-white">{item.price}</span>
                            </div>
                          ))}
                          <div className="flex justify-between gap-[10px] text-white font-bold border-t border-dashed border-white/10 mt-1.5 pt-1.5">
                            <span>Total</span>
                            <span className="text-[#39a670]">{msg.total}</span>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>

                {/* Footer Inputs */}
                <div className="bg-[#1F2C34] p-[6px_8px_14px] flex items-center gap-2 z-30 relative">
                  <div className="flex-1 bg-[#2A3942] h-[28px] rounded-full px-3 flex items-center justify-between">
                    <span className="text-white/30 text-[0.68rem]">Message</span>
                  </div>
                  <button type="button" aria-label="Send automated WhatsApp message" className="w-[28px] h-[28px] bg-[#00a884] rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-sm hover:scale-105 active:scale-95 transition-transform">
                    <svg className="w-[14px] h-[14px] text-white mr-[1px] mt-[1px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Animated Feature Row Info Card */}
        <div data-animate="feature-info" className="w-full max-w-xl mt-20 lg:mt-0 md:mt-20 xl:max-w-xl px-4 sm:px-0 lg:ml-[-16px] flex flex-col items-start opacity-0">
          <div className="mb-6 text-left select-none">
            <h2 className="font-bold text-3xl sm:text-4xl text-neutral-900 tracking-tight leading-none mb-2">
              Every chat <span className='bg-gradient-to-r from-[#25D366] via-[#1877F2] to-[#E1306C] bg-clip-text text-transparent'>answered</span>, Every order <span>closed.</span>
            </h2>
            <p className="text-neutral-500 text-sm sm:text-[0.95rem] font-normal max-w-lg leading-relaxed">
              Explore how our automated core transforms customer interactions into successful checkouts round-the-clock.
            </p>
          </div>

          {/* Auto-rotating Feature Card */}
          <div 
            key={activeStep}
            className="w-full bg-neutral-900 border border-white/10 p-6 sm:p-8 rounded-3xl shadow-[0_24px_60px_rgba(0,0,0,0.4)] relative overflow-hidden transition-all duration-500 animate-[fadeScaleIn_0.5s_ease-out] hover:border-white/20 group"
          >
            <div className="absolute -right-8 -top-8 w-28 h-28 bg-emerald-500/10 blur-[40px] rounded-full pointer-events-none group-hover:bg-emerald-500/15 transition-colors duration-500" />
            <div className="absolute -left-8 -bottom-8 w-28 h-28 bg-blue-500/10 blur-[40px] rounded-full pointer-events-none group-hover:bg-blue-500/15 transition-colors duration-500" />

            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl shadow-inner transform -rotate-3 group-hover:rotate-0 transition-transform duration-300">
                {[ "⚡", "🛡️", "🤖", "📈" ][activeStep]}
              </div>
              <div>
                <h3 className="bg-gradient-to-r from-[#25D366] via-[#1877F2] to-[#E1306C] bg-clip-text text-transparent font-bold text-xl sm:text-2xl tracking-tight">
                  {[ "Instant Replies", "Secure Checkout", "Smart Agent", "Real-time Sync" ][activeStep]}
                </h3>
              </div>
            </div>
            
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-8 font-normal min-h-[48px]">
              {[
                "AI-driven responses engineered to convert under 3 seconds. Never keep an interested buyer waiting on WhatsApp or Web.",
                "Fully encrypted, automated payment links generated directly inside the chat workflow using top local gateway matrixes.",
                "Context-aware custom business trained AI agent handling precise product sizing, rules, and stock updates 24/7.",
                "Instant background webhooks updating systems like Google Sheets, custom setups, or your favorite CRM instantly."
              ][activeStep]}
            </p>

            <div className="grid grid-cols-4 gap-2.5 pt-4 border-t border-white/5">
              {[0, 1, 2, 3].map((idx) => (
                <div key={idx} className="h-1 rounded-full bg-neutral-800 overflow-hidden relative">
                  <div 
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full transition-all ${
                      idx === activeStep 
                        ? 'w-full duration-[4000ms] ease-linear' 
                        : idx < activeStep 
                          ? 'w-full duration-0' 
                          : 'w-0 duration-0'
                    }`} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .whatsapp-chat-bg {
          background-color: #0b141a;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M10 0h10v10H10zm30 10h10v10H40zM20 30h10v10H20zm40 0h10v10H60zM30 50h10v10H30zM0 60h10v10H0zm50 10h10v10H50z'/%3E%3Ccircle cx='15' cy='45' r='2'/%3E%3Ccircle cx='45' cy='75' r='2'/%3E%3Ccircle cx='75' cy='15' r='2'/%3E%3Ccircle cx='55' cy='45' r='2'/%3E%3Ccircle cx='25' cy='75' r='2'/%3E%3Cpath d='M5 25h2v2H5zm30 30h2v2h-2z'/%3E%3C/g%3E%3C/svg%3E");
          background-repeat: repeat;
        }
        @keyframes fadeScaleIn {
          0% { opacity: 0; transform: scale(0.97) translateY(-6px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes rise {
          0% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}