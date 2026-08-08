import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { navLinks } from "@/data/event";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b shadow-lg" : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-28 w-full max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8"
      >
        <a href="#home" className="flex items-center gap-3">
          {/* LOGO PLACEHOLDER 1 — College Logo */}
          <img
            src="/Agnel_logo.png"
            alt="Fr. Agnel Polytechnic Logo"
            className="size-16 rounded-full object-contain"
          />
          {/* LOGO PLACEHOLDER 2 — Student Council Logo */}
          <img
            src="/Council_logo-removebg-preview (1).png"
            alt="Student Council Logo"
            className="size-16 rounded-full object-contain"
          />
          <span className="hidden text-sm leading-tight font-semibold sm:block">
             Agnel Polytechnic
            <span className="block text-xs font-normal text-muted-foreground">
              Student Council
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#competitions"
            className="animate-pulse-glow hidden items-center gap-2 rounded-full px-10 py-5 text-lg font-semibold text-primary-foreground sm:inline-flex"
            style={{ backgroundImage: "var(--gradient-neon)" }}
          >
            <Sparkles className="size-6" />
            Register
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center rounded-full border border-border glass lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="glass overflow-hidden border-t lg:hidden"
          >
            <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#competitions"
                  onClick={() => setOpen(false)}
                  className="mt-2 block rounded-xl px-4 py-3 text-center text-base font-semibold text-primary-foreground"
                  style={{ backgroundImage: "var(--gradient-neon)" }}
                >
                  Register Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}