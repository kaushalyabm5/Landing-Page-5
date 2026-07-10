import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Is this bot safe from WhatsApp number bans?",
      answer: "Yes, absolutely. We use the Official Meta WhatsApp Business API Cloud Platform. Since we adhere strictly to Meta's developer policies and official guidelines, your number remains 100% safe and secure."
    },
    {
      question: "How does the AI sound so human-like?",
      answer: "Our engine is built on top of customized advanced Language Models (LLMs) trained specifically on human sales conversations. It understands context, context-switching, emojis, slang, and can gracefully follow up just like a real person."
    },
    {
      question: "Can I cancel or change my plan at any time?",
      answer: "Yes, you can upgrade, downgrade, or cancel your subscription at any time directly from your dashboard. There are no contracts or hidden cancellation fees."
    },
    {
      question: "How do I train the bot on my business products?",
      answer: "It's simple. You can upload your PDF manuals, paste website URLs, or directly sync your Shopify/WooCommerce catalog. Our AI reads the data within minutes and becomes an expert on your store immediately."
    },
    {
      question: "Do you offer custom setups for large enterprises?",
      answer: "Yes! For businesses requiring complex CRM integrations, customized AI workflows, or handling over 50,000 messages monthly, we offer tailored Enterprise solutions. Contact our support team for a dedicated setup."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#030705] text-white pt-20 pb-40 px-4 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Badge & Title */}
        

         <div className="max-w-[700px] lg:max-w-[800px] mx-auto text-center mb-12 sm:mb-16 flex flex-col items-center">
        

          <span className="inline-flex items-center gap-[8px] px-3.5 py-1 rounded-full bg-white/[0.03] backdrop-blur-md border border-[var(--main-green-color)] text-xs font-medium text-[var(--main-green-color)] tracking-tight mb-5 shadow-sm select-none">
          
           Questions?
        </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl tracking-[-0.03em] leading-[1.2] font-semibold text-emerald-100">
           Frequently Asked  <span className="text-[var(--main-green-color)]">Questions </span>
          </h2>

           <p className="text-neutral-400 mt-8 mb-5 text-[.9rem]">
            Got questions about our WhatsApp AI agent? We've got answers.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="bg-[#0d110e] border border-[#1f2320] rounded-2xl overflow-hidden transition-all duration-300"
              >
                {/* Header/Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full cursor-pointer p-6 text-left flex justify-between items-center gap-4 hover:bg-[#161d16] transition-colors"
                >
                  <span className={`text-sm font-medium transition-colors ${isOpen ? 'text-[#25D366]' : 'text-neutral-200'}`}>
                    {faq.question}
                  </span>
                  <span
                    className={`text-xl text-gray-500 transition-transform duration-300 transform shrink-0 ${
                      isOpen ? 'rotate-45 text-[#25D366]' : ''
                    }`}
                  >
                    ＋
                  </span>
                </button>

                {/* Content/Answer */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-48 border-t border-[#16161a]' : 'max-h-0'
                  }`}
                >
                  <p className="p-6 text-xs md:text-sm text-emerald-100 leading-relaxed bg-[#0a0f0a]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;