import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ProductSlide } from "@/lib/product-screens";

type Props = {
  slides: ProductSlide[];
  dark?: boolean;
  index?: number;
  onIndexChange?: (i: number) => void;
  autoplayMs?: number;
  className?: string;
};

export function ScreenSquareSlider({
  slides,
  dark = false,
  index: controlledIndex,
  onIndexChange,
  autoplayMs = 5000,
  className = "",
}: Props) {
  const [internalIndex, setInternalIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const isControlled = controlledIndex !== undefined;
  const index = isControlled ? controlledIndex : internalIndex;
  const slide = slides[index] ?? slides[0];

  const setIndex = useCallback(
    (nextIndex: number) => {
      const clamped = ((nextIndex % slides.length) + slides.length) % slides.length;
      if (isControlled) {
        onIndexChange?.(clamped);
      } else {
        setInternalIndex(clamped);
      }
    },
    [isControlled, onIndexChange, slides.length],
  );

  const prev = () => setIndex(index - 1);
  const next = () => setIndex(index + 1);

  useEffect(() => {
    if (paused || slides.length <= 1) return;
    const id = window.setInterval(() => setIndex(index + 1), autoplayMs);
    return () => window.clearInterval(id);
  }, [paused, autoplayMs, slides.length, index, setIndex]);

  if (!slide) return null;

  const frameBorder = dark ? "border-white/20" : "border-border";
  const navBtn = dark
    ? "border-white/15 bg-night/80 text-white hover:bg-white/10"
    : "border-border bg-card text-ink hover:bg-surface";
  const counterClass = dark ? "text-white/50" : "text-ink-soft";

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="flex items-center justify-center gap-3 sm:gap-4">
        {slides.length > 1 && (
          <button
            type="button"
            onClick={prev}
            aria-label="Tela anterior"
            className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg border backdrop-blur transition ${navBtn}`}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        )}

        <div
          className={`relative mx-auto aspect-square w-full max-w-[280px] overflow-hidden rounded-xl border bg-white sm:max-w-[320px] ${frameBorder}`}
          aria-live="polite"
        >
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            width={800}
            height={800}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-contain object-top p-2 transition-opacity duration-300"
          />
        </div>

        {slides.length > 1 && (
          <button
            type="button"
            onClick={next}
            aria-label="Próxima tela"
            className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg border backdrop-blur transition ${navBtn}`}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        )}
      </div>

      {slides.length > 1 && (
        <div className="mt-4 flex flex-col items-center gap-2">
          <div className="flex items-center gap-1.5">
            {slides.map((s, idx) => (
              <button
                key={s.label}
                type="button"
                onClick={() => setIndex(idx)}
                aria-label={`Ir para tela ${idx + 1}`}
                aria-current={idx === index ? "true" : undefined}
                className={`h-1.5 rounded-full transition ${
                  idx === index
                    ? "w-6 bg-brand-grad"
                    : dark
                      ? "w-1.5 bg-white/30 hover:bg-white/50"
                      : "w-1.5 bg-border hover:bg-brand/40"
                }`}
              />
            ))}
          </div>
          <span className={`text-xs tabular-nums ${counterClass}`}>
            {index + 1} / {slides.length}
          </span>
        </div>
      )}
    </div>
  );
}
