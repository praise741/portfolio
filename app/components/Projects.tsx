"use client"

import { useState } from "react"
import { ExternalLink, Sparkles, Layers, ShoppingCart, Truck, TrendingUp, Cpu, Server } from "lucide-react"

const projectCategories = [
  { id: "all", label: "All Projects", icon: Layers },
  { id: "fullstack", label: "Full Stack & Web Apps", icon: Server },
  { id: "data-ai", label: "Data & AI Systems", icon: TrendingUp },
  { id: "ecommerce", label: "E-Commerce", icon: ShoppingCart },
  { id: "logistics", label: "Logistics & Middleware", icon: Truck },
]

const projects = [
  {
    title: "Brandify Multivendor Marketplace",
    category: "ecommerce",
    href: "https://brandifyng.app",
    featured: true,
    tagline: "Multivendor Fashion E-Commerce Engine",
    description:
      "Comprehensive multivendor fashion marketplace built with Laravel. Features vendor management dashboards, inventory tracking, multi-tier pricing, and automated delivery fee calculations. Configured Supervisor process workers and symlinks for seamless live updates.",
    tech: ["Laravel", "PHP", "MySQL", "Supervisor", "Tailwind CSS", "REST API"],
    badge: "Production Live",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  },
  {
    title: "Lonemmy Courier Service Platform",
    category: "logistics",
    href: "https://lonnecapp.com.ng",
    featured: true,
    tagline: "Real-Time Logistics & Parcel Tracking Network",
    description:
      "Full-scale logistics management application built with Next.js 15. Integrates real-time parcel tracking, customer/courier/vendor dashboards, Appwrite session authentication, and automated delivery pricing logic.",
    tech: ["Next.js 15", "React 19", "Appwrite", "Supabase", "Tailwind CSS", "Zustand"],
    badge: "Enterprise Platform",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
  },
  {
    title: "Market Matrix Predictive Analytics",
    category: "data-ai",
    href: "https://marketmatrix.app",
    featured: true,
    tagline: "Time-Series Financial & Market Trend Forecasting",
    description:
      "Predictive financial analytics platform for price forecasting and market trend analysis. Integrates Python Meta Prophet model pipelines via FastAPI and interactive Next.js dashboard visualizations.",
    tech: ["Next.js", "Python", "FastAPI", "Meta Prophet", "Pandas", "Chart.js"],
    badge: "AI Predictive Model",
    badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
  },
  {
    title: "Forex Trade Copier Middleware",
    category: "logistics",
    href: "https://lonnecapp.com.ng",
    featured: false,
    tagline: "Automated Signal Execution Engine",
    description:
      "High-speed middleware service built to parse trade signal webhooks in real time and execute order commands directly via API on active brokerages like Exness.",
    tech: ["Node.js", "Express", "Exness API", "Webhooks", "Redis", "TypeScript"],
    badge: "Middleware Bridge",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
  },
  {
    title: "Lasco Electronics",
    category: "ecommerce",
    href: "https://lascoecs.com",
    featured: false,
    tagline: "Electronics E-Commerce Storefront",
    description:
      "Full-stack electronics e-commerce platform designed for fast catalog browsing, dynamic cart persistence, and streamlined checkout conversion.",
    tech: ["Next.js", "React", "Node.js", "Tailwind CSS", "Payment Gateway"],
    badge: "E-Commerce",
    badgeColor: "bg-slate-800 text-slate-300 border-slate-700",
  },
  {
    title: "Hashtag Fashion Brand",
    category: "ecommerce",
    href: "https://hashtagfashionbrand.com",
    featured: false,
    tagline: "Modern Fashion Retail Web App",
    description:
      "Dynamic fashion e-commerce showcase featuring high-resolution product showcases, filterable collections, and mobile-optimized checkout.",
    tech: ["React", "JavaScript", "Tailwind CSS", "PHP Backend"],
    badge: "E-Commerce",
    badgeColor: "bg-slate-800 text-slate-300 border-slate-700",
  },
  {
    title: "TaskTrackr",
    category: "fullstack",
    href: "https://github.com/Praise741",
    featured: false,
    tagline: "Enterprise Task & Workflow System",
    description:
      "Task management web application built with React, Express.js, and Node.js. Features JWT security, role permissions, task assignment, and activity tracking.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    badge: "Open Source",
    badgeColor: "bg-slate-800 text-slate-300 border-slate-700",
  },
  {
    title: "SimplePayHub",
    category: "fullstack",
    href: "https://lonnecapp.com.ng",
    featured: false,
    tagline: "VTU Airtime & Utility Payment Gateway",
    description:
      "Virtual Top-Up (VTU) platform facilitating automated airtime recharge, mobile data bundles, and utility bill processing with instant transaction reporting.",
    tech: ["PHP", "MySQL", "VTU REST API", "Bootstrap", "JavaScript"],
    badge: "Fintech App",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="py-24 relative border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-12">
          <span className="text-xs font-bold text-cyan-400 tracking-wider uppercase font-['Outfit']">
            // FEATURED PORTFOLIO WORK
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit']">
            Production Applications & Systems
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full mt-1" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 overflow-x-auto">
          {projectCategories.map((cat) => {
            const Icon = cat.icon
            const isActive = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/20"
                    : "glass-panel text-slate-300 hover:text-white hover:border-cyan-500/40"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            )
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className={`glass-card rounded-2xl p-7 border border-slate-800/80 flex flex-col justify-between group hover:border-cyan-500/40 ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                {/* Header row */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold border mb-2 ${project.badgeColor}`}>
                      {project.badge}
                    </span>
                    <h3 className="text-xl font-bold text-white font-['Outfit'] group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-cyan-500 text-slate-300 hover:text-white transition-all shadow-md shrink-0"
                    aria-label={`Visit ${project.title}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-xs font-semibold text-cyan-400 mb-3">
                  {project.tagline}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Tech Pills Footer */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-1.5">
                {project.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-slate-900/90 text-slate-300 border border-slate-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
