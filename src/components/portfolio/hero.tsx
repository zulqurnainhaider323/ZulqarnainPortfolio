import { ArrowRight, Mail, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-developer.jpg";

export function Hero() {
  return (
    <section id="home" className="relative pt-16 pb-28 px-6 overflow-hidden">
      <div className="absolute top-[-15%] left-[-10%] w-[45%] h-[45%] bg-brand-500/20 blur-[140px] rounded-full animate-blob" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[45%] h-[45%] bg-accent-500/20 blur-[140px] rounded-full animate-blob [animation-delay:-9s]" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="animate-fade-in-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 dark:bg-brand-500/10 border border-brand-500/20 text-brand-600 dark:text-brand-400 text-xs font-bold tracking-widest uppercase mb-6">
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75" />
              <span className="relative inline-flex rounded-full size-2 bg-brand-500" />
            </span>
            Available for hire
          </div>
          <h1 className="animate-fade-in-up [animation-delay:80ms] text-5xl lg:text-7xl font-extrabold tracking-tighter mb-6 leading-[1.05]">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 via-brand-400 to-accent-500">
              Zulqarnain Haider
            </span>
          </h1>
          <h2 className="animate-fade-in-up [animation-delay:160ms] text-lg md:text-xl font-medium text-slate-600 dark:text-slate-400 mb-6">
            Computer Science Student · Full-Stack Web Developer · Software Engineering Enthusiast
          </h2>
          <p className="animate-fade-in-up [animation-delay:240ms] text-base md:text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed">
            I build scalable, efficient, and responsive web applications using modern technologies like React, Node.js, Express, MongoDB, and MySQL.
          </p>
          <div className="animate-fade-in-up [animation-delay:320ms] flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-2xl font-semibold shadow-xl shadow-brand-500/30 transition-all hover:-translate-y-0.5 active:scale-95"
            >
              View Projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-slate-300 dark:border-dark-border bg-white/50 dark:bg-dark-surface/50 backdrop-blur hover:bg-slate-100 dark:hover:bg-dark-surface rounded-2xl font-semibold transition-all hover:-translate-y-0.5 active:scale-95"
            >
              <Mail className="size-4" />
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative animate-fade-in-up [animation-delay:400ms]">
          <div className="animate-float">
            <div className="relative w-full aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-black/5 dark:ring-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 via-transparent to-accent-500/20 mix-blend-overlay z-10 pointer-events-none" />
              <img src={heroImg} alt="Developer workspace visualization" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 p-5 bg-white dark:bg-dark-surface rounded-2xl shadow-2xl border border-slate-100 dark:border-dark-border animate-glow-pulse">
            <div className="flex items-center gap-3">
              <div className="size-11 rounded-xl bg-gradient-to-tr from-brand-500 to-accent-500 grid place-items-center text-white">
                <Sparkles className="size-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Focus</p>
                <p className="font-bold text-sm">MERN Full-Stack</p>
              </div>
            </div>
          </div>
          <div className="hidden md:block absolute -top-4 -right-4 p-4 bg-white dark:bg-dark-surface rounded-2xl shadow-xl border border-slate-100 dark:border-dark-border">
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">BSCS</p>
            <p className="font-bold text-sm">2022 — 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}
