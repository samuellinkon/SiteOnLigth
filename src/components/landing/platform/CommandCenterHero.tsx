import { commandCenterHero } from "@/lib/platform-modules";
import { PlatformModuleCard } from "@/components/landing/platform/PlatformModuleCard";
import { Reveal } from "@/components/landing/Reveal";

export function CommandCenterHero() {
  const { eyebrow, title, narrative, screenshot, features } = commandCenterHero;

  return (
    <Reveal className="hidden lg:block">
      <PlatformModuleCard
        eyebrow={eyebrow}
        title={title}
        narrative={narrative}
        features={[...features]}
        screenshot={screenshot}
      />
    </Reveal>
  );
}
