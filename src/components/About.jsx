export default function About() {
  const stats = [
    { value: '+6', label: 'Años de experiencia' },
    { value: '+10', label: 'Proyectos entregados' },
    { value: '4', label: 'Apps publicadas' },
    { value: '3', label: 'Plataformas integradas' },
  ]

  return (
    <section id="sobre-mi" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-primary font-mono text-sm">01.</span>
          <h2 className="text-3xl font-bold">Sobre mí</h2>
          <div className="flex-1 h-px bg-border ml-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4 text-text-secondary leading-relaxed">
            <p>
              Como Ingeniero de Software Full Stack, mi enfoque va más allá del código:
              me especializo en diseñar y orquestar <span className="text-primary">ecosistemas digitales completos</span>,
              garantizando su funcionalidad, rendimiento, seguridad y escalabilidad
              desde el desarrollo hasta el despliegue.
            </p>
            <p>
              Mi mayor fortaleza es <span className="text-primary">conectar lo que parece inconectable</span>.
              Tengo un historial probado arquitectando la interoperabilidad entre plataformas
              dispares (Laravel, .NET, WordPress) y automatizando procesos de negocio críticos.
            </p>
            <p>
              Recientemente, he profundizado en la cultura DevOps y la arquitectura de
              Microservicios, implementando entornos de servidores Linux contenerizados
              con Docker, con seguridad de red avanzada y observabilidad total.
            </p>
          </div>

          <div className="space-y-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-bg-card border border-border rounded-lg p-4 text-center hover:border-primary/30 transition-colors">
                <div className="text-3xl font-bold text-primary font-mono">{stat.value}</div>
                <div className="text-text-muted text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
