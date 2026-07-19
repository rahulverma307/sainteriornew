"use client"

import React from "react"
import { motion } from "framer-motion"
import { CheckCircle2, Star } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-zinc-50 dark:bg-zinc-950/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual Grid (Overlapping Images) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[480px] sm:h-[580px] w-full"
          >
            {/* Main Background Image */}
            <div className="absolute top-0 left-0 w-[80%] h-[80%] rounded-2xl overflow-hidden shadow-xl border border-border">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=80"
                alt="Luxury living space design"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Overlapping Smaller Image */}
            <div className="absolute bottom-0 right-0 w-[55%] h-[60%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-900">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=400&q=80"
                alt="Living details materials"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Accent badge */}
            <div className="absolute bottom-[40%] left-[-15px] sm:left-[-25px] bg-amber-500 text-white rounded-xl p-4 sm:p-5 shadow-lg flex flex-col items-center justify-center max-w-[130px] sm:max-w-[150px]">
              <Star className="w-6 h-6 fill-white text-white mb-1.5" />
              <span className="text-xl font-bold sm:text-2xl">Elite</span>
              <span className="text-[10px] sm:text-xs text-center font-medium tracking-wide uppercase text-zinc-100">
                Design Standard
              </span>
            </div>
          </motion.div>

          {/* Editorial Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div className="space-y-2">
              <span className="text-amber-500 font-semibold text-sm tracking-wider uppercase">
                About SA Interior
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight font-heading">
                Crafting Custom Spaces That Tell Your Story
              </h2>
            </div>

            {/* <p className="text-muted-foreground text-base leading-relaxed">
              Founded in 2014, <strong>SA Interior</strong> has grown into a leading interior design firm recognized for creating elegant, bespoke environments. We believe that a beautifully designed home is the foundation of well-being, and every space should reflect the unique character and aspirations of those who inhabit it.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Our multidisciplinary team combines architectural integrity with custom curation, matching premium materials with flawless detailing. From initial layout conception and 3D modeling down to furniture styling and key handovers, we deliver custom environments on timeline and on budget.
            </p> */}

            {/* Checkpoints list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-2">
              {[
                "Client-First Design Philosophy",
                "High-End Spatial Ergonomics",
                "Experienced Project Execution",
                "Premium Material Sourcing",
                "Innovative Light & Color Styling",
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-sm font-medium text-foreground">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
