import useInView from '../hooks/useInView'

// ponytail: se evalúa una vez al cargar el módulo, no escucha cambios en vivo
// de la preferencia. Si alguna vez importa, envolver en useSyncExternalStore.
const reduceMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function AnimateIn({ children, className = '', delay = 0 }) {
  const [ref, isInView] = useInView()

  if (reduceMotion) return <div className={className}>{children}</div>

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}
