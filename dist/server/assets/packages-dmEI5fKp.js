import { T as jsxRuntimeExports } from "./server-B79bSASJ.js";
import { u as useI18n, p as packages, L as Link } from "./router-Vxp-61Ug.js";
import { H as Header, F as Footer } from "./Footer-CpDR_PGs.js";
import { M as Map } from "./map-C_82042K.js";
import { C as Clock } from "./clock-CgUOs2sO.js";
import { A as ArrowUpRight } from "./arrow-up-right-vSRUBfLA.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function PackagesPage() {
  const {
    t
  } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "container-luxe pt-40 pb-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.3em] text-accent", children: t("pkg.kicker") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 font-display text-5xl md:text-6xl", children: t("pkg.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-8 lg:grid-cols-3", children: packages.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group flex flex-col overflow-hidden rounded-3xl bg-card shadow-soft hover-lift", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/packages/$slug", params: {
          slug: p.slug
        }, className: "relative aspect-[5/4] overflow-hidden block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: t(p.titleKey), loading: "lazy", className: "h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute end-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[10px] uppercase tracking-[0.25em] backdrop-blur", children: t(`level.${p.level}`) })
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
              "d"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/packages/$slug", params: {
            slug: p.slug
          }, className: "hover:text-accent", children: t(p.titleKey) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: t(p.descKey) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/packages/$slug", params: {
            slug: p.slug
          }, className: "mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent", children: [
            t("pkg.viewItin"),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 rtl:-scale-x-100" })
          ] })
        ] })
      ] }, p.slug)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  PackagesPage as component
};
