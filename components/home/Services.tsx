"use client"

import React from "react"
import { motion } from "framer-motion"
import { Home, ClipboardList, PenTool, Layout, Lightbulb, ShieldCheck, ChevronRight } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Residential Interiors",
    description: "Bespoke home designs for living rooms, luxurious master suites, and elegant dining spaces curated around your lifestyle.",
  },
  {
    icon: Layout,
    title: "Modular Kitchens",
    description: "Ergonomically perfect, dust-free custom modular layouts integrated with smart hardware and highly durable, easy-to-clean finishes.",
  },
  {
    icon: ClipboardList,
    title: "Commercial & Retail Spaces",
    description: "High-productivity custom corporate office designs, luxury retail outlets, and showrooms that enhance your brand value.",
  },
  {
    icon: Lightbulb,
    title: "Lighting & Color Consultation",
    description: "Sophisticated ambient, accent, and task lighting design paired with strategic palette mapping to create emotional depth.",
  },
  {
    icon: ShieldCheck,
    title: "Office Space Design",
    description: "We create workspaces that boost productivity and reflect your brand identity, combining functionality with modern aesthetics.",
  },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-amber-500 font-semibold text-sm tracking-wider uppercase">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-heading">
            Our Luxury Design Services
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            We offer fully integrated interior styling and execution solutions, managing every process detail from scratch ideas to completed architectural art.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((svc, idx) => {
            const Icon = svc.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative flex flex-col p-8 rounded-2xl bg-zinc-50 border border-border/60 transition-all bg-zinc-900/5 dark:bg-zinc-900/80 hover:scale-[1.02] hover:shadow-xl hover:border-amber-500/40"
              >
                {/* Icon box */}
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 font-heading group-hover:text-amber-500 transition-colors">
                  {svc.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  {svc.description}
                </p>

                {/* Call to action arrow */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-500 hover:text-amber-600 tracking-wider uppercase mt-auto"
                >
                  Contact Us <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
