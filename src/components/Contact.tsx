'use client';

import { useState } from 'react';
import SectionHeading from './SectionHeading';
import { personalInfo } from '@/lib/data';
import { Mail, Github, Linkedin, Send, ExternalLink, CheckCircle, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative scroll-mt-20">
      <SectionHeading title="Contacto" subtitle="¿Tienes una propuesta o proyecto? Hablemos." />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 flex flex-col lg:flex-row gap-12">
        
        {/* Contact Form */}
        <div className="w-full lg:w-3/5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-xl hover:border-white/20 transition-all">
          <h3 className="text-2xl font-bold text-white mb-6">Envíame un mensaje</h3>
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-12 text-center h-[350px]">
              <CheckCircle className="w-16 h-16 text-green-400 mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">¡Mensaje enviado!</h4>
              <p className="text-gray-400">Gracias por contactarme. Te responderé lo antes posible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                  placeholder="¿En qué puedo ayudarte?"
                />
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-sm text-gray-400">
                  O escribe directamente a <a href={`mailto:${personalInfo.email}`} className="text-indigo-400 hover:underline">{personalInfo.email}</a>
                </p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-xl font-medium transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-indigo-600/30"
                >
                  {isSubmitting ? 'Enviando...' : (
                    <>
                      <span>Enviar</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Contact Info */}
        <div className="w-full lg:w-2/5 space-y-4 flex flex-col justify-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 shadow-xl hover:bg-white/10 transition-all group hover:border-indigo-500/30">
            <div className="flex items-center gap-4">
              <div className="p-3.5 bg-indigo-500/20 text-indigo-400 rounded-xl group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs uppercase font-mono text-gray-400 mb-0.5">Correo Electrónico</h4>
                <a href={`mailto:${personalInfo.email}`} className="text-white font-medium hover:text-indigo-400 transition-colors text-sm">
                  {personalInfo.email}
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 shadow-xl hover:bg-white/10 transition-all group hover:border-indigo-500/30">
            <div className="flex items-center gap-4">
              <div className="p-3.5 bg-indigo-500/20 text-indigo-400 rounded-xl group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs uppercase font-mono text-gray-400 mb-0.5">Teléfono</h4>
                <a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} className="text-white font-medium hover:text-indigo-400 transition-colors text-sm">
                  {personalInfo.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 shadow-xl hover:bg-white/10 transition-all group hover:border-indigo-500/30">
            <div className="flex items-center gap-4">
              <div className="p-3.5 bg-indigo-500/20 text-indigo-400 rounded-xl group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs uppercase font-mono text-gray-400 mb-0.5">Ubicación</h4>
                <p className="text-white font-medium text-sm">
                  {personalInfo.location} <span className="text-gray-400 text-xs">({personalInfo.address})</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 shadow-xl hover:bg-white/10 transition-all group hover:border-white/30">
            <div className="flex items-center gap-4">
              <div className="p-3.5 bg-slate-800 text-white rounded-xl group-hover:bg-white group-hover:text-slate-900 transition-colors">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs uppercase font-mono text-gray-400 mb-0.5">GitHub</h4>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-gray-300 transition-colors text-sm inline-flex items-center gap-1.5">
                  github.com/Peke2005
                  <ExternalLink className="w-3 h-3 text-gray-400" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 shadow-xl hover:bg-white/10 transition-all group hover:border-[#0A66C2]/50">
            <div className="flex items-center gap-4">
              <div className="p-3.5 bg-[#0A66C2]/20 text-[#0A66C2] rounded-xl group-hover:bg-[#0A66C2] group-hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs uppercase font-mono text-gray-400 mb-0.5">LinkedIn</h4>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-[#0A66C2] transition-colors text-sm inline-flex items-center gap-1.5">
                  linkedin.com/in/pol-carvajal-garcia
                  <ExternalLink className="w-3 h-3 text-gray-400" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
