import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { navLinks } from '../data/got'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-3 top-3 z-50 mx-auto max-w-7xl rounded-xl border border-slate-200/80 bg-white/90 shadow-[0_8px_24px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:inset-x-6 sm:top-5">
      <div className="mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <a href="/" className="flex items-center gap-3" aria-label="GOT home">
         <span className="flex flex-col gap-0.5">
          <span className="brand-mark" aria-hidden="true">
            G<span className="text-sky-600">&gt;_</span>
            <span className="text-lg font-black tracking-[-0.06em] text-slate-950">GOT</span>
          </span>
          
            
            <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.1em] text-slate-500">
              Build Go APIs. Own the Code.
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-slate-950"
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href="https://github.com/gotcli/got" target="_blank" rel="noreferrer" className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:border-slate-300">GitHub ↗</a>
          <a href="/docs/getting-started" className="rounded-xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">Get Started</a>
        </div>

        <button
          className="rounded-lg border border-slate-200 p-2 text-slate-800 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-200 bg-white/90 px-4 py-3 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              {link.label}
            </a>
          ))}
          <a href="/docs/getting-started" className="mt-2 block rounded-xl bg-slate-950 px-4 py-3 text-center text-sm font-semibold text-white">Get Started</a>
        </nav>
      )}
    </header>
  )
}
