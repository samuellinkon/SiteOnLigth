export const siteNav = [
  { href: "#inicio", label: "Início" },
  { href: "#caos", label: "O caos" },
  { href: "#ecossistema", label: "Ecossistema" },
  { href: "#app", label: "App" },
  { href: "#operacao", label: "Operação" },
  { href: "#credibilidade", label: "Confiabilidade" },
  { href: "#implantacao", label: "Implantação" },
  { href: "#faq", label: "FAQ" },
] as const;

export const footerBrandChips = ["SaaS", "PWA", "BM", "Auditoria"] as const;

export const footerPlatformLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#caos", label: "Desafios" },
  { href: "#solucao", label: "Solução" },
  { href: "#ecossistema", label: "Módulos" },
  { href: "#operacao", label: "Produto" },
  { href: "#operacao", label: "Como funciona" },
] as const;

export const footerOperationLinks = [
  { href: "#app", label: "App do técnico" },
  { href: "#portal", label: "Portal do cliente" },
  { href: "#medicao", label: "Medição BM" },
  { href: "#implantacao", label: "Implantação" },
  { href: "#faq", label: "FAQ" },
  { href: "#campo", label: "Execução em campo" },
  { href: "#para-quem", label: "Para quem é" },
] as const;

// TODO: substituir href quando houver páginas de Privacidade e Termos
export const footerLegalLinks = [
  { href: "#", label: "Política de Privacidade" },
  { href: "#", label: "Termos de Uso" },
] as const;

export const appSectionBullets = [
  "Lista e detalhe dos chamados atribuídos ao técnico",
  "Anexos de fotos direto da câmera, sem perder no WhatsApp",
  "Materiais do catálogo lançados na OS em campo",
  "Geolocalização e rota até o ponto de iluminação",
  "PWA no navegador — sem instalação pela loja de apps",
  "Finalização da OS com registro de quem executou",
] as const;

export const heroIndicators = [
  { label: "Chamados rastreados", hint: "Mapa e OS com histórico" },
  { label: "Equipes em campo", hint: "App PWA do técnico" },
  { label: "BM automatizados", hint: "Importação e exportação" },
  { label: "Operação centralizada", hint: "Escritório e contratante" },
] as const;

export const heroFloatingStats = [
  { value: "Status", label: "Chamados em tempo real" },
  { value: "Campo", label: "Equipes despachadas" },
  { value: "BM", label: "Medição em prévia" },
  { value: "Central", label: "Operação unificada" },
] as const;

export const chaosTimeline = [
  { title: "Chamado aberto", description: "Registro sem padrão e sem vínculo com o poste." },
  { title: "WhatsApp", description: "Histórico se perde, ninguém sabe o status real do chamado." },
  { title: "Planilhas", description: "Chamados, materiais e medição em arquivos desconectados." },
  {
    title: "Endereço errado",
    description: "Sem geolocalização, técnico perde tempo procurando o poste.",
  },
  { title: "Sem histórico", description: "Nada auditável para prestação de contas do contrato." },
  {
    title: "Cliente cobrando",
    description: "O contratante cobra status por telefone, sem transparência.",
  },
  { title: "BM manual", description: "Fechamento mensal com retrabalho que trava o faturamento." },
] as const;

export const comparisonTraditional = [
  "Histórico perdido em grupos de WhatsApp",
  "Endereço digitado na planilha",
  "Retrabalho manual em Excel no BM",
  "Cliente liga cobrando status",
  "Fotos soltas no celular da equipe",
] as const;

export const comparisonOnlight = [
  "Timeline auditável por OS",
  "Ponto georreferenciado no mapa",
  "Importação, prévia e exportação do BM",
  "Portal com chamados e medição",
  "PWA com OS, fotos e materiais",
] as const;

export const solutionBullets = [
  "Chamado abertura → execução em campo → medição BM em um só fluxo auditável",
  "Mapa operacional com pontos de luz e chamados georreferenciados",
  "Portal do cliente contratante com transparência total da medição",
  "App mobile-first para o técnico finalizar OS com fotos e materiais",
  "Importação e exportação de planilhas BM e catálogo em XLSX",
] as const;

export const credibilityMetrics = [
  {
    title: "Rastreabilidade operacional",
    description: "Cada ação registrada no fluxo do contrato.",
  },
  { title: "Controle de chamados", description: "Status, prioridade e despacho centralizados." },
  { title: "Histórico completo", description: "Timeline auditável por OS e por poste." },
  {
    title: "Gestão centralizada",
    description: "Escritório, campo e contratante no mesmo ambiente.",
  },
] as const;

export const credibilityProofs = [
  {
    title: "Auditoria e logs",
    description: "Registro de quem fez o quê e quando, para prestação de contas.",
  },
  { title: "SLA e prioridade", description: "Fila operacional com classificação e indicadores." },
  {
    title: "Exportações BM e PDF",
    description: "Boletim e relatórios prontos para o contratante.",
  },
  {
    title: "Perfis configuráveis",
    description: "Gestor, técnico e cliente com módulos por instância.",
  },
] as const;

export const forWhoItems = [
  {
    title: "Operadoras de iluminação pública",
    description: "Empresas que executam contratos de iluminação pública.",
  },
  {
    title: "Gestores de contrato",
    description: "Quem responde pelo SLA, BM e prestação de contas.",
  },
  { title: "Equipes de campo", description: "Técnicos com app mobile-first para executar a OS." },
  {
    title: "Clientes contratantes",
    description: "Acompanham chamados, medição e documentos pelo portal.",
  },
] as const;

export const deploymentSteps = [
  {
    title: "Importamos suas planilhas",
    description: "Pontos, catálogo e BM a partir do que você já usa.",
  },
  { title: "Configuramos contratos", description: "SLA, perfis de acesso e parametrização do BM." },
  { title: "Treinamos equipes", description: "Gestores, campo e contratante na mesma plataforma." },
  { title: "Go-live assistido", description: "Operação acompanhada nas primeiras semanas." },
  { title: "Suporte contínuo", description: "Evolução do contrato com acompanhamento dedicado." },
] as const;

export const faqs: ReadonlyArray<readonly [string, string]> = [
  ["Funciona em nuvem?", "Sim, é uma plataforma web acessível com segurança de qualquer lugar."],
  [
    "Dá para separar acessos por perfil?",
    "Sim: gestor, técnico e cliente, com módulos configuráveis por instância.",
  ],
  [
    "Tem histórico e auditoria?",
    "Sim, cada chamado tem timeline completa e log de todas as ações.",
  ],
  ["Vocês fazem treinamento?", "Sim, a implantação é assistida com treinamento das equipes."],
  ["Funciona no celular?", "Sim, o app do técnico é mobile-first e os painéis são responsivos."],
  ["Adapta ao nosso contrato?", "Sim, catálogo, clientes, fluxo e medição BM são configuráveis."],
  [
    "Como funciona a privacidade?",
    "Perfis de acesso, auditoria e operação em nuvem com boas práticas de proteção de dados (LGPD).",
  ],
  [
    "Qual o investimento?",
    "Planos sob consulta, conforme volume de pontos, chamados e contratos da sua operação.",
  ],
];
