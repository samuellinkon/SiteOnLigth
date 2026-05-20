import heroMapaIluminacao from "@/assets/product/hero-mapa-iluminacao.png";
import dashboardPainelGestor from "@/assets/product/dashboard-painel-gestor.png";
import dashboardCliente from "@/assets/product/dashboard-cliente.png";
import dashboardIluminacao from "@/assets/product/dashboard-iluminacao.png";
import dashboardChamados from "@/assets/product/dashboard-chamados.png";
import dashboardMedicao from "@/assets/product/dashboard-medicao.png";
import dashboardCatalogo from "@/assets/product/dashboard-catalogo.png";
import aberturaChamado1 from "@/assets/product/abertura-chamado-1.png";
import aberturaChamado2 from "@/assets/product/abertura-chamado-2.png";
import previewChamado1 from "@/assets/product/preview-chamado-1.png";
import previewChamado2 from "@/assets/product/preview-chamado-2.png";
import previewChamado3 from "@/assets/product/preview-chamado-3.png";
import previewChamado4 from "@/assets/product/preview-chamado-4.png";
import previewChamado5 from "@/assets/product/preview-chamado-5.png";
import previewChamado6 from "@/assets/product/preview-chamado-6.png";
import previewChamado7 from "@/assets/product/preview-chamado-7.png";
import dashboardAppTecnico from "@/assets/product/dashboard-app-tecnico.png";
import chamadosAppTecnico from "@/assets/product/chamados-app-tecnico.png";
import visualizarChamadoApp1 from "@/assets/product/visualizar-chamado-app-1.png";
import visualizarChamadoApp2 from "@/assets/product/visualizar-chamado-app-2.png";
import visualizarChamadoApp3 from "@/assets/product/visualizar-chamado-app-3.png";
import visualizarChamadoApp4 from "@/assets/product/visualizar-chamado-app-4.png";
import pontosClusterPostes from "@/assets/product/pontos-cluster-postes.png";
import pontosFotoPoste from "@/assets/product/pontos-foto-poste.png";
import implantacaoFluxo from "@/assets/product/implantacao-fluxo.png";

export type ProductSlide = {
  src: string;
  alt: string;
  label: string;
};

export type ProductDashboard = {
  id: string;
  title: string;
  fileLabel: string;
  src: string;
  alt: string;
  features: string[];
};

export type ProductGroup = {
  id: string;
  title: string;
  eyebrow?: string;
  slides: ProductSlide[];
  features: string[];
};

export const heroDashboardImg = heroMapaIluminacao;
export const fieldAppImg = dashboardAppTecnico;
export const clientPortalImg = dashboardCliente;
export const measurementImg = dashboardMedicao;
export const solutionMapImg = dashboardIluminacao;

/** Infográfico da seção Implantação */
export const implantacaoFluxoImg = implantacaoFluxo;
export const implantacaoFluxoAlt =
  "Fluxo de implantação — importação, contratos, central operacional unificada, treinamento e operação contínua";

export const productDashboards: ProductDashboard[] = [
  {
    id: "painel-gestor",
    title: "Painel Principal",
    fileLabel: "Painel_Gestor_",
    src: dashboardPainelGestor,
    alt: "Painel_Gestor_ — visão executiva com KPIs e mapa de chamados",
    features: [
      "KPIs de chamados abertos, em andamento e pontos do contrato",
      "Mapa de chamados com filtros por dia, semana e mês",
      "Agrupamento em clusters e atualização do mapa",
      "Abertura rápida de novo chamado pelo painel",
    ],
  },
  {
    id: "dashboard-cliente",
    title: "Cliente",
    fileLabel: "dahsboard_cliente",
    src: dashboardCliente,
    alt: "dahsboard_cliente — cadastro, acessos e observações do contratante",
    features: [
      "Visão do contratante sobre a operação",
      "Acompanhamento de chamados e status",
      "Consulta à medição do período",
    ],
  },
  {
    id: "dashboard-iluminacao",
    title: "Pontos de iluminação",
    fileLabel: "Dashboard_Ilmunacao",
    src: dashboardIluminacao,
    alt: "Dashboard_Ilmunacao — parque de postes e mapa com clusters",
    features: [
      "Total de pontos, ativos e inativos",
      "Mapa com clusters e filtro por área ou bairro",
      "Busca por poste, endereço ou referência",
      "Importação do parque e cadastro de novo poste",
    ],
  },
  {
    id: "dashboard-chamados",
    title: "Chamados",
    fileLabel: "Dashboard_Chamados",
    src: dashboardChamados,
    alt: "Dashboard_Chamados — fila operacional e indicadores de chamados",
    features: [
      "KPIs de abertos, em andamento, urgentes e resolvidos",
      "Filtros por data, status, local e técnico",
      "Lista com endereço, latitude e longitude",
      "Anexos e ações por chamado",
    ],
  },
  {
    id: "dashboard-medicao",
    title: "Medição",
    fileLabel: "Dashboard_medicacao",
    src: dashboardMedicao,
    alt: "Dashboard_medicacao — medições mensais e boletim BM",
    features: [
      "Medições mensais com total e quantidade de chamados",
      "Geração de BM, BM completo e relatório fotográfico",
      "Período configurável por data início e fim",
      "Importação de planilha BM",
    ],
  },
  {
    id: "dashboard-catalogo",
    title: "Catálogo",
    fileLabel: "Dashboard_Catalogo",
    src: dashboardCatalogo,
    alt: "Dashboard_Catalogo — produtos, serviços e controle de estoque",
    features: [
      "Produtos e serviços com código e valor unitário",
      "Alerta de estoque baixo",
      "Exportação e importação via planilha",
      "Catálogo aplicado nos chamados e na medição",
    ],
  },
];

