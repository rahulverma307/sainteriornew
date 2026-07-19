import React from "react"
import { Mail, MapPin, Phone, Rss, ArrowRight } from "lucide-react"
import {
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="w-full bg-zinc-950 text-zinc-400 border-t border-zinc-900 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1 - Branding & Info */}
          <div className="flex flex-col gap-4">
            <a href="#home" className="flex items-center gap-2">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-white text-zinc-950 font-bold text-base tracking-wider">
                S<span className="text-amber-500 font-extrabold text-xs absolute -bottom-1 -right-1 bg-zinc-950 rounded-full px-0.5 border border-zinc-800">A</span>
              </div>
              <span className="font-heading text-lg font-bold tracking-widest text-white">
                SA <span className="text-amber-500 font-light">INTERIOR</span>
              </span>
            </a>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-xs mt-2">
              Premium residential and commercial interior design studio turning your spatial dreams into high-fidelity custom living art.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a href="https://www.instagram.com/sa_interiors2017/" className="w-9 h-9 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-amber-500 hover:text-white transition-all" title="Instagram">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-amber-500 hover:text-white transition-all" title="Facebook">
                <FaFacebook className="w-4 h-4" />
              </a>
              {/* <a href="#" className="w-9 h-9 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-amber-500 hover:text-white transition-all" title="Twitter">
                <FaTwitter className="w-4 h-4" />
              </a> */}
              {/* <a href="#" className="w-9 h-9 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-amber-500 hover:text-white transition-all" title="Pinterest">
                <Rss className="w-4 h-4" />
              </a> */}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-medium text-sm tracking-wider uppercase">Quick Links</h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              {/* <li><a href="#about" className="hover:text-amber-500 transition-colors">About Our Studio</a></li> */}
              <li><a href="#services" className="hover:text-amber-500 transition-colors">Our Services</a></li>
              <li><a href="#projects" className="hover:text-amber-500 transition-colors">Featured Projects</a></li>
              <li><a href="#process" className="hover:text-amber-500 transition-colors">Our Work Process</a></li>
              <li><a href="#faq" className="hover:text-amber-500 transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-medium text-sm tracking-wider uppercase">Get In Touch</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Plot No. 71, Gali no. 44Chaprauli Banger, Sec-168, Noida, UP -201305</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500" />
                <a href="tel:+918595431712" className="hover:text-amber-500 transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-500" />
                <a href="mailto:sainteriornoida@gmail.com" className="hover:text-amber-500 transition-colors">sainteriornoida@gmail.com</a>
              </li>
            </ul>
          </div>

      
        </div>

        {/* Separator / Copyright */}
        <div className="border-t border-zinc-900 pt-8 mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} SA Interior. All rights reserved.</p>
          <div className="flex items-center gap-5 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
