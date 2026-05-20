export function FloatingStatCard({
  value,
  label,
  className = "",
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`absolute z-20 max-w-[4.75rem] rounded-lg border border-white/15 bg-night/90 px-2 py-1.5 shadow-glow backdrop-blur-md sm:max-w-none sm:rounded-xl sm:px-3 sm:py-2 ${className}`}
    >
      <div className="text-[8px] font-semibold uppercase tracking-widest text-white/50 sm:text-[10px]">
        Operação
      </div>
      <div className="text-xs font-bold leading-tight text-white sm:text-sm">{value}</div>
      <div className="text-[9px] leading-snug text-white/65 sm:text-[11px]">{label}</div>
    </div>
  );
}
