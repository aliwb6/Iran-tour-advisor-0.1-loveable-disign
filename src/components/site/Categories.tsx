import architecture from "@/assets/cat-architecture.jpg";
import history from "@/assets/cat-history.jpg";
import nature from "@/assets/cat-nature.jpg";
import desert from "@/assets/cat-desert.jpg";
import food from "@/assets/cat-food.jpg";
import bazaar from "@/assets/cat-bazaar.jpg";
import { useI18n } from "@/lib/i18n";

const categories = [
  { key: "architecture", img: architecture },
  { key: "history", img: history },
  { key: "nature", img: nature },
  { key: "desert", img: desert },
  { key: "food", img: food },
  { key: "bazaar", img: bazaar },
];

export function Categories() {
  const { t } = useI18n();
  return (
    <section className="relative py-28">
      <div className="container-luxe">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="text-[11px] uppercase tracking-[0.3em] text-accent">{t("cat.kicker")}</div>
            <h2 className="mt-4 font-display text-4xl text-balance md:text-5xl">{t("cat.title")}</h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">{t("cat.intro")}</p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <a
              key={c.key}
              href="#"
              className="group relative block aspect-[4/5] overflow-hidden rounded-3xl bg-muted shadow-soft hover-lift"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <img
                src={c.img}
                alt={t(`cat.${c.key}.title`)}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-background">
                <div className="text-[10px] uppercase tracking-[0.3em] text-background/70">
                  {t(`cat.${c.key}.sub`)}
                </div>
                <div className="mt-2 font-display text-3xl">{t(`cat.${c.key}.title`)}</div>
                <div className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] opacity-0 transition group-hover:opacity-100">
                  {t("cat.explore")} →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
