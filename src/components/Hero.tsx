import React from 'react';
import { motion } from 'motion/react';
import { Language, translations } from '../translations';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = translations[lang].hero;

  return (
    <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: lang === 'en' ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-bold tracking-widest text-gray-400 mb-6">
            {t.badge}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-8">
            {t.title.split(' ').map((word, i) => (
              <span key={i} className={word === 'Digital' || word === 'الرقمية' ? 'text-brand-blue' : ''}>
                {word}{' '}
              </span>
            ))}
          </h1>
          <p className="text-lg text-gray-400 max-w-md mb-10 leading-relaxed">
            {t.subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-brand-blue text-brand-dark px-8 py-4 rounded-full font-bold hover:bg-brand-blue/90 transition-all">
              {t.viewPortfolio}
            </button>
            <button className="bg-white/5 border border-white/10 px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
              {t.theProcess}
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative aspect-[4/5] rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700"
        >
          <img
            src="https://picsum.photos/seed/obsidian-hero/800/1000"
            alt="Portrait"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};
