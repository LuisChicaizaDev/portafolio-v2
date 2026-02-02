import { Hero } from "./components/sections/Hero";
import { Navbar } from "./components/sections/Navbar"
import { SkillsSection } from "./components/sections/SkillsSection"

function App() {

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30">
      
      <Navbar />
      <main>
        <Hero />
        <SkillsSection />
      </main>

    </div>
  )
}

export default App
