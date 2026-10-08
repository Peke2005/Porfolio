'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function BackgroundDecorations() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    // Dynamic Floating Cyber Particles with Connection Mesh
    const count = 55;
    const particles = Array.from({ length: count }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2.2 + 0.8,
      vx: (Math.random() - 0.5) * 0.45,
      vy: -Math.random() * 0.55 - 0.15, // Smooth rising effect
      alpha: Math.random() * 0.6 + 0.25,
      color: ['#818cf8', '#c084fc', '#38bdf8', '#a855f7'][Math.floor(Math.random() * 4)],
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render & connect particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // Draw particle with glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw connection lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = '#818cf8';
            ctx.globalAlpha = (1 - dist / 110) * 0.15;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 1. Global Floating Interactive Network Particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10"
        style={{ width: '100%', height: '100%' }}
      />

      {/* 2. Cyber Matrix Blueprint Grid with Radial Focus Mask */}
      <div 
        className="absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(99, 102, 241, 0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(99, 102, 241, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* 3. Glowing Laser Scanner Lines */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <motion.div
          animate={{
            y: ['-10%', '110%'],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent blur-[1px]"
        />
        <motion.div
          animate={{
            y: ['110%', '-10%'],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'linear',
            delay: 5,
          }}
          className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-400 to-transparent blur-[1px]"
        />
      </div>

      {/* 4. Vivid High-Impact Volumetric Auroras Behind Cards */}
      {/* Orb 1: Sobre Mí & Perfil */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 50, 0],
          scale: [1, 1.3, 0.95, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[14%] -left-32 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-indigo-500/35 via-purple-600/30 to-transparent blur-[130px]"
      />

      {/* Orb 2: Experiencia */}
      <motion.div
        animate={{
          x: [0, -70, 50, 0],
          y: [0, 70, -50, 0],
          scale: [1, 1.25, 0.9, 1],
        }}
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute top-[38%] -right-36 w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-purple-500/35 via-pink-600/25 to-transparent blur-[140px]"
      />

      {/* Orb 3: Formación & Master IA */}
      <motion.div
        animate={{
          x: [0, 60, -60, 0],
          y: [0, -50, 60, 0],
          scale: [1, 1.35, 0.9, 1],
        }}
        transition={{
          duration: 21,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
        className="absolute top-[58%] -left-36 w-[620px] h-[620px] rounded-full bg-gradient-to-tr from-cyan-500/30 via-indigo-600/30 to-transparent blur-[130px]"
      />

      {/* Orb 4: Habilidades & Proyectos */}
      <motion.div
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 60, -40, 0],
          scale: [1, 1.2, 0.95, 1],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute top-[80%] -right-28 w-[640px] h-[640px] rounded-full bg-gradient-to-tl from-indigo-500/35 via-emerald-500/25 to-transparent blur-[135px]"
      />

      {/* 5. Center Vignette Depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 90% 80% at 50% 50%, transparent 20%, rgba(7, 7, 11, 0.65) 100%)',
        }}
      />
    </div>
  );
}
