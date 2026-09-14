export const PROJECTS_DATA = {
  skills: {
    lenguajes_core: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "MySQL",
      "PHP",
      "Bootstrap",
      "Sass",
    ],
    focus_actual: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vitest",
      "Testing Library",
    ],
    herramientas: ["Git", "GitHub", "Figma", "Supabase", "WordPress", "VSC"],
  },
  projects: [
    // PROYECTOS DESTACADOS
    {
      title: "Aera - CRM Personalizado",
      year: "2026",
      isFeatured: true,
      studyType: "CRM a Medida",
      description:
        "CRM desarrollado para gestionar clientes, consentimientos y métricas de negocio. Incluye funcionalidades como firma digital, integración con API REST de Setmore para la sincronización de servicios y gestión completa de datos mediante Supabase.",
      achievements: [
        "Firma digital para consentimientos",
        "Integración con API REST de Setmore",
        "Backend completo con Supabase (Auth, BD, Storage)",
        "Interfaz moderna con React + Tailwind CSS + Shadcn/ui",
      ],
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
      links: {
        demo: "https://crm.aerakoreanbeauty.com/",
        repo: "",
        design: "",
      },
      gallery: [
        {
          src: "/assets/img/aera-crm/aera-crm-1.webp",
          alt: "Dashboard principal de Aera CRM con métricas financieras",
          caption:
            "Dashboard analítico en tiempo real con KPIs operativos y financieros.",
        },
        {
          src: "/assets/img/aera-crm/aera-crm-2.webp",
          alt: "Modal de gestión y registro de clientes",
          caption:
            "Gestión centralizada: Interfaz de registro y seguimiento de clientes.",
        },
        {
          src: "/assets/img/aera-crm/aera-crm-3.webp",
          alt: "Sistema de comparación de imágenes de tratamientos",
          caption:
            "Seguimiento visual: Comparativa interactiva del antes y después de cada tratamiento.",
        },
        {
          src: "/assets/img/aera-crm/aera-crm-4.webp",
          alt: "Modal de información de consentimientos médicos",
          caption:
            "Gestión documental: Historial de consentimientos informados por paciente.",
        },
        {
          src: "/assets/img/aera-crm/aera-crm-5.webp",
          alt: "Listado de tratamientos sincronizados con Setmore",
          caption:
            "Catálogo de tratamientos sincronizado con la API de Setmore.",
        },
        {
          src: "/assets/img/aera-crm/aera-crm-6.webp",
          alt: "Interfaz de captura de firma digital para consentimientos",
          caption:
            "Firma digital integrada: Captura manuscrita para la firma del consentimiento de tratamientos.",
        },
      ],
      image: "/assets/img/proyecto-aera-crm-800.webp",
    },
    {
      title: "Aera Korean Beauty",
      year: "2024 - 2026",
      isFeatured: true,
      studyType: "Arquitectura, Performance & SEO",
      description:
        "Proyecto en evolución continua que comenzó como un sitio estático y migró a una arquitectura PHP modular y DRY. Integra la API REST de Setmore como fuente única de datos para sincronizar servicios con la web y el chatbot, utilizando OAuth2 y caché local para optimizar el rendimiento. La última fase incorporé un blog flat-file basado en Markdown y nuevas mejoras de SEO técnico.",
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
        design:
          "https://www.figma.com/design/84O4uO0UtmZ2DAZ1h36cXN/AERA?node-id=0-1&t=topGIvKZISVBDgKF-1",
      },
      image: "/assets/img/proyecto-aera-800.webp",
    },
    {
      title: "Aera – Página de Enlaces Rápidos",
      year: "2025 - 2026",
      isFeatured: true,
      studyType: "Optimización Web",
      description:
        "Alternativa a Linktree totalmente personalizada para tener el control total sobre el diseño y la velocidad. El mapa de Google Maps se implementó con carga diferida (Lazy Load) para optimizar el rendimiento.",
      achievements: [
        "Carga diferida (Lazy Load) de Google Maps",
        "Puntuación 99/100 en PageSpeed Insights",
        "Diseño Minimalista 'Mobile First'",
      ],
      tags: ["HTML & Sass", "JavaScript", "Figma"],
      links: {
        demo: "https://aerakoreanbeauty.com/linkbio/",
        repo: "",
        design:
          "https://www.figma.com/design/84O4uO0UtmZ2DAZ1h36cXN/AERA?node-id=0-1&t=topGIvKZISVBDgKF-1",
      },
      image: "/assets/img/proyecto-aera-linkbio-800.webp",
    },

    // EXPERIMENTOS CON IA APLICADA
    {
      title: "PrestApp",
      year: "2026",
      category: "ai-experiment",
      studyType: "IA aplicada · App personal · En evolución",
      description:
        "Aplicación para gestionar préstamos personales, registrar pagos y ampliaciones, mantener actualizado el saldo pendiente y exportar el historial completo del préstamo a PDF.",
      aiUsage:
        "Partí de una necesidad real mía, definí el producto y dirigí su evolución con agentes de IA, estableciendo reglas de arquitectura, negocio y UX/UI, y validando cada cambio antes de incorporarlo.",
      workflow: "Agentes → Rules → Skills → Revisión humana",
      keyDecisions: [
        "Reglas de negocio y transacciones en Firestore para evitar sobrepagos, saldos incorrectos y estados inconsistentes.",
        "Arquitectura por capas que separa interfaz, lógica de negocio y acceso a datos, con autenticación de Google y soporte offline.",
        "Evolución versionada con changelog y workflows de desarrollo, incluyendo optimizaciones de rendimiento en la exportación a PDF.",
      ],
      tags: [
        "React",
        "TypeScript",
        "Firebase",
        "Firestore",
        "Tailwind CSS",
        "PWA",
      ],
      links: {
        demo: "https://prestapp-cdfe4.web.app/",
        repo: "",
      },
      image: "/assets/img/proyecto-prestapp-1000.webp",
      mobileImage: "/assets/img/proyecto-prestapp-800.webp",
    },
    {
      title: "CAI Express",
      year: "2026",
      category: "ai-experiment",
      studyType: "IA aplicada · Integraciones · Producto real",
      description:
        "Plataforma web para solicitar y cotizar envíos de mensajería mediante un flujo guiado, cálculo de rutas y precios, geolocalización y generación de solicitudes estructuradas por WhatsApp.",
      aiUsage:
        "Definí la idea y el flujo del producto, dirigí el desarrollo con agentes de IA y tomé las decisiones clave de integración, configuración, validación y experiencia de usuario.",
      workflow: "Agentes → Rules → Skills → Revisión humana",
      keyDecisions: [
        "Integración de Google Places, LocationIQ y OpenRouteService.",
        "Configuración de Google Cloud, cuotas y control de costes.",
        "Validación del flujo y mejora de la experiencia de usuario.",
      ],
      tags: [
        "React",
        "TypeScript",
        "Google Places API",
        "OpenRouteService",
        "Tailwind CSS",
      ],
      links: {
        demo: "https://cai-express.vercel.app/solicitar-envio",
        repo: "",
      },
      image: "/assets/img/proyecto-cai-express-1000.webp",
      mobileImage: "/assets/img/proyecto-cai-express-800.webp",
    },
    {
      title: "Asistente de recordatorios con IA",
      year: "2026",
      category: "ai-experiment",
      studyType: "IA aplicada · OpenAI · App familiar",
      description:
        "Asistente personal en Telegram para crear, consultar, modificar y cancelar recordatorios utilizando lenguaje natural y recibir avisos reales en el momento programado.",
      aiUsage:
        "Definí el funcionamiento del asistente y dirigí su desarrollo con agentes de IA, integrando OpenAI para interpretar lenguaje natural y manteniendo la lógica crítica de fechas, contexto, persistencia y notificaciones bajo control del backend.",
      workflow: "Agentes → Rules → Skills → Revisión humana",
      keyDecisions: [
        "OpenAI interpreta la intención y extrae información estructurada, mientras la lógica de fechas y recordatorios se resuelve de forma determinista en TypeScript.",
        "Contexto conversacional y resolución de ambigüedades para continuar instrucciones sin que la IA tenga que asumir datos.",
        "Scheduler en Railway respaldado por Firestore y transacciones para entregar notificaciones reales y evitar estados inconsistentes.",
      ],
      tags: [
        "TypeScript",
        "Node.js",
        "OpenAI API",
        "Telegram",
        "Firestore",
        "Railway",
      ],
      links: {
        demo: "",
        repo: "",
      },
      image: "/assets/img/bot-telegram.webp",
      mobileImage: "/assets/img/bot-telegram-mobile.webp",
      gallery: [
        {
          src: "/assets/img/bot-telegram/bot-telegram-1.webp",
          alt: "Creación de un recordatorio y configuración de un aviso previo en Telegram",
          caption:
            "Creación de un recordatorio mediante lenguaje natural y actualización posterior para recibir un aviso anticipado.",
        },
        {
          src: "/assets/img/bot-telegram/bot-telegram-2.webp",
          alt: "Resolución de una hora ambigua al crear un recordatorio en Telegram",
          caption:
            "Resolución de ambigüedad: el asistente solicita confirmación antes de interpretar una hora imprecisa.",
        },
        {
          src: "/assets/img/bot-telegram/bot-telegram-3.webp",
          alt: "Consulta semanal y modificación contextual de un recordatorio en Telegram",
          caption:
            "Consulta y modificación contextual de un recordatorio, manteniendo el hilo de la conversación.",
        },
        {
          src: "/assets/img/bot-telegram/bot-telegram-4.webp",
          alt: "Creación de un recordatorio inmediato y aviso entregado por el bot de Telegram",
          caption:
            "Ejecución real del scheduler: el bot entrega el aviso en Telegram en el momento programado.",
        },
        {
          src: "/assets/img/bot-telegram/bot-telegram-5.webp",
          alt: "Notificación de recordatorio del bot de Telegram recibida en el dispositivo",
          caption:
            "Notificación real recibida en el dispositivo mediante Telegram.",
        },
      ],
    },

    // PROYECTOS ADICIONALES
    {
      title: "Gifs App",
      year: "2026",
      description:
        "Aplicación desarrollada como parte de mi especialización en React y TypeScript. Permite buscar GIFs mediante la API de Giphy. Incluye búsqueda con debounce, historial de búsquedas previas, caché en memoria con useRef para evitar peticiones repetidas y pruebas unitarias con Vitest y Testing Library.",
      tags: ["React", "TypeScript", "Axios", "Vitest", "CSS"],
      links: {
        demo: "https://find-your-gifs.netlify.app/",
        repo: "https://github.com/LuisChicaizaDev/gifs-app",
      },
      image: "/assets/img/proyecto-gifs-app-800.webp",
    },
    {
      title: "Fútbol App",
      year: "2025",
      description:
        "Proyecto personal creado para explorar un flujo de trabajo de desarrollo asistido por IA en una aplicación React. Incluye panel público y de administración, implementación de operaciones CRUD, autenticación de usuarios y gestión de datos con Supabase.",
      tags: ["React", "Tailwind CSS", "Supabase", "Next.js"],
      links: {
        demo: "https://futbol-app-mu.vercel.app/",
        repo: "https://github.com/LuisChicaizaDev/futbol-app",
      },
      image: "/assets/img/proyecto-futbol-app-800.webp",
    },
    {
      title: "MR. BARBER",
      year: "2025",
      description:
        "Aplicación web para gestionar reservas en una barbería. Los usuarios pueden registrarse, iniciar sesión y reservar citas. Incluye un panel de administración con operaciones CRUD para crear, actualizar o eliminar servicios. Además, consume una API REST mediante Fetch API.",
      tags: ["HTML & SASS", "JavaScript", "PHP", "MySQL"],
      links: {
        demo: "https://mrbarber.free.nf",
        repo: "https://github.com/LuisChicaizaDev/mrbarber-mvc-php",
      },
      image: "/assets/img/proyecto-mr-barber-800.webp",
    },
    {
      title: "Desafíos Frontend Mentor",
      year: "2025",
      description:
        "Desarrollado con React y Tailwind CSS que recopila distintos desafíos de Frontend Mentor desarrollados con React y Tailwind CSS. Incluye gestión de estado con hooks (useState, useEffect), modo light/dark y persistencia de preferencias en localStorage.",
      tags: ["React", "Tailwind CSS"],
      links: {
        demo: "https://frontend-mentor-luis.vercel.app/",
        repo: "https://github.com/LuisChicaizaDev/challenges-frontend-mentor",
      },
      image: "/assets/img/proyecto-frontend-mentor-800.webp",
    },
    {
      title: "Boxeo Project",
      year: "2025",
      description:
        "Plataforma web para gestionar eventos de boxeo, con registro de usuarios, administración de veladas y control de boxeadores. Desarrollado como Trabajo Final de Grado, implementa autenticación, validaciones fullstack y operaciones CRUD con PHP y MySQL.",
      tags: ["HTML & Sass", "JavaScript", "PHP", "MySQL"],
      links: {
        demo: "https://boxeoproject.free.nf/",
        repo: "https://github.com/LuisChicaizaDev/proyecto-daw",
      },
      image: "/assets/img/proyecto-boxeo-project-800.webp",
    },
    {
      title: "Portafolio v1",
      year: "2024 - 2025",
      description:
        "Mi primer portafolio web personal, desarrollado con HTML, Sass, JavaScript y Bootstrap. Implementé la carga dinámica de proyectos mediante Fetch y el consumo de datos desde JSON, reflejando mis bases técnicas y evolución",
      tags: ["HTML & Sass", "Bootstrap", "JavaScript", "Figma"],
      links: {
        demo: "https://luischicaizadev.github.io/",
        repo: "https://github.com/LuisChicaizaDev/portafolio",
      },
      image: "/assets/img/proyecto-portafolio-800.webp",
    },
  ],
};
