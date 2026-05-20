import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { commandCenterHero, storyModules } from "@/lib/platform-modules";
import { PlatformModuleCard } from "@/components/landing/platform/PlatformModuleCard";

type OperacaoSlide = {
  id: string;
  eyebrow: string;
  title: string;
  narrative: string;
  features: string[];
  screenshot?: { src: string; alt: string };
  ctaHref?: string;
  ctaLabel?: string;
  anchorId?: string;
  flowStep?: number;
};

const slides: OperacaoSlide[] = [
  {
    id: "painel-gestor",
    eyebrow: commandCenterHero.eyebrow,
    title: commandCenterHero.title,
    narrative: commandCenterHero.narrative,
    features: [...commandCenterHero.features],
    screenshot: commandCenterHero.screenshot,
  },
  ...storyModules.map(
    (m): OperacaoSlide => ({
      id: m.id,
      eyebrow: m.eyebrow,
      title: m.title,
      narrative: m.narrative,
      features: m.features,
      screenshot: m.screenshot ?? m.mobileSlides?.[0],
      ctaHref: m.ctaHref,
      ctaLabel: m.ctaLabel,
      anchorId: m.anchorId,
      flowStep: m.flowStep,
    }),
  ),
];

type Props = {
  onSlideChange?: (flowStep: number | undefined) => void;
};

export function OperacaoMobileSlider({ onSlideChange }: Props) {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback(
    (next: number) => {
      const clamped = ((next % slides.length) + slides.length) % slides.length;
      setIndex(clamped);
      onSlideChange?.(slides[clamped]?.flowStep);
      const el = trackRef.current?.children[clamped] as HTMLElement | undefined;
      el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    },
    [onSlideChange],
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const idx = Number(visible.target.getAttribute("data-slide-index"));
        if (Number.isNaN(idx)) return;
        setIndex((prev) => {
          if (prev === idx) return prev;
          onSlideChange?.(slides[idx]?.flowStep);
          return idx;
        });
      },
      { root: track, threshold: 0.6 },
    );

    Array.from(track.children).forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, [onSlideChange]);

  return (
    <div className="lg:hidden">
      <div className="relative -mx-6">
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-6 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {slides.map((slide, idx) => (
            <div
              key={slide.id}
              id={slide.anchorId}
              data-slide-index={idx}
              className="w-[calc(100vw-3rem)] max-w-full shrink-0 snap-center sm:w-[min(100%,36rem)]"
            >
              <PlatformModuleCard
                eyebrow={slide.eyebrow}
                title={slide.title}
                narrative={slide.narrative}
                features={slide.features}
                screenshot={slide.screenshot}
                ctaHref={slide.ctaHref}
                ctaLabel={slide.ctaLabel}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Módulo anterior"
          className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-card text-ink shadow-card transition hover:bg-surface"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-1.5">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              onClick={() => goTo(idx)}
              aria-label={`Ir para ${s.title}`}
              aria-current={idx === index ? "true" : undefined}
              className={`h-1.5 rounded-full transition ${
                idx === index ? "w-6 bg-brand-grad" : "w-1.5 bg-border hover:bg-brand/40"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Próximo módulo"
          className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-card text-ink shadow-card transition hover:bg-surface"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      <p className="mt-2 text-center text-xs tabular-nums text-ink-soft">
        {index + 1} / {slides.length} · {slides[index]?.title}
      </p>
    </div>
  );
}
