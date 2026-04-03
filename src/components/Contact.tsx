import React from 'react';
import { motion } from 'motion/react';
import { Language, translations } from '../translations';
import { Mail, MapPin } from 'lucide-react';

interface ContactProps {
  lang: Language;
}

export const Contact: React.FC<ContactProps> = ({ lang }) => {
  const t = translations[lang].contact;

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="grid md:grid-cols-2 gap-20">
        <div>
          <h2 className="text-5xl font-bold mb-8 leading-tight">{t.title}</h2>
          <p className="text-gray-400 text-lg mb-12 max-w-md">
            {t.subtitle}
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                <Mail size={18} className="text-brand-blue" />
              </div>
              <span className="font-medium">hello@obsidiangallery.com</span>
            </div>
            <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                <MapPin size={18} className="text-brand-blue" />
              </div>
              <span className="font-medium">{t.location}</span>
            </div>
          </div>
        </div>

        <div className="bg-brand-card border border-white/5 p-10 rounded-[40px]">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-500 tracking-widest">{t.name}</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-white/10 pb-2 focus:border-brand-blue outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-500 tracking-widest">{t.email}</label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-white/10 pb-2 focus:border-brand-blue outline-none transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 tracking-widest">{t.projectVision}</label>
              <textarea
                rows={4}
                className="w-full bg-transparent border-b border-white/10 pb-2 focus:border-brand-blue outline-none transition-colors resize-none"
              />
            </div>
            <button className="w-full bg-brand-blue text-brand-dark py-5 rounded-full font-bold hover:bg-brand-blue/90 transition-all">
              {t.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
