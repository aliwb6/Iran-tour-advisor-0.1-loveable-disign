import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock, Map as MapIcon } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { packages } from "@/data/site";

export function Packages() {
  const { t } = useI18n();
  return (
    <section className="relative py-28">
      <div className="absolute inset-x-0 top-0 h-[60%] bg-gradient-to-b from-muted/40 to-transparent" />
      <div className="container-luxe relative">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-accent">{t("pkg.kicker")}</div>
            <h2 className="mt-4 font-display text-4xl text-balance md:text-5xl">{t("pkg.title")}</h2>
          </div>
          <Link to="/packages" className="link-underline text-sm font-medium">{t("pkg.viewAll")}</Link>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {packages.map((p) => (
            <article key={p.slug} className="group flex flex-col overflow-hidden rounded-3xl bg-card shadow-soft hover-lift">
              <Link to="/packages/$slug" params={{ slug: p.slug }} className="relative aspect-[5/4] overflow-hidden block">
                <img
                  src={p.img}
                  alt={t(p.titleKey)}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                />
                <div className="absolute end-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-foreground backdrop-blur">
                  {t(`level.${p.level}`)}
                </div>
              </Link>
              <div className="flex flex-1 flex-col p-7">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><MapIcon className="h-3.5 w-3.5" />{t(p.citiesKey)}</span>
                  <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{p.days} {t("pkg.duration").toLowerCase()}</span>
                </div>
                <h3 className="mt-4 font-display text-2xl">
                  <Link to="/packages/$slug" params={{ slug: p.slug }} className="hover:text-accent transition">
                    {t(p.titleKey)}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(p.descKey)}</p>
                <Link
                  to="/packages/$slug"
                  params={{ slug: p.slug }}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent"
                >
                  {t("pkg.viewItin")} <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
