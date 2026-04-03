import React from 'react';
import { motion } from 'motion/react';
import { Language, translations } from '../translations';
import { cn } from '../lib/utils';

interface ExperienceProps {
  lang: Language;
}

export const Experience: React.FC<ExperienceProps> = ({ lang }) => {
  const t = translations[lang].experience;

  return (
    <section id="experience" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <h2 className="text-4xl font-bold text-center mb-20">{t.title}</h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />

        <div className="space-y-12">
          {t.roles.map((role, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={cn(
                "relative flex flex-col md:flex-row items-center gap-8",
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              )}
            >
              {/* Dot */}
              <div className="absolute left-1/2 w-3 h-3 bg-brand-blue rounded-full -translate-x-1/2 hidden md:block z-10 shadow-[0_0_10px_rgba(124,157,255,0.5)]" />

              <div className="w-full md:w-1/2">
                <div className={cn(
                  "bg-brand-card border border-white/5 p-8 rounded-3xl hover:border-brand-blue/30 transition-colors",
                  i % 2 === 0 ? "md:text-right" : "md:text-left"
                )}>
                  <div className="text-brand-blue text-[10px] font-bold tracking-widest mb-2">
                    {role.company}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{role.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {role.desc}
                  </p>
                </div>
              </div>

              <div className={cn(
                "w-full md:w-1/2 text-sm font-bold text-gray-500",
                i % 2 === 0 ? "md:text-left" : "md:text-right"
              )}>
                {role.period}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
