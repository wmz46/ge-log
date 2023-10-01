const y = "0.0.4";
var F = /* @__PURE__ */ ((u) => (u[u.TRACE = 1] = "TRACE", u[u.DEBUG = 2] = "DEBUG", u[u.LOG = 3] = "LOG", u[u.INFO = 4] = "INFO", u[u.WARN = 5] = "WARN", u[u.ERROR = 6] = "ERROR", u))(F || {});
const _ = {
  ERROR: "color:red",
  WARN: "color:orange",
  DEBUG: "color:gray",
  INFO: "color:green",
  LOG: "color:grean"
}, b = (u) => {
  const n = u.getFullYear(), e = `${u.getMonth() + 1}`.padStart(2, "0"), o = `${u.getDate()}`.padStart(2, "0"), f = `${u.getHours()}`.padStart(2, "0"), w = `${u.getMinutes()}`.padStart(2, "0"), s = `${u.getSeconds()}`.padStart(2, "0");
  return `${n}-${e}-${o} ${f}:${w}:${s}`;
}, j = (u) => {
  if (u == null)
    return 0;
  const n = u.match(/%[csdifoO]/g);
  return n == null ? 0 : n.length;
}, a = (u, ...n) => {
  const e = [], o = [];
  for (let E = 0; E < n.length; E++) {
    const l = n[E];
    if (typeof l == "object")
      e.push("%o"), o.push(l);
    else if (typeof l == "string") {
      const p = j(l);
      if (p > 0) {
        e.push(l);
        for (let A = 0; A < p; A++)
          o.push(n[E + A + 1]);
        E += p;
      } else
        e.push("%s"), o.push(l);
    } else
      e.push("%s"), o.push(l);
  }
  const f = new Error();
  Error.captureStackTrace(f, a);
  const s = (f.stack || "").match(/at .*/g) || [];
  e.push("%c"), o.push(_[F[u]]);
  const h = [
    "",
    `\u8C03\u7528\u65F6\u95F4\uFF1A${b(new Date())}`
  ];
  return D && h.push(`\u65E5\u5FD7\u7EA7\u522B\uFF1A${F[u]}`), g && (i == 0 ? (h.push("\u8C03\u7528\u5806\u6808\uFF1A"), o.push(f)) : (s.splice(0, 1), i > 0 && s.length > i && s.splice(i, s.length - i), s.length > 0 && h.push(`\u8C03\u7528\u5806\u6808\uFF1A${s.join(`\r
         `)}`))), e.push(h.join(`\r
`)), [e.join(" "), ...o];
}, R = console.log, $ = console.error, t = console.info, S = console.trace, d = console.warn, m = console.debug, B = function(...u) {
  c <= 6 && $(...r ? a(6, ...u) : u);
}, k = function(...u) {
  c <= 3 && R(...r ? a(3, ...u) : u);
}, O = function(...u) {
  c <= 4 && t(...r ? a(4, ...u) : u);
}, C = function(...u) {
  c <= 2 && m(...r ? a(2, ...u) : u);
}, G = function(...u) {
  c <= 1 && S(...r ? a(1, ...u) : u);
}, N = function(...u) {
  c <= 5 && d(...r ? a(5, ...u) : u);
};
let r = !0, D = !0, g = !0, i = 0, c = 1;
const x = {
  get version() {
    return y;
  },
  get showDetail() {
    return r;
  },
  set showDetail(u) {
    t(u ? "\u5F00\u542F\u65E5\u5FD7\u8BE6\u60C5" : "\u5173\u95ED\u65E5\u5FD7\u8BE6\u60C5"), r = u;
  },
  get showLevel() {
    return D;
  },
  set showLevel(u) {
    t(u ? "\u5F00\u542F\u65E5\u5FD7\u7EA7\u522B\u663E\u793A" : "\u5173\u95ED\u65E5\u5FD7\u7EA7\u522B\u663E\u793A"), D = u;
  },
  get showStack() {
    return g;
  },
  set showStack(u) {
    t(u ? "\u5F00\u542F\u5806\u6808\u4FE1\u606F\u663E\u793A" : "\u5173\u95ED\u5806\u6808\u4FE1\u606F\u663E\u793A"), g = u;
  },
  get maxStackLevel() {
    return i;
  },
  set maxStackLevel(u) {
    t("\u9650\u5236\u5806\u6808\u5C42\u7EA7\u6700\u591A\u4E3A" + u + "(0\u4E0D\u9650\u5236)"), i = u;
  },
  get level() {
    return c;
  },
  set level(u) {
    t(`\u8BBE\u7F6E\u65E5\u5FD7\u663E\u793A\u7EA7\u522B\u4E3A\uFF1A${F[u]}`), c = u;
  },
  error: B,
  log: k,
  info: O,
  debug: C,
  trace: G,
  warn: N,
  replaceConsole() {
    console.log = k, console.error = B, console.debug = C, console.trace = G, console.info = O, console.warn = N;
  }
};
export {
  x as default
};
