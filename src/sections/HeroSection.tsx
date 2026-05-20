import { MessageCircle } from "lucide-react";
import { heroIndicators } from "@/lib/landing-content";
import { WHATSAPP_URL } from "@/lib/site-config";
import { HeroHubVisual } from "@/components/landing/HeroHubVisual";
import { Reveal } from "@/components/landing/Reveal";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="section-cinematic relative scroll-mt-24 overflow-hidden bg-night text-white"
    >
      <div className="absolute inset-0 bg-night-grad opacity-90" />
      <div className="absolute inset-0 ring-grid opacity-60" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.78_0.18_150)]" />
              CRM SaaS para operadoras de iluminação pública
            </div>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              Central operacional da sua <span className="text-gradient">iluminação pública</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/70 sm:text-lg">
              Chamados georreferenciados, equipes em campo, cadastro de pontos de luz no mapa e
              boletim de medição (BM) — escritório, técnicos e cliente contratante no mesmo fluxo,
              com rastreabilidade para prestação de contas do contrato.
            </p>
            <div className="mt-7">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-grad px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" /> Falar com especialista
              </a>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {heroIndicators.map((ind) => (
                <div
                  key={ind.label}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 backdrop-blur-sm"
                >
                  <div className="text-xs font-semibold text-white">{ind.label}</div>
                  <div className="mt-0.5 text-[10px] text-white/55">{ind.hint}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <HeroHubVisual />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
