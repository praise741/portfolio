const skillCategories = [
  {
    title: "Languages",
    items: ["JavaScript (ES6+)", "Python", "PHP (Advanced)", "SQL", "TypeScript"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Zustand/Context", "React Router"],
  },
  {
    title: "Backend",
    items: ["Laravel", "FastAPI", "Django", "Node.js", "Express.js"],
  },
  {
    title: "Data & AI",
    items: [
      "Meta Prophet (Time Series Forecasting)",
      "TensorFlow (Basic)",
      "Vision-Language Model (VLM) & NLP training",
    ],
  },
  {
    title: "Database & Infrastructure",
    items: [
      "Supabase (Self-Hosted)",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Ubuntu Server Configuration",
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      "Git/GitHub",
      "Docker",
      "Linux CLI",
      "REST API Design",
      "Postman",
      "GitHub Codespaces",
      "Cloud Server Optimization",
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-10">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat) => (
            <div key={cat.title}>
              <h3 className="text-lg font-semibold text-accent mb-3">{cat.title}</h3>
              <ul className="space-y-1">
                {cat.items.map((item) => (
                  <li key={item} className="text-slate-400 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
