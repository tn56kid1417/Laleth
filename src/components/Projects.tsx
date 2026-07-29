import { motion } from 'motion/react';
import { DATA } from '../data';
import { FolderGit2 } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-neutral-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-100"><span className="text-indigo-400 font-mono text-xl mr-2">03.</span>Featured Projects</h2>
          <div className="h-px bg-neutral-800 flex-grow max-w-xs"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DATA.projects.map((project, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               className="group relative bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800 hover:border-indigo-500/50 transition-all flex flex-col h-full"
             >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-neutral-800/50 rounded-lg text-indigo-400 group-hover:text-indigo-300 transition-colors">
                     <FolderGit2 size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-neutral-200 mb-3 group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.category}
                </p>
             </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
