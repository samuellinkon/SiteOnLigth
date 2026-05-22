import { Check } from "lucide-react";
import { appSectionBullets } from "@/lib/landing-content";
import { productComponentGroups } from "@/lib/product-screens";
import { SectionHead } from "@/components/landing/SectionHead";
import { PhoneMockupSlider } from "@/components/landing/PhoneMockupSlider";
import { Reveal } from "@/components/landing/Reveal";

const appSlides = productComponentGroups.find((g) => g.id === "app-tecnico")!.slides;

export function AppSection() {
  return (
    <section
      id="app"
      className="section-cinematic relative scroll-mt-24 overflow-hidden bg-night text-white"
    >
      <div className="absolute inset-0 ring-grid opacity-40" />
      <div className="absolute inset-0 bg-night-grad opacity-70" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-14">
          <Reveal>
            <SectionHead
              eyebrow="App do técnico"
              title="Feito para a rua, conectado à central"
              subtitle="O técnico executa a OS no celular; o escritório acompanha o mesmo chamado no preview com histórico, materiais e anexos."
              align="left"
              dark
            />
            <ul className="mt-8 space-y-3">
              {appSectionBullets.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/85">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-grad">
                    <Check className="h-3 w-3" aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-white/60">
              No escritório, o gestor vê dados, execução, anexos e timeline do mesmo chamado —
              sem planilha paralela.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-white/50 lg:text-left">
              Telas do técnico no PWA
            </p>
            <PhoneMockupSlider slides={appSlides} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
