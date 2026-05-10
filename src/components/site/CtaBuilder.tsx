import { ArrowRight, Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function CtaBuilder() {
  const { t } = useI18n();
  const openChat = () => {
    if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("open-chat"));
  };
  return (
    <section className="container-luxe py-20">
      <div className="relative overflow-hidden rounded-[2rem] border border-gold/40 bg-gradient-to-br from-secondary to-background p-10 md:p-16">
        <div className="pattern-persian absolute inset-0 opacity-[0.08]" />
        <div className="absolute -end-20 -top-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-accent">
              <Sparkles className="h-3 w-3 text-gold" /> {t("cta.kicker")}
            </div>
            <h3 className="mt-3 max-w-xl font-display text-3xl md:text-4xl">{t("cta.title")}</h3>
          </div>
          <button
            onClick={openChat}
            className="group inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 text-sm text-background transition hover:bg-accent"
          >
            {t("cta.btn")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
          </button>
        </div>
      </div>
    </section>
  );
}
