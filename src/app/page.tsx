'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Import components
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import ZriveProjectSection from './components/ZriveProjectSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import { useLanguage } from './context/LanguageContext';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const { t } = useLanguage();
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      
      // Find the section that is currently in view
      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;
        
        const rect = element.getBoundingClientRect();
        // If the top of the section is near the top of the viewport
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen">
      <CursorGlow />
      <Navbar activeSection={activeSection} />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      {/* <ZriveProjectSection /> */}
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
      
      {/* Scroll to top button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition-colors focus:outline-none z-50"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
      </motion.button>
    </main>
  );
}