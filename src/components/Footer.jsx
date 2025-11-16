import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-10 text-center text-sm text-white/60">
      <div className="mx-auto max-w-6xl px-6">
        <p>
          © {new Date().getFullYear()} Devansh Sharma · Built with love, React, Tailwind, and a sprinkle of 3D.
        </p>
      </div>
    </footer>
  )
}

export default Footer
