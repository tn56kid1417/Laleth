import { motion } from 'motion/react';
import { DATA } from '../data';
import { GraduationCap, Trophy, Award } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-t border-neutral-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-100"><span className="text-indigo-400 font-mono text-xl mr-2">04.</span>Education & Accolades</h2>
          <div className="h-px bg-neutral-800 flex-grow max-w-xs"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
             <div className="flex items-center gap-3 mb-8 text-neutral-100">
               <GraduationCap className="text-indigo-400" />
               <h3 className="text-2xl font-semibold">Education</h3>
             </div>
             <div className="space-y-8 border-l border-neutral-800 ml-3 pl-8 relative">
               {DATA.education.map((edu, idx) => (
                 <div key={idx} className="relative">
                   <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-indigo-400 bg-neutral-950" />
                   <div className="flex flex-col mb-1">
                      <span className="text-indigo-400 font-mono text-sm mb-1">{edu.period}</span>
                      <h4 className="text-lg font-bold text-neutral-200">{edu.degree}</h4>
                   </div>
                   <p className="text-neutral-400 text-sm mb-2">{edu.institution}</p>
                   <span className="inline-block px-3 py-1 bg-neutral-900 rounded border border-neutral-800 text-xs text-neutral-300 font-medium">
                     {edu.score}
                   </span>
                 </div>
               ))}
             </div>
          </div>

          <div className="space-y-12">
             {/* Achievements */}
             <div>
               <div className="flex items-center gap-3 mb-6 text-neutral-100">
                 <Trophy className="text-indigo-400" />
                 <h3 className="text-2xl font-semibold">Achievements</h3>
               </div>
               <div className="space-y-4">
                 {DATA.achievements.map((ach, idx) => (
                    <div key={idx} className="p-4 bg-neutral-900/50 rounded-xl border border-neutral-800 flex items-start gap-4">
                       <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500/50 shrink-0" />
                       <p className="text-neutral-300">{ach}</p>
                    </div>
                 ))}
               </div>
             </div>

             {/* Certifications */}
             <div>
               <div className="flex items-center gap-3 mb-6 text-neutral-100">
                 <Award className="text-indigo-400" />
                 <h3 className="text-2xl font-semibold">Certifications</h3>
               </div>
               <div className="space-y-4">
                 {DATA.certifications.map((cert, idx) => (
                    <div key={idx} className="p-4 bg-neutral-900/50 rounded-xl border border-neutral-800 flex items-start gap-4">
                       <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500/50 shrink-0" />
                       <p className="text-neutral-300">{cert}</p>
                    </div>
                 ))}
               </div>
             </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
