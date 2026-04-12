import AnimateIn from './AnimateIn'
import { useLang } from '../i18n/LanguageContext'

const testimonials = {
  es: [
    {
      quote: 'José diseñó todo nuestro ecosistema de delivery desde cero. Cuatro apps, el backend, los paneles... todo funcionando en sincronía. Un desarrollador que realmente entiende el negocio.',
      name: 'De One',
      role: 'CEO / Fundador',
      location: 'Venezuela',
    },
    {
      quote: 'Replicó nuestra plataforma académica para tres universidades en tiempo récord. El motor de inscripción automatizada nos ahorró cientos de horas de trabajo manual.',
      name: 'Squuad',
      role: 'Director de Tecnología',
      location: 'Florida, USA',
    },
    {
      quote: 'La integración de Microsoft 365 con nuestra plataforma fue impecable. Las clases se crean automáticamente en Teams y los reportes de Power BI nos dieron visibilidad total del negocio.',
      name: 'Progracademy',
      role: 'CEO / Fundador',
      location: 'Madrid, España',
    },
  ],
  en: [
    {
      quote: 'José designed our entire delivery ecosystem from scratch. Four apps, the backend, the panels... everything working in sync. A developer who truly understands the business.',
      name: 'De One',
      role: 'CEO / Founder',
      location: 'Venezuela',
    },
    {
      quote: 'He replicated our academic platform for three universities in record time. The automated enrollment engine saved us hundreds of hours of manual work.',
      name: 'Squuad',
      role: 'CTO',
      location: 'Florida, USA',
    },
    {
      quote: 'The Microsoft 365 integration with our platform was flawless. Classes are automatically created in Teams and Power BI reports gave us full business visibility.',
      name: 'Progracademy',
      role: 'CEO / Founder',
      location: 'Madrid, Spain',
    },
  ],
}

const sectionText = {
  es: { number: '05.', title: 'Testimonios' },
  en: { number: '05.', title: 'Testimonials' },
}

export default function Testimonials() {
  const { lang } = useLang()
  const items = testimonials[lang]
  const section = sectionText[lang]

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimateIn>
          <div className="flex items-center gap-3 mb-12">
            <span className="text-primary font-mono text-sm">{section.number}</span>
            <h2 className="text-3xl font-bold">{section.title}</h2>
            <div className="flex-1 h-px bg-border ml-4"></div>
          </div>
        </AnimateIn>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <AnimateIn key={i} delay={i * 0.15}>
              <div className="bg-bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors h-full flex flex-col">
                <svg className="w-8 h-8 text-primary/30 mb-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-1 italic">
                  "{item.quote}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="text-text-primary font-semibold text-sm">{item.name}</p>
                  <p className="text-text-muted text-xs">{item.role}</p>
                  <p className="text-primary/60 text-xs font-mono">{item.location}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
