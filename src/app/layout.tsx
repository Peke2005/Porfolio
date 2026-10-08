import type { Metadata } from 'next';
import './globals.css';
import CustomCursor from '@/components/CustomCursor';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  title: 'Pol Carvajal | Desarrollador Web y Multiplataforma',
  description:
    'Portfolio oficial de Pol Carvajal. Desarrollador Web y Multiplataforma. Máster en Inteligencia Artificial & Big Data en Stucom.',
  keywords: [
    'Pol Carvajal',
    'Desarrollador Web',
    'Multiplataforma',
    'React',
    'TypeScript',
    'PHP',
    'Inteligencia Artificial',
    'Big Data',
    'Stucom',
    'Barcelona',
  ],
  authors: [{ name: 'Pol Carvajal' }],
  creator: 'Pol Carvajal',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="noise antialiased selection:bg-indigo-500/30 selection:text-white">
        <LanguageProvider>
          <CustomCursor />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
