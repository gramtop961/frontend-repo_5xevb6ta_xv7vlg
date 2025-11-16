import React from 'react'
import { Github, ExternalLink } from 'lucide-react'

const ProjectCard = ({ title, desc, stack, github = '#', demo = '#' }) => (
  <div className="group relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
    <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
    <p className="mt-2 text-sm text-slate-600">{desc}</p>
    <p className="mt-3 text-xs font-medium text-slate-500">Tech: {stack}</p>
    <div className="mt-4 flex items-center gap-3 text-slate-700">
      <a href={github} className="inline-flex items-center gap-1 rounded-md border border-slate-200 px-3 py-1.5 text-sm hover:bg-slate-50">
        <Github size={16} /> Code
      </a>
      <a href={demo} className="inline-flex items-center gap-1 rounded-md border border-slate-200 px-3 py-1.5 text-sm hover:bg-slate-50">
        <ExternalLink size={16} /> Demo
      </a>
    </div>
  </div>
)

const Projects = () => {
  return (
    <section id="projects" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Projects</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="NSS MSI Website"
            desc="A modern website for the college NSS chapter with event highlights and volunteer info."
            stack="HTML, CSS, JS"
          />
          <ProjectCard
            title="This Portfolio Website"
            desc="A single-page portfolio built with Flames.blue and interactive 3D hero."
            stack="React, Tailwind, Spline"
          />
          <ProjectCard
            title="Web Tech Practicals Collection"
            desc="A set of simple HTML/CSS/JS practice pages covering fundamentals."
            stack="HTML, CSS, JavaScript"
          />
          <ProjectCard
            title="Planned: Full MERN App"
            desc="A full-stack MERN project exploring auth, CRUD APIs, and deployment."
            stack="MongoDB, Express, React, Node"
          />
          <ProjectCard
            title="Planned: Python AI/ML Project"
            desc="Intro ML experiments in Python—data processing, simple models, and visualizations."
            stack="Python, pandas, scikit-learn"
          />
        </div>
      </div>
    </section>
  )
}

export default Projects
