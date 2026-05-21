import { Mail, MessageCircle } from "lucide-react";
import {
  footerBrandChips,
  footerLegalLinks,
  footerOperationLinks,
  footerPlatformLinks,
} from "@/lib/landing-content";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/site-config";
import logoImg from "@/assets/logo.png";

function FooterLinkColumn({
  title,
  links,
}: {
  title: string;
  links: ReadonlyArray<{ readonly href: string; readonly label: string }>;
}) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-widest text-white/50">{title}</div>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={`${link.href}-${link.label}`}>
            <a href={link.href} className="text-sm text-white/70 transition hover:text-white">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FooterSection() {
  return (
    <footer className="bg-night text-white/70">
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-16 lg:pt-20">
        {/* Camada 1 — CTA superior */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-night-grad p-8 shadow-glow sm:p-10">
          <div className="absolute inset-0 ring-grid opacity-25" />
          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-brand-grad opacity-20 blur-3xl" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Pronto para centralizar sua operação de iluminação pública?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
                Veja como o OnLight ajuda sua equipe a sair do WhatsApp, planilhas e controles
                manuais para uma operação rastreável, integrada e profissional.
              </p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-brand-grad px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" />
              Falar com especialista
            </a>
          </div>
        </div>

        {/* Camada 2 — Grid principal */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-4">
            <div className="flex items-start gap-3">
              <img
                src={logoImg}
                alt="OnLight"
                width={44}
                height={44}
                className="h-11 w-11 object-contain"
              />
              <div>
                <div className="text-base font-semibold text-white">OnLight</div>
                <div className="text-xs text-white/50">Gestão em Iluminação</div>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              CRM SaaS para operadoras de iluminação pública, com chamados georreferenciados, app
              técnico, portal do cliente, dashboards e boletim de medição.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {footerBrandChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/70"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <FooterLinkColumn title="Plataforma" links={footerPlatformLinks} />
          </div>

          <div className="lg:col-span-2">
            <FooterLinkColumn title="Operação" links={footerOperationLinks} />
          </div>

          <div className="sm:col-span-2 lg:col-span-4">
            <div className="text-xs font-semibold uppercase tracking-widest text-white/50">
              Contato
            </div>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-2 text-white/70 transition hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-white/70 transition hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  WhatsApp {CONTACT_PHONE_DISPLAY}
                </a>
              </li>
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" />
              Falar com especialista
            </a>
          </div>
        </div>

        {/* Camada 3 — Barra inferior */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} OnLight. Todos os direitos reservados.
          </p>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Legal">
            {footerLegalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-white/50 transition hover:text-white/80"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
