import * as React from "react";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  className?: string;
};

export function PageHeader({
  eyebrow,
  title,
  lead,
  align = "center",
  className,
}: PageHeaderProps) {
  const isCenter = align === "center";

  return (
    <header
      className={cn(
        "mx-auto w-full max-w-4xl",
        isCenter ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide text-slate-200">
          {eyebrow}
        </p>
      ) : null}

      <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
        {title}
      </h1>

      {lead ? (
        <p className="mx-auto mt-4 max-w-3xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
          {lead}
        </p>
      ) : null}
    </header>
  );
}
