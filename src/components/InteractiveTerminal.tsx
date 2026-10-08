'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft, Maximize2, Trash2 } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/context/LanguageContext';

interface CommandOutput {
  command: string;
  response: React.ReactNode;
}

export default function InteractiveTerminal() {
  const { ref, isVisible } = useScrollReveal();
  const { t, lang } = useLanguage();
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'welcome',
      response: (
        <div className="space-y-1 text-gray-300">
          <p className="text-emerald-400 font-semibold">
            ● Pol Carvajal CLI [v2.4.0-release] — Interactive Developer Shell
          </p>
          <p className="text-gray-400 text-xs">
            Escribe <span className="text-indigo-400 font-mono font-bold">help</span> para ver todos los comandos disponibles, o prueba <span className="text-purple-400 font-mono font-bold">skills</span>, <span className="text-cyan-400 font-mono font-bold">projects</span>, <span className="text-amber-400 font-mono font-bold">cv</span>.
          </p>
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let response: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        response = (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs py-1">
            <div><span className="text-indigo-400 font-bold font-mono">about</span> <span className="text-gray-400">— Breve resumen profesional</span></div>
            <div><span className="text-indigo-400 font-bold font-mono">skills</span> <span className="text-gray-400">— Tecnologías y lenguajes clave</span></div>
            <div><span className="text-indigo-400 font-bold font-mono">education</span> <span className="text-gray-400">— Titulaciones académicas (SMR, DAW, DAM, IA)</span></div>
            <div><span className="text-indigo-400 font-bold font-mono">projects</span> <span className="text-gray-400">— Lista de proyectos destacados</span></div>
            <div><span className="text-indigo-400 font-bold font-mono">cv</span> <span className="text-gray-400">— Enlace directo para descargar CV en PDF</span></div>
            <div><span className="text-indigo-400 font-bold font-mono">github</span> <span className="text-gray-400">— Abrir repositorio oficial en GitHub</span></div>
            <div><span className="text-indigo-400 font-bold font-mono">clear</span> <span className="text-gray-400">— Limpiar pantalla de la terminal</span></div>
            <div><span className="text-indigo-400 font-bold font-mono">contact</span> <span className="text-gray-400">— Información de correo y ubicación</span></div>
          </div>
        );
        break;

      case 'about':
        response = (
          <div className="space-y-1 text-xs text-gray-300">
            <p className="text-indigo-300 font-semibold">Pol Carvajal — Desarrollador Web y Multiplataforma</p>
            <p className="text-gray-400">
              Ubicado en Barcelona. Titulado en ciclo medio SMR y doble ciclo superior DAM + DAW. Actualmente cursando el Máster en Inteligencia Artificial & Big Data en Stucom (2026-2027).
            </p>
          </div>
        );
        break;

      case 'skills':
        response = (
          <div className="space-y-2 text-xs">
            <p className="text-indigo-300 font-bold">● Stack Tecnológico Dominado:</p>
            <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
              <span className="px-2 py-0.5 rounded bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">React</span>
              <span className="px-2 py-0.5 rounded bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">TypeScript</span>
              <span className="px-2 py-0.5 rounded bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">PHP / Laravel</span>
              <span className="px-2 py-0.5 rounded bg-purple-500/15 text-purple-300 border border-purple-500/30">Python / IA</span>
              <span className="px-2 py-0.5 rounded bg-purple-500/15 text-purple-300 border border-purple-500/30">Java</span>
              <span className="px-2 py-0.5 rounded bg-purple-500/15 text-purple-300 border border-purple-500/30">C# / .NET</span>
              <span className="px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">Flutter / Dart</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">MySQL / PostgreSQL</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">Linux & Redes Cisco</span>
            </div>
          </div>
        );
        break;

      case 'education':
        response = (
          <div className="space-y-1.5 text-xs">
            <p className="text-emerald-400 font-bold">1. Máster en Inteligencia Artificial y Big Data (Stucom | 2026-2027) [Cursando]</p>
            <p className="text-indigo-300 font-bold">2. CFGS en Desarrollo de Aplicaciones Multiplataforma (DAM) (Stucom | 2025-2026)</p>
            <p className="text-indigo-300 font-bold">3. CFGS en Desarrollo de Aplicaciones Web (DAW) (Stucom | 2023-2025)</p>
            <p className="text-gray-400 font-bold">4. CFGM en Sistemas Microinformáticos y Redes (SMR) (Stucom | 2021-2023)</p>
          </div>
        );
        break;

      case 'projects':
        response = (
          <div className="space-y-1.5 text-xs">
            <p><span className="text-indigo-400 font-bold">Fichestu:</span> Sistema full-stack de control de jornadas con frontend y backend desacoplados.</p>
            <p><span className="text-indigo-400 font-bold">CineFlix:</span> Plataforma de streaming en React, TypeScript y PHP REST API.</p>
            <p><span className="text-indigo-400 font-bold">MarcoPolo:</span> Software de escritorio a gran escala en C#.</p>
            <p><span className="text-indigo-400 font-bold">Transversal:</span> Infraestructura de red lógica, switches, routers y cableado estructurado.</p>
            <p><span className="text-indigo-400 font-bold">Robot Autónomo:</span> Robótica con microcontroladores, sensores ultrasónicos y hardware.</p>
            <p><span className="text-indigo-400 font-bold">Betagames:</span> Portal web interactivo de videojuegos con 3 vídeos explicativos.</p>
          </div>
        );
        break;

      case 'cv':
        const cvPath = `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/cv.pdf`;
        response = (
          <div className="text-xs">
            <p className="text-gray-300 mb-1">Descarga automática iniciada...</p>
            <a 
              href={cvPath} 
              download="Curriculum_Pol_Carvajal.pdf"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-mono font-bold underline"
            >
              [Descargar Curriculum_Pol_Carvajal.pdf]
            </a>
          </div>
        );
        // Trigger auto download
        const link = document.createElement('a');
        link.href = cvPath;
        link.download = 'Curriculum_Pol_Carvajal.pdf';
        link.click();
        break;

      case 'github':
        response = (
          <div className="text-xs">
            <p className="text-gray-300">Abriendo GitHub oficial de Pol Carvajal...</p>
            <a 
              href="https://github.com/Peke2005" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-indigo-400 hover:underline font-mono"
            >
              https://github.com/Peke2005
            </a>
          </div>
        );
        window.open('https://github.com/Peke2005', '_blank');
        break;

      case 'contact':
        response = (
          <div className="text-xs space-y-1 text-gray-300">
            <p>📧 Email: <a href="mailto:polcarbajalgarcia@gmail.com" className="text-indigo-300 underline">polcarbajalgarcia@gmail.com</a></p>
            <p>📍 Ubicación: Canyelles (Barcelona)</p>
            <p>💼 LinkedIn: <a href="https://www.linkedin.com/in/pol-carvajal-garcia-332a1a225/" target="_blank" className="text-indigo-300 underline">linkedin.com/in/pol-carvajal-garcia</a></p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        response = (
          <p className="text-red-400 text-xs">
            Comando no reconocido: &apos;{cmd}&apos;. Escribe <span className="text-indigo-400 font-bold font-mono">help</span> para ver los comandos válidos.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmd, response }]);
    setInput('');
  };

  return (
    <section id="terminal" className="py-20 relative z-10 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-3">
              <TerminalIcon size={13} />
              <span>Developer Shell</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
              Terminal Interactiva
            </h2>
            <p className="text-xs sm:text-sm text-[#8888a8] max-w-xl mx-auto">
              Interactúa con el shell técnico de Pol. Escribe comandos para inspeccionar proyectos, skills, trayectoria o descargar el CV directamente.
            </p>
          </div>

          {/* Terminal Window Box */}
          <div 
            onClick={() => inputRef.current?.focus()}
            className="rounded-3xl overflow-hidden bg-[#090912]/95 border border-white/15 shadow-[0_0_60px_rgba(99,102,241,0.2)] font-mono text-xs backdrop-blur-xl cursor-text"
          >
            {/* Terminal Title Bar */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-[#10101c] border-b border-white/10 select-none">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-[11px] text-[#707090] ml-2 flex items-center gap-1.5">
                  <TerminalIcon size={12} className="text-indigo-400" />
                  pol-shell@peke: ~
                </span>
              </div>

              {/* Quick Actions */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setHistory([]);
                  }}
                  className="p-1 rounded-md hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                  title="Limpiar terminal"
                >
                  <Trash2 size={13} />
                </button>
              </div>
            </div>

            {/* Terminal History and Input */}
            <div className="p-6 sm:p-7 min-h-[300px] max-h-[460px] overflow-y-auto space-y-4">
              {history.map((item, index) => (
                <div key={index} className="space-y-1.5">
                  <div className="flex items-center gap-2 text-indigo-400">
                    <span className="text-emerald-400 font-bold">➜</span>
                    <span className="text-indigo-300 font-semibold">pol@portfolio</span>
                    <span className="text-gray-500">:~$</span>
                    <span className="text-white font-bold">{item.command}</span>
                  </div>
                  <div className="pl-5">{item.response}</div>
                </div>
              ))}

              {/* Active Prompt Form */}
              <form onSubmit={handleCommand} className="flex items-center gap-2 text-indigo-400 pt-1">
                <span className="text-emerald-400 font-bold">➜</span>
                <span className="text-indigo-300 font-semibold shrink-0">pol@portfolio</span>
                <span className="text-gray-500 shrink-0">:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Escribe un comando ('help', 'skills', 'cv')..."
                  className="flex-1 bg-transparent text-white focus:outline-none placeholder:text-[#505070] font-mono text-xs"
                  autoComplete="off"
                  spellCheck={false}
                />
                <button type="submit" className="text-gray-600 hover:text-indigo-400 transition-colors">
                  <CornerDownLeft size={13} />
                </button>
              </form>

              <div ref={bottomRef} />
            </div>

            {/* Terminal Footer Quick Suggestions */}
            <div className="px-6 py-2.5 bg-[#0d0d16] border-t border-white/5 flex flex-wrap items-center gap-2 text-[11px] text-[#707090]">
              <span className="text-gray-500">Sugerencias:</span>
              {['help', 'skills', 'education', 'projects', 'cv', 'contact'].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => {
                    setInput(s);
                    inputRef.current?.focus();
                  }}
                  className="px-2 py-0.5 rounded bg-white/5 hover:bg-indigo-500/20 hover:text-indigo-300 text-gray-400 font-mono transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
