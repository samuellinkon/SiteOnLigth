import { Building2, HardHat, Users, Workflow } from "lucide-react";
import { credibilityMetrics, credibilityProofs, forWhoItems } from "@/lib/landing-content";
import { SectionHead } from "@/components/landing/SectionHead";
import { SectionShell } from "@/components/landing/SectionShell";
import { Reveal } from "@/components/landing/Reveal";

const personaIcons = [Building2, Workflow, HardHat, Users] as const;

export function CredibilitySection() {
  return (
    <SectionShell id="credibilidade" tone="surface" density="cinematic">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHead
            eyebrow="Credibilidade"
            title="Operação real, rastreável e auditável"
            subtitle="Controle de acesso, histórico completo e exportações para prestação de contas do contrato."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {credibilityMetrics.map((m, i) => (
            <Reveal key={m.title} delay={i * 50}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <div className="text-2xl font-extrabold tracking-tight text-brand">●</div>
                <h3 className="mt-3 text-lg font-semibold text-ink">{m.title}</h3>
                <p className="mt-1 text-sm text-ink-soft">{m.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {credibilityProofs.map((p, i) => (
            <Reveal key={p.title} delay={i * 40}>
              <div className="flex gap-4 rounded-xl border border-border bg-card/80 px-5 py-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-grad text-white text-xs font-bold">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-ink">{p.title}</h3>
                  <p className="mt-0.5 text-sm text-ink-soft">{p.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
          <div id="para-quem" className="scroll-mt-28">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary">
            Quem opera na central
          </div>
          <h3 className="mt-2 text-2xl font-extrabold text-ink sm:text-3xl">
            Feito para a cadeia inteira do contrato de iluminação pública
          </h3>
          <p className="mt-2 max-w-2xl text-sm text-ink-soft">
            Da abertura do chamado à medição do boletim, todos os papéis envolvidos no contrato em
            uma única plataforma.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {forWhoItems.map((item, i) => {
              const Icon = personaIcons[i] ?? Building2;
              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-border bg-card p-4 transition hover:border-brand/30 hover:shadow-glow"
                >
                  <Icon className="h-5 w-5 text-brand" />
                  <h4 className="mt-3 text-sm font-semibold text-ink">{item.title}</h4>
                  <p className="mt-1 text-xs text-ink-soft">{item.description}</p>
                </div>
              );
            })}
          </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
