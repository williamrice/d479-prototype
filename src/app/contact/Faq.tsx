"use client";
import { useState } from "react";

const faqData = [
  {
    id: 1,
    question: "What is the voltage for power outlets?",
    answer: "Power outlets are 120 volts, the same as in the United States.",
  },
  {
    id: 2,
    question: "What are the alcohol regulations?",
    answer:
      "Alcohol is not allowed to be served or sold between midnight and 9:00 a.m. The drinking age is 18, and it is not strictly enforced.",
  },
  {
    id: 3,
    question: "What languages are spoken on Taniti?",
    answer:
      "Many younger Tanitians speak fluent English. Very little English is spoken in rural areas, especially by older residents.",
  },
  {
    id: 4,
    question: "What healthcare facilities are available?",
    answer:
      "There is one hospital with many multilingual employees and several clinics.",
  },
  {
    id: 5,
    question: "Is crime a concern on Taniti?",
    answer:
      "Violent crime is very rare, but as tourism increases, there are more reports of pickpocketing and other petty crimes.",
  },
  {
    id: 6,
    question: "How do national holidays affect visitors?",
    answer:
      "Taniti enjoys a large number of national holidays, and many tourist attractions and restaurants will be closed on these days, so visitors should plan accordingly.",
  },
  {
    id: 7,
    question: "What currency is used on Taniti?",
    answer:
      "Taniti uses the U.S. dollar as its currency. Many businesses also accept euros and yen. Several banks facilitate currency exchange, and major credit cards are widely accepted.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // FAQ Data embedded directly in the component

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Frequently Asked Questions
      </h1>
      <div className="max-w-2xl mx-auto p-4">
        {faqData.map((faq) => (
          <div key={faq.id} className="border-b border-gray-200">
            <button
              onClick={() => toggleAccordion(faq.id)}
              className="w-full text-left p-4 focus:outline-none flex justify-between items-center"
            >
              <span className="text-lg font-semibold text-gray-800">
                {faq.question}
              </span>
              <span className="text-gray-500">
                {openIndex === faq.id ? "-" : "+"}
              </span>
            </button>
            {openIndex === faq.id && (
              <div className="p-4 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
