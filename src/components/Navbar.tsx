'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, FileDown, Globe } from 'lucide-react';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useLanguage, Language } from '@/context/LanguageContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { name: t('nav.about'), hash: '#about' },
    { name: t('nav.experience'), hash: '#experience' },
    { name: t('nav.education'), hash: '#education' },
    { name: t('nav.skills'), hash: '#skills' },
    { name: t('nav.projects'), hash: '#projects' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: string
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const targetElement = document.querySelector(hash);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else if (hash === '#hero' || hash === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out flex justify-center px-4 sm:px-6 lg:px-8 ${
        isScrolled
          ? 'py-3.5'
          : 'py-6'
      }`}
    >
      <div 
        className={`w-full max-w-6xl rounded-2xl flex items-center justify-between px-5 sm:px-7 py-3 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0d0d17]/85 backdrop-blur-xl border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.5)] shadow-indigo-950/20'
            : 'bg-[#10101c]/50 backdrop-blur-md border border-white/5'
        }`}
      >
        {/* Brand / Monogram */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="text-xl font-bold tracking-tight text-white hover:text-indigo-400 transition-colors flex items-center gap-2.5 group shrink-0"
          aria-label="Inicio"
        >
          <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-xs font-mono font-bold text-white shadow-md shadow-indigo-600/30 group-hover:scale-105 transition-transform">
            PC
          </span>
          <span className="font-semibold text-sm tracking-normal hidden sm:inline">Pol Carvajal</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-[#08080e]/60 p-1 rounded-xl border border-white/5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.hash.replace('#', '');
            return (
              <a
                key={link.hash}
                href={link.hash}
                onClick={(e) => handleLinkClick(e, link.hash)}
                className={`text-xs font-medium px-3.5 py-1.5 rounded-lg transition-all duration-200 relative ${
                  isActive
                    ? 'text-white bg-indigo-600/30 shadow-sm border border-indigo-500/40'
                    : 'text-text-secondary hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Action Bar: Language Selector & Status */}
        <div className="flex items-center gap-3">
          {/* Language Switcher Pills */}
          <div className="flex items-center p-1 rounded-xl bg-[#08080e]/70 border border-white/10 text-xs font-mono">
            <Globe size={13} className="text-indigo-400 ml-1.5 mr-1 hidden sm:inline shrink-0" />
            {(['es', 'ca', 'en'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2 py-0.5 rounded-lg uppercase text-[11px] font-semibold transition-all ${
                  lang === l
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-sm'
                    : 'text-[#8080a0] hover:text-white'
                }`}
                title={l === 'es' ? 'Español' : l === 'ca' ? 'Català' : 'English'}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Status indicator */}
          <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1.5 rounded-xl">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-medium">{t('nav.available')}</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-1.5 focus:outline-none rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Abrir menú"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-x-4 top-20 bg-[#0e0e18] border border-white/10 rounded-2xl shadow-2xl p-6 z-50 flex flex-col gap-3 md:hidden animate-fadeIn"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.hash.replace('#', '');
            return (
              <a
                key={link.hash}
                href={link.hash}
                onClick={(e) => handleLinkClick(e, link.hash)}
                className={`text-sm font-medium py-2 px-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                    : 'text-text-secondary hover:text-white'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
