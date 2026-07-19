"use client"

import React from "react"
import { motion } from "framer-motion"
import { Coffee, Layers, Compass, Hammer, Sparkles } from "lucide-react"

const steps = [
  {
    icon: Coffee,
    step: "01",
    title: "Initial Consultation",
    label: "Understanding client lifestyle",
    description: "We meet at your space or our studio to discuss spatial layout plans, functional requirements, architectural choices, and budget metrics.",
  },
  {
    icon: Compass,
    step: "02",
    title: "Concept & 3D Renderings",
    label: "Visualizing the spaces",
    description: "Our design team creates functional furniture layouts, color palettes, and photo-realistic 3D representations of each space.",
  },
  {
    icon: Layers,
    step: "03",
    title: "Material Selection",
    label: "Sourcing premium finishes",
    description: "You join us to select materials, veneers, fabrics, lighting fixtures, and custom laminates, and review precise cost sheets.",
  },
  {
    icon: Hammer,
    step: "04",
    title: "Execution & Oversight",
    label: "Quality-focused construction",
    description: "Our in-house carpentry team and site supervisors execute construction, electrical mapping, framing, and final painting finishes.",
  },
  {
    icon: Sparkles,
    step: "05",
    title: "Styling & Handover",
    label: "Move-in ready turnkey hand over",
    description: "We deep-clean, style your spaces with curated decor, and hand over the keys to your pristine, custom-designed new sanctuary.",
  },
]

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-20 space-y-3">
          <span className="text-amber-500 font-semibold text-sm tracking-wider uppercase">
            How We Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-heading">
            Our Work Process
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Our systematic approach ensures a stress-free experience from the initial handshake to the final key handover.
          </p>
        </div>

        {/* Timeline Horizontal / Vertical */}
        <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-10 sm:px-4">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-[44px] left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-amber-500/10 via-amber-500/40 to-amber-500/10 z-0" />

          {steps.map((st, idx) => {
            const Icon = st.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative flex flex-col items-center md:items-start text-center md:text-left group z-10"
              >
                {/* Step Circle */}
                <div className="w-16 h-16 rounded-full bg-zinc-50 border border-border flex items-center justify-center relative mb-6 shadow-md transition-all duration-300 group-hover:border-amber-500 group-hover:scale-105 dark:bg-zinc-900">
                  <Icon className="w-6 h-6 text-zinc-700 dark:text-zinc-200 transition-colors group-hover:text-amber-500" />
                  
                  {/* Step Index Badge */}
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-amber-500 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white dark:border-zinc-950">
                    {st.step}
                  </span>
                </div>

                {/* Info Content */}
                <span className="text-amber-500 text-[10px] uppercase font-bold tracking-widest leading-none mb-1">
                  {st.label}
                </span>
                <h3 className="text-lg font-bold text-foreground mb-3 font-heading">
                  {st.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed max-w-xs md:max-w-none">
                  {st.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
