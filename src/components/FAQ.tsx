import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItem & { isOpen: boolean; toggle: () => void }> = ({ 
  question, 
  answer, 
  isOpen, 
  toggle 
}) => {
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        className="flex justify-between items-center w-full py-5 text-left text-slate-800 font-medium focus:outline-none"
        onClick={toggle}
        aria-expanded={isOpen}
      >
        <span className="text-lg">{question}</span>
        <span className="ml-4 flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-primary" />
          ) : (
            <ChevronDown className="h-5 w-5 text-slate-500" />
          )}
        </span>
      </button>
      {isOpen && (
        <div className="pb-5 text-slate-600 leading-relaxed">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question: "How do I know if home care is right for my loved one?",
      answer: "Home care is ideal for individuals who need assistance with daily activities but prefer to remain in the comfort of their home. Our team can conduct a free assessment to determine if home care is suitable for your loved one's situation and needs."
    },
    {
      question: "What qualifications do your caregivers have?",
      answer: "All of our caregivers are licensed, bonded, and insured professionals who undergo rigorous background checks, training, and certification. Many have specialized training in areas like dementia care, stroke recovery, and end-of-life care."
    },
    {
      question: "How do you match caregivers with clients?",
      answer: "We carefully match caregivers and clients based on care needs, personality, interests, and preferences. We believe that the right match is crucial for developing a positive and effective care relationship."
    },
    {
      question: "How quickly can services start?",
      answer: "In most cases, we can begin services within 24-48 hours after the initial assessment. For urgent situations, we can often arrange for expedited care to meet immediate needs."
    },
    {
      question: "Is home care covered by insurance or Medicare?",
      answer: "Some home care services may be covered by long-term care insurance, veterans' benefits, or Medicare under certain conditions. Our team can help you understand your coverage options and potential out-of-pocket costs."
    },
    {
      question: "Can we change the care schedule if needed?",
      answer: "Absolutely. We understand that needs can change, and we offer flexible scheduling to accommodate those changes. You can adjust the care schedule with reasonable notice to your care coordinator."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-600">
            Find answers to commonly asked questions about our home care services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggle={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;