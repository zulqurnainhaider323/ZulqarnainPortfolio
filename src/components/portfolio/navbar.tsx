import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/60 dark:border-dark-border/60 bg-white/70 dark:bg-dark-bg/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="size-10 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 grid place-items-center text-white font-bold shadow-lg shadow-brand-500/30">
            Z
          </div>
          <span className="text-lg font-bold tracking-tight font-mono">
            Zulqarnain<span className="text-brand-500">.dev</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {links.slice(0, -1).map((l) => (
            <a key={l.href} href={l.href} className="text-slate-600 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-400 transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-white bg-brand-600 hover:bg-brand-700 px-5 py-2.5 rounded-full shadow-lg shadow-brand-500/25 hover:scale-105 transition-all"
          >
            Contact
          </a>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden size-10 grid place-items-center rounded-full border border-slate-200 dark:border-dark-border"
            aria-label="Toggle menu"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-200 dark:border-dark-border bg-white/95 dark:bg-dark-bg/95 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 px-4 rounded-xl text-sm font-medium hover:bg-slate-100 dark:hover:bg-dark-surface transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
