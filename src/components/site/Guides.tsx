import { Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { guides } from "@/data/site";

export function Guides() {
  const { t } = useI18n();
  return (
    <section className="relative py-28">
      <div className="container-luxe">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="text-[11px] uppercase tracking-[0.3em] text-accent">{t("guide.kicker")}</div>
            <h2 className="mt-4 font-display text-4xl text-balance md:text-5xl">{t("guide.title")}</h2>
          </div>
          <Link to="/guides" className="link-underline text-sm font-medium">{t("guide.viewAll")}</Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {guides.map((g) => (
            <Link
              key={g.slug}
              to="/guides/$slug"
              params={{ slug: g.slug }}
              className="group relative block overflow-hidden rounded-3xl bg-card shadow-soft hover-lift"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={g.img} alt={g.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
              <div className="absolute inset-x-0 bottom-0 m-4 rounded-2xl bg-background/95 p-5 backdrop-blur shadow-soft">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-display text-xl">{g.name}</div>
                    <div className="text-xs text-muted-foreground">{g.city} · {g.langs}</div>
                  </div>
                  <div className="inline-flex items-center gap-1 rounded-full bg-foreground px-2.5 py-1 text-[11px] text-background">
                    <Star className="h-3 w-3 fill-gold text-gold" /> {g.rating}
                  </div>
                </div>
                <div className="mt-3 text-sm text-foreground/80">{t(g.specKey)}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
