import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const links = [['Product', '#product'], ['Features', '#features'], ['Architecture', '#architecture'], ['CLI', '#cli'], ['Docs', '#docs']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return <header className="fixed inset-x-4 top-4 z-50 mx-auto max-w-7xl rounded-2xl border border-white/10 bg-black/45 text-white shadow-2xl backdrop-blur-xl sm:top-6">
    <div className="mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
      <a href="#" className="flex items-center gap-3 text-white" aria-label="GOT home">
        <span className="relative grid size-10 place-items-center overflow-hidden rounded-xl bg-brand font-black text-white"><span className="absolute inset-0 bg-gradient-to-br from-cyan-300/40 to-transparent"/>G<span className="text-cyan-200">›</span></span>
        <span><b className="block text-lg leading-5 tracking-tight">GOT<span className="text-cyan-400">_</span></b><span className="text-xs text-slate-400">Go Templatify</span></span>
      </a>
      <nav className="hidden items-center gap-8 md:flex">{links.map(([label, href]) => <a className="text-sm font-medium text-slate-400 transition hover:text-white" href={href} key={label}>{label}</a>)}</nav>
      <div className="hidden items-center gap-3 md:flex"><a href="#docs" className="px-3 py-2 text-sm font-semibold text-slate-300">GitHub</a><a href="#download" className="rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-ink transition hover:bg-cyan-100">Download ↗</a></div>
      <button className="rounded-lg p-2 text-white md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav className="border-t border-white/10 bg-black/70 px-5 py-4 backdrop-blur-xl md:hidden">{links.map(([label, href]) => <a onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 font-medium text-slate-300 hover:bg-white/5" href={href} key={label}>{label}</a>)}<a href="#download" className="mt-2 block rounded-xl bg-brand px-5 py-3 text-center font-bold text-white">Download</a></nav>}
  </header>
}
