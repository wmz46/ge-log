const w = "@wmz46/ge-log", A = "0.0.1", v = "./dist/index.umd.js", j = "./dist/index.es.js", O = "./dist/index.d.ts", $ = "module", B = [
  "dist"
], C = {
  ".": {
    import: "./dist/index.es.js",
    require: "./dist/index.umd.js"
  }
}, x = {
  type: "git",
  url: "https://github.com/wmz46/ge-log"
}, N = {
  registry: "https://npm.pkg.github.com/wmz46"
}, G = {
  dev: "vite",
  build: "vue-tsc --noEmit && vite build",
  "build:lib": "vue-tsc --noEmit && vite build --config ./build/lib.config.ts",
  preview: "vite preview"
}, _ = {}, k = {
  "@vitejs/plugin-vue": "^3.0.2",
  typescript: "^4.6.4",
  vite: "^3.0.6",
  "vite-plugin-dts": "^1.4.1",
  vue: "^3.2.37",
  "vue-tsc": "^0.39.5"
}, z = {
  name: w,
  version: A,
  main: v,
  module: j,
  types: O,
  type: $,
  files: B,
  exports: C,
  repository: x,
  publishConfig: N,
  private: !0,
  scripts: G,
  dependencies: _,
  devDependencies: k
};
var d = /* @__PURE__ */ ((e) => (e[e.TRACE = 1] = "TRACE", e[e.DEBUG = 2] = "DEBUG", e[e.LOG = 3] = "LOG", e[e.INFO = 4] = "INFO", e[e.WARN = 5] = "WARN", e[e.ERROR = 6] = "ERROR", e))(d || {});
const I = {
  ERROR: "color:red",
  WARN: "color:orange",
  DEBUG: "color:gray",
  INFO: "color:green",
  LOG: "color:grean"
}, M = (e) => {
  const n = e.getFullYear(), o = e.getMonth() + 1, t = e.getDate(), a = e.getHours(), m = e.getMinutes(), l = e.getSeconds();
  return `${n}-${o}-${t} ${a}:${m}:${l}`;
}, S = (e) => {
  if (e == null)
    return 0;
  const n = e.match(/%[csdifoO]/g);
  return n == null ? 0 : n.length;
}, i = (e, ...n) => {
  const o = [], t = [];
  for (let p = 0; p < n.length; p++) {
    const u = n[p];
    if (typeof u == "object")
      o.push("%o"), t.push(u);
    else if (typeof u == "string") {
      const h = S(u);
      if (h > 0) {
        o.push(u);
        for (let g = 0; g < h; g++)
          t.push(n[p + g + 1]);
        p += h;
      } else
        o.push("%s"), t.push(u);
    } else
      o.push("%s"), t.push(u);
  }
  const a = {};
  Error.captureStackTrace(a, i);
  const l = (a.stack || "").match(/at .*/g) || [];
  o.push("%c"), t.push(I[d[e]]);
  const E = [
    "",
    "",
    `\u8C03\u7528\u65F6\u95F4\uFF1A${M(new Date())}`,
    `\u65E5\u5FD7\u7EA7\u522B\uFF1A${d[e]}`
  ];
  return l.splice(0, 1), l.length > 0 && (E.push("\u8C03\u7528\u5806\u6808\uFF1A%s"), t.push(`${l.join(`
         `)}`)), o.push(E.join(`
`)), [o.join(" "), ...t];
}, F = console.log, b = console.error, f = console.info, D = console.trace, y = console.warn, R = console.debug;
let s = !0, c = 1;
const r = {
  get version() {
    return z.version;
  },
  get showDetail() {
    return s;
  },
  set showDetail(e) {
    f(e ? "\u5F00\u542F\u65E5\u5FD7\u8BE6\u60C5" : "\u5173\u95ED\u65E5\u5FD7\u8BE6\u60C5"), s = e;
  },
  get level() {
    return c;
  },
  set level(e) {
    f(`\u8BBE\u7F6E\u65E5\u5FD7\u663E\u793A\u7EA7\u522B\u4E3A\uFF1A${d[e]}`), c = e;
  },
  error(...e) {
    c <= 6 && b(...s ? i(6, ...e) : e);
  },
  log(...e) {
    c <= 3 && F(...s ? i(3, ...e) : e);
  },
  info(...e) {
    c <= 4 && f(...s ? i(4, ...e) : e);
  },
  debug(...e) {
    c <= 2 && R(...s ? i(2, ...e) : e);
  },
  trace(...e) {
    c <= 1 && D(...s ? i(1, ...e) : e);
  },
  warn(...e) {
    c <= 5 && y(...s ? i(5, ...e) : e);
  },
  replaceConsole() {
    console.log = function(...e) {
      r.log.call(console, ...e);
    }, console.error = function(...e) {
      r.error.call(console, ...e);
    }, console.debug = function(...e) {
      r.debug.call(console, ...e);
    }, console.trace = function(...e) {
      r.trace.call(console, ...e);
    }, console.info = function(...e) {
      r.info.call(console, ...e);
    }, console.warn = function(...e) {
      r.warn.call(console, ...e);
    };
  }
};
export {
  r as default
};
