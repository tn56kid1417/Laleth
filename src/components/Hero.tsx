import { motion } from 'motion/react';
import { DATA } from '../data';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-start pt-20 pb-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-indigo-400 font-mono mb-4 text-sm md:text-base">Hi, my name is</h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-neutral-100 tracking-tight mb-2">
          {DATA.name}.
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-neutral-400 tracking-tight mb-6">
          I build things for the web.
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="max-w-2xl text-neutral-400 text-lg md:text-xl leading-relaxed mb-10"
      >
        <p>{DATA.profile}</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-wrap items-center gap-4 text-neutral-300"
      >
        <a href={`mailto:${DATA.contact.email}`} className="flex items-center gap-2 hover:text-indigo-400 transition-colors px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-full">
          <Mail size={18} />
          <span className="text-sm font-medium">Contact Me</span>
        </a>
        <a href={DATA.contact.github} target="_blank" rel="noreferrer" className="p-2 hover:text-indigo-400 transition-colors bg-neutral-900 border border-neutral-800 rounded-full">
          <Github size={20} />
        </a>
        <a href={DATA.contact.linkedin} target="_blank" rel="noreferrer" className="p-2 hover:text-indigo-400 transition-colors bg-neutral-900 border border-neutral-800 rounded-full">
          <Linkedin size={20} />
        </a>
        <div className="flex items-center gap-2 text-sm text-neutral-500 ml-2">
           <MapPin size={16} />
           {DATA.contact.location}
        </div>
      </motion.div>
    </section>
  );
}
