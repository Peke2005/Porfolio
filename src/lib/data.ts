export const personalInfo = {
  name: 'Pol Carvajal',
  fullName: 'Pol Carvajal Garcia',
  role: 'Desarrollador Web y Multiplataforma',
  location: 'Canyelles, Barcelona',
  address: 'Carrer la coma Nº21',
  phone: '(+34) 684 17 90 67',
  email: 'polcarbajalgarcia@gmail.com',
  github: 'https://github.com/Peke2005',
  linkedin: 'https://www.linkedin.com/in/pol-carvajal-garcia-332a1a225/',
  portfolio: 'https://peke2005.github.io/Portfolio',
  currentStudy: 'Máster en Inteligencia Artificial y Big Data (Stucom | 2026 – 2027)',
  githubUsername: 'Peke2005',
  avatarUrl: 'https://avatars.githubusercontent.com/u/127119844?v=4',
  publicRepos: 24,
  codingSince: 2021,
  languages: [
    { name: 'Castellano', level: 'Nativo' },
    { name: 'Catalán', level: 'Nativo' },
    { name: 'Inglés', level: 'Básico' },
  ],
  softSkills: [
    'Trabajo en equipo',
    'Constancia y Responsabilidad',
    'Empatía',
    'Compromiso',
    'Actitud Positiva',
  ],
} as const;

export const aboutText = {
  intro: `Me apasiona todo lo relacionado con la informática, especialmente la programación y el diseño de páginas web y aplicaciones multiplataforma. Cuento con una sólida trayectoria formativa técnica y experiencia práctica tanto en desarrollo de software como en soporte y administración de sistemas.`,
  detail: `He completado con éxito la doble titulación superior en Desarrollo de Aplicaciones Multiplataforma (DAM) y Desarrollo de Aplicaciones Web (DAW), así como el ciclo medio en Sistemas Microinformáticos y Redes (SMR). He acumulado experiencia profesional en entornos educativos e internacionales como la Universidad UPC Vilanova, prácticas Erasmus en Florencia (Italia) y Salesians Rocafort.`,
  current: `Actualmente estoy cursando el Máster en Inteligencia Artificial y Big Data en Stucom (2026 – 2027), ampliando mis competencias hacia el Machine Learning, análisis masivo de datos y soluciones de software inteligentes.`,
};

export interface Skill {
  name: string;
  icon?: string;
  lucideIcon?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Front-end & Web',
    icon: 'Layout',
    skills: [
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    ],
  },
  {
    title: 'Back-end & Móvil',
    icon: 'Server',
    skills: [
      { name: 'PHP (Laravel / Symfony)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Kotlin (Android)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
      { name: 'Dart (Flutter)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    ],
  },
  {
    title: 'Bases de Datos & Herramientas',
    icon: 'Database',
    skills: [
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
      { name: 'Redes (Cisco)', lucideIcon: 'Network' },
      { name: 'Mantenimiento Hardware', lucideIcon: 'Cpu' },
    ],
  },
];

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  tasks: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: 'mainmemory',
    role: 'Desarrollo Web y Multiplataforma',
    company: 'Mainmemory & Juventud para Cristo',
    period: '2025 – 2026',
    type: 'FCT (Prácticas en Empresa)',
    tasks: [
      'Mainmemory: Desarrollo e implementación de una aplicación multiplataforma orientada a la gestión integral y el control de visitas de la empresa.',
      'Juventud para Cristo: Administración, actualización de contenido y mantenimiento técnico del portal web corporativo utilizando WordPress.',
    ],
  },
  {
    id: 'upc',
    role: 'Programador Web Junior',
    company: 'Universidad UPC Vilanova',
    period: '2024 – 2025',
    type: 'FCT (Prácticas en Empresa)',
    tasks: [
      'Desarrollo y mantenimiento de interfaces web (Front-end) utilizando HTML5, CSS3 y JavaScript.',
      'Soporte en el desarrollo Back-end con PHP para la resolución de incidencias y mejora del rendimiento de las plataformas de la universidad.',
    ],
  },
  {
    id: 'erasmus',
    role: 'Técnico de Soporte IT',
    company: 'Istituto Statale Leonardo Da Vinci — Florencia (Italia)',
    period: '2022 – 2023',
    type: 'Prácticas Erasmus Internacionales',
    tasks: [
      'Soporte técnico internacional en entorno educativo.',
      'Mantenimiento preventivo y correctivo de equipos informáticos (Hardware) y resolución de incidencias de red.',
      'Instalación, configuración y actualización de software y sistemas operativos para las aulas de la institución.',
    ],
  },
  {
    id: 'salesians',
    role: 'Técnico de Sistemas Microinformáticos y Redes',
    company: 'Col·legi Salesians Rocafort',
    period: '2022 – 2023',
    type: 'FCT (Prácticas en Empresa)',
    tasks: [
      'Asistencia técnica en el departamento de IT del centro educativo.',
      'Montaje, reparación y diagnóstico de equipos informáticos.',
      'Soporte a usuarios (profesores y alumnos) y despliegue de herramientas de software educativo.',
    ],
  },
];

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  status: 'Cursando' | 'Completado';
  badgeType: 'master' | 'completed';
}

