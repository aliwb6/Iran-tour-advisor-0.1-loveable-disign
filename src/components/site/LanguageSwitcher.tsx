import { useState } from "react";
import { Globe } from "lucide-react";
import { LANGS, useI18n } from "@/lib/i18n";

export function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useI18n();
  const current = LANGS.find((l) => l.code === lang)!;

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-foreground/80 backdrop-blur-md transition hover:border-accent/60 hover:text-accent"
        aria-label="Change language"
      >
        <Globe className="h-3.5 w-3.5" />
        {current.code}
      </button>
      {open && (
        <div className="absolute end-0 mt-2 w-44 overflow-hidden rounded-2xl border border-border/70 bg-popover/95 shadow-luxe backdrop-blur-xl animate-in fade-in slide-in-from-top-2">
          {LANGS.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between px-4 py-3 text-sm transition hover:bg-accent/10 ${
                lang === l.code ? "text-accent" : "text-foreground/80"
              }`}
            >
              <span>{l.label}</span>
              <span className="text-[10px] uppercase tracking-widest opacity-60">{l.code}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
