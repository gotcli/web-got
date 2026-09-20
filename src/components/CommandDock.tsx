import { Check, Copy } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function CommandDock(){
  const [visible,setVisible]=useState(false); const [copied,setCopied]=useState(false)
  useEffect(()=>{const onScroll=()=>setVisible(window.scrollY>650);onScroll();window.addEventListener('scroll',onScroll,{passive:true});return()=>window.removeEventListener('scroll',onScroll)},[])
  const copy=async()=>{await navigator.clipboard.writeText('got init service');setCopied(true);setTimeout(()=>setCopied(false),1200)}
  return <div className={`fixed inset-x-4 bottom-4 z-40 mx-auto flex max-w-md items-center justify-between rounded-2xl border border-white/10 bg-[#091426]/95 p-2 pl-4 font-mono text-sm text-white shadow-2xl backdrop-blur transition duration-300 ${visible?'translate-y-0 opacity-100':'pointer-events-none translate-y-8 opacity-0'}`}><code><span className="text-blue-400">$</span> got init service</code><button onClick={copy} className="grid size-10 place-items-center rounded-xl bg-brand text-white" aria-label="Copy got init service">{copied?<Check size={17}/>:<Copy size={17}/>}</button></div>
}
