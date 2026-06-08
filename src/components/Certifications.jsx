import AnimateIn from './AnimateIn'
import { useLang } from '../i18n/LanguageContext'

const certifications = [
  {
    key: 'ccna',
    icon: '/icons/cisco.svg',
    issuer: 'Cisco Networking Academy',
    year: '2026',
    url: 'https://www.credly.com/badges/f66b7a98-2fae-4358-9f7d-2115a83e6bd9/public_url',
  },
  {
    key: 'netCoreIonic',
    icon: '/icons/udemy.svg',
    issuer: 'Udemy',
    year: '2024',
    url: 'https://www.udemy.com/certificate/UC-a0dd1a6b-36ae-44a3-82f9-76ff6b8177e8/',
  },
  {
    key: 'laravelAngular',
    icon: '/icons/udemy.svg',
    issuer: 'Udemy',
    year: '2024',
    url: 'https://www.udemy.com/certificate/UC-9243a0f4-df98-40e7-b5db-9084c52c66b1/',
  },
]

export default function Certifications() {
  const { t } = useLang()

  return (
    <section id="certificaciones" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <AnimateIn>
          <div className="flex items-center gap-3 mb-10 sm:mb-12">
            <span className="text-primary font-mono text-sm">{t.certifications.sectionNumber}</span>
            <h2 className="text-2xl sm:text-3xl font-bold">{t.certifications.title}</h2>
            <div className="flex-1 h-px bg-border ml-4"></div>
          </div>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {certifications.map((cert, i) => (
            <AnimateIn key={cert.key} delay={i * 0.1}>
              <div className="bg-bg-card border border-border rounded-lg p-5 sm:p-6 h-full flex flex-col hover:border-primary/40 transition-colors">
                <img
                  src={cert.icon}
                  alt={cert.issuer}
                  className="w-10 h-10 mb-4"
                  loading="lazy"
                />
                <h3 className="text-text-primary font-semibold text-base sm:text-lg leading-snug mb-2">
                  {t.certifications.items[cert.key]}
                </h3>
                <p className="text-text-muted font-mono text-xs mb-5">
                  {cert.issuer} · {cert.year}
                </p>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-umami-event={`cert-${cert.key}`}
                  className="mt-auto inline-flex items-center gap-1.5 text-primary hover:text-primary/80 font-mono text-xs sm:text-sm transition-colors"
                >
                  {t.certifications.verify}
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
