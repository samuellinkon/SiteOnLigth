import { useCallback, useState } from "react";
import { storyModules } from "@/lib/platform-modules";
import { SectionHead } from "@/components/landing/SectionHead";
import { Reveal } from "@/components/landing/Reveal";
import { CommandCenterHero } from "@/components/landing/platform/CommandCenterHero";
import { ModuleStoryBlock } from "@/components/landing/platform/ModuleStoryBlock";
import { OperationalFlowRail } from "@/components/landing/platform/OperationalFlowRail";

export function OperationalFlowSection() {
  const [activeStep, setActiveStep] = useState(1);

  const scrollToStep = useCallback((step: number) => {
    setActiveStep(step);
    const el = document.querySelector(`[data-flow-step="${step}"]`);
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, []);

  const handleVisible = useCallback((flowStep: number | undefined) => {
    if (flowStep) setActiveStep(flowStep);
  }, []);

  return (
    <section id="operacao" className="scroll-mt-24 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHead
            eyebrow="Plataforma"
            title="A operação acontecendo em sequência"
            subtitle="Do chamado aberto ao BM — cada módulo com o peso visual que merece, conectado à mesma central."
          />
        </Reveal>

        <div className="mt-14">
          <CommandCenterHero />
        </div>

        <div className="mt-20 lg:mt-24 lg:grid lg:grid-cols-[minmax(0,260px)_minmax(0,1fr)] lg:gap-14 lg:items-start">
            <div className="hidden lg:sticky lg:top-28 lg:block">
              <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-ink-soft">
                Fluxo operacional
              </div>
              <OperationalFlowRail activeStep={activeStep} onStepClick={scrollToStep} />
            </div>

          <div className="space-y-6 lg:space-y-8">
            {storyModules.map((mod) => (
              <ModuleStoryBlock key={mod.id} module={mod} onVisible={handleVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
