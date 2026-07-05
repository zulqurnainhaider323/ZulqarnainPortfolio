import { Clock, MessageCircle, Puzzle, Users } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const skills = [
  { icon: Puzzle, label: "Problem Solving" },
  { icon: Users, label: "Teamwork" },
  { icon: MessageCircle, label: "Communication" },
  { icon: Clock, label: "Time Management" },
];

export function SoftSkills() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading eyebrow="Soft Skills" title="Beyond the Code" />
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="group inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border hover:border-brand-500/60 hover:shadow-lg hover:shadow-brand-500/20 hover:-translate-y-0.5 transition-all">
                <div className="size-10 rounded-xl bg-gradient-to-br from-brand-500/15 to-accent-500/15 grid place-items-center text-brand-500 dark:text-brand-400 group-hover:scale-110 transition-transform">
                  <s.icon className="size-5" />
                </div>
                <span className="font-semibold">{s.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
