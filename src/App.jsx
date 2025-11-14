import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  Code, 
  Database, 
  Cloud, 
  Star, 
  Download, 
  Menu, 
  X,
  Layers,
  Settings,
  Brain,
  Award,
  BookOpen,
  GitBranch,
  Aperture,
  MessageSquare
} from 'lucide-react';
import profileAvatar from './assets/profile.jpg';

// --- DATOS DEL PORTAFOLIO ---

const profileData = {
  name: "José Mora",
  title: "Ingeniero de Software Full Stack",
  avatarUrl: profileAvatar,
  location: "Venezuela",
  email: "dev.moramjose@gmail.com",
  phone: "+1 (954) 336-5964",
  socials: {
    github: "https://github.com/moramjose",
    linkedin: "https://linkedin.com/in/devmoramjose",
  },
  summary: "Ingeniero de Software Full Stack con 5 años de experiencia orquestando ecosistemas digitales. Mi especialidad es diseñar y construir soluciones completas, desde aplicaciones móviles y web (Ionic, Angular, React) hasta el backend (Laravel, .NET) y la infraestructura en la nube (AWS, Azure). Tengo un historial probado arquitectando la interoperabilidad entre plataformas dispares (ej. Laravel, WordPress, Moodle) y automatizando procesos de negocio (BPA) de alto impacto. Combino el desarrollo de código a medida (PHP, C#) con el poder de Power Platform (Power Automate, Power Apps, Power BI) para eliminar la fricción operativa y entregar valor medible al negocio.",
  cvLink: "cv.pdf" 
};

const skillsData = [
  { 
    category: "Lenguajes de Programación", 
    icon: Code,
    items: ["TypeScript", "JavaScript", "PHP", "Java", "C#", "C++", "Visual Basic"] 
  },
  { 
    category: "Desarrollo Back-end", 
    icon: Settings,
    items: ["Laravel", "ASP.NET", "PHP (nativa)", "C# (para backend)"] 
  },
  { 
    category: "Desarrollo Front-end", 
    icon: Layers,
    items: ["Angular", "Ionic", "React", "Wordpress", "HTML5", "CSS3", "JavaScript/TypeScript (web)"] 
  },
  { 
    category: "Bases de Datos", 
    icon: Database,
    items: ["MySQL", "SQL Server (Modelado, Diseño, Optimización de Consultas)"] 
  },
  { 
    category: "Servicios Cloud & Hosting", 
    icon: Cloud,
    items: ["AWS (S3, EC2, RDS)", "Google Cloud", "Firebase", "Dreamhost"] 
  },
  {
    category: "Gestión de Contenido (CMS)",
    icon: Aperture,
    items: ["WordPress (creación de plugins y temas personalizados)"]
  },
  {
    category: "Control de Versiones",
    icon: GitBranch,
    items: ["Github", "Gitlab", "Bitbucket", "Git"]
  },
  { 
    category: "Herramientas", 
    icon: Star,
    items: ["VS Code", "Visual Studio", "PhpStorm", "Adobe XD", "Sketch XD", "Postman", "Insomnia", "Power Platform", "SMSS", "Teams", "Discord", "Slack", "Google chat"] 
  },
  {
    category: "Soft Skills",
    icon: Brain,
    items: ["Resolución de Problemas", "Comunicación Efectiva", "Colaboración en Equipo", "Aprendizaje Continuo", "Orientación a Resultados", "Autodidacta"]
  }
];

