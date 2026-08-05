import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from "lucide-react"

const experiences = [
  {
    type: "work",
    role: "Senior Software Developer (Freelance & Contract)",
    organization: "Independent Client & Startup Contracts",
    period: "2021 – Present",
    location: "Remote / Akure, Nigeria",
    description: [
      "Architected, built, and deployed 15+ production-grade web applications spanning Next.js, React, Laravel, and Python FastAPI.",
      "Integrated Meta Prophet time-series analytics model into Market Matrix for automated price forecasting and trend visualization.",
      "Engineered Lonemmy Courier logistics platform using Next.js 15, Appwrite session fallbacks, and real-time parcel state management.",
      "Configured Linux server environments, supervisor process managers, Nginx proxying, and automated deployment pipelines.",
    ],
  },
  {
    type: "education",
    role: "Bachelor of Science in Computer Science",
    organization: "Joseph Ayo Babalola University",
    period: "2021 – Present (400 Level)",
    location: "Ikeji-Arakeji, Osun State, Nigeria",
    description: [
      "Specializing in Software Engineering, Data Structures & Algorithms, Systems Analysis, and Database Architecture.",
      "Conducted research in machine learning algorithms, time-series analysis, and data integration methodologies.",
      "Active participant in technical student project showcases and software development mentorship.",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-12">
          <span className="text-xs font-bold text-cyan-400 tracking-wider uppercase font-['Outfit']">
            // CAREER & EDUCATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit']">
            Experience & Academic Background
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full mt-1" />
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-8 space-y-12 pl-6 md:pl-10">
          {experiences.map((exp, idx) => {
            const isWork = exp.type === "work"
            return (
              <div key={idx} className="relative group">
                
                {/* Node Dot Icon */}
                <div className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-10 h-10 rounded-xl border flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 ${
                  isWork
                    ? "bg-cyan-950 border-cyan-500/50 text-cyan-400 shadow-cyan-500/20"
                    : "bg-indigo-950 border-indigo-500/50 text-indigo-400 shadow-indigo-500/20"
                }`}>
                  {isWork ? <Briefcase className="w-5 h-5" /> : <GraduationCap className="w-5 h-5" />}
                </div>

                {/* Content Card */}
                <div className="glass-card p-7 rounded-2xl border border-slate-800/80 space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white font-['Outfit']">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold text-cyan-400">
                        {exp.organization}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {exp.period}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 pt-2">
                    {exp.description.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
