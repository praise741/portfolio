"use client"

import Link from "next/link"
import { ArrowUp } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-10 bg-black border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-zinc-900">
          
          {/* Brand */}
          <div className="text-base font-bold text-white font-['Outfit']">
            Praise<span className="text-zinc-500">.dev</span>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
            <Link href="#about" className="hover:text-white transition-colors">About</Link>
            <Link href="#skills" className="hover:text-white transition-colors">Skills</Link>
            <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
            <Link href="#experience" className="hover:text-white transition-colors">Experience</Link>
            <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
          </div>

          {/* Top */}
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-zinc-950 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-medium"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            &copy; {currentYear} Oluwamuyiwa Praise Oluwakanyinsayomi. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Praise741"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href="mailto:kanyinsayopraise@gmail.com"
              className="hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
