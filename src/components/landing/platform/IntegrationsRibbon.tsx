import { integrationRibbonItems } from "@/lib/platform-modules";

export function IntegrationsRibbon() {
  return (
    <div className="mt-16">
      <div className="text-xs font-semibold uppercase tracking-widest text-white/50">
        Integrações
      </div>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:overflow-x-auto sm:pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:[&::-webkit-scrollbar]:hidden">
        {integrationRibbonItems.map((item) => {
          const inner = (
            <>
              <div className="text-sm font-semibold text-white">{item.title}</div>
              <div className="mt-1 text-xs text-white/55">{item.description}</div>
            </>
          );

          const className =
            "surface-glass hover-lift w-full rounded-xl px-4 py-3 transition sm:w-auto sm:min-w-[220px] sm:shrink-0";

          if ("href" in item && item.href) {
            return (
              <a key={item.title} href={item.href} className={className}>
                {inner}
              </a>
            );
          }

          return (
            <div key={item.title} className={className}>
              {inner}
            </div>
          );
        })}
      </div>
    </div>
  );
}
