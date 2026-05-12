import { T as jsxRuntimeExports } from "./server-B79bSASJ.js";
import { H as Header, F as Footer } from "./Footer-CpDR_PGs.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-Vxp-61Ug.js";
const SplitErrorComponent = ({
  error
}) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "container-luxe pt-40 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl", children: error.message }) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
] });
export {
  SplitErrorComponent as errorComponent
};
