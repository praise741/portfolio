import Link from "next/link"
import { ArrowRight, Mail, Phone, MapPin, Sparkles, Terminal, Cpu, ShieldCheck } from "lucide-react"

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
)

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full z-10">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wide mb-8 shadow-sm shadow-cyan-500/10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>AVAILABLE FOR NEW PROJECTS & FULL-TIME ROLES</span>
        </div>

        {/* Main Heading */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white font-['Outfit'] tracking-tight leading-[1.1] mb-6">
            Oluwamuyiwa Praise <br />
            <span className="gradient-text">Oluwakanyinsayomi</span>
          </h1>

          <p className="text-xl sm:text-2xl font-medium text-slate-300 mb-6 flex flex-wrap items-center gap-2">
            <span>Full Stack & Data Integration Developer</span>
            <span className="text-cyan-400 font-bold">•</span>
            <span className="text-slate-400 text-lg">Next.js & Laravel Expert</span>
          </p>

          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
            Specializing in high-concurrency web architecture, predictive time-series forecasting (Meta Prophet), self-hosted cloud infrastructure, and real-time logistics middleware.
          </p>
        </div>

        {/* Contact Info Pills */}
        <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300 mb-10">
          <a
            href="mailto:kanyinsayopraise@gmail.com"
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 transition-all"
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>kanyinsayopraise@gmail.com</span>
          </a>
          <a
            href="tel:+2347043167491"
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 transition-all"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>+234 704 316 7491</span>
          </a>
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400">
            <MapPin className="w-4 h-4 text-rose-400" />
            <span>Akure, Nigeria</span>
          </div>
          <a
            href="https://github.com/Praise741"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 transition-all"
          >
            <GithubIcon className="w-4 h-4 text-indigo-400" />
            <span>github.com/Praise741</span>
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          <a
            href="#projects"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all flex items-center gap-2 group"
          >
            <span>Explore Featured Work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-6 py-3.5 rounded-xl bg-slate-900/90 border border-slate-700/80 hover:border-cyan-400 text-slate-200 font-semibold text-sm hover:bg-slate-800 transition-all"
          >
            Get In Touch
          </a>
        </div>

        {/* Stats Counter Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl glass-panel border border-slate-800/80">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] flex items-center gap-1.5">
              <span>5+</span>
              <Sparkles className="w-5 h-5 text-cyan-400" />
            </div>
            <p className="text-xs text-slate-400 font-medium">Years Active Experience</p>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] flex items-center gap-1.5">
              <span>15+</span>
              <Terminal className="w-5 h-5 text-indigo-400" />
            </div>
            <p className="text-xs text-slate-400 font-medium">Production Platforms Built</p>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] flex items-center gap-1.5">
              <span>99.9%</span>
              <Cpu className="w-5 h-5 text-emerald-400" />
            </div>
            <p className="text-xs text-slate-400 font-medium">System Deployment Uptime</p>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] flex items-center gap-1.5">
              <span>100%</span>
              <ShieldCheck className="w-5 h-5 text-purple-400" />
            </div>
            <p className="text-xs text-slate-400 font-medium">Client Delivery Satisfaction</p>
          </div>
        </div>

      </div>
    </section>
  )
}
