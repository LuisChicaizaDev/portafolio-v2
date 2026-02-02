export const PROJECTS_DATA = {
  skills: {
    lenguajes_core: ["HTML5", "CSS3", "JavaScript", "MySQL", "PHP", "Bootstrap", "Sass"],
    focus_actual: ["React", "Tailwind CSS"],
    herramientas: ["Git", "GitHub", "Figma", "WordPress", "VSC"]
  },
  projects: {
    featured: [
    {
        category: "frontend",
        img: { 
        src : "/assets/img/proyecto-aera.webp",
        alt: "Página de Inicio de Aera Korean Beauty",
        title: "Aera Korean Beauty"
        },
        title: "Aera Korean Beauty",
        year: "2024 | Upd 2025",
        tags: ["HTML & Sass", "JavaScript", "Figma", "PHP Legacy", "SEO Técnico"],
        description: "Sitio web para un estudio de cosmética. En 2025 realicé una <strong>migración técnica a PHP modular</strong> para mejorar mantenimiento sin framework.",
        isHighlight: true,
        technical_highlights: [
        "De HTML Estático → PHP Modular",
        "100% SEO Preservado (301 Redirects)",
        "Urls Limpias & Semánticas"
        ],
        links: {
        figma: "https://www.figma.com/design/84O4uO0UtmZ2DAZ1h36cXN/AERA",
        website: "https://aerakoreanbeauty.com/"
        }
    },
    {
        category: "fullstack",
        img: { 
        src : "/assets/img/proyecto-futbol-app.webp",
        alt: "Página pública de Fútbol App",
        title: "Fútbol App"
        },
        title: "Fútbol App",
        year: "2025",
        tags: ["React", "Tailwind CSS", "Supabase", "Next.js", "IA-asistida"],
        description: "Aplicación para <strong>gestionar equipos de fútbol</strong>. Experimento personal de desarrollo acelerado con IA Copilot. Panel público, admin y CRUD completo.",
        links: {
        github: "https://github.com/LuisChicaizaDev/futbol-app",
        demo: "https://futbol-app-mu.vercel.app/"
        }
    },
    {
        category: "fullstack",
        img: { 
        src : "/assets/img/proyecto-mr-barber.webp",
        alt: "Página de login de MR. BARBER",
        title: "MR. BARBER"
        },
        title: "MR. BARBER",
        year: "2025",
        tags: ["HTML & SASS", "JavaScript", "PHP MVC", "MySQL"],
        description: "Aplicación web para <strong>gestionar reservas</strong>. Panel de administración con operaciones CRUD. Arquitectura MVC manual y API REST propia.",
        links: {
        github: "https://github.com/LuisChicaizaDev/mrbarber-mvc-php",
        demo: "https://mrbarber.free.nf"
        }
    }
    ],
    others: [
    {
        category: "frontend",
        title: "Desafíos Frontend Mentor",
        year: "2025",
        tags: ["React", "Tailwind CSS", "Pixel-Perfect"],
        description: "Recopilación de desafíos de UI complejos. Implementación de <strong>modo light/dark</strong> y enfoque en buenas prácticas.",
        links: {
        github: "https://github.com/LuisChicaizaDev/challenges-frontend-mentor",
        demo: "https://frontend-mentor-luis.vercel.app/"
        }
    },
    {
        category: "fullstack",
        title: "Boxeo Project (FP)",
        year: "2025",
        tags: ["HTML & Sass", "JavaScript", "PHP", "MySQL"],
        description: "Plataforma para <strong>gestionar eventos de boxeo</strong>. Proyecto final de FP con autenticación segura.",
        links: {
        github: "https://github.com/LuisChicaizaDev/proyecto-daw",
        demo: "https://boxeoproject.free.nf/"
        }
    },
    {
        category: "frontend",
        title: "Anexa Luxury Cars",
        year: "2024",
        tags: ["WordPress", "Custom PHP", "JavaScript"],
        description: "Desarrollo híbrido para concesionario. Personalización avanzada de plantilla mediante inyección de código.",
        links: {
        website: "https://anexaluxurycars.com/"
        }
    },
    {
        category: "frontend",
        title: "Portafolio V1",
        year: "2024",
        tags: ["HTML & Sass", "Bootstrap", "JSON API"],
        description: "Versión anterior del portafolio. Carga dinámica de proyectos mediante consumo de datos JSON.",
        links: {
        github: "https://github.com/LuisChicaizaDev/portafolio"
        }
    }
    ]
  }
};