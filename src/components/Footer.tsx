import { Github, Linkedin, Heart } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-white/10 bg-slate-950/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center space-x-2 text-xl font-bold text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              Pol Carvajal Garcia
            </span>
          </div>

          <div className="flex items-center space-x-6 text-gray-400">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#0A66C2] transition-colors p-2 hover:bg-white/10 rounded-full" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <div className="text-sm text-gray-500 flex flex-col items-center md:items-end gap-1">
            <p>&copy; {currentYear} Pol Carvajal Garcia. Todos los derechos reservados.</p>
            <p className="flex items-center gap-1.5 mt-2 md:mt-0">
              Construido con Next.js & Tailwind CSS 
              <Heart className="w-3.5 h-3.5 text-red-500 animate-pulse" />
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
