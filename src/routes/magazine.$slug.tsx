import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { useI18n } from "@/lib/i18n";
import { articles } from "@/data/magazine";
import { ArrowLeft, Clock } from "lucide-react";

export const Route = createFileRoute("/magazine/$slug")({
  head: ({ params }) => {
    const a = articles.find((x) => x.slug === params.slug);
    return {
      meta: [
        { title: a ? `${a.slug} — Magazine | Iran Tour Advisor` : "Article — Iran Tour Advisor" },
        { name: "description", content: "Iran Tour Advisor Magazine article." },
      ],
    };
  },
  loader: ({ params }) => {
    const a = articles.find((x) => x.slug === params.slug);
    if (!a) throw notFound();
    return { article: a };
  },
  component: ArticlePage,
  errorComponent: () => <ErrorState />,
  notFoundComponent: () => <ErrorState />,
});

function ErrorState() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container-luxe pt-40 pb-20">
        <p className="text-muted-foreground">{t("mag.notFound")}</p>
        <Link to="/magazine" className="mt-4 inline-flex items-center gap-2 text-accent">
          <ArrowLeft className="h-4 w-4 rtl:rotate-180" /> {t("mag.back")}
        </Link>
      </main>
      <Footer />
    </div>
  );
}

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="relative h-[60svh] min-h-[420px] w-full overflow-hidden">
          <img src={article.cover} alt={t(article.titleKey)} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/30 to-foreground/85" />
          <div className="container-luxe relative flex h-full flex-col justify-end pb-16 text-background">
            <div className="text-[10px] uppercase tracking-[0.3em] text-background/70">{article.category} · {article.readMin} {t("mag.min")}</div>
            <h1 className="mt-3 max-w-3xl font-display text-4xl text-balance md:text-6xl">{t(article.titleKey)}</h1>
          </div>
        </div>

        <article className="container-luxe max-w-3xl py-16">
          <Link to="/magazine" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent">
            <ArrowLeft className="h-4 w-4 rtl:rotate-180" /> {t("mag.back")}
          </Link>
          <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{article.readMin} {t("mag.min")}</span>
            <span>{new Date(article.date).toLocaleDateString()}</span>
          </div>
          <p className="mt-8 whitespace-pre-line text-lg leading-relaxed text-foreground/90">{t(article.bodyKey)}</p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
