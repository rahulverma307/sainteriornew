"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Menu, Sun, Moon, PhoneCall } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Why Choose Us", href: "#why-choose" },
  { label: "About", href: "#about" },
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
          ? "bg-background/85 backdrop-blur-md border-b border-border/40 shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-950 font-bold text-lg text-white tracking-wider transition-transform group-hover:scale-105 dark:bg-white dark:text-zinc-950">
            S
            <span className="absolute -bottom-1 -right-1 rounded-full border border-border bg-background px-1 text-xs font-extrabold text-amber-500">
              A
            </span>
          </div>

          <span className="ml-1 text-lg font-bold tracking-widest">
            SA <span className="font-light text-amber-500">INTERIOR</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-amber-500 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-amber-500 after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 lg:flex">
          <Button
            variant="ghost"
            size="icon"
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            className="rounded-full hover:bg-muted"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-amber-500" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          <Button
            variant="outline"
            className="border-amber-500/50 hover:border-amber-500"
          >
            <a href="#contact" className="flex items-center gap-2">
              <PhoneCall className="h-4 w-4" />
              Contact Us
            </a>
          </Button>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            className="rounded-full"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-amber-500" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          <Sheet>
            <SheetTrigger>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <SheetTitle className="mb-8 text-left text-xl font-bold">
                SA <span className="text-amber-500">INTERIOR</span>
              </SheetTitle>

              <nav className="flex flex-col gap-5">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="border-b border-border pb-3 text-base font-medium transition-colors hover:text-amber-500"
                  >
                    {item.label}
                  </a>
                ))}

                <Button className="mt-6 w-full bg-amber-500 text-black hover:bg-amber-400">
                  <PhoneCall className="mr-2 h-4 w-4" />
                  Contact Us
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}