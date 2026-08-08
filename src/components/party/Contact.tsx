import { motion } from "framer-motion";
import { Phone, MessageCircle, User } from "lucide-react";
import { committee } from "@/data/event";
import { Section, SectionHeading } from "./Section";

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Organising Committee"
        subtitle="Reach out to any of the coordinators for help with registrations or auditions."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {committee.map((m, i) => (
          <motion.article
            key={m.name}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            whileHover={{ y: -6 }}
            className="glass glow-ring flex flex-col items-center rounded-3xl p-6 text-center"
          >
            {/* PHOTO PLACEHOLDER — replace with <img> of the member */}
            <div
              className="grid size-24 place-items-center rounded-full border border-border bg-secondary/60"
              role="img"
              aria-label={`Photo placeholder for ${m.name}`}
            >
              <User className="size-9 text-muted-foreground" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{m.name}</h3>
            <p className="text-sm text-neon-cyan">{m.role}</p>
            <div className="mt-4 flex items-center gap-2">
              <a
                href={`tel:+91${m.phone}`}
                className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-colors hover:text-neon-pink"
              >
                <Phone className="size-4" />
                {m.phone}
              </a>
              <a
                href={`https://wa.me/91${m.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`WhatsApp ${m.name}`}
                className="glass grid size-10 place-items-center rounded-full transition-colors hover:text-neon-cyan"
              >
                <MessageCircle className="size-4" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}