import React, { useState } from 'react'
import { Mail, Github, Linkedin, Trophy, Code2 } from 'lucide-react'

const AchievementsContact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Thanks! Your message has been recorded (demo).')
  }

  return (
    <section id="contact" className="relative bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Achievements & Contact</h2>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center gap-2 text-slate-800">
                <Trophy size={18} />
                <h3 className="font-semibold">Highlights</h3>
              </div>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
                <li>Completed multiple virtual experiences and programs</li>
                <li>Active contributor to NSS MSI tech tasks</li>
                <li>Consistent coding practice and DSA problem‑solving</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-2 text-slate-800">
                <Code2 size={18} />
                <h3 className="font-semibold">Profiles</h3>
              </div>
              <div className="mt-3 flex flex-wrap gap-3 text-sm">
                <a href="#" className="inline-flex items-center gap-1 rounded-md border border-slate-200 px-3 py-1.5 hover:bg-slate-50"><Github size={16} /> GitHub</a>
                <a href="#" className="inline-flex items-center gap-1 rounded-md border border-slate-200 px-3 py-1.5 hover:bg-slate-50"><Linkedin size={16} /> LinkedIn</a>
                <a href="#" className="inline-flex items-center gap-1 rounded-md border border-slate-200 px-3 py-1.5 hover:bg-slate-50"><Code2 size={16} /> LeetCode</a>
                <a href="mailto:devansh@example.com" className="inline-flex items-center gap-1 rounded-md border border-slate-200 px-3 py-1.5 hover:bg-slate-50"><Mail size={16} /> Email</a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Contact Me</h3>
            <div className="mt-4 grid gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-500"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-500"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
              <textarea
                placeholder="Your message"
                rows={5}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-500"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
              <button type="submit" className="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
                Send Message
              </button>
              {status && <p className="text-sm text-emerald-600">{status}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default AchievementsContact
