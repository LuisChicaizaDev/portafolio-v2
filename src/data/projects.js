export const PROJECTS_DATA = {
  skills: {
    lenguajes_core: ["HTML5", "CSS3", "JavaScript", "MySQL", "PHP", "Bootstrap", "Sass"],
    focus_actual: ["React", "Tailwind CSS"],
    herramientas: ["Git", "GitHub", "Figma", "Supabase", "WordPress", "VSC"]
  },
 // PROYECTOS DESTACADOS
 projects: [
    {
      title: "Fútbol App",
      year: "2025",
      description: "Aplicación para gestionar equipos de fútbol, desarrollada como experimento personal para aprender nuevas tecnologías y construir una app completa en tiempos reducidos usando IA como copiloto. Incluye panel público, panel admin, CRUD, autenticación y base de datos en Supabase.",
      tags: ["React", "Tailwind CSS", "Supabase", "Next.js", "IA-asistida"],
      links: {
        demo: "https://futbol-app-mu.vercel.app/",
        repo: "https://github.com/LuisChicaizaDev/futbol-app",
      },
      image: "/assets/img/proyecto-futbol-app.webp"
    },
    {
      title: "MR. BARBER",
      year: "2025",
      description: "Aplicación web para gestionar reservas en una barbería. Los usuarios pueden registrarse, iniciar sesión y reservar citas. Incluye un panel de administración con operaciones CRUD para crear, actualizar o eliminar servicios. Además, consume una API REST mediante Fetch API.",
      tags: ["HTML & SASS", "JavaScript", "PHP", "MySQL"],
      links: {
        demo: "https://mrbarber.free.nf",
        repo: "https://github.com/LuisChicaizaDev/mrbarber-mvc-php",
      },
      image: "/assets/img/proyecto-mr-barber.webp"
    },
    {
      title: "Desafíos Frontend Mentor",
      year: "2025",
      description: "Proyecto desarrollado para mostrar una recopilación de desafíos de Frontend Mentor, realizado con React y Tailwind CSS como parte de mi proceso de aprendizaje en un stack moderno. Incluye modo light/dark implementado con useState, useEffect y persistencia en localStorage.",
      tags: ["React", "Tailwind CSS"],
      links: {
        demo: "https://frontend-mentor-luis.vercel.app/",
        repo: "https://github.com/LuisChicaizaDev/challenges-frontend-mentor",
      },
      image: "/assets/img/proyecto-frontend-mentor.webp"
    },
    {
      title: "Boxeo Project",
      year: "2025",
      description: "Plataforma web para gestionar eventos de boxeo, con registro de usuarios, administración de veladas y control de boxeadores. Desarrollado como proyecto final de curso, implementa autenticación, validaciones fullstack y operaciones CRUD con PHP y MySQL.",
      tags: ["HTML & Sass", "JavaScript", "PHP", "MySQL"],
      links: {
        demo: "https://boxeoproject.free.nf/",
        repo: "https://github.com/LuisChicaizaDev/proyecto-daw",
      },
      image: "/assets/img/proyecto-boxeo-project.webp"
    },
    {
      title: "Aera Korean Beauty",
      year: "2024 | Actualizado 2026",
      isFeatured: true, 
      studyType: "Migración & SEO",
      description: "Sitio web diseñado en Figma y desarrollado con HTML, Sass y JavaScript. En 2025, migré el proyecto a una arquitectura PHP modular para facilitar su mantenimiento, manteniendo URLs limpias, el SEO existente y aplicando redirecciones 301.",
      achievements: [
        "De HTML Estático → PHP Modular",
        "100% SEO Preservado (301 Redirects)",
        "URLs Limpias y Semánticas (.htaccess)"
      ],
      tags: ["HTML & Sass", "JavaScript", "PHP", "Figma"],
      links: {
        demo: "https://aerakoreanbeauty.com/",
        repo: "", // No disponible
        design: "https://www.figma.com/design/84O4uO0UtmZ2DAZ1h36cXN/AERA?node-id=0-1&t=topGIvKZISVBDgKF-1",
      },
      image: "/assets/img/proyecto-aera.webp"
    },
    {
      title: "Aera – Página de Enlaces",
      year: "2025",
      isFeatured: true,
      studyType: "Optimización Web",
      description: "Alternativa a Linktree totalmente personalizada para tener el control total sobre el diseño y la velocidad. El mapa de Google Maps se implementó con carga diferida (Lazy Load) para optimizar el rendimiento.",
      achievements: [
        "Carga diferida (Lazy Load) de Google Maps",
        "Puntuación 99/100 en PageSpeed Insights",
        "Diseño Minimalista 'Mobile First'"
      ],
      tags: ["HTML & Sass", "JavaScript", "Figma"],
      links: {
        demo: "https://aerakoreanbeauty.com/linkbio/",
        repo: "",
        design: "https://www.figma.com/design/84O4uO0UtmZ2DAZ1h36cXN/AERA?node-id=0-1&t=topGIvKZISVBDgKF-1",
      },
      image: "/assets/img/proyecto-aera-links.webp"
    },
    {
      title: "Portafolio v1",
      year: "2024 | Actualizado 2025",
      description: "Mi primer ortafolio web personal diseñado desde Figma y desarrollado con HTML, Sass, JavaScript y Bootstrap. Implementa la carga dinámica de proyectos mediante fetch y el consumo de datos desde JSON. Refleja estilo, enfoque técnico y evolución como desarrollador.",
      tags: ["HTML & Sass", "Bootstrap", "JavaScript", "Figma"],
      links: {
        demo: "https://luischicaizadev.github.io/", 
        repo: "https://github.com/LuisChicaizaDev/portafolio",
      },
      image: "/assets/img/proyecto-portafolio.webp"
    }
  ],
};