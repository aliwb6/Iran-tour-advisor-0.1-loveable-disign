import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { useI18n } from "@/lib/i18n";
import { guides } from "@/data/site";
import { Star } from "lucide-react";

export const Route = createFileRoute("/guides")({
  head: () => ({ meta: [{ title: "Local Guides — Iran Tour Advisor" }, { name: "description", content: "Connect with vetted local guides across Iran." }] }),
  component: GuidesPage,
});

function GuidesPage() {
  const { t } = useI18n();
  // Sort guides by rating (highest first)
  const sortedGuides = [...guides].sort((a, b) => b.rating - a.rating);
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container-luxe pt-40 pb-20">
        <div className="text-[11px] uppercase tracking-[0.3em] text-accent">{t("guide.kicker")}</div>
        <h1 className="mt-3 font-display text-5xl md:text-6xl">{t("guide.title")}</h1>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {sortedGuides.map((g) => (
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
      </main>
      <Footer />
    </div>
  );
}
