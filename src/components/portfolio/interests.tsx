import { Briefcase, Cpu, Globe, Sparkles } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const items = [
  { icon: Globe, title: "Web Development", desc: "Crafting modern, performant web experiences." },
  { icon: Sparkles, title: "AI Applications", desc: "Integrating intelligence into everyday tools." },
  { icon: Cpu, title: "Software Engineering", desc: "Designing systems that scale gracefully." },
  { icon: Briefcase, title: "Freelancing", desc: "Delivering value to clients worldwide." },
];

export function Interests() {
  return (
    <section className="py-24 px-6 bg-slate-50 dark:bg-dark-bg/60">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Interests" title="What Drives Me" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 80}>
              <div className="group h-full p-7 rounded-3xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border hover:-translate-y-1 hover:shadow-xl hover:shadow-accent-500/10 hover:border-accent-500/40 transition-all">
                <div className="size-12 rounded-2xl bg-gradient-to-br from-accent-500 to-brand-500 grid place-items-center text-white mb-5 shadow-lg shadow-accent-500/25 group-hover:rotate-6 transition-transform">
                  <it.icon className="size-5" />
                </div>
                <h3 className="text-lg font-bold mb-2">{it.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
