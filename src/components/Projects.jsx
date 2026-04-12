const projects = [
  {
    title: 'De One - Plataforma de Delivery',
    description: 'Ecosistema completo de delivery: API RESTful en Laravel, 4 apps móviles (Cliente, Socio, Repartidor, Cocina) en Ionic, paneles web en Angular, geolocalización en tiempo real y despliegue en AWS.',
    tags: ['Laravel', 'Ionic', 'Angular', 'AWS', 'MySQL', 'Google Maps'],
    highlights: ['4 apps publicadas en stores', 'Geolocalización en tiempo real', 'Infraestructura completa en AWS'],
  },
  {
    title: 'Florida Global University - SIS/LMS',
    description: 'Sistema de gestión académica y aula virtual. Motor de inscripción automatizado con reglas de negocio. Integración de tres plataformas: Laravel + WordPress + Moodle con sincronización en tiempo real.',
    tags: ['Laravel', 'WordPress', 'Moodle', 'MySQL', 'Plugin Development'],
    highlights: ['Inscripción 100% automatizada', 'Plugin WordPress como middleware', '3 plataformas integradas'],
  },
  {
    title: 'Progracademy - E-learning',
    description: 'Plataforma de e-learning con integración de Microsoft 365 vía Graph API para automatizar clases en Teams, Business Intelligence con Power BI y web scraping para ingesta automática de contenido.',
    tags: ['Angular', 'Laravel', 'MS Graph API', 'Power BI', 'Web Scraping'],
    highlights: ['Integración con MS Teams y Calendar', 'Dashboards con Power BI', 'Ingesta automática de datos'],
  },
  {
    title: 'Homelab - Servidor Enterprise en Casa',
    description: 'Servidor Ubuntu con arquitectura de microservicios contenerizada. AdGuard Home, Nginx Proxy Manager, Cloudflare Tunnel, monitoreo con Netdata, VPN con WireGuard y CLI personalizado para gestión.',
    tags: ['Docker', 'Ubuntu Server', 'WireGuard', 'Nginx', 'Cloudflare', 'Bash'],
    highlights: ['Todo contenerizado con Docker', 'Acceso seguro via Cloudflare Tunnel', 'CLI personalizado (homelab)'],
  },
]

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 px-6 bg-bg-card/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-primary font-mono text-sm">04.</span>
          <h2 className="text-3xl font-bold">Proyectos</h2>
          <div className="flex-1 h-px bg-border ml-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
              </div>

              <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <ul className="space-y-1.5 mb-5">
                {project.highlights.map((h) => (
                  <li key={h} className="text-text-muted text-xs flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full shrink-0"></span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-mono px-2 py-0.5 rounded bg-primary/5 text-text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
