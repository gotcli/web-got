import Architecture from '../components/Architecture'
import CLIShowcase from '../components/CLIShowcase'
import CommandDock from '../components/CommandDock'
import DatabaseToAPI from '../components/DatabaseToAPI'
import Features from '../components/Features'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import Navbar from '../components/Navbar'
import ProjectTypes from '../components/ProjectTypes'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#f8fafc] text-slate-800">
      <Navbar />
      <Hero />
      <main>
        <Features />
        <DatabaseToAPI />
        <HowItWorks />
        <Architecture />
        <ProjectTypes />
        <CLIShowcase />
        <FinalCTA />
      </main>
      <Footer />
      <CommandDock />
    </div>
  )
}
