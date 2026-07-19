"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ChevronRight, Award, FolderCheck, Smile } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    // image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
    image: "/images/ShreeKama1.jpeg",
    title: "Luxury Cloth Store",
    subtitle: "Exquisite Custom Interiors",
    description: "We craft sophisticated spaces that mirror your cloth store unique style and elevate daily living to a high-end luxury experience.",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    title: "Modern Simplicity",
    subtitle: "Functional Modular Kitchens",
    description: "Seamless ergonomics meets aesthetic brilliance. Experience top-tier modular solutions designed for contemporary homes.",
  },
  {
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=80",
    title: "Sanctuary Spaces",
    subtitle: "Serene Bespoke Bedrooms",
    description: "Your ultimate retreat. We design peaceful, customized bedroom sanctuaries that balance comfort with luxury aesthetics.",
  },
]

export default function Hero() {
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative w-full min-h-[90vh] lg:min-h-screen flex flex-col justify-center overflow-hidden bg-zinc-950">
      {/* Background slide transitions */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <div className="absolute inset-0 bg-black/60 dark:bg-black/70 mix-blend-multiply z-10" />
            <img
              src={slides[current].image}
              alt={slides[current].title}
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content wrapper */}
      <div className="container mx-auto px-4 md:px-6 relative z-20 text-white pt-24 pb-12 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest">
              SA Interior
            </span>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-3"
            >
              <h2 className="text-amber-500 font-light text-xl md:text-2xl tracking-wide">
                {slides[current].subtitle}
              </h2>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-none text-white font-heading">
                {slides[current].title}
              </h1>
              <p className="text-zinc-300 text-base md:text-lg max-w-xl leading-relaxed mt-2">
                {slides[current].description}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap gap-4 mt-4"
          >
            {/* <Button  size="lg" className="bg-amber-500 hover:bg-amber-600 text-white font-medium">
              <a href="#contact" className="flex items-center gap-2">
                Get a Free Quote
                <ArrowRight className="w-4 h-4 translate-y-[0.5px]" />
              </a>
            </Button> */}
            <Button  size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white">
              <a href="#projects">View Gallery</a>
            </Button>
          </motion.div>
        </div>

        {/* Carousel indicators */}
        <div className="flex gap-2.5 mt-12 md:mt-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === current ? "w-8 bg-amber-500" : "w-2 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Floating stats block */}
      <div className="w-full bg-white dark:bg-zinc-950 border-t border-border py-6 z-25">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-border">
            <div className="flex items-center justify-center gap-4 py-3 sm:py-0">
              <Award className="w-8 h-8 text-amber-500 shrink-0" />
              <div className="text-left">
                <span className="block text-2xl font-bold text-foreground">8+ Years</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Design Excellence</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 py-3 sm:py-0">
              <FolderCheck className="w-8 h-8 text-amber-500 shrink-0" />
              <div className="text-left">
                <span className="block text-2xl font-bold text-foreground">50+ Projects</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Flawless Handover</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 py-3 sm:py-0">
              <Smile className="w-8 h-8 text-amber-500 shrink-0" />
              <div className="text-left">
                <span className="block text-2xl font-bold text-foreground">100% Happy</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Client Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
