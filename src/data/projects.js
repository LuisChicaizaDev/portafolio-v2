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
      description: "Sitio web para un estudio de cosmética coreana, diseñado desde Figma y desarrollado con HTML, Sass y JavaScript. En 2025, migré el proyecto a una arquitectura PHP modular para facilitar su mantenimiento, manteniendo URLs limpias, el SEO existente y aplicando redirecciones 301.",
      achievements: [
        "De HTML Estático → PHP Modular",
        "100% SEO Preservado (301 Redirects)",
        "URLs Limpias y Semánticas (.htaccess)"
      ],
      tags: ["HTML & Sass", "JavaScript", "PHP", "Figma"],
      links: {
        demo: "https://aerakoreanbeauty.com/",
        repo: "", // No disponible
        design: "",
      },
      image: "/assets/img/proyecto-aera.webp"
    },
    {
      title: "Aera – Página de Enlaces",
      year: "2025",
      isFeatured: true,
      studyType: "Optimización Web",
      description: "Página de enlaces rápidos desarrollada para Aera, que centraliza enlaces clave para su negocio. Diseño minimalista alineado a la identidad de la marca. El mapa de Google Maps se carga de forma diferida mediante JavaScript para optimizar el rendimiento.",
      achievements: [
        "Carga diferida (Lazy Load) de Google Maps",
        "Puntuación 99/100 en PageSpeed Insights",
        "Diseño Minimalista 'Mobile First'"
      ],
      tags: ["HTML & Sass", "JavaScript", "Figma"],
      links: {
        demo: "https://aerakoreanbeauty.com/linkbio/",
        repo: "",
        design: "",
      },
      image: "/assets/img/proyecto-aera-links.webp"
    },
    {
      title: "Mi Portafolio v1",
      year: "2024 | Actualizado 2025",
      description: "Portafolio web personal diseñado desde Figma y desarrollado con HTML, Sass, JavaScript y Bootstrap. Implementa la carga dinámica de proyectos mediante fetch y el consumo de datos desde JSON. Refleja estilo, enfoque técnico y evolución como desarrollador.",
      tags: ["HTML & Sass", "Bootstrap", "JavaScript", "Figma"],
      links: {
        demo: "https://github.com/LuisChicaizaDev/portafolio", 
        repo: "https://github.com/LuisChicaizaDev/portafolio",
      },
      image: "/assets/img/proyecto-portafolio.webp"
    }
  ],

  //  OTROS PROYECTOS 
  other_projects: [
    {
      title: "Perfil Bento Tailwind",
      year: "2025",
      tags: ["Tailwind CSS", "HTML"],
      description: "Proyecto práctico basado en el curso Tailwind CSS 4 de MiduDev, enfocado en el uso de utility classes, diseño responsive y la creación de una Bento Grid personalizada.",
      links: { 
        repo: "https://github.com/LuisChicaizaDev/perfil-bento-tailwind", 
        demo: "https://perfil-bento-tailwind.netlify.app/" 
      }
    },
    {
      title: "App Tareas React",
      year: "2025",
      tags: ["React", "CSS"],
      description: "Proyecto realizado como parte de un curso de React de freeCodeCamp, con mejoras personales como persistencia de datos en localStorage y contadores dinámicos. Aplicación para gestionar tareas, con componentes reutilizables y manejo de estado con useState.",
      links: { 
        repo: "https://github.com/LuisChicaizaDev/app-tareas-react", 
        demo: "https://app-tareas-react-sage.vercel.app/" 
      }
    },
    {
      title: "Festival de Música",
      year: "2024",
      tags: ["HTML", "Sass", "JavaScript"],
      description: "Pagina desarrollada como práctica inicial con Sass, donde apliqué variables y mixins. El proyecto fue clave para familiarizarme con un preprocesador CSS. También incorporé interactividad con JavaScript para mejorar la experiencia del usuario.",
      links: { 
        repo: "https://github.com/LuisChicaizaDev/festival-musica", 
        demo: "https://v-festival-musica.netlify.app/" 
      }
    },
    {
      title: "Blog de Café",
      year: "2023",
      tags: ["HTML", "CSS", "Grid", "Flexbox"],
      description: "Blog ficticio creado para practicar diseño responsivo con CSS Grid y Flexbox. El proyecto incluye una estructura multi-página que me permitió fortalecer mis habilidades técnicas de maquetación y diseño web adaptable.",
      links: { 
        repo: "https://github.com/LuisChicaizaDev/blog-cafe", 
        demo: "https://v1-demo-blog-cafe.netlify.app/" 
      }
    },
    /* {
      title: "Museo al Aire Libre",
      year: "2023",
      tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery"],
      description: "Primer proyecto grupal durante mi formación, enfocado en la creación de un sitio sobre esculturas urbanas en Oviedo. Participé en todo el proceso, desde la toma de fotografías hasta la implementación con HTML, CSS, Bootstrap y jQuery, aplicando Scrum como metodología ágil.",
      links: { 
        repo: "", 
        demo: "http://oviedomuseoairelibre.com/" 
      }
    } */
  ]
};