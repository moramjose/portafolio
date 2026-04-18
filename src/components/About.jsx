import AnimateIn from './AnimateIn'
import { useLang } from '../i18n/LanguageContext'

function RichText({ text }) {
  const parts = text.split(/<highlight>(.*?)<\/highlight>/)
  return parts.map((part, i) =>
    i % 2 === 1 ? <span key={i} className="text-primary">{part}</span> : part
  )
}

export default function About() {
  const { t } = useLang()

  const stats = [
    { value: '+6', label: t.about.stats.years },
    { value: '+20', label: t.about.stats.projects },
    { value: '4', label: t.about.stats.apps },
    { value: '5', label: t.about.stats.countries },
  ]

  return (
    <section id="sobre-mi" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <AnimateIn>
          <div className="flex items-center gap-3 mb-10 sm:mb-12">
            <span className="text-primary font-mono text-sm">{t.about.sectionNumber}</span>
            <h2 className="text-2xl sm:text-3xl font-bold">{t.about.title}</h2>
            <div className="flex-1 h-px bg-border ml-4"></div>
          </div>
        </AnimateIn>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          <AnimateIn className="md:col-span-2" delay={0.1}>
            <div className="space-y-4 text-sm sm:text-base text-text-secondary leading-relaxed">
              <p><RichText text={t.about.p1} /></p>
              <p><RichText text={t.about.p2} /></p>
              <p><RichText text={t.about.p3} /></p>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-4 md:space-y-0">
            {stats.map((stat, i) => (
              <AnimateIn key={stat.label} delay={0.1 + i * 0.1}>
                <div className="bg-bg-card border border-border rounded-lg p-4 text-center hover:border-primary/30 transition-colors">
                  <div className="text-2xl sm:text-3xl font-bold text-primary font-mono">{stat.value}</div>
                  <div className="text-text-muted text-xs sm:text-sm mt-1">{stat.label}</div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
