import {
  productComponentGroups,
  productDashboards,
  type ProductSlide,
} from "@/lib/product-screens";

export type ModuleTier = "hero" | "primary" | "secondary" | "compact";
export type ModuleLayout =
  | "commandHero"
  | "splitStart"
  | "splitEnd"
  | "fullBleed"
  | "mobileMockup"
  | "compactBand";

export type PlatformModule = {
  id: string;
  flowStep?: number;
  tier: ModuleTier;
  layout: ModuleLayout;
  eyebrow: string;
  title: string;
  narrative: string;
  features: string[];
  screenshot?: { src: string; alt: string };
  mobileSlides?: ProductSlide[];
  anchorId?: string;
  ctaHref?: string;
  ctaLabel?: string;
};

const d = (id: string) => productDashboards.find((x) => x.id === id)!;
const appGroup = productComponentGroups.find((g) => g.id === "app-tecnico")!;
const previewDados = productComponentGroups.find((g) => g.id === "preview-dados")!;

export type EcosystemModuleCard = {
  id?: string;
  title: string;
  description: string;
  href?: string;
};

/** Módulos operacionais — 6 cards */
export const ecosystemOperationalModules: readonly EcosystemModuleCard[] = [
  {
    id: "chamados",
    title: "Chamados e OS",
    description: "Prioridade, status, geo, anexos e histórico.",
    href: "#operacao",
  },
  {
    id: "mapa",
    title: "Mapa de pontos",
    description: "Parque, importação em lote e visualização geográfica.",
    href: "#operacao",
  },
  {
    id: "app",
    title: "App do técnico",
    description: "PWA mobile-first com fotos e materiais.",
    href: "#app",
  },
  {
    id: "bm",
    title: "Medição BM",
    description: "Boletim, fechamento mensal e exportação.",
    href: "#operacao",
  },
  {
    id: "portal",
    title: "Portal do cliente",
    description: "Chamados, medição e documentos para o contratante.",
    href: "#operacao",
  },
  {
    id: "catalogo",
    title: "Catálogo",
    description: "Produtos e serviços nos chamados e na medição.",
    href: "#operacao",
  },
];

/** Controle e conformidade — 6 cards */
export const ecosystemComplianceModules: readonly EcosystemModuleCard[] = [
  {
    title: "Dashboard",
    description: "Mapa operacional e fila por prioridade.",
    href: "#operacao",
  },
  {
    title: "Auditoria",
    description: "Rastreio de movimentações para conformidade.",
    href: "#credibilidade",
  },
  {
    title: "Perfis e permissões",
    description: "Gestor, técnico e cliente com módulos por instância.",
  },
  {
    title: "Auditoria completa",
    description: "Timeline por chamado e log de todas as ações.",
  },
  {
    title: "SLA e prioridade",
    description: "Fila operacional com classificação no dashboard.",
  },
  {
    title: "Histórico por contrato",
    description: "Chamados, medição e anexos auditáveis por OS e período.",
  },
];

export type EcosystemRadialModule = EcosystemModuleCard & {
  x: number;
  y: number;
};

const RADIAL_RADIUS = 38;

function radialCoords(index: number, total: number) {
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
  return {
    x: Math.round((50 + RADIAL_RADIUS * Math.cos(angle)) * 10) / 10,
    y: Math.round((50 + RADIAL_RADIUS * Math.sin(angle)) * 10) / 10,
  };
}

/** 12 módulos posicionados em círculo ao redor do núcleo ONLIGHT */
export const ecosystemRadialModules: EcosystemRadialModule[] = [
  ...ecosystemOperationalModules,
  ...ecosystemComplianceModules,
].map((mod, i, arr) => ({
  ...mod,
  ...radialCoords(i, arr.length),
}));

export const integrationRibbonItems = [
  { title: "Importação XLSX/CSV", description: "Pontos, catálogo e BM com pré-visualização." },
  { title: "Exportação BM", description: "Excel por contrato e período." },
  { title: "Migração assistida", description: "A partir da planilha que você já usa." },
  { title: "PWA sem loja", description: "Técnicos acessam pelo navegador.", href: "#app" },
  {
    title: "Mapa e geolocalização",
    description: "Pontos de luz e chamados no mesmo mapa operacional.",
    href: "#operacao",
  },
  {
    title: "Relatórios exportáveis",
    description: "Chamados e indicadores por período sob demanda.",
  },
] as const;

export const operationalFlowSteps = [
  { step: "01", title: "Chamado aberto", subtitle: "Mapa, prioridade e coordenadas" },
  { step: "02", title: "Despacho", subtitle: "SLA, fila e equipe" },
  { step: "03", title: "Campo", subtitle: "PWA do técnico" },
  { step: "04", title: "Portal", subtitle: "Transparência ao contratante" },
  { step: "05", title: "BM", subtitle: "Medição e fechamento" },
  { step: "06", title: "Parque", subtitle: "Postes e clusters no mapa" },
  { step: "07", title: "Catálogo", subtitle: "Produtos na OS e no BM" },
] as const;

