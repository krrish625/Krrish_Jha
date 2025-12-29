import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";

const CERTS = [
  "Be10X AI Tools & ChatGPT Workshop",
  "BCG GenAI Job Simulation (Forage)",
  "Deloitte Data Analytics Job Simulation (Forage)",
  "Tata GenAI Powered Data Analytics (Forage)",
  "British Airways Data Science Job Simulation (Forage)",
  "HackAgra Chapter-1 Hackathon",
  "SynergiX Buildstation – Builder Base",
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative mx-auto w-full max-w-6xl overflow-hidden px-4 py-24"
    >
      <div className="mb-12 flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
           Credentials & <span className="text-cyan-400">Achievements</span>
        </h2>
        <div className="mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {CERTS.map((c, i) => (
          <motion.div
            key={c}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.05, borderColor: "rgba(6,182,212,0.5)", backgroundColor: "rgba(6,182,212,0.05)" }}
            className="group relative flex items-center gap-3 rounded-xl border border-white/10 bg-neutral-900/40 px-6 py-4 backdrop-blur-sm transition-colors duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]"
          >
            {/* Holographic Scanline Overlay - Visible on Hover */}
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent animate-scan" />
            </div>

            <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 box-shadow-[0_0_10px_rgba(6,182,212,0.2)]">
               <Award className="h-5 w-5" />
            </div>
            
            <div className="flex flex-col">
               <span className="text-sm font-semibold text-white/90 group-hover:text-cyan-100 transition-colors">
                 {c}
               </span>
               <div className="mt-1 flex items-center gap-1.5">
                  <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                  <span className="text-[10px] font-medium uppercase tracking-wider text-green-400/80">Verified</span>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
