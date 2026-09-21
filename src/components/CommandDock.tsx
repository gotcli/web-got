import { Check, Copy } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function CommandDock() {
  const [visible, setVisible] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 620)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const copy = async () => {
    await navigator.clipboard.writeText('got init service --architecture standard')
    setCopied(true)
    setTimeout(() => setCopied(false), 1200)
  }

  return (
    <div
      className={`fixed inset-x-4 bottom-4 z-40 mx-auto flex max-w-md items-center justify-between rounded-2xl border border-slate-200 bg-white/90 p-2 pl-4 font-mono text-sm text-slate-900 shadow-[0_25px_60px_rgba(15,23,42,0.14)] backdrop-blur-xl transition duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-8 opacity-0'
      }`}
    >
      <code>
        <span className="text-sky-700">$</span> got init service --architecture standard
      </code>
      <button onClick={copy} className="grid h-10 w-10 place-items-center rounded-xl bg-slate-950 text-white" aria-label="Copy got init service command">
        {copied ? <Check size={17} /> : <Copy size={17} />}
      </button>
    </div>
  )
}
