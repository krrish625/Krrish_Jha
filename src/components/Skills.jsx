import { motion, useReducedMotion } from "framer-motion";
import { Brain, Database, Server, Globe } from "lucide-react";

const SKILLS = [
  {
    title: "AI/ML",
    description: "Developing intelligent models with TensorFlow, PyTorch & Scikit-learn",
    Icon: Brain,
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "Data Engineering",
    description: "Building robust pipelines with SQL, Pandas & Apache Spark",
    Icon: Database,
    gradient: "from-violet-500 to-indigo-500",
  },
  {
    title: "Web Development",
    description: "Creating responsive apps with React, Node.js & Tailwind CSS",
    Icon: Globe,
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Backend Systems",
    description: "Scalable API design using FastApi, Django & Express",
    Icon: Server,
    gradient: "from-emerald-500 to-teal-500",
  },
];

export default function Skills() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="skills" className="relative w-full overflow-hidden py-24">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Technical Expertise
            </h2>
            <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map(({ title, description, Icon, gradient }) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative h-full overflow-hidden rounded-3xl bg-neutral-900 p-8 transition-colors hover:bg-neutral-800"
            >
              {/* Top Gradient Border */}
              <div
                aria-hidden="true"
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r opacity-50 transition-opacity duration-300 group-hover:opacity-100 ${gradient}`}
              />

              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-white">
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">
                  {title}
              </h3>
              
              <p className="mt-3 text-sm leading-relaxed text-neutral-400 group-hover:text-neutral-300">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
