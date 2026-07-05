import { Bot, Brain, Code2, Layers } from "lucide-react";
import { Reveal } from "./reveal";

const cards = [
  { icon: Code2, title: "Full-Stack Development", desc: "End-to-end web architecture from database schema to polished frontend." },
  { icon: Brain, title: "Problem Solving", desc: "Strong foundation in algorithms and complex data structures." },
  { icon: Layers, title: "Software Design", desc: "Focused on clean code, modular systems and scalable architecture." },
  { icon: Bot, title: "AI Applications", desc: "Exploring LLMs and machine learning for modern web solutions." },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white dark:bg-dark-surface/40">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16">
          <Reveal className="md:w-1/3">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-500 mb-4">About</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 flex items-center gap-3">
              <span className="w-10 h-1 bg-gradient-to-r from-brand-500 to-accent-500 inline-block rounded-full" />
              About Me
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I am a motivated Computer Science student with a strong interest in web development, software engineering, and AI applications. I enjoy solving problems and creating clean, scalable, and efficient web applications.
            </p>
          </Reveal>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div className="group h-full p-8 rounded-3xl bg-slate-50 dark:bg-dark-surface border border-slate-200 dark:border-dark-border hover:shadow-xl hover:shadow-brand-500/10 transition-all hover:-translate-y-1 hover:border-brand-500/40">
                  <div className="size-12 rounded-2xl bg-gradient-to-br from-brand-500/15 to-accent-500/15 grid place-items-center text-brand-500 dark:text-brand-400 mb-6 group-hover:scale-110 transition-transform">
                    <c.icon className="size-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{c.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
