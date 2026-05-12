import { T as jsxRuntimeExports } from "./server-B79bSASJ.js";
import { u as useI18n, L as Link } from "./router-Vxp-61Ug.js";
import { H as Header, F as Footer } from "./Footer-CpDR_PGs.js";
import { A as ArrowLeft } from "./arrow-left-C2vGYm0W.js";
function ErrorState() {
  const {
    t
  } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "container-luxe pt-40 pb-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: t("mag.notFound") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/magazine", className: "mt-4 inline-flex items-center gap-2 text-accent", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4 rtl:rotate-180" }),
        " ",
        t("mag.back")
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  ErrorState as E
};
