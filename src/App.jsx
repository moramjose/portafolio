/*  ===============================
    APP.JSX FULL UPGRADED VERSION
    Diseño mejorado, animaciones, glassmorphism
    NO reorganizado, todo sigue en un solo archivo.
================================= */

import React, { useState } from "react";
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
  MessageSquare,
  MessageCircle,
} from "lucide-react";
import profileAvatar from "./assets/profile.jpg";
import homeLabImg from "./assets/homelab.jpeg";
import homeLabImg2 from "./assets/homelab2.jpeg";

// Smooth scroll con compensación del header
const handleSmoothScroll = (e) => {
  e.preventDefault();
  const href = e.currentTarget.getAttribute("href");
  if (!href || !href.startsWith("#")) return;

  const targetId = href.replace("#", "");
  const el = document.getElementById(targetId);
  if (!el) return;

  const headerOffset = 80; // altura del header
  const elementPosition = el.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

/* ==============================================
   HABILIDADES, EXPERIENCIA, PROYECTOS (igual)
============================================== */

const profileData = {
  name: "José Mora",
  title:
    "Ingeniero de Software Full Stack | Arquitecto de Integraciones & Automatización",
  avatarUrl: profileAvatar,
  location: "Venezuela",
  email: "dev.moramjose@gmail.com",
  phone: "19543365964",
  displayPhone: "+1 (954) 336-5964",
  socials: {
    github: "https://github.com/moramjose",
    linkedin: "https://linkedin.com/in/devmoramjose",
  },
  summary: `
Ingeniero de Software Full Stack con más de 5 años desarrollando, integrando y automatizando ecosistemas digitales complejos. 
Me especializo en arquitectura de software, desarrollo multiplataforma y soluciones de interoperabilidad entre sistemas como Laravel, .NET, WordPress, Moodle y Power Platform.

Domino la construcción de plataformas escalables, contenerizadas y seguras con Docker, Linux y Nginx Proxy Manager. 
He liderado integraciones críticas, motores de reglas, automatización de procesos (BPA), aplicaciones móviles con Ionic, y sistemas de monitoreo con Grafana/Prometheus.

Mi enfoque es claro: soluciones sólidas, eficientes y completamente automatizadas que entreguen valor real al negocio.
  `,
  cvLink: "cv.pdf",
};

// ==============================================================
//                          HABILIDADES
// ==============================================================

const skillsData = [
  {
    category: "Lenguajes de Programación",
    icon: Code,
    items: [
      "TypeScript",
      "JavaScript",
      "PHP",
      "Java",
      "C#",
      "C++",
      "Visual Basic",
    ],
  },
  {
    category: "Desarrollo Back-end",
    icon: Settings,
    items: ["Laravel", "ASP.NET", "PHP Nativo", "C# Web API"],
  },
  {
    category: "Desarrollo Front-end",
    icon: Layers,
    items: ["Angular", "Ionic", "React", "WordPress", "HTML5", "CSS3"],
  },
  {
    category: "Bases de Datos",
    icon: Database,
    items: ["MySQL", "SQL Server", "Firebase", "Optimización de Consultas"],
  },
  {
    category: "Servicios Cloud & Hosting",
    icon: Cloud,
    items: ["AWS (EC2, S3, RDS)", "Google Cloud", "Firebase", "Dreamhost"],
  },
  {
    category: "Gestión de Contenido (CMS)",
    icon: Aperture,
    items: ["WordPress avanzado (Plugins & Themes personalizados)"],
  },
  {
    category: "Control de Versiones",
    icon: GitBranch,
    items: ["GitHub", "GitLab", "Bitbucket"],
  },
  {
    category: "Herramientas",
    icon: Star,
    items: [
      "VS Code",
      "PhpStorm",
      "Visual Studio",
      "Android Studio",
      "XCode",
      "Postman",
      "Insomnia",
      "Power Platform",
      "SMSS",
      "Grafana",
    ],
  },
  {
    category: "Soft Skills",
    icon: Brain,
    items: [
      "Resolución de Problemas",
      "Comunicación",
      "Liderazgo Técnico",
      "Aprendizaje Continuo",
      "Orientación a Resultados",
    ],
  },
];

// ==============================================================
//                     EXPERIENCIA PROFESIONAL
// ==============================================================

const experienceData = [
  {
    company: "Grupo Estrella",
    role: "Desarrollador de Automatizaciones",
    period: "2025",
    description: `
Digitalicé y optimicé procesos corporativos de gestión de personal aplicando Microsoft Power Platform. 
Diseñé una solución E2E con Power Apps, Microsoft Forms y Power Automate para capturar, validar y distribuir datos hacia SharePoint y SQL Server. 
La automatización eliminó por completo el trabajo manual y habilitó dashboards en tiempo real con Power BI.`,
    tags: [
      "Power Automate",
      "Power Apps",
      "SQL Server",
      "SharePoint",
      "Power BI",
    ],
  },
  {
    company: "Florida Global University",
    role: "Desarrollador Full Stack",
    period: "2024 - 2025",
    description: `
Arquitecté y automatizé el sistema académico (SIS) y aula virtual (LMS). 
Desarrollé un motor de reglas que eliminó la intervención manual en inscripción estudiantil. 
Integré Laravel, WordPress y Moodle mediante un plugin middleware que sincroniza datos entre 3 bases MySQL en tiempo real.`,
    tags: [
      "Laravel",
      "WordPress",
      "Moodle",
      "MySQL",
      "Integraciones",
      "Plugins",
    ],
  },
  {
    company: "American Elite School",
    role: "Desarrollador Full Stack",
    period: "2024 - 2025",
    description: `
Repliqué y adapté la arquitectura completa del sistema educativo (Laravel/WordPress/Moodle) para una nueva institución. 
Reconfiguré la lógica de negocio, motor de inscripciones y sincronización de datos. 
Construí plugins y temas personalizados para la interfaz académica.`,
    tags: ["Laravel", "WordPress", "Moodle", "Arquitectura", "Automatización"],
  },
  {
    company: "De One",
    role: "Desarrollador Full Stack",
    period: "2019 - 2025",
    description: `
Desarrollé y mantuve toda la plataforma de delivery (API, apps, paneles). 
Incluye: API Laravel, 4 apps Ionic (Cliente/Socio/Repartidor/Cocina), paneles Angular, geolocalización en tiempo real y despliegue completo en AWS. 
Administré la publicación en App Store y Play Store.`,
    tags: ["Laravel", "Ionic", "Angular", "AWS", "Geolocalización", "REST"],
  },
  {
    company: "Progracademy",
    role: "Full Stack Developer",
    period: "2022 - 2023",
    description: `
Construí el panel administrativo completo del sistema e-learning. 
Optimicé queries MySQL avanzadas, integré Microsoft 365 con Graph API (Teams y Calendar), 
y desarrollé scrapers automáticos para ingesta de contenido.`,
    tags: ["Laravel", "Angular", "Graph API", "MySQL", "Web Scraping"],
  },
  {
    company: "PYKRS (IoT)",
    role: "Desarrollador Frontend",
    period: "2021 - 2022",
    description: `
Refactoricé la arquitectura visual de una app IoT, optimizando UX, modularidad y mantenibilidad. 
Actualicé dependencias críticas mitigando vulnerabilidades.`,
    tags: ["Ionic", "SCSS", "UI/UX", "IoT"],
  },
  {
    company: "Secco Service",
    role: "Full Stack (Remoto)",
    period: "2021 - 2022",
    description: `
Mantuve y optimicé una app ionic existente, mejorando rendimiento, UI y flujos principales. 
Actualicé componentes, dependencias e infraestructura móvil.`,
    tags: ["Ionic", "Mobile", "Optimización", "UX"],
  },
  {
    company: "Mandaditos CR",
    role: "Full Stack (Remoto)",
    period: "2021 - 2022",
    description: `
Desarrollé el módulo de rastreo en tiempo real, endpoints de geolocalización, 
y flujos con cámara/GPS usando Capacitor. 
Optimicé consultas espaciales complejas.`,
    tags: ["Ionic", "Angular", "GPS", "MySQL", "REST"],
  },
];

// ==============================================================
//                          PROYECTOS
// ==============================================================

const projectsData = [
  {
    title: "Arquitectura educativa completa (FGU/AES)",
    description: `
Sistema educativo full stack basado en integración avanzada de Moodle, Laravel y WordPress. 
Incluye automatización completa del proceso académico y orquestación de datos académicos.`,
    imageUrl:
      "https://portal.floridaglobal.university/wp-content/uploads/2025/07/cropped-cropped-LOGO-BLANCO_FLORIDA-GLOBAL-UNIVERSITY-1536x506-1.png",
    tags: ["Laravel", "WordPress", "MySQL", "Moodle", "Plugins", "AWS"],
    liveUrl: "https://portal.floridaglobal.university/my-account/",
    repoUrl: "#",
  },
  {
    title: "Progracademy - Plataforma E-learning",
    description: `
Panel administrativo completo, dashboards de BI, vistas SQL optimizadas 
e integraciones con Microsoft 365 mediante Graph API (Teams/Calendar).`,
    imageUrl: "https://panel.progracademy.com/assets/media/logos/default.svg",
    tags: ["Angular", "Laravel", "Graph API", "MySQL", "AWS"],
    liveUrl: "https://panel.progracademy.com/dashboard",
    repoUrl: "#",
  },
  {
    title: "Automatización Empresarial - Grupo Estrella",
    description: `
Sistema E2E de captura, validación, distribución y análisis usando Power Apps + Power Automate + SQL Server + SharePoint + Power BI.`,
    imageUrl:
      "https://www.northware.mx/wp-content/uploads/2022/09/northware-microsoft-power-platform.png",
    tags: ["Power Apps", "Power Automate", "BI", "SQL Server"],
    liveUrl: "#",
    repoUrl: "#",
  },
];

const homelabData = {
  title: "Home Lab – Infraestructura Personal",
  description: `
Arquitectura personal diseñada para pruebas, despliegues, automatización y experimentación.
Incluye contenedores, monitoreo, túneles seguros, reverse proxy, servicios internos y entornos
de desarrollo. Me permite prototipar microservicios, practicar DevOps y simular entornos
de producción con aislamiento y seguridad.
  `,
  services: [
    "NGINX Proxy Manager (Reverse Proxy + SSL)",
    "Docker Engine + 15 contenedores activos",
    "Portainer (Gestión de contenedores)",
    "Prometheus + Grafana (Monitoreo y métricas)",
    "Proxmox / Virtualización de entornos",
    "Túneles Cloudflare Zero Trust",
    "Métricas avanzadas de red y hardware",
    "Bases de datos aisladas (MySQL, Redis)",
    "Servicios internos en alta disponibilidad",
  ],
  hardware: [
    "Servidor 16GB RAM / i7 / 8 núcleos",
    "SSD 1TB para contenedores",
    "Red segmentada y firewall",
    "Backups automáticos y snapshots",
  ],
  imageUrl: homeLabImg,
  imageUrl2: homeLabImg2,
};

// ==============================================================
//                           EDUCACIÓN
// ==============================================================

const educationData = [
  {
    institution: "Universidad Bicentenaria de Aragua",
    degree: "Ingeniería de Sistemas (Mención IA)",
    period: "En curso",
  },
  {
    institution: "Colegio Dr. Gustavo H. Machado",
    degree: "Educación Secundaria",
    period: "Graduado",
  },
  {
    institution: "Udemy",
    degree: "E-commerce Fullstack con Laravel & Angular",
    period: "Certificado",
  },
  {
    institution: "Udemy",
    degree: "Net Core & Ionic",
    period: "Certificado",
  },
];

/* ============================================================
    ANIMACIONES Y ESTILOS MEJORADOS (aplicados inline)
============================================================ */

const fadeIn = "animate-[fadeIn_0.8s_ease-in-out]";
const fadeInUp = "animate-[fadeInUp_0.9s_ease-out]";
const cardHover =
  "transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-500/20 hover:-translate-y-1";
const glowingBorder =
  "border border-gray-700 hover:border-blue-500/60 transition-all duration-300";
const glass = "bg-gray-800/80 backdrop-blur-lg";

/* =======================
        HEADER
======================== */

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { label: "Sobre Mí", href: "#about" },
    { label: "Habilidades", href: "#skills" },
    { label: "Experiencia", href: "#experience" },
    { label: "Proyectos", href: "#projects" },
    { label: "Home Lab", href: "#homelab" },
    { label: "Educación", href: "#education" },
    { label: "Contacto", href: "#contact" },
  ];

  return (
    <nav className="bg-gray-900/70 backdrop-blur-md border-b border-gray-700/50 fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <a className="text-white text-xl font-bold tracking-wide">
          José<span className="text-blue-400">Mora</span>
        </a>

        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={handleSmoothScroll}
              className="text-gray-300 hover:text-blue-400 transition-all duration-200 hover:scale-105"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-blue-400"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900/90 px-4 pb-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                handleSmoothScroll(e);
                setIsOpen(false); // cerrar menú al hacer click
              }}
              className="block text-gray-300 hover:text-blue-400"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

