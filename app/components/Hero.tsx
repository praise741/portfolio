import Link from "next/link"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Oluwamuyiwa Praise Oluwakanyinsayomi
        </h1>
        <p className="text-2xl text-accent mb-8">
          Software Developer (Full Stack & Data Integration)
        </p>
        <div className="text-slate-300 space-y-2 mb-10 max-w-2xl">
          <p>kanyinsayopraise@gmail.com | +234 07043167491</p>
          <p>Akure, Nigeria</p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/Praise741"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-light transition-colors"
            >
              github.com/Praise741
            </a>
          </p>
        </div>
        <Link
          href="#projects"
          className="inline-block px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent-light transition-colors"
        >
          View My Work
        </Link>
      </div>
    </section>
  )
}
