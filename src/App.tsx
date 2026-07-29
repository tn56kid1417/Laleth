/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Background from './components/Background';

export default function App() {
  return (
    <div className="min-h-screen text-neutral-50 font-sans selection:bg-indigo-500/30 scroll-smooth relative">
      <Background />
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24">
        <header className="py-3 px-6 flex justify-between items-center bg-neutral-900/20 backdrop-blur-xl sticky top-6 z-50 border border-white/10 rounded-full shadow-2xl mt-6 mb-8">
          <div className="font-bold text-lg tracking-tighter text-indigo-400 border border-indigo-500/30 p-2 rounded-full leading-none bg-indigo-500/10">
             LR
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-neutral-300">
             <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
             <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a>
             <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
             <a href="#experience" className="hover:text-indigo-400 transition-colors">Experience</a>
          </nav>
        </header>
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}
