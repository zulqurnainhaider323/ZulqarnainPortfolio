import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { PortfolioLayout } from "@/components/portfolio/page-layout";
import { getProjectBySlug } from "@/data/projects";

export const Route = createFileRoute("/projects_/$projectId")({
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  const { projectId } = Route.useParams();
  const project = getProjectBySlug(projectId);

  if (!project) {
    return (
      <PortfolioLayout>
        <section className="py-18 px-5">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-500 mb-3">Project</p>
            <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight">Project not found</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-3 mb-6">The project you opened does not exist in the current portfolio list.</p>
            <Link to="/projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold transition-all">
              <ArrowLeft className="size-4" /> Back to projects
            </Link>
          </div>
        </section>
      </PortfolioLayout>
    );
  }

  return (
    <PortfolioLayout>
      <section className="py-16 px-5">
        <div className="max-w-6xl mx-auto">
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-brand-600 dark:text-brand-400 font-bold hover:gap-3 transition-all mb-8">
            <ArrowLeft className="size-4" /> Back to projects
          </Link>

          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-start">
            <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-surface shadow-xl shadow-brand-500/5">
              <img src={project.image} alt={project.title} className="w-full aspect-[16/10] object-cover" />
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-500 mb-3">Project Detail</p>
              <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight">{project.title}</h1>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">{project.overview}</p>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className={`px-2.5 py-1 text-[10px] font-bold rounded-full uppercase tracking-wider ${
                      project.tone === "brand"
                        ? "bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20"
                        : "bg-accent-500/10 text-accent-500 dark:text-accent-400 border border-accent-500/20"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-7 rounded-2xl border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-surface p-5">
                <h2 className="text-lg font-bold mb-3">Key Features</h2>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <span className="text-brand-500 mt-0.5">▹</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold shadow-lg shadow-brand-500/20 transition-all">
                  Live Demo <ArrowUpRight className="size-4" />
                </a>
                <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-dark-border hover:bg-slate-100 dark:hover:bg-dark-surface text-sm font-semibold transition-all">
                  <Github className="size-4" /> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PortfolioLayout>
  );
}
