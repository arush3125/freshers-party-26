import { motion } from "framer-motion";
import { ChevronDown, Sparkles, CalendarClock } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pt-28 pb-20 sm:px-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 h-[70vh] w-[120vw] -translate-x-1/2 bg-[conic-gradient(from_200deg_at_50%_0%,transparent_0deg,color-mix(in_oklab,var(--color-neon-purple)_28%,transparent)_25deg,transparent_50deg,color-mix(in_oklab,var(--color-neon-pink)_24%,transparent)_100deg,transparent_130deg)] blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto inline-flex items-center gap-3 rounded-full border border-neon-cyan/30 bg-gradient-to-r from-neon-purple/10 via-neon-pink/10 to-neon-cyan/10 px-6 py-3 shadow-[0_0_20px_rgba(6,182,212,0.3)] backdrop-blur-md"
        >
          <Sparkles className="size-5 text-neon-cyan" />
          <span className="text-sm font-bold tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink uppercase sm:text-base">
            Agnel Polytechnic, Vashi
          </span>
          <Sparkles className="size-5 text-neon-pink" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="mt-3 text-5xl leading-[0.95] font-bold tracking-tight sm:text-7xl md:text-8xl"
        >
          <span className="text-gradient text-3xl sm:text-4xl md:text-5xl">presents</span>
          <span className="block mt-2 text-gradient">Freshers'</span>
          <span className="block">Party '26</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
        >
          Celebrate talent, creativity, music, dance, and unforgettable memories.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href="#competitions"
            className="animate-pulse-glow inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-primary-foreground sm:w-auto"
            style={{ backgroundImage: "var(--gradient-neon)" }}
          >
            Explore Competitions
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href="#timeline"
            className="glass glow-ring inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold sm:w-auto"
          >
            <CalendarClock className="size-5 text-neon-cyan" />
            View Timeline
          </motion.a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 1 }, y: { duration: 2, repeat: Infinity } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full border border-border glass p-3 text-muted-foreground"
      >
        <ChevronDown className="size-5" />
      </motion.a>
    </section>
  );
}