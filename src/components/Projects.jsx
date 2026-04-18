import AnimateIn from './AnimateIn'
import { useLang } from '../i18n/LanguageContext'

const projectsMeta = [
  {
    id: 'deone',
    tags: ['Laravel', 'Ionic', 'Angular', 'AWS', 'MySQL', 'Google Maps'],
    highlights: { es: ['4 apps publicadas en stores', 'Geolocalización en tiempo real', 'Infraestructura completa en AWS'], en: ['4 apps published on stores', 'Real-time geolocation', 'Full AWS infrastructure'] },
    links: [
      { label: 'Web App', url: 'https://sistemas.appdeone.com/', type: 'web' },
      { label: 'Panel Admin', url: 'https://admin.appdeone.com/', type: 'admin' },
    ],
    gradient: 'from-orange-500/20 to-red-500/20',
    accent: 'text-orange-400',
  },
  {
    id: 'progracademy',
    tags: ['Angular', 'Laravel', 'MS Graph API', 'Power BI', 'Web Scraping'],
    highlights: { es: ['Integración con MS Teams y Calendar', 'Dashboards con Power BI', 'Ingesta automática de datos'], en: ['MS Teams & Calendar integration', 'Power BI dashboards', 'Automated data ingestion'] },
    links: [
      { label: 'Landing', url: 'https://progracademy.com/', type: 'web' },
      { label: 'Panel', url: 'https://panel.progracademy.com/', type: 'admin' },
    ],
    gradient: 'from-blue-500/20 to-indigo-500/20',
    accent: 'text-blue-400',
  },
  {
    id: 'squuad',
    tags: ['Laravel', 'WordPress', 'Moodle', 'MySQL', 'Plugin Development'],
    highlights: { es: ['Inscripción 100% automatizada', 'Plugin WordPress como middleware', '3 universidades en producción'], en: ['100% automated enrollment', 'WordPress plugin as middleware', '3 universities in production'] },
    links: [
      { label: 'Florida Global University', url: 'https://portal.floridaglobal.university/my-account/', type: 'web' },
      { label: 'American Elite School', url: 'https://portal.americanelite.school/my-account/', type: 'web' },
      { label: 'UTBP México', url: 'https://portal.utbp.edu.mx/my-account/', type: 'web' },
    ],
    gradient: 'from-emerald-500/20 to-teal-500/20',
    accent: 'text-emerald-400',
  },
  {
    id: 'faimlab',
    tags: ['WordPress', 'WooCommerce', 'PHP', 'CSS', 'SEO'],
    highlights: { es: ['5 sitios en producción', 'Diseño responsive personalizado', 'Optimización SEO y rendimiento'], en: ['5 sites in production', 'Custom responsive design', 'SEO & performance optimization'] },
    links: [
      { label: 'Magnum Properties', url: 'https://magnumpropertiesusa.com/', type: 'web' },
      { label: 'Queen Deyna', url: 'https://queendeyna.com/', type: 'web' },
      { label: 'Desde los Números', url: 'https://desdelosnumeros.com/', type: 'web' },
      { label: 'Luquid', url: 'https://luquid.com/', type: 'web' },
      { label: 'Hyydrate Wellness', url: 'https://hyydratewellness.com/', type: 'web' },
    ],
    gradient: 'from-purple-500/20 to-pink-500/20',
    accent: 'text-purple-400',
  },
  {
    id: 'hablax',
    tags: ['React Native', 'Mobile Development', 'iOS', 'Android'],
    highlights: { es: ['Publicada en ambas stores', 'Recargas internacionales', 'Plataforma de comunicaciones'], en: ['Published on both stores', 'International recharges', 'Communications platform'] },
    links: [
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.hablax.app&hl=en', type: 'store' },
      { label: 'App Store', url: 'https://apps.apple.com/pa/app/hablax-mobile-recharges/id1202229481?l=en-GB', type: 'store' },
    ],
    gradient: 'from-cyan-500/20 to-sky-500/20',
    accent: 'text-cyan-400',
  },
  {
    id: 'homelab',
    tags: ['Docker', 'Ubuntu Server', 'WireGuard', 'Nginx', 'Cloudflare', 'Bash'],
    highlights: { es: ['Todo contenerizado con Docker', 'Acceso seguro via Cloudflare Tunnel', 'CLI personalizado (homelab)'], en: ['Fully containerized with Docker', 'Secure access via Cloudflare Tunnel', 'Custom CLI (homelab)'] },
    links: [],
    gradient: 'from-gray-500/20 to-slate-500/20',
    accent: 'text-gray-400',
  },
]

function LinkIcon({ type }) {
  if (type === 'store') {
    return (
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    )
  }
  if (type === 'admin') {
    return (
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  }
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

export default function Projects() {
  const { t, lang } = useLang()

  return (
    <section id="proyectos" className="py-16 sm:py-24 px-4 sm:px-6 bg-bg-card/30">
      <div className="max-w-5xl mx-auto">
        <AnimateIn>
          <div className="flex items-center gap-3 mb-10 sm:mb-12">
            <span className="text-primary font-mono text-sm">{t.projects.sectionNumber}</span>
            <h2 className="text-2xl sm:text-3xl font-bold">{t.projects.title}</h2>
            <div className="flex-1 h-px bg-border ml-4"></div>
          </div>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {projectsMeta.map((project, i) => {
            const content = t.projects.items[project.id]
            const highlights = project.highlights[lang]
            return (
              <AnimateIn key={project.id} delay={i * 0.1}>
                <div
                  id={`project-${project.id}`}
                  className="bg-bg-card border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-all group flex flex-col h-full"
                >
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <svg className={`w-10 h-10 ${project.accent}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                      </svg>
                      {project.links.length > 0 && (
                        <span className="text-xs font-mono text-text-muted px-2 py-0.5 rounded-full border border-border">
                          {project.links.length} {project.links.length === 1 ? t.projects.linkLabel : t.projects.linksLabel}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors">
                      {content.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                      {content.description}
                    </p>

                    <ul className="space-y-1.5 mb-5">
                      {highlights.map((h) => (
                        <li key={h} className="text-text-muted text-xs flex items-center gap-2">
                          <span className="w-1 h-1 bg-primary rounded-full shrink-0"></span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    {project.links.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.links.map((link) => (
                          <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-all"
                          >
                            <LinkIcon type={link.type} />
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs font-mono px-2 py-0.5 rounded bg-primary/5 text-text-muted">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
