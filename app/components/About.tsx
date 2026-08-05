import { Code, Cpu, Database, Server, CheckCircle2 } from "lucide-react"

const highlights = [
  {
    icon: Code,
    title: "Full-Stack Web Engineering",
    description: "Designing end-to-end applications using Next.js, React 19, TypeScript, and Laravel with seamless state management and performant backend services.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/20",
  },
  {
    icon: Cpu,
    title: "Predictive AI & Time-Series Analytics",
    description: "Architecting statistical forecasting pipelines using Meta Prophet, Python, and FastAPI to predict market trends and demand fluctuations.",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10 border-indigo-500/20",
  },
  {
    icon: Database,
    title: "Self-Hosted Cloud Infrastructure",
    description: "Deploying self-hosted Supabase, Appwrite backend-as-a-service, MySQL/PostgreSQL databases, and high-concurrency storage systems.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    icon: Server,
    title: "Real-Time Middleware & Logistics",
    description: "Building automated courier tracking networks, payment gateway integrations, and brokerage trade copier API bridges.",
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/20",
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 relative border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-12">
          <span className="text-xs font-bold text-cyan-400 tracking-wider uppercase font-['Outfit']">
            // ABOUT ME & PHILOSOPHY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit']">
            Architecting Resilient Software Solutions
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full mt-1" />
        </div>

        {/* Story & Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Bio Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-8 rounded-2xl border border-slate-800/80 space-y-4">
              <h3 className="text-xl font-bold text-white font-['Outfit']">
                Hello! I&apos;m Oluwamuyiwa Praise.
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                I am a passionate <strong className="text-white">Software & Data Integration Developer</strong> based in Akure, Nigeria. Currently completing my Bachelor of Science in Computer Science at Joseph Ayo Babalola University (400-Level), I bridge the gap between complex algorithmic logic and intuitive user experiences.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Over the past 5+ years, I have architected and deployed production systems across multivendor marketplaces, logistics tracking suites, VTU financial hubs, and predictive financial analytics.
              </p>

              <div className="pt-4 border-t border-slate-800/80 space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Emphasis on type safety, clean code, and modular architecture</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Hands-on Linux server administration & process management</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Rapid API synthesis & real-time webhook design</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="glass-card p-6 rounded-2xl border border-slate-800/80 flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-11 h-11 rounded-xl ${item.bg} border flex items-center justify-center mb-4`}>
                      <Icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <h4 className="text-base font-bold text-white font-['Outfit'] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
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
