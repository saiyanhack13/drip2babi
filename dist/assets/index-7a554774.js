(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
var $e =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function fc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var dc = { exports: {} },
  mi = {},
  pc = { exports: {} },
  K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hr = Symbol.for("react.element"),
  ip = Symbol.for("react.portal"),
  op = Symbol.for("react.fragment"),
  ap = Symbol.for("react.strict_mode"),
  sp = Symbol.for("react.profiler"),
  up = Symbol.for("react.provider"),
  cp = Symbol.for("react.context"),
  fp = Symbol.for("react.forward_ref"),
  dp = Symbol.for("react.suspense"),
  pp = Symbol.for("react.memo"),
  mp = Symbol.for("react.lazy"),
  Cs = Symbol.iterator;
function hp(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Cs && e[Cs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var mc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  hc = Object.assign,
  vc = {};
function Qn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = vc),
    (this.updater = n || mc);
}
Qn.prototype.isReactComponent = {};
Qn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Qn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function gc() {}
gc.prototype = Qn.prototype;
function Sa(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = vc),
    (this.updater = n || mc);
}
var Ea = (Sa.prototype = new gc());
Ea.constructor = Sa;
hc(Ea, Qn.prototype);
Ea.isPureReactComponent = !0;
var Ps = Array.isArray,
  yc = Object.prototype.hasOwnProperty,
  ka = { current: null },
  xc = { key: !0, ref: !0, __self: !0, __source: !0 };
