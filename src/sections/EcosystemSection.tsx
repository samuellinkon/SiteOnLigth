import { SectionHead } from "@/components/landing/SectionHead";
import { SectionShell } from "@/components/landing/SectionShell";
import { Reveal } from "@/components/landing/Reveal";
import { EcosystemHubDiagram } from "@/components/landing/platform/EcosystemHubDiagram";
import { IntegrationsRibbon } from "@/components/landing/platform/IntegrationsRibbon";

export function EcosystemSection() {
  return (
    <SectionShell id="ecossistema" tone="night" density="cinematic" className="text-white">
      <div className="absolute inset-0 ring-grid opacity-30" />
      <div className="absolute inset-0 bg-night-grad opacity-80" />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHead
            eyebrow="Ecossistema"
            title="Uma central operacional integrada"
            subtitle="Chamados, mapa, campo, BM e portal conectados ao mesmo núcleo — não uma lista de ferramentas soltas."
            dark
          />
        </Reveal>

        <Reveal delay={80}>
          <EcosystemHubDiagram />
        </Reveal>

        <Reveal delay={120}>
          <IntegrationsRibbon />
        </Reveal>
      </div>
    </SectionShell>
  );
}
