"use client"

import { ExternalLink } from "lucide-react"

const featuredProjects = [
  {
    title: "Brandify Marketplace",
    url: "https://brandifyng.app",
    domain: "brandifyng.app",
    role: "Full Stack (Laravel & Cloud Infrastructure)",
    description: "Multivendor fashion marketplace with real-time vendor dashboards, inventory management, and automated logistics workers.",
    tech: ["Laravel", "PHP", "MySQL", "Supervisor", "Tailwind CSS"],
  },
  {
    title: "Lonemmy Courier Service",
    url: "https://lonnecapp.com.ng",
    domain: "lonnecapp.com.ng",
    role: "Full Stack (Next.js 15 & Appwrite)",
    description: "Enterprise logistics network featuring real-time parcel tracking, customer/courier portals, and dynamic delivery pricing.",
    tech: ["Next.js 15", "React 19", "Appwrite", "Supabase", "Tailwind CSS"],
  },
  {
    title: "Market Matrix Analytics",
    url: "https://marketmatrix.app",
    domain: "marketmatrix.app",
    role: "Data Integration & Frontend (FastAPI & Meta Prophet)",
    description: "Predictive price forecasting platform using Meta Prophet Python models and real-time interactive financial dashboards.",
    tech: ["Next.js", "Python", "FastAPI", "Meta Prophet", "Chart.js"],
  },
  {
    title: "Lasco Electronics",
    url: "https://lascoecs.com",
    domain: "lascoecs.com",
    role: "Full Stack (Next.js E-Commerce)",
    description: "Electronics e-commerce storefront with optimized catalog search, dynamic shopping cart, and fast checkout flow.",
    tech: ["Next.js", "React", "Node.js", "Tailwind CSS"],
  },
  {
    title: "Hashtag Fashion Brand",
    url: "https://hashtagfashionbrand.com",
    domain: "hashtagfashionbrand.com",
    role: "Frontend & Payment Integration",
    description: "Modern fashion retail storefront with responsive collections, instant product filters, and payment processing.",
    tech: ["React", "JavaScript", "Tailwind CSS", "PHP"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 border-b border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
              // LIVE FEATURED PROJECTS
            </span>
            <h2 className="text-3xl font-extrabold text-white font-['Outfit'] mt-1">
              Production Work & Live Sites
            </h2>
          </div>
          <p className="text-xs text-zinc-400 max-w-sm">
            Direct production links to deployed platforms built & engineered by Oluwamuyiwa Praise.
          </p>
        </div>

        {/* Live Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-500 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Browser Frame Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-900">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                    <span className="text-[11px] font-mono text-zinc-500 ml-2">https://{project.domain}</span>
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1 rounded bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-colors"
                  >
                    <span>Visit Site</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Title & Role */}
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-white font-['Outfit'] mb-1">
                    {project.title}
                  </h3>
                  <span className="text-xs font-mono text-zinc-400">
                    {project.role}
                  </span>
                </div>

                {/* Punchy 1-sentence description */}
                <p className="text-xs text-zinc-300 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Direct Link Preview Box */}
              <div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-colors text-center mb-4 group-hover:bg-zinc-900/80"
                >
                  <span className="text-xs font-mono text-zinc-300 group-hover:text-white flex items-center justify-center gap-2">
                    <span>Open {project.domain}</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </a>

                {/* Tech Pills */}
                <div className="pt-3 border-t border-zinc-900 flex flex-wrap gap-1.5">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900 text-zinc-400 border border-zinc-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