/* ==========================
        HERO
========================== */

const Hero = () => (
  <section
    id="home"
    className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen flex items-center"
  >
    <div className="max-w-7xl mx-auto px-4 text-center">
      <img
        src={profileData.avatarUrl}
        className="w-36 h-36 md:w-40 md:h-40 rounded-full mx-auto mb-6 border-4 border-blue-500 shadow-lg shadow-blue-500/30 animate-[float_4s_ease-in-out_infinite]"
      />

      <h1
        className={`text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300 ${fadeIn}`}
      >
        {profileData.name}
      </h1>

      <p className={`text-2xl md:text-3xl text-gray-300 mt-3 ${fadeInUp}`}>
        {profileData.title}
      </p>

      <div className="flex justify-center mt-8 space-x-6">
        {[
          { icon: Github, url: profileData.socials.github },
          { icon: Linkedin, url: profileData.socials.linkedin },
          { icon: Mail, url: `mailto:${profileData.email}` },
        ].map((item, i) => (
          <a
            key={i}
            href={item.url}
            target="_blank"
            className="text-gray-300 hover:text-blue-400 transition-transform hover:scale-125"
          >
            <item.icon size={32} />
          </a>
        ))}
      </div>

      <a
        href={profileData.cvLink}
        target="_blank"
        className="inline-flex items-center bg-blue-600 hover:bg-blue-700 mt-10 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-blue-500/40 transition-all hover:-translate-y-1"
      >
        <Download className="mr-2" /> Descargar CV
      </a>
    </div>
  </section>
);

