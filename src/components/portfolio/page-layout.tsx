import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "@/components/ui/sonner";

export function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}
