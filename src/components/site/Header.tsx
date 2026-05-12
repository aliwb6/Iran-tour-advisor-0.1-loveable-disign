import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useI18n } from "@/lib/i18n";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  const nav = [
    { to: "/", label: t("nav.home") },
    { to: "/packages", label: t("nav.journeys") },
    { to: "/guides", label: t("nav.guides") },
    { to: "/magazine", label: t("nav.magazine") },
    { to: "/about", label: t("nav.about") },
    { to: "/chat", label: t("nav.plan") },
  ] as const;

    useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="container-luxe flex h-20 items-center justify-between gap-6">
        <Link to="/" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-gold/60 text-gold transition group-hover:rotate-12">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2l2.4 5.6L20 9l-4.4 4 1.2 6L12 16.5 7.2 19l1.2-6L4 9l5.6-1.4z" />
            </svg>
          </span>
          <div className="leading-tight">
            <div className="font-display text-lg tracking-wide">Iran Tour Advisor</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{t("brand.tagline")}</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="link-underline text-sm font-medium text-foreground/80 transition hover:text-foreground"
              activeProps={{ className: "text-accent" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-border lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="container-luxe flex flex-col py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-foreground/80"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
