import { motion } from 'motion/react';
import { DATA } from '../data';

export default function About() {
  return (
    <section id="about" className="py-20 border-t border-neutral-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-100"><span className="text-indigo-400 font-mono text-xl mr-2">01.</span>About Me</h2>
          <div className="h-px bg-neutral-800 flex-grow max-w-xs"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 text-neutral-400 text-lg leading-relaxed">
          <div>
             <p className="mb-6">{DATA.profile}</p>
             <div className="mb-6">
               <h3 className="text-neutral-200 font-semibold mb-3">Areas of Interest</h3>
               <ul className="flex flex-wrap gap-2">
                 {DATA.interests.map((interest, i) => (
                   <li key={i} className="px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-md text-sm text-indigo-300">
                     {interest}
                   </li>
                 ))}
               </ul>
             </div>
          </div>
          <div className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800/50 h-fit">
            <h3 className="text-neutral-200 font-semibold mb-4 text-xl">Personal Details</h3>
            <ul className="space-y-3 text-base">
              <li className="flex justify-between border-b border-neutral-800/50 pb-2">
                <span className="text-neutral-500">Date of Birth</span>
                <span className="text-neutral-300">{DATA.personalDetails.dob}</span>
              </li>
              <li className="flex justify-between border-b border-neutral-800/50 pb-2">
                <span className="text-neutral-500">Nationality</span>
                <span className="text-neutral-300">{DATA.personalDetails.nationality}</span>
              </li>
              <li className="flex justify-between border-b border-neutral-800/50 pb-2">
                <span className="text-neutral-500">Willing to Relocate</span>
                <span className="text-neutral-300">{DATA.personalDetails.relocate}</span>
              </li>
              <li className="flex justify-between border-b border-neutral-800/50 pb-2">
                <span className="text-neutral-500">Internship Pref.</span>
                <span className="text-neutral-300">{DATA.personalDetails.internship}</span>
              </li>
              <li className="flex justify-between pt-2">
                <span className="text-neutral-500">Languages</span>
                <span className="text-neutral-300">{DATA.languages.join(", ")}</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