export const educationList: EducationItem[] = [
  {
    degree: 'Máster en Inteligencia Artificial y Big Data',
    institution: 'Stucom',
    period: '2026 – 2027',
    status: 'Cursando',
    badgeType: 'master',
  },
  {
    degree: 'CFGS en Desarrollo de Aplicaciones Multiplataforma (DAM)',
    institution: 'Stucom',
    period: '2025 – 2026',
    status: 'Completado',
    badgeType: 'completed',
  },
  {
    degree: 'CFGS en Desarrollo de Aplicaciones Web (DAW)',
    institution: 'Stucom',
    period: '2023 – 2025',
    status: 'Completado',
    badgeType: 'completed',
  },
  {
    degree: 'CFGM en Sistemas Microinformáticos y Redes (SMR)',
    institution: 'Stucom',
    period: '2021 – 2023',
    status: 'Completado',
    badgeType: 'completed',
  },
];

export interface ProjectDoc {
  label: string;
  url: string;
  type: 'word' | 'powerpoint' | 'drive' | 'github' | 'frontend' | 'backend' | 'demo';
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: 'Full Stack' | 'Software & C#' | 'Redes y Cableado' | 'Sistemas y Empresa' | 'Robótica y Hardware' | 'Desarrollo Web';
  academicContext: string;
  teamSize?: string;
  videos?: { title: string; embedUrl: string }[];
  docs: ProjectDoc[];
  keyPoints: string[];
  featured?: boolean;
}

