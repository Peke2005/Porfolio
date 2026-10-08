'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import SectionHeading from './SectionHeading';
import { educationList } from '@/lib/data';
import { GraduationCap, Sparkles, CheckCircle2, Clock } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Education() {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useLanguage();

  return (
    <section id="education" className="py-24 relative scroll-mt-20 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <SectionHeading 
          title={t('edu.title')} 
          subtitle={t('edu.subtitle')} 
        />
        
        <div 
          ref={ref}
          className={`mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {educationList.map((edu, idx) => {
            const isMaster = edu.badgeType === 'master';

            return (
              <div
                key={idx}
                className={`p-7 rounded-2xl border transition-all duration-300 relative flex flex-col justify-between ${
                  isMaster
                    ? 'bg-gradient-to-br from-purple-950/40 via-[#151525] to-[#12121a] border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.15)] md:col-span-2'
                    : 'bg-[#12121a] border-[#262640] hover:border-indigo-500/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`text-xs font-mono font-semibold px-2.5 py-1 rounded ${
                      isMaster
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                        : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                    }`}>
                      {edu.period}
                    </span>

                    <span className={`text-xs font-medium flex items-center gap-1.5 ${
                      isMaster ? 'text-purple-300' : 'text-emerald-400'
                    }`}>
                      {isMaster ? <Clock size={13} className="animate-spin text-purple-400" /> : <CheckCircle2 size={13} />}
                      {edu.status}
                    </span>
                  </div>

                  <h3 className={`font-bold text-text-primary mb-1 ${
                    isMaster ? 'text-2xl text-purple-200' : 'text-lg'
                  }`}>
                    {edu.degree}
                  </h3>

                  <p className="text-text-secondary text-sm">
                    {edu.institution} Centre d&apos;Estudis
                  </p>
                </div>

                {isMaster && (
                  <div className="mt-4 pt-4 border-t border-purple-500/20 flex items-center gap-2 text-xs text-purple-300/80">
                    <Sparkles size={14} className="text-purple-400" />
                    <span>Especialización técnica en Machine Learning, Deep Learning y Big Data Analytics</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