function wc(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      yc.call(t, r) && !xc.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var s = Array(a), u = 0; u < a; u++) s[u] = arguments[u + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return {
    $$typeof: Hr,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: ka.current,
  };
}
function vp(e, t) {
  return {
    $$typeof: Hr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ja(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Hr;
}
function gp(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ns = /\/+/g;
function $i(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? gp("" + e.key)
    : t.toString(36);
}
function jl(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Hr:
          case ip:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + $i(o, 0) : r),
      Ps(l)
        ? ((n = ""),
          e != null && (n = e.replace(Ns, "$&/") + "/"),
          jl(l, t, n, "", function (u) {
            return u;
          }))
        : l != null &&
          (ja(l) &&
            (l = vp(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Ns, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Ps(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var s = r + $i(i, a);
      o += jl(i, t, n, s, l);
    }
  else if (((s = hp(e)), typeof s == "function"))
    for (e = s.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + $i(i, a++)), (o += jl(i, t, n, s, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function nl(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    jl(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function yp(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Fe = { current: null },
  Cl = { transition: null },
  xp = {
    ReactCurrentDispatcher: Fe,
    ReactCurrentBatchConfig: Cl,
    ReactCurrentOwner: ka,
  };
K.Children = {
  map: nl,
  forEach: function (e, t, n) {
    nl(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      nl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      nl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ja(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
K.Component = Qn;
K.Fragment = op;
K.Profiler = sp;
K.PureComponent = Sa;
K.StrictMode = ap;
K.Suspense = dp;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xp;
K.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = hc({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = ka.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (s in t)
      yc.call(t, s) &&
        !xc.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    a = Array(s);
    for (var u = 0; u < s; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Hr, type: e.type, key: l, ref: i, props: r, _owner: o };
};
K.createContext = function (e) {
  return (
    (e = {
      $$typeof: cp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: up, _context: e }),
    (e.Consumer = e)
  );
};
K.createElement = wc;
K.createFactory = function (e) {
  var t = wc.bind(null, e);
  return (t.type = e), t;
};
K.createRef = function () {
  return { current: null };
};
K.forwardRef = function (e) {
  return { $$typeof: fp, render: e };
};
K.isValidElement = ja;
K.lazy = function (e) {
  return { $$typeof: mp, _payload: { _status: -1, _result: e }, _init: yp };
};
K.memo = function (e, t) {
  return { $$typeof: pp, type: e, compare: t === void 0 ? null : t };
};
K.startTransition = function (e) {
  var t = Cl.transition;
  Cl.transition = {};
  try {
    e();
  } finally {
    Cl.transition = t;
  }
};
K.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
K.useCallback = function (e, t) {
  return Fe.current.useCallback(e, t);
};
K.useContext = function (e) {
  return Fe.current.useContext(e);
};
K.useDebugValue = function () {};
K.useDeferredValue = function (e) {
  return Fe.current.useDeferredValue(e);
};
K.useEffect = function (e, t) {
  return Fe.current.useEffect(e, t);
};
K.useId = function () {
  return Fe.current.useId();
};
K.useImperativeHandle = function (e, t, n) {
  return Fe.current.useImperativeHandle(e, t, n);
};
K.useInsertionEffect = function (e, t) {
  return Fe.current.useInsertionEffect(e, t);
};
K.useLayoutEffect = function (e, t) {
  return Fe.current.useLayoutEffect(e, t);
};
K.useMemo = function (e, t) {
  return Fe.current.useMemo(e, t);
};
K.useReducer = function (e, t, n) {
  return Fe.current.useReducer(e, t, n);
};
K.useRef = function (e) {
  return Fe.current.useRef(e);
};
K.useState = function (e) {
  return Fe.current.useState(e);
};
K.useSyncExternalStore = function (e, t, n) {
  return Fe.current.useSyncExternalStore(e, t, n);
};
K.useTransition = function () {
  return Fe.current.useTransition();
};
K.version = "18.2.0";
pc.exports = K;
var x = pc.exports;
const G = fc(x);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wp = x,
  Sp = Symbol.for("react.element"),
  Ep = Symbol.for("react.fragment"),
  kp = Object.prototype.hasOwnProperty,
  jp = wp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Cp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Sc(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) kp.call(t, r) && !Cp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Sp,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: jp.current,
  };
}
mi.Fragment = Ep;
mi.jsx = Sc;
mi.jsxs = Sc;
dc.exports = mi;
var c = dc.exports,
  vo = {},
  Ec = { exports: {} },
  Ke = {},
  kc = { exports: {} },
  jc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(E, T) {
    var F = E.length;
    E.push(T);
    e: for (; 0 < F; ) {
      var W = (F - 1) >>> 1,
        V = E[W];
      if (0 < l(V, T)) (E[W] = T), (E[F] = V), (F = W);
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var T = E[0],
      F = E.pop();
    if (F !== T) {
      E[0] = F;
      e: for (var W = 0, V = E.length, re = V >>> 1; W < re; ) {
        var Q = 2 * (W + 1) - 1,
          de = E[Q],
          q = Q + 1,
          Z = E[q];
        if (0 > l(de, F))
          q < V && 0 > l(Z, de)
            ? ((E[W] = Z), (E[q] = F), (W = q))
            : ((E[W] = de), (E[Q] = F), (W = Q));
        else if (q < V && 0 > l(Z, F)) (E[W] = Z), (E[q] = F), (W = q);
        else break e;
      }
    }
    return T;
  }
  function l(E, T) {
    var F = E.sortIndex - T.sortIndex;
    return F !== 0 ? F : E.id - T.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var s = [],
    u = [],
    d = 1,
    p = null,
    h = 3,
    y = !1,
    g = !1,
    w = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(E) {
    for (var T = n(u); T !== null; ) {
      if (T.callback === null) r(u);
      else if (T.startTime <= E)
        r(u), (T.sortIndex = T.expirationTime), t(s, T);
      else break;
      T = n(u);
    }
  }
  function S(E) {
    if (((w = !1), v(E), !g))
      if (n(s) !== null) (g = !0), z(j);
      else {
        var T = n(u);
        T !== null && b(S, T.startTime - E);
      }
  }
  function j(E, T) {
    (g = !1), w && ((w = !1), m(R), (R = -1)), (y = !0);
    var F = h;
    try {
      for (
        v(T), p = n(s);
        p !== null && (!(p.expirationTime > T) || (E && !C()));

      ) {
        var W = p.callback;
        if (typeof W == "function") {
          (p.callback = null), (h = p.priorityLevel);
          var V = W(p.expirationTime <= T);
          (T = e.unstable_now()),
            typeof V == "function" ? (p.callback = V) : p === n(s) && r(s),
            v(T);
        } else r(s);
        p = n(s);
      }
      if (p !== null) var re = !0;
      else {
        var Q = n(u);
        Q !== null && b(S, Q.startTime - T), (re = !1);
      }
      return re;
    } finally {
      (p = null), (h = F), (y = !1);
    }
  }
  var N = !1,
    _ = null,
    R = -1,
    H = 5,
    A = -1;
  function C() {
    return !(e.unstable_now() - A < H);
  }
  function O() {
    if (_ !== null) {
      var E = e.unstable_now();
      A = E;
      var T = !0;
      try {
        T = _(!0, E);
      } finally {
        T ? M() : ((N = !1), (_ = null));
      }
    } else N = !1;
  }
  var M;
  if (typeof f == "function")
    M = function () {
      f(O);
    };
  else if (typeof MessageChannel < "u") {
    var I = new MessageChannel(),
      U = I.port2;
    (I.port1.onmessage = O),
      (M = function () {
        U.postMessage(null);
      });
  } else
    M = function () {
      k(O, 0);
    };
  function z(E) {
    (_ = E), N || ((N = !0), M());
  }
  function b(E, T) {
    R = k(function () {
      E(e.unstable_now());
    }, T);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || y || ((g = !0), z(j));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (H = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (E) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = h;
      }
      var F = h;
      h = T;
      try {
        return E();
      } finally {
        h = F;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, T) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var F = h;
      h = E;
      try {
        return T();
      } finally {
        h = F;
      }
    }),
    (e.unstable_scheduleCallback = function (E, T, F) {
      var W = e.unstable_now();
      switch (
        (typeof F == "object" && F !== null
          ? ((F = F.delay), (F = typeof F == "number" && 0 < F ? W + F : W))
          : (F = W),
        E)
      ) {
        case 1:
          var V = -1;
          break;
        case 2:
          V = 250;
          break;
        case 5:
          V = 1073741823;
          break;
        case 4:
          V = 1e4;
          break;
        default:
          V = 5e3;
      }
      return (
        (V = F + V),
        (E = {
          id: d++,
          callback: T,
          priorityLevel: E,
          startTime: F,
          expirationTime: V,
          sortIndex: -1,
        }),
        F > W
          ? ((E.sortIndex = F),
            t(u, E),
            n(s) === null &&
              E === n(u) &&
              (w ? (m(R), (R = -1)) : (w = !0), b(S, F - W)))
          : ((E.sortIndex = V), t(s, E), g || y || ((g = !0), z(j))),
        E
      );
    }),
    (e.unstable_shouldYield = C),
    (e.unstable_wrapCallback = function (E) {
      var T = h;
      return function () {
        var F = h;
        h = T;
        try {
          return E.apply(this, arguments);
        } finally {
          h = F;
        }
      };
    });
})(jc);
kc.exports = jc;
var Pp = kc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cc = x,
  He = Pp;
function P(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Pc = new Set(),
  Cr = {};
function hn(e, t) {
  Un(e, t), Un(e + "Capture", t);
}
function Un(e, t) {
  for (Cr[e] = t, e = 0; e < t.length; e++) Pc.add(t[e]);
}
var jt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  go = Object.prototype.hasOwnProperty,
  Np =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  _s = {},
  Os = {};
function _p(e) {
  return go.call(Os, e)
    ? !0
    : go.call(_s, e)
    ? !1
    : Np.test(e)
    ? (Os[e] = !0)
    : ((_s[e] = !0), !1);
}
function Op(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Tp(e, t, n, r) {
  if (t === null || typeof t > "u" || Op(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Le(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var Ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ce[e] = new Le(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ce[t] = new Le(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ce[e] = new Le(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ce[e] = new Le(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ce[e] = new Le(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ce[e] = new Le(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ce[e] = new Le(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ce[e] = new Le(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ce[e] = new Le(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ca = /[\-:]([a-z])/g;
function Pa(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ca, Pa);
    Ce[t] = new Le(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ca, Pa);
    Ce[t] = new Le(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ca, Pa);
  Ce[t] = new Le(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ce[e] = new Le(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ce.xlinkHref = new Le(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ce[e] = new Le(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Na(e, t, n, r) {
  var l = Ce.hasOwnProperty(t) ? Ce[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Tp(t, n, l, r) && (n = null),
    r || l === null
      ? _p(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var _t = Cc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  rl = Symbol.for("react.element"),
  Sn = Symbol.for("react.portal"),
  En = Symbol.for("react.fragment"),
  _a = Symbol.for("react.strict_mode"),
  yo = Symbol.for("react.profiler"),
  Nc = Symbol.for("react.provider"),
  _c = Symbol.for("react.context"),
  Oa = Symbol.for("react.forward_ref"),
  xo = Symbol.for("react.suspense"),
  wo = Symbol.for("react.suspense_list"),
  Ta = Symbol.for("react.memo"),
  Dt = Symbol.for("react.lazy"),
  Oc = Symbol.for("react.offscreen"),
  Ts = Symbol.iterator;
function lr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ts && e[Ts]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var se = Object.assign,
  Bi;
function dr(e) {
  if (Bi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Bi = (t && t[1]) || "";
    }
  return (
    `
` +
    Bi +
    e
  );
}
var Vi = !1;
function Wi(e, t) {
  if (!e || Vi) return "";
  Vi = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var l = u.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          a = i.length - 1;
        1 <= o && 0 <= a && l[o] !== i[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (l[o] !== i[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || l[o] !== i[a])) {
                var s =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (Vi = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? dr(e) : "";
}
function Rp(e) {
  switch (e.tag) {
    case 5:
      return dr(e.type);
    case 16:
      return dr("Lazy");
    case 13:
      return dr("Suspense");
    case 19:
      return dr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Wi(e.type, !1)), e;
    case 11:
      return (e = Wi(e.type.render, !1)), e;
    case 1:
      return (e = Wi(e.type, !0)), e;
    default:
      return "";
  }
}
function So(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case En:
      return "Fragment";
    case Sn:
      return "Portal";
    case yo:
      return "Profiler";
    case _a:
      return "StrictMode";
    case xo:
      return "Suspense";
    case wo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case _c:
        return (e.displayName || "Context") + ".Consumer";
      case Nc:
        return (e._context.displayName || "Context") + ".Provider";
      case Oa:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ta:
        return (
          (t = e.displayName || null), t !== null ? t : So(e.type) || "Memo"
        );
      case Dt:
        (t = e._payload), (e = e._init);
        try {
          return So(e(t));
        } catch {}
    }
  return null;
}
function Dp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return So(t);
    case 8:
      return t === _a ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Yt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Tc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Fp(e) {
  var t = Tc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ll(e) {
  e._valueTracker || (e._valueTracker = Fp(e));
}
function Rc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Tc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Al(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Eo(e, t) {
  var n = t.checked;
  return se({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Rs(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Yt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Dc(e, t) {
  (t = t.checked), t != null && Na(e, "checked", t, !1);
}
function ko(e, t) {
  Dc(e, t);
  var n = Yt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? jo(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && jo(e, t.type, Yt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ds(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function jo(e, t, n) {
  (t !== "number" || Al(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var pr = Array.isArray;
function Fn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Yt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Co(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(P(91));
  return se({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Fs(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(P(92));
      if (pr(n)) {
        if (1 < n.length) throw Error(P(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Yt(n) };
}
function Fc(e, t) {
  var n = Yt(t.value),
    r = Yt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Ls(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Lc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Po(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Lc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var il,
  Mc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        il = il || document.createElement("div"),
          il.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = il.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Pr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var vr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Lp = ["Webkit", "ms", "Moz", "O"];
Object.keys(vr).forEach(function (e) {
  Lp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (vr[t] = vr[e]);
  });
});
function zc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (vr.hasOwnProperty(e) && vr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Ic(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = zc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Mp = se(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function No(e, t) {
  if (t) {
    if (Mp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(P(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(P(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(P(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(P(62));
  }
}
function _o(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Oo = null;
function Ra(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var To = null,
  Ln = null,
  Mn = null;
function Ms(e) {
  if ((e = Yr(e))) {
    if (typeof To != "function") throw Error(P(280));
    var t = e.stateNode;
    t && ((t = xi(t)), To(e.stateNode, e.type, t));
  }
}
function Ac(e) {
  Ln ? (Mn ? Mn.push(e) : (Mn = [e])) : (Ln = e);
}
function Uc() {
  if (Ln) {
    var e = Ln,
      t = Mn;
    if (((Mn = Ln = null), Ms(e), t)) for (e = 0; e < t.length; e++) Ms(t[e]);
  }
}
function $c(e, t) {
  return e(t);
}
function Bc() {}
var bi = !1;
function Vc(e, t, n) {
  if (bi) return e(t, n);
  bi = !0;
  try {
    return $c(e, t, n);
  } finally {
    (bi = !1), (Ln !== null || Mn !== null) && (Bc(), Uc());
  }
}
function Nr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = xi(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(P(231, t, typeof n));
  return n;
}
var Ro = !1;
if (jt)
  try {
    var ir = {};
    Object.defineProperty(ir, "passive", {
      get: function () {
        Ro = !0;
      },
    }),
      window.addEventListener("test", ir, ir),
      window.removeEventListener("test", ir, ir);
  } catch {
    Ro = !1;
  }
function zp(e, t, n, r, l, i, o, a, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var gr = !1,
  Ul = null,
  $l = !1,
  Do = null,
  Ip = {
    onError: function (e) {
      (gr = !0), (Ul = e);
    },
  };
function Ap(e, t, n, r, l, i, o, a, s) {
  (gr = !1), (Ul = null), zp.apply(Ip, arguments);
}
function Up(e, t, n, r, l, i, o, a, s) {
  if ((Ap.apply(this, arguments), gr)) {
    if (gr) {
      var u = Ul;
      (gr = !1), (Ul = null);
    } else throw Error(P(198));
    $l || (($l = !0), (Do = u));
  }
}
function vn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Wc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function zs(e) {
  if (vn(e) !== e) throw Error(P(188));
}
function $p(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = vn(e)), t === null)) throw Error(P(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return zs(l), e;
        if (i === r) return zs(l), t;
        i = i.sibling;
      }
      throw Error(P(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, a = l.child; a; ) {
        if (a === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (a === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = i.child; a; ) {
          if (a === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (a === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(P(189));
      }
    }
    if (n.alternate !== r) throw Error(P(190));
  }
  if (n.tag !== 3) throw Error(P(188));
  return n.stateNode.current === n ? e : t;
}
function bc(e) {
  return (e = $p(e)), e !== null ? Hc(e) : null;
}
function Hc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Hc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Kc = He.unstable_scheduleCallback,
  Is = He.unstable_cancelCallback,
  Bp = He.unstable_shouldYield,
  Vp = He.unstable_requestPaint,
  ce = He.unstable_now,
  Wp = He.unstable_getCurrentPriorityLevel,
  Da = He.unstable_ImmediatePriority,
  Qc = He.unstable_UserBlockingPriority,
  Bl = He.unstable_NormalPriority,
  bp = He.unstable_LowPriority,
  Yc = He.unstable_IdlePriority,
  hi = null,
  pt = null;
function Hp(e) {
  if (pt && typeof pt.onCommitFiberRoot == "function")
    try {
      pt.onCommitFiberRoot(hi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ot = Math.clz32 ? Math.clz32 : Yp,
  Kp = Math.log,
  Qp = Math.LN2;
function Yp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Kp(e) / Qp) | 0)) | 0;
}
var ol = 64,
  al = 4194304;
function mr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Vl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~l;
    a !== 0 ? (r = mr(a)) : ((i &= o), i !== 0 && (r = mr(i)));
  } else (o = n & ~l), o !== 0 ? (r = mr(o)) : i !== 0 && (r = mr(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - ot(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Xp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Gp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - ot(i),
      a = 1 << o,
      s = l[o];
    s === -1
      ? (!(a & n) || a & r) && (l[o] = Xp(a, t))
      : s <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function Fo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Xc() {
  var e = ol;
  return (ol <<= 1), !(ol & 4194240) && (ol = 64), e;
}
function Hi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Kr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ot(t)),
    (e[t] = n);
}
function Jp(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - ot(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function Fa(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ot(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var J = 0;
function Gc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Jc,
  La,
  Zc,
  qc,
  ef,
  Lo = !1,
  sl = [],
  Ut = null,
  $t = null,
  Bt = null,
  _r = new Map(),
  Or = new Map(),
  Lt = [],
  Zp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function As(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ut = null;
      break;
    case "dragenter":
    case "dragleave":
      $t = null;
      break;
    case "mouseover":
    case "mouseout":
      Bt = null;
      break;
    case "pointerover":
    case "pointerout":
      _r.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Or.delete(t.pointerId);
  }
}
function or(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = Yr(t)), t !== null && La(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function qp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (Ut = or(Ut, e, t, n, r, l)), !0;
    case "dragenter":
      return ($t = or($t, e, t, n, r, l)), !0;
    case "mouseover":
      return (Bt = or(Bt, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return _r.set(i, or(_r.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Or.set(i, or(Or.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function tf(e) {
  var t = ln(e.target);
  if (t !== null) {
    var n = vn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Wc(n)), t !== null)) {
          (e.blockedOn = t),
            ef(e.priority, function () {
              Zc(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Pl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Mo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Oo = r), n.target.dispatchEvent(r), (Oo = null);
    } else return (t = Yr(n)), t !== null && La(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Us(e, t, n) {
  Pl(e) && n.delete(t);
}
function em() {
  (Lo = !1),
    Ut !== null && Pl(Ut) && (Ut = null),
    $t !== null && Pl($t) && ($t = null),
    Bt !== null && Pl(Bt) && (Bt = null),
    _r.forEach(Us),
    Or.forEach(Us);
}
function ar(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Lo ||
      ((Lo = !0),
      He.unstable_scheduleCallback(He.unstable_NormalPriority, em)));
}
function Tr(e) {
  function t(l) {
    return ar(l, e);
  }
  if (0 < sl.length) {
    ar(sl[0], e);
    for (var n = 1; n < sl.length; n++) {
      var r = sl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Ut !== null && ar(Ut, e),
      $t !== null && ar($t, e),
      Bt !== null && ar(Bt, e),
      _r.forEach(t),
      Or.forEach(t),
      n = 0;
    n < Lt.length;
    n++
  )
    (r = Lt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Lt.length && ((n = Lt[0]), n.blockedOn === null); )
    tf(n), n.blockedOn === null && Lt.shift();
}
var zn = _t.ReactCurrentBatchConfig,
  Wl = !0;
function tm(e, t, n, r) {
  var l = J,
    i = zn.transition;
  zn.transition = null;
  try {
    (J = 1), Ma(e, t, n, r);
  } finally {
    (J = l), (zn.transition = i);
  }
}
function nm(e, t, n, r) {
  var l = J,
    i = zn.transition;
  zn.transition = null;
  try {
    (J = 4), Ma(e, t, n, r);
  } finally {
    (J = l), (zn.transition = i);
  }
}
function Ma(e, t, n, r) {
  if (Wl) {
    var l = Mo(e, t, n, r);
    if (l === null) to(e, t, r, bl, n), As(e, r);
    else if (qp(l, e, t, n, r)) r.stopPropagation();
    else if ((As(e, r), t & 4 && -1 < Zp.indexOf(e))) {
      for (; l !== null; ) {
        var i = Yr(l);
        if (
          (i !== null && Jc(i),
          (i = Mo(e, t, n, r)),
          i === null && to(e, t, r, bl, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else to(e, t, r, null, n);
  }
}
var bl = null;
function Mo(e, t, n, r) {
  if (((bl = null), (e = Ra(r)), (e = ln(e)), e !== null))
    if (((t = vn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Wc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (bl = e), null;
}
function nf(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Wp()) {
        case Da:
          return 1;
        case Qc:
          return 4;
        case Bl:
        case bp:
          return 16;
        case Yc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var zt = null,
  za = null,
  Nl = null;
function rf() {
  if (Nl) return Nl;
  var e,
    t = za,
    n = t.length,
    r,
    l = "value" in zt ? zt.value : zt.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Nl = l.slice(e, 1 < r ? 1 - r : void 0));
}
function _l(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ul() {
  return !0;
}
function $s() {
  return !1;
}
function Qe(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? ul
        : $s),
      (this.isPropagationStopped = $s),
      this
    );
  }
  return (
    se(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ul));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ul));
      },
      persist: function () {},
      isPersistent: ul,
    }),
    t
  );
}
var Yn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ia = Qe(Yn),
  Qr = se({}, Yn, { view: 0, detail: 0 }),
  rm = Qe(Qr),
  Ki,
  Qi,
  sr,
  vi = se({}, Qr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Aa,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== sr &&
            (sr && e.type === "mousemove"
              ? ((Ki = e.screenX - sr.screenX), (Qi = e.screenY - sr.screenY))
              : (Qi = Ki = 0),
            (sr = e)),
          Ki);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Qi;
    },
  }),
  Bs = Qe(vi),
  lm = se({}, vi, { dataTransfer: 0 }),
  im = Qe(lm),
  om = se({}, Qr, { relatedTarget: 0 }),
  Yi = Qe(om),
  am = se({}, Yn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  sm = Qe(am),
  um = se({}, Yn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  cm = Qe(um),
  fm = se({}, Yn, { data: 0 }),
  Vs = Qe(fm),
  dm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  pm = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  mm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function hm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = mm[e]) ? !!t[e] : !1;
}
function Aa() {
  return hm;
}
var vm = se({}, Qr, {
    key: function (e) {
      if (e.key) {
        var t = dm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = _l(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? pm[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Aa,
    charCode: function (e) {
      return e.type === "keypress" ? _l(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? _l(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  gm = Qe(vm),
  ym = se({}, vi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Ws = Qe(ym),
  xm = se({}, Qr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Aa,
  }),
  wm = Qe(xm),
  Sm = se({}, Yn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Em = Qe(Sm),
  km = se({}, vi, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  jm = Qe(km),
  Cm = [9, 13, 27, 32],
  Ua = jt && "CompositionEvent" in window,
  yr = null;
jt && "documentMode" in document && (yr = document.documentMode);
var Pm = jt && "TextEvent" in window && !yr,
  lf = jt && (!Ua || (yr && 8 < yr && 11 >= yr)),
  bs = String.fromCharCode(32),
  Hs = !1;
function of(e, t) {
  switch (e) {
    case "keyup":
      return Cm.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function af(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var kn = !1;
function Nm(e, t) {
  switch (e) {
    case "compositionend":
      return af(t);
    case "keypress":
      return t.which !== 32 ? null : ((Hs = !0), bs);
    case "textInput":
      return (e = t.data), e === bs && Hs ? null : e;
    default:
      return null;
  }
}
function _m(e, t) {
  if (kn)
    return e === "compositionend" || (!Ua && of(e, t))
      ? ((e = rf()), (Nl = za = zt = null), (kn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return lf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Om = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Ks(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Om[e.type] : t === "textarea";
}
function sf(e, t, n, r) {
  Ac(r),
    (t = Hl(t, "onChange")),
    0 < t.length &&
      ((n = new Ia("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var xr = null,
  Rr = null;
function Tm(e) {
  xf(e, 0);
}
function gi(e) {
  var t = Pn(e);
  if (Rc(t)) return e;
}
function Rm(e, t) {
  if (e === "change") return t;
}
var uf = !1;
if (jt) {
  var Xi;
  if (jt) {
    var Gi = "oninput" in document;
    if (!Gi) {
      var Qs = document.createElement("div");
      Qs.setAttribute("oninput", "return;"),
        (Gi = typeof Qs.oninput == "function");
    }
    Xi = Gi;
  } else Xi = !1;
  uf = Xi && (!document.documentMode || 9 < document.documentMode);
}
function Ys() {
  xr && (xr.detachEvent("onpropertychange", cf), (Rr = xr = null));
}
function cf(e) {
  if (e.propertyName === "value" && gi(Rr)) {
    var t = [];
    sf(t, Rr, e, Ra(e)), Vc(Tm, t);
  }
}
function Dm(e, t, n) {
  e === "focusin"
    ? (Ys(), (xr = t), (Rr = n), xr.attachEvent("onpropertychange", cf))
    : e === "focusout" && Ys();
}
function Fm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return gi(Rr);
}
function Lm(e, t) {
  if (e === "click") return gi(t);
}
function Mm(e, t) {
  if (e === "input" || e === "change") return gi(t);
}
function zm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var st = typeof Object.is == "function" ? Object.is : zm;
function Dr(e, t) {
  if (st(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!go.call(t, l) || !st(e[l], t[l])) return !1;
  }
  return !0;
}
function Xs(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Gs(e, t) {
  var n = Xs(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Xs(n);
  }
}
function ff(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? ff(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function df() {
  for (var e = window, t = Al(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Al(e.document);
  }
  return t;
}
function $a(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Im(e) {
  var t = df(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    ff(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && $a(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = Gs(n, i));
        var o = Gs(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Am = jt && "documentMode" in document && 11 >= document.documentMode,
  jn = null,
  zo = null,
  wr = null,
  Io = !1;
function Js(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Io ||
    jn == null ||
    jn !== Al(r) ||
    ((r = jn),
    "selectionStart" in r && $a(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (wr && Dr(wr, r)) ||
      ((wr = r),
      (r = Hl(zo, "onSelect")),
      0 < r.length &&
        ((t = new Ia("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = jn))));
}
function cl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Cn = {
    animationend: cl("Animation", "AnimationEnd"),
    animationiteration: cl("Animation", "AnimationIteration"),
    animationstart: cl("Animation", "AnimationStart"),
    transitionend: cl("Transition", "TransitionEnd"),
  },
  Ji = {},
  pf = {};
jt &&
  ((pf = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Cn.animationend.animation,
    delete Cn.animationiteration.animation,
    delete Cn.animationstart.animation),
  "TransitionEvent" in window || delete Cn.transitionend.transition);
function yi(e) {
  if (Ji[e]) return Ji[e];
  if (!Cn[e]) return e;
  var t = Cn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in pf) return (Ji[e] = t[n]);
  return e;
}
var mf = yi("animationend"),
  hf = yi("animationiteration"),
  vf = yi("animationstart"),
  gf = yi("transitionend"),
  yf = new Map(),
  Zs =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Gt(e, t) {
  yf.set(e, t), hn(t, [e]);
}
for (var Zi = 0; Zi < Zs.length; Zi++) {
  var qi = Zs[Zi],
    Um = qi.toLowerCase(),
    $m = qi[0].toUpperCase() + qi.slice(1);
  Gt(Um, "on" + $m);
}
Gt(mf, "onAnimationEnd");
Gt(hf, "onAnimationIteration");
Gt(vf, "onAnimationStart");
Gt("dblclick", "onDoubleClick");
Gt("focusin", "onFocus");
Gt("focusout", "onBlur");
Gt(gf, "onTransitionEnd");
Un("onMouseEnter", ["mouseout", "mouseover"]);
Un("onMouseLeave", ["mouseout", "mouseover"]);
Un("onPointerEnter", ["pointerout", "pointerover"]);
Un("onPointerLeave", ["pointerout", "pointerover"]);
hn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
hn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
hn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
hn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
hn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
hn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var hr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Bm = new Set("cancel close invalid load scroll toggle".split(" ").concat(hr));
function qs(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Up(r, t, void 0, e), (e.currentTarget = null);
}
function xf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            s = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), s !== i && l.isPropagationStopped())) break e;
          qs(l, a, u), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (s = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          qs(l, a, u), (i = s);
        }
    }
  }
  if ($l) throw ((e = Do), ($l = !1), (Do = null), e);
}
function te(e, t) {
  var n = t[Vo];
  n === void 0 && (n = t[Vo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (wf(t, e, 2, !1), n.add(r));
}
function eo(e, t, n) {
  var r = 0;
  t && (r |= 4), wf(n, e, r, t);
}
var fl = "_reactListening" + Math.random().toString(36).slice(2);
function Fr(e) {
  if (!e[fl]) {
    (e[fl] = !0),
      Pc.forEach(function (n) {
        n !== "selectionchange" && (Bm.has(n) || eo(n, !1, e), eo(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[fl] || ((t[fl] = !0), eo("selectionchange", !1, t));
  }
}
function wf(e, t, n, r) {
  switch (nf(t)) {
    case 1:
      var l = tm;
      break;
    case 4:
      l = nm;
      break;
    default:
      l = Ma;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Ro ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function to(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = ln(a)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Vc(function () {
    var u = i,
      d = Ra(n),
      p = [];
    e: {
      var h = yf.get(e);
      if (h !== void 0) {
        var y = Ia,
          g = e;
        switch (e) {
          case "keypress":
            if (_l(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = gm;
            break;
          case "focusin":
            (g = "focus"), (y = Yi);
            break;
          case "focusout":
            (g = "blur"), (y = Yi);
            break;
          case "beforeblur":
          case "afterblur":
            y = Yi;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = Bs;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = im;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = wm;
            break;
          case mf:
          case hf:
          case vf:
            y = sm;
            break;
          case gf:
            y = Em;
            break;
          case "scroll":
            y = rm;
            break;
          case "wheel":
            y = jm;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = cm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Ws;
        }
        var w = (t & 4) !== 0,
          k = !w && e === "scroll",
          m = w ? (h !== null ? h + "Capture" : null) : h;
        w = [];
        for (var f = u, v; f !== null; ) {
          v = f;
          var S = v.stateNode;
          if (
            (v.tag === 5 &&
              S !== null &&
              ((v = S),
              m !== null && ((S = Nr(f, m)), S != null && w.push(Lr(f, S, v)))),
            k)
          )
            break;
          f = f.return;
        }
        0 < w.length &&
          ((h = new y(h, g, null, n, d)), p.push({ event: h, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          h &&
            n !== Oo &&
            (g = n.relatedTarget || n.fromElement) &&
            (ln(g) || g[Ct]))
        )
          break e;
        if (
          (y || h) &&
          ((h =
            d.window === d
              ? d
              : (h = d.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          y
            ? ((g = n.relatedTarget || n.toElement),
              (y = u),
              (g = g ? ln(g) : null),
              g !== null &&
                ((k = vn(g)), g !== k || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((y = null), (g = u)),
          y !== g)
        ) {
          if (
            ((w = Bs),
            (S = "onMouseLeave"),
            (m = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = Ws),
              (S = "onPointerLeave"),
              (m = "onPointerEnter"),
              (f = "pointer")),
            (k = y == null ? h : Pn(y)),
            (v = g == null ? h : Pn(g)),
            (h = new w(S, f + "leave", y, n, d)),
            (h.target = k),
            (h.relatedTarget = v),
            (S = null),
            ln(d) === u &&
              ((w = new w(m, f + "enter", g, n, d)),
              (w.target = v),
              (w.relatedTarget = k),
              (S = w)),
            (k = S),
            y && g)
          )
            t: {
              for (w = y, m = g, f = 0, v = w; v; v = wn(v)) f++;
              for (v = 0, S = m; S; S = wn(S)) v++;
              for (; 0 < f - v; ) (w = wn(w)), f--;
              for (; 0 < v - f; ) (m = wn(m)), v--;
              for (; f--; ) {
                if (w === m || (m !== null && w === m.alternate)) break t;
                (w = wn(w)), (m = wn(m));
              }
              w = null;
            }
          else w = null;
          y !== null && eu(p, h, y, w, !1),
            g !== null && k !== null && eu(p, k, g, w, !0);
        }
      }
      e: {
        if (
          ((h = u ? Pn(u) : window),
          (y = h.nodeName && h.nodeName.toLowerCase()),
          y === "select" || (y === "input" && h.type === "file"))
        )
          var j = Rm;
        else if (Ks(h))
          if (uf) j = Mm;
          else {
            j = Fm;
            var N = Dm;
          }
        else
          (y = h.nodeName) &&
            y.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (j = Lm);
        if (j && (j = j(e, u))) {
          sf(p, j, n, d);
          break e;
        }
        N && N(e, h, u),
          e === "focusout" &&
            (N = h._wrapperState) &&
            N.controlled &&
            h.type === "number" &&
            jo(h, "number", h.value);
      }
      switch (((N = u ? Pn(u) : window), e)) {
        case "focusin":
          (Ks(N) || N.contentEditable === "true") &&
            ((jn = N), (zo = u), (wr = null));
          break;
        case "focusout":
          wr = zo = jn = null;
          break;
        case "mousedown":
          Io = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Io = !1), Js(p, n, d);
          break;
        case "selectionchange":
          if (Am) break;
        case "keydown":
        case "keyup":
          Js(p, n, d);
      }
      var _;
      if (Ua)
        e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        kn
          ? of(e, n) && (R = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R &&
        (lf &&
          n.locale !== "ko" &&
          (kn || R !== "onCompositionStart"
            ? R === "onCompositionEnd" && kn && (_ = rf())
            : ((zt = d),
              (za = "value" in zt ? zt.value : zt.textContent),
              (kn = !0))),
        (N = Hl(u, R)),
        0 < N.length &&
          ((R = new Vs(R, e, null, n, d)),
          p.push({ event: R, listeners: N }),
          _ ? (R.data = _) : ((_ = af(n)), _ !== null && (R.data = _)))),
        (_ = Pm ? Nm(e, n) : _m(e, n)) &&
          ((u = Hl(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new Vs("onBeforeInput", "beforeinput", null, n, d)),
            p.push({ event: d, listeners: u }),
            (d.data = _)));
    }
    xf(p, t);
  });
}
function Lr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Hl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Nr(e, n)),
      i != null && r.unshift(Lr(e, i, l)),
      (i = Nr(e, t)),
      i != null && r.push(Lr(e, i, l))),
      (e = e.return);
  }
  return r;
}
function wn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function eu(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      s = a.alternate,
      u = a.stateNode;
    if (s !== null && s === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      l
        ? ((s = Nr(n, i)), s != null && o.unshift(Lr(n, s, a)))
        : l || ((s = Nr(n, i)), s != null && o.push(Lr(n, s, a)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Vm = /\r\n?/g,
  Wm = /\u0000|\uFFFD/g;
function tu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Vm,
      `
`
    )
    .replace(Wm, "");
}
function dl(e, t, n) {
  if (((t = tu(t)), tu(e) !== t && n)) throw Error(P(425));
}
function Kl() {}
var Ao = null,
  Uo = null;
function $o(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Bo = typeof setTimeout == "function" ? setTimeout : void 0,
  bm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  nu = typeof Promise == "function" ? Promise : void 0,
  Hm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof nu < "u"
      ? function (e) {
          return nu.resolve(null).then(e).catch(Km);
        }
      : Bo;
function Km(e) {
  setTimeout(function () {
    throw e;
  });
}
function no(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Tr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Tr(t);
}
function Vt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ru(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Xn = Math.random().toString(36).slice(2),
  dt = "__reactFiber$" + Xn,
  Mr = "__reactProps$" + Xn,
  Ct = "__reactContainer$" + Xn,
  Vo = "__reactEvents$" + Xn,
  Qm = "__reactListeners$" + Xn,
  Ym = "__reactHandles$" + Xn;
function ln(e) {
  var t = e[dt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ct] || n[dt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ru(e); e !== null; ) {
          if ((n = e[dt])) return n;
          e = ru(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Yr(e) {
  return (
    (e = e[dt] || e[Ct]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Pn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(P(33));
}
function xi(e) {
  return e[Mr] || null;
}
var Wo = [],
  Nn = -1;
function Jt(e) {
  return { current: e };
}
function ne(e) {
  0 > Nn || ((e.current = Wo[Nn]), (Wo[Nn] = null), Nn--);
}
function ee(e, t) {
  Nn++, (Wo[Nn] = e.current), (e.current = t);
}
var Xt = {},
  Oe = Jt(Xt),
  Ie = Jt(!1),
  cn = Xt;
function $n(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Xt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Ae(e) {
  return (e = e.childContextTypes), e != null;
}
function Ql() {
  ne(Ie), ne(Oe);
}
function lu(e, t, n) {
  if (Oe.current !== Xt) throw Error(P(168));
  ee(Oe, t), ee(Ie, n);
}
function Sf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(P(108, Dp(e) || "Unknown", l));
  return se({}, n, r);
}
function Yl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Xt),
    (cn = Oe.current),
    ee(Oe, e),
    ee(Ie, Ie.current),
    !0
  );
}
function iu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(P(169));
  n
    ? ((e = Sf(e, t, cn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ne(Ie),
      ne(Oe),
      ee(Oe, e))
    : ne(Ie),
    ee(Ie, n);
}
var wt = null,
  wi = !1,
  ro = !1;
function Ef(e) {
  wt === null ? (wt = [e]) : wt.push(e);
}
function Xm(e) {
  (wi = !0), Ef(e);
}
function Zt() {
  if (!ro && wt !== null) {
    ro = !0;
    var e = 0,
      t = J;
    try {
      var n = wt;
      for (J = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (wt = null), (wi = !1);
    } catch (l) {
      throw (wt !== null && (wt = wt.slice(e + 1)), Kc(Da, Zt), l);
    } finally {
      (J = t), (ro = !1);
    }
  }
  return null;
}
var _n = [],
  On = 0,
  Xl = null,
  Gl = 0,
  Xe = [],
  Ge = 0,
  fn = null,
  St = 1,
  Et = "";
function tn(e, t) {
  (_n[On++] = Gl), (_n[On++] = Xl), (Xl = e), (Gl = t);
}
function kf(e, t, n) {
  (Xe[Ge++] = St), (Xe[Ge++] = Et), (Xe[Ge++] = fn), (fn = e);
  var r = St;
  e = Et;
  var l = 32 - ot(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - ot(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (St = (1 << (32 - ot(t) + l)) | (n << l) | r),
      (Et = i + e);
  } else (St = (1 << i) | (n << l) | r), (Et = e);
}
function Ba(e) {
  e.return !== null && (tn(e, 1), kf(e, 1, 0));
}
function Va(e) {
  for (; e === Xl; )
    (Xl = _n[--On]), (_n[On] = null), (Gl = _n[--On]), (_n[On] = null);
  for (; e === fn; )
    (fn = Xe[--Ge]),
      (Xe[Ge] = null),
      (Et = Xe[--Ge]),
      (Xe[Ge] = null),
      (St = Xe[--Ge]),
      (Xe[Ge] = null);
}
var be = null,
  We = null,
  le = !1,
  lt = null;
function jf(e, t) {
  var n = Je(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ou(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (be = e), (We = Vt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (be = e), (We = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = fn !== null ? { id: St, overflow: Et } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Je(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (be = e),
            (We = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function bo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ho(e) {
  if (le) {
    var t = We;
    if (t) {
      var n = t;
      if (!ou(e, t)) {
        if (bo(e)) throw Error(P(418));
        t = Vt(n.nextSibling);
        var r = be;
        t && ou(e, t)
          ? jf(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (le = !1), (be = e));
      }
    } else {
      if (bo(e)) throw Error(P(418));
      (e.flags = (e.flags & -4097) | 2), (le = !1), (be = e);
    }
  }
}
function au(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  be = e;
}
function pl(e) {
  if (e !== be) return !1;
  if (!le) return au(e), (le = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !$o(e.type, e.memoizedProps))),
    t && (t = We))
  ) {
    if (bo(e)) throw (Cf(), Error(P(418)));
    for (; t; ) jf(e, t), (t = Vt(t.nextSibling));
  }
  if ((au(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(P(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              We = Vt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      We = null;
    }
  } else We = be ? Vt(e.stateNode.nextSibling) : null;
  return !0;
}
function Cf() {
  for (var e = We; e; ) e = Vt(e.nextSibling);
}
function Bn() {
  (We = be = null), (le = !1);
}
function Wa(e) {
  lt === null ? (lt = [e]) : lt.push(e);
}
var Gm = _t.ReactCurrentBatchConfig;
function nt(e, t) {
  if (e && e.defaultProps) {
    (t = se({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Jl = Jt(null),
  Zl = null,
  Tn = null,
  ba = null;
function Ha() {
  ba = Tn = Zl = null;
}
function Ka(e) {
  var t = Jl.current;
  ne(Jl), (e._currentValue = t);
}
function Ko(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function In(e, t) {
  (Zl = e),
    (ba = Tn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ze = !0), (e.firstContext = null));
}
function qe(e) {
  var t = e._currentValue;
  if (ba !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Tn === null)) {
      if (Zl === null) throw Error(P(308));
      (Tn = e), (Zl.dependencies = { lanes: 0, firstContext: e });
    } else Tn = Tn.next = e;
  return t;
}
var on = null;
function Qa(e) {
  on === null ? (on = [e]) : on.push(e);
}
function Pf(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Qa(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Pt(e, r)
  );
}
function Pt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Ft = !1;
function Ya(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Nf(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function kt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Wt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), X & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Pt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Qa(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Pt(e, n)
  );
}
function Ol(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Fa(e, n);
  }
}
function su(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ql(e, t, n, r) {
  var l = e.updateQueue;
  Ft = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var s = a,
      u = s.next;
    (s.next = null), o === null ? (i = u) : (o.next = u), (o = s);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== o &&
        (a === null ? (d.firstBaseUpdate = u) : (a.next = u),
        (d.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var p = l.baseState;
    (o = 0), (d = u = s = null), (a = i);
    do {
      var h = a.lane,
        y = a.eventTime;
      if ((r & h) === h) {
        d !== null &&
          (d = d.next =
            {
              eventTime: y,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var g = e,
            w = a;
          switch (((h = t), (y = n), w.tag)) {
            case 1:
              if (((g = w.payload), typeof g == "function")) {
                p = g.call(y, p, h);
                break e;
              }
              p = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = w.payload),
                (h = typeof g == "function" ? g.call(y, p, h) : g),
                h == null)
              )
                break e;
              p = se({}, p, h);
              break e;
            case 2:
              Ft = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (h = l.effects),
          h === null ? (l.effects = [a]) : h.push(a));
      } else
        (y = {
          eventTime: y,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((u = d = y), (s = p)) : (d = d.next = y),
          (o |= h);
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        (h = a),
          (a = h.next),
          (h.next = null),
          (l.lastBaseUpdate = h),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (d === null && (s = p),
      (l.baseState = s),
      (l.firstBaseUpdate = u),
      (l.lastBaseUpdate = d),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (pn |= o), (e.lanes = o), (e.memoizedState = p);
  }
}
function uu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(P(191, l));
        l.call(r);
      }
    }
}
var _f = new Cc.Component().refs;
function Qo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : se({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Si = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? vn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = De(),
      l = Ht(e),
      i = kt(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Wt(e, i, l)),
      t !== null && (at(t, e, l, r), Ol(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = De(),
      l = Ht(e),
      i = kt(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Wt(e, i, l)),
      t !== null && (at(t, e, l, r), Ol(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = De(),
      r = Ht(e),
      l = kt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Wt(e, l, r)),
      t !== null && (at(t, e, r, n), Ol(t, e, r));
  },
};
function cu(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Dr(n, r) || !Dr(l, i)
      : !0
  );
}
function Of(e, t, n) {
  var r = !1,
    l = Xt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = qe(i))
      : ((l = Ae(t) ? cn : Oe.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? $n(e, l) : Xt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Si),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function fu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Si.enqueueReplaceState(t, t.state, null);
}
function Yo(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = _f), Ya(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = qe(i))
    : ((i = Ae(t) ? cn : Oe.current), (l.context = $n(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Qo(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Si.enqueueReplaceState(l, l.state, null),
      ql(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function ur(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(P(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(P(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var a = l.refs;
            a === _f && (a = l.refs = {}),
              o === null ? delete a[i] : (a[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(P(284));
    if (!n._owner) throw Error(P(290, e));
  }
  return e;
}
function ml(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      P(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function du(e) {
  var t = e._init;
  return t(e._payload);
}
function Tf(e) {
  function t(m, f) {
    if (e) {
      var v = m.deletions;
      v === null ? ((m.deletions = [f]), (m.flags |= 16)) : v.push(f);
    }
  }
  function n(m, f) {
    if (!e) return null;
    for (; f !== null; ) t(m, f), (f = f.sibling);
    return null;
  }
  function r(m, f) {
    for (m = new Map(); f !== null; )
      f.key !== null ? m.set(f.key, f) : m.set(f.index, f), (f = f.sibling);
    return m;
  }
  function l(m, f) {
    return (m = Kt(m, f)), (m.index = 0), (m.sibling = null), m;
  }
  function i(m, f, v) {
    return (
      (m.index = v),
      e
        ? ((v = m.alternate),
          v !== null
            ? ((v = v.index), v < f ? ((m.flags |= 2), f) : v)
            : ((m.flags |= 2), f))
        : ((m.flags |= 1048576), f)
    );
  }
  function o(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, f, v, S) {
    return f === null || f.tag !== 6
      ? ((f = co(v, m.mode, S)), (f.return = m), f)
      : ((f = l(f, v)), (f.return = m), f);
  }
  function s(m, f, v, S) {
    var j = v.type;
    return j === En
      ? d(m, f, v.props.children, S, v.key)
      : f !== null &&
        (f.elementType === j ||
          (typeof j == "object" &&
            j !== null &&
            j.$$typeof === Dt &&
            du(j) === f.type))
      ? ((S = l(f, v.props)), (S.ref = ur(m, f, v)), (S.return = m), S)
      : ((S = Ml(v.type, v.key, v.props, null, m.mode, S)),
        (S.ref = ur(m, f, v)),
        (S.return = m),
        S);
  }
  function u(m, f, v, S) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== v.containerInfo ||
      f.stateNode.implementation !== v.implementation
      ? ((f = fo(v, m.mode, S)), (f.return = m), f)
      : ((f = l(f, v.children || [])), (f.return = m), f);
  }
  function d(m, f, v, S, j) {
    return f === null || f.tag !== 7
      ? ((f = un(v, m.mode, S, j)), (f.return = m), f)
      : ((f = l(f, v)), (f.return = m), f);
  }
  function p(m, f, v) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = co("" + f, m.mode, v)), (f.return = m), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case rl:
          return (
            (v = Ml(f.type, f.key, f.props, null, m.mode, v)),
            (v.ref = ur(m, null, f)),
            (v.return = m),
            v
          );
        case Sn:
          return (f = fo(f, m.mode, v)), (f.return = m), f;
        case Dt:
          var S = f._init;
          return p(m, S(f._payload), v);
      }
      if (pr(f) || lr(f))
        return (f = un(f, m.mode, v, null)), (f.return = m), f;
      ml(m, f);
    }
    return null;
  }
  function h(m, f, v, S) {
    var j = f !== null ? f.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return j !== null ? null : a(m, f, "" + v, S);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case rl:
          return v.key === j ? s(m, f, v, S) : null;
        case Sn:
          return v.key === j ? u(m, f, v, S) : null;
        case Dt:
          return (j = v._init), h(m, f, j(v._payload), S);
      }
      if (pr(v) || lr(v)) return j !== null ? null : d(m, f, v, S, null);
      ml(m, v);
    }
    return null;
  }
  function y(m, f, v, S, j) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (m = m.get(v) || null), a(f, m, "" + S, j);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case rl:
          return (m = m.get(S.key === null ? v : S.key) || null), s(f, m, S, j);
        case Sn:
          return (m = m.get(S.key === null ? v : S.key) || null), u(f, m, S, j);
        case Dt:
          var N = S._init;
          return y(m, f, v, N(S._payload), j);
      }
      if (pr(S) || lr(S)) return (m = m.get(v) || null), d(f, m, S, j, null);
      ml(f, S);
    }
    return null;
  }
  function g(m, f, v, S) {
    for (
      var j = null, N = null, _ = f, R = (f = 0), H = null;
      _ !== null && R < v.length;
      R++
    ) {
      _.index > R ? ((H = _), (_ = null)) : (H = _.sibling);
      var A = h(m, _, v[R], S);
      if (A === null) {
        _ === null && (_ = H);
        break;
      }
      e && _ && A.alternate === null && t(m, _),
        (f = i(A, f, R)),
        N === null ? (j = A) : (N.sibling = A),
        (N = A),
        (_ = H);
    }
    if (R === v.length) return n(m, _), le && tn(m, R), j;
    if (_ === null) {
      for (; R < v.length; R++)
        (_ = p(m, v[R], S)),
          _ !== null &&
            ((f = i(_, f, R)), N === null ? (j = _) : (N.sibling = _), (N = _));
      return le && tn(m, R), j;
    }
    for (_ = r(m, _); R < v.length; R++)
      (H = y(_, m, R, v[R], S)),
        H !== null &&
          (e && H.alternate !== null && _.delete(H.key === null ? R : H.key),
          (f = i(H, f, R)),
          N === null ? (j = H) : (N.sibling = H),
          (N = H));
    return (
      e &&
        _.forEach(function (C) {
          return t(m, C);
        }),
      le && tn(m, R),
      j
    );
  }
  function w(m, f, v, S) {
    var j = lr(v);
    if (typeof j != "function") throw Error(P(150));
    if (((v = j.call(v)), v == null)) throw Error(P(151));
    for (
      var N = (j = null), _ = f, R = (f = 0), H = null, A = v.next();
      _ !== null && !A.done;
      R++, A = v.next()
    ) {
      _.index > R ? ((H = _), (_ = null)) : (H = _.sibling);
      var C = h(m, _, A.value, S);
      if (C === null) {
        _ === null && (_ = H);
        break;
      }
      e && _ && C.alternate === null && t(m, _),
        (f = i(C, f, R)),
        N === null ? (j = C) : (N.sibling = C),
        (N = C),
        (_ = H);
    }
    if (A.done) return n(m, _), le && tn(m, R), j;
    if (_ === null) {
      for (; !A.done; R++, A = v.next())
        (A = p(m, A.value, S)),
          A !== null &&
            ((f = i(A, f, R)), N === null ? (j = A) : (N.sibling = A), (N = A));
      return le && tn(m, R), j;
    }
    for (_ = r(m, _); !A.done; R++, A = v.next())
      (A = y(_, m, R, A.value, S)),
        A !== null &&
          (e && A.alternate !== null && _.delete(A.key === null ? R : A.key),
          (f = i(A, f, R)),
          N === null ? (j = A) : (N.sibling = A),
          (N = A));
    return (
      e &&
        _.forEach(function (O) {
          return t(m, O);
        }),
      le && tn(m, R),
      j
    );
  }
  function k(m, f, v, S) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === En &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case rl:
          e: {
            for (var j = v.key, N = f; N !== null; ) {
              if (N.key === j) {
                if (((j = v.type), j === En)) {
                  if (N.tag === 7) {
                    n(m, N.sibling),
                      (f = l(N, v.props.children)),
                      (f.return = m),
                      (m = f);
                    break e;
                  }
                } else if (
                  N.elementType === j ||
                  (typeof j == "object" &&
                    j !== null &&
                    j.$$typeof === Dt &&
                    du(j) === N.type)
                ) {
                  n(m, N.sibling),
                    (f = l(N, v.props)),
                    (f.ref = ur(m, N, v)),
                    (f.return = m),
                    (m = f);
                  break e;
                }
                n(m, N);
                break;
              } else t(m, N);
              N = N.sibling;
            }
            v.type === En
              ? ((f = un(v.props.children, m.mode, S, v.key)),
                (f.return = m),
                (m = f))
              : ((S = Ml(v.type, v.key, v.props, null, m.mode, S)),
                (S.ref = ur(m, f, v)),
                (S.return = m),
                (m = S));
          }
          return o(m);
        case Sn:
          e: {
            for (N = v.key; f !== null; ) {
              if (f.key === N)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === v.containerInfo &&
                  f.stateNode.implementation === v.implementation
                ) {
                  n(m, f.sibling),
                    (f = l(f, v.children || [])),
                    (f.return = m),
                    (m = f);
                  break e;
                } else {
                  n(m, f);
                  break;
                }
              else t(m, f);
              f = f.sibling;
            }
            (f = fo(v, m.mode, S)), (f.return = m), (m = f);
          }
          return o(m);
        case Dt:
          return (N = v._init), k(m, f, N(v._payload), S);
      }
      if (pr(v)) return g(m, f, v, S);
      if (lr(v)) return w(m, f, v, S);
      ml(m, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        f !== null && f.tag === 6
          ? (n(m, f.sibling), (f = l(f, v)), (f.return = m), (m = f))
          : (n(m, f), (f = co(v, m.mode, S)), (f.return = m), (m = f)),
        o(m))
      : n(m, f);
  }
  return k;
}
var Vn = Tf(!0),
  Rf = Tf(!1),
  Xr = {},
  mt = Jt(Xr),
  zr = Jt(Xr),
  Ir = Jt(Xr);
function an(e) {
  if (e === Xr) throw Error(P(174));
  return e;
}
function Xa(e, t) {
  switch ((ee(Ir, t), ee(zr, e), ee(mt, Xr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Po(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Po(t, e));
  }
  ne(mt), ee(mt, t);
}
function Wn() {
  ne(mt), ne(zr), ne(Ir);
}
function Df(e) {
  an(Ir.current);
  var t = an(mt.current),
    n = Po(t, e.type);
  t !== n && (ee(zr, e), ee(mt, n));
}
function Ga(e) {
  zr.current === e && (ne(mt), ne(zr));
}
var oe = Jt(0);
function ei(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var lo = [];
function Ja() {
  for (var e = 0; e < lo.length; e++)
    lo[e]._workInProgressVersionPrimary = null;
  lo.length = 0;
}
var Tl = _t.ReactCurrentDispatcher,
  io = _t.ReactCurrentBatchConfig,
  dn = 0,
  ae = null,
  ye = null,
  we = null,
  ti = !1,
  Sr = !1,
  Ar = 0,
  Jm = 0;
function Pe() {
  throw Error(P(321));
}
function Za(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!st(e[n], t[n])) return !1;
  return !0;
}
function qa(e, t, n, r, l, i) {
  if (
    ((dn = i),
    (ae = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Tl.current = e === null || e.memoizedState === null ? th : nh),
    (e = n(r, l)),
    Sr)
  ) {
    i = 0;
    do {
      if (((Sr = !1), (Ar = 0), 25 <= i)) throw Error(P(301));
      (i += 1),
        (we = ye = null),
        (t.updateQueue = null),
        (Tl.current = rh),
        (e = n(r, l));
    } while (Sr);
  }
  if (
    ((Tl.current = ni),
    (t = ye !== null && ye.next !== null),
    (dn = 0),
    (we = ye = ae = null),
    (ti = !1),
    t)
  )
    throw Error(P(300));
  return e;
}
function es() {
  var e = Ar !== 0;
  return (Ar = 0), e;
}
function ft() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return we === null ? (ae.memoizedState = we = e) : (we = we.next = e), we;
}
function et() {
  if (ye === null) {
    var e = ae.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ye.next;
  var t = we === null ? ae.memoizedState : we.next;
  if (t !== null) (we = t), (ye = e);
  else {
    if (e === null) throw Error(P(310));
    (ye = e),
      (e = {
        memoizedState: ye.memoizedState,
        baseState: ye.baseState,
        baseQueue: ye.baseQueue,
        queue: ye.queue,
        next: null,
      }),
      we === null ? (ae.memoizedState = we = e) : (we = we.next = e);
  }
  return we;
}
function Ur(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function oo(e) {
  var t = et(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = ye,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var a = (o = null),
      s = null,
      u = i;
    do {
      var d = u.lane;
      if ((dn & d) === d)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var p = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        s === null ? ((a = s = p), (o = r)) : (s = s.next = p),
          (ae.lanes |= d),
          (pn |= d);
      }
      u = u.next;
    } while (u !== null && u !== i);
    s === null ? (o = r) : (s.next = a),
      st(r, t.memoizedState) || (ze = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (ae.lanes |= i), (pn |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ao(e) {
  var t = et(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    st(i, t.memoizedState) || (ze = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Ff() {}
function Lf(e, t) {
  var n = ae,
    r = et(),
    l = t(),
    i = !st(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (ze = !0)),
    (r = r.queue),
    ts(If.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (we !== null && we.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      $r(9, zf.bind(null, n, r, l, t), void 0, null),
      Se === null)
    )
      throw Error(P(349));
    dn & 30 || Mf(n, t, l);
  }
  return l;
}
function Mf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ae.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ae.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function zf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Af(t) && Uf(e);
}
function If(e, t, n) {
  return n(function () {
    Af(t) && Uf(e);
  });
}
function Af(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !st(e, n);
  } catch {
    return !0;
  }
}
function Uf(e) {
  var t = Pt(e, 1);
  t !== null && at(t, e, 1, -1);
}
function pu(e) {
  var t = ft();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ur,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = eh.bind(null, ae, e)),
    [t.memoizedState, e]
  );
}
function $r(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ae.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ae.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function $f() {
  return et().memoizedState;
}
function Rl(e, t, n, r) {
  var l = ft();
  (ae.flags |= e),
    (l.memoizedState = $r(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ei(e, t, n, r) {
  var l = et();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ye !== null) {
    var o = ye.memoizedState;
    if (((i = o.destroy), r !== null && Za(r, o.deps))) {
      l.memoizedState = $r(t, n, i, r);
      return;
    }
  }
  (ae.flags |= e), (l.memoizedState = $r(1 | t, n, i, r));
}
function mu(e, t) {
  return Rl(8390656, 8, e, t);
}
function ts(e, t) {
  return Ei(2048, 8, e, t);
}
function Bf(e, t) {
  return Ei(4, 2, e, t);
}
function Vf(e, t) {
  return Ei(4, 4, e, t);
}
function Wf(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function bf(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ei(4, 4, Wf.bind(null, t, e), n)
  );
}
function ns() {}
function Hf(e, t) {
  var n = et();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Za(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Kf(e, t) {
  var n = et();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Za(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Qf(e, t, n) {
  return dn & 21
    ? (st(n, t) || ((n = Xc()), (ae.lanes |= n), (pn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ze = !0)), (e.memoizedState = n));
}
function Zm(e, t) {
  var n = J;
  (J = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = io.transition;
  io.transition = {};
  try {
    e(!1), t();
  } finally {
    (J = n), (io.transition = r);
  }
}
function Yf() {
  return et().memoizedState;
}
function qm(e, t, n) {
  var r = Ht(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Xf(e))
  )
    Gf(t, n);
  else if (((n = Pf(e, t, n, r)), n !== null)) {
    var l = De();
    at(n, e, r, l), Jf(n, t, r);
  }
}
function eh(e, t, n) {
  var r = Ht(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Xf(e)) Gf(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = a), st(a, o))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), Qa(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Pf(e, t, l, r)),
      n !== null && ((l = De()), at(n, e, r, l), Jf(n, t, r));
  }
}
function Xf(e) {
  var t = e.alternate;
  return e === ae || (t !== null && t === ae);
}
function Gf(e, t) {
  Sr = ti = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Jf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Fa(e, n);
  }
}
var ni = {
    readContext: qe,
    useCallback: Pe,
    useContext: Pe,
    useEffect: Pe,
    useImperativeHandle: Pe,
    useInsertionEffect: Pe,
    useLayoutEffect: Pe,
    useMemo: Pe,
    useReducer: Pe,
    useRef: Pe,
    useState: Pe,
    useDebugValue: Pe,
    useDeferredValue: Pe,
    useTransition: Pe,
    useMutableSource: Pe,
    useSyncExternalStore: Pe,
    useId: Pe,
    unstable_isNewReconciler: !1,
  },
  th = {
    readContext: qe,
    useCallback: function (e, t) {
      return (ft().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: qe,
    useEffect: mu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Rl(4194308, 4, Wf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Rl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Rl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = ft();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = ft();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = qm.bind(null, ae, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ft();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: pu,
    useDebugValue: ns,
    useDeferredValue: function (e) {
      return (ft().memoizedState = e);
    },
    useTransition: function () {
      var e = pu(!1),
        t = e[0];
      return (e = Zm.bind(null, e[1])), (ft().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ae,
        l = ft();
      if (le) {
        if (n === void 0) throw Error(P(407));
        n = n();
      } else {
        if (((n = t()), Se === null)) throw Error(P(349));
        dn & 30 || Mf(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        mu(If.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        $r(9, zf.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = ft(),
        t = Se.identifierPrefix;
      if (le) {
        var n = Et,
          r = St;
        (n = (r & ~(1 << (32 - ot(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Ar++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Jm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  nh = {
    readContext: qe,
    useCallback: Hf,
    useContext: qe,
    useEffect: ts,
    useImperativeHandle: bf,
    useInsertionEffect: Bf,
    useLayoutEffect: Vf,
    useMemo: Kf,
    useReducer: oo,
    useRef: $f,
    useState: function () {
      return oo(Ur);
    },
    useDebugValue: ns,
    useDeferredValue: function (e) {
      var t = et();
      return Qf(t, ye.memoizedState, e);
    },
    useTransition: function () {
      var e = oo(Ur)[0],
        t = et().memoizedState;
      return [e, t];
    },
    useMutableSource: Ff,
    useSyncExternalStore: Lf,
    useId: Yf,
    unstable_isNewReconciler: !1,
  },
  rh = {
    readContext: qe,
    useCallback: Hf,
    useContext: qe,
    useEffect: ts,
    useImperativeHandle: bf,
    useInsertionEffect: Bf,
    useLayoutEffect: Vf,
    useMemo: Kf,
    useReducer: ao,
    useRef: $f,
    useState: function () {
      return ao(Ur);
    },
    useDebugValue: ns,
    useDeferredValue: function (e) {
      var t = et();
      return ye === null ? (t.memoizedState = e) : Qf(t, ye.memoizedState, e);
    },
    useTransition: function () {
      var e = ao(Ur)[0],
        t = et().memoizedState;
      return [e, t];
    },
    useMutableSource: Ff,
    useSyncExternalStore: Lf,
    useId: Yf,
    unstable_isNewReconciler: !1,
  };
function bn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Rp(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function so(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Xo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var lh = typeof WeakMap == "function" ? WeakMap : Map;
function Zf(e, t, n) {
  (n = kt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      li || ((li = !0), (ia = r)), Xo(e, t);
    }),
    n
  );
}
function qf(e, t, n) {
  (n = kt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Xo(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Xo(e, t),
          typeof r != "function" &&
            (bt === null ? (bt = new Set([this])) : bt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function hu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new lh();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = yh.bind(null, e, t, n)), t.then(e, e));
}
function vu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function gu(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = kt(-1, 1)), (t.tag = 2), Wt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var ih = _t.ReactCurrentOwner,
  ze = !1;
function Re(e, t, n, r) {
  t.child = e === null ? Rf(t, null, n, r) : Vn(t, e.child, n, r);
}
function yu(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    In(t, l),
    (r = qa(e, t, n, r, i, l)),
    (n = es()),
    e !== null && !ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Nt(e, t, l))
      : (le && n && Ba(t), (t.flags |= 1), Re(e, t, r, l), t.child)
  );
}
function xu(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !cs(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), ed(e, t, i, r, l))
      : ((e = Ml(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Dr), n(o, r) && e.ref === t.ref)
    )
      return Nt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Kt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function ed(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Dr(i, r) && e.ref === t.ref)
      if (((ze = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (ze = !0);
      else return (t.lanes = e.lanes), Nt(e, t, l);
  }
  return Go(e, t, n, r, l);
}
function td(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ee(Dn, Ve),
        (Ve |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ee(Dn, Ve),
          (Ve |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        ee(Dn, Ve),
        (Ve |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ee(Dn, Ve),
      (Ve |= r);
  return Re(e, t, l, n), t.child;
}
function nd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Go(e, t, n, r, l) {
  var i = Ae(n) ? cn : Oe.current;
  return (
    (i = $n(t, i)),
    In(t, l),
    (n = qa(e, t, n, r, i, l)),
    (r = es()),
    e !== null && !ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Nt(e, t, l))
      : (le && r && Ba(t), (t.flags |= 1), Re(e, t, n, l), t.child)
  );
}
function wu(e, t, n, r, l) {
  if (Ae(n)) {
    var i = !0;
    Yl(t);
  } else i = !1;
  if ((In(t, l), t.stateNode === null))
    Dl(e, t), Of(t, n, r), Yo(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var s = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = qe(u))
      : ((u = Ae(n) ? cn : Oe.current), (u = $n(t, u)));
    var d = n.getDerivedStateFromProps,
      p =
        typeof d == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || s !== u) && fu(t, o, r, u)),
      (Ft = !1);
    var h = t.memoizedState;
    (o.state = h),
      ql(t, r, o, l),
      (s = t.memoizedState),
      a !== r || h !== s || Ie.current || Ft
        ? (typeof d == "function" && (Qo(t, n, d, r), (s = t.memoizedState)),
          (a = Ft || cu(t, n, a, r, h, s, u))
            ? (p ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = u),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Nf(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : nt(t.type, a)),
      (o.props = u),
      (p = t.pendingProps),
      (h = o.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = qe(s))
        : ((s = Ae(n) ? cn : Oe.current), (s = $n(t, s)));
    var y = n.getDerivedStateFromProps;
    (d =
      typeof y == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== p || h !== s) && fu(t, o, r, s)),
      (Ft = !1),
      (h = t.memoizedState),
      (o.state = h),
      ql(t, r, o, l);
    var g = t.memoizedState;
    a !== p || h !== g || Ie.current || Ft
      ? (typeof y == "function" && (Qo(t, n, y, r), (g = t.memoizedState)),
        (u = Ft || cu(t, n, u, r, h, g, s) || !1)
          ? (d ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, g, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, g, s)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (o.props = r),
        (o.state = g),
        (o.context = s),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Jo(e, t, n, r, i, l);
}
function Jo(e, t, n, r, l, i) {
  nd(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && iu(t, n, !1), Nt(e, t, i);
  (r = t.stateNode), (ih.current = t);
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Vn(t, e.child, null, i)), (t.child = Vn(t, null, a, i)))
      : Re(e, t, a, i),
    (t.memoizedState = r.state),
    l && iu(t, n, !0),
    t.child
  );
}
function rd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? lu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && lu(e, t.context, !1),
    Xa(e, t.containerInfo);
}
function Su(e, t, n, r, l) {
  return Bn(), Wa(l), (t.flags |= 256), Re(e, t, n, r), t.child;
}
var Zo = { dehydrated: null, treeContext: null, retryLane: 0 };
function qo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ld(e, t, n) {
  var r = t.pendingProps,
    l = oe.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    ee(oe, l & 1),
    e === null)
  )
    return (
      Ho(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = Ci(o, r, 0, null)),
              (e = un(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = qo(n)),
              (t.memoizedState = Zo),
              e)
            : rs(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return oh(e, t, o, r, a, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (a = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = Kt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (i = Kt(a, i)) : ((i = un(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? qo(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Zo),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Kt(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function rs(e, t) {
  return (
    (t = Ci({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function hl(e, t, n, r) {
  return (
    r !== null && Wa(r),
    Vn(t, e.child, null, n),
    (e = rs(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function oh(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = so(Error(P(422)))), hl(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = Ci({ mode: "visible", children: r.children }, l, 0, null)),
        (i = un(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Vn(t, e.child, null, o),
        (t.child.memoizedState = qo(o)),
        (t.memoizedState = Zo),
        i);
  if (!(t.mode & 1)) return hl(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(P(419))), (r = so(i, r, void 0)), hl(e, t, o, r);
  }
  if (((a = (o & e.childLanes) !== 0), ze || a)) {
    if (((r = Se), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Pt(e, l), at(r, e, l, -1));
    }
    return us(), (r = so(Error(P(421)))), hl(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = xh.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (We = Vt(l.nextSibling)),
      (be = t),
      (le = !0),
      (lt = null),
      e !== null &&
        ((Xe[Ge++] = St),
        (Xe[Ge++] = Et),
        (Xe[Ge++] = fn),
        (St = e.id),
        (Et = e.overflow),
        (fn = t)),
      (t = rs(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Eu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ko(e.return, t, n);
}
function uo(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function id(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((Re(e, t, r.children, n), (r = oe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Eu(e, n, t);
        else if (e.tag === 19) Eu(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ee(oe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && ei(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          uo(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && ei(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        uo(t, !0, n, null, i);
        break;
      case "together":
        uo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Dl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Nt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (pn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(P(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Kt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Kt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function ah(e, t, n) {
  switch (t.tag) {
    case 3:
      rd(t), Bn();
      break;
    case 5:
      Df(t);
      break;
    case 1:
      Ae(t.type) && Yl(t);
      break;
    case 4:
      Xa(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      ee(Jl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ee(oe, oe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? ld(e, t, n)
          : (ee(oe, oe.current & 1),
            (e = Nt(e, t, n)),
            e !== null ? e.sibling : null);
      ee(oe, oe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return id(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        ee(oe, oe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), td(e, t, n);
  }
  return Nt(e, t, n);
}
var od, ea, ad, sd;
od = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ea = function () {};
ad = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), an(mt.current);
    var i = null;
    switch (n) {
      case "input":
        (l = Eo(e, l)), (r = Eo(e, r)), (i = []);
        break;
      case "select":
        (l = se({}, l, { value: void 0 })),
          (r = se({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = Co(e, l)), (r = Co(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Kl);
    }
    No(n, r);
    var o;
    n = null;
    for (u in l)
      if (!r.hasOwnProperty(u) && l.hasOwnProperty(u) && l[u] != null)
        if (u === "style") {
          var a = l[u];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Cr.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (
        ((a = l != null ? l[u] : void 0),
        r.hasOwnProperty(u) && s !== a && (s != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in s)
              s.hasOwnProperty(o) &&
                a[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]));
          } else n || (i || (i = []), i.push(u, n)), (n = s);
        else
          u === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (a = a ? a.__html : void 0),
              s != null && a !== s && (i = i || []).push(u, s))
            : u === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(u, "" + s)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Cr.hasOwnProperty(u)
                ? (s != null && u === "onScroll" && te("scroll", e),
                  i || a === s || (i = []))
                : (i = i || []).push(u, s));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
sd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function cr(e, t) {
  if (!le)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ne(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function sh(e, t, n) {
  var r = t.pendingProps;
  switch ((Va(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ne(t), null;
    case 1:
      return Ae(t.type) && Ql(), Ne(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Wn(),
        ne(Ie),
        ne(Oe),
        Ja(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (pl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), lt !== null && (sa(lt), (lt = null)))),
        ea(e, t),
        Ne(t),
        null
      );
    case 5:
      Ga(t);
      var l = an(Ir.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        ad(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(P(166));
          return Ne(t), null;
        }
        if (((e = an(mt.current)), pl(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[dt] = t), (r[Mr] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              te("cancel", r), te("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              te("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < hr.length; l++) te(hr[l], r);
              break;
            case "source":
              te("error", r);
              break;
            case "img":
            case "image":
            case "link":
              te("error", r), te("load", r);
              break;
            case "details":
              te("toggle", r);
              break;
            case "input":
              Rs(r, i), te("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                te("invalid", r);
              break;
            case "textarea":
              Fs(r, i), te("invalid", r);
          }
          No(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var a = i[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      dl(r.textContent, a, e),
                    (l = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      dl(r.textContent, a, e),
                    (l = ["children", "" + a]))
                : Cr.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  te("scroll", r);
            }
          switch (n) {
            case "input":
              ll(r), Ds(r, i, !0);
              break;
            case "textarea":
              ll(r), Ls(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Kl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Lc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[dt] = t),
            (e[Mr] = r),
            od(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = _o(n, r)), n)) {
              case "dialog":
                te("cancel", e), te("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                te("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < hr.length; l++) te(hr[l], e);
                l = r;
                break;
              case "source":
                te("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                te("error", e), te("load", e), (l = r);
                break;
              case "details":
                te("toggle", e), (l = r);
                break;
              case "input":
                Rs(e, r), (l = Eo(e, r)), te("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = se({}, r, { value: void 0 })),
                  te("invalid", e);
                break;
              case "textarea":
                Fs(e, r), (l = Co(e, r)), te("invalid", e);
                break;
              default:
                l = r;
            }
            No(n, l), (a = l);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var s = a[i];
                i === "style"
                  ? Ic(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Mc(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Pr(e, s)
                    : typeof s == "number" && Pr(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Cr.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && te("scroll", e)
                      : s != null && Na(e, i, s, o));
              }
            switch (n) {
              case "input":
                ll(e), Ds(e, r, !1);
                break;
              case "textarea":
                ll(e), Ls(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Yt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Fn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Fn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Kl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ne(t), null;
    case 6:
      if (e && t.stateNode != null) sd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(P(166));
        if (((n = an(Ir.current)), an(mt.current), pl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[dt] = t),
            (i = r.nodeValue !== n) && ((e = be), e !== null))
          )
            switch (e.tag) {
              case 3:
                dl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  dl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[dt] = t),
            (t.stateNode = r);
      }
      return Ne(t), null;
    case 13:
      if (
        (ne(oe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (le && We !== null && t.mode & 1 && !(t.flags & 128))
          Cf(), Bn(), (t.flags |= 98560), (i = !1);
        else if (((i = pl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(P(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(P(317));
            i[dt] = t;
          } else
            Bn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ne(t), (i = !1);
        } else lt !== null && (sa(lt), (lt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || oe.current & 1 ? xe === 0 && (xe = 3) : us())),
          t.updateQueue !== null && (t.flags |= 4),
          Ne(t),
          null);
    case 4:
      return (
        Wn(), ea(e, t), e === null && Fr(t.stateNode.containerInfo), Ne(t), null
      );
    case 10:
      return Ka(t.type._context), Ne(t), null;
    case 17:
      return Ae(t.type) && Ql(), Ne(t), null;
    case 19:
      if ((ne(oe), (i = t.memoizedState), i === null)) return Ne(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) cr(i, !1);
        else {
          if (xe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = ei(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    cr(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ee(oe, (oe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ce() > Hn &&
            ((t.flags |= 128), (r = !0), cr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ei(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              cr(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !le)
            )
              return Ne(t), null;
          } else
            2 * ce() - i.renderingStartTime > Hn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), cr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ce()),
          (t.sibling = null),
          (n = oe.current),
          ee(oe, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ne(t), null);
    case 22:
    case 23:
      return (
        ss(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ve & 1073741824 && (Ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ne(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(P(156, t.tag));
}
function uh(e, t) {
  switch ((Va(t), t.tag)) {
    case 1:
      return (
        Ae(t.type) && Ql(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Wn(),
        ne(Ie),
        ne(Oe),
        Ja(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ga(t), null;
    case 13:
      if (
        (ne(oe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(P(340));
        Bn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ne(oe), null;
    case 4:
      return Wn(), null;
    case 10:
      return Ka(t.type._context), null;
    case 22:
    case 23:
      return ss(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var vl = !1,
  _e = !1,
  ch = typeof WeakSet == "function" ? WeakSet : Set,
  L = null;
function Rn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ue(e, t, r);
      }
    else n.current = null;
}
function ta(e, t, n) {
  try {
    n();
  } catch (r) {
    ue(e, t, r);
  }
}
var ku = !1;
function fh(e, t) {
  if (((Ao = Wl), (e = df()), $a(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            s = -1,
            u = 0,
            d = 0,
            p = e,
            h = null;
          t: for (;;) {
            for (
              var y;
              p !== n || (l !== 0 && p.nodeType !== 3) || (a = o + l),
                p !== i || (r !== 0 && p.nodeType !== 3) || (s = o + r),
                p.nodeType === 3 && (o += p.nodeValue.length),
                (y = p.firstChild) !== null;

            )
              (h = p), (p = y);
            for (;;) {
              if (p === e) break t;
              if (
                (h === n && ++u === l && (a = o),
                h === i && ++d === r && (s = o),
                (y = p.nextSibling) !== null)
              )
                break;
              (p = h), (h = p.parentNode);
            }
            p = y;
          }
          n = a === -1 || s === -1 ? null : { start: a, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Uo = { focusedElem: e, selectionRange: n }, Wl = !1, L = t; L !== null; )
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (L = e);
    else
      for (; L !== null; ) {
        t = L;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var w = g.memoizedProps,
                    k = g.memoizedState,
                    m = t.stateNode,
                    f = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : nt(t.type, w),
                      k
                    );
                  m.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(P(163));
            }
        } catch (S) {
          ue(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (L = e);
          break;
        }
        L = t.return;
      }
  return (g = ku), (ku = !1), g;
}
function Er(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && ta(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function ki(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function na(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function ud(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), ud(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[dt], delete t[Mr], delete t[Vo], delete t[Qm], delete t[Ym])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function cd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ju(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || cd(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ra(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Kl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ra(e, t, n), e = e.sibling; e !== null; ) ra(e, t, n), (e = e.sibling);
}
function la(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (la(e, t, n), e = e.sibling; e !== null; ) la(e, t, n), (e = e.sibling);
}
var ke = null,
  rt = !1;
function Tt(e, t, n) {
  for (n = n.child; n !== null; ) fd(e, t, n), (n = n.sibling);
}
function fd(e, t, n) {
  if (pt && typeof pt.onCommitFiberUnmount == "function")
    try {
      pt.onCommitFiberUnmount(hi, n);
    } catch {}
  switch (n.tag) {
    case 5:
      _e || Rn(n, t);
    case 6:
      var r = ke,
        l = rt;
      (ke = null),
        Tt(e, t, n),
        (ke = r),
        (rt = l),
        ke !== null &&
          (rt
            ? ((e = ke),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ke.removeChild(n.stateNode));
      break;
    case 18:
      ke !== null &&
        (rt
          ? ((e = ke),
            (n = n.stateNode),
            e.nodeType === 8
              ? no(e.parentNode, n)
              : e.nodeType === 1 && no(e, n),
            Tr(e))
          : no(ke, n.stateNode));
      break;
    case 4:
      (r = ke),
        (l = rt),
        (ke = n.stateNode.containerInfo),
        (rt = !0),
        Tt(e, t, n),
        (ke = r),
        (rt = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !_e &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && ta(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      Tt(e, t, n);
      break;
    case 1:
      if (
        !_e &&
        (Rn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ue(n, t, a);
        }
      Tt(e, t, n);
      break;
    case 21:
      Tt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((_e = (r = _e) || n.memoizedState !== null), Tt(e, t, n), (_e = r))
        : Tt(e, t, n);
      break;
    default:
      Tt(e, t, n);
  }
}
function Cu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new ch()),
      t.forEach(function (r) {
        var l = wh.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function tt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (ke = a.stateNode), (rt = !1);
              break e;
            case 3:
              (ke = a.stateNode.containerInfo), (rt = !0);
              break e;
            case 4:
              (ke = a.stateNode.containerInfo), (rt = !0);
              break e;
          }
          a = a.return;
        }
        if (ke === null) throw Error(P(160));
        fd(i, o, l), (ke = null), (rt = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (u) {
        ue(l, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) dd(t, e), (t = t.sibling);
}
function dd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((tt(t, e), ut(e), r & 4)) {
        try {
          Er(3, e, e.return), ki(3, e);
        } catch (w) {
          ue(e, e.return, w);
        }
        try {
          Er(5, e, e.return);
        } catch (w) {
          ue(e, e.return, w);
        }
      }
      break;
    case 1:
      tt(t, e), ut(e), r & 512 && n !== null && Rn(n, n.return);
      break;
    case 5:
      if (
        (tt(t, e),
        ut(e),
        r & 512 && n !== null && Rn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Pr(l, "");
        } catch (w) {
          ue(e, e.return, w);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          a = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && Dc(l, i),
              _o(a, o);
            var u = _o(a, i);
            for (o = 0; o < s.length; o += 2) {
              var d = s[o],
                p = s[o + 1];
              d === "style"
                ? Ic(l, p)
                : d === "dangerouslySetInnerHTML"
                ? Mc(l, p)
                : d === "children"
                ? Pr(l, p)
                : Na(l, d, p, u);
            }
            switch (a) {
              case "input":
                ko(l, i);
                break;
              case "textarea":
                Fc(l, i);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var y = i.value;
                y != null
                  ? Fn(l, !!i.multiple, y, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Fn(l, !!i.multiple, i.defaultValue, !0)
                      : Fn(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[Mr] = i;
          } catch (w) {
            ue(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((tt(t, e), ut(e), r & 4)) {
        if (e.stateNode === null) throw Error(P(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (w) {
          ue(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (tt(t, e), ut(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Tr(t.containerInfo);
        } catch (w) {
          ue(e, e.return, w);
        }
      break;
    case 4:
      tt(t, e), ut(e);
      break;
    case 13:
      tt(t, e),
        ut(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (os = ce())),
        r & 4 && Cu(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((_e = (u = _e) || d), tt(t, e), (_e = u)) : tt(t, e),
        ut(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (L = e, d = e.child; d !== null; ) {
            for (p = L = d; L !== null; ) {
              switch (((h = L), (y = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Er(4, h, h.return);
                  break;
                case 1:
                  Rn(h, h.return);
                  var g = h.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (w) {
                      ue(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Rn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Nu(p);
                    continue;
                  }
              }
              y !== null ? ((y.return = h), (L = y)) : Nu(p);
            }
            d = d.sibling;
          }
        e: for (d = null, p = e; ; ) {
          if (p.tag === 5) {
            if (d === null) {
              d = p;
              try {
                (l = p.stateNode),
                  u
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = p.stateNode),
                      (s = p.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (a.style.display = zc("display", o)));
              } catch (w) {
                ue(e, e.return, w);
              }
            }
          } else if (p.tag === 6) {
            if (d === null)
              try {
                p.stateNode.nodeValue = u ? "" : p.memoizedProps;
              } catch (w) {
                ue(e, e.return, w);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            d === p && (d = null), (p = p.return);
          }
          d === p && (d = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      tt(t, e), ut(e), r & 4 && Cu(e);
      break;
    case 21:
      break;
    default:
      tt(t, e), ut(e);
  }
}
function ut(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (cd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(P(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Pr(l, ""), (r.flags &= -33));
          var i = ju(e);
          la(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = ju(e);
          ra(e, a, o);
          break;
        default:
          throw Error(P(161));
      }
    } catch (s) {
      ue(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function dh(e, t, n) {
  (L = e), pd(e);
}
function pd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var l = L,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || vl;
      if (!o) {
        var a = l.alternate,
          s = (a !== null && a.memoizedState !== null) || _e;
        a = vl;
        var u = _e;
        if (((vl = o), (_e = s) && !u))
          for (L = l; L !== null; )
            (o = L),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? _u(l)
                : s !== null
                ? ((s.return = o), (L = s))
                : _u(l);
        for (; i !== null; ) (L = i), pd(i), (i = i.sibling);
        (L = l), (vl = a), (_e = u);
      }
      Pu(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (L = i)) : Pu(e);
  }
}
function Pu(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              _e || ki(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !_e)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : nt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && uu(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                uu(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var p = d.dehydrated;
                    p !== null && Tr(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(P(163));
          }
        _e || (t.flags & 512 && na(t));
      } catch (h) {
        ue(t, t.return, h);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function Nu(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function _u(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ki(4, t);
          } catch (s) {
            ue(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              ue(t, l, s);
            }
          }
          var i = t.return;
          try {
            na(t);
          } catch (s) {
            ue(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            na(t);
          } catch (s) {
            ue(t, o, s);
          }
      }
    } catch (s) {
      ue(t, t.return, s);
    }
    if (t === e) {
      L = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (L = a);
      break;
    }
    L = t.return;
  }
}
var ph = Math.ceil,
  ri = _t.ReactCurrentDispatcher,
  ls = _t.ReactCurrentOwner,
  Ze = _t.ReactCurrentBatchConfig,
  X = 0,
  Se = null,
  me = null,
  je = 0,
  Ve = 0,
  Dn = Jt(0),
  xe = 0,
  Br = null,
  pn = 0,
  ji = 0,
  is = 0,
  kr = null,
  Me = null,
  os = 0,
  Hn = 1 / 0,
  xt = null,
  li = !1,
  ia = null,
  bt = null,
  gl = !1,
  It = null,
  ii = 0,
  jr = 0,
  oa = null,
  Fl = -1,
  Ll = 0;
function De() {
  return X & 6 ? ce() : Fl !== -1 ? Fl : (Fl = ce());
}
function Ht(e) {
  return e.mode & 1
    ? X & 2 && je !== 0
      ? je & -je
      : Gm.transition !== null
      ? (Ll === 0 && (Ll = Xc()), Ll)
      : ((e = J),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : nf(e.type))),
        e)
    : 1;
}
function at(e, t, n, r) {
  if (50 < jr) throw ((jr = 0), (oa = null), Error(P(185)));
  Kr(e, n, r),
    (!(X & 2) || e !== Se) &&
      (e === Se && (!(X & 2) && (ji |= n), xe === 4 && Mt(e, je)),
      Ue(e, r),
      n === 1 && X === 0 && !(t.mode & 1) && ((Hn = ce() + 500), wi && Zt()));
}
function Ue(e, t) {
  var n = e.callbackNode;
  Gp(e, t);
  var r = Vl(e, e === Se ? je : 0);
  if (r === 0)
    n !== null && Is(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Is(n), t === 1))
      e.tag === 0 ? Xm(Ou.bind(null, e)) : Ef(Ou.bind(null, e)),
        Hm(function () {
          !(X & 6) && Zt();
        }),
        (n = null);
    else {
      switch (Gc(r)) {
        case 1:
          n = Da;
          break;
        case 4:
          n = Qc;
          break;
        case 16:
          n = Bl;
          break;
        case 536870912:
          n = Yc;
          break;
        default:
          n = Bl;
      }
      n = Sd(n, md.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function md(e, t) {
  if (((Fl = -1), (Ll = 0), X & 6)) throw Error(P(327));
  var n = e.callbackNode;
  if (An() && e.callbackNode !== n) return null;
  var r = Vl(e, e === Se ? je : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = oi(e, r);
  else {
    t = r;
    var l = X;
    X |= 2;
    var i = vd();
    (Se !== e || je !== t) && ((xt = null), (Hn = ce() + 500), sn(e, t));
    do
      try {
        vh();
        break;
      } catch (a) {
        hd(e, a);
      }
    while (1);
    Ha(),
      (ri.current = i),
      (X = l),
      me !== null ? (t = 0) : ((Se = null), (je = 0), (t = xe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Fo(e)), l !== 0 && ((r = l), (t = aa(e, l)))), t === 1)
    )
      throw ((n = Br), sn(e, 0), Mt(e, r), Ue(e, ce()), n);
    if (t === 6) Mt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !mh(l) &&
          ((t = oi(e, r)),
          t === 2 && ((i = Fo(e)), i !== 0 && ((r = i), (t = aa(e, i)))),
          t === 1))
      )
        throw ((n = Br), sn(e, 0), Mt(e, r), Ue(e, ce()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(P(345));
        case 2:
          nn(e, Me, xt);
          break;
        case 3:
          if (
            (Mt(e, r), (r & 130023424) === r && ((t = os + 500 - ce()), 10 < t))
          ) {
            if (Vl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              De(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Bo(nn.bind(null, e, Me, xt), t);
            break;
          }
          nn(e, Me, xt);
          break;
        case 4:
          if ((Mt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - ot(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = ce() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * ph(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Bo(nn.bind(null, e, Me, xt), r);
            break;
          }
          nn(e, Me, xt);
          break;
        case 5:
          nn(e, Me, xt);
          break;
        default:
          throw Error(P(329));
      }
    }
  }
  return Ue(e, ce()), e.callbackNode === n ? md.bind(null, e) : null;
}
function aa(e, t) {
  var n = kr;
  return (
    e.current.memoizedState.isDehydrated && (sn(e, t).flags |= 256),
    (e = oi(e, t)),
    e !== 2 && ((t = Me), (Me = n), t !== null && sa(t)),
    e
  );
}
function sa(e) {
  Me === null ? (Me = e) : Me.push.apply(Me, e);
}
function mh(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!st(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Mt(e, t) {
  for (
    t &= ~is,
      t &= ~ji,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - ot(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ou(e) {
  if (X & 6) throw Error(P(327));
  An();
  var t = Vl(e, 0);
  if (!(t & 1)) return Ue(e, ce()), null;
  var n = oi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Fo(e);
    r !== 0 && ((t = r), (n = aa(e, r)));
  }
  if (n === 1) throw ((n = Br), sn(e, 0), Mt(e, t), Ue(e, ce()), n);
  if (n === 6) throw Error(P(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    nn(e, Me, xt),
    Ue(e, ce()),
    null
  );
}
function as(e, t) {
  var n = X;
  X |= 1;
  try {
    return e(t);
  } finally {
    (X = n), X === 0 && ((Hn = ce() + 500), wi && Zt());
  }
}
function mn(e) {
  It !== null && It.tag === 0 && !(X & 6) && An();
  var t = X;
  X |= 1;
  var n = Ze.transition,
    r = J;
  try {
    if (((Ze.transition = null), (J = 1), e)) return e();
  } finally {
    (J = r), (Ze.transition = n), (X = t), !(X & 6) && Zt();
  }
}
function ss() {
  (Ve = Dn.current), ne(Dn);
}
function sn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), bm(n)), me !== null))
    for (n = me.return; n !== null; ) {
      var r = n;
      switch ((Va(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ql();
          break;
        case 3:
          Wn(), ne(Ie), ne(Oe), Ja();
          break;
        case 5:
          Ga(r);
          break;
        case 4:
          Wn();
          break;
        case 13:
          ne(oe);
          break;
        case 19:
          ne(oe);
          break;
        case 10:
          Ka(r.type._context);
          break;
        case 22:
        case 23:
          ss();
      }
      n = n.return;
    }
  if (
    ((Se = e),
    (me = e = Kt(e.current, null)),
    (je = Ve = t),
    (xe = 0),
    (Br = null),
    (is = ji = pn = 0),
    (Me = kr = null),
    on !== null)
  ) {
    for (t = 0; t < on.length; t++)
      if (((n = on[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    on = null;
  }
  return e;
}
function hd(e, t) {
  do {
    var n = me;
    try {
      if ((Ha(), (Tl.current = ni), ti)) {
        for (var r = ae.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        ti = !1;
      }
      if (
        ((dn = 0),
        (we = ye = ae = null),
        (Sr = !1),
        (Ar = 0),
        (ls.current = null),
        n === null || n.return === null)
      ) {
        (xe = 1), (Br = t), (me = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          a = n,
          s = t;
        if (
          ((t = je),
          (a.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var u = s,
            d = a,
            p = d.tag;
          if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var h = d.alternate;
            h
              ? ((d.updateQueue = h.updateQueue),
                (d.memoizedState = h.memoizedState),
                (d.lanes = h.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var y = vu(o);
          if (y !== null) {
            (y.flags &= -257),
              gu(y, o, a, i, t),
              y.mode & 1 && hu(i, u, t),
              (t = y),
              (s = u);
            var g = t.updateQueue;
            if (g === null) {
              var w = new Set();
              w.add(s), (t.updateQueue = w);
            } else g.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              hu(i, u, t), us();
              break e;
            }
            s = Error(P(426));
          }
        } else if (le && a.mode & 1) {
          var k = vu(o);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              gu(k, o, a, i, t),
              Wa(bn(s, a));
            break e;
          }
        }
        (i = s = bn(s, a)),
          xe !== 4 && (xe = 2),
          kr === null ? (kr = [i]) : kr.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var m = Zf(i, s, t);
              su(i, m);
              break e;
            case 1:
              a = s;
              var f = i.type,
                v = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (bt === null || !bt.has(v))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var S = qf(i, a, t);
                su(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      yd(n);
    } catch (j) {
      (t = j), me === n && n !== null && (me = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function vd() {
  var e = ri.current;
  return (ri.current = ni), e === null ? ni : e;
}
function us() {
  (xe === 0 || xe === 3 || xe === 2) && (xe = 4),
    Se === null || (!(pn & 268435455) && !(ji & 268435455)) || Mt(Se, je);
}
function oi(e, t) {
  var n = X;
  X |= 2;
  var r = vd();
  (Se !== e || je !== t) && ((xt = null), sn(e, t));
  do
    try {
      hh();
      break;
    } catch (l) {
      hd(e, l);
    }
  while (1);
  if ((Ha(), (X = n), (ri.current = r), me !== null)) throw Error(P(261));
  return (Se = null), (je = 0), xe;
}
function hh() {
  for (; me !== null; ) gd(me);
}
function vh() {
  for (; me !== null && !Bp(); ) gd(me);
}
function gd(e) {
  var t = wd(e.alternate, e, Ve);
  (e.memoizedProps = e.pendingProps),
    t === null ? yd(e) : (me = t),
    (ls.current = null);
}
function yd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = uh(n, t)), n !== null)) {
        (n.flags &= 32767), (me = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (xe = 6), (me = null);
        return;
      }
    } else if (((n = sh(n, t, Ve)), n !== null)) {
      me = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      me = t;
      return;
    }
    me = t = e;
  } while (t !== null);
  xe === 0 && (xe = 5);
}
function nn(e, t, n) {
  var r = J,
    l = Ze.transition;
  try {
    (Ze.transition = null), (J = 1), gh(e, t, n, r);
  } finally {
    (Ze.transition = l), (J = r);
  }
  return null;
}
function gh(e, t, n, r) {
  do An();
  while (It !== null);
  if (X & 6) throw Error(P(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(P(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Jp(e, i),
    e === Se && ((me = Se = null), (je = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      gl ||
      ((gl = !0),
      Sd(Bl, function () {
        return An(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Ze.transition), (Ze.transition = null);
    var o = J;
    J = 1;
    var a = X;
    (X |= 4),
      (ls.current = null),
      fh(e, n),
      dd(n, e),
      Im(Uo),
      (Wl = !!Ao),
      (Uo = Ao = null),
      (e.current = n),
      dh(n),
      Vp(),
      (X = a),
      (J = o),
      (Ze.transition = i);
  } else e.current = n;
  if (
    (gl && ((gl = !1), (It = e), (ii = l)),
    (i = e.pendingLanes),
    i === 0 && (bt = null),
    Hp(n.stateNode),
    Ue(e, ce()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (li) throw ((li = !1), (e = ia), (ia = null), e);
  return (
    ii & 1 && e.tag !== 0 && An(),
    (i = e.pendingLanes),
    i & 1 ? (e === oa ? jr++ : ((jr = 0), (oa = e))) : (jr = 0),
    Zt(),
    null
  );
}
function An() {
  if (It !== null) {
    var e = Gc(ii),
      t = Ze.transition,
      n = J;
    try {
      if (((Ze.transition = null), (J = 16 > e ? 16 : e), It === null))
        var r = !1;
      else {
        if (((e = It), (It = null), (ii = 0), X & 6)) throw Error(P(331));
        var l = X;
        for (X |= 4, L = e.current; L !== null; ) {
          var i = L,
            o = i.child;
          if (L.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var s = 0; s < a.length; s++) {
                var u = a[s];
                for (L = u; L !== null; ) {
                  var d = L;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Er(8, d, i);
                  }
                  var p = d.child;
                  if (p !== null) (p.return = d), (L = p);
                  else
                    for (; L !== null; ) {
                      d = L;
                      var h = d.sibling,
                        y = d.return;
                      if ((ud(d), d === u)) {
                        L = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = y), (L = h);
                        break;
                      }
                      L = y;
                    }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var w = g.child;
                if (w !== null) {
                  g.child = null;
                  do {
                    var k = w.sibling;
                    (w.sibling = null), (w = k);
                  } while (w !== null);
                }
              }
              L = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (L = o);
          else
            e: for (; L !== null; ) {
              if (((i = L), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Er(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                (m.return = i.return), (L = m);
                break e;
              }
              L = i.return;
            }
        }
        var f = e.current;
        for (L = f; L !== null; ) {
          o = L;
          var v = o.child;
          if (o.subtreeFlags & 2064 && v !== null) (v.return = o), (L = v);
          else
            e: for (o = f; L !== null; ) {
              if (((a = L), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ki(9, a);
                  }
                } catch (j) {
                  ue(a, a.return, j);
                }
              if (a === o) {
                L = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                (S.return = a.return), (L = S);
                break e;
              }
              L = a.return;
            }
        }
        if (
          ((X = l), Zt(), pt && typeof pt.onPostCommitFiberRoot == "function")
        )
          try {
            pt.onPostCommitFiberRoot(hi, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (J = n), (Ze.transition = t);
    }
  }
  return !1;
}
function Tu(e, t, n) {
  (t = bn(n, t)),
    (t = Zf(e, t, 1)),
    (e = Wt(e, t, 1)),
    (t = De()),
    e !== null && (Kr(e, 1, t), Ue(e, t));
}
function ue(e, t, n) {
  if (e.tag === 3) Tu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Tu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (bt === null || !bt.has(r)))
        ) {
          (e = bn(n, e)),
            (e = qf(t, e, 1)),
            (t = Wt(t, e, 1)),
            (e = De()),
            t !== null && (Kr(t, 1, e), Ue(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function yh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = De()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Se === e &&
      (je & n) === n &&
      (xe === 4 || (xe === 3 && (je & 130023424) === je && 500 > ce() - os)
        ? sn(e, 0)
        : (is |= n)),
    Ue(e, t);
}
function xd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = al), (al <<= 1), !(al & 130023424) && (al = 4194304))
      : (t = 1));
  var n = De();
  (e = Pt(e, t)), e !== null && (Kr(e, t, n), Ue(e, n));
}
function xh(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), xd(e, n);
}
function wh(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(P(314));
  }
  r !== null && r.delete(t), xd(e, n);
}
var wd;
wd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ie.current) ze = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ze = !1), ah(e, t, n);
      ze = !!(e.flags & 131072);
    }
  else (ze = !1), le && t.flags & 1048576 && kf(t, Gl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Dl(e, t), (e = t.pendingProps);
      var l = $n(t, Oe.current);
      In(t, n), (l = qa(null, t, r, e, l, n));
      var i = es();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ae(r) ? ((i = !0), Yl(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Ya(t),
            (l.updater = Si),
            (t.stateNode = l),
            (l._reactInternals = t),
            Yo(t, r, e, n),
            (t = Jo(null, t, r, !0, i, n)))
          : ((t.tag = 0), le && i && Ba(t), Re(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Dl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Eh(r)),
          (e = nt(r, e)),
          l)
        ) {
          case 0:
            t = Go(null, t, r, e, n);
            break e;
          case 1:
            t = wu(null, t, r, e, n);
            break e;
          case 11:
            t = yu(null, t, r, e, n);
            break e;
          case 14:
            t = xu(null, t, r, nt(r.type, e), n);
            break e;
        }
        throw Error(P(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : nt(r, l)),
        Go(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : nt(r, l)),
        wu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((rd(t), e === null)) throw Error(P(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          Nf(e, t),
          ql(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = bn(Error(P(423)), t)), (t = Su(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = bn(Error(P(424)), t)), (t = Su(e, t, r, n, l));
            break e;
          } else
            for (
              We = Vt(t.stateNode.containerInfo.firstChild),
                be = t,
                le = !0,
                lt = null,
                n = Rf(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Bn(), r === l)) {
            t = Nt(e, t, n);
            break e;
          }
          Re(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Df(t),
        e === null && Ho(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        $o(r, l) ? (o = null) : i !== null && $o(r, i) && (t.flags |= 32),
        nd(e, t),
        Re(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Ho(t), null;
    case 13:
      return ld(e, t, n);
    case 4:
      return (
        Xa(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Vn(t, null, r, n)) : Re(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : nt(r, l)),
        yu(e, t, r, l, n)
      );
    case 7:
      return Re(e, t, t.pendingProps, n), t.child;
    case 8:
      return Re(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Re(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          ee(Jl, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (st(i.value, o)) {
            if (i.children === l.children && !Ie.current) {
              t = Nt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                o = i.child;
                for (var s = a.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = kt(-1, n & -n)), (s.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null
                          ? (s.next = s)
                          : ((s.next = d.next), (d.next = s)),
                          (u.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      Ko(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(P(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  Ko(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        Re(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        In(t, n),
        (l = qe(l)),
        (r = r(l)),
        (t.flags |= 1),
        Re(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = nt(r, t.pendingProps)),
        (l = nt(r.type, l)),
        xu(e, t, r, l, n)
      );
    case 15:
      return ed(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : nt(r, l)),
        Dl(e, t),
        (t.tag = 1),
        Ae(r) ? ((e = !0), Yl(t)) : (e = !1),
        In(t, n),
        Of(t, r, l),
        Yo(t, r, l, n),
        Jo(null, t, r, !0, e, n)
      );
    case 19:
      return id(e, t, n);
    case 22:
      return td(e, t, n);
  }
  throw Error(P(156, t.tag));
};
function Sd(e, t) {
  return Kc(e, t);
}
function Sh(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Je(e, t, n, r) {
  return new Sh(e, t, n, r);
}
function cs(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Eh(e) {
  if (typeof e == "function") return cs(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Oa)) return 11;
    if (e === Ta) return 14;
  }
  return 2;
}
function Kt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Je(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ml(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) cs(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case En:
        return un(n.children, l, i, t);
      case _a:
        (o = 8), (l |= 8);
        break;
      case yo:
        return (
          (e = Je(12, n, t, l | 2)), (e.elementType = yo), (e.lanes = i), e
        );
      case xo:
        return (e = Je(13, n, t, l)), (e.elementType = xo), (e.lanes = i), e;
      case wo:
        return (e = Je(19, n, t, l)), (e.elementType = wo), (e.lanes = i), e;
      case Oc:
        return Ci(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Nc:
              o = 10;
              break e;
            case _c:
              o = 9;
              break e;
            case Oa:
              o = 11;
              break e;
            case Ta:
              o = 14;
              break e;
            case Dt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(P(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Je(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function un(e, t, n, r) {
  return (e = Je(7, e, r, t)), (e.lanes = n), e;
}
function Ci(e, t, n, r) {
  return (
    (e = Je(22, e, r, t)),
    (e.elementType = Oc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function co(e, t, n) {
  return (e = Je(6, e, null, t)), (e.lanes = n), e;
}
function fo(e, t, n) {
  return (
    (t = Je(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function kh(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Hi(0)),
    (this.expirationTimes = Hi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Hi(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function fs(e, t, n, r, l, i, o, a, s) {
  return (
    (e = new kh(e, t, n, a, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Je(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ya(i),
    e
  );
}
function jh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Sn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Ed(e) {
  if (!e) return Xt;
  e = e._reactInternals;
  e: {
    if (vn(e) !== e || e.tag !== 1) throw Error(P(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ae(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(P(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ae(n)) return Sf(e, n, t);
  }
  return t;
}
function kd(e, t, n, r, l, i, o, a, s) {
  return (
    (e = fs(n, r, !0, e, l, i, o, a, s)),
    (e.context = Ed(null)),
    (n = e.current),
    (r = De()),
    (l = Ht(n)),
    (i = kt(r, l)),
    (i.callback = t ?? null),
    Wt(n, i, l),
    (e.current.lanes = l),
    Kr(e, l, r),
    Ue(e, r),
    e
  );
}
function Pi(e, t, n, r) {
  var l = t.current,
    i = De(),
    o = Ht(l);
  return (
    (n = Ed(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = kt(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Wt(l, t, o)),
    e !== null && (at(e, l, o, i), Ol(e, l, o)),
    o
  );
}
function ai(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ru(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ds(e, t) {
  Ru(e, t), (e = e.alternate) && Ru(e, t);
}
function Ch() {
  return null;
}
var jd =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ps(e) {
  this._internalRoot = e;
}
Ni.prototype.render = ps.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(P(409));
  Pi(e, t, null, null);
};
Ni.prototype.unmount = ps.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    mn(function () {
      Pi(null, e, null, null);
    }),
      (t[Ct] = null);
  }
};
function Ni(e) {
  this._internalRoot = e;
}
Ni.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = qc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Lt.length && t !== 0 && t < Lt[n].priority; n++);
    Lt.splice(n, 0, e), n === 0 && tf(e);
  }
};
function ms(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function _i(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Du() {}
function Ph(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = ai(o);
        i.call(u);
      };
    }
    var o = kd(t, r, e, 0, null, !1, !1, "", Du);
    return (
      (e._reactRootContainer = o),
      (e[Ct] = o.current),
      Fr(e.nodeType === 8 ? e.parentNode : e),
      mn(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = ai(s);
      a.call(u);
    };
  }
  var s = fs(e, 0, !1, null, null, !1, !1, "", Du);
  return (
    (e._reactRootContainer = s),
    (e[Ct] = s.current),
    Fr(e.nodeType === 8 ? e.parentNode : e),
    mn(function () {
      Pi(t, s, n, r);
    }),
    s
  );
}
function Oi(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var a = l;
      l = function () {
        var s = ai(o);
        a.call(s);
      };
    }
    Pi(t, o, e, l);
  } else o = Ph(n, t, e, l, r);
  return ai(o);
}
Jc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = mr(t.pendingLanes);
        n !== 0 &&
          (Fa(t, n | 1), Ue(t, ce()), !(X & 6) && ((Hn = ce() + 500), Zt()));
      }
      break;
    case 13:
      mn(function () {
        var r = Pt(e, 1);
        if (r !== null) {
          var l = De();
          at(r, e, 1, l);
        }
      }),
        ds(e, 1);
  }
};
La = function (e) {
  if (e.tag === 13) {
    var t = Pt(e, 134217728);
    if (t !== null) {
      var n = De();
      at(t, e, 134217728, n);
    }
    ds(e, 134217728);
  }
};
Zc = function (e) {
  if (e.tag === 13) {
    var t = Ht(e),
      n = Pt(e, t);
    if (n !== null) {
      var r = De();
      at(n, e, t, r);
    }
    ds(e, t);
  }
};
qc = function () {
  return J;
};
ef = function (e, t) {
  var n = J;
  try {
    return (J = e), t();
  } finally {
    J = n;
  }
};
To = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ko(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = xi(r);
            if (!l) throw Error(P(90));
            Rc(r), ko(r, l);
          }
        }
      }
      break;
    case "textarea":
      Fc(e, n);
      break;
    case "select":
      (t = n.value), t != null && Fn(e, !!n.multiple, t, !1);
  }
};
$c = as;
Bc = mn;
var Nh = { usingClientEntryPoint: !1, Events: [Yr, Pn, xi, Ac, Uc, as] },
  fr = {
    findFiberByHostInstance: ln,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  _h = {
    bundleType: fr.bundleType,
    version: fr.version,
    rendererPackageName: fr.rendererPackageName,
    rendererConfig: fr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: _t.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = bc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: fr.findFiberByHostInstance || Ch,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var yl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yl.isDisabled && yl.supportsFiber)
    try {
      (hi = yl.inject(_h)), (pt = yl);
    } catch {}
}
Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nh;
Ke.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ms(t)) throw Error(P(200));
  return jh(e, t, null, n);
};
Ke.createRoot = function (e, t) {
  if (!ms(e)) throw Error(P(299));
  var n = !1,
    r = "",
    l = jd;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = fs(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ct] = t.current),
    Fr(e.nodeType === 8 ? e.parentNode : e),
    new ps(t)
  );
};
Ke.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(P(188))
      : ((e = Object.keys(e).join(",")), Error(P(268, e)));
  return (e = bc(t)), (e = e === null ? null : e.stateNode), e;
};
Ke.flushSync = function (e) {
  return mn(e);
};
Ke.hydrate = function (e, t, n) {
  if (!_i(t)) throw Error(P(200));
  return Oi(null, e, t, !0, n);
};
Ke.hydrateRoot = function (e, t, n) {
  if (!ms(e)) throw Error(P(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = jd;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = kd(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[Ct] = t.current),
    Fr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Ni(t);
};
Ke.render = function (e, t, n) {
  if (!_i(t)) throw Error(P(200));
  return Oi(null, e, t, !1, n);
};
Ke.unmountComponentAtNode = function (e) {
  if (!_i(e)) throw Error(P(40));
  return e._reactRootContainer
    ? (mn(function () {
        Oi(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ct] = null);
        });
      }),
      !0)
    : !1;
};
Ke.unstable_batchedUpdates = as;
Ke.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!_i(n)) throw Error(P(200));
  if (e == null || e._reactInternals === void 0) throw Error(P(38));
  return Oi(e, t, n, !1, r);
};
Ke.version = "18.2.0-next-9e3b772b8-20220608";
function Cd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cd);
    } catch (e) {
      console.error(e);
    }
}
Cd(), (Ec.exports = Ke);
var Oh = Ec.exports,
  Fu = Oh;
(vo.createRoot = Fu.createRoot), (vo.hydrateRoot = Fu.hydrateRoot);
/**
 * @remix-run/router v1.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Vr() {
  return (
    (Vr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Vr.apply(this, arguments)
  );
}
var At;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(At || (At = {}));
const Lu = "popstate";
function Th(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: i, search: o, hash: a } = r.location;
    return ua(
      "",
      { pathname: i, search: o, hash: a },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : si(l);
  }
  return Dh(t, n, null, e);
}
function fe(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function hs(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Rh() {
  return Math.random().toString(36).substr(2, 8);
}
function Mu(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ua(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Vr(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Gn(t) : t,
      { state: n, key: (t && t.key) || r || Rh() }
    )
  );
}
function si(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Gn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Dh(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: i = !1 } = r,
    o = l.history,
    a = At.Pop,
    s = null,
    u = d();
  u == null && ((u = 0), o.replaceState(Vr({}, o.state, { idx: u }), ""));
  function d() {
    return (o.state || { idx: null }).idx;
  }
  function p() {
    a = At.Pop;
    let k = d(),
      m = k == null ? null : k - u;
    (u = k), s && s({ action: a, location: w.location, delta: m });
  }
  function h(k, m) {
    a = At.Push;
    let f = ua(w.location, k, m);
    n && n(f, k), (u = d() + 1);
    let v = Mu(f, u),
      S = w.createHref(f);
    try {
      o.pushState(v, "", S);
    } catch {
      l.location.assign(S);
    }
    i && s && s({ action: a, location: w.location, delta: 1 });
  }
  function y(k, m) {
    a = At.Replace;
    let f = ua(w.location, k, m);
    n && n(f, k), (u = d());
    let v = Mu(f, u),
      S = w.createHref(f);
    o.replaceState(v, "", S),
      i && s && s({ action: a, location: w.location, delta: 0 });
  }
  function g(k) {
    let m = l.location.origin !== "null" ? l.location.origin : l.location.href,
      f = typeof k == "string" ? k : si(k);
    return (
      fe(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          f
      ),
      new URL(f, m)
    );
  }
  let w = {
    get action() {
      return a;
    },
    get location() {
      return e(l, o);
    },
    listen(k) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(Lu, p),
        (s = k),
        () => {
          l.removeEventListener(Lu, p), (s = null);
        }
      );
    },
    createHref(k) {
      return t(l, k);
    },
    createURL: g,
    encodeLocation(k) {
      let m = g(k);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: h,
    replace: y,
    go(k) {
      return o.go(k);
    },
  };
  return w;
}
var zu;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(zu || (zu = {}));
function Fh(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Gn(t) : t,
    l = vs(r.pathname || "/", n);
  if (l == null) return null;
  let i = Pd(e);
  Lh(i);
  let o = null;
  for (let a = 0; o == null && a < i.length; ++a) o = Wh(i[a], Kh(l));
  return o;
}
function Pd(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (i, o, a) => {
    let s = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    s.relativePath.startsWith("/") &&
      (fe(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let u = Qt([r, s.relativePath]),
      d = n.concat(s);
    i.children &&
      i.children.length > 0 &&
      (fe(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      Pd(i.children, t, d, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: Bh(u, i.index), routesMeta: d });
  };
  return (
    e.forEach((i, o) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) l(i, o);
      else for (let s of Nd(i.path)) l(i, o, s);
    }),
    t
  );
}
function Nd(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [i, ""] : [i];
  let o = Nd(r.join("/")),
    a = [];
  return (
    a.push(...o.map((s) => (s === "" ? i : [i, s].join("/")))),
    l && a.push(...o),
    a.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function Lh(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Vh(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Mh = /^:\w+$/,
  zh = 3,
  Ih = 2,
  Ah = 1,
  Uh = 10,
  $h = -2,
  Iu = (e) => e === "*";
function Bh(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Iu) && (r += $h),
    t && (r += Ih),
    n
      .filter((l) => !Iu(l))
      .reduce((l, i) => l + (Mh.test(i) ? zh : i === "" ? Ah : Uh), r)
  );
}
function Vh(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Wh(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    i = [];
  for (let o = 0; o < n.length; ++o) {
    let a = n[o],
      s = o === n.length - 1,
      u = l === "/" ? t : t.slice(l.length) || "/",
      d = bh(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: s },
        u
      );
    if (!d) return null;
    Object.assign(r, d.params);
    let p = a.route;
    i.push({
      params: r,
      pathname: Qt([l, d.pathname]),
      pathnameBase: Gh(Qt([l, d.pathnameBase])),
      route: p,
    }),
      d.pathnameBase !== "/" && (l = Qt([l, d.pathnameBase]));
  }
  return i;
}
function bh(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Hh(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let i = l[0],
    o = i.replace(/(.)\/+$/, "$1"),
    a = l.slice(1);
  return {
    params: r.reduce((u, d, p) => {
      if (d === "*") {
        let h = a[p] || "";
        o = i.slice(0, i.length - h.length).replace(/(.)\/+$/, "$1");
      }
      return (u[d] = Qh(a[p] || "", d)), u;
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function Hh(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    hs(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (o, a) => (r.push(a), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function Kh(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      hs(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Qh(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      hs(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function vs(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Yh(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? Gn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Xh(n, t)) : t,
    search: Jh(r),
    hash: Zh(l),
  };
}
function Xh(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function po(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function gs(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function ys(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = Gn(e))
    : ((l = Vr({}, e)),
      fe(
        !l.pathname || !l.pathname.includes("?"),
        po("?", "pathname", "search", l)
      ),
      fe(
        !l.pathname || !l.pathname.includes("#"),
        po("#", "pathname", "hash", l)
      ),
      fe(!l.search || !l.search.includes("#"), po("#", "search", "hash", l)));
  let i = e === "" || l.pathname === "",
    o = i ? "/" : l.pathname,
    a;
  if (r || o == null) a = n;
  else {
    let p = t.length - 1;
    if (o.startsWith("..")) {
      let h = o.split("/");
      for (; h[0] === ".."; ) h.shift(), (p -= 1);
      l.pathname = h.join("/");
    }
    a = p >= 0 ? t[p] : "/";
  }
  let s = Yh(l, a),
    u = o && o !== "/" && o.endsWith("/"),
    d = (i || o === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (u || d) && (s.pathname += "/"), s;
}
const Qt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Gh = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Jh = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Zh = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function qh(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const _d = ["post", "put", "patch", "delete"];
new Set(_d);
const ev = ["get", ..._d];
new Set(ev);
/**
 * React Router v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ui() {
  return (
    (ui = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ui.apply(this, arguments)
  );
}
const Od = x.createContext(null),
  tv = x.createContext(null),
  Jn = x.createContext(null),
  Ti = x.createContext(null),
  ht = x.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Td = x.createContext(null);
function nv(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Zn() || fe(!1);
  let { basename: r, navigator: l } = x.useContext(Jn),
    { hash: i, pathname: o, search: a } = Dd(e, { relative: n }),
    s = o;
  return (
    r !== "/" && (s = o === "/" ? r : Qt([r, o])),
    l.createHref({ pathname: s, search: a, hash: i })
  );
}
function Zn() {
  return x.useContext(Ti) != null;
}
function gn() {
  return Zn() || fe(!1), x.useContext(Ti).location;
}
function Rd(e) {
  x.useContext(Jn).static || x.useLayoutEffect(e);
}
function Gr() {
  let { isDataRoute: e } = x.useContext(ht);
  return e ? yv() : rv();
}
function rv() {
  Zn() || fe(!1);
  let { basename: e, navigator: t } = x.useContext(Jn),
    { matches: n } = x.useContext(ht),
    { pathname: r } = gn(),
    l = JSON.stringify(gs(n).map((a) => a.pathnameBase)),
    i = x.useRef(!1);
  return (
    Rd(() => {
      i.current = !0;
    }),
    x.useCallback(
      function (a, s) {
        if ((s === void 0 && (s = {}), !i.current)) return;
        if (typeof a == "number") {
          t.go(a);
          return;
        }
        let u = ys(a, JSON.parse(l), r, s.relative === "path");
        e !== "/" &&
          (u.pathname = u.pathname === "/" ? e : Qt([e, u.pathname])),
          (s.replace ? t.replace : t.push)(u, s.state, s);
      },
      [e, t, l, r]
    )
  );
}
const lv = x.createContext(null);
function iv(e) {
  let t = x.useContext(ht).outlet;
  return t && x.createElement(lv.Provider, { value: e }, t);
}
function ov() {
  let { matches: e } = x.useContext(ht),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Dd(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = x.useContext(ht),
    { pathname: l } = gn(),
    i = JSON.stringify(gs(r).map((o) => o.pathnameBase));
  return x.useMemo(() => ys(e, JSON.parse(i), l, n === "path"), [e, i, l, n]);
}
function av(e, t) {
  return sv(e, t);
}
function sv(e, t, n) {
  Zn() || fe(!1);
  let { navigator: r } = x.useContext(Jn),
    { matches: l } = x.useContext(ht),
    i = l[l.length - 1],
    o = i ? i.params : {};
  i && i.pathname;
  let a = i ? i.pathnameBase : "/";
  i && i.route;
  let s = gn(),
    u;
  if (t) {
    var d;
    let w = typeof t == "string" ? Gn(t) : t;
    a === "/" || ((d = w.pathname) != null && d.startsWith(a)) || fe(!1),
      (u = w);
  } else u = s;
  let p = u.pathname || "/",
    h = a === "/" ? p : p.slice(a.length) || "/",
    y = Fh(e, { pathname: h }),
    g = pv(
      y &&
        y.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, o, w.params),
            pathname: Qt([
              a,
              r.encodeLocation
                ? r.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? a
                : Qt([
                    a,
                    r.encodeLocation
                      ? r.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          })
        ),
      l,
      n
    );
  return t && g
    ? x.createElement(
        Ti.Provider,
        {
          value: {
            location: ui(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              u
            ),
            navigationType: At.Pop,
          },
        },
        g
      )
    : g;
}
function uv() {
  let e = gv(),
    t = qh(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    i = null;
  return x.createElement(
    x.Fragment,
    null,
    x.createElement("h2", null, "Unexpected Application Error!"),
    x.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? x.createElement("pre", { style: l }, n) : null,
    i
  );
}
const cv = x.createElement(uv, null);
class fv extends x.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? x.createElement(
          ht.Provider,
          { value: this.props.routeContext },
          x.createElement(Td.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function dv(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = x.useContext(Od);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    x.createElement(ht.Provider, { value: t }, r)
  );
}
function pv(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var l;
    if ((l = n) != null && l.errors) e = n.matches;
    else return null;
  }
  let i = e,
    o = (r = n) == null ? void 0 : r.errors;
  if (o != null) {
    let a = i.findIndex(
      (s) => s.route.id && (o == null ? void 0 : o[s.route.id])
    );
    a >= 0 || fe(!1), (i = i.slice(0, Math.min(i.length, a + 1)));
  }
  return i.reduceRight((a, s, u) => {
    let d = s.route.id ? (o == null ? void 0 : o[s.route.id]) : null,
      p = null;
    n && (p = s.route.errorElement || cv);
    let h = t.concat(i.slice(0, u + 1)),
      y = () => {
        let g;
        return (
          d
            ? (g = p)
            : s.route.Component
            ? (g = x.createElement(s.route.Component, null))
            : s.route.element
            ? (g = s.route.element)
            : (g = a),
          x.createElement(dv, {
            match: s,
            routeContext: { outlet: a, matches: h, isDataRoute: n != null },
            children: g,
          })
        );
      };
    return n && (s.route.ErrorBoundary || s.route.errorElement || u === 0)
      ? x.createElement(fv, {
          location: n.location,
          revalidation: n.revalidation,
          component: p,
          error: d,
          children: y(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : y();
  }, null);
}
var ca;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate");
})(ca || (ca = {}));
var Wr;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId");
})(Wr || (Wr = {}));
function mv(e) {
  let t = x.useContext(Od);
  return t || fe(!1), t;
}
function hv(e) {
  let t = x.useContext(tv);
  return t || fe(!1), t;
}
function vv(e) {
  let t = x.useContext(ht);
  return t || fe(!1), t;
}
function Fd(e) {
  let t = vv(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || fe(!1), n.route.id;
}
function gv() {
  var e;
  let t = x.useContext(Td),
    n = hv(Wr.UseRouteError),
    r = Fd(Wr.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function yv() {
  let { router: e } = mv(ca.UseNavigateStable),
    t = Fd(Wr.UseNavigateStable),
    n = x.useRef(!1);
  return (
    Rd(() => {
      n.current = !0;
    }),
    x.useCallback(
      function (l, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, ui({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
function xs(e) {
  let { to: t, replace: n, state: r, relative: l } = e;
  Zn() || fe(!1);
  let { matches: i } = x.useContext(ht),
    { pathname: o } = gn(),
    a = Gr(),
    s = ys(
      t,
      gs(i).map((d) => d.pathnameBase),
      o,
      l === "path"
    ),
    u = JSON.stringify(s);
  return (
    x.useEffect(
      () => a(JSON.parse(u), { replace: n, state: r, relative: l }),
      [a, u, l, n, r]
    ),
    null
  );
}
function xv(e) {
  return iv(e.context);
}
function Ye(e) {
  fe(!1);
}
function wv(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = At.Pop,
    navigator: i,
    static: o = !1,
  } = e;
  Zn() && fe(!1);
  let a = t.replace(/^\/*/, "/"),
    s = x.useMemo(() => ({ basename: a, navigator: i, static: o }), [a, i, o]);
  typeof r == "string" && (r = Gn(r));
  let {
      pathname: u = "/",
      search: d = "",
      hash: p = "",
      state: h = null,
      key: y = "default",
    } = r,
    g = x.useMemo(() => {
      let w = vs(u, a);
      return w == null
        ? null
        : {
            location: { pathname: w, search: d, hash: p, state: h, key: y },
            navigationType: l,
          };
    }, [a, u, d, p, h, y, l]);
  return g == null
    ? null
    : x.createElement(
        Jn.Provider,
        { value: s },
        x.createElement(Ti.Provider, { children: n, value: g })
      );
}
function Sv(e) {
  let { children: t, location: n } = e;
  return av(fa(t), n);
}
var Au;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(Au || (Au = {}));
new Promise(() => {});
function fa(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    x.Children.forEach(e, (r, l) => {
      if (!x.isValidElement(r)) return;
      let i = [...t, l];
      if (r.type === x.Fragment) {
        n.push.apply(n, fa(r.props.children, i));
        return;
      }
      r.type !== Ye && fe(!1), !r.props.index || !r.props.children || fe(!1);
      let o = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (o.children = fa(r.props.children, i)), n.push(o);
    }),
    n
  );
}
/**
 * React Router DOM v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function da() {
  return (
    (da = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    da.apply(this, arguments)
  );
}
function Ev(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    i;
  for (i = 0; i < r.length; i++)
    (l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function kv(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function jv(e, t) {
  return e.button === 0 && (!t || t === "_self") && !kv(e);
}
const Cv = [
  "onClick",
  "relative",
  "reloadDocument",
  "replace",
  "state",
  "target",
  "to",
  "preventScrollReset",
];
function Pv(e) {
  let { basename: t, children: n, window: r } = e,
    l = x.useRef();
  l.current == null && (l.current = Th({ window: r, v5Compat: !0 }));
  let i = l.current,
    [o, a] = x.useState({ action: i.action, location: i.location });
  return (
    x.useLayoutEffect(() => i.listen(a), [i]),
    x.createElement(wv, {
      basename: t,
      children: n,
      location: o.location,
      navigationType: o.action,
      navigator: i,
    })
  );
}
const Nv =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  _v = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  it = x.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: i,
        replace: o,
        state: a,
        target: s,
        to: u,
        preventScrollReset: d,
      } = t,
      p = Ev(t, Cv),
      { basename: h } = x.useContext(Jn),
      y,
      g = !1;
    if (typeof u == "string" && _v.test(u) && ((y = u), Nv))
      try {
        let f = new URL(window.location.href),
          v = u.startsWith("//") ? new URL(f.protocol + u) : new URL(u),
          S = vs(v.pathname, h);
        v.origin === f.origin && S != null
          ? (u = S + v.search + v.hash)
          : (g = !0);
      } catch {}
    let w = nv(u, { relative: l }),
      k = Ov(u, {
        replace: o,
        state: a,
        target: s,
        preventScrollReset: d,
        relative: l,
      });
    function m(f) {
      r && r(f), f.defaultPrevented || k(f);
    }
    return x.createElement(
      "a",
      da({}, p, { href: y || w, onClick: g || i ? r : m, ref: n, target: s })
    );
  });
var Uu;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmitImpl = "useSubmitImpl"),
    (e.UseFetcher = "useFetcher");
})(Uu || (Uu = {}));
var $u;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})($u || ($u = {}));
function Ov(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: i,
      relative: o,
    } = t === void 0 ? {} : t,
    a = Gr(),
    s = gn(),
    u = Dd(e, { relative: o });
  return x.useCallback(
    (d) => {
      if (jv(d, n)) {
        d.preventDefault();
        let p = r !== void 0 ? r : si(s) === si(u);
        a(e, { replace: p, state: l, preventScrollReset: i, relative: o });
      }
    },
    [s, a, u, r, l, n, e, i, o]
  );
}
const Tv = ({ token: e, handleToken: t, setSearch: n, user: r }) => {
    var i, o, a;
    const l =
      (o = (i = r == null ? void 0 : r.account) == null ? void 0 : i.avatar) ==
      null
        ? void 0
        : o.secure_url;
    return c.jsxs("nav", {
      className: "container flex justify-between items-center gap-4 py-1",
      children: [
        c.jsx(it, {
          to: "/",
          children: c.jsx("img", {
            src: "/images/logo3.png",
            alt: "vinted logo",
          }),
        }),
        c.jsxs("div", {
          className: "hidden md:block searchbar relative max-w-[550px] grow",
          children: [
            c.jsx("input", {
              type: "text",
              placeholder: "Recherche des products",
              onChange: (s) => {
                n(s.target.value);
              },
            }),
            c.jsx("img", { src: "/icons/search.svg", alt: "search" }),
          ],
        }),
        c.jsx("div", {
          className: "whitespace-nowrap",
          children: e
            ? c.jsxs("div", {
                className: "flex items-center",
                children: [
                  c.jsxs(it, {
                    to: "/user",
                    className: "flex items-center mr-4 text-[#77B5FE]",
                    children: [
                      c.jsx("img", {
                        className: "w-8 mr-1",
                        src: `${l || "/icons/account.svg"}`,
                        alt: "user icon",
                      }),
                      c.jsx("span", {
                        children:
                          (a = r == null ? void 0 : r.account) == null
                            ? void 0
                            : a.username,
                      }),
                    ],
                  }),
                  c.jsx("button", {
                    className:
                      "mr-3 bg-pink-700 text-slate-50 border-1 border-rose-400",
                    onClick: () => {
                      t(null);
                    },
                    children: "Se deconnecter",
                  }),
                ],
              })
            : c.jsxs(c.Fragment, {
                children: [
                  c.jsx(it, {
                    to: "/signup",
                    children: c.jsx("button", {
                      className: "mr-3 text-[#77B5FE]",
                      children: "S'inscire",
                    }),
                  }),
                  c.jsx(it, {
                    to: "/login",
                    children: c.jsx("button", {
                      className: "text-[#77B5FE]",
                      children: "Se connecter",
                    }),
                  }),
                ],
              }),
        }),
        c.jsx(it, {
          to: "/publish",
          children: c.jsx("button", {
            className: "bg-[#77B5FE] text-slate-50",
            children: "Vend tes products",
          }),
        }),
      ],
    });
  },
  Rv = ({ token: e, handleToken: t, setSearch: n, user: r }) =>
    c.jsx("header", {
      className: "fixed w-full h-14 top-0 z-10 bg-[#fff]",
      children: c.jsx(Tv, { token: e, user: r, handleToken: t, setSearch: n }),
    });
/*! js-cookie v3.0.5 | MIT */ function xl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n) e[r] = n[r];
  }
  return e;
}
var Dv = {
  read: function (e) {
    return (
      e[0] === '"' && (e = e.slice(1, -1)),
      e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    );
  },
  write: function (e) {
    return encodeURIComponent(e).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    );
  },
};
function pa(e, t) {
  function n(l, i, o) {
    if (!(typeof document > "u")) {
      (o = xl({}, t, o)),
        typeof o.expires == "number" &&
          (o.expires = new Date(Date.now() + o.expires * 864e5)),
        o.expires && (o.expires = o.expires.toUTCString()),
        (l = encodeURIComponent(l)
          .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
          .replace(/[()]/g, escape));
      var a = "";
      for (var s in o)
        o[s] &&
          ((a += "; " + s), o[s] !== !0 && (a += "=" + o[s].split(";")[0]));
      return (document.cookie = l + "=" + e.write(i, l) + a);
    }
  }
  function r(l) {
    if (!(typeof document > "u" || (arguments.length && !l))) {
      for (
        var i = document.cookie ? document.cookie.split("; ") : [],
          o = {},
          a = 0;
        a < i.length;
        a++
      ) {
        var s = i[a].split("="),
          u = s.slice(1).join("=");
        try {
          var d = decodeURIComponent(s[0]);
          if (((o[d] = e.read(u, d)), l === d)) break;
        } catch {}
      }
      return l ? o[l] : o;
    }
  }
  return Object.create(
    {
      set: n,
      get: r,
      remove: function (l, i) {
        n(l, "", xl({}, i, { expires: -1 }));
      },
      withAttributes: function (l) {
        return pa(this.converter, xl({}, this.attributes, l));
      },
      withConverter: function (l) {
        return pa(xl({}, this.converter, l), this.attributes);
      },
    },
    {
      attributes: { value: Object.freeze(t) },
      converter: { value: Object.freeze(e) },
    }
  );
}
var wl = pa(Dv, { path: "/" }),
  ma = {},
  ws = {},
  Ss = {},
  Ri = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.Direction = void 0),
    (function (t) {
      (t.Right = "to right"),
        (t.Left = "to left"),
        (t.Down = "to bottom"),
        (t.Up = "to top");
    })(e.Direction || (e.Direction = {}));
})(Ri);
(function (e) {
  var t =
    ($e && $e.__spreadArray) ||
    function (C, O, M) {
      if (M || arguments.length === 2)
        for (var I = 0, U = O.length, z; I < U; I++)
          (z || !(I in O)) &&
            (z || (z = Array.prototype.slice.call(O, 0, I)), (z[I] = O[I]));
      return C.concat(z || Array.prototype.slice.call(O));
    };
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.useThumbOverlap =
      e.assertUnreachable =
      e.voidFn =
      e.getTrackBackground =
      e.replaceAt =
      e.schd =
      e.translate =
      e.getClosestThumbIndex =
      e.translateThumbs =
      e.getPaddingAndBorder =
      e.getMargin =
      e.checkInitialOverlap =
      e.checkValuesAgainstBoundaries =
      e.checkBoundaries =
      e.isVertical =
      e.relativeValue =
      e.normalizeValue =
      e.isStepDivisible =
      e.isTouchEvent =
      e.getStepDecimals =
        void 0);
  var n = x,
    r = Ri,
    l = function (C) {
      var O = C.toString().split(".")[1];
      return O ? O.length : 0;
    };
  e.getStepDecimals = l;
  function i(C) {
    return (
      (C.touches && C.touches.length) ||
      (C.changedTouches && C.changedTouches.length)
    );
  }
  e.isTouchEvent = i;
  function o(C, O, M) {
    var I = (O - C) / M,
      U = 8,
      z = Number(I.toFixed(U));
    return parseInt(z.toString(), 10) === z;
  }
  e.isStepDivisible = o;
  function a(C, O, M, I, U, z, b) {
    var E = 1e11;
    if (((C = Math.round(C * E) / E), !z)) {
      var T = b[O - 1],
        F = b[O + 1];
      if (T && T > C) return T;
      if (F && F < C) return F;
    }
    if (C > I) return I;
    if (C < M) return M;
    var W = Math.floor(C * E - M * E) % Math.floor(U * E),
      V = Math.floor(C * E - Math.abs(W)),
      re = W === 0 ? C : V / E,
      Q = Math.abs(W / E) < U / 2 ? re : re + U,
      de = (0, e.getStepDecimals)(U);
    return parseFloat(Q.toFixed(de));
  }
  e.normalizeValue = a;
  function s(C, O, M) {
    return (C - O) / (M - O);
  }
  e.relativeValue = s;
  function u(C) {
    return C === r.Direction.Up || C === r.Direction.Down;
  }
  e.isVertical = u;
  function d(C, O, M) {
    if (O >= M)
      throw new RangeError(
        "min (".concat(O, ") is equal/bigger than max (").concat(M, ")")
      );
    if (C < O)
      throw new RangeError(
        "value (".concat(C, ") is smaller than min (").concat(O, ")")
      );
    if (C > M)
      throw new RangeError(
        "value (".concat(C, ") is bigger than max (").concat(M, ")")
      );
  }
  e.checkBoundaries = d;
  function p(C, O, M) {
    return C < O ? O : C > M ? M : C;
  }
  e.checkValuesAgainstBoundaries = p;
  function h(C) {
    if (
      !(C.length < 2) &&
      !C.slice(1).every(function (O, M) {
        return C[M] <= O;
      })
    )
      throw new RangeError(
        "values={[".concat(C, "]} needs to be sorted when allowOverlap={false}")
      );
  }
  e.checkInitialOverlap = h;
  function y(C) {
    var O = window.getComputedStyle(C);
    return {
      top: parseInt(O["margin-top"], 10),
      bottom: parseInt(O["margin-bottom"], 10),
      left: parseInt(O["margin-left"], 10),
      right: parseInt(O["margin-right"], 10),
    };
  }
  e.getMargin = y;
  function g(C) {
    var O = window.getComputedStyle(C);
    return {
      top: parseInt(O["padding-top"], 10) + parseInt(O["border-top-width"], 10),
      bottom:
        parseInt(O["padding-bottom"], 10) +
        parseInt(O["border-bottom-width"], 10),
      left:
        parseInt(O["padding-left"], 10) + parseInt(O["border-left-width"], 10),
      right:
        parseInt(O["padding-right"], 10) +
        parseInt(O["border-right-width"], 10),
    };
  }
  e.getPaddingAndBorder = g;
  function w(C, O, M) {
    var I = M ? -1 : 1;
    C.forEach(function (U, z) {
      return m(U, I * O[z].x, O[z].y);
    });
  }
  e.translateThumbs = w;
  function k(C, O, M, I) {
    for (var U = 0, z = A(C[0], O, M, I), b = 1; b < C.length; b++) {
      var E = A(C[b], O, M, I);
      E < z && ((z = E), (U = b));
    }
    return U;
  }
  e.getClosestThumbIndex = k;
  function m(C, O, M) {
    C.style.transform = "translate(".concat(O, "px, ").concat(M, "px)");
  }
  e.translate = m;
  var f = function (C) {
    var O = [],
      M = null,
      I = function () {
        for (var U = [], z = 0; z < arguments.length; z++) U[z] = arguments[z];
        (O = U),
          !M &&
            (M = requestAnimationFrame(function () {
              (M = null), C.apply(void 0, O);
            }));
      };
    return I;
  };
  e.schd = f;
  function v(C, O, M) {
    var I = C.slice(0);
    return (I[O] = M), I;
  }
  e.replaceAt = v;
  function S(C) {
    var O = C.values,
      M = C.colors,
      I = C.min,
      U = C.max,
      z = C.direction,
      b = z === void 0 ? r.Direction.Right : z,
      E = C.rtl,
      T = E === void 0 ? !1 : E;
    T && b === r.Direction.Right
      ? (b = r.Direction.Left)
      : T && r.Direction.Left && (b = r.Direction.Right);
    var F = O.slice(0)
        .sort(function (V, re) {
          return V - re;
        })
        .map(function (V) {
          return ((V - I) / (U - I)) * 100;
        }),
      W = F.reduce(function (V, re, Q) {
        return ""
          .concat(V, ", ")
          .concat(M[Q], " ")
          .concat(re, "%, ")
          .concat(M[Q + 1], " ")
          .concat(re, "%");
      }, "");
    return "linear-gradient("
      .concat(b, ", ")
      .concat(M[0], " 0%")
      .concat(W, ", ")
      .concat(M[M.length - 1], " 100%)");
  }
  e.getTrackBackground = S;
  function j() {}
  e.voidFn = j;
  function N(C) {
    throw new Error("Didn't expect to get here");
  }
  e.assertUnreachable = N;
  var _ = function (C, O, M, I, U) {
      U === void 0 &&
        (U = function (b) {
          return b;
        });
      var z = Math.ceil(
        t([C], Array.from(C.children), !0).reduce(function (b, E) {
          var T = Math.ceil(E.getBoundingClientRect().width);
          if (
            E.innerText &&
            E.innerText.includes(M) &&
            E.childElementCount === 0
          ) {
            var F = E.cloneNode(!0);
            (F.innerHTML = U(O.toFixed(I))),
              (F.style.visibility = "hidden"),
              document.body.appendChild(F),
              (T = Math.ceil(F.getBoundingClientRect().width)),
              document.body.removeChild(F);
          }
          return T > b ? T : b;
        }, C.getBoundingClientRect().width)
      );
      return z;
    },
    R = function (C, O, M, I, U, z, b) {
      b === void 0 &&
        (b = function (F) {
          return F;
        });
      var E = [],
        T = function (F) {
          var W = _(M[F], I[F], U, z, b),
            V = O[F].x;
          O.forEach(function (re, Q) {
            var de = re.x,
              q = _(M[Q], I[Q], U, z, b);
            F !== Q &&
              ((V >= de && V <= de + q) || (V + W >= de && V + W <= de + q)) &&
              (E.includes(Q) ||
                (E.push(F),
                E.push(Q),
                (E = t(t([], E, !0), [F, Q], !1)),
                T(Q)));
          });
        };
      return T(C), Array.from(new Set(E.sort()));
    },
    H = function (C, O, M, I, U, z) {
      I === void 0 && (I = 0.1),
        U === void 0 && (U = " - "),
        z === void 0 &&
          (z = function (Q) {
            return Q;
          });
      var b = (0, e.getStepDecimals)(I),
        E = (0, n.useState)({}),
        T = E[0],
        F = E[1],
        W = (0, n.useState)(z(O[M].toFixed(b))),
        V = W[0],
        re = W[1];
      return (
        (0, n.useEffect)(
          function () {
            if (C) {
              var Q = C.getThumbs();
              if (Q.length < 1) return;
              var de = {},
                q = C.getOffsets(),
                Z = R(M, q, Q, O, U, b, z),
                Ot = z(O[M].toFixed(b));
              if (Z.length) {
                var qt = Z.reduce(function (gt, tr, nr, yt) {
                  return gt.length
                    ? t(t([], gt, !0), [q[yt[nr]].x], !1)
                    : [q[yt[nr]].x];
                }, []);
                if (Math.min.apply(Math, qt) === q[M].x) {
                  var en = [];
                  Z.forEach(function (gt) {
                    en.push(O[gt].toFixed(b));
                  }),
                    (Ot = Array.from(
                      new Set(
                        en.sort(function (gt, tr) {
                          return parseFloat(gt) - parseFloat(tr);
                        })
                      )
                    )
                      .map(z)
                      .join(U));
                  var yn = Math.min.apply(Math, qt),
                    vt = Math.max.apply(Math, qt),
                    Zr = Q[Z[qt.indexOf(vt)]].getBoundingClientRect().width;
                  (de.left = "".concat(Math.abs(yn - (vt + Zr)) / 2, "px")),
                    (de.transform = "translate(-50%, 0)");
                } else de.visibility = "hidden";
              }
              re(Ot), F(de);
            }
          },
          [C, O]
        ),
        [V, T]
      );
    };
  e.useThumbOverlap = H;
  function A(C, O, M, I) {
    var U = C.getBoundingClientRect(),
      z = U.left,
      b = U.top,
      E = U.width,
      T = U.height;
    return u(I) ? Math.abs(M - (b + T / 2)) : Math.abs(O - (z + E / 2));
  }
})(Ss);
var Fv =
    ($e && $e.__extends) ||
    (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (r, l) {
                r.__proto__ = l;
              }) ||
            function (r, l) {
              for (var i in l)
                Object.prototype.hasOwnProperty.call(l, i) && (r[i] = l[i]);
            }),
          e(t, n)
        );
      };
      return function (t, n) {
        if (typeof n != "function" && n !== null)
          throw new TypeError(
            "Class extends value " + String(n) + " is not a constructor or null"
          );
        e(t, n);
        function r() {
          this.constructor = t;
        }
        t.prototype =
          n === null
            ? Object.create(n)
            : ((r.prototype = n.prototype), new r());
      };
    })(),
  Lv =
    ($e && $e.__createBinding) ||
    (Object.create
      ? function (e, t, n, r) {
          r === void 0 && (r = n);
          var l = Object.getOwnPropertyDescriptor(t, n);
          (!l || ("get" in l ? !t.__esModule : l.writable || l.configurable)) &&
            (l = {
              enumerable: !0,
              get: function () {
                return t[n];
              },
            }),
            Object.defineProperty(e, r, l);
        }
      : function (e, t, n, r) {
          r === void 0 && (r = n), (e[r] = t[n]);
        }),
  Mv =
    ($e && $e.__setModuleDefault) ||
    (Object.create
      ? function (e, t) {
          Object.defineProperty(e, "default", { enumerable: !0, value: t });
        }
      : function (e, t) {
          e.default = t;
        }),
  zv =
    ($e && $e.__importStar) ||
    function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null)
        for (var n in e)
          n !== "default" &&
            Object.prototype.hasOwnProperty.call(e, n) &&
            Lv(t, e, n);
      return Mv(t, e), t;
    },
  Bu =
    ($e && $e.__spreadArray) ||
    function (e, t, n) {
      if (n || arguments.length === 2)
        for (var r = 0, l = t.length, i; r < l; r++)
          (i || !(r in t)) &&
            (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
      return e.concat(i || Array.prototype.slice.call(t));
    };
Object.defineProperty(ws, "__esModule", { value: !0 });
var Sl = zv(x),
  Y = Ss,
  ge = Ri,
  Iv = ["ArrowRight", "ArrowUp", "k", "PageUp"],
  Av = ["ArrowLeft", "ArrowDown", "j", "PageDown"],
  Uv = (function (e) {
    Fv(t, e);
    function t(n) {
      var r = e.call(this, n) || this;
      if (
        ((r.trackRef = Sl.createRef()),
        (r.thumbRefs = []),
        (r.state = {
          draggedTrackPos: [-1, -1],
          draggedThumbIndex: -1,
          thumbZIndexes: new Array(r.props.values.length)
            .fill(0)
            .map(function (l, i) {
              return i;
            }),
          isChanged: !1,
          markOffsets: [],
        }),
        (r.getOffsets = function () {
          var l = r.props,
            i = l.direction,
            o = l.values,
            a = l.min,
            s = l.max,
            u = r.trackRef.current,
            d = u.getBoundingClientRect(),
            p = (0, Y.getPaddingAndBorder)(u);
          return r.getThumbs().map(function (h, y) {
            var g = { x: 0, y: 0 },
              w = h.getBoundingClientRect(),
              k = (0, Y.getMargin)(h);
            switch (i) {
              case ge.Direction.Right:
                return (
                  (g.x = (k.left + p.left) * -1),
                  (g.y = ((w.height - d.height) / 2 + p.top) * -1),
                  (g.x +=
                    d.width * (0, Y.relativeValue)(o[y], a, s) - w.width / 2),
                  g
                );
              case ge.Direction.Left:
                return (
                  (g.x = (k.right + p.right) * -1),
                  (g.y = ((w.height - d.height) / 2 + p.top) * -1),
                  (g.x +=
                    d.width -
                    d.width * (0, Y.relativeValue)(o[y], a, s) -
                    w.width / 2),
                  g
                );
              case ge.Direction.Up:
                return (
                  (g.x = ((w.width - d.width) / 2 + k.left + p.left) * -1),
                  (g.y = -p.left),
                  (g.y +=
                    d.height -
                    d.height * (0, Y.relativeValue)(o[y], a, s) -
                    w.height / 2),
                  g
                );
              case ge.Direction.Down:
                return (
                  (g.x = ((w.width - d.width) / 2 + k.left + p.left) * -1),
                  (g.y = -p.left),
                  (g.y +=
                    d.height * (0, Y.relativeValue)(o[y], a, s) - w.height / 2),
                  g
                );
              default:
                return (0, Y.assertUnreachable)(i);
            }
          });
        }),
        (r.getThumbs = function () {
          return r.trackRef && r.trackRef.current
            ? Array.from(r.trackRef.current.children).filter(function (l) {
                return l.hasAttribute("aria-valuenow");
              })
            : (console.warn(
                "No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"
              ),
              []);
        }),
        (r.getTargetIndex = function (l) {
          return r.getThumbs().findIndex(function (i) {
            return i === l.target || i.contains(l.target);
          });
        }),
        (r.addTouchEvents = function (l) {
          document.addEventListener("touchmove", r.schdOnTouchMove, {
            passive: !1,
          }),
            document.addEventListener("touchend", r.schdOnEnd, { passive: !1 }),
            document.addEventListener("touchcancel", r.schdOnEnd, {
              passive: !1,
            });
        }),
        (r.addMouseEvents = function (l) {
          document.addEventListener("mousemove", r.schdOnMouseMove),
            document.addEventListener("mouseup", r.schdOnEnd);
        }),
        (r.onMouseDownTrack = function (l) {
          var i;
          if (l.button === 0)
            if (
              (l.persist(),
              l.preventDefault(),
              r.addMouseEvents(l.nativeEvent),
              r.props.values.length > 1 && r.props.draggableTrack)
            ) {
              if (
                r.thumbRefs.some(function (a) {
                  var s;
                  return (s = a.current) === null || s === void 0
                    ? void 0
                    : s.contains(l.target);
                })
              )
                return;
              r.setState(
                { draggedTrackPos: [l.clientX, l.clientY] },
                function () {
                  return r.onMove(l.clientX, l.clientY);
                }
              );
            } else {
              var o = (0, Y.getClosestThumbIndex)(
                r.thumbRefs.map(function (a) {
                  return a.current;
                }),
                l.clientX,
                l.clientY,
                r.props.direction
              );
              (i = r.thumbRefs[o].current) === null ||
                i === void 0 ||
                i.focus(),
                r.setState({ draggedThumbIndex: o }, function () {
                  return r.onMove(l.clientX, l.clientY);
                });
            }
        }),
        (r.onResize = function () {
          (0, Y.translateThumbs)(r.getThumbs(), r.getOffsets(), r.props.rtl),
            r.calculateMarkOffsets();
        }),
        (r.onTouchStartTrack = function (l) {
          var i;
          if (
            (l.persist(),
            r.addTouchEvents(l.nativeEvent),
            r.props.values.length > 1 && r.props.draggableTrack)
          ) {
            if (
              r.thumbRefs.some(function (a) {
                var s;
                return (s = a.current) === null || s === void 0
                  ? void 0
                  : s.contains(l.target);
              })
            )
              return;
            r.setState(
              { draggedTrackPos: [l.touches[0].clientX, l.touches[0].clientY] },
              function () {
                return r.onMove(l.touches[0].clientX, l.touches[0].clientY);
              }
            );
          } else {
            var o = (0, Y.getClosestThumbIndex)(
              r.thumbRefs.map(function (a) {
                return a.current;
              }),
              l.touches[0].clientX,
              l.touches[0].clientY,
              r.props.direction
            );
            (i = r.thumbRefs[o].current) === null || i === void 0 || i.focus(),
              r.setState({ draggedThumbIndex: o }, function () {
                return r.onMove(l.touches[0].clientX, l.touches[0].clientY);
              });
          }
        }),
        (r.onMouseOrTouchStart = function (l) {
          if (!r.props.disabled) {
            var i = (0, Y.isTouchEvent)(l);
            if (!(!i && l.button !== 0)) {
              var o = r.getTargetIndex(l);
              o !== -1 &&
                (i ? r.addTouchEvents(l) : r.addMouseEvents(l),
                r.setState({
                  draggedThumbIndex: o,
                  thumbZIndexes: r.state.thumbZIndexes.map(function (a, s) {
                    return s === o
                      ? Math.max.apply(Math, r.state.thumbZIndexes)
                      : a <= r.state.thumbZIndexes[o]
                      ? a
                      : a - 1;
                  }),
                }));
            }
          }
        }),
        (r.onMouseMove = function (l) {
          l.preventDefault(), r.onMove(l.clientX, l.clientY);
        }),
        (r.onTouchMove = function (l) {
          l.preventDefault(),
            r.onMove(l.touches[0].clientX, l.touches[0].clientY);
        }),
        (r.onKeyDown = function (l) {
          var i = r.props,
            o = i.values,
            a = i.onChange,
            s = i.step,
            u = i.rtl,
            d = i.direction,
            p = r.state.isChanged,
            h = r.getTargetIndex(l.nativeEvent),
            y =
              u || d === ge.Direction.Left || d === ge.Direction.Down ? -1 : 1;
          h !== -1 &&
            (Iv.includes(l.key)
              ? (l.preventDefault(),
                r.setState({ draggedThumbIndex: h, isChanged: !0 }),
                a(
                  (0, Y.replaceAt)(
                    o,
                    h,
                    r.normalizeValue(
                      o[h] + y * (l.key === "PageUp" ? s * 10 : s),
                      h
                    )
                  )
                ))
              : Av.includes(l.key)
              ? (l.preventDefault(),
                r.setState({ draggedThumbIndex: h, isChanged: !0 }),
                a(
                  (0, Y.replaceAt)(
                    o,
                    h,
                    r.normalizeValue(
                      o[h] - y * (l.key === "PageDown" ? s * 10 : s),
                      h
                    )
                  )
                ))
              : l.key === "Tab"
              ? r.setState({ draggedThumbIndex: -1 }, function () {
                  p && r.fireOnFinalChange();
                })
              : p && r.fireOnFinalChange());
        }),
        (r.onKeyUp = function (l) {
          var i = r.state.isChanged;
          r.setState({ draggedThumbIndex: -1 }, function () {
            i && r.fireOnFinalChange();
          });
        }),
        (r.onMove = function (l, i) {
          var o = r.state,
            a = o.draggedThumbIndex,
            s = o.draggedTrackPos,
            u = r.props,
            d = u.direction,
            p = u.min,
            h = u.max,
            y = u.onChange,
            g = u.values,
            w = u.step,
            k = u.rtl;
          if (a === -1 && s[0] === -1 && s[1] === -1) return null;
          var m = r.trackRef.current;
          if (!m) return null;
          var f = m.getBoundingClientRect(),
            v = (0, Y.isVertical)(d) ? f.height : f.width;
          if (s[0] !== -1 && s[1] !== -1) {
            var S = l - s[0],
              j = i - s[1],
              N = 0;
            switch (d) {
              case ge.Direction.Right:
              case ge.Direction.Left:
                N = (S / v) * (h - p);
                break;
              case ge.Direction.Down:
              case ge.Direction.Up:
                N = (j / v) * (h - p);
                break;
              default:
                (0, Y.assertUnreachable)(d);
            }
            if ((k && (N *= -1), Math.abs(N) >= w / 2)) {
              for (var _ = 0; _ < r.thumbRefs.length; _++) {
                if (
                  (g[_] === h && Math.sign(N) === 1) ||
                  (g[_] === p && Math.sign(N) === -1)
                )
                  return;
                var R = g[_] + N;
                R > h ? (N = h - g[_]) : R < p && (N = p - g[_]);
              }
              for (var H = g.slice(0), _ = 0; _ < r.thumbRefs.length; _++)
                H = (0, Y.replaceAt)(H, _, r.normalizeValue(g[_] + N, _));
              r.setState({ draggedTrackPos: [l, i] }), y(H);
            }
          } else {
            var A = 0;
            switch (d) {
              case ge.Direction.Right:
                A = ((l - f.left) / v) * (h - p) + p;
                break;
              case ge.Direction.Left:
                A = ((v - (l - f.left)) / v) * (h - p) + p;
                break;
              case ge.Direction.Down:
                A = ((i - f.top) / v) * (h - p) + p;
                break;
              case ge.Direction.Up:
                A = ((v - (i - f.top)) / v) * (h - p) + p;
                break;
              default:
                (0, Y.assertUnreachable)(d);
            }
            k && (A = h + p - A),
              Math.abs(g[a] - A) >= w / 2 &&
                y((0, Y.replaceAt)(g, a, r.normalizeValue(A, a)));
          }
        }),
        (r.normalizeValue = function (l, i) {
          var o = r.props,
            a = o.min,
            s = o.max,
            u = o.step,
            d = o.allowOverlap,
            p = o.values;
          return (0, Y.normalizeValue)(l, i, a, s, u, d, p);
        }),
        (r.onEnd = function (l) {
          if (
            (l.preventDefault(),
            document.removeEventListener("mousemove", r.schdOnMouseMove),
            document.removeEventListener("touchmove", r.schdOnTouchMove),
            document.removeEventListener("mouseup", r.schdOnEnd),
            document.removeEventListener("touchend", r.schdOnEnd),
            document.removeEventListener("touchcancel", r.schdOnEnd),
            r.state.draggedThumbIndex === -1 &&
              r.state.draggedTrackPos[0] === -1 &&
              r.state.draggedTrackPos[1] === -1)
          )
            return null;
          r.setState(
            { draggedThumbIndex: -1, draggedTrackPos: [-1, -1] },
            function () {
              r.fireOnFinalChange();
            }
          );
        }),
        (r.fireOnFinalChange = function () {
          r.setState({ isChanged: !1 });
          var l = r.props,
            i = l.onFinalChange,
            o = l.values;
          i && i(o);
        }),
        (r.updateMarkRefs = function (l) {
          if (!l.renderMark) {
            (r.numOfMarks = void 0), (r.markRefs = void 0);
            return;
          }
          (r.numOfMarks = (l.max - l.min) / r.props.step), (r.markRefs = []);
          for (var i = 0; i < r.numOfMarks + 1; i++)
            r.markRefs[i] = Sl.createRef();
        }),
        (r.calculateMarkOffsets = function () {
          if (
            !(
              !r.props.renderMark ||
              !r.trackRef ||
              !r.numOfMarks ||
              !r.markRefs ||
              r.trackRef.current === null
            )
          ) {
            for (
              var l = window.getComputedStyle(r.trackRef.current),
                i = parseInt(l.width, 10),
                o = parseInt(l.height, 10),
                a = parseInt(l.paddingLeft, 10),
                s = parseInt(l.paddingTop, 10),
                u = [],
                d = 0;
              d < r.numOfMarks + 1;
              d++
            ) {
              var p = 9999,
                h = 9999;
              if (r.markRefs[d].current) {
                var y = r.markRefs[d].current.getBoundingClientRect();
                (p = y.height), (h = y.width);
              }
              r.props.direction === ge.Direction.Left ||
              r.props.direction === ge.Direction.Right
                ? u.push([
                    Math.round((i / r.numOfMarks) * d + a - h / 2),
                    -Math.round((p - o) / 2),
                  ])
                : u.push([
                    Math.round((o / r.numOfMarks) * d + s - p / 2),
                    -Math.round((h - i) / 2),
                  ]);
            }
            r.setState({ markOffsets: u });
          }
        }),
        n.step === 0)
      )
        throw new Error('"step" property should be a positive number');
      return (
        (r.schdOnMouseMove = (0, Y.schd)(r.onMouseMove)),
        (r.schdOnTouchMove = (0, Y.schd)(r.onTouchMove)),
        (r.schdOnEnd = (0, Y.schd)(r.onEnd)),
        (r.thumbRefs = n.values.map(function () {
          return Sl.createRef();
        })),
        r.updateMarkRefs(n),
        r
      );
    }
    return (
      (t.prototype.componentDidMount = function () {
        var n = this,
          r = this.props,
          l = r.values,
          i = r.min,
          o = r.step;
        (this.resizeObserver = window.ResizeObserver
          ? new window.ResizeObserver(this.onResize)
          : {
              observe: function () {
                return window.addEventListener("resize", n.onResize);
              },
              unobserve: function () {
                return window.removeEventListener("resize", n.onResize);
              },
            }),
          document.addEventListener("touchstart", this.onMouseOrTouchStart, {
            passive: !1,
          }),
          document.addEventListener("mousedown", this.onMouseOrTouchStart, {
            passive: !1,
          }),
          !this.props.allowOverlap &&
            (0, Y.checkInitialOverlap)(this.props.values),
          this.props.values.forEach(function (a) {
            return (0, Y.checkBoundaries)(a, n.props.min, n.props.max);
          }),
          this.resizeObserver.observe(this.trackRef.current),
          (0, Y.translateThumbs)(
            this.getThumbs(),
            this.getOffsets(),
            this.props.rtl
          ),
          this.calculateMarkOffsets(),
          l.forEach(function (a) {
            (0, Y.isStepDivisible)(i, a, o) ||
              console.warn(
                "The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values."
              );
          });
      }),
      (t.prototype.componentDidUpdate = function (n, r) {
        var l = this.props,
          i = l.max,
          o = l.min,
          a = l.step,
          s = l.values,
          u = l.rtl;
        (n.max !== i || n.min !== o || n.step !== a) &&
          this.updateMarkRefs(this.props),
          (0, Y.translateThumbs)(this.getThumbs(), this.getOffsets(), u),
          (n.max !== i ||
            n.min !== o ||
            n.step !== a ||
            r.markOffsets.length !== this.state.markOffsets.length) &&
            (this.calculateMarkOffsets(),
            s.forEach(function (d) {
              (0, Y.isStepDivisible)(o, d, a) ||
                console.warn(
                  "The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values."
                );
            }));
      }),
      (t.prototype.componentWillUnmount = function () {
        var n = { passive: !1 };
        document.removeEventListener("mousedown", this.onMouseOrTouchStart, n),
          document.removeEventListener("mousemove", this.schdOnMouseMove),
          document.removeEventListener("touchmove", this.schdOnTouchMove),
          document.removeEventListener("touchstart", this.onMouseOrTouchStart),
          document.removeEventListener("mouseup", this.schdOnEnd),
          document.removeEventListener("touchend", this.schdOnEnd),
          this.resizeObserver.unobserve(this.trackRef.current);
      }),
      (t.prototype.render = function () {
        var n = this,
          r = this.props,
          l = r.renderTrack,
          i = r.renderThumb,
          o = r.renderMark,
          a =
            o === void 0
              ? function () {
                  return null;
                }
              : o,
          s = r.values,
          u = r.min,
          d = r.max,
          p = r.allowOverlap,
          h = r.disabled,
          y = this.state,
          g = y.draggedThumbIndex,
          w = y.thumbZIndexes,
          k = y.markOffsets;
        return l({
          props: {
            style: {
              transform: "scale(1)",
              cursor:
                g > -1
                  ? "grabbing"
                  : this.props.draggableTrack
                  ? (0, Y.isVertical)(this.props.direction)
                    ? "ns-resize"
                    : "ew-resize"
                  : s.length === 1 && !h
                  ? "pointer"
                  : "inherit",
            },
            onMouseDown: h ? Y.voidFn : this.onMouseDownTrack,
            onTouchStart: h ? Y.voidFn : this.onTouchStartTrack,
            ref: this.trackRef,
          },
          isDragged: this.state.draggedThumbIndex > -1,
          disabled: h,
          children: Bu(
            Bu(
              [],
              k.map(function (m, f, v) {
                return a({
                  props: {
                    style:
                      n.props.direction === ge.Direction.Left ||
                      n.props.direction === ge.Direction.Right
                        ? {
                            position: "absolute",
                            left: "".concat(m[0], "px"),
                            marginTop: "".concat(m[1], "px"),
                          }
                        : {
                            position: "absolute",
                            top: "".concat(m[0], "px"),
                            marginLeft: "".concat(m[1], "px"),
                          },
                    key: "mark".concat(f),
                    ref: n.markRefs[f],
                  },
                  index: f,
                });
              }),
              !0
            ),
            s.map(function (m, f) {
              var v = n.state.draggedThumbIndex === f;
              return i({
                index: f,
                value: m,
                isDragged: v,
                props: {
                  style: {
                    position: "absolute",
                    zIndex: w[f],
                    cursor: h ? "inherit" : v ? "grabbing" : "grab",
                    userSelect: "none",
                    touchAction: "none",
                    WebkitUserSelect: "none",
                    MozUserSelect: "none",
                    msUserSelect: "none",
                  },
                  key: f,
                  tabIndex: h ? void 0 : 0,
                  "aria-valuemax": p ? d : s[f + 1] || d,
                  "aria-valuemin": p ? u : s[f - 1] || u,
                  "aria-valuenow": m,
                  draggable: !1,
                  ref: n.thumbRefs[f],
                  role: "slider",
                  onKeyDown: h ? Y.voidFn : n.onKeyDown,
                  onKeyUp: h ? Y.voidFn : n.onKeyUp,
                },
              });
            }),
            !0
          ),
        });
      }),
      (t.defaultProps = {
        step: 1,
        direction: ge.Direction.Right,
        rtl: !1,
        disabled: !1,
        allowOverlap: !1,
        draggableTrack: !1,
        min: 0,
        max: 100,
      }),
      t
    );
  })(Sl.Component);
ws.default = Uv;
(function (e) {
  var t =
    ($e && $e.__importDefault) ||
    function (i) {
      return i && i.__esModule ? i : { default: i };
    };
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.checkValuesAgainstBoundaries =
      e.relativeValue =
      e.useThumbOverlap =
      e.Direction =
      e.getTrackBackground =
      e.Range =
        void 0);
  var n = t(ws);
  e.Range = n.default;
  var r = Ss;
  Object.defineProperty(e, "getTrackBackground", {
    enumerable: !0,
    get: function () {
      return r.getTrackBackground;
    },
  }),
    Object.defineProperty(e, "useThumbOverlap", {
      enumerable: !0,
      get: function () {
        return r.useThumbOverlap;
      },
    }),
    Object.defineProperty(e, "relativeValue", {
      enumerable: !0,
      get: function () {
        return r.relativeValue;
      },
    }),
    Object.defineProperty(e, "checkValuesAgainstBoundaries", {
      enumerable: !0,
      get: function () {
        return r.checkValuesAgainstBoundaries;
      },
    });
  var l = Ri;
  Object.defineProperty(e, "Direction", {
    enumerable: !0,
    get: function () {
      return l.Direction;
    },
  });
})(ma);
const $v = 1,
  Vu = 0,
  Wu = 5e4,
  Bv = ({ rtl: e, setPriceRange: t }) => {
    const [n, r] = x.useState([10, 100]);
    function l() {
      t((i) => ({ ...i, priceMin: n[0], priceMax: n[1] }));
    }
    return c.jsx("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        width: "45%",
        maxWidth: "450px",
        marginLeft: "2rem",
      },
      children: c.jsx(ma.Range, {
        values: n,
        step: $v,
        min: Vu,
        max: Wu,
        rtl: e,
        onChange: (i) => r(i),
        renderTrack: ({ props: i, children: o }) =>
          c.jsx("div", {
            onMouseUp: l,
            onMouseDown: i.onMouseDown,
            onTouchStart: i.onTouchStart,
            style: {
              ...i.style,
              height: "36px",
              display: "flex",
              width: "100%",
            },
            children: c.jsx("div", {
              ref: i.ref,
              style: {
                height: "5px",
                width: "100%",
                borderRadius: "4px",
                background: ma.getTrackBackground({
                  values: n,
                  colors: ["#ccc", "#77B5FE", "#ccc"],
                  min: Vu,
                  max: Wu,
                  rtl: e,
                }),
                alignSelf: "center",
              },
              children: o,
            }),
          }),
        renderThumb: ({ index: i, props: o, isDragged: a }) =>
          c.jsxs("div", {
            ...o,
            style: {
              ...o.style,
              height: "17px",
              width: "17px",
              borderRadius: "100%",
              backgroundColor: a ? "#14b8a6" : "#77B5FE",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #AAA",
            },
            children: [
              c.jsxs("div", {
                style: {
                  position: "absolute",
                  top: "-22px",
                  color: "#fff",
                  fontSize: "12px",
                  fontFamily: "Arial,Helvetica Neue,Helvetica,sans-serif",
                  padding: "1px 4px 1px 4px",
                  borderRadius: "4px",
                  backgroundColor: "#77B5FE",
                },
                children: [n[i].toFixed(0), " XOF"],
              }),
              c.jsx("div", {
                style: {
                  height: "16px",
                  width: "5px",
                  backgroundColor: a ? "#14b8a6" : "#77B5FE",
                },
              }),
            ],
          }),
      }),
    });
  },
  Vv = ({ setSort: e, setPriceRange: t }) => {
    const [n, r] = x.useState(!0);
    return (
      x.useEffect(() => {
        e(n ? "price-asc" : "price-desc");
      }, [n, e]),
      c.jsx("nav", {
        className:
          "fixed w-full top-14 z-10 bg-[#fff] border-y border-neutral-200",
        children: c.jsxs("div", {
          className:
            "flex items-center justify-center whitespace-nowrap h-10 my-1 lg:w-[80%] mx-auto",
          children: [
            c.jsx("span", {
              className: "hidden md:block text-sm mr-4",
              children: "Trier par prix",
            }),
            c.jsxs("label", {
              className:
                "w-11 h-5 rounded-2xl bg-[#77B5FE] flex items-center cursor-pointer",
              children: [
                c.jsx("input", {
                  className: "hidden",
                  type: "checkbox",
                  name: "price",
                  onChange: () => {
                    r(!n);
                  },
                  checked: n,
                }),
                c.jsx("div", {
                  className: `${n ? "translate-x-0.5" : "translate-x-6"}
            duration-300 bg-slate-50 w-[1.1rem] h-[1.1rem] rounded-full border border-zinc-500 
            flex items-center text-sm justify-center
          `,
                  children: n
                    ? c.jsx("span", { children: "⇡" })
                    : c.jsx("span", { children: "⇣" }),
                }),
              ],
            }),
            c.jsx("span", {
              className: "text-sm ml-4",
              children: "Prix entre :",
            }),
            c.jsx(Bv, { setPriceRange: t }),
          ],
        }),
      })
    );
  },
  bu = () =>
    c.jsxs(c.Fragment, {
      children: [
        c.jsx("div", {
          className:
            "text-2xl  text-center sm:text-left tracking-tight sm:text-2xl sm:tracking-normal",
          children: c.jsx("span", {
            children:
              "Prêts à faire du tri dans vos placards ou simplement optimisez vos ventes?",
          }),
        }),
        c.jsx(it, {
          to: "/publish",
          className: "w-full flex justify-center sm:justify-start",
          children: c.jsx("button", {
            className:
              "bg-[#77B5FE] text-slate-50 w-[85%] sm:w-44 h-10 mt-6 text-xl sm:text-sm",
            children: "Commencer à vendre",
          }),
        }),
      ],
    }),
  Wv = () =>
    c.jsxs("div", {
      className: "mt-[6.5rem]",
      children: [
        c.jsxs("div", {
          className: "bg-hero",
          children: [
            c.jsx("img", {
              className:
                "absolute bottom-[14%] md:-bottom-[2rem] right-0 pointer-events-none",
              src: "/images/tear.svg",
              alt: "tear paper",
            }),
            c.jsx("div", { className: "hero-ready1", children: c.jsx(bu, {}) }),
          ],
        }),
        c.jsx("div", {
          className: "flex flex-col items-center sm:hidden",
          children: c.jsx(bu, {}),
        }),
      ],
    }),
  bv = ({
    docsCount: e,
    totalCount: t,
    pageLimit: n,
    gotoNextPage: r,
    gotoPrevPage: l,
  }) =>
    c.jsxs("div", {
      className: "flex gap-2",
      children: [
        c.jsx("button", {
          onClick: () => {
            l(n);
          },
          className: `${e > n ? "active" : ""} chevron`,
          children: c.jsx("img", {
            src: "/icons/chevron_left.svg",
            alt: "chevron",
          }),
        }),
        c.jsx("button", {
          onClick: () => {
            r(n);
          },
          className: `${e < t ? "active" : ""} chevron`,
          children: c.jsx("img", {
            src: "/icons/chevron_right.svg",
            alt: "chevron",
          }),
        }),
      ],
    }),
  Hv = ({ offer: e }) => {
    const {
      owner: t,
      product_name: n,
      product_image: r,
      product_details: l,
      product_price: i,
    } = e;
    return c.jsx(it, {
      to: `/offer/${e._id}`,
      className: "relative",
      children: c.jsxs("div", {
        className: "flex flex-col w-full h-auto",
        children: [
          c.jsxs("div", {
            className: "flex items-center justify-center gap-2 p-2 text-xs ",
            children: [
              c.jsx("img", {
                className: "w-6 h-6 rounded-full",
                src: t.account.avatar
                  ? t.account.avatar.secure_url
                  : "/icons/account.svg",
                alt: "avatar",
              }),
              c.jsx("span", { children: t.account.username }),
            ],
          }),
          c.jsxs("div", {
            children: [
              c.jsx("img", {
                className: "w-full aspect-[0.6/1]",
                src: r.secure_url,
                alt: "test",
              }),
              c.jsxs("div", {
                className: "flex flex-col p-2",
                children: [
                  c.jsx("span", { children: `${i} XOF` }),
                  c.jsx("span", { className: "w-[90%] truncate", children: n }),
                  l.map((o, a) =>
                    c.jsxs(
                      "div",
                      {
                        className: "text-sm md:text-xs",
                        children: [
                          o.TAILLE && c.jsx("span", { children: o.TAILLE }),
                          o.MARQUE && c.jsx("span", { children: o.MARQUE }),
                        ],
                      },
                      a
                    )
                  ),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  Kv = ({
    datas: e,
    docsCount: t,
    pageLimit: n,
    currentPage: r,
    gotoNextPage: l,
    gotoPrevPage: i,
  }) => {
    const o = Math.ceil(e.count / n);
    return c.jsx(c.Fragment, {
      children: c.jsxs("article", {
        className: "container mt-8",
        children: [
          c.jsxs("div", {
            className: "flex gap-4 items-center justify-center md:justify-end ",
            children: [
              c.jsx("p", { children: `Total nombre d'offres: ${e.count}` }),
              c.jsx("span", { children: " | " }),
              c.jsx("p", {
                className: "text-zinc-500",
                children: `Resultat sur la page: ${e.offers.length} `,
              }),
              c.jsx("span", { children: " | " }),
              c.jsx("p", {
                className: "text-zinc-500",
                children: `Page: ${r} sur ${o}`,
              }),
              c.jsx(bv, {
                docsCount: t,
                pageLimit: n,
                totalCount: e.count,
                gotoNextPage: l,
                gotoPrevPage: i,
              }),
            ],
          }),
          e.offers.length === 0
            ? c.jsx("div", {
                className: "mt-12",
                children: c.jsx("h3", {
                  className: "text-center",
                  children: "PAS DE RESULTAT",
                }),
              })
            : c.jsx("section", {
                className: "card-offer my-6",
                children: e.offers.map((a) =>
                  c.jsx(
                    x.Fragment,
                    { children: c.jsx(Hv, { offer: a }) },
                    a._id
                  )
                ),
              }),
        ],
      }),
    });
  },
  Qv = () => {
    const e = Array.from({ length: 10 });
    return c.jsx("div", {
      className: "ph-item",
      id: "load",
      children: c.jsx("div", {
        className: "ph-col-12 card-offer",
        children: e.map((t, n) =>
          c.jsxs(
            "div",
            {
              className: "mt-2",
              children: [
                c.jsx("div", { className: "ph-picture ph-load" }),
                c.jsxs("div", {
                  className: "ph-row",
                  children: [
                    c.jsx("div", { className: "ph-col-8 empty" }),
                    c.jsx("div", { className: "ph-col-6" }),
                    c.jsx("div", { className: "ph-col-6 empty" }),
                    c.jsx("div", { className: "ph-col-12" }),
                    c.jsx("div", { className: "ph-col-12" }),
                    c.jsx("div", { className: "ph-col-12" }),
                  ],
                }),
              ],
            },
            n
          )
        ),
      }),
    });
  };
function Yv(e, t, n, r) {
  function l(o) {
    e((a) => a + 1), o >= r.count - t ? n(r.count) : n((a) => a + o);
  }
  function i(o) {
    e((a) => a - 1), o > t - o ? n(o) : n((a) => a - o);
  }
  return { gotoNextPage: l, gotoPrevPage: i };
}
const mo = 15,
  Xv = ({ search: e }) => {
    const [t, n] = x.useState([]),
      [r, l] = x.useState(!0),
      [i, o] = x.useState(mo),
      [a, s] = x.useState("price-asc"),
      [u, d] = x.useState(1),
      [p, h] = x.useState({ priceMin: "", priceMax: "" });
    x.useEffect(() => {
      const k = `http://localhost:8000/offers?${new URLSearchParams({
        limit: mo,
        sort: a,
        page: u,
        priceMin: p.priceMin,
        priceMax: p.priceMax,
        title: e,
      }).toString()}`;
      async function m() {
        try {
          const f = await fetch(k),
            v = await f.json();
          f.ok && (n(v), l(!1));
        } catch (f) {
          console.error(f);
        }
      }
      m();
    }, [u, a, e, p]);
    const { gotoNextPage: y, gotoPrevPage: g } = Yv(d, i, o, t);
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx(Vv, { setSort: s, setPriceRange: h }),
        c.jsx(Wv, {}),
        r
          ? c.jsx(Qv, {})
          : c.jsx(Kv, {
              datas: t,
              docsCount: i,
              pageLimit: mo,
              currentPage: u,
              gotoNextPage: y,
              gotoPrevPage: g,
            }),
      ],
    });
  },
  Gv = () => {
    const e = Array.from({ length: 2 });
    return c.jsx("div", {
      className: "ph-item p-10 md:p-20 mt-10",
      children: c.jsx("div", {
        className: "ph-col-12",
        children: e.map((t, n) =>
          c.jsxs(
            "div",
            {
              className: "mt-10",
              children: [
                c.jsx("div", { className: "ph-picture" }),
                c.jsxs("div", {
                  className: "ph-row",
                  children: [
                    c.jsx("div", { className: "ph-col-8 empty" }),
                    c.jsx("div", { className: "ph-col-6" }),
                    c.jsx("div", { className: "ph-col-6 empty" }),
                    c.jsx("div", { className: "ph-col-12" }),
                    c.jsx("div", { className: "ph-col-12" }),
                    c.jsx("div", { className: "ph-col-12" }),
                  ],
                }),
              ],
            },
            n
          )
        ),
      }),
    });
  },
  Jv = () => {
    const [e, t] = x.useState({}),
      [n, r] = x.useState(!0),
      { id: l } = ov();
    x.useEffect(() => {
      async function p() {
        try {
          const h = await fetch(`http://localhost:8000/offer/${l}`),
            y = await h.json();
          h.ok && (t(y), r(!1));
        } catch (h) {
          console.error(h);
        }
      }
      p();
    }, [l]);
    const {
      product_pictures: i,
      product_price: o,
      product_details: a,
      product_name: s,
      product_description: u,
      owner: d,
    } = e;
    return n
      ? c.jsx(Gv, {})
      : c.jsx(c.Fragment, {
          children: c.jsxs("article", {
            className:
              "container flex flex-col items-center md:flex-row p-8 md:p-14 w-full h-auto gap-[5%] justify-around bg-stone-100 mt-[6.5rem]",
            children: [
              c.jsx("div", {
                className: "w-[85%] md:w-[45%] h-[90%] flex overflow-x-auto",
                children: i.map((p) =>
                  c.jsx(
                    x.Fragment,
                    {
                      children: c.jsx("img", {
                        className: "w-full h-full shrink-0",
                        src: p.secure_url,
                        alt: "img",
                      }),
                    },
                    p.asset_id
                  )
                ),
              }),
              c.jsxs("div", {
                className:
                  "flex flex-col justify-between w-[85%] max-w-[27rem] md:w-[45%] h-[90%] p-6 md:p-10 bg-[white]",
                children: [
                  c.jsxs("div", {
                    className: "w-full flex-auto mb-4",
                    children: [
                      c.jsx("span", {
                        className: "text-2xl",
                        children: `${o} XOF`,
                      }),
                      c.jsx("button", {
                        className:
                          "w-full bg-[#77B5FE] text-slate-50 h-10 mt-8 mb-4 mx-auto",
                        children: "Modifier/Supprimer",
                      }),
                      c.jsx("ul", {
                        className:
                          "detail flex flex-col text-sm uppercase mt-[10%]",
                        children: a.map((p) => {
                          const h = Object.keys(p);
                          return c.jsxs(
                            "li",
                            {
                              className: "flex",
                              children: [
                                c.jsx("span", {
                                  className: "text-neutral-400",
                                  children: `${h[0]}:`,
                                }),
                                c.jsx("span", { children: p[h[0]] }),
                              ],
                            },
                            h[0]
                          );
                        }),
                      }),
                    ],
                  }),
                  c.jsx("div", {
                    className: "w-full h-0.5 mt-2 mb-4 bg-slate-200",
                  }),
                  c.jsxs("div", {
                    className: "w-full flex flex-col justify-around",
                    children: [
                      c.jsx("h2", { children: s }),
                      c.jsx("p", { className: "text-sm my-2", children: u }),
                      c.jsxs("div", {
                        className: "flex items-center gap-10",
                        children: [
                          c.jsx("img", {
                            className: "w-9 h-9 rounded-full",
                            src: d.account.avatar
                              ? d.account.avatar.secure_url
                              : "/icons/account.svg",
                            alt: "avatar",
                          }),
                          c.jsx("span", { children: d.account.username }),
                        ],
                      }),
                    ],
                  }),
                  c.jsx(it, {
                    to: "/payment",
                    state: { title: s, price: o },
                    className: "w-[80%] mx-auto",
                    children: c.jsx("button", {
                      className:
                        "w-full bg-[#77B5FE] text-slate-50 h-10 mt-8 mb-4 mx-auto",
                      children: "Acheter",
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
  },
  Zv = ({ handleToken: e }) => {
    const t = Gr(),
      [n, r] = x.useState({
        username: "",
        email: "",
        password: "",
        checkPassword: "",
        newsletter: !0,
      }),
      [l, i] = x.useState(!1),
      [o, a] = x.useState(!1),
      [s, u] = x.useState(null);
    function d(h) {
      const { id: y, value: g, type: w, checked: k } = h.target;
      r({ ...n, [y]: w === "checkbox" ? k : g });
    }
    async function p(h) {
      h.preventDefault(), i(!0), a(!1), u(null);
      try {
        const y = await fetch("http://localhost:8000/user/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(n),
          }),
          g = await y.json();
        y.status === 409
          ? u("Cet email est déjà utilisé, veuillez en choisir un autre :)")
          : y.status === 400 &&
            g.message === "Password must be at least 8 characters long"
          ? (a(!0),
            u("Le mot de passe doit etre au moins 8 characters de longueur"))
          : y.status === 400
          ? u("Veuillez remplir tous les champs :)")
          : y.status === 418 &&
            (a(!0), u("Veuillez insérer un mot de passe identique")),
          g.token && (e(g.token), t("/"));
      } catch (y) {
        console.error(y);
      } finally {
        i(!1);
      }
    }
    return c.jsxs("fieldset", {
      className: "container h-full mt-[8.5rem] mb-16",
      children: [
        c.jsx("legend", {
          className: "text-2xl mx-auto mb-12",
          children: "S'inscrire",
        }),
        c.jsxs("form", {
          className:
            "flex flex-col gap-5 justify-center items-center w-[85%] h-[25rem] sm:max-w-xs mx-auto",
          onSubmit: p,
          children: [
            c.jsx("label", {
              htmlFor: "username",
              children: c.jsx("input", {
                className: "inputField",
                id: "username",
                type: "text",
                onChange: d,
                value: n.username,
                placeholder: "Nom d'utilisateur",
              }),
            }),
            c.jsx("label", {
              htmlFor: "email",
              children: c.jsx("input", {
                className: "inputField",
                id: "email",
                type: "email",
                onChange: d,
                value: n.email,
                placeholder: "Email",
              }),
            }),
            c.jsx("label", {
              className: o ? "warn" : "",
              htmlFor: "password",
              children: c.jsx("input", {
                className: "inputField",
                id: "password",
                type: "password",
                onChange: d,
                placeholder: "Mot de passe",
              }),
            }),
            c.jsx("label", {
              className: o ? "warn" : "",
              htmlFor: "checkPassword",
              children: c.jsx("input", {
                className: "inputField",
                id: "checkPassword",
                type: "password",
                onChange: d,
                placeholder: "Confirmez Mot de passe",
              }),
            }),
            c.jsxs("label", {
              className:
                "text-center flex flex-col items-center justify-center mt-2",
              htmlFor: "newsletter",
              children: [
                c.jsxs("div", {
                  className: "flex items-center w-full",
                  children: [
                    c.jsx("input", {
                      className: "w-6 h-5",
                      id: "newsletter",
                      type: "checkbox",
                      checked: n.newsletter,
                      onChange: d,
                    }),
                    c.jsx("span", {
                      className: "ml-4 text-gray-500",
                      children: "S'inscrire à notre newsletter",
                    }),
                  ],
                }),
                c.jsx("p", {
                  className: "text-left text-xs text-slate-400 mt-2",
                  children:
                    "En m'inscrivant je confirme avoir lu et accepté les Termes & Conditions et Politique de Confidentialité de Vinted. Je confirme avoir au moins 18 ans.",
                }),
              ],
            }),
            c.jsx("button", {
              className: "bg-[#77B5FE] text-xl text-slate-50 min-h-[40px]",
              children: l ? "En cours..." : "S'inscrire",
            }),
            s &&
              c.jsx("p", {
                className: "text-red-500 text-center",
                children: s,
              }),
            c.jsx(it, {
              to: "/login",
              children: c.jsx("span", {
                className: "text-sm text-[#77B5FE]",
                children: "Tu as deja un compte ? connecte-toi!",
              }),
            }),
          ],
        }),
      ],
    });
  },
  qv = ({ handleToken: e, visible: t, setVisible: n, token: r, user: l }) => {
    const i = Gr(),
      [o, a] = x.useState(""),
      [s, u] = x.useState(""),
      [d, p] = x.useState(!1),
      [h, y] = x.useState("");
    async function g(w) {
      w.preventDefault(), p(!0);
      try {
        const k = await fetch("http://localhost:8000/user/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: o, password: s }),
          }),
          m = await k.json();
        k.status === 401
          ? y("Email ou mot de passe incorrect")
          : k.status === 400 && y("Veuillez remplir tous les champs :)"),
          m.token && (e(m.token), i("/"));
      } catch (k) {
        console.error(k);
      } finally {
        p(!1);
      }
    }
    return r && l
      ? c.jsx(xs, { to: "/" })
      : c.jsxs("fieldset", {
          className: `container h-full ${t ? "" : "mt-[8.5rem] mb-16"}`,
          children: [
            c.jsx("legend", {
              className: "text-2xl mx-auto",
              children: "Se connecter",
            }),
            c.jsxs("form", {
              className:
                "flex flex-col gap-5 justify-center items-center w-[85%] h-[25rem] sm:max-w-xs mx-auto",
              onSubmit: g,
              children: [
                c.jsx("label", {
                  className: h ? "warn" : "",
                  htmlFor: "email",
                  children: c.jsx("input", {
                    className: "inputField",
                    id: "email",
                    type: "email",
                    value: o,
                    onChange: (w) => {
                      a(w.target.value);
                    },
                    placeholder: "Email",
                  }),
                }),
                c.jsx("label", {
                  className: h ? "warn" : "",
                  htmlFor: "password",
                  children: c.jsx("input", {
                    className: "inputField",
                    id: "password",
                    type: "password",
                    onChange: (w) => {
                      u(w.target.value);
                    },
                    placeholder: "Mot de passe",
                  }),
                }),
                c.jsx("button", {
                  className: "bg-[#77B5FE] text-slate-50 text-xl mt-6",
                  children: d ? "En cours..." : "Se connecter",
                }),
                h &&
                  c.jsx("p", {
                    className: "text-red-500 text-center",
                    children: h,
                  }),
                c.jsx("div", {
                  onClick: () => {
                    n(!t);
                  },
                  className: "hover:cursor-pointer",
                  children: c.jsx("span", {
                    className: "text-sm text-slate-600",
                    children: "Mot de passe oublie ?",
                  }),
                }),
                c.jsx(it, {
                  to: "/signup",
                  children: c.jsx("span", {
                    className: "text-sm text-[#77B5FE]",
                    children: "Pas encore de compte ? Inscris-toi !",
                  }),
                }),
              ],
            }),
          ],
        });
  },
  eg = ({ user: e, token: t }) =>
    e && t ? c.jsx(xv, {}) : c.jsx(xs, { to: "/login" }),
  Rt = ({
    children: e,
    id: t,
    handleChange: n,
    inputValue: r,
    placeholder: l,
  }) =>
    c.jsxs("div", {
      className:
        "flex flex-col md:flex-row w-[85%] h-28 md:h-20 justify-center mx-auto py-5 border-b border-neutral-200",
      children: [
        c.jsx("label", {
          className: "flex flex-1 items-center h-full px-4",
          htmlFor: t,
          children: e,
        }),
        c.jsx("input", {
          className: "publishField",
          type: "text",
          id: t,
          value: r,
          onChange: n,
          placeholder: l,
        }),
      ],
    });
var Ld = { exports: {} },
  tg = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  ng = tg,
  rg = ng;
function Md() {}
function zd() {}
zd.resetWarningCache = Md;
var lg = function () {
  function e(r, l, i, o, a, s) {
    if (s !== rg) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: zd,
    resetWarningCache: Md,
  };
  return (n.PropTypes = n), n;
};
Ld.exports = lg();
var ig = Ld.exports;
const B = fc(ig);
function qn(e, t, n, r) {
  function l(i) {
    return i instanceof n
      ? i
      : new n(function (o) {
          o(i);
        });
  }
  return new (n || (n = Promise))(function (i, o) {
    function a(d) {
      try {
        u(r.next(d));
      } catch (p) {
        o(p);
      }
    }
    function s(d) {
      try {
        u(r.throw(d));
      } catch (p) {
        o(p);
      }
    }
    function u(d) {
      d.done ? i(d.value) : l(d.value).then(a, s);
    }
    u((r = r.apply(e, t || [])).next());
  });
}
function er(e, t) {
  var n = {
      label: 0,
      sent: function () {
        if (i[0] & 1) throw i[1];
        return i[1];
      },
      trys: [],
      ops: [],
    },
    r,
    l,
    i,
    o;
  return (
    (o = { next: a(0), throw: a(1), return: a(2) }),
    typeof Symbol == "function" &&
      (o[Symbol.iterator] = function () {
        return this;
      }),
    o
  );
  function a(u) {
    return function (d) {
      return s([u, d]);
    };
  }
  function s(u) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; o && ((o = 0), u[0] && (n = 0)), n; )
      try {
        if (
          ((r = 1),
          l &&
            (i =
              u[0] & 2
                ? l.return
                : u[0]
                ? l.throw || ((i = l.return) && i.call(l), 0)
                : l.next) &&
            !(i = i.call(l, u[1])).done)
        )
          return i;
        switch (((l = 0), i && (u = [u[0] & 2, i.value]), u[0])) {
          case 0:
          case 1:
            i = u;
            break;
          case 4:
            return n.label++, { value: u[1], done: !1 };
          case 5:
            n.label++, (l = u[1]), (u = [0]);
            continue;
          case 7:
            (u = n.ops.pop()), n.trys.pop();
            continue;
          default:
            if (
              ((i = n.trys),
              !(i = i.length > 0 && i[i.length - 1]) &&
                (u[0] === 6 || u[0] === 2))
            ) {
              n = 0;
              continue;
            }
            if (u[0] === 3 && (!i || (u[1] > i[0] && u[1] < i[3]))) {
              n.label = u[1];
              break;
            }
            if (u[0] === 6 && n.label < i[1]) {
              (n.label = i[1]), (i = u);
              break;
            }
            if (i && n.label < i[2]) {
              (n.label = i[2]), n.ops.push(u);
              break;
            }
            i[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        u = t.call(e, n);
      } catch (d) {
        (u = [6, d]), (l = 0);
      } finally {
        r = i = 0;
      }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function Hu(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e),
    l,
    i = [],
    o;
  try {
    for (; (t === void 0 || t-- > 0) && !(l = r.next()).done; ) i.push(l.value);
  } catch (a) {
    o = { error: a };
  } finally {
    try {
      l && !l.done && (n = r.return) && n.call(r);
    } finally {
      if (o) throw o.error;
    }
  }
  return i;
}
function Ku(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, l = t.length, i; r < l; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var og = new Map([
  ["aac", "audio/aac"],
  ["abw", "application/x-abiword"],
  ["arc", "application/x-freearc"],
  ["avif", "image/avif"],
  ["avi", "video/x-msvideo"],
  ["azw", "application/vnd.amazon.ebook"],
  ["bin", "application/octet-stream"],
  ["bmp", "image/bmp"],
  ["bz", "application/x-bzip"],
  ["bz2", "application/x-bzip2"],
  ["cda", "application/x-cdf"],
  ["csh", "application/x-csh"],
  ["css", "text/css"],
  ["csv", "text/csv"],
  ["doc", "application/msword"],
  [
    "docx",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ],
  ["eot", "application/vnd.ms-fontobject"],
  ["epub", "application/epub+zip"],
  ["gz", "application/gzip"],
  ["gif", "image/gif"],
  ["heic", "image/heic"],
  ["heif", "image/heif"],
  ["htm", "text/html"],
  ["html", "text/html"],
  ["ico", "image/vnd.microsoft.icon"],
  ["ics", "text/calendar"],
  ["jar", "application/java-archive"],
  ["jpeg", "image/jpeg"],
  ["jpg", "image/jpeg"],
  ["js", "text/javascript"],
  ["json", "application/json"],
  ["jsonld", "application/ld+json"],
  ["mid", "audio/midi"],
  ["midi", "audio/midi"],
  ["mjs", "text/javascript"],
  ["mp3", "audio/mpeg"],
  ["mp4", "video/mp4"],
  ["mpeg", "video/mpeg"],
  ["mpkg", "application/vnd.apple.installer+xml"],
  ["odp", "application/vnd.oasis.opendocument.presentation"],
  ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
  ["odt", "application/vnd.oasis.opendocument.text"],
  ["oga", "audio/ogg"],
  ["ogv", "video/ogg"],
  ["ogx", "application/ogg"],
  ["opus", "audio/opus"],
  ["otf", "font/otf"],
  ["png", "image/png"],
  ["pdf", "application/pdf"],
  ["php", "application/x-httpd-php"],
  ["ppt", "application/vnd.ms-powerpoint"],
  [
    "pptx",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  ],
  ["rar", "application/vnd.rar"],
  ["rtf", "application/rtf"],
  ["sh", "application/x-sh"],
  ["svg", "image/svg+xml"],
  ["swf", "application/x-shockwave-flash"],
  ["tar", "application/x-tar"],
  ["tif", "image/tiff"],
  ["tiff", "image/tiff"],
  ["ts", "video/mp2t"],
  ["ttf", "font/ttf"],
  ["txt", "text/plain"],
  ["vsd", "application/vnd.visio"],
  ["wav", "audio/wav"],
  ["weba", "audio/webm"],
  ["webm", "video/webm"],
  ["webp", "image/webp"],
  ["woff", "font/woff"],
  ["woff2", "font/woff2"],
  ["xhtml", "application/xhtml+xml"],
  ["xls", "application/vnd.ms-excel"],
  ["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
  ["xml", "application/xml"],
  ["xul", "application/vnd.mozilla.xul+xml"],
  ["zip", "application/zip"],
  ["7z", "application/x-7z-compressed"],
  ["mkv", "video/x-matroska"],
  ["mov", "video/quicktime"],
  ["msg", "application/vnd.ms-outlook"],
]);
function Jr(e, t) {
  var n = ag(e);
  if (typeof n.path != "string") {
    var r = e.webkitRelativePath;
    Object.defineProperty(n, "path", {
      value:
        typeof t == "string"
          ? t
          : typeof r == "string" && r.length > 0
          ? r
          : e.name,
      writable: !1,
      configurable: !1,
      enumerable: !0,
    });
  }
  return n;
}
function ag(e) {
  var t = e.name,
    n = t && t.lastIndexOf(".") !== -1;
  if (n && !e.type) {
    var r = t.split(".").pop().toLowerCase(),
      l = og.get(r);
    l &&
      Object.defineProperty(e, "type", {
        value: l,
        writable: !1,
        configurable: !1,
        enumerable: !0,
      });
  }
  return e;
}
var sg = [".DS_Store", "Thumbs.db"];
function ug(e) {
  return qn(this, void 0, void 0, function () {
    return er(this, function (t) {
      return ci(e) && cg(e.dataTransfer)
        ? [2, mg(e.dataTransfer, e.type)]
        : fg(e)
        ? [2, dg(e)]
        : Array.isArray(e) &&
          e.every(function (n) {
            return "getFile" in n && typeof n.getFile == "function";
          })
        ? [2, pg(e)]
        : [2, []];
    });
  });
}
function cg(e) {
  return ci(e);
}
function fg(e) {
  return ci(e) && ci(e.target);
}
function ci(e) {
  return typeof e == "object" && e !== null;
}
function dg(e) {
  return ha(e.target.files).map(function (t) {
    return Jr(t);
  });
}
function pg(e) {
  return qn(this, void 0, void 0, function () {
    var t;
    return er(this, function (n) {
      switch (n.label) {
        case 0:
          return [
            4,
            Promise.all(
              e.map(function (r) {
                return r.getFile();
              })
            ),
          ];
        case 1:
          return (
            (t = n.sent()),
            [
              2,
              t.map(function (r) {
                return Jr(r);
              }),
            ]
          );
      }
    });
  });
}
function mg(e, t) {
  return qn(this, void 0, void 0, function () {
    var n, r;
    return er(this, function (l) {
      switch (l.label) {
        case 0:
          return e.items
            ? ((n = ha(e.items).filter(function (i) {
                return i.kind === "file";
              })),
              t !== "drop" ? [2, n] : [4, Promise.all(n.map(hg))])
            : [3, 2];
        case 1:
          return (r = l.sent()), [2, Qu(Id(r))];
        case 2:
          return [
            2,
            Qu(
              ha(e.files).map(function (i) {
                return Jr(i);
              })
            ),
          ];
      }
    });
  });
}
function Qu(e) {
  return e.filter(function (t) {
    return sg.indexOf(t.name) === -1;
  });
}
function ha(e) {
  if (e === null) return [];
  for (var t = [], n = 0; n < e.length; n++) {
    var r = e[n];
    t.push(r);
  }
  return t;
}
function hg(e) {
  if (typeof e.webkitGetAsEntry != "function") return Yu(e);
  var t = e.webkitGetAsEntry();
  return t && t.isDirectory ? Ad(t) : Yu(e);
}
function Id(e) {
  return e.reduce(function (t, n) {
    return Ku(Ku([], Hu(t), !1), Hu(Array.isArray(n) ? Id(n) : [n]), !1);
  }, []);
}
function Yu(e) {
  var t = e.getAsFile();
  if (!t) return Promise.reject("".concat(e, " is not a File"));
  var n = Jr(t);
  return Promise.resolve(n);
}
function vg(e) {
  return qn(this, void 0, void 0, function () {
    return er(this, function (t) {
      return [2, e.isDirectory ? Ad(e) : gg(e)];
    });
  });
}
function Ad(e) {
  var t = e.createReader();
  return new Promise(function (n, r) {
    var l = [];
    function i() {
      var o = this;
      t.readEntries(
        function (a) {
          return qn(o, void 0, void 0, function () {
            var s, u, d;
            return er(this, function (p) {
              switch (p.label) {
                case 0:
                  if (a.length) return [3, 5];
                  p.label = 1;
                case 1:
                  return p.trys.push([1, 3, , 4]), [4, Promise.all(l)];
                case 2:
                  return (s = p.sent()), n(s), [3, 4];
                case 3:
                  return (u = p.sent()), r(u), [3, 4];
                case 4:
                  return [3, 6];
                case 5:
                  (d = Promise.all(a.map(vg))), l.push(d), i(), (p.label = 6);
                case 6:
                  return [2];
              }
            });
          });
        },
        function (a) {
          r(a);
        }
      );
    }
    i();
  });
}
function gg(e) {
  return qn(this, void 0, void 0, function () {
    return er(this, function (t) {
      return [
        2,
        new Promise(function (n, r) {
          e.file(
            function (l) {
              var i = Jr(l, e.fullPath);
              n(i);
            },
            function (l) {
              r(l);
            }
          );
        }),
      ];
    });
  });
}
var yg = function (e, t) {
  if (e && t) {
    var n = Array.isArray(t) ? t : t.split(","),
      r = e.name || "",
      l = (e.type || "").toLowerCase(),
      i = l.replace(/\/.*$/, "");
    return n.some(function (o) {
      var a = o.trim().toLowerCase();
      return a.charAt(0) === "."
        ? r.toLowerCase().endsWith(a)
        : a.endsWith("/*")
        ? i === a.replace(/\/.*$/, "")
        : l === a;
    });
  }
  return !0;
};
function Xu(e) {
  return Sg(e) || wg(e) || $d(e) || xg();
}
function xg() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wg(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function Sg(e) {
  if (Array.isArray(e)) return va(e);
}
function Gu(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Ju(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Gu(Object(n), !0).forEach(function (r) {
          Ud(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Gu(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Ud(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function br(e, t) {
  return jg(e) || kg(e, t) || $d(e, t) || Eg();
}
function Eg() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $d(e, t) {
  if (e) {
    if (typeof e == "string") return va(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return va(e, t);
  }
}
function va(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function kg(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r = [],
      l = !0,
      i = !1,
      o,
      a;
    try {
      for (
        n = n.call(e);
        !(l = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t));
        l = !0
      );
    } catch (s) {
      (i = !0), (a = s);
    } finally {
      try {
        !l && n.return != null && n.return();
      } finally {
        if (i) throw a;
      }
    }
    return r;
  }
}
function jg(e) {
  if (Array.isArray(e)) return e;
}
var Cg = "file-invalid-type",
  Pg = "file-too-large",
  Ng = "file-too-small",
  _g = "too-many-files",
  Og = function (t) {
    t = Array.isArray(t) && t.length === 1 ? t[0] : t;
    var n = Array.isArray(t) ? "one of ".concat(t.join(", ")) : t;
    return { code: Cg, message: "File type must be ".concat(n) };
  },
  Zu = function (t) {
    return {
      code: Pg,
      message: "File is larger than "
        .concat(t, " ")
        .concat(t === 1 ? "byte" : "bytes"),
    };
  },
  qu = function (t) {
    return {
      code: Ng,
      message: "File is smaller than "
        .concat(t, " ")
        .concat(t === 1 ? "byte" : "bytes"),
    };
  },
  Tg = { code: _g, message: "Too many files" };
function Bd(e, t) {
  var n = e.type === "application/x-moz-file" || yg(e, t);
  return [n, n ? null : Og(t)];
}
function Vd(e, t, n) {
  if (rn(e.size))
    if (rn(t) && rn(n)) {
      if (e.size > n) return [!1, Zu(n)];
      if (e.size < t) return [!1, qu(t)];
    } else {
      if (rn(t) && e.size < t) return [!1, qu(t)];
      if (rn(n) && e.size > n) return [!1, Zu(n)];
    }
  return [!0, null];
}
function rn(e) {
  return e != null;
}
function Rg(e) {
  var t = e.files,
    n = e.accept,
    r = e.minSize,
    l = e.maxSize,
    i = e.multiple,
    o = e.maxFiles,
    a = e.validator;
  return (!i && t.length > 1) || (i && o >= 1 && t.length > o)
    ? !1
    : t.every(function (s) {
        var u = Bd(s, n),
          d = br(u, 1),
          p = d[0],
          h = Vd(s, r, l),
          y = br(h, 1),
          g = y[0],
          w = a ? a(s) : null;
        return p && g && !w;
      });
}
function fi(e) {
  return typeof e.isPropagationStopped == "function"
    ? e.isPropagationStopped()
    : typeof e.cancelBubble < "u"
    ? e.cancelBubble
    : !1;
}
function El(e) {
  return e.dataTransfer
    ? Array.prototype.some.call(e.dataTransfer.types, function (t) {
        return t === "Files" || t === "application/x-moz-file";
      })
    : !!e.target && !!e.target.files;
}
function ec(e) {
  e.preventDefault();
}
function Dg(e) {
  return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function Fg(e) {
  return e.indexOf("Edge/") !== -1;
}
function Lg() {
  var e =
    arguments.length > 0 && arguments[0] !== void 0
      ? arguments[0]
      : window.navigator.userAgent;
  return Dg(e) || Fg(e);
}
function ct() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (r) {
    for (
      var l = arguments.length, i = new Array(l > 1 ? l - 1 : 0), o = 1;
      o < l;
      o++
    )
      i[o - 1] = arguments[o];
    return t.some(function (a) {
      return !fi(r) && a && a.apply(void 0, [r].concat(i)), fi(r);
    });
  };
}
function Mg() {
  return "showOpenFilePicker" in window;
}
function zg(e) {
  if (rn(e)) {
    var t = Object.entries(e)
      .filter(function (n) {
        var r = br(n, 2),
          l = r[0],
          i = r[1],
          o = !0;
        return (
          Wd(l) ||
            (console.warn(
              'Skipped "'.concat(
                l,
                '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.'
              )
            ),
            (o = !1)),
          (!Array.isArray(i) || !i.every(bd)) &&
            (console.warn(
              'Skipped "'.concat(
                l,
                '" because an invalid file extension was provided.'
              )
            ),
            (o = !1)),
          o
        );
      })
      .reduce(function (n, r) {
        var l = br(r, 2),
          i = l[0],
          o = l[1];
        return Ju(Ju({}, n), {}, Ud({}, i, o));
      }, {});
    return [{ description: "Files", accept: t }];
  }
  return e;
}
function Ig(e) {
  if (rn(e))
    return Object.entries(e)
      .reduce(function (t, n) {
        var r = br(n, 2),
          l = r[0],
          i = r[1];
        return [].concat(Xu(t), [l], Xu(i));
      }, [])
      .filter(function (t) {
        return Wd(t) || bd(t);
      })
      .join(",");
}
function Ag(e) {
  return (
    e instanceof DOMException &&
    (e.name === "AbortError" || e.code === e.ABORT_ERR)
  );
}
function Ug(e) {
  return (
    e instanceof DOMException &&
    (e.name === "SecurityError" || e.code === e.SECURITY_ERR)
  );
}
function Wd(e) {
  return (
    e === "audio/*" ||
    e === "video/*" ||
    e === "image/*" ||
    e === "text/*" ||
    /\w+\/[-+.\w]+/g.test(e)
  );
}
function bd(e) {
  return /^.*\.[\w]+$/.test(e);
}
var $g = ["children"],
  Bg = ["open"],
  Vg = [
    "refKey",
    "role",
    "onKeyDown",
    "onFocus",
    "onBlur",
    "onClick",
    "onDragEnter",
    "onDragOver",
    "onDragLeave",
    "onDrop",
  ],
  Wg = ["refKey", "onChange", "onClick"];
function bg(e) {
  return Qg(e) || Kg(e) || Hd(e) || Hg();
}
function Hg() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Kg(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function Qg(e) {
  if (Array.isArray(e)) return ga(e);
}
function ho(e, t) {
  return Gg(e) || Xg(e, t) || Hd(e, t) || Yg();
}
function Yg() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Hd(e, t) {
  if (e) {
    if (typeof e == "string") return ga(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return ga(e, t);
  }
}
function ga(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Xg(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r = [],
      l = !0,
      i = !1,
      o,
      a;
    try {
      for (
        n = n.call(e);
        !(l = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t));
        l = !0
      );
    } catch (s) {
      (i = !0), (a = s);
    } finally {
      try {
        !l && n.return != null && n.return();
      } finally {
        if (i) throw a;
      }
    }
    return r;
  }
}
function Gg(e) {
  if (Array.isArray(e)) return e;
}
function tc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ie(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? tc(Object(n), !0).forEach(function (r) {
          ya(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : tc(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function ya(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function di(e, t) {
  if (e == null) return {};
  var n = Jg(e, t),
    r,
    l;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (l = 0; l < i.length; l++)
      (r = i[l]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function Jg(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    i;
  for (i = 0; i < r.length; i++)
    (l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
var Es = x.forwardRef(function (e, t) {
  var n = e.children,
    r = di(e, $g),
    l = Qd(r),
    i = l.open,
    o = di(l, Bg);
  return (
    x.useImperativeHandle(
      t,
      function () {
        return { open: i };
      },
      [i]
    ),
    G.createElement(x.Fragment, null, n(ie(ie({}, o), {}, { open: i })))
  );
});
Es.displayName = "Dropzone";
var Kd = {
  disabled: !1,
  getFilesFromEvent: ug,
  maxSize: 1 / 0,
  minSize: 0,
  multiple: !0,
  maxFiles: 0,
  preventDropOnDocument: !0,
  noClick: !1,
  noKeyboard: !1,
  noDrag: !1,
  noDragEventsBubbling: !1,
  validator: null,
  useFsAccessApi: !0,
  autoFocus: !1,
};
Es.defaultProps = Kd;
Es.propTypes = {
  children: B.func,
  accept: B.objectOf(B.arrayOf(B.string)),
  multiple: B.bool,
  preventDropOnDocument: B.bool,
  noClick: B.bool,
  noKeyboard: B.bool,
  noDrag: B.bool,
  noDragEventsBubbling: B.bool,
  minSize: B.number,
  maxSize: B.number,
  maxFiles: B.number,
  disabled: B.bool,
  getFilesFromEvent: B.func,
  onFileDialogCancel: B.func,
  onFileDialogOpen: B.func,
  useFsAccessApi: B.bool,
  autoFocus: B.bool,
  onDragEnter: B.func,
  onDragLeave: B.func,
  onDragOver: B.func,
  onDrop: B.func,
  onDropAccepted: B.func,
  onDropRejected: B.func,
  onError: B.func,
  validator: B.func,
};
var xa = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  acceptedFiles: [],
  fileRejections: [],
};
function Qd() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = ie(ie({}, Kd), e),
    n = t.accept,
    r = t.disabled,
    l = t.getFilesFromEvent,
    i = t.maxSize,
    o = t.minSize,
    a = t.multiple,
    s = t.maxFiles,
    u = t.onDragEnter,
    d = t.onDragLeave,
    p = t.onDragOver,
    h = t.onDrop,
    y = t.onDropAccepted,
    g = t.onDropRejected,
    w = t.onFileDialogCancel,
    k = t.onFileDialogOpen,
    m = t.useFsAccessApi,
    f = t.autoFocus,
    v = t.preventDropOnDocument,
    S = t.noClick,
    j = t.noKeyboard,
    N = t.noDrag,
    _ = t.noDragEventsBubbling,
    R = t.onError,
    H = t.validator,
    A = x.useMemo(
      function () {
        return Ig(n);
      },
      [n]
    ),
    C = x.useMemo(
      function () {
        return zg(n);
      },
      [n]
    ),
    O = x.useMemo(
      function () {
        return typeof k == "function" ? k : nc;
      },
      [k]
    ),
    M = x.useMemo(
      function () {
        return typeof w == "function" ? w : nc;
      },
      [w]
    ),
    I = x.useRef(null),
    U = x.useRef(null),
    z = x.useReducer(Zg, xa),
    b = ho(z, 2),
    E = b[0],
    T = b[1],
    F = E.isFocused,
    W = E.isFileDialogActive,
    V = x.useRef(typeof window < "u" && window.isSecureContext && m && Mg()),
    re = function () {
      !V.current &&
        W &&
        setTimeout(function () {
          if (U.current) {
            var $ = U.current.files;
            $.length || (T({ type: "closeDialog" }), M());
          }
        }, 300);
    };
  x.useEffect(
    function () {
      return (
        window.addEventListener("focus", re, !1),
        function () {
          window.removeEventListener("focus", re, !1);
        }
      );
    },
    [U, W, M, V]
  );
  var Q = x.useRef([]),
    de = function ($) {
      (I.current && I.current.contains($.target)) ||
        ($.preventDefault(), (Q.current = []));
    };
  x.useEffect(
    function () {
      return (
        v &&
          (document.addEventListener("dragover", ec, !1),
          document.addEventListener("drop", de, !1)),
        function () {
          v &&
            (document.removeEventListener("dragover", ec),
            document.removeEventListener("drop", de));
        }
      );
    },
    [I, v]
  ),
    x.useEffect(
      function () {
        return !r && f && I.current && I.current.focus(), function () {};
      },
      [I, f, r]
    );
  var q = x.useCallback(
      function (D) {
        R ? R(D) : console.error(D);
      },
      [R]
    ),
    Z = x.useCallback(
      function (D) {
        D.preventDefault(),
          D.persist(),
          el(D),
          (Q.current = [].concat(bg(Q.current), [D.target])),
          El(D) &&
            Promise.resolve(l(D))
              .then(function ($) {
                if (!(fi(D) && !_)) {
                  var pe = $.length,
                    Ee =
                      pe > 0 &&
                      Rg({
                        files: $,
                        accept: A,
                        minSize: o,
                        maxSize: i,
                        multiple: a,
                        maxFiles: s,
                        validator: H,
                      }),
                    Be = pe > 0 && !Ee;
                  T({
                    isDragAccept: Ee,
                    isDragReject: Be,
                    isDragActive: !0,
                    type: "setDraggedFiles",
                  }),
                    u && u(D);
                }
              })
              .catch(function ($) {
                return q($);
              });
      },
      [l, u, q, _, A, o, i, a, s, H]
    ),
    Ot = x.useCallback(
      function (D) {
        D.preventDefault(), D.persist(), el(D);
        var $ = El(D);
        if ($ && D.dataTransfer)
          try {
            D.dataTransfer.dropEffect = "copy";
          } catch {}
        return $ && p && p(D), !1;
      },
      [p, _]
    ),
    qt = x.useCallback(
      function (D) {
        D.preventDefault(), D.persist(), el(D);
        var $ = Q.current.filter(function (Ee) {
            return I.current && I.current.contains(Ee);
          }),
          pe = $.indexOf(D.target);
        pe !== -1 && $.splice(pe, 1),
          (Q.current = $),
          !($.length > 0) &&
            (T({
              type: "setDraggedFiles",
              isDragActive: !1,
              isDragAccept: !1,
              isDragReject: !1,
            }),
            El(D) && d && d(D));
      },
      [I, d, _]
    ),
    en = x.useCallback(
      function (D, $) {
        var pe = [],
          Ee = [];
        D.forEach(function (Be) {
          var rr = Bd(Be, A),
            xn = ho(rr, 2),
            Fi = xn[0],
            Li = xn[1],
            Mi = Vd(Be, o, i),
            tl = ho(Mi, 2),
            zi = tl[0],
            Ii = tl[1],
            Ai = H ? H(Be) : null;
          if (Fi && zi && !Ai) pe.push(Be);
          else {
            var Ui = [Li, Ii];
            Ai && (Ui = Ui.concat(Ai)),
              Ee.push({
                file: Be,
                errors: Ui.filter(function (lp) {
                  return lp;
                }),
              });
          }
        }),
          ((!a && pe.length > 1) || (a && s >= 1 && pe.length > s)) &&
            (pe.forEach(function (Be) {
              Ee.push({ file: Be, errors: [Tg] });
            }),
            pe.splice(0)),
          T({ acceptedFiles: pe, fileRejections: Ee, type: "setFiles" }),
          h && h(pe, Ee, $),
          Ee.length > 0 && g && g(Ee, $),
          pe.length > 0 && y && y(pe, $);
      },
      [T, a, A, o, i, s, h, y, g, H]
    ),
    yn = x.useCallback(
      function (D) {
        D.preventDefault(),
          D.persist(),
          el(D),
          (Q.current = []),
          El(D) &&
            Promise.resolve(l(D))
              .then(function ($) {
                (fi(D) && !_) || en($, D);
              })
              .catch(function ($) {
                return q($);
              }),
          T({ type: "reset" });
      },
      [l, en, q, _]
    ),
    vt = x.useCallback(
      function () {
        if (V.current) {
          T({ type: "openDialog" }), O();
          var D = { multiple: a, types: C };
          window
            .showOpenFilePicker(D)
            .then(function ($) {
              return l($);
            })
            .then(function ($) {
              en($, null), T({ type: "closeDialog" });
            })
            .catch(function ($) {
              Ag($)
                ? (M($), T({ type: "closeDialog" }))
                : Ug($)
                ? ((V.current = !1),
                  U.current
                    ? ((U.current.value = null), U.current.click())
                    : q(
                        new Error(
                          "Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."
                        )
                      ))
                : q($);
            });
          return;
        }
        U.current &&
          (T({ type: "openDialog" }),
          O(),
          (U.current.value = null),
          U.current.click());
      },
      [T, O, M, m, en, q, C, a]
    ),
    Zr = x.useCallback(
      function (D) {
        !I.current ||
          !I.current.isEqualNode(D.target) ||
          ((D.key === " " ||
            D.key === "Enter" ||
            D.keyCode === 32 ||
            D.keyCode === 13) &&
            (D.preventDefault(), vt()));
      },
      [I, vt]
    ),
    gt = x.useCallback(function () {
      T({ type: "focus" });
    }, []),
    tr = x.useCallback(function () {
      T({ type: "blur" });
    }, []),
    nr = x.useCallback(
      function () {
        S || (Lg() ? setTimeout(vt, 0) : vt());
      },
      [S, vt]
    ),
    yt = function ($) {
      return r ? null : $;
    },
    Di = function ($) {
      return j ? null : yt($);
    },
    qr = function ($) {
      return N ? null : yt($);
    },
    el = function ($) {
      _ && $.stopPropagation();
    },
    tp = x.useMemo(
      function () {
        return function () {
          var D =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : {},
            $ = D.refKey,
            pe = $ === void 0 ? "ref" : $,
            Ee = D.role,
            Be = D.onKeyDown,
            rr = D.onFocus,
            xn = D.onBlur,
            Fi = D.onClick,
            Li = D.onDragEnter,
            Mi = D.onDragOver,
            tl = D.onDragLeave,
            zi = D.onDrop,
            Ii = di(D, Vg);
          return ie(
            ie(
              ya(
                {
                  onKeyDown: Di(ct(Be, Zr)),
                  onFocus: Di(ct(rr, gt)),
                  onBlur: Di(ct(xn, tr)),
                  onClick: yt(ct(Fi, nr)),
                  onDragEnter: qr(ct(Li, Z)),
                  onDragOver: qr(ct(Mi, Ot)),
                  onDragLeave: qr(ct(tl, qt)),
                  onDrop: qr(ct(zi, yn)),
                  role:
                    typeof Ee == "string" && Ee !== "" ? Ee : "presentation",
                },
                pe,
                I
              ),
              !r && !j ? { tabIndex: 0 } : {}
            ),
            Ii
          );
        };
      },
      [I, Zr, gt, tr, nr, Z, Ot, qt, yn, j, N, r]
    ),
    np = x.useCallback(function (D) {
      D.stopPropagation();
    }, []),
    rp = x.useMemo(
      function () {
        return function () {
          var D =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : {},
            $ = D.refKey,
            pe = $ === void 0 ? "ref" : $,
            Ee = D.onChange,
            Be = D.onClick,
            rr = di(D, Wg),
            xn = ya(
              {
                accept: A,
                multiple: a,
                type: "file",
                style: { display: "none" },
                onChange: yt(ct(Ee, yn)),
                onClick: yt(ct(Be, np)),
                tabIndex: -1,
              },
              pe,
              U
            );
          return ie(ie({}, xn), rr);
        };
      },
      [U, n, a, yn, r]
    );
  return ie(
    ie({}, E),
    {},
    {
      isFocused: F && !r,
      getRootProps: tp,
      getInputProps: rp,
      rootRef: I,
      inputRef: U,
      open: yt(vt),
    }
  );
}
function Zg(e, t) {
  switch (t.type) {
    case "focus":
      return ie(ie({}, e), {}, { isFocused: !0 });
    case "blur":
      return ie(ie({}, e), {}, { isFocused: !1 });
    case "openDialog":
      return ie(ie({}, xa), {}, { isFileDialogActive: !0 });
    case "closeDialog":
      return ie(ie({}, e), {}, { isFileDialogActive: !1 });
    case "setDraggedFiles":
      return ie(
        ie({}, e),
        {},
        {
          isDragActive: t.isDragActive,
          isDragAccept: t.isDragAccept,
          isDragReject: t.isDragReject,
        }
      );
    case "setFiles":
      return ie(
        ie({}, e),
        {},
        { acceptedFiles: t.acceptedFiles, fileRejections: t.fileRejections }
      );
    case "reset":
      return ie({}, xa);
    default:
      return e;
  }
}
function nc() {}
const qg = ({ handlePictureChange: e, pictures: t }) => {
  const n = x.useCallback(
    (a) => {
      e(a);
    },
    [e]
  );
  function r(a) {
    const s = t.filter((u) => u.name !== a);
    e(s);
  }
  const {
    getRootProps: l,
    getInputProps: i,
    isDragActive: o,
  } = Qd({ onDrop: n });
  return c.jsxs("div", {
    className: `drag-area ${o ? "bg-[#f5f5f5]" : ""}`,
    ...l(),
    children: [
      c.jsxs("div", {
        className: "flex flex-col items-center mb-4 text-slate-500",
        children: [
          c.jsx("img", {
            className: "w-28 mx-auto",
            src: "/images/cloud-upload.svg",
            alt: "drop icon",
          }),
          o
            ? c.jsxs(c.Fragment, {
                children: [
                  c.jsx("p", { children: "Drop the files here ..." }),
                  c.jsx("span", { children: "Or click on the drop zone" }),
                ],
              })
            : c.jsxs(c.Fragment, {
                children: [
                  c.jsx("p", { children: "Drag & drop to upload File" }),
                  c.jsx("span", { children: "Or click on the drop zone" }),
                ],
              }),
        ],
      }),
      c.jsx("input", {
        ...i(),
        className: "w-52",
        type: "file",
        id: "picture",
        multiple: !0,
      }),
      c.jsx("ul", {
        className:
          "absolute text-slate-500 text-sm flex flex-wrap gap-2.5 z-10 top-1 left-1",
        children:
          t.length !== 0 &&
          t.map((a) =>
            c.jsxs(
              "li",
              {
                onClick: (s) => {
                  s.stopPropagation(), r(a.name);
                },
                className: "flex gap-2 items-center hover:cursor-pointer",
                children: [
                  c.jsxs("div", {
                    className: "flex flex-col items-center",
                    children: [
                      c.jsx("span", { children: a.name }),
                      c.jsx("span", { children: `${a.size} bytes` }),
                    ],
                  }),
                  c.jsx("span", { children: "x" }),
                ],
              },
              a.name
            )
          ),
      }),
    ],
  });
};
function Yd(e) {
  const [t, n] = x.useState(!1),
    [r, l] = x.useState(null),
    [i, o] = x.useState(!1),
    [a, s] = x.useState(!1),
    [u, d] = x.useState(null),
    [p, h] = x.useState(!1);
  async function y(k, m, f) {
    k.preventDefault(), n(!0), o(!1), l(null);
    try {
      const v = new FormData();
      Object.entries(m).forEach(([_, R]) => {
        _ === "picture"
          ? Array.isArray(R)
            ? R.forEach((H) => {
                v.append("picture", H);
              })
            : v.append("picture", R)
          : v.append(_, R);
      });
      const j = await fetch("http://localhost:8000/offer/publish", {
          method: "POST",
          headers: { Authorization: `Bearer ${e}` },
          body: v,
        }),
        N = await j.json();
      j.status === 201 && (f(), o("Votre article a été publié avec succes")),
        j.status === 400 &&
        N.message === "Price must be greater than 500 and not exceed 30000"
          ? l("Le prix doit etre un nombre compris entre 500 et 30000 XOF")
          : j.status === 400 && N.message === "Only images files are allowed"
          ? l("Seul les fichiers de type Images sont acceptes")
          : j.status === 400 && l("Veuillez remplir tous les champs :)");
    } catch (v) {
      console.error(v);
    } finally {
      n(!1);
    }
  }
  async function g(k, m) {
    k.preventDefault(), n(!0), o(!1), l(null);
    try {
      const f = new FormData();
      Object.entries(m).forEach(([j, N]) => {
        j === "avatar"
          ? N instanceof File && f.append(j, N)
          : N !== void 0 && f.append(j, N);
      });
      const S = await fetch("http://localhost:8000/user/update", {
        method: "PUT",
        headers: { Authorization: `Bearer ${e}` },
        body: f,
      });
      await S.json(),
        S.ok
          ? o("Profile a bien été mis à jour")
          : S.status === 400 &&
            l("Seul les fichiers de type Image sont acceptés");
    } catch (f) {
      console.error(f);
    } finally {
      n(!1);
    }
  }
  async function w(k, m, f) {
    k.preventDefault(), s(!0), h(!1), d(null);
    try {
      const v = await fetch("http://localhost:8000/user/update-password", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${e}`,
          },
          body: JSON.stringify(m),
        }),
        S = await v.json();
      v.ok
        ? (h("Mot de passe a bien été mis à jour"),
          f((j) => ({ ...j, oldPassword: "", newPassword: "" })))
        : v.status === 401 &&
          S.message === "New password must be different than the previous one"
        ? d("Le nouveau mot de passe doit etre different de l'ancien")
        : v.status === 401
        ? d("Mauvais mot de passe")
        : v.status === 400 &&
          d("Le nouveau mot de passe doit comporter au moins 8 caractères");
    } catch (v) {
      console.error(v);
    } finally {
      s(!1);
    }
  }
  return {
    loading: t,
    success: i,
    error: r,
    handleSubmit: y,
    handleUpdateUser: g,
    handleEditPassword: w,
    pwLoading: a,
    pwValidate: p,
    pwError: u,
  };
}
const ey = ({ token: e }) => {
    const [t, n] = x.useState({
      picture: [],
      title: "",
      description: "",
      brand: "",
      size: "",
      color: "",
      condition: "",
      city: "",
      price: "",
    });
    function r(d) {
      const { id: p, value: h } = d.target;
      n({ ...t, [p]: h });
    }
    function l(d) {
      n({ ...t, picture: d });
    }
    function i() {
      n({
        picture: [],
        title: "",
        description: "",
        brand: "",
        size: "",
        color: "",
        condition: "",
        city: "",
        price: "",
      });
    }
    const { loading: o, error: a, success: s, handleSubmit: u } = Yd(e);
    return c.jsxs("fieldset", {
      className: "mt-[6.5rem] w-full h-full flex",
      children: [
        c.jsx("legend", {
          className: "mx-auto",
          children: c.jsx("h3", { children: "Vends ton article" }),
        }),
        c.jsxs("form", {
          className: "container flex flex-col",
          onSubmit: (d) => {
            u(d, t, i);
          },
          children: [
            c.jsx(qg, { pictures: t.picture, handlePictureChange: l }),
            c.jsxs("div", {
              className: "flex flex-col my-8",
              children: [
                c.jsx(Rt, {
                  id: "title",
                  inputValue: t.title,
                  handleChange: r,
                  placeholder: "ex: chemise sezame verte",
                  children: "Titre",
                }),
                c.jsxs("div", {
                  className:
                    "flex flex-col md:flex-row w-[85%] h-40 md:h-32 justify-center mx-auto py-5 border-b border-neutral-200",
                  children: [
                    c.jsx("label", {
                      className: "flex flex-1 items-center max-h-[35px] px-4",
                      htmlFor: "description",
                      children: "Decris ton article",
                    }),
                    c.jsx("textarea", {
                      className: "publishField resize-none",
                      id: "description",
                      value: t.description,
                      placeholder: "ex: portee quelquefois, taille 44",
                      rows: "6",
                      onChange: r,
                    }),
                  ],
                }),
              ],
            }),
            c.jsxs("div", {
              className: "flex flex-col",
              children: [
                c.jsx(Rt, {
                  id: "category",
                  inputValue: t.category,
                  handleChange: r,
                  placeholder: "ex: Homme, Femme, Enfant",
                  children: "Catégorie",
                }),
                c.jsx(Rt, {
                  id: "brand",
                  inputValue: t.brand,
                  handleChange: r,
                  placeholder: "ex: Zara",
                  children: "Marque",
                }),
                c.jsx(Rt, {
                  id: "size",
                  inputValue: t.size,
                  handleChange: r,
                  placeholder: "ex: L/40/12",
                  children: "Taille",
                }),
                c.jsx(Rt, {
                  id: "color",
                  inputValue: t.color,
                  handleChange: r,
                  placeholder: "ex: Turquoise",
                  children: "Couleur",
                }),
                c.jsx(Rt, {
                  id: "condition",
                  inputValue: t.condition,
                  handleChange: r,
                  placeholder: "ex: neuf avec etiquette",
                  children: "Etat",
                }),
                c.jsx(Rt, {
                  id: "city",
                  inputValue: t.city,
                  handleChange: r,
                  placeholder: "ex: Paris",
                  children: "Lieu",
                }),
              ],
            }),
            c.jsx("div", {
              className: "mt-4",
              children: c.jsx(Rt, {
                id: "price",
                inputValue: t.price,
                handleChange: r,
                placeholder: "0.00XOF",
                children: "Prix",
              }),
            }),
            c.jsxs("div", {
              className: "h-12",
              children: [
                s &&
                  c.jsx("p", {
                    className: "mt-6 text-teal-500 text-center",
                    children: s,
                  }),
                a &&
                  c.jsx("p", {
                    className: "mt-6 text-red-500 text-center",
                    children: a,
                  }),
              ],
            }),
            c.jsx("button", {
              className:
                "bg-[#77B5FE] mx-auto text-slate-50 w-[85%] sm:w-44 h-10 my-10 text-xl sm:text-sm",
              children: o ? "En cours..." : "Ajouter",
            }),
          ],
        }),
      ],
    });
  },
  ty = ({ token: e, user: t }) => {
    var m, f;
    const n =
        (f =
          (m = t == null ? void 0 : t.account) == null ? void 0 : m.avatar) ==
        null
          ? void 0
          : f.secure_url,
      [r, l] = x.useState({
        username: t.account.username,
        avatar: n || "/icons/account.svg",
        newsletter: t.newsletter,
      }),
      [i, o] = x.useState({ oldPassword: "", newPassword: "" });
    function a(v) {
      const { id: S, value: j, type: N, checked: _, files: R } = v.target;
      l({ ...r, [S]: N === "file" ? R[0] : N === "checkbox" ? _ : j });
    }
    function s(v) {
      const { id: S, value: j } = v.target;
      o({ ...i, [S]: j });
    }
    const {
      loading: u,
      success: d,
      error: p,
      handleUpdateUser: h,
      handleEditPassword: y,
      pwLoading: g,
      pwValidate: w,
      pwError: k,
    } = Yd(e);
    return c.jsxs("fieldset", {
      className: "container h-full mt-[8.5rem] mb-16",
      children: [
        c.jsx("legend", {
          className: "text-4xl mx-auto mb-12",
          children: "Détail du Profile",
        }),
        c.jsxs("div", {
          className:
            "flex flex-col gap-4 justify-center items-center w-[85%] h-full sm:max-w-[600px] mx-auto",
          children: [
            c.jsxs("form", {
              className: "profile w-full flex-1 flex gap-3",
              onSubmit: (v) => {
                h(v, r);
              },
              children: [
                c.jsxs("div", {
                  className: "flex-1",
                  children: [
                    r.avatar instanceof File
                      ? c.jsx("img", {
                          className: "w-52 aspect square my-4",
                          src: URL.createObjectURL(r.avatar),
                          alt: "avatar",
                        })
                      : c.jsx("img", {
                          className: "w-52 aspect square my-4",
                          src: n || "/icons/account.svg",
                          alt: "avatar",
                        }),
                    c.jsx("input", { id: "avatar", type: "file", onChange: a }),
                  ],
                }),
                c.jsxs("div", {
                  className: "flex flex-col gap-4",
                  children: [
                    c.jsxs("label", {
                      htmlFor: "username",
                      children: [
                        "Nom utilisateur",
                        c.jsx("input", {
                          className: "inputField border-2 border-zinc-300",
                          id: "username",
                          type: "text",
                          onChange: a,
                          value: r.username,
                          placeholder: "Nom d'utilisateur",
                        }),
                      ],
                    }),
                    c.jsx("label", {
                      className:
                        "text-center flex flex-col items-center justify-center mt-2",
                      htmlFor: "newsletter",
                      children: c.jsxs("div", {
                        className: "flex items-center w-full",
                        children: [
                          c.jsx("input", {
                            className: "w-6 h-5",
                            id: "newsletter",
                            type: "checkbox",
                            checked: r.newsletter,
                            onChange: a,
                          }),
                          c.jsx("span", {
                            className: "ml-4 text-gray-500",
                            children: "S'inscrire à notre newsletter",
                          }),
                        ],
                      }),
                    }),
                    c.jsx("button", {
                      className:
                        "bg-[#77B5FE] text-xl text-slate-50 min-h-[40px] mt-2",
                      children: u ? "En cours..." : "Mise a jour Profile",
                    }),
                    c.jsx("button", {
                      className:
                        "bg-[#77B5FE] text-xl text-slate-50 min-h-[40px] mt-2",
                      children: u ? "En cours..." : "Voir mes products",
                    }),
                    c.jsxs("div", {
                      className: "h-12",
                      children: [
                        d &&
                          c.jsx("p", {
                            className: "mt-6 text-teal-500 text-center",
                            children: d,
                          }),
                        p &&
                          c.jsx("p", {
                            className: "mt-6 text-red-500 text-center",
                            children: p,
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            c.jsx("div", { className: "w-full h-0.5 my-4 bg-slate-200" }),
            c.jsxs("form", {
              className: "flex flex-col justify-end gap-4 max-w-[300px]",
              onSubmit: (v) => {
                y(v, i, o);
              },
              children: [
                c.jsxs("label", {
                  className: "",
                  htmlFor: "oldPassword",
                  children: [
                    "Ancien Mot de passe",
                    c.jsx("input", {
                      className: "inputField border-2 border-zinc-300",
                      id: "oldPassword",
                      type: "password",
                      onChange: s,
                      value: i.oldPassword,
                      placeholder: "Mot de passe actuel",
                    }),
                  ],
                }),
                c.jsxs("label", {
                  className: "",
                  htmlFor: "newPassword",
                  children: [
                    "Nouveau mot de passe",
                    c.jsx("input", {
                      className: "inputField border-2 border-zinc-300",
                      id: "newPassword",
                      type: "password",
                      onChange: s,
                      value: i.newPassword,
                      placeholder: "Nouveau Mot de passe",
                    }),
                  ],
                }),
                c.jsx("button", {
                  className:
                    "bg-[#77B5FE] text-xl text-slate-50 min-h-[40px] mt-4",
                  children: g ? "En cours..." : "Mise a jour Mot de passe",
                }),
                c.jsxs("div", {
                  className: "h-12",
                  children: [
                    w &&
                      c.jsx("p", {
                        className: "mt-6 text-teal-500 text-center",
                        children: w,
                      }),
                    k &&
                      c.jsx("p", {
                        className: "mt-6 text-red-500 text-center",
                        children: k,
                      }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  ny = () =>
    c.jsx("div", {
      className: "mt-[6.5rem] text-center",
      children: c.jsx("h1", { children: "404 PAGE NON TROUVEE" }),
    }),
  ry = () =>
    c.jsx("footer", {
      className: "w-full h-12",
      children: c.jsxs("p", {
        className: "my-8 text-center text-sm",
        children: ["© ", new Date().getFullYear(), " Developed by Saiyan13"],
      }),
    }),
  ly = ({ setVisible: e }) => {
    const [t, n] = x.useState(!1),
      [r, l] = x.useState(!1),
      [i, o] = x.useState(""),
      [a, s] = x.useState(!1);
    async function u(d) {
      d.preventDefault(), n(!0);
      try {
        await fetch("http://localhost:8000/user/forgot-password", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: i }),
        }),
          n(!1);
      } catch (p) {
        console.error(p), s(!0);
      } finally {
        l(!0);
      }
    }
    return c.jsx("div", {
      className: "modal-root",
      onClick: () => {
        e(!1);
      },
      children: c.jsxs("div", {
        className: "modal",
        onClick: (d) => {
          d.stopPropagation();
        },
        children: [
          c.jsx("div", {
            className: "flex w-full justify-end",
            children: c.jsx("button", {
              onClick: () => {
                e(!1);
              },
              className: "w-8",
              children: "X",
            }),
          }),
          r
            ? c.jsxs("div", {
                className: "flex flex-col items-center",
                children: [
                  c.jsx("h3", {
                    className: "mt-5 text-center",
                    children: a
                      ? "Une erreur est survenue"
                      : "Le lien pour reinitialiser a ete envoye dans votre boite mail",
                  }),
                  c.jsx("button", {
                    onClick: () => {
                      e(!1);
                    },
                    className: "bg-[#77B5FE] text-slate-50 text-xl mt-6",
                    children: "OK",
                  }),
                ],
              })
            : c.jsxs("form", {
                className: "flex flex-col gap-5 justify-center items-center",
                onSubmit: u,
                children: [
                  c.jsx("h3", { children: "Reinitialisation mot de passe" }),
                  c.jsx("label", {
                    htmlFor: "email",
                    className: "flex justify-center",
                    children: c.jsx("input", {
                      className: "inputField w-[80%]",
                      id: "email",
                      type: "email",
                      onChange: (d) => {
                        o(d.target.value);
                      },
                      placeholder: "Votre Email",
                    }),
                  }),
                  c.jsx("button", {
                    className: "bg-[#77B5FE] text-slate-50 text-xl mt-6",
                    children: t ? "En cours..." : "Envoyer",
                  }),
                ],
              }),
        ],
      }),
    });
  },
  iy = () => {
    const e = Gr(),
      [t, n] = x.useState(!1),
      [r, l] = x.useState(null),
      [i, o] = x.useState(!1),
      [a, s] = x.useState(""),
      [u, d] = x.useState(""),
      p = gn(),
      h = new URLSearchParams(p.search),
      y = h.get("id"),
      g = h.get("token");
    x.useEffect(() => {
      async function k() {
        try {
          (await fetch(`http://localhost:8000/user/reset-password/${y}/${g}`))
            .ok
            ? n(!0)
            : l(
                "Votre lien est invalide ou le token a deja ete utilise ou expire."
              );
        } catch (m) {
          console.error(m);
        }
      }
      y && g ? k() : e("/");
    }, [y, g, e]);
    async function w(k) {
      k.preventDefault(), o(!0);
      try {
        const m = await fetch(
            `http://localhost:8000/user/reset-password/${y}/${g}`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ password: a, confirmPassword: u }),
            }
          ),
          f = await m.json();
        m.ok && e("/login"),
          m.status === 400 &&
          f.message === "Password must be at least 8 characters long"
            ? l("Le mot de passe doit etre au moins 8 characters de longueur")
            : m.status === 400 && f.message === "Password do not match"
            ? l("Veuillez insérer un mot de passe identique")
            : m.status === 400 && l("Veuillez remplir tous les champs :)");
      } catch (m) {
        console.error(m), l(m.message);
      } finally {
        o(!1);
      }
    }
    return t
      ? c.jsxs("fieldset", {
          className: "container h-full mt-[6.5rem]",
          children: [
            c.jsx("legend", {
              className: "text-2xl mx-auto",
              children: "Reinitialisation mot de passe",
            }),
            c.jsxs("form", {
              className:
                "flex flex-col gap-5 justify-center items-center w-[85%] h-[25rem] sm:max-w-xs mx-auto",
              onSubmit: w,
              children: [
                c.jsx("label", {
                  className: r ? "warn" : "",
                  htmlFor: "password",
                  children: c.jsx("input", {
                    className: "inputField",
                    id: "password",
                    type: "password",
                    onChange: (k) => {
                      s(k.target.value);
                    },
                    placeholder: "Veuillez saisir le nouveau mot de passe",
                  }),
                }),
                c.jsx("label", {
                  className: r ? "warn" : "",
                  htmlFor: "checkPassword",
                  children: c.jsx("input", {
                    className: "inputField",
                    id: "checkPassword",
                    type: "password",
                    onChange: (k) => {
                      d(k.target.value);
                    },
                    placeholder: "Confirmez Mot de passe",
                  }),
                }),
                c.jsx("button", {
                  className: "bg-[#77B5FE] text-slate-50 text-xl mt-6",
                  children: i ? "En cours..." : "Envoyer",
                }),
                r &&
                  c.jsx("p", {
                    className: "text-red-500 text-center",
                    children: r,
                  }),
              ],
            }),
          ],
        })
      : c.jsx("div", {
          className: "mt-[6.5rem]",
          children: c.jsx("h3", { className: "text-center", children: r }),
        });
  };
function oy(e = 350) {
  const [t, n] = x.useState(""),
    [r, l] = x.useState("");
  return (
    x.useEffect(() => {
      const i = setTimeout(() => {
        n(r);
      }, e);
      return () => clearTimeout(i);
    }, [r, e]),
    [t, l]
  );
}
function rc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function lc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? rc(Object(n), !0).forEach(function (r) {
          Xd(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : rc(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function zl(e) {
  "@babel/helpers - typeof";
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (zl = function (t) {
          return typeof t;
        })
      : (zl = function (t) {
          return t &&
            typeof Symbol == "function" &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        }),
    zl(e)
  );
}
function Xd(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Il(e, t) {
  return ay(e) || sy(e, t) || uy(e, t) || cy();
}
function ay(e) {
  if (Array.isArray(e)) return e;
}
function sy(e, t) {
  var n = e && ((typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"]);
  if (n != null) {
    var r = [],
      l = !0,
      i = !1,
      o,
      a;
    try {
      for (
        n = n.call(e);
        !(l = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t));
        l = !0
      );
    } catch (s) {
      (i = !0), (a = s);
    } finally {
      try {
        !l && n.return != null && n.return();
      } finally {
        if (i) throw a;
      }
    }
    return r;
  }
}
function uy(e, t) {
  if (e) {
    if (typeof e == "string") return ic(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return ic(e, t);
  }
}
function ic(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function cy() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var wa = function (t) {
    var n = G.useRef(t);
    return (
      G.useEffect(
        function () {
          n.current = t;
        },
        [t]
      ),
      n.current
    );
  },
  Kn = function (t) {
    return t !== null && zl(t) === "object";
  },
  fy = function (t) {
    return Kn(t) && typeof t.then == "function";
  },
  dy = function (t) {
    return (
      Kn(t) &&
      typeof t.elements == "function" &&
      typeof t.createToken == "function" &&
      typeof t.createPaymentMethod == "function" &&
      typeof t.confirmCardPayment == "function"
    );
  },
  oc = "[object Object]",
  py = function e(t, n) {
    if (!Kn(t) || !Kn(n)) return t === n;
    var r = Array.isArray(t),
      l = Array.isArray(n);
    if (r !== l) return !1;
    var i = Object.prototype.toString.call(t) === oc,
      o = Object.prototype.toString.call(n) === oc;
    if (i !== o) return !1;
    if (!i && !r) return t === n;
    var a = Object.keys(t),
      s = Object.keys(n);
    if (a.length !== s.length) return !1;
    for (var u = {}, d = 0; d < a.length; d += 1) u[a[d]] = !0;
    for (var p = 0; p < s.length; p += 1) u[s[p]] = !0;
    var h = Object.keys(u);
    if (h.length !== a.length) return !1;
    var y = t,
      g = n,
      w = function (m) {
        return e(y[m], g[m]);
      };
    return h.every(w);
  },
  Gd = function (t, n, r) {
    return Kn(t)
      ? Object.keys(t).reduce(function (l, i) {
          var o = !Kn(n) || !py(t[i], n[i]);
          return r.includes(i)
            ? (o &&
                console.warn(
                  "Unsupported prop change: options.".concat(
                    i,
                    " is not a mutable property."
                  )
                ),
              l)
            : o
            ? lc(lc({}, l || {}), {}, Xd({}, i, t[i]))
            : l;
        }, null)
      : null;
  },
  my =
    "Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
  ac = function (t) {
    if (t === null || dy(t)) return t;
    throw new Error(my);
  },
  hy = function (t) {
    if (fy(t))
      return { tag: "async", stripePromise: Promise.resolve(t).then(ac) };
    var n = ac(t);
    return n === null ? { tag: "empty" } : { tag: "sync", stripe: n };
  },
  ks = G.createContext(null);
ks.displayName = "ElementsContext";
var vy = function (t, n) {
    if (!t)
      throw new Error(
        "Could not find Elements context; You need to wrap the part of your app that ".concat(
          n,
          " in an <Elements> provider."
        )
      );
    return t;
  },
  js = G.createContext(null);
js.displayName = "CartElementContext";
var gy = function (t, n) {
    if (!t)
      throw new Error(
        "Could not find Elements context; You need to wrap the part of your app that ".concat(
          n,
          " in an <Elements> provider."
        )
      );
    return t;
  },
  Jd = function (t) {
    var n = t.stripe,
      r = t.options,
      l = t.children,
      i = G.useMemo(
        function () {
          return hy(n);
        },
        [n]
      ),
      o = G.useState(null),
      a = Il(o, 2),
      s = a[0],
      u = a[1],
      d = G.useState(null),
      p = Il(d, 2),
      h = p[0],
      y = p[1],
      g = G.useState(function () {
        return {
          stripe: i.tag === "sync" ? i.stripe : null,
          elements: i.tag === "sync" ? i.stripe.elements(r) : null,
        };
      }),
      w = Il(g, 2),
      k = w[0],
      m = w[1];
    G.useEffect(
      function () {
        var S = !0,
          j = function (_) {
            m(function (R) {
              return R.stripe ? R : { stripe: _, elements: _.elements(r) };
            });
          };
        return (
          i.tag === "async" && !k.stripe
            ? i.stripePromise.then(function (N) {
                N && S && j(N);
              })
            : i.tag === "sync" && !k.stripe && j(i.stripe),
          function () {
            S = !1;
          }
        );
      },
      [i, k, r]
    );
    var f = wa(n);
    G.useEffect(
      function () {
        f !== null &&
          f !== n &&
          console.warn(
            "Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."
          );
      },
      [f, n]
    );
    var v = wa(r);
    return (
      G.useEffect(
        function () {
          if (k.elements) {
            var S = Gd(r, v, ["clientSecret", "fonts"]);
            S && k.elements.update(S);
          }
        },
        [r, v, k.elements]
      ),
      G.useEffect(
        function () {
          var S = k.stripe;
          !S ||
            !S._registerWrapper ||
            !S.registerAppInfo ||
            (S._registerWrapper({ name: "react-stripe-js", version: "2.1.0" }),
            S.registerAppInfo({
              name: "react-stripe-js",
              version: "2.1.0",
              url: "https://stripe.com/docs/stripe-js/react",
            }));
        },
        [k.stripe]
      ),
      G.createElement(
        ks.Provider,
        { value: k },
        G.createElement(
          js.Provider,
          { value: { cart: s, setCart: u, cartState: h, setCartState: y } },
          l
        )
      )
    );
  };
Jd.propTypes = { stripe: B.any, options: B.object };
var pi = function (t) {
    var n = G.useContext(ks);
    return vy(n, t);
  },
  sc = function (t) {
    var n = G.useContext(js);
    return gy(n, t);
  },
  yy = function () {
    var t = pi("calls useElements()"),
      n = t.elements;
    return n;
  },
  xy = function () {
    var t = pi("calls useStripe()"),
      n = t.stripe;
    return n;
  };
B.func.isRequired;
var Te = function (t, n, r) {
    var l = !!r,
      i = G.useRef(r);
    G.useEffect(
      function () {
        i.current = r;
      },
      [r]
    ),
      G.useEffect(
        function () {
          if (!l || !t) return function () {};
          var o = function () {
            i.current && i.current.apply(i, arguments);
          };
          return (
            t.on(n, o),
            function () {
              t.off(n, o);
            }
          );
        },
        [l, n, t, i]
      );
  },
  wy = function (t) {
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  he = function (t, n) {
    var r = "".concat(wy(t), "Element"),
      l = function (s) {
        var u = s.id,
          d = s.className,
          p = s.options,
          h = p === void 0 ? {} : p,
          y = s.onBlur,
          g = s.onFocus,
          w = s.onReady,
          k = s.onChange,
          m = s.onEscape,
          f = s.onClick,
          v = s.onLoadError,
          S = s.onLoaderStart,
          j = s.onNetworksChange,
          N = s.onCheckout,
          _ = s.onLineItemClick,
          R = s.onConfirm,
          H = s.onCancel,
          A = s.onShippingAddressChange,
          C = s.onShippingRateChange,
          O = pi("mounts <".concat(r, ">")),
          M = O.elements,
          I = G.useState(null),
          U = Il(I, 2),
          z = U[0],
          b = U[1],
          E = G.useRef(null),
          T = G.useRef(null),
          F = sc("mounts <".concat(r, ">")),
          W = F.setCart,
          V = F.setCartState;
        Te(z, "blur", y),
          Te(z, "focus", g),
          Te(z, "escape", m),
          Te(z, "click", f),
          Te(z, "loaderror", v),
          Te(z, "loaderstart", S),
          Te(z, "networkschange", j),
          Te(z, "lineitemclick", _),
          Te(z, "confirm", R),
          Te(z, "cancel", H),
          Te(z, "shippingaddresschange", A),
          Te(z, "shippingratechange", C);
        var re;
        t === "cart"
          ? (re = function (Ot) {
              V(Ot), w && w(Ot);
            })
          : w &&
            (t === "expressCheckout"
              ? (re = w)
              : (re = function () {
                  w(z);
                })),
          Te(z, "ready", re);
        var Q =
          t === "cart"
            ? function (Z) {
                V(Z), k && k(Z);
              }
            : k;
        Te(z, "change", Q);
        var de =
          t === "cart"
            ? function (Z) {
                V(Z), N && N(Z);
              }
            : N;
        Te(z, "checkout", de),
          G.useLayoutEffect(
            function () {
              if (E.current === null && M && T.current !== null) {
                var Z = M.create(t, h);
                t === "cart" && W && W(Z),
                  (E.current = Z),
                  b(Z),
                  Z.mount(T.current);
              }
            },
            [M, h, W]
          );
        var q = wa(h);
        return (
          G.useEffect(
            function () {
              if (E.current) {
                var Z = Gd(h, q, ["paymentRequest"]);
                Z && E.current.update(Z);
              }
            },
            [h, q]
          ),
          G.useLayoutEffect(function () {
            return function () {
              E.current && (E.current.destroy(), (E.current = null));
            };
          }, []),
          G.createElement("div", { id: u, className: d, ref: T })
        );
      },
      i = function (s) {
        pi("mounts <".concat(r, ">")), sc("mounts <".concat(r, ">"));
        var u = s.id,
          d = s.className;
        return G.createElement("div", { id: u, className: d });
      },
      o = n ? i : l;
    return (
      (o.propTypes = {
        id: B.string,
        className: B.string,
        onChange: B.func,
        onBlur: B.func,
        onFocus: B.func,
        onReady: B.func,
        onEscape: B.func,
        onClick: B.func,
        onLoadError: B.func,
        onLoaderStart: B.func,
        onNetworksChange: B.func,
        onCheckout: B.func,
        onLineItemClick: B.func,
        onConfirm: B.func,
        onCancel: B.func,
        onShippingAddressChange: B.func,
        onShippingRateChange: B.func,
        options: B.object,
      }),
      (o.displayName = r),
      (o.__elementType = t),
      o
    );
  },
  ve = typeof window > "u";
he("auBankAccount", ve);
var uc = he("card", ve);
he("cardNumber", ve);
he("cardExpiry", ve);
he("cardCvc", ve);
he("fpxBank", ve);
he("iban", ve);
he("idealBank", ve);
he("p24Bank", ve);
he("epsBank", ve);
he("payment", ve);
he("expressCheckout", ve);
he("paymentRequestButton", ve);
he("linkAuthentication", ve);
he("address", ve);
he("shippingAddress", ve);
he("cart", ve);
he("paymentMethodMessaging", ve);
he("affirmMessage", ve);
he("afterpayClearpayMessage", ve);
const Sy = ({ token: e, user: t }) => {
  const n = gn(),
    [r, l] = x.useState(0),
    { title: i, price: o } = n.state,
    a = xy(),
    s = yy();
  async function u(d) {
    d.preventDefault();
    try {
      l(1);
      const p = s.getElement(uc),
        y = (await a.createToken(p, { name: t._id })).token.id,
        w = await (
          await fetch("http://localhost:8000/payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${e}`,
            },
            body: JSON.stringify({
              stripeToken: y,
              title: i,
              amount: Number(o),
            }),
          })
        ).json();
      l(w === "succeeded" ? 2 : 3);
    } catch (p) {
      l(3), console.error(p);
    }
  }
  return c.jsx("div", {
    className: "w-full h-full mt-[6.5rem] bg-slate-100",
    children:
      r === 2
        ? c.jsxs("div", {
            className: "h-[400px] flex flex-col items-center justify-center",
            children: [
              c.jsx("h3", { children: "Le paiement a ete valide avec succes" }),
              c.jsx(it, {
                to: "/",
                className: "mt-4",
                children: c.jsx("button", { children: "A l'accueil" }),
              }),
            ],
          })
        : c.jsx("form", {
            onSubmit: u,
            className:
              "container sm:max-w-[450px] min-h-[550px] flex flex-col justify-center mx-auto",
            children: c.jsxs("div", {
              className: "w-full flex flex-col bg-[#fff]",
              children: [
                c.jsxs("div", {
                  className: "min-h-[180px] p-4",
                  children: [
                    c.jsx("h3", { children: "Commande" }),
                    c.jsx("p", { className: "my-2", children: `Nom: ${i}` }),
                    c.jsx("p", {
                      className: "text-sm my-2",
                      children: "Frais protection acheteur",
                    }),
                    c.jsx("p", {
                      className: "text-sm my-2",
                      children: "Frais de port",
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className:
                    "flex flex-col flex-1 p-6 border-t border-slate-300",
                  children: [
                    c.jsx("p", {
                      className: "text-sm my-4",
                      children: `Il ne vous reste plus qu'un etape pour vous offrir ${i}`,
                    }),
                    c.jsxs("div", {
                      className: "flex justify-between",
                      children: [
                        c.jsx("span", {
                          className: "my-2 font-bold",
                          children: "Total",
                        }),
                        c.jsx("span", {
                          className: "my-2 font-bold",
                          children: `${o}XOF`,
                        }),
                      ],
                    }),
                    c.jsx(uc, {}),
                    c.jsx("button", {
                      className: `${r === 1 ? "inactive" : ""}
                 w-[80%] bg-[#77B5FE] text-slate-50 text-xl h-10 mt-8 mb-4 mx-auto`,
                      children: r === 1 ? "transaction en cours..." : "Payer",
                    }),
                    r === 3 &&
                      c.jsx("p", {
                        className: "my-2 text-red-500 text-center",
                        children:
                          "Une erreur est survenue, veuillez réessayer !",
                      }),
                  ],
                }),
              ],
            }),
          }),
  });
};
var Zd = "https://js.stripe.com/v3",
  Ey = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
  cc =
    "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",
  ky = function () {
    for (
      var t = document.querySelectorAll('script[src^="'.concat(Zd, '"]')),
        n = 0;
      n < t.length;
      n++
    ) {
      var r = t[n];
      if (Ey.test(r.src)) return r;
    }
    return null;
  },
  jy = function (t) {
    var n = t && !t.advancedFraudSignals ? "?advancedFraudSignals=false" : "",
      r = document.createElement("script");
    r.src = "".concat(Zd).concat(n);
    var l = document.head || document.body;
    if (!l)
      throw new Error(
        "Expected document.body not to be null. Stripe.js requires a <body> element."
      );
    return l.appendChild(r), r;
  },
  Cy = function (t, n) {
    !t ||
      !t._registerWrapper ||
      t._registerWrapper({
        name: "stripe-js",
        version: "1.52.1",
        startTime: n,
      });
  },
  kl = null,
  Py = function (t) {
    return (
      kl !== null ||
        (kl = new Promise(function (n, r) {
          if (typeof window > "u" || typeof document > "u") {
            n(null);
            return;
          }
          if ((window.Stripe && t && console.warn(cc), window.Stripe)) {
            n(window.Stripe);
            return;
          }
          try {
            var l = ky();
            l && t ? console.warn(cc) : l || (l = jy(t)),
              l.addEventListener("load", function () {
                window.Stripe
                  ? n(window.Stripe)
                  : r(new Error("Stripe.js not available"));
              }),
              l.addEventListener("error", function () {
                r(new Error("Failed to load Stripe.js"));
              });
          } catch (i) {
            r(i);
            return;
          }
        })),
      kl
    );
  },
  Ny = function (t, n, r) {
    if (t === null) return null;
    var l = t.apply(void 0, n);
    return Cy(l, r), l;
  },
  qd = Promise.resolve().then(function () {
    return Py(null);
  }),
  ep = !1;
qd.catch(function (e) {
  ep || console.warn(e);
});
var _y = function () {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  ep = !0;
  var l = Date.now();
  return qd.then(function (i) {
    return Ny(i, n, l);
  });
};
function Oy() {
  const [e, t] = x.useState(wl.get("vintedToken")),
    [n, r] = x.useState(null),
    [l, i] = x.useState(!1),
    [o, a] = oy(),
    s = _y(
      "pk_test_51N5rJgBVBg8h4b2rCeRDB0kIpG7xNLkmsEsWxc6z3kjkJIhhjUAntaeTYovKLSpohoriSMKvrdr10pXfZ96RnVk400klEweLkG"
    );
  x.useEffect(() => {
    async function d() {
      try {
        if (e) {
          const p = await fetch("http://localhost:8000/user", {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${e}`,
            },
          });
          if (p.status === 200) {
            const h = await p.json();
            r(h);
          } else t(null), wl.remove("vintedToken");
        }
      } catch (p) {
        console.error(p);
      }
    }
    d();
  }, [e]);
  function u(d) {
    d
      ? (t(d), wl.set("vintedToken", d, { expires: 7, sameSite: "Strict" }))
      : (t(null), r(null), wl.remove("vintedToken"));
  }
  return c.jsxs(c.Fragment, {
    children: [
      c.jsx(Rv, { token: e, handleToken: u, user: n, setSearch: a }),
      c.jsxs(Sv, {
        children: [
          c.jsx(Ye, { path: "/", element: c.jsx(Xv, { search: o }) }),
          c.jsx(Ye, {
            path: "/login",
            element: c.jsx(qv, {
              token: e,
              user: n,
              handleToken: u,
              visible: l,
              setVisible: i,
            }),
          }),
          c.jsx(Ye, {
            path: "/signup",
            element: c.jsx(Zv, { handleToken: u }),
          }),
          c.jsx(Ye, { path: "/offer/:id", element: c.jsx(Jv, {}) }),
          c.jsx(Ye, { path: "/404", element: c.jsx(ny, {}) }),
          c.jsx(Ye, { path: "/reset-password", element: c.jsx(iy, {}) }),
          c.jsx(Ye, {
            path: "*",
            element: c.jsx(xs, { replace: !0, to: "/404" }),
          }),
          c.jsxs(Ye, {
            element: c.jsx(eg, { user: n, token: e }),
            children: [
              c.jsx(Ye, { path: "/publish", element: c.jsx(ey, { token: e }) }),
              c.jsx(Ye, {
                path: "/user",
                element: c.jsx(ty, { token: e, user: n }),
              }),
              c.jsx(Ye, {
                path: "/payment",
                element: c.jsx(Jd, {
                  stripe: s,
                  children: c.jsx(Sy, { token: e, user: n }),
                }),
              }),
            ],
          }),
        ],
      }),
      c.jsx(ry, {}),
      l && c.jsx(ly, { setVisible: i }),
    ],
  });
}
vo.createRoot(document.getElementById("root")).render(
  c.jsx(G.StrictMode, { children: c.jsx(Pv, { children: c.jsx(Oy, {}) }) })
);
