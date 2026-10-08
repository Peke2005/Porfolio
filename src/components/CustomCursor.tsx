'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for fluid trailing effect
  const springX = useSpring(mouseX, { stiffness: 450, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 450, damping: 28 });

  const trailX = useSpring(mouseX, { stiffness: 180, damping: 20 });
  const trailY = useSpring(mouseY, { stiffness: 180, damping: 20 });

  useEffect(() => {
    // Only enable on desktop devices with hover support
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = Boolean(
          target.closest('a') ||
          target.closest('button') ||
          target.closest('input') ||
          target.closest('textarea') ||
          target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          window.getComputedStyle(target).cursor === 'pointer'
        );
        setIsPointer(isClickable);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer subtle glow aura */}
      <motion.div
        className="fixed top-0 left-0 rounded-full blur-[2px] bg-gradient-to-r from-indigo-500/20 to-purple-500/20"
        style={{
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%',
          width: isPointer ? 56 : 34,
          height: isPointer ? 56 : 34,
          border: isPointer ? '1.5px solid rgba(129, 140, 248, 0.6)' : '1px solid rgba(99, 102, 241, 0.35)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />

      {/* Inner sharp dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-indigo-400 shadow-[0_0_12px_rgba(99,102,241,0.9)]"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          width: isPointer ? 8 : 6,
          height: isPointer ? 8 : 6,
        }}
      />
    </div>
  );
}
