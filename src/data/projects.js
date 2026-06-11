export const PROJECTS_DATA = {
  skills: {
    lenguajes_core: ["HTML5", "CSS3", "JavaScript", "MySQL", "PHP", "Bootstrap", "Sass"],
    focus_actual: ["React", "Tailwind CSS"],
    herramientas: ["Git", "GitHub", "Figma", "Supabase", "WordPress", "VSC"]
  },
  projects: [
    // PROYECTOS DESTACADOS
    {
      title: "Aera - CRM Personalizado",
      year: "2026",
      isFeatured: true,
      studyType: "CRM a Medida",
      description: "Aplicación web desarrollada para la gestión de clientes, consentimientos y métricas de negocio. Incluye funcionalidades como firma digital, integración con API REST de Setmore para la sincronización de servicios y gestión completa de datos mediante Supabase.",
      achievements: [
        "Firma digital para consentimientos",
        "Integración con API REST de Setmore",
        "Backend completo con Supabase (Auth, BD, Storage)",
        "Interfaz moderna con React + Tailwind CSS + Shadcn/ui",
      ],
      tags: ["React", "Next.js", "Tailwind CSS", "Supabase", "Shadcn/ui"],
      links: {
        demo: "https://crm.aerakoreanbeauty.com/",
        repo: "",
        design: "",
      },
      gallery: [
        {
          src: "/assets/img/aera-crm/aera-crm-1.webp",
          alt: "Dashboard principal de Aera CRM con métricas financieras",
          caption: "Dashboard analítico en tiempo real con KPIs operativos y financieros."
        },
        {
          src: "/assets/img/aera-crm/aera-crm-2.webp",
          alt: "Modal de gestión y registro de clientes",
          caption: "Gestión centralizada: Interfaz de registro y seguimiento de clientes."
        },
        {
          src: "/assets/img/aera-crm/aera-crm-3.webp",
          alt: "Sistema de comparación de imágenes de tratamientos",
          caption: "Seguimiento visual: Comparativa interactiva del antes y después de cada tratamiento."
        },
        {
          src: "/assets/img/aera-crm/aera-crm-4.webp",
          alt: "Modal de información de consentimientos médicos",
          caption: "Gestión documental: Historial de consentimientos informados por paciente."
        },
        {
          src: "/assets/img/aera-crm/aera-crm-5.webp",
          alt: "Listado de tratamientos sincronizados con Setmore",
          caption: "Catálogo de tratamientos sincronizado con la API de Setmore."
        },
        {
          src: "/assets/img/aera-crm/aera-crm-6.webp",
          alt: "Interfaz de captura de firma digital para consentimientos",
          caption: "Firma digital integrada: Captura manuscrita para la firma del consentimiento de tratamientos."
        }
      ],
      image: "/assets/img/proyecto-aera-crm-800.webp"
    },
    {
      title: "Aera Korean Beauty",
      year: "2024 - 2026",
      isFeatured: true, 
      studyType: "Arquitectura, Performance & SEO",
      description: "Proyecto en evolución continua que comenzó como un sitio estático y migró a una arquitectura PHP modular y DRY. Integra la API REST de Setmore como fuente única de datos para sincronizar servicios con la web y el chatbot, utilizando OAuth2 y caché local para optimizar el rendimiento. La última fase incorporé un blog flat-file basado en Markdown y nuevas mejoras de SEO técnico.",
      achievements: [
        "Arquitectura PHP modular y DRY con templates reutilizables",
        "Integración con API REST de Setmore, OAuth2 y caché local",
        "Blog flat-file con Markdown, metadatos dinámicos y Parsedown",
        "SEO técnico con redirecciones 301, JSON-LD y sitemap dinámico",
      ],
      tags: ["PHP", "JavaScript", "Sass", "REST API", "Markdown"],
      links: {
        demo: "https://aerakoreanbeauty.com/",
        repo: "", 
        design: "https://www.figma.com/design/84O4uO0UtmZ2DAZ1h36cXN/AERA?node-id=0-1&t=topGIvKZISVBDgKF-1",
      },
      image: "/assets/img/proyecto-aera-800.webp"
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
      image: "/assets/img/proyecto-aera-linkbio-800.webp"
    },

    // PROYECTOS ADICIONALES
    {
      title: "Fútbol App",
      year: "2025",
      description: "Aplicación web desarrollada con React para la gestión de equipos de fútbol. Incluye panel público y de administración, implementación de operaciones CRUD, autenticación de usuarios y gestión de datos con Supabase.",
      tags: ["React", "Tailwind CSS", "Supabase", "Next.js"],
      links: {
        demo: "https://futbol-app-mu.vercel.app/",
        repo: "https://github.com/LuisChicaizaDev/futbol-app",
      },
      image: "/assets/img/proyecto-futbol-app-800.webp"
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
      image: "/assets/img/proyecto-mr-barber-800.webp"
    },
    {
      title: "Desafíos Frontend Mentor",
      year: "2025",
      description: "Aplicación desarrollada con React y Tailwind CSS que recopila múltiples interfaces interactivas. Incluye gestión de estado con hooks (useState, useEffect), modo light/dark y persistencia de preferencias en localStorage.",
      tags: ["React", "Tailwind CSS"],
      links: {
        demo: "https://frontend-mentor-luis.vercel.app/",
        repo: "https://github.com/LuisChicaizaDev/challenges-frontend-mentor",
      },
      image: "/assets/img/proyecto-frontend-mentor-800.webp"
    },
    {
      title: "Boxeo Project",
      year: "2025",
      description: "Plataforma web para gestionar eventos de boxeo, con registro de usuarios, administración de veladas y control de boxeadores. Desarrollado como Trabajo Final de Grado, implementa autenticación, validaciones fullstack y operaciones CRUD con PHP y MySQL.",
      tags: ["HTML & Sass", "JavaScript", "PHP", "MySQL"],
      links: {
        demo: "https://boxeoproject.free.nf/",
        repo: "https://github.com/LuisChicaizaDev/proyecto-daw",
      },
      image: "/assets/img/proyecto-boxeo-project-800.webp"
    },
    {
      title: "Portafolio v1",
      year: "2024 - 2025",
      description: "Mi primer portafolio web personal, desarrollado con HTML, Sass, JavaScript y Bootstrap. Implementé la carga dinámica de proyectos mediante Fetch y el consumo de datos desde JSON, reflejando mis bases técnicas y evolución",
      tags: ["HTML & Sass", "Bootstrap", "JavaScript", "Figma"],
      links: {
        demo: "https://luischicaizadev.github.io/", 
        repo: "https://github.com/LuisChicaizaDev/portafolio",
      },
      image: "/assets/img/proyecto-portafolio-800.webp"
    }
  ],
};
