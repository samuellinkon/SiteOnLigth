import { useEffect, useRef } from "react";
import type { PlatformModule } from "@/lib/platform-modules";
import { PlatformModuleCard } from "@/components/landing/platform/PlatformModuleCard";

type Props = {
  module: PlatformModule;
  onVisible?: (flowStep: number | undefined) => void;
};

export function ModuleStoryBlock({ module, onVisible }: Props) {
  const ref = useRef<HTMLDivElement>(null);

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

  return (
    <div ref={ref} {...idAttr} {...flowAttr} className="hidden lg:block">
      <PlatformModuleCard
        eyebrow={module.eyebrow}
        title={module.title}
        narrative={module.narrative}
        features={module.features}
        screenshot={module.screenshot ?? module.mobileSlides?.[0]}
        ctaHref={module.ctaHref}
        ctaLabel={module.ctaLabel}
      />
    </div>
  );
}
