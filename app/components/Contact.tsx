export default function Contact() {
  return (
    <section id="contact" className="py-16 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-6">Let's Connect</h2>
        <p className="text-slate-300 mb-4">
          I'm open to freelance opportunities and full-time roles. Reach out and I'll get
          back to you as soon as possible.
        </p>
        <div className="text-slate-300 space-y-1">
          <p>Email: kanyinsayopraise@gmail.com</p>
          <p>Phone: +234 07043167491</p>
          <p>Location: Akure, Nigeria</p>
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
      </div>
    </section>
  )
}
