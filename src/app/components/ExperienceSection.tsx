'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  title: string;
  company?: string;
  date: string;
  description: string;
  tags?: string[];
  icon: React.ReactNode;
  isActive?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  title, 
  company, 
  date, 
  description, 
  tags, 
  icon, 
  isActive 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="relative pl-10 pb-10 last:pb-0"
    >
      {/* Vertical line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-indigo-200"></div>
      
      {/* Icon marker */}
      <div className={`absolute left-0 top-0 w-8 h-8 rounded-full flex items-center justify-center -translate-x-1/2 
        ${isActive ? 'bg-indigo-600 text-white border-4 border-indigo-100' : 'bg-white text-indigo-600 border-2 border-indigo-200'}`}>
        {icon}
      </div>
      
      <div className={`bg-white rounded-lg shadow-sm p-6 border border-gray-100 ml-4 
        ${isActive ? 'border-l-4 border-l-indigo-600' : ''}`}>
        <div className="text-sm text-indigo-600 font-medium mb-1">
          {date}
          {isActive && (
            <span className="inline-flex items-center ml-2 px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
              Current
            </span>
          )}
        </div>
        
        <h3 className="text-xl font-bold mb-2">
          {title}
          {company && <span className="text-gray-600"> @ {company}</span>}
        </h3>
        
        <p className="text-gray-600 mb-4">{description}</p>
        
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span key={index} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const ExperienceSection: React.FC = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      title: `${t('experience.devol')}`,
      date: 'Ene 2022 - Present',
      description: t('experience.devol.desc'),
      tags: ["OpenAI", "Python", "Angular", "Node.js", "React", "Next.js", "Vercel", "+"],
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      isActive: true
    },
   /*  {
      title: t('experience.internship'),
      date: 'Sep 2023 - Mar 2024',
      description: t('experience.internship.desc'),
      tags: ["AI", "VR Technology", "Sensor Fusion", "Computer Vision", "Python"],
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      )
    },
    {
      title: "Founder",
      company: "Wippass",
      date: "Mar 2023 - Jul 2024",
      description: t('experience.wippass.desc'),
      tags: ["Python", "Flask", "MySQL", "AWS", "EC2", "RDS", "S3"],
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      )
    },
    {
      title: "B.Sc. in Artificial Intelligence",
      company: "University of the Basque Country",
      date: "Sep 2020 - Jul 2024",
      description: "Focus on machine learning, neural networks, and data processing. Final project on anomaly detection with Kubernetes deployment (Grade: 9/10).",
      tags: ["AI", "Machine Learning", "Neural Networks", "Data Processing", "Kubernetes"],
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
        </svg>
      )
    } */
  ];

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('experience.title')}</h2>
          <div className="h-1 w-20 bg-indigo-500 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            {t('experience.description')}
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <TimelineItem 
              key={index}
              title={exp.title}
              /* company={exp.company} */
              date={exp.date}
              description={exp.description}
              tags={exp.tags}
              icon={exp.icon}
              isActive={exp.isActive}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 bg-indigo-50 rounded-xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-indigo-600 font-bold text-4xl mb-2">2+</div>
              <div className="text-gray-700">{t('experience.years')}</div>
            </div>
            <div>
              <div className="text-indigo-600 font-bold text-4xl mb-2">2+</div>
              <div className="text-gray-700">{t('experience.projects')}</div>
            </div>
            <div>
              <div className="text-indigo-600 font-bold text-4xl mb-2">3+</div>
              <div className="text-gray-700">{t('experience.tech')}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;