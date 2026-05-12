import { r as reactExports, T as jsxRuntimeExports } from "./server-B79bSASJ.js";
import { c as createLucideIcon, u as useI18n, l as LANGS, L as Link } from "./router-Vxp-61Ug.js";
const __iconNode$2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
];
const Globe = createLucideIcon("globe", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
];
const Menu = createLucideIcon("menu", __iconNode$1);
const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode);
function LanguageSwitcher() {
  const [open, setOpen] = reactExports.useState(false);
  const { lang, setLang } = useI18n();
  const current = LANGS.find((l) => l.code === lang);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setOpen((o) => !o),
        className: "inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-foreground/80 backdrop-blur-md transition hover:border-accent/60 hover:text-accent",
        "aria-label": "Change language",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-3.5 w-3.5" }),
          current.code
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute end-0 mt-2 w-44 overflow-hidden rounded-2xl border border-border/70 bg-popover/95 shadow-luxe backdrop-blur-xl animate-in fade-in slide-in-from-top-2", children: LANGS.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => {
          setLang(l.code);
          setOpen(false);
        },
        className: `flex w-full items-center justify-between px-4 py-3 text-sm transition hover:bg-accent/10 ${lang === l.code ? "text-accent" : "text-foreground/80"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: l.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-widest opacity-60", children: l.code })
        ]
      },
      l.code
    )) })
  ] });
}
function Header() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const { t } = useI18n();
  const nav = [
    { to: "/", label: t("nav.home") },
    { to: "/packages", label: t("nav.journeys") },
    { to: "/guides", label: t("nav.guides") },
    { to: "/magazine", label: t("nav.magazine") },
    { to: "/about", label: t("nav.about") },
    { to: "/chat", label: t("nav.plan") }
  ];
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/60" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe flex h-20 items-center justify-between gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "group flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-9 w-9 place-items-center rounded-full border border-gold/60 text-gold transition group-hover:rotate-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", className: "h-5 w-5", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2l2.4 5.6L20 9l-4.4 4 1.2 6L12 16.5 7.2 19l1.2-6L4 9l5.6-1.4z" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg tracking-wide", children: "Iran Tour Advisor" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] text-muted-foreground", children: t("brand.tagline") })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-9 lg:flex", children: nav.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: n.to,
              className: "link-underline text-sm font-medium text-foreground/80 transition hover:text-foreground",
              activeProps: { className: "text-accent" },
              activeOptions: { exact: n.to === "/" },
              children: n.label
            },
            n.to
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LanguageSwitcher, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "grid h-10 w-10 place-items-center rounded-full border border-border lg:hidden",
                onClick: () => setOpen((o) => !o),
                "aria-label": "Menu",
                children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-4 w-4" })
              }
            )
          ] })
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border/60 bg-background/95 backdrop-blur-xl lg:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-luxe flex flex-col py-4", children: nav.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: n.to,
            onClick: () => setOpen(false),
            className: "py-3 text-base font-medium text-foreground/80",
            children: n.label
          },
          n.to
        )) }) })
      ]
    }
  );
}
function Footer() {
  const { t } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative mt-32 overflow-hidden border-t border-border/60 bg-foreground text-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pattern-persian absolute inset-0 opacity-[0.06]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe relative grid gap-12 py-20 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 max-w-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl", children: "Iran Tour Advisor" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-relaxed text-background/70", children: t("ftr.intro") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-background/50", children: t("ftr.explore") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/packages", className: "text-background/80 hover:text-accent", children: t("nav.journeys") }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/guides", className: "text-background/80 hover:text-accent", children: t("nav.guides") }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/magazine", className: "text-background/80 hover:text-accent", children: t("nav.magazine") }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "text-background/80 hover:text-accent", children: t("nav.about") }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-background/50", children: t("ftr.contact") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-2 text-sm text-background/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "concierge@irantouradvisor.com" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "+98 21 0000 0000" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Tehran · Isfahan · Shiraz" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe relative flex flex-col items-center justify-between gap-3 border-t border-background/10 py-6 text-xs text-background/50 md:flex-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Iran Tour Advisor. ",
        t("ftr.rights")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "uppercase tracking-[0.3em]", children: t("ftr.crafted") })
    ] })
  ] });
}
export {
  Footer as F,
  Header as H
};
