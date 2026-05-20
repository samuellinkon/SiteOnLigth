import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import type { PlatformModule } from "@/lib/platform-modules";

type Props = {
  module: PlatformModule;
  onVisible?: (flowStep: number | undefined) => void;
};

export function ModuleStoryBlock({ module, onVisible }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !onVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) onVisible(module.flowStep);
      },
      { threshold: 0.35, rootMargin: "-10% 0px -40% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [module.flowStep, onVisible]);

  const idAttr = module.anchorId ? { id: module.anchorId } : {};
  const flowAttr = module.flowStep ? { "data-flow-step": module.flowStep } : {};
  const screenshot = module.screenshot ?? module.mobileSlides?.[0];

  return (
    <article
      ref={ref}
      {...idAttr}
      {...flowAttr}
      className="rounded-2xl border border-dashed border-border bg-card p-6 shadow-card sm:p-8 lg:p-10"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
        {screenshot && (
          <div className="screenshot-frame w-full shrink-0 sm:max-w-[200px]">
            <img
              src={screenshot.src}
              alt={screenshot.alt}
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
              className="h-auto max-h-36 w-full object-contain object-top"
            />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <div className="text-[10px] font-semibold uppercase tracking-widest text-brand">
            {module.eyebrow}
          </div>
          <h3 className="mt-1 text-lg font-bold text-ink">{module.title}</h3>
          <p className="mt-2 text-sm text-ink-soft">{module.narrative}</p>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
            {module.features.map((f) => (
              <li key={f} className="text-xs text-ink-soft">
                · {f}
              </li>
            ))}
          </ul>
          {module.ctaHref && (
            <a
              href={module.ctaHref}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition hover:opacity-80"
            >
              {module.ctaLabel ?? "Saiba mais"} <ArrowRight className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
