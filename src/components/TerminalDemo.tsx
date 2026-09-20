import { AnimatePresence, motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useEffect, useState } from 'react'

const workspaceCommand = [
  'got init workspace \\',
  '  --name business-platform \\',
  '  --module example.com/business-platform \\',
  '  --services account,payment,notification \\',
  '  --db pg',
]

const workspaceFiles = ['account-service/', 'payment-service/', 'notification-service/', 'go.work', 'got-workspace.json', 'compose.yml', 'Makefile', 'README.md']

function ServiceScene() {
  return <motion.div key="service" initial={{opacity:0,x:-18}} animate={{opacity:1,x:0}} exit={{opacity:0,x:18}} transition={{duration:.35}} className="min-h-[315px]">
    <p className="text-white"><span className="text-blue-400">$</span> got init service</p>
    <p className="mt-5 text-slate-500">Creating your Go/Fiber service…</p>
    <div className="mt-3 grid grid-cols-2 gap-x-5">{['Project structure','Go module','Database configuration','Route · Handler · Service','Repository','Structured logging','Health checks','Docker configuration'].map((item,i)=><motion.p key={item} initial={{opacity:0,x:-5}} animate={{opacity:1,x:0}} transition={{delay:.35+i*.09}} className="truncate leading-7 text-slate-300"><span className="text-blue-400">✓</span> {item}</motion.p>)}</div>
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.2}} className="mt-6 border-t border-white/10 pt-4"><p className="font-semibold text-green-400">✓ Project created successfully</p><p className="mt-1 text-white">Your API is ready.<span className="ml-1 inline-block h-4 w-1.5 animate-pulse bg-blue-400 align-middle"/></p></motion.div>
  </motion.div>
}

function WorkspaceScene() {
  return <motion.div key="workspace" initial={{opacity:0,x:-18}} animate={{opacity:1,x:0}} exit={{opacity:0,x:18}} transition={{duration:.35}} className="min-h-[315px]">
    <div className="space-y-1">{workspaceCommand.map((line,i)=><motion.p key={line} initial={{opacity:0,width:0}} animate={{opacity:1,width:'100%'}} transition={{delay:i*.18,duration:.35}} className={`overflow-hidden whitespace-nowrap ${i===0?'text-white':'text-cyan-200'}`}>{i===0&&<span className="mr-2 text-blue-400">$</span>}{line}</motion.p>)}</div>
    <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.05}} className="mt-5 text-slate-500">Creating multi-service workspace…</motion.p>
    <div className="mt-3 grid grid-cols-2 gap-x-5">{workspaceFiles.map((file,i)=><motion.p key={file} initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} transition={{delay:1.15+i*.08}} className="truncate leading-7 text-slate-300"><span className="text-blue-400">{i<3?'├──':'✓'}</span> {file}</motion.p>)}</div>
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.9}} className="mt-4 flex items-center gap-2 border-t border-white/10 pt-4 font-semibold text-green-400"><Check size={15}/> Workspace created successfully</motion.div>
  </motion.div>
}

export default function TerminalDemo() {
  const [scene,setScene]=useState<'service'|'workspace'>('service')
  useEffect(()=>{const timer=window.setInterval(()=>setScene(value=>value==='service'?'workspace':'service'),7000);return()=>window.clearInterval(timer)},[])
  return <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{delay:.2,duration:.65}} className="terminal-shadow w-full overflow-hidden rounded-2xl border border-slate-700 bg-[#0b1426]">
    <div className="flex items-center gap-2 border-b border-white/10 bg-[#111d32] px-4 py-3 sm:px-5"><i className="size-3 rounded-full bg-red-400"/><i className="size-3 rounded-full bg-amber-400"/><i className="size-3 rounded-full bg-green-400"/><span className="ml-2 hidden font-mono text-xs text-slate-500 sm:block">~/projects</span><div className="ml-auto flex rounded-lg bg-black/20 p-1 font-mono text-[9px] sm:text-[10px]">{(['service','workspace'] as const).map(item=><button key={item} onClick={()=>setScene(item)} className={`rounded-md px-2.5 py-1.5 capitalize transition ${scene===item?'bg-blue-500 text-white':'text-slate-500 hover:text-slate-300'}`}>{item}</button>)}</div></div>
    <div className="p-5 font-mono text-[11px] sm:p-7 sm:text-sm"><AnimatePresence mode="wait">{scene==='service'?<ServiceScene/>:<WorkspaceScene/>}</AnimatePresence></div>
  </motion.div>
}
