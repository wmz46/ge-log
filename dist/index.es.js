const d = "0.0.3";
var h = /* @__PURE__ */ ((u) => (u[u.TRACE = 1] = "TRACE", u[u.DEBUG = 2] = "DEBUG", u[u.LOG = 3] = "LOG", u[u.INFO = 4] = "INFO", u[u.WARN = 5] = "WARN", u[u.ERROR = 6] = "ERROR", u))(h || {});
const j = {
  ERROR: "color:red",
  WARN: "color:orange",
  DEBUG: "color:gray",
  INFO: "color:green",
  LOG: "color:grean"
}, y = (u) => {
  const o = u.getFullYear(), t = u.getMonth() + 1, n = u.getDate(), a = u.getHours(), R = u.getMinutes(), s = u.getSeconds();
  return `${o}-${t}-${n} ${a}:${R}:${s}`;
}, _ = (u) => {
  if (u == null)
    return 0;
  const o = u.match(/%[csdifoO]/g);
  return o == null ? 0 : o.length;
}, i = (u, ...o) => {
  const t = [], n = [];
  for (let E = 0; E < o.length; E++) {
    const l = o[E];
    if (typeof l == "object")
      t.push("%o"), n.push(l);
    else if (typeof l == "string") {
      const A = _(l);
      if (A > 0) {
        t.push(l);
        for (let p = 0; p < A; p++)
          n.push(o[E + p + 1]);
        E += A;
      } else
        t.push("%s"), n.push(l);
    } else
      t.push("%s"), n.push(l);
  }
  const a = {};
  Error.captureStackTrace(a, i);
  const s = (a.stack || "").match(/at .*/g) || [];
  t.push("%c"), n.push(j[h[u]]);
  const F = [
    "",
    `\u8C03\u7528\u65F6\u95F4\uFF1A${y(new Date())}`
  ];
  return D && F.push(`\u65E5\u5FD7\u7EA7\u522B\uFF1A${h[u]}`), g && (s.splice(0, 1), f > 0 && s.length > f && s.splice(f, s.length - f), s.length > 0 && F.push(`\u8C03\u7528\u5806\u6808\uFF1A${s.join(`\r
         `)}`)), t.push(F.join(`\r
`)), [t.join(" "), ...n];
}, w = console.log, m = console.error, e = console.info, B = console.trace, k = console.warn, O = console.debug, $ = function(...u) {
  r <= 6 && m(...c ? i(6, ...u) : u);
}, S = function(...u) {
  r <= 3 && w(...c ? i(3, ...u) : u);
}, C = function(...u) {
  r <= 4 && e(...c ? i(4, ...u) : u);
}, G = function(...u) {
  r <= 2 && O(...c ? i(2, ...u) : u);
}, N = function(...u) {
  r <= 1 && B(...c ? i(1, ...u) : u);
}, b = function(...u) {
  r <= 5 && k(...c ? i(5, ...u) : u);
};
let c = !0, D = !0, g = !0, f = 0, r = 1;
const x = {
  get version() {
    return d;
  },
  get showDetail() {
    return c;
  },
  set showDetail(u) {
    e(u ? "\u5F00\u542F\u65E5\u5FD7\u8BE6\u60C5" : "\u5173\u95ED\u65E5\u5FD7\u8BE6\u60C5"), c = u;
  },
  get showLevel() {
    return D;
  },
  set showLevel(u) {
    e(u ? "\u5F00\u542F\u65E5\u5FD7\u7EA7\u522B\u663E\u793A" : "\u5173\u95ED\u65E5\u5FD7\u7EA7\u522B\u663E\u793A"), D = u;
  },
  get showStack() {
    return g;
  },
  set showStack(u) {
    e(u ? "\u5F00\u542F\u5806\u6808\u4FE1\u606F\u663E\u793A" : "\u5173\u95ED\u5806\u6808\u4FE1\u606F\u663E\u793A"), g = u;
  },
  get maxStackLevel() {
    return f;
  },
  set maxStackLevel(u) {
    e("\u9650\u5236\u5806\u6808\u5C42\u7EA7\u6700\u591A\u4E3A" + u + "(0\u4E0D\u9650\u5236)"), f = u;
  },
  get level() {
    return r;
  },
  set level(u) {
    e(`\u8BBE\u7F6E\u65E5\u5FD7\u663E\u793A\u7EA7\u522B\u4E3A\uFF1A${h[u]}`), r = u;
  },
  error: $,
  log: S,
  info: C,
  debug: G,
  trace: N,
  warn: b,
  replaceConsole() {
    console.log = S, console.error = $, console.debug = G, console.trace = N, console.info = C, console.warn = b;
  }
};
export {
  x as default
};
