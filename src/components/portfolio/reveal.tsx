import type { ReactNode } from "react";
import { useInView } from "@/hooks/use-in-view";

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={`${inView ? "animate-fade-in-up" : "opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
}
