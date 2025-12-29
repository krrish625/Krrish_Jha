import { motion, useReducedMotion } from "framer-motion";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

export default function Navbar() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed left-0 right-0 top-4 z-50 mx-auto w-full max-w-4xl px-4"
    >
      <div className="relative overflow-hidden rounded-full border border-white/10 bg-neutral-950/70 py-3 px-6 shadow-2xl backdrop-blur-xl supports-[backdrop-filter]:bg-neutral-950/60">
        
        {/* Ambient Glow */}
        <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-fuchsia-500/10 blur-2xl" />
        <div className="pointer-events-none absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-violet-500/10 blur-2xl" />

        <div className="flex items-center justify-between">
            {/* Logo */}
            <a
            href="#top"
            className="text-lg font-bold tracking-tight text-white transition hover:text-white/80"
            >
            KJ<span className="text-fuchsia-500">.</span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex md:gap-1">
            {NAV_ITEMS.map((item) => (
                <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-1.5 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white"
                >
                {item.label}
                </a>
            ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">

            <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
            >
                Contact
            </a>
            </div>
        </div>
      </div>
    </motion.header>
  );
}
