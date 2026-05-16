import AnimateIn from './AnimateIn'
import { useLang } from '../i18n/LanguageContext'

const categories = [
  {
    key: 'backend',
    items: [
      { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
      { name: '.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
      { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    ],
  },
  {
    key: 'frontendMobile',
    items: [
      { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Ionic', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    ],
  },
  {
    key: 'databases',
    items: [
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg' },
      { name: 'SAP HANA', icon: 'https://cdn.simpleicons.org/sap/1A6FA5' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg' },
    ],
  },
  {
    key: 'dataBi',
    items: [
      { name: 'Power BI', icon: 'https://cdn.simpleicons.org/powerbi/F2C811' },
      { name: 'Power Automate', icon: 'https://cdn.simpleicons.org/powerautomate/0066FF' },
      { name: 'Power Apps', icon: 'https://cdn.simpleicons.org/powerapps/742774' },
      { name: 'SharePoint', icon: 'https://cdn.simpleicons.org/microsoftsharepoint/0078D4' },
    ],
  },
  {
    key: 'cmsPlatforms',
    items: [
      { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
      { name: 'Moodle', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/moodle/moodle-original.svg' },
      { name: 'n8n', icon: 'https://cdn.simpleicons.org/n8n/EA4B71' },
    ],
  },
  {
    key: 'devopsCloud',
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
  const { t } = useLang()

  return (
    <section id="tech-stack" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <AnimateIn>
          <div className="flex items-center gap-3 mb-10 sm:mb-12">
            <span className="text-primary font-mono text-sm">{t.techStack.sectionNumber}</span>
            <h2 className="text-2xl sm:text-3xl font-bold">{t.techStack.title}</h2>
            <div className="flex-1 h-px bg-border ml-4"></div>
          </div>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {categories.map((cat, i) => (
            <AnimateIn key={cat.key} delay={i * 0.1}>
              <div className="bg-bg-card border border-border rounded-lg p-5 sm:p-6 h-full">
                <h3 className="text-primary font-mono text-sm mb-4 sm:mb-5 uppercase tracking-wider">{t.techStack.categories[cat.key]}</h3>
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex flex-col items-center gap-2 p-2 sm:p-3 rounded-lg hover:bg-bg-card-hover transition-colors group"
                    >
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform"
                        loading="lazy"
                      />
                      <span className="text-text-muted text-[10px] sm:text-xs text-center">{item.name}</span>
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