export const productComponentGroups: ProductGroup[] = [
  {
    id: "abertura-chamado",
    title: "Abertura de Chamado",
    eyebrow: "Abetrua_Chamado",
    slides: [
      {
        src: aberturaChamado1,
        label: "Abetrua_Chamado_1",
        alt: "Abetrua_Chamado_1 — coordenadas, referência e ponto de iluminação",
      },
      {
        src: aberturaChamado2,
        label: "Abetrua_Chamado_2",
        alt: "Abetrua_Chamado_2 — descrição do problema e prioridade",
      },
    ],
    features: [
      "Latitude, longitude e ponto de referência",
      "Vínculo com ponto de iluminação e preenchimento de endereço",
      "Descrição detalhada do problema",
      "Prioridade: baixa, normal, alta ou urgente",
    ],
  },
  {
    id: "preview-dados",
    title: "Preview de Chamado — Dados",
    eyebrow: "Preview_de_Chamado",
    slides: [
      {
        src: previewChamado1,
        label: "Preview_de_Chamado_1",
        alt: "Preview_de_Chamado_1 — informações, prioridade e status",
      },
      {
        src: previewChamado2,
        label: "Preview_de_Chamado_2",
        alt: "Preview_de_Chamado_2 — equipe no chamado",
      },
    ],
    features: [
      "Exportação em PDF e Excel",
      "Dados do cliente contratante e contato",
      "Montagem da equipe (dupla ou trio) no chamado",
      "Prioridade, status e registro de finalização pelo técnico",
    ],
  },
  {
    id: "preview-execucao",
    title: "Preview de Chamado — Execução",
    eyebrow: "Preview_de_Chamado",
    slides: [
      {
        src: previewChamado3,
        label: "Preview_de_Chamado_3",
        alt: "Preview_de_Chamado_3 — itens do atendimento (resumo)",
      },
      {
        src: previewChamado4,
        label: "Preview_de_Chamado_4",
        alt: "Preview_de_Chamado_4 — itens utilizados e recolhidos",
      },
      {
        src: previewChamado5,
        label: "Preview_de_Chamado_5",
        alt: "Preview_de_Chamado_5 — conversa com o portal do contratante",
      },
    ],
    features: [
      "Itens utilizados e devolvidos com quantidade e valor",
      "Lançamento de produtos e serviços do catálogo",
      "Recolhimento de materiais no campo",
      "Conversa com resposta ao portal do contratante",
    ],
  },
  {
    id: "preview-rastreabilidade",
    title: "Preview de Chamado — Rastreabilidade",
    eyebrow: "Preview_de_Chamado",
    slides: [
      {
        src: previewChamado6,
        label: "Preview_de_Chamado_6",
        alt: "Preview_de_Chamado_6 — anexos do chamado",
      },
      {
        src: previewChamado7,
        label: "Preview_de_Chamado_7",
        alt: "Preview_de_Chamado_7 — histórico e timeline de eventos",
      },
    ],
    features: [
      "Upload por clique ou arraste (imagens, PDF, até 10MB)",
      "Lista de anexos com autor, data e download",
      "Histórico cronológico com papéis (gestor, técnico, admin)",
      "Registro de status, mensagens, fotos e itens lançados",
    ],
  },
  {
    id: "app-tecnico",
    title: "App Técnico",
    eyebrow: "App_tecnico",
    slides: [
      {
        src: dashboardAppTecnico,
        label: "Dashboard_app_tecnico",
        alt: "Dashboard_app_tecnico — painel do técnico em campo",
      },
      {
        src: chamadosAppTecnico,
        label: "Chamados_app_tencico",
        alt: "Chamados_app_tencico — lista de chamados atribuídos",
      },
      {
        src: visualizarChamadoApp1,
        label: "Visualizar_Chamado_App_tencico",
        alt: "Visualizar_Chamado_App_tencico — detalhe do chamado",
      },
      {
        src: visualizarChamadoApp2,
        label: "Visualizar_Chamado_App_tencico_2",
        alt: "Visualizar_Chamado_App_tencico_2 — detalhe do chamado",
      },
      {
        src: visualizarChamadoApp3,
        label: "Visualizar_Chamado_App_tencico_3",
        alt: "Visualizar_Chamado_App_tencico_3 — detalhe do chamado",
      },
      {
        src: visualizarChamadoApp4,
        label: "Visualizar_Chamado_App_tencico_4",
        alt: "Visualizar_Chamado_App_tencico_4 — detalhe do chamado",
      },
    ],
    features: [
      "Dashboard do técnico com chamados do dia",
      "Lista de OS atribuídas com status",
      "Detalhe do chamado com materiais e anexos",
      "Finalização e envio para aprovação",
    ],
  },
  {
    id: "pontos-iluminacao",
    title: "Pontos de Iluminação",
    eyebrow: "Pontos",
    slides: [
      {
        src: pontosClusterPostes,
        label: "Pontos_clusterizado_de_Postes",
        alt: "Pontos_clusterizado_de_Postes — mapa com clusters de postes",
      },
      {
        src: pontosFotoPoste,
        label: "Pontos_Ft_do_Poste",
        alt: "Pontos_Ft_do_Poste — popup com foto e chamados do poste",
      },
    ],
    features: [
      "Visualização geográfica com agrupamento em clusters",
      "Filtro por área e destaque de chamados abertos",
      "Popup com foto do poste e histórico de OS",
      "Abertura de chamado e Street View no ponto",
    ],
  },
];
