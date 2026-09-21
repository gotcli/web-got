import { ArrowRight, Check } from 'lucide-react'
import { motion } from 'framer-motion'
import { techStack } from '../data/got'
import HeroBackdrop from './HeroBackdrop'
import TerminalDemo from './TerminalDemo'

export default function Hero() {
  return (
    <header id="top" className="hero-shell hero-stage relative overflow-hidden border-b border-white/10 pt-28 pb-18 text-white sm:pt-32">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div className="hero-aurora absolute inset-0" aria-hidden="true" />
      <HeroBackdrop />

      <div className="relative mx-auto max-w-6xl px-5 pb-10 text-center sm:px-8 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-bold tracking-[0.2em] text-sky-200 uppercase shadow-sm backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-sky-400" />
            Go API generation
          </span>

          <h1 className="mx-auto mt-8 max-w-5xl text-balance text-[3.2rem] font-black leading-[0.94] tracking-[-0.08em] text-white sm:text-6xl lg:text-[7rem]">
            <span className="mt-2 block text-slate-300">Build Go APIs.</span>
            <span className="mt-2 block text-white">Own the Code.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-xl">
            A production-focused CLI and source generator for Go + Fiber applications.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="/docs/getting-started" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_18px_30px_rgba(15,23,42,0.18)] hover:-translate-y-0.5 hover:bg-sky-50">
              Get Started
              <ArrowRight size={18} />
            </a>
            <a href="https://github.com/gotcli/got" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white hover:border-white/25 hover:bg-white/10">
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto mt-12 max-w-5xl text-left"
        >
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-sky-500/15 blur-3xl" />
          <TerminalDemo />
        </motion.div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {techStack.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 backdrop-blur-sm"
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
