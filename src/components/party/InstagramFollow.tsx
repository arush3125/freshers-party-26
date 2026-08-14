import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { Section, SectionHeading } from "./Section";

export function InstagramFollow() {
  return (
    <Section id="instagram">
      <SectionHeading
        eyebrow="Follow Us"
        title={<>Follow APV Council on Instagram</>}
        subtitle="Stay updated with photos, stories, and behind-the-scenes content."
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -8 }}
        className="group relative overflow-hidden rounded-3xl glass border border-purple-500/20 shadow-lg p-8"
      >
        {/* Neon glow effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />

        <div className="relative z-10 flex flex-col items-center text-center gap-6">
          <div className="grid size-20 place-items-center rounded-full bg-purple-500/20 border border-purple-500/30">
            <Instagram className="size-10 text-purple-500" />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground">
              Follow @apv_council
            </h3>
            <p className="mt-2 text-muted-foreground">
              Never miss an update. Follow the official APV Council Instagram for all the latest news, photos, and announcements.
            </p>
          </div>

          <a
            href="https://www.instagram.com/apv_council?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="animate-pulse-glow inline-flex items-center gap-3 rounded-full px-8 py-4 text-lg font-semibold text-primary-foreground"
            style={{ backgroundImage: "linear-gradient(135deg, #E1306C, #833AB4, #F77737)" }}
          >
            <Instagram className="size-6" />
            Follow Us
          </a>
        </div>
      </motion.div>
    </Section>
  );
}
