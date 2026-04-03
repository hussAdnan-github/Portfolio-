import { useState, useEffect } from 'react';
import { Language } from './translations';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Portfolio } from './components/Portfolio';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Academic } from './components/Academic';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [currentPage, setCurrentPage] = useState<'portfolio' | 'academic'>('portfolio');

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className={lang === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
      />
      <main>
        {currentPage === 'portfolio' ? (
          <>
            <Hero lang={lang} />
            <Philosophy lang={lang} />
            <Portfolio lang={lang} />
            <Experience lang={lang} />
            <Contact lang={lang} />
          </>
        ) : (
          <Academic lang={lang} onBack={() => setCurrentPage('portfolio')} />
        )}
      </main>
      <Footer lang={lang} />
    </div>
  );
}
