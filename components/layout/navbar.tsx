"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Menu, Sun, Moon, Sparkles, PhoneCall } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Why Choose Us", href: "#why-choose" },
//   { label: "Testimonials", href: "#testimonials" },
//   { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md shadow-sm border-b border-border/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-bold text-lg tracking-wider transition-transform group-hover:scale-105">
            S
            <span className="text-amber-500 font-extrabold text-sm absolute -bottom-1 -right-1 bg-background rounded-full px-1 border border-border">
              A
            </span>
          </div>
          <span className="font-heading text-lg font-bold tracking-widest text-foreground ml-1">
            SA <span className="text-amber-500 font-light">INTERIOR</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-amber-500 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-amber-500 after:transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Theme Toggle */}
          {/* <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full hover:bg-muted"
            title="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-[1.2rem] w-[1.2rem] text-amber-500" />
            ) : (
              <Moon className="h-[1.2rem] w-[1.2rem] text-zinc-800" />
            )}
          </Button> */}

          <Button  variant="outline" className="border-amber-500/50 hover:border-amber-500 text-foreground">
            <a href="#contact" className="flex items-center gap-2">
              <PhoneCall className="w-3.5 h-3.5" />
              Contact Us
            </a>
          </Button>
        </div>

        {/* Mobile Menu & Small Screen actions */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Theme Toggle for Mobile */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full"
          >
            {theme === "dark" ? (
              <Sun className="h-[1.1rem] w-[1.1rem] text-amber-500" />
            ) : (
              <Moon className="h-[1.1rem] w-[1.1rem] text-zinc-900" />
            )}
          </Button>

          {/* mobile drawer */}
          <Sheet>
            <SheetTrigger>
              <Button variant="ghost" size="icon" className="hover:bg-muted">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] flex flex-col p-6">
              <SheetTitle className="text-left font-bold tracking-widest text-foreground mb-4">
                SA <span className="text-amber-500">INTERIOR</span>
              </SheetTitle>

              <div className="flex flex-col gap-5 py-6">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-base font-medium text-foreground hover:text-amber-500 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="mt-auto border-t border-border/40 pt-6 flex flex-col gap-4">
                <div className="flex items-center gap-3 text-muted-foreground text-xs">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>Custom Luxury Interior Designers</span>
                </div>
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                  <a href="#contact">Contact Us</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
