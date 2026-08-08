import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto mb-12 max-w-2xl text-center"
    >
      {eyebrow && (
        <span className="mb-4 inline-block rounded-full border border-border glass px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-neon-cyan uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-muted-foreground">{subtitle}</p>}
    </motion.div>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative px-5 py-20 sm:px-8 md:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}