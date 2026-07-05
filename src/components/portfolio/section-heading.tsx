import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "text-center mb-16" : "mb-16"}>
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-500 mb-4">{eyebrow}</p>
      )}
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">{title}</h2>
      {description && (
        <p className={`text-slate-500 dark:text-slate-400 max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}
