'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`text-center mb-16 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
        {title}
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-accent to-purple-500 mx-auto rounded-full" />
      {subtitle && (
        <p className="text-text-secondary mt-4 max-w-2xl mx-auto text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
