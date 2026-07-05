import { Code, Database, Server, Terminal, Wrench } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const categories = [
  { icon: Code, title: "Frontend", color: "brand", skills: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap"] },
  { icon: Server, title: "Backend", color: "accent", skills: ["Node.js", "Express.js"] },
  { icon: Database, title: "Database", color: "brand", skills: ["MySQL", "MongoDB"] },
  { icon: Terminal, title: "Programming", color: "accent", skills: ["C++", "Java", "Python (basic)"] },
  { icon: Wrench, title: "Tools", color: "brand", skills: ["Git", "GitHub", "VS Code", "Postman"] },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-50 dark:bg-dark-bg/60">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Technical Skills" title="Technical Arsenal" description="The tools and technologies I use to bring ideas to life." />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => {
            const accent = cat.color === "accent";
            return (
              <Reveal key={cat.title} delay={i * 80}>
                <div className="group h-full p-8 rounded-3xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/10 hover:border-brand-500/40">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`size-11 rounded-xl grid place-items-center ${accent ? "bg-accent-500/10 text-accent-500" : "bg-brand-500/10 text-brand-500 dark:text-brand-400"}`}>
                      <cat.icon className="size-5" />
                    </div>
                    <h3 className={`font-mono text-base font-bold ${accent ? "text-accent-500" : "text-brand-600 dark:text-brand-400"}`}>
                      // {cat.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map((s) => (
                      <span
                        key={s}
                        className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-dark-bg text-sm font-medium border border-slate-200 dark:border-dark-border hover:border-brand-500/60 hover:text-brand-500 hover:shadow-lg hover:shadow-brand-500/20 hover:-translate-y-0.5 transition-all cursor-default"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
