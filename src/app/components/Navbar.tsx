'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: t('nav.about') },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: t('nav.skills') },
    /* { id: 'zrive-project', label: 'Zrive DS' }, */
    { id: 'projects', label: t('nav.projects') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'contact', label: t('nav.contact') },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center">
            <span className="text-xl font-space font-bold text-blue-600">Lautaro Cortez</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  activeSection === link.id ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <div className="h-0.5 w-full bg-blue-600 mt-1 rounded-full"></div>
                )}
              </a>
            ))}
            
            <div className="pl-4 border-l border-gray-200">
              <a
                href="/Curriculum Vitae Cortez Lautaro.pdf"
                download
                className="btn-primary text-sm py-2"
              >
                {t('nav.cv')}
              </a>
            </div>
            
            <button 
              onClick={toggleLanguage} 
              className="flex items-center px-2 py-1 border border-gray-300 rounded-md hover:border-blue-500 hover:text-blue-600 transition-colors"
            >
              <span className="text-sm font-medium">{language === 'es' ? 'ES' : 'EN'}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="p-1 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <span className="text-sm font-medium">{language === 'es' ? 'ES' : 'EN'}</span>
            </button>

            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-lg mt-4 p-4 absolute left-4 right-4 z-50">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`text-base font-medium transition-colors hover:text-blue-600 ${
                    activeSection === link.id ? 'text-blue-600' : 'text-gray-700'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/Curriculum Vitae Cortez Lautaro.pdf"
                download
                className="btn-primary text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.cv')}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;