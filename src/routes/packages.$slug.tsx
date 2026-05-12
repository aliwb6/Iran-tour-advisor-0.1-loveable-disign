import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { useI18n } from "@/lib/i18n";
import { packages } from "@/data/site";
import { ArrowRight, Clock, Map as MapIcon, Check } from "lucide-react";

export const Route = createFileRoute("/packages/$slug")({
  loader: ({ params }) => {
    const pkg = packages.find((p) => p.slug === params.slug);
    if (!pkg) throw notFound();
    return { pkg };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.pkg.slug ?? "Journey"} — Iran Tour Advisor` },
      { name: "description", content: "Detailed itinerary and inclusions for this curated Iranian journey." },
    ],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container-luxe pt-40 pb-20">
        <h1 className="font-display text-4xl">404</h1>
        <Link to="/packages" className="mt-4 inline-block text-accent">← Back</Link>
      </main>
      <Footer />
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container-luxe pt-40 pb-20">
        <h1 className="font-display text-3xl">{error.message}</h1>
      </main>
      <Footer />
    </div>
  ),
  component: PackageDetail,
});

function PackageDetail() {
  const { pkg } = Route.useLoaderData();
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative h-[70svh] min-h-[520px] w-full overflow-hidden">
          <img src={pkg.img} alt={t(pkg.titleKey)} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 via-foreground/30 to-foreground/85" />
          <div className="container-luxe relative flex h-full flex-col justify-end pb-16 pt-32 text-background">
            <Link to="/packages" className="mb-6 text-xs uppercase tracking-[0.3em] text-background/80 hover:text-background">
              {t("pkg.back")}
            </Link>
            <div className="text-[11px] uppercase tracking-[0.3em] text-gold">{t("pkg.kicker")}</div>
            <h1 className="mt-3 max-w-3xl font-display text-5xl leading-tight md:text-7xl">{t(pkg.titleKey)}</h1>
            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-background/85">
              <span className="inline-flex items-center gap-2"><MapIcon className="h-4 w-4" />{t(pkg.citiesKey)}</span>
              <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4" />{pkg.days} {t("pkg.duration").toLowerCase()}</span>
              <span className="rounded-full border border-background/40 px-3 py-1 text-[10px] uppercase tracking-[0.25em]">
                {t(`level.${pkg.level}`)}
              </span>
            </div>
          </div>
        </section>

        <section className="container-luxe grid gap-12 py-20 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="font-display text-2xl leading-relaxed text-foreground/90 md:text-3xl">{t(pkg.longKey)}</p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">{t(pkg.descKey)}</p>

            <h2 className="mt-14 font-display text-3xl">{t("pkg.itinerary")}</h2>
            <ol className="mt-6 space-y-5">
              {pkg.itinerary.map((day) => (
                <li key={day.day} className="flex gap-5 rounded-2xl border border-border/60 bg-card p-5 shadow-soft">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-foreground text-sm text-background">
                    {String(day.day).padStart(2, "0")}
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-accent">Day {day.day}</div>
                    <div className="mt-1 font-display text-xl">{day.title}</div>
                    <p className="mt-2 text-sm text-muted-foreground">{day.description}</p>
                  </div>
                </li>
              ))}
            </ol>
            
            <h2 className="mt-14 font-display text-3xl">{t("pkg.outcomes")}</h2>
            <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
              {pkg.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-center gap-3">
                  <span className="h-3 w-3 flex-shrink-0 bg-accent rounded-full" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-14 font-display text-3xl">{t("pkg.includes")}</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {pkg.includes.map((it: string) => (
                <li key={it} className="flex items-center gap-3 rounded-xl border border-border/60 bg-card p-4 text-sm">
                  <Check className="h-4 w-4 text-accent" /> {it}
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:sticky lg:top-28 h-fit rounded-3xl border border-gold/40 bg-card p-7 shadow-luxe">
            <div className="text-[11px] uppercase tracking-[0.3em] text-accent">{t("pkg.from")}</div>
            <div className="mt-2 font-display text-5xl">${pkg.priceFrom.toLocaleString()}</div>
            <div className="mt-1 text-sm text-muted-foreground">per traveler</div>
            <div className="mt-6 space-y-3 border-t border-border pt-6 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">{t("pkg.duration")}</span><span>{pkg.days} days</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">{t("pkg.level")}</span><span>{t(`level.${pkg.level}`)}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">{t("pkg.cities")}</span><span className="text-end">{t(pkg.citiesKey)}</span></div>
            </div>
            <Link
              to="/builder"
              className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-foreground px-6 py-4 text-sm text-background transition hover:bg-accent"
            >
              {t("pkg.book")} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
}
