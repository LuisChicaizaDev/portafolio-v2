import { Hero } from "./components/sections/Hero";
import { Navbar } from "./components/sections/Navbar"
import { SkillsSection } from "./components/sections/SkillsSection"
import { ProjectsSection } from "./components/sections/ProjectsSection"

function App() {

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30">
      
      <Navbar />
      <main>
        <Hero />
        <SkillsSection />
        <ProjectsSection />
      </main>

    </div>
  )
}

export default App
