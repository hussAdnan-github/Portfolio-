import React from 'react';
import { Language, translations } from '../translations';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = translations[lang].footer;

  return (
    <footer className="py-12 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-lg font-bold tracking-tighter">
          {lang === 'en' ? 'Obsidian Gallery' : 'معرض أوبسيديان'}
        </div>

        <div className="flex gap-8 text-[10px] font-bold tracking-widest text-gray-500">
          <a href="#" className="hover:text-white transition-colors">LINKEDIN</a>
          <a href="#" className="hover:text-white transition-colors">GITHUB</a>
          <a href="#" className="hover:text-white transition-colors">DRIBBBLE</a>
          <a href="#" className="hover:text-white transition-colors">EMAIL</a>
        </div>

        <div className="text-[10px] font-bold tracking-widest text-gray-600">
          {t.rights}
        </div>
      </div>
    </footer>
  );
};
