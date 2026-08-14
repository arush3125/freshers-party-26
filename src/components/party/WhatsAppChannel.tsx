import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Section, SectionHeading } from "./Section";

export function WhatsAppChannel() {
  return (
    <Section id="whatsapp">
      <SectionHeading
        eyebrow="Stay Connected"
        title={<>Join the APV Council Channel</>}
        subtitle="Get instant updates, announcements, and connect with fellow Students."
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -8 }}
        className="group relative overflow-hidden rounded-3xl glass border border-neon-cyan/20 shadow-lg p-8"
      >
        {/* Neon glow effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-500/10 via-green-400/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />

        <div className="relative z-10 flex flex-col items-center text-center gap-6">
          <div className="grid size-20 place-items-center rounded-full bg-green-500/20 border border-green-500/30">
            <MessageCircle className="size-10 text-green-500" />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground">
              Join Our WhatsApp Channel
            </h3>
            <p className="mt-2 text-muted-foreground">
              Never miss an update. Join the official APV Council WhatsApp channel for all the latest news and announcements.
            </p>
          </div>

          <a
            href="https://whatsapp.com/channel/0029VbBPi7KJkK7FaH6VwS3S"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-pulse-glow inline-flex items-center gap-3 rounded-full px-8 py-4 text-lg font-semibold text-primary-foreground"
            style={{ backgroundImage: "linear-gradient(135deg, #25D366, #128C7E)" }}
          >
            <MessageCircle className="size-6" />
            Join Channel
          </a>
        </div>
      </motion.div>
    </Section>
  );
}
