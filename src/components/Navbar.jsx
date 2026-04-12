import { useState, useEffect } from 'react'
import { useLang } from '../i18n/LanguageContext'

export default function Navbar() {
  const { t, lang, toggleLang } = useLang()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { label: t.nav.about, href: '#sobre-mi' },
    { label: t.nav.experience, href: '#experiencia' },
    { label: t.nav.techStack, href: '#tech-stack' },
    { label: t.nav.projects, href: '#proyectos' },
    { label: t.nav.contact, href: '#contacto' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all ${scrolled ? 'bg-bg-dark/95 backdrop-blur-md border-b border-border shadow-lg' : 'bg-bg-dark/80 backdrop-blur-md border-b border-border'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-primary font-mono font-medium text-lg">
          {'<JM />'}
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-text-secondary hover:text-primary transition-colors text-sm"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={toggleLang}
            className="text-xs font-mono px-2.5 py-1 rounded-full border border-border hover:border-primary/50 text-text-muted hover:text-primary transition-all"
            aria-label="Cambiar idioma"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="text-xs font-mono px-2.5 py-1 rounded-full border border-border hover:border-primary/50 text-text-muted hover:text-primary transition-all"
            aria-label="Cambiar idioma"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 text-text-secondary hover:text-primary transition-colors"
            aria-label="Menú de navegación"
            aria-expanded={isOpen}
          >
            <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
          </button>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-6 pt-2 bg-bg-dark/95 backdrop-blur-md border-t border-border space-y-1">
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 px-4 text-text-secondary hover:text-primary hover:bg-primary/5 rounded-lg transition-all text-base"
            >
              <span className="text-primary font-mono text-xs mr-3">0{i + 1}.</span>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
