'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import SectionHeading from './SectionHeading';
import { experiences } from '@/lib/data';
import { Briefcase, Calendar, Building2, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Experience() {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 relative scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <SectionHeading 
          title={t('exp.title')} 
          subtitle={t('exp.subtitle')} 
        />
        
        <div 
          ref={ref}
          className={`mt-16 space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {experiences.map((exp) => (
            <div 
              key={exp.id}
              className="bg-[#12121a] border border-[#262640] rounded-2xl p-7 lg:p-8 hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.12)] transition-all duration-300 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <span className="text-xs font-mono font-medium text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded">
                    {exp.type}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-text-primary mt-2 group-hover:text-indigo-400 transition-colors">
                    {exp.role}
                  </h3>
                </div>

                <div className="flex flex-col sm:items-end text-xs text-text-secondary font-mono">
                  <div className="flex items-center gap-1.5 text-indigo-300 font-semibold text-sm">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-1 text-[#8888a0]">
                    <Building2 size={13} />
                    <span>{exp.company}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#262640]/70">
                <ul className="space-y-2.5">
                  {exp.tasks.map((task, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-[#8888a0] leading-relaxed">
                      <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
