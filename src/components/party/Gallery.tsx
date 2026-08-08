import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Images } from "lucide-react";
import { gallery } from "@/data/event";
import { Section, SectionHeading } from "./Section";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <Section id="gallery">
      <SectionHeading
        eyebrow="Memories"
        title="Glimpse of Fresher's 2025"
        subtitle="A look back at the lights, the stage and the people who made last year unforgettable."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((img, i) => (
          <motion.button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            className="group glow-ring relative aspect-4/3 overflow-hidden rounded-3xl border border-border"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width={1024}
              height={768}
              className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <span className="absolute inset-0 bg-linear-to-t from-background/85 via-background/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
            <span className="absolute inset-x-4 bottom-4 translate-y-3 text-left text-sm font-medium opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              Fresher's 2025
            </span>
          </motion.button>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="#gallery"
          className="glass glow-ring inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
        >
          <Images className="size-4 text-neon-pink" />
          View More Memories
        </a>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Gallery image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-background/85 p-4 backdrop-blur-xl"
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              src={gallery[active]!.src}
              alt={gallery[active]!.alt}
              className="max-h-[85vh] w-auto rounded-3xl border border-border object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              type="button"
              autoFocus
              onClick={() => setActive(null)}
              aria-label="Close image"
              className="glass absolute top-6 right-6 grid size-11 place-items-center rounded-full"
            >
              <X className="size-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}