let gi, s = {};
function $(e) {
  if (!e)
    return !1;
  let t = Object.prototype.toString.call(e);
  return t == "[object Function]" || t == "[object AsyncFunction]";
}
function me() {
  return Date.now && $(Date.now) ? Date.now() : (/* @__PURE__ */ new Date()).getTime();
}
s.DEFAULT_SEND_TYPE = "image", (function() {
  let e = { function: !0, object: !0 }, t = e[typeof window] && window || this, r = t.JSON, i = t.JSON3, n = !1;
  var a = function l(u, p) {
    u || (u = new t.Object()), p || (p = new t.Object());
    let b = u.Number || t.Number, w = u.String || t.String, L = u.Object || t.Object, P = u.Date || t.Date, we = u.SyntaxError || t.SyntaxError, J = u.TypeError || t.TypeError, Oe = u.Math || t.Math, nt = u.JSON || t.JSON;
    if (typeof nt == "object" && nt)
      return p.stringify = nt.stringify, p.parse = nt.parse, p.runInContext = l, p;
    let pe, ui = L.prototype, Ce = ui.toString, Vt = ui.hasOwnProperty;
    function Xe(ge, te) {
      try {
        ge();
      } catch {
        te && te();
      }
    }
    let Te = new P(-3509827334573292);
    function Y(ge) {
      if (Y[ge] != null)
        return Y[ge];
      let te;
      if (ge == "bug-string-char-index")
        te = !1;
      else if (ge == "json")
        te = Y("json-stringify") && Y("date-serialization") && Y("json-parse");
      else if (ge == "date-serialization") {
        if (te = Y("json-stringify") && Te) {
          var f = p.stringify;
          Xe(() => {
            te = f(new P(-864e13)) == '"-271821-04-20T00:00:00.000Z"' && f(new P(864e13)) == '"+275760-09-13T00:00:00.000Z"' && f(new P(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' && f(new P(-1)) == '"1969-12-31T23:59:59.999Z"';
          });
        }
      } else {
        let H, Ee = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
        if (ge == "json-stringify") {
          let x = typeof (f = p.stringify) == "function";
          x && ((H = function() {
            return 1;
          }).toJSON = H, Xe(
            () => {
              x = f(0) === "0" && f(new b()) === "0" && f(new w()) == '""' && f(Ce) === pe && f(pe) === pe && f() === pe && f(H) === "1" && f([H]) == "[1]" && f([pe]) == "[null]" && f(null) == "null" && f([pe, Ce, null]) == "[null,null,null]" && f({ a: [H, !0, !1, null, `\0\b
\f\r	`] }) == Ee && f(null, H) === "1" && f([1, 2], null, 1) == `[
 1,
 2
]`;
            },
            () => {
              x = !1;
            }
          )), te = x;
        }
        if (ge == "json-parse") {
          let x, E = p.parse;
          typeof E == "function" && Xe(
            () => {
              E("0") !== 0 || E(!1) || (H = E(Ee), (x = H.a.length == 5 && H.a[0] === 1) && (Xe(() => {
                x = !E('"	"');
              }), x && Xe(() => {
                x = E("01") !== 1;
              }), x && Xe(() => {
                x = E("1.") !== 1;
              })));
            },
            () => {
              x = !1;
            }
          ), te = x;
        }
      }
      return Y[ge] = !!te;
    }
    if (Xe(() => {
      Te = Te.getUTCFullYear() == -109252 && Te.getUTCMonth() === 0 && Te.getUTCDate() === 1 && Te.getUTCHours() == 10 && Te.getUTCMinutes() == 37 && Te.getUTCSeconds() == 6 && Te.getUTCMilliseconds() == 708;
    }), Y["bug-string-char-index"] = Y["date-serialization"] = Y.json = Y["json-stringify"] = Y["json-parse"] = null, !Y("json")) {
      let ge = Y("bug-string-char-index"), te = function(f, H) {
        let Ee, x, E, N = 0;
        for (E in (Ee = function() {
          this.valueOf = 0;
        }).prototype.valueOf = 0, x = new Ee())
          Vt.call(x, E) && N++;
        return Ee = x = null, N ? te = function(U, O) {
          let _, S, F = Ce.call(U) == "[object Function]";
          for (_ in U)
            F && _ == "prototype" || !Vt.call(U, _) || (S = _ === "constructor") || O(_);
          (S || Vt.call(U, _ = "constructor")) && O(_);
        } : (x = [
          "valueOf",
          "toString",
          "toLocaleString",
          "propertyIsEnumerable",
          "isPrototypeOf",
          "hasOwnProperty",
          "constructor"
        ], te = function(U, O) {
          let _, S, F = Ce.call(U) == "[object Function]", R = !F && typeof U.constructor != "function" && e[typeof U.hasOwnProperty] && U.hasOwnProperty || Vt;
          for (_ in U)
            F && _ == "prototype" || !R.call(U, _) || O(_);
          for (S = x.length; _ = x[--S]; ) R.call(U, _) && O(_);
        }), te(f, H);
      };
      if (!Y("json-stringify") && !Y("date-serialization")) {
        let f = {
          92: "\\\\",
          34: '\\"',
          8: "\\b",
          12: "\\f",
          10: "\\n",
          13: "\\r",
          9: "\\t"
        }, H = function(x, E) {
          return `000000${E || 0}`.slice(-x);
        }, Ee = function(x) {
          let E, N, U, O, _, S, F, R, v;
          if (Te)
            E = function(y) {
              N = y.getUTCFullYear(), U = y.getUTCMonth(), O = y.getUTCDate(), S = y.getUTCHours(), F = y.getUTCMinutes(), R = y.getUTCSeconds(), v = y.getUTCMilliseconds();
            };
          else {
            let y = Oe.floor, C = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], fe = function(Se, ue) {
              return C[ue] + 365 * (Se - 1970) + y((Se - 1969 + (ue = +(ue > 1))) / 4) - y((Se - 1901 + ue) / 100) + y((Se - 1601 + ue) / 400);
            };
            E = function(Se) {
              for (O = y(Se / 864e5), N = y(O / 365.2425) + 1970 - 1; fe(N + 1, 0) <= O; N++) ;
              for (U = y((O - fe(N, 0)) / 30.42); fe(N, U + 1) <= O; U++) ;
              O = 1 + O - fe(N, U), S = y((_ = (Se % 864e5 + 864e5) % 864e5) / 36e5) % 24, F = y(_ / 6e4) % 60, R = y(_ / 1e3) % 60, v = _ % 1e3;
            };
          }
          return (Ee = function(y) {
            return y > -1 / 0 && y < 1 / 0 ? (E(y), y = `${N <= 0 || N >= 1e4 ? (N < 0 ? "-" : "+") + H(6, N < 0 ? -N : N) : H(4, N)}-${H(2, U + 1)}-${H(2, O)}T${H(2, S)}:${H(2, F)}:${H(2, R)}.${H(3, v)}Z`, N = U = O = S = F = R = v = null) : y = null, y;
          })(x);
        };
        if (Y("json-stringify") && !Y("date-serialization")) {
          let x = function(N) {
            return Ee(this);
          }, E = p.stringify;
          p.stringify = function(N, U, O) {
            let _ = P.prototype.toJSON;
            P.prototype.toJSON = x;
            let S = E(N, U, O);
            return P.prototype.toJSON = _, S;
          };
        } else {
          let x = function(O) {
            let _ = O.charCodeAt(0);
            return f[_] || `\\u00${H(2, _.toString(16))}`;
          }, E = /[\x00-\x1F\x22\x5C]/g, N = function(O) {
            return E.lastIndex = 0, `"${E.test(O) ? O.replace(E, x) : O}"`;
          }, U = function(O, _, S, F, R, v, y) {
            let C, fe, Se, ue, hr, Wt, Ct, mr, yr;
            if (Xe(() => {
              C = _[O];
            }), typeof C == "object" && C && (C.getUTCFullYear && Ce.call(C) == "[object Date]" && C.toJSON === P.prototype.toJSON ? C = Ee(C) : typeof C.toJSON == "function" && (C = C.toJSON(O))), S && (C = S.call(_, O, C)), C == pe)
              return C === pe ? C : "null";
            switch ((fe = typeof C) == "object" && (Se = Ce.call(C)), Se || fe) {
              case "boolean":
              case "[object Boolean]":
                return `${C}`;
              case "number":
              case "[object Number]":
                return C > -1 / 0 && C < 1 / 0 ? `${C}` : "null";
              case "string":
              case "[object String]":
                return N(`${C}`);
            }
            if (typeof C == "object") {
              for (Ct = y.length; Ct--; )
                if (y[Ct] === C)
                  throw J();
              if (y.push(C), ue = [], mr = v, v += R, Se == "[object Array]") {
                for (Wt = 0, Ct = C.length; Wt < Ct; Wt++)
                  hr = U(Wt, C, S, F, R, v, y), ue.push(hr === pe ? "null" : hr);
                yr = ue.length ? R ? `[
${v}${ue.join(`,
${v}`)}
${mr}]` : `[${ue.join(",")}]` : "[]";
              } else
                te(F || C, (di) => {
                  let pi = U(di, C, S, F, R, v, y);
                  pi !== pe && ue.push(`${N(di)}:${R ? " " : ""}${pi}`);
                }), yr = ue.length ? R ? `{
${v}${ue.join(`,
${v}`)}
${mr}}` : `{${ue.join(",")}}` : "{}";
              return y.pop(), yr;
            }
          };
          p.stringify = function(O, _, S) {
            let F, R, v, y;
            if (e[typeof _] && _) {
              if ((y = Ce.call(_)) == "[object Function]")
                R = _;
              else if (y == "[object Array]") {
                v = {};
                for (var C, fe = 0, Se = _.length; fe < Se; )
                  C = _[fe++], (y = Ce.call(C)) != "[object String]" && y != "[object Number]" || (v[C] = 1);
              }
            }
            if (S)
              if ((y = Ce.call(S)) == "[object Number]") {
                if ((S -= S % 1) > 0)
                  for (S > 10 && (S = 10), F = ""; F.length < S; ) F += " ";
              } else
                y == "[object String]" && (F = S.length <= 10 ? S : S.slice(0, 10));
            return U("", ((C = {})[""] = O, C), R, v, F, "", []);
          };
        }
      }
      if (!Y("json-parse")) {
        let f, H, Ee = w.fromCharCode, x = {
          92: "\\",
          34: '"',
          47: "/",
          98: "\b",
          116: "	",
          110: `
`,
          102: "\f",
          114: "\r"
        }, E = function() {
          throw f = H = null, we();
        }, N = function() {
          for (var _, S, F, R, v, y = H, C = y.length; f < C; )
            switch (v = y.charCodeAt(f)) {
              case 9:
              case 10:
              case 13:
              case 32:
                f++;
                break;
              case 123:
              case 125:
              case 91:
              case 93:
              case 58:
              case 44:
                return _ = ge ? y.charAt(f) : y[f], f++, _;
              case 34:
                for (_ = "@", f++; f < C; )
                  if ((v = y.charCodeAt(f)) < 32)
                    E();
                  else if (v == 92)
                    switch (v = y.charCodeAt(++f)) {
                      case 92:
                      case 34:
                      case 47:
                      case 98:
                      case 116:
                      case 110:
                      case 102:
                      case 114:
                        _ += x[v], f++;
                        break;
                      case 117:
                        for (S = ++f, F = f + 4; f < F; f++)
                          (v = y.charCodeAt(f)) >= 48 && v <= 57 || v >= 97 && v <= 102 || v >= 65 && v <= 70 || E();
                        _ += Ee(`0x${y.slice(S, f)}`);
                        break;
                      default:
                        E();
                    }
                  else {
                    if (v == 34)
                      break;
                    for (v = y.charCodeAt(f), S = f; v >= 32 && v != 92 && v != 34; )
                      v = y.charCodeAt(++f);
                    _ += y.slice(S, f);
                  }
                if (y.charCodeAt(f) == 34)
                  return f++, _;
                E();
              default:
                if (S = f, v == 45 && (R = !0, v = y.charCodeAt(++f)), v >= 48 && v <= 57) {
                  for (v == 48 && (v = y.charCodeAt(f + 1)) >= 48 && v <= 57 && E(), R = !1; f < C && (v = y.charCodeAt(f)) >= 48 && v <= 57; f++) ;
                  if (y.charCodeAt(f) == 46) {
                    for (F = ++f; F < C && !((v = y.charCodeAt(F)) < 48 || v > 57); F++) ;
                    F == f && E(), f = F;
                  }
                  if ((v = y.charCodeAt(f)) == 101 || v == 69) {
                    for ((v = y.charCodeAt(++f)) != 43 && v != 45 || f++, F = f; F < C && !((v = y.charCodeAt(F)) < 48 || v > 57); F++) ;
                    F == f && E(), f = F;
                  }
                  return +y.slice(S, f);
                }
                R && E();
                var fe = y.slice(f, f + 4);
                if (fe == "true")
                  return f += 4, !0;
                if (fe == "fals" && y.charCodeAt(f + 4) == 101)
                  return f += 5, !1;
                if (fe == "null")
                  return f += 4, null;
                E();
            }
          return "$";
        }, U = function(_) {
          let S, F;
          if (_ == "$" && E(), typeof _ == "string") {
            if ((ge ? _.charAt(0) : _[0]) == "@")
              return _.slice(1);
            if (_ == "[") {
              for (S = []; (_ = N()) != "]"; )
                F ? _ == "," ? (_ = N()) == "]" && E() : E() : F = !0, _ == "," && E(), S.push(U(_));
              return S;
            }
            if (_ == "{") {
              for (S = {}; (_ = N()) != "}"; )
                F ? _ == "," ? (_ = N()) == "}" && E() : E() : F = !0, _ != "," && typeof _ == "string" && (ge ? _.charAt(0) : _[0]) == "@" && N() == ":" || E(), S[_.slice(1)] = U(N());
              return S;
            }
            E();
          }
          return _;
        }, O = function(_, S, F) {
          let R = ci(_, S, F);
          R === pe ? delete _[S] : _[S] = R;
        };
        var ci = function(_, S, F) {
          let R, v = _[S];
          if (typeof v == "object" && v)
            if (Ce.call(v) == "[object Array]")
              for (R = v.length; R--; ) O(Ce, te, v);
            else
              te(v, (y) => {
                O(v, y, F);
              });
          return F.call(_, S, v);
        };
        p.parse = function(_, S) {
          let F, R;
          return f = 0, H = `${_}`, F = U(N()), N() != "$" && E(), f = H = null, S && Ce.call(S) == "[object Function]" ? ci(((R = {})[""] = F, R), "", S) : F;
        };
      }
    }
    return p.runInContext = l, p;
  }(
    t,
    t.JSON3 = {
      noConflict() {
        return n || (n = !0, t.JSON = r, t.JSON3 = i, r = i = null), a;
      }
    }
  );
  t.JSON ? (t.JSON.parse = a.parse, t.JSON.stringify = a.stringify) : t.JSON = { parse: a.parse, stringify: a.stringify };
}).call(window), function(e) {
  if (e.atob)
    try {
      e.atob(" ");
    } catch {
      e.atob = (t = e.atob, (r = function(n) {
        return t(String(n).replace(/[\t\n\f\r ]+/g, ""));
      }).original = t, r);
    }
  else {
    var t, r;
    let i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", n = /^(?:[A-Z\d+/]{4})*?(?:[A-Z\d+/]{2}(?:==)?|[A-Z\d+/]{3}=?)?$/i;
    e.btoa = function(a) {
      a = String(a);
      for (var l, u, p, b, w = "", L = 0, P = a.length % 3; L < a.length; ) {
        if ((u = a.charCodeAt(L++)) > 255 || (p = a.charCodeAt(L++)) > 255 || (b = a.charCodeAt(L++)) > 255)
          return "";
        w += i.charAt((l = u << 16 | p << 8 | b) >> 18 & 63) + i.charAt(l >> 12 & 63) + i.charAt(l >> 6 & 63) + i.charAt(63 & l);
      }
      return P ? w.slice(0, P - 3) + "===".substring(P) : w;
    }, e.atob = function(a) {
      if (a = String(a).replace(/[\t\n\f\r ]+/g, ""), !n.test(a))
        return "";
      a += "==".slice(2 - (3 & a.length));
      for (var l, u, p, b = "", w = 0; w < a.length; )
        l = i.indexOf(a.charAt(w++)) << 18 | i.indexOf(a.charAt(w++)) << 12 | (u = i.indexOf(a.charAt(w++))) << 6 | (p = i.indexOf(a.charAt(w++))), b += u === 64 ? String.fromCharCode(l >> 16 & 255) : p === 64 ? String.fromCharCode(l >> 16 & 255, l >> 8 & 255) : String.fromCharCode(
          l >> 16 & 255,
          l >> 8 & 255,
          255 & l
        );
      return b;
    };
  }
}(window);
let ee = {
  setup(e) {
    gi = e;
  },
  log() {
    (gi || console && console.log || function() {
    }).apply(
      null,
      arguments
    );
  }
};
var I = {
  get(e) {
    return window.localStorage.getItem(e);
  },
  parse(e) {
    let t;
    try {
      t = JSON.parse(I.get(e)) || null;
    } catch (r) {
      ee.log(r);
    }
    return t;
  },
  set(e, t) {
    try {
      window.localStorage.setItem(e, t);
    } catch (r) {
      ee.log(r);
    }
  },
  remove(e) {
    window.localStorage.removeItem(e);
  },
  isSupport() {
    let e = !0;
    try {
      let t = "__local_store_support__", r = "testIsSupportStorage";
      I.set(t, r), I.get(t) !== r && (e = !1), I.remove(t);
    } catch {
      e = !1;
    }
    return e;
  }
};
function d(e) {
  return e != null && Object.prototype.toString.call(e) == "[object Object]";
}
let en = function() {
  let e = (/* @__PURE__ */ new Date()).getTime();
  return function(t) {
    return Math.ceil((e = (9301 * e + 49297) % 233280) / 233280 * t);
  };
}();
function ve() {
  if (typeof Uint32Array == "function") {
    let e = "";
    if (typeof crypto < "u" ? e = crypto : typeof msCrypto < "u" && (e = msCrypto), d(e) && e.getRandomValues) {
      let t = new Uint32Array(1);
      return e.getRandomValues(t)[0] / 2 ** 32;
    }
  }
  return en(1e19) / 1e19;
}
function ie(e) {
  let t = null;
  try {
    t = JSON.parse(e);
  } catch {
  }
  return t;
}
function nr(e, t) {
  this.lockGetPrefix = e || "lock-get-prefix", this.lockSetPrefix = t || "lock-set-prefix";
}
function Br(e) {
  return typeof e == "function" || !(!e || typeof e != "object") && Br(e.listener);
}
function De() {
  this._events = {};
}
function Ke(e) {
  let t = e;
  try {
    t = decodeURIComponent(e);
  } catch {
    t = e;
  }
  return t;
}
function da() {
  function e() {
  }
  return typeof Object.create != "function" ? (e.prototype = null, new e()) : /* @__PURE__ */ Object.create(null);
}
function ar(e) {
  e = e || "";
  for (var t = da(), r = e.substring(1).split("&"), i = 0; i < r.length; i++) {
    let n = r[i].indexOf("=");
    if (n !== -1) {
      let a = r[i].substring(0, n), l = r[i].substring(n + 1);
      a = Ke(a), l = Ke(l), a !== "__proto__" && a !== "constructor" && a !== "prototype" && (t[a] = l);
    }
  }
  return t;
}
function g(e) {
  return Object.prototype.toString.call(e) == "[object String]";
}
function Fe(e) {
  return e.replace(/^\s+|\s+$/g, "");
}
function Kr(e) {
  let t = function(r) {
    this._fields = {
      Username: 4,
      Password: 5,
      Port: 7,
      Protocol: 2,
      Host: 6,
      Path: 8,
      URL: 0,
      QueryString: 9,
      Fragment: 10
    }, this._values = {}, this._regex = /^((\w+):\/\/)?((\w+):?(\w+)?@)?([^/?:]+):?(\d+)?([^?#]+)?\??([^#]+)?#?(\w*)/, r !== void 0 && this._parse(r);
  };
  return t.prototype.setUrl = function(r) {
    this._parse(r);
  }, t.prototype._initValues = function() {
    for (let r in this._fields) this._values[r] = "";
  }, t.prototype.addQueryString = function(r) {
    if (typeof r != "object")
      return !1;
    let i = this._values.QueryString || "";
    for (let n in r)
      i = new RegExp(`${n}[^&]+`).test(i) ? i.replace(new RegExp(`${n}[^&]+`), `${n}=${r[n]}`) : i.slice(-1) === "&" ? `${i + n}=${r[n]}` : i === "" ? `${n}=${r[n]}` : `${i}&${n}=${r[n]}`;
    this._values.QueryString = i;
  }, t.prototype.getUrl = function() {
    let r = "";
    return r += this._values.Origin, r += this._values.Port ? `:${this._values.Port}` : "", r += this._values.Path, r += this._values.QueryString ? `?${this._values.QueryString}` : "", r += this._values.Fragment ? `#${this._values.Fragment}` : "";
  }, t.prototype._parse = function(r) {
    this._initValues();
    let i = this._regex.exec(r);
    i || ee.log("URLParser::_parse -> Invalid URL");
    let n = r.split("#"), a = n[0], l = n.slice(1).join("#");
    for (let u in i = this._regex.exec(a), this._fields)
      typeof i[this._fields[u]] < "u" && (this._values[u] = i[this._fields[u]]);
    this._values.Hostname = this._values.Host.replace(/:\d+$/, ""), this._values.Origin = `${this._values.Protocol}://${this._values.Hostname}`, this._values.Fragment = l;
  }, new t(e);
}
function Ve(e) {
  let t, r = {};
  if (typeof window.URL == "function" && function() {
    try {
      return new URL("http://modernizr.com/").href === "http://modernizr.com/";
    } catch {
      return !1;
    }
  }())
    (r = new URL(e)).searchParams || (r.searchParams = (t = ar(r.search), {
      get(i) {
        return t[i];
      }
    }));
  else {
    if (g(e) || (e = String(e)), e = Fe(e), /^https?:\/\/.+/.test(e) === !1)
      return void ee.log("Invalid URL");
    let i = Kr(e);
    r.hash = i._values.Fragment, r.host = i._values.Host ? i._values.Host + (i._values.Port ? `:${i._values.Port}` : "") : "", r.href = i._values.URL, r.password = i._values.Password, r.pathname = i._values.Path, r.port = i._values.Port, r.search = i._values.QueryString ? `?${i._values.QueryString}` : "", r.username = i._values.Username, r.hostname = i._values.Hostname, r.protocol = i._values.Protocol ? `${i._values.Protocol}:` : "", r.origin = i._values.Origin ? i._values.Origin + (i._values.Port ? `:${i._values.Port}` : "") : "", r.searchParams = function() {
      let n = ar(`?${i._values.QueryString}`);
      return {
        get(a) {
          return n[a];
        }
      };
    }();
  }
  return r;
}
nr.prototype.get = function(e, t, r, i) {
  if (!e)
    throw new Error("key is must");
  t = t || 1e4, r = r || 1e3, i = i || function() {
  };
  let n = this.lockGetPrefix + e, a = I.get(n), l = String(ve());
  if (a && (a = ie(a) || { randomNum: 0, expireTime: 0 }).expireTime > me())
    return i(null);
  I.set(
    n,
    JSON.stringify({ randomNum: l, expireTime: me() + t })
  ), setTimeout(() => {
    (a = ie(I.get(n)) || {
      randomNum: 0,
      expireTime: 0
    }) && a.randomNum === l ? (i(I.get(e)), I.remove(e), I.remove(n)) : i(null);
  }, r);
}, nr.prototype.set = function(e, t, r, i, n) {
  if (!e || !t)
    throw new Error("key and val is must");
  r = r || 1e4, i = i || 1e3, n = n || function() {
  };
  let a = this.lockSetPrefix + e, l = I.get(a), u = String(ve());
  if (l && (l = ie(l) || { randomNum: 0, expireTime: 0 }).expireTime > me())
    return n({ status: "fail", reason: "This key is locked" });
  I.set(
    a,
    JSON.stringify({ randomNum: u, expireTime: me() + r })
  ), setTimeout(() => {
    (l = ie(I.get(a)) || {
      randomNum: 0,
      expireTime: 0
    }).randomNum === u ? I.set(e, t) && n({ status: "success" }) : n({ status: "fail", reason: "This key is locked" });
  }, i);
}, De.prototype.on = function(e, t) {
  if (!e || !t)
    return !1;
  if (!Br(t))
    throw new Error("listener must be a function");
  this._events[e] = this._events[e] || [];
  let r = typeof t == "object";
  return this._events[e].push(r ? t : { listener: t, once: !1 }), this;
}, De.prototype.prepend = function(e, t) {
  if (!e || !t)
    return !1;
  if (!Br(t))
    throw new Error("listener must be a function");
  this._events[e] = this._events[e] || [];
  let r = typeof t == "object";
  return this._events[e].unshift(r ? t : { listener: t, once: !1 }), this;
}, De.prototype.prependOnce = function(e, t) {
  return this.prepend(e, { listener: t, once: !0 });
}, De.prototype.once = function(e, t) {
  return this.on(e, { listener: t, once: !0 });
}, De.prototype.off = function(e, t) {
  let r = this._events[e];
  if (!r)
    return !1;
  if (typeof t == "number")
    r.splice(t, 1);
  else if (typeof t == "function")
    for (let i = 0, n = r.length; i < n; i++)
      r[i] && r[i].listener === t && r.splice(i, 1);
  return this;
}, De.prototype.emit = function(e, t) {
  let r = this._events[e];
  if (!r)
    return !1;
  for (let i = 0; i < r.length; i++) {
    let n = r[i];
    n && (n.listener.call(this, t || {}), n.once && this.off(e, i));
  }
  return this;
}, De.prototype.removeAllListeners = function(e) {
  e && this._events[e] ? this._events[e] = [] : this._events = {};
}, De.prototype.listeners = function(e) {
  return e && typeof e == "string" ? this._events[e] : this._events;
};
let rt = /* @__PURE__ */ function() {
  let e = function() {
    for (var t = 1 * /* @__PURE__ */ new Date(), r = 0; t == 1 * /* @__PURE__ */ new Date(); ) r++;
    return t.toString(16) + r.toString(16);
  };
  return function() {
    let t = String(screen.height * screen.width);
    return t = t && /\d{5,}/.test(t) ? t.toString(16) : String(31242 * ve()).replace(".", "").slice(0, 8), `${e()}-${ve().toString(16).replace(".", "")}-${function() {
      let i, n, a = navigator.userAgent, l = [], u = 0;
      function p(b, w) {
        let L, P = 0;
        for (L = 0; L < w.length; L++) P |= l[L] << 8 * L;
        return b ^ P;
      }
      for (i = 0; i < a.length; i++)
        n = a.charCodeAt(i), l.unshift(255 & n), l.length >= 4 && (u = p(u, l), l = []);
      return l.length > 0 && (u = p(u, l)), u.toString(16);
    }()}-${t}-${e()}` || (String(ve()) + String(ve()) + String(ve())).slice(
      2,
      15
    );
  };
}();
function ne(e) {
  return !(!e || e.nodeType !== 1);
}
function Ue(e) {
  return e === void 0;
}
function j(e) {
  return Array.isArray && $(j) ? Array.isArray(e) : Object.prototype.toString.call(e) === "[object Array]";
}
function ye(e) {
  return new tn(e);
}
var tn = function(e) {
  this.ele = e;
};
let fi = function(e, t) {
  for (var r = []; e; e = e.nextSibling)
    e.nodeType === 1 && e !== t && r.push(e);
  return r;
};
function pt(e, t, r, i) {
  function n(a) {
    return a && (a.preventDefault = n.preventDefault, a.stopPropagation = n.stopPropagation, a._getPath = n._getPath), a;
  }
  n._getPath = function() {
    return this.path || this.composedPath && this.composedPath() || ye(this.target).getParents();
  }, n.preventDefault = function() {
    this.returnValue = !1;
  }, n.stopPropagation = function() {
    this.cancelBubble = !0;
  }, (function(a, l, u) {
    if (i === void 0 && l === "click" && (i = !0), a && a.addEventListener)
      a.addEventListener(
        l,
        function(p) {
          p._getPath = n._getPath, u.call(this, p);
        },
        i
      );
    else {
      let p = `on${l}`, b = a[p];
      a[p] = /* @__PURE__ */ function(w, L, P, we) {
        return function(J) {
          if (!(J = J || n(window.event)))
            return;
          J.target = J.srcElement;
          let Oe, nt, pe = !0;
          return typeof P == "function" && (Oe = P(J)), nt = L.call(w, J), we !== "beforeunload" ? (Oe !== !1 && nt !== !1 || (pe = !1), pe) : void 0;
        };
      }(a, u, b, l);
    }
  }).apply(null, arguments);
}
function rn(e) {
  let t = "pushState" in window.history ? "popstate" : "hashchange";
  pt(window, t, e);
}
function nn(e) {
  if (e)
    return typeof window.XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest() ? new XMLHttpRequest() : typeof XDomainRequest < "u" ? new XDomainRequest() : null;
  if (typeof window.XMLHttpRequest < "u")
    return new XMLHttpRequest();
  if (window.ActiveXObject)
    try {
      return new ActiveXObject("Msxml2.XMLHTTP");
    } catch {
      try {
        return new ActiveXObject("Microsoft.XMLHTTP");
      } catch (r) {
        ee.log(r);
      }
    }
}
function D(e, t, r) {
  if (typeof e == "object" && typeof e.length == "number" && e.length > 0)
    if (Array.prototype.forEach && e.forEach)
      e.forEach(t, r);
    else
      for (let i = 0; i < e.length; i++) t.call(r, e[i], i, e);
  else if (Object.prototype.toString.call(e) === "[object Object]")
    for (let i in e)
      Object.prototype.hasOwnProperty.call(e, i) && t.call(r, e[i], i, e);
}
function A(e) {
  for (let t = 1; t < arguments.length; t++) {
    let r = arguments[t];
    if (Object.prototype.toString.call(r) === "[object Object]")
      for (let i in r)
        Object.prototype.hasOwnProperty.call(r, i) && r[i] !== void 0 && (e[i] = r[i]);
  }
  return e;
}
function an(e) {
  function t(l) {
    if (!l)
      return "";
    try {
      return JSON.parse(l);
    } catch {
      return {};
    }
  }
  e.timeout = e.timeout || 2e4, e.credentials = typeof e.credentials > "u" || e.credentials;
  let r = nn(e.cors);
  if (!r)
    return !1;
  e.type || (e.type = e.data ? "POST" : "GET");
  let i, n = (e = A({ success() {
  }, error() {
  } }, e)).success, a = e.error;
  e.success = function(l) {
    n(l), i && (clearTimeout(i), i = null);
  }, e.error = function(l) {
    a(l), i && (clearTimeout(i), i = null);
  }, i = setTimeout(() => {
    (function() {
      try {
        r && typeof r == "object" && r.abort && r.abort();
      } catch (l) {
        ee.log(l);
      }
      i && (clearTimeout(i), i = null, e.error && e.error(), r.onreadystatechange = null, r.onload = null, r.onerror = null);
    })();
  }, e.timeout), typeof XDomainRequest < "u" && r instanceof XDomainRequest && (r.onload = function() {
    e.success && e.success(t(r.responseText)), r.onreadystatechange = null, r.onload = null, r.onerror = null;
  }, r.onerror = function() {
    e.error && e.error(t(r.responseText), r.status), r.onreadystatechange = null, r.onerror = null, r.onload = null;
  }), r.onreadystatechange = function() {
    try {
      r.readyState == 4 && (r.status >= 200 && r.status < 300 || r.status == 304 ? e.success(t(r.responseText)) : e.error(t(r.responseText), r.status), r.onreadystatechange = null, r.onload = null);
    } catch {
      r.onreadystatechange = null, r.onload = null;
    }
  }, r.open(e.type, e.url, !0);
  try {
    e.credentials && (r.withCredentials = !0), d(e.header) && D(e.header, (l, u) => {
      r.setRequestHeader && r.setRequestHeader(u, l);
    }), e.data && (e.cors || r.setRequestHeader && r.setRequestHeader("X-Requested-With", "XMLHttpRequest"), e.contentType === "application/json" ? r.setRequestHeader && r.setRequestHeader(
      "Content-type",
      "application/json; charset=UTF-8"
    ) : r.setRequestHeader && r.setRequestHeader(
      "Content-type",
      "application/x-www-form-urlencoded"
    ));
  } catch (l) {
    ee.log(l);
  }
  r.send(e.data || null);
}
function sn(e, t) {
  let r = [];
  return e == null ? r : Array.prototype.map && e.map === Array.prototype.map ? e.map(t) : (D(e, (i, n, a) => {
    r.push(t(i, n, a));
  }), r);
}
function kt(e) {
  let t = [];
  try {
    t = sn(atob(e).split(""), (r) => `%${`00${r.charCodeAt(0).toString(16)}`.slice(-2)}`);
  } catch {
    t = [];
  }
  try {
    return decodeURIComponent(t.join(""));
  } catch {
    return t.join("");
  }
}
function qt(e) {
  let t = "";
  try {
    t = btoa(
      encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, (r, i) => String.fromCharCode(`0x${i}`))
    );
  } catch {
    t = e;
  }
  return t;
}
function pa(e, t) {
  t = t || window;
  let r = !1, i = !0, n = t.document, a = n.documentElement, l = n.addEventListener, u = l ? "addEventListener" : "attachEvent", p = l ? "removeEventListener" : "detachEvent", b = l ? "" : "on", w = function(P) {
    P.type == "readystatechange" && n.readyState != "complete" || ((P.type == "load" ? t : n)[p](b + P.type, w, !1), !r && (r = !0) && e.call(t, P.type || P));
  }, L = function() {
    try {
      a.doScroll("left");
    } catch {
      return void setTimeout(L, 50);
    }
    w("poll");
  };
  if (n.readyState == "complete")
    e.call(t, "lazy");
  else {
    if (!l && a.doScroll) {
      try {
        i = !t.frameElement;
      } catch (P) {
        ee.log(P);
      }
      i && L();
    }
    n[u](`${b}DOMContentLoaded`, w, !1), n[u](`${b}readystatechange`, w, !1), t[u](`${b}load`, w, !1);
  }
}
tn.prototype = {
  addClass(e) {
    return !` ${this.ele.className} `.includes(` ${e} `) && (this.ele.className = this.ele.className + (this.ele.className === "" ? "" : " ") + e), this;
  },
  removeClass(e) {
    let t = ` ${this.ele.className} `;
    return t.includes(` ${e} `) && (this.ele.className = t.replace(` ${e} `, " ").slice(1, -1)), this;
  },
  hasClass(e) {
    return ` ${this.ele.className} `.includes(` ${e} `);
  },
  attr(e, t) {
    return typeof e == "string" && Ue(t) ? this.ele.getAttribute(e) : (typeof e == "string" && (t = String(t), this.ele.setAttribute(e, t)), this);
  },
  offset() {
    let e = this.ele.getBoundingClientRect();
    if (e.width || e.height) {
      let t = this.ele.ownerDocument.documentElement;
      return {
        top: e.top + window.pageYOffset - t.clientTop,
        left: e.left + window.pageXOffset - t.clientLeft
      };
    }
    return { top: 0, left: 0 };
  },
  getSize() {
    if (!window.getComputedStyle)
      return { width: this.ele.offsetWidth, height: this.ele.offsetHeight };
    try {
      let e = this.ele.getBoundingClientRect();
      return { width: e.width, height: e.height };
    } catch {
      return { width: 0, height: 0 };
    }
  },
  getStyle(e) {
    return this.ele.currentStyle ? this.ele.currentStyle[e] : this.ele.ownerDocument.defaultView.getComputedStyle(this.ele, null).getPropertyValue(e);
  },
  wrap(e) {
    let t = document.createElement(e);
    return this.ele.parentNode.insertBefore(t, this.ele), t.appendChild(this.ele), ye(t);
  },
  getCssStyle(e) {
    let t = this.ele.style.getPropertyValue(e);
    if (t)
      return t;
    let r = null;
    if (typeof window.getMatchedCSSRules == "function" && (r = window.getMatchedCSSRules(this.ele)), !r || !j(r))
      return null;
    for (let i = r.length - 1; i >= 0; i--)
      if (t = r[i].style.getPropertyValue(e))
        return t;
  },
  sibling(e, t) {
    for (; (e = e[t]) && e.nodeType !== 1; ) ;
    return e;
  },
  next() {
    return this.sibling(this.ele, "nextSibling");
  },
  prev() {
    return this.sibling(this.ele, "previousSibling");
  },
  siblings() {
    return fi((this.ele.parentNode || {}).firstChild, this.ele);
  },
  children() {
    return fi(this.ele.firstChild);
  },
  parent() {
    let e = this.ele.parentNode;
    return ye(e = e && e.nodeType !== 11 ? e : null);
  },
  previousElementSibling() {
    let e = this.ele;
    if ("previousElementSibling" in document.documentElement)
      return ye(e.previousElementSibling);
    for (; e = e.previousSibling; )
      if (e.nodeType === 1)
        return ye(e);
    return ye(null);
  },
  getSameTypeSiblings() {
    for (var e = this.ele, t = e.parentNode, r = e.tagName.toLowerCase(), i = [], n = 0; n < t.children.length; n++) {
      let a = t.children[n];
      a.nodeType === 1 && a.tagName.toLowerCase() === r && i.push(t.children[n]);
    }
    return i;
  },
  getParents() {
    try {
      let e = this.ele;
      if (!ne(e))
        return [];
      let t = [e];
      if (e === null || e.parentElement === null)
        return [];
      for (; e.parentElement !== null; ) e = e.parentElement, t.push(e);
      return t;
    } catch {
      return [];
    }
  }
};
let st = {
  get(e) {
    for (let r = `${e}=`, i = document.cookie.split(";"), n = 0; n < i.length; n++) {
      for (var t = i[n]; t.charAt(0) == " "; ) t = t.substring(1, t.length);
      if (t.indexOf(r) == 0)
        return Ke(t.substring(r.length, t.length));
    }
    return null;
  },
  set(e, t, r, i, n, a) {
    let l = a, u = "", p = "", b = "";
    if ((r = r ?? 73e3) !== 0) {
      let J = /* @__PURE__ */ new Date();
      String(r).slice(-1) === "s" ? J.setTime(J.getTime() + 1e3 * Number(String(r).slice(0, -1))) : J.setTime(J.getTime() + 24 * r * 60 * 60 * 1e3), u = `; expires=${J.toGMTString()}`;
    }
    function w(J) {
      return !!J && J.replace(/\r\n/g, "");
    }
    i && i !== "" && (b = `; SameSite=${i}`), n && (p = "; secure");
    let L = "", P = "", we = "";
    e && (L = w(e)), t && (P = w(t)), l && (we = w(l)), L && P && (document.cookie = `${L}=${encodeURIComponent(P)}${u}; path=/${we}${b}${p}`);
  },
  remove(e, t) {
    this.set(e, "1", -1, t);
  },
  isSupport(e, t, r, i, n) {
    e = e || "cookie_support_test", t = t || "1";
    let a = this;
    return navigator.cookieEnabled && (a.set(e, t, r, i, n), a.get(e) === t && (a.remove(e), !0));
  }
};
function on(e) {
  return D(Array.prototype.slice.call(arguments, 1), (t) => {
    for (let r in t) t[r] !== void 0 && e[r] === void 0 && (e[r] = t[r]);
  }), e;
}
function Ft(e) {
  let t = e;
  try {
    t = decodeURI(e);
  } catch {
    t = e;
  }
  return t;
}
function ga(e) {
  let t = "t6KJCZa5pDdQ9khoEM3Tj70fbP2eLSyc4BrsYugARqFIw1mzlGNVXOHiWvxUn8", r = t.length - 1, i = {}, n = 0;
  for (n = 0; n < t.length; n++) i[t.charAt(n)] = t.charAt(r - n);
  let a = "";
  for (n = 0; n < e.length; n++)
    e.charAt(n) in i ? a += i[e.charAt(n)] : a += e.charAt(n);
  return a;
}
function Kt(e) {
  return Object.prototype.toString.call(e) == "[object Date]";
}
function Vr(e) {
  function t(r) {
    return r < 10 ? `0${r}` : r;
  }
  return `${e.getFullYear()}-${t(e.getMonth() + 1)}-${t(e.getDate())} ${t(e.getHours())}:${t(e.getMinutes())}:${t(e.getSeconds())}.${t(e.getMilliseconds())}`;
}
function ln(e) {
  return D(e, (t, r) => {
    Kt(t) ? e[r] = Vr(t) : d(t) && (e[r] = ln(t));
  }), e;
}
function un(e) {
  return D(Array.prototype.slice.call(arguments, 1), (t) => {
    for (let r in t)
      t[r] !== void 0 && (d(t[r]) && d(e[r]) ? A(e[r], t[r]) : e[r] = t[r]);
  }), e;
}
function cn(e, t, r) {
  let i = Object.prototype.hasOwnProperty;
  if (e.filter)
    return e.filter(t);
  for (var n = [], a = 0; a < e.length; a++)
    if (i.call(e, a)) {
      let l = e[a];
      t.call(r, l, a, e) && n.push(l);
    }
  return n;
}
function fa(e) {
  try {
    return JSON.stringify(e, null, "  ");
  } catch {
    return JSON.stringify(e);
  }
}
function _a(e) {
  return typeof e == "string" && e.match(/^[a-z0-9\u4E00-\u9FA5\-.]+$/i) ? e : "";
}
function Wr(e, t, r) {
  t = t || "domain_test";
  let i = _a(e = e || location.hostname), n = i.split(".");
  if (j(n) && n.length >= 2 && !/^(\d+\.)+\d+$/.test(i)) {
    for (let a = `.${n.splice(n.length - 1, 1)}`; n.length > 0; )
      if (a = `.${n.splice(n.length - 1, 1)}${a}`, st.set(t, "true", 0, null, r, `; domain=${a}`), document.cookie.includes(`${t}=true`))
        return st.set(t, "true", "-1s", null, r, `; domain=${a}`), a;
  }
  return "";
}
function Yt(e) {
  if (!g(e))
    return null;
  let t, r = e.split(">");
  return (t = function i(n) {
    let a, l = r.shift();
    if (!l)
      return n;
    try {
      a = function(u, p) {
        let b;
        if ((u = Fe(u)) === "body")
          return document.getElementsByTagName("body")[0];
        if (u.indexOf("#") === 0)
          u = u.slice(1), b = document.getElementById(u);
        else if (u.includes(":nth-of-type")) {
          let w = u.split(":nth-of-type");
          if (!w[0] || !w[1])
            return null;
          let L = w[0], P = w[1].match(/\((\d+)\)/);
          if (!P || !P[1])
            return null;
          let we = Number(P[1]);
          if (!(ne(p) && p.children && p.children.length > 0))
            return null;
          for (let J = p.children, Oe = 0; Oe < J.length; Oe++)
            if (ne(J[Oe]) && J[Oe].tagName.toLowerCase() === L && --we == 0) {
              b = J[Oe];
              break;
            }
          if (we > 0)
            return null;
        }
        return b || null;
      }(l, n);
    } catch (u) {
      ee.log(u);
    }
    return a && ne(a) ? i(a) : null;
  }()) && ne(t) ? t : null;
}
function dn(e, t) {
  let r = "", i = "";
  return e.textContent ? r = Fe(e.textContent) : e.innerText && (r = Fe(e.innerText)), r && (r = r.replace(/[\r\n]/g, " ").replace(/ +/g, " ").substring(0, 255)), i = r || "", t !== "input" && t !== "INPUT" || (i = e.value || ""), i;
}
function Re(e, t) {
  t && typeof t == "string" || (t = "hostname解析异常");
  let r = null;
  try {
    r = Ve(e).hostname;
  } catch {
    ee.log(
      "getHostname传入的url参数不合法！"
    );
  }
  return r || t;
}
function Ir() {
  try {
    let e = navigator.appVersion.match(/OS (\d+)[._](\d+)[._]?(\d+)?/);
    return e && e[1] ? Number.parseInt(e[1], 10) : "";
  } catch {
    return "";
  }
}
function qe(e, t) {
  t = t.replace(/\[/, "\\[").replace(/\]/, "\\]"), e = Ke(e);
  let r = new RegExp(`[\\?&]${t}=([^&#]*)`).exec(e);
  return r === null || r && typeof r[1] != "string" && r[1].length ? "" : Ke(r[1]);
}
function xt(e) {
  let t = {}, r = e.split("?")[1] || "";
  return r && (t = ar(`?${r}`)), t;
}
function pn() {
  return typeof window.matchMedia < "u" || typeof window.msMatchMedia < "u";
}
function ha() {
  let e = screen.msOrientation || screen.mozOrientation || (screen.orientation || {}).type, t = "未取到值";
  if (e)
    t = e.includes("landscape") ? "landscape" : "portrait";
  else if (pn()) {
    let r = window.matchMedia || window.msMatchMedia;
    r("(orientation: landscape)").matches ? t = "landscape" : r("(orientation: portrait)").matches && (t = "portrait");
  }
  return t;
}
function zr() {
  let e, t = {}, r = navigator.userAgent.toLowerCase();
  return (e = r.match(/ qq\/([\d.]+)/)) ? t.qqBuildinBrowser = Number(e[1].split(".")[0]) : (e = r.match(/mqqbrowser\/([\d.]+)/)) ? t.qqBrowser = Number(e[1].split(".")[0]) : (e = r.match(/opera.([\d.]+)/)) ? t.opera = Number(e[1].split(".")[0]) : (e = r.match(/msie ([\d.]+)/)) ? t.ie = Number(e[1].split(".")[0]) : (e = r.match(/edge.([\d.]+)/)) ? t.edge = Number(e[1].split(".")[0]) : (e = r.match(/firefox\/([\d.]+)/)) ? t.firefox = Number(e[1].split(".")[0]) : (e = r.match(/chrome\/([\d.]+)/)) ? t.chrome = Number(e[1].split(".")[0]) : (e = r.match(/version\/([\d.]+).*safari/)) ? t.safari = Number(e[1].match(/^\d*.\d*/)) : (e = r.match(/trident\/([\d.]+)/)) && (t.ie = 11), t;
}
function oe(e) {
  return g(e) ? Ft(e = Fe(e)) : Ft(location.href);
}
function gt(e) {
  return g(e) ? Ft(e = Fe(e)) : Ft(location.pathname);
}
function jr(e, t) {
  return e.hasAttribute ? e.hasAttribute(t) : e.attributes ? !(!e.attributes[t] || !e.attributes[t].specified) : void 0;
}
function Xr(e, t) {
  if (typeof t == "string")
    return jr(e, t);
  if (j(t)) {
    for (var r = !1, i = 0; i < t.length; i++)
      if (jr(e, t[i])) {
        r = !0;
        break;
      }
    return r;
  }
}
function gn(e) {
  if (typeof e != "string")
    return 0;
  let t = 0;
  if (e.length == 0)
    return t;
  for (let r = 0; r < e.length; r++)
    t = (t << 5) - t + e.charCodeAt(r), t &= t;
  return t;
}
function Yr(e) {
  let t = 9007199254740992, r = -9007199254740992, i = 0;
  if (e.length > 0)
    for (let n = e.split(""), a = 0; a < n.length; a++) {
      let l = n[a].charCodeAt(), u = 31 * i + l;
      if (u > t)
        for (i = r + i; (u = 31 * i + l) < r; ) i = i / 2 + l;
      if (u < r)
        for (i = t + i; (u = 31 * i + l) > t; ) i = i / 2 + l;
      i = 31 * i + l;
    }
  return i;
}
function ae(e, t) {
  let r = e.indexOf;
  if (r)
    return r.call(e, t);
  for (let i = 0; i < e.length; i++)
    if (t === e[i])
      return i;
  return -1;
}
function ma(e, t) {
  return e.prototype = new t(), e.prototype.constructor = e, e.superclass = t.prototype, e;
}
let ya = Object.prototype.hasOwnProperty;
function fn(e) {
  return !(!e || !ya.call(e, "callee"));
}
function _n(e) {
  return Object.prototype.toString.call(e) == "[object Boolean]";
}
function se(e) {
  if (d(e)) {
    for (let t in e)
      if (Object.prototype.hasOwnProperty.call(e, t))
        return !1;
    return !0;
  }
  return !1;
}
function hn(e) {
  return typeof e != "string" ? !1 : /^https?:\/\/.+/.test(e) !== !1 || (ee.log("Invalid URL"), !1);
}
function mn() {
  return !!navigator.userAgent.match(/iPhone|iPad|iPod/i);
}
function sr(e) {
  try {
    JSON.parse(e);
  } catch {
    return !1;
  }
  return !0;
}
function He(e) {
  return Object.prototype.toString.call(e) == "[object Number]" && /[\d.]+/.test(String(e));
}
function va() {
  let e = !1;
  if (typeof navigator != "object" || typeof navigator.sendBeacon != "function")
    return e;
  let t = zr(), r = navigator.userAgent.toLowerCase();
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    let i = `${r.match(/os [\d._]*/gi)}`.replace(/[^0-9|_.]/g, "").replace(/_/g, ".").split(".");
    typeof t.safari > "u" && (t.safari = i[0]), i[0] && (t.qqBuildinBrowser || t.qqBrowser) ? e = !1 : i[0] && i[0] < 13 ? (t.chrome > 41 || t.firefox > 30 || t.opera > 25 || t.safari > 12) && (e = !0) : (t.chrome > 41 || t.firefox > 30 || t.opera > 25 || t.safari > 11.3) && (e = !0);
  } else
    (t.chrome > 38 || t.edge > 13 || t.firefox > 30 || t.opera > 25 || t.safari > 11) && (e = !0);
  return e;
}
function ba() {
  return typeof window.XMLHttpRequest < "u" && ("withCredentials" in new XMLHttpRequest() || typeof XDomainRequest < "u");
}
function yn(e) {
  if (!d(e) || !g(e.callbackName))
    return ee.log("JSONP 请求缺少 callbackName"), !1;
  e.success = $(e.success) ? e.success : function() {
  }, e.error = $(e.error) ? e.error : function() {
  }, e.data = e.data || "";
  let t = document.createElement("script"), r = document.getElementsByTagName("head")[0], i = null, n = !1;
  r.appendChild(t), He(e.timeout) && (i = setTimeout(
    () => {
      if (n)
        return !1;
      e.error("timeout"), window[e.callbackName] = function() {
        ee.log("call jsonp error");
      }, i = null, r.removeChild(t), n = !0;
    },
    Math.min(e.timeout, 3e4)
  )), window[e.callbackName] = function() {
    clearTimeout(i), i = null, e.success.apply(null, arguments), window[e.callbackName] = function() {
      ee.log("call jsonp error");
    }, r.removeChild(t);
  };
  let a = encodeURIComponent(e.callbackName), l = "";
  if (e.url.includes("?") ? e.url += `&callbackName=${a}` : e.url += `?callbackName=${a}`, d(e.data)) {
    let u = [];
    D(e.data, (p, b) => {
      u.push(`${encodeURIComponent(b)}=${encodeURIComponent(p)}`);
    }), (l = u.join("&")) && (e.url += `&${l}`);
  }
  t.onerror = function(u) {
    if (n)
      return !1;
    window[e.callbackName] = function() {
      ee.log("call jsonp error");
    }, clearTimeout(i), i = null, r.removeChild(t), e.error(u), n = !0;
  }, t.src = e.url;
}
function vn(e) {
  ({
    visibleHandler: $(e.visible) ? e.visible : function() {
    },
    hiddenHandler: $(e.hidden) ? e.hidden : function() {
    },
    visibilityChange: null,
    hidden: null,
    isSupport() {
      return typeof document[this.hidden] < "u";
    },
    init() {
      typeof document.hidden < "u" ? (this.hidden = "hidden", this.visibilityChange = "visibilitychange") : typeof document.mozHidden < "u" ? (this.hidden = "mozHidden", this.visibilityChange = "mozvisibilitychange") : typeof document.msHidden < "u" ? (this.hidden = "msHidden", this.visibilityChange = "msvisibilitychange") : typeof document.webkitHidden < "u" && (this.hidden = "webkitHidden", this.visibilityChange = "webkitvisibilitychange"), this.listen();
    },
    listen() {
      if (this.isSupport()) {
        let t = this;
        pt(
          document,
          this.visibilityChange,
          () => {
            document[t.hidden] ? t.hiddenHandler() : t.visibleHandler();
          },
          1
        );
      } else
        pt(window, "focus", this.visibleHandler), pt(window, "blur", this.hiddenHandler);
    }
  }).init();
}
function fr(e) {
  e = A(
    {
      success() {
      },
      error() {
      },
      appendCall(r) {
        document.getElementsByTagName("head")[0].appendChild(r);
      }
    },
    e
  );
  let t = null;
  e.type === "css" && ((t = document.createElement("link")).rel = "stylesheet", t.href = e.url), e.type === "js" && ((t = document.createElement("script")).async = "async", t.setAttribute("charset", "UTF-8"), t.src = e.url, t.type = "text/javascript"), t.onload = t.onreadystatechange = function() {
    this.readyState && this.readyState !== "loaded" && this.readyState !== "complete" || (e.success(), t.onload = t.onreadystatechange = null);
  }, t.onerror = function() {
    e.error(), t.onerror = null;
  }, e.appendCall(t);
}
function wa(e) {
  if (typeof e != "string")
    return "";
  for (let t = /^\s*javascript/i; t.test(e); ) e = e.replace(t, "");
  return e;
}
function bn(e, t) {
  t = typeof t == "number" ? t : 13;
  for (var r = (e = String(e)).split(""), i = 0; i < r.length; i++)
    r[i].charCodeAt(0) < 126 && (r[i] = String.fromCharCode((r[i].charCodeAt(0) + t) % 126));
  return r.join("");
}
function wn(e) {
  return bn(e = String(e), 113);
}
function Zr(e) {
  d(e) && D(e, (t, r) => {
    d(t) ? Zr(e[r]) : Kt(t) && (e[r] = Vr(t));
  });
}
let St = {
  isSupport() {
    let e = !0, t = "testIsSupportStorage";
    try {
      sessionStorage && sessionStorage.setItem ? (sessionStorage.setItem("__session_storage_support__", t), sessionStorage.removeItem("__session_storage_support__", t), e = !0) : e = !1;
    } catch {
      e = !1;
    }
    return e;
  }
};
function Zt(e) {
  let t = document.createElement("style");
  t.type = "text/css";
  try {
    t.appendChild(document.createTextNode(e));
  } catch {
    t.styleSheet.cssText = e;
  }
  let r = document.getElementsByTagName("head")[0], i = document.getElementsByTagName("script")[0];
  r ? r.children.length ? r.insertBefore(t, r.children[0]) : r.appendChild(t) : i.parentNode.insertBefore(t, i);
}
function Sa(e) {
  if (typeof e != "string")
    return ee.log("转换unicode错误", e), e;
  for (var t = "", r = 0; r < e.length; r++)
    t += `\\${e.charCodeAt(r).toString(16)}`;
  return t;
}
function $a(e, t, r) {
  let i, n, a, l = null, u = 0;
  r || (r = {});
  let p = function() {
    u = r.leading === !1 ? 0 : me(), l = null, a = e.apply(i, n), l || (i = n = null);
  };
  return function() {
    let b = me();
    u || r.leading !== !1 || (u = b);
    let w = t - (b - u);
    return i = this, n = arguments, w <= 0 || w > t ? (l && (clearTimeout(l), l = null), u = b, a = e.apply(i, n), l || (i = n = null)) : l || r.trailing === !1 || (l = setTimeout(p, w)), a;
  };
}
function Sn(e) {
  let t = [];
  return e == null || D(e, (r) => {
    t[t.length] = r;
  }), t;
}
function ka(e) {
  return e ? e.toArray ? e.toArray() : j(e) || fn(e) ? Array.prototype.slice.call(e) : Sn(e) : [];
}
function Gt(e) {
  for (var t, r = [], i = {}, n = 0; n < e.length; n++)
    (t = e[n]) in i || (i[t] = !0, r.push(t));
  return r;
}
let Fa = { "+": "-", "/": "_", "=": "." }, Ca = { "-": "+", _: "/", ".": "=" }, Ea = {
  encode(e) {
    return e.replace(/[+/=]/g, (t) => Fa[t]);
  },
  decode(e) {
    return e.replace(/[-_.]/g, (t) => Ca[t]);
  },
  trim(e) {
    return e.replace(/[.=]{1,2}$/, "");
  },
  isBase64(e) {
    return /^[A-Z0-9+/]*[=]{0,2}$/i.test(e);
  },
  isUrlSafeBase64(e) {
    return /^[\w-]*\.{0,2}$/.test(e);
  }
};
function Nr(e, t, r) {
  return r = r || 0, e.substr(r, t.length) === t;
}
function Or(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
}
let Da = {
  __proto__: null,
  noPrototypePollution: Or,
  ConcurrentStorage: nr,
  EventEmitter: De,
  URL: Ve,
  UUID: rt,
  addEvent: pt,
  addHashEvent: rn,
  ajax: an,
  base64Decode: kt,
  base64Encode: qt,
  bindReady: pa,
  cookie: st,
  coverExtend: on,
  decodeURI: Ft,
  decodeURIComponent: Ke,
  dfmapping: ga,
  each: D,
  encodeDates: ln,
  extend: A,
  extend2Lev: un,
  filter: cn,
  formatDate: Vr,
  formatJsonString: fa,
  getCookieTopLevelDomain: Wr,
  getDomBySelector: Yt,
  getElementContent: dn,
  getHostname: Re,
  getIOSVersion: Ir,
  getQueryParam: qe,
  getQueryParamsFromUrl: xt,
  getRandom: ve,
  getRandomBasic: en,
  getScreenOrientation: ha,
  getUA: zr,
  getURL: oe,
  getURLPath: gt,
  getURLSearchParams: ar,
  hasAttribute: jr,
  hasAttributes: Xr,
  hashCode: gn,
  hashCode53: Yr,
  indexOf: ae,
  inherit: ma,
  isArguments: fn,
  isArray: j,
  isBoolean: _n,
  isDate: Kt,
  isElement: ne,
  isEmptyObject: se,
  isFunction: $,
  isHttpUrl: hn,
  isIOS: mn,
  isJSONString: sr,
  isNumber: He,
  isObject: d,
  isString: g,
  isSupportBeaconSend: va,
  isSupportCors: ba,
  isUndefined: Ue,
  jsonp: yn,
  listenPageState: vn,
  loadScript: fr,
  localStorage: I,
  logger: ee,
  map: sn,
  mediaQueriesSupported: pn,
  now: me,
  removeScriptProtocol: wa,
  rot13defs: wn,
  rot13obfs: bn,
  ry: ye,
  safeJSONParse: ie,
  searchObjDate: Zr,
  sessionStorage: St,
  setCssStyle: Zt,
  strToUnicode: Sa,
  throttle: $a,
  toArray: ka,
  trim: Fe,
  unique: Gt,
  urlParse: Kr,
  urlSafeBase64: Ea,
  values: Sn,
  xhr: nn,
  startsWith: Nr
}, zt = [], mt = {
  appendWriter(e) {
    zt.push(e);
  },
  msg() {
    let e = { module: "", level: "log", brand: "web-sdk", content: null };
    return e.content = Array.prototype.slice.call(arguments), {
      module(t) {
        return g(t) && (e.module = t), this;
      },
      level(t) {
        return g(t) && (e.level = t), this;
      },
      brand(t) {
        return g(t) && (e.brand = t), this;
      },
      log() {
        if (e.content && e.content.length) {
          for (let t = 0; t < zt.length; t++)
            if (typeof zt[t] == "function")
              try {
                zt[t].call(null, e);
              } catch {
              }
        }
        return this;
      }
    };
  }
};
function Je() {
  mt.msg.apply(mt, arguments).log();
}
function k() {
  mt.msg.apply(mt, arguments).level("warn").log();
}
function B() {
  mt.msg.apply(mt, arguments).level("error").log();
}
let h = {}, Qt = {
  preset_properties: {
    search_keyword_baidu: !1,
    latest_utm: !0,
    latest_traffic_source_type: !0,
    latest_search_keyword: !0,
    latest_referrer: !0,
    latest_referrer_host: !1,
    latest_landing_page: !1,
    latest_wx_ad_click_id: void 0,
    url: !0,
    title: !0
  },
  encrypt_cookie: !1,
  enc_cookie: !1,
  img_use_crossorigin: !1,
  name: "sa",
  max_referrer_string_length: 200,
  max_string_length: 1024,
  max_id_length: 255,
  max_key_length: 100,
  cross_subdomain: !0,
  show_log: !1,
  is_debug: !1,
  source_channel: [],
  sdk_id: "",
  auto_init: !0,
  is_track_single_page: !1,
  is_single_page: !1,
  batch_send: !1,
  custom_server_url: "",
  source_type: {},
  callback_timeout: 200,
  datasend_timeout: 8e3,
  is_track_device_id: !1,
  ignore_oom: !0,
  app_js_bridge: !1,
  white_list: {}
};
Qt.white_list[location.host] = Ve(location.href).hostname;
let $n = "utm_source utm_medium utm_campaign utm_content utm_term", _r = "1.27.11", kn = "sensorsdata_domain_test", Ut = {
  LOGIN: "$identity_login_id"
};
function Gr(e) {
  let t = h.current_domain;
  switch (typeof t) {
    case "function":
      var r = t();
      return r === "" || Fe(r) === "" ? "url解析失败" : r.includes(".") ? r : "url解析失败";
    case "string":
      return t === "" || Fe(t) === "" ? "url解析失败" : t.includes(".") ? t : "url解析失败";
    default:
      var i = Wr(
        null,
        kn,
        h.is_secure_cookie
      );
      return e === "" || i === "" ? "url解析失败" : i;
  }
}
let je = {
  get(e) {
    return st.get(e);
  },
  set(e, t, r, i) {
    let n = "";
    if (i = Ue(i) ? h.cross_subdomain : i) {
      let a = Gr(location.href);
      a === "url解析失败" && (a = ""), n = a ? `; domain=${a}` : "";
    }
    return st.set(
      e,
      t,
      r,
      h.set_cookie_samesite,
      h.is_secure_cookie,
      n
    );
  },
  remove(e, t) {
    return t = Ue(t) ? h.cross_subdomain : t, st.remove(e, t);
  },
  isSupport(e, t) {
    return e = e || "sajssdk_2015_cookie_access_test", t = t || "1", st.isSupport(e, t, 0, null, h.is_secure_cookie);
  }
};
function Fn(e, t) {
  let r = "";
  if (h.cross_subdomain === !1) {
    try {
      if (!t) {
        let i = location.host;
        Ue(s.para.white_list[i]) || (r = s.para.white_list[i]);
      }
    } catch (i) {
      B(i);
    }
    r = typeof r == "string" && r !== "" ? `sajssdk_2015_${h.sdk_id}${e}_${r.replace(/\./g, "_")}` : `sajssdk_2015_root_${h.sdk_id}${e}`;
  } else
    r = `sajssdk_2015_cross_${h.sdk_id}${e}`;
  return r;
}
function or() {
  return je.isSupport() ? je.get("sensorsdata_is_new_user") !== null || je.get(Fn("new_user")) !== null : lr.get(lr.getNewUserFlagMemoryKey("new_user")) !== null;
}
je.getNewUser = or;
var lr = {
  data: {},
  get(e) {
    let t = this.data[e];
    return t === void 0 ? null : t._expirationTimestamp_ !== void 0 ? (/* @__PURE__ */ new Date()).getTime() > t._expirationTimestamp_ ? null : t.value : t;
  },
  set(e, t, r) {
    if (r) {
      let i = /* @__PURE__ */ new Date();
      t = {
        value: t,
        _expirationTimestamp_: String(r).slice(-1) === "s" ? i.getTime() + 1e3 * Number(String(r).slice(0, -1)) : i.getTime() + 24 * r * 60 * 60 * 1e3
      };
    }
    this.data[e] = t;
  },
  getNewUserFlagMemoryKey(e) {
    return `sajssdk_2015_${h.sdk_id}${e}`;
  }
};
let Rt = {
  checkIsAddSign(e) {
    e.type === "track" && (or() ? e.properties.$is_first_day = !0 : e.properties.$is_first_day = !1);
  },
  is_first_visit_time: !1,
  is_page_first_visited: !1,
  checkIsFirstTime(e) {
    e.type === "track" && e.event === "$pageview" && (this.is_first_visit_time ? (e.properties.$is_first_time = !0, this.is_first_visit_time = !1) : e.properties.$is_first_time = !1);
  },
  setDeviceId() {
  },
  storeInitCheck() {
    if (s.is_first_visitor) {
      let e = /* @__PURE__ */ new Date(), t = {
        h: 23 - e.getHours(),
        m: 59 - e.getMinutes(),
        s: 59 - e.getSeconds()
      };
      je.isSupport() ? je.set(
        Fn("new_user"),
        "1",
        `${3600 * t.h + 60 * t.m + t.s}s`
      ) : lr.set(
        lr.getNewUserFlagMemoryKey("new_user"),
        "1",
        `${3600 * t.h + 60 * t.m + t.s}s`
      ), this.is_first_visit_time = !0, this.is_page_first_visited = !0;
    } else
      or() || (this.checkIsAddSign = function(e) {
        e.type === "track" && (e.properties.$is_first_day = !1);
      }), this.checkIsFirstTime = function(e) {
        e.type === "track" && e.event === "$pageview" && (e.properties.$is_first_time = !1);
      };
  }
};
function ot(e, t, r) {
  let i = !(!d(h.heatmap) || !h.heatmap.useCapture);
  return d(h.heatmap) && Ue(h.heatmap.useCapture) && t === "click" && (i = !0), pt(e, t, r, i);
}
let Qr = function() {
  this._events = [], this.pendingEvents = [];
};
function Ht() {
  let e = document.referrer;
  if (!e)
    return !1;
  try {
    let t = Ve(e).hostname;
    return t && t.substring(t.length - 9) === "baidu.com";
  } catch {
    return !1;
  }
}
Qr.prototype = {
  emit(e) {
    let t = [].slice.call(arguments, 1);
    D(this._events, (r) => {
      r.type === e && r.callback.apply(r.context, t);
    }), this.pendingEvents.push({ type: e, data: t }), this.pendingEvents.length > 20 && this.pendingEvents.shift();
  },
  on(e, t, r, i) {
    $(t) && (this._events.push({ type: e, callback: t, context: r || this }), i = i !== !1, this.pendingEvents.length > 0 && i && D(this.pendingEvents, (n) => {
      n.type === e && t.apply(r, n.data);
    }));
  },
  tempAdd(e, t) {
    if (t && e)
      return this.emit(e, t);
  },
  isReady() {
  }
};
let Jt = {
  data: {},
  id() {
    return this.data.id ? this.data.id : (this.data.id = En(), this.data.id);
  },
  type() {
    return this.data.type ? this.data.type : (this.data.type = Cn(), this.data.type);
  }
};
function Cn() {
  let e = xt(document.referrer);
  if (se(e) || !e.eqid) {
    let t = xt(location.href);
    return e.ck || t.utm_source ? "baidu_sem_keyword_id" : "baidu_other_keyword_id";
  }
  return "baidu_seo_keyword_id";
}
function En() {
  let e = xt(document.referrer);
  return se(e) || !e.eqid ? rt().replace(/-/g, "") : e.eqid;
}
function Ze(e, t) {
  return g(e = e || document.referrer) ? ((e = Ft(e = Fe(e))).indexOf("https://www.baidu.com/") !== 0 || t || (e = e.split("?")[0]), g(e = e.slice(0, h.max_referrer_string_length)) ? e : "") : `取值异常_referrer异常_${String(e)}`;
}
function ur(e) {
  if ((e = e || document.referrer) === "")
    return !0;
  let t = Wr(
    null,
    kn,
    h.is_secure_cookie
  ), r = Re(e);
  return !(r = `.${r}`).includes(t) && t !== "";
}
function It(e, t) {
  e = e || document.referrer;
  let r = h.source_type.keyword;
  if (document && g(e)) {
    if (e.indexOf("http") === 0) {
      let i = Dn(e), n = xt(e);
      if (se(n))
        return h.preset_properties.search_keyword_baidu && Ht() ? void 0 : "未取到值";
      let a = null;
      for (let l in r)
        if (i === l && d(n)) {
          if (j(a = r[l]))
            for (l = 0; l < a.length; l++) {
              let u = n[a[l]];
              if (u)
                return t ? { active: u } : u;
            }
          else if (n[a])
            return t ? { active: n[a] } : n[a];
        }
      return h.preset_properties.search_keyword_baidu && Ht() ? void 0 : "未取到值";
    }
    return e === "" ? "未取到值_直接打开" : "未取到值_非http的url";
  }
  return `取值异常_referrer异常_${String(e)}`;
}
function Dn(e) {
  let t = Re(e);
  if (!t || t === "hostname解析异常")
    return "";
  let r = {
    baidu: [/^.*\.baidu\.com$/],
    bing: [/^.*\.bing\.com$/],
    google: [
      /^www\.google\.com$/,
      /^www\.google\.com\.[a-z]{2}$/,
      /^www\.google\.[a-z]{2}$/
    ],
    sm: [/^m\.sm\.cn$/],
    so: [/^.+\.so\.com$/],
    sogou: [/^.*\.sogou\.com$/],
    yahoo: [/^.*\.yahoo\.com$/]
  };
  for (let i in r)
    for (let n = r[i], a = 0, l = n.length; a < l; a++)
      if (n[a].test(t))
        return i;
  return "未知搜索引擎";
}
let et = {
  distinct_id() {
  },
  jssdkDebug() {
  },
  _sendDebug(e) {
  },
  apph5(e) {
    let t = "app_h5打通失败-", r = {
      1: `${t}use_app_track为false`,
      2: `${t}Android或者iOS，没有暴露相应方法`,
      3.1: `${t}Android校验server_url失败`,
      3.2: `${t}iOS校验server_url失败`,
      4.1: `${t}H5 校验 iOS server_url 失败`,
      4.2: `${t}H5 校验 Android server_url 失败`
    }, i = e.output, n = e.step, a = e.data || "";
    i !== "all" && i !== "console" || Je(r[n]), (i === "all" || i === "code") && d(h.is_debug) && h.is_debug.apph5 && (a.type && a.type.slice(0, 7) === "profile" || (a.properties._jssdk_debug_info = `apph5-${String(n)}`));
  },
  defineMode(e) {
    let t = {
      1: {
        title: "当前页面无法进行可视化全埋点",
        message: "App SDK 与 Web JS SDK 没有进行打通，请联系贵方技术人员修正 App SDK 的配置，详细信息请查看文档。",
        link_text: "",
        link_url: ""
      },
      2: {
        title: "当前页面无法进行可视化全埋点",
        message: "App SDK 与 Web JS SDK 没有进行打通，请联系贵方技术人员修正 Web JS SDK 的配置，详细信息请查看文档。",
        link_text: "",
        link_url: ""
      },
      3: {
        title: "当前页面无法进行可视化全埋点",
        message: "Web JS SDK 没有开启全埋点配置，请联系贵方工作人员修正 SDK 的配置，详细信息请查看文档。",
        link_text: "",
        link_url: ""
      },
      4: {
        title: "当前页面无法进行可视化全埋点",
        message: "Web JS SDK 配置的数据校验地址与 App SDK 配置的数据校验地址不一致，请联系贵方工作人员修正 SDK 的配置，详细信息请查看文档。",
        link_text: "",
        link_url: ""
      }
    };
    return !(!e || !t[e]) && t[e];
  },
  protocol: {
    protocolIsSame(e, t) {
      try {
        if (Ve(e).protocol !== Ve(t).protocol)
          return !1;
      } catch {
        return k("不支持 _.URL 方法"), !1;
      }
      return !0;
    },
    serverUrl() {
      g(h.server_url) && h.server_url !== "" && !this.protocolIsSame(h.server_url, location.href) && k(
        `SDK 检测到您的数据发送地址和当前页面地址的协议不一致，建议您修改成一致的协议。
因为：1、https 下面发送 http 的图片请求会失败。2、http 页面使用 https + ajax 方式发数据，在 ie9 及以下会丢失数据。`
      );
    },
    ajax(e) {
      if (e === h.server_url)
        return !1;
      g(e) && e !== "" && !this.protocolIsSame(e, location.href) && k(
        "SDK 检测到您的数据发送地址和当前页面地址的协议不一致，建议您修改成一致的协议。因为 http 页面使用 https + ajax 方式发数据，在 ie9 及以下会丢失数据。"
      );
    }
  }
};
var T = {
  initPage() {
    let e = Ze(), t = oe(), r = Gr(t);
    r || et.jssdkDebug(`url_domain异常_${t}_${r}`), this.pageProp = {
      referrer: e,
      referrer_host: e ? Re(e) : "",
      url: t,
      url_host: Re(t, "url_host取值异常"),
      url_domain: r
    };
  },
  pageProp: {},
  campaignParams() {
    return s.kit.getUtmData();
  },
  campaignParamsStandard(e, t) {
    e = e || "", t = t || "";
    let r = T.campaignParams(), i = {}, n = {};
    return D(r, (a, l, u) => {
      ` ${$n} `.includes(` ${l} `) ? i[e + l] = u[l] : n[t + l] = u[l];
    }), { $utms: i, otherUtms: n };
  },
  properties() {
    let e = window.innerHeight || document.documentElement.clientHeight || document.body && document.body.clientHeight || 0, t = window.innerWidth || document.documentElement.clientWidth || document.body && document.body.clientWidth || 0;
    return {
      $timezone_offset: (/* @__PURE__ */ new Date()).getTimezoneOffset(),
      $screen_height: Number(screen.height) || 0,
      $screen_width: Number(screen.width) || 0,
      $viewport_height: e,
      $viewport_width: t,
      $lib: "js",
      $lib_version: _r
    };
  },
  currentProps: {},
  register(e) {
    A(T.currentProps, e);
  }
};
function ei() {
  function e(l, u) {
    for (let p = 0; p < l.length; p++)
      if (u.split("?")[0].includes(l[p]))
        return !0;
  }
  let t = `(${h.source_type.utm.join("|")})\\=[^&]+`, r = h.source_type.search, i = h.source_type.social, n = document.referrer || "", a = T.pageProp.url;
  if (a) {
    let l = a.match(new RegExp(t));
    return l && l[0] ? "付费广告流量" : e(r, n) ? "自然搜索流量" : e(i, n) ? "社交网站流量" : n === "" ? "直接流量" : "引荐流量";
  }
  return "获取url异常";
}
function Pn(e) {
  let t = qe(e, "gdt_vid"), r = qe(e, "hash_key"), i = qe(e, "callbacks"), n = { click_id: "", hash_key: "", callbacks: "" };
  return g(t) && t.length && (n.click_id = t.length == 16 || t.length == 18 ? t : "参数解析不合法", g(r) && r.length && (n.hash_key = r), g(i) && i.length && (n.callbacks = i)), n;
}
function An(e) {
  let t = e.properties, r = JSON.parse(JSON.stringify(e));
  d(t) && D(t, (i, n) => {
    if ($(i))
      try {
        t[n] = i(r), $(t[n]) && (k(
          `您的属性- ${n} 格式不满足要求，我们已经将其删除`
        ), delete t[n]);
      } catch {
        delete t[n], k(
          `您的属性- ${n} 抛出了异常，我们已经将其删除`
        );
      }
  });
}
function Bn(e) {
  if (d(e) && e.$option) {
    let t = e.$option;
    return delete e.$option, t;
  }
  return {};
}
function In(e) {
  let t = {};
  return D(e, (r, i) => {
    r != null && (t[i] = r);
  }), t;
}
function Pa(e) {
  let t = !e.type || e.type.slice(0, 7) !== "profile";
  d(e.properties) && t && ("$referrer" in e.properties && (e.properties.$referrer_host = e.properties.$referrer === "" ? "" : Re(e.properties.$referrer, "取值异常")), h.preset_properties.latest_referrer && h.preset_properties.latest_referrer_host && (e.properties.$latest_referrer_host = e.properties.$latest_referrer === "" ? "" : Re(
    e.properties.$latest_referrer,
    "取值异常"
  )));
}
function Aa(e) {
  let t = !e.type || e.type.slice(0, 7) !== "profile", r = h.preset_properties && t;
  r && h.preset_properties.url && Ue(e.properties.$url) && (e.properties.$url = oe()), r && h.preset_properties.title && Ue(e.properties.$title) && (e.properties.$title = document.title);
}
function jn(e) {
  if (!ne(e.target))
    return !1;
  let t = e.target, r = g(t.tagName) ? t.tagName.toLowerCase() : "unknown", i = {};
  return i.$element_type = r, i.$element_name = t.getAttribute("name"), i.$element_id = t.getAttribute("id"), i.$element_class_name = g(t.className) ? t.className : null, i.$element_target_url = t.getAttribute("href"), i.$element_content = cr(t, r), (i = In(i)).$url = oe(), i.$url_path = gt(), i.$title = document.title, i;
}
function Ba(e) {
  let t = h.heatmap && $(h.heatmap.collect_input) && h.heatmap.collect_input(e);
  return (e.type === "button" || e.type === "submit" || t) && e.value || "";
}
function cr(e, t) {
  return g(t) && t.toLowerCase() === "input" ? Ba(e) : dn(e, t);
}
function ti(e) {
  return et.protocol.ajax(e.url), an(e);
}
function Nn(e, t) {
  if (typeof e == "string" && (e = Fe(e)) && (e.slice(0, 3) === "://" ? e = location.protocol.slice(0, -1) + e : e.slice(0, 2) === "//" ? e = location.protocol + e : e.slice(0, 4) !== "http" && (e = "")), j(e) && e.length)
    for (let r = 0; r < e.length; r++)
      /sa\.gif[^/]*$/.test(e[r]) || (e[r] = e[r].replace(/\/sa$/, "/sa.gif").replace(/(\/sa)(\?[^/]+)$/, "/sa.gif$2"));
  else
    /sa\.gif[^/]*$/.test(e) || typeof e != "string" || (e = e.replace(/\/sa$/, "/sa.gif").replace(/(\/sa)(\?[^/]+)$/, "/sa.gif$2"));
  return t && typeof t == "string" && (e = t), e;
}
function On(e) {
  g(e) || (e = JSON.stringify(e));
  let t = qt(e), r = `crc=${gn(t)}`;
  return `data=${encodeURIComponent(t)}&ext=${encodeURIComponent(r)}`;
}
function Ia(e) {
  let t, r = location.href, i = window.history.pushState, n = window.history.replaceState;
  $(window.history.pushState) && (window.history.pushState = function() {
    i.apply(window.history, arguments), e(r), r = location.href;
  }), $(window.history.replaceState) && (window.history.replaceState = function() {
    n.apply(window.history, arguments), e(r), r = location.href;
  }), t = window.document.documentMode ? "hashchange" : i ? "popstate" : "hashchange", pt(window, t, () => {
    e(r), r = location.href;
  });
}
let z = {}, Tr = new De();
function Tn(e, t) {
  let r = [];
  typeof e == "string" && e in z.EVENT_LIST && (r = z.EVENT_LIST[e], z[r[0]].on(r[1], t));
}
z.spa = Tr, z.sdk = new De(), z.data = new De(), z.initSystemEvent = function() {
  Ia((e) => {
    Tr.emit("switch", e);
  });
}, z.EVENT_LIST = {
  spaSwitch: ["spa", "switch"],
  sdkBeforeInit: ["sdk", "beforeInit"],
  sdkInitPara: ["sdk", "initPara"],
  sdkAfterInitPara: ["sdk", "afterInitPara"],
  sdkInitAPI: ["sdk", "initAPI"],
  sdkAfterInitAPI: ["sdk", "afterInitAPI"],
  sdkAfterInit: ["sdk", "afterInit"],
  sdkReady: ["sdk", "ready"],
  dataSendSuccess: ["data", "sendSuccess"],
  dataSendFail: ["data", "sendFail"]
};
let Lr = function(e) {
  this.callback = e.callback, this.server_url = e.server_url, this.data = e.data, this.origin_data = e.origin_data;
};
Lr.prototype.start = function() {
  let e = this, t = /* @__PURE__ */ new Date();
  ti({
    url: this.server_url,
    type: "POST",
    data: e.data,
    credentials: !1,
    timeout: h.datasend_timeout,
    cors: !0,
    success(r, i) {
      z.data.emit("sendSuccess", {
        status: String(i),
        resText: r,
        type: "ajax_single",
        timeout_config: h.datasend_timeout,
        request_timeout: /* @__PURE__ */ new Date() - t,
        data: e.origin_data
      }), e.end();
    },
    error(r, i) {
      z.data.emit("sendFail", {
        status: String(i),
        resText: r,
        type: "ajax_single",
        timeout_config: h.datasend_timeout,
        request_timeout: /* @__PURE__ */ new Date() - t,
        data: e.origin_data
      }), e.end();
    }
  });
}, Lr.prototype.end = function() {
  if (this.callback) {
    if (Je("warning: sdk callback is deprecated."), !$(this.callback))
      return void Je("error: sdk callback must be function.");
    this.callback();
  }
};
let _i = "sawebjssdk-", vr = "tab-sawebjssdk-";
function Ln() {
  this.sendTimeStamp = 0, this.timer = null, this.serverUrl = "", this.hasTabStorage = !1;
}
Ln.prototype = {
  batchInterval() {
    this.serverUrl === "" && this.getServerUrl(), this.hasTabStorage || (this.generateTabStorage(), this.hasTabStorage = !0);
    let e = this;
    e.timer = setTimeout(() => {
      e.updateExpireTime(), e.recycle(), e.send(), clearTimeout(e.timer), e.batchInterval();
    }, h.batch_send.send_interval);
  },
  getServerUrl() {
    if (!(g(h.server_url) && h.server_url !== "" || j(h.server_url) && h.server_url.length))
      return B(
        "当前 server_url 为空或不正确，只在控制台打印日志，network 中不会发数据，请配置正确的 server_url！"
      );
    this.serverUrl = j(h.server_url) ? h.server_url[0] : h.server_url;
  },
  send() {
    if (this.sendTimeStamp && me() - this.sendTimeStamp < h.batch_send.send_interval)
      return !1;
    let e = I.get(this.tabKey);
    if (e) {
      this.sendTimeStamp = me();
      let i = Gt(
        (e = ie(e) || this.generateTabStorageVal()).data
      );
      if (i.length) {
        for (var t = [], r = 0; r < i.length; r++) {
          let n = s.store.readObjectVal(i[r]);
          n && (n._flush_time = (/* @__PURE__ */ new Date()).getTime(), t.push(n));
        }
        t.length && this.request(t, e.data);
      }
    }
  },
  updateExpireTime() {
    let e = I.get(this.tabKey);
    e && ((e = ie(e) || this.generateTabStorageVal()).expireTime = me() + 2 * h.batch_send.send_interval, e.serverUrl = this.serverUrl, I.set(this.tabKey, JSON.stringify(e)));
  },
  request(e, t) {
    let r = this, i = /* @__PURE__ */ new Date();
    ti({
      url: this.serverUrl,
      type: "POST",
      data: `data_list=${encodeURIComponent(qt(JSON.stringify(e)))}`,
      credentials: !1,
      timeout: h.batch_send.datasend_timeout,
      cors: !0,
      success(n, a) {
        z.data.emit("sendSuccess", {
          status: String(a),
          resText: n,
          type: "ajax_batch",
          timeout_config: h.batch_send.datasend_timeout,
          request_timeout: /* @__PURE__ */ new Date() - i,
          data: e
        }), r.remove(t), r.sendTimeStamp = 0;
      },
      error(n, a) {
        z.data.emit("sendFail", {
          status: String(a),
          resText: n,
          type: "ajax_batch",
          timeout_config: h.batch_send.datasend_timeout,
          request_timeout: /* @__PURE__ */ new Date() - i,
          data: e
        }), r.sendTimeStamp = 0;
      }
    });
  },
  remove(e) {
    let t = I.get(this.tabKey);
    if (t) {
      for (var r = (ie(t) || this.generateTabStorageVal()).data, i = 0; i < e.length; i++) {
        let n = ae(r, e[i]);
        n > -1 && r.splice(n, 1), I.remove(e[i]);
      }
      r = Gt(r), I.set(
        this.tabKey,
        JSON.stringify(this.generateTabStorageVal(r))
      );
    }
  },
  add(e) {
    let t = _i + String(ve()), r = I.get(this.tabKey);
    r === null ? (this.tabKey = vr + String(ve()), r = this.generateTabStorageVal()) : r = ie(r) || this.generateTabStorageVal(), r.data.push(t), r.expireTime = me() + 2 * h.batch_send.send_interval, I.set(this.tabKey, JSON.stringify(r)), s.store.saveObjectVal(t, e), e.type !== "track_signup" && e.event !== "$pageview" || this.sendImmediately();
  },
  generateTabStorage() {
    this.tabKey = vr + String(ve()), I.set(
      this.tabKey,
      JSON.stringify(this.generateTabStorageVal())
    );
  },
  generateTabStorageVal(e) {
    return {
      data: e = e || [],
      expireTime: me() + 2 * h.batch_send.send_interval,
      serverUrl: this.serverUrl
    };
  },
  sendImmediately() {
    this.send();
  },
  recycle() {
    for (var e = {}, t = 0; t < localStorage.length; t++) {
      let a = localStorage.key(t);
      var r = this;
      if (a.indexOf(vr) === 0) {
        for (var i = ie(I.get(a)) || this.generateTabStorageVal(), n = 0; n < i.data.length; n++)
          e[i.data[n]] = !0;
        a !== r.tabKey && me() > i.expireTime && this.serverUrl === i.serverUrl && new nr("sajssdk-lock-get-").get(
          a,
          1e4,
          1e3,
          (l) => {
            if (l) {
              I.get(r.tabKey) === null && r.generateTabStorage();
              let u = ie(l) || r.generateTabStorageVal(), p = ie(I.get(r.tabKey)) || r.generateTabStorageVal();
              p.data = Gt(p.data.concat(u.data)), I.set(r.tabKey, JSON.stringify(p));
            }
          }
        );
      } else if (a.indexOf("sajssdk-lock-get-") === 0) {
        let l = ie(I.get(a)) || { expireTime: 0 };
        me() - l.expireTime > 1e4 && I.remove(a);
      }
    }
    for (let a = 0; a < localStorage.length; a++) {
      let l = localStorage.key(a);
      l.indexOf(_i) !== 0 || e[l] || I.remove(l);
    }
  }
};
let xr = function(e) {
  this.callback = e.callback, this.server_url = e.server_url, this.data = e.data;
};
xr.prototype.start = function() {
  let e = this;
  typeof navigator == "object" && typeof navigator.sendBeacon == "function" && navigator.sendBeacon(this.server_url, this.data), setTimeout(() => {
    e.end();
  }, 40);
}, xr.prototype.end = function() {
  if (this.callback) {
    if (Je("warning: sdk callback is deprecated."), !$(this.callback))
      return void Je("error: sdk callback must be function.");
    this.callback();
  }
};
let er = function(e) {
  this.callback = e.callback, this.img = document.createElement("img"), this.img.width = 1, this.img.height = 1, h.img_use_crossorigin && (this.img.crossOrigin = "anonymous"), this.server_url = e.data;
};
er.prototype.start = function() {
  let e = this;
  h.ignore_oom && (this.img.onload = function() {
    this.onload = null, this.onerror = null, this.onabort = null, e.end();
  }, this.img.onerror = function() {
    this.onload = null, this.onerror = null, this.onabort = null, e.end();
  }, this.img.onabort = function() {
    this.onload = null, this.onerror = null, this.onabort = null, e.end();
  }), this.img.src = this.server_url;
}, er.prototype.lastClear = function() {
  zr().ie !== void 0 ? this.img.src = "about:blank" : this.img.src = "";
}, er.prototype.end = function() {
  if (this.callback) {
    if (Je("warning: sdk callback is deprecated."), !$(this.callback))
      return void Je("error: sdk callback must be function.");
    this.callback();
  }
  self.lastClear && self.lastClear();
};
let ja = {
  __proto__: null,
  addEvent: ot,
  EventEmitterSa: Qr,
  cookie: je,
  info: T,
  getReferrer: Ze,
  getCurrentDomain: Gr,
  isBaiduTraffic: Ht,
  getReferrerEqid: En,
  getReferrerEqidType: Cn,
  getBaiduKeyword: Jt,
  isReferralTraffic: ur,
  getKeywordFromReferrer: It,
  getReferSearchEngine: Dn,
  getSourceFromReferrer: ei,
  getWxAdIdFromUrl: Pn,
  parseSuperProperties: An,
  searchConfigData: Bn,
  strip_empty_properties: In,
  getEleInfo: jn,
  getElementContent: cr,
  ajax: ti,
  optimizeServerUrl: Nn,
  encodeTrackData: On,
  AjaxSend: Lr,
  BatchSend: Ln,
  BeaconSend: xr,
  ImageSend: er
}, xn = new Qr();
var c = {
  requests: [],
  _sessionState: {},
  _state: { distinct_id: "", first_id: "", props: {}, identities: {} },
  getProps() {
    return this._state.props || {};
  },
  getSessionProps() {
  },
  getOriginDistinctId() {
    return this._state._distinct_id || this._state.distinct_id;
  },
  getOriginUnionId(e) {
    let t = {}, r = (e = e || this._state)._first_id || e.first_id, i = e._distinct_id || e.distinct_id;
    return r && i ? (t.login_id = i, t.anonymous_id = r) : t.anonymous_id = i, t;
  },
  getIdentities() {
    let e = JSON.parse(JSON.stringify(this._state.identities));
    return e.$identity_anonymous_id = this.getAnonymousId(), e;
  },
  getAnonymousId() {
    return c._state._first_id || c._state.first_id || c._state._distinct_id || c._state.distinct_id;
  },
  getDistinctId() {
    let e = this.getUnionId();
    return e.login_id || e.anonymous_id;
  },
  getUnionId(e) {
    let t = this.getOriginUnionId(e);
    return t.login_id && this._state.history_login_id && this._state.history_login_id.name && this._state.history_login_id.name !== Ut.LOGIN && (t.login_id = `${this._state.history_login_id.name}+${t.login_id}`), t;
  },
  getFirstId() {
    return this._state._first_id || this._state.first_id;
  },
  initSessionState() {
  },
  setOnce(e, t) {
    e in this._state || this.set(e, t);
  },
  set(e, t) {
    this._state = this._state || {};
    let r = this._state.distinct_id;
    this._state[e] = t, e === "first_id" ? delete this._state._first_id : e === "distinct_id" && delete this._state._distinct_id, this.save(), e === "distinct_id" && r && xn.tempAdd("changeDistinctId", t);
  },
  change(e, t) {
    this._state[`_${e}`] = t;
  },
  setSessionProps() {
    s.log(
      "initSessionState 方法已经弃用，请不要使用该功能，如有需求联系技术顾问"
    );
  },
  setSessionPropsOnce() {
    s.log(
      "initSessionState 方法已经弃用，请不要使用该功能，如有需求联系技术顾问"
    );
  },
  setProps(e, t) {
    let r = {};
    for (let i in r = t ? e : A(this._state.props || {}, e))
      typeof r[i] == "string" && (r[i] = r[i].slice(0, s.para.max_referrer_string_length));
    this.set("props", r);
  },
  setPropsOnce(e) {
    let t = this._state.props || {};
    on(t, e), this.set("props", t);
  },
  clearAllProps(e) {
    let t;
    if (j(e) && e.length > 0)
      for (t = 0; t < e.length; t++)
        g(e[t]) && !e[t].includes("latest_") && d(this._state.props) && e[t] in this._state.props && delete this._state.props[e[t]];
    else if (d(this._state.props))
      for (t in this._state.props)
        t.indexOf("latest_") !== 1 && delete this._state.props[t];
    this.sessionSave({}), this.save();
  },
  sessionSave() {
    s.log(
      "initSessionState 方法已经弃用，请不要使用该功能，如有需求联系技术顾问"
    );
  },
  save() {
    let e = JSON.parse(JSON.stringify(this._state));
    delete e._first_id, delete e._distinct_id, e.identities && (e.identities = qt(JSON.stringify(e.identities)));
    let t = JSON.stringify(e);
    s.para.encrypt_cookie && (t = s.kit.userEncrypt(t)), je.set(this.getCookieName(), t, 360, s.para.cross_subdomain);
  },
  getCookieName() {
    let e = "";
    if (s.para.cross_subdomain === !1) {
      try {
        let t = location.host;
        Ue(s.para.white_list[t]) || (e = s.para.white_list[t]);
      } catch (t) {
        k(t);
      }
      e = typeof e == "string" && e !== "" ? `sa_jssdk_2015_${s.para.sdk_id}${e.replace(/\./g, "_")}` : `sa_jssdk_2015_root${s.para.sdk_id}`;
    } else
      e = `sensorsdata2015jssdkcross${s.para.sdk_id}`;
    return e;
  },
  init() {
    this.initSessionState();
    let e, t, r = rt();
    je.isSupport() && (e = je.get(this.getCookieName()), t = ie(e = s.kit.userDecryptIfNeeded(e))), je.isSupport() && e !== null && sr(e) && d(t) && (!d(t) || t.distinct_id) ? (c._state = A(
      function(i) {
        let n;
        i.identities && (i.identities.indexOf(`
/`) === 0 ? i.identities = ie(wn(i.identities)) : i.identities = ie(
          kt(i.identities)
        ));
        let a = c.getOriginUnionId(i);
        i.identities && d(i.identities) && !se(i.identities) || (i.identities = {}, i.identities.$identity_cookie_id = rt()), i.history_login_id = i.history_login_id || {};
        let l = i.history_login_id.name;
        if (a.login_id)
          if (l && i.identities.hasOwnProperty(l)) {
            if (i.identities[l] !== a.login_id) {
              for (n in i.identities[l] = a.login_id, i.identities)
                i.identities.hasOwnProperty(n) && n !== "$identity_cookie_id" && n !== l && delete i.identities[n];
              i.history_login_id.value = a.login_id;
            }
          } else {
            let u = l || Ut.LOGIN;
            for (n in i.identities[u] = a.login_id, i.identities)
              i.identities.hasOwnProperty(n) && n !== "$identity_cookie_id" && n !== u && delete i.identities[n];
            i.history_login_id = { name: u, value: a.login_id };
          }
        else {
          if (i.identities.hasOwnProperty("$identity_login_id") || i.identities.hasOwnProperty(l))
            for (n in i.identities)
              i.identities.hasOwnProperty(n) && n !== "$identity_cookie_id" && n !== "$identity_anonymous_id" && delete i.identities[n];
          i.history_login_id = { name: "", value: "" };
        }
        return i;
      }(t)
    ), c.save()) : (s.is_first_visitor = !0, function(i) {
      c.set("distinct_id", i), c.set("identities", { $identity_cookie_id: i }), c.set("history_login_id", { name: "", value: "" });
    }(r)), Rt.setDeviceId(r, this), Rt.storeInitCheck();
  },
  saveObjectVal(e, t) {
    g(t) || (t = JSON.stringify(t)), s.para.encrypt_cookie == 1 && (t = s.kit.userEncrypt(t)), I.set(e, t);
  },
  readObjectVal(e) {
    let t = I.get(e);
    return t ? ie(t = s.kit.userDecryptIfNeeded(t)) : null;
  }
};
let V = {
  string(e) {
    k(`${e} must be string`);
  },
  emptyString(e) {
    k(`${e}'s is empty`);
  },
  regexTest(e) {
    k(`${e} is invalid`);
  },
  idLength(e) {
    k(`${e} length is longer than ${h.max_id_length}`);
  },
  keyLength(e) {
    k(`${e} length is longer than ${h.max_key_length}`);
  },
  stringLength(e) {
    k(`${e} length is longer than ${h.max_string_length}`);
  },
  voidZero(e) {
    k(`${e}'s is undefined`);
  },
  reservedLoginId(e) {
    k(`${e} is invalid`);
  },
  reservedBind(e) {
    k(`${e} is invalid`);
  },
  reservedUnbind(e) {
    k(`${e} is invalid`);
  }
}, hi = {
  regName: /^((?!^distinct_id$|^original_id$|^time$|^properties$|^id$|^first_id$|^second_id$|^users$|^events$|^event$|^user_id$|^date$|^datetime$|^user_tag.*|^user_group.*)[a-z_$][\w$]*)$/i,
  loginIDReservedNames: ["$identity_anonymous_id", "$identity_cookie_id"],
  bindReservedNames: [
    "$identity_login_id",
    "$identity_anonymous_id",
    "$identity_cookie_id"
  ],
  unbindReservedNames: ["$identity_anonymous_id", Ut.LOGIN],
  string(e) {
    return !!g(e);
  },
  emptyString(e) {
    return !(!g(e) || Fe(e).length === 0);
  },
  regexTest(e) {
    return !(!g(e) || !this.regName.test(e));
  },
  idLength(e) {
    return !(!g(e) || e.length > h.max_id_length);
  },
  keyLength(e) {
    return !(!g(e) || e.length > h.max_key_length);
  },
  stringLength(e) {
    return !(!g(e) || e.length > h.max_string_length);
  },
  voidZero(e) {
    return e !== void 0;
  },
  reservedLoginId(e) {
    return !(ae(this.loginIDReservedNames, e) > -1);
  },
  reservedUnbind(e) {
    return !(ae(this.unbindReservedNames, e) > -1);
  },
  reservedBind(e) {
    let t = c._state.history_login_id;
    return (!t || !t.name || t.name !== e) && !(ae(this.bindReservedNames, e) > -1);
  }
}, Na = {
  distinct_id: {
    rules: ["string", "emptyString", "idLength"],
    onComplete(e, t, r) {
      return !e && (r === "emptyString" && (t = "Id"), $(V[r]) && V[r](t), r === "idLength") || e;
    }
  },
  event: {
    rules: ["string", "emptyString", "keyLength", "regexTest"],
    onComplete(e, t, r) {
      return e || (r === "emptyString" && (t = "eventName"), $(V[r]) && V[r](t)), !0;
    }
  },
  propertyKey: {
    rules: ["string", "emptyString", "keyLength", "regexTest"],
    onComplete(e, t, r) {
      return e || (r === "emptyString" && (t = "Property key"), $(V[r]) && V[r](t)), !0;
    }
  },
  propertyValue: {
    rules: ["voidZero"],
    onComplete(e, t, r) {
      return e || $(V[r]) && V[r]("Property Value"), !0;
    }
  },
  properties(e) {
    return d(e) ? D(e, (t, r) => {
      q({ propertyKey: r }), q({ propertyValue: t }, (i, n, a) => (i || (n = `${r}'s Value`, $(V[a]) && V[a](n)), !0));
    }) : hi.voidZero(e) && k(
      "properties可以没有，但有的话必须是对象"
    ), !0;
  },
  propertiesMust(e) {
    return e !== void 0 && d(e) && !se(e) ? this.properties.call(this, e) : k("properties必须是对象"), !0;
  },
  item_type: {
    rules: ["string", "emptyString", "keyLength", "regexTest"],
    onComplete(e, t, r) {
      return e || (r === "emptyString" && (t = "item_type"), $(V[r]) && V[r](t)), !0;
    }
  },
  item_id: {
    rules: ["string", "emptyString", "stringLength"],
    onComplete(e, t, r) {
      return e || (r === "emptyString" && (t = "item_id"), $(V[r]) && V[r](t)), !0;
    }
  },
  loginIdKey: {
    rules: [
      "string",
      "emptyString",
      "keyLength",
      "regexTest",
      "reservedLoginId"
    ],
    onComplete(e, t, r) {
      return !e && (r === "emptyString" && (t = "login_id_key"), $(V[r]) && V[r](t), r === "keyLength") || e;
    }
  },
  bindKey: {
    rules: [
      "string",
      "emptyString",
      "keyLength",
      "regexTest",
      "reservedBind"
    ],
    onComplete(e, t, r) {
      return !e && (r === "emptyString" && (t = "Key"), $(V[r]) && V[r](t), r === "keyLength") || e;
    }
  },
  unbindKey: {
    rules: [
      "string",
      "emptyString",
      "keyLength",
      "regexTest",
      "reservedUnbind"
    ],
    onComplete(e, t, r) {
      return !e && (r === "emptyString" && (t = "Key"), $(V[r]) && V[r](t), r === "keyLength") || e;
    }
  },
  bindValue: {
    rules: ["string", "emptyString", "idLength"],
    onComplete(e, t, r) {
      return !e && (r === "emptyString" && (t = "Value"), $(V[r]) && V[r](t), r === "idLength") || e;
    }
  },
  check(e, t, r) {
    let i = this[e];
    if ($(i))
      return i.call(this, t);
    if (!i)
      return !1;
    for (let n = 0; n < i.rules.length; n++) {
      let a = i.rules[n], l = hi[a](t), u = $(r) ? r(l, t, a) : i.onComplete(l, t, a);
      if (!l)
        return u;
    }
    return !0;
  }
};
function q(e, t) {
  for (let r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && !Na.check(r, e[r], t))
      return !1;
  return !0;
}
function Oa(e, t) {
  return d(e) && D(e, (r, i) => {
    if (j(r)) {
      let a = [];
      D(r, (l) => {
        if (g(l))
          a.push(l);
        else if (Ue(l))
          a.push("null");
        else
          try {
            a.push(JSON.stringify(l));
          } catch {
            k(
              "您的数据-",
              i,
              r,
              "数组里值有错误,已将其删除"
            );
          }
      }), e[i] = a;
    }
    let n = ae([], i) > -1;
    if (d(r) && i !== "$option" && !n)
      try {
        e[i] = JSON.stringify(r);
      } catch {
        delete e[i], k(
          "您的数据-",
          i,
          r,
          "数据值有错误，已将其删除"
        );
      }
    else
      g(r) || He(r) || Kt(r) || _n(r) || j(r) || $(r) || i === "$option" || n || (k(
        "您的数据-",
        i,
        r,
        "-格式不满足要求，我们已经将其删除"
      ), delete e[i]);
  }), e;
}
function Ta(e, t) {
  return He(t) && e.length > t ? (k(
    `字符串长度超过限制，已经做截取--${e}`
  ), e.slice(0, t)) : e;
}
function La(e, t) {
  d(e) && D(
    [
      "distinct_id",
      "user_id",
      "id",
      "date",
      "datetime",
      "event",
      "events",
      "first_id",
      "original_id",
      "device_id",
      "properties",
      "second_id",
      "time",
      "users"
    ],
    (r, i) => {
      r in e && (ae([], r) > -1 || (i < 3 ? (delete e[r], k(
        `您的属性- ${r}是保留字段，我们已经将其删除`
      )) : k(
        `您的属性- ${r}是保留字段，请避免其作为属性名`
      )));
    }
  );
}
function Un(e) {
  let t = ["$element_selector", "$element_path"], r = ["sensorsdata_app_visual_properties"];
  d(e) && D(e, (i, n) => {
    if (d(i))
      Un(e[n]);
    else if (g(i)) {
      if (ae(r, n) > -1)
        return;
      e[n] = Ta(
        i,
        ae(t, n) > -1 ? 1024 : h.max_string_length
      );
    }
  });
}
function xa(e) {
  typeof e.properties.$project < "u" && (e.project = e.properties.$project, delete e.properties.$project), typeof e.properties.$token < "u" && (e.token = e.properties.$token, delete e.properties.$token);
}
function Ua(e) {
  "item_type" in e && q({ item_type: e.item_type }, (t) => (t || delete e.item_type, !0)), "item_id" in e && q({ item_id: e.item_id }, (t, r, i) => (t || i !== "string" || delete e.item_id, !0));
}
function Ra(e, t) {
  D(e, (r, i) => {
    ae([], i) === -1 && q({ propertyKey: i }, (n, a, l) => (n || l === "keyLength" || delete e[i], !0));
  });
}
function Ha(e) {
  let t = e.properties;
  Zr(e), d(t) ? (Oa(t), La(t), xa(e), Ra(t), Un(t)) : "properties" in e && (e.properties = {}), Ua(e);
}
function Ja(e, t) {
  let r = t.sensors;
  return e._track_id = Number(
    String(ve()).slice(2, 5) + String(ve()).slice(2, 4) + String((/* @__PURE__ */ new Date()).getTime()).slice(-4)
  ), e._flush_time = (/* @__PURE__ */ new Date()).getTime(), r.events.tempAdd("send", e), e;
}
var Z = {
  initUrl() {
    let e, t, r = {
      server_url: { project: "", host: "" },
      page_url: { host: "", pathname: "" }
    };
    if (!hn(s.para.server_url))
      return B(
        "----vcollect---server_url必须为有效 URL 字符串"
      ), !1;
    try {
      e = Ve(s.para.server_url), r.server_url.project = e.searchParams.get("project") || "default", r.server_url.host = e.host;
    } catch (i) {
      return B("----vcollect---server_url解析异常", i), !1;
    }
    try {
      t = Ve(location.href), r.page_url.host = t.hostname, r.page_url.pathname = t.pathname;
    } catch (i) {
      return B(
        "----vcollect---页面地址解析异常",
        i
      ), !1;
    }
    return r;
  },
  isDiv(e) {
    return !(e.element_path && Fe(e.element_path.split(">").pop()).slice(0, 3) !== "div");
  },
  configIsMatchNew(e, t) {
    if (g(e.$element_selector) && g(t.element_selector)) {
      if (t.element_field === "element_selector" && t.function === "equal")
        return e.$element_selector === t.element_selector;
      if (t.element_field === "element_selector" && t.function === "contain")
        return e.$element_selector.includes(t.element_selector);
    }
    if (g(e.$element_path) && g(t.element_path)) {
      if (t.element_field === "element_path" && t.function === "equal")
        return e.$element_path === t.element_path;
      if (t.element_field === "element_path" && t.function === "contain")
        return e.$element_path.includes(t.element_path);
    }
    return !1;
  },
  configIsMatch(e, t) {
    return (!t.limit_element_content || t.element_content === e.$element_content) && (!t.limit_element_position || t.element_position === String(e.$element_position)) && (t.element_field && t.function ? Z.configIsMatchNew(e, t) : Z.configIsMatchOldVersion(e, t));
  },
  configIsMatchOldVersion(e, t) {
    if (!t.element_path)
      return !1;
    if (e.$element_position !== void 0) {
      if (t.element_path !== e.$element_path)
        return !1;
    } else if (Z.isDiv({ element_path: t.element_path })) {
      if (!e.$element_path.includes(t.element_path))
        return !1;
    } else if (t.element_path !== e.$element_path)
      return !1;
    return !0;
  },
  filterConfig(e, t, r) {
    let i = [];
    if (!r) {
      let n = Z.initUrl();
      if (!n)
        return [];
      r = n.page_url;
    }
    return e.event === "$WebClick" && D(t, (n) => {
      d(n) && (n.event_type === "webclick" || n.event_type === "appclick") && d(n.event) && n.event.url_host === r.host && n.event.url_path === r.pathname && Z.configIsMatch(e.properties, n.event) && i.push(n);
    }), i;
  },
  getPropElInLi(e, t) {
    if (!(e && ne(e) && g(t)) || e.tagName.toLowerCase() !== "li")
      return null;
    let r = s.heatmap.getDomSelector(e);
    return r ? Yt(r + t) || null : (k(
      "----custom---获取同级属性元素失败，selector信息异常",
      r,
      t
    ), null);
  },
  getProp(e, t) {
    if (!d(e))
      return !1;
    if (!(g(e.name) && e.name.length > 0))
      return k(
        "----vcustom----属性名不合法,属性抛弃",
        e.name
      ), !1;
    let r, i, n = {};
    if (e.method === "content") {
      let a;
      if (g(e.element_selector) && e.element_selector.length > 0)
        a = Yt(e.element_selector);
      else {
        if (!t || !g(e.list_selector))
          return k(
            "----vcustom----属性配置异常，属性抛弃",
            e.name
          ), !1;
        let l = Yt(t.properties.$element_selector);
        if (!l)
          return k(
            "----vcustom----点击元素获取异常，属性抛弃",
            e.name
          ), !1;
        let u = s.heatmap.getClosestLi(l);
        a = Z.getPropElInLi(u, e.list_selector);
      }
      if (!a || !ne(a))
        return k(
          "----vcustom----属性元素获取失败，属性抛弃",
          e.name
        ), !1;
      if (a.tagName.toLowerCase() === "input")
        r = a.value || "";
      else if (a.tagName.toLowerCase() === "select") {
        let l = a.selectedIndex;
        He(l) && ne(a[l]) && (r = cr(a[l], "select"));
      } else
        r = cr(a, a.tagName.toLowerCase());
      if (e.regular) {
        try {
          i = new RegExp(e.regular).exec(r);
        } catch {
          return k(
            "----vcustom----正则处理失败，属性抛弃",
            e.name
          ), !1;
        }
        if (i === null)
          return k(
            "----vcustom----属性规则处理，未匹配到结果,属性抛弃",
            e.name
          ), !1;
        if (!j(i) || !g(i[0]))
          return k(
            "----vcustom----正则处理异常，属性抛弃",
            e.name,
            i
          ), !1;
        r = i[0];
      }
      if (e.type === "STRING")
        n[e.name] = r;
      else if (e.type === "NUMBER") {
        if (r.length < 1)
          return k(
            "----vcustom----未获取到数字内容，属性抛弃",
            e.name,
            r
          ), !1;
        if (isNaN(Number(r)))
          return k(
            "----vcustom----数字类型属性转换失败，属性抛弃",
            e.name,
            r
          ), !1;
        n[e.name] = Number(r);
      }
      return n;
    }
    return B(
      "----vcustom----属性不支持此获取方式",
      e.name,
      e.method
    ), !1;
  },
  getAssignConfigs(e, t) {
    let r = Z.initUrl();
    if (!r || !r.page_url)
      return [];
    if (!d(t))
      return [];
    let i = [];
    return t.events = t.events || t.eventList, j(t.events) && t.events.length > 0 ? (D(t.events, (n) => {
      d(n) && d(n.event) && n.event.url_host === r.page_url.host && n.event.url_path === r.page_url.pathname && e(n) && i.push(n);
    }), i) : [];
  }
};
let Ma = {
  events: [],
  getAssignConfigs: Z.getAssignConfigs,
  filterConfig: Z.filterConfig,
  getProp: Z.getProp,
  initUrl: Z.initUrl,
  updateEvents(e) {
    j(e) && (this.events = e);
  },
  init() {
    this.initAppGetPropsBridge();
  },
  geth5Props(e) {
    let t = {}, r = [], i = this;
    if (!this.events.length)
      return {};
    if (e.event === "$WebClick") {
      let n = this.filterConfig(e, this.events);
      if (!n.length)
        return {};
      D(n, (a) => {
        d(a) && (j(a.properties) && a.properties.length > 0 && D(a.properties, (l) => {
          if (d(l))
            if (l.h5 === !1)
              j(t.sensorsdata_app_visual_properties) || (t.sensorsdata_app_visual_properties = []), t.sensorsdata_app_visual_properties.push(l);
            else {
              let u = i.getProp(l, e);
              d(u) && (t = A(t, u));
            }
        }), g(a.event_name) && r.push(a.event_name));
      }), s.bridge.hasVisualModeBridge() && (t.sensorsdata_web_visual_eventName = r);
    }
    return t.sensorsdata_app_visual_properties && (t.sensorsdata_app_visual_properties = qt(
      JSON.stringify(t.sensorsdata_app_visual_properties)
    )), t;
  },
  initAppGetPropsBridge() {
    let e = this, t = new s.SDKJSBridge("getJSVisualProperties");
    return t.onAppNotify((r) => {
      let i = {};
      try {
        r = JSON.parse(kt(r));
      } catch {
        B("getJSVisualProperties data parse error!");
      }
      if (d(r)) {
        let n = r.sensorsdata_js_visual_properties, a = e.initUrl();
        a && (a = a.page_url, j(n) && n.length > 0 && D(n, (l) => {
          if (d(l) && l.url_host === a.host && l.url_path === a.pathname && l.h5) {
            let u = e.getProp(l);
            d(u) && (i = A(i, u));
          }
        }));
      }
      return s.bridge.bridge_info.platform === "android" && t.notifyApp({ data: i }, r.message_id), i;
    }), t;
  }
}, ri = {
  events: [],
  customProp: Ma,
  getAssignConfigs: Z.getAssignConfigs,
  initUrl: Z.initUrl,
  init() {
    if (this.initUrl()) {
      let e = this.getConfigFromApp();
      e && this.updateConfigs(e), this.customProp.init(), this.initAppUpdateConfigBridge();
    }
  },
  initAppUpdateConfigBridge() {
    let e = this;
    return new s.SDKJSBridge("updateH5VisualConfig").onAppNotify(
      (t) => {
        if (t) {
          try {
            t = JSON.parse(kt(t));
          } catch {
            return void B(
              "updateH5VisualConfig result parse error！"
            );
          }
          e.updateConfigs(t);
        }
      }
    );
  },
  getConfigFromApp() {
    let e = new s.SDKJSBridge(
      "sensorsdata_get_app_visual_config"
    ).notifyApp();
    if (e)
      try {
        e = JSON.parse(kt(e));
      } catch {
        e = null, B("getAppVisualConfig result parse error！");
      }
    return e;
  },
  updateConfigs(e) {
    this.events = this.filterConfigs(e), this.customProp.updateEvents(this.events);
  },
  filterConfigs(e) {
    return this.getAssignConfigs((t) => !(!d(t) || t.h5 === !1), e);
  }
}, dr = {
  events: [],
  init(e) {
    this.filterWebClickEvents(e);
  },
  filterWebClickEvents(e) {
    this.events = it.getAssignConfigs((t) => !(!d(t) || t.event.unlimited_div !== !0 || t.event_type !== "webclick"), e);
  },
  isTargetEle(e) {
    let t = s.heatmap.getEleDetail(e);
    if (!d(t) || !g(t.$element_path))
      return !1;
    for (let r = 0; r < this.events.length; r++)
      if (d(this.events[r]) && d(this.events[r].event) && it.configIsMatch(t, this.events[r].event))
        return !0;
    return !1;
  }
}, Rn = {
  events: [],
  configSwitch: !1,
  collectAble() {
    return this.configSwitch && d(s.para.heatmap) && s.para.heatmap.get_vtrack_config;
  },
  updateEvents(e) {
    this.events = it.getAssignConfigs((t) => !!(d(t) && j(t.properties) && t.properties.length > 0), e), this.events.length ? this.configSwitch = !0 : this.configSwitch = !1;
  },
  getVtrackProps(e) {
    let t = {};
    return this.collectAble() ? (e.event === "$WebClick" && (t = this.clickCustomPropMaker(e, this.events)), t) : {};
  },
  clickCustomPropMaker(e, t, r) {
    let i = this;
    r = r || this.filterConfig(e, t, it.url_info.page_url);
    let n = {};
    return r.length ? (D(r, (a) => {
      j(a.properties) && a.properties.length > 0 && D(a.properties, (l) => {
        let u = i.getProp(l, e);
        d(u) && A(n, u);
      });
    }), n) : {};
  },
  getProp: Z.getProp,
  getPropElInLi: Z.getPropElInLi,
  filterConfig: Z.filterConfig
};
var it = {
  unlimitedDiv: dr,
  config: {},
  storageEnable: !0,
  storage_name: "webjssdkvtrackcollect",
  para: { session_time: 18e5, timeout: 5e3, update_interval: 18e5 },
  url_info: {},
  timer: null,
  update_time: null,
  customProp: Rn,
  initUrl() {
    let e = Z.initUrl();
    if (e) {
      let t;
      try {
        (t = new Kr(s.para.server_url))._values.Path = "/config/visualized/Web.conf", e.api_url = t.getUrl();
      } catch (r) {
        return B(
          "----vtrackcollect---API地址解析异常",
          r
        ), !1;
      }
      this.url_info = e;
    }
    return e;
  },
  init() {
    if (!d(s.para.heatmap) || !s.para.heatmap.get_vtrack_config)
      return !1;
    if (I.isSupport() || (this.storageEnable = !1), !this.initUrl())
      return B(
        "----vtrackcustom----初始化失败，url信息解析失败"
      ), !1;
    if (this.storageEnable) {
      let e = c.readObjectVal(this.storage_name);
      if (d(e) && d(e.data))
        if (this.serverUrlIsSame(e.serverUrl)) {
          this.config = e.data, this.update_time = e.updateTime, this.updateConfig(e.data);
          let t = (/* @__PURE__ */ new Date()).getTime() - this.update_time;
          if (He(t) && t > 0 && t < this.para.session_time) {
            let r = this.para.update_interval - t;
            this.setNextFetch(r);
          } else
            this.getConfigFromServer();
        } else
          this.getConfigFromServer();
      else
        this.getConfigFromServer();
    } else
      this.getConfigFromServer();
    this.pageStateListenner();
  },
  serverUrlIsSame(e) {
    return !!d(e) && e.host === this.url_info.server_url.host && e.project === this.url_info.server_url.project;
  },
  getConfigFromServer() {
    let e = this;
    this.sendRequest(
      (t, r) => {
        e.update_time = (/* @__PURE__ */ new Date()).getTime();
        let i = {};
        t === 200 ? r && d(r) && r.os === "Web" && (i = r, e.updateConfig(i)) : t === 205 ? e.updateConfig(i) : t === 304 ? i = e.config : (B("----vtrackcustom----数据异常", t), e.updateConfig(i)), e.updateStorage(i), e.setNextFetch();
      },
      (t) => {
        e.update_time = (/* @__PURE__ */ new Date()).getTime(), B(
          "----vtrackcustom----配置拉取失败",
          t
        ), e.setNextFetch();
      }
    );
  },
  setNextFetch(e) {
    let t = this;
    this.timer && (clearTimeout(this.timer), this.timer = null), e = e || this.para.update_interval, this.timer = setTimeout(() => {
      t.getConfigFromServer();
    }, e);
  },
  pageStateListenner() {
    let e = this;
    vn({
      visible() {
        let t = (/* @__PURE__ */ new Date()).getTime() - e.update_time;
        if (He(t) && t > 0 && t < e.para.update_interval) {
          let r = e.para.update_interval - t;
          e.setNextFetch(r);
        } else
          e.getConfigFromServer();
      },
      hidden() {
        e.timer && (clearTimeout(e.timer), e.timer = null);
      }
    });
  },
  updateConfig(e) {
    if (!d(e))
      return !1;
    this.config = e, this.customProp.updateEvents(e), this.unlimitedDiv.init(e);
  },
  updateStorage(e) {
    if (!this.storageEnable || !d(e))
      return !1;
    let t;
    if (this.url_info.server_url)
      t = this.url_info.server_url;
    else {
      let i = it.initUrl();
      if (!i)
        return !1;
      t = i.server_url;
    }
    let r = { updateTime: (/* @__PURE__ */ new Date()).getTime(), data: e, serverUrl: t };
    c.saveObjectVal(this.storage_name, r);
  },
  sendRequest(e, t) {
    let r = { app_id: this.url_info.page_url.host };
    this.config.version && (r.v = this.config.version), yn({
      url: this.url_info.api_url,
      callbackName: "saJSSDKVtrackCollectConfig",
      data: r,
      timeout: this.para.timeout,
      success(i, n) {
        e(i, n);
      },
      error(i) {
        t(i);
      }
    });
  },
  getAssignConfigs: Z.getAssignConfigs,
  configIsMatch: Z.configIsMatch
};
function qa(e, t) {
  try {
    let r = t.sensors, i = {};
    d(e) && d(e.identities) && !se(e.identities) ? A(i, e.identities) : A(i, c.getIdentities());
    let n = {
      identities: i,
      distinct_id: c.getDistinctId(),
      lib: {
        $lib: "js",
        $lib_method: "code",
        $lib_version: String(r.lib_version)
      },
      properties: {}
    };
    return d(e) && d(e.properties) && !se(e.properties) && (e.properties.$lib_detail && (n.lib.$lib_detail = e.properties.$lib_detail, delete e.properties.$lib_detail), e.properties.$lib_method && (n.lib.$lib_method = e.properties.$lib_method, delete e.properties.$lib_method)), un(n, c.getUnionId(), e), d(e.properties) && !se(e.properties) && A(n.properties, e.properties), n.event === "$UnbindID" && (n.login_id && delete n.login_id, n.anonymous_id && delete n.anonymous_id), e.type && e.type.slice(0, 7) === "profile" || (r.para.properties_priority && r.para.properties_priority === 3 ? n.properties = A(
      {},
      T.properties(),
      c.getSessionProps(),
      T.currentProps,
      c.getProps(),
      n.properties
    ) : n.properties = A(
      {},
      T.properties(),
      c.getProps(),
      c.getSessionProps(),
      T.currentProps,
      n.properties
    ), r.para.preset_properties.latest_referrer && !g(n.properties.$latest_referrer) && (n.properties.$latest_referrer = "取值异常"), r.para.preset_properties.latest_search_keyword && !g(n.properties.$latest_search_keyword) && (r.para.preset_properties.search_keyword_baidu && g(n.properties.$search_keyword_id) && He(n.properties.$search_keyword_id_hash) && g(n.properties.$search_keyword_id_type) || (n.properties.$latest_search_keyword = "取值异常")), r.para.preset_properties.latest_traffic_source_type && !g(n.properties.$latest_traffic_source_type) && (n.properties.$latest_traffic_source_type = "取值异常"), r.para.preset_properties.latest_landing_page && !g(n.properties.$latest_landing_page) && (n.properties.$latest_landing_page = "取值异常"), r.para.preset_properties.latest_wx_ad_click_id === "not_collect" ? (delete n.properties._latest_wx_ad_click_id, delete n.properties._latest_wx_ad_hash_key, delete n.properties._latest_wx_ad_callbacks) : r.para.preset_properties.latest_wx_ad_click_id && !g(n.properties._latest_wx_ad_click_id) && (n.properties._latest_wx_ad_click_id = "取值异常", n.properties._latest_wx_ad_hash_key = "取值异常", n.properties._latest_wx_ad_callbacks = "取值异常"), g(n.properties._latest_wx_ad_click_id) && (n.properties.$url = oe())), n.properties.$time && Kt(n.properties.$time) ? (n.time = 1 * n.properties.$time, delete n.properties.$time) : n.time = 1 * /* @__PURE__ */ new Date(), function(a) {
      if (r.bridge && r.bridge.bridge_info.verify_success === "success") {
        let u = ri.customProp.geth5Props(
          JSON.parse(JSON.stringify(a))
        );
        d(u) && !se(u) && (a.properties = A(a.properties, u));
      }
      let l = it.customProp.getVtrackProps(
        JSON.parse(JSON.stringify(a))
      );
      d(l) && !se(l) && (a.properties = A(a.properties, l));
    }(n), An(n), Rt.checkIsAddSign(n), Rt.checkIsFirstTime(n), Pa(n), Aa(n), n;
  } catch (r) {
    return { _debug_web_msg: String(r) };
  }
}
let Ka = {
  basicProps: { priority: 0, entry: qa },
  formatData: { priority: 0, entry: Ha },
  finalAdjustData: { priority: 0, entry: Ja }
}, ii = {
  stage: null,
  init(e) {
    this.stage = e;
  },
  interceptor: Ka
};
function Va(e) {
  return ii.stage.process("basicProps", e);
}
function Wa(e) {
  return ii.stage.process("formatData", e);
}
let le = {};
function mi(e, t, r, i) {
  let n = null;
  if ((e = e || {}).ele && (n = e.ele), e.event && (n = e.target ? e.target : e.event.target), r = r || {}, !n || typeof n != "object")
    return !1;
  if (!n.href || n.href.startsWith("javascript") || n.target || n.download || n.onclick)
    return i(t, r), !1;
  function a(l) {
    l.stopPropagation(), l.preventDefault();
    let u = !1;
    function p() {
      u || (u = !0, location.href = n.href);
    }
    setTimeout(p, 1e3), i(t, r, p);
  }
  e.event && a(e.event), e.ele && ot(e.ele, "click", (l) => {
    a(l);
  });
}
function Hn() {
  let e = location.protocol;
  return e === "http:" || e === "https:" ? e : "http:";
}
le.check = q, le.sendItem = function(e) {
  let t = {
    lib: {
      $lib: "js",
      $lib_method: "code",
      $lib_version: String(s.lib_version)
    },
    time: 1 * /* @__PURE__ */ new Date()
  };
  A(t, e), Wa(t), s.kit.sendData(t);
}, le.send = function(e, t) {
  let r = s.kit.buildData(e);
  s.kit.sendData(r, t);
};
let ni = {
  stage: null,
  init(e) {
    this.stage = e;
  }
};
function za(e) {
  return ni.stage.process("webClickEvent", e);
}
function Xa(e) {
  return ni.stage.process("webStayEvent", e);
}
let br = { label: !1, li: !1, a: !0, button: !0 };
var Ae = {
  otherTags: [],
  initUnlimitedTags() {
    D(Ae.otherTags, (e) => {
      e in br && (br[e] = !0);
    });
  },
  isUnlimitedTag(e) {
    if (!e || e.nodeType !== 1)
      return !1;
    let t = e.nodeName.toLowerCase();
    return br[t] || Xr(e, s.para.heatmap.track_attr);
  },
  getTargetElement(e, t) {
    let r = this, i = e;
    if (typeof i != "object" || typeof i.tagName != "string")
      return null;
    let n = i.tagName.toLowerCase();
    if (n.toLowerCase() === "body" || n.toLowerCase() === "html" || !i || !i.parentNode || !i.parentNode.children)
      return null;
    let a = i.parentNode, l = r.otherTags;
    if (n === "a" || n === "button" || n === "input" || n === "textarea" || ae(l, n) > -1)
      return i;
    if (n === "area" && a.tagName.toLowerCase() === "map" && ye(a).prev().tagName && ye(a).prev().tagName.toLowerCase() === "img")
      return ye(a).prev();
    if (n === "div" && s.para.heatmap.collect_tags.div && r.isDivLevelValid(i) && ((s.para.heatmap && s.para.heatmap.collect_tags && s.para.heatmap.collect_tags.div && s.para.heatmap.collect_tags.div.max_level || 1) > 1 || r.isCollectableDiv(i)))
      return i;
    if (r.isStyleTag(n) && s.para.heatmap.collect_tags.div) {
      let u = r.getCollectableParent(i);
      if (u && r.isDivLevelValid(u))
        return u;
    }
    return r.hasElement(
      { event: t && t.originalEvent || t, element: e },
      (u) => r.isUnlimitedTag(u)
    ) || null;
  },
  getDivLevels(e, t) {
    let r = Ae.getElementPath(e, !0, t).split(" > "), i = 0;
    return D(r, (n) => {
      n === "div" && i++;
    }), i;
  },
  isDivLevelValid(e) {
    for (let t = s.para.heatmap && s.para.heatmap.collect_tags && s.para.heatmap.collect_tags.div && s.para.heatmap.collect_tags.div.max_level || 1, r = e.getElementsByTagName("div"), i = r.length - 1; i >= 0; i--)
      if (Ae.getDivLevels(r[i], e) > t)
        return !1;
    return !0;
  },
  getElementPath(e, t, r) {
    for (var i = []; e.parentNode && ne(e); ) {
      if (!g(e.tagName))
        return "unknown";
      if (e.id && !t && /^[A-Z][-\w:.]*$/i.test(e.id)) {
        i.unshift(`${e.tagName.toLowerCase()}#${e.id}`);
        break;
      }
      if (r && e === r) {
        i.unshift(e.tagName.toLowerCase());
        break;
      }
      if (e === document.body) {
        i.unshift("body");
        break;
      }
      i.unshift(e.tagName.toLowerCase()), e = e.parentNode;
    }
    return i.join(" > ");
  },
  getClosestLi(e) {
    return function(t, r) {
      for (; t && t !== document && t.nodeType === 1; t = t.parentNode)
        if (t.tagName && g(t.tagName) && t.tagName.toLowerCase() === r)
          return t;
      return null;
    }(e, "li");
  },
  getElementPosition(e, t, r) {
    let i = s.heatmap.getClosestLi(e);
    if (!i || !ne(e) || !g(e.tagName))
      return null;
    let n = e.tagName.toLowerCase(), a = i.getElementsByTagName(n), l = a.length, u = [];
    if (l > 1) {
      for (let p = 0; p < l; p++)
        s.heatmap.getElementPath(a[p], r) === t && u.push(a[p]);
      if (u.length > 1)
        return ae(u, e);
    }
    return function(p) {
      if (!p.parentNode)
        return "";
      if (ye(p).getSameTypeSiblings().length === 1)
        return 0;
      for (var b = 0, w = p; ye(w).previousElementSibling().ele; w = ye(w).previousElementSibling().ele, b++) ;
      return b;
    }(i);
  },
  setNotice(e) {
    s.is_heatmap_render_mode = !0, s.para.heatmap || (s.errorMsg = "您 SDK 没有配置开启点击图 ！"), e && e.slice(0, 5) === "http:" && location.protocol === "https:" && (s.errorMsg = "您的当前页面是 https 的地址，神策分析环境也必须是 https ！"), s.para.heatmap_url || (s.para.heatmap_url = `${Hn()}//static.sensorsdata.cn/sdk/${s.lib_version}/heatmap.min.js`);
  },
  getDomIndex(e) {
    if (!e.parentNode)
      return -1;
    for (let t = 0, r = e.tagName, i = e.parentNode.children, n = 0; n < i.length; n++)
      if (i[n].tagName === r) {
        if (e === i[n])
          return t;
        t++;
      }
    return -1;
  },
  selector(e, t) {
    if (!e || !ne(e) || !g(e.tagName))
      return "";
    let r = e.parentNode && e.parentNode.nodeType == 9 ? -1 : this.getDomIndex(e);
    return e.getAttribute && e.getAttribute("id") && /^[A-Z][-\w:.]*$/i.test(e.getAttribute("id")) && (!s.para.heatmap || s.para.heatmap && s.para.heatmap.element_selector !== "not_use_id") && !t ? `#${e.getAttribute("id")}` : e.tagName.toLowerCase() + (~r ? `:nth-of-type(${r + 1})` : "");
  },
  getDomSelector(e, t, r) {
    if (!(e && e.parentNode && e.parentNode.children && g(e.tagName)))
      return "unknown";
    t = t && t.join ? t : [];
    let i = e.nodeName.toLowerCase();
    return e && i !== "body" && e.nodeType == 1 ? (t.unshift(this.selector(e, r)), e.getAttribute && e.getAttribute("id") && /^[A-Z][-\w:.]*$/i.test(e.getAttribute("id")) && s.para.heatmap && s.para.heatmap.element_selector !== "not_use_id" && !r ? t.join(" > ") : this.getDomSelector(e.parentNode, t, r)) : (t.unshift("body"), t.join(" > "));
  },
  na() {
    let e = document.documentElement.scrollLeft || window.pageXOffset;
    return Number.parseInt(isNaN(e) ? 0 : e, 10);
  },
  i() {
    let e = 0;
    try {
      e = o.documentElement && o.documentElement.scrollTop || m.pageYOffset, e = isNaN(e) ? 0 : e;
    } catch {
      e = 0;
    }
    return Number.parseInt(e, 10);
  },
  getBrowserWidth() {
    let e = window.innerWidth || document.body.clientWidth;
    return isNaN(e) ? 0 : Number.parseInt(e, 10);
  },
  getBrowserHeight() {
    let e = window.innerHeight || document.body.clientHeight;
    return isNaN(e) ? 0 : Number.parseInt(e, 10);
  },
  getScrollWidth() {
    let e = Number.parseInt(document.body.scrollWidth, 10);
    return isNaN(e) ? 0 : e;
  },
  getEleDetail(e) {
    let t = this.getDomSelector(e), r = jn({ target: e });
    r.$element_selector = t || "", r.$element_path = s.heatmap.getElementPath(
      e,
      s.para.heatmap && s.para.heatmap.element_selector === "not_use_id"
    );
    let i = s.heatmap.getElementPosition(
      e,
      r.$element_path,
      s.para.heatmap && s.para.heatmap.element_selector === "not_use_id"
    );
    return He(i) && (r.$element_position = i), r;
  },
  getPointerEventProp(e, t) {
    if (!e)
      return {};
    function r() {
      return {
        scrollLeft: document.body.scrollLeft || document.documentElement.scrollLeft || 0,
        scrollTop: document.body.scrollTop || document.documentElement.scrollTop || 0
      };
    }
    function i(a) {
      if (document.documentElement.getBoundingClientRect) {
        let l = a.getBoundingClientRect();
        return {
          targetEleX: l.left + r().scrollLeft || 0,
          targetEleY: l.top + r().scrollTop || 0
        };
      }
    }
    function n(a) {
      return Number(Number(a).toFixed(3));
    }
    return function(a) {
      let l = a.pageX || a.clientX + r().scrollLeft || a.offsetX + i(t).targetEleX || 0, u = a.pageY || a.clientY + r().scrollTop || a.offsetY + i(t).targetEleY || 0;
      return { $page_x: n(l), $page_y: n(u) };
    }(e);
  },
  start(e, t, r, i, n) {
    if (d(s.para.heatmap) && $(s.para.heatmap.collect_element) && !s.para.heatmap.collect_element(t))
      return !1;
    za(Ae.getBasicEleInfo(e, t, r, i, n));
  },
  getBasicEleInfo(e, t, r, i, n) {
    let a = d(i) ? i : {}, l = $(n) ? n : $(i) ? i : void 0, u = this.getEleDetail(t);
    if (s.para.heatmap && s.para.heatmap.custom_property) {
      let p = s.para.heatmap.custom_property(t);
      d(p) && (u = A(u, p));
    }
    return {
      event: e,
      target: t,
      props: u = A(u, this.getPointerEventProp(e, t), a),
      tagName: r,
      callback: l
    };
  },
  hasElement(e, t) {
    let r;
    if (e.event) {
      let i = e.event;
      r = i.path || i._getPath && i._getPath();
    } else
      e.element && (r = ye(e.element).getParents());
    if (r && j(r) && r.length > 0) {
      for (let i = 0; i < r.length; i++)
        if (typeof r[i] == "object" && r[i].nodeType === 1 && t(r[i]))
          return r[i];
    }
  },
  isStyleTag(e, t) {
    return !(ae(["a", "div", "input", "button", "textarea"], e) > -1) && (!t || s.para.heatmap && s.para.heatmap.collect_tags && s.para.heatmap.collect_tags.div ? !!(d(s.para.heatmap) && d(s.para.heatmap.collect_tags) && d(s.para.heatmap.collect_tags.div) && j(s.para.heatmap.collect_tags.div.ignore_tags) && ae(s.para.heatmap.collect_tags.div.ignore_tags, e) > -1) : ae(
      [
        "mark",
        "/mark",
        "strong",
        "b",
        "em",
        "i",
        "u",
        "abbr",
        "ins",
        "del",
        "s",
        "sup"
      ],
      e
    ) > -1);
  },
  isCollectableDiv(e, t) {
    try {
      if (e.children.length === 0)
        return !0;
      for (let r = 0; r < e.children.length; r++)
        if (e.children[r].nodeType === 1) {
          let i = g(e.children[r].tagName) ? e.children[r].tagName.toLowerCase() : "unknown", n = s.para && s.para.heatmap && s.para.heatmap.collect_tags && s.para.heatmap.collect_tags.div && s.para.heatmap.collect_tags.div.max_level;
          if (!(i === "div" && n > 1 || this.isStyleTag(i, t)) || !this.isCollectableDiv(e.children[r], t))
            return !1;
        }
      return !0;
    } catch (r) {
      B(`isCollectableDiv:${r}`);
    }
    return !1;
  },
  getCollectableParent(e, t) {
    try {
      let r = e.parentNode, i = r ? r.tagName.toLowerCase() : "";
      if (i === "body")
        return !1;
      let n = s.para && s.para.heatmap && s.para.heatmap.collect_tags && s.para.heatmap.collect_tags.div && s.para.heatmap.collect_tags.div.max_level;
      if (i && i === "div" && (n > 1 || this.isCollectableDiv(r, t)))
        return r;
      if (r && this.isStyleTag(i, t))
        return this.getCollectableParent(r, t);
    } catch (r) {
      B(`getCollectableParent:${r}`);
    }
    return !1;
  },
  listenUrlChange(e) {
    e(), s.ee.spa.on("switch", () => {
      e();
    });
  },
  initScrollmap() {
    if (!d(s.para.heatmap) || s.para.heatmap.scroll_notice_map !== "default")
      return !1;
    let e = !0;
    s.para.scrollmap && $(s.para.scrollmap.collect_url) && this.listenUrlChange(() => {
      e = !!s.para.scrollmap.collect_url();
    });
    let t = function(r) {
      let i = {};
      return i.timeout = r.timeout || 1e3, i.func = r.func, i.hasInit = !1, i.inter = null, i.main = function(n, a) {
        this.func(n, a), this.inter = null;
      }, i.go = function(n) {
        let a = {};
        this.inter || (a.$viewport_position = document.documentElement && document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0, a.$viewport_position = Math.round(a.$viewport_position) || 0, n ? i.main(a, !0) : this.inter = setTimeout(() => {
          i.main(a);
        }, this.timeout));
      }, i;
    }({
      timeout: 1e3,
      func(r, i) {
        let n = document.documentElement && document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0, a = /* @__PURE__ */ new Date(), l = a - this.current_time;
        (l > s.para.heatmap.scroll_delay_time && n - r.$viewport_position != 0 || i) && (r.$url = oe(), r.$title = document.title, r.$url_path = gt(), r.event_duration = Math.min(
          s.para.heatmap.scroll_event_duration,
          Number.parseInt(l) / 1e3
        ), r.event_duration = r.event_duration < 0 ? 0 : r.event_duration, Xa(r)), this.current_time = a;
      }
    });
    t.current_time = /* @__PURE__ */ new Date(), ot(window, "scroll", () => {
      if (!e)
        return !1;
      t.go();
    }), ot(window, "beforeunload", () => {
      if (!e)
        return !1;
      t.go("notime");
    });
  },
  initHeatmap() {
    let e = this, t = !0;
    if (!d(s.para.heatmap) || s.para.heatmap.clickmap !== "default")
      return !1;
    $(s.para.heatmap.collect_url) && this.listenUrlChange(() => {
      t = !!s.para.heatmap.collect_url();
    }), s.para.heatmap.collect_elements === "all" ? s.para.heatmap.collect_elements = "all" : s.para.heatmap.collect_elements = "interact", s.para.heatmap.collect_elements === "all" ? ot(document, "click", (r) => {
      if (!t)
        return !1;
      let i = r || window.event;
      if (!i)
        return !1;
      let n = i.target || i.srcElement;
      if (typeof n != "object" || typeof n.tagName != "string")
        return !1;
      let a = n.tagName.toLowerCase();
      if (a === "body" || a === "html" || !n || !n.parentNode || !n.parentNode.children)
        return !1;
      let l = g(n.parentNode.tagName) ? n.parentNode.tagName.toLowerCase() : "unknown";
      l === "a" || l === "button" ? e.start(i, n.parentNode, l) : e.start(i, n, a);
    }) : ot(document, "click", (r) => {
      if (!t)
        return !1;
      let i = r || window.event;
      if (!i)
        return !1;
      let n = i.target || i.srcElement, a = s.heatmap.getTargetElement(n, r);
      if (!ne(a) && !g(n.tagName))
        return !1;
      ne(a) && g(a.tagName) ? e.start(i, a, a.tagName.toLowerCase()) : ne(n) && n.tagName.toLowerCase() === "div" && d(s.para.heatmap) && s.para.heatmap.get_vtrack_config && dr.events.length > 0 && dr.isTargetEle(n) && e.start(i, n, n.tagName.toLowerCase(), {
        $lib_method: "vtrack"
      });
    });
  }
};
function Ur() {
  let e = T.campaignParams(), t = {};
  return D(e, (r, i, n) => {
    ` ${s.source_channel_standard} `.includes(` ${i} `) ? t[`$${i}`] = n[i] : t[i] = n[i];
  }), t;
}
function yi(e, t, r) {
  if (s.is_first_visitor && r) {
    let i = {};
    s.para.preset_properties.search_keyword_baidu && ur(document.referrer) && Ht() && (i.$search_keyword_id = Jt.id(), i.$search_keyword_id_type = Jt.type(), i.$search_keyword_id_hash = Yr(i.$search_keyword_id));
    let n = document.characterSet || document.charset, a = Ze(null, t);
    e(
      A(
        {
          $first_visit_time: /* @__PURE__ */ new Date(),
          $first_referrer: a,
          $first_referrer_host: a ? Re(a, "取值异常") : "",
          $first_browser_language: g(navigator.language) ? navigator.language.toLowerCase() : "取值异常",
          $first_browser_charset: g(n) ? n.toUpperCase() : "取值异常",
          $first_traffic_source_type: ei(),
          $first_search_keyword: It(),
          $timezone_offset: (/* @__PURE__ */ new Date()).getTimezoneOffset()
        },
        Ur(),
        i
      )
    ), s.is_first_visitor = !1;
  }
}
let tr = {
  autoTrackIsUsed: !1,
  isReady(e) {
    $(e) ? e() : s.log("error: isReady callback must be function");
  },
  getUtm() {
    return T.campaignParams();
  },
  getStayTime() {
    return (/* @__PURE__ */ new Date() - s._t) / 1e3;
  },
  setProfileLocal(e) {
    if (!I.isSupport())
      return s.setProfile(e), !1;
    if (!d(e) || se(e))
      return !1;
    let t = c.readObjectVal("sensorsdata_2015_jssdk_profile"), r = !1;
    if (d(t) && !se(t)) {
      for (let i in e)
        !(i in t && t[i] !== e[i]) && i in t || (t[i] = e[i], r = !0);
      r && (c.saveObjectVal("sensorsdata_2015_jssdk_profile", t), s.setProfile(e));
    } else
      c.saveObjectVal("sensorsdata_2015_jssdk_profile", e), s.setProfile(e);
  },
  setInitReferrer() {
    let e = Ze();
    s.setOnceProfile({
      _init_referrer: e,
      _init_referrer_host: T.pageProp.referrer_host
    });
  },
  setSessionReferrer() {
    let e = Ze();
    c.setSessionPropsOnce({
      _session_referrer: e,
      _session_referrer_host: T.pageProp.referrer_host
    });
  },
  setDefaultAttr() {
    T.register({
      _current_url: location.href,
      _referrer: Ze(),
      _referring_host: T.pageProp.referrer_host
    });
  },
  trackHeatMap(e, t, r) {
    if (typeof e == "object" && e.tagName && ne(e.parentNode)) {
      let i = e.tagName.toLowerCase(), n = e.parentNode.tagName.toLowerCase(), a = s.para.heatmap && s.para.heatmap.track_attr ? s.para.heatmap.track_attr : ["data-sensors-click"];
      i === "button" || i === "a" || n === "a" || n === "button" || i === "input" || i === "textarea" || Xr(e, a) || Ae.start(null, e, i, t, r);
    }
  },
  trackAllHeatMap(e, t, r) {
    if (typeof e == "object" && e.tagName) {
      let i = e.tagName.toLowerCase();
      Ae.start(null, e, i, t, r);
    }
  },
  autoTrackSinglePage(e, t) {
    let r;
    r = this.autoTrackIsUsed ? T.pageProp.url : T.pageProp.referrer;
    let i = !(e = d(e) ? e : {}).not_set_profile;
    function n(a, l) {
      s.track(
        "$pageview",
        A(
          {
            $referrer: r,
            $url: oe(),
            $url_path: gt(),
            $title: document.title
          },
          a,
          Ur()
        ),
        l
      ), r = oe();
    }
    e.not_set_profile && delete e.not_set_profile, n(e, t), this.autoTrackSinglePage = n, yi(s.setOnceProfile, !1, i);
  },
  autoTrackWithoutProfile(e, t) {
    e = d(e) ? e : {}, this.autoTrack(A(e, { not_set_profile: !0 }), t);
  },
  autoTrack(e, t) {
    e = d(e) ? e : {};
    let r = Ur(), i = !e.not_set_profile;
    e.not_set_profile && delete e.not_set_profile;
    let n = location.href;
    s.para.is_single_page && rn(() => {
      let a = Ze(n, !0);
      s.track(
        "$pageview",
        A(
          {
            $referrer: a,
            $url: oe(),
            $url_path: gt(),
            $title: document.title
          },
          r,
          e
        ),
        t
      ), n = oe();
    }), s.track(
      "$pageview",
      A(
        {
          $referrer: Ze(null, !0),
          $url: oe(),
          $url_path: gt(),
          $title: document.title
        },
        r,
        e
      ),
      t
    ), yi(s.setOnceProfile, !0, i), this.autoTrackIsUsed = !0;
  },
  getAnonymousID() {
    return se(c._state) ? "SDK is not initialized." : c.getAnonymousId();
  },
  setPlugin(e) {
    if (!d(e))
      return !1;
    D(e, (t, r) => {
      $(t) && (d(window.SensorsDataWebJSSDKPlugin) && window.SensorsDataWebJSSDKPlugin[r] ? t(window.SensorsDataWebJSSDKPlugin[r]) : d(s.modules) && s.modules[r] ? t(s.modules[r]) : k(`${r}is not found,please check sensorsdata documents.`));
    });
  },
  useModulePlugin() {
    s.use.apply(s, arguments);
  },
  useAppPlugin() {
    this.setPlugin.apply(this, arguments);
  }
};
function Jn(e, t) {
  let r = e.id, i = e.callback, n = e.name, a = c.getFirstId(), l = c.getOriginDistinctId();
  if (!q({ distinct_id: r }))
    return B("login id is invalid"), !1;
  if (r === c.getOriginDistinctId() && !a)
    return B("login id is equal to distinct_id"), !1;
  if (d(c._state.identities) && c._state.identities.hasOwnProperty(n) && r === c._state.first_id)
    return !1;
  if (c._state.history_login_id.name !== n || r !== c._state.history_login_id.value) {
    c._state.identities[n] = r, c.set("history_login_id", { name: n, value: r }), a || c.set("first_id", l), t(r, "$SignUp", {}, i);
    let u = {
      $identity_cookie_id: c._state.identities.$identity_cookie_id
    };
    return u[n] = r, Mn(u), !0;
  }
  return !1;
}
function Mn(e) {
  let t = {};
  for (let r in e) t[r] = e[r];
  c._state.identities = t, c.save();
}
function Ya(e, t) {
  if (!q({ unbindKey: e, bindValue: t }))
    return !1;
  if (d(c._state.identities) && c._state.identities.hasOwnProperty(e) && c._state.identities[e] === t) {
    let i = c.getUnionId().login_id;
    i && `${e}+${t}` === i && (c._state.distinct_id = c._state.first_id, c._state.first_id = "", c.set("history_login_id", { name: "", value: "" })), e !== "$identity_cookie_id" && (delete c._state.identities[e], c.save());
  }
  let r = {};
  return r[e] = t, r;
}
function Za() {
  s._t = s._t || 1 * /* @__PURE__ */ new Date(), s.is_first_visitor = !1, s.source_channel_standard = $n;
}
function Ga(e) {
  A(h, e || s.para || {}), s.para = h;
  let t, r = {};
  if (d(s.para.is_track_latest))
    for (let p in s.para.is_track_latest)
      r[`latest_${p}`] = s.para.is_track_latest[p];
  for (t in s.para.preset_properties = A(
    {},
    Qt.preset_properties,
    r,
    s.para.preset_properties || {}
  ), Qt)
    s.para[t] === void 0 && (s.para[t] = Qt[t]);
  typeof s.para.web_url != "string" || s.para.web_url.slice(0, 3) !== "://" && s.para.web_url.slice(0, 2) !== "//" || (s.para.web_url.slice(0, 3) === "://" ? s.para.web_url = location.protocol.slice(0, -1) + s.para.web_url : s.para.web_url = location.protocol + s.para.web_url), et.protocol.serverUrl(), s.bridge && s.bridge.initPara();
  let i = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term"
  ], n = [
    "www.baidu.",
    "m.baidu.",
    "m.sm.cn",
    "so.com",
    "sogou.com",
    "youdao.com",
    "google.",
    "yahoo.com/",
    "bing.com/",
    "ask.com/"
  ], a = [
    "weibo.com",
    "renren.com",
    "kaixin001.com",
    "douban.com",
    "qzone.qq.com",
    "zhihu.com",
    "tieba.baidu.com",
    "weixin.qq.com"
  ], l = {
    baidu: ["wd", "word", "kw", "keyword"],
    google: "q",
    bing: "q",
    yahoo: "p",
    sogou: ["query", "keyword"],
    so: "q",
    sm: "q"
  };
  typeof s.para.source_type == "object" && (s.para.source_type.utm = j(s.para.source_type.utm) ? s.para.source_type.utm.concat(i) : i, s.para.source_type.search = j(s.para.source_type.search) ? s.para.source_type.search.concat(n) : n, s.para.source_type.social = j(s.para.source_type.social) ? s.para.source_type.social.concat(a) : a, s.para.source_type.keyword = d(s.para.source_type.keyword) ? A(l, s.para.source_type.keyword) : l);
  let u = [
    "mark",
    "/mark",
    "strong",
    "b",
    "em",
    "i",
    "u",
    "abbr",
    "ins",
    "del",
    "s",
    "sup"
  ];
  if (s.para.heatmap && !d(s.para.heatmap) && (s.para.heatmap = {}), d(s.para.heatmap)) {
    s.para.heatmap.clickmap = s.para.heatmap.clickmap || "default", s.para.heatmap.scroll_notice_map = s.para.heatmap.scroll_notice_map || "default", s.para.heatmap.scroll_delay_time = s.para.heatmap.scroll_delay_time || 4e3, s.para.heatmap.scroll_event_duration = s.para.heatmap.scroll_event_duration || 18e3, s.para.heatmap.renderRefreshTime = s.para.heatmap.renderRefreshTime || 1e3, s.para.heatmap.loadTimeout = s.para.heatmap.loadTimeout || 1e3, s.para.heatmap.request_timeout = s.para.heatmap.request_timeout || 1e4, s.para.heatmap.get_vtrack_config !== !0 && (s.para.heatmap.get_vtrack_config = !1);
    let p = j(s.para.heatmap.track_attr) ? cn(s.para.heatmap.track_attr, (b) => b && typeof b == "string") : [];
    p.push("data-sensors-click"), s.para.heatmap.track_attr = p, d(s.para.heatmap.collect_tags) ? s.para.heatmap.collect_tags.div === !0 ? s.para.heatmap.collect_tags.div = { ignore_tags: u, max_level: 1 } : d(s.para.heatmap.collect_tags.div) ? (s.para.heatmap.collect_tags.div.ignore_tags ? j(s.para.heatmap.collect_tags.div.ignore_tags) || (k(
      "ignore_tags 参数必须是数组格式"
    ), s.para.heatmap.collect_tags.div.ignore_tags = u) : s.para.heatmap.collect_tags.div.ignore_tags = u, s.para.heatmap.collect_tags.div.max_level && ae([1, 2, 3], s.para.heatmap.collect_tags.div.max_level) === -1 && (s.para.heatmap.collect_tags.div.max_level = 1)) : s.para.heatmap.collect_tags.div = !1 : s.para.heatmap.collect_tags = { div: !1 };
  }
  s.para.server_url = Nn(
    s.para.server_url,
    s.para.custom_server_url
  ), s.para.noCache === !0 ? s.para.noCache = `?${(/* @__PURE__ */ new Date()).getTime()}` : s.para.noCache = "", s.para.callback_timeout > s.para.datasend_timeout && (s.para.datasend_timeout = s.para.callback_timeout), s.para.heatmap && s.para.heatmap.collect_tags && d(s.para.heatmap.collect_tags) && D(s.para.heatmap.collect_tags, (p, b) => {
    b !== "div" && p && s.heatmap.otherTags.push(b);
  }), s.para.heatmap && s.para.heatmap.clickmap === "default" && s.heatmap.initUnlimitedTags();
}
let Qa = {
  state: 0,
  historyState: [],
  stateType: {
    1: "1-init未开始",
    2: "2-init开始",
    3: "3-store完成"
  },
  getState() {
    return this.historyState.join(`
`);
  },
  setState(e) {
    String(e) in this.stateType && (this.state = e), this.historyState.push(this.stateType[e]);
  }
};
function es() {
  let e = Array.prototype.slice.call(arguments), t = e[0], r = e.slice(1);
  if (typeof t == "string" && tr[t])
    return tr[t].apply(tr, r);
  typeof t == "function" ? t.apply(s, r) : k(
    `quick方法中没有这个功能${e[0]}`
  );
}
let ts = 1;
function qn(e, t) {
  if (g(e) || d(e)) {
    let r;
    if (d(e)) {
      let i = s.modules && s.modules[e.plugin_name];
      i && i !== e && k(
        `${e.name} is conflict with builtin plugin, and sdk uses builtin plugin.`
      ), r = i || e;
    }
    return g(e) && (d(s.modules) && d(s.modules[e]) ? r = s.modules[e] : d(window.SensorsDataWebJSSDKPlugin) && d(window.SensorsDataWebJSSDKPlugin[e]) ? r = window.SensorsDataWebJSSDKPlugin[e] : window.sensorsDataAnalytic201505 && window.sensorsDataAnalytic201505.modules[e] && (r = window.sensorsDataAnalytic201505.modules[e])), r && $(r.init) ? (r.plugin_is_init || (r.plugin_name || k("warning: invalid plugin, plugin_name required."), r.plugin_version ? r.plugin_version !== s.lib_version && k(
      "warning: plugin version not match SDK version. plugin may not work correctly. "
    ) : k("warning: invalid plugin, plugin version required."), !r.plugin_is_init && r.init(s, t), r.plugin_is_init = !0, s.modules = s.modules || {}, s.modules[r.plugin_name || `unnamed_${ts++}`] = r), r) : (k(
      `${e.plugin_name || e} is not found or it's not a standard plugin. Please check sensorsdata official documents.`
    ), r);
  }
  B("use's first arguments must be string or object.");
}
function rs(e, t, r) {
  q({ event: e, properties: t }) && le.send({ type: "track", event: e, properties: t }, r);
}
function is(e, t) {
  if (!q({ bindKey: e, bindValue: t }))
    return !1;
  c._state.identities[e] = t, c.save(), le.send({ type: "track_id_bind", event: "$BindID", properties: {} });
}
function ns(e, t) {
  let r = Ya(e, t);
  r && le.send({
    identities: r,
    type: "track_id_unbind",
    event: "$UnbindID",
    properties: {}
  });
}
function as(e, t, r) {
  typeof e == "object" && e.tagName ? mi({ ele: e }, t, r, s.track) : typeof e == "object" && e.target && e.event && mi(e, t, r, s.track);
}
function ss(e, t, r) {
  return r = r || {}, !(!e || typeof e != "object") && !(!e.href || e.href.startsWith("javascript") || e.target) && void ot(e, "click", (i) => {
    i.preventDefault();
    let n = !1;
    function a() {
      n || (n = !0, location.href = e.href);
    }
    setTimeout(a, 1e3), s.track(t, r, a);
  });
}
function os(e, t, r) {
  q({ item_type: e, item_id: t, properties: r }) && le.sendItem({
    type: "item_set",
    item_type: e,
    item_id: t,
    properties: r || {}
  });
}
function ls(e, t) {
  q({ item_type: e, item_id: t }) && le.sendItem({ type: "item_delete", item_type: e, item_id: t });
}
function us(e, t) {
  q({ propertiesMust: e }) && le.send({ type: "profile_set", properties: e }, t);
}
function cs(e, t) {
  q({ propertiesMust: e }) && le.send({ type: "profile_set_once", properties: e }, t);
}
function ds(e, t) {
  q({ propertiesMust: e }) && (D(e, (r, i) => {
    g(r) && Or(i) ? e[i] = [r] : j(r) && Or(i) ? e[i] = r : (delete e[i], k(
      "appendProfile属性的值必须是字符串或者数组"
    ));
  }), se(e) || le.send({ type: "profile_append", properties: e }, t));
}
function ps(e, t) {
  let r = e;
  g(e) && ((e = {})[r] = 1), q({ propertiesMust: e }) && (function(i) {
    for (let n in i)
      if (Object.prototype.hasOwnProperty.call(i, n) && !/-*\d+/.test(String(i[n])))
        return !1;
    return !0;
  }(e) ? le.send({ type: "profile_increment", properties: e }, t) : B("profile_increment的值只能是数字"));
}
function gs(e) {
  le.send({ type: "profile_delete" }, e), c.set("distinct_id", rt()), c.set("first_id", "");
}
function fs(e, t) {
  let r = e, i = {};
  g(e) && (e = []).push(r), j(e) ? (D(e, (n) => {
    g(n) ? i[n] = !0 : k(
      "profile_unset给的数组里面的值必须时string,已经过滤掉",
      n
    );
  }), le.send({ type: "profile_unset", properties: i }, t)) : B(
    "profile_unset的参数必须是数组"
  );
}
function _s(e) {
  typeof e == "number" && (e = String(e));
  let t = c.getFirstId();
  if (e === void 0) {
    let r = rt();
    t ? c.set("first_id", r) : c.set("distinct_id", r);
  } else
    q({ distinct_id: e }) && (t ? c.set("first_id", e) : c.set("distinct_id", e));
}
function hs(e) {
  if (c.getFirstId())
    return B("resetAnonymousIdentity must be used in a logout state ！"), !1;
  if (typeof e == "number" && (e = String(e)), e === void 0) {
    let t = rt();
    c._state.identities.$identity_cookie_id = t, c.set("distinct_id", t);
  } else
    q({ distinct_id: e }) && (c._state.identities.$identity_cookie_id = e, c.set("distinct_id", e));
}
function ai(e, t, r, i) {
  let n = c.getFirstId() || c.getDistinctId();
  c.set("distinct_id", e), le.send(
    {
      original_id: n,
      distinct_id: c.getDistinctId(),
      type: "track_signup",
      event: t,
      properties: r
    },
    i
  );
}
function ms(e, t, r, i) {
  typeof e == "number" && (e = String(e)), q({ distinct_id: e, event: t, properties: r }) && ai(e, t, r, i);
}
function ys(e) {
  q({ properties: e }) ? A(T.currentProps, e) : B("register输入的参数有误");
}
function vs(e) {
  c.clearAllProps(e);
}
function bs(e) {
  let t;
  if (j(e) && e.length > 0)
    for (t = 0; t < e.length; t++)
      g(e[t]) && e[t] in T.currentProps && delete T.currentProps[e[t]];
  else if (e === !0)
    for (t in T.currentProps) delete T.currentProps[t];
}
function Kn(e) {
  q({ properties: e }) ? c.setProps(e) : B("register输入的参数有误");
}
function ws(e) {
  q({ properties: e }) ? c.setPropsOnce(e) : B("registerOnce输入的参数有误");
}
function Ss(e) {
  s.log(
    "registerSession 方法已经弃用，有问题联系技术顾问"
  ), q({ properties: e }) ? c.setSessionProps(e) : B("registerSession输入的参数有误");
}
function $s(e) {
  s.log(
    "registerSessionOnce 方法已经弃用，有问题联系技术顾问"
  ), q({ properties: e }) ? c.setSessionPropsOnce(e) : B(
    "registerSessionOnce输入的参数有误"
  );
}
function Vn(e, t) {
  typeof e == "number" && (e = String(e)), !Jn({ id: e, callback: t, name: Ut.LOGIN }, ai) && $(t) && t();
}
function ks(e, t) {
  return k("loginWithKey is deprecated !!!"), typeof t == "number" && (t = String(t)), typeof e == "number" && (e = String(e)), !!q({ loginIdKey: e }) && (Ut.LOGIN === e ? (Vn(t), !1) : void Jn({ id: t, callback: null, name: e }, ai));
}
function Fs(e) {
  let t = c.getFirstId();
  if (t)
    if (c.set("first_id", ""), e === !0) {
      let r = rt();
      c.set("distinct_id", r);
    } else
      c.set("distinct_id", t);
  Mn({
    $identity_cookie_id: c._state.identities.$identity_cookie_id
  }), c.set("history_login_id", { name: "", value: "" });
}
function Cs() {
  let e, t, r = {
    $is_first_day: or(),
    $is_first_time: Rt.is_page_first_visited,
    $referrer: T.pageProp.referrer || "",
    $referrer_host: T.pageProp.referrer ? Re(T.pageProp.referrer) : "",
    $url: oe(),
    $url_path: gt(),
    $title: document.title || "",
    _distinct_id: c.getDistinctId(),
    identities: c.getIdentities()
  }, i = A(
    {},
    T.properties(),
    c.getProps(),
    (e = T.campaignParams(), t = {}, D(e, (n, a, l) => {
      ` ${s.source_channel_standard} `.includes(` ${a} `) ? t[`$${a}`] = l[a] : t[a] = l[a];
    }), t),
    r
  );
  return s.para.preset_properties.latest_referrer && s.para.preset_properties.latest_referrer_host && (i.$latest_referrer_host = i.$latest_referrer === "" ? "" : Re(i.$latest_referrer)), i;
}
let Es = {
  __proto__: null,
  setInitVar: Za,
  initPara: Ga,
  quick: es,
  use: qn,
  track: rs,
  bind: is,
  unbind: ns,
  trackLink: as,
  trackLinks: ss,
  setItem: os,
  deleteItem: ls,
  setProfile: us,
  setOnceProfile: cs,
  appendProfile: ds,
  incrementProfile: ps,
  deleteProfile: gs,
  unsetProfile: fs,
  identify: _s,
  resetAnonymousIdentity: hs,
  trackSignup: ms,
  registerPage: ys,
  clearAllRegister: vs,
  clearPageRegister: bs,
  register: Kn,
  registerOnce: ws,
  registerSession: Ss,
  registerSessionOnce: $s,
  login: Vn,
  loginWithKey: ks,
  logout: Fs,
  getPresetProperties: Cs,
  readyState: Qa,
  debug: et,
  on: Tn,
  log: Je
};
ee.setup(Je);
let Wn = A({}, Da, ja);
function Ds() {
  let e = "", t = " { cursor: pointer; -webkit-tap-highlight-color: rgba(0,0,0,0); }";
  s.heatmap && j(s.heatmap.otherTags) && D(s.heatmap.otherTags, (r) => {
    e += r + t;
  }), mn() && Ir() && Ir() < 13 && (s.para.heatmap && s.para.heatmap.collect_tags && s.para.heatmap.collect_tags.div && Zt(`div, [data-sensors-click]${t}`), s.para.heatmap && s.para.heatmap.track_attr && Zt(`[${s.para.heatmap.track_attr.join("], [")}]${t}`), e !== "" && Zt(e));
}
let Ps = {
  bridge_info: {
    touch_app_bridge: !1,
    verify_success: !1,
    platform: "",
    support_two_way_call: !1
  },
  is_verify_success: !1,
  initPara() {
    let e = {
      is_send: s.para.use_app_track_is_send !== !1 && s.para.use_app_track !== "only",
      white_list: [],
      is_mui: s.para.use_app_track === "mui"
    };
    typeof s.para.app_js_bridge == "object" ? s.para.app_js_bridge = A({}, e, s.para.app_js_bridge) : s.para.use_app_track !== !0 && s.para.app_js_bridge !== !0 && s.para.use_app_track !== "only" && s.para.use_app_track !== "mui" || (s.para.app_js_bridge = A({}, e)), s.para.app_js_bridge.is_send === !1 && k(
      "设置了 is_send:false,如果打通失败，数据将被丢弃!"
    );
  },
  app_js_bridge_v1() {
    let e = null, t = null;
    window.sensorsdata_app_js_bridge_call_js = function(r) {
      (function(i) {
        sr(e = i) && (e = JSON.parse(e)), t && (t(e), t = null, e = null);
      })(r);
    }, s.getAppStatus = function(r) {
      if (function() {
        if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
          let i = document.createElement("iframe");
          i.setAttribute("src", "sensorsanalytics://getAppInfo"), document.documentElement.appendChild(i), i.parentNode.removeChild(i), i = null;
        }
      }(), typeof window.SensorsData_APP_JS_Bridge == "object" && window.SensorsData_APP_JS_Bridge.sensorsdata_call_app && sr(
        e = window.SensorsData_APP_JS_Bridge.sensorsdata_call_app()
      ) && (e = JSON.parse(e)), !r)
        return e;
      e === null ? t = r : (r(e), e = null);
    };
  },
  hasVisualModeBridge() {
    let e = window.SensorsData_App_Visual_Bridge, t = "sensorsdata_visualized_mode";
    return d(e) && e[t] && (e[t] === !0 || e[t]());
  },
  validateAppUrl: As
};
function jt(e) {
  let t = this;
  this.type = e, this.resultCbs = {}, this.timeoutCbs = {}, this.timerId = null, this.appCallJsCallback = null, window.sensorsdata_app_call_js || (window.sensorsdata_app_call_js = function(r, i) {
    if (r in window.sensorsdata_app_call_js.modules)
      return window.sensorsdata_app_call_js.modules[r](i);
  }), window.sensorsdata_app_call_js.modules = window.sensorsdata_app_call_js.modules || {}, window.sensorsdata_app_call_js.modules[this.type] = function(r) {
    try {
      let i = kt(r) || r;
      try {
        i = JSON.parse(i);
      } catch {
      }
      let n = i && i.message_id;
      if (n && t.resultCbs[n]) {
        if (r = i, t.timeoutCbs[n] && t.timeoutCbs[n].isTimeout)
          return void (t.resultCbs[n].callbacks.length = 0);
        if (t.resultCbs[n])
          for (let a in t.resultCbs[n].result = r, clearTimeout(t.timerId), t.timeoutCbs[n].callbacks.length = 0, t.resultCbs[n].callbacks)
            t.resultCbs[n].callbacks[a].call(null, r), t.resultCbs[n].callbacks.splice(a, 1);
        return;
      }
      return t.appCallJsCallback && t.appCallJsCallback.call(null, r);
    } catch {
      B("app 回调 js 异常", r);
    }
  };
}
function vi(e) {
  try {
    if (s.bridge.activeBridge && $(s.bridge.activeBridge.handleCommand))
      return s.bridge.activeBridge.handleCommand(e);
  } catch (t) {
    B(`Error: handle command exception:${t}`);
  }
  return B(
    `数据发往App失败，App没有暴露bridge,type:${e.callType}`
  ), !1;
}
function As(e) {
  function t(n) {
    let a = { hostname: "", project: "" };
    try {
      n = Ve(n), a.hostname = n.hostname, a.project = n.searchParams.get("project") || "default";
    } catch (l) {
      B(`validateAppUrl:${l}`);
    }
    return a;
  }
  let r = t(e), i = t(s.para.server_url);
  if (r.hostname === i.hostname && r.project === i.project)
    return !0;
  if (j(s.para.app_js_bridge.white_list))
    for (let n = 0; n < s.para.app_js_bridge.white_list.length; n++) {
      let a = t(s.para.app_js_bridge.white_list[n]);
      if (a.hostname === r.hostname && a.project === r.project)
        return !0;
    }
  return !1;
}
function zn(e) {
  this.bridge = new jt(e.type);
}
function Bs() {
  let e = T.pageProp.url_domain, t = {};
  e === "" && (e = "url解析失败");
  let r = It(document.referrer, !0);
  if (h.preset_properties.search_keyword_baidu ? ur(document.referrer) && (!Ht() || d(r) && r.active ? c._state && c._state.props && (c._state.props.$search_keyword_id && delete c._state.props.$search_keyword_id, c._state.props.$search_keyword_id_type && delete c._state.props.$search_keyword_id_type, c._state.props.$search_keyword_id_hash && delete c._state.props.$search_keyword_id_hash) : (t.$search_keyword_id = Jt.id(), t.$search_keyword_id_type = Jt.type(), t.$search_keyword_id_hash = Yr(t.$search_keyword_id))) : c._state && c._state.props && (c._state.props.$search_keyword_id && delete c._state.props.$search_keyword_id, c._state.props.$search_keyword_id_type && delete c._state.props.$search_keyword_id_type, c._state.props.$search_keyword_id_hash && delete c._state.props.$search_keyword_id_hash), c.save(), D(h.preset_properties, (i, n) => {
    if (!n.includes("latest_"))
      return !1;
    if (n = n.slice(7), i) {
      if (n === "wx_ad_click_id" && i === "not_collect")
        return !1;
      if (n !== "utm" && e === "url解析失败")
        n === "wx_ad_click_id" ? (t._latest_wx_ad_click_id = "url的domain解析失败", t._latest_wx_ad_hash_key = "url的domain解析失败", t._latest_wx_ad_callbacks = "url的domain解析失败") : t[`$latest_${n}`] = "url的domain解析失败";
      else if (ur(document.referrer))
        switch (n) {
          case "traffic_source_type":
            t.$latest_traffic_source_type = ei();
            break;
          case "referrer":
            t.$latest_referrer = T.pageProp.referrer;
            break;
          case "search_keyword":
            It() ? t.$latest_search_keyword = It() : d(c._state) && d(c._state.props) && c._state.props.$latest_search_keyword && delete c._state.props.$latest_search_keyword;
            break;
          case "landing_page":
            t.$latest_landing_page = oe();
            break;
          case "wx_ad_click_id":
            var a = Pn(location.href);
            t._latest_wx_ad_click_id = a.click_id, t._latest_wx_ad_hash_key = a.hash_key, t._latest_wx_ad_callbacks = a.callbacks;
        }
    } else if (n === "utm" && c._state && c._state.props)
      for (let l in c._state.props)
        (l.indexOf("$latest_utm") === 0 || l.indexOf("_latest_") === 0 && !l.includes("_latest_wx_ad_")) && delete c._state.props[l];
    else c._state && c._state.props && `$latest_${n}` in c._state.props ? delete c._state.props[`$latest_${n}`] : n == "wx_ad_click_id" && c._state && c._state.props && i === !1 && D(
      [
        "_latest_wx_ad_click_id",
        "_latest_wx_ad_hash_key",
        "_latest_wx_ad_callbacks"
      ],
      (l) => {
        l in c._state.props && delete c._state.props[l];
      }
    );
  }), h.preset_properties.latest_utm) {
    let i = T.campaignParamsStandard("$latest_", "_latest_"), n = i.$utms, a = i.otherUtms;
    se(n) || A(t, n), se(a) || A(t, a);
  }
  Kn(t);
}
function bi(e) {
  let t = null;
  try {
    let r = JSON.parse(window.name);
    t = r[e] ? Ke(r[e]) : null;
  } catch {
    t = null;
  }
  return t === null && (t = qe(location.href, e) || null), t;
}
jt.prototype.call = function(e, t) {
  let r = this, i = (/* @__PURE__ */ new Date()).getTime().toString(16) + String(ve()).replace(".", "").slice(1, 8);
  this.resultCbs[i] = r.resultCbs[i] || { result: null, callbacks: [] }, this.timeoutCbs[i] = r.timeoutCbs[i] || { isTimeout: !1, callbacks: [] }, (e = e.data ? e : { data: e }).data.message_id = i;
  let n = A({ callType: this.type }, e);
  return t && (this.timerId = setTimeout(() => {
    for (let a in r.timeoutCbs[i].isTimeout = !0, r.timeoutCbs[i].callbacks)
      r.timeoutCbs[i].callbacks[a].call(null), r.timeoutCbs[i].callbacks.splice(a, 1);
  }, t)), vi(n), {
    onResult(a) {
      return r.resultCbs[i].result ? (a(r.resultCbs[i].result), this) : (!r.timeoutCbs[i].isTimeout && r.resultCbs[i].callbacks.push(a), this);
    },
    onTimeout(a) {
      return r.timeoutCbs[i].isTimeout ? (a(), this) : (!r.resultCbs[i].result && r.timeoutCbs[i].callbacks.push(a), this);
    }
  };
}, jt.prototype.onAppNotify = function(e) {
  this.appCallJsCallback = e;
}, jt.prototype.notifyApp = function(e, t) {
  let r = A({ callType: this.type }, e);
  return t && (r.message_id = t), vi(r);
}, zn.prototype = {
  double() {
  },
  getAppData() {
  },
  hasAppBridge() {
    return s.bridge.bridge_info.support_two_way_call;
  },
  init() {
  },
  jsCallApp() {
  },
  requestToApp(e) {
    this.bridge.call(e, e.timeout.time).onResult((t) => {
      $(e.callback) && e.callback(t);
    }).onTimeout(() => {
      $(e.timeout.callback) && e.timeout.callback();
    });
  }
};
var Ye = {
  isSeachHasKeyword() {
    return qe(location.href, "sa-request-id") !== "" && (typeof sessionStorage.getItem("sensors-visual-mode") == "string" && sessionStorage.removeItem("sensors-visual-mode"), !0);
  },
  hasKeywordHandle() {
    let e = location.href, t = qe(e, "sa-request-id") || null, r = qe(e, "sa-request-type") || null, i = qe(e, "sa-request-url") || null;
    if (Ae.setNotice(i), St.isSupport())
      if (i !== null && sessionStorage.setItem("sensors_heatmap_url", i), sessionStorage.setItem("sensors_heatmap_id", t), r !== null)
        r === "1" || r === "2" || r === "3" ? sessionStorage.setItem("sensors_heatmap_type", r) : r = null;
      else {
        let n = sessionStorage.getItem("sensors_heatmap_type");
        r = n !== null ? n : null;
      }
    this.isReady(t, r);
  },
  isReady(e, t, r) {
    s.para.heatmap_url && s.para.heatmap ? fr({
      success() {
        setTimeout(() => {
          typeof sa_jssdk_heatmap_render < "u" && (sa_jssdk_heatmap_render(s, e, t, r), typeof console == "object" && typeof console.log == "function" && (s.heatmap_version && s.heatmap_version === s.lib_version || k(
            "heatmap.js与sensorsdata.js版本号不一致，可能存在风险!"
          )));
        }, 0);
      },
      error() {
      },
      type: "js",
      url: s.para.heatmap_url
    }) : k(
      "没有配置 heatmap 开启点击图，或者没有指定 heatmap_url 的路径"
    );
  },
  isStorageHasKeyword() {
    return St.isSupport() && typeof sessionStorage.getItem("sensors_heatmap_id") == "string";
  },
  storageHasKeywordHandle() {
    Ae.setNotice(), Ye.isReady(
      sessionStorage.getItem("sensors_heatmap_id"),
      sessionStorage.getItem("sensors_heatmap_type"),
      location.href
    );
  },
  isWindowNameHasKeyword() {
    try {
      let e = JSON.parse(window.name), t = g(e["sa-heatmap-src"]) ? Ke(e["sa-heatmap-src"]) : null;
      return e["sa-request-id"] && g(e["sa-request-id"]) && t === location.href;
    } catch {
      return !1;
    }
  },
  windowNameHasKeywordHandle() {
    let e = JSON.parse(window.name);
    function t(l) {
      let u = e[l];
      return g(u) ? Ke(u) : null;
    }
    let r = t("sa-request-id"), i = t("sa-request-type"), n = t("sa-request-url"), a = t("sa-request-language");
    Ae.setNotice(n), I.isSupport() && g(a) && I.set("web_sdk_heatmap_language", a), St.isSupport() && (n !== null && sessionStorage.setItem("sensors_heatmap_url", n), sessionStorage.setItem("sensors_heatmap_id", r), i !== null ? i === "1" || i === "2" || i === "3" ? sessionStorage.setItem("sensors_heatmap_type", i) : i = null : i = sessionStorage.getItem("sensors_heatmap_type") !== null ? sessionStorage.getItem("sensors_heatmap_type") : null), Ye.isReady(r, i);
  }
}, Be = {
  isStorageHasKeyword() {
    return St.isSupport() && typeof sessionStorage.getItem("sensors-visual-mode") == "string";
  },
  isSearchHasKeyword() {
    return (bi("sa-visual-mode") === !0 || bi("sa-visual-mode") === "true") && (typeof sessionStorage.getItem("sensors_heatmap_id") == "string" && sessionStorage.removeItem("sensors_heatmap_id"), !0);
  },
  loadVtrack() {
    fr({
      success() {
      },
      error() {
      },
      type: "js",
      url: s.para.vtrack_url ? s.para.vtrack_url : `${Hn()}//static.sensorsdata.cn/sdk/${s.lib_version}/vtrack.min.js`
    });
  },
  messageListener(e) {
    if (!e || !e.data || e.data.source !== "sa-fe")
      return !1;
    if (e.data.type === "v-track-mode") {
      if (e.data.data && e.data.data.isVtrack)
        if (St.isSupport() && sessionStorage.setItem("sensors-visual-mode", "true"), e.data.data.userURL && location.href.match(/sa-visual-mode=true/)) {
          let t = e.data.data.userURL;
          g(t) && (Nr(t, "http://") || Nr(t, "https://")) && (window.location.href = encodeURI(t), setTimeout(() => {
            window.location.reload(!0);
          }, 1e3));
        } else
          Be.loadVtrack();
      window.removeEventListener("message", Be.messageListener, !1);
    }
  },
  removeMessageHandle() {
    window.removeEventListener && window.removeEventListener("message", Be.messageListener, !1);
  },
  verifyVtrackMode() {
    window.addEventListener && window.addEventListener("message", Be.messageListener, !1), Be.postMessage();
  },
  postMessage() {
    try {
      window.parent && window.parent.postMessage && window.parent.postMessage(
        {
          source: "sa-web-sdk",
          type: "v-is-vtrack",
          data: { sdkversion: _r }
        },
        "*"
      );
    } catch {
      B(
        "浏览器版本过低，不支持 postMessage API"
      );
    }
  },
  notifyUser() {
    let e = function(t) {
      if (!t || !t.data || t.data.source !== "sa-fe")
        return !1;
      t.data.type === "v-track-mode" && (t.data.data && t.data.data.isVtrack && alert(
        "当前版本不支持，请升级部署神策数据治理"
      ), window.removeEventListener("message", e, !1));
    };
    window.addEventListener && window.addEventListener("message", e, !1), Be.postMessage();
  }
};
function wr(e) {
  let t = s.bridge.bridge_info;
  function r() {
    let i = [];
    t.touch_app_bridge || i.push(et.defineMode("1")), d(s.para.app_js_bridge) || (i.push(et.defineMode("2")), t.verify_success = !1), d(s.para.heatmap) && s.para.heatmap.clickmap == "default" || i.push(et.defineMode("3")), t.verify_success === "fail" && i.push(et.defineMode("4")), new s.SDKJSBridge("app_alert").notifyApp({ data: i });
  }
  if (s.bridge.hasVisualModeBridge())
    if (d(s.para.heatmap) && s.para.heatmap.clickmap == "default")
      if (d(s.para.app_js_bridge) && t.verify_success === "success")
        if (e)
          window.sa_jssdk_app_define_mode(s, e);
        else {
          let i = location.protocol;
          fr({
            success() {
              setTimeout(() => {
                typeof sa_jssdk_app_define_mode < "u" && window.sa_jssdk_app_define_mode(s, e);
              }, 0);
            },
            error() {
            },
            type: "js",
            url: `${i = ae(["http:", "https:"], i) > -1 ? i : "https:"}//static.sensorsdata.cn/sdk/${s.lib_version}/vapph5define.min.js`
          });
        }
      else
        r();
    else
      r();
}
function Is(e) {
  s.para.is_track_single_page && Tr.on("switch", (t) => {
    let r = function(i) {
      if (i = i || {}, t !== location.href) {
        T.pageProp.referrer = oe(t);
        let n = A({ $url: oe(), $referrer: oe(t) }, i);
        $(e) ? e(n) : s.quick && s.quick("autoTrack", n);
      }
    };
    if (typeof s.para.is_track_single_page == "boolean")
      r();
    else if (typeof s.para.is_track_single_page == "function") {
      let i = s.para.is_track_single_page();
      d(i) ? r(i) : i === !0 && r();
    }
  });
}
function js() {
  s._q && j(s._q) && s._q.length > 0 && D(s._q, (e) => {
    s[e[0]].apply(s, Array.prototype.slice.call(e[1]));
  }), d(s.para.heatmap) && (Ae.initHeatmap(), Ae.initScrollmap());
}
function Ns() {
  s.readyState.setState(3), new s.SDKJSBridge("visualized").onAppNotify(() => {
    wr(typeof sa_jssdk_app_define_mode < "u");
  }), wr(!1), s.bridge.app_js_bridge_v1(), T.initPage(), Is(), c.init(), Bs(), Ts(), s.readyState.setState(4), js();
}
function Os() {
  Ye.isWindowNameHasKeyword() ? Ye.windowNameHasKeywordHandle() : Ye.isSeachHasKeyword() ? Ye.hasKeywordHandle() : window.parent !== self && Be.isSearchHasKeyword() ? Be.verifyVtrackMode() : Ye.isStorageHasKeyword() ? Ye.storageHasKeywordHandle() : window.parent !== self && Be.isStorageHasKeyword() ? Be.verifyVtrackMode() : (Ns(), Be.notifyUser());
}
function Ts() {
  it.init(), s.bridge.bridge_info.verify_success === "success" && ri.init();
}
let Ls = [
  "setItem",
  "deleteItem",
  "getAppStatus",
  "track",
  "quick",
  "register",
  "registerPage",
  "registerOnce",
  "trackSignup",
  "setProfile",
  "setOnceProfile",
  "appendProfile",
  "incrementProfile",
  "deleteProfile",
  "unsetProfile",
  "identify",
  "resetAnonymousIdentity",
  "login",
  "logout",
  "trackLink",
  "clearAllRegister",
  "clearPageRegister",
  "bind",
  "unbind",
  "loginWithKey"
];
function wi() {
  D(Ls, (e) => {
    let t = s[e];
    s[e] = function() {
      if (s.readyState.state < 3)
        return j(s._q) || (s._q = []), k("calling sdk api before init is deprecated."), s._q.push([e, arguments]), !1;
      if (!$(s.getDisabled) || !s.getDisabled()) {
        if (s.readyState.getState())
          return t.apply(s, arguments);
        B("请先初始化神策JS SDK");
      }
    };
  });
}
let xs = {
  track(e, t, r) {
  },
  quick(e, t, r, i) {
  },
  register(e) {
  },
  registerPage(e) {
  },
  registerOnce(e) {
  },
  clearAllRegister(e) {
  },
  trackSignup(e, t, r, i) {
  },
  setProfile(e, t) {
  },
  setOnceProfile(e, t) {
  },
  appendProfile(e, t) {
  },
  incrementProfile(e, t) {
  },
  deleteProfile(e) {
  },
  unsetProfile(e, t) {
  },
  identify(e, t) {
  },
  resetAnonymousIdentity(e) {
  },
  login(e, t) {
  },
  logout(e) {
  },
  trackLink(e, t, r) {
  },
  deleteItem(e, t) {
  },
  setItem(e, t, r) {
  },
  getAppStatus(e) {
  },
  clearPageRegister(e) {
  },
  bind(e, t) {
  },
  unbind(e, t) {
  },
  registerPropertyPlugin(e) {
  }
};
function Us(e, t) {
  this.cancel = function() {
    e = !0;
  }, this.getCanceled = function() {
    return e || !1;
  }, this.stop = function() {
    t = !0;
  }, this.getStopped = function() {
    return t || !1;
  };
}
function Rs(e, t, r) {
  let i = null;
  try {
    i = JSON.parse(JSON.stringify(e || null));
  } catch {
  }
  this.getOriginalData = function() {
    return i;
  }, this.getPosition = function() {
    return t;
  }, this.cancellationToken = new Us(), this.sensors = r;
}
function ft(e) {
  if (!d(e))
    throw "error: Stage constructor requires arguments.";
  this.processDef = e, this.registeredInterceptors = {};
}
ft.prototype.process = function(e, t) {
  if (e && e in this.processDef) {
    let r = this.registeredInterceptors[e];
    if (r && j(r) && r.length > 0)
      for (let i = { current: 0, total: r.length }, n = new Rs(t, i, s), a = 0; a < r.length; a++)
        try {
          if (i.current = a + 1, t = r[a].call(null, t, n) || t, n.cancellationToken.getCanceled())
            break;
          if (n.cancellationToken.getStopped())
            return;
        } catch (l) {
          B(`interceptor error:${l}`);
        }
    return this.processDef[e] && this.processDef[e] in this.processDef && (t = this.process(this.processDef[e], t)), t;
  }
  B(`process [${e}] is not supported`);
}, ft.prototype.registerStageImplementation = function(e) {
  e && e.init && $(e.init) && (e.init(this), e.interceptor && this.registerInterceptor(e.interceptor));
}, ft.prototype.registerInterceptor = function(e) {
  if (e)
    for (let t in e) {
      let r = e[t];
      if (r && d(r) && $(r.entry)) {
        He(r.priority) || (r.priority = Number.MAX_VALUE), this.registeredInterceptors[t] || (this.registeredInterceptors[t] = []);
        let i = this.registeredInterceptors[t];
        r.entry.priority = r.priority, i.push(r.entry), i.sort((n, a) => n.priority - a.priority);
      }
    }
};
let Hs = {
  basicProps: "extendProps",
  extendProps: "formatData",
  formatData: "finalAdjustData",
  finalAdjustData: null
}, Xn = new ft(Hs), Js = { send: null }, Yn = new ft(Js), Ms = { getUtmData: null, callSchema: null }, Zn = new ft(Ms), qs = { webClickEvent: null, webStayEvent: null }, Gn = new ft(qs);
function Sr(e) {
  e && e.buildDataStage && Xn.registerStageImplementation(e.buildDataStage), e && e.businessStage && Zn.registerStageImplementation(e.businessStage), e && e.sendDataStage && Yn.registerStageImplementation(e.sendDataStage), e && e.viewStage && Gn.registerStageImplementation(e.viewStage);
}
let Si = {
  buildDataStage(e) {
    e && Xn.registerInterceptor(e);
  },
  businessStage(e) {
    e && Zn.registerInterceptor(e);
  },
  sendDataStage(e) {
    e && Yn.registerInterceptor(e);
  },
  viewStage(e) {
    e && Gn.registerInterceptor(e);
  }
};
function Rr(e, t) {
  Si[e] && Si[e](t);
}
let Hr = {
  stage: null,
  init(e) {
    this.stage = e;
  }
};
function Ks() {
  return Hr.stage && Hr.stage.process("getUtmData");
}
let Qn = {
  stage: null,
  init(e) {
    this.stage = e;
  },
  interceptor: {
    send: {
      entry(e) {
        return e;
      }
    }
  }
};
function Vs(e) {
  return Qn.stage.process("send", e);
}
let Pt = {};
function Ws(e) {
  e.kit = Pt, e.saEvent = le, this.buildDataStage = ii, this.sendDataStage = Qn, this.businessStage = Hr;
}
function zs(e) {
  e.heatmap = Ae, this.viewStage = ni;
}
Pt.buildData = function(e) {
  return Va(e);
}, Pt.sendData = function(e, t) {
  let r = Bn(e.properties);
  Vs({
    origin_data: e,
    server_url: s.para.server_url,
    data: e,
    config: r || {},
    callback: t
  }), s.log(e);
}, Pt.encodeTrackData = function(e) {
  return On(e);
}, Pt.getUtmData = function() {
  return Ks();
};
let Xs = {
  webClickEvent: {
    entry(e, t) {
      let r = t.sensors;
      e.tagName === "a" && r.para.heatmap && r.para.heatmap.isTrackLink === !0 ? r.trackLink(
        { event: e.event, target: e.target },
        "$WebClick",
        e.props
      ) : r.track("$WebClick", e.props, e.callback);
    }
  },
  webStayEvent: {
    entry(e, t) {
      t.sensors.track("$WebStay", e);
    }
  }
};
function Ys(e) {
  $(e.properties) ? !e.isMatchedWithFilter || $(e.isMatchedWithFilter) ? Rr("buildDataStage", {
    finalAdjustData: {
      priority: 100,
      entry(t) {
        try {
          if ($(e.isMatchedWithFilter))
            return e.isMatchedWithFilter(t) && e.properties(t);
          e.properties(t);
        } catch (r) {
          B(`execute registerPropertyPlugin callback error:${r}`);
        }
      }
    }
  }) : B(
    "registerPropertyPlugin arguments error, isMatchedWithFilter must be function"
  ) : B(
    "registerPropertyPlugin arguments error, properties must be function"
  );
}
let $i = window.sensors_data_pre_config, ki = !!Wn.isObject($i) && $i.is_compliance_enabled;
function $r(e) {
  e && (s.events = xn, s.bridge = Ps, s.SDKJSBridge = jt, s.JSBridge = zn, s.store = c, s.unlimitedDiv = dr, s.customProp = Rn, s.vtrackcollect = it, s.vapph5collect = ri, s.detectMode = Os, s.registerFeature = Sr, s.registerInterceptor = Rr, s.commonWays = tr, Sr(new Ws(s)), Sr(new zs(s)), Rr("viewStage", Xs));
  let t = e ? Es : xs;
  for (let r in t) s[r] = t[r];
  s.logger = mt, s.log = Je, s._ = Wn, s.on = Tn, s.ee = z, s.use = qn, s.lib_version = _r, s.registerPropertyPlugin = Ys;
}
s.init = function(e) {
  if (z.sdk.emit("beforeInit"), s.readyState && s.readyState.state && s.readyState.state >= 2)
    return !1;
  ki && ($r(!0), wi()), z.initSystemEvent(), s.setInitVar(), s.readyState.setState(2), s.initPara(e), z.sdk.emit("initPara"), z.sdk.emit("afterInitPara"), z.sdk.emit("initAPI"), z.sdk.emit("afterInitAPI"), s.detectMode(), Ds(), z.sdk.emit("afterInit"), z.sdk.emit("ready");
}, ki ? $r(!1) : ($r(!0), wi());
let Zs = "1.27.11";
function Gs(e, t, r) {
  return e.plugin_version = Zs, e;
}
let Qs = {
  init(e) {
    let t = e._.isString, r = e._.rot13defs, i = e._.dfmapping, n = "data:enc;";
    e.ee.sdk.on("afterInitPara", () => {
      e.kit.userEncrypt = function(a) {
        return `dfm-enc-${i(a)}`;
      }, e.kit.userDecrypt = function(a) {
        return a.indexOf(n) === 0 ? (a = a.substring(n.length), a = r(a)) : a.indexOf("dfm-enc-") === 0 && (a = a.substring(8), a = i(a)), a;
      }, e.kit.userDecryptIfNeeded = function(a) {
        return !t(a) || a.indexOf(n) !== 0 && a.indexOf("dfm-enc-") !== 0 || (a = e.kit.userDecrypt(a)), a;
      };
    });
  },
  plugin_name: "UserEncryptDefault"
}, eo = Gs(Qs), to = "1.27.11";
function ro(e, t, r) {
  if (e.plugin_name = t, e.init) {
    let i = e.init;
    e.init = function(n, a) {
      if (io(n, e, t), n.readyState && n.readyState.state >= 3 || !n.on)
        return l();
      function l() {
        i.call(e, n, a);
      }
      n.on(r, l);
    };
  }
  return e;
}
function io(e, t, r) {
  function i(n, a) {
    e.logger ? e.logger.msg.apply(e.logger, a).module(`${r}` || "").level(n).log() : e.log && e.log.apply(e, a);
  }
  t.log = function() {
    i("log", arguments);
  }, t.warn = function() {
    i("warn", arguments);
  }, t.error = function() {
    i("error", arguments);
  };
}
function no(e, t, r) {
  return ro(e, t, r), e.plugin_version = to, e;
}
let ao = {
  sd: null,
  init(e) {
    if (this.sd || (this.sd = e, !this.sd || !this.sd._))
      return !1;
    let t = this.sd._.cookie.get("sensors_amp_id"), r = this.sd.store._state.distinct_id;
    if (t && t.length > 0) {
      let i = t.slice(0, 4) === "amp-";
      if (t !== r) {
        if (!i)
          return !1;
        this.sd.store._state.first_id ? (this.sd.identify(t, !0), this.sd.saEvent.send(
          {
            original_id: t,
            distinct_id: r,
            type: "track_signup",
            event: "$SignUp",
            properties: {}
          },
          null
        ), this.setAmpId(r)) : this.sd.identify(t, !0);
      }
    } else
      this.setAmpId(r);
    this.addListener();
  },
  addListener() {
    let e = this;
    this.sd.events.on("changeDistinctId", (t) => {
      e.setAmpId(t);
    }), this.sd.events.isReady();
  },
  setAmpId(e) {
    this.sd._.cookie.set("sensors_amp_id", e);
  }
}, so = no(ao, "Amp", "sdkReady"), We = window.SensorsData_App_Visual_Bridge, oo = We && We.sensorsdata_visualized_mode, Fi = We && We.sensorsdata_visualized_alert_info, Ci = We && We.sensorsdata_hover_web_nodes;
function lo(e) {
  return Fi && Fi.call(We, JSON.stringify(e));
}
function Ei(e) {
  return oo.call(We) && Ci && Ci.call(We, JSON.stringify(e));
}
function uo(e, t) {
  return t && typeof t[e.callType] == "function" && t[e.callType]();
}
let Ie, pr, Et, M, Nt, _t, Di = {
  commands: {
    app_alert: lo,
    visualized_track: Ei,
    page_info: Ei,
    sensorsdata_get_app_visual_config: uo
  }
}, co = "1.27.11";
function po(e, t, r) {
  if (e.plugin_name = t, e.init) {
    let i = e.init;
    e.init = function(n, a) {
      if (go(n, e, t), n.readyState && n.readyState.state >= 3 || !n.on)
        return l();
      function l() {
        i.call(e, n, a);
      }
      n.on(r, l);
    };
  }
  return e;
}
function go(e, t, r) {
  function i(n, a) {
    e.logger ? e.logger.msg.apply(e.logger, a).module(`${r}` || "").level(n).log() : e.log && e.log.apply(e, a);
  }
  t.log = function() {
    i("log", arguments);
  }, t.warn = function() {
    i("warn", arguments);
  }, t.error = function() {
    i("error", arguments);
  };
}
function fo(e, t, r) {
  return po(e, t, r), e.plugin_version = co, e;
}
let ea = {
  init(e) {
    Nt = (M = e) && M._, _t = M && M.log || console && console.log || function() {
    }, _o();
  },
  handleCommand: mo
};
function _o() {
  Ie = window.SensorsData_APP_New_H5_Bridge, pr = Ie && Ie.sensorsdata_track, Et = pr && Ie.sensorsdata_get_server_url && Ie.sensorsdata_get_server_url(), _t("---test---fail---", !M, M.bridge.activeBridge, !Et), M && !M.bridge.activeBridge && Et && (M.bridge.activeBridge = ea, M.para.app_js_bridge && !M.para.app_js_bridge.is_mui && (M.bridge.is_verify_success = Et && M.bridge.validateAppUrl(Et), _t("---test---bridge-verify-", M.bridge.is_verify_success)), M.bridge.bridge_info = {
    touch_app_bridge: !0,
    platform: "android",
    verify_success: M.bridge.is_verify_success ? "success" : "fail",
    support_two_way_call: !!Ie.sensorsdata_js_call_app
  }, M.para.app_js_bridge ? M.registerInterceptor("sendDataStage", {
    send: { priority: 60, entry: ho }
  }) : _t(
    "---test---app_js_bridge is not configured, data will not be sent by android bridge."
  ));
}
function ho(e, t) {
  if (_t("---test---datasend-", M.bridge.is_verify_success), M.para.app_js_bridge.is_mui || e.data.type === "item_set" || e.data.type === "item_delete")
    return e;
  let r = e.callback;
  return M.bridge.is_verify_success ? (_t("---test---bridge-verify-success---", e.data), pr && pr.call(
    Ie,
    JSON.stringify(
      Nt.extend({ server_url: M.para.server_url }, e.data)
    )
  ), Nt.isFunction(r) && r(), t.cancellationToken.cancel(), e) : (_t("---test---bridge-verify-fail-----", M.bridge.is_verify_success), M.para.app_js_bridge.is_send ? (M.debug.apph5({ data: e.data, step: "4.2", output: "all" }), e) : (Nt.isFunction(r) && r(), t.cancellationToken.cancel(), e));
}
function mo(e) {
  let t = e.callType;
  if (t in Di.commands)
    return Di.commands[t](e, Ie);
  Ie && Nt.isFunction(Ie.sensorsdata_js_call_app) && Ie.sensorsdata_js_call_app(JSON.stringify(e));
}
let Pi = fo(
  ea,
  "AndroidBridge",
  "sdkAfterInitPara"
), ze = window.SensorsData_App_Visual_Bridge, yo = ze && ze.sensorsdata_visualized_mode, Ai = ze && ze.sensorsdata_visualized_alert_info, Bi = ze && ze.sensorsdata_hover_web_nodes;
function vo(e) {
  return Ai && Ai.call(ze, JSON.stringify(e));
}
function Ii(e) {
  return yo.call(ze) && Bi && Bi.call(ze, JSON.stringify(e));
}
function bo(e, t) {
  return t && typeof t[e.callType] == "function" && t[e.callType]();
}
let he, vt, lt, Dt, G, at, Pe, kr = {
  commands: {
    app_alert: vo,
    visualized_track: Ii,
    page_info: Ii,
    sensorsdata_get_app_visual_config: bo
  }
}, wo = "1.27.11";
function So(e, t, r) {
  if (e.plugin_name = t, e.init) {
    let i = e.init;
    e.init = function(n, a) {
      if ($o(n, e, t), n.readyState && n.readyState.state >= 3 || !n.on)
        return l();
      function l() {
        i.call(e, n, a);
      }
      n.on(r, l);
    };
  }
  return e;
}
function $o(e, t, r) {
  function i(n, a) {
    e.logger ? e.logger.msg.apply(e.logger, a).module(`${r}` || "").level(n).log() : e.log && e.log.apply(e, a);
  }
  t.log = function() {
    i("log", arguments);
  }, t.warn = function() {
    i("warn", arguments);
  }, t.error = function() {
    i("error", arguments);
  };
}
function ko(e, t, r) {
  return So(e, t, r), e.plugin_version = wo, e;
}
let ta = {
  init(e) {
    at = (G = e) && G._, Pe = G && G.log || console && console.log || function() {
    }, Fo();
  },
  handleCommand: Eo
};
function Fo() {
  if (Pe("ObsoleteBridge---test---init---"), he = window.SensorsData_APP_JS_Bridge, vt = he && he.sensorsdata_track, lt = he && he.sensorsdata_verify, Dt = he && he.sensorsdata_visual_verify, Pe(
    "ObsoleteBridge-",
    G.bridge.activeBridge,
    lt,
    vt,
    Dt
  ), G && !G.bridge.activeBridge && (lt || vt || Dt)) {
    G.bridge.activeBridge = ta;
    let e = lt || vt;
    Dt && (e = !!Dt.call(
      he,
      JSON.stringify({ server_url: G.para.server_url })
    ), Pe("ObsoleteBridge---called-return", e)), G.bridge.bridge_info = {
      touch_app_bridge: !0,
      platform: "android",
      verify_success: e ? "success" : "fail"
    }, G.para.app_js_bridge ? (G.registerInterceptor("sendDataStage", {
      send: { priority: 80, entry: Co }
    }), Pe("Android obsolete bridge inits succeed.")) : Pe(
      "app_js_bridge is not configured, data will not be sent by android obsolete bridge."
    );
  }
}
function Co(e, t) {
  if (Pe("ObsoleteBridge---senddata"), G.para.app_js_bridge.is_mui || e.data.type === "item_set" || e.data.type === "item_delete")
    return e;
  let r = e.callback;
  if (lt) {
    let i = lt && lt.call(
      he,
      JSON.stringify(
        at.extend({ server_url: G.para.server_url }, e.data)
      )
    );
    return Pe("ObsoleteBridge---anVerify-success", i), i ? (at.isFunction(r) && r(), t.cancellationToken.cancel(), e) : G.para.app_js_bridge.is_send ? (G.debug.apph5({ data: e.data, step: "3.1", output: "all" }), e) : (at.isFunction(r) && r(), t.cancellationToken.cancel(), e);
  }
  return Pe("ObsoleteBridge---is-send-old-way", G.para.app_js_bridge.is_send), vt && vt.call(
    he,
    JSON.stringify(
      at.extend({ server_url: G.para.server_url }, e.data)
    )
  ), at.isFunction(r) && r(), t.cancellationToken.cancel(), e;
}
function Eo(e) {
  Pe("ObsoleteBridge---handleCommadn");
  let t = e.callType;
  return t in kr.commands ? (Pe("ObsoleteBridge---", t, kr.commands), kr.commands[t](e, he)) : he && at.isFunction(he.sensorsdata_js_call_app) ? (Pe("ObsoleteBridge---handleCommadn-abridge"), he.sensorsdata_js_call_app(JSON.stringify(e))) : void 0;
}
let _e, $e, Fr, Cr, ji = ko(
  ta,
  "AndroidObsoleteBridge",
  "sdkAfterInitPara"
), Do = "1.27.11";
function Po(e, t, r) {
  if (e.plugin_name = t, e.init) {
    let i = e.init;
    e.init = function(n, a) {
      if (Ao(n, e, t), n.readyState && n.readyState.state >= 3 || !n.on)
        return l();
      function l() {
        i.call(e, n, a);
      }
      n.on(r, l);
    };
  }
  return e;
}
function Ao(e, t, r) {
  function i(n, a) {
    e.logger ? e.logger.msg.apply(e.logger, a).module(`${r}` || "").level(n).log() : e.log && e.log.apply(e, a);
  }
  t.log = function() {
    i("log", arguments);
  }, t.warn = function() {
    i("warn", arguments);
  }, t.error = function() {
    i("error", arguments);
  };
}
function Bo(e, t, r) {
  return Po(e, t, r), e.plugin_version = Do, e;
}
let Mt;
var ke = {
  event_list: [],
  latest_event_initial_time: null,
  max_save_time: 2592e6,
  init(e, t) {
    if ($e || !e)
      return !1;
    Cr = (t = t || {}).cookie_name || "sensorsdata2015jssdkchannel", $e = e;
    let r = this;
    (function() {
      if (_e = $e._, Fr = $e.store, !_e.localStorage.isSupport())
        return !1;
      r.eventList.init(), r.addLatestChannelUrl(), r.addIsChannelCallbackEvent();
    })();
  },
  addIsChannelCallbackEvent() {
    $e.registerPage({
      $is_channel_callback_event(e) {
        if (_e.isObject(e) && e.event && e.event !== "$WebClick" && e.event !== "$pageview" && e.event !== "$WebStay" && e.event !== "$SignUp")
          return !ke.eventList.hasEvent(e.event) && (ke.eventList.add(e.event), !0);
      }
    });
  },
  addLatestChannelUrl() {
    let e = this.getUrlDomain(), t = this.cookie.getChannel();
    if (e === "url解析失败")
      this.registerAndSave({
        _sa_channel_landing_url: "",
        _sa_channel_landing_url_error: "url的domain解析失败"
      });
    else if (_e.isReferralTraffic(document.referrer)) {
      let r = _e.getQueryParam(location.href, "sat_cf");
      _e.isString(r) && r.length > 0 ? (this.registerAndSave({ _sa_channel_landing_url: location.href }), ke.channelLinkHandler()) : this.registerAndSave({ _sa_channel_landing_url: "" });
    } else
      t ? $e.registerPage(t) : $e.registerPage({
        _sa_channel_landing_url: "",
        _sa_channel_landing_url_error: "取值异常"
      });
  },
  registerAndSave(e) {
    $e.registerPage(e), this.cookie.saveChannel(e);
  },
  cookie: {
    getChannel() {
      let e = $e.kit.userDecryptIfNeeded(_e.cookie.get(Cr));
      return e = _e.safeJSONParse(e), !(!_e.isObject(e) || !e.prop) && e.prop;
    },
    saveChannel(e) {
      let r = JSON.stringify({ prop: e });
      $e.para.encrypt_cookie && (r = $e.kit.userEncrypt(r)), _e.cookie.set(Cr, r);
    }
  },
  channelLinkHandler() {
    this.eventList.reset(), $e.track("$ChannelLinkReaching");
  },
  getUrlDomain() {
    let e = _e.info.pageProp.url_domain;
    return e === "" && (e = "url解析失败"), e;
  },
  eventList: {
    init() {
      let e = this.get(), t = (/* @__PURE__ */ new Date()).getTime();
      if (e && _e.isNumber(e.latest_event_initial_time) && _e.isArray(e.eventList)) {
        let r = t - e.latest_event_initial_time;
        r > 0 && r < ke.max_save_time ? (ke.event_list = e.eventList, ke.latest_event_initial_time = e.latest_event_initial_time) : this.reset();
      } else
        this.reset();
    },
    get() {
      let e = {};
      try {
        e = Fr.readObjectVal("sawebjssdkchannel");
      } catch (t) {
        $e.log(t);
      }
      return e;
    },
    add(e) {
      ke.event_list.push(e), this.save();
    },
    save() {
      let e = {
        latest_event_initial_time: ke.latest_event_initial_time,
        eventList: ke.event_list
      };
      Fr.saveObjectVal("sawebjssdkchannel", e);
    },
    reset() {
      ke.event_list = [], ke.latest_event_initial_time = (/* @__PURE__ */ new Date()).getTime(), this.save();
    },
    hasEvent(e) {
      let t = !1;
      return _e.each(ke.event_list, (r) => {
        r === e && (t = !0);
      }), t;
    }
  }
};
let Io = Bo(ke, "SensorsChannel", "sdkAfterInitAPI"), jo = "1.27.11";
function No(e, t, r) {
  if (e.init) {
    let i = e.init;
    e.init = function(n, a) {
      if (Oo(n, e, t), n.readyState && n.readyState.state >= 3 || !n.on)
        return l();
      function l() {
        i.call(e, n, a);
      }
      n.on(r, l);
    };
  }
  return e;
}
function Oo(e, t, r) {
  function i(n, a) {
    e.logger ? e.logger.msg.apply(e.logger, a).module(`${r}` || "").level(n).log() : e.log && e.log.apply(e, a);
  }
  t.log = function() {
    i("log", arguments);
  }, t.warn = function() {
    i("warn", arguments);
  }, t.error = function() {
    i("error", arguments);
  };
}
function To(e, t, r) {
  return No(e, t, r), e.plugin_version = jo, e;
}
let ra = function() {
  let e = {};
  return typeof document.hidden < "u" ? (e.hidden = "hidden", e.visibilityChange = "visibilitychange") : typeof document.msHidden < "u" ? (e.hidden = "msHidden", e.visibilityChange = "msvisibilitychange") : typeof document.webkitHidden < "u" && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e;
};
function ia() {
  return Mt !== void 0 && document[Mt];
}
Mt = ra().hidden;
let Er, ht, W, Ot, Jr, Mr = {
  android: /Android/i,
  iOS: /iPhone|iPad|iPod/i,
  harmony: /OpenHarmony/i
}, Lo = function() {
  for (let e in Mr)
    if (navigator.userAgent.match(Mr[e]))
      return e;
  return "";
}, rr = Lo(), xo = function() {
  return Mr.hasOwnProperty(rr);
}, Xt = function(e) {
  return e != null && Object.prototype.toString.call(e) == "[object Object]";
}, Uo = function(e) {
  return e.match(/\/sd\/(\w+)\/(\w+)$/);
}, Ro = function(e) {
  let t = e._.URL(e.para.server_url);
  return {
    origin: t.origin,
    project: t.searchParams.get("project") || "default"
  };
}, Ni = function(e, t, r) {
  e.log("尝试唤起 android app");
  let i = t;
  e.log(`唤起APP的地址：${i}`), window.location = i, e.timer = setTimeout(() => {
    let n = ia();
    if (e.log(`hide:${Mt}:${document[Mt]}`), n)
      return e.log("The page is hidden, stop navigating to download page"), !1;
    e.log(
      "App可能未安装，跳转到下载地址"
    ), window.location = r;
  }, e.timeout);
}, Ho = function(e, t, r) {
  e.log(`尝试唤起 iOS app:${t}`), window.location.href = t, e.timer = setTimeout(() => {
    if (ia())
      return e.log("The page is hidden, stop navigating to download page"), !1;
    e.log(
      "App可能未安装，跳转到下载地址"
    ), window.location.href = r;
  }, e.timeout), e.log(`new timer:${e.timer}`);
};
var At = {
  plugin_name: ["deeplink", "Deeplink"],
  key: null,
  timer: null,
  sd: null,
  data: null,
  timeout: 2500,
  apiURL: "{origin}/sdk/deeplink/param?key={key}&system_type=JS&project={project}",
  init(e) {
    if (this.sd)
      return this.logger("deeplink已经初始化"), !1;
    arguments[0] ? Xt(arguments[0]) && typeof arguments[0].timeout == "number" ? this.sd = window.sensorsDataAnalytic201505 : this.sd = e : this.sd = window.sensorsDataAnalytic201505;
    let t = {};
    if (arguments.length > 0 && (arguments.length === 1 && Xt(arguments[0]) ? t = arguments[0] : arguments.length >= 2 && Xt(arguments[1]) && (t = arguments[1])), !xo())
      return this.logger(
        "不支持当前系统，目前只支持Android和iOS"
      ), !1;
    if (Xt(t) && this.sd._.isNumber(t.timeout) && t.timeout >= 2500 && (this.timeout = t.timeout), !this.sd.para.server_url)
      return this.logger(
        "神策JS SDK配置项server_url未正确配置"
      ), !1;
    let r = Ro(this.sd);
    this.apiURL = this.apiURL.replace("{origin}", r.origin).replace("{project}", r.project);
    let i = this.sd._.getQueryParam(window.location.href, "deeplink");
    if (!i)
      return this.logger(
        "当前页面缺少deeplink参数"
      ), !1;
    i = window.decodeURIComponent(i);
    let n = Uo(i);
    if (!n)
      return this.logger(
        "当前页面的deeplink参数无效"
      ), !1;
    this.key = n[2], this.apiURL = this.apiURL.replace(
      "{key}",
      window.encodeURIComponent(n[2])
    ), this.sd._.ajax({
      url: this.apiURL,
      type: "GET",
      cors: !0,
      credentials: !1,
      success: (function(a) {
        if (a.errorMsg)
          return At.logger(`API报错：${a.errorMsg}`), !1;
        At.data = a, At.logger(
          `API查询成功，数据：${JSON.stringify(a, null, "  ")}`
        ), this.data.app_key && (this.data.android_info && this.data.android_info.url_schemes && (this.data.android_info.url_schemes += `://sensorsdata/sd/${this.data.app_key}/${this.key}`), this.data.ios_info && this.data.ios_info.url_schemes && (this.data.ios_info.url_schemes += `://sensorsdata/sd/${this.data.app_key}/${this.key}`), this.data.harmony_info && this.data.harmony_info.url_schemes && (this.data.harmony_info.url_schemes += `://sensorsdata/sd/${this.data.app_key}/${this.key}`));
      }).bind(this),
      error() {
        At.logger("API查询出错");
      }
    }), this.addListeners();
  },
  openDeepLink() {
    if (this.logger("openDeeplink()"), !this.data)
      return this.logger("没有Deep link数据!"), !1;
    if (rr === "iOS") {
      this.logger("当前系统是iOS");
      let e = this.sd && this.sd._ && this.sd._.getIOSVersion() >= 9 && this.data.ios_info.ios_wake_url ? this.data.ios_info.ios_wake_url : this.data.ios_info.url_schemes;
      this.logger(`唤起APP的地址：${e}`), Ho(this, e, this.data.ios_info.download_url);
    } else if (rr === "android")
      this.logger("当前系统是 android"), Ni(
        this,
        this.data.android_info.url_schemes,
        this.data.android_info.download_url
      );
    else if (rr === "harmony") {
      let e = this.data.harmony_info.app_linking_url || this.data.harmony_info.url_schemes;
      this.logger("当前系统是 HarmonyOS"), Ni(this, e, this.data.harmony_info.download_url);
    }
  },
  logger(e) {
    this.sd && this.sd.log(e);
  },
  addListeners() {
    let e = ra().visibilityChange, t = this;
    e && document.addEventListener(
      e,
      () => {
        clearTimeout(t.timer), t.logger(`visibilitychange, clear timeout:${t.timer}`);
      },
      !1
    ), window.addEventListener(
      "pagehide",
      () => {
        t.logger(`page hide, clear timeout:${t.timer}`), clearTimeout(t.timer);
      },
      !1
    );
  }
};
let Jo = To(At, null, "sdkReady"), Mo = "1.27.11";
function qo(e, t, r) {
  if (e.plugin_name = t, e.init) {
    let i = e.init;
    e.init = function(n, a) {
      if (Ko(n, e, t), n.readyState && n.readyState.state >= 3 || !n.on)
        return l();
      function l() {
        i.call(e, n, a);
      }
      n.on(r, l);
    };
  }
  return e;
}
function Ko(e, t, r) {
  function i(n, a) {
    e.logger ? e.logger.msg.apply(e.logger, a).module(`${r}` || "").level(n).log() : e.log && e.log.apply(e, a);
  }
  t.log = function() {
    i("log", arguments);
  }, t.warn = function() {
    i("warn", arguments);
  }, t.error = function() {
    i("error", arguments);
  };
}
function Vo(e, t, r) {
  return qo(e, t, r), e.plugin_version = Mo, e;
}
let na = {
  init(e) {
    Ot = (W = e) && W._, Jr = W && W.log || console && console.log || function() {
    }, Wo();
  },
  handleCommand: Xo
};
function Wo() {
  Er = window.SensorsData_iOS_JS_Bridge && window.SensorsData_iOS_JS_Bridge.sensorsdata_app_server_url, ht = function() {
    return window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.sensorsdataNativeTracker;
  }, W && !W.bridge.activeBridge && ht() && ht().postMessage && (W.bridge.activeBridge = na, W.para.app_js_bridge && !W.para.app_js_bridge.is_mui && (W.bridge.is_verify_success = Er && W.bridge.validateAppUrl(Er)), W.bridge.bridge_info = {
    touch_app_bridge: !0,
    platform: "ios",
    verify_success: W.bridge.is_verify_success ? "success" : "fail",
    support_two_way_call: !0
  }, W.para.app_js_bridge ? (W.registerInterceptor("sendDataStage", {
    send: { priority: 70, entry: zo }
  }), Jr("IOS bridge inits succeed.")) : Jr(
    "app_js_bridge is not configured, data will not be sent by iOS bridge."
  ));
}
function zo(e, t) {
  if (W.para.app_js_bridge.is_mui || e.data.type === "item_set" || e.data.type === "item_delete")
    return e;
  let r = e.callback;
  return W.bridge.is_verify_success ? (ht() && ht().postMessage(
    JSON.stringify({
      callType: "app_h5_track",
      data: Ot.extend({ server_url: W.para.server_url }, e.data)
    })
  ), Ot.isFunction(r) && r(), t.cancellationToken.cancel(), e) : W.para.app_js_bridge.is_send ? (W.debug.apph5({ data: e.data, step: "4.1", output: "all" }), e) : (Ot.isFunction(r) && r(), t.cancellationToken.cancel(), e);
}
function Xo(e) {
  let t = e.callType;
  return t !== "page_info" && t !== "visualized_track" || W.bridge.hasVisualModeBridge() ? t === "sensorsdata_get_app_visual_config" ? Ot.isObject(window.SensorsData_APP_New_H5_Bridge) && window.SensorsData_APP_New_H5_Bridge[t] : ht() && ht().postMessage(JSON.stringify(e)) : null;
}
let Q, $t, qr, Oi = Vo(na, "IOSBridge", "sdkAfterInitPara"), Yo = "1.27.11";
function Zo(e, t, r) {
  if (e.plugin_name = t, e.init) {
    let i = e.init;
    e.init = function(n, a) {
      if (Go(n, e, t), n.readyState && n.readyState.state >= 3 || !n.on)
        return l();
      function l() {
        i.call(e, n, a);
      }
      n.on(r, l);
    };
  }
  return e;
}
function Go(e, t, r) {
  function i(n, a) {
    e.logger ? e.logger.msg.apply(e.logger, a).module(`${r}` || "").level(n).log() : e.log && e.log.apply(e, a);
  }
  t.log = function() {
    i("log", arguments);
  }, t.warn = function() {
    i("warn", arguments);
  }, t.error = function() {
    i("error", arguments);
  };
}
function Qo(e, t, r) {
  return Zo(e, t, r), e.plugin_version = Yo, e;
}
let aa = {
  init(e) {
    $t = (Q = e) && Q._, qr = Q && Q.log || console && console.log || function() {
    }, el();
  }
};
function el() {
  Q && !Q.bridge.activeBridge && tl() && (Q.bridge.activeBridge = aa, Q.bridge.bridge_info = {
    touch_app_bridge: !0,
    platform: "ios",
    verify_success: rl() ? "success" : "fail"
  }, Q.para.app_js_bridge ? (Q.registerInterceptor("sendDataStage", {
    send: { priority: 90, entry: il }
  }), qr("IOS obsolete bridge inits succeed.")) : qr(
    "app_js_bridge is not configured, data will not be sent by iOS obsolete bridge."
  ));
}
function tl() {
  return (/sensors-verify/.test(navigator.userAgent) || /sa-sdk-ios/.test(navigator.userAgent)) && !window.MSStream;
}
function rl() {
  if (/sensors-verify/.test(navigator.userAgent)) {
    let e = navigator.userAgent.match(/sensors-verify\/(\S+)/);
    if (e && e[0] && typeof e[1] == "string" && e[1].split("?").length === 2) {
      e = e[1].split("?");
      let t = null, r = null;
      try {
        t = $t.URL(Q.para.server_url).hostname, r = $t.URL(Q.para.server_url).searchParams.get("project") || "default";
      } catch (i) {
        Q.log(i);
      }
      return !(!t || t !== e[0] || !r || r !== e[1]);
    }
    return !1;
  }
  return !!/sa-sdk-ios/.test(navigator.userAgent);
}
function il(e, t) {
  if (Q.para.app_js_bridge.is_mui || e.data.type === "item_set" || e.data.type === "item_delete")
    return e;
  let r, i, n = e.callback;
  if (Q.bridge.bridge_info.verify_success) {
    let a = document.createElement("iframe"), l = (r = e.data, i = (i = JSON.stringify(
      $t.extend({ server_url: Q.para.server_url }, r)
    )).replace(/\r\n/g, ""), `sensorsanalytics://trackEvent?event=${i = encodeURIComponent(i)}`);
    return a.setAttribute("src", l), document.documentElement.appendChild(a), a.parentNode.removeChild(a), a = null, $t.isFunction(n) && n(), t.cancellationToken.cancel(), !0;
  }
  return Q.para.app_js_bridge.is_send ? (Q.debug.apph5({ data: e.data, step: "3.2", output: "all" }), e) : ($t.isFunction(n) && n(), t.cancellationToken.cancel(), e);
}
let Ti = Qo(
  aa,
  "IOSObsoleteBridge",
  "sdkAfterInitPara"
), nl = "1.27.11";
function al(e, t, r) {
  if (e.plugin_name = t, e.init) {
    let i = e.init;
    e.init = function(n, a) {
      if (sl(n, e, t), n.readyState && n.readyState.state >= 3 || !n.on)
        return l();
      function l() {
        i.call(e, n, a);
      }
      n.on(r, l);
    };
  }
  return e;
}
function sl(e, t, r) {
  function i(n, a) {
    e.logger ? e.logger.msg.apply(e.logger, a).module(`${r}` || "").level(n).log() : e.log && e.log.apply(e, a);
  }
  t.log = function() {
    i("log", arguments);
  }, t.warn = function() {
    i("warn", arguments);
  }, t.error = function() {
    i("error", arguments);
  };
}
function ol(e, t, r) {
  return al(e, t, r), e.plugin_version = nl, e;
}
let ll = 5e3, ul = 432e3;
function X() {
  this.sd = null, this.start_time = +/* @__PURE__ */ new Date(), this.page_show_status = !0, this.page_hidden_status = !1, this._ = {}, this.timer = null, this.current_page_url = document.referrer, this.url = location.href, this.title = document.title || "", this.option = {}, this.heartbeat_interval_time = 5e3, this.heartbeat_interval_timer = null, this.page_id = null, this.storage_name = "sawebjssdkpageleave", this.max_duration = ul;
}
X.prototype.init = function(e, t) {
  if (e) {
    if (this.sd = e, this._ = this.sd._, t) {
      this.option = t;
      let r = t.heartbeat_interval_time;
      r && (this._.isNumber(r) || this._.isNumber(1 * r)) && 1 * r > 0 && (this.heartbeat_interval_time = 1e3 * r);
      let i = t.max_duration;
      i && (this._.isNumber(i) || this._.isNumber(1 * i)) && 1 * i > 0 && (this.max_duration = i);
    }
    this.page_id = Number(
      String(this._.getRandom()).slice(2, 5) + String(this._.getRandom()).slice(2, 4) + String((/* @__PURE__ */ new Date()).getTime()).slice(-4)
    ), this.addEventListener(), document.hidden === !0 ? this.page_show_status = !1 : this.addHeartBeatInterval(), this.log("PageLeave初始化完毕");
  } else
    this.log("神策JS SDK未成功引入");
}, X.prototype.log = function(e) {
  this.sd && this.sd.log(e);
}, X.prototype.refreshPageEndTimer = function() {
  let e = this;
  this.timer && (clearTimeout(this.timer), this.timer = null), this.timer = setTimeout(() => {
    e.page_hidden_status = !1;
  }, ll);
}, X.prototype.hiddenStatusHandler = function() {
  clearTimeout(this.timer), this.timer = null, this.page_hidden_status = !1;
}, X.prototype.pageStartHandler = function() {
  let e = this.getPageLeaveProperties();
  this.start_time = +/* @__PURE__ */ new Date(), document.hidden ? this.page_show_status = !1 : this.page_show_status = !0, this.url = location.href, delete e[this.option.event_duration], this.isCollectUrl(this.url) && this.sd.track(this.option.event_name_view, Object.assign(e, this.option.urlPropertyMap(this.url))), this.title = document.title;
}, X.prototype.pageEndHandler = function() {
  if (this.page_hidden_status !== !0) {
    let e = this.getPageLeaveProperties();
    this.page_show_status === !1 && delete e[this.option.event_duration], this.page_show_status = !1, this.page_hidden_status = !0, this.isCollectUrl(this.url) && this.sd.track(this.option.event_name_leave, Object.assign(e, this.option.urlPropertyMap(this.url))), this.refreshPageEndTimer(), this.delHeartBeatData();
  }
}, X.prototype.addEventListener = function() {
  this.addPageStartListener(), this.addPageSwitchListener(), this.addSinglePageListener(), this.addPageEndListener();
}, X.prototype.addPageStartListener = function() {
  let e = this;
  "onpageshow" in window && this._.addEvent(window, "pageshow", () => {
    e.pageStartHandler(), e.hiddenStatusHandler();
  });
}, X.prototype.isCollectUrl = function(e) {
  return typeof this.option.isCollectUrl != "function" || typeof e != "string" || e === "" || this.option.isCollectUrl(e);
}, X.prototype.addSinglePageListener = function() {
  let e = this;
  this.sd.ee && this.sd.ee.spa.prepend("switch", (t) => {
    t !== location.href && (e.url = t, e.pageEndHandler(), e.stopHeartBeatInterval(), e.current_page_url = e.url, e.pageStartHandler(), e.hiddenStatusHandler(), e.addHeartBeatInterval());
  });
}, X.prototype.addPageEndListener = function() {
  let e = this;
  this._.each(["pagehide", "beforeunload", "unload"], (t) => {
    `on${t}` in window && e._.addEvent(window, t, () => {
      e.pageEndHandler(), e.stopHeartBeatInterval();
    });
  });
}, X.prototype.addPageSwitchListener = function() {
  let e = this;
  this._.listenPageState({
    visible() {
      e.pageStartHandler(), e.hiddenStatusHandler(), e.addHeartBeatInterval();
    },
    hidden() {
      e.url = location.href, e.title = document.title, e.pageEndHandler(), e.stopHeartBeatInterval();
    }
  });
}, X.prototype.addHeartBeatInterval = function() {
  this._.localStorage.isSupport() && this.startHeartBeatInterval();
}, X.prototype.startHeartBeatInterval = function() {
  let e = this;
  this.heartbeat_interval_timer && this.stopHeartBeatInterval();
  let t = !0;
  this.isCollectUrl(this.url) || (t = !1), this.heartbeat_interval_timer = setInterval(() => {
    t && e.saveHeartBeatData();
  }, this.heartbeat_interval_time), t && this.saveHeartBeatData("is_first_heartbeat"), this.reissueHeartBeatData();
}, X.prototype.stopHeartBeatInterval = function() {
  clearInterval(this.heartbeat_interval_timer), this.heartbeat_interval_timer = null;
}, X.prototype.saveHeartBeatData = function(e) {
  let t = this.getPageLeaveProperties(), r = /* @__PURE__ */ new Date();
  t.$time = r, e === "is_first_heartbeat" && (t[this.option.event_duration] = 3.14);
  let i = this.sd.kit.buildData({
    type: "track",
    event: this.option.event_name_leave,
    properties: t
  });
  i.heartbeat_interval_time = this.heartbeat_interval_time, this.sd.store.saveObjectVal(`${this.storage_name}-${this.page_id}`, i);
}, X.prototype.delHeartBeatData = function(e) {
  this._.localStorage.isSupport() && this._.localStorage.remove(e || `${this.storage_name}-${this.page_id}`);
}, X.prototype.reissueHeartBeatData = function() {
  for (let e = window.localStorage.length - 1; e >= 0; e--) {
    let t = window.localStorage.key(e);
    if (t && t !== `${this.storage_name}-${this.page_id}` && t.indexOf(`${this.storage_name}-`) === 0) {
      let r = this.sd.store.readObjectVal(t);
      this._.isObject(r) && 1 * /* @__PURE__ */ new Date() - r.time > r.heartbeat_interval_time + 5e3 && (delete r.heartbeat_interval_time, r._flush_time = (/* @__PURE__ */ new Date()).getTime(), this.sd.kit.sendData(r), this.delHeartBeatData(t));
    }
  }
}, X.prototype.getPageLeaveProperties = function() {
  let e = (+/* @__PURE__ */ new Date() - this.start_time) / 1e3;
  (isNaN(e) || e < 0 || e > this.max_duration) && (e = 0), e = Number(e.toFixed(3));
  let t = this._.getReferrer(this.current_page_url), r = document.documentElement && document.documentElement.scrollTop || window.pageYOffset || document.body && document.body.scrollTop || 0;
  r = Math.round(r) || 0;
  let i = this.sd.getPresetProperties(), n = {
    $title: this.title,
    $url: this._.getURL(this.url),
    $url_path: this._.getURLPath(this._.URL(this.url).pathname),
    $referrer_host: t ? this._.getHostname(t) : "",
    $referrer: t,
    $viewport_position: r,
    $utm_source: i.$utm_source,
    $utm_medium: i.$utm_medium,
    $utm_term: i.$utm_term,
    $utm_content: i.$utm_content,
    $utm_campaign: i.$utm_campaign,
    $latest_utm_source: i.$latest_utm_source,
    $latest_utm_medium: i.$latest_utm_medium,
    $latest_utm_term: i.$latest_utm_term,
    $latest_utm_content: i.$latest_utm_content,
    $latest_utm_campaign: i.$latest_utm_campaign
  };
  return e !== 0 && (n[this.option.event_duration] = e), n = this._.extend(n, this.option.custom_props);
};
let cl = new X(), dl = ol(cl, "PageLeave", "sdkReady"), pl = "1.27.11";
function gl(e, t, r) {
  if (e.plugin_name = t, e.init) {
    let i = e.init;
    e.init = function(n, a) {
      if (fl(n, e, t), n.readyState && n.readyState.state >= 3 || !n.on)
        return l();
      function l() {
        i.call(e, n, a);
      }
      n.on(r, l);
    };
  }
  return e;
}
function fl(e, t, r) {
  function i(n, a) {
    e.logger ? e.logger.msg.apply(e.logger, a).module(`${r}` || "").level(n).log() : e.log && e.log.apply(e, a);
  }
  t.log = function() {
    i("log", arguments);
  }, t.warn = function() {
    i("warn", arguments);
  }, t.error = function() {
    i("error", arguments);
  };
}
function _l(e, t, r) {
  return gl(e, t, r), e.plugin_version = pl, e;
}
let Li = !1, hl = {
  init(e, t) {
    function r() {
      let i = 0, n = window.performance || window.webkitPerformance || window.msPerformance || window.mozPerformance, a = {
        $url: e._.getURL(),
        $title: document.title,
        $url_path: e._.getURLPath(),
        $referrer: e._.getReferrer(null, !0)
      };
      if (n ? (i = function(l) {
        let u = 0;
        return e._.isFunction(l.getEntriesByType) && (u = ((l.getEntriesByType("navigation") || [{}])[0] || {}).domContentLoadedEventEnd || 0), u;
      }(n) || function(l) {
        let u = 0;
        if (l.timing) {
          let p = l.timing;
          p.fetchStart !== 0 && e._.isNumber(p.fetchStart) && p.domContentLoadedEventEnd !== 0 && e._.isNumber(p.domContentLoadedEventEnd) ? u = p.domContentLoadedEventEnd - p.fetchStart : e.log(
            "performance 数据获取异常"
          );
        }
        return u;
      }(n), function(l, u) {
        if (l.getEntries && typeof l.getEntries == "function") {
          for (var p = l.getEntries(), b = null, w = 0; w < p.length; w++)
            "transferSize" in p[w] && (b += p[w].transferSize);
          e._.isNumber(b) && b >= 0 && b < 10737418240 && (u.$page_resource_size = Number((b / 1024).toFixed(3)));
        }
      }(n, a)) : e.log("浏览器未支持 performance API."), i > 0) {
        let l = e._.isObject(t) && t.max_duration || 1800;
        i = Number((i / 1e3).toFixed(3)), (!e._.isNumber(l) || l <= 0 || i <= l) && (a.event_duration = i);
      }
      Li || (e.track("$WebPageLoad", a), Li = !0), window.removeEventListener ? window.removeEventListener("load", r) : window.detachEvent && window.detachEvent("onload", r);
    }
    document.readyState == "complete" ? r() : window.addEventListener ? window.addEventListener("load", r) : window.attachEvent && window.attachEvent("onload", r);
  }
}, ml = _l(hl, "PageLoad", "sdkReady");
function yl(e, t) {
  if (e.type !== "track")
    return e;
  let r = t.sd, i = r._, n = r.saEvent.check, a = i.extend2Lev({ properties: {} }, e), l = t.customRegister, u = a.properties, p = a.event, b = {};
  return i.each(l, (w) => {
    if (i.isObject(w))
      i.includes(w.events, p) && n({ properties: w.properties }) && (b = i.extend(b, w.properties));
    else if (i.isFunction(w)) {
      let L = w({ event: p, properties: u, data: a });
      i.isObject(L) && !i.isEmptyObject(L) && n({ properties: L }) && (b = i.extend(b, L));
    }
  }), e.properties = i.extend(u, b), e;
}
function Tt() {
  this.sd = null, this.log = window.console && window.console.log || function() {
  }, this.customRegister = [];
}
Tt.prototype.init = function(e) {
  if (e) {
    this.sd = e, this._ = e._, this.log = e.log;
    let t = this;
    e.registerInterceptor("buildDataStage", {
      extendProps: {
        priority: 0,
        entry(r) {
          return yl(r, t);
        }
      }
    });
  } else
    this.log("神策JS SDK未成功引入");
}, Tt.prototype.register = function(e) {
  this.sd ? this._.isObject(e) && this._.isArray(e.events) && e.events.length > 0 && this._.isObject(e.properties) && !this._.isEmptyObject(e.properties) ? this.customRegister.push(e) : this.log("RegisterProperties: register 参数错误") : this.log("神策JS SDK未成功引入");
}, Tt.prototype.hookRegister = function(e) {
  this.sd ? this._.isFunction(e) ? this.customRegister.push(e) : this.log("RegisterProperties: hookRegister 参数错误") : this.log("神策JS SDK未成功引入");
};
let vl = "1.27.11";
function bl(e, t, r) {
  return e.plugin_version = vl, e;
}
Tt.prototype.plugin_name = "RegisterProperties";
let wl = new Tt(), Sl = bl(wl), $l = "1.27.11";
function kl(e, t, r) {
  if (e.plugin_name = t, e.init) {
    let i = e.init;
    e.init = function(n, a) {
      if (Fl(n, e, t), n.readyState && n.readyState.state >= 3 || !n.on)
        return l();
      function l() {
        i.call(e, n, a);
      }
      n.on(r, l);
    };
  }
  return e;
}
function Fl(e, t, r) {
  function i(n, a) {
    e.logger ? e.logger.msg.apply(e.logger, a).module(`${r}` || "").level(n).log() : e.log && e.log.apply(e, a);
  }
  t.log = function() {
    i("log", arguments);
  }, t.warn = function() {
    i("warn", arguments);
  }, t.error = function() {
    i("error", arguments);
  };
}
function Cl(e, t, r) {
  return kl(e, t, r), e.plugin_version = $l, e;
}
let bt, sa, Bt = window.console && window.console.log || function() {
};
function El(e) {
  try {
    if (e.event !== "$pageview" && (!e.type || e.type.slice(0, 7) !== "profile")) {
      let t = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0, r = document.documentElement.scrollHeight || 0, i = { $page_height: Math.max(t, r) || 0 };
      e.properties = bt._.extend(e.properties || {}, i);
    }
  } catch {
    Bt("页面高度获取异常。");
  }
  return sa.call(bt.kit, e);
}
let Dl = {
  init(e) {
    Bt = (bt = e) && bt.log || Bt, e && e.kit && e.kit.buildData ? (sa = bt.kit.buildData, bt.kit.buildData = El, Bt(
      "RegisterPropertyPageHeight 插件初始化完成"
    )) : Bt(
      "RegisterPropertyPageHeight 插件初始化失败,当前主sdk不支持 RegisterPropertyPageHeight 插件，请升级主sdk"
    );
  }
}, Pl = Cl(
  Dl,
  "RegisterPropertyPageHeight",
  "sdkReady"
), Al = "1.27.11";
function Bl(e, t, r) {
  if (e.plugin_name = t, e.init) {
    let i = e.init;
    e.init = function(n, a) {
      if (Il(n, e, t), n.readyState && n.readyState.state >= 3 || !n.on)
        return l();
      function l() {
        i.call(e, n, a);
      }
      n.on(r, l);
    };
  }
  return e;
}
function Il(e, t, r) {
  function i(n, a) {
    e.logger ? e.logger.msg.apply(e.logger, a).module(`${r}` || "").level(n).log() : e.log && e.log.apply(e, a);
  }
  t.log = function() {
    i("log", arguments);
  }, t.warn = function() {
    i("warn", arguments);
  }, t.error = function() {
    i("error", arguments);
  };
}
function jl(e, t, r) {
  return Bl(e, t, r), e.plugin_version = Al, e;
}
let Me, Nl = {
  getPart(e) {
    let t = this.option.length;
    if (t) {
      for (let r = 0; r < t; r++)
        if (e.includes(this.option[r].part_url))
          return !0;
    }
    return !1;
  },
  getPartHash(e) {
    let t = this.option.length;
    if (t) {
      for (let r = 0; r < t; r++)
        if (e.includes(this.option[r].part_url))
          return this.option[r].after_hash;
    }
    return !1;
  },
  getCurrenId() {
    let e = this.store.getDistinctId() || "", t = this.store.getFirstId() || "";
    return this._.urlSafeBase64 && this._.urlSafeBase64.encode ? e = e ? this._.urlSafeBase64.trim(
      this._.urlSafeBase64.encode(this._.base64Encode(e))
    ) : "" : this._.rot13obfs && (e = e ? this._.rot13obfs(e) : ""), encodeURIComponent(t ? `f${e}` : `d${e}`);
  },
  rewriteUrl(e, t) {
    let r = this, i = /([^?#]+)(\?[^#]*)?(#.*)?/.exec(e), n = "";
    if (i) {
      let a, l = i[1] || "", u = i[2] || "", p = i[3] || "", b = `_sasdk=${this.getCurrenId()}`, w = function(L) {
        let P = L.split("&"), we = [];
        return r._.each(P, (J) => {
          J.includes("_sasdk=") ? we.push(b) : we.push(J);
        }), we.join("&");
      };
      return this.getPartHash(e) ? (a = p.indexOf("_sasdk"), n = p.includes("?") ? a > -1 ? `${l + u}#${p.substring(1, a)}${w(p.substring(a, p.length))}` : `${l + u + p}&${b}` : `${l + u}#${p.substring(1)}?${b}`) : (a = u.indexOf("_sasdk"), n = /^\?(\w)+/.test(u) ? a > -1 ? `${l}?${w(u.substring(1))}${p}` : `${l + u}&${b}${p}` : `${l}?${b}${p}`), t && (t.href = n), n;
    }
  },
  getUrlId() {
    let e = location.href.match(/_sasdk=([aufd][^?#&=]+)/);
    if (this._.isArray(e) && e[1]) {
      let t = decodeURIComponent(e[1]);
      return !t || t.substring(0, 1) !== "f" && t.substring(0, 1) !== "d" || (this._.urlSafeBase64 && this._.urlSafeBase64.isUrlSafeBase64 && this._.urlSafeBase64.isUrlSafeBase64(t) ? t = t.substring(0, 1) + this._.base64Decode(
        this._.urlSafeBase64.decode(t.substring(1))
      ) : this._.rot13defs && (t = t.substring(0, 1) + this._.rot13defs(t.substring(1)))), t;
    }
    return "";
  },
  setRefferId(e) {
    let t = this.store.getDistinctId(), r = this.getUrlId();
    if (r && r !== "") {
      let i = r.substring(0, 1) === "a" || r.substring(0, 1) === "d";
      (r = r.substring(1)) !== t && (i ? (this.sd.identify(r, !0), this.store.getFirstId() && this.sd.saEvent.send(
        {
          original_id: r,
          distinct_id: t,
          type: "track_signup",
          event: "$SignUp",
          properties: {}
        },
        null
      )) : this.store.getFirstId() && !e.re_login || this.sd.login(r));
    }
  },
  addListen() {
    let e = this, t = function(r) {
      let i, n, a = r.target, l = a.tagName.toLowerCase(), u = a.parentNode;
      if (l === "a" && a.href || u && u.tagName && u.tagName.toLowerCase() === "a" && u.href) {
        l === "a" && a.href ? (i = a.href, n = a) : (i = u.href, n = u);
        let p = e._.URL(i).protocol;
        p !== "http:" && p !== "https:" || e.getPart(i) && e.rewriteUrl(i, n);
      }
    };
    e._.addEvent(document, "mousedown", t), window.PointerEvent && "maxTouchPoints" in window.navigator && window.navigator.maxTouchPoints >= 0 && e._.addEvent(document, "pointerdown", t);
  },
  init(e, t) {
    this.sd = e, this._ = e._, this.store = e.store, this.para = e.para, this._.isObject(t) && this._.isArray(t.linker) && t.linker.length > 0 ? (this.setRefferId(t), this.addListen(), this.option = t.linker, this.option = function(r) {
      for (var i = r.length, n = [], a = 0; a < i; a++)
        /[A-Z0-9]+\./i.test(r[a].part_url) && Object.prototype.toString.call(r[a].after_hash) == "[object Boolean]" ? n.push(r[a]) : e.log(
          `linker 配置的第 ${a + 1} 项格式不正确，请检查参数格式！`
        );
      return n;
    }(this.option)) : e.log(
      "请配置打通域名参数！"
    );
  }
}, Ol = jl(Nl, "SiteLinker", "sdkReady"), Tl = "utm_source utm_medium utm_campaign utm_content utm_term", Ll = "1.27.11";
function xl(e, t, r) {
  if (e.plugin_name = t, e.init) {
    let i = e.init;
    e.init = function(n, a) {
      if (Ul(n, e, t), n.readyState && n.readyState.state >= 3 || !n.on)
        return l();
      function l() {
        i.call(e, n, a);
      }
      n.on(r, l);
    };
  }
  return e;
}
function Ul(e, t, r) {
  function i(n, a) {
    e.logger ? e.logger.msg.apply(e.logger, a).module(`${r}` || "").level(n).log() : e.log && e.log.apply(e, a);
  }
  t.log = function() {
    i("log", arguments);
  }, t.warn = function() {
    i("warn", arguments);
  }, t.error = function() {
    i("error", arguments);
  };
}
function Rl(e, t, r) {
  return xl(e, t, r), e.plugin_version = Ll, e;
}
let Hl = {
  init(e) {
    e && !Me && (Me = e).registerInterceptor("businessStage", {
      getUtmData: {
        priority: 0,
        entry() {
          return function() {
            let t = Tl.split(" "), r = "", i = {};
            return Me._.isArray(Me.para.source_channel) && Me.para.source_channel.length > 0 && (t = t.concat(Me.para.source_channel), t = Me._.unique(t)), Me._.each(t, (n) => {
              (r = Me._.getQueryParam(location.href, n)).length && (i[n] = r);
            }), i;
          }();
        }
      }
    });
  }
}, xi = Rl(Hl, "Utm", "sdkAfterInitPara"), Jl = "1.27.11";
function Ml(e, t, r) {
  if (e.plugin_name = t, e.init) {
    let i = e.init;
    e.init = function(n, a) {
      if (ql(n, e, t), n.readyState && n.readyState.state >= 3 || !n.on)
        return l();
      function l() {
        i.call(e, n, a);
      }
      n.on(r, l);
    };
  }
  return e;
}
function ql(e, t, r) {
  function i(n, a) {
    e.logger ? e.logger.msg.apply(e.logger, a).module(`${r}` || "").level(n).log() : e.log && e.log.apply(e, a);
  }
  t.log = function() {
    i("log", arguments);
  }, t.warn = function() {
    i("warn", arguments);
  }, t.error = function() {
    i("error", arguments);
  };
}
function Kl(e, t, r) {
  return Ml(e, t, r), e.plugin_version = Jl, e;
}
let si = !1, Dr = null, Vl = {
  init(e) {
    (Dr = e).disableSDK = Wl, Dr.enableSDK = zl, Dr.getDisabled = Xl;
  }
};
function Wl() {
  si = !0;
}
function zl() {
  si = !1;
}
function Xl() {
  return si;
}
let K, ut, Ui = Kl(Vl, "DisableSDK", "sdkInitAPI"), Yl = "1.27.11";
function Zl(e, t, r) {
  return e.plugin_version = Yl, e;
}
function Gl(e) {
  let t = e, r = "";
  r = K.para.debug_mode_url.includes("?") ? `${K.para.debug_mode_url}&${K.kit.encodeTrackData(e)}` : `${K.para.debug_mode_url}?${K.kit.encodeTrackData(e)}`, ut.ajax({
    url: r,
    type: "GET",
    cors: !0,
    header: { "Dry-Run": String(K.para.debug_mode_upload) },
    success(i) {
      ut.isEmptyObject(i) === !0 ? alert(`debug数据发送成功${t}`) : alert(
        `debug失败 错误原因${JSON.stringify(i)}`
      );
    }
  });
}
function Ql(e, t) {
  if (K.para.debug_mode === !0) {
    let r = e.data;
    e.callback, Gl(JSON.stringify(r)), t.cancellationToken.stop();
  }
  return e;
}
function eu() {
  K.para.debug_mode === !0 && (K.para.debug_mode_upload = K.para.debug_mode_upload || !1, ut.isString(K.para.debug_mode_url) || (ut.isString(K.para.server_url) ? K.para.debug_mode_url = K.para.server_url.replace(
    "sa.gif",
    "debug"
  ) : ut.isArray(K.para.server_url) && ut.isString(K.para.server_url[0]) ? K.para.debug_mode_url = K.para.server_url[0].replace(
    "sa.gif",
    "debug"
  ) : K.para.debug_mode = !1));
}
function tu() {
  K.on("sdkInitPara", () => {
    eu();
  }), K.on("sdkAfterInitPara", () => {
    K.registerInterceptor("sendDataStage", {
      send: { priority: 30, entry: Ql }
    });
  });
}
let ce, ct, ru = {
  plugin_name: "DebugSender",
  init(e) {
    ut = (K = e)._, tu();
  }
}, Ri = Zl(ru), iu = "1.27.11";
function nu(e, t, r) {
  return e.plugin_version = iu, e;
}
function au(e, t) {
  if (ct.isObject(ce.para.jsapp) && !ce.para.jsapp.isOnline && typeof ce.para.jsapp.setData == "function") {
    let r = e;
    delete r.callback, r = JSON.stringify(r), ce.para.jsapp.setData(r), t.cancellationToken.stop();
  }
  return e;
}
function su() {
  ce.on("sdkAfterInitAPI", () => {
    ct.isObject(ce.commonWays) && (ce.commonWays.setOnlineState = ou), ce.registerInterceptor("sendDataStage", {
      send: { priority: 40, entry: au }
    });
  });
}
function ou(e) {
  if (e === !0 && ct.isObject(ce.para.jsapp) && typeof ce.para.jsapp.getData == "function") {
    ce.para.jsapp.isOnline = !0;
    let t = ce.para.jsapp.getData();
    ct.isArray(t) && t.length > 0 && ct.each(t, (r) => {
      ct.isJSONString(r) && ce.kit.sendData(JSON.parse(r));
    });
  } else
    ce.para.jsapp.isOnline = !1;
}
let de, tt, lu = {
  plugin_name: "JsappSender",
  init(e) {
    ct = (ce = e)._, su();
  }
}, Hi = nu(lu), uu = "1.27.11";
function cu(e, t, r) {
  return e.plugin_version = uu, e;
}
let ir = null;
function du(e, t) {
  return !de.para.app_js_bridge && de.para.batch_send && tt.localStorage.isSupport() && localStorage.length < de.para.batch_send.storage_length && (ir.add(e.data), t.cancellationToken.stop()), e;
}
function pu() {
  let e = { datasend_timeout: 6e3, send_interval: 6e3, storage_length: 200 };
  tt.localStorage.isSupport() && tt.isSupportCors() && typeof localStorage == "object" ? de.para.batch_send === !0 ? de.para.batch_send = tt.extend({}, e) : typeof de.para.batch_send == "object" && (de.para.batch_send = tt.extend({}, e, de.para.batch_send)) : de.para.batch_send = !1;
}
function gu() {
  de.on("sdkInitPara", () => {
    pu();
  }), de.on("sdkAfterInitPara", () => {
    !de.para.app_js_bridge && de.para.batch_send && tt.localStorage.isSupport() && (ir || (ir = new tt.BatchSend()), ir.batchInterval(), de.registerInterceptor("sendDataStage", {
      send: { priority: 100, entry: du }
    }));
  });
}
let Le, Ge, fu = {
  plugin_name: "BatchSender",
  init(e) {
    tt = (de = e)._, gu();
  }
}, Ji = cu(fu), _u = "1.27.11";
function hu(e, t, r) {
  return e.plugin_version = _u, e;
}
function Mi(e) {
  new Ge.BeaconSend(e).start();
}
function mu(e, t) {
  let r = null, i = null;
  if (Ge.isObject(e.config) && (r = e.config.send_type, i = Ge.optimizeServerUrl(e.config.server_url)), (r === "beacon" || !r && Le.para.send_type === "beacon") && Ge.isSupportBeaconSend()) {
    let n = i || e.server_url;
    e.server_url = n, e.data = Le.kit.encodeTrackData(e.data), Ge.isArray(n) && n.length ? Ge.each(n, (a) => {
      e.callback = null, e.server_url = a, Mi(e);
    }) : typeof n == "string" && n !== "" ? Mi(e) : Le.log(
      "当前 server_url 为空或不正确，只在控制台打印日志，network 中不会发数据，请配置正确的 server_url！"
    ), t.cancellationToken.stop();
  }
  return e;
}
function yu() {
  Le.para.send_type !== "beacon" || Ge.isSupportBeaconSend() || (Le.para.send_type = Le.DEFAULT_SEND_TYPE);
}
function vu() {
  Le.on("sdkInitPara", () => {
    yu();
  }), Le.on("sdkAfterInitPara", () => {
    Le.registerInterceptor("sendDataStage", {
      send: { priority: 110, entry: mu }
    });
  });
}
let xe, Qe, bu = {
  plugin_name: "BeaconSender",
  init(e) {
    Ge = (Le = e)._, vu();
  }
}, qi = hu(bu), wu = "1.27.11";
function Su(e, t, r) {
  return e.plugin_version = wu, e;
}
function Ki(e) {
  new Qe.AjaxSend(e).start();
}
function $u(e, t) {
  let r = null, i = null;
  if (Qe.isObject(e.config) && (r = e.config.send_type, i = Qe.optimizeServerUrl(e.config.server_url)), (r === "ajax" || !r && xe.para.send_type === "ajax") && Qe.isSupportCors()) {
    let n = i || e.server_url;
    e.server_url = n, e.data = xe.kit.encodeTrackData(e.data), Qe.isArray(n) && n.length ? Qe.each(n, (a) => {
      e.callback = null, e.server_url = a, Ki(e);
    }) : typeof n == "string" && n !== "" ? Ki(e) : xe.log(
      "当前 server_url 为空或不正确，只在控制台打印日志，network 中不会发数据，请配置正确的 server_url！"
    ), t.cancellationToken.stop();
  }
  return e;
}
function ku() {
  xe.para.send_type !== "ajax" || Qe.isSupportCors() || (xe.para.send_type = xe.DEFAULT_SEND_TYPE);
}
function Fu() {
  xe.on("sdkInitPara", () => {
    ku();
  }), xe.on("sdkAfterInitPara", () => {
    xe.registerInterceptor("sendDataStage", {
      send: { priority: 120, entry: $u }
    });
  });
}
let Ne, wt, Cu = {
  plugin_name: "AjaxSender",
  init(e) {
    Qe = (xe = e)._, Fu();
  }
}, Vi = Su(Cu), Eu = "1.27.11";
function Du(e, t, r) {
  return e.plugin_version = Eu, e;
}
function Wi(e, t) {
  let r = Ne.kit.encodeTrackData(t);
  return e.includes("?") ? `${e}&${r}` : `${e}?${r}`;
}
function zi(e) {
  new wt.ImageSend(e).start();
}
function Pu(e, t) {
  let r = null;
  wt.isObject(e.config) && (r = wt.optimizeServerUrl(e.config.server_url));
  let i = r || e.server_url, n = e.data;
  e.server_url = i, wt.isArray(i) && i.length ? wt.each(i, (a) => {
    a && (e.data = Wi(a, n), e.callback = null, e.server_url = a, zi(e));
  }) : typeof i == "string" && i !== "" ? (e.data = Wi(i, n), zi(e)) : Ne.logger && Ne.logger.msg(
    "当前 server_url 为空或不正确，只在控制台打印日志，network 中不会发数据，请配置正确的 server_url！"
  ).level("warn").log(), t.cancellationToken.stop();
}
function Au() {
  Ne.para.send_type !== "image" && Ne.para.send_type !== "ajax" && Ne.para.send_type !== "beacon" && (Ne.para.send_type = "image");
}
function Bu() {
  Ne.on("sdkInitPara", () => {
    Au();
  }), Ne.on("sdkAfterInitPara", () => {
    Ne.registerInterceptor("sendDataStage", {
      send: { priority: 130, entry: Pu }
    });
  });
}
let Iu = {
  plugin_name: "ImageSender",
  init(e) {
    wt = (Ne = e)._, Bu();
  }
}, Xi = Du(Iu);
function ju(e, t, r) {
  return e.plugin_name = t, e;
}
function Nu(e, t, r) {
  return ju(e, t, r), e.plugin_version = _r, e;
}
let re = null, be = null, Lt = [], Ou = {
  init(e) {
    e && (be = (re = e)._, re.logger && re.logger.appendWriter(Tu), re.on && re.on("sdkAfterInitPara", () => {
      for (let t = 0; t < Lt.length; t++) oa(Lt[t]);
      Lt = null;
    }), re.on && re.on("sdkInitAPI", () => {
      re.enableLocalLog = Ru, re.disableLocalLog = Hu;
    }));
  }
}, Yi = Nu(Ou, "ConsoleLogger");
function Tu(e) {
  Lt !== null ? Lt.push(e) : oa(e);
}
function oa(e) {
  try {
    if (e.level === "log" && la() || e.level === "warn" && Lu() || e.level === "error" && xu())
      return void Pr(e);
  } catch {
  }
}
function la() {
  return !!li() || re.para.show_log === !0 || be.isObject(re.para.show_log) && re.para.show_log.level === "log";
}
function Lu() {
  return !!li() || la() || be.isObject(re.para.show_log) && re.para.show_log.level === "warn";
}
function xu() {
  return !!li() || !be.isObject(re.para.show_log) || re.para.show_log.level !== "none";
}
function Pr(e) {
  let t = e.content, r = be.isObject(t[0]) ? be.formatJsonString(t[0]) : t[0], i = Uu(e);
  t[0] = i + (i.length > 0 ? ": " : "") + r;
  try {
    console && (be.isFunction(console[e.level]) ? console[e.level].apply(console, t) : be.isObject(console[e.level]) && console[e.level](t[0]));
  } catch {
  }
}
function Uu(e) {
  let t = "", r = "", i = re.para.show_log;
  return be.isObject(i) && i.show_brand === !1 || (t += e.brand), be.isObject(i) && i.show_level === !1 || (t += (t.length > 0 ? "-" : "") + e.level), t.length > 0 && (t = `[${t}]`), be.isObject(i) && i.show_module === !1 || (r = e.module), t + r;
}
let oi = "sensorsdata_jssdk_debug";
function Ru() {
  be.sessionStorage.isSupport() && sessionStorage.setItem(oi, "true");
}
function Hu() {
  be.sessionStorage.isSupport() && sessionStorage.removeItem(oi);
}
function li() {
  return be.sessionStorage.isSupport() && sessionStorage.getItem(oi) === "true";
}
s.modules = s.modules || {};
for (var Zi = [
  Yi,
  so,
  Pi,
  ji,
  Io,
  Jo,
  Oi,
  Ti,
  dl,
  ml,
  Sl,
  Pl,
  Ol,
  xi,
  Ui,
  Ri,
  Hi,
  Ji,
  qi,
  Vi,
  Xi
], Gi = [
  Yi,
  eo,
  xi,
  Ui,
  Hi,
  Ri,
  Pi,
  Oi,
  ji,
  Ti,
  Ji,
  qi,
  Vi,
  Xi
], dt = 0; dt < Zi.length; dt++) {
  var yt = Zi[dt];
  s._.isString(yt.plugin_name) ? s.modules[yt.plugin_name] = yt : s._.isArray(yt.plugin_name) && s._.each(yt.plugin_name, (e) => {
    s.modules[e] = yt;
  });
}
for (dt = 0; dt < Gi.length; dt++) s.use(Gi[dt]);
let ua = s;
try {
  typeof window.sensorsDataAnalytic201505 == "string" ? (s.para = window[sensorsDataAnalytic201505].para, s._q = window[sensorsDataAnalytic201505]._q, window[sensorsDataAnalytic201505] = s, window.sensorsDataAnalytic201505 = s, s.init()) : typeof window.sensorsDataAnalytic201505 > "u" ? window.sensorsDataAnalytic201505 = s : ua = window.sensorsDataAnalytic201505;
} catch (e) {
  B(e);
}
let ca = ua;
ca.DEFAULT_SEND_TYPE = "image";
const qu = {
  mounted(e, t) {
    const r = Array.isArray(t.value) ? t.value : [t.value], i = Mu(), n = [];
    r.forEach(({ event: a, params: l, trigger: u }) => {
      if (a && (u = u || "click", u === "click" || !u)) {
        const p = () => {
          i.track(a, l || {});
        };
        e.addEventListener("click", p, !0), n.push(() => e.removeEventListener("click", p, !0));
      }
    }), e.__trackHandlers__ = n;
  },
  unmounted(e) {
    const t = e.__trackHandlers__;
    t && (t.forEach((r) => r()), delete e.__trackHandlers__);
  }
}, Ar = ca;
function Qi(e, t) {
  return Object.fromEntries(
    Object.entries(e).map(([r, i]) => [`${t}${r}`, i])
  );
}
class Ju {
  constructor(t, r) {
    return this.sensors = t, this.options = r, new Proxy(this, {
      get: (i, n, a) => {
        if (Reflect.has(i, n))
          return Reflect.get(i, n, a);
        if (Reflect.has(i.sensors, n)) {
          const l = i.sensors[n];
          return typeof l == "function" ? l.bind(i.sensors) : l;
        }
      }
    });
  }
  track(t, r) {
    this.sensors.track(`${this.options.project}_${t}`, r || {});
  }
  registerPage(t) {
    this.sensors.registerPage(Qi(t || {}, `${this.options.project}_`));
  }
  setProfile(t) {
    this.sensors.setProfile(Qi(t || {}, `${this.options.project}_`));
  }
}
let gr = null;
function Ku(e) {
  return Ar.use("PageLeave", {
    event_duration: "page_duration",
    event_name_view: `${e.project}_page_view`,
    event_name_leave: `${e.project}_page_leave`,
    urlPropertyMap: e.pageLeave.urlPropertyMap,
    isCollectUrl: e.pageLeave.isCollectUrl
  }), Ar.init({ ...e.sensorsConfig }), gr = new Ju(Ar, e), gr;
}
function Mu() {
  if (!gr)
    throw new Error("Analytics not initialized");
  return gr;
}
export {
  Mu as getAnalytics,
  Ku as initAnalytics,
  qu as vAnalytics
};
