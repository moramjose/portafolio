import AnimateIn from './AnimateIn'
import { useLang } from '../i18n/LanguageContext'

const experienceMeta = [
  { tags: ['React Native', 'iOS', 'Android', 'REST API'], projectId: 'hablax' },
  { tags: ['WordPress', 'WooCommerce', 'PHP', 'SEO'], projectId: 'faimlab' },
  { tags: ['Laravel', 'WordPress', 'Moodle', 'MySQL'], projectId: 'squuad' },
  { tags: ['Power Platform', 'SQL Server', 'SharePoint', 'Power BI'], projectId: null },
  { tags: ['Angular', 'Laravel', 'MS Graph API', 'Power BI'], projectId: 'progracademy' },
  { tags: ['Laravel', 'Ionic', 'Angular', 'AWS', 'MySQL'], projectId: 'deone' },
  { tags: ['Ionic', 'Angular', 'MySQL', 'Capacitor'], projectId: null },
]

export default function Experience() {
  const { t } = useLang()

  return (
    <section id="experiencia" className="py-24 px-6 bg-bg-card/30">
      <div className="max-w-5xl mx-auto">
        <AnimateIn>
          <div className="flex items-center gap-3 mb-12">
            <span className="text-primary font-mono text-sm">{t.experience.sectionNumber}</span>
            <h2 className="text-3xl font-bold">{t.experience.title}</h2>
            <div className="flex-1 h-px bg-border ml-4"></div>
          </div>
        </AnimateIn>

        <div className="relative">
          <div className="absolute left-0 md:left-[140px] top-0 bottom-0 w-px bg-border"></div>

          <div className="space-y-8">
            {t.experience.items.map((exp, i) => {
              const meta = experienceMeta[i]
              return (
                <AnimateIn key={i} delay={i * 0.08}>
                  <div className="relative flex flex-col md:flex-row gap-4 md:gap-8 pl-8 md:pl-0">
                    <div className="absolute left-0 md:left-[140px] top-2 w-3 h-3 -translate-x-1.5 rounded-full bg-primary border-2 border-bg-dark"></div>

                    <div className="md:w-[120px] shrink-0 md:text-right">
                      <span className="text-primary font-mono text-sm">{exp.period}</span>
                    </div>

                    <div className="md:pl-8 bg-bg-card border border-border rounded-lg p-6 flex-1 hover:border-primary/30 transition-colors">
                      <h3 className="text-lg font-semibold text-text-primary">{exp.role}</h3>
                      <p className="text-primary font-medium text-sm">{exp.company}</p>
                      {exp.location && <p className="text-text-muted text-xs mb-3">{exp.location}</p>}
                      <p className="text-text-secondary text-sm leading-relaxed mb-4">{exp.description}</p>
                      <div className="flex flex-wrap items-center gap-2">
                        {meta.tags.map((tag) => (
                          <span key={tag} className="text-xs font-mono px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                            {tag}
                          </span>
                        ))}
                        {meta.projectId && (
                          <a
                            href={`#project-${meta.projectId}`}
                            className="inline-flex items-center gap-1 text-xs text-text-muted hover:text-primary transition-colors ml-auto"
                          >
                            {t.experience.viewProject}
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </AnimateIn>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
