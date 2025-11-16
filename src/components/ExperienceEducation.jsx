import React from 'react'

const Item = ({ title, subtitle, points }) => (
  <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
    <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
    {subtitle && <p className="mt-1 text-sm text-slate-600">{subtitle}</p>}
    {points && (
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    )}
  </div>
)

const ExperienceEducation = () => {
  return (
    <section id="experience" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Experience & Education</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="space-y-6">
            <Item
              title="JP Morgan Virtual Experience"
              points={[
                'Completed tasks 1–4 simulating real-world engineering workflows',
              ]}
            />
            <Item
              title="Deloitte Technology Program"
              points={[
                'Explored enterprise problem-solving and collaboration skills',
              ]}
            />
            <Item
              title="Zomato / Hyperpure Project"
              points={[
                'Contributed to marketing and content tasks for a live initiative',
              ]}
            />
            <Item
              title="NSS (National Service Scheme) Tech Work"
              points={[
                'Supported digital tasks and campus initiatives for NSS MSI',
              ]}
            />
          </div>
          <div className="space-y-6">
            <Item
              title="Education"
              subtitle="BCA, 1st Year — Maharaja Surajmal Institute (GGSIPU)"
              points={[
                'Core CS fundamentals, programming, and web technologies',
                'Active in coding practice and student communities',
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceEducation
