import Link from "next/link"

const projects = [
  {
    title: "Brandify",
    href: "https://brandifyng.app",
    description:
      "Built a comprehensive multivendor fashion marketplace using Laravel. Implemented vendor dashboards, inventory management, and structured product listing workflows. Managed active cloud server optimizations, including adjusting Supervisor process workers and directory symlinks for seamless deployment cycles alongside front-end collaborators.",
  },
  {
    title: "Lonemmy Courier Service",
    href: "https://lonnecapp.com.ng",
    description:
      "Developed a full logistics and parcel tracking application utilizing Next.js. Managed secure authentication and real-time data updates via a self-hosted Supabase instance.",
  },
  {
    title: "Lasco Electronics",
    href: "https://lascoecs.com",
    description:
      "Developed a full-stack electronics e-commerce website. Engineered optimized checkout and cart flows for better user conversion.",
  },
  {
    title: "Hashtag Fashion Brand",
    href: "https://hashtagfashionbrand.com",
    description:
      "Created a dynamic fashion e-commerce platform. Designed highly responsive product and cart modules for an optimized shopping experience.",
  },
  {
    title: "Market Matrix",
    href: "https://marketmatrix.app",
    description:
      "Built a predictive analytics platform for price forecasting and market trend visualization using Next.js and FastAPI. Integrated Meta Prophet using Python for highly accurate time-series predictions. Designed and implemented a real-time dashboard visualization.",
  },
  {
    title: "Forex Trade Copier Service",
    href: "https://lonnecapp.com.ng",
    description:
      "Architected a custom middleware service to automatically parse trade signals and execute them directly via API on active brokerages like Exness.",
  },
  {
    title: "TaskTrackr",
    href: "https://github.com/Praise741",
    description:
      "Created a robust task management system using React, Express.js, and Node.js. Implemented JWT authentication and secure CRUD operations.",
  },
  {
    title: "SimplePayHub",
    href: "https://lonnecapp.com.ng",
    description:
      "Built a secure Virtual Top-Up (VTU) web application facilitating airtime, data, and bill payments.",
  },
  {
    title: "Custom Business Software Solutions",
    href: "https://github.com/Praise741",
    description:
      "Successfully designed and delivered bespoke software solutions for multiple local businesses. Developed laundry management systems, internal workflow automation platforms, inventory/sales tracking tools, and lightweight POS systems.",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-10">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-accent/50 transition-colors group"
            >
              <Link href={project.href} target="_blank" rel="noopener noreferrer">
                <h3 className="text-xl font-semibold text-accent group-hover:text-accent-light transition-colors mb-2">
                  {project.title}
                </h3>
              </Link>
              {project.href.startsWith("https://github") && (
                <span className="text-xs text-slate-500 mb-2 block">Source on GitHub</span>
              )}
              <p className="text-slate-400 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
