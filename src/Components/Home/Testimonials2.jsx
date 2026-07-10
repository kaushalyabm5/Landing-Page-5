import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import img1 from '../../assets/testimonials-img/1.jpg';
import img2 from '../../assets/testimonials-img/2.jpg';
import img3 from '../../assets/testimonials-img/3.jpg';
import img5 from '../../assets/testimonials-img/5.jpg';
import img6 from '../../assets/testimonials-img/6.jpg';
import img7 from '../../assets/testimonials-img/7.jpg';

// Recreated Sri Lankan Review Dataset mapped exactly to your unique UI structures
const testimonialPages = [
  // ================= PAGE 1 =================
  [
    {
      id: 'p1-c1',
      type: 'tall-image',
      stars: 5,
      tag: 'Clothing Brand',
      title: '"Our abandoned carts dropped by 60% thanks to the friendly Singlish follow-ups."',
      subtext: 'Nadeesha Jayasinghe',
      img: img1,
      author: 'Owner, Aura Luxe Clothing Shop'
    },
    {
      id: 'p1-c2',
      type: 'serif-quote',
      stars: 5,
      quote: '"We went from 40% conversion to 85% on WhatsApp within just one month."',
      name: 'Dimuthu Fernando',
      role: 'Operations Head, Kandy Threads',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 'p1-c3',
      type: 'dual-badge',
      names: 'Sonia & Robert (Co-founders)',
      rating: '5.0 Rating',
      avatars: [
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80'
      ]
    },
    {
      id: 'p1-c4',
      type: 'centerpiece',
      stars: 5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
      name: 'Shanuka Perera',
      role: 'Founder, Midnight Velvet Clothing',
      title: 'Replying to "price please" was a full-time job.',
      body: 'Now, the AI handles the catalog and takes orders even at 2 AM. Complete game changer for our fashion brand!'
    },
    {
      id: 'p1-c5',
      type: 'impact-statement',
      label: 'Highly Recommended',
      text: '"Sri Lankan customers love asking a hundred questions. This AI handles all of them instantly without losing patience." - Thilina Silva (Urban Wear LK)'
    },
    {
      id: 'p1-c6',
      type: 'small-card-quote',
      stars: 5,
      text: '"The automated order confirmation invoice is generated in seconds. No more manual calculations."',
      author: 'Zainab Rahman (Modest Elegance LK)'
    },
    {
      id: 'p1-c7',
      type: 'rating-badge',
      title: 'Customer Satisfaction',
      desc: 'Trusted by 300+ local businesses',
      score: '10/10'
    },
    {
      id: 'p1-c8',
      type: 'capsule-pill',
      text: '"It understands Singlish perfectly!"',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 'p1-c9',
      type: 'parameter-review',
      stars: 5,
      meta: 'Kavindi Bandara • Founder',
      title: 'Absolute wizardry',
      body: 'I was skeptical about how it would handle mixed language text, but it accurately processes customer intents smoothly.'
    },
    {
      id: 'p1-c10',
      type: 'split-hero',
      stars: 5,
      tag: 'Helmet Store',
      title: 'Incredible fidelity',
      body: 'Saved us so much embarrassing manual coordination hours.',
      img: img2,
    },
    {
      id: 'p1-c11',
      type: 'vibrant-circle',
      stars: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
      title: 'Amazing Product Quality!',
      body: 'Amra Yousuf (Creative Director, Stitch & Style Studio)'
    }
  ],
  // ================= PAGE 2 =================
  [
    {
      id: 'p2-c1',
      type: 'tall-image',
      stars: 5,
      tag: 'Bakery Shop Owner',
      title: '"The dynamic location-based delivery pricing feature is a total lifesaver for us."',
      subtext: 'Ruwanthika de Silva',
      img: img3,
      author: 'Founder, Crust & Crumb Bakery'
    },
    {
      id: 'p2-c2',
      type: 'serif-quote',
      stars: 5,
      quote: '"Our customers love the speed. They chat, select items from the menu, and buy under 2 minutes."',
      name: 'Minura Wijesinghe',
      role: 'Co-Founder, Ceylon Roast Coffee',
      avatar: 'https://images.unsplash.com/photo-1534751516642-a131fed10495?auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 'p2-c3',
      type: 'dual-badge',
      names: 'Imran & Team (Burger Cartel)',
      rating: '4.9 Rating',
      avatars: [
        'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=100&q=80',
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80'
      ]
    },
    {
      id: 'p2-c4',
      type: 'centerpiece',
      stars: 5,
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80',
      name: 'Chef Imran Nazeer',
      role: 'MD, The Burger Cartel',
      title: 'Takes 50+ concurrent orders easily.',
      body: 'Handling peak Friday night dinner rushes used to crash our WhatsApp. Now Agent Dex manages everything smoothly without a single delay.'
    },
    {
      id: 'p2-c5',
      type: 'impact-statement',
      label: 'Sales Boost',
      text: '"Now I can bake cakes peacefully while the AI handles all my incoming customer sales inquiries." - Fathima Sana (Sugar Blossoms)'
    },
    {
      id: 'p2-c6',
      type: 'small-card-quote',
      stars: 5,
      text: '"It captures names, phone numbers, and addresses from raw text messages perfectly. Zero manual copy-pasting."',
      author: 'Roshan Goonetilleke (MealPrep SL)'
    },
    {
      id: 'p2-c7',
      type: 'rating-badge',
      title: 'Daily Operations',
      desc: 'Flawless background catalog synchronization',
      score: '4.9/5'
    },
    {
      id: 'p2-c8',
      type: 'capsule-pill',
      text: '"Extremely fast response times"',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 'p2-c9',
      type: 'parameter-review',
      stars: 5,
      meta: 'Dilini Alwis • Founder',
      title: 'Remarkable sales performance',
      body: 'Selling cosmetics requires trust. The AI\'s human-like tone makes customers feel like they are talking to a real beauty consultant.'
    },
    {
      id: 'p2-c10',
      type: 'split-hero',
      stars: 5,
      tag: 'Shoe Shop Owner',
      title: 'Saves hours daily',
      body: 'Calculates Colombo 1-15 vs suburb delivery rates accurately.',
      img: img5
    },
    {
      id: 'p2-c11',
      type: 'vibrant-circle',
      stars: 5,
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
      title: 'Flawless Support Team!',
      body: 'Hansani Jayawardena (Marketing Head, Nature\'s Essence)'
    }
  ],
  // ================= PAGE 3 =================
  [
    {
      id: 'p3-c1',
      type: 'tall-image',
      stars: 5,
      tag: 'Saree Shop',
      title: '"The best part is the automated follow-up. It brings back customers who stopped replying."',
      subtext: 'Shazna Munas',
      img: img6,
      author: 'Owner, Kavya Couture.'
    },
    {
      id: 'p3-c2',
      type: 'serif-quote',
      stars: 5,
      quote: '"Sri Lankan consumers want quick replies or they move to the next page. This bot responds in 3 seconds."',
      name: 'Sajith Kulatunga',
      role: 'Founder, NextGen Gaming LK',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 'p3-c3',
      type: 'dual-badge',
      names: 'Jehan & Partner (TrendSetter)',
      rating: '5.0 Score',
      avatars: [
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80'
      ]
    },
    {
      id: 'p3-c4',
      type: 'centerpiece',
      stars: 5,
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80',
      name: 'Tharushi Fernando',
      role: 'Co-Founder, Nova Smart Retail',
      title: 'Complete clarity on analytics.',
      body: 'The user dashboard gives us complete analytics on what products are trending in customer chats, helping us plan our stocks easily.'
    },
    {
      id: 'p3-c5',
      type: 'impact-statement',
      label: 'Zero Risk',
      text: '"We have experienced zero WhatsApp number bans since migrating. Completely safe and fully Meta compliant." - Chathura Edirisinghe'
    },
    {
      id: 'p3-c6',
      type: 'small-card-quote',
      stars: 5,
      text: '"Our activewear store saw an immediate ROI within the first week. Incredibly easy setup structure."',
      author: 'Dhanushka Ranasinghe (CoreFit Apparel)'
    },
    {
      id: 'p3-c7',
      type: 'rating-badge',
      title: 'Verified Position',
      desc: 'Top automation choice in Sri Lanka',
      score: '9.9/10'
    },
    {
      id: 'p3-c8',
      type: 'capsule-pill',
      text: '"Literally pays for itself in two days"',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 'p3-c9',
      type: 'parameter-review',
      stars: 5,
      meta: 'Suresh Kumar • Consultant',
      title: 'Incredibly well thought out',
      body: 'If you are selling on social media in Sri Lanka and not using this AI agent, you are losing tons of sales to your competitors.'
    },
    {
      id: 'p3-c10',
      type: 'split-hero',
      stars: 5,
      tag: 'Toy Store',
      title: 'Pure sales power',
      body: 'No more midnight customer messages waking me up from sleep.',
      img: img7
    },
    {
      id: 'p3-c11',
      type: 'vibrant-circle',
      stars: 5,
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80',
      title: 'A True Masterpiece!',
      body: 'Sanduni Premaratne (Owner, Petals & Bows Florist)'
    }
  ]
];

