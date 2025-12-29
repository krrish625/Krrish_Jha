import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Github,
  Linkedin,
} from "lucide-react";

const LINKEDIN_URL = "https://linkedin.com/in/krish-jha-346168307";
const GITHUB_URL = "https://github.com/krrish625";

// Save your photo as either:
// - public/profile.jpg
// - public/profile.png

const PROFILE_PHOTO_JPG = "/profile.jpg";
const PROFILE_PHOTO_PNG = "/profile.png";
const PROFILE_PHOTO_PNG_CAPITALIZED = "/Profile.png";

const ROLES = ["IT Engineer", "Web Dev", "Data Engineer"];

export default function Hero() {
  const [photoSrc, setPhotoSrc] = useState(PROFILE_PHOTO_PNG_CAPITALIZED);
  const [photoError, setPhotoError] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden pt-20 pb-12 lg:pt-28"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-20 top-0 h-[500px] w-[500px] rounded-full bg-fuchsia-500/10 blur-[100px]" />
        <div className="absolute -right-20 top-20 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[100px]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        {/* Main Grid Layout */}
        <div className="grid gap-12 lg:grid-cols-[1fr_auto_1fr] lg:gap-0">
          {/* Left Column: Hello & Roles */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center pt-8 lg:pt-0"
          >
            <div className="relative">
              <div className="absolute -left-4 top-2 h-3 w-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
              <h1 className="text-6xl font-bold tracking-tighter text-white lg:text-8xl">
                Hello,
              </h1>
            </div>

            <p className="mt-6 max-w-sm text-base leading-relaxed text-neutral-400">
              Delivering efficient, scalable solutions to transform your tech
              vision into reality.
            </p>

            <div className="mt-12 space-y-6">
              {ROLES.map((role, i) => (
                <motion.div
                  key={role}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  <div className="h-px w-12 bg-white/20" />
                  <span className="text-lg font-medium text-white/90">
                    {role}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Center Column: Image & Connecting Line */}
          <div className="relative flex justify-center lg:px-8">
            {/* SVG Connecting Line (Hidden on mobile, visible on desktop) */}
            <div className="absolute left-0 top-12 -z-10 hidden w-full lg:block">
              <svg
                className="h-[300px] w-[800px] -translate-x-1/2 overflow-visible"
                viewBox="0 0 800 300"
              >
                <path
                  d="M 50,20 C 150,20 200,80 300,80 L 500,80 L 650,150 L 750,150"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  className="opacity-50"
                />
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#d946ef" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Placing Icons on the "line" */}
              <div className="absolute left-[38%] top-[55px] z-10">
                <SocialIcon
                  href={GITHUB_URL}
                  icon={<Github className="h-5 w-5" />}
                />
              </div>
              <div className="absolute left-[54%] top-[85px] z-10">
                <SocialIcon
                  href={LINKEDIN_URL}
                  icon={<Linkedin className="h-5 w-5" />}
                />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-0 mt-8 lg:mt-0"
            >
              <div className="relative h-[280px] w-[280px] overflow-hidden rounded-full border-4 border-white/5 bg-neutral-900 md:h-[400px] md:w-[400px]">
                {!photoError ? (
                  <img
                    src={photoSrc}
                    alt="Profile"
                    className="h-full w-full object-cover"
                    onError={() => {
                      if (photoSrc === PROFILE_PHOTO_PNG_CAPITALIZED) {
                        setPhotoSrc(PROFILE_PHOTO_PNG);
                        return;
                      }
                      if (photoSrc === PROFILE_PHOTO_PNG) {
                        setPhotoSrc(PROFILE_PHOTO_JPG);
                        return;
                      }
                      setPhotoError(true);
                    }}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-4xl text-neutral-700">
                    IMG
                  </div>
                )}
              </div>

              {/* Decorative elements behind image */}
              <div className="absolute -inset-4 -z-10 rounded-full bg-gradient-to-b from-fuchsia-500/20 to-transparent blur-2xl" />
            </motion.div>
          </div>

          {/* Right Column: I am Name & Actions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center text-right pt-8 lg:pt-0"
          >
            <p className="text-xl font-medium text-white/60">I am</p>
            <h2 className="mt-2 text-6xl font-bold tracking-tight text-white lg:text-7xl">
              Krrish <br />
              <span className="text-white">Jha</span>
            </h2>

            <div className="mt-8 flex justify-end gap-4 lg:hidden">
              <SocialIcon
                href={GITHUB_URL}
                icon={<Github className="h-5 w-5" />}
              />
              <SocialIcon
                href={LINKEDIN_URL}
                icon={<Linkedin className="h-5 w-5" />}
              />
            </div>

            <div className="mt-12 flex justify-end gap-3">
              <a
                href="#contact"
                className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
}

function SocialIcon({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-neutral-950 text-white transition hover:scale-110 hover:border-white hover:bg-white hover:text-black"
    >
      {icon}
    </a>
  );
}


