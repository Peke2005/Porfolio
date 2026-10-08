'use client';

import { useEffect, useRef } from 'react';

export default function CyberCircuitBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight * 4);

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight * 4;
    };
    window.addEventListener('resize', onResize);

    // 1. Grid of Glowing Nodes with pulsating geometric connections
    const spacingX = 140;
    const spacingY = 160;
    const cols = Math.ceil(width / spacingX) + 1;
    const rows = Math.ceil(height / spacingY) + 1;

    // 2. Data Packets traveling along grid lines
    interface Packet {
      fromX: number;
      fromY: number;
      toX: number;
      toY: number;
      progress: number;
      speed: number;
      color: string;
      size: number;
    }

    const packetColors = ['#818cf8', '#a855f7', '#38bdf8', '#34d399', '#f43f5e'];
    const packets: Packet[] = [];

    const createPacket = () => {
      const c = Math.floor(Math.random() * (cols - 1));
      const r = Math.floor(Math.random() * (rows - 1));
      const isHorizontal = Math.random() > 0.5;

      const fromX = c * spacingX;
      const fromY = r * spacingY;
      const toX = isHorizontal ? (c + 1) * spacingX : fromX;
      const toY = isHorizontal ? fromY : (r + 1) * spacingY;

      return {
        fromX,
        fromY,
        toX,
        toY,
        progress: 0,
        speed: Math.random() * 0.02 + 0.012,
        color: packetColors[Math.floor(Math.random() * packetColors.length)],
        size: Math.random() * 3 + 2.5,
      };
    };

    for (let i = 0; i < 24; i++) {
      packets.push(createPacket());
    }

    // 3. Floating Geometric Rings
    const rings = Array.from({ length: 12 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 50 + 25,
      angle: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.008,
      color: packetColors[Math.floor(Math.random() * packetColors.length)],
      alpha: Math.random() * 0.35 + 0.2,
      pulse: Math.random() * Math.PI,
    }));

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.02;

      // Draw Grid Lines (Crisp & Visible)
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.12)';
      
      // Horizontal lines
      for (let r = 0; r < rows; r++) {
        const y = r * spacingY;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Vertical lines
      for (let c = 0; c < cols; c++) {
        const x = c * spacingX;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Draw Grid Intersections (Glowing Crosses/Diamonds)
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const x = c * spacingX;
          const y = r * spacingY;
          const pulse = Math.sin(time + c * 0.5 + r * 0.7);

          // Center dot
          ctx.beginPath();
          ctx.arc(x, y, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = pulse > 0 ? '#818cf8' : '#4f46e5';
          ctx.globalAlpha = Math.max(0.2, (pulse + 1) * 0.35);
          ctx.fill();

          // Small cross markers
          if ((c + r) % 2 === 0) {
            ctx.beginPath();
            ctx.moveTo(x - 6, y);
            ctx.lineTo(x + 6, y);
            ctx.moveTo(x, y - 6);
            ctx.lineTo(x, y + 6);
            ctx.strokeStyle = '#a855f7';
            ctx.globalAlpha = Math.max(0.15, (pulse + 1) * 0.25);
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      }

      // Draw Glowing Moving Data Packets
      for (let i = 0; i < packets.length; i++) {
        const p = packets[i];
        p.progress += p.speed;

        if (p.progress >= 1) {
          packets[i] = createPacket();
          continue;
        }

        const curX = p.fromX + (p.toX - p.fromX) * p.progress;
        const curY = p.fromY + (p.toY - p.fromY) * p.progress;

        // Draw glowing light streak
        const tailLength = 22;
        const tailX = p.fromX === p.toX ? curX : curX - (p.toX > p.fromX ? tailLength : -tailLength);
        const tailY = p.fromY === p.toY ? curY : curY - (p.toY > p.fromY ? tailLength : -tailLength);

        const grad = ctx.createLinearGradient(tailX, tailY, curX, curY);
        grad.addColorStop(0, 'transparent');
        grad.addColorStop(1, p.color);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(curX, curY);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2.5;
        ctx.globalAlpha = 0.9;
        ctx.stroke();

        // Packet Head Glow
        ctx.beginPath();
        ctx.arc(curX, curY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 14;
        ctx.globalAlpha = 1;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Draw Rotating Geometric Rings with ticks
      rings.forEach((ring) => {
        ring.angle += ring.rotSpeed;
        ring.pulse += 0.02;
        const r = ring.radius + Math.sin(ring.pulse) * 4;

        ctx.save();
        ctx.translate(ring.x, ring.y);
        ctx.rotate(ring.angle);

        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 1.5);
        ctx.strokeStyle = ring.color;
        ctx.lineWidth = 1.5;
        ctx.globalAlpha = ring.alpha;
        ctx.stroke();

        // 4 corner ticks
        for (let j = 0; j < 4; j++) {
          const a = (j * Math.PI) / 2;
          ctx.beginPath();
          ctx.moveTo(Math.cos(a) * (r - 4), Math.sin(a) * (r - 4));
          ctx.lineTo(Math.cos(a) * (r + 4), Math.sin(a) * (r + 4));
          ctx.strokeStyle = ring.color;
          ctx.stroke();
        }

        ctx.restore();
      });

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
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 bg-[#07070b]">
      {/* 1. Clear, Visible Canvas with moving light packets & rings */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0 opacity-95"
      />

      {/* 2. Distinct Colored Ambient Glows behind sections so it feels rich and alive */}
      <div className="absolute top-[8%] -left-20 w-[550px] h-[550px] bg-indigo-600/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[32%] -right-20 w-[600px] h-[600px] bg-purple-600/25 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[58%] -left-20 w-[550px] h-[550px] bg-cyan-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[80%] right-[10%] w-[580px] h-[580px] bg-emerald-600/20 rounded-full blur-[140px] pointer-events-none" />

      {/* 3. Top fade transition so it blends seamlessly from Hero */}
      <div 
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, #07070b, transparent)',
        }}
      />
    </div>
  );
}
