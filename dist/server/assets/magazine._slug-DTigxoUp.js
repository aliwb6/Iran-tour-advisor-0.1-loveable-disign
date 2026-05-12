import { T as jsxRuntimeExports } from "./server-B79bSASJ.js";
import { j as Route, u as useI18n, L as Link } from "./router-Vxp-61Ug.js";
import { H as Header, F as Footer } from "./Footer-CpDR_PGs.js";
import { A as ArrowLeft } from "./arrow-left-C2vGYm0W.js";
import { C as Clock } from "./clock-CgUOs2sO.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function ArticlePage() {
  const {
    article
  } = Route.useLoaderData();
  const {
    t
  } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[60svh] min-h-[420px] w-full overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: article.cover, alt: t(article.titleKey), className: "absolute inset-0 h-full w-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/30 to-foreground/85" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxe relative flex h-full flex-col justify-end pb-16 text-background", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] uppercase tracking-[0.3em] text-background/70", children: [
            article.category,
            " · ",
            article.readMin,
            " ",
            t("mag.min")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 max-w-3xl font-display text-4xl text-balance md:text-6xl", children: t(article.titleKey) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "container-luxe max-w-3xl py-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/magazine", className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4 rtl:rotate-180" }),
          " ",
          t("mag.back")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center gap-4 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5" }),
            article.readMin,
            " ",
            t("mag.min")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: new Date(article.date).toLocaleDateString() })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 whitespace-pre-line text-lg leading-relaxed text-foreground/90", children: t(article.bodyKey) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  ArticlePage as component
};
