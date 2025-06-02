'use client';

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

type LanguageContextType = {
  language: 'en' | 'es';
  toggleLanguage: () => void;
  t: (key: string) => string;
};

type TranslationsType = {
  [language: string]: {
    [key: string]: string;
  };
};

const translations: TranslationsType = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'nav.cv': 'Resume',
    
    // Hero Section
    'hero.title': 'Junior Full Stack Developer',
    'hero.subtitle': 'My main focus is to create innovative projects that also improve my development skills',
    'hero.cta': 'View My Work',
    'hero.university': 'Higher institute of Santa Fe',
    'hero.degree': 'Bachelor of Science in Software Development',
    'hero.github': 'GitHub',
    'hero.position.ml': 'Tester & Developer',
    'hero.position.data': 'Data Base Analyst',
    
    // About Section
    'about.title': 'About Me',
    'about.description': "I am a Junior Developer with experience in software development and database management, Ensuring the Quality of Both Tasks. Currently looking for Work, To use my skills and add value to your business.",
    'about.card1.title': 'web and mobile development experience',
    'about.card1.description': 'I have developed web pages and mobile applications with technologies such as React Native, typescript, next.js, javascript, etc.',
    'about.card2.title': 'Data Base Analyst',
    'about.card2.description': 'Experience building relational and non-relational databases, with a great experience in database management and optimization.',
    'about.card3.title': 'Cloud Data Management',
    'about.card3.description': 'Specialized in cloud data management, with technologies such as AWS, GCP, AZURE, etc.',
    'about.profile.title': 'Professional Profile',
    'about.profile.p1': 'As a full stack junior developer, I specialize in developing web and mobile applications. My main focus is to create technology solutions that solve business problems efficiently and scalably.',
    'about.profile.p2': 'Currently working at Devol as a full stack developer, I\'m passionate about using cutting-edge technologies to create practical applications that deliver measurable business value.',
    'about.profile.p3': 'I have a strong foundation in JavaScript, TypeScript, React, Next.js, Node.js, and cloud technologies, with experience in the entire web and mobile development lifecycle from data preparation to model deployment and monitoring.',
    'about.contact.job': 'Full Stack Junior Developer',
    'about.contact.location': 'Santa Fe, Argentina',
    'about.contact.email': 'lautycortez725@gmail.com',
    
    // Skills Section
    'skills.title': 'Technical Skills',
    'skills.description': 'My toolkit for solving complex data challenges',
    'skills.categories.ml': 'AI & Machine Learning',
    'skills.categories.backend': 'Backend & Infrastructure',
    'skills.categories.databases': 'Databases & Frontend',
    'skills.stack': 'Technology Stack',
    
    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'These are some of my projects that I did together with fellow students',
    'projects.viewcode': 'View Code',
    'projects.viewdemo': 'Live Demo',
    'projects.case': 'Case Study',
    'projects.download': 'Download',
    'projects.filters.all': 'All Projects',
    'projects.filters.ml': 'Machine Learning',
    'projects.filters.data': 'Data Engineering',
    'projects.filters.nlp': 'NLP',
    'projects.github': 'View More on GitHub',
    'projects.featured': 'Featured Project',
    'projects.anomaly.title': 'virtual clinic for hospitals and sanatoriums',
    'projects.anomaly.desc': 'Developed a web application for patient monitoring in hospitals and sanatoriums, with different roles and a MySQL database.',
    'projects.docmind.title': 'Hotel Reservation Portal',
    'projects.docmind.desc': 'Working in conjunction with a team, we created this web page to manage hotel room reservations, either for a hotel or for other types of reservations.',
    'projects.timeseries.title': 'Santa Fe Lottery Tickets',
    'projects.timeseries.desc': 'Collaborating with a team, we built a mobile application to manage Santa Fe lottery tickets. Improving the process of registering tickets.',
    'projects.nlp.title': 'My Portfolio',
    'projects.nlp.desc': 'Create my own website to showcase my work and my continuous growth',
    
    // Experience Section
    'experience.title': 'Professional Experience',
    'experience.description': 'My journey throughout these years',
    'experience.current': 'Current Role',
    'experience.devol': 'Freelance',
    'experience.devol.desc': 'Continuously learning new technologies and ways of working to improve my career, developing personal projects and enhancing my experience for potential job opportunities.',
    'experience.years': 'Years of Experience',
    'experience.projects': 'ML Projects Delivered',
    'experience.tech': 'Technologies Mastered',
    
    // Contact Section
    'contact.title': 'Contact Me',
    'contact.description': 'Interested in working together? Reach out through any of these channels.',
    'contact.email': 'Email',
    'contact.location': 'Location',
    'contact.connect': 'Connect',
    'contact.download': 'Download Resume',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.built': 'Built with',
    'footer.using': 'using Next.js and Tailwind CSS',
  },
  es: {
    // Navigation
    'nav.about': 'Sobre mí',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.experience': 'Experiencia',
    'nav.contact': 'Contacto',
    'nav.cv': 'Currículum',
    
    // Hero Section
    'hero.title': 'Desarrollador Full Stack Junior',
    'hero.subtitle': 'Mi enfoque principal es crear proyectos innovadores, que ademas mejoren mis habilidades de desarrollo',
    'hero.cta': 'Ver mi trabajo',
    'hero.university': 'Instituto de Estudios Superiores de Santa Fe',
    'hero.degree': 'Tecnico Superior en Desarrollo de Software',
    'hero.github': 'GitHub',
    'hero.position.ml': 'Tester & Desarrollador',
    'hero.position.data': 'Analista de Base de Datos',
    
    // About Section
    'about.title': 'Sobre Mí',
    'about.description': 'Soy un Desarrollador Junior con experiencia en el desarrollo de software y el manejo de bases de datos, Garantizando la Calidad de Ambas Tareas. Actualmente en la busqueda de Trabajo, Para emplear mis habilidades y agregar valor a tu negocio.',
    'about.card1.title': 'Experiencia en Desarrollo web y mobile',
    'about.card1.description': 'He desarrollado paginas web y aplicaciones moviles con tecnologias como React Native, typescript, next.js, javascript, etc.',
    'about.card2.title': 'Analista de Base de Datos',
    'about.card2.description': 'Experiencia construyendo bases de datos relacionales y no relacionales, con una gran experiencia en el manejo de bases de datos y la optimizacion de las mismas.',
    'about.card3.title': 'Manejo de Datos en la Nube',
    'about.card3.description': 'Especializado en el manejo de datos en la nube, con tecnologias como AWS, GCP, AZURE, etc.',
    'about.profile.title': 'Perfil Profesional',
    'about.profile.p1': 'Como desarrollador junior full stack, me especializo en el desarrollo de aplicaciones web y móviles.Mi enfoque principal es crear soluciones tecnológicas que resuelvan problemas empresariales de manera eficiente y escalable.',
    'about.profile.p2': 'Actualmente trabajando en Proyectos Personales como desarrollador full stack . Estoy apasionado por el uso de tecnologías avanzadas para crear aplicaciones prácticas que proporcionen valor empresarial medible.',
    'about.profile.p3': 'Tengo una sólida base en JavaScript, TypeScript, React, Next.js, Node.js, y tecnologías en la nube, con experiencia en el ciclo completo de desarrollo de aplicaciones web y móviles desde la preparación de datos hasta el despliegue y monitoreo de modelos.',
    'about.contact.job': 'Desarrollador Full Stack Junior',
    'about.contact.location': 'Argentina, Santa Fe',
    'about.contact.email': 'lautycortez725@gmail.com',
    
    // Skills Section
    'skills.title': 'Habilidades Técnicas',
    'skills.description': 'Teconologias que utilizo para resolver problemas complejos de datos',
    'skills.categories.ml': 'IA y Machine Learning',
    'skills.categories.backend': 'Backend e Infraestructura',
    'skills.categories.databases': 'Bases de Datos y Frontend',
    'skills.stack': 'Mi Stack Tecnológico',
    
    // Projects Section
    'projects.title': 'Proyectos Destacados',
    'projects.subtitle': 'Estos son algunos de mis proyectos que hice en conjunto con compañeros de Estudios',
    'projects.viewcode': 'Ver Código',
    'projects.viewdemo': 'Demo en Vivo',
    'projects.case': 'Caso Práctico',
    'projects.download': 'Descargar',
    'projects.filters.all': 'Todos los Proyectos',
    'projects.filters.ml': 'Machine Learning',
    'projects.filters.data': 'Ingeniería de Datos',
    'projects.filters.nlp': 'PLN',
    'projects.github': 'Ver Más en GitHub',
    'projects.featured': 'Proyecto Destacado',
    'projects.anomaly.title': 'Clinica Virtual para sanatorios o hospitales',
    'projects.anomaly.desc': 'Desarrollé una aplicación web para el monitoreo de pacientes en hospitales y sanatorios, con distintos roles y una base de datos MySQL.',
    'projects.docmind.title': 'Pagina de Hostelería para reservas de habitaciones',
    'projects.docmind.desc': 'Trabaje en Conjunto con un equipo para crear esta página web para gestionar las reservas de habitaciones en un hotel o tambien podria ser utilizado para otros tipos de reservas.',
    'projects.timeseries.title': 'Tramites de Loteria de Santa Fe',
    'projects.timeseries.desc': 'Con la colaboracion de un equipo logramos hacer una aplicacion mobile para gestionar los tramites de loteria de Santa Fe. Agilizando asi el proceso de registro de los tramites.',
    'projects.nlp.title': 'Mi Portfolio',
    'projects.nlp.desc': 'Cree mi propia página web para mostrar mi trabajo y mis continuas ganas de progresar ',
    
    // Experience Section
    'experience.title': 'Experiencia Profesional',
    'experience.description': 'Mi trayectoria a lo largo de estos años',
    'experience.current': 'Rol Actual',
    'experience.devol': 'Freelance',
    'experience.devol.desc': 'En continuo apredizaje de tecnologias y maneras de trabajar para mejorar mi carrera, desarrollo de proyectos personales y mejorar mi experiencia para la posible oportunidad laboral.',
    'experience.years': 'Años de Experiencia',
    'experience.projects': 'Proyectos ML Entregados',
    'experience.tech': 'Tecnologías Dominadas',
    
    // Contact Section
    'contact.title': 'Contáctame',
    'contact.description': '¿Interesado en trabajar juntos? Pongase en contacto a través de cualquiera de estos canales.',
    'contact.email': 'Email',
    'contact.location': 'Ubicación',
    'contact.connect': 'Conectar',
    'contact.download': 'Descargar Currículum',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados',
    'footer.built': 'Construido con',
    'footer.using': 'usando Next.js y Tailwind CSS',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Try to get the stored language preference or default to 'en'
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  // Load saved language preference from localStorage on initial render
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'es')) {
      setLanguage(savedLanguage as 'en' | 'es');
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en';
    setLanguage(newLanguage);
    // Save preference to localStorage
    localStorage.setItem('language', newLanguage);
  };

  const t = (key: string): string => {
    // Safely access translations with proper fallbacks
    if (!translations[language]) {
      return key;
    }
    
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};