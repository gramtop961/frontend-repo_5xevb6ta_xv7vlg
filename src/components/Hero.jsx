import React from 'react'
import Spline from '@splinetool/react-spline'
import { MapPin } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      {/* 3D Scene as background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-transparent" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-center gap-6 px-6 py-24 sm:gap-8 md:py-32 lg:py-40">
        <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium ring-1 ring-white/20 backdrop-blur">
          <MapPin size={14} className="mr-1.5" /> New Delhi, India
        </span>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Devansh Sharma
        </h1>
        <p className="text-lg font-semibold text-white/90 sm:text-xl">
          Aspiring Full-Stack Developer - BCA First Year
        </p>
        <p className="max-w-2xl text-base text-white/80 sm:text-lg">
          Building web apps, solving problems, and preparing for FAANG-level opportunities from day one of college.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <a href="#projects" className="rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow hover:shadow-lg transition">
            View Projects
          </a>
          <a
            href="#resume"
            onClick={(e) => {
              e.preventDefault();
              window.open('#', '_blank');
            }}
            className="rounded-md border border-white/30 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/10 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
