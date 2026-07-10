import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How long does setup take?",
      answer: "Most stores go live in under an hour. Connect your WhatsApp, upload your catalog (a simple sheet works), and Jezzy starts replying. We help you with the first setup on every plan."
    },
    {
      question: "Will customers know it's an AI?",
      answer: "Jezzy is trained on your tone and replies naturally, most customers assume it's staff. You can also choose to disclose it openly; both styles convert well."
    },
    {
      question: "What happens when it can't answer?",
      answer: "It hands the conversation to you with a one line summary of what's happened so far. You reply, and Jezzy steps back in when you're done."
    },
    {
      question: "Does it work with my existing WhatsApp number?",
      answer: "Yes, Jezzy connects to your current WhatsApp Business number. Your customers keep messaging the same number they always have."
    },
    {
      question: "Can I update products and stock myself?",
      answer: "Yes. You can update product availability, prices, images, and stock status from the dashboard, and Jezzy will use the latest information in customer replies"
    },
    {
      question: "Does it work with my existing WhatsApp number?",
      answer: "Yes, in most cases. We can connect it with your current business WhatsApp setup, depending on your WhatsApp account type and Meta approval requirements."
    },
    {
      question: "Can it understand Sinhala or Singlish?",
      answer: "Yes. Jezzy can understand Sinhala, English, Tamil, and Singlish-style messages like “gana kiyada?”, “delivery thiyenawada?”, or “meka blue ekak nadda?”"
    },
    {
      question: "Is customer data safe?",
      answer: "Yes. Customer chats, order details, and contact information are stored securely and only accessible to authorized users from your business."
    },
    {
      question: "Can my team use it too?",
      answer: "Yes. Your team can access the CRM dashboard to manage customers, orders, chats, and follow ups without extra per user charges."
    },
     {
      question: "Can I cancel anytime?",
      answer: "Yes. Plans are month to month, the trial needs no card, and your data exports cleanly if you ever leave."
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id='faq' className="bg-[white] text-gray-900 pt-20 pb-20 px-4 scroll-mt-[2rem] border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Badge & Title */}
        <div className="max-w-[700px] lg:max-w-[800px] mx-auto text-center mb-12 sm:mb-16 flex flex-col items-center">
          <span className="inline-flex items-center gap-[8px] px-3.5 py-1 rounded-full bg-[var(--main-green-color)]/[0.08] border border-[var(--main-green-color)] text-xs font-medium text-[var(--main-green-color)] tracking-tight mb-5 shadow-sm select-none">
            FAQ
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl tracking-[-0.03em] leading-[1.2] font-semibold text-[#000000]">
            Before You <span className="text-[var(--main-green-color)]">Ask</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`bg-neutral-50 rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen ? 'shadow-md shadow-[var(--main-green-color)]/[0.3]' : 'shadow-sm'
                }`}
              >
                {/* Header/Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full cursor-pointer p-6 text-left flex justify-between items-center gap-4 hover:bg-[var(--main-green-color)]/[0.05] transition-colors"
                >
                  <span className={`text-sm font-bold transition-colors ${isOpen ? 'text-[var(--main-green-color)]' : 'text-gray-800'}`}>
                    {faq.question}
                  </span>
                  <span
                    className={`text-xl text-gray-500 transition-transform duration-300 transform shrink-0 ${
                      isOpen ? 'rotate-45 text-[var(--main-green-color)]' : ''
                    }`}
                  >
                    ＋
                  </span>
                </button>

                {/* Content/Answer */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-48' : 'max-h-0'
                  }`}
                >
                  <p className="p-6 pt-0 text-xs md:text-sm text-neutral-700 font-medium leading-relaxed bg-[#e2f1e6]/60">
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

export default FAQ;