import { commandCenterHero } from "@/lib/platform-modules";
import { Reveal } from "@/components/landing/Reveal";

export function CommandCenterHero() {
  const { eyebrow, title, narrative, screenshot, features } = commandCenterHero;

  return (
    <Reveal>
      <article className="rounded-2xl border border-dashed border-border bg-card p-6 shadow-card sm:p-8 lg:p-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
          <div className="screenshot-frame w-full shrink-0 sm:max-w-[240px]">
            <img
              src={screenshot.src}
              alt={screenshot.alt}
              width={1200}
              height={800}
              loading="lazy"
              decoding="async"
              className="h-auto max-h-44 w-full object-contain object-top"
            />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[10px] font-semibold uppercase tracking-widest text-brand">
              {eyebrow}
            </div>
            <h3 className="mt-1 text-lg font-bold text-ink">{title}</h3>
            <p className="mt-2 text-sm text-ink-soft">{narrative}</p>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
              {features.map((f) => (
                <li key={f} className="text-xs text-ink-soft">
                  · {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
