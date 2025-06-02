'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

interface SkillCategoryProps {
  title: string;
  technologies: { icon: string; name: string }[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, technologies }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-indigo-900/10 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-6"
    >
      <h3 className="text-xl font-semibold mb-4 text-indigo-400">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {technologies.map((tech, index) => (
          <div 
            key={index} 
            className="flex items-center space-x-2 bg-indigo-800/30 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-indigo-800/50 hover:scale-105"
          >
            <img src={tech.icon} alt={tech.name} className="w-5 h-5" />
            <span className="text-sm text-gray-300">{tech.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const SkillsSection: React.FC = () => {
  const { t } = useLanguage();

  const techCategories = [
    {
      title: t('skills.categories.ml'),
      technologies: [
        { icon: "/openai.svg", name: "OpenAI" },
        { icon: "/python.svg", name: "Python" },
        { icon: "/tensorflow.svg", name: "TensorFlow" },
        
      ]
    },
    {
      title: t('skills.categories.backend'),
      technologies: [
        { icon: "/docker.svg", name: "Docker" },
        { icon: "/amazon-aws.svg", name: "AWS" },
        { icon: "/azure.png", name: "Azure" },
        { icon: "/node.svg", name: "Node.js" },
        { icon: "/JavaScript.webp", name: "JavaScript" },
        { icon: "/Typescript.webp", name: "TypeScript" },
        { icon: "/Java.webp", name: "Java" },
      ]
    },
    {
      title: t('skills.categories.databases'),
      technologies: [
        { icon: "/mysql-original-wordmark.svg", name: "MySQL" },
        { icon: "/PhpMyAdmin.webp", name: "PhpMyAdmin" },
        { icon: "/mongodb.svg", name: "MongoDB" },
        { icon: "/react.svg", name: "React" },
        { icon: "/next.svg", name: "Next.js" },
        { icon: "/angular-icon.webp", name: "Angular" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('skills.title')}</h2>
          <div className="h-1 w-20 bg-indigo-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            {t('skills.description')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative py-10"
        >
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-xl"></div>

          {/* Tech categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {techCategories.map((category, index) => (
              <SkillCategory 
                key={index} 
                title={category.title} 
                technologies={category.technologies} 
              />
            ))}
          </div>
        </motion.div>
        
        {/* Floating tech logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold mb-10 text-white">{t('skills.stack')}</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: "/python.svg", name: "Python" },
              { icon: "/angular-icon.webp", name: "Angular" },
              { icon: "/docker.svg", name: "Docker" },
              { icon: "/next.svg", name: "Nexts.js" },
              { icon: "/mysql-original-wordmark.svg", name: "MySQL" },
              { icon: "/node.svg", name: "Node.js" },
            ].map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-indigo-900/30 rounded-full flex items-center justify-center p-3 mb-2">
                  <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
                </div>
                <span className="text-sm text-gray-400">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;