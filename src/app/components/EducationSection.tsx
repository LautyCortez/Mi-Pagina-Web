import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const EducationSection = () => {
  const { t } = useLanguage();
  
  const education = [
    {
      degree: "Tecnicatura Superior en Desarrollo de Software",
      institution: "Instituto de Estudios Superiores de Santa Fe",
      location: "Santa Fe, Argentina",
      period: "Mar 2021 - Dec 2024",
      description: "Graduado con honores en la Tecnicatura Superior en Desarrollo de Software. Proyecto Final: 'Sistema de Gestion de Clinica' (Nota: 8/10).",
      highlights: [
        "Aprendizaje de lenguajes de programacion como Java, Javascript, Python, React, Node.js y SQL",
        "Promedio de notas: 7.98/10"
      ]
    },
    {
      degree: "Curso de IA y Machine Learning",
      location: "Online",
      period: "Enero 2025",
      description: "Curso de IA y Machine Learning",
      highlights: [
        "Aprendizaje de conceptos basicos de IA",
        "Aprendizaje de herramientas de IA como ChatGPT, Langchain, Llama, etc",
        "Aprendizaje de conceptos basicos de Machine Learning",
        "Aprendizaje de herramientas de Machine Learning como Scikit-learn, Pandas, Numpy, etc"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Educacion</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Mis estudios y cursos
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12 bg-white rounded-xl overflow-hidden shadow-md border border-gray-100"
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{edu.degree}</h3>
                    <p className="text-blue-600 font-medium">{edu.institution}</p>
                  </div>
                  <div className="mt-2 md:mt-0 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {edu.period}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{edu.description}</p>
                
                {/* {edu.progress && (
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">Program progress</span>
                      <span className="text-sm font-medium text-gray-700">{edu.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full" 
                        style={{ width: `${edu.progress}%` }}
                      ></div>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                      Currently at: {edu.currentModule}
                    </p>
                  </div>
                )} */}
                
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Highlights:</h4>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Additional certifications section could go here */}
      </div>
    </section>
  );
};

export default EducationSection;