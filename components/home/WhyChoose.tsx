"use client"

import React from "react"
import { motion } from "framer-motion"
import { Factory, Landmark, Users, BadgeDollarSign, ShieldCheck, HeartHandshake } from "lucide-react"

const reasons = [
  {
    icon: Factory,
    title: "In-House Factory",
    description: "Our state-of-the-art manufacturing unit finishes custom wardrobe cabinetry, high-end panels, and wood frames with absolute German precision.",
  },
  // {
  //   icon: ShieldCheck,
  //   title: "10-Year Warranty",
  //   description: "Every modular element, custom hinge, and cabinetry build is protected by our transparent 10-year structural warranty, ensuring long-term utility.",
  // },
  {
    icon: BadgeDollarSign,
    title: "No Hidden Costs",
    description: "We provide comprehensive, itemized, line-by-line quotes before execution. The price we agree on is the exact price you pay.",
  },
  {
    icon: Users,
    title: "Experienced Design Team",
    description: "Led by Shreya and our team of senior architects with 12+ years of experience crafting luxury spaces across commercial and residential sectors.",
  },
  {
    icon: HeartHandshake,
    title: "End-to-End Execution",
    description: "Say goodbye to coordinator calls. We manage structural contractors, plumbers, carpenters, and electricians for a single-point contact flow.",
  },
  {
    icon: Landmark,
    title: "50+ Projects Handed Over",
    description: "A proven history of turning mockups into high-fidelity living spaces since 2014, backed by stellar feedback and references.",
  },
]

export default function WhyChoose() {
  return (
    <section id="why-choose" className="py-20 md:py-28 bg-zinc-50 dark:bg-zinc-950/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Accent Hook side */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-6"
          >
            <span className="text-amber-500 font-semibold text-sm tracking-wider uppercase">
              Our Differentiators
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight font-heading">
              Why Choose SA Interior?
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We eliminate the stress of interior decoration by combining expert architectural designers, internal manufacturing facilities, and completely transparent material cost declarations.
            </p>
            <div className="h-1 w-20 bg-amber-500 rounded-full" />
            
            {/* Visual Callout */}
            <div className="p-6 bg-amber-500/10 border border-amber-500/25 rounded-2xl">
              <span className="block text-2xl font-bold text-amber-500 mb-1">Zero Hassle</span>
              <span className="text-xs text-muted-foreground leading-relaxed block">
                From initial 3D drafts to material procurement and site cleanup, we coordinate the entire workflow internally.
              </span>
            </div>
          </motion.div>

          {/* Grid Deck side */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((rs, idx) => {
              const Icon = rs.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex gap-4 p-6 rounded-2xl bg-white border border-border shadow-xs hover:shadow-md transition-shadow dark:bg-zinc-900"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-base font-bold text-foreground font-heading">
                      {rs.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {rs.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
