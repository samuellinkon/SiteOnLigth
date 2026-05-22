import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ProductSlide } from "@/lib/product-screens";

type Props = {
  slides: ProductSlide[];
  autoplayMs?: number;
  className?: string;
};

export function PhoneMockupSlider({ slides, autoplayMs = 5000, className = "" }: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = slides[index] ?? slides[0];

  const setSlide = useCallback(
    (next: number) => {
      setIndex(((next % slides.length) + slides.length) % slides.length);
    },
    [slides.length],
  );

  const prev = () => setSlide(index - 1);
  const next = () => setSlide(index + 1);

  useEffect(() => {
    if (paused || slides.length <= 1) return;
    const id = window.setInterval(() => setSlide(index + 1), autoplayMs);
    return () => window.clearInterval(id);
  }, [paused, autoplayMs, slides.length, index, setSlide]);

  if (!slide) return null;

  return (
    <div
      className={`relative mx-auto ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="absolute -inset-8 rounded-3xl bg-brand-grad opacity-20 blur-3xl" />
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative w-[260px] shrink-0 rounded-[2.5rem] bg-night p-2 shadow-glow sm:w-[280px]">
          <div className="relative overflow-hidden rounded-[2rem] bg-night-2">
            {slides.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Tela anterior"
                  className="absolute left-2 top-1/2 z-10 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-md border border-black/10 bg-white/90 text-ink shadow-sm transition hover:bg-white"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Próxima tela"
                  className="absolute right-2 top-1/2 z-10 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-md border border-black/10 bg-white/90 text-ink shadow-sm transition hover:bg-white"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </>
            )}
            <img
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              width={800}
              height={1400}
              loading="lazy"
              decoding="async"
              className="h-[480px] w-full object-cover object-top"
            />
          </div>
        </div>

        {slides.length > 1 && (
          <div className="mt-4 flex flex-col items-center gap-2">
            <div className="flex items-center gap-1.5">
              {slides.map((s, idx) => (
                <button
                  key={s.label}
                  type="button"
                  onClick={() => setSlide(idx)}
                  aria-label={`Ir para ${s.label}`}
                  aria-current={idx === index ? "true" : undefined}
                  className={`h-1.5 rounded-full transition ${
                    idx === index ? "w-5 bg-brand-grad" : "w-1.5 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs tabular-nums text-white/50">
              {index + 1} / {slides.length}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
