import { Hero } from "./components/sections/Hero";
import { Navbar } from "./components/sections/Navbar"

function App() {

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30">
      
      <Navbar />
      <main>
        <Hero />
      </main>

    </div>
  )
}

export default App
