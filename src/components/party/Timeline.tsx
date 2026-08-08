import { motion } from "framer-motion";
import { timeline } from "@/data/event";
import { Section, SectionHeading } from "./Section";

export function Timeline() {
  return (
    <Section id="timeline">
      <SectionHeading
        eyebrow="Timeline"
        title="Mark your calendar"
        subtitle="Exact dates will be announced soon on the Student Council channels."
      />

      <div className="relative">
        <div
          aria-hidden
          className="absolute top-6 left-6 hidden h-px w-[calc(100%-3rem)] bg-linear-to-r from-neon-blue/10 via-neon-purple/60 to-neon-pink/10 md:block"
        />
        <div
          aria-hidden
          className="absolute top-0 left-6 h-full w-px bg-linear-to-b from-neon-blue/10 via-neon-purple/60 to-neon-pink/10 md:hidden"
        />

        <ol className="grid gap-6 md:grid-cols-4">
          {timeline.map((item, i) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="relative pl-16 md:pt-16 md:pl-0"
            >
              <span className="animate-pulse-glow absolute top-2 left-3 grid size-7 place-items-center rounded-full text-xs font-bold text-primary-foreground md:top-2.5 md:left-3">
                <span
                  className="grid size-7 place-items-center rounded-full"
                  style={{ backgroundImage: "var(--gradient-neon)" }}
                >
                  {i + 1}
                </span>
              </span>
              <motion.div
                whileHover={{ y: -6 }}
                className="glass glow-ring h-full rounded-3xl p-6"
              >
                <p className="text-xs font-medium tracking-[0.18em] text-neon-pink uppercase">
                  {item.date}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
              </motion.div>
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  );
}