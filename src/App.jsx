import { Hero } from "./components/sections/Hero"
import { Navbar } from "./components/sections/Navbar"
import { SkillsSection } from "./components/sections/SkillsSection"
import { ProjectsSection } from "./components/sections/ProjectsSection"
import { ExperienceSection } from "./components/sections/ExperienceSection"
import { ContactSection } from "./components/sections/ContactSection"
import { Footer } from "./components/layout/Footer"

function App() {

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30">
      
      <Navbar />
      <main>
        <Hero />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <Footer />

    </div>
  )
}

export default App
