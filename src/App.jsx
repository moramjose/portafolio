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
  BookOpen
} from 'lucide-react';
import profileAvatar from './assets/profile.png';

// --- DATOS DEL PORTAFOLIO ---

const profileData = {
  name: "José Mora",
  title: "Desarrollador de Software Full Stack",
  avatarUrl: profileAvatar,
  location: "Venezuela",
  email: "dev.moramjose@gmail.com",
  phone: "+1 (954) 336-5964",
  socials: {
    github: "https://github.com/moramjose",
    linkedin: "https://linkedin.com/in/devmoramjose",
  },
  summary: "Desarrollador de software con 5 años de experiencia comprobada en el diseño, desarrollo e implementación de soluciones robustas para aplicaciones web y móviles. Dominio sólido de Java, JavaScript, TypeScript, PHP y C#, con experiencia en Front-end (Angular, Ionic) y Back-end (Laravel, ASP.NET). Hábil en la gestión de bases de datos MySQL, creación de APIs RESTful, gestión de contenido con WordPress y automatización con la Power Platform (Power Apps, Power Automate, SharePoint y Azure). Enfocado en aplicar habilidades técnicas para contribuir al éxito de proyectos innovadores, optimizando el rendimiento y la escalabilidad.",
  cvLink: "/cv.pdf" 
};

const skillsData = [
  { 
    category: "Lenguajes de Programación", 
    icon: Code,
    items: ["Java", "JavaScript", "TypeScript", "PHP", "C#", "C++"] 
  },
  { 
    category: "Desarrollo Back-end", 
    icon: Settings,
    items: ["Laravel", "ASP.NET", "PHP (Nativa)", "Node.js (Básico)"] 
  },
  { 
    category: "Desarrollo Front-end", 
    icon: Layers,
    items: ["Angular", "Ionic", "HTML5", "CSS3", "React (Básico)"] 
  },
  { 
    category: "Bases de Datos", 
    icon: Database,
    items: ["MySQL (Modelado, Diseño, Optimización)", "SQL Server"] 
  },
  { 
    category: "Cloud, DevOps & CMS", 
    icon: Cloud,
    items: ["AWS (S3, EC2, RDS)", "WordPress (Plugins/Temas)", "Dreamhost", "Git", "GitHub", "Bitbucket"] 
  },
  { 
    category: "Herramientas y Plataformas", 
    icon: Star,
    items: ["Microsoft Power Platform", "Power Apps", "Power Automate", "Office", "Excel", "Word", "PowerPoint", "SharePoint", "Azure (Básico)", "VS Code", "Visual Studio", "PhpStorm", "Postman", "Insomnia"] 
  }
];

const experienceData = [
  {
    company: "De One (Remoto)",
    role: "Desarrollador Full Stack",
    period: "2019 - 2025",
    description: "Lideré el desarrollo y mantenimiento de múltiples aplicaciones web y móviles, gestionando el ciclo de vida completo desde la concepción hasta el despliegue en AWS.",
    tags: ["Angular", "Ionic", "Laravel", "MySQL", "AWS"]
  },
  {
    company: "Grupo Estrella (Remoto)",
    role: "Desarrollador Power Platform",
    period: "2025",
    description: "Desarrollo de soluciones de automatización de procesos y aplicaciones de bajo código para optimizar operaciones internas.",
    tags: ["Power Platform", "Power Apps", "Power Automate", "SQL Server"]
  },
  {
    company: "Florida Global University (Oficina)",
    role: "Desarrollador Web",
    period: "2024 - 2025",
    description: "Mantenimiento del portal web principal, desarrollo de nuevas funcionalidades y optimización de la base de datos.",
    tags: ["WordPress", "Laravel", "MySQL"]
  },
  {
    company: "American Elite School (Oficina)",
    role: "Desarrollador Web",
    period: "2024 - 2025",
    description: "Gestión de la plataforma educativa basada en WordPress, creando plugins personalizados y asegurando la integridad de los datos.",
    tags: ["WordPress", "Laravel", "MySQL"]
  },
  {
    company: "Progracademy (Remoto)",
    role: "Desarrollador Web",
    period: "2022 - 2023",
    description: "Participación en el desarrollo de una plataforma de e-learning, enfocándome en la API RESTful y la integración con el frontend de Angular.",
    tags: ["Angular", "Laravel", "MySQL"]
  },
  {
    company: "PYKRS, Secco Service, Mandaditos CR (Remoto)",
    role: "Desarrollador Móvil",
    period: "2021 - 2022",
    description: "Desarrollo de aplicaciones móviles híbridas para diversos clientes, enfocadas en servicios y logística.",
    tags: ["Ionic", "Angular"]
  }
];

const projectsData = [
  {
    title: "Sistema educativo",
    description: "Proyecto de desarrollo Full Stack de un sistema educativo en línea, incluyendo gestión de usuarios, cursos y evaluaciones. Para American elite School, Florida Global University, Universidad Politecnica Baden Powell.",
    imageUrl: "https://portal.floridaglobal.university/wp-content/uploads/2025/07/cropped-cropped-LOGO-BLANCO_FLORIDA-GLOBAL-UNIVERSITY-1536x506-1.png",
    tags: ["Wordpress", "Laravel", "MySQL", "AWS", "Dreamhost"],
    liveUrl: "https://portal.floridaglobal.university/my-account/", 
    repoUrl: "#" 
  },
  {
    title: "Cursos en línea - Progracademy",
    description: "Desarrollo de una plataforma como Full Stack de e-learning con funcionalidades completas para la gestión de cursos, usuarios y contenido multimedia.",
    imageUrl: "https://panel.progracademy.com/assets/media/logos/default.svg",
    tags: ["Angular", "Laravel", "MySQL", "AWS"],
    liveUrl: "https://panel.progracademy.com/dashboard", 
    repoUrl: "#" 
  },
  {
    title: "Automatización con Power Platform",
    description: "Implementación de un flujo de trabajo automatizado para un cliente (Grupo Estrella) que optimizó el proceso de aprobación de documentos, ahorrando horas de trabajo manual.",
    imageUrl: "https://www.northware.mx/wp-content/uploads/2022/09/northware-microsoft-power-platform.png",
    tags: ["Microsoft Power Platform", "Power Automate", "Power Apps", "Power BI", "SQL Server", "Azure"],
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
              <span className="sr-only">Open main menu</span>
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
      <SectionTitle title="Hablemos" icon={Mail} />
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


