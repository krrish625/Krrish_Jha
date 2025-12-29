import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Globe, Sparkles, Cpu } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative w-full overflow-hidden py-24">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="grid gap-6 md:grid-cols-3 md:gap-8"
        >
          {/* Main Bio Card - Spans 2 cols */}
          <div className="group relative overflow-hidden rounded-3xl bg-neutral-900/50 p-8 border border-white/10 md:col-span-2">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold tracking-tight text-white mb-6">
                About Me
              </h2>
              <p className="text-lg leading-relaxed text-neutral-300">
                I'm a passionate <span className="text-white font-medium">AI/ML Engineer</span> dedicated to building intelligent systems. 
                With a strong foundation in <span className="text-white font-medium">Python & Data Science</span>, I bridge the gap between complex algorithms and practical, scalable applications. 
                My goal is to create technology that not only works but makes a real difference.
              </p>
              
              <div className="mt-8 flex gap-4">
                 <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-neutral-300 border border-white/5">
                    <Code2 className="h-4 w-4 text-violet-400" />
                    <span>Clean Code</span>
                 </div>
                 <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-neutral-300 border border-white/5">
                    <Globe className="h-4 w-4 text-fuchsia-400" />
                    <span>Global Impact</span>
                 </div>
              </div>
            </div>
          </div>

          {/* Stats/Highlight Card */}
          <div className="group relative overflow-hidden rounded-3xl bg-neutral-900/50 p-8 border border-white/10">
             <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                   <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-indigo-500 flex items-center justify-center mb-4 text-white">
                      <Sparkles className="h-6 w-6" />
                   </div>
                   <h3 className="text-xl font-bold text-white">Innovation First</h3>
                   <p className="mt-2 text-sm text-neutral-400">
                      Constantly exploring new LLMs, RAG architectures, and optimization techniques.
                   </p>
                </div>
                <a href="#projects" className="mt-6 flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors">
                   View Work <ArrowUpRight className="h-4 w-4" />
                </a>
             </div>
          </div>

          {/* Tech Stack/Focus Card */}
          <div className="group relative overflow-hidden rounded-3xl bg-neutral-900/50 p-8 border border-white/10">
             <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="relative z-10">
                <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center mb-4 text-white">
                   <Cpu className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Core Tech</h3>
                <ul className="mt-4 space-y-2 text-sm text-neutral-400">
                   <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" /> Python (PyTorch, TF)
                   </li>
                   <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500" /> NLP & LLMs
                   </li>
                   <li className="flex items-center gap-2">
                       <span className="h-1.5 w-1.5 rounded-full bg-violet-500" /> Data Engineering
                   </li>
                   <li className="flex items-center gap-2">
                       <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" /> Cloud Architecture
                   </li>
                </ul>
             </div>
          </div>

          {/* Philosophy/Second Large Card - Spans 2 cols */}
          <div className="group relative overflow-hidden rounded-3xl bg-neutral-900/50 p-8 border border-white/10 md:col-span-2 flex flex-col md:flex-row items-center gap-8">
             <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="relative z-10 flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">My Approach</h3>
                <p className="text-neutral-400 leading-relaxed">
                   I believe in code that is not just functional but elegant and maintainable. 
                   Every line I write is aimed at solving a specific problem with maximum efficiency.
                </p>
             </div>
             
             {/* Decorative Grid or Visual */}
             <div className="relative z-10 grid grid-cols-2 gap-2 opacity-50">
                <div className="h-16 w-16 rounded-lg bg-white/5 border border-white/5" />
                <div className="h-16 w-16 rounded-lg bg-white/10 border border-white/5" />
                <div className="h-16 w-16 rounded-lg bg-white/10 border border-white/5" />
                <div className="h-16 w-16 rounded-lg bg-white/5 border border-white/5" />
             </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