/* ==========================
      SECCIÓN GENÉRICA
========================== */

const SectionTitle = ({ title, icon: Icon }) => (
  <div className="flex items-center justify-center mb-12">
    <Icon className="text-blue-400 w-8 h-8 mr-3" />
    <h2 className="text-4xl font-bold text-white tracking-wide">{title}</h2>
  </div>
);

/* =====================
      ABOUT
===================== */

const About = () => (
  <section id="about" className="py-20 bg-gray-800">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <SectionTitle title="Sobre Mí" icon={Brain} />
      <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
        {profileData.summary}
      </p>
    </div>
  </section>
);

/* ==========================
      SKILLS
========================== */

const SkillBadge = ({ children }) => (
  <span className="inline-block bg-gray-700/70 backdrop-blur-md px-4 py-2 rounded-full text-sm text-gray-200 hover:bg-blue-500 hover:text-white transition-all duration-200 shadow-md">
    {children}
  </span>
);

const Skills = () => (
  <section id="skills" className="py-20 bg-gray-900">
    <div className="max-w-7xl mx-auto px-4">
      <SectionTitle title="Habilidades Técnicas" icon={Code} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((category) => (
          <div
            key={category.category}
            className={`p-6 rounded-xl shadow-lg ${glass} ${glowingBorder} ${cardHover}`}
          >
            <h3 className="text-xl text-white font-semibold flex items-center mb-4">
              <category.icon className="text-blue-400 w-6 h-6 mr-3" />
              {category.category}
            </h3>

            <div className="flex flex-wrap gap-2">
              {category.items.map((skill) => (
                <SkillBadge key={skill}>{skill}</SkillBadge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ==========================
    EXPERIENCE (Timeline mejorado)
========================== */

const Experience = () => (
  <section id="experience" className="py-20 bg-gray-800">
    <div className="max-w-4xl mx-auto px-4">
      <SectionTitle title="Experiencia Profesional" icon={Briefcase} />

      <div className="relative border-l-2 border-blue-500/40 ml-4">
        {experienceData.map((job, index) => (
          <div key={index} className="mt-10 ml-10 relative">
            <span className="absolute w-6 h-6 bg-blue-600 rounded-full -left-14 border-4 border-gray-800 shadow-lg shadow-blue-500/30" />

            <div
              className={`p-6 rounded-xl ${glass} ${glowingBorder} ${cardHover}`}
            >
              <h3 className="text-2xl text-white font-bold">{job.role}</h3>
              <p className="text-blue-400 font-semibold">{job.period}</p>
              <p className="text-gray-300 font-medium mt-1">{job.company}</p>

              <p className="text-gray-400 mt-3 whitespace-pre-line">
                {job.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-700/70 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold"
                  >
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

/* ==========================
      PROJECTS
========================== */

const ProjectCard = ({ title, description, imageUrl, tags, liveUrl, repoUrl }) => {
  const isLiveDisabled = !liveUrl || liveUrl === "#";
  const isRepoDisabled = !repoUrl || repoUrl === "#";

  const baseBtn =
    "flex-1 py-2 rounded-md text-center transition-all font-semibold";

  const enabledBtn =
    "bg-blue-600 hover:bg-blue-700 text-white cursor-pointer";

  const disabledBtn =
    "bg-gray-700 text-gray-400 cursor-not-allowed opacity-50";

  return (
    <div className={`rounded-xl bg-gray-800/70 backdrop-blur-lg border border-gray-700 shadow-xl overflow-hidden transition-all duration-300 hover:scale-[1.02]`}>
      <img
        src={imageUrl}
        className="h-48 w-full object-cover transition-transform duration-300 hover:scale-110"
      />

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-white text-2xl font-bold">{title}</h3>
        <p className="text-gray-400 mt-2 flex-grow">{description}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map(tag => (
            <span
              key={tag}
              className="bg-gray-700/70 px-3 py-1 rounded-full text-blue-300 text-xs font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex space-x-4">
          {/* Botón DEMO */}
          <a
            href={isLiveDisabled ? undefined : liveUrl}
            target="_blank"
            className={`${baseBtn} ${isLiveDisabled ? disabledBtn : enabledBtn}`}
            onClick={e => isLiveDisabled && e.preventDefault()}
          >
            Demo
          </a>

          {/* Botón CÓDIGO */}
          <a
            href={isRepoDisabled ? undefined : repoUrl}
            target="_blank"
            className={`${baseBtn} ${isRepoDisabled ? disabledBtn : enabledBtn}`}
            onClick={e => isRepoDisabled && e.preventDefault()}
          >
            Código
          </a>
        </div>
      </div>
    </div>
  );
};


const Projects = () => (
  <section id="projects" className="py-20 bg-gray-900">
    <div className="max-w-7xl mx-auto px-4">
      <SectionTitle title="Proyectos Destacados" icon={Award} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  </section>
);

const HomeLabSection = () => (
  <section id="homelab" className="py-20 bg-gray-900">
    <div className="max-w-6xl mx-auto px-4">
      <SectionTitle title="Home Lab & Infraestructura" icon={Cloud} />

      <div className="rounded-xl bg-gray-800/70 backdrop-blur-md border border-gray-700 shadow-xl p-8 flex flex-col lg:flex-row gap-10">
        {/* Imagen */}
        <div className="flex-1">
          <img
            src={homelabData.imageUrl2}
            className="w-full h-72 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            alt="Home Lab"
            style={{ marginBottom: '1rem', height: '25rem' }}
          />
          <img
            src={homelabData.imageUrl}
            className="w-full h-72 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            alt="Home Lab"
            style={{ height: '25rem' }}
          />
        </div>

        {/* Descripción */}
        <div className="flex-1">
          <h3 className="text-3xl font-bold text-white mb-4">
            {homelabData.title}
          </h3>
          <p className="text-gray-300 mb-6 whitespace-pre-line">
            {homelabData.description}
          </p>

          {/* Servicios */}
          <h4 className="text-xl font-semibold text-blue-400 mb-3">
            Servicios Implementados
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
            {homelabData.services.map((service, i) => (
              <li key={i} className="text-gray-300 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                {service}
              </li>
            ))}
          </ul>

          {/* Hardware */}
          <h4 className="text-xl font-semibold text-blue-400 mb-3">Hardware</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {homelabData.hardware.map((hw, i) => (
              <li key={i} className="text-gray-300 flex items-center">
                <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                {hw}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

/* ==========================
     EDUCATION
========================== */

const Education = () => (
  <section id="education" className="py-20 bg-gray-800">
    <div className="max-w-4xl mx-auto px-4">
      <SectionTitle title="Educación & Certificaciones" icon={BookOpen} />

      <div className="border-l-2 border-blue-500/40 ml-6">
        {educationData.map((edu, index) => (
          <div key={index} className="ml-10 relative mt-10">
            <span className="absolute w-6 h-6 bg-blue-600 rounded-full -left-14 border-4 border-gray-800 shadow-lg shadow-blue-500/30" />

            <div
              className={`p-6 rounded-xl ${glass} ${glowingBorder} ${cardHover}`}
            >
              <h3 className="text-xl text-white font-semibold">{edu.degree}</h3>
              <p className="text-blue-400 font-medium">{edu.period}</p>
              <p className="text-gray-300 font-medium mt-1">
                {edu.institution}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ==========================
      CONTACT
========================== */

const Contact = () => (
  <section id="contact" className="py-20 bg-gray-900">
    <div className="max-w-3xl mx-auto px-4 text-center">
      <SectionTitle title="Hablemos" icon={MessageSquare} />

      <p className="text-gray-300 text-lg mb-8">
        Estoy disponible para nuevas oportunidades y proyectos.
      </p>

      <div className="flex flex-col items-center space-y-4">
        <a
          href={`mailto:${profileData.email}`}
          className="flex items-center bg-gray-800 px-6 py-3 rounded-lg text-white hover:bg-blue-600 transition-all shadow-lg"
        >
          <Mail className="mr-3" />
          {profileData.email}
        </a>

        <a
          href={`https://wa.me/${profileData.phone}`}
          target="_blank"
          className="flex items-center bg-gray-800 px-6 py-3 rounded-lg text-white shadow-lg hover:bg-green-600 transition-all"
        >
          <MessageCircle className="mr-3 text-green-400" />
          {profileData.displayPhone || profileData.phone}
        </a>

        <div className="flex items-center bg-gray-800 px-6 py-3 rounded-lg text-white shadow-lg">
          <MapPin className="mr-3" />
          {profileData.location}
        </div>
      </div>
    </div>
  </section>
);

/* ==========================
      FOOTER
========================== */

const Footer = () => (
  <footer className="bg-gray-950 py-8">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href={profileData.socials.github}
          className="text-gray-400 hover:text-blue-400 transition-all"
        >
          <Github size={28} />
        </a>
        <a
          href={profileData.socials.linkedin}
          className="text-gray-400 hover:text-blue-400 transition-all"
        >
          <Linkedin size={28} />
        </a>
        <a
          href={`mailto:${profileData.email}`}
          className="text-gray-400 hover:text-blue-400 transition-all"
        >
          <Mail size={28} />
        </a>
      </div>
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} {profileData.name} — Portafolio construido
        con React & Tailwind CSS.
      </p>
    </div>
  </footer>
);

/* ==========================
      APP WRAPPER
========================== */

export default function App() {
  return (
    <div className="bg-gray-900 font-sans">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <HomeLabSection />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
