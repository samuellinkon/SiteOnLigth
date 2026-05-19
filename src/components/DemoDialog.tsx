import { useState } from "react";
import { z } from "zod";
import { MessageCircle, X, Loader2 } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/site-config";

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100, "Máx. 100 caracteres"),
  company: z.string().trim().min(2, "Informe a empresa").max(100, "Máx. 100 caracteres"),
  city: z.string().trim().min(2, "Informe a cidade").max(80, "Máx. 80 caracteres"),
  need: z.string().trim().min(10, "Conte um pouco mais (mín. 10 caracteres)").max(600, "Máx. 600 caracteres"),
});

type FormData = z.infer<typeof schema>;
type Errors = Partial<Record<keyof FormData, string>>;

export function DemoDialog({
  open, onClose, variant = "primary",
}: { open: boolean; onClose: () => void; variant?: "primary" | "light" }) {
  const [data, setData] = useState<FormData>({ name: "", company: "", city: "", need: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);

  if (!open) return null;

  const update = (k: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData((d) => ({ ...d, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FormData;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setSending(true);
    const { name, company, city, need } = parsed.data;
    const message =
      `Olá! Gostaria de agendar uma demonstração do OnLight.\n\n` +
      `• Nome: ${name}\n` +
      `• Empresa: ${company}\n` +
      `• Cidade: ${city}\n` +
      `• Necessidade: ${need}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setTimeout(() => {
      setSending(false);
      onClose();
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in" onClick={onClose} />
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-card shadow-glow animate-in fade-in zoom-in-95">
        <div className="relative bg-night-grad px-6 py-5 text-white">
          <button onClick={onClose} aria-label="Fechar" className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10">
            <X className="h-4 w-4" />
          </button>
          <div className="text-xs font-semibold uppercase tracking-widest text-white/60">Agendar demonstração</div>
          <h3 className="mt-1 text-xl font-bold">Vamos conhecer sua operação</h3>
          <p className="mt-1 text-sm text-white/70">Preencha os dados — abrimos o WhatsApp com a mensagem pronta.</p>
        </div>
        <form onSubmit={handleSubmit} noValidate className="space-y-4 p-6">
          <Field label="Nome" error={errors.name}>
            <input type="text" value={data.name} onChange={update("name")} maxLength={100} autoComplete="name" placeholder="Seu nome completo" className={inputCls(!!errors.name)} />
          </Field>
          <Field label="Empresa" error={errors.company}>
            <input type="text" value={data.company} onChange={update("company")} maxLength={100} autoComplete="organization" placeholder="Razão social ou nome fantasia" className={inputCls(!!errors.company)} />
          </Field>
          <Field label="Cidade" error={errors.city}>
            <input type="text" value={data.city} onChange={update("city")} maxLength={80} autoComplete="address-level2" placeholder="Cidade / UF" className={inputCls(!!errors.city)} />
          </Field>
          <Field label="Necessidade" error={errors.need} hint={`${data.need.length}/600`}>
            <textarea value={data.need} onChange={update("need")} maxLength={600} rows={4} placeholder="Ex.: operação com ~3.000 pontos de luz, contrato com cliente X, precisamos de app de campo e BM..." className={inputCls(!!errors.need) + " resize-none"} />
          </Field>
          <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <button type="button" onClick={onClose} className="rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-ink transition hover:bg-surface">
              Cancelar
            </button>
            <button type="submit" disabled={sending} className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-grad px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:opacity-90 disabled:opacity-60">
              {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <MessageCircle className="h-4 w-4" />}
              Enviar pelo WhatsApp
            </button>
          </div>
          <p className="text-[11px] text-ink-soft">
            Ao continuar, você será redirecionado ao WhatsApp com a mensagem preenchida.
          </p>
        </form>
      </div>
    </div>
  );
}

function Field({ label, error, hint, children }: { label: string; error?: string; hint?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-xs font-semibold text-ink">{label}</span>
        {hint && <span className="text-[11px] text-ink-soft">{hint}</span>}
      </div>
      {children}
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </label>
  );
}

function inputCls(hasError: boolean) {
  return [
    "w-full rounded-lg border bg-background px-3 py-2.5 text-sm text-ink outline-none transition",
    "placeholder:text-ink-soft/60",
    hasError
      ? "border-destructive focus:ring-2 focus:ring-destructive/30"
      : "border-border focus:border-primary focus:ring-2 focus:ring-primary/20",
  ].join(" ");
}
