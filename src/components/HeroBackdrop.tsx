import { motion } from 'framer-motion'

const paths = [
  'M0 115 C180 115 155 260 360 260 S570 180 760 180',
  'M0 410 C200 410 180 310 390 310 S610 420 760 420',
  'M760 70 C600 70 640 240 475 240 S270 130 100 130',
  'M760 500 C590 500 630 350 450 350 S250 480 80 480',
]

export default function HeroBackdrop() {
  return <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    <svg className="absolute left-1/2 top-24 h-[560px] w-[920px] -translate-x-1/2 opacity-60" viewBox="0 0 760 560" fill="none">
      <defs><linearGradient id="beam"><stop stopColor="#22d3ee" stopOpacity="0"/><stop offset=".5" stopColor="#38bdf8"/><stop offset="1" stopColor="#8b5cf6" stopOpacity="0"/></linearGradient><filter id="glow"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
      {paths.map((d,i)=><g key={d}><path d={d} stroke="white" strokeOpacity=".07"/><motion.path d={d} stroke="url(#beam)" strokeWidth="1.5" strokeLinecap="round" filter="url(#glow)" initial={{pathLength:0,pathOffset:0}} animate={{pathLength:[0,.22,0],pathOffset:[0,.78,1]}} transition={{duration:3.4+i*.35,repeat:Infinity,ease:'linear',delay:i*.5}}/></g>)}
    </svg>
    <div className="hero-core absolute left-1/2 top-[270px] grid size-28 -translate-x-1/2 place-items-center rounded-full sm:size-36"><div className="absolute inset-2 animate-[spin_12s_linear_infinite] rounded-full border border-dashed border-cyan-300/30"/><div className="absolute inset-5 rounded-full bg-[#071426] shadow-[inset_0_0_30px_rgba(56,189,248,.2)]"/><span className="relative font-mono text-3xl font-black tracking-tighter text-white sm:text-4xl">G<span className="text-cyan-300">›</span></span></div>
    <motion.div animate={{y:[0,-10,0],rotate:[-2,1,-2]}} transition={{duration:5,repeat:Infinity,ease:'easeInOut'}} className="absolute left-[6%] top-[32%] hidden rounded-xl border border-white/10 bg-black/30 px-4 py-3 font-mono text-xs text-slate-400 backdrop-blur lg:block"><span className="text-cyan-300">route</span> → handler</motion.div>
    <motion.div animate={{y:[0,12,0],rotate:[2,-1,2]}} transition={{duration:6,repeat:Infinity,ease:'easeInOut'}} className="absolute right-[7%] top-[42%] hidden rounded-xl border border-white/10 bg-black/30 px-4 py-3 font-mono text-xs text-slate-400 backdrop-blur lg:block"><span className="text-violet-300">schema</span> → API</motion.div>
  </div>
}
