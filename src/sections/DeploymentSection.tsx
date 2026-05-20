import { useState } from "react";
import { Upload } from "lucide-react";
import { deploymentSteps } from "@/lib/landing-content";
import { implantacaoFluxoAlt, implantacaoFluxoImg } from "@/lib/product-screens";
import { SectionHead } from "@/components/landing/SectionHead";
import { SectionShell } from "@/components/landing/SectionShell";
import { Reveal } from "@/components/landing/Reveal";

export function DeploymentSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <SectionShell id="implantacao" tone="night" density="cinematic" className="text-white">
      <div className="absolute inset-0 ring-grid opacity-20" />
      <div className="absolute -top-32 left-1/2 h-64 w-[80%] -translate-x-1/2 rounded-full bg-brand-grad opacity-20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHead
            eyebrow="Implantação"
            title="Go-live sem parar a operação"
            subtitle="Importamos o que você já tem, configuramos o contrato e acompanhamos as primeiras semanas."
            dark
          />
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
          <div className="relative max-w-xl">
            <div className="absolute left-[15px] top-3 bottom-3 w-px bg-gradient-to-b from-brand via-white/30 to-transparent" />
            <ol className="space-y-8">
              {deploymentSteps.map((step, i) => (
                <Reveal key={step.title} delay={i * 60}>
                  <li>
                    <button
                      type="button"
                      onClick={() => setActiveStep(i)}
                      className={`relative flex w-full gap-6 rounded-xl pl-10 pr-3 py-2 text-left transition ${
                        activeStep === i ? "bg-white/10 ring-1 ring-white/20" : "hover:bg-white/5"
                      }`}
                    >
                      <span className="absolute left-0 top-3 grid h-8 w-8 place-items-center rounded-full bg-night ring-2 ring-white/30">
                        {i === 0 ? (
                          <Upload className="h-3.5 w-3.5 text-white" />
                        ) : (
                          <span className="h-2 w-2 rounded-full bg-brand-grad" />
                        )}
                      </span>
                      <div>
                        <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
                          Passo {String(i + 1).padStart(2, "0")}
                        </div>
                        <h3 className="mt-1 text-lg font-semibold text-white">{step.title}</h3>
                        <p className="mt-1 text-sm text-white/65">{step.description}</p>
                      </div>
                    </button>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          <Reveal delay={80} className="lg:sticky lg:top-28">
            <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-white/50 lg:text-left">
              Central operacional unificada
            </p>
            <div className="overflow-hidden rounded-xl border border-white/15 bg-night/50 shadow-glow">
              <img
                src={implantacaoFluxoImg}
                alt={implantacaoFluxoAlt}
                width={1200}
                height={900}
                loading="lazy"
                decoding="async"
                className="h-auto w-full object-contain"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
