import { ArrowRight, Mail, Phone, MapPin } from "lucide-react"

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
)

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-20 border-b border-zinc-900">
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono mb-8">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span>AVAILABLE FOR CONTRACT & ROLES</span>
        </div>

        {/* Main Heading */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white font-['Outfit'] tracking-tight leading-[1.08] mb-6">
            Oluwamuyiwa Praise <br />
            <span className="text-zinc-400">Oluwakanyinsayomi</span>
          </h1>

          <p className="text-lg sm:text-xl font-medium text-zinc-300 mb-6">
            Full Stack & Data Integration Developer — Next.js, Laravel & Predictive Systems
          </p>

          <p className="text-zinc-400 text-base max-w-2xl leading-relaxed mb-10">
            Designing resilient web applications, time-series forecasting pipelines (Meta Prophet), self-hosted infrastructure, and real-time middleware.
          </p>
        </div>

        {/* Contact Info Pills */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-300 mb-10">
          <a
            href="mailto:kanyinsayopraise@gmail.com"
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-zinc-950 border border-zinc-800 hover:border-zinc-500 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-zinc-400" />
            <span>kanyinsayopraise@gmail.com</span>
          </a>
          <a
            href="tel:+2347043167491"
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-zinc-950 border border-zinc-800 hover:border-zinc-500 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-zinc-400" />
            <span>+234 704 316 7491</span>
          </a>
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-400">
            <MapPin className="w-3.5 h-3.5 text-zinc-400" />
            <span>Akure, Nigeria</span>
          </div>
          <a
            href="https://github.com/Praise741"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-zinc-950 border border-zinc-800 hover:border-zinc-500 transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5 text-zinc-400" />
            <span>github.com/Praise741</span>
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors flex items-center gap-2 group"
          >
            <span>View Featured Work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg bg-zinc-950 border border-zinc-800 hover:border-zinc-600 text-zinc-200 font-semibold text-xs transition-colors"
          >
            Get In Touch
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-xl bg-zinc-950 border border-zinc-800">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-white font-['Outfit']">5+</div>
            <p className="text-xs text-zinc-500">Years Development Experience</p>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-white font-['Outfit']">15+</div>
            <p className="text-xs text-zinc-500">Production Systems Built</p>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-white font-['Outfit']">99.9%</div>
            <p className="text-xs text-zinc-500">Infrastructure Uptime Rate</p>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-white font-['Outfit']">100%</div>
            <p className="text-xs text-zinc-500">Client Delivery Rating</p>
          </div>
        </div>

      </div>
    </section>
  )
}
