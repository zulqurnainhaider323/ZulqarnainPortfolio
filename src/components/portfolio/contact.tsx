import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message sent!", { description: "Thanks for reaching out — I'll get back to you soon." });
    }, 700);
  };

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-brand-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="relative max-w-3xl mx-auto">
        <SectionHeading eyebrow="Contact" title="Let's Connect" description="Have a project in mind, or just want to say hi? My inbox is always open." />

        <Reveal>
          <form
            onSubmit={onSubmit}
            className="rounded-[2rem] bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border p-8 md:p-10 shadow-xl space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-5 py-3.5 bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border rounded-2xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-5 py-3.5 bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border rounded-2xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Message</label>
              <textarea
                rows={5}
                required
                className="w-full px-5 py-3.5 bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border rounded-2xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all resize-none"
                placeholder="Tell me about your project…"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-brand-600 to-accent-500 text-white font-bold rounded-2xl shadow-xl shadow-brand-500/30 hover:shadow-brand-500/50 transition-all hover:scale-[1.01] active:scale-[0.98] disabled:opacity-70"
            >
              {loading ? "Sending…" : (<>Send Message <Send className="size-4" /></>)}
            </button>
          </form>
        </Reveal>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a href="https://github.com/zulqurnainhaider323/" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border hover:border-brand-500/60 hover:-translate-y-0.5 transition-all font-medium">
            <Github className="size-4" /> GitHub
          </a>
          <a href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border hover:border-brand-500/60 hover:-translate-y-0.5 transition-all font-medium">
            <Linkedin className="size-4" /> LinkedIn
          </a>
          <a href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border hover:border-brand-500/60 hover:-translate-y-0.5 transition-all font-medium">
            <Mail className="size-4" /> Email
          </a>
        </div>
      </div>
    </section>
  );
}
