import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/landing-content";
import { SectionHead } from "@/components/landing/SectionHead";
import { SectionShell } from "@/components/landing/SectionShell";
import { Reveal } from "@/components/landing/Reveal";

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <SectionShell id="faq" tone="surface" density="compact">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <SectionHead eyebrow="FAQ" title="Perguntas frequentes" />
        </Reveal>
        <div className="mt-10 space-y-3">
          {faqs.map(([q, a], i) => (
            <Reveal key={q} delay={i * 40}>
              <div className="overflow-hidden rounded-xl border border-border bg-card">
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-ink">{q}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-ink-soft transition ${open === i ? "rotate-180" : ""}`}
                  />
                </button>
                {open === i && (
                  <div className="border-t border-border px-5 py-4 text-sm text-ink-soft">{a}</div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
