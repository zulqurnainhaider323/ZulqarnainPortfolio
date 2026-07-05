import { Award, Boxes, Code2, Database } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const certs = [
  { icon: Code2, title: "Web Development", detail: "HTML, CSS, JavaScript & React" },
  { icon: Database, title: "Database Management Systems", detail: "SQL, Schema Design, Optimization" },
  { icon: Boxes, title: "Object Oriented Programming", detail: "C++ Design Patterns & Principles" },
  { icon: Award, title: "Software Engineering Basics", detail: "SDLC, Agile & Best Practices" },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 bg-slate-50 dark:bg-dark-bg/60">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Certifications" title="Credentials & Learning" description="Continuous learning across the full software engineering stack." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <div className="group h-full p-7 rounded-3xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/10 hover:border-brand-500/40 transition-all">
                <div className="size-12 rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 grid place-items-center text-white mb-5 shadow-lg shadow-brand-500/30 group-hover:scale-110 transition-transform">
                  <c.icon className="size-5" />
                </div>
                <h3 className="text-lg font-bold mb-2">{c.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{c.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
