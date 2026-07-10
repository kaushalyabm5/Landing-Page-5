import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);
  const timelinePoints = [
    { key: "2024", title: "Started with 5 stores in Colombo", description: "Our first pilot recovered 31% of after hours messages into paid orders in the first month." },
    { key: "Today", title: "300+ businesses, 40k+ chats a month", description: "Bakeries, boutiques, pharmacies, electronics stores, anywhere customers order by message." },
    { key: "Promise", title: "Your customer never waits", description: "Jezzy can't handle something, a human gets the full conversation in one tap." }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Animate Header
      gsap.fromTo('[data-animate="header"]', 
        { opacity: 0, y: 30 }, 
        { 
          opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: '[data-animate="header"]', start: "top 85%" }
        }
      );

      // Animate Text Article
      gsap.fromTo('[data-animate="article"]', 
        { opacity: 0, y: 20 }, 
        { 
          opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power3.out",
          scrollTrigger: { trigger: '[data-animate="article"]', start: "top 85%" }
        }
      );

      // Animate Timeline Points (Staggered)
      gsap.fromTo('.timeline-item', 
        { opacity: 0, y: 40 }, 
        { 
          opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out",
          scrollTrigger: { trigger: '.timeline-container', start: "top 80%" }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="about" aria-label="About Agent Jezzy" className="py-20 lg:py-25 bg-[white] text-[#122B21] antialiased scroll-mt-[4rem]">
      <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
        
        <header data-animate="header" className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-12 mb-16 border-b border-[#122B21]/12">
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-[8px] px-3.5 py-1 rounded-full bg-white/[0.03] backdrop-blur-md border border-[var(--main-green-color)] text-xs font-medium text-[var(--main-green-color)] tracking-tight mb-5 shadow-sm select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--main-green-color)] animate-pulse" />
              About Agent Jezzy
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-[-0.03em] leading-[1.12] font-semibold">
              Built for businesses that sell <span className="text-[var(--main-green-color)]">in chat.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-6">
            <p className="font-normal text-xl sm:text-2xl text-[#122B21] tracking-[-0.01em] leading-relaxed max-w-[640px]">
              Most sales tools assume your customers browse a website. Yours don't, they message you. Jezzy was built for <span className="text-[var(--main-green-color)] font-normal">exactly that.</span>
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <article data-animate="article" className="lg:col-span-5 text-[#3D5247] text-[1.02rem] space-y-6 max-w-[460px]">
            <p className="leading-relaxed">
              We watched small businesses lose orders every single day for one simple reason: nobody could reply fast enough. The bakery owner kneading dough at 6am. The boutique answering 80 DMs between customers. The messages that arrived at midnight and went cold by morning.
            </p>
            <p className="leading-relaxed">
              So we built an ai agent that lives inside your chats, one that knows your catalog, speaks like your best salesperson, and never sleeps. Not a chatbot with canned buttons. A real conversation that ends in a confirmed order.
            </p>
          </article>

          <div className="lg:col-span-7 flex flex-col justify-start timeline-container">
            <div className="divide-y divide-[#122B21]/12 border-t border-b border-[#122B21]/12">
              {timelinePoints.map((point, index) => (
                <div key={index} className="timeline-item grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 py-6 sm:py-8 items-start group">
                  <div className="sm:col-span-3 flex items-baseline space-x-2">
                    <time className="text-[0.68rem] tracking-[0.15em] uppercase bg-gradient-to-r from-[#25D366] via-[#1877F2] to-[#E1306C] bg-clip-text text-transparent font-semibold">
                      {point.key}
                    </time>
                  </div>
                  <div className="sm:col-span-9">
                    <h3 className="text-base font-semibold tracking-tight text-[#122B21] mb-1.5">{point.title}</h3>
                    <p className="text-[0.92rem] text-[#3D5247] leading-relaxed">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}