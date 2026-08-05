import { Briefcase, GraduationCap, Calendar, MapPin, Check } from "lucide-react"

const experiences = [
  {
    type: "work",
    role: "Senior Software Developer (Freelance & Contract)",
    organization: "Independent Client Contracts",
    period: "2021 – Present",
    location: "Remote / Akure, Nigeria",
    description: [
      "Architected and deployed 15+ production applications across Next.js, React, Laravel, and Python FastAPI.",
      "Integrated Meta Prophet time-series analytics model into Market Matrix for automated price forecasting.",
      "Engineered Lonemmy Courier logistics platform using Next.js 15, Appwrite session fallbacks, and real-time parcel state.",
      "Configured Linux server environments, supervisor process managers, Nginx proxying, and deployment workflows.",
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
    <section id="experience" className="py-20 border-b border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
            // CAREER & EDUCATION
          </span>
          <h2 className="text-3xl font-bold text-white font-['Outfit'] mt-1">
            Experience & Academic Background
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-zinc-800 ml-4 md:ml-8 space-y-10 pl-6 md:pl-10">
          {experiences.map((exp, idx) => {
            const isWork = exp.type === "work"
            return (
              <div key={idx} className="relative">
                
                {/* Node */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-8 h-8 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-white">
                  {isWork ? <Briefcase className="w-4 h-4" /> : <GraduationCap className="w-4 h-4" />}
                </div>

                {/* Content */}
                <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800 space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-white font-['Outfit']">
                        {exp.role}
                      </h3>
                      <p className="text-xs font-semibold text-zinc-400">
                        {exp.organization}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-zinc-500 font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 pt-2">
                    {exp.description.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5" />
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
