import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Check, ChevronRight, FileCode2 } from 'lucide-react'
import { useState } from 'react'
import { features } from '../data/got'

const visualData = [
  { kicker: 'SCHEMA TO ENDPOINT', command: 'got generate crud', nodes: ['Entity', 'Repository', 'Service', 'Handler', 'Route'] },
  { kicker: 'DATABASE READY', command: '--db pg | mysql | mssql', nodes: ['PostgreSQL', 'MySQL', 'SQL Server'] },
  { kicker: 'ACCESS & REFRESH', command: 'got add auth --jwt', nodes: ['Bearer middleware', 'Access token', 'Refresh token'] },
  { kicker: 'SECURE MULTIPART', command: 'got add upload', nodes: ['Validate', 'Randomize', 'Store'] },
  { kicker: 'FOLLOW EVERY REQUEST', command: 'request_id: "01J..."', nodes: ['HTTP inbound', 'Service', 'Database', 'HTTP outbound'] },
  { kicker: 'CHOOSE YOUR SHAPE', command: 'got init service', nodes: ['Standard', 'Microservice', 'Workspace'] },
]

function FeatureVisual({active}:{active:number}) {
  const Icon=features[active].icon
  const visual=visualData[active]
  return <AnimatePresence mode="wait"><motion.div key={active} initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} transition={{duration:.32}} className="relative flex min-h-[430px] flex-col overflow-hidden rounded-[1.75rem] border border-cyan-200/10 bg-gradient-to-br from-[#102b4c] via-[#0b203b] to-[#08172b] p-6 shadow-[inset_0_1px_rgba(255,255,255,.04)] sm:p-8">
    <div className="technical-stage absolute inset-0"/><div className="absolute -right-24 -top-24 size-80 rounded-full bg-cyan-400/15 blur-[70px]"/><div className="absolute -bottom-28 -left-20 size-72 rounded-full bg-violet-500/10 blur-[80px]"/>
    <div className="relative flex items-center justify-between"><span className="font-mono text-[10px] font-bold tracking-[.18em] text-cyan-300">{visual.kicker}</span><span className="font-mono text-[10px] text-slate-600">0{active+1} / 06</span></div>
    <div className="relative flex flex-1 items-center justify-center py-10"><motion.div animate={{rotate:360}} transition={{duration:22,repeat:Infinity,ease:'linear'}} className="absolute size-52 rounded-full border border-dashed border-blue-300/15 sm:size-64"><i className="absolute left-1/2 top-0 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_18px_5px_rgba(34,211,238,.25)]"/></motion.div><motion.div initial={{scale:.7,rotate:-8}} animate={{scale:1,rotate:0}} className="relative grid size-24 place-items-center rounded-[1.7rem] border border-blue-300/20 bg-blue-400/10 text-cyan-200 shadow-[0_0_65px_rgba(10,132,255,.3)]"><Icon size={38}/></motion.div></div>
    <div className="relative"><div className="flex flex-wrap justify-center gap-2">{visual.nodes.map((node,i)=><motion.span key={node} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:.15+i*.07}} className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[.045] px-3 py-2 font-mono text-[10px] text-slate-300"><Check size={10} className="text-cyan-400"/>{node}</motion.span>)}</div><div className="mx-auto mt-5 flex max-w-lg items-center gap-3 rounded-xl border border-white/10 bg-black/25 px-4 py-3 font-mono text-xs text-slate-300"><span className="text-cyan-400">$</span><code className="truncate">{visual.command}</code><FileCode2 size={14} className="ml-auto shrink-0 text-slate-600"/></div></div>
  </motion.div></AnimatePresence>
}

export default function Features() {
  const [active,setActive]=useState(0)
  return <section id="features" className="relative overflow-hidden bg-[#08172b] py-24 text-white sm:py-32"><div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#050b17] to-transparent"/><div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent"/><div className="absolute -left-40 top-40 size-96 rounded-full bg-cyan-500/10 blur-[100px]"/><div className="absolute -right-40 bottom-0 size-96 rounded-full bg-violet-500/10 blur-[110px]"/>
    <div className="relative mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="font-mono text-[11px] font-bold tracking-[.18em] text-cyan-300">01 · BUILT INTO GOT</p><h2 className="mt-5 text-5xl font-medium leading-[.95] tracking-[-.055em] sm:text-7xl">Less setup.<br/><span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">More building.</span></h2></div><p className="max-w-xl border-l border-cyan-300/30 pl-5 text-lg leading-8 text-blue-100/60">Choose a capability to see how GOT turns repetitive backend setup into a consistent Go/Fiber foundation.</p></div>
      <div className="mt-16 grid gap-5 lg:grid-cols-[.72fr_1.28fr]">
        <div className="overflow-hidden rounded-[1.75rem] border border-cyan-200/10 bg-[#0d2039]/80 p-2 shadow-[inset_0_1px_rgba(255,255,255,.035)]">{features.map(({icon:Icon,title,text},i)=><button key={title} onClick={()=>setActive(i)} onMouseEnter={()=>setActive(i)} className={`group flex w-full items-center gap-4 rounded-2xl p-4 text-left transition duration-300 ${active===i?'bg-[#dff4ff] text-ink shadow-[0_12px_30px_rgba(3,105,161,.18)]':'text-blue-100/55 hover:bg-cyan-200/[.06] hover:text-white'}`}><span className={`grid size-11 shrink-0 place-items-center rounded-xl transition ${active===i?'bg-white text-brand shadow-sm':'bg-cyan-200/[.06] text-cyan-200/40'}`}><Icon size={20}/></span><span className="min-w-0 flex-1"><b className="block text-sm">{title}</b><span className={`mt-1 block truncate text-xs ${active===i?'text-slate-500':'text-blue-100/30'}`}>{text}</span></span>{active===i?<ArrowRight size={17} className="shrink-0 text-brand"/>:<ChevronRight size={17} className="shrink-0 opacity-30"/>}</button>)}</div>
        <FeatureVisual active={active}/>
      </div>
    </div>
  </section>
}
