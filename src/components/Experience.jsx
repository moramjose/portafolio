const experiences = [
  {
    period: '2026 - Presente',
    company: 'Hablax INC.',
    role: 'Desarrollador de Aplicaciones Moviles',
    location: 'Delaware, USA',
    description: 'Desarrollo de aplicaciones moviles para la plataforma de comunicaciones Hablax.',
    tags: ['React Native', 'Mobile Development'],
  },
  {
    period: '2026 - Presente',
    company: 'Faim Lab',
    role: 'Desarrollo Web y Webmastering',
    location: 'Florida, USA',
    description: 'Desarrollo web y administracion de plataformas digitales.',
    tags: ['Web Development', 'Webmastering'],
  },
  {
    period: '2024 - 2026',
    company: 'Squuad',
    role: 'Desarrollador Full Stack',
    location: 'Florida, USA',
    description: 'Repliqué y escalé la arquitectura de software completa (Laravel/WordPress/Moodle) para el lanzamiento de American Elite School, Florida Global University y Universidad Tecnológica Baden Powell. Automaticé inscripciones con un motor de reglas de negocio y sincronización de bases de datos MySQL en tiempo real.',
    tags: ['Laravel', 'WordPress', 'Moodle', 'MySQL'],
  },
  {
    period: '2025 - 2026',
    company: 'Grupo Estrella',
    role: 'Desarrollador de Automatización',
    location: 'República Dominicana',
    description: 'Digitalicé y optimicé los procesos de gestión de personal utilizando el stack completo de Microsoft. Diseñé soluciones end-to-end con Power Apps, Power Automate, SharePoint y SQL Server, eliminando cuellos de botella críticos y habilitando reportes en tiempo real con Power BI.',
    tags: ['Power Platform', 'SQL Server', 'SharePoint', 'Power BI'],
  },
  {
    period: '2022 - 2023',
    company: 'Progracademy',
    role: 'Desarrollador Full Stack',
    location: 'Madrid, Espana',
    description: 'Construí y escalé la plataforma de e-learning. Integré Microsoft 365 vía Graph API para automatizar clases en Teams. Implementé Business Intelligence con Power BI y desarrollé módulos de Web Scraping para ingesta automática de datos.',
    tags: ['Angular', 'Laravel', 'MS Graph API', 'Power BI'],
  },
  {
    period: '2019 - 2025',
    company: 'De One',
    role: 'Desarrollador Full Stack',
    location: 'Venezuela',
    description: 'Como único desarrollador, diseñé el ecosistema completo de delivery: API RESTful en Laravel, 4 apps móviles en Ionic, paneles web en Angular, geolocalización en tiempo real y despliegue completo en AWS.',
    tags: ['Laravel', 'Ionic', 'Angular', 'AWS', 'MySQL'],
  },
  {
    period: '2021 - 2022',
    company: 'Mandaditos CR',
    role: 'Desarrollador Full Stack',
    location: 'Costa Rica',
    description: 'Implementé el módulo de seguimiento en tiempo real con mapas personalizados, integración de hardware nativo (Cámara, GPS) y optimización de consultas SQL espaciales.',
    tags: ['Ionic', 'Angular', 'MySQL', 'Capacitor'],
  },
]

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 px-6 bg-bg-card/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-primary font-mono text-sm">02.</span>
          <h2 className="text-3xl font-bold">Experiencia</h2>
          <div className="flex-1 h-px bg-border ml-4"></div>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-[140px] top-0 bottom-0 w-px bg-border"></div>

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative flex flex-col md:flex-row gap-4 md:gap-8 pl-8 md:pl-0">
                <div className="absolute left-0 md:left-[140px] top-2 w-3 h-3 -translate-x-1.5 rounded-full bg-primary border-2 border-bg-dark"></div>

                <div className="md:w-[120px] shrink-0 md:text-right">
                  <span className="text-primary font-mono text-sm">{exp.period}</span>
                </div>

                <div className="md:pl-8 bg-bg-card border border-border rounded-lg p-6 flex-1 hover:border-primary/30 transition-colors">
                  <h3 className="text-lg font-semibold text-text-primary">{exp.role}</h3>
                  <p className="text-primary font-medium text-sm">{exp.company}</p>
                  {exp.location && <p className="text-text-muted text-xs mb-3">{exp.location}</p>}
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="text-xs font-mono px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
