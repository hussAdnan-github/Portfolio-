import React from 'react';
import { motion } from 'motion/react';
import { Language, translations } from '../translations';
import { ArrowUpRight, GraduationCap, Microscope, Quote } from 'lucide-react';
import { cn } from '../lib/utils';

interface AcademicProps {
  lang: Language;
  onBack: () => void;
}

export const Academic: React.FC<AcademicProps> = ({ lang, onBack }) => {
  const t = translations[lang].academic;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://picsum.photos/seed/library/1920/1080?blur=10" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-dark/80" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-bold tracking-widest text-gray-400 mb-8"
          >
            {t.hero.badge}
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 max-w-4xl mx-auto"
          >
            {t.hero.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12"
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            onClick={onBack}
            className="bg-white text-brand-dark px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors"
          >
            {t.hero.backHome}
          </motion.button>
        </div>
      </section>

      {/* Studies & Publications */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-12 gap-16">
        <div className="md:col-span-4 space-y-12">
          <h2 className="text-4xl font-bold">{t.postgrad.title}</h2>
          
          <div className="bg-brand-card border border-white/5 p-8 rounded-3xl space-y-6">
            <div>
              <div className="text-[10px] font-bold text-brand-blue tracking-widest mb-2">{t.postgrad.degree.label}</div>
              <div className="text-xl font-bold">{t.postgrad.degree.value}</div>
              <div className="text-sm text-gray-500 mt-1">{t.postgrad.degree.uni}</div>
            </div>
            <div className="pt-6 border-t border-white/5">
              <div className="text-[10px] font-bold text-orange-400 tracking-widest mb-2">{t.postgrad.focus.label}</div>
              <div className="text-xl font-bold">{t.postgrad.focus.value}</div>
              <div className="text-sm text-gray-500 mt-1">{t.postgrad.focus.gpa}</div>
            </div>
          </div>
        </div>

        <div className="md:col-span-8 space-y-12">
          <div className="flex justify-between items-end">
            <h2 className="text-[10px] font-bold tracking-widest text-gray-500">{t.publications.title}</h2>
          </div>
          
          <div className="space-y-6">
            {t.publications.items.map((pub, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: lang === 'en' ? 10 : -10 }}
                className="group bg-brand-card border border-white/5 p-8 rounded-3xl relative overflow-hidden"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-bold text-gray-500">{pub.tag}</span>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-brand-dark transition-colors">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 max-w-xl">{pub.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{pub.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Thesis Spotlight */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-brand-card border border-white/5 rounded-[40px] overflow-hidden grid md:grid-cols-2 items-center">
          <div className="p-12 md:p-20 space-y-8">
            <div className="text-orange-400 text-[10px] font-bold tracking-widest">{t.thesis.badge}</div>
            <h2 className="text-5xl font-bold leading-tight">{t.thesis.title}</h2>
            <p className="text-xl text-gray-400 italic leading-relaxed">
              {t.thesis.desc}
            </p>
            <div className="flex gap-12 pt-8">
              <div>
                <div className="text-3xl font-bold text-brand-blue">{t.thesis.grade}</div>
                <div className="text-[10px] font-bold text-gray-500 tracking-widest mt-1">{t.thesis.gradeLabel}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-blue">{t.thesis.rank}</div>
                <div className="text-[10px] font-bold text-gray-500 tracking-widest mt-1">{t.thesis.rankLabel}</div>
              </div>
            </div>
          </div>
          <div className="aspect-square bg-white/5 p-12">
            <img 
              src="https://picsum.photos/seed/vr/800/800" 
              className="w-full h-full object-cover rounded-3xl grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Teaching Portfolio */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <div className="text-[10px] font-bold tracking-widest text-brand-blue mb-4">{t.teaching.badge}</div>
            <h2 className="text-5xl font-bold">{t.teaching.title}</h2>
          </div>
          <p className="text-gray-500 max-w-xs text-sm md:text-right">
            {t.teaching.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.teaching.courses.map((course, i) => (
            <div key={i} className="bg-brand-card border border-white/5 p-8 rounded-3xl">
              <GraduationCap className="text-brand-blue mb-6" size={32} />
              <h3 className="text-xl font-bold mb-2">{course.title}</h3>
              <div className="text-[10px] font-bold text-gray-500 tracking-widest mb-6">{course.uni}</div>
              <ul className="space-y-3">
                {course.items.map((item, j) => (
                  <li key={j} className="text-sm text-gray-400 flex items-center gap-2">
                    <div className="w-1 h-1 bg-brand-blue rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="bg-brand-card border border-white/5 p-8 rounded-3xl flex flex-col justify-between">
            <Quote className="text-brand-blue mb-6" size={32} />
            <p className="text-lg text-gray-300 italic leading-relaxed mb-8">
              {t.teaching.testimonial.quote}
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10" />
              <div>
                <div className="text-sm font-bold">{t.teaching.testimonial.author}</div>
                <div className="text-[10px] font-bold text-gray-500 tracking-widest">{t.teaching.testimonial.role}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center mb-16">
          <div className="text-[10px] font-bold tracking-widest text-gray-500 mb-4 uppercase">Competitive Achievements</div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {t.achievements.items.map((item, i) => (
            <div key={i} className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-orange-400">
                <Microscope size={24} />
              </div>
              <div>
                <div className="text-xs text-gray-500 font-bold tracking-widest mb-1">{item.title}</div>
                <div className="text-xl font-bold">{item.value}</div>
                <div className="text-[10px] text-gray-600 mt-1">{item.year}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Speaking */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-[10px] font-bold tracking-widest text-gray-500 mb-12 uppercase">Conferences & Speaking</div>
        <div className="grid md:grid-cols-3 gap-8">
          {t.speaking.items.map((item, i) => (
            <div key={i} className="group">
              <div className="aspect-video rounded-2xl overflow-hidden mb-6 bg-white/5">
                <img 
                  src={item.image} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-[10px] font-bold text-brand-blue tracking-widest mb-2">{item.tag}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Footer */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5 grid md:grid-cols-2 gap-20">
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <div className="w-1 h-8 bg-brand-blue" />
            {t.skills.research.title}
          </h3>
          <div className="flex flex-wrap gap-3">
            {t.skills.research.items.map((item, i) => (
              <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <div className="w-1 h-8 bg-orange-400" />
            {t.skills.pedagogy.title}
          </h3>
          <div className="flex flex-wrap gap-3">
            {t.skills.pedagogy.items.map((item, i) => (
              <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
