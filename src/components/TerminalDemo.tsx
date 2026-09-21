import { AnimatePresence, motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useEffect, useState } from 'react'

const initCommand = [
  '$ got init service',
  '--name catalog-api',
  '--module example.com/catalog-api',
  '--architecture standard',
  '--db pg',
]

const generatedChecks = [
  'Project created',
  'Fiber configured',
  'PostgreSQL configured',
  'Structured logging',
  'Request ID',
  'Docker ready',
]

export default function TerminalDemo() {
  const [scene, setScene] = useState<'service' | 'generated'>('service')

  useEffect(() => {
    const timer = window.setInterval(() => {
      setScene((current) => (current === 'service' ? 'generated' : 'service'))
    }, 5500)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="terminal-shadow w-full overflow-hidden rounded-[1.7rem] border border-slate-700 bg-[#0d1726]"
    >
      <div className="flex items-center gap-2 border-b border-white/10 bg-[#111d32] px-4 py-3 sm:px-5">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-amber-400" />
        <span className="h-3 w-3 rounded-full bg-emerald-400" />
        <div className="ml-auto flex rounded-lg bg-black/20 p-1 font-mono text-[9px] uppercase tracking-[0.12em] text-slate-300 sm:text-[10px]">
          <button
            type="button"
            onClick={() => setScene('service')}
            className={`rounded-md px-2.5 py-1.5 ${scene === 'service' ? 'bg-sky-500 text-white' : 'text-slate-400'}`}
          >
            init
          </button>
          <button
            type="button"
            onClick={() => setScene('generated')}
            className={`rounded-md px-2.5 py-1.5 ${scene === 'generated' ? 'bg-sky-500 text-white' : 'text-slate-400'}`}
          >
            output
          </button>
        </div>
      </div>

      <div className="p-5 font-mono text-[11px] sm:p-7 sm:text-sm">
        <AnimatePresence mode="wait">
          {scene === 'service' ? (
            <motion.div key="service" initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 12 }} transition={{ duration: 0.3 }} className="min-h-[280px]">
              <div className="space-y-1 text-slate-200">
                {initCommand.map((line, index) => (
                  <motion.p
                    key={line}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={index === 0 ? 'text-sky-300' : 'text-slate-200'}
                  >
                    {line}
                  </motion.p>
                ))}
              </div>

              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {generatedChecks.map((item, index) => (
                  <motion.p
                    key={item}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.08 }}
                    className="text-slate-300"
                  >
                    <span className="mr-2 text-emerald-400">✓</span>
                    {item}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div key="generated" initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 12 }} transition={{ duration: 0.3 }} className="min-h-[280px]">
              <p className="text-slate-200">project created</p>
              <div className="mt-5 space-y-1 text-slate-300">
                <p>catalog-api/</p>
                <p>├── cmd/</p>
                <p>├── internal/</p>
                <p>├── pkg/</p>
                <p>├── Dockerfile</p>
                <p>├── go.mod</p>
                <p>├── .env.example</p>
                <p>└── Makefile</p>
              </div>

              <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-4 text-emerald-400">
                <Check size={14} />
                <span>Project created successfully</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
