import { Check, Clipboard } from 'lucide-react'
import { useState } from 'react'
import { commands } from '../data/got'

export default function CLIShowcase() {
  const [active,setActive]=useState(0); const [copied,setCopied]=useState(false)
  const copy=async()=>{await navigator.clipboard.writeText(commands[active].command);setCopied(true);setTimeout(()=>setCopied(false),1200)}
  return <section id="cli" className="bg-soft py-24 sm:py-32"><div className="mx-auto max-w-5xl px-5 lg:px-8"><div className="text-center"><p className="font-bold text-brand">COMPACT & CAPABLE</p><h2 className="mt-3 text-4xl font-black text-ink sm:text-5xl">One CLI. Less repetitive setup.</h2></div><div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/70"><div className="flex gap-1 overflow-x-auto border-b border-slate-200 p-3">{commands.map((c,i)=><button key={c.name} onClick={()=>setActive(i)} className={`rounded-lg px-4 py-2 text-sm font-bold ${active===i?'bg-blue-50 text-brand':'text-slate-500 hover:bg-slate-50'}`}>{c.name}</button>)}</div><div className="p-5 sm:p-8"><div className="flex items-center justify-between gap-3 rounded-xl bg-[#0b1426] p-5 font-mono text-sm text-white"><code className="overflow-x-auto whitespace-nowrap"><span className="text-blue-400">$</span> {commands[active].command}</code><button onClick={copy} aria-label="Copy command" className="shrink-0 rounded-lg p-2 text-slate-400 hover:bg-white/10 hover:text-white">{copied?<Check size={18}/>:<Clipboard size={18}/>}</button></div><p className="mt-5 text-lg">{commands[active].text}</p></div></div></div></section>
}
