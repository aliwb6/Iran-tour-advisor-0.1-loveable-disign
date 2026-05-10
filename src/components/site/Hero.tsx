import hero from "@/assets/hero-isfahan.jpg";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Search } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative h-[100svh] min-h-[680px] w-full overflow-hidden">
      <img
        src={hero}
        alt="Persian dome at golden hour in Isfahan"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/40 to-foreground/85" />
      <div className="pattern-persian absolute inset-0 opacity-[0.05] mix-blend-overlay" />

      <div className="container-luxe relative flex h-full flex-col justify-end pb-20 pt-32 text-background">
        <div className="max-w-3xl">
          <div className="reveal inline-flex items-center gap-3 rounded-full border border-background/30 bg-background/5 px-4 py-1.5 text-[11px] uppercase tracking-[0.3em] backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {t("hero.badge")}
          </div>
          <h1 className="reveal reveal-delay-1 mt-8 font-display text-5xl leading-[1.05] text-balance md:text-7xl lg:text-8xl">
            {t("hero.title.a")} <em className="not-italic shimmer-text">{t("hero.title.em")}</em> {t("hero.title.b")}
          </h1>
          <p className="reveal reveal-delay-2 mt-6 max-w-xl text-base leading-relaxed text-background/80 md:text-lg">
            {t("hero.subtitle")}
          </p>

          <div className="reveal reveal-delay-3 mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/packages"
              className="group inline-flex items-center gap-3 rounded-full bg-background px-7 py-4 text-sm font-medium text-foreground transition hover:bg-accent hover:text-background"
            >
              {t("hero.cta.explore")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
            </Link>
            <button
              onClick={() => typeof window !== "undefined" && window.dispatchEvent(new CustomEvent("open-chat"))}
              className="inline-flex items-center gap-3 rounded-full border border-background/40 px-7 py-4 text-sm font-medium text-background transition hover:border-background hover:bg-background/10"
            >
              <span className="grid h-5 w-5 place-items-center rounded-full bg-gold text-foreground text-[10px]">✦</span>
              {t("hero.cta.ai")}
            </button>
          </div>
        </div>

        <div className="reveal reveal-delay-3 mt-14 max-w-4xl">
          <div className="glass flex flex-col gap-2 rounded-2xl p-2 md:flex-row md:items-center md:gap-0 md:rounded-full">
            <div className="flex flex-1 items-center gap-3 px-5 py-3">
              <Search className="h-4 w-4 text-background/70" />
              <input
                placeholder={t("hero.search.placeholder")}
                className="w-full bg-transparent text-sm text-background placeholder:text-background/60 focus:outline-none"
              />
            </div>
            <div className="hidden h-8 w-px bg-background/20 md:block" />
            <div className="px-5 py-3 text-sm text-background/80">
              <select className="bg-transparent focus:outline-none">
                <option className="text-foreground">{t("hero.search.any")}</option>
                <option className="text-foreground">{t("hero.search.short")}</option>
                <option className="text-foreground">{t("hero.search.mid")}</option>
                <option className="text-foreground">{t("hero.search.long")}</option>
              </select>
            </div>
            <button className="rounded-xl bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition hover:opacity-90 md:rounded-full">
              {t("hero.search.btn")}
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 start-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-background/60 animate-float">
        {t("hero.scroll")}
      </div>
    </section>
  );
}
