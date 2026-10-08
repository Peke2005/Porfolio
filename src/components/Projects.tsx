'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { allProjects, Project } from '@/lib/data'
import SectionHeading from './SectionHeading'
import { 
  ExternalLink, 
  Github, 
  Play, 
  FileText, 
  Presentation, 
  CheckCircle2, 
  Users, 
  GraduationCap,
  Sparkles,
  Terminal,
  X,
  ArrowUpRight,
  Code2,
  FolderGit2
} from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos')
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [mounted, setMounted] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  const categories = [
    'Todos', 
    'Full Stack', 
    'Software & C#', 
    'Redes y Cableado', 
    'Sistemas y Empresa', 
    'Robótica y Hardware', 
    'Desarrollo Web'
  ]

  const filteredProjects = selectedCategory === 'Todos'
    ? allProjects
    : allProjects.filter((p) => p.category === selectedCategory)

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveProject(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [activeProject])

  return (
    <section id="projects" className="py-24 relative z-10 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <SectionHeading 
          title={t('projects.title')} 
          subtitle={t('projects.subtitle')} 
        />

        {/* Filter categories */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mt-12 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)] scale-105'
                  : 'bg-[#12121a] text-text-secondary border border-white/5 hover:text-white hover:border-indigo-500/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        {/* Project Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectGridCard 
              key={project.id} 
              project={project} 
              index={index} 
              onOpen={() => setActiveProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Interactive Modal Popup teleported via createPortal to document.body to be 100% on top of all navbars */}
      {mounted && createPortal(
        <AnimatePresence>
          {activeProject && (
            <ProjectModal 
              project={activeProject} 
              onClose={() => setActiveProject(null)} 
            />
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  )
}

function ProjectGridCard({ 
  project, 
  index, 
  onOpen 
}: { 
  project: Project; 
  index: number; 
  onOpen: () => void;
}) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()
  const hasVideos = Boolean(project.videos && project.videos.length > 0)

  // Dynamic visual styling per category
  const categoryStyles: Record<string, { border: string; glow: string; text: string; bg: string }> = {
    'Full Stack': {
      border: 'group-hover:border-indigo-500/60',
      glow: 'from-indigo-600/20 via-blue-600/10',
      text: 'text-indigo-400',
      bg: 'bg-indigo-500/10 border-indigo-500/20',
    },
    'Software & C#': {
      border: 'group-hover:border-purple-500/60',
      glow: 'from-purple-600/20 via-pink-600/10',
      text: 'text-purple-400',
      bg: 'bg-purple-500/10 border-purple-500/20',
    },
    'Redes y Cableado': {
      border: 'group-hover:border-cyan-500/60',
      glow: 'from-cyan-600/20 via-sky-600/10',
      text: 'text-cyan-400',
      bg: 'bg-cyan-500/10 border-cyan-500/20',
    },
    'Sistemas y Empresa': {
      border: 'group-hover:border-emerald-500/60',
      glow: 'from-emerald-600/20 via-teal-600/10',
      text: 'text-emerald-400',
      bg: 'bg-emerald-500/10 border-emerald-500/20',
    },
    'Robótica y Hardware': {
      border: 'group-hover:border-amber-500/60',
      glow: 'from-amber-600/20 via-orange-600/10',
      text: 'text-amber-400',
      bg: 'bg-amber-500/10 border-amber-500/20',
    },
    'Desarrollo Web': {
      border: 'group-hover:border-pink-500/60',
      glow: 'from-pink-600/20 via-rose-600/10',
      text: 'text-pink-400',
      bg: 'bg-pink-500/10 border-pink-500/20',
    },
  }

  const currentStyle = categoryStyles[project.category] || categoryStyles['Full Stack']

  return (
    <div
      ref={ref}
      onClick={onOpen}
      className={`group cursor-pointer rounded-3xl bg-[#0e0e18] border border-white/10 ${currentStyle.border} p-6 sm:p-7 flex flex-col justify-between shadow-2xl hover:shadow-[0_0_40px_rgba(99,102,241,0.25)] transition-all duration-300 relative overflow-hidden transform hover:-translate-y-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 40}ms` }}
    >
      {/* Top subtle glow on hover */}
      <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${currentStyle.glow} to-transparent rounded-full blur-3xl group-hover:opacity-100 opacity-30 transition-opacity pointer-events-none`} />

      <div>
        {/* Category & Badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className={`text-[11px] font-mono font-semibold ${currentStyle.text} ${currentStyle.bg} border px-2.5 py-1 rounded-lg`}>
            {project.category}
          </span>
          <div className="flex items-center gap-1.5">
            {hasVideos && (
              <span className="text-[10px] font-mono bg-pink-500/15 text-pink-300 border border-pink-500/30 px-2 py-0.5 rounded-md flex items-center gap-1 shadow-sm">
                <Play size={9} /> Vídeo
              </span>
            )}
            {project.featured && (
              <span className="text-[10px] font-mono bg-amber-400/15 text-amber-300 border border-amber-400/30 px-2 py-0.5 rounded-md">
                ★ Destacado
              </span>
            )}
          </div>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors mb-1.5">
          {project.title}
        </h3>
        <p className="text-xs text-indigo-300/80 font-medium mb-3.5 line-clamp-1">
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="text-xs text-[#8c8cb0] line-clamp-3 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.slice(0, 3).map((tag) => (
            <span 
              key={tag} 
              className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-[#141424] text-[#a0a0c4] border border-white/5"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-[10px] font-mono px-2 py-1 rounded-md bg-[#141424] text-gray-400">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Bottom Card Footer: Click to open button */}
      <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
        <span className="text-[11px] font-mono text-[#787898] truncate max-w-[170px]">
          {project.academicContext}
        </span>
        <div className="flex items-center gap-1.5 text-indigo-400 font-semibold group-hover:text-indigo-300 group-hover:translate-x-1 transition-all shrink-0">
          <span>Abrir</span>
          <ArrowUpRight size={14} />
        </div>
      </div>
    </div>
  )
}

function ProjectModal({ 
  project, 
  onClose 
}: { 
  project: Project; 
  onClose: () => void;
}) {
  const [activeVideo, setActiveVideo] = useState<string | null>(
    project.videos && project.videos.length > 0 ? project.videos[0].embedUrl : null
  )

  const hasMedia = Boolean(project.videos && project.videos.length > 0)

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5 lg:p-8">
      {/* Backdrop with dark blur */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-xl"
      />

      {/* Wide Luxurious Two-Column Modal Dialog */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ type: 'spring', damping: 28, stiffness: 300 }}
        className="relative z-10 w-full max-w-6xl max-h-[92vh] bg-[#0c0c16] border border-white/20 rounded-3xl shadow-[0_0_90px_rgba(99,102,241,0.35)] flex flex-col overflow-hidden"
      >
        {/* Modal Window Top Navigation Bar */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-4 bg-[#111122] border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-semibold px-3 py-1 rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              {project.category}
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white truncate max-w-sm sm:max-w-xl">
              {project.title}
            </h2>
          </div>

          {/* Super Prominent & Intuitive Close Button */}
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-red-500/15 hover:bg-red-500/30 text-red-300 hover:text-white border border-red-500/40 hover:border-red-500/60 transition-all shadow-md active:scale-95 cursor-pointer"
            aria-label="Cerrar ventana"
            title="Cerrar (Esc)"
          >
            <span className="text-xs font-semibold font-mono hidden sm:inline">
              Cerrar
            </span>
            <X size={18} className="stroke-[2.5]" />
          </button>
        </div>

        {/* Modal Body: Spacious 2-Column Desktop Grid to Avoid Clutter */}
        <div className="p-6 sm:p-8 overflow-y-auto overflow-x-hidden space-y-8 text-[#9898be] text-sm leading-relaxed">
          {/* Header Info Strip */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-white/10">
            <div>
              <p className="text-indigo-300 font-bold text-lg sm:text-xl mb-1">
                {project.subtitle}
              </p>
              <p className="text-xs text-[#8080a8] font-mono flex items-center gap-2">
                <GraduationCap size={15} className="text-indigo-400 shrink-0" />
                <span>{project.academicContext}</span>
                {project.teamSize && <span>• {project.teamSize}</span>}
              </p>
            </div>

            {/* Quick Action Links (Repos, Docs, Slides) */}
            <div className="flex flex-wrap items-center gap-2.5">
              {project.docs.map((doc) => {
                const isFrontend = doc.type === 'frontend'
                const isBackend = doc.type === 'backend'
                const isWord = doc.type === 'word'
                const isSlides = doc.type === 'powerpoint'

                return (
                  <a
                    key={doc.url}
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                      isFrontend
                        ? 'border border-indigo-500 bg-indigo-600/30 text-white hover:bg-indigo-600/50 shadow-[0_0_20px_rgba(99,102,241,0.35)]'
                        : isBackend
                        ? 'border border-purple-500/60 bg-purple-500/25 text-purple-200 hover:bg-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.3)]'
                        : isWord
                        ? 'border border-blue-500/60 bg-blue-500/20 text-blue-300 hover:bg-blue-500/35 hover:text-white'
                        : isSlides
                        ? 'border border-amber-500/60 bg-amber-500/20 text-amber-300 hover:bg-amber-500/35 hover:text-white'
                        : 'border border-white/15 text-gray-200 hover:text-white hover:border-indigo-500/50 bg-[#161628]'
                    }`}
                  >
                    {isWord ? <FileText size={15} /> : isSlides ? <Presentation size={15} /> : <Github size={15} />}
                    <span>{doc.label}</span>
                    <ExternalLink size={12} className="opacity-70" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Two-Column Showcase Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Visual Media / Interactive Video / Terminal (6.5 Cols) */}
            <div className="lg:col-span-7 space-y-4">
              {hasMedia ? (
                <div className="space-y-3">
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-black">
                    <iframe
                      src={activeVideo || (project.videos && project.videos[0].embedUrl)}
                      title={project.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>

                  {project.videos && project.videos.length > 1 && (
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <span className="text-xs font-mono text-gray-400 mr-1">Vídeos de demostración:</span>
                      {project.videos.map((vid, vIdx) => (
                        <button
                          key={vIdx}
                          onClick={() => setActiveVideo(vid.embedUrl)}
                          className={`text-xs font-mono px-3.5 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
                            activeVideo === vid.embedUrl
                              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md font-semibold'
                              : 'bg-[#151525] text-[#8080a8] hover:text-white border border-white/10'
                          }`}
                        >
                          <Play size={11} />
                          <span>{vid.title || `Vídeo ${vIdx + 1}`}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="rounded-2xl overflow-hidden bg-[#07070e] border border-white/15 shadow-2xl font-mono text-xs">
                  <div className="flex items-center justify-between px-4 py-3 bg-[#121222] border-b border-white/10">
                    <div className="flex gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-[11px] text-[#8080a0] flex items-center gap-1.5">
                      <Terminal size={13} className="text-indigo-400" />
                      {project.id}.manifest.ts
                    </span>
                    <div className="w-6" />
                  </div>
                  <div className="p-6 text-gray-300 space-y-2.5 leading-relaxed">
                    <div><span className="text-purple-400 font-semibold">export const</span> <span className="text-indigo-300">projectConfig</span> = {'{'}</div>
                    <div className="pl-5"><span className="text-blue-300">name:</span> <span className="text-emerald-400">&quot;{project.title}&quot;</span>,</div>
                    <div className="pl-5"><span className="text-blue-300">category:</span> <span className="text-emerald-400">&quot;{project.category}&quot;</span>,</div>
                    <div className="pl-5"><span className="text-blue-300">stack:</span> <span className="text-amber-300">[{project.tags.map(t => `"${t}"`).join(', ')}]</span>,</div>
                    <div className="pl-5"><span className="text-blue-300">deployment:</span> <span className="text-emerald-400">&quot;Production Ready&quot;</span></div>
                    <div>{'};'}</div>
                  </div>
                </div>
              )}

              {/* Tags Pills below video/terminal */}
              <div className="pt-2">
                <span className="text-xs font-mono text-gray-400 block mb-2">Stack Tecnológico:</span>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono px-3 py-1.5 rounded-xl bg-[#141426] text-indigo-300 border border-indigo-500/30">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Technical Memory & Key Highlights (5.5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Detailed Memory */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Sparkles size={16} className="text-indigo-400" />
                  <span>Memoria Técnica & Explicación</span>
                </h4>
                <div className="bg-[#121222] p-6 rounded-2xl border border-white/10 whitespace-pre-line text-sm text-[#9c9cb8] leading-relaxed shadow-inner">
                  {project.longDescription}
                </div>
              </div>

              {/* Key Implementation Points */}
              {project.keyPoints && project.keyPoints.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400" />
                    <span>Puntos Clave de Implementación</span>
                  </h4>
                  <div className="space-y-2.5">
                    {project.keyPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#121222] border border-white/10 text-xs text-[#9090b8]">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
