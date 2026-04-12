import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-bg-dark">
      <nav className="fixed top-0 w-full z-50 bg-bg-dark/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-primary font-mono font-medium text-lg">
            {'<JM />'}
          </a>
          <div className="hidden md:flex gap-8">
            {['Sobre mi', 'Experiencia', 'Tech Stack', 'Proyectos', 'Contacto'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-text-secondary hover:text-primary transition-colors text-sm"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Experience />
        <TechStack />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-border py-8 text-center text-text-muted text-sm">
        <p className="font-mono">&copy; {new Date().getFullYear()} Jose Mora. Self-hosted con Docker.</p>
      </footer>
    </div>
  )
}

export default App
