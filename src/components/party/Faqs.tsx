import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/data/event";
import { Section, SectionHeading } from "./Section";

export function Faqs() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faqs">
      <SectionHeading eyebrow="FAQs" title="Everything you asked" />
      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="glass glow-ring overflow-hidden rounded-2xl"
            >
              <h3>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-semibold focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none sm:px-6"
                >
                  {f.q}
                  <Plus
                    className={`size-5 shrink-0 text-neon-pink transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-muted-foreground sm:px-6">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}