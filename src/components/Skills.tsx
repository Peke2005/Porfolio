'use client';

import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import { skillCategories, Skill } from '@/lib/data';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Wrench,
  Network,
  Cpu
} from 'lucide-react';

const categoryIconMap: Record<string, React.ElementType> = {
  Layout,
  Server,
  Database,
  Wrench,
  Code2,
};

const lucideSkillMap: Record<string, React.ElementType> = {
  Network,
  Cpu,
};

import { useLanguage } from '@/context/LanguageContext';

export default function Skills() {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 w-full scroll-mt-20">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div 
          ref={ref} 
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <SectionHeading 
            title={t('skills.title')} 
            subtitle={t('skills.subtitle')} 
          />
          
          {/* items-stretch ensures all 3 outer cards have the exact same full height */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 items-stretch">
            {skillCategories.map((category, index) => {
              const IconComponent = categoryIconMap[category.icon] || Code2;
              
              return (
                <div 
                  key={index}
                  className="bg-[#10101a] border border-[#222238] rounded-2xl p-6 transition-all duration-300 hover:border-indigo-500/50 hover:shadow-[0_0_25px_rgba(99,102,241,0.12)] flex flex-col justify-start h-full"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#222238]/60">
                    <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      <IconComponent size={22} />
                    </div>
                    <h3 className="text-lg font-bold text-white">{category.title}</h3>
                  </div>
                  
                  {/* Grid of skills anchored at the top without stretching downwards */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 content-start">
                    {category.skills.map((skill: Skill, skillIndex: number) => {
                      const LucideComp = skill.lucideIcon ? lucideSkillMap[skill.lucideIcon] : null;

                      return (
                        <div 
                          key={skillIndex}
                          className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#0a0a12]/60 border border-[#1f1f33] hover:border-indigo-500/40 hover:bg-indigo-950/20 transition-all duration-300 group cursor-default hover:-translate-y-0.5 min-h-[90px]"
                        >
                          <div className="w-8 h-8 mb-2 flex items-center justify-center transition-all duration-300">
                            {LucideComp ? (
                              <LucideComp className="w-7 h-7 text-indigo-400 group-hover:text-indigo-300 group-hover:scale-110 transition-transform duration-300" />
                            ) : (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img 
                                src={skill.icon} 
                                alt={`${skill.name} icon`}
                                className="w-full h-full object-contain filter drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
                                width={32}
                                height={32}
                                loading="lazy"
                              />
                            )}
                          </div>
                          
                          <span className="text-[11px] font-medium text-gray-300 group-hover:text-white text-center leading-tight break-words px-1">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
