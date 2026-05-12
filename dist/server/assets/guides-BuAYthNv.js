import { T as jsxRuntimeExports } from "./server-B79bSASJ.js";
import { u as useI18n, g as guides, L as Link } from "./router-Vxp-61Ug.js";
import { H as Header, F as Footer } from "./Footer-CpDR_PGs.js";
import { S as Star } from "./star-DMa31Pb7.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function GuidesPage() {
  const {
    t
  } = useI18n();
  const sortedGuides = [...guides].sort((a, b) => b.rating - a.rating);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "container-luxe pt-40 pb-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.3em] text-accent", children: t("guide.kicker") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 font-display text-5xl md:text-6xl", children: t("guide.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 md:grid-cols-3", children: sortedGuides.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/guides/$slug", params: {
        slug: g.slug
      }, className: "group relative block overflow-hidden rounded-3xl bg-card shadow-soft hover-lift", children: [
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
      ] }, g.slug)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  GuidesPage as component
};
