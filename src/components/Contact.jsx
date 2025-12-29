import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MoveRight } from "lucide-react";

const EMAIL = "krrishjha625@gmail.com";
const LINKEDIN_URL = "https://linkedin.com/in/krish-jha-346168307";
const GITHUB_URL = "https://github.com/krrish625";

export default function Contact() {
  return (
    <section id="contact" className="relative w-full overflow-hidden py-32">
      <div className="mx-auto w-full max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-neutral-900 border border-white/10 shadow-2xl">
            <Mail className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
            Let's build something <br />
            <span className="bg-gradient-to-r from-fuchsia-500 to-violet-500 bg-clip-text text-transparent">
              extraordinary.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg text-neutral-400">
            Whether you have a project in mind or just want to chat about AI &
            tech, I'm always open to new opportunities.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-semibold text-neutral-950 transition-all hover:bg-neutral-200"
            >
              Say Hello
              <MoveRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900 px-8 py-4 text-base font-medium text-white transition-all hover:bg-neutral-800"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>
          </div>
        </motion.div>

        <div className="mt-24 border-t border-white/5 pt-12">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-sm font-semibold text-white">Krrish Jha</p>
              <p className="mt-1 text-xs text-white/50">
                © {new Date().getFullYear()} • AI / Machine Learning Engineer
              </p>
            </div>

            <div className="flex gap-6">
              <SocialLink
                href={GITHUB_URL}
                icon={<Github className="h-5 w-5" />}
              />
              <SocialLink
                href={LINKEDIN_URL}
                icon={<Linkedin className="h-5 w-5" />}
              />
              <SocialLink
                href={`mailto:${EMAIL}`}
                icon={<Mail className="h-5 w-5" />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-neutral-500 transition hover:text-white"
    >
      {icon}
    </a>
  );
}
