import { Instagram, Mail, Phone } from "lucide-react";
import { navLinks } from "@/data/event";
import agnelLogo from "/Agnel_logo (2).png";
import councilLogo from "/Council_logo-removebg-preview (1).png";

export function Footer() {
  return (
    <footer className="relative border-t px-5 py-14 sm:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={agnelLogo}
              alt="Fr. Agnel Polytechnic Logo"
              className="size-12 rounded-full object-contain"
            />
            <img
              src={councilLogo}
              alt="Student Council Logo"
              className="size-12 rounded-full object-contain"
            />
          </div>
          <p className="mt-4 text-sm font-semibold">Fr. Agnel Polytechnic, Vashi</p>
          <p className="text-sm text-muted-foreground">
            Student Council — Freshers' Party '26
          </p>
        </div>

        <nav aria-label="Footer">
          <h3 className="text-xs font-semibold tracking-[0.18em] text-neon-cyan uppercase">
            Quick Links
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-xs font-semibold tracking-[0.18em] text-neon-cyan uppercase">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <a
                href="#team"
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Mail className="size-4 text-neon-pink" />
                Meet the Team
              </a>
            </li>
            <li>
              <a
                href="tel:+7977600390"
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Phone className="size-4 text-neon-pink" />
                +91 7977600390
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/apv_council/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Instagram className="size-4 text-neon-pink" />
                apv_council
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex w-full max-w-6xl flex-col items-center justify-between gap-2 border-t pt-6 text-xs text-muted-foreground sm:flex-row">
        <p>© 2026 Fr. Agnel Polytechnic Student Council</p>
        <p>Made with ❤️ by Student Council</p>
      </div>
    </footer>
  );
}