"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Sparkles } from "lucide-react"

const categories = ["All", "Cloth Store", "Residential", "Commercial", "Modular Kitchen"]

const projects = [
  {
    id: 1,
    category: "Cloth Store",
    title: "ShreeKama",
    location: "Delhi",
    image: "/images/ShreeKama.jpeg",
    size: "4,500 sq.ft villa",
  },
  {
    id: 2,
    category: "Commercial",
    title: "Acotel Workspace HQ",
    location: "Delhi NCR",
    image: "/images/office1.jpeg",
    size: "12,000 sq.ft office",
  },
  {
    id: 3,
    category: "Modular Kitchen",
    title: " Home Kitchen ",
    location: "Delhi NCR",
    // image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80",
    image: "/images/kitche.png",
    size: "Modular setup",
  },
  {
    id: 4,
    category: "Residential",
    title: "Bedroom",
    location: "Delhi NCR",
    image: "/images/bedroom.png",
    size: "3 BHK Premium Flat",
  },
  {
    id: 5,
    category: "Commercial",
    title: "Cabin",
    location: "Delhi NCR",
    // image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80",
    image: "/images/office2.png",
    size: "Boutique gallery",
  },
 
]

export default function Projects() {
  const [filter, setFilter] = React.useState("All")

  const filteredProjects = projects.filter(
    (proj) => filter === "All" || proj.category === filter
  )

  return (
    <section id="projects" className="py-20 md:py-28 bg-zinc-50 dark:bg-zinc-950/40">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="text-amber-500 font-semibold text-sm tracking-wider uppercase flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-heading">
              Our Featured Projects
            </h2>
            <p className="text-muted-foreground text-sm max-w-lg leading-relaxed">
              Explore our comprehensive gallery of award-winning spaces, showcasing modern ergonomics and functional design layouts.
            </p>
          </div>

          {/* Filtering buttons */}
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg border transition-all ${
                  filter === cat
                    ? "bg-amber-500 border-amber-500 text-white shadow-md shadow-amber-500/10"
                    : "bg-background border-border text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                layout
                key={proj.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl overflow-hidden shadow-md aspect-square max-h-[380px] bg-zinc-200 border border-border"
              >
                {/* Visual Image */}
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />

                {/* Ambient dark bottom gradients fade */}
                <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent opacity-90 transition-opacity" />

                {/* Overlays content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-10 text-white">
                  <div className="flex justify-between items-end">
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">
                        {proj.category}
                      </span>
                      <h3 className="text-xl font-bold text-white tracking-wide mt-2 font-heading">
                        {proj.title}
                      </h3>
                      <p className="text-zinc-300 text-xs flex items-center gap-1.5 font-medium leading-none">
                        <span>{proj.location}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                        <span className="text-zinc-400">{proj.size}</span>
                      </p>
                    </div>

                    {/* Circular Action Button */}
                    {/* <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center translate-y-0 group-hover:scale-105 active:scale-95 transition-all shadow-lg">
                      <ExternalLink className="w-4 h-4" />
                    </div> */}
                  </div>
                </div>

                {/* Hover Top border frame line glow */}
                <div className="absolute inset-0 border border-white/0 group-hover:border-amber-500/50 rounded-2xl transition-colors duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
