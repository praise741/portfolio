"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Copy, Check } from "lucide-react"

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
)

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("kanyinsayopraise@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setSubmitted(true)
  }

  return (
    <section id="contact" className="pt-20 pb-24 border-b border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
            // CONTACT
          </span>
          <h2 className="text-3xl font-bold text-white font-['Outfit'] mt-1">
            Initiate Project Collaboration
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left Direct Details */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800 space-y-6">
              <div>
                <h3 className="text-base font-bold text-white font-['Outfit'] mb-2">
                  Direct Inquiries
                </h3>
                <p className="text-xs text-zinc-400">
                  Reach out directly for contract development, system architecture consulting, or full-time roles.
                </p>
              </div>

              <div className="space-y-3">
                {/* Email */}
                <div className="flex items-center justify-between p-3.5 rounded-lg bg-zinc-900 border border-zinc-800">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-white">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-zinc-500">Email</p>
                      <a href="mailto:kanyinsayopraise@gmail.com" className="text-xs font-medium text-white hover:underline">
                        kanyinsayopraise@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors"
                    title="Copy email"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3 p-3.5 rounded-lg bg-zinc-900 border border-zinc-800">
                  <div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-white">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-zinc-500">Phone</p>
                    <a href="tel:+2347043167491" className="text-xs font-medium text-white hover:underline">
                      +234 704 316 7491
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3.5 rounded-lg bg-zinc-900 border border-zinc-800">
                  <div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-white">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-zinc-500">Location</p>
                    <p className="text-xs font-medium text-white">Akure, Ondo State, Nigeria</p>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-center gap-3 p-3.5 rounded-lg bg-zinc-900 border border-zinc-800">
                  <div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-white">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-zinc-500">GitHub</p>
                    <a
                      href="https://github.com/Praise741"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-white hover:underline"
                    >
                      github.com/Praise741
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">
            <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800">
              <h3 className="text-base font-bold text-white font-['Outfit'] mb-6">
                Send Message
              </h3>

              {submitted ? (
                <div className="p-6 rounded-lg bg-zinc-900 border border-zinc-800 text-center space-y-2">
                  <h4 className="text-sm font-bold text-white">Message Sent Successfully</h4>
                  <p className="text-xs text-zinc-400">
                    Thank you. I will respond to <strong className="text-white">{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ name: "", email: "", subject: "", message: "" })
                    }}
                    className="px-3 py-1 text-xs font-medium text-zinc-400 hover:text-white underline mt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-zinc-400">Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 text-xs transition-colors"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-zinc-400">Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 text-xs transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-zinc-400">Subject</label>
                    <input
                      type="text"
                      placeholder="Project Inquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 text-xs transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-zinc-400">Message *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe your inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 text-xs transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
