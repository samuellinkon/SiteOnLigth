import type { PlatformModule } from "@/lib/platform-modules";
import { PlatformModuleCard } from "@/components/landing/platform/PlatformModuleCard";

type Props = {
  module: PlatformModule;
};

export function ModuleStoryBlock({ module }: Props) {
  const idAttr = module.anchorId ? { id: module.anchorId } : {};

  return (
    <div {...idAttr} className="hidden w-full lg:block">
      <PlatformModuleCard
        layout="flow"
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
