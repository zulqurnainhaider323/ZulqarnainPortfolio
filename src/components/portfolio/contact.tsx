import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error ?? "Unable to send message right now.");
      }

      form.reset();
      toast.success("Message sent!", { description: "Thanks for reaching out - I'll get back to you soon." });
    } catch (error) {
      toast.error("Message not sent", {
        description: error instanceof Error ? error.message : "Please try again in a moment.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 px-5 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-brand-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="relative max-w-3xl mx-auto">
        <SectionHeading eyebrow="Contact" title="Let's Connect" description="Have a project in mind, or just want to say hi? My inbox is always open." />

        <Reveal>
          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-5 rounded-2xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border p-6 md:p-8 shadow-xl"
          >
            <div className="flex flex-col gap-5">
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                  placeholder="you@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-fit items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-brand-600 to-accent-500 text-white text-sm font-bold rounded-xl shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 transition-all hover:-translate-y-0.5 active:scale-[0.98] disabled:opacity-70"
            >
              {loading ? "Sending..." : (
                <>
                  Send Message <Send className="size-4" />
                </>
              )}
            </button>
          </form>
        </Reveal>

        <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
          <a
            href="https://github.com/zulqurnainhaider323/"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border hover:border-brand-500/60 hover:-translate-y-0.5 transition-all text-sm font-medium"
          >
            <Github className="size-4" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/zulqurnain-haider-888410418/"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border hover:border-brand-500/60 hover:-translate-y-0.5 transition-all text-sm font-medium"
          >
            <Linkedin className="size-4" /> LinkedIn
          </a>
          <a
            href="mailto:zulqurnainkkc786@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border hover:border-brand-500/60 hover:-translate-y-0.5 transition-all text-sm font-medium"
          >
            <Mail className="size-4" /> Email
          </a>
        </div>
      </div>
    </section>
  );
}
