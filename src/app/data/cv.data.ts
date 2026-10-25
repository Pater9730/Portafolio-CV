export const CV = {
  name: 'Arnovil Paternina',
  roles: ['Desarrollador Full Stack .NET', 'Backend con ASP.NET Core', 'Angular + TypeScript', 'APIs REST seguras'],
  city: 'Bogotá, Colombia',
  email: 'juniorpaternina8@gmail.com',
  phone: '320 574 3924',
  github: 'https://github.com/Pater9730',
  linkedin: 'https://www.linkedin.com/in/arnovil-paternina-25294a398/',
  profile: 'Desarrollador Full Stack .NET orientado al diseño y desarrollo de aplicaciones web completas con C#, ASP.NET Core, Angular, TypeScript y SQL Server. Construyo APIs REST seguras con arquitectura en capas y principios SOLID, e integro servicios externos. Busco soluciones end-to-end de alta calidad: seguridad, rendimiento, escalabilidad y mantenibilidad.',
  stats: [
    { value: '2+', label: 'años de experiencia' },
    { value: '2', label: 'empresas' },
    { value: '3', label: 'proyectos en GitHub' },
  ],
  skills: [
    { icon: '💻', title: 'Lenguajes', items: ['C#', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'] },
    { icon: '⚙️', title: 'Backend', items: ['.NET', 'ASP.NET Core', 'Web API', 'Minimal APIs', 'REST', 'EF Core'] },
    { icon: '🎨', title: 'Frontend', items: ['Angular', 'Componentes', 'Servicios', 'DI', 'Routing', 'Formularios', 'RxJS'] },
    { icon: '🏗️', title: 'Arquitectura', items: ['Capas', 'SOLID', 'Clean Architecture', 'DDD', 'CQRS'] },
    { icon: '🔐', title: 'Seguridad', items: ['JWT', 'ASP.NET Core Identity', 'Autenticación', 'Autorización', 'Refresh Tokens'] },
    { icon: '🗄️', title: 'Bases de datos', items: ['SQL Server', 'Azure SQL', 'SQL', 'EF Core', 'Dapper', 'LINQ', 'Migraciones'] },
    { icon: '🔗', title: 'Integración', items: ['SignalR', 'RabbitMQ', 'Firebase FCM', 'SAP'] },
    { icon: '🧰', title: 'Herramientas y calidad', items: ['Git', 'GitHub', 'Postman', 'Swagger', 'FluentValidation', 'xUnit'] },
    { icon: '☁️', title: 'Cloud y DevOps', items: ['Azure', 'Azure App Service', 'Azure SQL', 'Docker'] },
    { icon: '🤝', title: 'Metodologías', items: ['Scrum', 'Jira'] },
  ],
  experience: [
    {
      company: 'Comercial Allan S.A.S.', role: 'Desarrollador Back-End', dates: 'Feb 2026 – Jul 2026',
      highlights: [
        'Diseñé y desarrollé de extremo a extremo el backend del módulo de Comunicaciones, canal oficial de Popsy hacia toda su red nacional de puntos de venta.',
        'Implementé segmentación jerárquica dinámica (país  región  distrito  punto de venta  rol  área  marca), permitiendo dirigir un mismocontenido desde un único punto de venta hasta la totalidad de la compañía',
        'Construí funcionalidades de interacción dentro del módulo de Comunicaciones, incluyendo banners con ordenamiento tipo carrusel, reacciones y comentarios con hilos.',
        'Automaticé la activación y expiración de contenido mediante hosted services, e integré notificaciones push (firebase) e in-app con eventos entiempo real via SignalR para garantizar entrega y visibilidad inmediata.',
        'Desarrollé endpoints de agregación jerárquica de horas trabajadas (Región  Distrito  Punto de venta) e incorporé un nuevo rol organizacional(Gerente Regional) a la cadena de aprobación existente',
        'Implementación de soluciones siguiendo arquitectura en capas y principios SOLID para garantizar mantenibilidad y desacoplamiento del sistema.',
        'Integración de servicios externos (CDS provenientes de SAP) dentro de distintos flujos de la aplicación para procesamiento y sincronización de datos.',
        'Análisis y resolución de incidencias en diferentes módulos de la aplicación, identificando causas raíz y aplicando soluciones.'
      ],
    },
    {
      company: 'Soft Simulation S.A.S', role: 'Desarrollador Junior .NET', dates: 'Ene 2024 – Dic 2025',
      highlights: [
        'Desarrollé aplicaciones web utilizando ASP.NET Core y Angular, integrando frontend y backend mediante APIs REST y aplicando separación de responsabilidades',
        'Implementé funcionalidades backend con Entity Framework Core, SQL Server y JWT, incluyendo validaciones, manejo global de excepciones y autenticación segura.',
        'Participé en el desarrollo, refactorización y despliegue de soluciones web en Azure App Service, mejorando la mantenibilidad de módulosexistentes y gestionando configuraciones de entorno y conexión con Azure SQL Database.',
        'Implementación de arquitectura por capas y principios SOLID para mejorar la organización, mantenibilidad y escalabilidad del código.',
        'Desarrollo y documentación de endpoints REST con Swagger y pruebas de APIs mediante Postman para validar funcionalidades e integración entre servicios.'
      ],
    },
  ],
  strengths: [
    { icon: "🌐", title: "Diseño de APIs REST", text: "APIs con ASP.NET Core Web API y Minimal APIs, documentadas con Swagger/OpenAPI y validadas con FluentValidation." },
    { icon: "🔐", title: "Autenticación y autorización", text: "JWT, ASP.NET Core Identity y refresh tokens para proteger los endpoints y controlar el acceso." },
    { icon: "🔌", title: "Integración de APIs externas", text: "Consumo y sincronización de servicios externos dentro de los flujos de la aplicación." },
    { icon: "🗄️", title: "SQL y modelado relacional", text: "SQL Server y Azure SQL con EF Core, Dapper, LINQ y migraciones." },
    { icon: "🏗️", title: "Arquitectura por capas, Clean Architecture y DDD", text: "Separación de responsabilidades con SOLID, diseño guiado por el dominio (DDD), Controller → Service → Repository y CQRS con MediatR." },
    { icon: "🅰️", title: "Desarrollo de aplicaciones Angular", text: "Componentes, servicios, routing, formularios y RxJS conectados a APIs REST." },
    { icon: "🐳", title: "Dockerización", text: "Empaquetado de aplicaciones en contenedores Docker para entornos consistentes." },
    { icon: "☁️", title: "Despliegue en Azure", text: "Publicación en Azure App Service con configuración de entornos y conexión a Azure SQL Database." },
    { icon: "🧩", title: "Integraciones SAP", text: "Integración de servicios CDS provenientes de SAP para sincronizar y procesar datos." },
  ],
  projects: [
    { title: 'Sistema de votación', url: 'https://github.com/Pater9730/Proyecto-Votacion', text: 'API REST para gestionar candidatos, registrar votos y consultar resultados con Clean Architecture y JWT.', tags: ['.NET 8', 'EF Core', 'JWT', 'Clean Arch'] },
    { title: 'Gestor de Pedidos', url: 'https://github.com/Pater9730/Proyecto-Gestor-Pedidos', text: 'API RESTful de Personas y Pedidos con Identity + JWT + Refresh Tokens, SOLID y manejo global de excepciones.', tags: ['ASP.NET Core', 'Identity', 'Refresh Tokens', 'SOLID'] },
    { title: 'Seguimiento de gastos', url: 'https://github.com/Pater9730/Proyecto-Seguimiento-de-gastos', text: 'API para registrar y analizar gastos personales con arquitectura limpia y CQRS.', tags: ['.NET 8', 'Dapper', 'CQRS', 'MediatR'] },
  ],
  education: [
    { degree: 'Ingeniería de Software', school: 'Corporación Unificada Nacional', period: '2026 – Cursando (virtual)' },
    { degree: 'Ingeniería de Sistemas', school: 'Universidad del Magdalena', period: '5 semestres · 2018–2020' },
  ],
  courses: ['Máster ASP.NET Core Identity', 'Curso Completo ASP.NET Core', 'Arquitectura Empresarial con .NET', 'SQL: De Principiante a Avanzado', 'Microsoft Azure for .NET Developers', 'Angular: De cero a experto'],
};