const painelGestor = d("painel-gestor");
const chamados = d("dashboard-chamados");
const iluminacao = d("dashboard-iluminacao");
const cliente = d("dashboard-cliente");
const medicao = d("dashboard-medicao");
const catalogo = d("dashboard-catalogo");

const fieldAppSlides = appGroup.slides.filter((s) => s.label !== "Dashboard_app_tecnico").slice(0, 4);

export const commandCenterHero = {
  eyebrow: "Central de comando",
  title: painelGestor.title,
  narrative:
    "KPIs, mapa operacional e despacho no mesmo painel — a visão executiva que conecta escritório, campo e contratante.",
  screenshot: { src: painelGestor.src, alt: painelGestor.alt },
  features: painelGestor.features,
  metrics: [
    { value: "Tempo real", label: "Status dos chamados" },
    { value: "Mapa + fila", label: "Prioridade e SLA" },
    { value: "1 clique", label: "Novo chamado no painel" },
  ],
} as const;

/** Módulos narrativos em #operacao (exceto hero, renderizado à parte) */
export const storyModules: PlatformModule[] = [
  {
    id: "chamado",
    flowStep: 1,
    tier: "secondary",
    layout: "compactBand",
    eyebrow: "Fluxo operacional",
    title: "Chamado aberto no mapa",
    narrative:
      "Operadora ou cliente registra o chamado com endereço, ponto de iluminação, prioridade e anexos georreferenciados.",
    screenshot: { src: chamados.src, alt: chamados.alt },
    features: chamados.features.slice(0, 4),
  },
  {
    id: "despacho",
    flowStep: 2,
    tier: "secondary",
    layout: "compactBand",
    eyebrow: "Fluxo operacional",
    title: "Despacho para equipe",
    narrative:
      "Gestão classifica por SLA e prioridade, atribui responsável e técnico(s) — histórico e dados do contratante na mesma tela.",
    screenshot: { src: previewDados.slides[0]!.src, alt: previewDados.slides[0]!.alt },
    features: [
      ...painelGestor.features.slice(0, 2),
      "Dados do cliente contratante e contato",
      "Montagem da equipe no chamado",
    ],
  },
  {
    id: "campo",
    flowStep: 3,
    tier: "primary",
    layout: "compactBand",
    eyebrow: "Fluxo operacional",
    title: "Execução em campo",
    narrative:
      "Técnico atende pelo PWA com fotos, materiais do catálogo, geolocalização e finalização da OS — sem app de loja.",
    screenshot: { src: fieldAppSlides[0]!.src, alt: fieldAppSlides[0]!.alt },
    features: appGroup.features.slice(0, 4),
    anchorId: "campo",
    ctaHref: "#app",
    ctaLabel: "Ver app completo",
  },
  {
    id: "portal",
    flowStep: 4,
    tier: "secondary",
    layout: "compactBand",
    eyebrow: "Fluxo operacional",
    title: "Portal do cliente",
    narrative:
      "O contratante acompanha chamados, medição e documentos — com conversa integrada ao chamado, sem planilha paralela.",
    screenshot: { src: cliente.src, alt: cliente.alt },
    features: cliente.features,
    anchorId: "portal",
  },
  {
    id: "bm",
    flowStep: 5,
    tier: "primary",
    layout: "compactBand",
    eyebrow: "Fluxo operacional",
    title: "BM automatizado",
    narrative:
      "Fechamento mensal, exportação do boletim e validação com histórico e anexos auditáveis para o contrato.",
    screenshot: { src: medicao.src, alt: medicao.alt },
    features: medicao.features,
    anchorId: "medicao",
  },
  {
    id: "iluminacao",
    flowStep: 6,
    tier: "secondary",
    layout: "compactBand",
    eyebrow: "Parque e mapa",
    title: "Pontos de iluminação",
    narrative:
      "Parque georreferenciado, clusters no mapa, importação em lote e busca por poste ou endereço — base da operação.",
    screenshot: { src: iluminacao.src, alt: iluminacao.alt },
    features: iluminacao.features.slice(0, 4),
  },
  {
    id: "catalogo",
    flowStep: 7,
    tier: "compact",
    layout: "compactBand",
    eyebrow: "Catálogo",
    title: "Produtos e serviços na OS e no BM",
    narrative: "Itens padronizados aplicados nos chamados e na medição, com importação via planilha.",
    screenshot: { src: catalogo.src, alt: catalogo.alt },
    features: catalogo.features.slice(0, 3),
  },
];