export default function Testimonials2() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    if (newDirection === 1) {
      setPage((prevPage) => (prevPage + 1) % testimonialPages.length);
    } else {
      setPage((prevPage) => (prevPage - 1 + testimonialPages.length) % testimonialPages.length);
    }
  };

  const pageVariants = {
    enter: (dir) => ({
      opacity: 0,
      x: dir > 0 ? 80 : -80,
      scale: 0.97
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeInOut'
      }
    },
    exit: (dir) => ({
      opacity: 0,
      x: dir > 0 ? -80 : 80,
      scale: 0.97,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    })
  };

  const currentItems = testimonialPages[page];

  return (
    <section 
      id="testimonials" 
      className="relative min-h-screen w-full bg-[#07050f] text-[#E2E8F0] py-24 px-4 sm:px-12 lg:px-16 overflow-hidden flex flex-col justify-between"
    >
      {/* Background Glows */}
      <div className="absolute top-[-5%] left-[-5%] w-[600px] h-[600px] bg-[#25D366]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#1877F2]/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-8%] right-[-5%] w-[650px] h-[650px] bg-gradient-to-tr from-[#E1306C]/15 via-[#C13584]/15 to-[#833AB4]/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="max-w-[700px] lg:max-w-[900px] mx-auto text-center mb-12 sm:mb-16 flex flex-col items-center">
        <span className="inline-flex items-center gap-[8px] px-3.5 py-1 rounded-full bg-white/[0.03] backdrop-blur-md border border-[var(--main-green-color)] text-xs font-medium text-[var(--main-green-color)] tracking-tight mb-5 shadow-sm select-none">
          Proven Results
        </span>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl tracking-[-0.03em] leading-[1.2] font-semibold text-emerald-100">
          Trusted by premium brands. <span className="text-[var(--main-green-color)]">Validated by growth.</span>
        </h2>
      </div>

      {/* Navigation Controls */}
      <div className="absolute left-1/2 -translate-x-[108px] bottom-16 lg:left-4 lg:sm:left-6 lg:top-1/2 lg:bottom-auto lg:-translate-y-1/2 lg:translate-x-0 z-20">
        <button 
          onClick={() => paginate(-1)} 
          className="w-12 h-12 rounded-full border border-white/10 bg-[#090714]/60 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 active:scale-95 transition duration-200 cursor-pointer shadow-lg hover:border-[#25D366]/40"
          aria-label="Previous Testimonial Page"
        >
          <ArrowLeft size={20} />
        </button>
      </div>

      <div className="absolute right-1/2 translate-x-[108px] bottom-16 lg:right-4 lg:sm:right-6 lg:top-1/2 lg:bottom-auto lg:-translate-y-1/2 lg:translate-x-0 z-20">
        <button 
          onClick={() => paginate(1)} 
          className="w-12 h-12 rounded-full border border-white/10 bg-[#090714]/60 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 active:scale-95 transition duration-200 cursor-pointer shadow-lg hover:border-[#E1306C]/40"
          aria-label="Next Testimonial Page"
        >
          <ArrowRight size={20} />
        </button>
      </div>

      {/* Main Dynamic Grid Layout Structure */}
      <div className="max-w-7xl mx-auto w-full relative z-10 my-auto overflow-hidden min-h-[720px] flex items-center px-4 pb-16 lg:pb-0">
        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.div 
            key={page}
            custom={direction}
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start"
          >
            
            {/* ================= COL 1 ================= */}
            <div className="space-y-6 lg:col-span-1">
              {/* Card 1: Tall Product Image Testimonial */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl overflow-hidden p-5 flex flex-col justify-between aspect-[3/4] group">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-0.5 text-[#25D366]">
                      {[...Array(currentItems[0].stars)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                    <span className="text-[10px] text-white/40 font-mono">{currentItems[0].tag}</span>
                  </div>
                  <h3 className="text-lg font-bold leading-snug text-white">{currentItems[0].title}</h3>
                  <p className="text-xs text-white/50 mt-2">{currentItems[0].subtext}</p>
                </div>
                <div className="mt-4 relative rounded-xl overflow-hidden aspect-video bg-white/5">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                  <img src={currentItems[0].img} alt="Sri Lankan Reviewer Brand Showcase" className="w-full h-full object-cover" />
                  <span className="absolute bottom-2 left-3 z-20 text-xs text-white/60 font-mono">{currentItems[0].author}</span>
                </div>
              </div>

              {/* Card 2: Row text feedback */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-5">
                <div className="flex gap-0.5 text-[#25D366] mb-2">
                  {[...Array(currentItems[1].stars)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-sm text-white/70 leading-relaxed font-serif">{currentItems[1].quote}</p>
                <div className="flex items-center gap-3 mt-4 justify-between">
                  <div>
                    <h4 className="text-xs font-semibold text-white">{currentItems[1].name}</h4>
                    <p className="text-[10px] text-white/40">{currentItems[1].role}</p>
                  </div>
                  <img src={currentItems[1].avatar} alt={currentItems[1].name} className="w-7 h-7 rounded-full object-cover border border-white/10 shrink-0" />
                </div>
              </div>
            </div>

            {/* ================= COL 2 ================= */}
            <div className="space-y-6 lg:col-span-1 lg:mt-12">
              {/* Card 3: Dual Team Testimonial Summary */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2 overflow-hidden">
                    {currentItems[2].avatars.map((av, idx) => (
                      <img key={idx} className="inline-block h-6 w-6 rounded-full ring-2 ring-[#090714] object-cover" src={av} alt="Sri Lankan Store Partner Profiles" />
                    ))}
                  </div>
                  <span className="text-xs text-white/80 font-medium">{currentItems[2].names}</span>
                </div>
                <span className="text-xs text-white/60 flex items-center gap-1 font-mono"><Star size={12} fill="#25D366" className="text-[#25D366]"/> {currentItems[2].rating}</span>
              </div>

              {/* Card 4: Massive core centerpiece review */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-7 relative">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <img src={currentItems[3].avatar} alt={currentItems[3].name} className="w-10 h-10 rounded-full object-cover border border-white/10" />
                    <div>
                      <h4 className="text-sm font-bold text-white">{currentItems[3].name}</h4>
                      <p className="text-xs text-white/40">{currentItems[3].role}</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-[#25D366] bg-[#25D366]/10 px-2.5 py-1 rounded-full border border-[#25D366]/20 font-mono">★★★★★</span>
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-white mb-2 leading-snug">{currentItems[3].title}</h2>
                <p className="text-sm text-white/55 leading-relaxed">{currentItems[3].body}</p>
              </div>

              {/* Card 5: Extended text client statement */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#E1306C]" />
                  <span className="text-xs font-bold text-white/90">{currentItems[4].label}</span>
                </div>
                <p className="text-xs text-white/60 leading-normal">{currentItems[4].text}</p>
              </div>
            </div>

            {/* ================= COL 3 ================= */}
            <div className="space-y-6 lg:col-span-1">
              {/* Card 6: Absolute small quote text */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-4">
                <Quote size={20} className="text-white/10 mb-1" />
                <p className="text-[11px] text-white/60 leading-normal">{currentItems[5].text}</p>
                <div className="flex justify-between items-center mt-3 pt-2 border-t border-white/5">
                  <div className="flex gap-0.5 text-[#25D366]">
                    {[...Array(currentItems[5].stars)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
                  </div>
                  <span className="text-[9px] text-white/40">{currentItems[5].author}</span>
                </div>
              </div>

              {/* Card 7: Dedicated Client Recommendation Rating */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-4 flex justify-between items-center">
                <div>
                  <div className="text-xs font-semibold text-white">{currentItems[6].title}</div>
                  <div className="text-[10px] text-white/40 mt-0.5">{currentItems[6].desc}</div>
                </div>
                <span className="text-xs font-bold font-mono text-[#25D366] bg-[#25D366]/10 px-2 py-1 rounded-md">{currentItems[6].score}</span>
              </div>

              {/* Card 8: Micro identity quote capsule */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-4 py-2 flex items-center justify-between text-xs text-white/70">
                <span className="truncate">{currentItems[7].text}</span>
                <div className="flex gap-2 items-center shrink-0 ml-2">
                  <img src={currentItems[7].avatar} alt="Mini Reviewer Portrait" className="w-5 h-5 rounded-full object-cover" />
                </div>
              </div>

              {/* Card 9: Detailed vertical parameters review */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-6">
                <span className="text-[11px] font-mono text-white/30 block mb-3 text-right">{currentItems[8].meta}</span>
                <h3 className="text-xl font-bold text-white mb-2">{currentItems[8].title}</h3>
                <p className="text-xs text-white/50 leading-relaxed mb-4">{currentItems[8].body}</p>
                <div className="flex justify-between items-center pt-3 border-t border-white/5">
                  <div className="flex gap-0.5 text-[#25D366]">
                    {[...Array(currentItems[8].stars)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                  <span className="text-[10px] text-white/40 font-mono">Verified Choice</span>
                </div>
              </div>
            </div>

            {/* ================= COL 4 ================= */}
            <div className="space-y-6 lg:col-span-1 lg:mt-8">
              {/* Card 10: Multi-Column Split Hero Review Card */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl overflow-hidden flex h-48">
                <div className="w-1/2 p-4 flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] text-white/40 font-mono block mb-1">{currentItems[9].tag}</span>
                    <h3 className="text-md font-bold text-white leading-tight">{currentItems[9].title}</h3>
                  </div>
                  <div>
                    <p className="text-[11px] text-white/50 line-clamp-2">{currentItems[9].body}</p>
                    <div className="flex gap-0.5 text-[#25D366] mt-2">
                      {[...Array(currentItems[9].stars)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
                    </div>
                  </div>
                </div>
                <div className="w-1/2 relative">
                  <img src={currentItems[9].img} alt="E-commerce Chat Asset Interface" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Card 11: Vibrant centered circle image profile */}
              <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 backdrop-blur-md rounded-3xl p-6 text-center relative flex flex-col items-center">
                <img src={currentItems[10].avatar} alt="Sri Lankan Store Owner" className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-white/10 shadow-lg" />
                <h3 className="text-md font-bold text-white mb-1">{currentItems[10].title}</h3>
                <p className="text-xs text-white/40 max-w-[180px] mx-auto mb-2">{currentItems[10].body}</p>
                <div className="flex gap-0.5 text-[#25D366] justify-center mt-2">
                  {[...Array(currentItems[10].stars)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                </div>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* Fixed Bottom Pagination Dots */}
      <div className="max-w-7xl mx-auto w-full flex justify-center items-center mt-8 lg:mt-16 relative z-10">
        <div className="flex gap-1.5 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
          <div className={`h-1.5 rounded-full transition-all duration-300 ${page === 0 ? 'w-4 bg-[#25D366]' : 'w-1.5 bg-white/20'}`} />
          <div className={`h-1.5 rounded-full transition-all duration-300 ${page === 1 ? 'w-4 bg-[#1877F2]' : 'w-1.5 bg-white/20'}`} />
          <div className={`h-1.5 rounded-full transition-all duration-300 ${page === 2 ? 'w-4 bg-[#E1306C]' : 'w-1.5 bg-white/20'}`} />
        </div>
      </div>
    </section>
  );
}