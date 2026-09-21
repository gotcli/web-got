import { CheckCircle2, Clipboard, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import { doctorChecks } from '../data/got'

export default function CLIShowcase() {
  const [active, setActive] = useState(0)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setActive((current) => (current + 1) % doctorChecks.length)
    }, 700)

    return () => window.clearTimeout(timeout)
  }, [active])

  const handleCopy = async () => {
    await navigator.clipboard.writeText('got doctor --project --connect')
    setCopied(true)
    setTimeout(() => setCopied(false), 1200)
  }

  return (
    <section id="community" className="bg-[#f3efe9] py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-bold tracking-[0.18em] text-sky-700 uppercase">GOT doctor</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.06em] text-slate-950 sm:text-5xl">
            Everything looks good.
          </h2>
        </div>

        <div className="mt-12 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_40px_rgba(15,23,42,0.04)]">
          <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
            <div className="ml-3 flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-[10px] font-medium text-slate-500">
              <Sparkles size={12} className="text-sky-600" />
              CLI diagnostics
            </div>
          </div>

          <div className="p-5 sm:p-8">
            <div className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-[#0d1726] p-4 font-mono text-sm text-white">
              <code className="overflow-x-auto whitespace-nowrap text-sky-300">
                <span className="text-sky-400">$</span> got doctor --project --connect
              </code>
              <button onClick={handleCopy} aria-label="Copy doctor command" className="ml-3 shrink-0 rounded-lg border border-white/10 bg-white/5 p-2 text-slate-300 hover:text-white">
                {copied ? <CheckCircle2 size={16} /> : <Clipboard size={16} />}
              </button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {doctorChecks.map((check, index) => (
                <div
                  key={check}
                  className={`flex items-center justify-between rounded-2xl border p-3 text-sm font-medium ${
                    index <= active
                      ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                      : 'border-slate-200 bg-slate-50 text-slate-600'
                  }`}
                >
                  <span>{check}</span>
                  {index <= active ? <CheckCircle2 size={16} /> : <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
