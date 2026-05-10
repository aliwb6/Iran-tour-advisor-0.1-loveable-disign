import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="relative mt-32 overflow-hidden border-t border-border/60 bg-foreground text-background">
      <div className="pattern-persian absolute inset-0 opacity-[0.06]" />
      <div className="container-luxe relative grid gap-12 py-20 md:grid-cols-4">
        <div className="md:col-span-2 max-w-md">
          <div className="font-display text-2xl">Iran Tour Advisor</div>
          <p className="mt-4 text-sm leading-relaxed text-background/70">{t("ftr.intro")}</p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-background/50">{t("ftr.explore")}</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/packages" className="text-background/80 hover:text-accent">{t("nav.journeys")}</Link></li>
            <li><Link to="/guides" className="text-background/80 hover:text-accent">{t("nav.guides")}</Link></li>
            <li><Link to="/magazine" className="text-background/80 hover:text-accent">{t("nav.magazine")}</Link></li>
            <li><Link to="/about" className="text-background/80 hover:text-accent">{t("nav.about")}</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-background/50">{t("ftr.contact")}</div>
          <ul className="mt-4 space-y-2 text-sm text-background/80">
            <li>concierge@irantouradvisor.com</li>
            <li>+98 21 0000 0000</li>
            <li>Tehran · Isfahan · Shiraz</li>
          </ul>
        </div>
      </div>
      <div className="container-luxe relative flex flex-col items-center justify-between gap-3 border-t border-background/10 py-6 text-xs text-background/50 md:flex-row">
        <div>© {new Date().getFullYear()} Iran Tour Advisor. {t("ftr.rights")}</div>
        <div className="uppercase tracking-[0.3em]">{t("ftr.crafted")}</div>
      </div>
    </footer>
  );
}
