import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PortfolioLayout } from "@/components/portfolio/page-layout";
import { ProjectCard } from "@/components/portfolio/projects";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
});

function ProjectsPage() {
  const scrollingProjects = [...projects, ...projects];

  return (
    <PortfolioLayout>
      <section className="py-18 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-500 mb-3">Projects</p>
              <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight">All Projects</h1>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-3 max-w-lg">
                Browse the complete project list. Click any project card to open its detailed page.
              </p>
            </div>
            <Link to="/" className="inline-flex items-center gap-1 text-sm text-brand-600 dark:text-brand-400 font-bold hover:gap-2 transition-all">
              Back to home <ArrowUpRight className="size-4" />
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
    </PortfolioLayout>
  );
}
