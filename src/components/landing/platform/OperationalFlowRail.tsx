import { operationalFlowSteps } from "@/lib/platform-modules";

type Props = {
  activeStep: number;
  onStepClick: (step: number) => void;
};

export function OperationalFlowRail({ activeStep, onStepClick }: Props) {
  return (
    <nav className="hidden lg:block" aria-label="Etapas da operação" role="tablist">
      <ol className="relative space-y-1">
        <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-brand via-brand-2/50 to-transparent" />
        {operationalFlowSteps.map((s, i) => {
          const stepNum = i + 1;
          const isActive = activeStep === stepNum;
          return (
            <li key={s.step}>
              <button
                type="button"
                role="tab"
                aria-selected={isActive}
                id={`flow-step-${stepNum}`}
                aria-controls="flow-step-panel"
                onClick={() => onStepClick(stepNum)}
                className={`hover-lift relative flex w-full gap-4 rounded-xl py-3 pl-10 pr-2 text-left transition ${
                  isActive ? "bg-brand-grad/10 ring-1 ring-brand/25" : "hover:bg-surface"
                }`}
              >
                <span
                  className={`absolute left-0 top-3.5 grid h-8 w-8 place-items-center rounded-full text-[10px] font-bold transition ${
                    isActive
                      ? "bg-brand-grad text-white shadow-glow"
                      : "border border-border bg-card text-ink-soft"
                  }`}
                >
                  {s.step}
                </span>
                <div>
                  <div className="text-sm font-semibold text-ink">{s.title}</div>
                  <div className="text-xs text-ink-soft">{s.subtitle}</div>
                </div>
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
