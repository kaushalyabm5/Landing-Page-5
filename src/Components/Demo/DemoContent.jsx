import { ArrowLeft, Send, CheckCheck, Paperclip, Smile, Image, Volume2 } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

export default function DemoContent() {
  const [chatLog, setChatLog] = useState([
    { sender: "agent", type: "text", text: "Hello! Welcome to Mara Studio Advanced Sandbox. 🌟\n\nI am Flow Agent, powered by AI. Try typing anything below (e.g., 'Do you have discounts?', 'Show me shirts', or 'Where is my order?') to see how I handle your store!", time: "10:00 AM" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef(null);

  // Auto scroll window directly to the absolute bottom on updates
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [chatLog, isTyping]);

  const generateAIResponse = (userInput) => {
    const text = userInput.toLowerCase();
    const currentHour = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    if (text.includes("linen") || text.includes("shirt") || text.includes("show")) {
      return [
        { sender: "agent", type: "text", text: "Here is our latest Premium Irish Linen Shirt in Olive Green. Handcrafted with 100% breathable linen fabric.", time: currentHour },
        { sender: "agent", type: "image", src: "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=400&q=80", caption: "Premium Irish Linen Shirt - 6,900 LKR", time: currentHour }
      ];
    } 
    else if (text.includes("delivery") || text.includes("kandy") || text.includes("colombo")) {
      return [
        { sender: "agent", type: "text", text: "We deliver island-wide! 🚚\n• Colombo: 1-2 days (350 LKR)\n• Outstation (Kandy, Galle, etc.): 2-3 days (450 LKR)\n\n*Free shipping applies for 2 or more items!*", time: currentHour }
      ];
    }
    else if (text.includes("pay") || text.includes("card") || text.includes("koko") || text.includes("cash")) {
      return [
        { sender: "agent", type: "text", text: "We offer multiple secure payment methods for your convenience:\n\n💳 Visa/Mastercard\n📱 Genie / Koko (3 interest-free installments)\n🏦 Bank Transfer & Cash on Delivery (COD)", time: currentHour }
      ];
    }
    else if (text.includes("discount") || text.includes("offer") || text.includes("code")) {
      return [
        { sender: "agent", type: "text", text: "Lucky you! 🥳 Use code **MARA10** at checkout to get 10% OFF on your entire order.", time: currentHour }
      ];
    }
    else if (text.includes("buy") || text.includes("order") || text.includes("take")) {
      return [
        { sender: "agent", type: "order", id: "SANDBOX #7012", items: "1x Premium Linen Shirt (M) - Olive\n1x Sandstone Linen (M)", total: "13,800 LKR", time: currentHour },
        { sender: "agent", type: "text", text: "I have generated your order overview! Please use this instant checkout link to complete the delivery details: mara.st/pay-sandbox", time: currentHour }
      ];
    }
    else if (text.includes("voice") || text.includes("audio") || text.includes("hello") || text.includes("hi")) {
      return [
        { sender: "agent", type: "text", text: "Hi! Flow Agent can also speak to your customers using natural voice responses. Listen to this:", time: currentHour },
        { sender: "agent", type: "audio", duration: "0:12", time: currentHour }
      ];
    }
    else {
      return [
        { sender: "agent", type: "text", text: "I understand! As an AI agent, I can check inventory, calculate shipping, create links, and guide users to buy. Try typing 'show shirts' or 'discount' to see my specific tools!", time: currentHour }
      ];
    }
  };

  const handleSendMessage = () => {
    const msgText = inputValue.trim();
    if (!msgText || isTyping) return;

    const currentHour = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    const userMessage = { sender: "user", type: "text", text: msgText, time: currentHour };
    setChatLog((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const botReplies = generateAIResponse(msgText);
      setChatLog((prev) => [...prev, ...botReplies]);
    }, 1200);
  };

  return (
    // Locked full-screen viewport layout preventing browser scrollbars
    <section className="h-screen w-screen bg-[white] text-[#122B21] overflow-hidden flex flex-col font-sans">
     

      {/* CORE FRAME: Decreased maximum width layout to max-w-4xl */}
      <div className="flex-1 w-full max-w-4xl mx-auto p-4 pb-20 pt-20 flex flex-col min-h-0">
        
        {/* Horizontal Screen Chassis Frame - Thin Bezels (p-1) and Balanced Aspect Ratio */}
        <div className="w-full h-full bg-[#1c1c1e] rounded-xl p-1 shadow-[0_30px_70px_-20px_rgba(18,43,33,0.22),0_0_0_2px_#2c2c2e] flex flex-col min-h-0 relative">
          
          {/* Internal Application Monitor Window Screen */}
          <div className="w-full h-full bg-[#efeae2] rounded-[10px] overflow-hidden relative flex flex-col select-none min-h-0">
            
            {/* WhatsApp Web Desktop Layout Top Bar */}
            <div className="bg-[#f0f2f5] border-b border-gray-300/60 py-3 px-5 flex items-center justify-between flex-shrink-0 z-30">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-800 border border-white/20 flex items-center justify-center font-bold text-xs tracking-wider flex-shrink-0 text-emerald-50 shadow-inner">
                  MS
                </div>
                <div className="leading-tight">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-semibold tracking-wide text-gray-800">Mara Studio Bot</span>
                    <div className="w-3 h-3 bg-[#34b7f1] rounded-full flex items-center justify-center text-[7px] text-white font-bold">✓</div>
                  </div>
                  <small className="text-[10px] text-emerald-700/80 font-medium block">Flow Agent Live Connected</small>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-gray-500 text-sm opacity-90 pr-2">
                <span className="cursor-pointer hover:text-gray-800 transition-colors">🔍</span>
                <span className="cursor-pointer hover:text-gray-800 transition-colors">⋮</span>
              </div>
            </div>

            {/* Main Interactive Chat Log - DYNAMIC INTERNAL VERTICAL SCROLL */}
            <div 
              ref={chatContainerRef}
              className="flex-1 p-6 flex flex-col gap-3 overflow-y-auto relative min-h-0"
              style={{
                backgroundImage: `url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")`,
                backgroundSize: "contain",
                backgroundRepeat: "repeat"
              }}
            >
              <div className="w-full max-w-3xl mx-auto flex flex-col gap-2.5">
                {chatLog.map((msg, idx) => {
                  const isUser = msg.sender === "user";

                  if (msg.type === "order") {
                    return (
                      <div key={idx} className="self-start bg-white border-l-4 border-l-amber-500 p-3.5 rounded-r-xl max-w-[75%] text-xs shadow-xs my-0.5 w-72">
                        <div className="font-mono text-[9px] font-bold text-amber-600 tracking-wider mb-1">{msg.id}</div>
                        <div className="text-gray-700 font-medium leading-relaxed whitespace-pre-line border-b border-gray-100 pb-2">{msg.items}</div>
                        <div className="flex justify-between gap-2 text-black font-bold pt-2">
                          <span className="text-gray-500 font-medium">Grand Total</span>
                          <span className="text-emerald-700 font-mono">{msg.total}</span>
                        </div>
                      </div>
                    );
                  }

                  if (msg.type === "image") {
                    return (
                      <div key={idx} className="self-start bg-white p-1.5 rounded-xl max-w-[55%] shadow-xs border border-black/5 my-0.5 overflow-hidden">
                        <img src={msg.src} alt="Product Card Preview" className="w-full h-48 object-cover rounded-lg" />
                        {msg.caption && <p className="text-xs text-gray-800 font-medium p-2 pt-2 pb-0.5 leading-snug">{msg.caption}</p>}
                        <div className="text-[8px] text-gray-400 text-right pr-1 pb-0.5 font-sans mt-0.5">{msg.time}</div>
                      </div>
                    );
                  }

                  if (msg.type === "audio") {
                    return (
                      <div key={idx} className="self-start bg-white p-3 rounded-xl rounded-tl-none max-w-[55%] shadow-xs flex items-center gap-3 border border-black/5 my-0.5 w-64">
                        <div className="w-8 h-8 rounded-full bg-[#E1F3EC] flex items-center justify-center text-xs text-[#1F7A4D] flex-shrink-0 cursor-pointer hover:scale-105 transition-transform">
                          ▶️
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center gap-1.5">
                            <Volume2 className="w-3 h-3 text-gray-400" />
                            <div className="h-1 bg-[#1F7A4D] w-full rounded-full opacity-60"></div>
                          </div>
                          <div className="flex justify-between text-[8px] text-gray-400 font-sans">
                            <span>Voice response</span>
                            <span>{msg.duration}</span>
                          </div>
                        </div>
                        <div className="text-[8px] text-gray-400 self-end font-sans">{msg.time}</div>
                      </div>
                    );
                  }

                  return (
                    <div
                      key={idx}
                      className={`max-w-[80%] p-2.5 px-4 text-xs relative shadow-[0_1px_1.5px_rgba(0,0,0,0.06)] leading-relaxed border border-black/5 ${
                        isUser
                          ? "bg-[#d9fdd3] text-[#111b21] self-end rounded-xl rounded-tr-none"
                          : "bg-white text-[#111b21] self-start rounded-xl rounded-tl-none"
                      }`}
                    >
                      <p className="pr-4 whitespace-pre-line break-words">{msg.text}</p>
                      
                      <div className="flex items-center justify-end gap-1 text-[8px] text-gray-400 font-sans mt-1 select-none text-right w-full">
                        <time>{msg.time}</time>
                        {isUser && <CheckCheck className="w-3 h-3 text-[#34b7f1] stroke-[2.5]" />}
                      </div>
                    </div>
                  );
                })}

                {isTyping && (
                  <div className="self-start bg-white rounded-xl rounded-tl-none p-2 px-3.5 flex gap-1 shadow-xs border border-black/5 items-center">
                    <span className="text-[9px] text-gray-400 font-medium mr-1">Flow Agent is typing</span>
                    <span className="w-1 h-1 rounded-full bg-emerald-600 opacity-60 animate-bounce"></span>
                    <span className="w-1 h-1 rounded-full bg-emerald-600 opacity-60 animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1 h-1 rounded-full bg-emerald-600 opacity-60 animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Keyboard Fixed Action Form Controller */}
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
              className="bg-[#f0f2f5] p-3 px-6 flex items-center gap-3 border-t border-gray-300/40 z-30 flex-shrink-0"
            >
              <div className="flex items-center gap-4 text-gray-500 text-lg">
                <Smile className="w-5 h-5 cursor-pointer hover:text-gray-700 transition-colors flex-shrink-0" />
                <Paperclip className="w-[18px] h-[18px] cursor-pointer hover:text-gray-700 transition-colors flex-shrink-0" />
              </div>

              <div className="bg-white flex-1 h-9 rounded-lg px-3.5 flex items-center border border-gray-200/80 shadow-3xs">
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type a message..." 
                  disabled={isTyping}
                  className="bg-transparent flex-1 h-full text-xs text-gray-800 outline-none disabled:opacity-50"
                />
                <Image className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors flex-shrink-0" />
              </div>
              
              <button 
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="w-9 h-9 rounded-full bg-[#00a884] hover:bg-[#008f72] active:scale-95 transition-all flex items-center justify-center text-white shadow-xs flex-shrink-0 disabled:opacity-40 disabled:scale-100 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5 fill-current pl-0.5" />
              </button>
            </form>

          </div>
        </div>

      </div>
    </section>
  );
}