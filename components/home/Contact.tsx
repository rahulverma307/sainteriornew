"use client"

import React from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Send, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [submitted, setSubmitted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    // mock api response delay
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Column 1 - Contact Details (cols 5) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-3">
              <span className="text-amber-500 font-semibold text-sm tracking-wider uppercase">
                Let's Talk
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-heading">
                Start Design Project
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Ready to create your perfect space? Reach out to us, or fill out the form, and our design lead Shreya will connect with you to book a free spatial consultation.
              </p>
            </div>

            {/* List of details */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-bold text-foreground text-sm tracking-wider uppercase mb-1">
                    Design Studio
                  </span>
                  <span className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                    Plot No. 71, Gali no. 44Chaprauli Banger, Sec-168, Noida, UP -201305
                  </span>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-bold text-foreground text-sm tracking-wider uppercase mb-1">
                    Call US
                  </span>
                  <a href="tel:+919876543210" className="text-zinc-600 dark:text-zinc-400 hover:text-amber-500 text-sm block">
                    +91 8595431712
                  </a>
                  <a href="tel:+91223456789" className="text-zinc-600 dark:text-zinc-400 hover:text-amber-500 text-sm block">
                    +91 9667249979
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-bold text-foreground text-sm tracking-wider uppercase mb-1">
                    Direct Email
                  </span>
                  <a href="mailto:sainteriornoida@gmail.com" className="text-zinc-600 dark:text-zinc-400 hover:text-amber-500 text-sm block">
                    sainteriornoida@gmail.com
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Column 2 - Interactive Form (cols 7) */}
          {/* <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-zinc-50 dark:bg-zinc-900 border border-border p-8 sm:p-10 rounded-3xl"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shadow-md">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground font-heading">
                  Inquiry Received!
                </h3>
                <p className="text-muted-foreground text-sm max-w-sm">
                  Thank you for reaching out. A design consultant from Shreya Associates will review your spatial draft and call you within the next 24 business hours.
                </p>
                <Button variant="outline" onClick={() => setSubmitted(false)} className="mt-4">
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-foreground uppercase tracking-wider">
                      Your Name
                    </label>
                    <Input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      className="bg-background border-border text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-foreground uppercase tracking-wider">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      className="bg-background border-border text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-foreground uppercase tracking-wider">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      required
                      placeholder="e.g. rahul@example.com"
                      className="bg-background border-border text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-foreground uppercase tracking-wider">
                      Project Type
                    </label>
                    <select
                      className="w-full h-8 rounded-lg border border-border bg-background px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>Select project scope</option>
                      <option value="residential">Residential (Full home)</option>
                      <option value="living-room">Living Room renovation</option>
                      <option value="modular-kitchen">Modular Kitchen setup</option>
                      <option value="commercial">Commercial Office</option>
                      <option value="bespoke">Bespoke Furniture only</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-foreground uppercase tracking-wider">
                    Tell us about your space
                  </label>
                  <Textarea
                    required
                    rows={4}
                    placeholder="Describe your design specifications, floorplan sizing, or room ideas..."
                    className="bg-background border-border text-sm resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Submitting Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Design Inquiry</span>
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div> */}

        </div>
      </div>
    </section>
  )
}
