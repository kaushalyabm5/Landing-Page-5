import React, { useState, useEffect, useRef } from 'react';

export default function Phone() {
  const conversation = [
    { type: 'in', text: 'Hi! Do you have linen shirts in white, medium size?', time: '14:02' },
    { type: 'out', text: 'Hi there! Yes, we do. Our Premium Linen Shirt is available in White / Medium.', time: '14:02' },
    { type: 'out', text: 'It is priced at Rs. 4,800 with free delivery. Shall I secure one for you?', time: '14:03', read: true },
    { type: 'in', text: 'Yes please! Shipping address is 42, Galle Road, Colombo 03.', time: '14:03' },
    { type: 'typing', time: '' },
    { 
      type: 'order', 
      id: 'ORDER #2481', 
      items: [{ name: 'Premium Linen Shirt (White / M)', qty: 1, price: 'Rs. 4,800' }],
      total: 'Rs. 4,800',
      time: '14:04'
    },
    { type: 'out', text: 'Order confirmed! 🎉 I have sent a secure payment link.', time: '14:04', read: true }
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
          setVisibleMessages((prev) => [...prev, currentMsg]);
          currentIdx++;
          const delay = currentMsg.type === 'typing' ? 1500 : 2000;
          timers.push(setTimeout(showNextMessage, delay));
        } else {
          timers.push(setTimeout(runChatSequence, 4000));
        }
      };
      showNextMessage();
    };
    runChatSequence();
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-[320px] h-[650px] bg-[#1a1a1a] rounded-[55px] p-[10px] shadow-2xl border-[8px] border-[#2a2a2a] relative overflow-hidden flex flex-col">
      {/* WhatsApp Background Pattern */}
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')",
        backgroundSize: "200px"
      }} />

      {/* Header */}
      <div className="bg-[#1f2c34] p-4 pt-8 flex items-center gap-3 relative z-10">
        <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-white shadow-lg">FA</div>
        <div className="flex-1">
          <div className="text-white font-semibold text-sm">Flow Agent</div>
          <div className="text-emerald-400 text-[11px]">online</div>
        </div>
      </div>

      {/* Chat Area */}
      <div ref={chatContainerRef} className="flex-1 p-4 flex flex-col gap-2 overflow-y-auto relative z-10">
        {visibleMessages.map((msg, index) => (
          <div key={index} className={`flex ${msg.type === 'in' ? 'justify-start' : 'justify-end'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
            {msg.type === 'typing' ? (
              <div className="bg-[#1f2c34] px-4 py-3 rounded-2xl rounded-tl-none flex gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300" />
              </div>
            ) : msg.type === 'order' ? (
              <div className="bg-[#1f2c34] text-white p-4 rounded-xl border-l-4 border-emerald-500 w-[90%] shadow-md">
                <div className="text-[10px] text-emerald-400 font-bold mb-1">{msg.id}</div>
                <div className="text-sm">{msg.items[0].name}</div>
                <div className="text-lg font-bold mt-2 text-emerald-400">{msg.total}</div>
              </div>
            ) : (
              <div className={`relative max-w-[85%] px-3 py-2 rounded-lg text-sm shadow-sm ${
                msg.type === 'in' ? 'bg-[#1f2c34] text-white rounded-tl-none' : 'bg-[#005c4b] text-white rounded-tr-none'
              }`}>
                {msg.text}
                <span className="text-[10px] ml-2 opacity-60 float-right mt-1">{msg.time}</span>
                {msg.read && <span className="text-[10px] ml-1 text-blue-300">✓✓</span>}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-3 bg-[#1f2c34] relative z-10">
        <div className="bg-[#2a3942] rounded-full py-2 px-4 text-gray-400 text-sm">Message</div>
      </div>
    </div>
  );
}