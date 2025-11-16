import React from 'react'
import { Code, Globe, Wrench, Sparkles } from 'lucide-react'

const SkillBadge = ({ label }) => (
  <span className="inline-flex items-center rounded-md bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 ring-1 ring-inset ring-slate-200">
    {label}
  </span>
)

const Skills = () => {
  return (
    <section id="skills" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Skills</h2>

        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-slate-700">
              <Code size={18} />
              <h3 className="font-semibold">Languages</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {['C', 'Python', 'Java', 'JavaScript'].map((s) => (
                <SkillBadge key={s} label={s} />
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-slate-700">
              <Globe size={18} />
              <h3 className="font-semibold">Web</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {['HTML', 'CSS', 'Basic JavaScript', 'Responsive Design', 'Bootstrap', 'Tailwind (beginner)'].map((s) => (
                <SkillBadge key={s} label={s} />
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-slate-700">
              <Wrench size={18} />
              <h3 className="font-semibold">Tools</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {['VS Code/Cursor', 'Git/GitHub', 'Netlify', 'Vercel', 'Firebase (beginner)'].map((s) => (
                <SkillBadge key={s} label={s} />
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-slate-700">
              <Sparkles size={18} />
              <h3 className="font-semibold">Interests</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Backend', 'DSA (LeetCode)', 'AI/ML', 'Hackathons'].map((s) => (
                <SkillBadge key={s} label={s} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
