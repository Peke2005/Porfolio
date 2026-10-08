'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowDown, MapPin, ChevronDown, Sparkles, Terminal, FileDown } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import ParticlesCanvas from './ParticlesCanvas';
import { useLanguage } from '@/context/LanguageContext';

const codeSnippet = `const developer = {
  nombre: "Pol Carvajal",
  rol: "Desarrollador Web y Multiplataforma",
  ubicacion: "Canyelles, Barcelona",
  formacionActual: "Máster en IA y Big Data",
  skills: [
    "JavaScript", "TypeScript", "React",
    "PHP", "Python", "Java", "SQL"
  ],
  estado: "Creando software e IA"
};`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 }
  }
};

export default function Hero() {
  const codeLines = codeSnippet.split('\n');
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#07070b] text-[#e4e4ef] pt-28 pb-24">
      {/* Interactive Constellation Particles & Moving Light Effects */}
      <ParticlesCanvas />

      {/* Cyber Grid Pattern Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(99, 102, 241, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(99, 102, 241, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 45%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 45%, black 40%, transparent 100%)'
        }}
      />

      {/* Dynamic ambient background orbs with smooth motion */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{
            scale: [1, 1.25, 1],
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-12 w-96 h-96 bg-indigo-600/20 rounded-full blur-[140px]" 
        />
        <motion.div 
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 right-0 w-[32rem] h-[32rem] bg-purple-600/20 rounded-full blur-[160px]" 
        />
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-10 left-1/3 w-80 h-80 bg-cyan-600/15 rounded-full blur-[130px]" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 max-w-6xl">
        {/* Left Side: Content without photo */}
        <motion.div 
          className="flex-1 w-full flex flex-col items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12121e] border border-indigo-500/30 text-indigo-300 text-xs font-mono shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{t('hero.badge')}</span>
            </div>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-3 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-indigo-300">Pol </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Carvajal</span>
          </motion.h1>
          
          <motion.h2 variants={itemVariants} className="text-xl sm:text-2xl lg:text-3xl font-bold text-indigo-200/90 mb-4">
            {t('hero.role')}
          </motion.h2>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2.5 text-xs text-purple-300 font-mono mb-5 bg-gradient-to-r from-purple-950/40 to-indigo-950/40 border border-purple-500/30 px-3.5 py-1.5 rounded-lg shadow-inner">
            <Sparkles size={13} className="text-purple-400 animate-spin" />
            <span>{t('hero.master')}</span>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-2 text-text-secondary mb-6 text-sm">
            <MapPin className="w-4 h-4 text-indigo-400" />
            <span>{t('hero.location')}</span>
          </motion.div>
          
          <motion.p variants={itemVariants} className="max-w-xl text-base sm:text-lg text-[#8888a0] mb-8 leading-relaxed">
            {t('hero.tagline')}
          </motion.p>
          
          {/* Action buttons including direct CV Download */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium rounded-xl transition-all shadow-[0_0_25px_rgba(99,102,241,0.35)] hover:shadow-[0_0_35px_rgba(99,102,241,0.5)] flex items-center justify-center gap-2 text-sm scale-100 hover:scale-[1.02]"
            >
              <span>{t('hero.exploreProjects')}</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a 
              href="/cv.pdf" 
              download="Curriculum_Pol_Carvajal.pdf"
              className="w-full sm:w-auto px-6 py-3 bg-[#16162a] border border-indigo-500/40 hover:border-indigo-400 text-indigo-200 hover:text-white font-medium rounded-xl transition-all flex items-center justify-center gap-2 text-sm shadow-[0_0_20px_rgba(99,102,241,0.15)] hover:shadow-[0_0_25px_rgba(99,102,241,0.3)]"
            >
              <FileDown className="w-4 h-4 text-indigo-400" />
              <span>{t('hero.cv')}</span>
            </a>

            <a 
              href="#experience" 
              className="w-full sm:w-auto px-5 py-3 bg-[#12121a] border border-[#262640] text-text-primary hover:border-indigo-500/50 hover:bg-[#1a1a2e] font-medium rounded-xl transition-colors flex justify-center text-sm"
            >
              <span>{t('hero.experience')}</span>
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <a 
              href="https://github.com/Peke2005" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#8888a0] hover:text-white transition-colors p-2.5 bg-[#12121a] border border-[#262640] hover:border-indigo-500/50 rounded-xl"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href="https://www.linkedin.com/in/pol-carvajal-garcia-332a1a225/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#8888a0] hover:text-[#0A66C2] transition-colors p-2.5 bg-[#12121a] border border-[#262640] hover:border-[#0A66C2]/50 rounded-xl"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Animated Code Terminal */}
        <motion.div 
          className="flex-1 w-full hidden lg:block"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative rounded-2xl overflow-hidden bg-[#0d0d14] border border-[#262640] shadow-[0_0_50px_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-between px-4 py-3 bg-[#13131e] border-b border-[#262640]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ef4444]/90" />
                <div className="w-3 h-3 rounded-full bg-[#eab308]/90" />
                <div className="w-3 h-3 rounded-full bg-[#22c55e]/90" />
              </div>
              <span className="text-xs font-mono text-[#8888a0] flex items-center gap-1.5">
                <Terminal size={12} className="text-indigo-400" />
                pol-carvajal.ts
              </span>
              <div className="w-6" />
            </div>
            <div className="p-6 font-mono text-xs leading-loose overflow-x-auto text-text-secondary">
              {codeLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.08 }}
                  className="whitespace-pre flex"
                >
                  <span className="w-7 inline-block text-gray-600 select-none mr-2 text-[11px]">{index + 1}</span>
                  <span className={
                    line.includes('const') ? 'text-purple-400 font-semibold' :
                    line.includes('nombre:') || line.includes('rol:') || line.includes('ubicacion:') || line.includes('formacionActual:') || line.includes('skills:') || line.includes('estado:') ? 'text-indigo-300' :
                    line.includes('"') ? 'text-emerald-400' :
                    line.includes('[') || line.includes(']') || line.includes('{') || line.includes('}') ? 'text-amber-300' :
                    'text-[#e4e4ef]'
                  }>
                    {line}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a 
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#8888a0] hover:text-[#e4e4ef] transition-colors cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2.2 }}
      >
        <span className="text-[10px] tracking-widest uppercase font-semibold text-indigo-400">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-indigo-400" />
        </motion.div>
      </motion.a>
    </section>
  );
}
