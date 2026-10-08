'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'es' | 'ca' | 'en';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  es: {
    // Navbar
    'nav.about': 'Sobre Mí',
    'nav.experience': 'Experiencia',
    'nav.education': 'Formación',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.available': 'Disponible',
    'nav.downloadCV': 'Descargar CV',

    // Hero
    'hero.badge': 'Desarrollador Web & Multiplataforma',
    'hero.role': 'Desarrollador Web y Multiplataforma',
    'hero.master': 'Cursando: Máster en Inteligencia Artificial y Big Data',
    'hero.location': 'Canyelles, Barcelona',
    'hero.tagline': 'Especializado en arquitecturas web full-stack, aplicaciones multiplataforma y administración de sistemas. Titulado en DAM y DAW con experiencia en soporte IT e impulsando proyectos de software e Inteligencia Artificial.',
    'hero.exploreProjects': 'Explorar proyectos',
    'hero.experience': 'Experiencia',
    'hero.education': 'Formación',
    'hero.cv': 'Descargar CV (PDF)',
    'hero.scroll': 'Scroll',

    // About
    'about.title': 'Sobre Mí',
    'about.subtitle': 'Desarrollador Web y Multiplataforma con experiencia técnica en soporte, redes, desarrollo frontend y backend.',
    'about.profile': 'Perfil Profesional',
    'about.active': 'Activo',
    'about.metric1': 'Titulaciones FP',
    'about.metric2': 'Experiencias FCT',
    'about.metric3': 'Máster IA',
    'about.softskills': 'Competencias & Soft Skills',
    'about.softskillsSubtitle': 'Habilidades interpersonales',
    'about.softskillsText': 'Cualidades clave aplicadas en la dinámica de equipo, resolución técnica y desarrollo de software:',
    'about.languages': 'Idiomas',
    'about.languagesSubtitle': 'Competencia lingüística',
    'about.quote': 'Orientado a resultados, proactividad y evolución continua',

    // Projects
    'projects.title': 'Mis Proyectos & Case Studies',
    'projects.subtitle': 'Haz clic en cualquier proyecto para abrir su ficha completa interactiva con vídeos de demostración, memoria técnica y repositorios.',
    'projects.close': 'Cerrar',
    'projects.technicalMemory': 'Memoria Técnica & Explicación',
    'projects.keyPoints': 'Puntos Clave de Implementación',
    'projects.stack': 'Stack Tecnológico:',
    'projects.open': 'Abrir',
    'projects.availableVideos': 'Vídeos de demostración:',

    // Experience & Education
    'exp.title': 'Experiencia Laboral',
    'exp.subtitle': 'Trayectoria en empresas, universidades y proyectos internacionales en soporte y desarrollo de software.',
    'edu.title': 'Formación Académica',
    'edu.subtitle': 'Titulaciones oficiales de grado superior, medio y especialización de postgrado en Stucom.',
    'skills.title': 'Habilidades Técnicas',
    'skills.subtitle': 'Tecnologías, frameworks, lenguajes y herramientas que domino para desarrollo web, multiplataforma y sistemas.',
  },
  ca: {
    // Navbar
    'nav.about': 'Sobre Mi',
    'nav.experience': 'Experiència',
    'nav.education': 'Formació',
    'nav.skills': 'Habilitats',
    'nav.projects': 'Projectes',
    'nav.available': 'Disponible',
    'nav.downloadCV': 'Descarregar CV',

    // Hero
    'hero.badge': 'Desenvolupador Web & Multiplataforma',
    'hero.role': 'Desenvolupador Web i Multiplataforma',
    'hero.master': 'Cursant: Màster en Intel·ligència Artificial i Big Data',
    'hero.location': 'Canyelles, Barcelona',
    'hero.tagline': 'Especialitzat en arquitectures web full-stack, aplicacions multiplataforma i administració de sistemes. Titulat en DAM i DAW amb experiència en suport IT i impulsant projectes de programari i Intel·ligència Artificial.',
    'hero.exploreProjects': 'Explorar projectes',
    'hero.experience': 'Experiència',
    'hero.education': 'Formació',
    'hero.cv': 'Descarregar CV (PDF)',
    'hero.scroll': 'Scroll',

    // About
    'about.title': 'Sobre Mi',
    'about.subtitle': 'Desenvolupador Web i Multiplataforma amb experiència tècnica en suport, xarxes, desenvolupament frontend i backend.',
    'about.profile': 'Perfil Professional',
    'about.active': 'Actiu',
    'about.metric1': 'Titulacions FP',
    'about.metric2': 'Experiències FCT',
    'about.metric3': 'Màster IA',
    'about.softskills': 'Competències & Soft Skills',
    'about.softskillsSubtitle': 'Habilitats interpersonals',
    'about.softskillsText': 'Qualitats clau aplicades en la dinàmica d\'equip, resolució tècnica i desenvolupament de programari:',
    'about.languages': 'Idiomes',
    'about.languagesSubtitle': 'Competència lingüística',
    'about.quote': 'Orientat a resultats, proactivitat i evolució contínua',

    // Projects
    'projects.title': 'Els Meus Projectes & Case Studies',
    'projects.subtitle': 'Fes clic a qualsevol projecte per obrir la seva fitxa completa interactiva amb vídeos de demostració, memòria tècnica i repositoris.',
    'projects.close': 'Tancar',
    'projects.technicalMemory': 'Memòria Tècnica & Explicació',
    'projects.keyPoints': 'Punts Clau d\'Implementació',
    'projects.stack': 'Stack Tecnològic:',
    'projects.open': 'Obrir',
    'projects.availableVideos': 'Vídeos de demostració:',

    // Experience & Education
    'exp.title': 'Experiència Laboral',
    'exp.subtitle': 'Trajectòria en empreses, universitats i projectes internacionals en suport i desenvolupament de programari.',
    'edu.title': 'Formació Acadèmica',
    'edu.subtitle': 'Titulacions oficials de grau superior, mitjà i especialització de postgrau a Stucom.',
    'skills.title': 'Habilitats Tècniques',
    'skills.subtitle': 'Tecnologies, frameworks, llenguatges i eines que domino per a desenvolupament web, multiplataforma i sistemes.',
  },
  en: {
    // Navbar
    'nav.about': 'About Me',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.available': 'Available',
    'nav.downloadCV': 'Download CV',

    // Hero
    'hero.badge': 'Web & Multiplatform Developer',
    'hero.role': 'Web & Multiplatform Software Engineer',
    'hero.master': 'Current: Master\'s in AI & Big Data',
    'hero.location': 'Canyelles, Barcelona',
    'hero.tagline': 'Specialized in full-stack web architectures, cross-platform apps, and systems engineering. Certified in DAM & DAW with practical IT infrastructure experience, building software and AI solutions.',
    'hero.exploreProjects': 'Explore projects',
    'hero.experience': 'Experience',
    'hero.education': 'Education',
    'hero.cv': 'Download CV (PDF)',
    'hero.scroll': 'Scroll',

    // About
    'about.title': 'About Me',
    'about.subtitle': 'Full-Stack Web and Multiplatform Developer with hands-on expertise in IT support, networks, frontend, and backend architecture.',
    'about.profile': 'Professional Profile',
    'about.active': 'Active',
    'about.metric1': 'Vocational Degrees',
    'about.metric2': 'Internship Roles',
    'about.metric3': 'AI Master',
    'about.softskills': 'Key Competencies & Soft Skills',
    'about.softskillsSubtitle': 'Interpersonal strengths',
    'about.softskillsText': 'Core qualities applied in high-performing teamwork, technical problem solving, and agile software development:',
    'about.languages': 'Languages',
    'about.languagesSubtitle': 'Language proficiency',
    'about.quote': 'Driven by results, proactive growth, and continuous learning',

    // Projects
    'projects.title': 'Featured Projects & Case Studies',
    'projects.subtitle': 'Click on any project card to open its interactive detail sheet with video walkthroughs, documentation, and source code.',
    'projects.close': 'Close',
    'projects.technicalMemory': 'Technical Architecture & Overview',
    'projects.keyPoints': 'Core Technical Highlights',
    'projects.stack': 'Tech Stack:',
    'projects.open': 'Open',
    'projects.availableVideos': 'Demo Walkthrough Videos:',

    // Experience & Education
    'exp.title': 'Work Experience',
    'exp.subtitle': 'Professional background across enterprise tech, universities, and international Erasmus IT placements.',
    'edu.title': 'Education & Degrees',
    'edu.subtitle': 'Official Higher Technical Degrees, Vocational Diplomas, and Master\'s Specialization at Stucom.',
    'skills.title': 'Technical Skills',
    'skills.subtitle': 'Languages, frameworks, databases, and DevOps tools mastered for web, mobile, and system environments.',
  },
};

const LanguageContext = createContext<LanguageContextType>({
  lang: 'es',
  setLang: () => {},
  t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('es');

  useEffect(() => {
    const saved = localStorage.getItem('pol_lang') as Language;
    if (saved && (saved === 'es' || saved === 'ca' || saved === 'en')) {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('pol_lang', newLang);
  };

  const t = (key: string) => {
    return translations[lang]?.[key] || translations.es[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
