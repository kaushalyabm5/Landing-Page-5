import { ArrowRight, CheckCircle2, MessageSquare, ShoppingBag, RefreshCw, Lock, Bell, Send } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
// Imported local hoodie asset
import hoodieImg from "../../assets/homeDemoImg/hoodie.png"; 
import helmetImg from "../../assets/homeDemoImg/steelbird1.png"; 

export default function Demo() {
  const [language, setLanguage] = useState("english"); // 'english' or 'sinhala'

  const englishResponses = {
    "0": [
      { sender: "user", text: "Hey! Do you have the Cole Buxton Warm Up Hoodie in stock?", time: "02:14 PM" },
      { 
        sender: "agent", 
        text: "Hey there! Yes, we have it in stock. Here are the product details:\n\n• Brand: Cole Buxton\n• Model: 'Warm Up' Hoodie\n• Color: Vintage Black\n• Fit: Boxy, cropped body with dropped shoulders\n• Fabric: 500 GSM ultra-heavyweight loopback cotton\n• Details: Garment-dyed, pre-shrunk, with a dual-layered hood (no drawcords)\n• Price: 23,500 LKR", 
        time: "02:14 PM" 
      },
      { sender: "image", url: hoodieImg, caption: "Cole Buxton Warm Up Hoodie - Vintage Black", time: "02:15 PM" }
    ],
    "1": [
      { sender: "user", text: "That looks exactly like what I want. How do I buy it?", time: "02:16 PM" },
      { 
        sender: "agent", 
        text: "Great choice! To place your order right now, please reply with the following information:\n\n1. Full Name\n2. Shipping Address\n3. Mobile Number\n4. Desired Color & Size (e.g., Black, L)\n5. Payment Method (Cash on Delivery, Card, or Bank Transfer)", 
        time: "02:16 PM" 
      }
    ],
    "2": [
      { sender: "user", text: "Perfect. Here are my details:\n\nName: Kuahsalya\nAddress: No. 5, Elibank Road, Colombo 05\nMobile: 0771234567\nColor: Vintage Black\nSize: Large\nPayment: Cash on Delivery (COD) 🤝", time: "02:18 PM" },
      { sender: "agent", text: "Thank you. Processing your order details into our fulfillment system now...", time: "02:18 PM" }
    ],
    "3": [
      { sender: "user", text: "Awesome, let know when confirmed!", time: "02:19 PM" },
      { 
        sender: "unified-order", 
        text: "🎉 Your order is officially confirmed!\n\nHere is your receipt summary:\n• Order ID: CB-WARMUP-9921\n• Item: 1x Cole Buxton Warm Up Hoodie\n• Color: Vintage Black\n• Size: Large\n• Payment: Cash on Delivery (COD)\n• Product Price: 23,500 LKR\n• Delivery Fee: 500 LKR\n• Total Due: 24,000 LKR\n\nYour package will be dispatched tomorrow morning. Thank you for shopping with Mara Studio!", 
        imageUrl: hoodieImg,
        imageCaption: "Status: Confirmed & Preparing for Dispatch (Vintage Black)",
        time: "02:19 PM" 
      }
    ]
  };

  const sinhalaResponses = {
    "0": [
      { sender: "user", text: "Oyala gawa steelbird sb20 helmet eka thiyenwada?", time: "02:14 PM" },
      { 
        sender: "agent", 
        text: "Ow thiyenawa! Steelbird SB-20 Helmet eka dan stock thiyenawa. Details:\n\n• Brand: Steelbird\n• Model: SB-20 Premium\n• Type: Full Face / Open Face\n• Certifications: DOT & ISI Approved\n• Colors: Black only\n• Features: Anti-scratch visor, Dynamic ventilation system, Washable interior pads.\n• Price: 21,550 LKR", 
        time: "02:14 PM" 
      },
      { sender: "image", url: helmetImg, caption: "Steelbird SB-20 Premium Helmet", time: "02:15 PM" }
    ],
    "1": [
      { sender: "user", text: "Meta meka ganna ona. Kohomada order karanne?", time: "02:16 PM" },
      { 
        sender: "agent", 
        text: "Ok! Danma order eka danna, me details tika apita ewanna:\n\n1. Full Name\n2. Delivery Address\n3. Phone Number\n4. Size (M, L, XL)\n5. Color\n6. Payment Method (Cash on Delivery, Card, or Bank Transfer)", 
        time: "02:16 PM" 
      }
    ],
    "2": [
      { sender: "user", text: "Ok. Details:\n\nFull Name: Kaushalya\nAddress: No. 5, Elibank Road, Colombo 05\nMobile: 0771234567\nSize: Large\nColor: Black\nPayment: Cash on Delivery (COD) 🤝", time: "02:18 PM" },
      { sender: "agent", text: "Thank You. Api dan details fulfillment system ekata enter karamin thiyenne...", time: "02:18 PM" }
    ],
    "3": [
      { sender: "user", text: "Super, confirm unama mata text ekak daanna!", time: "02:19 PM" },
      { 
        sender: "unified-order", 
        text: "🎉 Your order is officially confirmed!\n\nReceipt Summary:\n• Order ID: SB-HELMET-9921\n• Item: 1x Steelbird SB-20 Helmet\n• Size: Large\n• Payment: Cash on Delivery (COD)\n• Helmet Price: 21,350 LKR\n• Delevery Fee: 500 LKR\n• Total Due: 21,850 LKR\n\n Oyage package eka heta ude 9 ta wage dispatch karanawa. Thank You for buying from us!", 
        imageUrl: helmetImg,
        imageCaption: "Status: Confirmed & Preparing for Dispatch (Steelbird SB-20)",
        time: "02:19 PM" 
      }
    ]
  };

  const responses = language === "english" ? englishResponses : sinhalaResponses;

  const initialChatLog = language === "english" 
    ? [{ sender: "agent", text: "Hi there! Welcome to VooStore. How Can I help You?", time: "02:10 PM" }]
    : [{ sender: "agent", text: "Hi there! Welcome to VooStore. How Can I help You?", time: "02:10 PM" }];

  const [chatLog, setChatLog] = useState(initialChatLog);
  const [isTyping, setIsTyping] = useState(false);
  const [activeChip, setActiveChip] = useState(null);
  const [clickedSteps, setClickedSteps] = useState([]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0); 
  const [showNotification, setShowNotification] = useState(false);
  const chatContainerRef = useRef(null);

  const sendSoundRef = useRef(null);
  const receiveSoundRef = useRef(null);

  // Track and trigger updates when switching languages
  useEffect(() => {
    handleRefresh();
  }, [language]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatLog, isTyping]);

  const playSound = (type) => {
    try {
      if (type === 'send' && sendSoundRef.current) {
        sendSoundRef.current.currentTime = 0;
        sendSoundRef.current.play().catch(e => console.log("Audio block:", e));
      } else if (type === 'receive' && receiveSoundRef.current) {
        receiveSoundRef.current.currentTime = 0;
        receiveSoundRef.current.play().catch(e => console.log("Audio block:", e));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChipClick = (key, index) => {
    if (isTyping || index !== currentStepIndex) return;
    
    setActiveChip(key);
    playSound('send');

    const currentHour = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const exchanges = responses[key];
    const userMsg = { ...exchanges.find(m => m.sender === "user"), time: currentHour };
    
    setChatLog((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      let botReplies = exchanges.filter(m => m.sender !== "user").map(reply => ({ ...reply, time: currentHour }));
      
      setChatLog((prev) => [...prev, ...botReplies]);
      setClickedSteps((prev) => [...new Set([...prev, key])]);
      setActiveChip(null);
      
      setCurrentStepIndex(index + 1);
      playSound('receive');

      if (key === "3") {
        setTimeout(() => {
          setShowNotification(true);
          setTimeout(() => setShowNotification(false), 4500);
        }, 600);
      }
    }, 1500);
  };

  const handleRefresh = () => {
    setChatLog(language === "english" 
      ? [{ sender: "agent", text: "Hi there! Welcome to VooStore. How Can I help You?", time: "02:10 PM" }]
      : [{ sender: "agent", text: "Hi there! Welcome to VooStore. How Can I help You?", time: "02:10 PM" }]
    );
    setClickedSteps([]);
    setCurrentStepIndex(0);
    setActiveChip(null);
    setIsTyping(false);
    setShowNotification(false);
  };

  const englishInteractiveSteps = [
    { key: "0", label: "Check Inventory", text: "Hey! Do you have the Cole Buxton Warm Up Hoodie?" },
    { key: "1", label: "Purchase Flow", text: "That looks exactly like what I want. How do I buy it?" },
    { key: "2", label: "Submit Details", text: "Perfect. Here are my details: Color: Vintage Black..." },
    { key: "3", label: "Finalize Order", text: "Awesome, let know when confirmed!" },
  ];

  const sinhalaInteractiveSteps = [
    { key: "0", label: "Check Inventory", text: "Oyala gawa steelbird sb20 helmet eka thiyenwada?" },
    { key: "1", label: "Purchase Flow", text: "Mata meka ganna ona. Kohomada order karanne?" },
    { key: "2", label: "Submit Details", text: "Ok. Details: Full Name: Kaushalya...." },
    { key: "3", label: "Finalize Order", text: "Super, confirm unama mata text ekak daanna!" },
  ];

  const interactiveSteps = language === "english" ? englishInteractiveSteps : sinhalaInteractiveSteps;

  return (
    <section id="demo" className="py-20 lg:py-25 bg-white overflow-hidden scroll-mt-[3rem]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* ================= PERFECTLY CENTERED SECTION HEADER ================= */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-20 flex flex-col items-center">
          <span className="inline-flex items-center gap-[8px] px-3.5 py-1 rounded-full bg-white/[0.03] backdrop-blur-md border border-[var(--main-green-color)] text-xs font-medium text-[var(--main-green-color)] tracking-tight mb-5 shadow-sm select-none">
            Live Demo
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl tracking-[-0.03em] leading-[1.2] font-semibold text-[#000000]">
            Don't take our word for it. <span className="text-[var(--main-green-color)]"> Message it.</span>
          </h2>
        </div>

        {/* CHANGED: Fixed grid breakpoints from md to lg to prevent cramping on tablet screens */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 xl:gap-35 items-center">
          
          {/* Phone Display Frame */}
          <div className="flex justify-center relative w-full group">
            
            {/* Dynamic Emerald Ambient Shadow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-emerald-500/5 blur-[60px] rounded-full pointer-events-none" />

            {/* iPhone Chassis Layout */}
            <div className="w-[264px] h-[490px] bg-[#4b5563] rounded-[44px] p-[3px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] relative flex-shrink-0 flex flex-col overflow-hidden border-2 border-[#374151]">
              
              {/* Hardware Button Indicators */}
              <div className="absolute top-[75px] -left-[2px] w-[2px] h-[14px] bg-[#1f2937] rounded-r-sm" />
              <div className="absolute top-[105px] -left-[2px] w-[2px] h-[28px] bg-[#1f2937] rounded-r-sm" />
              <div className="absolute top-[140px] -left-[2px] w-[2px] h-[28px] bg-[#1f2937] rounded-r-sm" />
              <div className="absolute top-[120px] -right-[2px] w-[2px] h-[40px] bg-[#1f2937] rounded-l-sm" />

              {/* Internal Display Bezel Line */}
              <div className="w-full h-full bg-[#0f172a] rounded-[41px] p-[2.5px] flex flex-col relative">
                
                {/* Micro Ear-Speaker Bezel */}
                <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-[35px] h-[1px] bg-neutral-900 rounded-full z-50" />

                {/* FLOATING PUSH BANNER */}
                <div className={`absolute top-2 left-1/2 -translate-x-1/2 w-[92%] bg-white/95 backdrop-blur-md rounded-2xl p-2.5 shadow-xl border border-neutral-200/80 z-50 transition-all duration-500 flex items-start gap-2 ${
                  showNotification ? "opacity-100 translate-y-1 scale-100" : "opacity-0 -translate-y-12 scale-95 pointer-events-none"
                }`}>
                  <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center text-white shrink-0 shadow-sm">
                    <Bell className="w-3.5 h-3.5 animate-bounce" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-bold text-gray-900 tracking-tight">
                        {language === "english" ? "Order Placed!" : "Order Placed!"}
                      </span>
                      <span className="text-[7px] text-gray-400">Just now</span>
                    </div>
                    <p className="text-[8px] text-gray-600 font-medium leading-tight mt-0.5">
                      {language === "english" 
                        ? "CB-WARMUP-9921 confirmed via Cash on Delivery." 
                        : "SB-HELMET-9921 confirmed via Cash on Delivery."}
                    </p>
                  </div>
                </div>

                {/* Main Screen Canvas Area */}
                <div className="w-full h-full bg-[#efeae2] rounded-[38px] overflow-hidden relative flex flex-col select-none">
                  
                  {/* Ultra-Slim Dynamic Island */}
                  <div className={`absolute top-1 left-1/2 -translate-x-1/2 bg-black text-white rounded-full transition-all duration-300 ease-out z-50 flex items-center justify-center shadow-lg ${
                    isTyping ? "w-[115px] h-[16px] px-3" : "w-[50px] h-[10px]"
                  }`}>
                    {isTyping ? (
                      <div className="w-full flex items-center justify-between text-[6.5px] tracking-tight text-emerald-400 font-medium animate-[rise_0.2s_ease-out]">
                        <span className="flex items-center gap-1 scale-90 origin-left">
                          <ShoppingBag className="w-1.5 h-1.5 text-white" />
                          Jezzy AI
                        </span>
                        <div className="flex gap-0.5 items-center">
                          <span className="w-1 h-1 bg-emerald-400 rounded-full animate-ping" />
                        </div>
                      </div>
                    ) : (
                      <div className="w-1 h-1 rounded-full bg-neutral-900/40" />
                    )}
                  </div>

                  {/* System Top Status Bar */}
                  <div className="h-7 pt-2.5 px-5 flex justify-between items-center text-white text-[7.5px] font-semibold z-40 bg-[#075e54]">
                    <span className="text-white/95 font-medium">02:14</span>
                    <div className="flex items-center gap-1 opacity-95 scale-85 origin-right">
                      <span className="text-[6.5px] font-bold tracking-tight">5G</span>
                      <div className="w-3 h-1.5 border border-white/70 rounded-[1.5px] p-[0.5px] flex items-center">
                        <div className="w-full h-full bg-white rounded-[0.2px]" />
                      </div>
                    </div>
                  </div>

                  {/* Header Nav Element */}
                  <div className="bg-[#075e54] text-white pt-0.5 pb-2 px-3 flex items-center justify-between shadow-xs z-30">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <svg className="w-2.5 h-2.5 opacity-80" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                      <div className="w-5.5 h-5.5 rounded-full bg-emerald-800 border border-white/10 flex items-center justify-center font-bold text-[7.5px] flex-shrink-0 text-emerald-50">
                        VS
                      </div>
                      <div className="leading-tight min-w-0">
                        <div className="flex items-center gap-0.5">
                          <span className="text-[9px] font-bold tracking-wide block truncate max-w-[75px]">VooStore</span>
                          <svg className="w-2 h-2 text-[#34b7f1] fill-current" viewBox="0 0 24 24">
                            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                          </svg>
                        </div>
                        <small className="text-[6.5px] text-emerald-200/80 block scale-90 origin-left">Verified Business</small>
                      </div>
                    </div>
                  </div>

                  {/* Message Thread Canvas */}
                  <div 
                    id="demoChat" 
                    ref={chatContainerRef}
                    className="flex-1 p-2 flex flex-col gap-1.5 overflow-y-scroll scroll-smooth relative select-text"
                    style={{
                      backgroundImage: `url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")`,
                      backgroundSize: "contain",
                      backgroundRepeat: "repeat",
                      scrollbarWidth: "none", 
                      msOverflowStyle: "none"  
                    }}
                  >
                    {chatLog.map((msg, idx) => {
                      if (msg.sender === "unified-order") {
                        return (
                          <div key={idx} className="self-start bg-white p-2 rounded-lg rounded-tl-none max-w-[88%] shadow-sm ml-0.5 my-0.5 border border-neutral-200/60 flex flex-col gap-1.5 animate-[rise_0.3s_ease-out_forwards]">
                            <p className="text-[9px] text-[#111b21] font-medium whitespace-pre-line break-words leading-normal">
                              {msg.text}
                            </p>
                            <div className="border border-neutral-100 rounded-md overflow-hidden bg-gray-50 p-0.5">
                              <img src={msg.imageUrl} alt="product asset" className="w-full h-20 object-cover rounded-sm" />
                              <div className="p-1 text-[7px] text-gray-400 font-medium tracking-tight bg-white">
                                {msg.imageCaption}
                              </div>
                            </div>
                            <div className="flex justify-end text-[6.5px] text-gray-400 select-none -mt-1">
                              <time>{msg.time}</time>
                            </div>
                          </div>
                        );
                      }

                      if (msg.sender === "image") {
                        return (
                          <div key={idx} className="self-start bg-white p-1 rounded-lg max-w-[80%] shadow-xs ml-0.5 my-0.5 border border-neutral-200/40 animate-[rise_0.3s_ease-out_forwards]">
                            <img src={msg.url} alt="product" className="w-full h-20 object-cover rounded-md" />
                            <div className="p-1 text-[7px] text-gray-500 font-medium leading-tight">{msg.caption}</div>
                          </div>
                        );
                      }

                      const isUser = msg.sender === "user";
                      return (
                        <div
                          key={idx}
                          className={`max-w-[85%] p-1.5 px-2 text-[9px] relative shadow-xs leading-snug border border-black/[0.02] animate-[rise_0.3s_ease-out_forwards] ${
                            isUser
                              ? "bg-[#d9fdd3] text-[#111b21] self-end rounded-lg rounded-tr-none mr-0.5"
                              : "bg-white text-[#111b21] self-start rounded-lg rounded-tl-none ml-0.5"
                          }`}
                        >
                          <p className="pr-4 text-slate-950 font-medium whitespace-pre-line break-words leading-normal">{msg.text}</p>
                          <div className="absolute bottom-0.5 right-1 flex items-center gap-0.5 text-[6px] text-gray-400 select-none">
                            <time>{msg.time}</time>
                            {isUser && (
                              <svg className="w-1.5 h-1.5 text-[#34b7f1]" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                              </svg>
                            )}
                          </div>
                        </div>
                      );
                    })}

                    {isTyping && (
                      <div className="self-start bg-white rounded-lg rounded-tl-none p-1.5 px-2 flex gap-0.5 shadow-xs ml-0.5 border border-black/5 items-center">
                        <span className="w-1 h-1 rounded-full bg-emerald-600 opacity-60 animate-[blink_1.2s_infinite]"></span>
                        <span className="w-1 h-1 rounded-full bg-emerald-600 opacity-60 animate-[blink_1.2s_infinite_0.2s]"></span>
                        <span className="w-1 h-1 rounded-full bg-emerald-600 opacity-60 animate-[blink_1.2s_infinite_0.4s]"></span>
                      </div>
                    )}
                  </div>

                  {/* Input Tray */}
                  <div className="bg-[#f0f2f5] p-1.5 pb-3 px-2 flex flex-col gap-1 border-t border-gray-200/40 z-30">
                    <div className="flex items-center gap-1.5">
                      <div className="bg-white flex-1 h-5.5 rounded-full px-2.5 flex items-center justify-between border border-gray-200/80">
                        <span className="text-gray-400 text-[8px] font-medium">Type a message...</span>
                      </div>
                      <div className="w-5.5 h-5.5 rounded-full bg-[#00a884] flex items-center justify-center text-white shadow-xs flex-shrink-0 active:bg-[#008f72] cursor-pointer transition-colors">
                        <Send className="w-2.5 h-2.5 text-white fill-white translate-x-[0.5px]" />
                      </div>
                    </div>
                    <div className="w-16 h-[2.5px] bg-black/35 rounded-full mx-auto" />
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Right Column Step Interface Controls */}
          <div className="flex flex-col justify-center space-y-5 w-full">
            
            {/* Language Selection Tabs */}
            <div className="flex p-1 bg-gray-100 rounded-xl max-w-[240px] border border-gray-200">
              <button
                onClick={() => setLanguage("english")}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  language === "english"
                    ? "bg-white text-[var(--main-green-color)] shadow-sm border border-gray-200/50"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                English Chat
              </button>
              <button
                onClick={() => setLanguage("sinhala")}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  language === "sinhala"
                    ? "bg-white text-[var(--main-green-color)] shadow-sm border border-gray-200/50"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                Sinhala Chat
              </button>
            </div>

            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-bold text-[1.05rem] text-gray-900 tracking-tight mb-1 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  Send a message as the customer:
                </h3>
                <p className="text-xs text-gray-500">
                  Step-by-step custom sequence layout. Try selecting steps to monitor how properties display in real time.
                </p>
              </div>
              
              <button 
                onClick={handleRefresh}
                className="p-2 cursor-pointer rounded-lg bg-gray-100 hover:bg-emerald-100 text-gray-600 hover:text-emerald-700 transition-all shadow-xs flex items-center justify-center shrink-0 border border-gray-200 hover:border-emerald-300 active:scale-95"
                title="Restart Chat Simulation Sequence"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex flex-col gap-2 w-full">
              {interactiveSteps.map((step, index) => {
                const isSelected = clickedSteps.includes(step.key);
                const isLocked = index !== currentStepIndex; 
                
                return (
                  <button
                    key={step.key}
                    disabled={isTyping || isLocked}
                    onClick={() => handleChipClick(step.key, index)}
                    className={`w-full p-3 rounded-xl border text-left transition-all duration-300 flex items-start gap-3 relative ${
                      activeChip === step.key
                        ? "border-emerald-600 bg-emerald-50/80 shadow-xs"
                        : isLocked
                        ? "border-gray-200 bg-gray-50/70 opacity-45 cursor-not-allowed"
                        : isSelected
                        ? "border-emerald-300 bg-emerald-50/30"
                        : "border-gray-200 bg-white hover:border-emerald-400 hover:bg-slate-50/50 hover:-translate-y-0.5 cursor-pointer shadow-xs"
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center font-bold text-[10px] mt-0.5 transition-colors shrink-0 ${
                      isSelected 
                        ? "bg-[var(--main-green-color)] text-white" 
                        : isLocked
                        ? "bg-gray-200 text-gray-400"
                        : "bg-emerald-100 text-[var(--main-green-color)] border border-emerald-200"
                    }`}>
                      {isSelected ? (
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      ) : isLocked ? (
                        <Lock className="w-2.5 h-2.5" />
                      ) : (
                        index + 1
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider leading-none mb-1 flex items-center gap-1.5">
                        {step.label} 
                        {!isSelected && !isLocked && (
                          <span className="w-1.5 h-1.5 bg-[var(--main-green-color)] rounded-full animate-ping" />
                        )}
                      </div>
                      {/* CHANGED: Swapped truncate for normal break-words layout to fix tablet cutoff text */}
                      <div className={`text-xs font-semibold break-words ${isLocked ? "text-gray-400 font-normal" : "text-gray-800"}`}>
                        "{step.text}"
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {currentStepIndex > 3 && (
              <div className="bg-emerald-50 border border-emerald-200 p-2.5 rounded-xl text-xs font-medium text-emerald-800 text-center animate-[rise_0.3s_ease-out]">
                🎉 Chat complete! Click the refresh icon button above to try again.
              </div>
            )}

            <div className="space-y-3 pt-2 border-t border-gray-100">
              <p className="text-xs text-gray-600 border-l-[3px] border-l-amber-500 pl-3 leading-relaxed font-medium bg-amber-50/50 py-2 pr-2 rounded-r-lg">
                In your store, Jezzy Ai answers from your real catalog, prices and delivery rules, this demo uses sample data. The full version also sends photos, voice-note replies and payment links.
              </p>

              <div className="pt-0.5">
                <Link to='/demo' className="block md:inline-block">
                  <button className="w-full cursor-pointer md:w-auto bg-[var(--main-green-color)] text-white font-semibold text-xs px-6 py-3 rounded-xl shadow-md hover:bg-[var(--main-green-color)]/90 transition-all duration-200 transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 group">
                    <span>Try More</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Target hidden webkit scrollbars container */}
      <style dangerouslySetInnerHTML={{__html: `
        #demoChat::-webkit-scrollbar {
          display: none;
        }
        @keyframes blink {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        @keyframes rise {
          0% { opacity: 0; transform: translateY(6px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </section>
  );
}