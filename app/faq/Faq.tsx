"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does it usually take to get a visa?",
      answer:
        "4 to 12 weeks, depending on the visa type and destination country's embassy processing speed.",
    },
    {
      question: "What types of visas does your company process?",
      answer:
        "We handle all types, including Tourist, Business, Student, Work, and Family Reunion visas.",
    },
    {
      question: "What happens if the visa is rejected?",
      answer:
        "Our service charge is non-refundable. We will analyze the refusal and assist you with re-application or appeal advice.",
    },
    {
      question: "What are the required documents?",
      answer:
        "Documents vary, but generally include Passport, photos, application form, financial proof, and proof of purpose (job/education). We provide a specific checklist.",
    },
    {
      question: "What is your service charge, and what does it include?",
      answer:
        "Our charge covers consultation, document review, form filling, and appointment booking. Visa fees/Embassy charges are separate and paid by the client.",
    },
  ];

  return (
    <div className="py-20 px-4 bg-white">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-sky-500 mb-3">
            FAQ&apos;S
          </h1>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border-2 rounded-lg overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors cursor-pointer"
              >
                <span className="text-gray-800 font-semibold text-base md:text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-700 transition-transform duration-300 flex-shrink-0 ml-4 ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expandedIndex === index && (
                <div className="px-6 pb-5 pt-2">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Read More Link */}
        {/* <div className="text-left">
          <a
            href="#"
            className="text-sky-500 font-semibold hover:text-sky-600 transition-colors inline-flex items-center"
          >
            Read More
          </a>
        </div> */}
      </div>
    </div>
  );
}
