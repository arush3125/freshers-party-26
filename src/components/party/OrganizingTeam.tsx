import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, Instagram } from "lucide-react";
import { organizers, type Organizer } from "@/data/event";
import { Section, SectionHeading } from "./Section";

export function OrganizingTeam() {
  return (
    <Section id="team">
      <SectionHeading
        eyebrow="Meet the Organizing Team"
        title={<>Have questions about Freshers' Party '26?</>}
        subtitle="Reach out to our organizing committee. We're here to help you!"
      />

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {organizers.map((organizer, index) => (
          <OrganizerCard key={organizer.id} organizer={organizer} index={index} />
        ))}
      </div>
    </Section>
  );
}

function OrganizerCard({ organizer, index }: { organizer: Organizer; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-3xl glass border border-neon-cyan/20 shadow-lg"
    >
      {/* Neon glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-3xl bg-gradient-to-br from-neon-purple/10 via-neon-pink/10 to-neon-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        animate={{
          boxShadow: "0 0 20px rgba(6,182,212,0.1)",
        }}
        whileHover={{
          boxShadow: "0 0 40px rgba(6,182,212,0.3)",
        }}
      />

      {/* Profile Image/Video */}
      <div className="relative aspect-[1080/1350] overflow-hidden">
        {organizer.video ? (
          <video
            src={organizer.video}
            autoPlay
            loop={false}
            muted
            playsInline
            className="size-full object-cover"
          />
        ) : (
          <motion.img
            src={organizer.image}
            alt={organizer.name}
            className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
      </div>

      {/* Organizer Information */}
      <div className="relative p-5 space-y-4 z-10">
        <div>
          <h3 className="text-lg font-bold text-foreground">{organizer.name}</h3>
          <p className="text-sm font-semibold text-neon-cyan">{organizer.designation}</p>
          {organizer.department && (
            <p className="text-xs text-muted-foreground mt-1">{organizer.department}</p>
          )}
        </div>

        {/* Contact Icons */}
        <div className="flex items-center gap-3 pt-2">
          <motion.a
            href={`tel:${organizer.phone}`}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="grid size-10 place-items-center rounded-full bg-secondary/80 border border-border hover:border-neon-cyan/50 hover:bg-neon-cyan/20 transition-colors"
            aria-label={`Call ${organizer.name}`}
          >
            <Phone className="size-4 text-neon-cyan" />
          </motion.a>

          {organizer.whatsapp && (
            <motion.a
              href={`https://wa.me/${organizer.whatsapp.replace(/\s/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="grid size-10 place-items-center rounded-full bg-secondary/80 border border-border hover:border-green-500/50 hover:bg-green-500/20 transition-colors"
              aria-label={`WhatsApp ${organizer.name}`}
            >
              <MessageCircle className="size-4 text-green-500" />
            </motion.a>
          )}

          {organizer.email && (
            <motion.a
              href={`mailto:${organizer.email}`}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="grid size-10 place-items-center rounded-full bg-secondary/80 border border-border hover:border-neon-pink/50 hover:bg-neon-pink/20 transition-colors"
              aria-label={`Email ${organizer.name}`}
            >
              <Mail className="size-4 text-neon-pink" />
            </motion.a>
          )}

          {organizer.instagram && (
            <motion.a
              href={`https://instagram.com/${organizer.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="grid size-10 place-items-center rounded-full bg-secondary/80 border border-border hover:border-purple-500/50 hover:bg-purple-500/20 transition-colors"
              aria-label={`Instagram ${organizer.name}`}
            >
              <Instagram className="size-4 text-purple-500" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
