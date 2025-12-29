import { motion, useReducedMotion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";

const GITHUB_REPO_SEARCH_BASE =
  "https://github.com/krrish625?tab=repositories&q=";

const PROJECT_GRADIENTS = [
  "from-pink-500 via-red-500 to-yellow-500",
  "from-blue-400 via-indigo-500 to-purple-500",
  "from-cyan-400 via-blue-500 to-indigo-500",
  "from-emerald-400 via-teal-500 to-cyan-500",
];

const PROJECTS = [
  {
    name: "AI Mock Interview Platform",
    points: [
      "NLP-based interview simulation",
      "Role-based question generation",
      "AI-driven feedback",
    ],
    tags: ["Python", "NLP", "ML"],
    github: `${GITHUB_REPO_SEARCH_BASE}mock%20interview`,
  },
  {
    name: "AI Chatbot Application",
    points: ["Intent recognition using NLP", "ML-based response generation"],
    tags: ["Python", "NLP"],
    github: `${GITHUB_REPO_SEARCH_BASE}chatbot`,
  },
  {
    name: "Spam Detection System",
    points: ["ML + NLP-based classification", "Achieved 90% accuracy"],
    tags: ["ML", "NLP"],
    github: `${GITHUB_REPO_SEARCH_BASE}spam`,
  },
  {
    name: "Heart Disease Prediction System",
    points: ["Logistic Regression & Random Forest", "Achieved 80% accuracy"],
    tags: ["ML", "Classification"],
    github: `${GITHUB_REPO_SEARCH_BASE}heart%20disease`,
  },
];

export default function Projects() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="projects" className="relative w-full overflow-hidden py-24">
      {/* Dark simplified background for contrast */}
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Projects
          </h2>
          <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500" />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
          {PROJECTS.map((p, i) => (
            <div key={p.name} className="group relative isolate h-full">
              {/* Backlight Glow */}
              <div
                className={`absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-r opacity-20 blur-xl transition-opacity duration-500 group-hover:opacity-60 ${
                  PROJECT_GRADIENTS[i % PROJECT_GRADIENTS.length]
                }`}
              />

              {/* Gradient Border Container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className={`flex h-full flex-col rounded-3xl p-[2px] bg-gradient-to-r ${
                   PROJECT_GRADIENTS[i % PROJECT_GRADIENTS.length]
                }`}
              >
                {/* Inner Content Card */}
                <div className="flex h-full flex-col rounded-[22px] bg-neutral-950 p-8">
                  <div className="flex items-start justify-between">
                     <h3 className="text-2xl font-bold text-white max-w-[80%]">
                        {p.name}
                     </h3>
                     <a 
                       href={p.github} 
                       target="_blank" 
                       rel="noreferrer"
                       className="text-white/50 transition hover:text-white"
                     >
                       <Github className="h-6 w-6" />
                     </a>
                  </div>

                  <ul className="mt-6 flex-1 space-y-3">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3 text-sm text-neutral-400">
                        <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r ${PROJECT_GRADIENTS[i % PROJECT_GRADIENTS.length]}`} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-white/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="https://github.com/krrish625?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-neutral-900 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-neutral-800"
          >
            <span className="relative z-10 flex items-center gap-2">
              View All Projects
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
            <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-pink-500/20 to-yellow-500/20 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute inset-0 -z-10 rounded-full ring-1 ring-white/10 transition-all group-hover:ring-white/30" />
          </a>
        </div>
      </div>
    </section>
  );
}
