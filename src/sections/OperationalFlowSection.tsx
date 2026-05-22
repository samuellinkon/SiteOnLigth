import { useCallback, useState } from "react";
import { storyModules } from "@/lib/platform-modules";
import { SectionHead } from "@/components/landing/SectionHead";
import { Reveal } from "@/components/landing/Reveal";
import { CommandCenterHero } from "@/components/landing/platform/CommandCenterHero";
import { ModuleStoryBlock } from "@/components/landing/platform/ModuleStoryBlock";
import { OperationalFlowRail } from "@/components/landing/platform/OperationalFlowRail";
import { OperacaoMobileSlider } from "@/components/landing/platform/OperacaoMobileSlider";

export function OperationalFlowSection() {
  const [activeStep, setActiveStep] = useState(1);
  const activeModule =
    storyModules.find((m) => m.flowStep === activeStep) ?? storyModules[0]!;

  const selectStep = useCallback((step: number) => {
    setActiveStep(step);
  }, []);

  const handleMobileSlideChange = useCallback((flowStep: number | undefined) => {
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
          <OperacaoMobileSlider onSlideChange={handleMobileSlideChange} />
          <CommandCenterHero />
        </div>

        <div className="mt-20 hidden lg:mt-24 lg:grid lg:grid-cols-[minmax(0,260px)_minmax(0,1fr)] lg:items-start lg:gap-14">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-ink-soft">
              Fluxo operacional
            </div>
            <OperationalFlowRail activeStep={activeStep} onStepClick={selectStep} />
          </div>

          <div
            id="flow-step-panel"
            role="tabpanel"
            aria-labelledby={`flow-step-${activeStep}`}
            className="w-full"
          >
            <ModuleStoryBlock key={activeModule.id} module={activeModule} />
          </div>
        </div>
      </div>
    </section>
  );
}
