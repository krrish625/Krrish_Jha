import { motion, useReducedMotion } from "framer-motion";

const EXPERIENCE = [
  {
    title: "Python Intern",
    company: "Skillbit Technologies",
    location: "Remote",
    period: "August 2024 - September 2024",
    description: "Contributed to core Python development initiatives, focusing on AI-driven workflows.",
    bullets: [
      "Engineered automated AI workflows, reducing manual processing time by 40%.",
      "Optimized data preprocessing pipelines for machine learning models.",
      "Collaborated on backend service integration using Python-based frameworks."
    ],
  },
  {
    title: "Intern",
    company: "InternPe",
    location: "Remote",
    period: "July 2024 - August 2024",
    description: "Gained hands-on experience in software development logic and debugging.",
    bullets: [
      "Spearheaded backend logic implementation for internal tools.",
      "Resolved critical bugs in legacy Python scripts, improving system stability.",
      "Participated in code reviews and agile development cycles."
    ],
  },
];

export default function Experience() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="experience" className="relative z-10 w-full overflow-hidden py-24">
      {/* Background ambient glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-indigo-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-[100px]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Professional Experience
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1.5 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500" />
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-400">
            My journey in software development and the milestones achieved along the way.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-neutral-800 md:left-1/2 md:-ml-px" />

          <div className="space-y-12">
            {EXPERIENCE.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col gap-8 md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border-4 border-neutral-950 bg-neutral-900 md:left-1/2 md:-ml-5">
                  <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500" />
                </div>

                {/* Content Card */}
                <div className="ml-16 w-auto md:mx-0 md:w-1/2 md:px-8">
                  <div className="glass group relative overflow-hidden rounded-2xl border border-white/5 bg-neutral-900/50 p-6 transition-all duration-300 hover:border-white/10 hover:bg-neutral-900/80">
                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/5 to-fuchsia-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-xs font-medium text-indigo-300">
                        {item.period}
                      </span>
                    </div>
                    
                    <div className="mt-1 flex items-center gap-2 text-sm text-neutral-400">
                      <span className="font-medium text-neutral-200">{item.company}</span>
                      <span>•</span>
                      <span>{item.location}</span>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                      {item.description}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {item.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-neutral-400">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-500/50" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
