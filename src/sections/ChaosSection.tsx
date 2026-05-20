import { Check, X } from "lucide-react";
import {
  chaosTimeline,
  comparisonOnlight,
  comparisonTraditional,
  solutionBullets,
} from "@/lib/landing-content";
import { SectionHead } from "@/components/landing/SectionHead";
import { SectionShell } from "@/components/landing/SectionShell";
import { Reveal } from "@/components/landing/Reveal";

export function ChaosSection() {
  return (
    <SectionShell id="caos" tone="surface" density="cinematic">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHead
            eyebrow="O caos operacional"
            title="Por que contratos de iluminação viram caos operacional?"
            subtitle="Os problemas que você reconhece — e que o OnLight resolve no mesmo fluxo."
          />
        </Reveal>

        <div className="mt-16 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
          <Reveal className="relative">
            <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-brand via-brand-2/60 to-transparent" />
            <ol className="space-y-0">
              {chaosTimeline.map((node, i) => (
                <li key={node.title} className="relative flex gap-5 pb-8 last:pb-0">
                  <span className="relative z-10 mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 border-brand bg-card text-[10px] font-bold text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-ink">{node.title}</h3>
                    <p className="mt-1 text-sm text-ink-soft">{node.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-0">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <div className="text-xs font-semibold uppercase tracking-widest text-ink-soft">
                  Operação tradicional
                </div>
                <ul className="mt-4 space-y-3">
                  {comparisonTraditional.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive/80" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-brand/30 bg-brand-grad/5 p-6 shadow-glow ring-1 ring-brand/20">
                <div className="text-xs font-semibold uppercase tracking-widest text-brand">
                  Fluxo OnLight
                </div>
                <ul className="mt-4 space-y-3">
                  {comparisonOnlight.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              id="solucao"
              className="mt-8 scroll-mt-28 rounded-2xl border border-border bg-card p-6"
            >
              <div className="text-xs font-semibold uppercase tracking-widest text-primary">
                A solução
              </div>
              <p className="mt-2 text-sm font-medium text-ink">
                Um sistema desenhado para quem opera contrato de iluminação pública — do chamado à
                medição.
              </p>
              <ul className="mt-4 space-y-2">
                {solutionBullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-ink-soft">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" aria-hidden />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