const experienceData = [
  {
    company: "Grupo Estrella",
    role: "Desarrollador de automatizaciones",
    period: "2025 - 2025",
    description: "Responsable de digitalizar y optimizar los procesos de gestión de personal (capacitación, evaluación, asistencia) utilizando el stack de Microsoft. Diseñé la solución de captura de datos (MS Forms, Power Apps) y orquesté la lógica de negocio con Power Automate, distribuyendo datos a Listas de SharePoint y SQL Server. Esta automatización eliminó el procesamiento manual. Implementé la capa de BI conectando Power BI a SQL Server para reportes en tiempo real.",
    tags: ["Power Platform", "Power Automate", "Power Apps", "Power BI", "SQL Server", "SharePoint"]
  },
  {
    company: "Florida Global University",
    role: "Desarrollador full stack",
    period: "2024 - 2025",
    description: "Arquitecto y automatizador del sistema de gestión académica (SIS) y aula virtual (LMS). Automaticé por completo el proceso de inscripción con un motor de reglas de negocio. Integré tres plataformas (Laravel, WordPress, Moodle) desarrollando un plugin middleware de WordPress a medida para sincronizar usuarios, cursos y matrículas entre tres bases de datos MySQL en tiempo real.",
    tags: ["Laravel", "WordPress", "Moodle", "MySQL", "PHP", "Plugins a medida"]
  },
  {
    company: "American Elite School",
    role: "Desarrollador full stack",
    period: "2024 - 2025",
    description: "Responsable de replicar y escalar la arquitectura de software completa (Laravel/WordPress/Moodle) para el lanzamiento de la escuela. Adapté el core del negocio, reconfigurando el motor de automatización de inscripciones y la lógica de sincronización de bases de datos MySQL para operar de forma independiente. Personalicé la capa de presentación (WordPress) con nuevos plugins y temas hijos a medida.",
    tags: ["Laravel", "WordPress", "Moodle", "MySQL", "PHP"]
  },
  {
    company: "De One",
    role: "Desarrollador full stack",
    period: "2019 - 2025",
    description: "Como único Desarrollador Full Stack, mantuve la plataforma de delivery 'De One', asumiendo la propiedad total. Diseñé el ecosistema: API RESTful en Laravel, 4 apps móviles en Ionic (Cliente, Socio, Repartidor, Cocina) y paneles web en Angular. Implementé geolocalización en tiempo real. Desplegué y administré la infraestructura en AWS (EC2, S3) y gestioné la publicación de las 4 apps en las tiendas.",
    tags: ["Laravel", "Ionic", "Angular", "MySQL", "AWS (EC2, S3)", "PHP", "REST API"]
  },
  {
    company: "Progracademy",
    role: "Desarrollador full stack",
    period: "2022 - 2023",
    description: "Pieza clave en la construcción de la plataforma e-learning (Angular/Laravel). Diseñé y mantuve el panel administrativo. Optimicé el backend (Laravel) y la BD MySQL, creando vistas optimizadas para reportes complejos. Lideré la integración con Microsoft 365 (Graph API) para conectar con Teams y Calendar, automatizando la programación de clases. Desarrollé un módulo de Web Scrapping (Goutte/Guzzle).",
    tags: ["Laravel", "Angular", "MySQL", "Power BI", "Microsoft Graph API", "Web Scrapping"]
  },
  {
    company: "PYKRS (Remoto)",
    role: "Desarrollador remoto",
    period: "2021 - 2022",
    description: "Colaboré en la evolución de la app IoT de PYKRS. Mi rol se centró en la optimización del frontend: refactoricé la arquitectura de estilos (CSS/SCSS) de pantallas principales, implementando un diseño modular y mejorando la UX. Fui responsable de la gestión de dependencias, planificando y ejecutando la actualización de librerías críticas.",
    tags: ["IoT", "CSS/SCSS", "UX/UI", "Mantenimiento"]
  },
  {
    company: "Secco Service (Remoto)",
    role: "Desarrollador remoto",
    period: "2021 - 2022",
    description: "Asumí el mantenimiento y evolución de una app móvil híbrida (Ionic). Refactoricé y optimicé módulos críticos (Login, Perfil, Inicio) mejorando la UX y la mantenibilidad. Ejecuté una actualización integral de librerías y dependencias del stack de Ionic para mitigar vulnerabilidades.",
    tags: ["Ionic", "Móvil", "Refactorización", "UX/UI"]
  },
  {
    company: "Mandaditos CR (Remoto)",
    role: "Desarrollador remoto",
    period: "2021 - 2022",
    description: "Colaboré en el escalado de la plataforma. Implementé el módulo de seguimiento en tiempo real, diseñando la interfaz de mapas y los endpoints de la API RESTful para geolocalización. Integré hardware nativo (Cámara, GPS) con Capacitor para pruebas de entrega (PoD). Optimicé consultas SQL complejas.",
    tags: ["Ionic", "Angular", "MySQL", "Capacitor", "GPS", "REST API"]
  }
];

const projectsData = [
  {
    title: "Sistema educativo",
    description: "Proyecto Full Stack de un sistema educativo en línea (FGU, AES). Arquitectura e integración de Laravel, WordPress y Moodle, y automatización completa del proceso de inscripción de estudiantes.",
    imageUrl: "https://portal.floridaglobal.university/wp-content/uploads/2025/07/cropped-cropped-LOGO-BLANCO_FLORIDA-GLOBAL-UNIVERSITY-1536x506-1.png",
    tags: ["Wordpress", "Laravel", "MySQL", "Moodle", "PHP", "AWS", "Dreamhost"],
    liveUrl: "https://portal.floridaglobal.university/my-account/", 
    repoUrl: "#" 
  },
  {
    title: "Cursos en línea - Progracademy",
    description: "Desarrollo de plataforma e-learning. Construcción del panel de admin, optimización de BD con vistas SQL e integración con Microsoft 365 Graph API para automatizar agendamiento en Teams.",
    imageUrl: "https://panel.progracademy.com/assets/media/logos/default.svg",
    tags: ["Angular", "Laravel", "MySQL", "AWS", "Microsoft Graph API", "Power BI"],
    liveUrl: "https://panel.progracademy.com/dashboard", 
    repoUrl: "#" 
  },
  {
    title: "Automatización con Power Platform",
    description: "Implementación de flujo de trabajo automatizado para Grupo Estrella. Solución E2E (Power Apps, Forms, Power Automate) para procesar datos en SQL Server y SharePoint, eliminando el procesamiento manual.",
    imageUrl: "https://www.northware.mx/wp-content/uploads/2022/09/northware-microsoft-power-platform.png",
    tags: ["Microsoft Power Platform", "Power Automate", "Power Apps", "Power BI", "SQL Server", "SharePoint"],
    liveUrl: "#", 
    repoUrl: "#" 
  }
];

