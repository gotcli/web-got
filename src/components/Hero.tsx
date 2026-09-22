import { ArrowRight, Check, GitBranch } from 'lucide-react'
import { motion } from 'framer-motion'
import { techStack } from '../data/got'
import HeroBackdrop from './HeroBackdrop'
import TerminalDemo from './TerminalDemo'

export default function Hero() {
  return (
    <header id="top" className="hero-shell hero-stage relative overflow-hidden border-b border-white/10 pt-28 pb-16 text-white sm:pt-36 sm:pb-20">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div className="hero-aurora absolute inset-0" aria-hidden="true" />
      <HeroBackdrop />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-bold tracking-[0.2em] text-sky-200 uppercase shadow-sm backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-sky-400" />
            Go API generation
          </span>

          <h1 className="mt-8 max-w-2xl text-balance text-[3.4rem] font-black leading-[0.92] tracking-[-0.08em] text-white sm:text-6xl lg:text-[6.4rem]">
            <span className="block text-slate-300">Build Go APIs.</span>
            <span className="mt-2 block text-white">Own the Code.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-slate-300 sm:text-xl">
            Production-focused source generation for Go + Fiber.
            <span className="mt-2 block text-slate-400">No GOT runtime. No framework lock-in. Just Go code you own.</span>
          </p>

          <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row">
            <a href="/docs/getting-started" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_18px_30px_rgba(15,23,42,0.18)] hover:-translate-y-0.5 hover:bg-sky-50">
              Get Started
              <ArrowRight size={18} />
            </a>
            <a href="https://github.com/gotcli/got" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white hover:border-white/25 hover:bg-white/10">
              <GitBranch size={17} />
              GitHub
            </a>
          </div>
          <div className="mt-9 grid max-w-md grid-cols-2 gap-x-5 gap-y-3 text-xs font-medium text-slate-400 sm:grid-cols-4 sm:max-w-none">
            {['Source generation', 'Go + Fiber', 'No runtime', 'Open source'].map((item) => <span key={item} className="flex items-center gap-2"><Check size={13} className="text-sky-300" />{item}</span>)}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full text-left"
        >
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-sky-500/15 blur-3xl" />
          <TerminalDemo />
        </motion.div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-white/10 pt-6 lg:justify-start">
          {techStack.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2 font-mono text-xs font-medium text-slate-300"
            >
              <Check size={12} className="text-sky-300" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </header>
  )
}
