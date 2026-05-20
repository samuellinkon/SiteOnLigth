import logoImg from "@/assets/logo.png";
import { heroDashboardImg } from "@/lib/product-screens";
import { heroFloatingStats } from "@/lib/landing-content";
import { FloatingStatCard } from "@/components/landing/FloatingStatCard";

const HUB = { x: 50, y: 50 } as const;
const NODES = [
  { x: 14, y: 16 },
  { x: 86, y: 24 },
  { x: 12, y: 78 },
  { x: 88, y: 84 },
] as const;

const CARD_POSITIONS = [
  "top-0 left-0 sm:top-4 sm:-left-1 lg:-left-4",
  "top-[20%] right-0 sm:top-[24%] sm:-right-1 lg:-right-4",
  "bottom-[26%] left-0 sm:bottom-[30%] sm:-left-1 lg:-left-4",
  "bottom-0 right-0 sm:bottom-6 sm:-right-1 lg:-right-6",
] as const;

export function HeroHubVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl px-1 sm:max-w-2xl sm:px-0">
      <div className="absolute -inset-6 rounded-[2rem] bg-brand-grad opacity-20 blur-3xl sm:-inset-10" />

      <div className="relative aspect-square w-full min-h-[300px] overflow-visible sm:min-h-[380px] lg:min-h-[440px]">
        <svg
          className="pointer-events-none absolute inset-0 z-[15] h-full w-full text-brand"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden
        >
          <defs>
            <linearGradient id="hero-hub-line" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="oklch(0.68 0.17 258)" stopOpacity="0.15" />
              <stop offset="50%" stopColor="oklch(0.68 0.17 258)" stopOpacity="0.85" />
              <stop offset="100%" stopColor="oklch(0.6 0.22 290)" stopOpacity="0.35" />
            </linearGradient>
            <radialGradient id="hero-hub-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="oklch(0.68 0.17 258)" stopOpacity="0.35" />
              <stop offset="100%" stopColor="oklch(0.68 0.17 258)" stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle cx={HUB.x} cy={HUB.y} r="22" fill="url(#hero-hub-glow)" />

          {NODES.map((node, i) => (
            <g key={i}>
              <line
                x1={HUB.x}
                y1={HUB.y}
                x2={node.x}
                y2={node.y}
                stroke="url(#hero-hub-line)"
                strokeWidth="0.35"
                strokeLinecap="round"
                strokeDasharray="1.2 0.8"
                opacity="0.9"
              />
              <circle cx={node.x} cy={node.y} r="1.1" className="fill-brand" opacity="0.9" />
            </g>
          ))}

          <circle cx={HUB.x} cy={HUB.y} r="2.2" className="fill-brand-2" opacity="0.95" />
          <circle
            cx={HUB.x}
            cy={HUB.y}
            r="3.8"
            fill="none"
            stroke="oklch(0.68 0.17 258 / 0.45)"
            strokeWidth="0.25"
          />
        </svg>

        {heroFloatingStats.map((stat, i) => (
          <FloatingStatCard
            key={stat.label}
            value={stat.value}
            label={stat.label}
            className={CARD_POSITIONS[i]}
          />
        ))}

        <div className="absolute inset-[20%] z-[6] flex items-center justify-center sm:inset-[16%]">
          <div className="relative w-full overflow-hidden rounded-xl border border-white/25 bg-white p-1 shadow-glow sm:rounded-[1.25rem] sm:p-2">
            <div className="aspect-square w-full overflow-hidden rounded-lg sm:rounded-[1rem]">
              <img
                src={heroDashboardImg}
                alt="Vista aérea noturna de metrópole com malha urbana iluminada por iluminação pública inteligente em tons ciano e azul-turquesa"
                width={1024}
                height={1024}
                fetchPriority="high"
                className="h-full w-full object-cover object-center"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-night/10 via-transparent to-night/35"
                aria-hidden
              />
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute left-1/2 top-1/2 z-[30] -translate-x-1/2 -translate-y-1/2">
          <div className="absolute -inset-2 rounded-full bg-brand-grad opacity-40 blur-xl sm:-inset-3" />
          <div className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-white/30 bg-night/92 shadow-glow backdrop-blur-md sm:h-20 sm:w-20 sm:rounded-[1.15rem]">
            <img
              src={logoImg}
              alt=""
              width={56}
              height={56}
              className="h-9 w-9 object-contain sm:h-12 sm:w-12"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </div>
  );
}
