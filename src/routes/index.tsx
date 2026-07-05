import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/portfolio/about";
import { Certifications } from "@/components/portfolio/certifications";
import { Contact } from "@/components/portfolio/contact";
import { Education } from "@/components/portfolio/education";
import { Footer } from "@/components/portfolio/footer";
import { Hero } from "@/components/portfolio/hero";
import { Interests } from "@/components/portfolio/interests";
import { Navbar } from "@/components/portfolio/navbar";
import { Projects } from "@/components/portfolio/projects";
import { Skills } from "@/components/portfolio/skills";
import { SoftSkills } from "@/components/portfolio/soft-skills";
import { ThemeProvider } from "@/components/portfolio/theme-provider";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Certifications />
          <SoftSkills />
          <Interests />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}
