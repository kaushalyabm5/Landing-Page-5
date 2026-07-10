import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MessageSquare, Image, Layers, UserCheck, MapPin, FileCheck, Users, Zap, Network, BarChart3, Languages } from 'lucide-react';

const features = [
  {
    num: "01 / 12",
    tag: "Product Sharing",
    title: "Instant product sharing, without the manual work.",
    desc: "Agent Jezzy automatically finds and sends the right product photo, price, and details inside the chat — so your team never has to scroll through the gallery again.",
    icon: <Image size={16} className="text-[#E1306C]" />,
    visual: (
      <div className="w-full max-w-sm bg-neutral-50 rounded-2xl p-4 shadow-sm text-neutral-800 font-sans border border-neutral-200/80 text-xs">
        <div className="flex items-center justify-between border-b border-neutral-200 pb-2 mb-3">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span className="text-[10px] font-mono opacity-60 text-neutral-500">LIVE INSTAGRAM DM</span>
          </div>
          <span className="text-[9px] bg-[#25D366]/10 text-[#15803d] px-1.5 py-0.5 rounded font-mono font-semibold">0.4s reply</span>
        </div>
        <div className="space-y-2">
          <div className="bg-neutral-200/50 rounded-xl p-2.5 max-w-[85%] border border-neutral-200/20">
            <p className="text-neutral-700">Price eka kiyada? Can I get this delivered tomorrow morning?</p>
          </div>
          <div className="bg-[#DCF5E4] text-[#07050f] rounded-xl p-2.5 max-w-[85%] ml-auto border border-emerald-200/60">
            <p className="font-medium">Rs. 2,500/-! Deliveries to Colombo take under 12 hours. Share your address below! 📦</p>
          </div>
        </div>
      </div>
    )
  },
  {
    num: "02 / 12",
    tag: "Human replies",
    title: "Human-like replies for every customer message.",
    desc: "Agent Jezzy understands what customers mean and replies naturally — just like your best salesperson, without “press 1” or copy-paste messages.",
    icon: <MessageSquare size={16} className="text-[#1877F2]" />,
    visual: (
      <div className="w-full max-w-sm bg-neutral-50 border border-neutral-200/80 shadow-sm rounded-2xl overflow-hidden font-sans text-neutral-800 text-xs">
        <div className="bg-neutral-100/80 border-b border-neutral-200 px-3 py-2 flex items-center justify-between">
          <span className="text-[10px] font-mono text-neutral-500">NLP Intent Parser</span>
          <span className="text-[10px] text-[#1877F2] font-semibold">Match: 99.4%</span>
        </div>
        <div className="p-3 space-y-2">
          <div className="bg-neutral-200/50 border border-neutral-200/40 rounded-xl p-2.5 text-neutral-700 max-w-[85%]">
            Meke blue ekak nadda? Model eka wenasda size eka ekka?
          </div>
          <div className="bg-white border border-neutral-200 text-neutral-800 rounded-xl p-2.5 max-w-[85%] ml-auto shadow-sm">
            Blue eka iwarai, danata thiyenne Black and White witharai. 🎨 Fabric & sizing patterns map identically!
          </div>
        </div>
      </div>
    )
  },
  {
    num: "03 / 12",
    tag: "Instant Sales",
    title: "Reply instantly. Sell before the customer leaves",
    desc: "Agent Jezzy answers every WhatsApp and Instagram message instantly, so interested customers get the right reply before they move to another seller.",
    icon: <Zap size={16} className="text-[#25D366]" />,
    visual: (
      <div className="w-full max-w-sm bg-neutral-50 border border-neutral-200/80 rounded-2xl p-4 shadow-sm font-sans text-neutral-800 text-xs">
        <div className="grid grid-cols-3 gap-2 mb-3">
          <div className="border border-neutral-200 rounded-lg bg-white p-2 text-center opacity-40 text-lg">🧥</div>
          <div className="border-2 border-[#E1306C] rounded-lg bg-[#E1306C]/5 p-2 text-center relative text-lg">
            <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#E1306C]" />
            自由 👗
          </div>
          <div className="border border-neutral-200 rounded-lg bg-white p-2 text-center opacity-40 text-lg">Bag</div>
        </div>
        <div className="bg-[#E1306C]/5 border border-[#E1306C]/10 rounded-xl p-2 text-[11px] text-neutral-700">
          <span className="font-bold text-[#E1306C]">Dispatched Asset:</span> Matched standard photo layout for query <span className="italic">"Office wear items"</span>.
        </div>
      </div>
    )
  },
  {
    num: "04 / 12",
    tag: "Stock control",
    title: "Control stock in real time, from anywhere.",
    desc: "Update product availability from your phone, and Agent Jezzy instantly syncs it across WhatsApp and Instagram so customers always get the correct stock information.",
    icon: <Layers size={16} className="text-[#25D366]" />,
    visual: (
      <div className="w-full max-w-sm bg-neutral-50 border border-neutral-200/80 rounded-2xl p-4 shadow-sm font-sans text-neutral-800 text-xs space-y-2">
        <div className="flex justify-between items-center mb-1">
          <span className="font-bold text-neutral-900">Straight Linen Pants</span>
          <span className="font-mono bg-neutral-200 px-1.5 py-0.5 rounded text-neutral-700">Rs. 2,100</span>
        </div>
        <div className="flex items-center justify-between p-2 rounded-lg bg-white opacity-50 border border-neutral-100">
          <span>Light Blue (SKU: 28B1)</span>
          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-red-50 text-red-600 font-medium">Out of Stock</span>
        </div>
        <div className="flex items-center justify-between p-2 rounded-lg bg-[#DCF5E4] border border-emerald-200">
          <span className="font-semibold text-neutral-800">Dark Blue (SKU: 28B2)</span>
          <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-white text-[#15803d] shadow-sm">Active - 42 units</span>
        </div>
      </div>
    )
  },
  {
    num: "05 / 12",
    tag: "Data Capture",
    title: "Customer details captured automatically.",
    desc: "Agent Jezzy detects names, phone numbers, and addresses from customer messages and saves them directly into the order pipeline — no repeated questions, no manual typing.",
    icon: <UserCheck size={16} className="text-[#1877F2]" />,
    visual: (
      <div className="w-full max-w-sm bg-neutral-50 border border-neutral-200/80 rounded-2xl p-4 shadow-sm font-sans text-neutral-800 text-xs">
        <div className="bg-neutral-200/60 border border-neutral-300/30 rounded-xl p-2 mb-3 font-mono text-neutral-600 text-[11px]">
          "Nimal, 0771234567, 12/A, Galle Rd, Colombo 03"
        </div>
        <div className="space-y-1.5">
          <div className="flex justify-between border-b border-neutral-200 pb-1">
            <span className="text-neutral-400">Name</span><span className="font-bold text-amber-700">Nimal</span>
          </div>
          <div className="flex justify-between border-b border-neutral-200 pb-1">
            <span className="text-neutral-400">Phone</span><span className="font-mono text-blue-700">077 123 4567</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-400">Shipping</span><span className="font-bold text-purple-700 truncate max-w-[60%]">Galle Rd, Colombo 03</span>
          </div>
        </div>
      </div>
    )
  },
  {
    num: "06 / 12",
    tag: "Smart Delivery",
    title: "Smart delivery pricing by location.",
    desc: "Agent Jezzy checks the customer’s location, applies your delivery rules, and gives the full order total instantly — no manual calculations needed.",
    icon: <MapPin size={16} className="text-[#E1306C]" />,
    visual: (
      <div className="w-full max-w-sm bg-neutral-50 border border-neutral-200/80 rounded-2xl p-4 shadow-sm font-sans text-neutral-800 text-xs space-y-2">
        <span className="text-[10px] font-mono text-neutral-400 uppercase block">Dynamic Location Router</span>
        <div className="flex justify-between p-2 rounded bg-white border border-neutral-100 text-neutral-600">
          <span>Colombo Core District</span>
          <span className="font-mono">Rs. 250</span>
        </div>
        <div className="flex justify-between p-2 rounded bg-[#E1306C]/5 border border-[#E1306C]/20">
          <span className="text-neutral-800 font-bold">Southern Province (Galle)</span>
          <span className="font-mono font-bold text-[#E1306C]">Rs. 300</span>
        </div>
      </div>
    )
  },
  {
    num: "07 / 12",
    tag: "Auto Confirmation",
    title: "Automated order confirmations in seconds.",
    desc: "Agent Jezzy creates a clean order summary with items, delivery fee, payment method, and total amount — ready for the customer to confirm instantly.",
    icon: <FileCheck size={16} className="text-[#25D366]" />,
    visual: (
      <div className="w-full max-w-sm bg-neutral-50 border border-neutral-200/80 rounded-2xl p-4 shadow-sm font-sans text-neutral-800 text-xs">
        <span className="text-[9px] bg-[#DCF5E4] text-[#15803d] font-mono font-bold px-1.5 py-0.5 rounded float-right">READY</span>
        <span className="text-[10px] font-mono text-neutral-400 block mb-3">INVOICE PREVIEW</span>
        <div className="border-b border-dashed border-neutral-300 pb-2 mb-2 space-y-1 text-neutral-600">
          <div className="flex justify-between"><span>Summer Dress ×1</span><span className="font-mono text-neutral-800">Rs. 3,200</span></div>
          <div className="flex justify-between"><span>Delivery Surcharge</span><span className="font-mono text-neutral-800">Rs. 300</span></div>
        </div>
        <div className="flex justify-between items-center pt-1">
          <span className="text-[10px] font-mono font-semibold text-emerald-600">Cash on Delivery</span>
          <span className="text-base font-bold text-neutral-900">Rs. 3,500</span>
        </div>
      </div>
    )
  },
  {
    num: "08 / 12",
    tag: "Customer History",
    title: "Know every customer without keeping notes.",
    desc: "Agent Jezzy saves every customer’s details, chat history, order history, and buying behavior, so you can easily identify new buyers, repeat customers, and high-value customers.",
    icon: <Users size={16} className="text-[#1877F2]" />,
    visual: (
      <div className="w-full max-w-sm bg-neutral-50 border border-neutral-200/80 rounded-2xl p-3 shadow-sm font-sans text-neutral-800">
        <div className="flex items-center gap-3 p-2 rounded-xl bg-white border border-neutral-200/60">
          <div className="w-8 h-8 rounded-full bg-amber-500 text-white font-bold text-xs flex items-center justify-center">AS</div>
          <div className="flex-1 min-w-0">
            <h5 className="text-xs font-bold text-neutral-800 truncate">Amaya Silva</h5>
            <p className="text-[10px] text-neutral-400">12 historical actions tracked</p>
          </div>
          <span className="text-[9px] font-mono font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-100">Platinum</span>
        </div>
      </div>
    )
  },
  {
    num: "09 / 12",
    tag: "Chat Recovery",
    title: "Bring back customers who stop replying.",
    desc: "Agent Jezzy detects when interested customers stop replying and sends a natural follow-up message at the right time to bring them back and complete the sale.",
    icon: <Sparkles size={16} className="text-[#E1306C]" />,
    visual: (
      <div className="w-full max-w-sm bg-neutral-50 rounded-2xl p-4 shadow-sm text-neutral-800 font-sans border border-neutral-200/80 text-xs">
        <div className="space-y-2 relative pl-3 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-neutral-200">
          <div className="opacity-40 text-neutral-500"><p>Price sent to checkout window (Rs. 2,500).</p></div>
          <div className="bg-white rounded-lg p-2 border border-neutral-200 shadow-sm">
            <span className="font-mono text-[9px] text-amber-600 font-bold block mb-0.5">2 HOURS LATER (NUDGE)</span>
            <p className="text-neutral-700 italic">"Podi orders godak awa, oya balapu eken thawa 1i thiyenne. Confirm karanawada damma?"</p>
          </div>
        </div>
      </div>
    )
  },
  {
    num: "10 / 12",
    tag: "One Dashboard",
    title: "Manage every order, product, and chat from one dashboard.",
    desc: "Agent Jezzy brings WhatsApp and Instagram orders, products, stock, and customer chats into one simple dashboard — so your team can manage everything without switching between apps.",
    icon: <Network size={16} className="text-[#25D366]" />,
    visual: (
      <div className="w-full max-w-sm bg-neutral-50 border border-neutral-200/80 rounded-2xl overflow-hidden shadow-sm font-sans text-neutral-800 text-xs">
        <div className="bg-neutral-100/80 border-b border-neutral-200 px-3 py-1.5 text-[9px] font-mono tracking-wider text-neutral-400">
          CENTRAL INTEGRATION CONTROLLER
        </div>
        <div className="p-3 grid grid-cols-2 gap-2">
          <div className="border border-neutral-200 rounded-xl p-2 bg-white">
            <span className="font-bold block text-neutral-800 truncate">Tote Bag</span>
            <span className="text-[9px] text-emerald-600 font-mono font-medium">12 allocated</span>
          </div>
          <div className="border border-neutral-200 rounded-xl p-2 bg-white">
            <span className="font-bold block text-neutral-800 truncate">Summer Dress</span>
            <span className="text-[9px] text-emerald-600 font-mono font-medium">8 allocated</span>
          </div>
        </div>
      </div>
    )
  },
  {
    num: "11 / 12",
    tag: "Peak Performance",
    title: "Handle peak sales hours without slowing down.",
    desc: "Agent Jezzy can manage multiple customer conversations at the same time during busy periods like payday sales, weekend nights, or campaign launches — so every customer still gets a fast, personal reply.",
    icon: <BarChart3 size={16} className="text-[#1877F2]" />,
    visual: (
      <div className="w-full max-w-sm bg-neutral-50 border border-neutral-200/80 rounded-2xl p-4 shadow-sm font-sans text-neutral-800 text-xs">
        <div className="flex justify-between items-center mb-3">
          <span className="text-[10px] font-mono text-neutral-400">Throughput Engine</span>
          <span className="text-[8px] bg-red-50 text-red-600 border border-red-200 px-1.5 py-0.5 rounded-full font-bold">PEAK RUSH</span>
        </div>
        <div className="flex items-end gap-1 h-12 pt-2 px-1">
          {[40, 55, 48, 70, 62, 85, 78, 95, 100, 88, 92, 74, 82].map((height, i) => (
            <div key={i} style={{ height: `${height}%` }} className="flex-1 rounded-t-[1px] bg-[#25D366]" />
          ))}
        </div>
      </div>
    )
  },
  {
    num: "12 / 12",
    tag: "Sri Lankan Slang",
    title: "Understands Sri Lankan customer language naturally.",
    desc: "Agent Jezzy understands Sinhala, English, Tamil, Singlish, and everyday local slang, then replies in a natural way that feels familiar to your customers.",
    icon: <Languages size={16} className="text-[#E1306C]" />,
    visual: (
      <div className="w-full max-w-sm bg-neutral-50 border border-neutral-200/80 rounded-2xl p-3.5 shadow-sm font-sans text-neutral-800 text-xs">
        <div className="p-2.5 rounded-xl border border-neutral-200 bg-white space-y-1">
          <div className="font-semibold text-neutral-700 italic">"Gana poddak adu karanna barida? 🥺"</div>
          <div className="text-[9px] text-[#15803d] font-mono tracking-wider font-semibold">[Intent: Negotiation Type]</div>
        </div>
      </div>
    )
  }
];

export default function FeaturesCards() {
  return (
    <section 
      id="features" 
      className="relative w-full border-t border-neutral-100 bg-white text-neutral-600 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden flex flex-col items-center"
    >
      {/* Background Radial Lights - Toned down for pure white background context */}
      <div className="absolute top-[5%] left-[-10%] w-[600px] h-[600px] bg-[#25D366]/2 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-[#1877F2]/2 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[-5%] w-[600px] h-[600px] bg-[#E1306C]/2 rounded-full blur-[140px] pointer-events-none" />

      
     


        {/* ================= PERFECTLY CENTERED SECTION HEADER ================= */}
          <div className="max-w-6xl lg:max-w-4xl mx-auto text-center mb-12 sm:mb-16 flex flex-col items-center">
            <span className="inline-flex items-center gap-[8px] px-3.5 py-1 rounded-full bg-white/[0.03] backdrop-blur-md border border-[var(--main-green-color)] text-xs font-medium text-[var(--main-green-color)] tracking-tight mb-5 shadow-sm select-none">
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl tracking-[-0.03em] leading-[1.2] font-semibold text-[#000000]">
             Supercharged for automation. <span className="text-[var(--main-green-color)]"> Engineered for scale.</span>
            </h2>
           
          </div>

      {/* Stacked Layout Area */}
      <div className="max-w-5xl w-full mx-auto space-y-20 relative z-10">
        {features.map((feature, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full bg-white shadow-[0_10px_40px_rgba(0,0,0,0.3)] border border-neutral-200/70 rounded-2xl p-5 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-14 items-center h-auto md:h-[280px] hover:border-neutral-300 transition-colors duration-300"
            >
              {/* Text Module Area */}
              <div className={`md:col-span-7 flex flex-col justify-center space-y-3 h-full ${!isEven ? 'md:order-last' : ''}`}>
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-neutral-50 border border-neutral-200 text-neutral-700 text-[9px] font-mono uppercase tracking-wider font-semibold">
                    {feature.icon}
                    <span>{feature.tag}</span>
                  </div>
                </div>

                <h3 
                  className="text-lg lg:text-[1.5rem] font-extrabold tracking-tight bg-gradient-to-r from-[#25D366] via-[#1877F2] to-[#E1306C] bg-clip-text text-transparent leading-snug"
                  dangerouslySetInnerHTML={{ __html: feature.title }}
                />
                <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-xl font-normal">
                  {feature.desc}
                </p>
              </div>

              {/* Graphical Visualization Area */}
              <div className="md:col-span-5 flex justify-center items-center bg-neutral-100/60 rounded-xl p-4 border border-neutral-200/50 h-full min-h-[160px] md:min-h-0 overflow-hidden">
                <div className="w-full flex justify-center items-center transition-transform duration-300 group-hover:scale-[1.02]">
                  {feature.visual}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}