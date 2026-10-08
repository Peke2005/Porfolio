import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import InteractiveTerminal from '@/components/InteractiveTerminal';
import Footer from '@/components/Footer';
import CyberCircuitBackground from '@/components/CyberCircuitBackground';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        {/* 1. Hero keeps its own constellation and terminal */}
        <Hero />

        {/* 2. From About downwards: Unique Cyber Circuit & Digital Data Stream background */}
        <div className="relative overflow-hidden bg-[#07070b]">
          <CyberCircuitBackground />
          <div className="relative z-10">
            <About />
            <Experience />
            <Education />
            <Skills />
            <Projects />
            <InteractiveTerminal />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
