import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/sections/SiteHeader";
import { HeroSection } from "@/sections/HeroSection";
import { ChaosSection } from "@/sections/ChaosSection";
import { EcosystemSection } from "@/sections/EcosystemSection";
import { AppSection } from "@/sections/AppSection";
import { OperationalFlowSection } from "@/sections/OperationalFlowSection";
import { CredibilitySection } from "@/sections/CredibilitySection";
import { DeploymentSection } from "@/sections/DeploymentSection";
import { FAQSection } from "@/sections/FAQSection";
import { FooterSection } from "@/sections/FooterSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OnLight | Gestão em Iluminação — CRM para operadoras de iluminação pública" },
      {
        name: "description",
        content:
          "Centralize chamados georreferenciados, app do técnico, pontos de luz, boletim de medição (BM) e portal do cliente contratante.",
      },
      { property: "og:title", content: "OnLight | Gestão em Iluminação" },
      {
        property: "og:description",
        content:
          "CRM SaaS para empresas operadoras de iluminação pública. Chamados, BM, app de campo e portal do contratante.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <HeroSection />
      <ChaosSection />
      <EcosystemSection />
      <AppSection />
      <OperationalFlowSection />
      <CredibilitySection />
      <DeploymentSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
}
