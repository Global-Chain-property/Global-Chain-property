import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: 'Do I need to understand blockchain?',
    answer: 'No! We handle the technical stuff. You just browse and invest. ',
  },
  {
    question: 'Is this legal?',
    answer: 'Yes, all properties follow local laws and regulations.',
  },
  {
    question: 'How do I get my rental income?',
    answer: 'We automatically send payments to your bank account each month.',
  },
  {
    question: 'Can I visit properties I own shares in?',
    answer: 'While you own a share, physical access depends on the property rules.',
  },
];


const FAQ = () => {
  // State to manage which FAQ item is currently open (stores the index)
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id='faq' className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-10">

        {/* Section Header */}
        <div className="flex justify-center mb-4">
          <div className="h-1 w-60 bg-[#DEC05F] rounded-full animate-fade-in-up duration-500" />
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#222222] mb-4">
          Common <span className="text-[#DEC05F]">Questions</span>
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          We answer the most frequent questions to ensure complete clarity and confidence.
        </p>

        {/* FAQ Accordion Container */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`
                bg-white rounded-xl overflow-hidden cursor-pointer border border-gray-200 
                transition-all duration-500 ease-in-out
                animate-fade-in-up
                ${openIndex === index 
                  ? 'shadow-xl shadow-[#DEC05F]/50 border-[#DEC05F]' 
                  : 'hover:shadow-lg hover:border-[#DEC05F]/70' // 
                }
              `}
              // Staggered delay for interactive entrance
              style={{ animationDelay: `${150 * (index + 1)}ms` }} 
            >
              
              {/* Question Header (The Toggle Button) */}
              <div 
                className="flex justify-between items-center p-6 text-xl font-semibold text-[#222222]"
                onClick={() => toggleFAQ(index)}
              >
                {item.question}
                <ChevronDown 
                  className={`
                    h-6 w-6 text-[#DEC05F] transition-transform duration-300
                    ${openIndex === index ? 'transform rotate-180' : ''}
                  `}
                />
              </div>

              {/* Answer Content (Animated Collapse/Expand) */}
              <div 
                className={`
                  transition-max-height duration-700 ease-in-out overflow-hidden
                  ${openIndex === index ? 'max-h-96' : 'max-h-0'}
                `}
                // Note: 'max-h-96' and 'max-h-0' are used to create the accordion collapse animation
              >
                <p className="p-6 pt-0 text-gray-900 font-light leading-relaxed border-t border-gray-100">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;