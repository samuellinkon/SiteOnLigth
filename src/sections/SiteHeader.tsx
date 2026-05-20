import { useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import { siteNav } from "@/lib/landing-content";
import { WHATSAPP_URL } from "@/lib/site-config";
import logoImg from "@/assets/logo.png";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-night/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src={logoImg}
            alt="OnLight"
            width={44}
            height={44}
            className="h-11 w-11 object-contain"
          />
          <div className="leading-tight">
            <div className="text-base font-bold text-white">OnLight</div>
            <div className="text-[10px] uppercase tracking-widest text-white/50">
              Gestão em Iluminação
            </div>
          </div>
        </a>
        <nav className="hidden items-center gap-4 xl:flex">
          {siteNav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-white/70 transition hover:text-white"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-grad px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" /> Falar com especialista
          </a>
        </div>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="text-white lg:hidden"
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-night px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {siteNav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-sm text-white/80"
              >
                {n.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-grad px-4 py-2 text-sm font-semibold text-white"
            >
              <MessageCircle className="h-4 w-4" /> Falar com especialista
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
