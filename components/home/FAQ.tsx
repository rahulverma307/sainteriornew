"use client"

import React from "react"
import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    value: "faq-1",
    question: "What is your consultation fee and process?",
    answer: "Our initial consultation (either at our Santacruz West design studio or an on-site visit) is completely complimentary. We discuss your layout requirements, style preferences, and approximate budgets. Detailed 3D mockups and CAD blueprints are developed once we sign the basic design token agreement.",
  },
  {
    value: "faq-2",
    question: "What is the typical timeline for project completion?",
    answer: "For a standard 2 BHK or 3 BHK residential fit-out, the project takes between 45 to 60 business days from the date of final material sign-off. Modular kitchens and closets are assembled within our factory, reducing on-site carpentry assembly time to just 10-15 days.",
  },
  {
    value: "faq-3",
    question: "Can you customize materials to fit a specific budget?",
    answer: "Absolutely. We are proud of our transparent line-item pricing. If a design goes over your expected budget, we can suggest alternative finishes (e.g., opting for premium laminates over premium veneers, or choosing acrylic finishes instead of PU paint) without sacrificing spatial utility.",
  },
  {
    value: "faq-4",
    question: "What does the 10-year warranty cover?",
    answer: "Our 10-year structural warranty covers bubbling or peeling of cabinet laminates, structural integrity of modular carcass boxes, drawer runners, and base hinges. It applies to all items constructed in-house at our factory.",
  },
  {
    value: "faq-5",
    question: "How do you handle project management and updates?",
    answer: "You are assigned a dedicated Project Manager who supervises all on-site carpenters, electricians, plumbers, and painters. We send weekly high-fidelity photographic progress updates via WhatsApp so you know exactly what is happening without visiting the site constantly.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-zinc-50 dark:bg-zinc-950/40">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-amber-500 font-semibold text-sm tracking-wider uppercase">
            Have Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Quick responses to common questions about timelines, material quotes, and our turnkey studio setup.
          </p>
        </div>

        {/* Accordion Layout */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-white dark:bg-zinc-900 border border-border p-6 sm:p-10 rounded-3xl shadow-sm"
        >
          <Accordion  className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.value} value={faq.value} className="py-2">
                <AccordionTrigger className="text-base text-left hover:text-amber-500 hover:no-underline font-heading font-semibold py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed pb-4 pt-1">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
