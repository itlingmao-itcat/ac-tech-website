"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PlusIcon } from "lucide-react";

const faqData = [
  {
    question: "What is AC TECH.AI Ltd?",
    answer:
      "AC TECH.AI Ltd is a Colorado corporation focused on lawful technology businesses, including AI products and digital infrastructure.",
  },
  {
    question: "Where is the company formed?",
    answer:
      "The company is formed under the laws of the State of Colorado, United States.",
  },
  {
    question: "Who leads the company?",
    answer:
      "Corporate bylaws were adopted by the Board of Directors. Director AINARS MUSA is named on the adoption record dated September 27, 2026.",
  },
  {
    question: "What kind of work do you do?",
    answer:
      "We build and deliver AI-powered systems, automation, analytics, and related digital products for partners who need reliable technology—not just marketing pages.",
  },
  {
    question: "How is the company governed?",
    answer:
      "AC TECH.AI operates under formal corporate bylaws covering directors, officers, shareholders, finance, and amendments. Key decisions follow board and shareholder rules defined in those bylaws.",
  },
  {
    question: "How can we get in touch?",
    answer:
      "Use the Contact section on this site or reach out through your existing AC TECH.AI representative. We will confirm next steps after reviewing your inquiry.",
  },
];

const Faq = () => {
  return (
    <section id="faq" className=" py-16 text-white">
      <div className="container">
        <div className=" mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-primary uppercase text-sm tracking-wide">
              Popular questions
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mt-2">
              Learn more about AC TECH.AI
            </h2>
            <p className="text-gray-400 mt-2">
              Clear answers about the company, governance, and how we work
            </p>
          </div>
          <Accordion className="space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/5 rounded-lg border-none px-4"
              >
                <AccordionTrigger className="text-lg font-medium hover:no-underline py-4 **:data-[slot=accordion-trigger-icon]:hidden">
                  {item.question}
                  <PlusIcon className="w-6 h-6 shrink-0 transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-45" />
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
