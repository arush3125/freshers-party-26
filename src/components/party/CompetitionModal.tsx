import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Users, ExternalLink } from "lucide-react";
import type { Competition } from "@/data/event";

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-xs font-semibold tracking-[0.18em] text-neon-cyan uppercase">
        {title}
      </h4>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5 text-sm text-muted-foreground">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-neon-pink" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CompetitionModal({
  competition,
  onClose,
}: {
  competition: Competition | null;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!competition) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [competition, onClose]);

  return (
    <AnimatePresence>
      {competition && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto bg-background/80 p-4 backdrop-blur-xl sm:items-center"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="competition-title"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="glass relative my-4 w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-3xl shadow-2xl flex flex-col"
          >
            <div className="relative h-36 sm:h-48 shrink-0">
              <img
                src={competition.image}
                alt={`Placeholder image for the ${competition.name} competition`}
                loading="lazy"
                className="size-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-card via-card/60 to-transparent" />
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close competition details"
                className="glass absolute top-4 right-4 grid size-10 place-items-center rounded-full focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                <X className="size-5" />
              </button>
              <div className="absolute right-6 bottom-4 left-6">
                <p className="text-[11px] font-medium tracking-[0.18em] text-neon-pink uppercase">
                  {competition.type}
                </p>
                <h3 id="competition-title" className="text-2xl font-bold sm:text-3xl">
                  {competition.name}
                </h3>
              </div>
            </div>

            <div className="space-y-5 p-5 sm:p-6 overflow-y-auto flex-1">
              <p className="text-sm text-muted-foreground">{competition.description}</p>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-2xl border border-border bg-secondary/40 p-3">
                  <Clock className="size-5 shrink-0 text-neon-cyan" />
                  <div>
                    <p className="text-xs text-muted-foreground">Performance Time</p>
                    <p className="text-sm font-semibold">{competition.performanceTime}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-border bg-secondary/40 p-3">
                  <Users className="size-5 shrink-0 text-neon-cyan" />
                  <div>
                    <p className="text-xs text-muted-foreground">Eligibility</p>
                    <p className="text-sm font-semibold">{competition.eligibility}</p>
                  </div>
                </div>
              </div>

              <List title="Instructions" items={competition.instructions} />
              <List title="Rules" items={competition.rules} />
              <List title="Judging Criteria" items={competition.judging} />

              <a
                href={competition.formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="animate-pulse-glow flex w-full items-center justify-center gap-2 rounded-full px-8 py-3 text-base font-semibold text-primary-foreground shrink-0"
                style={{ backgroundImage: "var(--gradient-neon)" }}
              >
                Register Now
                <ExternalLink className="size-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}