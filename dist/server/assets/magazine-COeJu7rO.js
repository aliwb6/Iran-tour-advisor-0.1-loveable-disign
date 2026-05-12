import { T as jsxRuntimeExports } from "./server-B79bSASJ.js";
import { u as useI18n, a as articles, L as Link } from "./router-Vxp-61Ug.js";
import { H as Header, F as Footer } from "./Footer-CpDR_PGs.js";
import { A as ArrowUpRight } from "./arrow-up-right-vSRUBfLA.js";
import { C as Clock } from "./clock-CgUOs2sO.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function MagazinePage() {
  const {
    t
  } = useI18n();
  const [hero, ...rest] = articles;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "container-luxe pt-40 pb-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.3em] text-accent", children: t("mag.kicker") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 max-w-3xl font-display text-5xl md:text-6xl text-balance", children: t("mag.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-xl text-muted-foreground", children: t("mag.intro") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/magazine/$slug", params: {
        slug: hero.slug
      }, className: "group mt-14 grid gap-8 overflow-hidden rounded-3xl bg-card shadow-soft hover-lift md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] overflow-hidden md:aspect-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: hero.cover, alt: t(hero.titleKey), className: "h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center p-8 md:p-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] uppercase tracking-[0.3em] text-accent", children: [
            hero.category,
            " · ",
            hero.readMin,
            " ",
            t("mag.min")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-3xl md:text-4xl", children: t(hero.titleKey) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: t(hero.excerptKey) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent", children: [
            t("mag.read"),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 rtl:-scale-x-100" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3", children: rest.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/magazine/$slug", params: {
        slug: a.slug
      }, className: "group flex flex-col overflow-hidden rounded-3xl bg-card shadow-soft hover-lift", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: a.cover, alt: t(a.titleKey), loading: "lazy", className: "h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] text-accent", children: a.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-xl", children: t(a.titleKey) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 line-clamp-3 text-sm text-muted-foreground", children: t(a.excerptKey) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 inline-flex items-center gap-1.5 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5" }),
            " ",
            a.readMin,
            " ",
            t("mag.min")
          ] })
        ] })
      ] }, a.slug)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  MagazinePage as component
};
