import React from 'react'
import { Menu } from 'lucide-react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

const Navbar = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-slate-900/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-white">
        <a href="#home" className="text-sm font-semibold tracking-wide">Devansh Sharma</a>

        <nav className="hidden gap-6 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-white/80 hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          <Menu />
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-900/80 px-6 py-3 md:hidden">
          <nav className="flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-white/80 hover:text-white">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
