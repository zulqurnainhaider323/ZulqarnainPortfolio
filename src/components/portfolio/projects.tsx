import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Github } from "lucide-react";
import { projects, type Project } from "@/data/projects";

export function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <Link
      to="/projects/$projectId"
      params={{ projectId: project.slug }}
      className="group block h-full bg-white dark:bg-dark-surface rounded-2xl overflow-hidden border border-slate-200 dark:border-dark-border hover:shadow-xl hover:shadow-brand-500/10 hover:border-brand-500/40 transition-all hover:-translate-y-1"
    >
      <div className="relative w-full aspect-[16/10] overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
      </div>
      <div className={compact ? "p-3.5" : "p-4"}>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.stack.slice(0, compact ? 2 : 3).map((s) => (
            <span
              key={s}
              className={`px-2 py-0.5 text-[9px] font-bold rounded-full uppercase tracking-wider ${
                project.tone === "brand"
                  ? "bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20"
                  : "bg-accent-500/10 text-accent-500 dark:text-accent-400 border border-accent-500/20"
              }`}
            >
              {s}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-bold mb-2 leading-tight">{project.title}</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-3">{project.description}</p>
        {!compact && (
          <ul className="space-y-1 mb-4">
            {project.features.slice(0, 3).map((f) => (
              <li key={f} className="text-xs text-slate-500 dark:text-slate-400 flex gap-2">
                <span className="text-brand-500 mt-0.5">▹</span>
                {f}
              </li>
            ))}
          </ul>
        )}
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-600 text-white text-xs font-semibold shadow-md shadow-brand-500/20">
            View Details <ArrowUpRight className="size-3.5" />
          </span>
          {!compact && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-dark-border text-xs font-semibold">
              <Github className="size-3.5" /> GitHub
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export function Projects() {
  const scrollingProjects = [...projects, ...projects];

  return (
    <section id="projects" className="py-18 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-500 mb-3">Projects</p>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">Featured Works</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-3 max-w-lg">A selection of my recent full-stack projects, from marketplaces to management systems.</p>
          </div>
          <Link to="/projects" className="hidden md:inline-flex items-center gap-1 text-sm text-brand-600 dark:text-brand-400 font-bold hover:gap-2 transition-all">
            View all projects <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max gap-4 animate-project-scroll hover:[animation-play-state:paused]">
            {scrollingProjects.map((project, index) => (
              <div key={`${project.slug}-${index}`} className="w-[250px] shrink-0">
                <ProjectCard project={project} compact />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
