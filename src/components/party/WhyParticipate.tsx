import { motion } from "framer-motion";
import { Star, ShieldCheck, Trophy, HeartHandshake, Camera } from "lucide-react";
import { Section, SectionHeading } from "./Section";

const reasons = [
  { icon: Star, title: "Showcase Talent", text: "Get a real stage, real lights and a real audience." },
  { icon: ShieldCheck, title: "Build Confidence", text: "Performing early makes every presentation after it easier." },
  { icon: Trophy, title: "Win Exciting Prizes", text: "Trophies, certificates and goodies for every category." },
  { icon: HeartHandshake, title: "Meet New Friends", text: "Rehearsals are where your college circle actually begins." },
  { icon: Camera, title: "Create Memories", text: "The night you'll still be talking about in final year." },
];

export function WhyParticipate() {
  return (
    <Section id="why">
      <SectionHeading eyebrow="Why participate" title="More than just one night" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r, i) => (
          <motion.article
            key={r.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            whileHover={{ y: -6 }}
            className="glass glow-ring rounded-3xl p-6"
          >
            <span className="grid size-12 place-items-center rounded-2xl border border-border bg-secondary/60">
              <r.icon className="size-6 text-neon-pink" />
            </span>
            <h3 className="mt-5 text-lg font-semibold">{r.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{r.text}</p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}