import { motion } from 'motion/react';
import { DATA } from '../data';
import { Code2, Layout, Server, Database, Sparkles } from 'lucide-react';

const icons = {
  "Languages": <Code2 className="text-indigo-400 mb-4" size={28} />,
  "Frontend": <Layout className="text-indigo-400 mb-4" size={28} />,
  "Backend": <Server className="text-indigo-400 mb-4" size={28} />,
  "Database": <Database className="text-indigo-400 mb-4" size={28} />,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-t border-neutral-900">
       <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-100"><span className="text-indigo-400 font-mono text-xl mr-2">02.</span>Technical Skills</h2>
          <div className="h-px bg-neutral-800 flex-grow max-w-xs"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(DATA.technicalSkills).map(([category, skills], index) => (
             <motion.div
               key={category}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               className="bg-neutral-900/40 p-6 rounded-2xl border border-neutral-800/50 hover:border-indigo-500/30 transition-colors"
             >
                {icons[category as keyof typeof icons]}
                <h3 className="text-xl font-semibold text-neutral-200 mb-4">{category}</h3>
                <ul className="space-y-2">
                  {skills.map(skill => (
                    <li key={skill} className="flex items-center gap-2 text-neutral-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/50" />
                      {skill}
                    </li>
                  ))}
                </ul>
             </motion.div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-indigo-950/20 rounded-2xl border border-indigo-900/30">
          <div className="flex items-center gap-3 mb-4 text-indigo-300">
             <Sparkles size={20} />
             <h3 className="text-lg font-semibold">Soft Skills</h3>
          </div>
          <div className="flex flex-wrap gap-3">
             {DATA.softSkills.map(skill => (
               <span key={skill} className="px-4 py-2 bg-indigo-950/40 border border-indigo-900/50 rounded-full text-sm text-indigo-200">
                 {skill}
               </span>
             ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
