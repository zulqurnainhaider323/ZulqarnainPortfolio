import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-slate-200 dark:border-dark-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 dark:text-slate-400 text-sm">© 2026 Zulqarnain Haider. All rights reserved.</p>
        <div className="flex items-center gap-3">
          {[Github, Linkedin, Mail].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="size-10 rounded-full bg-slate-100 dark:bg-dark-surface border border-slate-200 dark:border-dark-border grid place-items-center hover:bg-brand-500 hover:text-white hover:border-brand-500 hover:-translate-y-0.5 transition-all"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
