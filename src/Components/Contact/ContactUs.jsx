import React from 'react';

const ContactUs = () => {
  return (
    <section className="relative bg-black text-white pt-32 pb-20 px-6 overflow-hidden flex flex-col items-center">
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#25D366] rounded-full blur-[150px] opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#1877F2] rounded-full blur-[150px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E1306C] rounded-full blur-[150px] opacity-10 pointer-events-none" />

      {/* Header */}
      <div className="text-center z-10 mb-20">
        <h1 className="text-5xl font-medium tracking-[0.2em] uppercase mb-6 bg-gradient-to-r from-[#25D366] via-[#1877F2] to-[#E1306C] bg-clip-text text-transparent">
          Contact Us
        </h1>
        
        <p className="text-gray-400 font-light tracking-wider max-w-md mx-auto">
          Connect with our team to start your next premium project.
        </p>
      </div>

      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-16 z-10 items-start">
        
        {/* Contact Info with Icons */}
        <div className="space-y-8 bg-white/[0.02] p-8 rounded-2xl border border-white/[0.05]">
          <div className="flex items-center gap-6 group">
            <div className="p-4 bg-white/[0.05] rounded-xl group-hover:bg-[#25D366]/20 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 uppercase tracking-widest">Phone</span>
              <span className="text-lg font-light">+94 77 123 4567</span>
              <span className="text-lg font-light">+94 76 987 6543</span>
            </div>
          </div>

          <div className="flex items-center gap-6 group">
            <div className="p-4 bg-white/[0.05] rounded-xl group-hover:bg-[#1877F2]/20 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 uppercase tracking-widest">Email</span>
              <span className="text-lg font-light">hello@jezzyai.com</span>
            </div>
          </div>
        </div>

        {/* Modern Form */}
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="NAME" className="w-full bg-white/[0.03] border border-white/[0.1] p-4 rounded-xl focus:border-white outline-none transition-all duration-300 placeholder:text-gray-600 font-light" />
          <input type="email" placeholder="EMAIL" className="w-full bg-white/[0.03] border border-white/[0.1] p-4 rounded-xl focus:border-white outline-none transition-all duration-300 placeholder:text-gray-600 font-light" />
          <textarea placeholder="MESSAGE" rows="4" className="w-full bg-white/[0.03] border border-white/[0.1] p-4 rounded-xl focus:border-white outline-none transition-all duration-300 placeholder:text-gray-600 font-light resize-none" />
          <button className="w-full py-4 bg-[var(--main-green-color)] cursor-pointer text-white font-medium rounded-xl hover:bg-gray-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;