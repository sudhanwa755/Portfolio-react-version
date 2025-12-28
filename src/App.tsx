import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { Experience } from './sections/Experience';
import { Education } from './sections/Education';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';
import { Reveal } from './components/Reveal';
import './index.css'

function App() {
  return (
    <div className="app">
      <div className="global-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>
      <Navbar />
      <main>
        <Hero />
        <Reveal><Experience /></Reveal>
        <Reveal><Education /></Reveal>
        <Reveal><Skills /></Reveal>
        <Reveal><Projects /></Reveal>
        <Reveal><Contact /></Reveal>
      </main>
      <Footer />
    </div>
  )
}

export default App
