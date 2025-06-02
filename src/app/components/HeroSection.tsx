'use client';

import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const blobRef1 = useRef<HTMLDivElement>(null);
  const blobRef2 = useRef<HTMLDivElement>(null);
  const blobRef3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // Calculate percentage of mouse position relative to center
      const percentX = (clientX - centerX) / centerX;
      const percentY = (clientY - centerY) / centerY;
      
      // Move blobs in opposite directions of mouse movement
      if (blobRef1.current) {
        blobRef1.current.style.transform = `translate(${-percentX * 20}px, ${-percentY * 20}px)`;
      }
      if (blobRef2.current) {
        blobRef2.current.style.transform = `translate(${percentX * 15}px, ${-percentY * 15}px)`;
      }
      if (blobRef3.current) {
        blobRef3.current.style.transform = `translate(${-percentX * 10}px, ${percentY * 10}px)`;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background Blobs */}
      <div ref={blobRef1} className="blob blob-blue h-96 w-96 top-20 -left-20 transition-transform duration-300"></div>
      <div ref={blobRef2} className="blob blob-green h-80 w-80 bottom-20 right-20 transition-transform duration-300"></div>
      <div ref={blobRef3} className="blob blob-purple h-64 w-64 top-1/2 right-1/4 transition-transform duration-300"></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full mb-6">
              {t('hero.degree')}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                <span className="text-blue-600">Lautaro Cortez</span><br/>
                <span>{t('hero.title')}</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  href="#projects" 
                  className="btn-primary"
                >
                  {t('hero.cta')}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  href="https://github.com/LautyCortez" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-outline"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  {t('hero.github')}
                </motion.a>
              </div>
              
              <div className="mt-12 flex items-center space-x-6">
                <div className="flex items-center">
                  <div className="bg-blue-600 h-10 w-1 rounded mr-4"></div>
                  <div>
                    <div className="text-sm text-gray-500">{t('hero.university')}</div>
                    <div className="font-medium">{t('hero.degree')}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Profile image with decorative elements */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src="/LautaroCortez.jpg"
                  alt="Lautaro Cortez"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Decorative elements */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -top-4 -right-4 bg-blue-100 px-4 py-2 rounded-lg shadow-md"
              >
                <div className="text-blue-800 font-medium">{t('hero.position.ml')}</div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -bottom-4 -left-4 bg-green-100 px-4 py-2 rounded-lg shadow-md"
              >
                <div className="text-green-800 font-medium">{t('hero.position.data')}</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;