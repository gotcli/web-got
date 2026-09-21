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
import ProjectGenerator from '../components/ProjectGenerator'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#f7f3ee] text-slate-800">
      <Navbar />
      <Hero />
      <main>
        <Features />
        <ProjectGenerator />
        <DatabaseToAPI />
        <HowItWorks />
        <Architecture />
        <CLIShowcase />
        <FinalCTA />
      </main>
      <Footer />
      <CommandDock />
    </div>
  )
}
