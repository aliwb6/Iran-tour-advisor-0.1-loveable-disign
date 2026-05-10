import { Sparkles, Send } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function AiAssistant() {
  const { t } = useI18n();
  return (
    <section className="relative py-28">
      <div className="container-luxe">
        <div className="relative overflow-hidden rounded-[2rem] bg-foreground p-10 text-background md:p-16">
          <div className="pattern-persian absolute inset-0 opacity-[0.07]" />
          <div className="absolute -end-24 -top-24 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="absolute -bottom-24 -start-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />

          <div className="relative grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/5 px-3 py-1 text-[11px] uppercase tracking-[0.3em] backdrop-blur">
                <Sparkles className="h-3 w-3 text-gold" /> {t("ai.badge")}
              </div>
              <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">{t("ai.title")}</h2>
              <p className="mt-5 max-w-md text-background/70">{t("ai.desc")}</p>
              <ul className="mt-8 space-y-3 text-sm text-background/80">
                <li>{t("ai.b1")}</li>
                <li>{t("ai.b2")}</li>
                <li>{t("ai.b3")}</li>
              </ul>
              <button
                onClick={() => typeof window !== "undefined" && window.dispatchEvent(new CustomEvent("open-chat"))}
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-gold px-7 py-4 text-sm font-medium text-foreground transition hover:scale-105"
              >
                <Sparkles className="h-4 w-4" /> {t("cta.btn")}
              </button>
            </div>

            <div className="relative">
              <div className="glass rounded-3xl border-background/10 bg-background/5 p-5 shadow-luxe">
                <div className="flex items-center gap-2 border-b border-background/10 pb-3 text-[11px] uppercase tracking-[0.25em] text-background/60">
                  <span className="h-2 w-2 rounded-full bg-gold" /> {t("ai.concierge")}
                </div>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-background/10 p-3 text-background/90">
                    {t("ai.msg1")}
                  </div>
                  <div className="ms-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-accent/90 p-3 text-accent-foreground">
                    {t("ai.msg2")}
                  </div>
                  <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-background/10 p-3 text-background/90">
                    {t("ai.msg3")}
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 rounded-full border border-background/15 bg-background/5 px-4 py-2.5">
                  <input
                    placeholder={t("ai.input")}
                    className="w-full bg-transparent text-sm placeholder:text-background/50 focus:outline-none"
                  />
                  <button className="grid h-8 w-8 place-items-center rounded-full bg-gold text-foreground transition hover:scale-105">
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
