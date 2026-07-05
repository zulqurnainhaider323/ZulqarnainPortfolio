import { ArrowUpRight, Github } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import carhub from "@/assets/project-carhub.jpg";
import students from "@/assets/project-students.jpg";
import library from "@/assets/project-library.jpg";
import weather from "@/assets/project-weather.jpg";

const projects = [
  {
    image: carhub,
    title: "CarHub — Spare Parts Marketplace",
    description: "Full-stack MERN web platform for buying and selling car spare parts.",
    features: ["User authentication", "Role-based access (Admin & User)", "Product listing & search", "Cart and order system", "REST APIs"],
    stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    tone: "brand" as const,
  },
  {
    image: students,
    title: "Student Management System",
    description: "CRUD-based student management platform using PHP and MySQL.",
    features: ["Student records management", "Attendance management", "Grades management", "Admin panel with authentication"],
    stack: ["PHP", "MySQL", "HTML", "CSS"],
    tone: "accent" as const,
  },
  {
    image: library,
    title: "Library Management System",
    description: "Database-integrated system for managing books, issues and returns.",
    features: ["Book issue and return system", "Search functionality", "Record management"],
    stack: ["PHP", "MySQL", "HTML", "CSS"],
    tone: "brand" as const,
  },
  {
    image: weather,
    title: "Weather App",
    description: "Real-time weather application using JavaScript and the OpenWeather API.",
    features: ["City-based weather search", "API integration", "Real-time weather data"],
    stack: ["JavaScript", "OpenWeather API", "HTML", "CSS"],
    tone: "accent" as const,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-500 mb-4">Projects</p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Featured Works</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-xl">A selection of my recent full-stack projects, from marketplaces to management systems.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center gap-1 text-brand-600 dark:text-brand-400 font-bold hover:gap-2 transition-all">
            Start a project <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <article className="group h-full bg-white dark:bg-dark-surface rounded-[2rem] overflow-hidden border border-slate-200 dark:border-dark-border hover:shadow-2xl hover:shadow-brand-500/10 hover:border-brand-500/40 transition-all hover:-translate-y-2">
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className={`px-3 py-1 text-[10px] font-bold rounded-full uppercase tracking-wider ${
                          p.tone === "brand"
                            ? "bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20"
                            : "bg-accent-500/10 text-accent-500 dark:text-accent-400 border border-accent-500/20"
                        }`}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-5">{p.description}</p>
                  <ul className="space-y-1.5 mb-6">
                    {p.features.map((f) => (
                      <li key={f} className="text-sm text-slate-500 dark:text-slate-400 flex gap-2">
                        <span className="text-brand-500 mt-1">▹</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold shadow-lg shadow-brand-500/25 hover:-translate-y-0.5 transition-all"
                    >
                      Live Demo <ArrowUpRight className="size-4" />
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-dark-border hover:bg-slate-100 dark:hover:bg-dark-bg text-sm font-semibold hover:-translate-y-0.5 transition-all"
                    >
                      <Github className="size-4" /> GitHub
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
