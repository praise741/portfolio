import { Code, Cpu, Database, Server, Check } from "lucide-react"

const highlights = [
  {
    icon: Code,
    title: "Full-Stack Web Engineering",
    description: "Designing end-to-end applications using Next.js, React 19, TypeScript, and Laravel with scalable backend services.",
  },
  {
    icon: Cpu,
    title: "Predictive AI & Time-Series Analytics",
    description: "Architecting statistical forecasting pipelines using Meta Prophet, Python, and FastAPI to predict market trends.",
  },
  {
    icon: Database,
    title: "Self-Hosted Cloud Infrastructure",
    description: "Deploying self-hosted Supabase, Appwrite backend-as-a-service, MySQL/PostgreSQL databases, and high-speed storage.",
  },
  {
    icon: Server,
    title: "Real-Time Middleware & Logistics",
    description: "Building automated courier tracking networks, payment gateway integrations, and brokerage trade copier API bridges.",
  },
]

export default function About() {
  return (
    <section id="about" className="pt-20 pb-24 border-b border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
            // ABOUT ME
          </span>
          <h2 className="text-3xl font-bold text-white font-['Outfit'] mt-1">
            Engineered For High-Scale Reliability
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left Bio */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800 space-y-4">
              <h3 className="text-lg font-bold text-white font-['Outfit']">
                Oluwamuyiwa Praise Oluwakanyinsayomi
              </h3>
              <p className="text-zinc-300 text-xs leading-relaxed">
                Software & Data Integration Developer based in Akure, Nigeria. Completing a Bachelor of Science in Computer Science at Joseph Ayo Babalola University (400-Level).
              </p>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Over 5+ years of experience engineering multivendor marketplaces, logistics tracking networks, VTU financial engines, and predictive analytics platforms.
              </p>

              <div className="pt-4 border-t border-zinc-800 space-y-2">
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <Check className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                  <span>Strict type safety & modular architecture</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <Check className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                  <span>Linux server administration & process workers</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <Check className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                  <span>High-concurrency webhook & API design</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Highlights */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 text-white">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-white font-['Outfit'] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
