"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Amit & Riya Sharma",
    role: "Homeowners",
    location: "Worli, Mumbai",
    quote: "SA Interior completely transformed our 4-BHK penthouse. The attention to detail in the custom wardrobe panels and the spatial layout of our living lounge is phenomenal. They delivered exactly what was visualized in 3D plans.",
    rating: 5,
    project: "Full Home Interior Design",
  },
  {
    id: 2,
    name: "Shailesh Mehta",
    role: "VP, Nova Corp",
    location: "BKC, Mumbai",
    quote: "Highly recommended for corporate spacing! They completed our office layout execution 10 days before the contract deadline. The transparent invoices and material declarations saved a lot of reconciliation time.",
    rating: 5,
    project: "Commercial Office HQ",
  },
  {
    id: 3,
    name: "Priyanka Rao",
    role: "Studio Founder",
    location: "Juhu, Mumbai",
    quote: "A flawless experience. Shreya Associates combined functional modular storage with beautiful aesthetic finishes. The custom oak dining setup is now the centerpiece of our home conversations. Truly exceptional!",
    rating: 5,
    project: "Bespoke 3 BHK Flat",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = React.useState(0)

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-amber-500 font-semibold text-sm tracking-wider uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-heading">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Discover how we help families and corporate groups build their bespoke spatial realities.
          </p>
        </div>

        {/* Carousel Slider */}
        <div className="max-w-4xl mx-auto relative px-4 sm:px-12">
          <div className="overflow-hidden bg-zinc-50 dark:bg-zinc-900 border border-border rounded-3xl p-8 sm:p-14 relative shadow-md">
            {/* Decotation quote icon */}
            <Quote className="absolute top-6 left-6 w-16 h-16 text-amber-500/10 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-6"
              >
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                {/* Quote Text */}
                <blockquote className="text-lg sm:text-xl font-medium tracking-wide text-foreground leading-relaxed font-heading">
                  "{testimonials[current].quote}"
                </blockquote>

                {/* Client info */}
                <div className="flex items-center justify-between border-t border-border/80 pt-6 mt-2 flex-wrap gap-4">
                  <div className="space-y-0.5">
                    <span className="block font-bold text-foreground text-base">
                      {testimonials[current].name}
                    </span>
                    <span className="block text-xs text-muted-foreground">
                      {testimonials[current].role} — {testimonials[current].location}
                    </span>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                    {testimonials[current].project}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center sm:justify-between items-center mt-8 gap-4 sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:left-0 sm:right-0 sm:px-0">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full bg-zinc-50 border border-border shadow-xs hover:border-amber-500 hover:text-amber-500 flex items-center justify-center transition-colors dark:bg-zinc-900 sm:-translate-x-5"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-zinc-50 border border-border shadow-xs hover:border-amber-500 hover:text-amber-500 flex items-center justify-center transition-colors dark:bg-zinc-900 sm:translate-x-5"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
