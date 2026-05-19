import { createFileRoute } from "@tanstack/react-router";
import { useState, createContext, useContext } from "react";
import {
  MapPin, Smartphone, FileSpreadsheet, Users, LayoutDashboard, ShieldCheck,
  Package, Workflow, ArrowRight, Check, MessageCircle, LogIn, Menu, X,
  ChevronDown, ChevronLeft, ChevronRight, Zap, AlertTriangle, FileX,
  MessageSquareOff, MapPinOff, ClipboardList, Building2, HardHat, BarChart3,
  Lock, Layers, Upload, Mail,
} from "lucide-react";
import { WHATSAPP_URL, CONTACT_EMAIL, LOGIN_URL } from "@/lib/site-config";
import heroImg from "@/assets/screen-painel.png";
import mapImg from "@/assets/screen-iluminacao.png";
import chamadosImg from "@/assets/screen-chamados.png";
import catalogoImg from "@/assets/screen-catalogo.png";
import novoChamadoImg from "@/assets/screen-novo-chamado.png";
import detalheChamadoImg from "@/assets/screen-detalhe-chamado.png";
import logoImg from "@/assets/logo.png";
import { DemoDialog } from "@/components/DemoDialog";

const DemoCtx = createContext<() => void>(() => {});
const useDemo = () => useContext(DemoCtx);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OnLight | Gestão em Iluminação — CRM para operadoras de iluminação pública" },
      { name: "description", content: "Centralize chamados georreferenciados, app do técnico, pontos de luz, boletim de medição (BM) e portal do cliente contratante." },
      { property: "og:title", content: "OnLight | Gestão em Iluminação" },
      { property: "og:description", content: "CRM SaaS para empresas operadoras de iluminação pública. Chamados, BM, app de campo e portal do contratante." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" },
    ],
  }),
  component: Landing,
});

const WHATSAPP = WHATSAPP_URL;
const LOGIN = LOGIN_URL;

