import { T as jsxRuntimeExports } from "./server-B79bSASJ.js";
import { c as createLucideIcon, R as Route, u as useI18n, L as Link } from "./router-Vxp-61Ug.js";
import { H as Header, F as Footer } from "./Footer-CpDR_PGs.js";
import { M as Map } from "./map-C_82042K.js";
import { C as Clock } from "./clock-CgUOs2sO.js";
import { A as ArrowRight } from "./arrow-right-Bp8xgqxp.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode);
function PackageDetail() {
  const {
    pkg
  } = Route.useLoaderData();
  const {
    t
  } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[70svh] min-h-[520px] w-full overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: pkg.img, alt: t(pkg.titleKey), className: "absolute inset-0 h-full w-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-foreground/20 via-foreground/30 to-foreground/85" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe relative flex h-full flex-col justify-end pb-16 pt-32 text-background", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/packages", className: "mb-6 text-xs uppercase tracking-[0.3em] text-background/80 hover:text-background", children: t("pkg.back") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.3em] text-gold", children: t("pkg.kicker") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 max-w-3xl font-display text-5xl leading-tight md:text-7xl", children: t(pkg.titleKey) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap items-center gap-5 text-sm text-background/85", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Map, { className: "h-4 w-4" }),
              t(pkg.citiesKey)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4" }),
              pkg.days,
              " ",
              t("pkg.duration").toLowerCase()
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-background/40 px-3 py-1 text-[10px] uppercase tracking-[0.25em]", children: t(`level.${pkg.level}`) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-luxe grid gap-12 py-20 lg:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl leading-relaxed text-foreground/90 md:text-3xl", children: t(pkg.longKey) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-base leading-relaxed text-muted-foreground", children: t(pkg.descKey) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-14 font-display text-3xl", children: t("pkg.itinerary") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "mt-6 space-y-5", children: pkg.itinerary.map((day) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-5 rounded-2xl border border-border/60 bg-card p-5 shadow-soft", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-12 w-12 shrink-0 place-items-center rounded-full bg-foreground text-sm text-background", children: String(day.day).padStart(2, "0") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] uppercase tracking-[0.3em] text-accent", children: [
                "Day ",
                day.day
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-display text-xl", children: day.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: day.description })
            ] })
          ] }, day.day)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-14 font-display text-3xl", children: t("pkg.outcomes") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-4 text-sm text-muted-foreground", children: pkg.outcomes.map((outcome) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-3 flex-shrink-0 bg-accent rounded-full" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: outcome })
          ] }, outcome)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-14 font-display text-3xl", children: t("pkg.includes") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 grid gap-3 sm:grid-cols-2", children: pkg.includes.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 rounded-xl border border-border/60 bg-card p-4 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 text-accent" }),
            " ",
            it
          ] }, it)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "lg:sticky lg:top-28 h-fit rounded-3xl border border-gold/40 bg-card p-7 shadow-luxe", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.3em] text-accent", children: t("pkg.from") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 font-display text-5xl", children: [
            "$",
            pkg.priceFrom.toLocaleString()
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm text-muted-foreground", children: "per traveler" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-3 border-t border-border pt-6 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: t("pkg.duration") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                pkg.days,
                " days"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: t("pkg.level") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t(`level.${pkg.level}`) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: t("pkg.cities") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-end", children: t(pkg.citiesKey) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/builder", className: "mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-foreground px-6 py-4 text-sm text-background transition hover:bg-accent", children: [
            t("pkg.book"),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 rtl:rotate-180" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  PackageDetail as component
};
