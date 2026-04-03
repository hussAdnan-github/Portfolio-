import React from 'react';
import { motion } from 'motion/react';
import { Language, translations } from '../translations';
import { Layers, PenTool } from 'lucide-react';

interface PhilosophyProps {
  lang: Language;
}

const arsenal = [
  { name: 'TYPESCRIPT', icon: 'JS' },
  { name: 'REACT', icon: '⚛️' },
  { name: 'TAILWIND', icon: 'CSS' },
  { name: 'POSTGRESQL', icon: 'DB' },
  { name: 'AWS', icon: '☁️' },
  { name: 'NODE.JS', icon: '📦' },
];

export const Philosophy: React.FC<PhilosophyProps> = ({ lang }) => {
  const t = translations[lang].philosophy;

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="grid md:grid-cols-2 gap-20">
        <div>
          <h2 className="text-4xl font-bold mb-10">{t.title}</h2>
          <div className="space-y-6 text-gray-400 leading-relaxed">
            <p>{t.description1}</p>
            <p>{t.description2}</p>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-12">
            <div className="space-y-3">
              <Layers className="text-brand-blue w-6 h-6" />
              <h3 className="font-bold">{t.architecture.title}</h3>
              <p className="text-xs text-gray-500">{t.architecture.desc}</p>
            </div>
            <div className="space-y-3">
              <PenTool className="text-orange-400 w-6 h-6" />
              <h3 className="font-bold">{t.curation.title}</h3>
              <p className="text-xs text-gray-500">{t.curation.desc}</p>
            </div>
          </div>
        </div>

        <div>
          <div className="text-[10px] font-bold tracking-widest text-gray-500 mb-8">
            {t.coreArsenal}
          </div>
          <div className="grid grid-cols-3 gap-4">
            {arsenal.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-brand-card border border-white/5 p-6 rounded-2xl flex flex-col items-center justify-center gap-4 text-center"
              >
                <div className="text-2xl">{item.icon}</div>
                <div className="text-[10px] font-bold text-gray-500">{item.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
