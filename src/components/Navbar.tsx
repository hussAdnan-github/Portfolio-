import React from 'react';
import { motion } from 'motion/react';
import { Language, translations } from '../translations';
import { cn } from '../lib/utils';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  currentPage: 'portfolio' | 'academic';
  setCurrentPage: (page: 'portfolio' | 'academic') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, currentPage, setCurrentPage }) => {
  const t = translations[lang].nav;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button 
          onClick={() => setCurrentPage('portfolio')}
          className="text-xl font-bold tracking-tighter hover:text-brand-blue transition-colors"
        >
          {lang === 'en' ? 'Obsidian Gallery' : 'معرض أوبسيديان'}
        </button>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          {currentPage === 'portfolio' ? (
            <>
              <a href="#work" className="hover:text-white transition-colors">{t.work}</a>
              <a href="#about" className="hover:text-white transition-colors">{t.about}</a>
              <a href="#experience" className="hover:text-white transition-colors">{t.experience}</a>
              <a href="#testimonials" className="hover:text-white transition-colors">{t.testimonials}</a>
              <a href="#contact" className="hover:text-white transition-colors">{t.contact}</a>
            </>
          ) : (
            <button 
              onClick={() => setCurrentPage('portfolio')}
              className="hover:text-white transition-colors"
            >
              {lang === 'en' ? '← Back to Portfolio' : '← العودة للمعرض'}
            </button>
          )}
          <button 
            onClick={() => setCurrentPage('academic')}
            className={cn(
              "px-4 py-1 rounded-full border transition-all",
              currentPage === 'academic' 
                ? "border-brand-blue text-brand-blue" 
                : "border-white/10 hover:border-white/30 hover:text-white"
            )}
          >
            {t.academic}
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
            className="text-xs font-bold px-3 py-1 border border-white/10 rounded hover:bg-white/5 transition-colors"
          >
            {lang === 'en' ? 'AR' : 'EN'}
          </button>
          <button className="bg-brand-blue text-brand-dark px-6 py-2 rounded-full text-sm font-bold hover:bg-brand-blue/90 transition-colors">
            {t.hireMe}
          </button>
        </div>
      </div>
    </nav>
  );
};
