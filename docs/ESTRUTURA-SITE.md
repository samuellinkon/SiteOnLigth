# Estrutura do site OnLight (handoff para avaliação)

## Resumo executivo

- **Produto:** OnLight — CRM SaaS para **operadoras de iluminação pública**
- **Tipo de site:** Landing page single-page (`/`), narrativa em **7 capítulos**
- **Objetivo:** Converter em contato comercial via WhatsApp
- **Posicionamento:** Central operacional (não catálogo de funcionalidades)

---

## Stack técnica

| Camada | Tecnologia |
|--------|------------|
| Framework | TanStack Start + TanStack Router |
| UI | React 19, Tailwind CSS v4 |
| Dados da landing | `src/lib/landing-content.ts`, `src/lib/platform-modules.ts` |
| Seções | `src/sections/*` |
| Primitivos | `src/components/landing/*` |
| Build / deploy | Vite 7, Cloudflare Workers |

---

## Arquitetura de arquivos

```
src/routes/index.tsx           # Orquestração (~65 linhas)
src/sections/
  SiteHeader.tsx
  HeroSection.tsx
  ChaosSection.tsx
  EcosystemSection.tsx
  OperationalFlowSection.tsx
  CredibilitySection.tsx
  DeploymentSection.tsx
  FAQSection.tsx
  FooterSection.tsx
src/lib/landing-content.ts
src/lib/platform-modules.ts
src/components/landing/platform/
src/lib/product-screens.ts
src/hooks/use-in-view.ts
src/components/landing/
```

---

## Navegação (menu)

| Label | Âncora |
|-------|--------|
| Início | `#inicio` |
| O caos | `#caos` |
| Ecossistema | `#ecossistema` |
| App | `#app` |
| Operação | `#operacao` |
| Confiabilidade | `#credibilidade` |
| Implantação | `#implantacao` |
| FAQ | `#faq` |

**CTAs:** Falar com especialista (WhatsApp)

---

## 7 capítulos narrativos

### 1. Hero — `#inicio` (Central operacional)

- Badge SaaS, headline “Central operacional”, valor, CTAs
- 4 mini indicadores operacionais
- Mockup Painel Gestor + floating cards (status ilustrativo)
- Fundo escuro cinematográfico (`night`, `ring-grid`, glow)

### 2. O caos operacional — `#caos`

**Merge:** Desafios + Comparação + Solução

- Timeline vertical (7 nós do caos)
- Split: Operação tradicional vs Fluxo OnLight
- Bullets da solução + thumb do mapa

### 3. Ecossistema — `#ecossistema`

- Headline + diagrama hub SVG (ONLIGHT no centro, nós: Chamados, Campo, BM, Portal, Mapa, SLA)
- Faixa horizontal de integrações (pills glass, 4 itens)

### 3b. App do técnico — `#app`

- Copy + bullets do PWA de campo
- Carrossel no mockup de celular (telas do app, sem dashboard)

### 4. Plataforma — `#operacao`

Experiência narrativa (layouts assimétricos, sem grid de cards iguais):

1. **Hero** — Painel Principal (`Painel_Gestor_`) + métricas flutuantes
2. **Fluxo** — rail sticky (5 passos) + blocos alternados:
   - Chamado → Despacho → Campo (mockup PWA) → Portal → BM (full bleed)
   - Fechamento: Iluminação + Catálogo (compact band)

Âncoras: `#portal`, `#medicao`, `#campo`. Dados em `src/lib/platform-modules.ts`.

### 5. Credibilidade — `#credibilidade`

**Merge:** Segurança + Para quem + proofs enterprise

- 4 métricas qualitativas
- 4 proof points (auditoria, SLA, exportações, perfis)
- 4 personas “Quem opera na central”

### 6. Implantação — `#implantacao`

**Merge:** Implantação + Investimento

- Timeline vertical humanizada (5 passos)
- Faixa “Planos sob consulta” + CTA proposta

### Apoio

- **FAQ** — `#faq` (8 perguntas)
- **Footer** — 3 camadas:
  1. CTA escuro (Falar com especialista → WhatsApp)
  2. Grid: marca + chips | Plataforma | Operação | Contato
  3. Barra legal (©, Privacidade, Termos — href `#` com TODO)

**Âncoras extras (footer, não no header):** `#solucao`, `#campo`, `#portal`, `#medicao`, `#para-quem`

---

## Ritmo visual

Alternância `night` / `surface`, densidades `section-cinematic` e `section-compact`, animações `Reveal` (IntersectionObserver), sem Framer Motion.

---

## Prompt para avaliação por IA

> Avalie a landing OnLight refatorada em capítulos narrativos (central operacional, caos, ecossistema, fluxo operacional sticky, credibilidade, implantação, FAQ, footer com CTA). Single-page React/TanStack Start. Conversão: WhatsApp. Analise UX, storytelling B2B, hierarquia, ritmo visual e percepção enterprise.
