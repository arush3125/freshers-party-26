import { motion } from "framer-motion";
import { Music, Sparkles, PartyPopper, Star, Users } from "lucide-react";
import { Section, SectionHeading } from "./Section";

const highlights = [
  { icon: Music, label: "Music", emoji: "🎵" },
  { icon: Users, label: "Dance", emoji: "💃" },
  { icon: PartyPopper, label: "Fun", emoji: "🎉" },
  { icon: Star, label: "Talent", emoji: "⭐" },
  { icon: Sparkles, label: "Celebration", emoji: "✨" },
];

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About the event"
        title={<>Your College Journey Starts Here</>}
        subtitle="Freshers' Party '26 welcomes all first-year students to showcase their talents, make new friends, and begin their college journey with excitement."
      />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {highlights.map((h, i) => (
          <motion.div
            key={h.label}
            initial={{ opacity: 0, y: 24, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{
              y: -8,
              scale: 1.05,
              boxShadow: "0 0 30px rgba(6,182,212,0.4)"
            }}
            className="relative group flex flex-col items-center gap-4 rounded-3xl p-8 text-center overflow-hidden border border-neon-cyan/20 bg-gradient-to-br from-neon-purple/5 via-neon-pink/5 to-neon-cyan/5 backdrop-blur-md last:col-span-2 sm:last:col-span-1"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-neon-cyan/0 via-neon-cyan/10 to-neon-cyan/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            />
            <motion.span
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="relative grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 border border-neon-cyan/30 shadow-[0_0_20px_rgba(6,182,212,0.2)]"
            >
              <span className="text-4xl">{h.emoji}</span>
            </motion.span>
            <motion.span
              className="relative text-sm font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink uppercase"
              whileHover={{ scale: 1.1 }}
            >
              {h.label}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}