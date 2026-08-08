import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { competitions, type Competition } from "@/data/event";
import { Section, SectionHeading } from "./Section";
import { CompetitionModal } from "./CompetitionModal";

export function Competitions() {
  const [selected, setSelected] = useState<Competition | null>(null);

  return (
    <Section id="competitions">
      <SectionHeading
        eyebrow="Competitions"
        title={<>Pick your stage</>}
        subtitle="Four ways to make the Day yours. Tap a card for rules, timings and registration."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {competitions.map((c, i) => (
          <motion.button
            key={c.id}
            type="button"
            onClick={() => setSelected(c)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            whileHover={{ y: -8 }}
            className={`group glass glow-ring relative overflow-hidden rounded-3xl p-6 text-left ${
              i === 0 ? "col-span-full sm:col-span-2 lg:col-span-3" : ""
            }`}
          >
            <span
              aria-hidden
              className="absolute -top-16 -right-16 size-40 rounded-full bg-neon-purple/25 blur-3xl transition-opacity duration-500 group-hover:bg-neon-pink/30"
            />
            <span className="relative grid size-13 place-items-center rounded-2xl border border-border bg-secondary/60">
              <c.icon className="size-6 text-neon-cyan transition-colors group-hover:text-neon-pink" />
            </span>
            <p className="relative mt-5 text-[11px] font-medium tracking-[0.18em] text-neon-pink uppercase">
              {c.type}
            </p>
            <h3 className="relative mt-1 text-xl font-semibold">{c.name}</h3>
            <p className="relative mt-2 text-sm text-muted-foreground">{c.short}</p>
            <span className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground">
              View Details
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </motion.button>
        ))}
      </div>

      <CompetitionModal competition={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}