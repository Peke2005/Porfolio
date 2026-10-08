'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { aboutText, personalInfo } from '@/lib/data';
import { 
  User, 
  MapPin, 
  Briefcase, 
  Mail, 
  Phone, 
  Languages, 
  Award, 
  Sparkles, 
  Users2, 
  Target, 
  Smile, 
  HeartHandshake, 
  ShieldCheck,
  Code2,
  Terminal,
  Activity,
  CheckCircle2,
  FileDown
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import { useLanguage } from '@/context/LanguageContext';

const skillIconMap: Record<string, React.ElementType> = {
  'Trabajo en equipo': Users2,
  'Constancia y Responsabilidad': ShieldCheck,
  'Empatía': HeartHandshake,
  'Compromiso': Target,
  'Actitud Positiva': Smile,
};

export default function About() {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-transparent relative scroll-mt-20 overflow-hidden">
      {/* Subtle glow in background */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <SectionHeading 
          title={t('about.title')} 
          subtitle={t('about.subtitle')} 
        />
        
        <div 
          ref={ref}
          className={`mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Main Description Column */}
          <div className="lg:col-span-7 bg-[#0d0d17] border border-white/10 rounded-3xl p-8 lg:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-white/5 flex-wrap">
                <div className="flex items-center gap-2.5 text-indigo-400 font-semibold text-lg">
                  <User size={20} className="text-indigo-400" />
                  <span className="text-white font-bold text-xl">{t('about.profile')}</span>
                </div>
                
                <div className="flex items-center gap-2.5">
                  <a
                    href="/cv.pdf"
                    download="Curriculum_Pol_Carvajal.pdf"
                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-indigo-600/30 to-purple-600/30 hover:from-indigo-600 hover:to-purple-600 text-indigo-200 hover:text-white border border-indigo-500/40 text-xs font-mono font-medium transition-all shadow-[0_0_15px_rgba(99,102,241,0.2)] active:scale-95 group/cv"
                    title="Descargar Curriculum Vitae oficial en PDF"
                  >
                    <FileDown size={14} className="text-indigo-400 group-hover/cv:text-white transition-colors" />
                    <span>{t('hero.cv')}</span>
                  </a>

                  <span className="text-[11px] font-mono px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {t('about.active')}
                  </span>
                </div>
              </div>
              
              <div className="space-y-4 text-[#9090b0] text-base leading-relaxed">
                <p>{aboutText.intro}</p>
                <p>{aboutText.detail}</p>
                <p>{aboutText.current}</p>
              </div>

              {/* Highlight Metrics */}
              <div className="grid grid-cols-3 gap-3 mt-8 pt-6 border-t border-white/5">
                <div className="p-3.5 rounded-2xl bg-[#121220]/70 border border-white/5 text-center">
                  <div className="text-2xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                    3
                  </div>
                  <div className="text-[11px] text-[#8080a0] font-mono mt-0.5">{t('about.metric1')}</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#121220]/70 border border-white/5 text-center">
                  <div className="text-2xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    4+
                  </div>
                  <div className="text-[11px] text-[#8080a0] font-mono mt-0.5">{t('about.metric2')}</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#121220]/70 border border-white/5 text-center">
                  <div className="text-2xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                    2027
                  </div>
                  <div className="text-[11px] text-[#8080a0] font-mono mt-0.5">{t('about.metric3')}</div>
                </div>
              </div>
            </div>

            {/* Quick Details strip: Redesigned as flexible wrapped tags without truncations */}
            <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-2.5 text-xs font-mono">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-indigo-950/30 border border-indigo-500/20 text-indigo-200">
                <Briefcase size={14} className="text-indigo-400 shrink-0" />
                <span>{personalInfo.role}</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-purple-950/30 border border-purple-500/20 text-purple-200">
                <MapPin size={14} className="text-purple-400 shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-cyan-200">
                <Mail size={14} className="text-cyan-400 shrink-0" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-emerald-200">
                <Phone size={14} className="text-emerald-400 shrink-0" />
                <span>{personalInfo.phone}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Competencias & Idiomas */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Soft Skills Card Redesigned with colorful accent styles */}
            <div className="bg-[#0d0d17] border border-white/10 rounded-3xl p-7 flex-1 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-indigo-500/40 transition-all duration-300">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                      <Award size={18} />
                    </div>
                    <div>
                      <span className="text-white font-bold text-base block">{t('about.softskills')}</span>
                      <span className="text-[11px] text-indigo-400/80 font-mono">{t('about.softskillsSubtitle')}</span>
                    </div>
                  </div>
                  <Sparkles size={16} className="text-indigo-400 animate-pulse" />
                </div>

                <p className="text-xs text-[#9090af] mb-5 leading-relaxed">
                  {t('about.softskillsText')}
                </p>

                {/* Enhanced List of Soft Skills with subtle colored backgrounds & icons */}
                <div className="flex flex-col gap-2.5">
                  {personalInfo.softSkills.map((skill, idx) => {
                    const IconComp = skillIconMap[skill] || CheckCircle2;
                    const colorVariants = [
                      {
                        bg: 'from-indigo-950/40 to-blue-950/20',
                        border: 'border-indigo-500/25 hover:border-indigo-400/50',
                        iconBg: 'bg-indigo-500/15 border-indigo-500/30 text-indigo-400',
                        text: 'text-indigo-100',
                        badge: 'Colaboración',
                      },
                      {
                        bg: 'from-emerald-950/40 to-teal-950/20',
                        border: 'border-emerald-500/25 hover:border-emerald-400/50',
                        iconBg: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400',
                        text: 'text-emerald-100',
                        badge: 'Dedicación',
                      },
                      {
                        bg: 'from-purple-950/40 to-pink-950/20',
                        border: 'border-purple-500/25 hover:border-purple-400/50',
                        iconBg: 'bg-purple-500/15 border-purple-500/30 text-purple-400',
                        text: 'text-purple-100',
                        badge: 'Relaciones',
                      },
                      {
                        bg: 'from-amber-950/40 to-orange-950/20',
                        border: 'border-amber-500/25 hover:border-amber-400/50',
                        iconBg: 'bg-amber-500/15 border-amber-500/30 text-amber-400',
                        text: 'text-amber-100',
                        badge: 'Objetivos',
                      },
                      {
                        bg: 'from-sky-950/40 to-cyan-950/20',
                        border: 'border-sky-500/25 hover:border-sky-400/50',
                        iconBg: 'bg-sky-500/15 border-sky-500/30 text-sky-400',
                        text: 'text-sky-100',
                        badge: 'Mentalidad',
                      },
                    ];
                    const variant = colorVariants[idx % colorVariants.length];

                    return (
                      <div 
                        key={skill}
                        className={`flex items-center justify-between p-3 rounded-2xl bg-gradient-to-r ${variant.bg} border ${variant.border} transition-all duration-200 group/skill`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-xl ${variant.iconBg} border flex items-center justify-center shrink-0`}>
                            <IconComp size={15} />
                          </div>
                          <span className={`text-xs font-semibold ${variant.text} leading-tight`}>
                            {skill}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-[#9898b8] border border-white/5">
                          {variant.badge}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom quote badge */}
              <div className="mt-5 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] font-mono text-indigo-300/90 relative z-10">
                <Activity size={13} className="text-emerald-400 animate-pulse" />
                <span>{t('about.quote')}</span>
              </div>
            </div>

            {/* Languages Card Redesigned */}
            <div className="bg-[#0d0d17] border border-white/10 rounded-3xl p-7 shadow-2xl relative overflow-hidden group hover:border-indigo-500/40 transition-all duration-300">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                    <Languages size={18} />
                  </div>
                  <div>
                    <span className="text-white font-bold text-base block">{t('about.languages')}</span>
                    <span className="text-[11px] text-indigo-400/80 font-mono">{t('about.languagesSubtitle')}</span>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-[#8888a0]">3 Lenguas</span>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {personalInfo.languages.map((lang) => {
                  const isNative = lang.level === 'Nativo';
                  return (
                    <div 
                      key={lang.name} 
                      className={`p-3.5 rounded-2xl transition-all text-center flex flex-col justify-between group/lang ${
                        isNative 
                          ? 'bg-gradient-to-b from-emerald-950/30 to-[#10101c] border border-emerald-500/25 hover:border-emerald-400/50' 
                          : 'bg-gradient-to-b from-sky-950/30 to-[#10101c] border border-sky-500/25 hover:border-sky-400/50'
                      }`}
                    >
                      <div className="font-bold text-white text-xs group-hover/lang:text-indigo-300 transition-colors">
                        {lang.name}
                      </div>
                      <div className={`mt-2 inline-block text-[11px] font-mono font-semibold px-2 py-0.5 rounded-lg border ${
                        isNative 
                          ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30' 
                          : 'bg-sky-500/15 text-sky-300 border-sky-500/30'
                      }`}>
                        {lang.level}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
