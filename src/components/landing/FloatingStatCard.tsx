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
      className={`absolute z-20 rounded-xl border border-white/15 bg-night/90 px-3 py-2 shadow-glow backdrop-blur-md ${className}`}
    >
      <div className="text-[10px] font-semibold uppercase tracking-widest text-white/50">
        Operação
      </div>
      <div className="text-sm font-bold text-white">{value}</div>
      <div className="text-[11px] text-white/65">{label}</div>
    </div>
  );
}
