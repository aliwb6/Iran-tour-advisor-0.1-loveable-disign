import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { useI18n } from "@/lib/i18n";
import { articles } from "@/data/magazine";
import { ArrowUpRight, Clock } from "lucide-react";

export const Route = createFileRoute("/magazine")({
  head: () => ({
    meta: [
      { title: "Magazine — Iran Tour Advisor" },
      { name: "description", content: "Stories, essays and field notes on Persian culture, architecture, food and travel." },
      { property: "og:title", content: "Iran Tour Advisor Magazine" },
      { property: "og:description", content: "Stories from authentic Iran." },
    ],
  }),
  component: MagazinePage,
});

function MagazinePage() {
  const { t } = useI18n();
  const [hero, ...rest] = articles;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container-luxe pt-40 pb-20">
        <div className="text-[11px] uppercase tracking-[0.3em] text-accent">{t("mag.kicker")}</div>
        <h1 className="mt-3 max-w-3xl font-display text-5xl md:text-6xl text-balance">{t("mag.title")}</h1>
        <p className="mt-5 max-w-xl text-muted-foreground">{t("mag.intro")}</p>

        {/* Featured */}
        <Link
          to="/magazine/$slug"
          params={{ slug: hero.slug }}
          className="group mt-14 grid gap-8 overflow-hidden rounded-3xl bg-card shadow-soft hover-lift md:grid-cols-2"
        >
          <div className="aspect-[4/3] overflow-hidden md:aspect-auto">
            <img src={hero.cover} alt={t(hero.titleKey)} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12">
            <div className="text-[10px] uppercase tracking-[0.3em] text-accent">{hero.category} · {hero.readMin} {t("mag.min")}</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">{t(hero.titleKey)}</h2>
            <p className="mt-4 text-muted-foreground">{t(hero.excerptKey)}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
              {t("mag.read")} <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" />
            </span>
          </div>
        </Link>

        {/* Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((a) => (
            <Link
              key={a.slug}
              to="/magazine/$slug"
              params={{ slug: a.slug }}
              className="group flex flex-col overflow-hidden rounded-3xl bg-card shadow-soft hover-lift"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={a.cover} alt={t(a.titleKey)} loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="text-[10px] uppercase tracking-[0.3em] text-accent">{a.category}</div>
                <h3 className="mt-3 font-display text-xl">{t(a.titleKey)}</h3>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{t(a.excerptKey)}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" /> {a.readMin} {t("mag.min")}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
