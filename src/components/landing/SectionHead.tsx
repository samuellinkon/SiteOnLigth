export function SectionHead({
  eyebrow,
  title,
  subtitle,
  align = "center",
  dark = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <div
        className={`text-xs font-semibold uppercase tracking-widest ${dark ? "text-white/60" : "text-primary"}`}
      >
        {eyebrow}
      </div>
      <h2
        className={`mt-2 text-3xl font-extrabold sm:text-4xl ${dark ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base ${dark ? "text-white/70" : "text-ink-soft"}`}>{subtitle}</p>
      )}
    </div>
  );
}
