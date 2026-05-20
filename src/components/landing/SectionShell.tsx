import type { ReactNode } from "react";

type Tone = "night" | "surface" | "white";

const toneClass: Record<Tone, string> = {
  night: "bg-night text-white",
  surface: "bg-surface text-ink",
  white: "bg-background text-ink",
};

const densityClass = {
  cinematic: "section-cinematic scroll-mt-24",
  default: "scroll-mt-24 py-20 lg:py-28",
  compact: "section-compact scroll-mt-24",
} as const;

export function SectionShell({
  id,
  tone = "white",
  density = "default",
  className = "",
  children,
}: {
  id: string;
  tone?: Tone;
  density?: keyof typeof densityClass;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden ${toneClass[tone]} ${densityClass[density]} ${className}`}
    >
      {children}
    </section>
  );
}
