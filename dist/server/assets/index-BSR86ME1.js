import { T as jsxRuntimeExports } from "./server-B79bSASJ.js";
import { H as Header, F as Footer } from "./Footer-CpDR_PGs.js";
import { c as createLucideIcon, u as useI18n, L as Link, b as architecture, h as history, n as nature, d as desert, f as food, e as bazaar, p as packages, g as guides, S as Sparkles, i as Send } from "./router-Vxp-61Ug.js";
import { A as ArrowRight } from "./arrow-right-Bp8xgqxp.js";
import { M as Map } from "./map-C_82042K.js";
import { C as Clock } from "./clock-CgUOs2sO.js";
import { A as ArrowUpRight } from "./arrow-up-right-vSRUBfLA.js";
import { S as Star } from "./star-DMa31Pb7.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode);
const hero = "/assets/hero-isfahan-CLkPCMOn.jpg";
function Hero() {
  const { t } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[100svh] min-h-[680px] w-full overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: hero,
        alt: "Persian dome at golden hour in Isfahan",
        className: "absolute inset-0 h-full w-full object-cover",
        width: 1920,
        height: 1080
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/40 to-foreground/85" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pattern-persian absolute inset-0 opacity-[0.05] mix-blend-overlay" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe relative flex h-full flex-col justify-end pb-20 pt-32 text-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal inline-flex items-center gap-3 rounded-full border border-background/30 bg-background/5 px-4 py-1.5 text-[11px] uppercase tracking-[0.3em] backdrop-blur-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-gold" }),
          t("hero.badge")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "reveal reveal-delay-1 mt-8 font-display text-5xl leading-[1.05] text-balance md:text-7xl lg:text-8xl", children: [
          t("hero.title.a"),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic shimmer-text", children: t("hero.title.em") }),
          " ",
          t("hero.title.b")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "reveal reveal-delay-2 mt-6 max-w-xl text-base leading-relaxed text-background/80 md:text-lg", children: t("hero.subtitle") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal reveal-delay-3 mt-10 flex flex-wrap items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/packages",
              className: "group inline-flex items-center gap-3 rounded-full bg-background px-7 py-4 text-sm font-medium text-foreground transition hover:bg-accent hover:text-background",
              children: [
                t("hero.cta.explore"),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => typeof window !== "undefined" && window.dispatchEvent(new CustomEvent("open-chat")),
              className: "inline-flex items-center gap-3 rounded-full border border-background/40 px-7 py-4 text-sm font-medium text-background transition hover:border-background hover:bg-background/10",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-5 w-5 place-items-center rounded-full bg-gold text-foreground text-[10px]", children: "✦" }),
                t("hero.cta.ai")
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reveal reveal-delay-3 mt-14 max-w-4xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass flex flex-col gap-2 rounded-2xl p-2 md:flex-row md:items-center md:gap-0 md:rounded-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 items-center gap-3 px-5 py-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4 text-background/70" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              placeholder: t("hero.search.placeholder"),
              className: "w-full bg-transparent text-sm text-background placeholder:text-background/60 focus:outline-none"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden h-8 w-px bg-background/20 md:block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 py-3 text-sm text-background/80", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "bg-transparent focus:outline-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { className: "text-foreground", children: t("hero.search.any") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { className: "text-foreground", children: t("hero.search.short") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { className: "text-foreground", children: t("hero.search.mid") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { className: "text-foreground", children: t("hero.search.long") })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-xl bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition hover:opacity-90 md:rounded-full", children: t("hero.search.btn") })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 start-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-background/60 animate-float", children: t("hero.scroll") })
  ] });
}
const categories = [
  { key: "architecture", img: architecture },
  { key: "history", img: history },
  { key: "nature", img: nature },
  { key: "desert", img: desert },
  { key: "food", img: food },
  { key: "bazaar", img: bazaar }
];
function Categories() {
  const { t } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.3em] text-accent", children: t("cat.kicker") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl text-balance md:text-5xl", children: t("cat.title") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-sm text-sm text-muted-foreground", children: t("cat.intro") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: categories.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: "#",
        className: "group relative block aspect-[4/5] overflow-hidden rounded-3xl bg-muted shadow-soft hover-lift",
        style: { animationDelay: `${i * 60}ms` },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: c.img,
              alt: t(`cat.${c.key}.title`),
              loading: "lazy",
              className: "absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 p-7 text-background", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] text-background/70", children: t(`cat.${c.key}.sub`) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-display text-3xl", children: t(`cat.${c.key}.title`) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] opacity-0 transition group-hover:opacity-100", children: [
              t("cat.explore"),
              " →"
            ] })
          ] })
        ]
      },
      c.key
    )) })
  ] }) });
}
function Packages() {
  const { t } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-[60%] bg-gradient-to-b from-muted/40 to-transparent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.3em] text-accent", children: t("pkg.kicker") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl text-balance md:text-5xl", children: t("pkg.title") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/packages", className: "link-underline text-sm font-medium", children: t("pkg.viewAll") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-8 lg:grid-cols-3", children: packages.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group flex flex-col overflow-hidden rounded-3xl bg-card shadow-soft hover-lift", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/packages/$slug", params: { slug: p.slug }, className: "relative aspect-[5/4] overflow-hidden block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: p.img,
              alt: t(p.titleKey),
              loading: "lazy",
              className: "h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute end-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-foreground backdrop-blur", children: t(`level.${p.level}`) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col p-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Map, { className: "h-3.5 w-3.5" }),
              t(p.citiesKey)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5" }),
              p.days,
              " ",
              t("pkg.duration").toLowerCase()
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/packages/$slug", params: { slug: p.slug }, className: "hover:text-accent transition", children: t(p.titleKey) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: t(p.descKey) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/packages/$slug",
              params: { slug: p.slug },
              className: "mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent",
              children: [
                t("pkg.viewItin"),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 rtl:-scale-x-100" })
              ]
            }
          )
        ] })
      ] }, p.slug)) })
    ] })
  ] });
}
function Guides() {
  const { t } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.3em] text-accent", children: t("guide.kicker") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl text-balance md:text-5xl", children: t("guide.title") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/guides", className: "link-underline text-sm font-medium", children: t("guide.viewAll") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 md:grid-cols-3", children: guides.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/guides/$slug",
        params: { slug: g.slug },
        className: "group relative block overflow-hidden rounded-3xl bg-card shadow-soft hover-lift",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: g.img, alt: g.name, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 m-4 rounded-2xl bg-background/95 p-5 backdrop-blur shadow-soft", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl", children: g.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                  g.city,
                  " · ",
                  g.langs
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1 rounded-full bg-foreground px-2.5 py-1 text-[11px] text-background", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3 w-3 fill-gold text-gold" }),
                " ",
                g.rating
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-sm text-foreground/80", children: t(g.specKey) })
          ] })
        ]
      },
      g.slug
    )) })
  ] }) });
}
function AiAssistant() {
  const { t } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-luxe", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-[2rem] bg-foreground p-10 text-background md:p-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pattern-persian absolute inset-0 opacity-[0.07]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -end-24 -top-24 h-72 w-72 rounded-full bg-accent/30 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-24 -start-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid gap-12 md:grid-cols-2 md:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/5 px-3 py-1 text-[11px] uppercase tracking-[0.3em] backdrop-blur", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3 text-gold" }),
          " ",
          t("ai.badge")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 font-display text-4xl leading-tight md:text-5xl", children: t("ai.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-md text-background/70", children: t("ai.desc") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-8 space-y-3 text-sm text-background/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: t("ai.b1") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: t("ai.b2") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: t("ai.b3") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => typeof window !== "undefined" && window.dispatchEvent(new CustomEvent("open-chat")),
            className: "mt-10 inline-flex items-center gap-3 rounded-full bg-gold px-7 py-4 text-sm font-medium text-foreground transition hover:scale-105",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }),
              " ",
              t("cta.btn")
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-3xl border-background/10 bg-background/5 p-5 shadow-luxe", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-b border-background/10 pb-3 text-[11px] uppercase tracking-[0.25em] text-background/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-gold" }),
          " ",
          t("ai.concierge")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[80%] rounded-2xl rounded-tl-sm bg-background/10 p-3 text-background/90", children: t("ai.msg1") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ms-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-accent/90 p-3 text-accent-foreground", children: t("ai.msg2") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[85%] rounded-2xl rounded-tl-sm bg-background/10 p-3 text-background/90", children: t("ai.msg3") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-2 rounded-full border border-background/15 bg-background/5 px-4 py-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              placeholder: t("ai.input"),
              className: "w-full bg-transparent text-sm placeholder:text-background/50 focus:outline-none"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "grid h-8 w-8 place-items-center rounded-full bg-gold text-foreground transition hover:scale-105", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-3.5 w-3.5" }) })
        ] })
      ] }) })
    ] })
  ] }) }) });
}
function Testimonials() {
  const { t } = useI18n();
  const items = [
    { quote: t("tst.q1"), name: "Élise M.", role: "Paris, France" },
    { quote: t("tst.q2"), name: "Daniel K.", role: "Berlin, Germany" },
    { quote: t("tst.q3"), name: "Sara A.", role: "Dubai, UAE" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.3em] text-accent", children: t("tst.kicker") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl md:text-5xl", children: t("tst.title") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-6 md:grid-cols-3", children: items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "rounded-3xl border border-border/60 bg-card p-8 shadow-soft hover-lift", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-5xl leading-none text-gold", children: "“" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "mt-2 text-base leading-relaxed text-foreground/85", children: it.quote }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-6 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: it.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: it.role })
      ] })
    ] }, it.name)) })
  ] }) });
}
function CtaBuilder() {
  const { t } = useI18n();
  const openChat = () => {
    if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("open-chat"));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-luxe py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-[2rem] border border-gold/40 bg-gradient-to-br from-secondary to-background p-10 md:p-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pattern-persian absolute inset-0 opacity-[0.08]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -end-20 -top-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-accent", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3 text-gold" }),
          " ",
          t("cta.kicker")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 max-w-xl font-display text-3xl md:text-4xl", children: t("cta.title") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: openChat,
          className: "group inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 text-sm text-background transition hover:bg-accent",
          children: [
            t("cta.btn"),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" })
          ]
        }
      )
    ] })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Packages, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AiAssistant, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Categories, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Guides, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CtaBuilder, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
