import AnimateIn from './AnimateIn'

const categories = [
  {
    title: 'Backend',
    items: [
      { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
      { name: '.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
      { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    ],
  },
  {
    title: 'Frontend & Mobile',
    items: [
      { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Ionic', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    ],
  },
  {
    title: 'Bases de Datos',
    items: [
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg' },
    ],
  },
  {
    title: 'CMS & Platforms',
    items: [
      { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
      { name: 'Moodle', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/moodle/moodle-original.svg' },
      { name: 'Power Platform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
    ],
  },
  {
    title: 'DevOps & Cloud',
    items: [
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
      { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
      { name: 'Nginx', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    ],
  },
]

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimateIn>
          <div className="flex items-center gap-3 mb-12">
            <span className="text-primary font-mono text-sm">03.</span>
            <h2 className="text-3xl font-bold">Tech Stack</h2>
            <div className="flex-1 h-px bg-border ml-4"></div>
          </div>
        </AnimateIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <AnimateIn key={cat.title} delay={i * 0.1}>
              <div className="bg-bg-card border border-border rounded-lg p-6 h-full">
                <h3 className="text-primary font-mono text-sm mb-5 uppercase tracking-wider">{cat.title}</h3>
                <div className="grid grid-cols-3 gap-4">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-bg-card-hover transition-colors group"
                    >
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-10 h-10 group-hover:scale-110 transition-transform"
                        loading="lazy"
                      />
                      <span className="text-text-muted text-xs text-center">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
