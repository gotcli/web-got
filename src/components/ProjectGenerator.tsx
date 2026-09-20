import { AnimatePresence, motion } from 'framer-motion'
import { Boxes, Check, Copy, Package, Sparkles } from 'lucide-react'
import { useState } from 'react'

const extras = [
  { id: 'auth', label: 'JWT auth', files: ['auth/', 'middleware/'] },
  { id: 'upload', label: 'File upload', files: ['upload/'] },
  { id: 'docker', label: 'Docker', files: ['Dockerfile'] },
]
const shapes = [
  { workspace: false, label: 'Service', icon: Package },
  { workspace: true, label: 'Workspace', icon: Boxes },
]

export default function ProjectGenerator() {
  const [workspace, setWorkspace] = useState(false)
  const [selected, setSelected] = useState(['docker'])
  const [copied, setCopied] = useState(false)
  const command = workspace ? 'got init workspace' : 'got init service'
  const toggle = (id: string) => setSelected(value => value.includes(id) ? value.filter(x => x !== id) : [...value, id])
  const files = extras.filter(x => selected.includes(x.id)).flatMap(x => x.files)
  const copy = async () => { await navigator.clipboard.writeText(command); setCopied(true); setTimeout(() => setCopied(false), 1200) }

  return <section className="relative overflow-hidden py-24 sm:py-32"><div className="absolute inset-x-0 top-1/3 -z-10 h-72 bg-blue-50/80 blur-3xl"/><div className="mx-auto max-w-7xl px-5 lg:px-8">
    <div className="mx-auto max-w-3xl text-center"><p className="font-bold text-brand">MAKE IT YOURS</p><h2 className="mt-3 text-4xl font-black tracking-tight text-ink sm:text-5xl">See your foundation take shape.</h2><p className="mt-5 text-lg leading-8">Choose a project shape and capabilities. GOT keeps the generated foundation organized.</p></div>
    <div className="mt-14 grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-blue-100 lg:grid-cols-[.88fr_1.12fr]">
      <div className="border-b border-slate-200 p-6 sm:p-9 lg:border-b-0 lg:border-r"><p className="text-xs font-extrabold tracking-[.16em] text-slate-400">01 / PROJECT SHAPE</p><div className="mt-4 grid grid-cols-2 gap-3">{shapes.map(({workspace:value,label,icon:Icon})=><button key={label} onClick={()=>setWorkspace(value)} className={`rounded-2xl border p-4 text-left transition ${workspace===value?'border-brand bg-blue-50 ring-2 ring-blue-100':'border-slate-200 hover:border-blue-300'}`}><Icon className={workspace===value?'text-brand':'text-slate-400'} size={22}/><b className="mt-3 block text-ink">{label}</b></button>)}</div><p className="mt-8 text-xs font-extrabold tracking-[.16em] text-slate-400">02 / CAPABILITIES</p><div className="mt-4 space-y-2">{extras.map(item=><button key={item.id} onClick={()=>toggle(item.id)} className="flex w-full items-center justify-between rounded-xl border border-slate-200 p-4 text-left font-semibold text-ink hover:border-blue-300"><span>{item.label}</span><span className={`grid size-6 place-items-center rounded-md ${selected.includes(item.id)?'bg-brand text-white':'bg-slate-100 text-transparent'}`}><Check size={15}/></span></button>)}</div></div>
      <div className="bg-[#091426] p-6 text-sm sm:p-9"><div className="flex items-center justify-between border-b border-white/10 pb-5"><span className="flex items-center gap-2 font-bold text-white"><Sparkles size={16} className="text-blue-400"/> Live project preview</span><span className="rounded-full bg-green-400/10 px-3 py-1 text-xs font-semibold text-green-400">Ready</span></div><div className="mt-6 rounded-xl bg-black/20 p-4 font-mono text-slate-300"><div className="flex items-center justify-between gap-3"><code><span className="text-blue-400">$</span> {command}</code><button onClick={copy} className="text-slate-400 hover:text-white" aria-label="Copy command">{copied?<Check size={17}/>:<Copy size={17}/>}</button></div></div><div className="mt-7 font-mono leading-8 text-slate-400"><p className="text-white">{workspace?'business-platform/':'service/'}</p><AnimatePresence mode="popLayout">{(workspace?['services/','go.work','got-workspace.json','compose.yml','Makefile']:['entity/','repository/','service/','handler/','route/','go.mod','main.go']).concat(files).map(file=><motion.p layout initial={{opacity:0,x:-8}} animate={{opacity:1,x:0}} exit={{opacity:0,x:8}} key={file}>├── <span className={file.endsWith('/')?'text-blue-300':'text-slate-300'}>{file}</span></motion.p>)}</AnimatePresence></div></div>
    </div>
  </div></section>
}
