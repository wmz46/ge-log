const $ = "@wmz46/ge-log", B = "0.0.2", C = "./dist/index.umd.js", x = "./dist/index.es.js", G = "./dist/index.d.ts", N = "module", _ = [
  "dist"
], k = {
  ".": {
    import: "./dist/index.es.js",
    require: "./dist/index.umd.js"
  }
}, z = {
  type: "git",
  url: "https://github.com/wmz46/ge-log"
}, I = {
  registry: "https://npm.pkg.github.com/wmz46"
}, M = {
  dev: "vite",
  build: "vue-tsc --noEmit && vite build",
  "build:lib": "vue-tsc --noEmit && vite build --config ./build/lib.config.ts",
  preview: "vite preview"
}, S = {}, T = {
  "@vitejs/plugin-vue": "^3.0.2",
  typescript: "^4.6.4",
  vite: "^3.0.6",
  "vite-plugin-dts": "^1.4.1",
  vue: "^3.2.37",
  "vue-tsc": "^0.39.5"
}, U = {
  name: $,
  version: B,
  main: C,
  module: x,
  types: G,
  type: N,
  files: _,
  exports: k,
  repository: z,
  publishConfig: I,
  scripts: M,
  dependencies: S,
  devDependencies: T
};
var d = /* @__PURE__ */ ((e) => (e[e.TRACE = 1] = "TRACE", e[e.DEBUG = 2] = "DEBUG", e[e.LOG = 3] = "LOG", e[e.INFO = 4] = "INFO", e[e.WARN = 5] = "WARN", e[e.ERROR = 6] = "ERROR", e))(d || {});
const W = {
  ERROR: "color:red",
  WARN: "color:orange",
  DEBUG: "color:gray",
  INFO: "color:green",
  LOG: "color:grean"
}, q = (e) => {
  const o = e.getFullYear(), t = e.getMonth() + 1, n = e.getDate(), f = e.getHours(), g = e.getMinutes(), r = e.getSeconds();
  return `${o}-${t}-${n} ${f}:${g}:${r}`;
}, H = (e) => {
  if (e == null)
    return 0;
  const o = e.match(/%[csdifoO]/g);
  return o == null ? 0 : o.length;
}, i = (e, ...o) => {
  const t = [], n = [];
  for (let l = 0; l < o.length; l++) {
    const u = o[l];
    if (typeof u == "object")
      t.push("%o"), n.push(u);
    else if (typeof u == "string") {
      const a = H(u);
      if (a > 0) {
        t.push(u);
        for (let h = 0; h < a; h++)
          n.push(o[l + h + 1]);
        l += a;
      } else
        t.push("%s"), n.push(u);
    } else
      t.push("%s"), n.push(u);
  }
  const f = {};
  Error.captureStackTrace(f, i);
  const r = (f.stack || "").match(/at .*/g) || [];
  t.push("%c"), n.push(W[d[e]]);
  const m = [
    "",
    "",
    `\u8C03\u7528\u65F6\u95F4\uFF1A${q(new Date())}`,
    `\u65E5\u5FD7\u7EA7\u522B\uFF1A${d[e]}`
  ];
  return r.splice(0, 1), r.length > 0 && (m.push("\u8C03\u7528\u5806\u6808\uFF1A%s"), n.push(`${r.join(`
         `)}`)), t.push(m.join(`
`)), [t.join(" "), ...n];
}, E = console.log, F = console.error, p = console.info, b = console.trace, D = console.warn, y = console.debug, R = function(...e) {
  c <= 6 && F(...s ? i(6, ...e) : e);
}, w = function(...e) {
  c <= 3 && E(...s ? i(3, ...e) : e);
}, A = function(...e) {
  c <= 4 && p(...s ? i(4, ...e) : e);
}, j = function(...e) {
  c <= 2 && y(...s ? i(2, ...e) : e);
}, v = function(...e) {
  c <= 1 && b(...s ? i(1, ...e) : e);
}, O = function(...e) {
  c <= 5 && D(...s ? i(5, ...e) : e);
};
let s = !0, c = 1;
const P = {
  get version() {
    return U.version;
  },
  get showDetail() {
    return s;
  },
  set showDetail(e) {
    p(e ? "\u5F00\u542F\u65E5\u5FD7\u8BE6\u60C5" : "\u5173\u95ED\u65E5\u5FD7\u8BE6\u60C5"), s = e;
  },
  get level() {
    return c;
  },
  set level(e) {
    p(`\u8BBE\u7F6E\u65E5\u5FD7\u663E\u793A\u7EA7\u522B\u4E3A\uFF1A${d[e]}`), c = e;
  },
  error: R,
  log: w,
  info: A,
  debug: j,
  trace: v,
  warn: O,
  replaceConsole() {
    console.log = w, console.error = R, console.debug = j, console.trace = v, console.info = A, console.warn = O;
  }
};
export {
  P as default
};