const educationData = [
  {
    institution: "Universidad Bicentenaria de Aragua",
    degree: "Ingeniería de Sistemas - Mención Inteligencia Artificial",
    period: "Finalizando grado",
  },
  {
    institution: "U.E.P Colegio \"Dr. Gustavo H. Machado\"",
    degree: "Educación Secundaria",
    period: "Graduado",
  },
  {
    institution: "Udemy",
    degree: "E-commerce fullstack con Laravel y Angular",
    period: "Certificado",
  },
  {
    institution: "Udemy",
    degree: "Net Core & Ionic",
    period: "Certificado",
  }
];

// --- COMPONENTES DE LA UI ---

const handleSmoothScroll = (e) => {
  e.preventDefault();
  const href = e.currentTarget.getAttribute('href');
  const targetId = href.replace(/.*#/, "");
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    const headerOffset = 64; // Altura del header (h-16 en Header)
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

const NavLink = ({ href, children }) => (
  <a 
    href={href} 
    onClick={handleSmoothScroll}
    className="text-gray-300 hover:text-blue-400 transition-colors px-3 py-2 rounded-md text-sm font-medium"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children, onClick }) => (
  <a 
    href={href} 
    onClick={(e) => {
      handleSmoothScroll(e);
      onClick(); // Cierra el menú
    }}
    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
  >
    {children}
  </a>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Sobre Mí", href: "#about" },
    { label: "Habilidades", href: "#skills" },
    { label: "Experiencia", href: "#experience" },
    { label: "Proyectos", href: "#projects" },
    { label: "Educación", href: "#education" },
    { label: "Contacto", href: "#contact" },
  ];

  return (
    <nav className="bg-gray-800/90 backdrop-blur-md shadow-lg fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#home" onClick={handleSmoothScroll} className="flex-shrink-0 text-white text-xl font-bold">
              José<span className="text-blue-400">Mora</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map(item => (
                <NavLink key={item.label} href={item.href}>{item.label}</NavLink>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map(item => (
            <MobileNavLink key={item.label} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </MobileNavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="pt-32 pb-20 bg-gray-900 text-white min-h-screen flex items-center">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <img 
        src={profileData.avatarUrl} 
        alt="Foto de perfil de José Mora" 
        className="w-36 h-36 md:w-40 md:h-40 rounded-full mx-auto mb-6 border-4 border-blue-500 shadow-lg"
      />
      <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300 mb-4">
        {profileData.name}
      </h1>
      <p className="text-2xl md:text-3xl text-gray-300 mb-8">
        {profileData.title}
      </p>
      <div className="flex justify-center space-x-6 mb-12">
        <a href={profileData.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-transform duration-300 hover:scale-110">
          <Github size={32} />
          <span className="sr-only">GitHub</span>
        </a>
        <a href={profileData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-transform duration-300 hover:scale-110">
          <Linkedin size={32} />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a href={`mailto:${profileData.email}`} className="text-gray-400 hover:text-blue-400 transition-transform duration-300 hover:scale-110">
          <Mail size={32} />
          <span className="sr-only">Email</span>
        </a>
      </div>
      <a
        href={profileData.cvLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
      >
        <Download className="mr-3 h-5 w-5" />
        Descargar CV
      </a>
    </div>
  </section>
);

const SectionTitle = ({ title, icon: Icon }) => (
  <div className="flex items-center justify-center mb-12">
    <Icon className="text-blue-400 w-8 h-8 mr-3" />
    <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
  </div>
);

const About = () => (
  <section id="about" className="py-20 bg-gray-800">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title="Sobre Mí" icon={Brain} />
      <p className="text-center text-lg text-gray-300 leading-relaxed">
        {profileData.summary}
      </p>
    </div>
  </section>
);

const SkillBadge = ({ children }) => (
  <span className="inline-block bg-gray-700 text-gray-200 rounded-full px-4 py-2 text-sm font-medium transition-transform duration-200 hover:scale-105 hover:bg-blue-500">
    {children}
  </span>
);

const Skills = () => (
  <section id="skills" className="py-20 bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title="Habilidades Técnicas" icon={Code} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map(category => (
          <div key={category.category} className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <category.icon className="w-6 h-6 mr-3 text-blue-400" />
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map(skill => (
                <SkillBadge key={skill}>{skill}</SkillBadge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="py-20 bg-gray-800">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title="Experiencia Profesional" icon={Briefcase} />
      <div className="relative border-l-2 border-blue-500 ml-4 md:ml-0">
        {experienceData.map((job, index) => (
          <div key={index} className="mb-10 ml-8 md:ml-12">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full -left-4 ring-8 ring-gray-800">
              <Briefcase className="w-4 h-4 text-white" />
            </span>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                <h3 className="text-2xl font-semibold text-white">{job.role}</h3>
                <span className="text-sm font-medium text-blue-400 mt-2 sm:mt-0">{job.period}</span>
              </div>
              <p className="text-lg font-medium text-gray-300 mb-3">{job.company}</p>
              <p className="text-gray-400 mb-4">{job.description}</p>
              <div className="flex flex-wrap gap-2">
                {job.tags.map(tag => (
                  <span key={tag} className="bg-gray-700 text-blue-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ProjectCard = ({ title, description, imageUrl, tags, liveUrl, repoUrl }) => (
  <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] border border-gray-700 flex flex-col">
    <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4 flex-grow">{description}</p>
      <div className="mb-4 flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="bg-gray-700 text-blue-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-auto flex space-x-4">
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex-1 text-center py-2 px-4 rounded-md font-medium transition-colors ${liveUrl === '#' ? 'bg-gray-600 text-gray-400 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
          aria-disabled={liveUrl === '#'}
        >
          Ver Demo
        </a>
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex-1 text-center py-2 px-4 rounded-md font-medium transition-colors ${repoUrl === '#' ? 'bg-gray-600 text-gray-400 cursor-not-allowed' : 'bg-gray-700 text-white hover:bg-gray-600'}`}
          aria-disabled={repoUrl === '#'}
        >
          Ver Código
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => (
  <section id="projects" className="py-20 bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title="Proyectos Destacados" icon={Award} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map(project => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  </section>
);

const Education = () => (
  <section id="education" className="py-20 bg-gray-800">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title="Educación y Certificaciones" icon={BookOpen} />
      <div className="relative border-l-2 border-blue-500 ml-4 md:ml-0">
        {educationData.map((edu, index) => (
          <div key={index} className="mb-10 ml-8 md:ml-12">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full -left-4 ring-8 ring-gray-800">
              {edu.institution === 'Udemy' ? <Award className="w-4 h-4 text-white" /> : <BookOpen className="w-4 h-4 text-white" />}
            </span>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                <h3 className="text-xl md:text-2xl font-semibold text-white">{edu.degree}</h3>
                <span className="text-sm font-medium text-blue-400 mt-2 sm:mt-0">{edu.period}</span>
              </div>
              <p className="text-lg font-medium text-gray-300">{edu.institution}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-20 bg-gray-800">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <SectionTitle title="Hablemos" icon={MessageSquare} />
      <p className="text-xl text-gray-300 mb-8">
        Estoy disponible para nuevas oportunidades y colaboraciones.
      </p>
      <div className="space-y-6">
        <a 
          href={`mailto:${profileData.email}`} 
          className="inline-flex items-center justify-center bg-gray-700 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg w-full md:w-auto text-lg transition-colors"
        >
          <Mail className="w-5 h-5 mr-3" />
          {profileData.email}
        </a>
        <div className="inline-flex items-center justify-center bg-gray-700 text-white font-medium py-3 px-6 rounded-lg w-full md:w-auto text-lg">
          <Phone className="w-5 h-5 mr-3" />
          {profileData.phone}
        </div>
        <div className="inline-flex items-center justify-center bg-gray-700 text-white font-medium py-3 px-6 rounded-lg w-full md:w-auto text-lg">
          <MapPin className="w-5 h-5 mr-3" />
          {profileData.location}
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-900 py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="flex justify-center space-x-6 mb-4">
        <a href={profileData.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
          <Github size={28} />
        </a>
        <a href={profileData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
          <Linkedin size={28} />
        </a>
        <a href={`mailto:${profileData.email}`} className="text-gray-400 hover:text-blue-400 transition-colors">
          <Mail size={28} />
        </a>
      </div>
      <p className="text-gray-500">
        &copy; {new Date().getFullYear()} {profileData.name}. Diseñado con React & Tailwind CSS.
      </p>
    </div>
  </footer>
);

// --- COMPONENTE PRINCIPAL DE LA APP ---

export default function App() {
  return (
    <div className="bg-gray-900 font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}