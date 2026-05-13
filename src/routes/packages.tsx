import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { useI18n } from "@/lib/i18n";
import { packages } from "@/data/site";
import { Clock, Map as MapIcon, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/packages")({
  head: () => ({ meta: [{ title: "Journeys — Iran Tour Advisor" }, { name: "description", content: "Hand-crafted luxury itineraries across Iran." }] }),
  component: PackagesPage,
});

function PackagesPage() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container-luxe pt-40 pb-20">
        <div className="text-[11px] uppercase tracking-[0.3em] text-accent">{t("pkg.kicker")}</div>
        <h1 className="mt-3 font-display text-5xl md:text-6xl">{t("pkg.title")}</h1>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {packages.map((p) => (
            <Link
              key={p.slug}
              to="/packages/$slug"
              params={{ slug: p.slug }}
              className="group flex flex-col overflow-hidden rounded-3xl bg-card shadow-soft hover-lift"
            >
              <div className="relative aspect-[5/4] overflow-hidden">
                <img src={p.img} alt={t(p.titleKey)} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105" />
                <div className="absolute end-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[10px] uppercase tracking-[0.25em] backdrop-blur">
                  {t(`level.${p.level}`)}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><MapIcon className="h-3.5 w-3.5" />{t(p.citiesKey)}</span>
                  <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{p.days}d</span>
                </div>
                <h3 className="mt-4 font-display text-2xl text-foreground group-hover:text-accent transition-colors">
                  {t(p.titleKey)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(p.descKey)}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
                  {t("pkg.viewItin")} <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