export const allProjects: Project[] = [
  {
    id: 'fichestu',
    title: 'Fichestu',
    subtitle: 'Sistema Integral de Fichajes y Gestión Horaria',
    description: 'Plataforma completa de registro de jornadas, control de presencia y fichajes con arquitectura desacoplada Frontend y Backend.',
    longDescription: `Fichestu es un sistema integral de control horario y gestión laboral diseñado para registrar entradas, salidas y cómputo de horas de empleados. Cuenta con una arquitectura profesional dividida en:
    
• Fichestu Frontend: Interfaz moderna y reactiva que permite a los usuarios fichar en tiempo real, visualizar su historial y gestionar su perfil con validaciones inmediatas.
• Fichestu Backend: API robusta encargada de la autenticación segura, control de permisos de usuario/administrador, lógica de cálculo de jornadas y persistencia de registros en base de datos.`,
    tags: ['Frontend', 'Backend', 'Control Horario', 'REST API', 'Auth & Security', 'Database'],
    category: 'Full Stack',
    academicContext: 'Proyecto Full Stack Avanzado',
    teamSize: 'Desarrollo y Arquitectura de Software',
    featured: true,
    keyPoints: [
      'Frontend reactivo optimizado para fichajes rápidos en web y móviles',
      'API Backend con endpoints protegidos para autenticación y auditoría',
      'Cálculo automatizado de jornadas y registro de marcas temporales',
      'Estructura modular con repositorios dedicados para Frontend y Backend'
    ],
    docs: [
      {
        label: 'Repositorio Frontend',
        url: 'https://github.com/Peke2005/fichestu-frontend',
        type: 'frontend'
      },
      {
        label: 'Repositorio Backend',
        url: 'https://github.com/Peke2005/fichestu-backend',
        type: 'backend'
      }
    ]
  },
  {
    id: 'cineflix',
    title: 'CineFlix',
    subtitle: 'Plataforma Full Stack de Películas & Streaming',
    description: 'Aplicación web completa con frontend interactivo en React/TypeScript y backend modular en PHP con API REST.',
    longDescription: `CineFlix es una plataforma web desarrollada con una arquitectura moderna de dos capas. En el lado del cliente, cuenta con una Single Page Application (SPA) en React, TypeScript y Vite que ofrece una experiencia fluida de navegación, catálogo de películas y filtrado dinámico.
    
En el lado del servidor, implementa un backend en PHP estructurado como API REST que expone endpoints para consultar, registrar y organizar las películas en la base de datos de manera eficiente.`,
    tags: ['React', 'TypeScript', 'PHP', 'Vite', 'REST API', 'Tailwind CSS'],
    category: 'Full Stack',
    academicContext: 'Proyecto Full Stack Web',
    teamSize: 'Desarrollo Frontend & Backend',
    featured: true,
    keyPoints: [
      'SPA reactiva con React, TypeScript y Vite de alto rendimiento',
      'API REST en PHP con respuestas JSON estructuradas',
      'Filtrado dinámico en tiempo real y catálogo responsive',
      'Arquitectura completamente desacoplada con repositorios separados'
    ],
    docs: [
      {
        label: 'Repositorio Frontend',
        url: 'https://github.com/Peke2005/CineFlix_Frontend',
        type: 'frontend'
      },
      {
        label: 'Repositorio Backend',
        url: 'https://github.com/Peke2005/CineFlix_Backend',
        type: 'backend'
      }
    ]
  },
  {
    id: 'marcopolo',
    title: 'MarcoPolo',
    subtitle: 'Arquitectura y Software Orientado a Objetos en C#',
    description: 'Proyecto de software a gran escala en C# / .NET centrado en patrones de diseño y lógica empresarial compleja.',
    longDescription: `MarcoPolo es uno de los proyectos de mayor escala del portfolio, desarrollado íntegramente en C# dentro del ecosistema .NET. Demuestra un dominio profundo de los principios de la Programación Orientada a Objetos (POO), abstracción de clases, modularidad y gestión de estado.
    
Abarca estructuras de datos avanzadas, separación clara de responsabilidades y patrones de desarrollo pensados para escalabilidad y mantenibilidad de código.`,
    tags: ['C#', '.NET', 'OOP', 'Arquitectura Software', 'Patrones de Diseño'],
    category: 'Software & C#',
    academicContext: 'CFGS Desarrollo de Aplicaciones Multiplataforma (DAM)',
    teamSize: 'Desarrollo de Software',
    featured: true,
    keyPoints: [
      'Diseño orientado a objetos con alta cohesión y bajo acoplamiento',
      'Lógica estructurada para gestión de flujos y reglas complejas',
      'Desarrollo nativo en C# / .NET con tipado estricto',
      'Extensa base de código organizada de forma modular'
    ],
    docs: [
      {
        label: 'Repositorio en GitHub',
        url: 'https://github.com/Peke2005/MarcoPolo',
        type: 'github'
      }
    ]
  },
  {
    id: 'transversal',
    title: 'Transversal',
    subtitle: 'Red Lógica & Cableado Estructurado',
    description: 'Montaje de infraestructura de red física y lógica simulando conexión entre sedes Madrid-Barcelona.',
    longDescription: `Proyecto desarrollado en el ciclo medio de Sistemas Microinformáticos y Redes (SIMIX) en STUCOM. El objetivo fue diseñar e implementar una red física completa sobre un panel estructurado con cuatro canaletas fijas, rosetas RJ45, switches, routers, servidor y equipo cliente. Se practicó crimpado profesional de cables, enrutamiento, diagnóstico de fallos de capa física y comprobación de enlace extremo a extremo entre servidor y cliente simulando una conexión interurbana.`,
    tags: ['Redes', 'Cableado Estructurado', 'RJ45', 'Switches & Routers', 'Servidores', 'Capa Física'],
    category: 'Redes y Cableado',
    academicContext: '1er año CFGM Sistemas Microinformáticos y Redes (STUCOM)',
    teamSize: 'Trabajo en equipo (6 integrantes divididos en células de taller y documentación)',
    keyPoints: [
      'Montaje de panel de canaletas fijas y conexionado de rosetas RJ45',
      'Configuración e interconexión de 2 switches, 2 routers, servidor y cliente',
      'Simulación y verificación de tráfico de red entre nodos Madrid - Barcelona',
      'Crimpado de cables, diagnóstico de fallas y certificación de continuidad'
    ],
    videos: [
      { title: 'Demostración de Red Transversal', embedUrl: 'https://www.youtube.com/embed/eIeGQBAd6pU' }
    ],
    docs: [
      {
        label: 'Memoria del Proyecto (Google Docs)',
        url: 'https://docs.google.com/document/d/1-ky4bm160LJmz3PUGLm0rYPvO5nrqTpYsn1Rii3ykp4/edit?usp=sharing',
        type: 'word'
      },
      {
        label: 'Presentación del Proyecto (Google Slides)',
        url: 'https://docs.google.com/presentation/d/1ByN5AwRCSpBjlTIQ9jof-I7e31eHaf8QPETbHMwgxuI/edit?usp=sharing',
        type: 'powerpoint'
      }
    ]
  },
  {
    id: 'sintesis',
    title: 'Síntesis',
    subtitle: 'Infraestructura Integral para Creación de Empresa',
    description: 'Proyecto global compuesto por 3 fases multidisciplinares que unifican Redes, Sistemas, Bases de Datos, Robótica y Desarrollo Web.',
    longDescription: `Proyecto culminante del 2º año de ciclo medio (SIMIX) en STUCOM realizado en equipo de 3 personas. Se estructuró en 3 miniproyectos que simularon la creación tecnológica completa de una empresa:
    
1) Redes y Sistemas: Diseño de topología en Cisco Packet Tracer con VLANs departamentales, Ubuntu Server con DHCP y DNS (BIND9), y Windows Server con Active Directory. En robótica, estación de control térmico con sensor NTC, buzzer y LEDs de alerta.
2) Base de Datos y Servicios: Modelado SQL manual sin interfaz gráfica para control de accesos a la intranet, servidor FTP, MySQL y directivas GPO en Windows Server con scripts de respaldo automatizado de carpetas de usuario. Robótica con teclado matricial y sensor RTC para control horario de accesos con códigos únicos.
3) PHP, Correo y Seguridad: Desarrollo en PHP para gestión CRUD y filtros por Primary Key sobre la base de datos empresarial. Despliegue de servidor de correo con Postfix y Dovecot (clientes Thunderbird) y proxy web Squid para control de navegación. En robótica, servomotor actuador de puerta automatizada con display LCD.`,
    tags: ['Packet Tracer', 'VLANs', 'Ubuntu Server', 'Windows Server', 'Active Directory', 'MySQL', 'PHP', 'Squid Proxy', 'Postfix/Dovecot', 'Arduino'],
    category: 'Sistemas y Empresa',
    academicContext: '2º año CFGM Sistemas Microinformáticos y Redes (STUCOM)',
    teamSize: 'Equipo multidisciplinar de 3 personas',
    keyPoints: [
      'Fase 1: Packet Tracer (VLANs), DHCP/DNS BIND9, Active Directory y sensor térmico NTC',
      'Fase 2: Base de datos MySQL mediante código SQL puro, FTP corporativo, GPO con scripts de backup y teclado matricial con control de presencia',
      'Fase 3: Aplicación web CRUD en PHP, servidor de correo Postfix/Dovecot, proxy Squid y puerta automatizada con servomotor y pantalla LCD'
    ],
    videos: [
      { title: 'Vídeo explicativo Proyecto Síntesis', embedUrl: 'https://www.youtube.com/embed/fVAbnUUQ2QE' }
    ],
    docs: [
      {
        label: 'Memoria Completa Síntesis (Google Docs)',
        url: 'https://docs.google.com/document/d/1IfLopzhhYZN7YfmLwZc-_MJCxZRLeHSj/edit?usp=sharing&ouid=117258281007569347412&rtpof=true&sd=true',
        type: 'word'
      }
    ]
  },
  {
    id: 'robot',
    title: 'Robot Autónomo',
    subtitle: 'Diseño Mecánico y Programación de Robot Evasor de Obstáculos',
    description: 'Construcción y programación desde cero de un vehículo autónomo con Arduino, sensor infrarrojo y servomotores.',
    longDescription: `Proyecto desarrollado en equipo de 2 personas durante el primer año de ciclo medio. Se fabricó físicamente un chasis adaptado utilizando materiales ligeros, incorporando dos servomotores continuos para tracción, sensor de infrarrojos frontal, batería de 6V, protoboard y placa controladora Arduino.
    
A nivel de software, se programó la rutina en C/Arduino encargada de leer el sensor de distancia en tiempo real, calcular márgenes seguros de giro y coordinar los pulsos hacia las ruedas motrices para evadir obstáculos de manera 100% autónoma.`,
    tags: ['Arduino', 'C / C++', 'Robótica', 'Sensores Infrarrojos', 'Servomotores', 'Electrónica'],
    category: 'Robótica y Hardware',
    academicContext: '1er año CFGM Sistemas Microinformáticos y Redes (STUCOM)',
    teamSize: 'Equipo de 2 personas',
    keyPoints: [
      'Diseño y ensamblaje del chasis con servomotores y protoboard',
      'Integración de sensor infrarrojo para telemetría y detección de colisiones',
      'Programación en Arduino con algoritmos de evasión y toma de decisiones en tiempo real',
      'Alimentación independiente y calibración de tracción'
    ],
    videos: [
      { title: 'Prueba en vivo Robot Autónomo', embedUrl: 'https://www.youtube.com/embed/gAFDeJq1PMw' }
    ],
    docs: [
      {
        label: 'Documentación Técnica Robot (Google Docs)',
        url: 'https://docs.google.com/document/d/1IvVUYqIj62afCYBgvl0MTMcfL6_AsrDM_iRSEdyQohA/edit?usp=sharing',
        type: 'word'
      }
    ]
  },
  {
    id: 'betagames',
    title: 'Betagames',
    subtitle: 'Plataforma Web de Testeo de Videojuegos',
    description: 'Desarrollo web completo de una plataforma para testers de juegos: benchmarking, diseño en Figma, frontend y backend PHP.',
    longDescription: `Proyecto realizado en equipo de 3 personas durante el ciclo de desarrollo web. Nació del análisis de tendencias en Google Analytics, donde identificamos un gran volumen de búsquedas de usuarios interesados en probar videojuegos antes de su lanzamiento.
    
El flujo de desarrollo incluyó benchmarking, prototipado de alta fidelidad en Figma, maquetación con HTML5 y CSS3, e interactividad dinámica con JavaScript y PHP para gestión de contenidos.`,
    tags: ['Figma', 'JavaScript', 'PHP', 'HTML5 & CSS3', 'UI / UX', 'Benchmarking', 'Google Analytics'],
    category: 'Desarrollo Web',
    academicContext: 'CFGS STUCOM Centre d\'Estudis',
    teamSize: 'Equipo de 3 desarrolladores',
    keyPoints: [
      'Estudio analítico inicial con Google Analytics y benchmarking de competidores',
      'Diseño integral de wireframes y prototipos interactivos en Figma',
      'Desarrollo de interfaz frontend moderna con animaciones y microinteracciones',
      'Lógica de servidor en PHP e interactividad dinámica con JavaScript'
    ],
    videos: [
      { title: 'Vídeo 1 - Presentación Betagames', embedUrl: 'https://www.youtube.com/embed/r3Ewlo2LWoA?si=pJdtCci5zIO4HL5x' },
      { title: 'Vídeo 2 - Recorrido por la Web', embedUrl: 'https://www.youtube.com/embed/19IIKbZ9LeM?si=WGjJH4C9wp47SZ6V' },
      { title: 'Vídeo 3 - Funcionalidades & Código', embedUrl: 'https://www.youtube.com/embed/q5VyjfbPNrc?si=IhzsAGHMcKxMxNWS' }
    ],
    docs: [
      {
        label: 'Memoria del Proyecto Betagames (Google Docs)',
        url: 'https://docs.google.com/document/d/15wZuG6P3iCI9rBhEGmulbMtWpA67ehSSUqN8Gb3rYhw/edit?usp=sharing',
        type: 'word'
      },
      {
        label: 'Presentación Oficial (Google Slides)',
        url: 'https://docs.google.com/presentation/d/16gLBmEpCflqpZw9Pv65s1tbLw71oYv-FqCcbSFYCuA0/edit?usp=sharing',
        type: 'powerpoint'
      }
    ]
  }
];

export const navLinks = [
  { name: 'Sobre Mí', hash: '#about' },
  { name: 'Experiencia', hash: '#experience' },
  { name: 'Formación', hash: '#education' },
  { name: 'Skills', hash: '#skills' },
  { name: 'Proyectos', hash: '#projects' },
];
