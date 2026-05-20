import { ecosystemRadialModules } from "@/lib/platform-modules";

const HUB = { x: 50, y: 50 } as const;

const nodeCardClass =
  "surface-glass hover-lift block max-w-[5.5rem] rounded-lg border border-white/15 px-2 py-1.5 text-left transition sm:max-w-[148px] sm:rounded-xl sm:px-3 sm:py-2.5";

function RadialModuleNode({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href?: string;
}) {
  const inner = (
    <>
      <div className="text-[9px] font-semibold leading-tight text-white sm:text-xs">{title}</div>
      <div className="mt-0.5 line-clamp-2 text-[8px] leading-snug text-white/55 sm:mt-1 sm:text-[10px]">
        {description}
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} className={nodeCardClass}>
        {inner}
      </a>
    );
  }

  return <div className={nodeCardClass}>{inner}</div>;
}

export function EcosystemHubDiagram() {
  return (
    <div className="relative mx-auto mt-12 w-full max-w-4xl px-1 sm:px-4">
      <div className="absolute -inset-6 rounded-[2rem] bg-brand-grad opacity-15 blur-3xl sm:-inset-8" />

      <div className="relative mx-auto aspect-square w-full min-h-[340px] max-w-[min(100%,22rem)] overflow-visible sm:min-h-[400px] sm:max-w-none lg:min-h-[480px]">
        <svg
          className="absolute inset-0 h-full w-full text-brand"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden
        >
          <defs>
            <linearGradient id="eco-hub-line" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="oklch(0.68 0.17 258)" stopOpacity="0.2" />
              <stop offset="50%" stopColor="oklch(0.68 0.17 258)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="oklch(0.6 0.22 290)" stopOpacity="0.35" />
            </linearGradient>
            <radialGradient id="eco-hub-glow" cx="50%" cy="50%" r="45%">
              <stop offset="0%" stopColor="oklch(0.68 0.17 258)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="oklch(0.68 0.17 258)" stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle cx={HUB.x} cy={HUB.y} r="30" fill="url(#eco-hub-glow)" />

          {ecosystemRadialModules.map((node) => (
            <g key={node.id ?? node.title}>
              <line
                x1={HUB.x}
                y1={HUB.y}
                x2={node.x}
                y2={node.y}
                stroke="url(#eco-hub-line)"
                strokeWidth="0.35"
                strokeLinecap="round"
                strokeDasharray="1.5 1"
                opacity="0.85"
              />
              <circle cx={node.x} cy={node.y} r="1.1" className="fill-brand-2" opacity="0.95" />
            </g>
          ))}

          <circle
            cx={HUB.x}
            cy={HUB.y}
            r="4"
            fill="none"
            stroke="oklch(0.68 0.17 258 / 0.5)"
            strokeWidth="0.3"
          />
        </svg>

        <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="absolute -inset-3 rounded-full bg-brand-grad opacity-35 blur-xl sm:-inset-4" />
          <div className="relative rounded-xl border border-white/25 bg-night/90 px-3.5 py-2.5 shadow-glow backdrop-blur-md sm:rounded-2xl sm:px-6 sm:py-4">
            <div className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/50 sm:text-[10px] sm:tracking-[0.25em]">
              Núcleo
            </div>
            <div className="mt-0.5 text-sm font-extrabold tracking-tight text-white sm:mt-1 sm:text-lg">
              ONLIGHT
            </div>
            <div className="text-[9px] text-white/60 sm:text-xs">Central operacional unificada</div>
          </div>
        </div>

        {ecosystemRadialModules.map((node) => (
          <div
            key={node.id ?? node.title}
            className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            <RadialModuleNode title={node.title} description={node.description} href={node.href} />
          </div>
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-white/45">
        12 módulos conectados ao mesmo núcleo — operação, conformidade e visibilidade integradas.
      </p>
    </div>
  );
}
