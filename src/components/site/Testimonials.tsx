import { useI18n } from "@/lib/i18n";

export function Testimonials() {
  const { t } = useI18n();
  const items = [
    { quote: t("tst.q1"), name: "Élise M.", role: "Paris, France" },
    { quote: t("tst.q2"), name: "Daniel K.", role: "Berlin, Germany" },
    { quote: t("tst.q3"), name: "Sara A.", role: "Dubai, UAE" },
  ];
  return (
    <section className="py-28">
      <div className="container-luxe">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-[11px] uppercase tracking-[0.3em] text-accent">{t("tst.kicker")}</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">{t("tst.title")}</h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <figure key={it.name} className="rounded-3xl border border-border/60 bg-card p-8 shadow-soft hover-lift">
              <div className="font-display text-5xl leading-none text-gold">“</div>
              <blockquote className="mt-2 text-base leading-relaxed text-foreground/85">{it.quote}</blockquote>
              <figcaption className="mt-6 text-sm">
                <div className="font-medium">{it.name}</div>
                <div className="text-muted-foreground">{it.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
