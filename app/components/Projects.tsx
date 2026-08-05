"use client"

import { useState } from "react"
import { ExternalLink, Layers, ShoppingCart, Truck, TrendingUp, Server } from "lucide-react"

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
    href: null,
    featured: true,
    tagline: "Multivendor Fashion E-Commerce Engine",
    description:
      "Comprehensive multivendor fashion marketplace built with Laravel. Features vendor management dashboards, inventory tracking, multi-tier pricing, and automated delivery fee calculations. Configured Supervisor process workers and symlinks for seamless live updates.",
    tech: ["Laravel", "PHP", "MySQL", "Supervisor", "Tailwind CSS", "REST API"],
    badge: "Production Engine",
  },
  {
    title: "Lonemmy Courier Service Platform",
    category: "logistics",
    href: null,
    featured: true,
    tagline: "Real-Time Logistics & Parcel Tracking Network",
    description:
      "Full-scale logistics management application built with Next.js 15. Integrates real-time parcel tracking, customer/courier/vendor dashboards, Appwrite session authentication, and automated delivery pricing logic.",
    tech: ["Next.js 15", "React 19", "Appwrite", "Supabase", "Tailwind CSS", "Zustand"],
    badge: "Enterprise Suite",
  },
  {
    title: "Market Matrix Predictive Analytics",
    category: "data-ai",
    href: null,
    featured: true,
    tagline: "Time-Series Financial & Market Trend Forecasting",
    description:
      "Predictive financial analytics platform for price forecasting and market trend analysis. Integrates Python Meta Prophet model pipelines via FastAPI and interactive Next.js dashboard visualizations.",
    tech: ["Next.js", "Python", "FastAPI", "Meta Prophet", "Pandas", "Chart.js"],
    badge: "AI Predictive Model",
  },
  {
    title: "Forex Trade Copier Middleware",
    category: "logistics",
    href: null,
    featured: false,
    tagline: "Automated Signal Execution Engine",
    description:
      "High-speed middleware service built to parse trade signal webhooks in real time and execute order commands directly via API on active brokerages like Exness.",
    tech: ["Node.js", "Express", "Exness API", "Webhooks", "Redis", "TypeScript"],
    badge: "Middleware Bridge",
  },
  {
    title: "Lasco Electronics",
    category: "ecommerce",
    href: null,
    featured: false,
    tagline: "Electronics E-Commerce Storefront",
    description:
      "Full-stack electronics e-commerce platform designed for fast catalog browsing, dynamic cart persistence, and streamlined checkout conversion.",
    tech: ["Next.js", "React", "Node.js", "Tailwind CSS", "Payment Gateway"],
    badge: "E-Commerce",
  },
  {
    title: "Hashtag Fashion Brand",
    category: "ecommerce",
    href: null,
    featured: false,
    tagline: "Modern Fashion Retail Web App",
    description:
      "Dynamic fashion e-commerce showcase featuring high-resolution product showcases, filterable collections, and mobile-optimized checkout.",
    tech: ["React", "JavaScript", "Tailwind CSS", "PHP Backend"],
    badge: "E-Commerce",
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
  },
  {
    title: "SimplePayHub",
    category: "fullstack",
    href: null,
    featured: false,
    tagline: "VTU Airtime & Utility Payment Gateway",
    description:
      "Virtual Top-Up (VTU) platform facilitating automated airtime recharge, mobile data bundles, and utility bill processing with instant transaction reporting.",
    tech: ["PHP", "MySQL", "VTU REST API", "Bootstrap", "JavaScript"],
    badge: "Fintech Engine",
  },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="py-20 border-b border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
            // PORTFOLIO WORK
          </span>
          <h2 className="text-3xl font-bold text-white font-['Outfit'] mt-1">
            Production Applications & Architecture
          </h2>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2">
          {projectCategories.map((cat) => {
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono bg-zinc-900 text-zinc-300 border border-zinc-800 mb-2">
                      {project.badge}
                    </span>
                    <h3 className="text-lg font-bold text-white font-['Outfit']">
                      {project.title}
                    </h3>
                  </div>

                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-400 hover:text-white transition-colors shrink-0"
                      aria-label={`View code for ${project.title}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <p className="text-xs font-medium text-zinc-400 mb-3">
                  {project.tagline}
                </p>

                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Tech Pills */}
              <div className="pt-4 border-t border-zinc-900 flex flex-wrap items-center gap-1.5">
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
          ))}
        </div>

      </div>
    </section>
  )
}
