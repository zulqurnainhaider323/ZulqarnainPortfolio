import { GraduationCap, MapPin } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const coursework = [
  "Data Structures",
  "Algorithms",
  "Database Systems",
  "Operating Systems",
  "Software Engineering",
  "Web Engineering",
  "Artificial Intelligence",
  "Computer Networks",
];

export function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Education" title="Academic Journey" description="Building strong CS fundamentals with a focus on modern software engineering." />

        <Reveal>
          <div className="relative rounded-[2rem] bg-gradient-to-br from-white to-slate-50 dark:from-dark-surface dark:to-dark-elevated border border-slate-200 dark:border-dark-border p-8 md:p-12 shadow-xl">
            <div className="absolute top-0 left-8 md:left-12 -translate-y-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-brand-600 to-accent-500 text-white text-xs font-bold tracking-widest uppercase shadow-lg shadow-brand-500/30">
              2022 — 2026
            </div>
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="size-16 shrink-0 rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 grid place-items-center text-white shadow-lg shadow-brand-500/30">
                <GraduationCap className="size-8" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-2xl md:text-3xl font-extrabold mb-2">Bachelor of Science in Computer Science</h3>
                <p className="text-brand-600 dark:text-brand-400 font-semibold mb-1">Sahara College Narowal</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2 mb-8">
                  <MapPin className="size-4" /> Narowal, Pakistan
                </p>

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">Relevant Coursework</p>
                <div className="flex flex-wrap gap-2">
                  {coursework.map((c, i) => (
                    <span
                      key={c}
                      style={{ animationDelay: `${i * 60}ms` }}
                      className="animate-fade-in-up px-4 py-2 rounded-full bg-slate-100 dark:bg-dark-bg border border-slate-200 dark:border-dark-border text-sm font-medium hover:border-brand-500/60 hover:text-brand-500 hover:-translate-y-0.5 transition-all cursor-default"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
