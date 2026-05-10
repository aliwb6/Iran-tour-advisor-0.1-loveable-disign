import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { useI18n } from "@/lib/i18n";
import { guides } from "@/data/site";
import { Star, Mail, Phone, MapPin, Languages, Award } from "lucide-react";

export const Route = createFileRoute("/guides/$slug")({
  loader: ({ params }) => {
    const guide = guides.find((g) => g.slug === params.slug);
    if (!guide) throw notFound();
    return { guide };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.guide.name ?? "Guide"} — Iran Tour Advisor` },
      { name: "description", content: "Local guide profile, expertise, languages and contact." },
    ],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container-luxe pt-40 pb-20">
        <h1 className="font-display text-4xl">404</h1>
        <Link to="/guides" className="mt-4 inline-block text-accent">← Back</Link>
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
  component: GuideDetail,
});

function GuideDetail() {
  const { guide } = Route.useLoaderData();
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container-luxe pt-32 pb-20">
        <Link to="/guides" className="text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-accent">
          {t("guide.back")}
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-3xl shadow-luxe">
              <img src={guide.img} alt={guide.name} className="aspect-[4/5] w-full object-cover" />
            </div>
            <div className="mt-6 rounded-3xl border border-border/60 bg-card p-6 shadow-soft">
              <div className="text-[11px] uppercase tracking-[0.3em] text-accent">{t("guide.contact")}</div>
              <div className="mt-4 space-y-3 text-sm">
                <a href={`mailto:${guide.email}`} className="flex items-center gap-3 text-foreground/85 hover:text-accent">
                  <Mail className="h-4 w-4" /> {guide.email}
                </a>
                <a href={`tel:${guide.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-foreground/85 hover:text-accent">
                  <Phone className="h-4 w-4" /> {guide.phone}
                </a>
                <a
                  href={`https://wa.me/${guide.phone.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm text-background transition hover:bg-accent"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="text-[11px] uppercase tracking-[0.3em] text-accent">{t("guide.kicker")}</div>
            <h1 className="mt-3 font-display text-5xl md:text-6xl">{guide.name}</h1>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-foreground px-3 py-1.5 text-xs text-background">
              <Star className="h-3.5 w-3.5 fill-gold text-gold" /> {guide.rating} {t("guide.rating")}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Info icon={<MapPin className="h-4 w-4" />} label={t("guide.city")} value={guide.city} />
              <Info icon={<Languages className="h-4 w-4" />} label={t("guide.langs")} value={guide.langs} />
              <Info icon={<Award className="h-4 w-4" />} label={t("guide.spec")} value={t(guide.specKey)} />
              <Info icon={<Star className="h-4 w-4" />} label={t("guide.rating")} value={String(guide.rating)} />
            </div>

            <h2 className="mt-12 font-display text-3xl">{t("guide.about")}</h2>
            <p className="mt-4 text-base leading-relaxed text-foreground/85">{t(guide.bioKey)}</p>

            <h2 className="mt-10 font-display text-3xl">{t("guide.skills")}</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {guide.skills.map((s: string) => (
                <span key={s} className="rounded-full border border-border bg-card px-4 py-2 text-xs">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Info({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-soft">
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        {icon} {label}
      </div>
      <div className="mt-2 text-sm font-medium">{value}</div>
    </div>
  );
}
