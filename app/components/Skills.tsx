"use client"

import { useState } from "react"
import { Code2, Server, Brain, Database, Wrench, Layers } from "lucide-react"

const categories = [
  { id: "all", label: "All Skills", icon: Layers },
  { id: "frontend", label: "Frontend", icon: Code2 },
  { id: "backend", label: "Backend", icon: Server },
  { id: "ai", label: "Data & AI", icon: Brain },
  { id: "database", label: "Database & Cloud", icon: Database },
  { id: "devops", label: "DevOps & Tools", icon: Wrench },
]

const skillsData = [
  { name: "React 19 & Next.js 15", category: "frontend", level: "Expert", desc: "App Router, SSR, Server Components, Turbopack" },
  { name: "TypeScript", category: "frontend", level: "Advanced", desc: "Strict Typing, Generics, Interface Architecture" },
  { name: "Tailwind CSS & Styling", category: "frontend", level: "Expert", desc: "Tailwind v4, Responsive Layouts, Clean CSS" },
  { name: "State Management", category: "frontend", level: "Advanced", desc: "Zustand, React Context, SWR Data Fetching" },
  { name: "JavaScript (ES6+)", category: "frontend", level: "Expert", desc: "Async/Await, Promises, Closures, DOM Architecture" },

  { name: "Laravel (PHP)", category: "backend", level: "Expert", desc: "REST APIs, Artisan, Eloquent ORM, Supervisor Queue Workers" },
  { name: "FastAPI & Python", category: "backend", level: "Advanced", desc: "Pydantic, Async Endpoints, Meta Prophet Integration" },
  { name: "Node.js & Express", category: "backend", level: "Advanced", desc: "Middleware Architecture, Event Loops, JWT Auth" },
  { name: "RESTful API Design", category: "backend", level: "Expert", desc: "Webhook Design, OpenApi Specs, Secure Authentication" },

  { name: "Meta Prophet Forecasting", category: "ai", level: "Specialist", desc: "Time-Series Predictive Analytics, Trend Decomposition" },
  { name: "Vision-Language Models (VLM)", category: "ai", level: "Intermediate", desc: "Multimodal AI Fine-Tuning, Prompt Engineering" },
  { name: "TensorFlow & Python Data Stack", category: "ai", level: "Intermediate", desc: "NumPy, Pandas, Data Preprocessing & Analytics" },

  { name: "Self-Hosted Supabase", category: "database", level: "Advanced", desc: "PostgreSQL, Realtime Subscriptions, Row Level Security" },
  { name: "Appwrite Backend-as-a-Service", category: "database", level: "Advanced", desc: "Databases, Session Secret Fallbacks, Cloud Functions" },
  { name: "MySQL & PostgreSQL", category: "database", level: "Expert", desc: "Query Optimization, Indexing, Complex Joins, Schema Design" },
  { name: "MongoDB", category: "database", level: "Intermediate", desc: "Document Modeling, Aggregation Pipelines" },

  { name: "Ubuntu & Linux Administration", category: "devops", level: "Advanced", desc: "Process Supervisors, Cron, File Symlinks, Firewall Rules" },
  { name: "Git, GitHub & Workflows", category: "devops", level: "Expert", desc: "Branching Strategies, CI/CD Actions, Release Tagging" },
  { name: "Docker & Containerization", category: "devops", level: "Advanced", desc: "Multi-stage Builds, Docker Compose, Microservice Isolation" },
  { name: "Cloud Server Performance Tuning", category: "devops", level: "Advanced", desc: "Supervisor Workers, Nginx Proxying, Memory Allocation" },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredSkills = activeCategory === "all"
    ? skillsData
    : skillsData.filter((s) => s.category === activeCategory)

  return (
    <section id="skills" className="pt-20 pb-24 border-b border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
            // TECHNICAL EXPERTISE
          </span>
          <h2 className="text-3xl font-bold text-white font-['Outfit'] mt-1">
            Technologies & Frameworks
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 pb-2">
          {categories.map((cat) => {
            const Icon = cat.icon
            const isActive = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  isActive
                    ? "bg-white text-black"
                    : "bg-zinc-950 text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            )
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-sm font-bold text-white font-['Outfit']">
                    {skill.name}
                  </h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900 text-zinc-400 border border-zinc-800">
                    {skill.level}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
