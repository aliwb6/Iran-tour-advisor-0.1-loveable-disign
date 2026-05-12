import { T as jsxRuntimeExports } from "./server-B79bSASJ.js";
import { H as Header, F as Footer } from "./Footer-CpDR_PGs.js";
import { u as useI18n, C as ChatBot } from "./router-Vxp-61Ug.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function ChatPage() {
  const {
    t
  } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "container-luxe pt-24 pb-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.3em] text-accent", children: t("cta.kicker") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 font-display text-4xl md:text-5xl", children: t("cta.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-base text-muted-foreground", children: t("ai.desc") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChatBot, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  ChatPage as component
};