const nav = [
  { href: "#inicio", label: "Início" },
  { href: "#desafios", label: "Desafios" },
  { href: "#solucao", label: "Solução" },
  { href: "#modulos", label: "Módulos" },
  { href: "#produto", label: "Produto" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#implantacao", label: "Implantação" },
  { href: "#faq", label: "FAQ" },
];

function Landing() {
  const [demoOpen, setDemoOpen] = useState(false);
  const openDemo = () => setDemoOpen(true);
  return (
    <DemoCtx.Provider value={openDemo}>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <Hero />
        <Pains />
        <Comparison />
        <Solution />
        <Modules />
        <Security />
        <Integrations />
        <FieldApp />
        <ClientPortal />
        <Measurement />
        <MapSection />
        <Screens />
        <HowItWorks />
        <ForWho />
        <Pricing />
        <Deployment />
        <FinalCta />
        <Faq />
        <Footer />
        <DemoDialog open={demoOpen} onClose={() => setDemoOpen(false)} />
      </div>
    </DemoCtx.Provider>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const openDemo = useDemo();
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-night/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={logoImg} alt="OnLight" width={44} height={44} className="h-11 w-11 object-contain" />
          <div className="leading-tight">
            <div className="text-base font-bold text-white">OnLight</div>
            <div className="text-[10px] uppercase tracking-widest text-white/50">Gestão em Iluminação</div>
          </div>
        </a>
        <nav className="hidden items-center gap-5 lg:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-white/70 transition hover:text-white">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a href={LOGIN} className="text-sm font-medium text-white/80 hover:text-white">Acessar sistema</a>
          <button onClick={openDemo} className="inline-flex items-center gap-2 rounded-lg bg-brand-grad px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:opacity-90">
            <MessageCircle className="h-4 w-4" /> Agendar demonstração
          </button>
        </div>
        <button onClick={() => setOpen(!open)} className="lg:hidden text-white">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-night px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-sm text-white/80">{n.label}</a>
            ))}
            <a href={LOGIN} className="text-sm text-white/80">Acessar sistema</a>
            <button onClick={() => { setOpen(false); openDemo(); }} className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-grad px-4 py-2 text-sm font-semibold text-white">
              <MessageCircle className="h-4 w-4" /> Agendar demonstração
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const openDemo = useDemo();
  return (
    <section id="inicio" className="relative overflow-hidden bg-night text-white">
      <div className="absolute inset-0 bg-night-grad opacity-90" />
      <div className="absolute inset-0 ring-grid opacity-60" />
      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 lg:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.78_0.18_150)]" />
              CRM SaaS para operadoras de iluminação pública
            </div>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              Gestão completa da sua operação de{" "}
              <span className="text-gradient">iluminação pública</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/70 sm:text-lg">
              Chamados georreferenciados, equipes em campo, cadastro de pontos de luz no mapa e boletim de medição (BM) — escritório, técnicos e cliente contratante no mesmo fluxo, com rastreabilidade para prestação de contas do contrato.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button onClick={openDemo} className="inline-flex items-center gap-2 rounded-lg bg-brand-grad px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:opacity-90">
                <MessageCircle className="h-4 w-4" /> Agendar demonstração
              </button>
              <a href={LOGIN} className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                <LogIn className="h-4 w-4" /> Acessar sistema
              </a>
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {["Chamados com mapa", "App do técnico", "Boletim BM", "Portal do cliente", "Auditoria"].map((b) => (
                <span key={b} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">{b}</span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-brand-grad opacity-20 blur-3xl" />
            <img
              src={heroImg}
              alt="Dashboard OnLight com mapa de chamados de iluminação pública"
              width={1600}
              height={1100}
              className="relative rounded-2xl border border-white/10 shadow-glow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


const pains = [
  { icon: FileSpreadsheet, t: "Planilhas paralelas", d: "Chamados, materiais e medição em arquivos desconectados que ninguém confia." },
  { icon: MessageSquareOff, t: "WhatsApp como sistema", d: "Histórico se perde, ninguém sabe o status real do chamado." },
  { icon: MapPinOff, t: "Endereço impreciso", d: "Sem geolocalização, técnico perde tempo procurando o poste." },
  { icon: AlertTriangle, t: "BM manual e lento", d: "Fechamento mensal com retrabalho e erros que travam o faturamento." },
  { icon: FileX, t: "Cliente sem portal", d: "O contratante cobra status por telefone, sem transparência da medição." },
  { icon: Smartphone, t: "Técnico sem app", d: "Equipe de campo sem fluxo padronizado, fotos perdidas no celular." },
];

function Pains() {
  return (
    <section id="desafios" className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead eyebrow="Desafios" title="A operação de iluminação pública não cabe em planilha" subtitle="Os problemas que você reconhece — e que o OnLight resolve no mesmo fluxo." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pains.map((p) => (
            <div key={p.t} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-grad text-white">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-ink">{p.t}</h3>
              <p className="mt-1 text-sm text-ink-soft">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const comparisonRows = [
  { aspect: "Histórico do chamado", bad: "Perdido em grupos de WhatsApp", good: "Timeline auditável por OS" },
  { aspect: "Localização do poste", bad: "Endereço digitado na planilha", good: "Ponto georreferenciado no mapa" },
  { aspect: "Fechamento BM", bad: "Retrabalho manual em Excel", good: "Importação, prévia e exportação" },
  { aspect: "Cliente contratante", bad: "Liga cobrando status", good: "Portal com chamados e medição" },
  { aspect: "Equipe de campo", bad: "Fotos soltas no celular", good: "PWA com OS, fotos e materiais" },
];

function Comparison() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          eyebrow="Por que OnLight"
          title="Não é CRM genérico nem planilha com WhatsApp"
          subtitle="Comparado ao que a maioria das operadoras usa hoje, o OnLight une escritório, campo e contratante no mesmo fluxo."
        />
        <div className="mt-12 overflow-hidden rounded-2xl border border-border shadow-card">
          <div className="grid grid-cols-[1fr_1fr_1fr] bg-surface text-xs font-semibold uppercase tracking-widest text-ink-soft">
            <div className="px-4 py-3 sm:px-6">Critério</div>
            <div className="border-l border-border px-4 py-3 sm:px-6">Planilha + WhatsApp</div>
            <div className="border-l border-border bg-brand-grad px-4 py-3 text-white sm:px-6">OnLight</div>
          </div>
          {comparisonRows.map((row) => (
            <div key={row.aspect} className="grid grid-cols-[1fr_1fr_1fr] border-t border-border bg-card text-sm">
              <div className="px-4 py-4 font-medium text-ink sm:px-6">{row.aspect}</div>
              <div className="border-l border-border px-4 py-4 text-ink-soft sm:px-6">{row.bad}</div>
              <div className="border-l border-border bg-surface/80 px-4 py-4 text-ink sm:px-6">{row.good}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solution() {
  const bullets = [
    "Chamado abertura → execução em campo → medição BM em um só fluxo auditável",
    "Mapa operacional com pontos de luz e chamados georreferenciados",
    "Portal do cliente contratante com transparência total da medição",
    "App mobile-first para o técnico finalizar OS com fotos e materiais",
    "Importação e exportação de planilhas BM e catálogo em XLSX",
  ];
  return (
    <section id="solucao" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHead eyebrow="A solução" title="Um sistema desenhado para quem opera contrato de iluminação pública" subtitle="Não é CRM genérico. É operação de iluminação pública — do chamado à medição." align="left" />
            <ul className="mt-8 space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-ink">
                  <span className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-brand-grad text-white">
                    <Check className="h-3 w-3" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-brand-grad opacity-10 blur-2xl" />
            <img src={mapImg} alt="Mapa de pontos de iluminação georreferenciados" width={1400} height={900} loading="lazy" className="relative rounded-2xl border border-border shadow-card" />
          </div>
        </div>
      </div>
    </section>
  );
}

const modules = [
  { icon: ClipboardList, t: "Chamados e OS", d: "Prioridade, status, geo, anexos, materiais do catálogo e histórico completo." },
  { icon: MapPin, t: "Mapa de pontos", d: "Cadastro do parque, importação em lote, fotos e visualização geográfica." },
  { icon: Smartphone, t: "App do técnico", d: "PWA mobile-first para executar chamados com fotos e materiais." },
  { icon: FileSpreadsheet, t: "Medição BM", d: "Importação e exportação de boletim, fechamento mensal por contrato." },
  { icon: Users, t: "Portal do cliente", d: "O cliente contratante acompanha chamados, medição e documentos com transparência." },
  { icon: Package, t: "Catálogo", d: "Produtos e serviços vinculados aos chamados e à medição." },
  { icon: LayoutDashboard, t: "Dashboard", d: "Mapa operacional e indicadores de fila e prioridade." },
  { icon: ShieldCheck, t: "Auditoria", d: "Rastreio de todas as movimentações para conformidade do contrato." },
];

function Modules() {
  return (
    <section id="modulos" className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead eyebrow="Módulos" title="Tudo que sua operação precisa, em um único sistema" subtitle="8 módulos que cobrem do chamado ao boletim de medição." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((m) => (
            <div key={m.t} className="group rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-glow">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-grad text-white">
                <m.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-ink">{m.t}</h3>
              <p className="mt-1 text-sm text-ink-soft">{m.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Security() {
  const items = [
    { icon: Lock, t: "Perfis e permissões", d: "Gestor, técnico e cliente contratante com módulos configuráveis por instância." },
    { icon: ShieldCheck, t: "Auditoria completa", d: "Timeline por chamado e log de todas as ações para prestação de contas." },
    { icon: Zap, t: "SLA e prioridade", d: "Fila operacional com classificação e indicadores no dashboard." },
  ];
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead eyebrow="Segurança" title="Conformidade para contratos de iluminação pública" subtitle="Controle de acesso, rastreabilidade e operação auditável — do escritório ao contratante." />
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {items.map((x) => (
            <div key={x.t} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-grad text-white">
                <x.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-ink">{x.t}</h3>
              <p className="mt-1 text-sm text-ink-soft">{x.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Integrations() {
  const items = [
    { icon: Upload, t: "Importação XLSX/CSV", d: "Pontos de luz, catálogo e boletim de medição com pré-visualização." },
    { icon: FileSpreadsheet, t: "Exportação BM", d: "Excel por contrato e período, pronto para o cliente contratante." },
    { icon: Layers, t: "Migração assistida", d: "Implantação a partir da planilha que você já usa hoje." },
    { icon: Smartphone, t: "PWA sem loja", d: "Técnicos acessam pelo navegador; instalação opcional na tela inicial." },
  ];
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead eyebrow="Integrações" title="Compatível com a planilha que você já tem" subtitle="Foco no fluxo real da operadora de iluminação pública — sem módulos genéricos inventados." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((x) => (
            <div key={x.t} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-grad text-white">
                <x.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-ink">{x.t}</h3>
              <p className="mt-1 text-sm text-ink-soft">{x.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FieldApp() {
  const items = [
    "Lista e detalhe dos chamados atribuídos",
    "Anexos de fotos direto da câmera",
    "Materiais do catálogo lançados na OS",
    "Geolocalização e rota até o ponto",
    "PWA no navegador — acesso rápido, sem loja de apps",
    "Finalização da OS com registro de quem executou",
  ];
  return (
    <section id="campo" className="relative overflow-hidden bg-night py-24 text-white">
      <div className="absolute inset-0 ring-grid opacity-40" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div className="relative order-2 flex justify-center lg:order-1">
          <div className="absolute -inset-10 rounded-3xl bg-brand-grad opacity-20 blur-3xl" />
          <PhoneMockup src={detalheChamadoImg} alt="App do técnico OnLight no celular" />
        </div>
        <div className="order-1 lg:order-2">
          <SectionHead eyebrow="Campo" title="App do técnico, feito para a rua" subtitle="PWA mobile-first, leve, com tudo que o operador precisa pra fechar a OS sem voltar à base." align="left" dark />
          <ul className="mt-8 space-y-3">
            {items.map((i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-white/85">
                <span className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-brand-grad">
                  <Check className="h-3 w-3" />
                </span>
                {i}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ClientPortal() {
  const items = [
    "Acompanhamento de chamados e status em tempo real",
    "Consulta ao boletim de medição do período",
    "Documentos e anexos compartilhados com transparência",
    "Menos ligações cobrando retorno — o contratante vê direto no portal",
  ];
  return (
    <section id="portal" className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 lg:order-2">
            <div className="absolute -inset-4 rounded-3xl bg-brand-grad opacity-10 blur-2xl" />
            <img src={chamadosImg} alt="Portal do cliente contratante OnLight" width={1600} height={1000} loading="lazy" className="relative rounded-2xl border border-border shadow-card" />
          </div>
          <div className="order-1 lg:order-1">
            <SectionHead eyebrow="Portal do cliente" title="Transparência para o contratante" subtitle="O cliente acompanha chamados, medição e documentos — sem depender de telefone ou planilha enviada por e-mail." align="left" />
            <ul className="mt-8 space-y-3">
              {items.map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-ink">
                  <span className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-brand-grad text-white">
                    <Check className="h-3 w-3" />
                  </span>
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Measurement() {
  return (
    <section id="medicao" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHead eyebrow="Medição BM" title="Boletim de medição sem dor de cabeça" subtitle="Importe a planilha, valide a prévia, exporte o BM por período customizável do mês." align="left" />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { t: "Importação CSV/XLSX", d: "Pré-visualização antes de consolidar." },
                { t: "Exportação por contrato", d: "Excel pronto para o cliente contratante." },
                { t: "Fechamento mensal", d: "Consolidação por cliente e período." },
                { t: "Portal do contratante", d: "Cliente consulta a medição online." },
              ].map((x) => (
                <div key={x.t} className="rounded-xl border border-border bg-card p-4">
                  <div className="text-sm font-semibold text-ink">{x.t}</div>
                  <div className="mt-0.5 text-xs text-ink-soft">{x.d}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-night p-6 shadow-card">
            <div className="flex items-center justify-between text-white">
              <div>
                <div className="text-xs uppercase tracking-widest text-white/50">Total da medição</div>
                <div className="mt-1 text-3xl font-bold">R$ 248.730,00</div>
                <div className="text-xs text-white/60">maio/2026 · BM consolidado</div>
              </div>
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-grad">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="mt-5 space-y-2">
              {[
                ["Instalação luminária", "R$ 92.400,00"],
                ["Troca de relé", "R$ 41.250,00"],
                ["Fechamento de cava", "R$ 18.080,00"],
                ["Inspeção noturna", "R$ 12.500,00"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90">
                  <span>{k}</span><span className="font-medium">{v}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 flex gap-2">
              <button className="flex-1 rounded-lg border border-white/15 bg-white/5 py-2 text-xs font-medium text-white/90">Importar planilha</button>
              <button className="flex-1 rounded-lg bg-brand-grad py-2 text-xs font-semibold text-white">Exportar BM</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead eyebrow="Parque" title="O seu parque de pontos de luz no mapa" subtitle="Cadastre, importe em lote, vincule chamados e visualize a operação inteira." />
        <div className="mt-12 overflow-hidden rounded-3xl border border-border shadow-card">
          <img src={mapImg} alt="Mapa do parque de iluminação" width={1400} height={900} loading="lazy" className="w-full" />
        </div>
      </div>
    </section>
  );
}

function Screens() {
  const slides = [
    { t: "Painel executivo", d: "Mapa de chamados e KPIs do contrato.", src: heroImg },
    { t: "Pontos de iluminação", d: "Parque georreferenciado com clusters.", src: mapImg },
    { t: "Meus chamados", d: "Lista, filtros e status em tempo real.", src: chamadosImg },
    { t: "Abertura de OS", d: "Formulário completo com geolocalização.", src: novoChamadoImg },
    { t: "Detalhe do chamado", d: "Ordem de serviço com ponto vinculado.", src: detalheChamadoImg },
    { t: "Catálogo", d: "Produtos e serviços vinculados à OS e BM.", src: catalogoImg },
  ];
  const [i, setI] = useState(0);
  const prev = () => setI((n) => (n === 0 ? slides.length - 1 : n - 1));
  const next = () => setI((n) => (n + 1) % slides.length);
  return (
    <section id="produto" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead eyebrow="Produto" title="Conheça a plataforma na prática" subtitle="Painéis reais de gestão, campo e portal do contratante — a mesma operação, visões diferentes." />
        <div className="mt-12 grid items-center gap-8 lg:grid-cols-[1fr_320px]">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-border bg-night shadow-card">
            <img src={slides[i].src} alt={slides[i].t} width={1600} height={1000} loading="lazy" className="w-full object-cover" />
            </div>
            <button type="button" onClick={prev} aria-label="Visual anterior" className="absolute left-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-lg border border-white/15 bg-night/80 text-white backdrop-blur transition hover:bg-white/10">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button type="button" onClick={next} aria-label="Próximo visual" className="absolute right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-lg border border-white/15 bg-night/80 text-white backdrop-blur transition hover:bg-white/10">
              <ChevronRight className="h-5 w-5" />
            </button>
            <div className="mt-3 flex justify-center gap-2">
              {slides.map((_, idx) => (
                <button key={idx} type="button" onClick={() => setI(idx)} aria-label={`Ir para o visual ${idx + 1}`} className={`h-2 rounded-full transition ${idx === i ? "w-6 bg-brand-grad" : "w-2 bg-border"}`} />
              ))}
            </div>
          </div>
          <div className="space-y-3">
            {slides.map((s, idx) => (
              <button
                key={s.t}
                onClick={() => setI(idx)}
                className={`block w-full rounded-xl border p-4 text-left transition ${idx === i ? "border-transparent bg-brand-grad text-white shadow-glow" : "border-border bg-card text-ink hover:border-primary/40"}`}
              >
                <div className="text-sm font-semibold">{s.t}</div>
                <div className={`mt-0.5 text-xs ${idx === i ? "text-white/80" : "text-ink-soft"}`}>{s.d}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { t: "Abertura", d: "Operadora ou cliente registra o chamado — endereço, ponto, prioridade, anexos." },
    { t: "Despacho", d: "Gestão classifica por SLA e prioridade, atribui responsável e técnico(s)." },
    { t: "Execução", d: "Técnico atende em campo pelo app, com fotos, materiais e localização." },
    { t: "Validação", d: "Gestor valida e fecha o chamado com aprovação quando aplicável." },
    { t: "Medição BM", d: "Fechamento mensal, exportação e portal do cliente." },
  ];
  return (
    <section id="como-funciona" className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead eyebrow="Como funciona" title="Do chamado ao boletim, em 5 passos" />
        <ol className="mt-14 relative border-l-2 border-dashed border-border lg:border-l-0 lg:border-t-2 lg:flex lg:items-start lg:justify-between lg:gap-4">
          {steps.map((s, i) => (
            <li key={s.t} className="relative pl-8 pb-10 last:pb-0 lg:pl-0 lg:pt-10 lg:pb-0 lg:flex-1 lg:max-w-[19%]">
              <span className="absolute left-0 top-0 -translate-x-1/2 grid h-9 w-9 place-items-center rounded-full bg-brand-grad text-xs font-bold text-white shadow-glow lg:left-0 lg:top-0 lg:-translate-y-1/2 lg:translate-x-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="text-base font-semibold text-ink">{s.t}</div>
              <div className="mt-1 text-sm text-ink-soft">{s.d}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ForWho() {
  const items = [
    { icon: Building2, t: "Operadoras de iluminação pública", d: "Empresas que executam contratos de iluminação pública para seus clientes." },
    { icon: Workflow, t: "Gestores de contrato", d: "Quem responde pelo SLA, BM e prestação de contas." },
    { icon: HardHat, t: "Equipes de campo", d: "Técnicos com app mobile-first para executar a OS." },
    { icon: Users, t: "Clientes contratantes", d: "Acompanham chamados, medição e documentos pelo portal." },
  ];
  return (
    <section id="para-quem" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20 lg:items-start">
          <div className="lg:sticky lg:top-24">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand">Para quem é</div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Feito para a cadeia inteira do contrato de iluminação pública
            </h2>
            <p className="mt-4 text-base text-ink-soft">
              Da abertura do chamado à medição do boletim, todos os papéis envolvidos no contrato em uma única plataforma.
            </p>
          </div>
          <ul className="divide-y divide-border border-y border-border">
            {items.map((x) => (
              <li key={x.t} className="group -mx-3 flex items-start gap-5 rounded-xl px-3 py-6 transition-colors hover:bg-brand/10">
                <div className="icon-tile-hover grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-border bg-card text-brand transition">
                  <x.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-ink">{x.t}</h3>
                  <p className="mt-1 text-sm text-ink-soft">{x.d}</p>
                </div>
                <ArrowRight className="mt-3 h-4 w-4 shrink-0 text-brand opacity-0 transition group-hover:opacity-100" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const openDemo = useDemo();
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHead eyebrow="Investimento" title="Planos sob consulta" subtitle="Valor conforme volume de pontos, chamados e contratos. Sem surpresa na implantação." />
        <div className="mt-10 rounded-2xl border border-border bg-card p-8 text-center shadow-card">
          <p className="text-sm text-ink-soft">
            Cada operadora tem um parque e um fluxo diferentes. Na demonstração montamos uma proposta alinhada ao seu contrato.
          </p>
          <button onClick={openDemo} className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-grad px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:opacity-90">
            <MessageCircle className="h-4 w-4" /> Solicitar proposta
          </button>
        </div>
      </div>
    </section>
  );
}

function Deployment() {
  const steps = [
    { t: "Diagnóstico", d: "Levantamento do contrato, fluxos e equipes." },
    { t: "Configuração", d: "Parametrização de SLA, BM e perfis de acesso." },
    { t: "Treinamento", d: "Capacitação de gestores, campo e contratante." },
    { t: "Go-live", d: "Operação assistida nas primeiras semanas." },
    { t: "Suporte", d: "Acompanhamento contínuo e evolução do contrato." },
  ];
  return (
    <section id="implantacao" className="relative overflow-hidden bg-night py-24 text-white">
      <div className="absolute inset-0 ring-grid opacity-20" />
      <div className="absolute -top-32 left-1/2 h-64 w-[80%] -translate-x-1/2 rounded-full bg-brand-grad opacity-20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHead eyebrow="Implantação" title="Go-live em semanas, não em meses" subtitle="Implantação assistida, com o seu contrato como referência." dark />
        <div className="mt-16 relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent lg:left-0 lg:right-0 lg:top-4 lg:bottom-auto lg:h-px lg:w-auto lg:bg-gradient-to-r" />
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-6">
            {steps.map((s, i) => (
              <div key={s.t} className="relative pl-12 lg:pl-0 lg:pt-12 lg:text-center">
                <div className="absolute left-0 top-0 lg:left-1/2 lg:-translate-x-1/2 lg:top-0">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-night ring-2 ring-white/40">
                    <div className="h-2.5 w-2.5 rounded-full bg-brand-grad" />
                  </div>
                </div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
                  Passo {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-1.5 text-lg font-semibold text-white">{s.t}</div>
                <div className="mt-1 text-sm text-white/60 lg:mx-auto lg:max-w-[180px]">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  const openDemo = useDemo();
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-night p-10 text-center text-white shadow-glow sm:p-14">
          <div className="absolute inset-0 bg-brand-grad opacity-20" />
          <div className="absolute inset-0 ring-grid opacity-30" />
          <div className="relative">
            <h2 className="text-3xl font-extrabold sm:text-4xl">Pronto para profissionalizar sua operação?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-white/80">
              Agende uma demonstração e veja o OnLight aplicado ao seu contrato.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <button onClick={openDemo} className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-white/90">
                <MessageCircle className="h-4 w-4" /> Agendar demonstração
              </button>
              <a href={LOGIN} className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                <LogIn className="h-4 w-4" /> Acessar sistema <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  ["Funciona em nuvem?", "Sim, é uma plataforma web acessível com segurança de qualquer lugar."],
  ["Dá para separar acessos por perfil?", "Sim: gestor, técnico e cliente, com módulos configuráveis por instância."],
  ["Tem histórico e auditoria?", "Sim, cada chamado tem timeline completa e log de todas as ações."],
  ["Vocês fazem treinamento?", "Sim, a implantação é assistida com treinamento das equipes."],
  ["Funciona no celular?", "Sim, o app do técnico é mobile-first e os painéis são responsivos."],
  ["Adapta ao nosso contrato?", "Sim, catálogo, clientes, fluxo e medição BM são configuráveis."],
  ["Como funciona a privacidade?", "Perfis de acesso, auditoria e operação em nuvem com boas práticas de proteção de dados (LGPD)."],
  ["Qual o investimento?", "Planos sob consulta, conforme volume de pontos, chamados e contratos da sua operação."],
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-surface py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHead eyebrow="FAQ" title="Perguntas frequentes" />
        <div className="mt-10 space-y-3">
          {faqs.map(([q, a], i) => (
            <div key={q} className="overflow-hidden rounded-xl border border-border bg-card">
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
                <span className="text-sm font-semibold text-ink">{q}</span>
                <ChevronDown className={`h-4 w-4 text-ink-soft transition ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <div className="border-t border-border px-5 py-4 text-sm text-ink-soft">{a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const openDemo = useDemo();
  const links = nav;
  return (
    <footer className="bg-night py-12 text-white/70">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-start gap-3">
            <img src={logoImg} alt="OnLight" width={40} height={40} className="h-10 w-10 object-contain" />
            <div className="text-sm">
              <div className="font-semibold text-white">OnLight</div>
              <div className="text-xs text-white/50">Gestão em Iluminação</div>
              <p className="mt-2 text-xs text-white/50">CRM SaaS para operadoras de iluminação pública.</p>
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-white/50">Navegação</div>
            <ul className="mt-3 space-y-2 text-sm">
              {links.map((l) => (
                <li key={l.href}><a href={l.href} className="hover:text-white">{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-white/50">Contato</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 hover:text-white"><Mail className="h-4 w-4" />{CONTACT_EMAIL}</a></li>
              <li><a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white"><MessageCircle className="h-4 w-4" />WhatsApp</a></li>
              <li><button type="button" onClick={openDemo} className="hover:text-white">Agendar demonstração</button></li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-white/50">Sistema</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href={LOGIN} className="hover:text-white">Acessar sistema</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} OnLight. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

function PhoneMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative z-10 w-[260px] shrink-0 rounded-[2.5rem] border border-white/15 bg-night p-2 shadow-glow sm:w-[280px]">
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-night-2">
        <img src={src} alt={alt} width={800} height={1400} loading="lazy" className="h-[480px] w-full object-cover object-top" />
      </div>
    </div>
  );
}

function SectionHead({
  eyebrow, title, subtitle, align = "center", dark = false,
}: { eyebrow: string; title: string; subtitle?: string; align?: "center" | "left"; dark?: boolean }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <div className={`text-xs font-semibold uppercase tracking-widest ${dark ? "text-white/60" : "text-primary"}`}>{eyebrow}</div>
      <h2 className={`mt-2 text-3xl font-extrabold sm:text-4xl ${dark ? "text-white" : "text-ink"}`}>{title}</h2>
      {subtitle && <p className={`mt-3 text-base ${dark ? "text-white/70" : "text-ink-soft"}`}>{subtitle}</p>}
    </div>
  );
}
