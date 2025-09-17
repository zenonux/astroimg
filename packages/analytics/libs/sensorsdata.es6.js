let logFn
let sd = {}
function isFunction(e) {
  if (!e)
    return !1
  let t = Object.prototype.toString.call(e)
  return t == '[object Function]' || t == '[object AsyncFunction]'
}
function now() {
  return Date.now && isFunction(Date.now) ? Date.now() : new Date().getTime()
}
((sd.DEFAULT_SEND_TYPE = 'image'),
(function () {
  let e = { function: !0, object: !0 }
  let t = (e[typeof window] && window) || this
  let r = t.JSON
  let n = t.JSON3
  let i = !1
  var a = (function s(r, n) {
    (r || (r = new t.Object()), n || (n = new t.Object()))
    let i = r.Number || t.Number
    let a = r.String || t.String
    let o = r.Object || t.Object
    let l = r.Date || t.Date
    let d = r.SyntaxError || t.SyntaxError
    let c = r.TypeError || t.TypeError
    let u = r.Math || t.Math
    let p = r.JSON || t.JSON
    if (typeof p == 'object' && p) {
      return (
        (n.stringify = p.stringify),
        (n.parse = p.parse),
        (n.runInContext = s),
        n
      )
    }
    let g
    let f = o.prototype
    let _ = f.toString
    let h = f.hasOwnProperty
    function m(e, t) {
      try {
        e()
      }
      catch (r) {
        t && t()
      }
    }
    let v = new l(-0xC782B5B800CEC)
    function y(e) {
      if (y[e] != null)
        return y[e]
      let t
      if (e == 'bug-string-char-index') {
        t = 'a'[0] != 'a'
      }
      else if (e == 'json') {
        t
          = y('json-stringify') && y('date-serialization') && y('json-parse')
      }
      else if (e == 'date-serialization') {
        if ((t = y('json-stringify') && v)) {
          var r = n.stringify
          m(() => {
            t
              = r(new l(-864e13)) == '"-271821-04-20T00:00:00.000Z"'
                && r(new l(864e13)) == '"+275760-09-13T00:00:00.000Z"'
                && r(new l(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"'
                && r(new l(-1)) == '"1969-12-31T23:59:59.999Z"'
          })
        }
      }
      else {
        let s
        let o = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}'
        if (e == 'json-stringify') {
          let d = typeof (r = n.stringify) == 'function';
          (d
            && (((s = function () {
              return 1
            }).toJSON = s),
            m(
              () => {
                d
                  = r(0) === '0'
                    && r(new i()) === '0'
                    && r(new a()) == '""'
                    && r(_) === g
                    && r(g) === g
                    && r() === g
                      && r(s) === '1'
                        && r([s]) == '[1]'
                        && r([g]) == '[null]'
                      && r(null) == 'null'
                      && r([g, _, null]) == '[null,null,null]'
                      && r({ a: [s, !0, !1, null, '\0\b\n\f\r\t'] }) == o
                      && r(null, s) === '1'
                      && r([1, 2], null, 1) == '[\n 1,\n 2\n]'
              },
              () => {
                d = !1
              },
            )),
          (t = d))
        }
        if (e == 'json-parse') {
          let c
          let u = n.parse;
          (typeof u == 'function'
            && m(
              () => {
                u('0') !== 0
                || u(!1)
                || ((s = u(o)),
                (c = s.a.length == 5 && s.a[0] === 1)
                && (m(() => {
                  c = !u('"\t"')
                }),
                c
                  && m(() => {
                      c = u('01') !== 1
                    }),
                c
                  && m(() => {
                      c = u('1.') !== 1
                    })))
              },
              () => {
                c = !1
              },
            ),
          (t = c))
        }
      }
      return (y[e] = !!t)
    }
    if (
      (m(() => {
        v
          = v.getUTCFullYear() == -109252
            && v.getUTCMonth() === 0
            && v.getUTCDate() === 1
            && v.getUTCHours() == 10
            && v.getUTCMinutes() == 37
            && v.getUTCSeconds() == 6
            && v.getUTCMilliseconds() == 708
      }),
      (y['bug-string-char-index']
        = y['date-serialization']
          = y.json
            = y['json-stringify']
              = y['json-parse']
                = null),
      !y('json'))
    ) {
      let b = y('bug-string-char-index')
      let S = function (t, r) {
        let n
        let i
        let a
        let s = 0
        for (a in (((n = function () {
          this.valueOf = 0
        }).prototype.valueOf = 0),
        (i = new n())))
          h.call(i, a) && s++
        return (
          (n = i = null),
          s
            ? (S = function (e, t) {
                let r
                let n
                let i = _.call(e) == '[object Function]'
                for (r in e) {
                  (i && r == 'prototype')
                  || !h.call(e, r)
                  || (n = r === 'constructor')
                  || t(r)
                }
                (n || h.call(e, (r = 'constructor'))) && t(r)
              })
            : ((i = [
                'valueOf',
                'toString',
                'toLocaleString',
                'propertyIsEnumerable',
                'isPrototypeOf',
                'hasOwnProperty',
                'constructor',
              ]),
              (S = function (t, r) {
                let n
                let a
                let s = _.call(t) == '[object Function]'
                let o
                  = (!s
                    && typeof t.constructor != 'function'
                    && e[typeof t.hasOwnProperty]
                    && t.hasOwnProperty)
                  || h
                for (n in t)
                  (s && n == 'prototype') || !o.call(t, n) || r(n)
                for (a = i.length; (n = i[--a]);) o.call(t, n) && r(n)
              })),
          S(t, r)
        )
      }
      if (!y('json-stringify') && !y('date-serialization')) {
        let $ = {
          92: '\\\\',
          34: '\\"',
          8: '\\b',
          12: '\\f',
          10: '\\n',
          13: '\\r',
          9: '\\t',
        }
        let w = function (e, t) {
          return (`000000${t || 0}`).slice(-e)
        }
        let k = function (e) {
          let t, r, n, i, a, s, o, l, d
          if (v) {
            t = function (e) {
              ((r = e.getUTCFullYear()),
              (n = e.getUTCMonth()),
              (i = e.getUTCDate()),
              (s = e.getUTCHours()),
              (o = e.getUTCMinutes()),
              (l = e.getUTCSeconds()),
              (d = e.getUTCMilliseconds()))
            }
          }
          else {
            let c = u.floor
            let p = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
            let g = function (e, t) {
              return (
                p[t]
                + 365 * (e - 1970)
                + c((e - 1969 + (t = +(t > 1))) / 4)
                - c((e - 1901 + t) / 100)
                + c((e - 1601 + t) / 400)
              )
            }
            t = function (e) {
              for (
                i = c(e / 864e5), r = c(i / 365.2425) + 1970 - 1;
                g(r + 1, 0) <= i;
                r++
              );
              for (n = c((i - g(r, 0)) / 30.42); g(r, n + 1) <= i; n++);
              ((i = 1 + i - g(r, n)),
              (s = c((a = ((e % 864e5) + 864e5) % 864e5) / 36e5) % 24),
              (o = c(a / 6e4) % 60),
              (l = c(a / 1e3) % 60),
              (d = a % 1e3))
            }
          }
          return (k = function (e) {
            return (
              e > -1 / 0 && e < 1 / 0
                ? (t(e),
                  (e
                    = `${r <= 0 || r >= 1e4
                      ? (r < 0 ? '-' : '+') + w(6, r < 0 ? -r : r)
                      : w(4, r)
                    }-${
                      w(2, n + 1)
                    }-${
                      w(2, i)
                    }T${
                      w(2, s)
                    }:${
                      w(2, o)
                    }:${
                      w(2, l)
                    }.${
                      w(3, d)
                    }Z`),
                  (r = n = i = s = o = l = d = null))
                : (e = null),
              e
            )
          })(e)
        }
        if (y('json-stringify') && !y('date-serialization')) {
          function P(e) {
            return k(this)
          }
          let O = n.stringify
          n.stringify = function (e, t, r) {
            let n = l.prototype.toJSON
            l.prototype.toJSON = P
            let i = O(e, t, r)
            return ((l.prototype.toJSON = n), i)
          }
        }
        else {
          let I = function (e) {
            let t = e.charCodeAt(0)
            let r = $[t]
            return r || `\\u00${w(2, t.toString(16))}`
          }
          let j = /[\x00-\x1F\x22\x5C]/g
          let L = function (e) {
            return (
              (j.lastIndex = 0),
              `"${j.test(e) ? e.replace(j, I) : e}"`
            )
          }
          let C = function (e, t, r, n, i, a, s) {
            let o, d, u, p, f, h, v, y, b
            if (
              (m(() => {
                o = t[e]
              }),
              typeof o == 'object'
              && o
              && (o.getUTCFullYear
                && _.call(o) == '[object Date]'
                && o.toJSON === l.prototype.toJSON
                ? (o = k(o))
                : typeof o.toJSON == 'function' && (o = o.toJSON(e))),
              r && (o = r.call(t, e, o)),
              o == g)
            ) {
              return o === g ? o : 'null'
            }
            switch (
              ((d = typeof o) == 'object' && (u = _.call(o)), u || d)
            ) {
              case 'boolean':
              case '[object Boolean]':
                return `${o}`
              case 'number':
              case '[object Number]':
                return o > -1 / 0 && o < 1 / 0 ? `${o}` : 'null'
              case 'string':
              case '[object String]':
                return L(`${o}`)
            }
            if (typeof o == 'object') {
              for (v = s.length; v--;) {
                if (s[v] === o)
                  throw c()
              }
              if (
                (s.push(o),
                (p = []),
                (y = a),
                (a += i),
                u == '[object Array]')
              ) {
                for (h = 0, v = o.length; h < v; h++) {
                  ((f = C(h, o, r, n, i, a, s)),
                  p.push(f === g ? 'null' : f))
                }
                b = p.length
                  ? i
                    ? `[\n${a}${p.join(`,\n${a}`)}\n${y}]`
                    : `[${p.join(',')}]`
                  : '[]'
              }
              else {
                (S(n || o, (e) => {
                  let t = C(e, o, r, n, i, a, s)
                  t !== g && p.push(`${L(e)}:${i ? ' ' : ''}${t}`)
                }),
                (b = p.length
                  ? i
                    ? `{\n${a}${p.join(`,\n${a}`)}\n${y}}`
                    : `{${p.join(',')}}`
                  : '{}'))
              }
              return (s.pop(), b)
            }
          }
          n.stringify = function (t, r, n) {
            let i, a, s, o
            if (e[typeof r] && r) {
              if ((o = _.call(r)) == '[object Function]') {
                a = r
              }
              else if (o == '[object Array]') {
                s = {}
                for (var l, d = 0, c = r.length; d < c;) {
                  ((l = r[d++]),
                  ((o = _.call(l)) != '[object String]'
                    && o != '[object Number]')
                  || (s[l] = 1))
                }
              }
            }
            if (n) {
              if ((o = _.call(n)) == '[object Number]') {
                if ((n -= n % 1) > 0) {
                  for (n > 10 && (n = 10), i = ''; i.length < n;) i += ' '
                }
              }
              else {
                o == '[object String]'
                && (i = n.length <= 10 ? n : n.slice(0, 10))
              }
            }
            return C('', (((l = {})[''] = t), l), a, s, i, '', [])
          }
        }
      }
      if (!y('json-parse')) {
        let D
        let E
        let x = a.fromCharCode
        let A = {
          92: '\\',
          34: '"',
          47: '/',
          98: '\b',
          116: '\t',
          110: '\n',
          102: '\f',
          114: '\r',
        }
        let N = function () {
          throw ((D = E = null), d())
        }
        let T = function () {
          for (var e, t, r, n, i, a = E, s = a.length; D < s;) {
            switch ((i = a.charCodeAt(D))) {
              case 9:
              case 10:
              case 13:
              case 32:
                D++
                break
              case 123:
              case 125:
              case 91:
              case 93:
              case 58:
              case 44:
                return ((e = b ? a.charAt(D) : a[D]), D++, e)
              case 34:
                for (e = '@', D++; D < s;) {
                  if ((i = a.charCodeAt(D)) < 32) {
                    N()
                  }
                  else if (i == 92) {
                    switch ((i = a.charCodeAt(++D))) {
                      case 92:
                      case 34:
                      case 47:
                      case 98:
                      case 116:
                      case 110:
                      case 102:
                      case 114:
                        ((e += A[i]), D++)
                        break
                      case 117:
                        for (t = ++D, r = D + 4; D < r; D++) {
                          ((i = a.charCodeAt(D)) >= 48 && i <= 57)
                          || (i >= 97 && i <= 102)
                          || (i >= 65 && i <= 70)
                          || N()
                        }
                        e += x(`0x${a.slice(t, D)}`)
                        break
                      default:
                        N()
                    }
                  }
                  else {
                    if (i == 34)
                      break
                    for (
                      i = a.charCodeAt(D), t = D;
                      i >= 32 && i != 92 && i != 34;

                    )
                      i = a.charCodeAt(++D)
                    e += a.slice(t, D)
                  }
                }
                if (a.charCodeAt(D) == 34)
                  return (D++, e)
                N()
              default:
                if (
                  ((t = D),
                  i == 45 && ((n = !0), (i = a.charCodeAt(++D))),
                  i >= 48 && i <= 57)
                ) {
                  for (
                    i == 48
                    && (i = a.charCodeAt(D + 1)) >= 48
                    && i <= 57
                    && N(),
                    n = !1;
                    D < s && (i = a.charCodeAt(D)) >= 48 && i <= 57;
                    D++
                  );
                  if (a.charCodeAt(D) == 46) {
                    for (
                      r = ++D;
                      r < s && !((i = a.charCodeAt(r)) < 48 || i > 57);
                      r++
                    );
                    (r == D && N(), (D = r))
                  }
                  if ((i = a.charCodeAt(D)) == 101 || i == 69) {
                    for (
                      ((i = a.charCodeAt(++D)) != 43 && i != 45) || D++,
                      r = D;
                      r < s && !((i = a.charCodeAt(r)) < 48 || i > 57);
                      r++
                    );
                    (r == D && N(), (D = r))
                  }
                  return +a.slice(t, D)
                }
                n && N()
                var o = a.slice(D, D + 4)
                if (o == 'true')
                  return ((D += 4), !0)
                if (o == 'fals' && a.charCodeAt(D + 4) == 101)
                  return ((D += 5), !1)
                if (o == 'null')
                  return ((D += 4), null)
                N()
            }
          }
          return '$'
        }
        let U = function (e) {
          let t, r
          if ((e == '$' && N(), typeof e == 'string')) {
            if ((b ? e.charAt(0) : e[0]) == '@')
              return e.slice(1)
            if (e == '[') {
              for (t = []; (e = T()) != ']';) {
                (r
                  ? e == ','
                    ? (e = T()) == ']' && N()
                    : N()
                  : (r = !0),
                e == ',' && N(),
                t.push(U(e)))
              }
              return t
            }
            if (e == '{') {
              for (t = {}; (e = T()) != '}';) {
                (r
                  ? e == ','
                    ? (e = T()) == '}' && N()
                    : N()
                  : (r = !0),
                (e != ','
                  && typeof e == 'string'
                  && (b ? e.charAt(0) : e[0]) == '@'
                  && T() == ':')
                || N(),
                (t[e.slice(1)] = U(T())))
              }
              return t
            }
            N()
          }
          return e
        }
        let R = function (e, t, r) {
          let n = B(e, t, r)
          n === g ? delete e[t] : (e[t] = n)
        }
        var B = function (e, t, r) {
          let n
          let i = e[t]
          if (typeof i == 'object' && i) {
            if (_.call(i) == '[object Array]') {
              for (n = i.length; n--;) R(_, S, i)
            }
            else {
              S(i, (e) => {
                R(i, e, r)
              })
            }
          }
          return r.call(e, t, i)
        }
        n.parse = function (e, t) {
          let r, n
          return (
            (D = 0),
            (E = `${e}`),
            (r = U(T())),
            T() != '$' && N(),
            (D = E = null),
            t && _.call(t) == '[object Function]'
              ? B((((n = {})[''] = r), n), '', t)
              : r
          )
        }
      }
    }
    return ((n.runInContext = s), n)
  })(
    t,
    (t.JSON3 = {
      noConflict() {
        return (
          i || ((i = !0), (t.JSON = r), (t.JSON3 = n), (r = n = null)),
          a
        )
      },
    }),
  )
  t.JSON
    ? ((t.JSON.parse = a.parse), (t.JSON.stringify = a.stringify))
    : (t.JSON = { parse: a.parse, stringify: a.stringify })
}.call(window)),
(function (e) {
  if (e.atob) {
    try {
      e.atob(' ')
    }
    catch (a) {
      e.atob
        = ((t = e.atob),
        ((r = function (e) {
          return t(String(e).replace(/[\t\n\f\r ]+/g, ''))
        }).original = t),
        r)
    }
  }
  else {
    var t
    var r
    let n = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
    let i
      = /^(?:[A-Z\d+/]{4})*?(?:[A-Z\d+/]{2}(?:==)?|[A-Z\d+/]{3}=?)?$/i;
    ((e.btoa = function (e) {
      e = String(e)
      for (var t, r, i, a, s = '', o = 0, l = e.length % 3; o < e.length;) {
        if (
          (r = e.charCodeAt(o++)) > 255
          || (i = e.charCodeAt(o++)) > 255
          || (a = e.charCodeAt(o++)) > 255
        ) {
          return ''
        }
        s
          += n.charAt(((t = (r << 16) | (i << 8) | a) >> 18) & 63)
            + n.charAt((t >> 12) & 63)
            + n.charAt((t >> 6) & 63)
            + n.charAt(63 & t)
      }
      return l ? s.slice(0, l - 3) + '==='.substring(l) : s
    }),
    (e.atob = function (e) {
      if (((e = String(e).replace(/[\t\n\f\r ]+/g, '')), !i.test(e)))
        return ''
      e += '=='.slice(2 - (3 & e.length))
      for (var t, r, a, s = '', o = 0; o < e.length;) {
        ((t
          = (n.indexOf(e.charAt(o++)) << 18)
            | (n.indexOf(e.charAt(o++)) << 12)
            | ((r = n.indexOf(e.charAt(o++))) << 6)
            | (a = n.indexOf(e.charAt(o++)))),
        (s
          += r === 64
            ? String.fromCharCode((t >> 16) & 255)
            : a === 64
              ? String.fromCharCode((t >> 16) & 255, (t >> 8) & 255)
              : String.fromCharCode(
                  (t >> 16) & 255,
                  (t >> 8) & 255,
                  255 & t,
                )))
      }
      return s
    }))
  }
})(window))
let logger = {
  setup(e) {
    logFn = e
  },
  log() {
    (logFn || (console && console.log) || function () {}).apply(
      null,
      arguments,
    )
  },
}
var _localStorage = {
  get(e) {
    return window.localStorage.getItem(e)
  },
  parse(e) {
    let t
    try {
      t = JSON.parse(_localStorage.get(e)) || null
    }
    catch (r) {
      logger.log(r)
    }
    return t
  },
  set(e, t) {
    try {
      window.localStorage.setItem(e, t)
    }
    catch (r) {
      logger.log(r)
    }
  },
  remove(e) {
    window.localStorage.removeItem(e)
  },
  isSupport() {
    let e = !0
    try {
      let t = '__local_store_support__'
      let r = 'testIsSupportStorage';
      (_localStorage.set(t, r),
      _localStorage.get(t) !== r && (e = !1),
      _localStorage.remove(t))
    }
    catch (n) {
      e = !1
    }
    return e
  },
}
function isObject(e) {
  return e != null && Object.prototype.toString.call(e) == '[object Object]'
}
let getRandomBasic = (function () {
  let e = new Date().getTime()
  return function (t) {
    return Math.ceil(((e = (9301 * e + 49297) % 233280) / 233280) * t)
  }
})()
function getRandom() {
  if (typeof Uint32Array == 'function') {
    let e = ''
    if (
      (typeof crypto != 'undefined'
        ? (e = crypto)
        : typeof msCrypto != 'undefined' && (e = msCrypto),
      isObject(e) && e.getRandomValues)
    ) {
      let t = new Uint32Array(1)
      return e.getRandomValues(t)[0] / 2 ** 32
    }
  }
  return getRandomBasic(1e19) / 1e19
}
function safeJSONParse(e) {
  let t = null
  try {
    t = JSON.parse(e)
  }
  catch (r) {}
  return t
}
function ConcurrentStorage(e, t) {
  ((this.lockGetPrefix = e || 'lock-get-prefix'),
  (this.lockSetPrefix = t || 'lock-set-prefix'))
}
function isValidListener(e) {
  return (
    typeof e == 'function'
    || (!(!e || typeof e != 'object') && isValidListener(e.listener))
  )
}
function EventEmitter() {
  this._events = {}
}
function _decodeURIComponent(e) {
  let t = e
  try {
    t = decodeURIComponent(e)
  }
  catch (r) {
    t = e
  }
  return t
}
function getNullObj() {
  function e() {}
  return typeof Object.create != 'function'
    ? ((e.prototype = null), new e())
    : Object.create(null)
}
function getURLSearchParams(e) {
  e = e || ''
  for (
    var t = getNullObj(), r = e.substring(1).split('&'), n = 0;
    n < r.length;
    n++
  ) {
    let i = r[n].indexOf('=')
    if (i !== -1) {
      let a = r[n].substring(0, i)
      let s = r[n].substring(i + 1);
      ((a = _decodeURIComponent(a)),
      (s = _decodeURIComponent(s)),
      a !== '__proto__'
      && a !== 'constructor'
      && a !== 'prototype'
      && (t[a] = s))
    }
  }
  return t
}
function isString(e) {
  return Object.prototype.toString.call(e) == '[object String]'
}
function trim(e) {
  return e.replace(/^\s+|\s+$/g, '')
}
function urlParse(e) {
  let t = function (e) {
    ((this._fields = {
      Username: 4,
      Password: 5,
      Port: 7,
      Protocol: 2,
      Host: 6,
      Path: 8,
      URL: 0,
      QueryString: 9,
      Fragment: 10,
    }),
    (this._values = {}),
    (this._regex
      = /^((\w+):\/\/)?((\w+):?(\w+)?@)?([^/?:]+):?(\d+)?([^?#]+)?\??([^#]+)?#?(\w*)/),
    void 0 !== e && this._parse(e))
  }
  return (
    (t.prototype.setUrl = function (e) {
      this._parse(e)
    }),
    (t.prototype._initValues = function () {
      for (let e in this._fields) this._values[e] = ''
    }),
    (t.prototype.addQueryString = function (e) {
      if (typeof e != 'object')
        return !1
      let t = this._values.QueryString || ''
      for (let r in e) {
        t = new RegExp(`${r}[^&]+`).test(t)
          ? t.replace(new RegExp(`${r}[^&]+`), `${r}=${e[r]}`)
          : t.slice(-1) === '&'
            ? `${t + r}=${e[r]}`
            : t === ''
              ? `${r}=${e[r]}`
              : `${t}&${r}=${e[r]}`
      }
      this._values.QueryString = t
    }),
    (t.prototype.getUrl = function () {
      let e = ''
      return (
        (e += this._values.Origin),
        (e += this._values.Port ? `:${this._values.Port}` : ''),
        (e += this._values.Path),
        (e += this._values.QueryString ? `?${this._values.QueryString}` : ''),
        (e += this._values.Fragment ? `#${this._values.Fragment}` : '')
      )
    }),
    (t.prototype._parse = function (e) {
      this._initValues()
      let t = this._regex.exec(e)
      t || logger.log('URLParser::_parse -> Invalid URL')
      let r = e.split('#')
      let n = r[0]
      let i = r.slice(1).join('#')
      for (let a in ((t = this._regex.exec(n)), this._fields)) {
        typeof t[this._fields[a]] != 'undefined'
        && (this._values[a] = t[this._fields[a]])
      }
      ((this._values.Hostname = this._values.Host.replace(/:\d+$/, '')),
      (this._values.Origin
        = `${this._values.Protocol}://${this._values.Hostname}`),
      (this._values.Fragment = i))
    }),
    new t(e)
  )
}
function _URL(e) {
  let t
  let r = {}
  if (
    typeof window.URL == 'function'
    && (function () {
      try {
        return (
          new URL('http://modernizr.com/').href === 'http://modernizr.com/'
        )
      }
      catch (e) {
        return !1
      }
    })()
  ) {
    (r = new URL(e)).searchParams
    || (r.searchParams
      = ((t = getURLSearchParams(r.search)),
      {
        get(e) {
          return t[e]
        },
      }))
  }
  else {
    (isString(e) || (e = String(e)), (e = trim(e)))
    if (!1 === /^https?:\/\/.+/.test(e))
      return void logger.log('Invalid URL')
    let n = urlParse(e);
    ((r.hash = n._values.Fragment),
    (r.host = n._values.Host
      ? n._values.Host + (n._values.Port ? `:${n._values.Port}` : '')
      : ''),
    (r.href = n._values.URL),
    (r.password = n._values.Password),
    (r.pathname = n._values.Path),
    (r.port = n._values.Port),
    (r.search = n._values.QueryString ? `?${n._values.QueryString}` : ''),
    (r.username = n._values.Username),
    (r.hostname = n._values.Hostname),
    (r.protocol = n._values.Protocol ? `${n._values.Protocol}:` : ''),
    (r.origin = n._values.Origin
      ? n._values.Origin + (n._values.Port ? `:${n._values.Port}` : '')
      : ''),
    (r.searchParams = (function () {
      let e = getURLSearchParams(`?${n._values.QueryString}`)
      return {
        get(t) {
          return e[t]
        },
      }
    })()))
  }
  return r
}
((ConcurrentStorage.prototype.get = function (e, t, r, n) {
  if (!e)
    throw new Error('key is must');
  ((t = t || 1e4), (r = r || 1e3), (n = n || function () {}))
  let i = this.lockGetPrefix + e
  let a = _localStorage.get(i)
  let s = String(getRandom())
  if (
    a
    && (a = safeJSONParse(a) || { randomNum: 0, expireTime: 0 }).expireTime > now()
  ) {
    return n(null)
  }
  (_localStorage.set(
    i,
    JSON.stringify({ randomNum: s, expireTime: now() + t }),
  ),
  setTimeout(() => {
    (a = safeJSONParse(_localStorage.get(i)) || {
      randomNum: 0,
      expireTime: 0,
    }) && a.randomNum === s
      ? (n(_localStorage.get(e)),
        _localStorage.remove(e),
        _localStorage.remove(i))
      : n(null)
  }, r))
}),
(ConcurrentStorage.prototype.set = function (e, t, r, n, i) {
  if (!e || !t)
    throw new Error('key and val is must');
  ((r = r || 1e4), (n = n || 1e3), (i = i || function () {}))
  let a = this.lockSetPrefix + e
  let s = _localStorage.get(a)
  let o = String(getRandom())
  if (
    s
    && (s = safeJSONParse(s) || { randomNum: 0, expireTime: 0 }).expireTime
    > now()
  ) {
    return i({ status: 'fail', reason: 'This key is locked' })
  }
  (_localStorage.set(
    a,
    JSON.stringify({ randomNum: o, expireTime: now() + r }),
  ),
  setTimeout(() => {
    (s = safeJSONParse(_localStorage.get(a)) || {
      randomNum: 0,
      expireTime: 0,
    }).randomNum === o
      ? _localStorage.set(e, t) && i({ status: 'success' })
      : i({ status: 'fail', reason: 'This key is locked' })
  }, n))
}),
(EventEmitter.prototype.on = function (e, t) {
  if (!e || !t)
    return !1
  if (!isValidListener(t))
    throw new Error('listener must be a function')
  this._events[e] = this._events[e] || []
  let r = typeof t == 'object'
  return (this._events[e].push(r ? t : { listener: t, once: !1 }), this)
}),
(EventEmitter.prototype.prepend = function (e, t) {
  if (!e || !t)
    return !1
  if (!isValidListener(t))
    throw new Error('listener must be a function')
  this._events[e] = this._events[e] || []
  let r = typeof t == 'object'
  return (this._events[e].unshift(r ? t : { listener: t, once: !1 }), this)
}),
(EventEmitter.prototype.prependOnce = function (e, t) {
  return this.prepend(e, { listener: t, once: !0 })
}),
(EventEmitter.prototype.once = function (e, t) {
  return this.on(e, { listener: t, once: !0 })
}),
(EventEmitter.prototype.off = function (e, t) {
  let r = this._events[e]
  if (!r)
    return !1
  if (typeof t == 'number') {
    r.splice(t, 1)
  }
  else if (typeof t == 'function') {
    for (let n = 0, i = r.length; n < i; n++)
      r[n] && r[n].listener === t && r.splice(n, 1)
  }
  return this
}),
(EventEmitter.prototype.emit = function (e, t) {
  let r = this._events[e]
  if (!r)
    return !1
  for (let n = 0; n < r.length; n++) {
    let i = r[n]
    i && (i.listener.call(this, t || {}), i.once && this.off(e, n))
  }
  return this
}),
(EventEmitter.prototype.removeAllListeners = function (e) {
  e && this._events[e] ? (this._events[e] = []) : (this._events = {})
}),
(EventEmitter.prototype.listeners = function (e) {
  return e && typeof e == 'string' ? this._events[e] : this._events
}))
let UUID = (function () {
  let e = function () {
    for (var e = 1 * new Date(), t = 0; e == 1 * new Date();) t++
    return e.toString(16) + t.toString(16)
  }
  return function () {
    let t = String(screen.height * screen.width)
    t
      = t && /\d{5,}/.test(t)
        ? t.toString(16)
        : String(31242 * getRandom())
            .replace('.', '')
            .slice(0, 8)
    let r
      = `${e()
      }-${
        getRandom().toString(16).replace('.', '')
      }-${
        (function () {
          let e
          let t
          let r = navigator.userAgent
          let n = []
          let i = 0
          function a(e, t) {
            let r
            let i = 0
            for (r = 0; r < t.length; r++) i |= n[r] << (8 * r)
            return e ^ i
          }
          for (e = 0; e < r.length; e++) {
            ((t = r.charCodeAt(e)),
            n.unshift(255 & t),
            n.length >= 4 && ((i = a(i, n)), (n = [])))
          }
          return (n.length > 0 && (i = a(i, n)), i.toString(16))
        })()
      }-${
        t
      }-${
        e()}`
    return (
      r
      || (String(getRandom()) + String(getRandom()) + String(getRandom())).slice(
        2,
        15,
      )
    )
  }
})()
function isElement(e) {
  return !(!e || e.nodeType !== 1)
}
function isUndefined(e) {
  return void 0 === e
}
function isArray(e) {
  return Array.isArray && isFunction(isArray)
    ? Array.isArray(e)
    : Object.prototype.toString.call(e) === '[object Array]'
}
function ry(e) {
  return new DomElementInfo(e)
}
var DomElementInfo = function (e) {
  this.ele = e
}
let siblings = function (e, t) {
  for (var r = []; e; e = e.nextSibling)
    e.nodeType === 1 && e !== t && r.push(e)
  return r
}
function addEvent(e, t, r, n) {
  function i(e) {
    return (
      e
      && ((e.preventDefault = i.preventDefault),
      (e.stopPropagation = i.stopPropagation),
      (e._getPath = i._getPath)),
      e
    )
  }
  ((i._getPath = function () {
    return (
      this.path
      || (this.composedPath && this.composedPath())
      || ry(this.target).getParents()
    )
  }),
  (i.preventDefault = function () {
    this.returnValue = !1
  }),
  (i.stopPropagation = function () {
    this.cancelBubble = !0
  }));
  (function (e, t, r) {
    if ((n === undefined && t === 'click' && (n = !0), e && e.addEventListener)) {
      e.addEventListener(
        t,
        function (e) {
          ((e._getPath = i._getPath), r.call(this, e))
        },
        n,
      )
    }
    else {
      let a = `on${t}`
      let s = e[a]
      e[a] = (function (e, t, r, n) {
        return function (a) {
          if (!(a = a || i(window.event)))
            return undefined
          a.target = a.srcElement
          let s
          let o
          let l = !0
          return (
            typeof r == 'function' && (s = r(a)),
            (o = t.call(e, a)),
            n !== 'beforeunload'
              ? ((!1 !== s && !1 !== o) || (l = !1), l)
              : void 0
          )
        }
      })(e, r, s, t)
    }
  }).apply(null, arguments)
}
function addHashEvent(e) {
  let t = 'pushState' in window.history ? 'popstate' : 'hashchange'
  addEvent(window, t, e)
}
function xhr(e) {
  if (e) {
    return typeof window.XMLHttpRequest != 'undefined'
      && 'withCredentials' in new XMLHttpRequest()
      ? new XMLHttpRequest()
      : typeof XDomainRequest != 'undefined'
        ? new XDomainRequest()
        : null
  }
  if (typeof window.XMLHttpRequest != 'undefined')
    return new XMLHttpRequest()
  if (window.ActiveXObject) {
    try {
      return new ActiveXObject('Msxml2.XMLHTTP')
    }
    catch (t) {
      try {
        return new ActiveXObject('Microsoft.XMLHTTP')
      }
      catch (t) {
        logger.log(t)
      }
    }
  }
}
function each(e, t, r) {
  if (typeof e == 'object' && typeof e.length == 'number' && e.length > 0) {
    if (Array.prototype.forEach && e.forEach) {
      e.forEach(t, r)
    }
    else {
      for (let n = 0; n < e.length; n++) t.call(r, e[n], n, e)
    }
  }
  else if (Object.prototype.toString.call(e) === '[object Object]') {
    for (let i in e)
      Object.prototype.hasOwnProperty.call(e, i) && t.call(r, e[i], i, e)
  }
}
function extend(e) {
  for (let t = 1; t < arguments.length; t++) {
    let r = arguments[t]
    if (Object.prototype.toString.call(r) === '[object Object]') {
      for (let n in r) {
        Object.prototype.hasOwnProperty.call(r, n)
        && void 0 !== r[n]
        && (e[n] = r[n])
      }
    }
  }
  return e
}
function ajax(e) {
  function t(e) {
    if (!e)
      return ''
    try {
      return JSON.parse(e)
    }
    catch (t) {
      return {}
    }
  }
  ((e.timeout = e.timeout || 2e4),
  (e.credentials = typeof e.credentials == 'undefined' || e.credentials))
  let r = xhr(e.cors)
  if (!r)
    return !1
  e.type || (e.type = e.data ? 'POST' : 'GET')
  let n
  let i = (e = extend({ success() {}, error() {} }, e))
    .success
  let a = e.error;
  ((e.success = function (e) {
    (i(e), n && (clearTimeout(n), (n = null)))
  }),
  (e.error = function (e) {
    (a(e), n && (clearTimeout(n), (n = null)))
  }),
  (n = setTimeout(() => {
    !(function () {
      try {
        r && typeof r == 'object' && r.abort && r.abort()
      }
      catch (t) {
        logger.log(t)
      }
      n
      && (clearTimeout(n),
      (n = null),
      e.error && e.error(),
      (r.onreadystatechange = null),
      (r.onload = null),
      (r.onerror = null))
    })()
  }, e.timeout)),
  typeof XDomainRequest != 'undefined'
  && r instanceof XDomainRequest
  && ((r.onload = function () {
    (e.success && e.success(t(r.responseText)),
    (r.onreadystatechange = null),
    (r.onload = null),
    (r.onerror = null))
  }),
  (r.onerror = function () {
    (e.error && e.error(t(r.responseText), r.status),
    (r.onreadystatechange = null),
    (r.onerror = null),
    (r.onload = null))
  })),
  (r.onreadystatechange = function () {
    try {
      r.readyState == 4
      && ((r.status >= 200 && r.status < 300) || r.status == 304
        ? e.success(t(r.responseText))
        : e.error(t(r.responseText), r.status),
      (r.onreadystatechange = null),
      (r.onload = null))
    }
    catch (n) {
      ((r.onreadystatechange = null), (r.onload = null))
    }
  }),
  r.open(e.type, e.url, !0))
  try {
    (e.credentials && (r.withCredentials = !0),
    isObject(e.header)
    && each(e.header, (e, t) => {
      r.setRequestHeader && r.setRequestHeader(t, e)
    }),
    e.data
    && (e.cors
      || (r.setRequestHeader
        && r.setRequestHeader('X-Requested-With', 'XMLHttpRequest')),
    e.contentType === 'application/json'
      ? r.setRequestHeader
      && r.setRequestHeader(
        'Content-type',
        'application/json; charset=UTF-8',
      )
      : r.setRequestHeader
        && r.setRequestHeader(
          'Content-type',
          'application/x-www-form-urlencoded',
        )))
  }
  catch (s) {
    logger.log(s)
  }
  r.send(e.data || null)
}
function map(e, t) {
  let r = []
  return e == null
    ? r
    : Array.prototype.map && e.map === Array.prototype.map
      ? e.map(t)
      : (each(e, (e, n, i) => {
          r.push(t(e, n, i))
        }),
        r)
}
function base64Decode(e) {
  let t = []
  try {
    t = map(atob(e).split(''), (e) => {
      return `%${(`00${e.charCodeAt(0).toString(16)}`).slice(-2)}`
    })
  }
  catch (r) {
    t = []
  }
  try {
    return decodeURIComponent(t.join(''))
  }
  catch (r) {
    return t.join('')
  }
}
function base64Encode(e) {
  let t = ''
  try {
    t = btoa(
      encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, (e, t) => {
        return String.fromCharCode(`0x${t}`)
      }),
    )
  }
  catch (r) {
    t = e
  }
  return t
}
function bindReady(e, t) {
  t = t || window
  let r = !1
  let n = !0
  let i = t.document
  let a = i.documentElement
  let s = i.addEventListener
  let o = s ? 'addEventListener' : 'attachEvent'
  let l = s ? 'removeEventListener' : 'detachEvent'
  let d = s ? '' : 'on'
  let c = function (n) {
    (n.type == 'readystatechange' && i.readyState != 'complete')
    || ((n.type == 'load' ? t : i)[l](d + n.type, c, !1),
    !r && (r = !0) && e.call(t, n.type || n))
  }
  let u = function () {
    try {
      a.doScroll('left')
    }
    catch (e) {
      return void setTimeout(u, 50)
    }
    c('poll')
  }
  if (i.readyState == 'complete') {
    e.call(t, 'lazy')
  }
  else {
    if (!s && a.doScroll) {
      try {
        n = !t.frameElement
      }
      catch (p) {
        logger.log(p)
      }
      n && u()
    }
    (i[o](`${d}DOMContentLoaded`, c, !1),
    i[o](`${d}readystatechange`, c, !1),
    t[o](`${d}load`, c, !1))
  }
}
DomElementInfo.prototype = {
  addClass(e) {
    return (
      !(` ${this.ele.className} `).includes(` ${e} `)
      && (this.ele.className
        = this.ele.className + (this.ele.className === '' ? '' : ' ') + e),
      this
    )
  },
  removeClass(e) {
    let t = ` ${this.ele.className} `
    return (
      t.includes(` ${e} `)
      && (this.ele.className = t.replace(` ${e} `, ' ').slice(1, -1)),
      this
    )
  },
  hasClass(e) {
    return (` ${this.ele.className} `).includes(` ${e} `)
  },
  attr(e, t) {
    return typeof e == 'string' && isUndefined(t)
      ? this.ele.getAttribute(e)
      : (typeof e == 'string' && ((t = String(t)), this.ele.setAttribute(e, t)),
        this)
  },
  offset() {
    let e = this.ele.getBoundingClientRect()
    if (e.width || e.height) {
      let t = this.ele.ownerDocument.documentElement
      return {
        top: e.top + window.pageYOffset - t.clientTop,
        left: e.left + window.pageXOffset - t.clientLeft,
      }
    }
    return { top: 0, left: 0 }
  },
  getSize() {
    if (!window.getComputedStyle)
      return { width: this.ele.offsetWidth, height: this.ele.offsetHeight }
    try {
      let e = this.ele.getBoundingClientRect()
      return { width: e.width, height: e.height }
    }
    catch (t) {
      return { width: 0, height: 0 }
    }
  },
  getStyle(e) {
    return this.ele.currentStyle
      ? this.ele.currentStyle[e]
      : this.ele.ownerDocument.defaultView
          .getComputedStyle(this.ele, null)
          .getPropertyValue(e)
  },
  wrap(e) {
    let t = document.createElement(e)
    return (
      this.ele.parentNode.insertBefore(t, this.ele),
      t.appendChild(this.ele),
      ry(t)
    )
  },
  getCssStyle(e) {
    let t = this.ele.style.getPropertyValue(e)
    if (t)
      return t
    let r = null
    if (
      (typeof window.getMatchedCSSRules == 'function'
        && (r = window.getMatchedCSSRules(this.ele)),
      !r || !isArray(r))
    ) {
      return null
    }
    for (let n = r.length - 1; n >= 0; n--) {
      if ((t = r[n].style.getPropertyValue(e)))
        return t
    }
  },
  sibling(e, t) {
    for (; (e = e[t]) && e.nodeType !== 1;);
    return e
  },
  next() {
    return this.sibling(this.ele, 'nextSibling')
  },
  prev() {
    return this.sibling(this.ele, 'previousSibling')
  },
  siblings() {
    return siblings((this.ele.parentNode || {}).firstChild, this.ele)
  },
  children() {
    return siblings(this.ele.firstChild)
  },
  parent() {
    let e = this.ele.parentNode
    return ry((e = e && e.nodeType !== 11 ? e : null))
  },
  previousElementSibling() {
    let e = this.ele
    if ('previousElementSibling' in document.documentElement)
      return ry(e.previousElementSibling)
    for (; (e = e.previousSibling);) {
      if (e.nodeType === 1)
        return ry(e)
    }
    return ry(null)
  },
  getSameTypeSiblings() {
    for (
      var e = this.ele,
        t = e.parentNode,
        r = e.tagName.toLowerCase(),
        n = [],
        i = 0;
      i < t.children.length;
      i++
    ) {
      let a = t.children[i]
      a.nodeType === 1
      && a.tagName.toLowerCase() === r
      && n.push(t.children[i])
    }
    return n
  },
  getParents() {
    try {
      let e = this.ele
      if (!isElement(e))
        return []
      let t = [e]
      if (e === null || e.parentElement === null)
        return []
      for (; e.parentElement !== null;) ((e = e.parentElement), t.push(e))
      return t
    }
    catch (r) {
      return []
    }
  },
}
let cookie = {
  get(e) {
    for (
      let t = `${e}=`, r = document.cookie.split(';'), n = 0;
      n < r.length;
      n++
    ) {
      for (var i = r[n]; i.charAt(0) == ' ';) i = i.substring(1, i.length)
      if (i.indexOf(t) == 0)
        return _decodeURIComponent(i.substring(t.length, i.length))
    }
    return null
  },
  set(e, t, r, n, i, a) {
    let s = a
    let o = ''
    let l = ''
    let d = ''
    if ((r = r == null ? 73e3 : r) !== 0) {
      let c = new Date();
      (String(r).slice(-1) === 's'
        ? c.setTime(c.getTime() + 1e3 * Number(String(r).slice(0, -1)))
        : c.setTime(c.getTime() + 24 * r * 60 * 60 * 1e3),
      (o = `; expires=${c.toGMTString()}`))
    }
    function u(e) {
      return !!e && e.replace(/\r\n/g, '')
    }
    (n && n !== '' && (d = `; SameSite=${n}`), i && (l = '; secure'))
    let p = ''
    let g = ''
    let f = '';
    (e && (p = u(e)),
    t && (g = u(t)),
    s && (f = u(s)),
    p
    && g
    && (document.cookie
      = `${p}=${encodeURIComponent(g)}${o}; path=/${f}${d}${l}`))
  },
  remove(e, t) {
    this.set(e, '1', -1, t)
  },
  isSupport(e, t, r, n, i) {
    ((e = e || 'cookie_support_test'), (t = t || '1'))
    let a = this
    return (
      navigator.cookieEnabled
      && (a.set(e, t, r, n, i), a.get(e) === t && (a.remove(e), !0))
    )
  },
}
function coverExtend(e) {
  return (
    each(Array.prototype.slice.call(arguments, 1), (t) => {
      for (let r in t) void 0 !== t[r] && void 0 === e[r] && (e[r] = t[r])
    }),
    e
  )
}
function _decodeURI(e) {
  let t = e
  try {
    t = decodeURI(e)
  }
  catch (r) {
    t = e
  }
  return t
}
function dfmapping(e) {
  let t = 't6KJCZa5pDdQ9khoEM3Tj70fbP2eLSyc4BrsYugARqFIw1mzlGNVXOHiWvxUn8'
  let r = t.length - 1
  let n = {}
  let i = 0
  for (i = 0; i < t.length; i++) n[t.charAt(i)] = t.charAt(r - i)
  let a = ''
  for (i = 0; i < e.length; i++)
    e.charAt(i) in n ? (a += n[e.charAt(i)]) : (a += e.charAt(i))
  return a
}
function isDate(e) {
  return Object.prototype.toString.call(e) == '[object Date]'
}
function formatDate(e) {
  function t(e) {
    return e < 10 ? `0${e}` : e
  }
  return (
    `${e.getFullYear()
    }-${
      t(e.getMonth() + 1)
    }-${
      t(e.getDate())
    } ${
      t(e.getHours())
    }:${
      t(e.getMinutes())
    }:${
      t(e.getSeconds())
    }.${
      t(e.getMilliseconds())}`
  )
}
function encodeDates(e) {
  return (
    each(e, (t, r) => {
      isDate(t)
        ? (e[r] = formatDate(t))
        : isObject(t) && (e[r] = encodeDates(t))
    }),
    e
  )
}
function extend2Lev(e) {
  return (
    each(Array.prototype.slice.call(arguments, 1), (t) => {
      for (let r in t) {
        void 0 !== t[r]
          && (isObject(t[r]) && isObject(e[r])
            ? extend(e[r], t[r])
            : (e[r] = t[r]))
      }
    }),
    e
  )
}
function filter(e, t, r) {
  let n = Object.prototype.hasOwnProperty
  if (e.filter)
    return e.filter(t)
  for (var i = [], a = 0; a < e.length; a++) {
    if (n.call(e, a)) {
      let s = e[a]
      t.call(r, s, a, e) && i.push(s)
    }
  }
  return i
}
function formatJsonString(e) {
  try {
    return JSON.stringify(e, null, '  ')
  }
  catch (t) {
    return JSON.stringify(e)
  }
}
function getSafeHostname(e) {
  return typeof e == 'string' && e.match(/^[a-z0-9\u4E00-\u9FA5\-.]+$/i)
    ? e
    : ''
}
function getCookieTopLevelDomain(e, t, r) {
  t = t || 'domain_test'
  let n = getSafeHostname((e = e || location.hostname))
  let i = n.split('.')
  if (isArray(i) && i.length >= 2 && !/^(\d+\.)+\d+$/.test(n)) {
    for (let a = `.${i.splice(i.length - 1, 1)}`; i.length > 0;) {
      if (
        ((a = `.${i.splice(i.length - 1, 1)}${a}`),
        cookie.set(t, 'true', 0, null, r, `; domain=${a}`),
        document.cookie.includes(`${t}=true`))
      ) {
        return (cookie.set(t, 'true', '-1s', null, r, `; domain=${a}`), a)
      }
    }
  }
  return ''
}
function getDomBySelector(e) {
  if (!isString(e))
    return null
  let t
  let r = e.split('>')
  return (t = (function n(e) {
    let t
    let i = r.shift()
    if (!i)
      return e
    try {
      t = (function (e, t) {
        let r
        if ((e = trim(e)) === 'body')
          return document.getElementsByTagName('body')[0]
        if (e.indexOf('#') === 0) {
          ((e = e.slice(1)), (r = document.getElementById(e)))
        }
        else if (e.includes(':nth-of-type')) {
          let n = e.split(':nth-of-type')
          if (!n[0] || !n[1])
            return null
          let i = n[0]
          let a = n[1].match(/\((\d+)\)/)
          if (!a || !a[1])
            return null
          let s = Number(a[1])
          if (!(isElement(t) && t.children && t.children.length > 0))
            return null
          for (let o = t.children, l = 0; l < o.length; l++) {
            if (
              isElement(o[l])
              && o[l].tagName.toLowerCase() === i
              && --s == 0
            ) {
              r = o[l]
              break
            }
          }
          if (s > 0)
            return null
        }
        return r || null
      })(i, e)
    }
    catch (a) {
      logger.log(a)
    }
    return t && isElement(t) ? n(t) : null
  })()) && isElement(t)
    ? t
    : null
}
function getElementContent(e, t) {
  let r = ''
  let n = ''
  return (
    e.textContent
      ? (r = trim(e.textContent))
      : e.innerText && (r = trim(e.innerText)),
    r
    && (r = r
      .replace(/[\r\n]/g, ' ')
      .replace(/ +/g, ' ')
      .substring(0, 255)),
    (n = r || ''),
    (t !== 'input' && t !== 'INPUT') || (n = e.value || ''),
    n
  )
}
function getHostname(e, t) {
  (t && typeof t == 'string') || (t = 'hostname\u89E3\u6790\u5F02\u5E38')
  let r = null
  try {
    r = _URL(e).hostname
  }
  catch (n) {
    logger.log(
      'getHostname\u4F20\u5165\u7684url\u53C2\u6570\u4E0D\u5408\u6CD5\uFF01',
    )
  }
  return r || t
}
function getIOSVersion() {
  try {
    let e = navigator.appVersion.match(/OS (\d+)[._](\d+)[._]?(\d+)?/)
    return e && e[1] ? Number.parseInt(e[1], 10) : ''
  }
  catch (t) {
    return ''
  }
}
function getQueryParam(e, t) {
  ((t = t.replace(/\[/, '\\[').replace(/\]/, '\\]')),
  (e = _decodeURIComponent(e)))
  let r = new RegExp(`[\\?&]${t}=([^&#]*)`).exec(e)
  return r === null || (r && typeof r[1] != 'string' && r[1].length)
    ? ''
    : _decodeURIComponent(r[1])
}
function getQueryParamsFromUrl(e) {
  let t = {}
  let r = e.split('?')[1] || ''
  return (r && (t = getURLSearchParams(`?${r}`)), t)
}
function mediaQueriesSupported() {
  return (
    typeof window.matchMedia != 'undefined'
    || typeof window.msMatchMedia != 'undefined'
  )
}
function getScreenOrientation() {
  let e
    = screen.msOrientation
      || screen.mozOrientation
      || (screen.orientation || {}).type
  let t = '\u672A\u53D6\u5230\u503C'
  if (e) {
    t = e.includes('landscape') ? 'landscape' : 'portrait'
  }
  else if (mediaQueriesSupported()) {
    let r = window.matchMedia || window.msMatchMedia
    r('(orientation: landscape)').matches
      ? (t = 'landscape')
      : r('(orientation: portrait)').matches && (t = 'portrait')
  }
  return t
}
function getUA() {
  let e
  let t = {}
  let r = navigator.userAgent.toLowerCase()
  return (
    (e = r.match(/ qq\/([\d.]+)/))
      ? (t.qqBuildinBrowser = Number(e[1].split('.')[0]))
      : (e = r.match(/mqqbrowser\/([\d.]+)/))
          ? (t.qqBrowser = Number(e[1].split('.')[0]))
          : (e = r.match(/opera.([\d.]+)/))
              ? (t.opera = Number(e[1].split('.')[0]))
              : (e = r.match(/msie ([\d.]+)/))
                  ? (t.ie = Number(e[1].split('.')[0]))
                  : (e = r.match(/edge.([\d.]+)/))
                      ? (t.edge = Number(e[1].split('.')[0]))
                      : (e = r.match(/firefox\/([\d.]+)/))
                          ? (t.firefox = Number(e[1].split('.')[0]))
                          : (e = r.match(/chrome\/([\d.]+)/))
                              ? (t.chrome = Number(e[1].split('.')[0]))
                              : (e = r.match(/version\/([\d.]+).*safari/))
                                  ? (t.safari = Number(e[1].match(/^\d*.\d*/)))
                                  : (e = r.match(/trident\/([\d.]+)/)) && (t.ie = 11),
    t
  )
}
function getURL(e) {
  return isString(e) ? _decodeURI((e = trim(e))) : _decodeURI(location.href)
}
function getURLPath(e) {
  return isString(e)
    ? _decodeURI((e = trim(e)))
    : _decodeURI(location.pathname)
}
function hasAttribute(e, t) {
  return e.hasAttribute
    ? e.hasAttribute(t)
    : e.attributes
      ? !(!e.attributes[t] || !e.attributes[t].specified)
      : void 0
}
function hasAttributes(e, t) {
  if (typeof t == 'string')
    return hasAttribute(e, t)
  if (isArray(t)) {
    for (var r = !1, n = 0; n < t.length; n++) {
      if (hasAttribute(e, t[n])) {
        r = !0
        break
      }
    }
    return r
  }
}
function hashCode(e) {
  if (typeof e != 'string')
    return 0
  let t = 0
  if (e.length == 0)
    return t
  for (let r = 0; r < e.length; r++)
    ((t = (t << 5) - t + e.charCodeAt(r)), (t &= t))
  return t
}
function hashCode53(e) {
  let t = 9007199254740992
  let r = -9007199254740992
  let n = 0
  if (e.length > 0) {
    for (let i = e.split(''), a = 0; a < i.length; a++) {
      let s = i[a].charCodeAt()
      let o = 31 * n + s
      if (o > t) {
        for (n = r + n; (o = 31 * n + s) < r;) n = n / 2 + s
      }
      if (o < r) {
        for (n = t + n; (o = 31 * n + s) > t;) n = n / 2 + s
      }
      n = 31 * n + s
    }
  }
  return n
}
function indexOf(e, t) {
  let r = e.indexOf
  if (r)
    return r.call(e, t)
  for (let n = 0; n < e.length; n++) {
    if (t === e[n])
      return n
  }
  return -1
}
function inherit(e, t) {
  return (
    (e.prototype = new t()),
    (e.prototype.constructor = e),
    (e.superclass = t.prototype),
    e
  )
}
let hasOwnProperty = Object.prototype.hasOwnProperty
function isArguments(e) {
  return !(!e || !hasOwnProperty.call(e, 'callee'))
}
function isBoolean(e) {
  return Object.prototype.toString.call(e) == '[object Boolean]'
}
function isEmptyObject(e) {
  if (isObject(e)) {
    for (let t in e) {
      if (Object.prototype.hasOwnProperty.call(e, t))
        return !1
    }
    return !0
  }
  return !1
}
function isHttpUrl(e) {
  if (typeof e != 'string')
    return !1
  return !1 !== /^https?:\/\/.+/.test(e) || (logger.log('Invalid URL'), !1)
}
function isIOS() {
  return !!navigator.userAgent.match(/iPhone|iPad|iPod/i)
}
function isJSONString(e) {
  try {
    JSON.parse(e)
  }
  catch (t) {
    return !1
  }
  return !0
}
function isNumber(e) {
  return (
    Object.prototype.toString.call(e) == '[object Number]'
    && /[\d.]+/.test(String(e))
  )
}
function isSupportBeaconSend() {
  let e = !1
  if (typeof navigator != 'object' || typeof navigator.sendBeacon != 'function')
    return e
  let t = getUA()
  let r = navigator.userAgent.toLowerCase()
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    let n = (`${r.match(/os [\d._]*/gi)}`)
      .replace(/[^0-9|_.]/g, '')
      .replace(/_/g, '.')
      .split('.');
    (typeof t.safari == 'undefined' && (t.safari = n[0]),
    n[0] && (t.qqBuildinBrowser || t.qqBrowser)
      ? (e = !1)
      : n[0] && n[0] < 13
        ? (t.chrome > 41
          || t.firefox > 30
          || t.opera > 25
          || t.safari > 12)
        && (e = !0)
        : (t.chrome > 41
          || t.firefox > 30
          || t.opera > 25
          || t.safari > 11.3)
        && (e = !0))
  }
  else {
    (t.chrome > 38
      || t.edge > 13
      || t.firefox > 30
      || t.opera > 25
      || t.safari > 11)
    && (e = !0)
  }
  return e
}
function isSupportCors() {
  return (
    typeof window.XMLHttpRequest != 'undefined'
    && ('withCredentials' in new XMLHttpRequest()
      || typeof XDomainRequest != 'undefined')
  )
}
function jsonp(e) {
  if (!isObject(e) || !isString(e.callbackName))
    return (logger.log('JSONP \u8BF7\u6C42\u7F3A\u5C11 callbackName'), !1);
  ((e.success = isFunction(e.success) ? e.success : function () {}),
  (e.error = isFunction(e.error) ? e.error : function () {}),
  (e.data = e.data || ''))
  let t = document.createElement('script')
  let r = document.getElementsByTagName('head')[0]
  let n = null
  let i = !1
  r.appendChild(t);
  (isNumber(e.timeout)
    && (n = setTimeout(
      () => {
        if (i)
          return !1;
        (e.error('timeout'),
        (window[e.callbackName] = function () {
          logger.log('call jsonp error')
        }),
        (n = null),
        r.removeChild(t),
        (i = !0))
      },
      Math.min(e.timeout, 3e4),
    )),
  (window[e.callbackName] = function () {
    (clearTimeout(n),
    (n = null),
    e.success.apply(null, arguments),
    (window[e.callbackName] = function () {
      logger.log('call jsonp error')
    }),
    r.removeChild(t))
  }))
  let a = encodeURIComponent(e.callbackName)
  let s = ''
  if (
    (e.url.includes('?')
      ? (e.url += `&callbackName=${a}`)
      : (e.url += `?callbackName=${a}`),
    isObject(e.data))
  ) {
    let o = [];
    (each(e.data, (e, t) => {
      o.push(`${encodeURIComponent(t)}=${encodeURIComponent(e)}`)
    }),
    (s = o.join('&')) && (e.url += `&${s}`))
  }
  ((t.onerror = function (a) {
    if (i)
      return !1;
    ((window[e.callbackName] = function () {
      logger.log('call jsonp error')
    }),
    clearTimeout(n),
    (n = null),
    r.removeChild(t),
    e.error(a),
    (i = !0))
  }),
  (t.src = e.url))
}
function listenPageState(e) {
  ({
    visibleHandler: isFunction(e.visible) ? e.visible : function () {},
    hiddenHandler: isFunction(e.hidden) ? e.hidden : function () {},
    visibilityChange: null,
    hidden: null,
    isSupport() {
      return typeof document[this.hidden] != 'undefined'
    },
    init() {
      (typeof document.hidden != 'undefined'
        ? ((this.hidden = 'hidden'),
          (this.visibilityChange = 'visibilitychange'))
        : typeof document.mozHidden != 'undefined'
          ? ((this.hidden = 'mozHidden'),
            (this.visibilityChange = 'mozvisibilitychange'))
          : typeof document.msHidden != 'undefined'
            ? ((this.hidden = 'msHidden'),
              (this.visibilityChange = 'msvisibilitychange'))
            : typeof document.webkitHidden != 'undefined'
              && ((this.hidden = 'webkitHidden'),
              (this.visibilityChange = 'webkitvisibilitychange')),
      this.listen())
    },
    listen() {
      if (this.isSupport()) {
        let e = this
        addEvent(
          document,
          this.visibilityChange,
          () => {
            document[e.hidden] ? e.hiddenHandler() : e.visibleHandler()
          },
          1,
        )
      }
      else {
        (addEvent(window, 'focus', this.visibleHandler),
        addEvent(window, 'blur', this.hiddenHandler))
      }
    },
  }).init()
}
function loadScript(e) {
  e = extend(
    {
      success() {},
      error() {},
      appendCall(e) {
        document.getElementsByTagName('head')[0].appendChild(e)
      },
    },
    e,
  )
  let t = null;
  (e.type === 'css'
    && (((t = document.createElement('link')).rel = 'stylesheet'),
    (t.href = e.url)),
  e.type === 'js'
  && (((t = document.createElement('script')).async = 'async'),
  t.setAttribute('charset', 'UTF-8'),
  (t.src = e.url),
  (t.type = 'text/javascript')),
  (t.onload = t.onreadystatechange
    = function () {
      (this.readyState
        && this.readyState !== 'loaded'
        && this.readyState !== 'complete')
      || (e.success(), (t.onload = t.onreadystatechange = null))
    }),
  (t.onerror = function () {
    (e.error(), (t.onerror = null))
  }),
  e.appendCall(t))
}
function removeScriptProtocol(e) {
  if (typeof e != 'string')
    return ''
  for (let t = /^\s*javascript/i; t.test(e);) e = e.replace(t, '')
  return e
}
function rot13obfs(e, t) {
  t = typeof t == 'number' ? t : 13
  for (var r = (e = String(e)).split(''), n = 0; n < r.length; n++) {
    r[n].charCodeAt(0) < 126
    && (r[n] = String.fromCharCode((r[n].charCodeAt(0) + t) % 126))
  }
  return r.join('')
}
function rot13defs(e) {
  return rot13obfs((e = String(e)), 113)
}
function searchObjDate(e) {
  isObject(e)
  && each(e, (t, r) => {
    isObject(t) ? searchObjDate(e[r]) : isDate(t) && (e[r] = formatDate(t))
  })
}
let _sessionStorage = {
  isSupport() {
    let e = !0
    let t = 'testIsSupportStorage'
    try {
      sessionStorage && sessionStorage.setItem
        ? (sessionStorage.setItem('__session_storage_support__', t),
          sessionStorage.removeItem('__session_storage_support__', t),
          (e = !0))
        : (e = !1)
    }
    catch (r) {
      e = !1
    }
    return e
  },
}
function setCssStyle(e) {
  let t = document.createElement('style')
  t.type = 'text/css'
  try {
    t.appendChild(document.createTextNode(e))
  }
  catch (i) {
    t.styleSheet.cssText = e
  }
  let r = document.getElementsByTagName('head')[0]
  let n = document.getElementsByTagName('script')[0]
  r
    ? r.children.length
      ? r.insertBefore(t, r.children[0])
      : r.appendChild(t)
    : n.parentNode.insertBefore(t, n)
}
function strToUnicode(e) {
  if (typeof e != 'string')
    return (logger.log('\u8F6C\u6362unicode\u9519\u8BEF', e), e)
  for (var t = '', r = 0; r < e.length; r++)
    t += `\\${e.charCodeAt(r).toString(16)}`
  return t
}
function throttle(e, t, r) {
  let n
  let i
  let a
  let s = null
  let o = 0
  r || (r = {})
  let l = function () {
    ((o = !1 === r.leading ? 0 : now()),
    (s = null),
    (a = e.apply(n, i)),
    s || (n = i = null))
  }
  return function () {
    let d = now()
    o || !1 !== r.leading || (o = d)
    let c = t - (d - o)
    return (
      (n = this),
      (i = arguments),
      c <= 0 || c > t
        ? (s && (clearTimeout(s), (s = null)),
          (o = d),
          (a = e.apply(n, i)),
          s || (n = i = null))
        : s || !1 === r.trailing || (s = setTimeout(l, c)),
      a
    )
  }
}
function values(e) {
  let t = []
  return e == null
    ? t
    : (each(e, (e) => {
        t[t.length] = e
      }),
      t)
}
function toArray(e) {
  return e
    ? e.toArray
      ? e.toArray()
      : isArray(e) || isArguments(e)
        ? Array.prototype.slice.call(e)
        : values(e)
    : []
}
function unique(e) {
  for (var t, r = [], n = {}, i = 0; i < e.length; i++)
    (t = e[i]) in n || ((n[t] = !0), r.push(t))
  return r
}
let ENC = { '+': '-', '/': '_', '=': '.' }
let DEC = { '-': '+', '_': '/', '.': '=' }
let urlSafeBase64 = {
  encode(e) {
    return e.replace(/[+/=]/g, (e) => {
      return ENC[e]
    })
  },
  decode(e) {
    return e.replace(/[-_.]/g, (e) => {
      return DEC[e]
    })
  },
  trim(e) {
    return e.replace(/[.=]{1,2}$/, '')
  },
  isBase64(e) {
    return /^[A-Z0-9+/]*[=]{0,2}$/i.test(e)
  },
  isUrlSafeBase64(e) {
    return /^[\w-]*\.{0,2}$/.test(e)
  },
}
function startsWith(e, t, r) {
  return ((r = r || 0), e.substr(r, t.length) === t)
}
function noPrototypePollution(e) {
  return e !== '__proto__' && e !== 'constructor' && e !== 'prototype'
}
let W = {
  __proto__: null,
  noPrototypePollution,
  ConcurrentStorage,
  EventEmitter,
  URL: _URL,
  UUID,
  addEvent,
  addHashEvent,
  ajax,
  base64Decode,
  base64Encode,
  bindReady,
  cookie,
  coverExtend,
  decodeURI: _decodeURI,
  decodeURIComponent: _decodeURIComponent,
  dfmapping,
  each,
  encodeDates,
  extend,
  extend2Lev,
  filter,
  formatDate,
  formatJsonString,
  getCookieTopLevelDomain,
  getDomBySelector,
  getElementContent,
  getHostname,
  getIOSVersion,
  getQueryParam,
  getQueryParamsFromUrl,
  getRandom,
  getRandomBasic,
  getScreenOrientation,
  getUA,
  getURL,
  getURLPath,
  getURLSearchParams,
  hasAttribute,
  hasAttributes,
  hashCode,
  hashCode53,
  indexOf,
  inherit,
  isArguments,
  isArray,
  isBoolean,
  isDate,
  isElement,
  isEmptyObject,
  isFunction,
  isHttpUrl,
  isIOS,
  isJSONString,
  isNumber,
  isObject,
  isString,
  isSupportBeaconSend,
  isSupportCors,
  isUndefined,
  jsonp,
  listenPageState,
  loadScript,
  localStorage: _localStorage,
  logger,
  map,
  mediaQueriesSupported,
  now,
  removeScriptProtocol,
  rot13defs,
  rot13obfs,
  ry,
  safeJSONParse,
  searchObjDate,
  sessionStorage: _sessionStorage,
  setCssStyle,
  strToUnicode,
  throttle,
  toArray,
  trim,
  unique,
  urlParse,
  urlSafeBase64,
  values,
  xhr,
  startsWith,
}
let logWriters = []
let saLogger = {
  appendWriter(e) {
    logWriters.push(e)
  },
  msg() {
    let e = { module: '', level: 'log', brand: 'web-sdk', content: null }
    return (
      (e.content = Array.prototype.slice.call(arguments)),
      {
        module(t) {
          return (isString(t) && (e.module = t), this)
        },
        level(t) {
          return (isString(t) && (e.level = t), this)
        },
        brand(t) {
          return (isString(t) && (e.brand = t), this)
        },
        log() {
          if (e.content && e.content.length) {
            for (let t = 0; t < logWriters.length; t++) {
              if (typeof logWriters[t] == 'function') {
                try {
                  logWriters[t].call(null, e)
                }
                catch (r) {}
              }
            }
          }
          return this
        },
      }
    )
  },
}
function sdLog() {
  saLogger.msg.apply(saLogger, arguments).log()
}
function sdWarn() {
  saLogger.msg.apply(saLogger, arguments).level('warn').log()
}
function sdError() {
  saLogger.msg.apply(saLogger, arguments).level('error').log()
}
let sdPara = {}
let defaultPara = {
  preset_properties: {
    search_keyword_baidu: !1,
    latest_utm: !0,
    latest_traffic_source_type: !0,
    latest_search_keyword: !0,
    latest_referrer: !0,
    latest_referrer_host: !1,
    latest_landing_page: !1,
    latest_wx_ad_click_id: undefined,
    url: !0,
    title: !0,
  },
  encrypt_cookie: !1,
  enc_cookie: !1,
  img_use_crossorigin: !1,
  name: 'sa',
  max_referrer_string_length: 200,
  max_string_length: 1024,
  max_id_length: 255,
  max_key_length: 100,
  cross_subdomain: !0,
  show_log: !1,
  is_debug: !1,
  source_channel: [],
  sdk_id: '',
  auto_init: !0,
  is_track_single_page: !1,
  is_single_page: !1,
  batch_send: !1,
  custom_server_url: '',
  source_type: {},
  callback_timeout: 200,
  datasend_timeout: 8e3,
  is_track_device_id: !1,
  ignore_oom: !0,
  app_js_bridge: !1,
  white_list: {},
}
defaultPara.white_list[location.host] = _URL(location.href).hostname
let source_channel_standard
  = 'utm_source utm_medium utm_campaign utm_content utm_term'
let sdkversion_placeholder = '1.27.11'
let domain_test_key = 'sensorsdata_domain_test'
let IDENTITY_KEY = {
  EMAIL: '$identity_email',
  MOBILE: '$identity_mobile',
  LOGIN: '$identity_login_id',
}
function getCurrentDomain(e) {
  let t = sdPara.current_domain
  switch (typeof t) {
    case 'function':
      var r = t()
      return r === '' || trim(r) === ''
        ? 'url\u89E3\u6790\u5931\u8D25'
        : r.includes('.')
          ? r
          : 'url\u89E3\u6790\u5931\u8D25'
    case 'string':
      return t === '' || trim(t) === ''
        ? 'url\u89E3\u6790\u5931\u8D25'
        : t.includes('.')
          ? t
          : 'url\u89E3\u6790\u5931\u8D25'
    default:
      var n = getCookieTopLevelDomain(
        null,
        domain_test_key,
        sdPara.is_secure_cookie,
      )
      return e === ''
        ? 'url\u89E3\u6790\u5931\u8D25'
        : n === ''
          ? 'url\u89E3\u6790\u5931\u8D25'
          : n
  }
}
let saCookie = {
  get(e) {
    return cookie.get(e)
  },
  set(e, t, r, n) {
    let i = ''
    if ((n = isUndefined(n) ? sdPara.cross_subdomain : n)) {
      let a = getCurrentDomain(location.href);
      (a === 'url\u89E3\u6790\u5931\u8D25' && (a = ''),
      (i = a ? `; domain=${a}` : ''))
    }
    return cookie.set(
      e,
      t,
      r,
      sdPara.set_cookie_samesite,
      sdPara.is_secure_cookie,
      i,
    )
  },
  remove(e, t) {
    return (
      (t = isUndefined(t) ? sdPara.cross_subdomain : t),
      cookie.remove(e, t)
    )
  },
  isSupport(e, t) {
    return (
      (e = e || 'sajssdk_2015_cookie_access_test'),
      (t = t || '1'),
      cookie.isSupport(e, t, 0, null, sdPara.is_secure_cookie)
    )
  },
}
function getNewUserFlagKey(e, t) {
  let r = ''
  if (!1 === sdPara.cross_subdomain) {
    try {
      if (t) {
        r = _URL(t).hostname
      }
      else {
        let n = location.host
        isUndefined(sd.para.white_list[n]) || (r = sd.para.white_list[n])
      }
    }
    catch (i) {
      sdError(i)
    }
    r
      = typeof r == 'string' && r !== ''
        ? `sajssdk_2015_${sdPara.sdk_id}${e}_${r.replace(/\./g, '_')}`
        : `sajssdk_2015_root_${sdPara.sdk_id}${e}`
  }
  else {
    r = `sajssdk_2015_cross_${sdPara.sdk_id}${e}`
  }
  return r
}
function isNewUser() {
  return saCookie.isSupport()
    ? saCookie.get('sensorsdata_is_new_user') !== null
    || saCookie.get(getNewUserFlagKey('new_user')) !== null
    : memory.get(memory.getNewUserFlagMemoryKey('new_user')) !== null
}
saCookie.getNewUser = isNewUser
var memory = {
  data: {},
  get(e) {
    let t = this.data[e]
    return t === undefined
      ? null
      : t._expirationTimestamp_ !== undefined
        ? new Date().getTime() > t._expirationTimestamp_
          ? null
          : t.value
        : t
  },
  set(e, t, r) {
    if (r) {
      let n = new Date()
      t = {
        value: t,
        _expirationTimestamp_:
            String(r).slice(-1) === 's'
              ? n.getTime() + 1e3 * Number(String(r).slice(0, -1))
              : n.getTime() + 24 * r * 60 * 60 * 1e3,
      }
    }
    this.data[e] = t
  },
  getNewUserFlagMemoryKey(e) {
    return `sajssdk_2015_${sdPara.sdk_id}${e}`
  },
}
let saNewUser = {
  checkIsAddSign(e) {
    e.type === 'track'
    && (isNewUser()
      ? (e.properties.$is_first_day = !0)
      : (e.properties.$is_first_day = !1))
  },
  is_first_visit_time: !1,
  is_page_first_visited: !1,
  checkIsFirstTime(e) {
    e.type === 'track'
    && e.event === '$pageview'
    && (this.is_first_visit_time
      ? ((e.properties.$is_first_time = !0),
        (this.is_first_visit_time = !1))
      : (e.properties.$is_first_time = !1))
  },
  setDeviceId() {},
  storeInitCheck() {
    if (sd.is_first_visitor) {
      let e = new Date()
      let t = {
        h: 23 - e.getHours(),
        m: 59 - e.getMinutes(),
        s: 59 - e.getSeconds(),
      };
      (saCookie.isSupport()
        ? saCookie.set(
            getNewUserFlagKey('new_user'),
            '1',
            `${3600 * t.h + 60 * t.m + t.s}s`,
          )
        : memory.set(
            memory.getNewUserFlagMemoryKey('new_user'),
            '1',
            `${3600 * t.h + 60 * t.m + t.s}s`,
          ),
      (this.is_first_visit_time = !0),
      (this.is_page_first_visited = !0))
    }
    else {
      (isNewUser()
        || (this.checkIsAddSign = function (e) {
          e.type === 'track' && (e.properties.$is_first_day = !1)
        }),
      (this.checkIsFirstTime = function (e) {
        e.type === 'track'
        && e.event === '$pageview'
        && (e.properties.$is_first_time = !1)
      }))
    }
  },
}
function saAddEvent(e, t, r) {
  let n = !(!isObject(sdPara.heatmap) || !sdPara.heatmap.useCapture)
  return (
    isObject(sdPara.heatmap)
    && isUndefined(sdPara.heatmap.useCapture)
    && t === 'click'
    && (n = !0),
    addEvent(e, t, r, n)
  )
}
let EventEmitterSa = function () {
  ((this._events = []), (this.pendingEvents = []))
}
function isBaiduTraffic() {
  let e = document.referrer
  if (!e)
    return !1
  try {
    let t = _URL(e).hostname
    return t && t.substring(t.length - 'baidu.com'.length) === 'baidu.com'
  }
  catch (r) {
    return !1
  }
}
EventEmitterSa.prototype = {
  emit(e) {
    let t = [].slice.call(arguments, 1);
    (each(this._events, (r) => {
      r.type === e && r.callback.apply(r.context, t)
    }),
    this.pendingEvents.push({ type: e, data: t }),
    this.pendingEvents.length > 20 && this.pendingEvents.shift())
  },
  on(e, t, r, n) {
    isFunction(t)
    && (this._events.push({ type: e, callback: t, context: r || this }),
    (n = !1 !== n),
    this.pendingEvents.length > 0
    && n
    && each(this.pendingEvents, (n) => {
      n.type === e && t.apply(r, n.data)
    }))
  },
  tempAdd(e, t) {
    if (t && e)
      return this.emit(e, t)
  },
  isReady() {},
}
let getBaiduKeyword = {
  data: {},
  id() {
    return this.data.id
      ? this.data.id
      : ((this.data.id = getReferrerEqid()), this.data.id)
  },
  type() {
    return this.data.type
      ? this.data.type
      : ((this.data.type = getReferrerEqidType()), this.data.type)
  },
}
function getReferrerEqidType() {
  let e = getQueryParamsFromUrl(document.referrer)
  if (isEmptyObject(e) || !e.eqid) {
    let t = getQueryParamsFromUrl(location.href)
    return e.ck || t.utm_source
      ? 'baidu_sem_keyword_id'
      : 'baidu_other_keyword_id'
  }
  return 'baidu_seo_keyword_id'
}
function getReferrerEqid() {
  let e = getQueryParamsFromUrl(document.referrer)
  return isEmptyObject(e) || !e.eqid ? UUID().replace(/-/g, '') : e.eqid
}
function getReferrer(e, t) {
  return isString((e = e || document.referrer))
    ? ((e = _decodeURI((e = trim(e)))).indexOf('https://www.baidu.com/')
      !== 0
      || t
      || (e = e.split('?')[0]),
      isString((e = e.slice(0, sdPara.max_referrer_string_length))) ? e : '')
    : `\u53D6\u503C\u5F02\u5E38_referrer\u5F02\u5E38_${String(e)}`
}
function isReferralTraffic(e) {
  if ((e = e || document.referrer) === '')
    return !0
  let t = getCookieTopLevelDomain(
    null,
    domain_test_key,
    sdPara.is_secure_cookie,
  )
  let r = getHostname(e)
  return !(r = `.${r}`).includes(t) && t !== ''
}
function getKeywordFromReferrer(e, t) {
  e = e || document.referrer
  let r = sdPara.source_type.keyword
  if (document && isString(e)) {
    if (e.indexOf('http') === 0) {
      let n = getReferSearchEngine(e)
      let i = getQueryParamsFromUrl(e)
      if (isEmptyObject(i)) {
        return sdPara.preset_properties.search_keyword_baidu && isBaiduTraffic()
          ? void 0
          : '\u672A\u53D6\u5230\u503C'
      }
      let a = null
      for (let s in r) {
        if (n === s && isObject(i)) {
          if (isArray((a = r[s]))) {
            for (s = 0; s < a.length; s++) {
              let o = i[a[s]]
              if (o)
                return t ? { active: o } : o
            }
          }
          else if (i[a]) {
            return t ? { active: i[a] } : i[a]
          }
        }
      }
      return sdPara.preset_properties.search_keyword_baidu && isBaiduTraffic()
        ? void 0
        : '\u672A\u53D6\u5230\u503C'
    }
    return e === ''
      ? '\u672A\u53D6\u5230\u503C_\u76F4\u63A5\u6253\u5F00'
      : '\u672A\u53D6\u5230\u503C_\u975Ehttp\u7684url'
  }
  return `\u53D6\u503C\u5F02\u5E38_referrer\u5F02\u5E38_${String(e)}`
}
function getReferSearchEngine(e) {
  let t = getHostname(e)
  if (!t || t === 'hostname\u89E3\u6790\u5F02\u5E38')
    return ''
  let r = {
    baidu: [/^.*\.baidu\.com$/],
    bing: [/^.*\.bing\.com$/],
    google: [
      /^www\.google\.com$/,
      /^www\.google\.com\.[a-z]{2}$/,
      /^www\.google\.[a-z]{2}$/,
    ],
    sm: [/^m\.sm\.cn$/],
    so: [/^.+\.so\.com$/],
    sogou: [/^.*\.sogou\.com$/],
    yahoo: [/^.*\.yahoo\.com$/],
  }
  for (let n in r) {
    for (let i = r[n], a = 0, s = i.length; a < s; a++) {
      if (i[a].test(t))
        return n
    }
  }
  return '\u672A\u77E5\u641C\u7D22\u5F15\u64CE'
}
let debug = {
  distinct_id() {},
  jssdkDebug() {},
  _sendDebug(e) {},
  apph5(e) {
    let t = 'app_h5\u6253\u901A\u5931\u8D25-'
    let r = {
      1: `${t}use_app_track\u4E3Afalse`,
      2:
            `${t
            }Android\u6216\u8005iOS\uFF0C\u6CA1\u6709\u66B4\u9732\u76F8\u5E94\u65B9\u6CD5`,
      3.1: `${t}Android\u6821\u9A8Cserver_url\u5931\u8D25`,
      3.2: `${t}iOS\u6821\u9A8Cserver_url\u5931\u8D25`,
      4.1: `${t}H5 \u6821\u9A8C iOS server_url \u5931\u8D25`,
      4.2: `${t}H5 \u6821\u9A8C Android server_url \u5931\u8D25`,
    }
    let n = e.output
    let i = e.step
    let a = e.data || '';
    ((n !== 'all' && n !== 'console') || sdLog(r[i]),
    (n === 'all' || n === 'code')
    && isObject(sdPara.is_debug)
    && sdPara.is_debug.apph5
    && ((a.type && a.type.slice(0, 7) === 'profile')
      || (a.properties._jssdk_debug_info = `apph5-${String(i)}`)))
  },
  defineMode(e) {
    let t = {
      1: {
        title:
            '\u5F53\u524D\u9875\u9762\u65E0\u6CD5\u8FDB\u884C\u53EF\u89C6\u5316\u5168\u57CB\u70B9',
        message:
            'App SDK \u4E0E Web JS SDK \u6CA1\u6709\u8FDB\u884C\u6253\u901A\uFF0C\u8BF7\u8054\u7CFB\u8D35\u65B9\u6280\u672F\u4EBA\u5458\u4FEE\u6B63 App SDK \u7684\u914D\u7F6E\uFF0C\u8BE6\u7EC6\u4FE1\u606F\u8BF7\u67E5\u770B\u6587\u6863\u3002',
        link_text: '',
        link_url: '',
      },
      2: {
        title:
            '\u5F53\u524D\u9875\u9762\u65E0\u6CD5\u8FDB\u884C\u53EF\u89C6\u5316\u5168\u57CB\u70B9',
        message:
            'App SDK \u4E0E Web JS SDK \u6CA1\u6709\u8FDB\u884C\u6253\u901A\uFF0C\u8BF7\u8054\u7CFB\u8D35\u65B9\u6280\u672F\u4EBA\u5458\u4FEE\u6B63 Web JS SDK \u7684\u914D\u7F6E\uFF0C\u8BE6\u7EC6\u4FE1\u606F\u8BF7\u67E5\u770B\u6587\u6863\u3002',
        link_text: '',
        link_url: '',
      },
      3: {
        title:
            '\u5F53\u524D\u9875\u9762\u65E0\u6CD5\u8FDB\u884C\u53EF\u89C6\u5316\u5168\u57CB\u70B9',
        message:
            'Web JS SDK \u6CA1\u6709\u5F00\u542F\u5168\u57CB\u70B9\u914D\u7F6E\uFF0C\u8BF7\u8054\u7CFB\u8D35\u65B9\u5DE5\u4F5C\u4EBA\u5458\u4FEE\u6B63 SDK \u7684\u914D\u7F6E\uFF0C\u8BE6\u7EC6\u4FE1\u606F\u8BF7\u67E5\u770B\u6587\u6863\u3002',
        link_text: '',
        link_url: '',
      },
      4: {
        title:
            '\u5F53\u524D\u9875\u9762\u65E0\u6CD5\u8FDB\u884C\u53EF\u89C6\u5316\u5168\u57CB\u70B9',
        message:
            'Web JS SDK \u914D\u7F6E\u7684\u6570\u636E\u6821\u9A8C\u5730\u5740\u4E0E App SDK \u914D\u7F6E\u7684\u6570\u636E\u6821\u9A8C\u5730\u5740\u4E0D\u4E00\u81F4\uFF0C\u8BF7\u8054\u7CFB\u8D35\u65B9\u5DE5\u4F5C\u4EBA\u5458\u4FEE\u6B63 SDK \u7684\u914D\u7F6E\uFF0C\u8BE6\u7EC6\u4FE1\u606F\u8BF7\u67E5\u770B\u6587\u6863\u3002',
        link_text: '',
        link_url: '',
      },
    }
    return !(!e || !t[e]) && t[e]
  },
  protocol: {
    protocolIsSame(e, t) {
      try {
        if (_URL(e).protocol !== _URL(t).protocol)
          return !1
      }
      catch (r) {
        return (sdWarn('\u4E0D\u652F\u6301 _.URL \u65B9\u6CD5'), !1)
      }
      return !0
    },
    serverUrl() {
      isString(sdPara.server_url)
      && sdPara.server_url !== ''
      && !this.protocolIsSame(sdPara.server_url, location.href)
      && sdWarn(
        'SDK \u68C0\u6D4B\u5230\u60A8\u7684\u6570\u636E\u53D1\u9001\u5730\u5740\u548C\u5F53\u524D\u9875\u9762\u5730\u5740\u7684\u534F\u8BAE\u4E0D\u4E00\u81F4\uFF0C\u5EFA\u8BAE\u60A8\u4FEE\u6539\u6210\u4E00\u81F4\u7684\u534F\u8BAE\u3002\n\u56E0\u4E3A\uFF1A1\u3001https \u4E0B\u9762\u53D1\u9001 http \u7684\u56FE\u7247\u8BF7\u6C42\u4F1A\u5931\u8D25\u30022\u3001http \u9875\u9762\u4F7F\u7528 https + ajax \u65B9\u5F0F\u53D1\u6570\u636E\uFF0C\u5728 ie9 \u53CA\u4EE5\u4E0B\u4F1A\u4E22\u5931\u6570\u636E\u3002',
      )
    },
    ajax(e) {
      if (e === sdPara.server_url)
        return !1
      isString(e)
      && e !== ''
      && !this.protocolIsSame(e, location.href)
      && sdWarn(
        'SDK \u68C0\u6D4B\u5230\u60A8\u7684\u6570\u636E\u53D1\u9001\u5730\u5740\u548C\u5F53\u524D\u9875\u9762\u5730\u5740\u7684\u534F\u8BAE\u4E0D\u4E00\u81F4\uFF0C\u5EFA\u8BAE\u60A8\u4FEE\u6539\u6210\u4E00\u81F4\u7684\u534F\u8BAE\u3002\u56E0\u4E3A http \u9875\u9762\u4F7F\u7528 https + ajax \u65B9\u5F0F\u53D1\u6570\u636E\uFF0C\u5728 ie9 \u53CA\u4EE5\u4E0B\u4F1A\u4E22\u5931\u6570\u636E\u3002',
      )
    },
  },
}
var pageInfo = {
  initPage() {
    let e = getReferrer()
    let t = getURL()
    let r = getCurrentDomain(t);
    (r || debug.jssdkDebug(`url_domain\u5F02\u5E38_${t}_${r}`),
    (this.pageProp = {
      referrer: e,
      referrer_host: e ? getHostname(e) : '',
      url: t,
      url_host: getHostname(t, 'url_host\u53D6\u503C\u5F02\u5E38'),
      url_domain: r,
    }))
  },
  pageProp: {},
  campaignParams() {
    return sd.kit.getUtmData()
  },
  campaignParamsStandard(e, t) {
    ((e = e || ''), (t = t || ''))
    let r = pageInfo.campaignParams()
    let n = {}
    let i = {}
    return (
      each(r, (r, a, s) => {
        (` ${source_channel_standard} `).includes(` ${a} `)
          ? (n[e + a] = s[a])
          : (i[t + a] = s[a])
      }),
      { $utms: n, otherUtms: i }
    )
  },
  properties() {
    let e
      = window.innerHeight
        || document.documentElement.clientHeight
        || (document.body && document.body.clientHeight)
        || 0
    let t
      = window.innerWidth
        || document.documentElement.clientWidth
        || (document.body && document.body.clientWidth)
        || 0
    return {
      $timezone_offset: new Date().getTimezoneOffset(),
      $screen_height: Number(screen.height) || 0,
      $screen_width: Number(screen.width) || 0,
      $viewport_height: e,
      $viewport_width: t,
      $lib: 'js',
      $lib_version: sdkversion_placeholder,
    }
  },
  currentProps: {},
  register(e) {
    extend(pageInfo.currentProps, e)
  },
}
function getSourceFromReferrer() {
  function e(e, t) {
    for (let r = 0; r < e.length; r++) {
      if (t.split('?')[0].includes(e[r]))
        return !0
    }
  }
  let t = `(${sdPara.source_type.utm.join('|')})\\=[^&]+`
  let r = sdPara.source_type.search
  let n = sdPara.source_type.social
  let i = document.referrer || ''
  let a = pageInfo.pageProp.url
  if (a) {
    let s = a.match(new RegExp(t))
    return s && s[0]
      ? '\u4ED8\u8D39\u5E7F\u544A\u6D41\u91CF'
      : e(r, i)
        ? '\u81EA\u7136\u641C\u7D22\u6D41\u91CF'
        : e(n, i)
          ? '\u793E\u4EA4\u7F51\u7AD9\u6D41\u91CF'
          : i === ''
            ? '\u76F4\u63A5\u6D41\u91CF'
            : '\u5F15\u8350\u6D41\u91CF'
  }
  return '\u83B7\u53D6url\u5F02\u5E38'
}
function getWxAdIdFromUrl(e) {
  let t = getQueryParam(e, 'gdt_vid')
  let r = getQueryParam(e, 'hash_key')
  let n = getQueryParam(e, 'callbacks')
  let i = { click_id: '', hash_key: '', callbacks: '' }
  return (
    isString(t)
    && t.length
    && ((i.click_id
      = t.length == 16 || t.length == 18
        ? t
        : '\u53C2\u6570\u89E3\u6790\u4E0D\u5408\u6CD5'),
    isString(r) && r.length && (i.hash_key = r),
    isString(n) && n.length && (i.callbacks = n)),
    i
  )
}
function parseSuperProperties(e) {
  let t = e.properties
  let r = JSON.parse(JSON.stringify(e))
  isObject(t)
  && each(t, (e, n) => {
    if (isFunction(e)) {
      try {
        ((t[n] = e(r)),
        isFunction(t[n])
        && (sdWarn(
          `\u60A8\u7684\u5C5E\u6027- ${
            n
          } \u683C\u5F0F\u4E0D\u6EE1\u8DB3\u8981\u6C42\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u5C06\u5176\u5220\u9664`,
        ),
        delete t[n]))
      }
      catch (i) {
        (delete t[n],
        sdWarn(
          `\u60A8\u7684\u5C5E\u6027- ${
            n
          } \u629B\u51FA\u4E86\u5F02\u5E38\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u5C06\u5176\u5220\u9664`,
        ))
      }
    }
  })
}
function searchConfigData(e) {
  if (isObject(e) && e.$option) {
    let t = e.$option
    return (delete e.$option, t)
  }
  return {}
}
function strip_empty_properties(e) {
  let t = {}
  return (
    each(e, (e, r) => {
      e != null && (t[r] = e)
    }),
    t
  )
}
function addReferrerHost(e) {
  let t = !e.type || e.type.slice(0, 7) !== 'profile'
  isObject(e.properties)
  && t
  && ('$referrer' in e.properties
    && (e.properties.$referrer_host
      = e.properties.$referrer === ''
        ? ''
        : getHostname(e.properties.$referrer, '\u53D6\u503C\u5F02\u5E38')),
  sdPara.preset_properties.latest_referrer
  && sdPara.preset_properties.latest_referrer_host
  && (e.properties.$latest_referrer_host
    = e.properties.$latest_referrer === ''
      ? ''
      : getHostname(
          e.properties.$latest_referrer,
          '\u53D6\u503C\u5F02\u5E38',
        )))
}
function addPropsHook(e) {
  let t = !e.type || e.type.slice(0, 7) !== 'profile'
  let r = sdPara.preset_properties && t;
  (r
    && sdPara.preset_properties.url
    && isUndefined(e.properties.$url)
    && (e.properties.$url = getURL()),
  r
  && sdPara.preset_properties.title
  && isUndefined(e.properties.$title)
  && (e.properties.$title = document.title))
}
function getEleInfo(e) {
  if (!isElement(e.target))
    return !1
  let t = e.target
  let r = isString(t.tagName) ? t.tagName.toLowerCase() : 'unknown'
  let n = {}
  return (
    (n.$element_type = r),
    (n.$element_name = t.getAttribute('name')),
    (n.$element_id = t.getAttribute('id')),
    (n.$element_class_name = isString(t.className) ? t.className : null),
    (n.$element_target_url = t.getAttribute('href')),
    (n.$element_content = getElementContent$1(t, r)),
    ((n = strip_empty_properties(n)).$url = getURL()),
    (n.$url_path = getURLPath()),
    (n.$title = document.title),
    n
  )
}
function getInputElementValue(e) {
  let t
    = sdPara.heatmap
      && isFunction(sdPara.heatmap.collect_input)
      && sdPara.heatmap.collect_input(e)
  return ((e.type === 'button' || e.type === 'submit' || t) && e.value) || ''
}
function getElementContent$1(e, t) {
  return isString(t) && t.toLowerCase() === 'input'
    ? getInputElementValue(e)
    : getElementContent(e, t)
}
function ajax$1(e) {
  return (debug.protocol.ajax(e.url), ajax(e))
}
function optimizeServerUrl(e, t) {
  if (
    (typeof e == 'string'
      && (e = trim(e))
      && (e.slice(0, 3) === '://'
        ? (e = location.protocol.slice(0, -1) + e)
        : e.slice(0, 2) === '//'
          ? (e = location.protocol + e)
          : e.slice(0, 4) !== 'http' && (e = '')),
    isArray(e) && e.length)
  ) {
    for (let r = 0; r < e.length; r++) {
      /sa\.gif[^/]*$/.test(e[r])
      || (e[r] = e[r]
        .replace(/\/sa$/, '/sa.gif')
        .replace(/(\/sa)(\?[^/]+)$/, '/sa.gif$2'))
    }
  }
  else {
    /sa\.gif[^/]*$/.test(e)
    || typeof e != 'string'
    || (e = e
      .replace(/\/sa$/, '/sa.gif')
      .replace(/(\/sa)(\?[^/]+)$/, '/sa.gif$2'))
  }
  return (t && typeof t == 'string' && (e = t), e)
}
function encodeTrackData(e) {
  isString(e) || (e = JSON.stringify(e))
  let t = base64Encode(e)
  let r = `crc=${hashCode(t)}`
  return `data=${encodeURIComponent(t)}&ext=${encodeURIComponent(r)}`
}
function addSinglePageEvent(e) {
  let t
  let r = location.href
  let n = window.history.pushState
  let i = window.history.replaceState;
  (isFunction(window.history.pushState)
    && (window.history.pushState = function () {
      (n.apply(window.history, arguments), e(r), (r = location.href))
    }),
  isFunction(window.history.replaceState)
  && (window.history.replaceState = function () {
    (i.apply(window.history, arguments), e(r), (r = location.href))
  }),
  (t = window.document.documentMode
    ? 'hashchange'
    : n
      ? 'popstate'
      : 'hashchange'),
  addEvent(window, t, () => {
    (e(r), (r = location.href))
  }))
}
let ee = {}
let spa = new EventEmitter()
function eventEmitterFacade(e, t) {
  let r = []
  typeof e == 'string'
  && e in ee.EVENT_LIST
  && ((r = ee.EVENT_LIST[e]), ee[r[0]].on(r[1], t))
}
((ee.spa = spa),
(ee.sdk = new EventEmitter()),
(ee.data = new EventEmitter()),
(ee.initSystemEvent = function () {
  addSinglePageEvent((e) => {
    spa.emit('switch', e)
  })
}),
(ee.EVENT_LIST = {
  spaSwitch: ['spa', 'switch'],
  sdkBeforeInit: ['sdk', 'beforeInit'],
  sdkInitPara: ['sdk', 'initPara'],
  sdkAfterInitPara: ['sdk', 'afterInitPara'],
  sdkInitAPI: ['sdk', 'initAPI'],
  sdkAfterInitAPI: ['sdk', 'afterInitAPI'],
  sdkAfterInit: ['sdk', 'afterInit'],
  sdkReady: ['sdk', 'ready'],
  dataSendSuccess: ['data', 'sendSuccess'],
  dataSendFail: ['data', 'sendFail'],
}))
let AjaxSend = function (e) {
  ((this.callback = e.callback),
  (this.server_url = e.server_url),
  (this.data = e.data),
  (this.origin_data = e.origin_data))
};
((AjaxSend.prototype.start = function () {
  let e = this
  let t = new Date()
  ajax$1({
    url: this.server_url,
    type: 'POST',
    data: e.data,
    credentials: !1,
    timeout: sdPara.datasend_timeout,
    cors: !0,
    success(r, n) {
      (ee.data.emit('sendSuccess', {
        status: String(n),
        resText: r,
        type: 'ajax_single',
        timeout_config: sdPara.datasend_timeout,
        request_timeout: new Date() - t,
        data: e.origin_data,
      }),
      e.end())
    },
    error(r, n) {
      (ee.data.emit('sendFail', {
        status: String(n),
        resText: r,
        type: 'ajax_single',
        timeout_config: sdPara.datasend_timeout,
        request_timeout: new Date() - t,
        data: e.origin_data,
      }),
      e.end())
    },
  })
}),
(AjaxSend.prototype.end = function () {
  if (this.callback) {
    if (
      (sdLog('warning: sdk callback is deprecated.'),
      !isFunction(this.callback))
    ) {
      return void sdLog('error: sdk callback must be function.')
    }
    this.callback()
  }
}))
let dataStoragePrefix = 'sawebjssdk-'
let tabStoragePrefix = 'tab-sawebjssdk-'
function BatchSend() {
  ((this.sendTimeStamp = 0),
  (this.timer = null),
  (this.serverUrl = ''),
  (this.hasTabStorage = !1))
}
BatchSend.prototype = {
  batchInterval() {
    (this.serverUrl === '' && this.getServerUrl(),
    this.hasTabStorage
    || (this.generateTabStorage(), (this.hasTabStorage = !0)))
    let e = this
    e.timer = setTimeout(() => {
      (e.updateExpireTime(),
      e.recycle(),
      e.send(),
      clearTimeout(e.timer),
      e.batchInterval())
    }, sdPara.batch_send.send_interval)
  },
  getServerUrl() {
    if (
      !(
        (isString(sdPara.server_url) && sdPara.server_url !== '')
        || (isArray(sdPara.server_url) && sdPara.server_url.length)
      )
    ) {
      return sdError(
        '\u5F53\u524D server_url \u4E3A\u7A7A\u6216\u4E0D\u6B63\u786E\uFF0C\u53EA\u5728\u63A7\u5236\u53F0\u6253\u5370\u65E5\u5FD7\uFF0Cnetwork \u4E2D\u4E0D\u4F1A\u53D1\u6570\u636E\uFF0C\u8BF7\u914D\u7F6E\u6B63\u786E\u7684 server_url\uFF01',
      )
    }
    this.serverUrl = isArray(sdPara.server_url)
      ? sdPara.server_url[0]
      : sdPara.server_url
  },
  send() {
    if (
      this.sendTimeStamp
      && now() - this.sendTimeStamp < sdPara.batch_send.send_interval
    ) {
      return !1
    }
    let e = _localStorage.get(this.tabKey)
    if (e) {
      this.sendTimeStamp = now()
      let t = unique(
        (e = safeJSONParse(e) || this.generateTabStorageVal()).data,
      )
      if (t.length) {
        for (var r = [], n = 0; n < t.length; n++) {
          let i = sd.store.readObjectVal(t[n])
          i && ((i._flush_time = new Date().getTime()), r.push(i))
        }
        r.length && this.request(r, e.data)
      }
    }
  },
  updateExpireTime() {
    let e = _localStorage.get(this.tabKey)
    e
    && (((e = safeJSONParse(e) || this.generateTabStorageVal()).expireTime
      = now() + 2 * sdPara.batch_send.send_interval),
    (e.serverUrl = this.serverUrl),
    _localStorage.set(this.tabKey, JSON.stringify(e)))
  },
  request(e, t) {
    let r = this
    let n = new Date()
    ajax$1({
      url: this.serverUrl,
      type: 'POST',
      data: `data_list=${encodeURIComponent(base64Encode(JSON.stringify(e)))}`,
      credentials: !1,
      timeout: sdPara.batch_send.datasend_timeout,
      cors: !0,
      success(i, a) {
        (ee.data.emit('sendSuccess', {
          status: String(a),
          resText: i,
          type: 'ajax_batch',
          timeout_config: sdPara.batch_send.datasend_timeout,
          request_timeout: new Date() - n,
          data: e,
        }),
        r.remove(t),
        (r.sendTimeStamp = 0))
      },
      error(t, i) {
        (ee.data.emit('sendFail', {
          status: String(i),
          resText: t,
          type: 'ajax_batch',
          timeout_config: sdPara.batch_send.datasend_timeout,
          request_timeout: new Date() - n,
          data: e,
        }),
        (r.sendTimeStamp = 0))
      },
    })
  },
  remove(e) {
    let t = _localStorage.get(this.tabKey)
    if (t) {
      for (
        var r = (safeJSONParse(t) || this.generateTabStorageVal()).data, n = 0;
        n < e.length;
        n++
      ) {
        let i = indexOf(r, e[n]);
        (i > -1 && r.splice(i, 1), _localStorage.remove(e[n]))
      }
      ((r = unique(r)),
      _localStorage.set(
        this.tabKey,
        JSON.stringify(this.generateTabStorageVal(r)),
      ))
    }
  },
  add(e) {
    let t = dataStoragePrefix + String(getRandom())
    let r = _localStorage.get(this.tabKey);
    (r === null
      ? ((this.tabKey = tabStoragePrefix + String(getRandom())),
        (r = this.generateTabStorageVal()))
      : (r = safeJSONParse(r) || this.generateTabStorageVal()),
    r.data.push(t),
    (r.expireTime = now() + 2 * sdPara.batch_send.send_interval),
    _localStorage.set(this.tabKey, JSON.stringify(r)),
    sd.store.saveObjectVal(t, e),
    (e.type !== 'track_signup' && e.event !== '$pageview')
    || this.sendImmediately())
  },
  generateTabStorage() {
    ((this.tabKey = tabStoragePrefix + String(getRandom())),
    _localStorage.set(
      this.tabKey,
      JSON.stringify(this.generateTabStorageVal()),
    ))
  },
  generateTabStorageVal(e) {
    return {
      data: (e = e || []),
      expireTime: now() + 2 * sdPara.batch_send.send_interval,
      serverUrl: this.serverUrl,
    }
  },
  sendImmediately() {
    this.send()
  },
  recycle() {
    for (var e = {}, t = 0; t < localStorage.length; t++) {
      let r = localStorage.key(t)
      var n = this
      if (r.indexOf(tabStoragePrefix) === 0) {
        for (
          var i
              = safeJSONParse(_localStorage.get(r))
                || this.generateTabStorageVal(),
            a = 0;
          a < i.data.length;
          a++
        )
          e[i.data[a]] = !0
        if (
          r !== n.tabKey
          && now() > i.expireTime
          && this.serverUrl === i.serverUrl
        ) {
          new ConcurrentStorage('sajssdk-lock-get-').get(
            r,
            1e4,
            1e3,
            (e) => {
              if (e) {
                _localStorage.get(n.tabKey) === null && n.generateTabStorage()
                let t = safeJSONParse(e) || n.generateTabStorageVal()
                let r
                  = safeJSONParse(_localStorage.get(n.tabKey))
                    || n.generateTabStorageVal();
                ((r.data = unique(r.data.concat(t.data))),
                _localStorage.set(n.tabKey, JSON.stringify(r)))
              }
            },
          )
        }
      }
      else if (r.indexOf('sajssdk-lock-get-') === 0) {
        let s = safeJSONParse(_localStorage.get(r)) || { expireTime: 0 }
        now() - s.expireTime > 1e4 && _localStorage.remove(r)
      }
    }
    for (let o = 0; o < localStorage.length; o++) {
      let l = localStorage.key(o)
      l.indexOf(dataStoragePrefix) !== 0 || e[l] || _localStorage.remove(l)
    }
  },
}
let BeaconSend = function (e) {
  ((this.callback = e.callback),
  (this.server_url = e.server_url),
  (this.data = e.data))
};
((BeaconSend.prototype.start = function () {
  let e = this;
  (typeof navigator == 'object'
    && typeof navigator.sendBeacon == 'function'
    && navigator.sendBeacon(this.server_url, this.data),
  setTimeout(() => {
    e.end()
  }, 40))
}),
(BeaconSend.prototype.end = function () {
  if (this.callback) {
    if (
      (sdLog('warning: sdk callback is deprecated.'),
      !isFunction(this.callback))
    ) {
      return void sdLog('error: sdk callback must be function.')
    }
    this.callback()
  }
}))
let ImageSend = function (e) {
  ((this.callback = e.callback),
  (this.img = document.createElement('img')),
  (this.img.width = 1),
  (this.img.height = 1),
  sdPara.img_use_crossorigin && (this.img.crossOrigin = 'anonymous'),
  (this.server_url = e.data))
};
((ImageSend.prototype.start = function () {
  let e = this;
  (sdPara.ignore_oom
    && ((this.img.onload = function () {
      ((this.onload = null),
      (this.onerror = null),
      (this.onabort = null),
      e.end())
    }),
    (this.img.onerror = function () {
      ((this.onload = null),
      (this.onerror = null),
      (this.onabort = null),
      e.end())
    }),
    (this.img.onabort = function () {
      ((this.onload = null),
      (this.onerror = null),
      (this.onabort = null),
      e.end())
    })),
  (this.img.src = this.server_url))
}),
(ImageSend.prototype.lastClear = function () {
  getUA().ie !== undefined
    ? (this.img.src = 'about:blank')
    : (this.img.src = '')
}),
(ImageSend.prototype.end = function () {
  if (this.callback) {
    if (
      (sdLog('warning: sdk callback is deprecated.'),
      !isFunction(this.callback))
    ) {
      return void sdLog('error: sdk callback must be function.')
    }
    this.callback()
  }
  self.lastClear && self.lastClear()
}))
let business = {
  __proto__: null,
  addEvent: saAddEvent,
  EventEmitterSa,
  cookie: saCookie,
  info: pageInfo,
  getReferrer,
  getCurrentDomain,
  isBaiduTraffic,
  getReferrerEqid,
  getReferrerEqidType,
  getBaiduKeyword,
  isReferralTraffic,
  getKeywordFromReferrer,
  getReferSearchEngine,
  getSourceFromReferrer,
  getWxAdIdFromUrl,
  parseSuperProperties,
  searchConfigData,
  strip_empty_properties,
  getEleInfo,
  getElementContent: getElementContent$1,
  ajax: ajax$1,
  optimizeServerUrl,
  encodeTrackData,
  AjaxSend,
  BatchSend,
  BeaconSend,
  ImageSend,
}
let events = new EventEmitterSa()
var store = {
  requests: [],
  _sessionState: {},
  _state: { distinct_id: '', first_id: '', props: {}, identities: {} },
  getProps() {
    return this._state.props || {}
  },
  getSessionProps() {},
  getOriginDistinctId() {
    return this._state._distinct_id || this._state.distinct_id
  },
  getOriginUnionId(e) {
    let t = {}
    let r = (e = e || this._state)._first_id || e.first_id
    let n = e._distinct_id || e.distinct_id
    return (
      r && n
        ? ((t.login_id = n), (t.anonymous_id = r))
        : (t.anonymous_id = n),
      t
    )
  },
  getIdentities() {
    let e = JSON.parse(JSON.stringify(this._state.identities))
    return ((e.$identity_anonymous_id = this.getAnonymousId()), e)
  },
  getAnonymousId() {
    return (
      store._state._first_id
      || store._state.first_id
      || store._state._distinct_id
      || store._state.distinct_id
    )
  },
  getDistinctId() {
    let e = this.getUnionId()
    return e.login_id || e.anonymous_id
  },
  getUnionId(e) {
    let t = this.getOriginUnionId(e)
    return (
      t.login_id
      && this._state.history_login_id
      && this._state.history_login_id.name
      && this._state.history_login_id.name !== IDENTITY_KEY.LOGIN
      && (t.login_id = `${this._state.history_login_id.name}+${t.login_id}`),
      t
    )
  },
  getFirstId() {
    return this._state._first_id || this._state.first_id
  },
  initSessionState() {},
  setOnce(e, t) {
    e in this._state || this.set(e, t)
  },
  set(e, t) {
    this._state = this._state || {}
    let r = this._state.distinct_id;
    ((this._state[e] = t),
    e === 'first_id'
      ? delete this._state._first_id
      : e === 'distinct_id' && delete this._state._distinct_id,
    this.save(),
    e === 'distinct_id' && r && events.tempAdd('changeDistinctId', t))
  },
  change(e, t) {
    this._state[`_${e}`] = t
  },
  setSessionProps() {
    sd.log(
      'initSessionState \u65B9\u6CD5\u5DF2\u7ECF\u5F03\u7528\uFF0C\u8BF7\u4E0D\u8981\u4F7F\u7528\u8BE5\u529F\u80FD\uFF0C\u5982\u6709\u9700\u6C42\u8054\u7CFB\u6280\u672F\u987E\u95EE',
    )
  },
  setSessionPropsOnce() {
    sd.log(
      'initSessionState \u65B9\u6CD5\u5DF2\u7ECF\u5F03\u7528\uFF0C\u8BF7\u4E0D\u8981\u4F7F\u7528\u8BE5\u529F\u80FD\uFF0C\u5982\u6709\u9700\u6C42\u8054\u7CFB\u6280\u672F\u987E\u95EE',
    )
  },
  setProps(e, t) {
    let r = {}
    for (let n in (r = t ? e : extend(this._state.props || {}, e))) {
      typeof r[n] == 'string'
      && (r[n] = r[n].slice(0, sd.para.max_referrer_string_length))
    }
    this.set('props', r)
  },
  setPropsOnce(e) {
    let t = this._state.props || {};
    (coverExtend(t, e), this.set('props', t))
  },
  clearAllProps(e) {
    let t
    if (isArray(e) && e.length > 0) {
      for (t = 0; t < e.length; t++) {
        isString(e[t])
        && !e[t].includes('latest_')
        && isObject(this._state.props)
        && e[t] in this._state.props
        && delete this._state.props[e[t]]
      }
    }
    else if (isObject(this._state.props)) {
      for (t in this._state.props)
        t.indexOf('latest_') !== 1 && delete this._state.props[t]
    }
    (this.sessionSave({}), this.save())
  },
  sessionSave() {
    sd.log(
      'initSessionState \u65B9\u6CD5\u5DF2\u7ECF\u5F03\u7528\uFF0C\u8BF7\u4E0D\u8981\u4F7F\u7528\u8BE5\u529F\u80FD\uFF0C\u5982\u6709\u9700\u6C42\u8054\u7CFB\u6280\u672F\u987E\u95EE',
    )
  },
  save() {
    let e = JSON.parse(JSON.stringify(this._state));
    (delete e._first_id,
    delete e._distinct_id,
    e.identities
    && (e.identities = base64Encode(JSON.stringify(e.identities))))
    let t = JSON.stringify(e);
    (sd.para.encrypt_cookie && (t = sd.kit.userEncrypt(t)),
    saCookie.set(this.getCookieName(), t, 360, sd.para.cross_subdomain))
  },
  getCookieName() {
    let e = ''
    if (!1 === sd.para.cross_subdomain) {
      try {
        let t = location.host
        isUndefined(sd.para.white_list[t]) || (e = sd.para.white_list[t])
      }
      catch (r) {
        sdWarn(r)
      }
      e
        = typeof e == 'string' && e !== ''
          ? `sa_jssdk_2015_${sd.para.sdk_id}${e.replace(/\./g, '_')}`
          : `sa_jssdk_2015_root${sd.para.sdk_id}`
    }
    else {
      e = `sensorsdata2015jssdkcross${sd.para.sdk_id}`
    }
    return e
  },
  init() {
    this.initSessionState()
    let e
    let t
    let r = UUID();
    (saCookie.isSupport()
      && ((e = saCookie.get(this.getCookieName())),
      (t = safeJSONParse((e = sd.kit.userDecryptIfNeeded(e))))),
    saCookie.isSupport()
    && e !== null
    && isJSONString(e)
    && isObject(t)
    && (!isObject(t) || t.distinct_id)
      ? ((store._state = extend(
          (function (e) {
            let t
            e.identities
            && (e.identities.indexOf('\n/') === 0
              ? (e.identities = safeJSONParse(rot13defs(e.identities)))
              : (e.identities = safeJSONParse(
                  base64Decode(e.identities),
                )))
            let r = store.getOriginUnionId(e);
            ((e.identities
              && isObject(e.identities)
              && !isEmptyObject(e.identities))
            || ((e.identities = {}),
            (e.identities.$identity_cookie_id = UUID())),
            (e.history_login_id = e.history_login_id || {}))
            let n = e.history_login_id.name
            if (r.login_id) {
              if (n && e.identities.hasOwnProperty(n)) {
                if (e.identities[n] !== r.login_id) {
                  for (t in ((e.identities[n] = r.login_id), e.identities)) {
                    e.identities.hasOwnProperty(t)
                    && t !== '$identity_cookie_id'
                    && t !== n
                    && delete e.identities[t]
                  }
                  e.history_login_id.value = r.login_id
                }
              }
              else {
                let i = n || IDENTITY_KEY.LOGIN
                for (t in ((e.identities[i] = r.login_id), e.identities)) {
                  e.identities.hasOwnProperty(t)
                  && t !== '$identity_cookie_id'
                  && t !== i
                  && delete e.identities[t]
                }
                e.history_login_id = { name: i, value: r.login_id }
              }
            }
            else {
              if (
                e.identities.hasOwnProperty('$identity_login_id')
                || e.identities.hasOwnProperty(n)
              ) {
                for (t in e.identities) {
                  e.identities.hasOwnProperty(t)
                  && t !== '$identity_cookie_id'
                  && t !== '$identity_anonymous_id'
                  && delete e.identities[t]
                }
              }
              e.history_login_id = { name: '', value: '' }
            }
            return e
          })(t),
        )),
        store.save())
      : ((sd.is_first_visitor = !0),
        (function (e) {
          (store.set('distinct_id', e),
          store.set('identities', { $identity_cookie_id: e }),
          store.set('history_login_id', { name: '', value: '' }))
        })(r)),
    saNewUser.setDeviceId(r, this),
    saNewUser.storeInitCheck())
  },
  saveObjectVal(e, t) {
    (isString(t) || (t = JSON.stringify(t)),
    sd.para.encrypt_cookie == 1 && (t = sd.kit.userEncrypt(t)),
    _localStorage.set(e, t))
  },
  readObjectVal(e) {
    let t = _localStorage.get(e)
    return t ? safeJSONParse((t = sd.kit.userDecryptIfNeeded(t))) : null
  },
}
let checkLog = {
  string(e) {
    sdWarn(`${e} must be string`)
  },
  emptyString(e) {
    sdWarn(`${e}'s is empty`)
  },
  regexTest(e) {
    sdWarn(`${e} is invalid`)
  },
  idLength(e) {
    sdWarn(`${e} length is longer than ${sdPara.max_id_length}`)
  },
  keyLength(e) {
    sdWarn(`${e} length is longer than ${sdPara.max_key_length}`)
  },
  stringLength(e) {
    sdWarn(`${e} length is longer than ${sdPara.max_string_length}`)
  },
  voidZero(e) {
    sdWarn(`${e}'s is undefined`)
  },
  reservedLoginId(e) {
    sdWarn(`${e} is invalid`)
  },
  reservedBind(e) {
    sdWarn(`${e} is invalid`)
  },
  reservedUnbind(e) {
    sdWarn(`${e} is invalid`)
  },
}
let ruleOption = {
  regName:
      /^((?!^distinct_id$|^original_id$|^time$|^properties$|^id$|^first_id$|^second_id$|^users$|^events$|^event$|^user_id$|^date$|^datetime$|^user_tag.*|^user_group.*)[a-z_$][\w$]*)$/i,
  loginIDReservedNames: ['$identity_anonymous_id', '$identity_cookie_id'],
  bindReservedNames: [
    '$identity_login_id',
    '$identity_anonymous_id',
    '$identity_cookie_id',
  ],
  unbindReservedNames: ['$identity_anonymous_id', IDENTITY_KEY.LOGIN],
  string(e) {
    return !!isString(e)
  },
  emptyString(e) {
    return !(!isString(e) || trim(e).length === 0)
  },
  regexTest(e) {
    return !(!isString(e) || !this.regName.test(e))
  },
  idLength(e) {
    return !(!isString(e) || e.length > sdPara.max_id_length)
  },
  keyLength(e) {
    return !(!isString(e) || e.length > sdPara.max_key_length)
  },
  stringLength(e) {
    return !(!isString(e) || e.length > sdPara.max_string_length)
  },
  voidZero(e) {
    return void 0 !== e
  },
  reservedLoginId(e) {
    return !(indexOf(this.loginIDReservedNames, e) > -1)
  },
  reservedUnbind(e) {
    return !(indexOf(this.unbindReservedNames, e) > -1)
  },
  reservedBind(e) {
    let t = store._state.history_login_id
    return (
      (!t || !t.name || t.name !== e)
      && !(indexOf(this.bindReservedNames, e) > -1)
    )
  },
}
let checkOption = {
  distinct_id: {
    rules: ['string', 'emptyString', 'idLength'],
    onComplete(e, t, r) {
      return (
        (!e
          && (r === 'emptyString' && (t = 'Id'),
          isFunction(checkLog[r]) && checkLog[r](t),
          r === 'idLength'))
        || e
      )
    },
  },
  event: {
    rules: ['string', 'emptyString', 'keyLength', 'regexTest'],
    onComplete(e, t, r) {
      return (
        e
        || (r === 'emptyString' && (t = 'eventName'),
        isFunction(checkLog[r]) && checkLog[r](t)),
        !0
      )
    },
  },
  propertyKey: {
    rules: ['string', 'emptyString', 'keyLength', 'regexTest'],
    onComplete(e, t, r) {
      return (
        e
        || (r === 'emptyString' && (t = 'Property key'),
        isFunction(checkLog[r]) && checkLog[r](t)),
        !0
      )
    },
  },
  propertyValue: {
    rules: ['voidZero'],
    onComplete(e, t, r) {
      return (
        e
        || ('Property Value',
        isFunction(checkLog[r]) && checkLog[r]('Property Value')),
        !0
      )
    },
  },
  properties(e) {
    return (
      isObject(e)
        ? each(e, (e, t) => {
            check({ propertyKey: t })
            check({ propertyValue: e }, (e, r, n) => {
              return (
                e
                || ((r = `${t}'s Value`),
                isFunction(checkLog[n]) && checkLog[n](r)),
                !0
              )
            })
          })
        : ruleOption.voidZero(e)
          && sdWarn(
            'properties\u53EF\u4EE5\u6CA1\u6709\uFF0C\u4F46\u6709\u7684\u8BDD\u5FC5\u987B\u662F\u5BF9\u8C61',
          ),
      !0
    )
  },
  propertiesMust(e) {
    return (
      e !== undefined && isObject(e) && !isEmptyObject(e)
        ? this.properties.call(this, e)
        : sdWarn('properties\u5FC5\u987B\u662F\u5BF9\u8C61'),
      !0
    )
  },
  item_type: {
    rules: ['string', 'emptyString', 'keyLength', 'regexTest'],
    onComplete(e, t, r) {
      return (
        e
        || (r === 'emptyString' && (t = 'item_type'),
        isFunction(checkLog[r]) && checkLog[r](t)),
        !0
      )
    },
  },
  item_id: {
    rules: ['string', 'emptyString', 'stringLength'],
    onComplete(e, t, r) {
      return (
        e
        || (r === 'emptyString' && (t = 'item_id'),
        isFunction(checkLog[r]) && checkLog[r](t)),
        !0
      )
    },
  },
  loginIdKey: {
    rules: [
      'string',
      'emptyString',
      'keyLength',
      'regexTest',
      'reservedLoginId',
    ],
    onComplete(e, t, r) {
      return (
        (!e
          && (r === 'emptyString' && (t = 'login_id_key'),
          isFunction(checkLog[r]) && checkLog[r](t),
          r === 'keyLength'))
        || e
      )
    },
  },
  bindKey: {
    rules: [
      'string',
      'emptyString',
      'keyLength',
      'regexTest',
      'reservedBind',
    ],
    onComplete(e, t, r) {
      return (
        (!e
          && (r === 'emptyString' && (t = 'Key'),
          isFunction(checkLog[r]) && checkLog[r](t),
          r === 'keyLength'))
        || e
      )
    },
  },
  unbindKey: {
    rules: [
      'string',
      'emptyString',
      'keyLength',
      'regexTest',
      'reservedUnbind',
    ],
    onComplete(e, t, r) {
      return (
        (!e
          && (r === 'emptyString' && (t = 'Key'),
          isFunction(checkLog[r]) && checkLog[r](t),
          r === 'keyLength'))
        || e
      )
    },
  },
  bindValue: {
    rules: ['string', 'emptyString', 'idLength'],
    onComplete(e, t, r) {
      return (
        (!e
          && (r === 'emptyString' && (t = 'Value'),
          isFunction(checkLog[r]) && checkLog[r](t),
          r === 'idLength'))
        || e
      )
    },
  },
  check(e, t, r) {
    let n = this[e]
    if (isFunction(n))
      return n.call(this, t)
    if (!n)
      return !1
    for (let i = 0; i < n.rules.length; i++) {
      let a = n.rules[i]
      let s = ruleOption[a](t)
      let o = isFunction(r) ? r(s, t, a) : n.onComplete(s, t, a)
      if (!s)
        return o
    }
    return !0
  },
}
function check(e, t) {
  for (let r in e) {
    if (
      Object.prototype.hasOwnProperty.call(e, r)
      && !checkOption.check(r, e[r], t)
    ) {
      return !1
    }
  }
  return !0
}
function strip_sa_properties(e, t) {
  return isObject(e)
    ? (each(e, (r, n) => {
        if (isArray(r)) {
          let i = [];
          (each(r, (e) => {
            if (isString(e)) {
              i.push(e)
            }
            else if (isUndefined(e)) {
              i.push('null')
            }
            else {
              try {
                i.push(JSON.stringify(e))
              }
              catch (t) {
                sdWarn(
                  '\u60A8\u7684\u6570\u636E-',
                  n,
                  r,
                  '\u6570\u7EC4\u91CC\u503C\u6709\u9519\u8BEF,\u5DF2\u5C06\u5176\u5220\u9664',
                )
              }
            }
          }),
          (e[n] = i))
        }
        let a = indexOf(t || [], n) > -1
        if (isObject(r) && n !== '$option' && !a) {
          try {
            e[n] = JSON.stringify(r)
          }
          catch (s) {
            (delete e[n],
            sdWarn(
              '\u60A8\u7684\u6570\u636E-',
              n,
              r,
              '\u6570\u636E\u503C\u6709\u9519\u8BEF\uFF0C\u5DF2\u5C06\u5176\u5220\u9664',
            ))
          }
        }
        else {
          isString(r)
          || isNumber(r)
          || isDate(r)
          || isBoolean(r)
          || isArray(r)
          || isFunction(r)
          || n === '$option'
          || a
          || (sdWarn(
              '\u60A8\u7684\u6570\u636E-',
              n,
              r,
              '-\u683C\u5F0F\u4E0D\u6EE1\u8DB3\u8981\u6C42\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u5C06\u5176\u5220\u9664',
            ),
            delete e[n])
        }
      }),
      e)
    : e
}
function formatString(e, t) {
  return isNumber(t) && e.length > t
    ? (sdWarn(
        `\u5B57\u7B26\u4E32\u957F\u5EA6\u8D85\u8FC7\u9650\u5236\uFF0C\u5DF2\u7ECF\u505A\u622A\u53D6--${
          e}`,
      ),
      e.slice(0, t))
    : e
}
function filterReservedProperties(e, t) {
  isObject(e)
  && each(
    [
      'distinct_id',
      'user_id',
      'id',
      'date',
      'datetime',
      'event',
      'events',
      'first_id',
      'original_id',
      'device_id',
      'properties',
      'second_id',
      'time',
      'users',
    ],
    (r, n) => {
      r in e
      && (indexOf(t || [], r) > -1
        || (n < 3
          ? (delete e[r],
            sdWarn(
              `\u60A8\u7684\u5C5E\u6027- ${
                r
              }\u662F\u4FDD\u7559\u5B57\u6BB5\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u5C06\u5176\u5220\u9664`,
            ))
          : sdWarn(
              `\u60A8\u7684\u5C5E\u6027- ${
                r
              }\u662F\u4FDD\u7559\u5B57\u6BB5\uFF0C\u8BF7\u907F\u514D\u5176\u4F5C\u4E3A\u5C5E\u6027\u540D`,
            )))
    },
  )
}
function searchObjString(e) {
  let t = ['$element_selector', '$element_path']
  let r = ['sensorsdata_app_visual_properties']
  isObject(e)
  && each(e, (n, i) => {
    if (isObject(n)) {
      searchObjString(e[i])
    }
    else if (isString(n)) {
      if (indexOf(r, i) > -1)
        return
      e[i] = formatString(
        n,
        indexOf(t, i) > -1 ? 1024 : sdPara.max_string_length,
      )
    }
  })
}
function searchZZAppStyle(e) {
  (typeof e.properties.$project != 'undefined'
    && ((e.project = e.properties.$project), delete e.properties.$project),
  typeof e.properties.$token != 'undefined'
  && ((e.token = e.properties.$token), delete e.properties.$token))
}
function formatItem(e) {
  if ('item_type' in e) {
    check({ item_type: e.item_type }, (t) => {
      return (t || delete e.item_type, !0)
    })
  }
  if ('item_id' in e) {
    check({ item_id: e.item_id }, (t, r, n) => {
      return (t || n !== 'string' || delete e.item_id, !0)
    })
  }
}
function formatProperties(e, t) {
  each(e, (r, n) => {
    indexOf(t || [], n) === -1
    && check({ propertyKey: n }, (t, r, i) => {
      return (t || i === 'keyLength' || delete e[n], !0)
    })
  })
}
function formatData(e) {
  let t = e.properties;
  (searchObjDate(e),
  isObject(t)
    ? (strip_sa_properties(t),
      filterReservedProperties(t),
      searchZZAppStyle(e),
      formatProperties(t),
      searchObjString(t))
    : 'properties' in e && (e.properties = {}),
  formatItem(e))
}
function addFinalData(e, t) {
  let r = t.sensors
  return (
    (e._track_id = Number(
      String(getRandom()).slice(2, 5)
      + String(getRandom()).slice(2, 4)
      + String(new Date().getTime()).slice(-4),
    )),
    (e._flush_time = new Date().getTime()),
    r.events.tempAdd('send', e),
    e
  )
}
var vtrackBase = {
  initUrl() {
    let e
    let t
    let r = {
      server_url: { project: '', host: '' },
      page_url: { host: '', pathname: '' },
    }
    if (!isHttpUrl(sd.para.server_url)) {
      return (
        sdError(
          '----vcollect---server_url\u5FC5\u987B\u4E3A\u6709\u6548 URL \u5B57\u7B26\u4E32',
        ),
        !1
      )
    }
    try {
      ((e = _URL(sd.para.server_url)),
      (r.server_url.project = e.searchParams.get('project') || 'default'),
      (r.server_url.host = e.host))
    }
    catch (n) {
      return (
        sdError('----vcollect---server_url\u89E3\u6790\u5F02\u5E38', n),
        !1
      )
    }
    try {
      ((t = _URL(location.href)),
      (r.page_url.host = t.hostname),
      (r.page_url.pathname = t.pathname))
    }
    catch (n) {
      return (
        sdError(
          '----vcollect---\u9875\u9762\u5730\u5740\u89E3\u6790\u5F02\u5E38',
          n,
        ),
        !1
      )
    }
    return r
  },
  isDiv(e) {
    if (
      e.element_path
      && trim(e.element_path.split('>').pop()).slice(0, 3) !== 'div'
    ) {
      return !1
    }
    return !0
  },
  configIsMatchNew(e, t) {
    if (isString(e.$element_selector) && isString(t.element_selector)) {
      if (t.element_field === 'element_selector' && t.function === 'equal')
        return e.$element_selector === t.element_selector
      if (
        t.element_field === 'element_selector'
        && t.function === 'contain'
      ) {
        return e.$element_selector.includes(t.element_selector)
      }
    }
    if (isString(e.$element_path) && isString(t.element_path)) {
      if (t.element_field === 'element_path' && t.function === 'equal')
        return e.$element_path === t.element_path
      if (t.element_field === 'element_path' && t.function === 'contain')
        return e.$element_path.includes(t.element_path)
    }
    return !1
  },
  configIsMatch(e, t) {
    return (
      (!t.limit_element_content
        || t.element_content === e.$element_content)
      && (!t.limit_element_position
        || t.element_position === String(e.$element_position))
      && (t.element_field && t.function
        ? vtrackBase.configIsMatchNew(e, t)
        : vtrackBase.configIsMatchOldVersion(e, t))
    )
  },
  configIsMatchOldVersion(e, t) {
    if (!t.element_path)
      return !1
    if (e.$element_position !== undefined) {
      if (t.element_path !== e.$element_path)
        return !1
    }
    else if (vtrackBase.isDiv({ element_path: t.element_path })) {
      if (!e.$element_path.includes(t.element_path))
        return !1
    }
    else if (t.element_path !== e.$element_path) {
      return !1
    }
    return !0
  },
  filterConfig(e, t, r) {
    let n = []
    if (!r) {
      let i = vtrackBase.initUrl()
      if (!i)
        return []
      r = i.page_url
    }
    return (
      e.event === '$WebClick'
      && each(t, (t) => {
        isObject(t)
        && (t.event_type === 'webclick' || t.event_type === 'appclick')
        && isObject(t.event)
        && t.event.url_host === r.host
        && t.event.url_path === r.pathname
        && vtrackBase.configIsMatch(e.properties, t.event)
        && n.push(t)
      }),
      n
    )
  },
  getPropElInLi(e, t) {
    if (!(e && isElement(e) && isString(t)))
      return null
    if (e.tagName.toLowerCase() !== 'li')
      return null
    let r = sd.heatmap.getDomSelector(e)
    if (r) {
      let n = getDomBySelector(r + t)
      return n || null
    }
    return (
      sdWarn(
        '----custom---\u83B7\u53D6\u540C\u7EA7\u5C5E\u6027\u5143\u7D20\u5931\u8D25\uFF0Cselector\u4FE1\u606F\u5F02\u5E38',
        r,
        t,
      ),
      null
    )
  },
  getProp(e, t) {
    if (!isObject(e))
      return !1
    if (!(isString(e.name) && e.name.length > 0)) {
      return (
        sdWarn(
          '----vcustom----\u5C5E\u6027\u540D\u4E0D\u5408\u6CD5,\u5C5E\u6027\u629B\u5F03',
          e.name,
        ),
        !1
      )
    }
    let r
    let n
    let i = {}
    if (e.method === 'content') {
      let a
      if (isString(e.element_selector) && e.element_selector.length > 0) {
        a = getDomBySelector(e.element_selector)
      }
      else {
        if (!t || !isString(e.list_selector)) {
          return (
            sdWarn(
              '----vcustom----\u5C5E\u6027\u914D\u7F6E\u5F02\u5E38\uFF0C\u5C5E\u6027\u629B\u5F03',
              e.name,
            ),
            !1
          )
        }
        let s = getDomBySelector(t.properties.$element_selector)
        if (!s) {
          return (
            sdWarn(
              '----vcustom----\u70B9\u51FB\u5143\u7D20\u83B7\u53D6\u5F02\u5E38\uFF0C\u5C5E\u6027\u629B\u5F03',
              e.name,
            ),
            !1
          )
        }
        let o = sd.heatmap.getClosestLi(s)
        a = vtrackBase.getPropElInLi(o, e.list_selector)
      }
      if (!a || !isElement(a)) {
        return (
          sdWarn(
            '----vcustom----\u5C5E\u6027\u5143\u7D20\u83B7\u53D6\u5931\u8D25\uFF0C\u5C5E\u6027\u629B\u5F03',
            e.name,
          ),
          !1
        )
      }
      if (a.tagName.toLowerCase() === 'input') {
        r = a.value || ''
      }
      else if (a.tagName.toLowerCase() === 'select') {
        let l = a.selectedIndex
        isNumber(l)
        && isElement(a[l])
        && (r = getElementContent$1(a[l], 'select'))
      }
      else {
        r = getElementContent$1(a, a.tagName.toLowerCase())
      }
      if (e.regular) {
        try {
          n = new RegExp(e.regular).exec(r)
        }
        catch (d) {
          return (
            sdWarn(
              '----vcustom----\u6B63\u5219\u5904\u7406\u5931\u8D25\uFF0C\u5C5E\u6027\u629B\u5F03',
              e.name,
            ),
            !1
          )
        }
        if (n === null) {
          return (
            sdWarn(
              '----vcustom----\u5C5E\u6027\u89C4\u5219\u5904\u7406\uFF0C\u672A\u5339\u914D\u5230\u7ED3\u679C,\u5C5E\u6027\u629B\u5F03',
              e.name,
            ),
            !1
          )
        }
        if (!isArray(n) || !isString(n[0])) {
          return (
            sdWarn(
              '----vcustom----\u6B63\u5219\u5904\u7406\u5F02\u5E38\uFF0C\u5C5E\u6027\u629B\u5F03',
              e.name,
              n,
            ),
            !1
          )
        }
        r = n[0]
      }
      if (e.type === 'STRING') {
        i[e.name] = r
      }
      else if (e.type === 'NUMBER') {
        if (r.length < 1) {
          return (
            sdWarn(
              '----vcustom----\u672A\u83B7\u53D6\u5230\u6570\u5B57\u5185\u5BB9\uFF0C\u5C5E\u6027\u629B\u5F03',
              e.name,
              r,
            ),
            !1
          )
        }
        if (isNaN(Number(r))) {
          return (
            sdWarn(
              '----vcustom----\u6570\u5B57\u7C7B\u578B\u5C5E\u6027\u8F6C\u6362\u5931\u8D25\uFF0C\u5C5E\u6027\u629B\u5F03',
              e.name,
              r,
            ),
            !1
          )
        }
        i[e.name] = Number(r)
      }
      return i
    }
    return (
      sdError(
        '----vcustom----\u5C5E\u6027\u4E0D\u652F\u6301\u6B64\u83B7\u53D6\u65B9\u5F0F',
        e.name,
        e.method,
      ),
      !1
    )
  },
  getAssignConfigs(e, t) {
    let r = vtrackBase.initUrl()
    if (!r || !r.page_url)
      return []
    if (!isObject(t))
      return []
    let n = []
    return (
      (t.events = t.events || t.eventList),
      isArray(t.events) && t.events.length > 0
        ? (each(t.events, (t) => {
            isObject(t)
            && isObject(t.event)
            && t.event.url_host === r.page_url.host
            && t.event.url_path === r.page_url.pathname
            && e(t)
            && n.push(t)
          }),
          n)
        : []
    )
  },
}
let vapph5CustomProp = {
  events: [],
  getAssignConfigs: vtrackBase.getAssignConfigs,
  filterConfig: vtrackBase.filterConfig,
  getProp: vtrackBase.getProp,
  initUrl: vtrackBase.initUrl,
  updateEvents(e) {
    isArray(e) && (this.events = e)
  },
  init() {
    this.initAppGetPropsBridge()
  },
  geth5Props(e) {
    let t = {}
    let r = []
    let n = this
    if (!this.events.length)
      return {}
    if (e.event === '$WebClick') {
      let i = this.filterConfig(e, this.events)
      if (!i.length)
        return {};
      (each(i, (i) => {
        isObject(i)
        && (isArray(i.properties)
          && i.properties.length > 0
          && each(i.properties, (r) => {
            if (isObject(r)) {
              if (!1 === r.h5) {
                (isArray(t.sensorsdata_app_visual_properties)
                  || (t.sensorsdata_app_visual_properties = []),
                t.sensorsdata_app_visual_properties.push(r))
              }
              else {
                let i = n.getProp(r, e)
                isObject(i) && (t = extend(t, i))
              }
            }
          }),
        isString(i.event_name) && r.push(i.event_name))
      }),
      sd.bridge.hasVisualModeBridge()
      && (t.sensorsdata_web_visual_eventName = r))
    }
    return (
      t.sensorsdata_app_visual_properties
      && (t.sensorsdata_app_visual_properties = base64Encode(
        JSON.stringify(t.sensorsdata_app_visual_properties),
      )),
      t
    )
  },
  initAppGetPropsBridge() {
    let e = this
    let t = new sd.SDKJSBridge('getJSVisualProperties')
    return (
      t.onAppNotify((r) => {
        let n = {}
        try {
          r = JSON.parse(base64Decode(r))
        }
        catch (s) {
          sdError('getJSVisualProperties data parse error!')
        }
        if (isObject(r)) {
          let i = r.sensorsdata_js_visual_properties
          let a = e.initUrl()
          a
          && ((a = a.page_url),
          isArray(i)
          && i.length > 0
          && each(i, (t) => {
            if (
              isObject(t)
              && t.url_host === a.host
                && t.url_path === a.pathname
                && t.h5
            ) {
              let r = e.getProp(t)
              isObject(r) && (n = extend(n, r))
            }
          }))
        }
        return (
          sd.bridge.bridge_info.platform === 'android'
          && t.notifyApp({ data: n }, r.message_id),
          n
        )
      }),
      t
    )
  },
}
let vapph5collect = {
  events: [],
  customProp: vapph5CustomProp,
  getAssignConfigs: vtrackBase.getAssignConfigs,
  initUrl: vtrackBase.initUrl,
  init() {
    if (this.initUrl()) {
      let e = this.getConfigFromApp();
      (e && this.updateConfigs(e),
      this.customProp.init(),
      this.initAppUpdateConfigBridge())
    }
  },
  initAppUpdateConfigBridge() {
    let e = this
    return new sd.SDKJSBridge('updateH5VisualConfig').onAppNotify(
      (t) => {
        if (t) {
          try {
            t = JSON.parse(base64Decode(t))
          }
          catch (r) {
            return void sdError(
              'updateH5VisualConfig result parse error\uFF01',
            )
          }
          e.updateConfigs(t)
        }
      },
    )
  },
  getConfigFromApp() {
    let e = new sd.SDKJSBridge(
      'sensorsdata_get_app_visual_config',
    ).notifyApp()
    if (e) {
      try {
        e = JSON.parse(base64Decode(e))
      }
      catch (t) {
        ((e = null), sdError('getAppVisualConfig result parse error\uFF01'))
      }
    }
    return e
  },
  updateConfigs(e) {
    ((this.events = this.filterConfigs(e)),
    this.customProp.updateEvents(this.events))
  },
  filterConfigs(e) {
    return this.getAssignConfigs((e) => {
      return !(!isObject(e) || !1 === e.h5)
    }, e)
  },
}
let unlimitedDiv = {
  events: [],
  init(e) {
    this.filterWebClickEvents(e)
  },
  filterWebClickEvents(e) {
    this.events = vtrackcollect.getAssignConfigs((e) => {
      return !(
        !isObject(e)
        || !0 !== e.event.unlimited_div
        || e.event_type !== 'webclick'
      )
    }, e)
  },
  isTargetEle(e) {
    let t = sd.heatmap.getEleDetail(e)
    if (!isObject(t) || !isString(t.$element_path))
      return !1
    for (let r = 0; r < this.events.length; r++) {
      if (
        isObject(this.events[r])
        && isObject(this.events[r].event)
        && vtrackcollect.configIsMatch(t, this.events[r].event)
      ) {
        return !0
      }
    }
    return !1
  },
}
let customProp = {
  events: [],
  configSwitch: !1,
  collectAble() {
    return (
      this.configSwitch
      && isObject(sd.para.heatmap)
      && sd.para.heatmap.get_vtrack_config
    )
  },
  updateEvents(e) {
    ((this.events = vtrackcollect.getAssignConfigs((e) => {
      return !!(
        isObject(e)
        && isArray(e.properties)
        && e.properties.length > 0
      )
    }, e)),
    this.events.length
      ? (this.configSwitch = !0)
      : (this.configSwitch = !1))
  },
  getVtrackProps(e) {
    let t = {}
    return this.collectAble()
      ? (e.event === '$WebClick'
        && (t = this.clickCustomPropMaker(e, this.events)),
        t)
      : {}
  },
  clickCustomPropMaker(e, t, r) {
    let n = this
    r = r || this.filterConfig(e, t, vtrackcollect.url_info.page_url)
    let i = {}
    return r.length
      ? (each(r, (t) => {
          isArray(t.properties)
          && t.properties.length > 0
          && each(t.properties, (t) => {
            let r = n.getProp(t, e)
            isObject(r) && extend(i, r)
          })
        }),
        i)
      : {}
  },
  getProp: vtrackBase.getProp,
  getPropElInLi: vtrackBase.getPropElInLi,
  filterConfig: vtrackBase.filterConfig,
}
var vtrackcollect = {
  unlimitedDiv,
  config: {},
  storageEnable: !0,
  storage_name: 'webjssdkvtrackcollect',
  para: { session_time: 18e5, timeout: 5e3, update_interval: 18e5 },
  url_info: {},
  timer: null,
  update_time: null,
  customProp,
  initUrl() {
    let e = vtrackBase.initUrl()
    if (e) {
      let t
      try {
        (((t = new urlParse(sd.para.server_url))._values.Path
          = '/config/visualized/Web.conf'),
        (e.api_url = t.getUrl()))
      }
      catch (r) {
        return (
          sdError(
            '----vtrackcollect---API\u5730\u5740\u89E3\u6790\u5F02\u5E38',
            r,
          ),
          !1
        )
      }
      this.url_info = e
    }
    return e
  },
  init() {
    if (!isObject(sd.para.heatmap) || !sd.para.heatmap.get_vtrack_config)
      return !1
    if (
      (_localStorage.isSupport() || (this.storageEnable = !1),
      !this.initUrl())
    ) {
      return (
        sdError(
          '----vtrackcustom----\u521D\u59CB\u5316\u5931\u8D25\uFF0Curl\u4FE1\u606F\u89E3\u6790\u5931\u8D25',
        ),
        !1
      )
    }
    if (this.storageEnable) {
      let e = store.readObjectVal(this.storage_name)
      if (isObject(e) && isObject(e.data)) {
        if (this.serverUrlIsSame(e.serverUrl)) {
          ((this.config = e.data),
          (this.update_time = e.updateTime),
          this.updateConfig(e.data))
          let t = new Date().getTime() - this.update_time
          if (isNumber(t) && t > 0 && t < this.para.session_time) {
            let r = this.para.update_interval - t
            this.setNextFetch(r)
          }
          else {
            this.getConfigFromServer()
          }
        }
        else {
          this.getConfigFromServer()
        }
      }
      else {
        this.getConfigFromServer()
      }
    }
    else {
      this.getConfigFromServer()
    }
    this.pageStateListenner()
  },
  serverUrlIsSame(e) {
    return (
      !!isObject(e)
      && e.host === this.url_info.server_url.host
      && e.project === this.url_info.server_url.project
    )
  },
  getConfigFromServer() {
    let e = this
    this.sendRequest(
      (t, r) => {
        e.update_time = new Date().getTime()
        let n = {};
        (t === 200
          ? r && isObject(r) && r.os === 'Web' && ((n = r), e.updateConfig(n))
          : t === 205
            ? e.updateConfig(n)
            : t === 304
              ? (n = e.config)
              : (sdError('----vtrackcustom----\u6570\u636E\u5F02\u5E38', t),
                e.updateConfig(n)),
        e.updateStorage(n),
        e.setNextFetch())
      },
      (t) => {
        ((e.update_time = new Date().getTime()),
        sdError(
          '----vtrackcustom----\u914D\u7F6E\u62C9\u53D6\u5931\u8D25',
          t,
        ),
        e.setNextFetch())
      },
    )
  },
  setNextFetch(e) {
    let t = this;
    (this.timer && (clearTimeout(this.timer), (this.timer = null)),
    (e = e || this.para.update_interval),
    (this.timer = setTimeout(() => {
      t.getConfigFromServer()
    }, e)))
  },
  pageStateListenner() {
    let e = this
    listenPageState({
      visible() {
        let t = new Date().getTime() - e.update_time
        if (isNumber(t) && t > 0 && t < e.para.update_interval) {
          let r = e.para.update_interval - t
          e.setNextFetch(r)
        }
        else {
          e.getConfigFromServer()
        }
      },
      hidden() {
        e.timer && (clearTimeout(e.timer), (e.timer = null))
      },
    })
  },
  updateConfig(e) {
    if (!isObject(e))
      return !1;
    ((this.config = e),
    this.customProp.updateEvents(e),
    this.unlimitedDiv.init(e))
  },
  updateStorage(e) {
    if (!this.storageEnable)
      return !1
    if (!isObject(e))
      return !1
    let t
    if (this.url_info.server_url) {
      t = this.url_info.server_url
    }
    else {
      let r = vtrackcollect.initUrl()
      if (!r)
        return !1
      t = r.server_url
    }
    let n = { updateTime: new Date().getTime(), data: e, serverUrl: t }
    store.saveObjectVal(this.storage_name, n)
  },
  sendRequest(e, t) {
    let r = { app_id: this.url_info.page_url.host };
    (this.config.version && (r.v = this.config.version),
    jsonp({
      url: this.url_info.api_url,
      callbackName: 'saJSSDKVtrackCollectConfig',
      data: r,
      timeout: this.para.timeout,
      success(t, r) {
        e(t, r)
      },
      error(e) {
        t(e)
      },
    }))
  },
  getAssignConfigs: vtrackBase.getAssignConfigs,
  configIsMatch: vtrackBase.configIsMatch,
}
function addBasicProps(e, t) {
  try {
    let r = t.sensors
    let n = {}
    isObject(e) && isObject(e.identities) && !isEmptyObject(e.identities)
      ? extend(n, e.identities)
      : extend(n, store.getIdentities())
    let i = {
      identities: n,
      distinct_id: store.getDistinctId(),
      lib: {
        $lib: 'js',
        $lib_method: 'code',
        $lib_version: String(r.lib_version),
      },
      properties: {},
    }
    return (
      isObject(e)
      && isObject(e.properties)
      && !isEmptyObject(e.properties)
      && (e.properties.$lib_detail
        && ((i.lib.$lib_detail = e.properties.$lib_detail),
        delete e.properties.$lib_detail),
      e.properties.$lib_method
      && ((i.lib.$lib_method = e.properties.$lib_method),
      delete e.properties.$lib_method)),
      extend2Lev(i, store.getUnionId(), e),
      isObject(e.properties)
      && !isEmptyObject(e.properties)
      && extend(i.properties, e.properties),
      i.event === '$UnbindID'
      && (i.login_id && delete i.login_id,
      i.anonymous_id && delete i.anonymous_id),
      (e.type && e.type.slice(0, 7) === 'profile')
      || (r.para.properties_priority && r.para.properties_priority === 3
        ? (i.properties = extend(
            {},
            pageInfo.properties(),
            store.getSessionProps(),
            pageInfo.currentProps,
            store.getProps(),
            i.properties,
          ))
        : (i.properties = extend(
            {},
            pageInfo.properties(),
            store.getProps(),
            store.getSessionProps(),
            pageInfo.currentProps,
            i.properties,
          )),
      r.para.preset_properties.latest_referrer
      && !isString(i.properties.$latest_referrer)
      && (i.properties.$latest_referrer = '\u53D6\u503C\u5F02\u5E38'),
      r.para.preset_properties.latest_search_keyword
      && !isString(i.properties.$latest_search_keyword)
      && ((r.para.preset_properties.search_keyword_baidu
        && isString(i.properties.$search_keyword_id)
        && isNumber(i.properties.$search_keyword_id_hash)
        && isString(i.properties.$search_keyword_id_type))
      || (i.properties.$latest_search_keyword = '\u53D6\u503C\u5F02\u5E38')),
      r.para.preset_properties.latest_traffic_source_type
      && !isString(i.properties.$latest_traffic_source_type)
      && (i.properties.$latest_traffic_source_type
        = '\u53D6\u503C\u5F02\u5E38'),
      r.para.preset_properties.latest_landing_page
      && !isString(i.properties.$latest_landing_page)
      && (i.properties.$latest_landing_page = '\u53D6\u503C\u5F02\u5E38'),
      r.para.preset_properties.latest_wx_ad_click_id === 'not_collect'
        ? (delete i.properties._latest_wx_ad_click_id,
          delete i.properties._latest_wx_ad_hash_key,
          delete i.properties._latest_wx_ad_callbacks)
        : r.para.preset_properties.latest_wx_ad_click_id
          && !isString(i.properties._latest_wx_ad_click_id)
          && ((i.properties._latest_wx_ad_click_id = '\u53D6\u503C\u5F02\u5E38'),
          (i.properties._latest_wx_ad_hash_key = '\u53D6\u503C\u5F02\u5E38'),
          (i.properties._latest_wx_ad_callbacks
            = '\u53D6\u503C\u5F02\u5E38')),
      isString(i.properties._latest_wx_ad_click_id)
      && (i.properties.$url = getURL())),
      i.properties.$time && isDate(i.properties.$time)
        ? ((i.time = 1 * i.properties.$time), delete i.properties.$time)
        : (i.time = 1 * new Date()),
      (function (e) {
        if (r.bridge && r.bridge.bridge_info.verify_success === 'success') {
          let t = vapph5collect.customProp.geth5Props(
            JSON.parse(JSON.stringify(e)),
          )
          isObject(t)
          && !isEmptyObject(t)
          && (e.properties = extend(e.properties, t))
        }
        let n = vtrackcollect.customProp.getVtrackProps(
          JSON.parse(JSON.stringify(e)),
        )
        isObject(n)
        && !isEmptyObject(n)
        && (e.properties = extend(e.properties, n))
      })(i),
      parseSuperProperties(i),
      saNewUser.checkIsAddSign(i),
      saNewUser.checkIsFirstTime(i),
      addReferrerHost(i),
      addPropsHook(i),
      i
    )
  }
  catch (a) {
    return { _debug_web_msg: String(a) }
  }
}
let interceptors = {
  basicProps: { priority: 0, entry: addBasicProps },
  formatData: { priority: 0, entry: formatData },
  finalAdjustData: { priority: 0, entry: addFinalData },
}
let buildDataStageImpl = {
  stage: null,
  init(e) {
    this.stage = e
  },
  interceptor: interceptors,
}
function processBasicProps(e) {
  return buildDataStageImpl.stage.process('basicProps', e)
}
function processFormatData(e) {
  return buildDataStageImpl.stage.process('formatData', e)
}
let saEvent = {}
function trackLinkByCustomTrackFunc(e, t, r, n) {
  let i = null
  if (
    ((e = e || {}).ele && (i = e.ele),
    e.event && (i = e.target ? e.target : e.event.target),
    (r = r || {}),
    !i || typeof i != 'object')
  ) {
    return !1
  }
  if (
    !i.href
    || i.href.startsWith('javascript')
    || i.target
    || i.download
    || i.onclick
  ) {
    return (n(t, r), !1)
  }
  function a(e) {
    (e.stopPropagation(), e.preventDefault())
    let a = !1
    function s() {
      a || ((a = !0), (location.href = i.href))
    }
    (setTimeout(s, 1e3), n(t, r, s))
  }
  (e.event && a(e.event),
  e.ele
  && saAddEvent(e.ele, 'click', (e) => {
    a(e)
  }))
}
function getSafeHttpProtocol() {
  let e = location.protocol
  return e === 'http:' || e === 'https:' ? e : 'http:'
}
((saEvent.check = check),
(saEvent.sendItem = function (e) {
  let t = {
    lib: {
      $lib: 'js',
      $lib_method: 'code',
      $lib_version: String(sd.lib_version),
    },
    time: 1 * new Date(),
  };
  (extend(t, e), processFormatData(t), sd.kit.sendData(t))
}),
(saEvent.send = function (e, t) {
  let r = sd.kit.buildData(e)
  sd.kit.sendData(r, t)
}))
let viewStageImpl = {
  stage: null,
  init(e) {
    this.stage = e
  },
}
function processWebClickEvent(e) {
  return viewStageImpl.stage.process('webClickEvent', e)
}
function processWebStayEvent(e) {
  return viewStageImpl.stage.process('webStayEvent', e)
}
let UNLIMITED_TAGS_MAP = { label: !1, li: !1, a: !0, button: !0 }
var heatmap = {
  otherTags: [],
  initUnlimitedTags() {
    each(heatmap.otherTags, (e) => {
      e in UNLIMITED_TAGS_MAP && (UNLIMITED_TAGS_MAP[e] = !0)
    })
  },
  isUnlimitedTag(e) {
    if (!e || e.nodeType !== 1)
      return !1
    let t = e.nodeName.toLowerCase()
    return (
      UNLIMITED_TAGS_MAP[t] || hasAttributes(e, sd.para.heatmap.track_attr)
    )
  },
  getTargetElement(e, t) {
    let r = this
    let n = e
    if (typeof n != 'object')
      return null
    if (typeof n.tagName != 'string')
      return null
    let i = n.tagName.toLowerCase()
    if (i.toLowerCase() === 'body' || i.toLowerCase() === 'html')
      return null
    if (!n || !n.parentNode || !n.parentNode.children)
      return null
    let a = n.parentNode
    let s = r.otherTags
    if (i === 'a' || i === 'button' || i === 'input' || i === 'textarea')
      return n
    if (indexOf(s, i) > -1)
      return n
    if (
      i === 'area'
      && a.tagName.toLowerCase() === 'map'
      && ry(a).prev().tagName
      && ry(a).prev().tagName.toLowerCase() === 'img'
    ) {
      return ry(a).prev()
    }
    if (
      i === 'div'
      && sd.para.heatmap.collect_tags.div
      && r.isDivLevelValid(n)
      && (((sd.para.heatmap
        && sd.para.heatmap.collect_tags
        && sd.para.heatmap.collect_tags.div
        && sd.para.heatmap.collect_tags.div.max_level)
      || 1) > 1
      || r.isCollectableDiv(n))
    ) {
      return n
    }
    if (r.isStyleTag(i) && sd.para.heatmap.collect_tags.div) {
      let o = r.getCollectableParent(n)
      if (o && r.isDivLevelValid(o))
        return o
    }
    return (
      r.hasElement(
        { event: (t && t.originalEvent) || t, element: e },
        (e) => {
          return r.isUnlimitedTag(e)
        },
      ) || null
    )
  },
  getDivLevels(e, t) {
    let r = heatmap.getElementPath(e, !0, t).split(' > ')
    let n = 0
    return (
      each(r, (e) => {
        e === 'div' && n++
      }),
      n
    )
  },
  isDivLevelValid(e) {
    for (
      let t
          = (sd.para.heatmap
            && sd.para.heatmap.collect_tags
            && sd.para.heatmap.collect_tags.div
            && sd.para.heatmap.collect_tags.div.max_level)
          || 1,
        r = e.getElementsByTagName('div'),
        n = r.length - 1;
      n >= 0;
      n--
    ) {
      if (heatmap.getDivLevels(r[n], e) > t)
        return !1
    }
    return !0
  },
  getElementPath(e, t, r) {
    for (var n = []; e.parentNode && isElement(e);) {
      if (!isString(e.tagName))
        return 'unknown'
      if (e.id && !t && /^[A-Z][-\w:.]*$/i.test(e.id)) {
        n.unshift(`${e.tagName.toLowerCase()}#${e.id}`)
        break
      }
      if (r && e === r) {
        n.unshift(e.tagName.toLowerCase())
        break
      }
      if (e === document.body) {
        n.unshift('body')
        break
      }
      (n.unshift(e.tagName.toLowerCase()), (e = e.parentNode))
    }
    return n.join(' > ')
  },
  getClosestLi(e) {
    return (function (e, t) {
      for (; e && e !== document && e.nodeType === 1; e = e.parentNode) {
        if (e.tagName && isString(e.tagName) && e.tagName.toLowerCase() === t)
          return e
      }
      return null
    })(e, 'li')
  },
  getElementPosition(e, t, r) {
    let n = sd.heatmap.getClosestLi(e)
    if (!n || !isElement(e) || !isString(e.tagName))
      return null
    let i = e.tagName.toLowerCase()
    let a = n.getElementsByTagName(i)
    let s = a.length
    let o = []
    if (s > 1) {
      for (let l = 0; l < s; l++) {
        sd.heatmap.getElementPath(a[l], r) === t && o.push(a[l])
      }
      if (o.length > 1)
        return indexOf(o, e)
    }
    return (function (e) {
      if (!e.parentNode)
        return ''
      if (ry(e).getSameTypeSiblings().length === 1)
        return 0
      for (
        var t = 0, r = e;
        ry(r).previousElementSibling().ele;
        r = ry(r).previousElementSibling().ele, t++
      );
      return t
    })(n)
  },
  setNotice(e) {
    ((sd.is_heatmap_render_mode = !0),
    sd.para.heatmap
    || (sd.errorMsg
      = '\u60A8 SDK \u6CA1\u6709\u914D\u7F6E\u5F00\u542F\u70B9\u51FB\u56FE \uFF01'),
    e
    && e.slice(0, 5) === 'http:'
    && location.protocol === 'https:'
    && (sd.errorMsg
      = '\u60A8\u7684\u5F53\u524D\u9875\u9762\u662F https \u7684\u5730\u5740\uFF0C\u795E\u7B56\u5206\u6790\u73AF\u5883\u4E5F\u5FC5\u987B\u662F https \uFF01'),
    sd.para.heatmap_url
    || (sd.para.heatmap_url
      = `${getSafeHttpProtocol()
      }//static.sensorsdata.cn/sdk/${
        sd.lib_version
      }/heatmap.min.js`))
  },
  getDomIndex(e) {
    if (!e.parentNode)
      return -1
    for (
      let t = 0, r = e.tagName, n = e.parentNode.children, i = 0;
      i < n.length;
      i++
    ) {
      if (n[i].tagName === r) {
        if (e === n[i])
          return t
        t++
      }
    }
    return -1
  },
  selector(e, t) {
    if (!e || !isElement(e) || !isString(e.tagName))
      return ''
    let r
      = e.parentNode && e.parentNode.nodeType == 9 ? -1 : this.getDomIndex(e)
    return e.getAttribute
      && e.getAttribute('id')
      && /^[A-Z][-\w:.]*$/i.test(e.getAttribute('id'))
      && (!sd.para.heatmap
        || (sd.para.heatmap
          && sd.para.heatmap.element_selector !== 'not_use_id'))
        && !t
      ? `#${e.getAttribute('id')}`
      : e.tagName.toLowerCase() + (~r ? `:nth-of-type(${r + 1})` : '')
  },
  getDomSelector(e, t, r) {
    if (!(e && e.parentNode && e.parentNode.children && isString(e.tagName)))
      return 'unknown'
    t = t && t.join ? t : []
    let n = e.nodeName.toLowerCase()
    return e && n !== 'body' && e.nodeType == 1
      ? (t.unshift(this.selector(e, r)),
        e.getAttribute
        && e.getAttribute('id')
        && /^[A-Z][-\w:.]*$/i.test(e.getAttribute('id'))
        && sd.para.heatmap
        && sd.para.heatmap.element_selector !== 'not_use_id'
        && !r
          ? t.join(' > ')
          : this.getDomSelector(e.parentNode, t, r))
      : (t.unshift('body'), t.join(' > '))
  },
  na() {
    let e = document.documentElement.scrollLeft || window.pageXOffset
    return Number.parseInt(isNaN(e) ? 0 : e, 10)
  },
  i() {
    let e = 0
    try {
      ((e
        = (o.documentElement && o.documentElement.scrollTop) || m.pageYOffset),
      (e = isNaN(e) ? 0 : e))
    }
    catch (t) {
      e = 0
    }
    return Number.parseInt(e, 10)
  },
  getBrowserWidth() {
    let e = window.innerWidth || document.body.clientWidth
    return isNaN(e) ? 0 : Number.parseInt(e, 10)
  },
  getBrowserHeight() {
    let e = window.innerHeight || document.body.clientHeight
    return isNaN(e) ? 0 : Number.parseInt(e, 10)
  },
  getScrollWidth() {
    let e = Number.parseInt(document.body.scrollWidth, 10)
    return isNaN(e) ? 0 : e
  },
  getEleDetail(e) {
    let t = this.getDomSelector(e)
    let r = getEleInfo({ target: e });
    ((r.$element_selector = t || ''),
    (r.$element_path = sd.heatmap.getElementPath(
      e,
      sd.para.heatmap && sd.para.heatmap.element_selector === 'not_use_id',
    )))
    let n = sd.heatmap.getElementPosition(
      e,
      r.$element_path,
      sd.para.heatmap && sd.para.heatmap.element_selector === 'not_use_id',
    )
    return (isNumber(n) && (r.$element_position = n), r)
  },
  getPointerEventProp(e, t) {
    if (!e)
      return {}
    function r() {
      return {
        scrollLeft:
            document.body.scrollLeft
            || document.documentElement.scrollLeft
            || 0,
        scrollTop:
            document.body.scrollTop || document.documentElement.scrollTop || 0,
      }
    }
    function n(e) {
      if (document.documentElement.getBoundingClientRect) {
        let t = e.getBoundingClientRect()
        return {
          targetEleX: t.left + r().scrollLeft || 0,
          targetEleY: t.top + r().scrollTop || 0,
        }
      }
    }
    function i(e) {
      return Number(Number(e).toFixed(3))
    }
    return (function (e) {
      let a
        = e.pageX
          || e.clientX + r().scrollLeft
          || e.offsetX + n(t).targetEleX
          || 0
      let s
        = e.pageY
          || e.clientY + r().scrollTop
          || e.offsetY + n(t).targetEleY
          || 0
      return { $page_x: i(a), $page_y: i(s) }
    })(e)
  },
  start(e, t, r, n, i) {
    if (
      isObject(sd.para.heatmap)
      && isFunction(sd.para.heatmap.collect_element)
      && !sd.para.heatmap.collect_element(t)
    ) {
      return !1
    }
    processWebClickEvent(heatmap.getBasicEleInfo(e, t, r, n, i))
  },
  getBasicEleInfo(e, t, r, n, i) {
    let a = isObject(n) ? n : {}
    let s = isFunction(i) ? i : isFunction(n) ? n : undefined
    let o = this.getEleDetail(t)
    if (sd.para.heatmap && sd.para.heatmap.custom_property) {
      let l = sd.para.heatmap.custom_property(t)
      isObject(l) && (o = extend(o, l))
    }
    return {
      event: e,
      target: t,
      props: (o = extend(o, this.getPointerEventProp(e, t), a)),
      tagName: r,
      callback: s,
    }
  },
  hasElement(e, t) {
    let r
    if (e.event) {
      let n = e.event
      r = n.path || (n._getPath && n._getPath())
    }
    else {
      e.element && (r = ry(e.element).getParents())
    }
    if (r && isArray(r) && r.length > 0) {
      for (let i = 0; i < r.length; i++) {
        if (typeof r[i] == 'object' && r[i].nodeType === 1 && t(r[i]))
          return r[i]
      }
    }
  },
  isStyleTag(e, t) {
    return (
      !(indexOf(['a', 'div', 'input', 'button', 'textarea'], e) > -1)
      && (!t
        || (sd.para.heatmap
          && sd.para.heatmap.collect_tags
          && sd.para.heatmap.collect_tags.div)
        ? !!(
            isObject(sd.para.heatmap)
            && isObject(sd.para.heatmap.collect_tags)
            && isObject(sd.para.heatmap.collect_tags.div)
            && isArray(sd.para.heatmap.collect_tags.div.ignore_tags)
            && indexOf(sd.para.heatmap.collect_tags.div.ignore_tags, e) > -1
          )
        : indexOf(
          [
            'mark',
            '/mark',
            'strong',
            'b',
            'em',
            'i',
            'u',
            'abbr',
            'ins',
            'del',
            's',
            'sup',
          ],
          e,
        ) > -1)
    )
  },
  isCollectableDiv(e, t) {
    try {
      if (e.children.length === 0)
        return !0
      for (let r = 0; r < e.children.length; r++) {
        if (e.children[r].nodeType === 1) {
          let n = isString(e.children[r].tagName)
            ? e.children[r].tagName.toLowerCase()
            : 'unknown'
          let i
            = sd.para
              && sd.para.heatmap
              && sd.para.heatmap.collect_tags
              && sd.para.heatmap.collect_tags.div
              && sd.para.heatmap.collect_tags.div.max_level
          if (!((n === 'div' && i > 1) || this.isStyleTag(n, t)))
            return !1
          if (!this.isCollectableDiv(e.children[r], t))
            return !1
        }
      }
      return !0
    }
    catch (a) {
      sdError(`isCollectableDiv:${a}`)
    }
    return !1
  },
  getCollectableParent(e, t) {
    try {
      let r = e.parentNode
      let n = r ? r.tagName.toLowerCase() : ''
      if (n === 'body')
        return !1
      let i
        = sd.para
          && sd.para.heatmap
          && sd.para.heatmap.collect_tags
          && sd.para.heatmap.collect_tags.div
          && sd.para.heatmap.collect_tags.div.max_level
      if (n && n === 'div' && (i > 1 || this.isCollectableDiv(r, t)))
        return r
      if (r && this.isStyleTag(n, t))
        return this.getCollectableParent(r, t)
    }
    catch (a) {
      sdError(`getCollectableParent:${a}`)
    }
    return !1
  },
  listenUrlChange(e) {
    (e(),
    sd.ee.spa.on('switch', () => {
      e()
    }))
  },
  initScrollmap() {
    if (
      !isObject(sd.para.heatmap)
      || sd.para.heatmap.scroll_notice_map !== 'default'
    ) {
      return !1
    }
    let e = !0
    sd.para.scrollmap
    && isFunction(sd.para.scrollmap.collect_url)
    && this.listenUrlChange(() => {
      e = !!sd.para.scrollmap.collect_url()
    })
    let t = (function (e) {
      let t = {}
      return (
        (t.timeout = e.timeout || 1e3),
        (t.func = e.func),
        (t.hasInit = !1),
        (t.inter = null),
        (t.main = function (e, t) {
          (this.func(e, t), (this.inter = null))
        }),
        (t.go = function (e) {
          let r = {}
          this.inter
          || ((r.$viewport_position
            = (document.documentElement
              && document.documentElement.scrollTop)
            || window.pageYOffset
            || document.body.scrollTop
            || 0),
          (r.$viewport_position = Math.round(r.$viewport_position) || 0),
          e
            ? t.main(r, !0)
            : (this.inter = setTimeout(() => {
                t.main(r)
              }, this.timeout)))
        }),
        t
      )
    })({
      timeout: 1e3,
      func(e, t) {
        let r
          = (document.documentElement
            && document.documentElement.scrollTop)
          || window.pageYOffset
          || document.body.scrollTop
          || 0
        let n = new Date()
        let i = n - this.current_time;
        (((i > sd.para.heatmap.scroll_delay_time
          && r - e.$viewport_position != 0)
        || t)
      && ((e.$url = getURL()),
      (e.$title = document.title),
      (e.$url_path = getURLPath()),
      (e.event_duration = Math.min(
        sd.para.heatmap.scroll_event_duration,
        Number.parseInt(i) / 1e3,
      )),
      (e.event_duration = e.event_duration < 0 ? 0 : e.event_duration),
      processWebStayEvent(e)),
        (this.current_time = n))
      },
    });
    ((t.current_time = new Date()),
    saAddEvent(window, 'scroll', () => {
      if (!e)
        return !1
      t.go()
    }),
    saAddEvent(window, 'beforeunload', () => {
      if (!e)
        return !1
      t.go('notime')
    }))
  },
  initHeatmap() {
    let e = this
    let t = !0
    if (!isObject(sd.para.heatmap) || sd.para.heatmap.clickmap !== 'default')
      return !1;
    (isFunction(sd.para.heatmap.collect_url)
      && this.listenUrlChange(() => {
        t = !!sd.para.heatmap.collect_url()
      }),
    sd.para.heatmap.collect_elements === 'all'
      ? (sd.para.heatmap.collect_elements = 'all')
      : (sd.para.heatmap.collect_elements = 'interact'),
    sd.para.heatmap.collect_elements === 'all'
      ? saAddEvent(document, 'click', (r) => {
          if (!t)
            return !1
          let n = r || window.event
          if (!n)
            return !1
          let i = n.target || n.srcElement
          if (typeof i != 'object')
            return !1
          if (typeof i.tagName != 'string')
            return !1
          let a = i.tagName.toLowerCase()
          if (a === 'body' || a === 'html')
            return !1
          if (!i || !i.parentNode || !i.parentNode.children)
            return !1
          let s = isString(i.parentNode.tagName)
            ? i.parentNode.tagName.toLowerCase()
            : 'unknown'
          s === 'a' || s === 'button'
            ? e.start(n, i.parentNode, s)
            : e.start(n, i, a)
        })
      : saAddEvent(document, 'click', (r) => {
          if (!t)
            return !1
          let n = r || window.event
          if (!n)
            return !1
          let i = n.target || n.srcElement
          let a = sd.heatmap.getTargetElement(i, r)
          if (!isElement(a) && !isString(i.tagName))
            return !1
          isElement(a) && isString(a.tagName)
            ? e.start(n, a, a.tagName.toLowerCase())
            : isElement(i)
              && i.tagName.toLowerCase() === 'div'
              && isObject(sd.para.heatmap)
              && sd.para.heatmap.get_vtrack_config
              && unlimitedDiv.events.length > 0
              && unlimitedDiv.isTargetEle(i)
              && e.start(n, i, i.tagName.toLowerCase(), {
                $lib_method: 'vtrack',
              })
        }))
  },
}
function getClassifiedUtms() {
  let e = pageInfo.campaignParams()
  let t = {}
  return (
    each(e, (e, r, n) => {
      (` ${sd.source_channel_standard} `).includes(` ${r} `)
        ? (t[`$${r}`] = n[r])
        : (t[r] = n[r])
    }),
    t
  )
}
function sendFirstProfile(e, t, r) {
  if (sd.is_first_visitor && r) {
    let n = {}
    sd.para.preset_properties.search_keyword_baidu
    && isReferralTraffic(document.referrer)
    && isBaiduTraffic()
    && ((n.$search_keyword_id = getBaiduKeyword.id()),
    (n.$search_keyword_id_type = getBaiduKeyword.type()),
    (n.$search_keyword_id_hash = hashCode53(n.$search_keyword_id)))
    let i = document.characterSet || document.charset
    let a = getReferrer(null, t);
    (e(
      extend(
        {
          $first_visit_time: new Date(),
          $first_referrer: a,
          $first_referrer_host: a
            ? getHostname(a, '\u53D6\u503C\u5F02\u5E38')
            : '',
          $first_browser_language: isString(navigator.language)
            ? navigator.language.toLowerCase()
            : '\u53D6\u503C\u5F02\u5E38',
          $first_browser_charset: isString(i)
            ? i.toUpperCase()
            : '\u53D6\u503C\u5F02\u5E38',
          $first_traffic_source_type: getSourceFromReferrer(),
          $first_search_keyword: getKeywordFromReferrer(),
          $timezone_offset: new Date().getTimezoneOffset(),
        },
        getClassifiedUtms(),
        n,
      ),
    ),
    (sd.is_first_visitor = !1))
  }
}
let commonWays = {
  autoTrackIsUsed: !1,
  isReady(e) {
    isFunction(e) ? e() : sd.log('error: isReady callback must be function')
  },
  getUtm() {
    return pageInfo.campaignParams()
  },
  getStayTime() {
    return (new Date() - sd._t) / 1e3
  },
  setProfileLocal(e) {
    if (!_localStorage.isSupport())
      return (sd.setProfile(e), !1)
    if (!isObject(e) || isEmptyObject(e))
      return !1
    let t = store.readObjectVal('sensorsdata_2015_jssdk_profile')
    let r = !1
    if (isObject(t) && !isEmptyObject(t)) {
      for (let n in e)
        (!(n in t && t[n] !== e[n]) && n in t) || ((t[n] = e[n]), (r = !0))
      r
      && (store.saveObjectVal('sensorsdata_2015_jssdk_profile', t),
      sd.setProfile(e))
    }
    else {
      (store.saveObjectVal('sensorsdata_2015_jssdk_profile', e),
      sd.setProfile(e))
    }
  },
  setInitReferrer() {
    let e = getReferrer()
    sd.setOnceProfile({
      _init_referrer: e,
      _init_referrer_host: pageInfo.pageProp.referrer_host,
    })
  },
  setSessionReferrer() {
    let e = getReferrer()
    store.setSessionPropsOnce({
      _session_referrer: e,
      _session_referrer_host: pageInfo.pageProp.referrer_host,
    })
  },
  setDefaultAttr() {
    pageInfo.register({
      _current_url: location.href,
      _referrer: getReferrer(),
      _referring_host: pageInfo.pageProp.referrer_host,
    })
  },
  trackHeatMap(e, t, r) {
    if (typeof e == 'object' && e.tagName && isElement(e.parentNode)) {
      let n = e.tagName.toLowerCase()
      let i = e.parentNode.tagName.toLowerCase()
      let a
        = sd.para.heatmap && sd.para.heatmap.track_attr
          ? sd.para.heatmap.track_attr
          : ['data-sensors-click']
      n === 'button'
      || n === 'a'
      || i === 'a'
      || i === 'button'
      || n === 'input'
      || n === 'textarea'
      || hasAttributes(e, a)
      || heatmap.start(null, e, n, t, r)
    }
  },
  trackAllHeatMap(e, t, r) {
    if (typeof e == 'object' && e.tagName) {
      let n = e.tagName.toLowerCase()
      heatmap.start(null, e, n, t, r)
    }
  },
  autoTrackSinglePage(e, t) {
    let r
    r = this.autoTrackIsUsed
      ? pageInfo.pageProp.url
      : pageInfo.pageProp.referrer
    let n = !(e = isObject(e) ? e : {}).not_set_profile
    function i(e, t) {
      (sd.track(
        '$pageview',
        extend(
          {
            $referrer: r,
            $url: getURL(),
            $url_path: getURLPath(),
            $title: document.title,
          },
          e,
          getClassifiedUtms(),
        ),
        t,
      ),
      (r = getURL()))
    }
    (e.not_set_profile && delete e.not_set_profile,
    i(e, t),
    (this.autoTrackSinglePage = i),
    sendFirstProfile(sd.setOnceProfile, !1, n))
  },
  autoTrackWithoutProfile(e, t) {
    ((e = isObject(e) ? e : {}),
    this.autoTrack(extend(e, { not_set_profile: !0 }), t))
  },
  autoTrack(e, t) {
    e = isObject(e) ? e : {}
    let r = getClassifiedUtms()
    let n = !e.not_set_profile
    e.not_set_profile && delete e.not_set_profile
    let i = location.href;
    (sd.para.is_single_page
      && addHashEvent(() => {
        let n = getReferrer(i, !0);
        (sd.track(
          '$pageview',
          extend(
            {
              $referrer: n,
              $url: getURL(),
              $url_path: getURLPath(),
              $title: document.title,
            },
            r,
            e,
          ),
          t,
        ),
        (i = getURL()))
      }),
    sd.track(
      '$pageview',
      extend(
        {
          $referrer: getReferrer(null, !0),
          $url: getURL(),
          $url_path: getURLPath(),
          $title: document.title,
        },
        r,
        e,
      ),
      t,
    ),
    sendFirstProfile(sd.setOnceProfile, !0, n),
    (this.autoTrackIsUsed = !0))
  },
  getAnonymousID() {
    return isEmptyObject(store._state)
      ? 'SDK is not initialized.'
      : store.getAnonymousId()
  },
  setPlugin(e) {
    if (!isObject(e))
      return !1
    each(e, (e, t) => {
      isFunction(e)
      && (isObject(window.SensorsDataWebJSSDKPlugin)
        && window.SensorsDataWebJSSDKPlugin[t]
        ? e(window.SensorsDataWebJSSDKPlugin[t])
        : isObject(sd.modules) && sd.modules[t]
          ? e(sd.modules[t])
          : sdWarn(`${t}is not found,please check sensorsdata documents.`))
    })
  },
  useModulePlugin() {
    sd.use.apply(sd, arguments)
  },
  useAppPlugin() {
    this.setPlugin.apply(this, arguments)
  },
}
function loginBody(e, t) {
  let r = e.id
  let n = e.callback
  let i = e.name
  let a = store.getFirstId()
  let s = store.getOriginDistinctId()
  if (!check({ distinct_id: r }))
    return (sdError('login id is invalid'), !1)
  if (r === store.getOriginDistinctId() && !a)
    return (sdError('login id is equal to distinct_id'), !1)
  if (
    isObject(store._state.identities)
    && store._state.identities.hasOwnProperty(i)
    && r === store._state.first_id
  ) {
    return !1
  }
  if (
    store._state.history_login_id.name !== i
    || r !== store._state.history_login_id.value
  ) {
    ((store._state.identities[i] = r),
    store.set('history_login_id', { name: i, value: r }),
    a || store.set('first_id', s),
    t(r, '$SignUp', {}, n))
    let o = {
      $identity_cookie_id: store._state.identities.$identity_cookie_id,
    }
    return ((o[i] = r), resetIdentities(o), !0)
  }
  return !1
}
function resetIdentities(e) {
  let t = {}
  for (let r in e) t[r] = e[r];
  ((store._state.identities = t), store.save())
}
function deleteBindIDData(e, t) {
  if (!check({ unbindKey: e, bindValue: t }))
    return !1
  if (
    isObject(store._state.identities)
    && store._state.identities.hasOwnProperty(e)
    && store._state.identities[e] === t
  ) {
    let r = store.getUnionId().login_id;
    (r
      && `${e}+${t}` === r
      && ((store._state.distinct_id = store._state.first_id),
      (store._state.first_id = ''),
      store.set('history_login_id', { name: '', value: '' })),
    e !== '$identity_cookie_id'
    && (delete store._state.identities[e], store.save()))
  }
  let n = {}
  return ((n[e] = t), n)
}
function setInitVar() {
  ((sd._t = sd._t || 1 * new Date()),
  (sd.is_first_visitor = !1),
  (sd.source_channel_standard = source_channel_standard))
}
function initPara(e) {
  (extend(sdPara, e || sd.para || {}), (sd.para = sdPara))
  let t
  let r = {}
  if (isObject(sd.para.is_track_latest)) {
    for (let n in sd.para.is_track_latest)
      r[`latest_${n}`] = sd.para.is_track_latest[n]
  }
  for (t in ((sd.para.preset_properties = extend(
    {},
    defaultPara.preset_properties,
    r,
    sd.para.preset_properties || {},
  )),
  defaultPara))
    void 0 === sd.para[t] && (sd.para[t] = defaultPara[t]);
  (typeof sd.para.web_url != 'string'
    || (sd.para.web_url.slice(0, 3) !== '://'
      && sd.para.web_url.slice(0, 2) !== '//')
    || (sd.para.web_url.slice(0, 3) === '://'
      ? (sd.para.web_url = location.protocol.slice(0, -1) + sd.para.web_url)
      : (sd.para.web_url = location.protocol + sd.para.web_url)),
  debug.protocol.serverUrl(),
  sd.bridge && sd.bridge.initPara())
  let i = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_content',
    'utm_term',
  ]
  let a = [
    'www.baidu.',
    'm.baidu.',
    'm.sm.cn',
    'so.com',
    'sogou.com',
    'youdao.com',
    'google.',
    'yahoo.com/',
    'bing.com/',
    'ask.com/',
  ]
  let s = [
    'weibo.com',
    'renren.com',
    'kaixin001.com',
    'douban.com',
    'qzone.qq.com',
    'zhihu.com',
    'tieba.baidu.com',
    'weixin.qq.com',
  ]
  let o = {
    baidu: ['wd', 'word', 'kw', 'keyword'],
    google: 'q',
    bing: 'q',
    yahoo: 'p',
    sogou: ['query', 'keyword'],
    so: 'q',
    sm: 'q',
  }
  typeof sd.para.source_type == 'object'
  && ((sd.para.source_type.utm = isArray(sd.para.source_type.utm)
    ? sd.para.source_type.utm.concat(i)
    : i),
  (sd.para.source_type.search = isArray(sd.para.source_type.search)
    ? sd.para.source_type.search.concat(a)
    : a),
  (sd.para.source_type.social = isArray(sd.para.source_type.social)
    ? sd.para.source_type.social.concat(s)
    : s),
  (sd.para.source_type.keyword = isObject(sd.para.source_type.keyword)
    ? extend(o, sd.para.source_type.keyword)
    : o))
  let l = [
    'mark',
    '/mark',
    'strong',
    'b',
    'em',
    'i',
    'u',
    'abbr',
    'ins',
    'del',
    's',
    'sup',
  ]
  if (
    (sd.para.heatmap && !isObject(sd.para.heatmap) && (sd.para.heatmap = {}),
    isObject(sd.para.heatmap))
  ) {
    ((sd.para.heatmap.clickmap = sd.para.heatmap.clickmap || 'default'),
    (sd.para.heatmap.scroll_notice_map
      = sd.para.heatmap.scroll_notice_map || 'default'),
    (sd.para.heatmap.scroll_delay_time
      = sd.para.heatmap.scroll_delay_time || 4e3),
    (sd.para.heatmap.scroll_event_duration
      = sd.para.heatmap.scroll_event_duration || 18e3),
    (sd.para.heatmap.renderRefreshTime
      = sd.para.heatmap.renderRefreshTime || 1e3),
    (sd.para.heatmap.loadTimeout = sd.para.heatmap.loadTimeout || 1e3),
    (sd.para.heatmap.request_timeout
      = sd.para.heatmap.request_timeout || 1e4),
    !0 !== sd.para.heatmap.get_vtrack_config
    && (sd.para.heatmap.get_vtrack_config = !1))
    let d = isArray(sd.para.heatmap.track_attr)
      ? filter(sd.para.heatmap.track_attr, (e) => {
          return e && typeof e == 'string'
        })
      : []
    if (
      (d.push('data-sensors-click'),
      (sd.para.heatmap.track_attr = d),
      isObject(sd.para.heatmap.collect_tags))
    ) {
      if (!0 === sd.para.heatmap.collect_tags.div) {
        sd.para.heatmap.collect_tags.div = { ignore_tags: l, max_level: 1 }
      }
      else if (isObject(sd.para.heatmap.collect_tags.div)) {
        if (
          (sd.para.heatmap.collect_tags.div.ignore_tags
            ? isArray(sd.para.heatmap.collect_tags.div.ignore_tags)
            || (sdWarn(
              'ignore_tags \u53C2\u6570\u5FC5\u987B\u662F\u6570\u7EC4\u683C\u5F0F',
            ),
            (sd.para.heatmap.collect_tags.div.ignore_tags = l))
            : (sd.para.heatmap.collect_tags.div.ignore_tags = l),
          sd.para.heatmap.collect_tags.div.max_level)
        ) {
          indexOf([1, 2, 3], sd.para.heatmap.collect_tags.div.max_level)
          === -1
          && (sd.para.heatmap.collect_tags.div.max_level = 1)
        }
      }
      else {
        sd.para.heatmap.collect_tags.div = !1
      }
    }
    else {
      sd.para.heatmap.collect_tags = { div: !1 }
    }
  }
  ((sd.para.server_url = optimizeServerUrl(
    sd.para.server_url,
    sd.para.custom_server_url,
  )),
  !0 === sd.para.noCache
    ? (sd.para.noCache = `?${new Date().getTime()}`)
    : (sd.para.noCache = ''),
  sd.para.callback_timeout > sd.para.datasend_timeout
  && (sd.para.datasend_timeout = sd.para.callback_timeout),
  sd.para.heatmap
  && sd.para.heatmap.collect_tags
  && isObject(sd.para.heatmap.collect_tags)
  && each(sd.para.heatmap.collect_tags, (e, t) => {
    t !== 'div' && e && sd.heatmap.otherTags.push(t)
  }),
  sd.para.heatmap
  && sd.para.heatmap.clickmap === 'default'
  && sd.heatmap.initUnlimitedTags())
}
let readyState = {
  state: 0,
  historyState: [],
  stateType: {
    1: '1-init\u672A\u5F00\u59CB',
    2: '2-init\u5F00\u59CB',
    3: '3-store\u5B8C\u6210',
  },
  getState() {
    return this.historyState.join('\n')
  },
  setState(e) {
    (String(e) in this.stateType && (this.state = e),
    this.historyState.push(this.stateType[e]))
  },
}
function quick() {
  let e = Array.prototype.slice.call(arguments)
  let t = e[0]
  let r = e.slice(1)
  if (typeof t == 'string' && commonWays[t])
    return commonWays[t].apply(commonWays, r)
  typeof t == 'function'
    ? t.apply(sd, r)
    : sdWarn(
        `quick\u65B9\u6CD5\u4E2D\u6CA1\u6709\u8FD9\u4E2A\u529F\u80FD${e[0]}`,
      )
}
let nonameCount = 1
function use(e, t) {
  if (isString(e) || isObject(e)) {
    let r
    if (isObject(e)) {
      let n = sd.modules && sd.modules[e.plugin_name];
      (n
        && n !== e
        && sdWarn(
          `${e.name
          } is conflict with builtin plugin, and sdk uses builtin plugin.`,
        ),
      (r = n || e))
    }
    return (
      isString(e)
      && (isObject(sd.modules) && isObject(sd.modules[e])
        ? (r = sd.modules[e])
        : isObject(window.SensorsDataWebJSSDKPlugin)
          && isObject(window.SensorsDataWebJSSDKPlugin[e])
          ? (r = window.SensorsDataWebJSSDKPlugin[e])
          : window.sensorsDataAnalytic201505
            && window.sensorsDataAnalytic201505.modules[e]
            && (r = window.sensorsDataAnalytic201505.modules[e])),
      r && isFunction(r.init)
        ? r.plugin_is_init
          ? r
          : (r.plugin_name
            || sdWarn('warning: invalid plugin, plugin_name required.'),
            r.plugin_version
              ? r.plugin_version !== sd.lib_version
              && sdWarn(
                'warning: plugin version not match SDK version. plugin may not work correctly. ',
              )
              : sdWarn('warning: invalid plugin, plugin version required.'),
            !r.plugin_is_init && r.init(sd, t),
            (r.plugin_is_init = !0),
            (sd.modules = sd.modules || {}),
            (sd.modules[r.plugin_name || `unnamed_${nonameCount++}`] = r),
            r)
        : (sdWarn(
            `${e.plugin_name || e
            } is not found or it's not a standard plugin. Please check sensorsdata official documents.`,
          ),
          r)
    )
  }
  sdError('use\'s first arguments must be string or object.')
}
function track(e, t, r) {
  check({ event: e, properties: t })
  && saEvent.send({ type: 'track', event: e, properties: t }, r)
}
function bind(e, t) {
  if (!check({ bindKey: e, bindValue: t }))
    return !1;
  ((store._state.identities[e] = t),
  store.save(),
  saEvent.send({ type: 'track_id_bind', event: '$BindID', properties: {} }))
}
function unbind(e, t) {
  let r = deleteBindIDData(e, t)
  r
  && saEvent.send({
    identities: r,
    type: 'track_id_unbind',
    event: '$UnbindID',
    properties: {},
  })
}
function trackLink(e, t, r) {
  typeof e == 'object' && e.tagName
    ? trackLinkByCustomTrackFunc({ ele: e }, t, r, sd.track)
    : typeof e == 'object'
      && e.target
      && e.event
      && trackLinkByCustomTrackFunc(e, t, r, sd.track)
}
function trackLinks(e, t, r) {
  return (
    (r = r || {}),
    !(!e || typeof e != 'object')
    && !(!e.href || e.href.startsWith('javascript') || e.target)
    && void saAddEvent(e, 'click', (n) => {
      n.preventDefault()
      let i = !1
      function a() {
        i || ((i = !0), (location.href = e.href))
      }
      (setTimeout(a, 1e3), sd.track(t, r, a))
    })
  )
}
function setItem(e, t, r) {
  check({ item_type: e, item_id: t, properties: r })
  && saEvent.sendItem({
    type: 'item_set',
    item_type: e,
    item_id: t,
    properties: r || {},
  })
}
function deleteItem(e, t) {
  check({ item_type: e, item_id: t })
  && saEvent.sendItem({ type: 'item_delete', item_type: e, item_id: t })
}
function setProfile(e, t) {
  check({ propertiesMust: e })
  && saEvent.send({ type: 'profile_set', properties: e }, t)
}
function setOnceProfile(e, t) {
  check({ propertiesMust: e })
  && saEvent.send({ type: 'profile_set_once', properties: e }, t)
}
function appendProfile(e, t) {
  check({ propertiesMust: e })
  && (each(e, (t, r) => {
    isString(t) && noPrototypePollution(r)
      ? (e[r] = [t])
      : isArray(t) && noPrototypePollution(r)
        ? (e[r] = t)
        : (delete e[r],
          sdWarn(
            'appendProfile\u5C5E\u6027\u7684\u503C\u5FC5\u987B\u662F\u5B57\u7B26\u4E32\u6216\u8005\u6570\u7EC4',
          ))
  }),
  isEmptyObject(e)
  || saEvent.send({ type: 'profile_append', properties: e }, t))
}
function incrementProfile(e, t) {
  let r = e;
  (isString(e) && ((e = {})[r] = 1),
  check({ propertiesMust: e })
  && (!(function (e) {
    for (let t in e) {
      if (
        Object.prototype.hasOwnProperty.call(e, t)
        && !/-*\d+/.test(String(e[t]))
      ) {
        return !1
      }
    }
    return !0
  })(e)
    ? sdError('profile_increment\u7684\u503C\u53EA\u80FD\u662F\u6570\u5B57')
    : saEvent.send({ type: 'profile_increment', properties: e }, t)))
}
function deleteProfile(e) {
  (saEvent.send({ type: 'profile_delete' }, e),
  store.set('distinct_id', UUID()),
  store.set('first_id', ''))
}
function unsetProfile(e, t) {
  let r = e
  let n = {};
  (isString(e) && (e = []).push(r),
  isArray(e)
    ? (each(e, (e) => {
        isString(e)
          ? (n[e] = !0)
          : sdWarn(
              'profile_unset\u7ED9\u7684\u6570\u7EC4\u91CC\u9762\u7684\u503C\u5FC5\u987B\u65F6string,\u5DF2\u7ECF\u8FC7\u6EE4\u6389',
              e,
            )
      }),
      saEvent.send({ type: 'profile_unset', properties: n }, t))
    : sdError(
        'profile_unset\u7684\u53C2\u6570\u5FC5\u987B\u662F\u6570\u7EC4',
      ))
}
function identify(e) {
  typeof e == 'number' && (e = String(e))
  let t = store.getFirstId()
  if (void 0 === e) {
    let r = UUID()
    t ? store.set('first_id', r) : store.set('distinct_id', r)
  }
  else {
    check({ distinct_id: e })
    && (t ? store.set('first_id', e) : store.set('distinct_id', e))
  }
}
function resetAnonymousIdentity(e) {
  if (store.getFirstId()) {
    return (
      sdError('resetAnonymousIdentity must be used in a logout state \uFF01'),
      !1
    )
  }
  if ((typeof e == 'number' && (e = String(e)), void 0 === e)) {
    let t = UUID();
    ((store._state.identities.$identity_cookie_id = t),
    store.set('distinct_id', t))
  }
  else {
    check({ distinct_id: e })
    && ((store._state.identities.$identity_cookie_id = e),
    store.set('distinct_id', e))
  }
}
function sendSignup(e, t, r, n) {
  let i = store.getFirstId() || store.getDistinctId();
  (store.set('distinct_id', e),
  saEvent.send(
    {
      original_id: i,
      distinct_id: store.getDistinctId(),
      type: 'track_signup',
      event: t,
      properties: r,
    },
    n,
  ))
}
function trackSignup(e, t, r, n) {
  (typeof e == 'number' && (e = String(e)),
  check({ distinct_id: e, event: t, properties: r })
  && sendSignup(e, t, r, n))
}
function registerPage(e) {
  check({ properties: e })
    ? extend(pageInfo.currentProps, e)
    : sdError('register\u8F93\u5165\u7684\u53C2\u6570\u6709\u8BEF')
}
function clearAllRegister(e) {
  store.clearAllProps(e)
}
function clearPageRegister(e) {
  let t
  if (isArray(e) && e.length > 0) {
    for (t = 0; t < e.length; t++) {
      isString(e[t])
      && e[t] in pageInfo.currentProps
      && delete pageInfo.currentProps[e[t]]
    }
  }
  else if (!0 === e) {
    for (t in pageInfo.currentProps) delete pageInfo.currentProps[t]
  }
}
function register(e) {
  check({ properties: e })
    ? store.setProps(e)
    : sdError('register\u8F93\u5165\u7684\u53C2\u6570\u6709\u8BEF')
}
function registerOnce(e) {
  check({ properties: e })
    ? store.setPropsOnce(e)
    : sdError('registerOnce\u8F93\u5165\u7684\u53C2\u6570\u6709\u8BEF')
}
function registerSession(e) {
  (sd.log(
    'registerSession \u65B9\u6CD5\u5DF2\u7ECF\u5F03\u7528\uFF0C\u6709\u95EE\u9898\u8054\u7CFB\u6280\u672F\u987E\u95EE',
  ),
  check({ properties: e })
    ? store.setSessionProps(e)
    : sdError('registerSession\u8F93\u5165\u7684\u53C2\u6570\u6709\u8BEF'))
}
function registerSessionOnce(e) {
  (sd.log(
    'registerSessionOnce \u65B9\u6CD5\u5DF2\u7ECF\u5F03\u7528\uFF0C\u6709\u95EE\u9898\u8054\u7CFB\u6280\u672F\u987E\u95EE',
  ),
  check({ properties: e })
    ? store.setSessionPropsOnce(e)
    : sdError(
        'registerSessionOnce\u8F93\u5165\u7684\u53C2\u6570\u6709\u8BEF',
      ))
}
function login(e, t) {
  (typeof e == 'number' && (e = String(e)),
  !loginBody({ id: e, callback: t, name: IDENTITY_KEY.LOGIN }, sendSignup)
  && isFunction(t)
  && t())
}
function loginWithKey(e, t) {
  return (
    sdWarn('loginWithKey is deprecated !!!'),
    typeof t == 'number' && (t = String(t)),
    typeof e == 'number' && (e = String(e)),
    !!check({ loginIdKey: e })
    && (IDENTITY_KEY.LOGIN === e
      ? (login(t), !1)
      : void loginBody({ id: t, callback: null, name: e }, sendSignup))
  )
}
function logout(e) {
  let t = store.getFirstId()
  if (t) {
    if ((store.set('first_id', ''), !0 === e)) {
      let r = UUID()
      store.set('distinct_id', r)
    }
    else {
      store.set('distinct_id', t)
    }
  }
  (resetIdentities({
    $identity_cookie_id: store._state.identities.$identity_cookie_id,
  }),
  store.set('history_login_id', { name: '', value: '' }))
}
function getPresetProperties() {
  let e
  let t
  let r = {
    $is_first_day: isNewUser(),
    $is_first_time: saNewUser.is_page_first_visited,
    $referrer: pageInfo.pageProp.referrer || '',
    $referrer_host: pageInfo.pageProp.referrer
      ? getHostname(pageInfo.pageProp.referrer)
      : '',
    $url: getURL(),
    $url_path: getURLPath(),
    $title: document.title || '',
    _distinct_id: store.getDistinctId(),
    identities: store.getIdentities(),
  }
  let n = extend(
    {},
    pageInfo.properties(),
    store.getProps(),
    ((e = pageInfo.campaignParams()),
    (t = {}),
    each(e, (e, r, n) => {
      (` ${sd.source_channel_standard} `).includes(` ${r} `)
        ? (t[`$${r}`] = n[r])
        : (t[r] = n[r])
    }),
    t),
    r,
  )
  return (
    sd.para.preset_properties.latest_referrer
    && sd.para.preset_properties.latest_referrer_host
    && (n.$latest_referrer_host
      = n.$latest_referrer === '' ? '' : getHostname(n.$latest_referrer)),
    n
  )
}
let functions = {
  __proto__: null,
  setInitVar,
  initPara,
  quick,
  use,
  track,
  bind,
  unbind,
  trackLink,
  trackLinks,
  setItem,
  deleteItem,
  setProfile,
  setOnceProfile,
  appendProfile,
  incrementProfile,
  deleteProfile,
  unsetProfile,
  identify,
  resetAnonymousIdentity,
  trackSignup,
  registerPage,
  clearAllRegister,
  clearPageRegister,
  register,
  registerOnce,
  registerSession,
  registerSessionOnce,
  login,
  loginWithKey,
  logout,
  getPresetProperties,
  readyState,
  debug,
  on: eventEmitterFacade,
  log: sdLog,
}
logger.setup(sdLog)
let _ = extend({}, W, business)
function iOSWebClickPolyfill() {
  let e = ''
  let t = ' { cursor: pointer; -webkit-tap-highlight-color: rgba(0,0,0,0); }';
  (sd.heatmap
    && isArray(sd.heatmap.otherTags)
    && each(sd.heatmap.otherTags, (r) => {
      e += r + t
    }),
  isIOS()
  && getIOSVersion()
  && getIOSVersion() < 13
  && (sd.para.heatmap
    && sd.para.heatmap.collect_tags
    && sd.para.heatmap.collect_tags.div
    && setCssStyle(`div, [data-sensors-click]${t}`),
  sd.para.heatmap
  && sd.para.heatmap.track_attr
  && setCssStyle(`[${sd.para.heatmap.track_attr.join('], [')}]${t}`),
  e !== '' && setCssStyle(e)))
}
let bridge = {
  bridge_info: {
    touch_app_bridge: !1,
    verify_success: !1,
    platform: '',
    support_two_way_call: !1,
  },
  is_verify_success: !1,
  initPara() {
    let e = {
      is_send:
        !1 !== sd.para.use_app_track_is_send
        && sd.para.use_app_track !== 'only',
      white_list: [],
      is_mui: sd.para.use_app_track === 'mui',
    };
    (typeof sd.para.app_js_bridge == 'object'
      ? (sd.para.app_js_bridge = extend({}, e, sd.para.app_js_bridge))
      : (!0 !== sd.para.use_app_track
        && !0 !== sd.para.app_js_bridge
        && sd.para.use_app_track !== 'only'
        && sd.para.use_app_track !== 'mui')
      || (sd.para.app_js_bridge = extend({}, e)),
    !1 === sd.para.app_js_bridge.is_send
    && sdWarn(
      '\u8BBE\u7F6E\u4E86 is_send:false,\u5982\u679C\u6253\u901A\u5931\u8D25\uFF0C\u6570\u636E\u5C06\u88AB\u4E22\u5F03!',
    ))
  },
  app_js_bridge_v1() {
    let e = null
    let t = null;
    ((window.sensorsdata_app_js_bridge_call_js = function (r) {
      !(function (r) {
        (isJSONString((e = r)) && (e = JSON.parse(e)),
        t && (t(e), (t = null), (e = null)))
      })(r)
    }),
    (sd.getAppStatus = function (r) {
      if (
        ((function () {
          if (
            /iPad|iPhone|iPod/.test(navigator.userAgent)
            && !window.MSStream
          ) {
            let e = document.createElement('iframe');
            (e.setAttribute('src', 'sensorsanalytics://getAppInfo'),
            document.documentElement.appendChild(e),
            e.parentNode.removeChild(e),
            (e = null))
          }
        })(),
        typeof window.SensorsData_APP_JS_Bridge == 'object'
        && window.SensorsData_APP_JS_Bridge.sensorsdata_call_app
        && isJSONString(
          (e = window.SensorsData_APP_JS_Bridge.sensorsdata_call_app()),
        )
        && (e = JSON.parse(e)),
        !r)
      ) {
        return e
      }
      e === null ? (t = r) : (r(e), (e = null))
    }))
  },
  hasVisualModeBridge() {
    let e = window.SensorsData_App_Visual_Bridge
    let t = 'sensorsdata_visualized_mode'
    return isObject(e) && e[t] && (!0 === e[t] || e[t]())
  },
  validateAppUrl,
}
function SDKJSBridge(e) {
  let t = this;
  ((this.type = e),
  (this.resultCbs = {}),
  (this.timeoutCbs = {}),
  (this.timerId = null),
  (this.appCallJsCallback = null),
  window.sensorsdata_app_call_js
  || (window.sensorsdata_app_call_js = function (e, t) {
    if (e in window.sensorsdata_app_call_js.modules)
      return window.sensorsdata_app_call_js.modules[e](t)
  }),
  (window.sensorsdata_app_call_js.modules
    = window.sensorsdata_app_call_js.modules || {}),
  (window.sensorsdata_app_call_js.modules[this.type] = function (e) {
    try {
      let r = base64Decode(e) || e
      try {
        r = JSON.parse(r)
      }
      catch (a) {}
      let n = r && r.message_id
      if (n && t.resultCbs[n]) {
        if (((e = r), t.timeoutCbs[n] && t.timeoutCbs[n].isTimeout))
          return void (t.resultCbs[n].callbacks.length = 0)
        if (t.resultCbs[n]) {
          for (let i in ((t.resultCbs[n].result = e),
          clearTimeout(t.timerId),
          (t.timeoutCbs[n].callbacks.length = 0),
          t.resultCbs[n].callbacks)) {
            (t.resultCbs[n].callbacks[i].call(null, e),
            t.resultCbs[n].callbacks.splice(i, 1))
          }
        }
        return
      }
      return t.appCallJsCallback && t.appCallJsCallback.call(null, e)
    }
    catch (s) {
      sdError('app \u56DE\u8C03 js \u5F02\u5E38', e)
    }
  }))
}
function handleCommands(e) {
  try {
    if (
      sd.bridge.activeBridge
      && isFunction(sd.bridge.activeBridge.handleCommand)
    ) {
      return sd.bridge.activeBridge.handleCommand(e)
    }
  }
  catch (t) {
    sdError(`Error: handle command exception:${t}`)
  }
  return (
    sdError(
      `\u6570\u636E\u53D1\u5F80App\u5931\u8D25\uFF0CApp\u6CA1\u6709\u66B4\u9732bridge,type:${
        e.callType}`,
    ),
    !1
  )
}
function validateAppUrl(e) {
  function t(e) {
    let t = { hostname: '', project: '' }
    try {
      ((e = _URL(e)),
      (t.hostname = e.hostname),
      (t.project = e.searchParams.get('project') || 'default'))
    }
    catch (r) {
      sdError(`validateAppUrl:${r}`)
    }
    return t
  }
  let r = t(e)
  let n = t(sd.para.server_url)
  if (r.hostname === n.hostname && r.project === n.project)
    return !0
  if (isArray(sd.para.app_js_bridge.white_list)) {
    for (let i = 0; i < sd.para.app_js_bridge.white_list.length; i++) {
      let a = t(sd.para.app_js_bridge.white_list[i])
      if (a.hostname === r.hostname && a.project === r.project)
        return !0
    }
  }
  return !1
}
function DeprecatedJSBridge(e) {
  this.bridge = new SDKJSBridge(e.type)
}
function initLatestProps() {
  let e = pageInfo.pageProp.url_domain
  let t = {}
  e === '' && (e = 'url\u89E3\u6790\u5931\u8D25')
  let r = getKeywordFromReferrer(document.referrer, !0)
  if (
    (sdPara.preset_properties.search_keyword_baidu
      ? isReferralTraffic(document.referrer)
      && (!isBaiduTraffic() || (isObject(r) && r.active)
        ? store._state
        && store._state.props
        && (store._state.props.$search_keyword_id
          && delete store._state.props.$search_keyword_id,
        store._state.props.$search_keyword_id_type
        && delete store._state.props.$search_keyword_id_type,
        store._state.props.$search_keyword_id_hash
        && delete store._state.props.$search_keyword_id_hash)
        : ((t.$search_keyword_id = getBaiduKeyword.id()),
          (t.$search_keyword_id_type = getBaiduKeyword.type()),
          (t.$search_keyword_id_hash = hashCode53(t.$search_keyword_id))))
      : store._state
        && store._state.props
        && (store._state.props.$search_keyword_id
          && delete store._state.props.$search_keyword_id,
        store._state.props.$search_keyword_id_type
        && delete store._state.props.$search_keyword_id_type,
        store._state.props.$search_keyword_id_hash
        && delete store._state.props.$search_keyword_id_hash),
    store.save(),
    each(sdPara.preset_properties, (r, n) => {
      if (!n.includes('latest_'))
        return !1
      if (((n = n.slice(7)), r)) {
        if (n === 'wx_ad_click_id' && r === 'not_collect')
          return !1
        if (n !== 'utm' && e === 'url\u89E3\u6790\u5931\u8D25') {
          n === 'wx_ad_click_id'
            ? ((t._latest_wx_ad_click_id
                = 'url\u7684domain\u89E3\u6790\u5931\u8D25'),
              (t._latest_wx_ad_hash_key
                = 'url\u7684domain\u89E3\u6790\u5931\u8D25'),
              (t._latest_wx_ad_callbacks
                = 'url\u7684domain\u89E3\u6790\u5931\u8D25'))
            : (t[`$latest_${n}`] = 'url\u7684domain\u89E3\u6790\u5931\u8D25')
        }
        else if (isReferralTraffic(document.referrer)) {
          switch (n) {
            case 'traffic_source_type':
              t.$latest_traffic_source_type = getSourceFromReferrer()
              break
            case 'referrer':
              t.$latest_referrer = pageInfo.pageProp.referrer
              break
            case 'search_keyword':
              getKeywordFromReferrer()
                ? (t.$latest_search_keyword = getKeywordFromReferrer())
                : isObject(store._state)
                  && isObject(store._state.props)
                  && store._state.props.$latest_search_keyword
                  && delete store._state.props.$latest_search_keyword
              break
            case 'landing_page':
              t.$latest_landing_page = getURL()
              break
            case 'wx_ad_click_id':
              var i = getWxAdIdFromUrl(location.href);
              ((t._latest_wx_ad_click_id = i.click_id),
              (t._latest_wx_ad_hash_key = i.hash_key),
              (t._latest_wx_ad_callbacks = i.callbacks))
          }
        }
      }
      else if (n === 'utm' && store._state && store._state.props) {
        for (let a in store._state.props) {
          (a.indexOf('$latest_utm') === 0
            || (a.indexOf('_latest_') === 0 && !a.includes('_latest_wx_ad_')))
          && delete store._state.props[a]
        }
      }
      else if (
        store._state
        && store._state.props
        && `$latest_${n}` in store._state.props
      ) {
        delete store._state.props[`$latest_${n}`]
      }
      else if (
        n == 'wx_ad_click_id'
        && store._state
        && store._state.props
        && !1 === r
      ) {
        each(
          [
            '_latest_wx_ad_click_id',
            '_latest_wx_ad_hash_key',
            '_latest_wx_ad_callbacks',
          ],
          (e) => {
            e in store._state.props && delete store._state.props[e]
          },
        )
      }
    }),
    sdPara.preset_properties.latest_utm)
  ) {
    let n = pageInfo.campaignParamsStandard('$latest_', '_latest_')
    let i = n.$utms
    let a = n.otherUtms;
    (isEmptyObject(i) || extend(t, i), isEmptyObject(a) || extend(t, a))
  }
  register(t)
}
function getFlagValue(e) {
  let t = null
  try {
    let r = JSON.parse(window.name)
    t = r[e] ? _decodeURIComponent(r[e]) : null
  }
  catch (n) {
    t = null
  }
  return (t === null && (t = getQueryParam(location.href, e) || null), t)
}
((SDKJSBridge.prototype.call = function (e, t) {
  let r = this
  let n
    = new Date().getTime().toString(16)
      + String(getRandom()).replace('.', '').slice(1, 8);
  ((this.resultCbs[n] = r.resultCbs[n] || { result: null, callbacks: [] }),
  (this.timeoutCbs[n] = r.timeoutCbs[n] || { isTimeout: !1, callbacks: [] }),
  ((e = e.data ? e : { data: e }).data.message_id = n))
  let i = extend({ callType: this.type }, e)
  return (
    t
    && (this.timerId = setTimeout(() => {
      for (let e in ((r.timeoutCbs[n].isTimeout = !0),
      r.timeoutCbs[n].callbacks)) {
        (r.timeoutCbs[n].callbacks[e].call(null),
        r.timeoutCbs[n].callbacks.splice(e, 1))
      }
    }, t)),
    handleCommands(i),
    {
      onResult(e) {
        return r.resultCbs[n].result
          ? (e(r.resultCbs[n].result), this)
          : (!r.timeoutCbs[n].isTimeout && r.resultCbs[n].callbacks.push(e),
            this)
      },
      onTimeout(e) {
        return r.timeoutCbs[n].isTimeout
          ? (e(), this)
          : (!r.resultCbs[n].result && r.timeoutCbs[n].callbacks.push(e), this)
      },
    }
  )
}),
(SDKJSBridge.prototype.onAppNotify = function (e) {
  this.appCallJsCallback = e
}),
(SDKJSBridge.prototype.notifyApp = function (e, t) {
  let r = extend({ callType: this.type }, e)
  return (t && (r.message_id = t), handleCommands(r))
}),
(DeprecatedJSBridge.prototype = {
  double() {},
  getAppData() {},
  hasAppBridge() {
    return sd.bridge.bridge_info.support_two_way_call
  },
  init() {},
  jsCallApp() {},
  requestToApp(e) {
    this.bridge
      .call(e, e.timeout.time)
      .onResult((t) => {
        isFunction(e.callback) && e.callback(t)
      })
      .onTimeout(() => {
        isFunction(e.timeout.callback) && e.timeout.callback()
      })
  },
}))
var heatmapMode = {
  isSeachHasKeyword() {
    return (
      getQueryParam(location.href, 'sa-request-id') !== ''
      && (typeof sessionStorage.getItem('sensors-visual-mode') == 'string'
        && sessionStorage.removeItem('sensors-visual-mode'),
      !0)
    )
  },
  hasKeywordHandle() {
    let e = location.href
    let t = getQueryParam(e, 'sa-request-id') || null
    let r = getQueryParam(e, 'sa-request-type') || null
    let n = getQueryParam(e, 'sa-request-url') || null
    if ((heatmap.setNotice(n), _sessionStorage.isSupport())) {
      if (
        (n !== null && sessionStorage.setItem('sensors_heatmap_url', n),
        sessionStorage.setItem('sensors_heatmap_id', t),
        r !== null)
      ) {
        r === '1' || r === '2' || r === '3'
          ? sessionStorage.setItem('sensors_heatmap_type', r)
          : (r = null)
      }
      else {
        let i = sessionStorage.getItem('sensors_heatmap_type')
        r = i !== null ? i : null
      }
    }
    this.isReady(t, r)
  },
  isReady(e, t, r) {
    sd.para.heatmap_url && sd.para.heatmap
      ? loadScript({
          success() {
            setTimeout(() => {
              typeof sa_jssdk_heatmap_render != 'undefined'
              && (sa_jssdk_heatmap_render(sd, e, t, r),
              typeof console == 'object'
              && typeof console.log == 'function'
              && ((sd.heatmap_version
                && sd.heatmap_version === sd.lib_version)
              || sdWarn(
                'heatmap.js\u4E0Esensorsdata.js\u7248\u672C\u53F7\u4E0D\u4E00\u81F4\uFF0C\u53EF\u80FD\u5B58\u5728\u98CE\u9669!',
              )))
            }, 0)
          },
          error() {},
          type: 'js',
          url: sd.para.heatmap_url,
        })
      : sdWarn(
          '\u6CA1\u6709\u914D\u7F6E heatmap \u5F00\u542F\u70B9\u51FB\u56FE\uFF0C\u6216\u8005\u6CA1\u6709\u6307\u5B9A heatmap_url \u7684\u8DEF\u5F84',
        )
  },
  isStorageHasKeyword() {
    return (
      _sessionStorage.isSupport()
      && typeof sessionStorage.getItem('sensors_heatmap_id') == 'string'
    )
  },
  storageHasKeywordHandle() {
    (heatmap.setNotice(),
    heatmapMode.isReady(
      sessionStorage.getItem('sensors_heatmap_id'),
      sessionStorage.getItem('sensors_heatmap_type'),
      location.href,
    ))
  },
  isWindowNameHasKeyword() {
    try {
      let e = JSON.parse(window.name)
      let t = isString(e['sa-heatmap-src'])
        ? _decodeURIComponent(e['sa-heatmap-src'])
        : null
      return (
        e['sa-request-id']
        && isString(e['sa-request-id'])
        && t === location.href
      )
    }
    catch (r) {
      return !1
    }
  },
  windowNameHasKeywordHandle() {
    let e = JSON.parse(window.name)
    function t(t) {
      let r = e[t]
      return isString(r) ? _decodeURIComponent(r) : null
    }
    let r = t('sa-request-id')
    let n = t('sa-request-type')
    let i = t('sa-request-url')
    let a = t('sa-request-language');
    (heatmap.setNotice(i),
    _localStorage.isSupport()
    && isString(a)
    && _localStorage.set('web_sdk_heatmap_language', a),
    _sessionStorage.isSupport()
    && (i !== null && sessionStorage.setItem('sensors_heatmap_url', i),
    sessionStorage.setItem('sensors_heatmap_id', r),
    n !== null
      ? n === '1' || n === '2' || n === '3'
        ? sessionStorage.setItem('sensors_heatmap_type', n)
        : (n = null)
      : (n
          = sessionStorage.getItem('sensors_heatmap_type') !== null
            ? sessionStorage.getItem('sensors_heatmap_type')
            : null)),
    heatmapMode.isReady(r, n))
  },
}
var vtrackMode = {
  isStorageHasKeyword() {
    return (
      _sessionStorage.isSupport()
      && typeof sessionStorage.getItem('sensors-visual-mode') == 'string'
    )
  },
  isSearchHasKeyword() {
    return (
      (!0 === getFlagValue('sa-visual-mode')
        || getFlagValue('sa-visual-mode') === 'true')
      && (typeof sessionStorage.getItem('sensors_heatmap_id') == 'string'
        && sessionStorage.removeItem('sensors_heatmap_id'),
      !0)
    )
  },
  loadVtrack() {
    loadScript({
      success() {},
      error() {},
      type: 'js',
      url: sd.para.vtrack_url
        ? sd.para.vtrack_url
        : `${getSafeHttpProtocol()
        }//static.sensorsdata.cn/sdk/${
          sd.lib_version
        }/vtrack.min.js`,
    })
  },
  messageListener(e) {
    if (!e || !e.data || e.data.source !== 'sa-fe')
      return !1
    if (e.data.type === 'v-track-mode') {
      if (e.data.data && e.data.data.isVtrack) {
        if (
          (_sessionStorage.isSupport()
            && sessionStorage.setItem('sensors-visual-mode', 'true'),
          e.data.data.userURL && location.href.match(/sa-visual-mode=true/))
        ) {
          let t = e.data.data.userURL
          isString(t)
          && (startsWith(t, 'http://') || startsWith(t, 'https://'))
          && ((window.location.href = encodeURI(t)),
          setTimeout(() => {
            window.location.reload(!0)
          }, 1e3))
        }
        else {
          vtrackMode.loadVtrack()
        }
      }
      window.removeEventListener('message', vtrackMode.messageListener, !1)
    }
  },
  removeMessageHandle() {
    window.removeEventListener
    && window.removeEventListener('message', vtrackMode.messageListener, !1)
  },
  verifyVtrackMode() {
    (window.addEventListener
      && window.addEventListener('message', vtrackMode.messageListener, !1),
    vtrackMode.postMessage())
  },
  postMessage() {
    try {
      window.parent
      && window.parent.postMessage
      && window.parent.postMessage(
        {
          source: 'sa-web-sdk',
          type: 'v-is-vtrack',
          data: { sdkversion: sdkversion_placeholder },
        },
        '*',
      )
    }
    catch (e) {
      sdError(
        '\u6D4F\u89C8\u5668\u7248\u672C\u8FC7\u4F4E\uFF0C\u4E0D\u652F\u6301 postMessage API',
      )
    }
  },
  notifyUser() {
    let e = function (t) {
      if (!t || !t.data || t.data.source !== 'sa-fe')
        return !1
      t.data.type === 'v-track-mode'
      && (t.data.data
        && t.data.data.isVtrack
        && alert(
          '\u5F53\u524D\u7248\u672C\u4E0D\u652F\u6301\uFF0C\u8BF7\u5347\u7EA7\u90E8\u7F72\u795E\u7B56\u6570\u636E\u6CBB\u7406',
        ),
      window.removeEventListener('message', e, !1))
    };
    (window.addEventListener && window.addEventListener('message', e, !1),
    vtrackMode.postMessage())
  },
}
function defineMode(e) {
  let t = sd.bridge.bridge_info
  function r() {
    let e = [];
    (t.touch_app_bridge || e.push(debug.defineMode('1')),
    isObject(sd.para.app_js_bridge)
    || (e.push(debug.defineMode('2')), (t.verify_success = !1)),
    (isObject(sd.para.heatmap) && sd.para.heatmap.clickmap == 'default')
    || e.push(debug.defineMode('3')),
    t.verify_success === 'fail' && e.push(debug.defineMode('4')),
    new sd.SDKJSBridge('app_alert').notifyApp({ data: e }))
  }
  if (sd.bridge.hasVisualModeBridge()) {
    if (isObject(sd.para.heatmap) && sd.para.heatmap.clickmap == 'default') {
      if (isObject(sd.para.app_js_bridge) && t.verify_success === 'success') {
        if (e) {
          window.sa_jssdk_app_define_mode(sd, e)
        }
        else {
          let n = location.protocol
          loadScript({
            success() {
              setTimeout(() => {
                typeof sa_jssdk_app_define_mode != 'undefined'
                && window.sa_jssdk_app_define_mode(sd, e)
              }, 0)
            },
            error() {},
            type: 'js',
            url:
              `${n = indexOf(['http:', 'https:'], n) > -1 ? n : 'https:'
              }//static.sensorsdata.cn/sdk/${
                sd.lib_version
              }/vapph5define.min.js`,
          })
        }
      }
      else {
        r()
      }
    }
    else {
      r()
    }
  }
}
function listenSinglePage(e) {
  sd.para.is_track_single_page
  && spa.on('switch', (t) => {
    let r = function (r) {
      if (((r = r || {}), t !== location.href)) {
        pageInfo.pageProp.referrer = getURL(t)
        let n = extend({ $url: getURL(), $referrer: getURL(t) }, r)
        isFunction(e) ? e(n) : sd.quick && sd.quick('autoTrack', n)
      }
    }
    if (typeof sd.para.is_track_single_page == 'boolean') {
      r()
    }
    else if (typeof sd.para.is_track_single_page == 'function') {
      let n = sd.para.is_track_single_page()
      isObject(n) ? r(n) : !0 === n && r()
    }
  })
}
function enterFullTrack() {
  (sd._q
    && isArray(sd._q)
    && sd._q.length > 0
    && each(sd._q, (e) => {
      sd[e[0]].apply(sd, Array.prototype.slice.call(e[1]))
    }),
  isObject(sd.para.heatmap)
  && (heatmap.initHeatmap(), heatmap.initScrollmap()))
}
function trackMode() {
  (sd.readyState.setState(3),
  new sd.SDKJSBridge('visualized').onAppNotify(() => {
    typeof sa_jssdk_app_define_mode != 'undefined'
      ? defineMode(!0)
      : defineMode(!1)
  }),
  defineMode(!1),
  sd.bridge.app_js_bridge_v1(),
  pageInfo.initPage(),
  listenSinglePage(),
  store.init(),
  initLatestProps(),
  initVtrack(),
  sd.readyState.setState(4),
  enterFullTrack())
}
function detectMode() {
  heatmapMode.isWindowNameHasKeyword()
    ? heatmapMode.windowNameHasKeywordHandle()
    : heatmapMode.isSeachHasKeyword()
      ? heatmapMode.hasKeywordHandle()
      : window.parent !== self && vtrackMode.isSearchHasKeyword()
        ? vtrackMode.verifyVtrackMode()
        : heatmapMode.isStorageHasKeyword()
          ? heatmapMode.storageHasKeywordHandle()
          : window.parent !== self && vtrackMode.isStorageHasKeyword()
            ? vtrackMode.verifyVtrackMode()
            : (trackMode(), vtrackMode.notifyUser())
}
function initVtrack() {
  (vtrackcollect.init(),
  sd.bridge.bridge_info.verify_success === 'success' && vapph5collect.init())
}
let methods = [
  'setItem',
  'deleteItem',
  'getAppStatus',
  'track',
  'quick',
  'register',
  'registerPage',
  'registerOnce',
  'trackSignup',
  'setProfile',
  'setOnceProfile',
  'appendProfile',
  'incrementProfile',
  'deleteProfile',
  'unsetProfile',
  'identify',
  'resetAnonymousIdentity',
  'login',
  'logout',
  'trackLink',
  'clearAllRegister',
  'clearPageRegister',
  'bind',
  'unbind',
  'loginWithKey',
]
function checkState() {
  each(methods, (e) => {
    let t = sd[e]
    sd[e] = function () {
      if (sd.readyState.state < 3) {
        return (
          isArray(sd._q) || (sd._q = []),
          sdWarn('calling sdk api before init is deprecated.'),
          sd._q.push([e, arguments]),
          !1
        )
      }
      if (!isFunction(sd.getDisabled) || !sd.getDisabled()) {
        if (sd.readyState.getState())
          return t.apply(sd, arguments)
        sdError('\u8BF7\u5148\u521D\u59CB\u5316\u795E\u7B56JS SDK')
      }
    }
  })
}
let saEmpty = {
  track(e, t, r) {},
  quick(e, t, r, n) {},
  register(e) {},
  registerPage(e) {},
  registerOnce(e) {},
  clearAllRegister(e) {},
  trackSignup(e, t, r, n) {},
  setProfile(e, t) {},
  setOnceProfile(e, t) {},
  appendProfile(e, t) {},
  incrementProfile(e, t) {},
  deleteProfile(e) {},
  unsetProfile(e, t) {},
  identify(e, t) {},
  resetAnonymousIdentity(e) {},
  login(e, t) {},
  logout(e) {},
  trackLink(e, t, r) {},
  deleteItem(e, t) {},
  setItem(e, t, r) {},
  getAppStatus(e) {},
  clearPageRegister(e) {},
  bind(e, t) {},
  unbind(e, t) {},
  registerPropertyPlugin(e) {},
}
function CancellationToken(e, t) {
  ((this.cancel = function () {
    e = !0
  }),
  (this.getCanceled = function () {
    return e || !1
  }),
  (this.stop = function () {
    t = !0
  }),
  (this.getStopped = function () {
    return t || !1
  }))
}
function InterceptorContext(e, t, r) {
  let n = null
  try {
    n = JSON.parse(JSON.stringify(e || null))
  }
  catch (i) {}
  ((this.getOriginalData = function () {
    return n
  }),
  (this.getPosition = function () {
    return t
  }),
  (this.cancellationToken = new CancellationToken()),
  (this.sensors = r))
}
function Stage(e) {
  if (!isObject(e))
    throw 'error: Stage constructor requires arguments.';
  ((this.processDef = e), (this.registeredInterceptors = {}))
}
((Stage.prototype.process = function (e, t) {
  if (e && e in this.processDef) {
    let r = this.registeredInterceptors[e]
    if (r && isArray(r) && r.length > 0) {
      for (
        let n = { current: 0, total: r.length },
          i = new InterceptorContext(t, n, sd),
          a = 0;
        a < r.length;
        a++
      ) {
        try {
          if (
            ((n.current = a + 1),
            (t = r[a].call(null, t, i) || t),
            i.cancellationToken.getCanceled())
          ) {
            break
          }
          if (i.cancellationToken.getStopped())
            return
        }
        catch (s) {
          sdError(`interceptor error:${s}`)
        }
      }
    }
    return (
      this.processDef[e]
      && this.processDef[e] in this.processDef
      && (t = this.process(this.processDef[e], t)),
      t
    )
  }
  sdError(`process [${e}] is not supported`)
}),
(Stage.prototype.registerStageImplementation = function (e) {
  e
  && e.init
  && isFunction(e.init)
  && (e.init(this), e.interceptor && this.registerInterceptor(e.interceptor))
}),
(Stage.prototype.registerInterceptor = function (e) {
  if (e) {
    for (let t in e) {
      let r = e[t]
      if (r && isObject(r) && isFunction(r.entry)) {
        (isNumber(r.priority) || (r.priority = Number.MAX_VALUE),
        this.registeredInterceptors[t]
        || (this.registeredInterceptors[t] = []))
        let n = this.registeredInterceptors[t];
        ((r.entry.priority = r.priority),
        n.push(r.entry),
        n.sort((e, t) => {
          return e.priority - t.priority
        }))
      }
    }
  }
}))
let processDef = {
  basicProps: 'extendProps',
  extendProps: 'formatData',
  formatData: 'finalAdjustData',
  finalAdjustData: null,
}
let buildDataStage = new Stage(processDef)
let processDef$1 = { send: null }
let sendDataStage = new Stage(processDef$1)
let processDef$2 = { getUtmData: null, callSchema: null }
let businessStage = new Stage(processDef$2)
let processDef$3 = { webClickEvent: null, webStayEvent: null }
let viewStage = new Stage(processDef$3)
function registerFeature(e) {
  (e
    && e.buildDataStage
    && buildDataStage.registerStageImplementation(e.buildDataStage),
  e
  && e.businessStage
  && businessStage.registerStageImplementation(e.businessStage),
  e
  && e.sendDataStage
  && sendDataStage.registerStageImplementation(e.sendDataStage),
  e && e.viewStage && viewStage.registerStageImplementation(e.viewStage))
}
let interceptorRegisters = {
  buildDataStage(e) {
    e && buildDataStage.registerInterceptor(e)
  },
  businessStage(e) {
    e && businessStage.registerInterceptor(e)
  },
  sendDataStage(e) {
    e && sendDataStage.registerInterceptor(e)
  },
  viewStage(e) {
    e && viewStage.registerInterceptor(e)
  },
}
function registerInterceptor(e, t) {
  interceptorRegisters[e] && interceptorRegisters[e](t)
}
let businessStageImpl = {
  stage: null,
  init(e) {
    this.stage = e
  },
}
function processGetUtmData() {
  return (
    businessStageImpl.stage && businessStageImpl.stage.process('getUtmData')
  )
}
let sendDataStageImpl = {
  stage: null,
  init(e) {
    this.stage = e
  },
  interceptor: {
    send: {
      entry(e) {
        return e
      },
    },
  },
}
function processSend(e) {
  return sendDataStageImpl.stage.process('send', e)
}
let kit = {}
function CoreFeature(e) {
  ((e.kit = kit),
  (e.saEvent = saEvent),
  (this.buildDataStage = buildDataStageImpl),
  (this.sendDataStage = sendDataStageImpl),
  (this.businessStage = businessStageImpl))
}
function HeatCollectFeature(e) {
  ((e.heatmap = heatmap), (this.viewStage = viewStageImpl))
}
((kit.buildData = function (e) {
  return processBasicProps(e)
}),
(kit.sendData = function (e, t) {
  let r = searchConfigData(e.properties);
  (processSend({
    origin_data: e,
    server_url: sd.para.server_url,
    data: e,
    config: r || {},
    callback: t,
  }),
  sd.log(e))
}),
(kit.encodeTrackData = function (e) {
  return encodeTrackData(e)
}),
(kit.getUtmData = function () {
  return processGetUtmData()
}))
let heatCollectInterceptor = {
  webClickEvent: {
    entry(e, t) {
      let r = t.sensors
      e.tagName === 'a' && r.para.heatmap && !0 === r.para.heatmap.isTrackLink
        ? r.trackLink(
            { event: e.event, target: e.target },
            '$WebClick',
            e.props,
          )
        : r.track('$WebClick', e.props, e.callback)
    },
  },
  webStayEvent: {
    entry(e, t) {
      t.sensors.track('$WebStay', e)
    },
  },
}
function registerPropertyPlugin(e) {
  isFunction(e.properties)
    ? !e.isMatchedWithFilter || isFunction(e.isMatchedWithFilter)
        ? registerInterceptor('buildDataStage', {
            finalAdjustData: {
              priority: 100,
              entry(t) {
                try {
                  if (isFunction(e.isMatchedWithFilter))
                    return e.isMatchedWithFilter(t) && e.properties(t)
                  e.properties(t)
                }
                catch (r) {
                  sdError(`execute registerPropertyPlugin callback error:${r}`)
                }
              },
            },
          })
        : sdError(
            'registerPropertyPlugin arguments error, isMatchedWithFilter must be function',
          )
    : sdError(
        'registerPropertyPlugin arguments error, properties must be function',
      )
}
let preCfg = window.sensors_data_pre_config
let is_compliance_enabled = !!_.isObject(preCfg) && preCfg.is_compliance_enabled
function implementCore(e) {
  e
  && ((sd.events = events),
  (sd.bridge = bridge),
  (sd.SDKJSBridge = SDKJSBridge),
  (sd.JSBridge = DeprecatedJSBridge),
  (sd.store = store),
  (sd.unlimitedDiv = unlimitedDiv),
  (sd.customProp = customProp),
  (sd.vtrackcollect = vtrackcollect),
  (sd.vapph5collect = vapph5collect),
  (sd.detectMode = detectMode),
  (sd.registerFeature = registerFeature),
  (sd.registerInterceptor = registerInterceptor),
  (sd.commonWays = commonWays),
  registerFeature(new CoreFeature(sd)),
  registerFeature(new HeatCollectFeature(sd)),
  registerInterceptor('viewStage', heatCollectInterceptor))
  let t = e ? functions : saEmpty
  for (let r in t) sd[r] = t[r];
  ((sd.logger = saLogger),
  (sd.log = sdLog),
  (sd._ = _),
  (sd.on = eventEmitterFacade),
  (sd.ee = ee),
  (sd.use = use),
  (sd.lib_version = sdkversion_placeholder),
  (sd.registerPropertyPlugin = registerPropertyPlugin))
}
((sd.init = function (e) {
  if (
    (ee.sdk.emit('beforeInit'),
    sd.readyState && sd.readyState.state && sd.readyState.state >= 2)
  ) {
    return !1
  }
  (is_compliance_enabled && (implementCore(!0), checkState()),
  ee.initSystemEvent(),
  sd.setInitVar(),
  sd.readyState.setState(2),
  sd.initPara(e),
  ee.sdk.emit('initPara'),
  ee.sdk.emit('afterInitPara'),
  ee.sdk.emit('initAPI'),
  ee.sdk.emit('afterInitAPI'),
  sd.detectMode(),
  iOSWebClickPolyfill(),
  ee.sdk.emit('afterInit'),
  ee.sdk.emit('ready'))
}),
is_compliance_enabled
  ? implementCore(!1)
  : (implementCore(!0), checkState()))
let sdkversion_placeholder$1 = '1.27.11'
function wrapPluginInitFn(e, t, r) {
  if ((t && (e.plugin_name = t), r && e.init)) {
    let n = e.init
    e.init = function (i, a) {
      if (
        (wrapLogFn(i, e, t), (i.readyState && i.readyState.state >= 3) || !i.on)
      )
        return s()
      function s() {
        n.call(e, i, a)
      }
      i.on(r, s)
    }
  }
  return e
}
function wrapLogFn(e, t, r) {
  function n(t, n) {
    e.logger
      ? e.logger.msg
          .apply(e.logger, n)
          .module(`${r}` || '')
          .level(t)
          .log()
      : e.log && e.log.apply(e, n)
  }
  ((t.log = function () {
    n('log', arguments)
  }),
  (t.warn = function () {
    n('warn', arguments)
  }),
  (t.error = function () {
    n('error', arguments)
  }))
}
function createPlugin(e, t, r) {
  return (
    wrapPluginInitFn(e, t, r),
    (e.plugin_version = sdkversion_placeholder$1),
    e
  )
}
let userEncryptDefault = {
  init(e) {
    let t = e._.isString
    let r = e._.rot13defs
    let n = e._.dfmapping
    let i = 'data:enc;'
    e.ee.sdk.on('afterInitPara', () => {
      ((e.kit.userEncrypt = function (e) {
        return `dfm-enc-${n(e)}`
      }),
      (e.kit.userDecrypt = function (e) {
        return (
          e.indexOf(i) === 0
            ? ((e = e.substring(i.length)), (e = r(e)))
            : e.indexOf('dfm-enc-') === 0
              && ((e = e.substring('dfm-enc-'.length)), (e = n(e))),
          e
        )
      }),
      (e.kit.userDecryptIfNeeded = function (r) {
        return (
          !t(r)
          || (r.indexOf(i) !== 0 && r.indexOf('dfm-enc-') !== 0)
          || (r = e.kit.userDecrypt(r)),
          r
        )
      }))
    })
  },
  plugin_name: 'UserEncryptDefault',
}
let index = createPlugin(userEncryptDefault)
let sdkversion_placeholder$2 = '1.27.11'
function wrapPluginInitFn$1(e, t, r) {
  if ((t && (e.plugin_name = t), r && e.init)) {
    let n = e.init
    e.init = function (i, a) {
      if (
        (wrapLogFn$1(i, e, t),
        (i.readyState && i.readyState.state >= 3) || !i.on)
      ) {
        return s()
      }
      function s() {
        n.call(e, i, a)
      }
      i.on(r, s)
    }
  }
  return e
}
function wrapLogFn$1(e, t, r) {
  function n(t, n) {
    e.logger
      ? e.logger.msg
          .apply(e.logger, n)
          .module(`${r}` || '')
          .level(t)
          .log()
      : e.log && e.log.apply(e, n)
  }
  ((t.log = function () {
    n('log', arguments)
  }),
  (t.warn = function () {
    n('warn', arguments)
  }),
  (t.error = function () {
    n('error', arguments)
  }))
}
function createPlugin$1(e, t, r) {
  return (
    wrapPluginInitFn$1(e, t, r),
    (e.plugin_version = sdkversion_placeholder$2),
    e
  )
}
let amp = {
  sd: null,
  init(e) {
    if (this.sd)
      return !1
    if (((this.sd = e), !this.sd || !this.sd._))
      return !1
    let t = this.sd._.cookie.get('sensors_amp_id')
    let r = this.sd.store._state.distinct_id
    if (t && t.length > 0) {
      let n = t.slice(0, 4) === 'amp-'
      if (t !== r) {
        if (!n)
          return !1
        this.sd.store._state.first_id
          ? (this.sd.identify(t, !0),
            this.sd.saEvent.send(
              {
                original_id: t,
                distinct_id: r,
                type: 'track_signup',
                event: '$SignUp',
                properties: {},
              },
              null,
            ),
            this.setAmpId(r))
          : this.sd.identify(t, !0)
      }
    }
    else {
      this.setAmpId(r)
    }
    this.addListener()
  },
  addListener() {
    let e = this;
    (this.sd.events.on('changeDistinctId', (t) => {
      e.setAmpId(t)
    }),
    this.sd.events.isReady())
  },
  setAmpId(e) {
    this.sd._.cookie.set('sensors_amp_id', e)
  },
}
let index$1 = createPlugin$1(amp, 'Amp', 'sdkReady')
let vbridge = window.SensorsData_App_Visual_Bridge
let vmode = vbridge && vbridge.sensorsdata_visualized_mode
let valert = vbridge && vbridge.sensorsdata_visualized_alert_info
let vhover = vbridge && vbridge.sensorsdata_hover_web_nodes
function alertApp(e) {
  return valert && valert.call(vbridge, JSON.stringify(e))
}
function hoverNode(e) {
  return (
    vmode.call(vbridge) && vhover && vhover.call(vbridge, JSON.stringify(e))
  )
}
function callBridge(e, t) {
  return t && typeof t[e.callType] == 'function' && t[e.callType]()
}
let anBridge
let anTrack
let anServerUrl
let sd$1
let _$1
let log
let vbridge$1 = {
  isVerify() {
    return vmode && (!0 === vmode || vmode.call(vbridge))
  },
  commands: {
    app_alert: alertApp,
    visualized_track: hoverNode,
    page_info: hoverNode,
    sensorsdata_get_app_visual_config: callBridge,
  },
}
let sdkversion_placeholder$3 = '1.27.11'
function wrapPluginInitFn$2(e, t, r) {
  if ((t && (e.plugin_name = t), r && e.init)) {
    let n = e.init
    e.init = function (i, a) {
      if (
        (wrapLogFn$2(i, e, t),
        (i.readyState && i.readyState.state >= 3) || !i.on)
      ) {
        return s()
      }
      function s() {
        n.call(e, i, a)
      }
      i.on(r, s)
    }
  }
  return e
}
function wrapLogFn$2(e, t, r) {
  function n(t, n) {
    e.logger
      ? e.logger.msg
          .apply(e.logger, n)
          .module(`${r}` || '')
          .level(t)
          .log()
      : e.log && e.log.apply(e, n)
  }
  ((t.log = function () {
    n('log', arguments)
  }),
  (t.warn = function () {
    n('warn', arguments)
  }),
  (t.error = function () {
    n('error', arguments)
  }))
}
function createPlugin$2(e, t, r) {
  return (
    wrapPluginInitFn$2(e, t, r),
    (e.plugin_version = sdkversion_placeholder$3),
    e
  )
}
let AndroidBridge = {
  init(e) {
    ((_$1 = (sd$1 = e) && sd$1._),
    (log = (sd$1 && sd$1.log) || (console && console.log) || function () {}),
    initBridge())
  },
  handleCommand,
}
function initBridge() {
  ((anBridge = window.SensorsData_APP_New_H5_Bridge),
  (anTrack = anBridge && anBridge.sensorsdata_track),
  (anServerUrl
    = anTrack
      && anBridge.sensorsdata_get_server_url
      && anBridge.sensorsdata_get_server_url()),
  log('---test---fail---', !sd$1, sd$1.bridge.activeBridge, !anServerUrl),
  sd$1
  && !sd$1.bridge.activeBridge
  && anServerUrl
  && ((sd$1.bridge.activeBridge = AndroidBridge),
  sd$1.para.app_js_bridge
  && !sd$1.para.app_js_bridge.is_mui
  && ((sd$1.bridge.is_verify_success
    = anServerUrl && sd$1.bridge.validateAppUrl(anServerUrl)),
  log('---test---bridge-verify-', sd$1.bridge.is_verify_success)),
  (sd$1.bridge.bridge_info = {
    touch_app_bridge: !0,
    platform: 'android',
    verify_success: sd$1.bridge.is_verify_success ? 'success' : 'fail',
    support_two_way_call: !!anBridge.sensorsdata_js_call_app,
  }),
  sd$1.para.app_js_bridge
    ? sd$1.registerInterceptor('sendDataStage', {
        send: { priority: 60, entry: sendData },
      })
    : log(
        '---test---app_js_bridge is not configured, data will not be sent by android bridge.',
      )))
}
function sendData(e, t) {
  if (
    (log('---test---datasend-', sd$1.bridge.is_verify_success),
    sd$1.para.app_js_bridge.is_mui
    || e.data.type === 'item_set'
    || e.data.type === 'item_delete')
  ) {
    return e
  }
  let r = e.callback
  return sd$1.bridge.is_verify_success
    ? (log('---test---bridge-verify-success---', e.data),
      anTrack
      && anTrack.call(
        anBridge,
        JSON.stringify(
          _$1.extend({ server_url: sd$1.para.server_url }, e.data),
        ),
      ),
      _$1.isFunction(r) && r(),
      t.cancellationToken.cancel(),
      e)
    : (log('---test---bridge-verify-fail-----', sd$1.bridge.is_verify_success),
      sd$1.para.app_js_bridge.is_send
        ? (sd$1.debug.apph5({ data: e.data, step: '4.2', output: 'all' }), e)
        : (_$1.isFunction(r) && r(), t.cancellationToken.cancel(), e))
}
function handleCommand(e) {
  let t = e.callType
  if (t in vbridge$1.commands)
    return vbridge$1.commands[t](e, anBridge)
  anBridge
  && _$1.isFunction(anBridge.sensorsdata_js_call_app)
  && anBridge.sensorsdata_js_call_app(JSON.stringify(e))
}
let index$2 = createPlugin$2(
  AndroidBridge,
  'AndroidBridge',
  'sdkAfterInitPara',
)
let vbridge$2 = window.SensorsData_App_Visual_Bridge
let vmode$1 = vbridge$2 && vbridge$2.sensorsdata_visualized_mode
let valert$1 = vbridge$2 && vbridge$2.sensorsdata_visualized_alert_info
let vhover$1 = vbridge$2 && vbridge$2.sensorsdata_hover_web_nodes
function alertApp$1(e) {
  return valert$1 && valert$1.call(vbridge$2, JSON.stringify(e))
}
function hoverNode$1(e) {
  return (
    vmode$1.call(vbridge$2)
    && vhover$1
    && vhover$1.call(vbridge$2, JSON.stringify(e))
  )
}
function callBridge$1(e, t) {
  return t && typeof t[e.callType] == 'function' && t[e.callType]()
}
let anBridge$1
let anTrack$1
let anVerify
let anVisualVerify
let sd$2
let _$2
let log$1
let vbridge$1$1 = {
  isVerify() {
    return vmode$1 && (!0 === vmode$1 || vmode$1.call(vbridge$2))
  },
  commands: {
    app_alert: alertApp$1,
    visualized_track: hoverNode$1,
    page_info: hoverNode$1,
    sensorsdata_get_app_visual_config: callBridge$1,
  },
}
let sdkversion_placeholder$4 = '1.27.11'
function wrapPluginInitFn$3(e, t, r) {
  if ((t && (e.plugin_name = t), r && e.init)) {
    let n = e.init
    e.init = function (i, a) {
      if (
        (wrapLogFn$3(i, e, t),
        (i.readyState && i.readyState.state >= 3) || !i.on)
      ) {
        return s()
      }
      function s() {
        n.call(e, i, a)
      }
      i.on(r, s)
    }
  }
  return e
}
function wrapLogFn$3(e, t, r) {
  function n(t, n) {
    e.logger
      ? e.logger.msg
          .apply(e.logger, n)
          .module(`${r}` || '')
          .level(t)
          .log()
      : e.log && e.log.apply(e, n)
  }
  ((t.log = function () {
    n('log', arguments)
  }),
  (t.warn = function () {
    n('warn', arguments)
  }),
  (t.error = function () {
    n('error', arguments)
  }))
}
function createPlugin$3(e, t, r) {
  return (
    wrapPluginInitFn$3(e, t, r),
    (e.plugin_version = sdkversion_placeholder$4),
    e
  )
}
let AndroidObsoleteBridge = {
  init(e) {
    ((_$2 = (sd$2 = e) && sd$2._),
    (log$1
      = (sd$2 && sd$2.log) || (console && console.log) || function () {}),
    initBridge$1())
  },
  handleCommand: handleCommand$1,
}
function initBridge$1() {
  if (
    (log$1('ObsoleteBridge---test---init---'),
    (anBridge$1 = window.SensorsData_APP_JS_Bridge),
    (anTrack$1 = anBridge$1 && anBridge$1.sensorsdata_track),
    (anVerify = anBridge$1 && anBridge$1.sensorsdata_verify),
    (anVisualVerify = anBridge$1 && anBridge$1.sensorsdata_visual_verify),
    log$1(
      'ObsoleteBridge-',
      sd$2.bridge.activeBridge,
      anVerify,
      anTrack$1,
      anVisualVerify,
    ),
    sd$2
    && !sd$2.bridge.activeBridge
    && (anVerify || anTrack$1 || anVisualVerify))
  ) {
    sd$2.bridge.activeBridge = AndroidObsoleteBridge
    let e = anVerify || anTrack$1;
    (anVisualVerify
      && ((e = !!anVisualVerify.call(
        anBridge$1,
        JSON.stringify({ server_url: sd$2.para.server_url }),
      )),
      log$1('ObsoleteBridge---called-return', e)),
    (sd$2.bridge.bridge_info = {
      touch_app_bridge: !0,
      platform: 'android',
      verify_success: e ? 'success' : 'fail',
    }),
    sd$2.para.app_js_bridge
      ? (sd$2.registerInterceptor('sendDataStage', {
          send: { priority: 80, entry: sendData$1 },
        }),
        log$1('Android obsolete bridge inits succeed.'))
      : log$1(
          'app_js_bridge is not configured, data will not be sent by android obsolete bridge.',
        ))
  }
}
function sendData$1(e, t) {
  if (
    (log$1('ObsoleteBridge---senddata'),
    sd$2.para.app_js_bridge.is_mui
    || e.data.type === 'item_set'
    || e.data.type === 'item_delete')
  ) {
    return e
  }
  let r = e.callback
  if (anVerify) {
    let n
      = anVerify
        && anVerify.call(
          anBridge$1,
          JSON.stringify(
            _$2.extend({ server_url: sd$2.para.server_url }, e.data),
          ),
        )
    return (
      log$1('ObsoleteBridge---anVerify-success', n),
      n
        ? (_$2.isFunction(r) && r(), t.cancellationToken.cancel(), e)
        : sd$2.para.app_js_bridge.is_send
          ? (sd$2.debug.apph5({ data: e.data, step: '3.1', output: 'all' }), e)
          : (_$2.isFunction(r) && r(), t.cancellationToken.cancel(), e)
    )
  }
  return (
    log$1('ObsoleteBridge---is-send-old-way', sd$2.para.app_js_bridge.is_send),
    anTrack$1
    && anTrack$1.call(
      anBridge$1,
      JSON.stringify(
        _$2.extend({ server_url: sd$2.para.server_url }, e.data),
      ),
    ),
    _$2.isFunction(r) && r(),
    t.cancellationToken.cancel(),
    e
  )
}
function handleCommand$1(e) {
  log$1('ObsoleteBridge---handleCommadn')
  let t = e.callType
  return t in vbridge$1$1.commands
    ? (log$1('ObsoleteBridge---', t, vbridge$1$1.commands),
      vbridge$1$1.commands[t](e, anBridge$1))
    : anBridge$1 && _$2.isFunction(anBridge$1.sensorsdata_js_call_app)
      ? (log$1('ObsoleteBridge---handleCommadn-abridge'),
        anBridge$1.sensorsdata_js_call_app(JSON.stringify(e)))
      : void 0
}
let _$3
let sd$3
let store$1
let cookie_name
let index$3 = createPlugin$3(
  AndroidObsoleteBridge,
  'AndroidObsoleteBridge',
  'sdkAfterInitPara',
)
let sdkversion_placeholder$5 = '1.27.11'
function wrapPluginInitFn$4(e, t, r) {
  if ((t && (e.plugin_name = t), r && e.init)) {
    let n = e.init
    e.init = function (i, a) {
      if (
        (wrapLogFn$4(i, e, t),
        (i.readyState && i.readyState.state >= 3) || !i.on)
      ) {
        return s()
      }
      function s() {
        n.call(e, i, a)
      }
      i.on(r, s)
    }
  }
  return e
}
function wrapLogFn$4(e, t, r) {
  function n(t, n) {
    e.logger
      ? e.logger.msg
          .apply(e.logger, n)
          .module(`${r}` || '')
          .level(t)
          .log()
      : e.log && e.log.apply(e, n)
  }
  ((t.log = function () {
    n('log', arguments)
  }),
  (t.warn = function () {
    n('warn', arguments)
  }),
  (t.error = function () {
    n('error', arguments)
  }))
}
function createPlugin$4(e, t, r) {
  return (
    wrapPluginInitFn$4(e, t, r),
    (e.plugin_version = sdkversion_placeholder$5),
    e
  )
}
let hidden
var Channel = {
  event_list: [],
  latest_event_initial_time: null,
  max_save_time: 2592e6,
  init(e, t) {
    if (sd$3 || !e)
      return !1;
    ((cookie_name
      = (t = t || {}).cookie_name || 'sensorsdata2015jssdkchannel'),
    (sd$3 = e))
    let r = this
    !(function () {
      if (
        ((_$3 = sd$3._),
        (store$1 = sd$3.store),
        !_$3.localStorage.isSupport())
      ) {
        return !1
      }
      (r.eventList.init(),
      r.addLatestChannelUrl(),
      r.addIsChannelCallbackEvent())
    })()
  },
  addIsChannelCallbackEvent() {
    sd$3.registerPage({
      $is_channel_callback_event(e) {
        if (
          _$3.isObject(e)
          && e.event
          && e.event !== '$WebClick'
          && e.event !== '$pageview'
          && e.event !== '$WebStay'
          && e.event !== '$SignUp'
        ) {
          return (
            !Channel.eventList.hasEvent(e.event)
            && (Channel.eventList.add(e.event), !0)
          )
        }
      },
    })
  },
  addLatestChannelUrl() {
    let e = this.getUrlDomain()
    let t = this.cookie.getChannel()
    if (e === 'url\u89E3\u6790\u5931\u8D25') {
      this.registerAndSave({
        _sa_channel_landing_url: '',
        _sa_channel_landing_url_error:
            'url\u7684domain\u89E3\u6790\u5931\u8D25',
      })
    }
    else if (_$3.isReferralTraffic(document.referrer)) {
      let r = _$3.getQueryParam(location.href, 'sat_cf')
      _$3.isString(r) && r.length > 0
        ? (this.registerAndSave({ _sa_channel_landing_url: location.href }),
          Channel.channelLinkHandler())
        : this.registerAndSave({ _sa_channel_landing_url: '' })
    }
    else {
      t
        ? sd$3.registerPage(t)
        : sd$3.registerPage({
            _sa_channel_landing_url: '',
            _sa_channel_landing_url_error: '\u53D6\u503C\u5F02\u5E38',
          })
    }
  },
  registerAndSave(e) {
    (sd$3.registerPage(e), this.cookie.saveChannel(e))
  },
  cookie: {
    getChannel() {
      let e = sd$3.kit.userDecryptIfNeeded(_$3.cookie.get(cookie_name))
      return (
        (e = _$3.safeJSONParse(e)),
        !(!_$3.isObject(e) || !e.prop) && e.prop
      )
    },
    saveChannel(e) {
      let t = { prop: e }
      let r = JSON.stringify(t);
      (sd$3.para.encrypt_cookie && (r = sd$3.kit.userEncrypt(r)),
      _$3.cookie.set(cookie_name, r))
    },
  },
  channelLinkHandler() {
    (this.eventList.reset(), sd$3.track('$ChannelLinkReaching'))
  },
  getUrlDomain() {
    let e = _$3.info.pageProp.url_domain
    return (e === '' && (e = 'url\u89E3\u6790\u5931\u8D25'), e)
  },
  eventList: {
    init() {
      let e = this.get()
      let t = new Date().getTime()
      if (
        e
        && _$3.isNumber(e.latest_event_initial_time)
        && _$3.isArray(e.eventList)
      ) {
        let r = t - e.latest_event_initial_time
        r > 0 && r < Channel.max_save_time
          ? ((Channel.event_list = e.eventList),
            (Channel.latest_event_initial_time = e.latest_event_initial_time))
          : this.reset()
      }
      else {
        this.reset()
      }
    },
    get() {
      let e = {}
      try {
        e = store$1.readObjectVal('sawebjssdkchannel')
      }
      catch (t) {
        sd$3.log(t)
      }
      return e
    },
    add(e) {
      (Channel.event_list.push(e), this.save())
    },
    save() {
      let e = {
        latest_event_initial_time: Channel.latest_event_initial_time,
        eventList: Channel.event_list,
      }
      store$1.saveObjectVal('sawebjssdkchannel', e)
    },
    reset() {
      ((Channel.event_list = []),
      (Channel.latest_event_initial_time = new Date().getTime()),
      this.save())
    },
    hasEvent(e) {
      let t = !1
      return (
        _$3.each(Channel.event_list, (r) => {
          r === e && (t = !0)
        }),
        t
      )
    },
  },
}
let index$4 = createPlugin$4(Channel, 'SensorsChannel', 'sdkAfterInitAPI')
let sdkversion_placeholder$6 = '1.27.11'
function wrapPluginInitFn$5(e, t, r) {
  if ((t && (e.plugin_name = t), r && e.init)) {
    let n = e.init
    e.init = function (i, a) {
      if (
        (wrapLogFn$5(i, e, t),
        (i.readyState && i.readyState.state >= 3) || !i.on)
      ) {
        return s()
      }
      function s() {
        n.call(e, i, a)
      }
      i.on(r, s)
    }
  }
  return e
}
function wrapLogFn$5(e, t, r) {
  function n(t, n) {
    e.logger
      ? e.logger.msg
          .apply(e.logger, n)
          .module(`${r}` || '')
          .level(t)
          .log()
      : e.log && e.log.apply(e, n)
  }
  ((t.log = function () {
    n('log', arguments)
  }),
  (t.warn = function () {
    n('warn', arguments)
  }),
  (t.error = function () {
    n('error', arguments)
  }))
}
function createPlugin$5(e, t, r) {
  return (
    wrapPluginInitFn$5(e, t, r),
    (e.plugin_version = sdkversion_placeholder$6),
    e
  )
}
let isWechat = /micromessenger\/([\d.]+)/i.test(navigator.userAgent || '')
let getSupportedProperty = function () {
  let e = {}
  return (
    typeof document.hidden != 'undefined'
      ? ((e.hidden = 'hidden'), (e.visibilityChange = 'visibilitychange'))
      : typeof document.msHidden != 'undefined'
        ? ((e.hidden = 'msHidden'),
          (e.visibilityChange = 'msvisibilitychange'))
        : typeof document.webkitHidden != 'undefined'
          && ((e.hidden = 'webkitHidden'),
          (e.visibilityChange = 'webkitvisibilitychange')),
    e
  )
}
function isPageHidden() {
  return void 0 !== hidden && document[hidden]
}
hidden = getSupportedProperty().hidden
let iosServerUrl
let iosTracker
let sd$4
let _$4
let log$2
let OSs = {
  android: /Android/i,
  iOS: /iPhone|iPad|iPod/i,
  harmony: /OpenHarmony/i,
}
let getOS = function () {
  for (let e in OSs) {
    if (navigator.userAgent.match(OSs[e]))
      return e
  }
  return ''
}
let currentOS = getOS()
let isSupportedOS = function () {
  return OSs.hasOwnProperty(currentOS)
}
let isObject$1 = function (e) {
  return e != null && Object.prototype.toString.call(e) == '[object Object]'
}
let parseShortURL = function (e) {
  return e.match(/\/sd\/(\w+)\/(\w+)$/)
}
let parseAPIURL = function (e) {
  let t = e._.URL(e.para.server_url)
  return {
    origin: t.origin,
    project: t.searchParams.get('project') || 'default',
  }
}
let handleAndroidLinks = function (e, t, r) {
  e.log('\u5C1D\u8BD5\u5524\u8D77 android app')
  let n = t;
  (e.log(`\u5524\u8D77APP\u7684\u5730\u5740\uFF1A${n}`),
  (window.location = n),
  (e.timer = setTimeout(() => {
    let t = isPageHidden()
    if ((e.log(`hide:${hidden}:${document[hidden]}`), t)) {
      return (
        e.log('The page is hidden, stop navigating to download page'),
        !1
      )
    }
    (e.log(
      'App\u53EF\u80FD\u672A\u5B89\u88C5\uFF0C\u8DF3\u8F6C\u5230\u4E0B\u8F7D\u5730\u5740',
    ),
    (window.location = r))
  }, e.timeout)))
}
let handleIOSLinks = function (e, t, r) {
  (e.log(`\u5C1D\u8BD5\u5524\u8D77 iOS app:${t}`),
  (window.location.href = t),
  (e.timer = setTimeout(() => {
    if (isPageHidden()) {
      return (
        e.log('The page is hidden, stop navigating to download page'),
        !1
      )
    }
    (e.log(
      'App\u53EF\u80FD\u672A\u5B89\u88C5\uFF0C\u8DF3\u8F6C\u5230\u4E0B\u8F7D\u5730\u5740',
    ),
    (window.location.href = r))
  }, e.timeout)),
  e.log(`new timer:${e.timer}`))
}
var SADeepLink = {
  plugin_name: ['deeplink', 'Deeplink'],
  key: null,
  timer: null,
  sd: null,
  data: null,
  timeout: 2500,
  apiURL:
      '{origin}/sdk/deeplink/param?key={key}&system_type=JS&project={project}',
  init(e) {
    if (this.sd)
      return (this.logger('deeplink\u5DF2\u7ECF\u521D\u59CB\u5316'), !1)
    arguments[0]
      ? isObject$1(arguments[0]) && typeof arguments[0].timeout == 'number'
        ? (this.sd = window.sensorsDataAnalytic201505)
        : (this.sd = e)
      : (this.sd = window.sensorsDataAnalytic201505)
    let t = {}
    if (
      (arguments.length > 0
        && (arguments.length === 1 && isObject$1(arguments[0])
          ? (t = arguments[0])
          : arguments.length >= 2
            && isObject$1(arguments[1])
            && (t = arguments[1])),
      !isSupportedOS())
    ) {
      return (
        this.logger(
          '\u4E0D\u652F\u6301\u5F53\u524D\u7CFB\u7EDF\uFF0C\u76EE\u524D\u53EA\u652F\u6301Android\u548CiOS',
        ),
        !1
      )
    }
    if (
      (isObject$1(t)
        && this.sd._.isNumber(t.timeout)
        && t.timeout >= 2500
        && (this.timeout = t.timeout),
      !this.sd.para.server_url)
    ) {
      return (
        this.logger(
          '\u795E\u7B56JS SDK\u914D\u7F6E\u9879server_url\u672A\u6B63\u786E\u914D\u7F6E',
        ),
        !1
      )
    }
    let r = parseAPIURL(this.sd)
    this.apiURL = this.apiURL
      .replace('{origin}', r.origin)
      .replace('{project}', r.project)
    let n = this.sd._.getQueryParam(window.location.href, 'deeplink')
    if (!n) {
      return (
        this.logger(
          '\u5F53\u524D\u9875\u9762\u7F3A\u5C11deeplink\u53C2\u6570',
        ),
        !1
      )
    }
    n = window.decodeURIComponent(n)
    let i = parseShortURL(n)
    if (!i) {
      return (
        this.logger(
          '\u5F53\u524D\u9875\u9762\u7684deeplink\u53C2\u6570\u65E0\u6548',
        ),
        !1
      )
    }
    ((this.key = i[2]),
    (this.apiURL = this.apiURL.replace(
      '{key}',
      window.encodeURIComponent(i[2]),
    )),
    this.sd._.ajax({
      url: this.apiURL,
      type: 'GET',
      cors: !0,
      credentials: !1,
      success: function (e) {
        if (e.errorMsg) {
          return (
            SADeepLink.logger(`API\u62A5\u9519\uFF1A${e.errorMsg}`),
            !1
          )
        }
        ((SADeepLink.data = e),
        SADeepLink.logger(
          `API\u67E5\u8BE2\u6210\u529F\uFF0C\u6570\u636E\uFF1A${
            JSON.stringify(e, null, '  ')}`,
        ),
        this.data.app_key
        && (this.data.android_info
          && this.data.android_info.url_schemes
          && (this.data.android_info.url_schemes
            += `://sensorsdata/sd/${this.data.app_key}/${this.key}`),
        this.data.ios_info
        && this.data.ios_info.url_schemes
        && (this.data.ios_info.url_schemes
          += `://sensorsdata/sd/${this.data.app_key}/${this.key}`),
        this.data.harmony_info
        && this.data.harmony_info.url_schemes
        && (this.data.harmony_info.url_schemes
          += `://sensorsdata/sd/${
            this.data.app_key
          }/${
            this.key}`)))
      }.bind(this),
      error() {
        SADeepLink.logger('API\u67E5\u8BE2\u51FA\u9519')
      },
    }),
    this.addListeners())
  },
  openDeepLink() {
    if ((this.logger('openDeeplink()'), !this.data))
      return (this.logger('\u6CA1\u6709Deep link\u6570\u636E!'), !1)
    if (currentOS === 'iOS') {
      this.logger('\u5F53\u524D\u7CFB\u7EDF\u662FiOS')
      let e
        = this.sd
          && this.sd._
          && this.sd._.getIOSVersion() >= 9
          && this.data.ios_info.ios_wake_url
          ? this.data.ios_info.ios_wake_url
          : this.data.ios_info.url_schemes;
      (this.logger(`\u5524\u8D77APP\u7684\u5730\u5740\uFF1A${e}`),
      handleIOSLinks(this, e, this.data.ios_info.download_url))
    }
    else if (currentOS === 'android') {
      (this.logger('\u5F53\u524D\u7CFB\u7EDF\u662F android'),
      handleAndroidLinks(
        this,
        this.data.android_info.url_schemes,
        this.data.android_info.download_url,
      ))
    }
    else if (currentOS === 'harmony') {
      let t
        = this.data.harmony_info.app_linking_url
          || this.data.harmony_info.url_schemes;
      (this.logger('\u5F53\u524D\u7CFB\u7EDF\u662F HarmonyOS'),
      handleAndroidLinks(this, t, this.data.harmony_info.download_url))
    }
  },
  logger(e) {
    this.sd && this.sd.log(e)
  },
  addListeners() {
    let e = getSupportedProperty().visibilityChange
    let t = this;
    (e
      && document.addEventListener(
        e,
        () => {
          (clearTimeout(t.timer),
          t.logger(`visibilitychange, clear timeout:${t.timer}`))
        },
        !1,
      ),
    window.addEventListener(
      'pagehide',
      () => {
        (t.logger(`page hide, clear timeout:${t.timer}`),
        clearTimeout(t.timer))
      },
      !1,
    ))
  },
}
let index$5 = createPlugin$5(SADeepLink, null, 'sdkReady')
let sdkversion_placeholder$7 = '1.27.11'
function wrapPluginInitFn$6(e, t, r) {
  if ((t && (e.plugin_name = t), r && e.init)) {
    let n = e.init
    e.init = function (i, a) {
      if (
        (wrapLogFn$6(i, e, t),
        (i.readyState && i.readyState.state >= 3) || !i.on)
      ) {
        return s()
      }
      function s() {
        n.call(e, i, a)
      }
      i.on(r, s)
    }
  }
  return e
}
function wrapLogFn$6(e, t, r) {
  function n(t, n) {
    e.logger
      ? e.logger.msg
          .apply(e.logger, n)
          .module(`${r}` || '')
          .level(t)
          .log()
      : e.log && e.log.apply(e, n)
  }
  ((t.log = function () {
    n('log', arguments)
  }),
  (t.warn = function () {
    n('warn', arguments)
  }),
  (t.error = function () {
    n('error', arguments)
  }))
}
function createPlugin$6(e, t, r) {
  return (
    wrapPluginInitFn$6(e, t, r),
    (e.plugin_version = sdkversion_placeholder$7),
    e
  )
}
let IOSBridge = {
  init(e) {
    ((_$4 = (sd$4 = e) && sd$4._),
    (log$2
      = (sd$4 && sd$4.log) || (console && console.log) || function () {}),
    initBridge$2())
  },
  handleCommand: handleCommand$2,
}
function initBridge$2() {
  ((iosServerUrl
    = window.SensorsData_iOS_JS_Bridge
      && window.SensorsData_iOS_JS_Bridge.sensorsdata_app_server_url),
  (iosTracker = function () {
    return (
      window.webkit
      && window.webkit.messageHandlers
      && window.webkit.messageHandlers.sensorsdataNativeTracker
    )
  }),
  sd$4
  && !sd$4.bridge.activeBridge
  && iosTracker()
  && iosTracker().postMessage
  && ((sd$4.bridge.activeBridge = IOSBridge),
  sd$4.para.app_js_bridge
  && !sd$4.para.app_js_bridge.is_mui
  && (sd$4.bridge.is_verify_success
    = iosServerUrl && sd$4.bridge.validateAppUrl(iosServerUrl)),
  (sd$4.bridge.bridge_info = {
    touch_app_bridge: !0,
    platform: 'ios',
    verify_success: sd$4.bridge.is_verify_success ? 'success' : 'fail',
    support_two_way_call: !0,
  }),
  sd$4.para.app_js_bridge
    ? (sd$4.registerInterceptor('sendDataStage', {
        send: { priority: 70, entry: sendData$2 },
      }),
      log$2('IOS bridge inits succeed.'))
    : log$2(
        'app_js_bridge is not configured, data will not be sent by iOS bridge.',
      )))
}
function sendData$2(e, t) {
  if (
    sd$4.para.app_js_bridge.is_mui
    || e.data.type === 'item_set'
    || e.data.type === 'item_delete'
  ) {
    return e
  }
  let r = e.callback
  return sd$4.bridge.is_verify_success
    ? (iosTracker()
      && iosTracker().postMessage(
        JSON.stringify({
          callType: 'app_h5_track',
          data: _$4.extend({ server_url: sd$4.para.server_url }, e.data),
        }),
      ),
      _$4.isFunction(r) && r(),
      t.cancellationToken.cancel(),
      e)
    : sd$4.para.app_js_bridge.is_send
      ? (sd$4.debug.apph5({ data: e.data, step: '4.1', output: 'all' }), e)
      : (_$4.isFunction(r) && r(), t.cancellationToken.cancel(), e)
}
function handleCommand$2(e) {
  let t = e.callType
  return (t !== 'page_info' && t !== 'visualized_track')
    || sd$4.bridge.hasVisualModeBridge()
    ? t === 'sensorsdata_get_app_visual_config'
      ? _$4.isObject(window.SensorsData_APP_New_H5_Bridge)
      && window.SensorsData_APP_New_H5_Bridge[t]
      : iosTracker() && iosTracker().postMessage(JSON.stringify(e))
    : null
}
let sd$5
let _$5
let log$3
let index$6 = createPlugin$6(IOSBridge, 'IOSBridge', 'sdkAfterInitPara')
let sdkversion_placeholder$8 = '1.27.11'
function wrapPluginInitFn$7(e, t, r) {
  if ((t && (e.plugin_name = t), r && e.init)) {
    let n = e.init
    e.init = function (i, a) {
      if (
        (wrapLogFn$7(i, e, t),
        (i.readyState && i.readyState.state >= 3) || !i.on)
      ) {
        return s()
      }
      function s() {
        n.call(e, i, a)
      }
      i.on(r, s)
    }
  }
  return e
}
function wrapLogFn$7(e, t, r) {
  function n(t, n) {
    e.logger
      ? e.logger.msg
          .apply(e.logger, n)
          .module(`${r}` || '')
          .level(t)
          .log()
      : e.log && e.log.apply(e, n)
  }
  ((t.log = function () {
    n('log', arguments)
  }),
  (t.warn = function () {
    n('warn', arguments)
  }),
  (t.error = function () {
    n('error', arguments)
  }))
}
function createPlugin$7(e, t, r) {
  return (
    wrapPluginInitFn$7(e, t, r),
    (e.plugin_version = sdkversion_placeholder$8),
    e
  )
}
let IOSObsoleteBridge = {
  init(e) {
    ((_$5 = (sd$5 = e) && sd$5._),
    (log$3
      = (sd$5 && sd$5.log) || (console && console.log) || function () {}),
    initBridge$3())
  },
}
function initBridge$3() {
  sd$5
  && !sd$5.bridge.activeBridge
  && hasBridge()
  && ((sd$5.bridge.activeBridge = IOSObsoleteBridge),
  (sd$5.bridge.bridge_info = {
    touch_app_bridge: !0,
    platform: 'ios',
    verify_success: verifyIOSObsoleteBridge() ? 'success' : 'fail',
  }),
  sd$5.para.app_js_bridge
    ? (sd$5.registerInterceptor('sendDataStage', {
        send: { priority: 90, entry: sendData$3 },
      }),
      log$3('IOS obsolete bridge inits succeed.'))
    : log$3(
        'app_js_bridge is not configured, data will not be sent by iOS obsolete bridge.',
      ))
}
function hasBridge() {
  return (
    (/sensors-verify/.test(navigator.userAgent)
      || /sa-sdk-ios/.test(navigator.userAgent))
    && !window.MSStream
  )
}
function verifyIOSObsoleteBridge() {
  if (/sensors-verify/.test(navigator.userAgent)) {
    let e = navigator.userAgent.match(/sensors-verify\/(\S+)/)
    if (e && e[0] && typeof e[1] == 'string' && e[1].split('?').length === 2) {
      e = e[1].split('?')
      let t = null
      let r = null
      try {
        ((t = _$5.URL(sd$5.para.server_url).hostname),
        (r
          = _$5.URL(sd$5.para.server_url).searchParams.get('project')
            || 'default'))
      }
      catch (n) {
        sd$5.log(n)
      }
      return !(!t || t !== e[0] || !r || r !== e[1])
    }
    return !1
  }
  return !!/sa-sdk-ios/.test(navigator.userAgent)
}
function sendData$3(e, t) {
  if (
    sd$5.para.app_js_bridge.is_mui
    || e.data.type === 'item_set'
    || e.data.type === 'item_delete'
  ) {
    return e
  }
  let r
  let n
  let i = e.callback
  if (sd$5.bridge.bridge_info.verify_success) {
    let a = document.createElement('iframe')
    let s
      = ((r = e.data),
      (n = (n = JSON.stringify(
        _$5.extend({ server_url: sd$5.para.server_url }, r),
      )).replace(/\r\n/g, '')),
      `sensorsanalytics://trackEvent?event=${n = encodeURIComponent(n)}`)
    return (
      a.setAttribute('src', s),
      document.documentElement.appendChild(a),
      a.parentNode.removeChild(a),
      (a = null),
      _$5.isFunction(i) && i(),
      t.cancellationToken.cancel(),
      !0
    )
  }
  return sd$5.para.app_js_bridge.is_send
    ? (sd$5.debug.apph5({ data: e.data, step: '3.2', output: 'all' }), e)
    : (_$5.isFunction(i) && i(), t.cancellationToken.cancel(), e)
}
let index$7 = createPlugin$7(
  IOSObsoleteBridge,
  'IOSObsoleteBridge',
  'sdkAfterInitPara',
)
let sdkversion_placeholder$9 = '1.27.11'
function wrapPluginInitFn$8(e, t, r) {
  if ((t && (e.plugin_name = t), r && e.init)) {
    let n = e.init
    e.init = function (i, a) {
      if (
        (wrapLogFn$8(i, e, t),
        (i.readyState && i.readyState.state >= 3) || !i.on)
      ) {
        return s()
      }
      function s() {
        n.call(e, i, a)
      }
      i.on(r, s)
    }
  }
  return e
}
function wrapLogFn$8(e, t, r) {
  function n(t, n) {
    e.logger
      ? e.logger.msg
          .apply(e.logger, n)
          .module(`${r}` || '')
          .level(t)
          .log()
      : e.log && e.log.apply(e, n)
  }
  ((t.log = function () {
    n('log', arguments)
  }),
  (t.warn = function () {
    n('warn', arguments)
  }),
  (t.error = function () {
    n('error', arguments)
  }))
}
function createPlugin$8(e, t, r) {
  return (
    wrapPluginInitFn$8(e, t, r),
    (e.plugin_version = sdkversion_placeholder$9),
    e
  )
}
let page_hidden_status_refresh_time = 5e3
let MAX_DURATION = 432e3
function PageLeave() {
  ((this.sd = null),
  (this.start_time = +new Date()),
  (this.page_show_status = !0),
  (this.page_hidden_status = !1),
  (this._ = {}),
  (this.timer = null),
  (this.current_page_url = document.referrer),
  (this.url = location.href),
  (this.title = document.title || ''),
  (this.option = {}),
  (this.heartbeat_interval_time = 5e3),
  (this.heartbeat_interval_timer = null),
  (this.page_id = null),
  (this.storage_name = 'sawebjssdkpageleave'),
  (this.max_duration = MAX_DURATION))
}
((PageLeave.prototype.init = function (e, t) {
  if (e) {
    if (((this.sd = e), (this._ = this.sd._), t)) {
      this.option = t
      let r = t.heartbeat_interval_time
      r
      && (this._.isNumber(r) || this._.isNumber(1 * r))
      && 1 * r > 0
      && (this.heartbeat_interval_time = 1e3 * r)
      let n = t.max_duration
      n
      && (this._.isNumber(n) || this._.isNumber(1 * n))
      && 1 * n > 0
      && (this.max_duration = n)
    }
    ((this.page_id = Number(
      String(this._.getRandom()).slice(2, 5)
      + String(this._.getRandom()).slice(2, 4)
      + String(new Date().getTime()).slice(-4),
    )),
    this.addEventListener(),
    !0 === document.hidden
      ? (this.page_show_status = !1)
      : this.addHeartBeatInterval(),
    this.log('PageLeave\u521D\u59CB\u5316\u5B8C\u6BD5'))
  }
  else {
    this.log('\u795E\u7B56JS SDK\u672A\u6210\u529F\u5F15\u5165')
  }
}),
(PageLeave.prototype.log = function (e) {
  this.sd && this.sd.log(e)
}),
(PageLeave.prototype.refreshPageEndTimer = function () {
  let e = this;
  (this.timer && (clearTimeout(this.timer), (this.timer = null)),
  (this.timer = setTimeout(() => {
    e.page_hidden_status = !1
  }, page_hidden_status_refresh_time)))
}),
(PageLeave.prototype.hiddenStatusHandler = function () {
  (clearTimeout(this.timer),
  (this.timer = null),
  (this.page_hidden_status = !1))
}),
(PageLeave.prototype.pageStartHandler = function () {
    let e = this.getPageLeaveProperties();
  ((this.start_time = +new Date()),
  !0 == !document.hidden
    ? (this.page_show_status = !0)
    : (this.page_show_status = !1),
  (this.url = location.href),
  this.isCollectUrl(this.url) && this.sd.track(this.option.event_name_view, Object.assign(e, this.option.urlPropertyMap(this.url))),
  (this.title = document.title))
}),
(PageLeave.prototype.pageEndHandler = function () {
  if (!0 !== this.page_hidden_status) {
    let e = this.getPageLeaveProperties();
    (!1 === this.page_show_status && delete e[this.option.event_duration],
    (this.page_show_status = !1),
    (this.page_hidden_status = !0),
    this.isCollectUrl(this.url) && this.sd.track(this.option.event_name_leave, Object.assign(e, this.option.urlPropertyMap(this.url))),
    this.refreshPageEndTimer(),
    this.delHeartBeatData())
  }
}),
(PageLeave.prototype.addEventListener = function () {
  (this.addPageStartListener(),
  this.addPageSwitchListener(),
  this.addSinglePageListener(),
  this.addPageEndListener())
}),
(PageLeave.prototype.addPageStartListener = function () {
  let e = this
  'onpageshow' in window
  && this._.addEvent(window, 'pageshow', () => {
    (e.pageStartHandler(), e.hiddenStatusHandler())
  })
}),
(PageLeave.prototype.isCollectUrl = function (e) {
  return (
    typeof this.option.isCollectUrl != 'function'
    || typeof e != 'string'
    || e === ''
    || this.option.isCollectUrl(e)
  )
}),
(PageLeave.prototype.addSinglePageListener = function () {
  let e = this
  this.sd.ee
  && this.sd.ee.spa.prepend('switch', (t) => {
    t !== location.href
    && ((e.url = t),
    e.pageEndHandler(),
    e.stopHeartBeatInterval(),
    (e.current_page_url = e.url),
    e.pageStartHandler(),
    e.hiddenStatusHandler(),
    e.addHeartBeatInterval())
  })
}),
(PageLeave.prototype.addPageEndListener = function () {
  let e = this
  this._.each(['pagehide', 'beforeunload', 'unload'], (t) => {
    `on${t}` in window
    && e._.addEvent(window, t, () => {
      (e.pageEndHandler(), e.stopHeartBeatInterval())
    })
  })
}),
(PageLeave.prototype.addPageSwitchListener = function () {
  let e = this
  this._.listenPageState({
    visible() {
      (e.pageStartHandler(),
      e.hiddenStatusHandler(),
      e.addHeartBeatInterval())
    },
    hidden() {
      ((e.url = location.href),
      (e.title = document.title),
      e.pageEndHandler(),
      e.stopHeartBeatInterval())
    },
  })
}),
(PageLeave.prototype.addHeartBeatInterval = function () {
  this._.localStorage.isSupport() && this.startHeartBeatInterval()
}),
(PageLeave.prototype.startHeartBeatInterval = function () {
  let e = this
  this.heartbeat_interval_timer && this.stopHeartBeatInterval()
  let t = !0;
  (this.isCollectUrl(this.url) || (t = !1),
  (this.heartbeat_interval_timer = setInterval(() => {
    t && e.saveHeartBeatData()
  }, this.heartbeat_interval_time)),
  t && this.saveHeartBeatData('is_first_heartbeat'),
  this.reissueHeartBeatData())
}),
(PageLeave.prototype.stopHeartBeatInterval = function () {
  (clearInterval(this.heartbeat_interval_timer),
  (this.heartbeat_interval_timer = null))
}),
(PageLeave.prototype.saveHeartBeatData = function (e) {
  let t = this.getPageLeaveProperties()
  let r = new Date();
  ((t.$time = r), e === 'is_first_heartbeat' && (t[this.option.event_duration] = 3.14))
  let n = this.sd.kit.buildData({
    type: 'track',
    event: this.option.event_name_leave,
    properties: t,
  });
  ((n.heartbeat_interval_time = this.heartbeat_interval_time),
  this.sd.store.saveObjectVal(`${this.storage_name}-${this.page_id}`, n))
}),
(PageLeave.prototype.delHeartBeatData = function (e) {
  this._.localStorage.isSupport()
  && this._.localStorage.remove(e || `${this.storage_name}-${this.page_id}`)
}),
(PageLeave.prototype.reissueHeartBeatData = function () {
  for (let e = window.localStorage.length - 1; e >= 0; e--) {
    let t = window.localStorage.key(e)
    if (
      t
      && t !== `${this.storage_name}-${this.page_id}`
      && t.indexOf(`${this.storage_name}-`) === 0
    ) {
      let r = this.sd.store.readObjectVal(t)
      this._.isObject(r)
      && 1 * new Date() - r.time > r.heartbeat_interval_time + 5e3
      && (delete r.heartbeat_interval_time,
      (r._flush_time = new Date().getTime()),
      this.sd.kit.sendData(r),
      this.delHeartBeatData(t))
    }
  }
}),
(PageLeave.prototype.getPageLeaveProperties = function () {
  let e = (+new Date() - this.start_time) / 1e3;
  ((isNaN(e) || e < 0 || e > this.max_duration) && (e = 0),
  (e = Number(e.toFixed(3))))
  let t = this._.getReferrer(this.current_page_url)
  let r
    = (document.documentElement && document.documentElement.scrollTop)
      || window.pageYOffset
      || (document.body && document.body.scrollTop)
      || 0
  r = Math.round(r) || 0
  let n = {
    $title: this.title,
    $url: this._.getURL(this.url),
    $url_path: this._.getURLPath(this._.URL(this.url).pathname),
    $referrer_host: t ? this._.getHostname(t) : '',
    $referrer: t,
    $viewport_position: r,
  }
  return (
    e !== 0 && (n[this.option.event_duration] = e),
    (n = this._.extend(n, this.option.custom_props))
  )
}))
let pageLeave = new PageLeave()
let index$8 = createPlugin$8(pageLeave, 'PageLeave', 'sdkReady')
let sdkversion_placeholder$a = '1.27.11'
function wrapPluginInitFn$9(e, t, r) {
  if ((t && (e.plugin_name = t), r && e.init)) {
    let n = e.init
    e.init = function (i, a) {
      if (
        (wrapLogFn$9(i, e, t),
        (i.readyState && i.readyState.state >= 3) || !i.on)
      ) {
        return s()
      }
      function s() {
        n.call(e, i, a)
      }
      i.on(r, s)
    }
  }
  return e
}
function wrapLogFn$9(e, t, r) {
  function n(t, n) {
    e.logger
      ? e.logger.msg
          .apply(e.logger, n)
          .module(`${r}` || '')
          .level(t)
          .log()
      : e.log && e.log.apply(e, n)
  }
  ((t.log = function () {
    n('log', arguments)
  }),
  (t.warn = function () {
    n('warn', arguments)
  }),
  (t.error = function () {
    n('error', arguments)
  }))
}
function createPlugin$9(e, t, r) {
  return (
    wrapPluginInitFn$9(e, t, r),
    (e.plugin_version = sdkversion_placeholder$a),
    e
  )
}
let eventSent = !1
let PageLoad = {
  init(e, t) {
    function r() {
      let n = 0
      let i
        = window.performance
          || window.webkitPerformance
          || window.msPerformance
          || window.mozPerformance
      let a = {
        $url: e._.getURL(),
        $title: document.title,
        $url_path: e._.getURLPath(),
        $referrer: e._.getReferrer(null, !0),
      }
      if (
        (i
          ? ((n
              = (function (t) {
                let r = 0
                return (
                  e._.isFunction(t.getEntriesByType)
                  && (r
                    = ((t.getEntriesByType('navigation') || [{}])[0] || {})
                      .domContentLoadedEventEnd || 0),
                  r
                )
              })(i)
              || (function (t) {
                let r = 0
                if (t.timing) {
                  let n = t.timing
                  n.fetchStart !== 0
                  && e._.isNumber(n.fetchStart)
                  && n.domContentLoadedEventEnd !== 0
                  && e._.isNumber(n.domContentLoadedEventEnd)
                    ? (r = n.domContentLoadedEventEnd - n.fetchStart)
                    : e.log(
                        'performance \u6570\u636E\u83B7\u53D6\u5F02\u5E38',
                      )
                }
                return r
              })(i)),
            (function (t, r) {
              if (t.getEntries && typeof t.getEntries == 'function') {
                for (
                  var n = t.getEntries(), i = null, a = 0;
                  a < n.length;
                  a++
                )
                  'transferSize' in n[a] && (i += n[a].transferSize)
                e._.isNumber(i)
                && i >= 0
                && i < 10737418240
                && (r.$page_resource_size = Number((i / 1024).toFixed(3)))
              }
            })(i, a))
          : e.log('\u6D4F\u89C8\u5668\u672A\u652F\u6301 performance API.'),
        n > 0)
      ) {
        let s = (e._.isObject(t) && t.max_duration) || 1800;
        ((n = Number((n / 1e3).toFixed(3))),
        (!e._.isNumber(s) || s <= 0 || n <= s) && (a.event_duration = n))
      }
      (eventSent || (e.track('$WebPageLoad', a), (eventSent = !0)),
      window.removeEventListener
        ? window.removeEventListener('load', r)
        : window.detachEvent && window.detachEvent('onload', r))
    }
    document.readyState == 'complete'
      ? r()
      : window.addEventListener
        ? window.addEventListener('load', r)
        : window.attachEvent && window.attachEvent('onload', r)
  },
}
let index$9 = createPlugin$9(PageLoad, 'PageLoad', 'sdkReady')
function addProperties(e, t) {
  if (e.type !== 'track')
    return e
  let r = t.sd
  let n = r._
  let i = r.saEvent.check
  let a = n.extend2Lev({ properties: {} }, e)
  let s = t.customRegister
  let o = a.properties
  let l = a.event
  let d = {}
  return (
    n.each(s, (e) => {
      if (n.isObject(e)) {
        n.includes(e.events, l)
        && i({ properties: e.properties })
        && (d = n.extend(d, e.properties))
      }
      else if (n.isFunction(e)) {
        let t = e({ event: l, properties: o, data: a })
        n.isObject(t)
        && !n.isEmptyObject(t)
        && i({ properties: t })
        && (d = n.extend(d, t))
      }
    }),
    (e.properties = n.extend(o, d)),
    e
  )
}
function RegisterProperties() {
  ((this.sd = null),
  (this.log = (window.console && window.console.log) || function () {}),
  (this.customRegister = []))
}
((RegisterProperties.prototype.init = function (e) {
  if (e) {
    ((this.sd = e), (this._ = e._), (this.log = e.log))
    let t = this
    e.registerInterceptor('buildDataStage', {
      extendProps: {
        priority: 0,
        entry(e) {
          return addProperties(e, t)
        },
      },
    })
  }
  else {
    this.log('\u795E\u7B56JS SDK\u672A\u6210\u529F\u5F15\u5165')
  }
}),
(RegisterProperties.prototype.register = function (e) {
  this.sd
    ? this._.isObject(e)
    && this._.isArray(e.events)
    && e.events.length > 0
    && this._.isObject(e.properties)
    && !this._.isEmptyObject(e.properties)
      ? this.customRegister.push(e)
      : this.log('RegisterProperties: register \u53C2\u6570\u9519\u8BEF')
    : this.log('\u795E\u7B56JS SDK\u672A\u6210\u529F\u5F15\u5165')
}),
(RegisterProperties.prototype.hookRegister = function (e) {
  this.sd
    ? this._.isFunction(e)
      ? this.customRegister.push(e)
      : this.log('RegisterProperties: hookRegister \u53C2\u6570\u9519\u8BEF')
    : this.log('\u795E\u7B56JS SDK\u672A\u6210\u529F\u5F15\u5165')
}))
let sdkversion_placeholder$b = '1.27.11'
function wrapPluginInitFn$a(e, t, r) {
  if ((t && (e.plugin_name = t), r && e.init)) {
    let n = e.init
    e.init = function (i, a) {
      if (
        (wrapLogFn$a(i, e, t),
        (i.readyState && i.readyState.state >= 3) || !i.on)
      ) {
        return s()
      }
      function s() {
        n.call(e, i, a)
      }
      i.on(r, s)
    }
  }
  return e
}
function wrapLogFn$a(e, t, r) {
  function n(t, n) {
    e.logger
      ? e.logger.msg
          .apply(e.logger, n)
          .module(`${r}` || '')
          .level(t)
          .log()
      : e.log && e.log.apply(e, n)
  }
  ((t.log = function () {
    n('log', arguments)
  }),
  (t.warn = function () {
    n('warn', arguments)
  }),
  (t.error = function () {
    n('error', arguments)
  }))
}
function createPlugin$a(e, t, r) {
  return (
    wrapPluginInitFn$a(e, t, r),
    (e.plugin_version = sdkversion_placeholder$b),
    e
  )
}
RegisterProperties.prototype.plugin_name = 'RegisterProperties'
let instance = new RegisterProperties()
let index$a = createPlugin$a(instance)
let sdkversion_placeholder$c = '1.27.11'
function wrapPluginInitFn$b(e, t, r) {
  if ((t && (e.plugin_name = t), r && e.init)) {
    let n = e.init
    e.init = function (i, a) {
      if (
        (wrapLogFn$b(i, e, t),
        (i.readyState && i.readyState.state >= 3) || !i.on)
      ) {
        return s()
      }
      function s() {
        n.call(e, i, a)
      }
      i.on(r, s)
    }
  }
  return e
}
function wrapLogFn$b(e, t, r) {
  function n(t, n) {
    e.logger
      ? e.logger.msg
          .apply(e.logger, n)
          .module(`${r}` || '')
          .level(t)
          .log()
      : e.log && e.log.apply(e, n)
  }
  ((t.log = function () {
    n('log', arguments)
  }),
  (t.warn = function () {
    n('warn', arguments)
  }),
  (t.error = function () {
    n('error', arguments)
  }))
}
function createPlugin$b(e, t, r) {
  return (
    wrapPluginInitFn$b(e, t, r),
    (e.plugin_version = sdkversion_placeholder$c),
    e
  )
}
let _sd
let _oldBuildData
let _log = (window.console && window.console.log) || function () {}
function buildData(e) {
  try {
    if (
      e.event !== '$pageview'
      && (!e.type || e.type.slice(0, 7) !== 'profile')
    ) {
      let t
        = window.innerHeight
          || document.documentElement.clientHeight
          || document.body.clientHeight
          || 0
      let r = document.documentElement.scrollHeight || 0
      let n = { $page_height: Math.max(t, r) || 0 }
      e.properties = _sd._.extend(e.properties || {}, n)
    }
  }
  catch (i) {
    _log('\u9875\u9762\u9AD8\u5EA6\u83B7\u53D6\u5F02\u5E38\u3002')
  }
  return _oldBuildData.call(_sd.kit, e)
}
let RegisterPropertyPageHeight = {
  init(e) {
    ((_log = ((_sd = e) && _sd.log) || _log),
    e && e.kit && e.kit.buildData
      ? ((_oldBuildData = _sd.kit.buildData),
        (_sd.kit.buildData = buildData),
        _log(
          'RegisterPropertyPageHeight \u63D2\u4EF6\u521D\u59CB\u5316\u5B8C\u6210',
        ))
      : _log(
          'RegisterPropertyPageHeight \u63D2\u4EF6\u521D\u59CB\u5316\u5931\u8D25,\u5F53\u524D\u4E3Bsdk\u4E0D\u652F\u6301 RegisterPropertyPageHeight \u63D2\u4EF6\uFF0C\u8BF7\u5347\u7EA7\u4E3Bsdk',
        ))
  },
}
let index$b = createPlugin$b(
  RegisterPropertyPageHeight,
  'RegisterPropertyPageHeight',
  'sdkReady',
)
let sdkversion_placeholder$d = '1.27.11'
function wrapPluginInitFn$c(e, t, r) {
  if ((t && (e.plugin_name = t), r && e.init)) {
    let n = e.init
    e.init = function (i, a) {
      if (
        (wrapLogFn$c(i, e, t),
        (i.readyState && i.readyState.state >= 3) || !i.on)
      ) {
        return s()
      }
      function s() {
        n.call(e, i, a)
      }
      i.on(r, s)
    }
  }
  return e
}
function wrapLogFn$c(e, t, r) {
  function n(t, n) {
    e.logger
      ? e.logger.msg
          .apply(e.logger, n)
          .module(`${r}` || '')
          .level(t)
          .log()
      : e.log && e.log.apply(e, n)
  }
  ((t.log = function () {
    n('log', arguments)
  }),
  (t.warn = function () {
    n('warn', arguments)
  }),
  (t.error = function () {
    n('error', arguments)
  }))
}
function createPlugin$c(e, t, r) {
  return (
    wrapPluginInitFn$c(e, t, r),
    (e.plugin_version = sdkversion_placeholder$d),
    e
  )
}
let sd$6
let siteLinker = {
  getPart(e) {
    let t = this.option.length
    if (t) {
      for (let r = 0; r < t; r++) {
        if (e.includes(this.option[r].part_url))
          return !0
      }
    }
    return !1
  },
  getPartHash(e) {
    let t = this.option.length
    if (t) {
      for (let r = 0; r < t; r++) {
        if (e.includes(this.option[r].part_url))
          return this.option[r].after_hash
      }
    }
    return !1
  },
  getCurrenId() {
    let e = this.store.getDistinctId() || ''
    let t = this.store.getFirstId() || ''
    return (
      this._.urlSafeBase64 && this._.urlSafeBase64.encode
        ? (e = e
            ? this._.urlSafeBase64.trim(
                this._.urlSafeBase64.encode(this._.base64Encode(e)),
              )
            : '')
        : this._.rot13obfs && (e = e ? this._.rot13obfs(e) : ''),
      encodeURIComponent(t ? `f${e}` : `d${e}`)
    )
  },
  rewriteUrl(e, t) {
    let r = this
    let n = /([^?#]+)(\?[^#]*)?(#.*)?/.exec(e)
    let i = ''
    if (n) {
      let a
      let s = n[1] || ''
      let o = n[2] || ''
      let l = n[3] || ''
      let d = `_sasdk=${this.getCurrenId()}`
      let c = function (e) {
        let t = e.split('&')
        let n = []
        return (
          r._.each(t, (e) => {
            e.includes('_sasdk=') ? n.push(d) : n.push(e)
          }),
          n.join('&')
        )
      }
      if (this.getPartHash(e)) {
        ((a = l.indexOf('_sasdk')),
        (i
          = l.includes('?')
            ? a > -1
              ? `${s
              + o
              }#${
                l.substring(1, a)
              }${c(l.substring(a, l.length))}`
              : `${s + o + l}&${d}`
            : `${s + o}#${l.substring(1)}?${d}`))
      }
      else {
        ((a = o.indexOf('_sasdk')),
        (i = /^\?(\w)+/.test(o)
          ? a > -1
            ? `${s}?${c(o.substring(1))}${l}`
            : `${s + o}&${d}${l}`
          : `${s}?${d}${l}`))
      }
      return (t && (t.href = i), i)
    }
  },
  getUrlId() {
    let e = location.href.match(/_sasdk=([aufd][^?#&=]+)/)
    if (this._.isArray(e) && e[1]) {
      let t = decodeURIComponent(e[1])
      return (
        !t
        || (t.substring(0, 1) !== 'f' && t.substring(0, 1) !== 'd')
        || (this._.urlSafeBase64
          && this._.urlSafeBase64.isUrlSafeBase64
          && this._.urlSafeBase64.isUrlSafeBase64(t)
          ? (t
              = t.substring(0, 1)
                + this._.base64Decode(
                  this._.urlSafeBase64.decode(t.substring(1)),
                ))
          : this._.rot13defs
            && (t = t.substring(0, 1) + this._.rot13defs(t.substring(1)))),
        t
      )
    }
    return ''
  },
  setRefferId(e) {
    let t = this.store.getDistinctId()
    let r = this.getUrlId()
    if (r && r !== '') {
      let n = r.substring(0, 1) === 'a' || r.substring(0, 1) === 'd';
      (r = r.substring(1)) !== t
      && (n
        ? (this.sd.identify(r, !0),
          this.store.getFirstId()
          && this.sd.saEvent.send(
            {
              original_id: r,
              distinct_id: t,
              type: 'track_signup',
              event: '$SignUp',
              properties: {},
            },
            null,
          ))
        : (this.store.getFirstId() && !e.re_login) || this.sd.login(r))
    }
  },
  addListen() {
    let e = this
    let t = function (t) {
      let r
      let n
      let i = t.target
      let a = i.tagName.toLowerCase()
      let s = i.parentNode
      if (
        (a === 'a' && i.href)
        || (s && s.tagName && s.tagName.toLowerCase() === 'a' && s.href)
      ) {
        a === 'a' && i.href
          ? ((r = i.href), (n = i))
          : ((r = s.href), (n = s))
        let o = e._.URL(r).protocol;
        (o !== 'http:' && o !== 'https:')
        || (e.getPart(r) && e.rewriteUrl(r, n))
      }
    };
    (e._.addEvent(document, 'mousedown', t),
    window.PointerEvent
    && 'maxTouchPoints' in window.navigator
    && window.navigator.maxTouchPoints >= 0
    && e._.addEvent(document, 'pointerdown', t))
  },
  init(e, t) {
    ((this.sd = e),
    (this._ = e._),
    (this.store = e.store),
    (this.para = e.para),
    this._.isObject(t) && this._.isArray(t.linker) && t.linker.length > 0
      ? (this.setRefferId(t),
        this.addListen(),
        (this.option = t.linker),
        (this.option = (function (t) {
          for (var r = t.length, n = [], i = 0; i < r; i++) {
            /[A-Z0-9]+\./i.test(t[i].part_url)
            && Object.prototype.toString.call(t[i].after_hash)
            == '[object Boolean]'
              ? n.push(t[i])
              : e.log(
                  `linker \u914D\u7F6E\u7684\u7B2C ${
                    i + 1
                  } \u9879\u683C\u5F0F\u4E0D\u6B63\u786E\uFF0C\u8BF7\u68C0\u67E5\u53C2\u6570\u683C\u5F0F\uFF01`,
                )
          }
          return n
        })(this.option)))
      : e.log(
          '\u8BF7\u914D\u7F6E\u6253\u901A\u57DF\u540D\u53C2\u6570\uFF01',
        ))
  },
}
let index$c = createPlugin$c(siteLinker, 'SiteLinker', 'sdkReady')
let source_channel_standard$1
  = 'utm_source utm_medium utm_campaign utm_content utm_term'
let sdkversion_placeholder$e = '1.27.11'
function wrapPluginInitFn$d(e, t, r) {
  if ((t && (e.plugin_name = t), r && e.init)) {
    let n = e.init
    e.init = function (i, a) {
      if (
        (wrapLogFn$d(i, e, t),
        (i.readyState && i.readyState.state >= 3) || !i.on)
      ) {
        return s()
      }
      function s() {
        n.call(e, i, a)
      }
      i.on(r, s)
    }
  }
  return e
}
function wrapLogFn$d(e, t, r) {
  function n(t, n) {
    e.logger
      ? e.logger.msg
          .apply(e.logger, n)
          .module(`${r}` || '')
          .level(t)
          .log()
      : e.log && e.log.apply(e, n)
  }
  ((t.log = function () {
    n('log', arguments)
  }),
  (t.warn = function () {
    n('warn', arguments)
  }),
  (t.error = function () {
    n('error', arguments)
  }))
}
function createPlugin$d(e, t, r) {
  return (
    wrapPluginInitFn$d(e, t, r),
    (e.plugin_version = sdkversion_placeholder$e),
    e
  )
}
let utm = {
  init(e) {
    e
    && !sd$6
    && (sd$6 = e).registerInterceptor('businessStage', {
      getUtmData: {
        priority: 0,
        entry() {
          return (function () {
            let e = source_channel_standard$1.split(' ')
            let t = ''
            let r = {}
            sd$6._.isArray(sd$6.para.source_channel)
            && sd$6.para.source_channel.length > 0
            && ((e = e.concat(sd$6.para.source_channel)),
            (e = sd$6._.unique(e)))
            return (
              sd$6._.each(e, (e) => {
                (t = sd$6._.getQueryParam(location.href, e)).length
                && (r[e] = t)
              }),
              r
            )
          })()
        },
      },
    })
  },
}
let index$d = createPlugin$d(utm, 'Utm', 'sdkAfterInitPara')
let sdkversion_placeholder$f = '1.27.11'
function wrapPluginInitFn$e(e, t, r) {
  if ((t && (e.plugin_name = t), r && e.init)) {
    let n = e.init
    e.init = function (i, a) {
      if (
        (wrapLogFn$e(i, e, t),
        (i.readyState && i.readyState.state >= 3) || !i.on)
      ) {
        return s()
      }
      function s() {
        n.call(e, i, a)
      }
      i.on(r, s)
    }
  }
  return e
}
function wrapLogFn$e(e, t, r) {
  function n(t, n) {
    e.logger
      ? e.logger.msg
          .apply(e.logger, n)
          .module(`${r}` || '')
          .level(t)
          .log()
      : e.log && e.log.apply(e, n)
  }
  ((t.log = function () {
    n('log', arguments)
  }),
  (t.warn = function () {
    n('warn', arguments)
  }),
  (t.error = function () {
    n('error', arguments)
  }))
}
function createPlugin$e(e, t, r) {
  return (
    wrapPluginInitFn$e(e, t, r),
    (e.plugin_version = sdkversion_placeholder$f),
    e
  )
}
let isDisabled = !1
let sd$7 = null
let disableSDKPlugin = {
  init(e) {
    (((sd$7 = e).disableSDK = disableSDK),
    (sd$7.enableSDK = enableSDK),
    (sd$7.getDisabled = getDisabled))
  },
}
function disableSDK() {
  isDisabled = !0
}
function enableSDK() {
  isDisabled = !1
}
function getDisabled() {
  return isDisabled
}
let sd$8
let _$6
let index$e = createPlugin$e(disableSDKPlugin, 'DisableSDK', 'sdkInitAPI')
let sdkversion_placeholder$g = '1.27.11'
function wrapPluginInitFn$f(e, t, r) {
  if ((t && (e.plugin_name = t), r && e.init)) {
    let n = e.init
    e.init = function (i, a) {
      if (
        (wrapLogFn$f(i, e, t),
        (i.readyState && i.readyState.state >= 3) || !i.on)
      ) {
        return s()
      }
      function s() {
        n.call(e, i, a)
      }
      i.on(r, s)
    }
  }
  return e
}
function wrapLogFn$f(e, t, r) {
  function n(t, n) {
    e.logger
      ? e.logger.msg
          .apply(e.logger, n)
          .module(`${r}` || '')
          .level(t)
          .log()
      : e.log && e.log.apply(e, n)
  }
  ((t.log = function () {
    n('log', arguments)
  }),
  (t.warn = function () {
    n('warn', arguments)
  }),
  (t.error = function () {
    n('error', arguments)
  }))
}
function createPlugin$f(e, t, r) {
  return (
    wrapPluginInitFn$f(e, t, r),
    (e.plugin_version = sdkversion_placeholder$g),
    e
  )
}
function debugPath(e) {
  let t = e
  let r = '';
  ((r
    = sd$8.para.debug_mode_url.includes('?')
      ? `${sd$8.para.debug_mode_url}&${sd$8.kit.encodeTrackData(e)}`
      : `${sd$8.para.debug_mode_url}?${sd$8.kit.encodeTrackData(e)}`),
  _$6.ajax({
    url: r,
    type: 'GET',
    cors: !0,
    header: { 'Dry-Run': String(sd$8.para.debug_mode_upload) },
    success(e) {
      !0 === _$6.isEmptyObject(e)
        ? alert(`debug\u6570\u636E\u53D1\u9001\u6210\u529F${t}`)
        : alert(
            `debug\u5931\u8D25 \u9519\u8BEF\u539F\u56E0${JSON.stringify(e)}`,
          )
    },
  }))
}
function sendData$4(e, t) {
  if (!0 === sd$8.para.debug_mode) {
    let r = e.data
    e.callback;
    (debugPath(JSON.stringify(r)), t.cancellationToken.stop())
  }
  return e
}
function initPara$1() {
  !0 === sd$8.para.debug_mode
  && ((sd$8.para.debug_mode_upload = sd$8.para.debug_mode_upload || !1),
  _$6.isString(sd$8.para.debug_mode_url)
  || (_$6.isString(sd$8.para.server_url)
    ? (sd$8.para.debug_mode_url = sd$8.para.server_url.replace(
        'sa.gif',
        'debug',
      ))
    : _$6.isArray(sd$8.para.server_url)
      && _$6.isString(sd$8.para.server_url[0])
      ? (sd$8.para.debug_mode_url = sd$8.para.server_url[0].replace(
          'sa.gif',
          'debug',
        ))
      : (sd$8.para.debug_mode = !1)))
}
function senderInit() {
  (sd$8.on('sdkInitPara', () => {
    initPara$1()
  }),
  sd$8.on('sdkAfterInitPara', () => {
    sd$8.registerInterceptor('sendDataStage', {
      send: { priority: 30, entry: sendData$4 },
    })
  }))
}
let sd$9
let _$7
let DebugSender = {
  plugin_name: 'DebugSender',
  init(e) {
    ((_$6 = (sd$8 = e)._), senderInit())
  },
}
let index$f = createPlugin$f(DebugSender)
let sdkversion_placeholder$h = '1.27.11'
function wrapPluginInitFn$g(e, t, r) {
  if ((t && (e.plugin_name = t), r && e.init)) {
    let n = e.init
    e.init = function (i, a) {
      if (
        (wrapLogFn$g(i, e, t),
        (i.readyState && i.readyState.state >= 3) || !i.on)
      ) {
        return s()
      }
      function s() {
        n.call(e, i, a)
      }
      i.on(r, s)
    }
  }
  return e
}
function wrapLogFn$g(e, t, r) {
  function n(t, n) {
    e.logger
      ? e.logger.msg
          .apply(e.logger, n)
          .module(`${r}` || '')
          .level(t)
          .log()
      : e.log && e.log.apply(e, n)
  }
  ((t.log = function () {
    n('log', arguments)
  }),
  (t.warn = function () {
    n('warn', arguments)
  }),
  (t.error = function () {
    n('error', arguments)
  }))
}
function createPlugin$g(e, t, r) {
  return (
    wrapPluginInitFn$g(e, t, r),
    (e.plugin_version = sdkversion_placeholder$h),
    e
  )
}
function sendData$5(e, t) {
  if (
    _$7.isObject(sd$9.para.jsapp)
    && !sd$9.para.jsapp.isOnline
    && typeof sd$9.para.jsapp.setData == 'function'
  ) {
    let r = e;
    (delete r.callback,
    (r = JSON.stringify(r)),
    sd$9.para.jsapp.setData(r),
    t.cancellationToken.stop())
  }
  return e
}
function senderInit$1() {
  sd$9.on('sdkAfterInitAPI', () => {
    (_$7.isObject(sd$9.commonWays)
      && (sd$9.commonWays.setOnlineState = setOnlineState),
    sd$9.registerInterceptor('sendDataStage', {
      send: { priority: 40, entry: sendData$5 },
    }))
  })
}
function setOnlineState(e) {
  if (
    !0 === e
    && _$7.isObject(sd$9.para.jsapp)
    && typeof sd$9.para.jsapp.getData == 'function'
  ) {
    sd$9.para.jsapp.isOnline = !0
    let t = sd$9.para.jsapp.getData()
    _$7.isArray(t)
    && t.length > 0
    && _$7.each(t, (e) => {
      _$7.isJSONString(e) && sd$9.kit.sendData(JSON.parse(e))
    })
  }
  else {
    sd$9.para.jsapp.isOnline = !1
  }
}
let sd$a
let _$8
let JsappSender = {
  plugin_name: 'JsappSender',
  init(e) {
    ((_$7 = (sd$9 = e)._), senderInit$1())
  },
}
let index$g = createPlugin$g(JsappSender)
let sdkversion_placeholder$i = '1.27.11'
function wrapPluginInitFn$h(e, t, r) {
  if ((t && (e.plugin_name = t), r && e.init)) {
    let n = e.init
    e.init = function (i, a) {
      if (
        (wrapLogFn$h(i, e, t),
        (i.readyState && i.readyState.state >= 3) || !i.on)
      ) {
        return s()
      }
      function s() {
        n.call(e, i, a)
      }
      i.on(r, s)
    }
  }
  return e
}
function wrapLogFn$h(e, t, r) {
  function n(t, n) {
    e.logger
      ? e.logger.msg
          .apply(e.logger, n)
          .module(`${r}` || '')
          .level(t)
          .log()
      : e.log && e.log.apply(e, n)
  }
  ((t.log = function () {
    n('log', arguments)
  }),
  (t.warn = function () {
    n('warn', arguments)
  }),
  (t.error = function () {
    n('error', arguments)
  }))
}
function createPlugin$h(e, t, r) {
  return (
    wrapPluginInitFn$h(e, t, r),
    (e.plugin_version = sdkversion_placeholder$i),
    e
  )
}
let batchInstance = null
function sendData$6(e, t) {
  return (
    !sd$a.para.app_js_bridge
    && sd$a.para.batch_send
    && _$8.localStorage.isSupport()
    && localStorage.length < sd$a.para.batch_send.storage_length
    && (batchInstance.add(e.data), t.cancellationToken.stop()),
    e
  )
}
function initPara$2() {
  let e = { datasend_timeout: 6e3, send_interval: 6e3, storage_length: 200 }
  _$8.localStorage.isSupport()
  && _$8.isSupportCors()
  && typeof localStorage == 'object'
    ? !0 === sd$a.para.batch_send
        ? (sd$a.para.batch_send = _$8.extend({}, e))
        : typeof sd$a.para.batch_send == 'object'
          && (sd$a.para.batch_send = _$8.extend({}, e, sd$a.para.batch_send))
    : (sd$a.para.batch_send = !1)
}
function senderInit$2() {
  (sd$a.on('sdkInitPara', () => {
    initPara$2()
  }),
  sd$a.on('sdkAfterInitPara', () => {
    !sd$a.para.app_js_bridge
    && sd$a.para.batch_send
    && _$8.localStorage.isSupport()
    && (batchInstance || (batchInstance = new _$8.BatchSend()),
    batchInstance.batchInterval(),
    sd$a.registerInterceptor('sendDataStage', {
      send: { priority: 100, entry: sendData$6 },
    }))
  }))
}
let sd$b
let _$9
let BatchSender = {
  plugin_name: 'BatchSender',
  init(e) {
    ((_$8 = (sd$a = e)._), senderInit$2())
  },
}
let index$h = createPlugin$h(BatchSender)
let sdkversion_placeholder$j = '1.27.11'
function wrapPluginInitFn$i(e, t, r) {
  if ((t && (e.plugin_name = t), r && e.init)) {
    let n = e.init
    e.init = function (i, a) {
      if (
        (wrapLogFn$i(i, e, t),
        (i.readyState && i.readyState.state >= 3) || !i.on)
      ) {
        return s()
      }
      function s() {
        n.call(e, i, a)
      }
      i.on(r, s)
    }
  }
  return e
}
function wrapLogFn$i(e, t, r) {
  function n(t, n) {
    e.logger
      ? e.logger.msg
          .apply(e.logger, n)
          .module(`${r}` || '')
          .level(t)
          .log()
      : e.log && e.log.apply(e, n)
  }
  ((t.log = function () {
    n('log', arguments)
  }),
  (t.warn = function () {
    n('warn', arguments)
  }),
  (t.error = function () {
    n('error', arguments)
  }))
}
function createPlugin$i(e, t, r) {
  return (
    wrapPluginInitFn$i(e, t, r),
    (e.plugin_version = sdkversion_placeholder$j),
    e
  )
}
function sendData$7(e) {
  new _$9.BeaconSend(e).start()
}
function sendInterceptor(e, t) {
  let r = null
  let n = null
  if (
    (_$9.isObject(e.config)
      && ((r = e.config.send_type),
      (n = _$9.optimizeServerUrl(e.config.server_url))),
    (r === 'beacon' || (!r && sd$b.para.send_type === 'beacon'))
    && _$9.isSupportBeaconSend())
  ) {
    let i = n || e.server_url;
    ((e.server_url = i),
    (e.data = sd$b.kit.encodeTrackData(e.data)),
    _$9.isArray(i) && i.length
      ? _$9.each(i, (t) => {
          ((e.callback = null), (e.server_url = t), sendData$7(e))
        })
      : typeof i == 'string' && i !== ''
        ? sendData$7(e)
        : sd$b.log(
            '\u5F53\u524D server_url \u4E3A\u7A7A\u6216\u4E0D\u6B63\u786E\uFF0C\u53EA\u5728\u63A7\u5236\u53F0\u6253\u5370\u65E5\u5FD7\uFF0Cnetwork \u4E2D\u4E0D\u4F1A\u53D1\u6570\u636E\uFF0C\u8BF7\u914D\u7F6E\u6B63\u786E\u7684 server_url\uFF01',
          ),
    t.cancellationToken.stop())
  }
  return e
}
function initPara$3() {
  sd$b.para.send_type !== 'beacon'
  || _$9.isSupportBeaconSend()
  || (sd$b.para.send_type = sd$b.DEFAULT_SEND_TYPE)
}
function senderInit$3() {
  (sd$b.on('sdkInitPara', () => {
    initPara$3()
  }),
  sd$b.on('sdkAfterInitPara', () => {
    sd$b.registerInterceptor('sendDataStage', {
      send: { priority: 110, entry: sendInterceptor },
    })
  }))
}
let sd$c
let _$a
let BeaconSender = {
  plugin_name: 'BeaconSender',
  init(e) {
    ((_$9 = (sd$b = e)._), senderInit$3())
  },
}
let index$i = createPlugin$i(BeaconSender)
let sdkversion_placeholder$k = '1.27.11'
function wrapPluginInitFn$j(e, t, r) {
  if ((t && (e.plugin_name = t), r && e.init)) {
    let n = e.init
    e.init = function (i, a) {
      if (
        (wrapLogFn$j(i, e, t),
        (i.readyState && i.readyState.state >= 3) || !i.on)
      ) {
        return s()
      }
      function s() {
        n.call(e, i, a)
      }
      i.on(r, s)
    }
  }
  return e
}
function wrapLogFn$j(e, t, r) {
  function n(t, n) {
    e.logger
      ? e.logger.msg
          .apply(e.logger, n)
          .module(`${r}` || '')
          .level(t)
          .log()
      : e.log && e.log.apply(e, n)
  }
  ((t.log = function () {
    n('log', arguments)
  }),
  (t.warn = function () {
    n('warn', arguments)
  }),
  (t.error = function () {
    n('error', arguments)
  }))
}
function createPlugin$j(e, t, r) {
  return (
    wrapPluginInitFn$j(e, t, r),
    (e.plugin_version = sdkversion_placeholder$k),
    e
  )
}
function sendData$8(e) {
  new _$a.AjaxSend(e).start()
}
function sendInterceptor$1(e, t) {
  let r = null
  let n = null
  if (
    (_$a.isObject(e.config)
      && ((r = e.config.send_type),
      (n = _$a.optimizeServerUrl(e.config.server_url))),
    (r === 'ajax' || (!r && sd$c.para.send_type === 'ajax'))
    && _$a.isSupportCors())
  ) {
    let i = n || e.server_url;
    ((e.server_url = i),
    (e.data = sd$c.kit.encodeTrackData(e.data)),
    _$a.isArray(i) && i.length
      ? _$a.each(i, (t) => {
          ((e.callback = null), (e.server_url = t), sendData$8(e))
        })
      : typeof i == 'string' && i !== ''
        ? sendData$8(e)
        : sd$c.log(
            '\u5F53\u524D server_url \u4E3A\u7A7A\u6216\u4E0D\u6B63\u786E\uFF0C\u53EA\u5728\u63A7\u5236\u53F0\u6253\u5370\u65E5\u5FD7\uFF0Cnetwork \u4E2D\u4E0D\u4F1A\u53D1\u6570\u636E\uFF0C\u8BF7\u914D\u7F6E\u6B63\u786E\u7684 server_url\uFF01',
          ),
    t.cancellationToken.stop())
  }
  return e
}
function initPara$4() {
  sd$c.para.send_type !== 'ajax'
  || _$a.isSupportCors()
  || (sd$c.para.send_type = sd$c.DEFAULT_SEND_TYPE)
}
function senderInit$4() {
  (sd$c.on('sdkInitPara', () => {
    initPara$4()
  }),
  sd$c.on('sdkAfterInitPara', () => {
    sd$c.registerInterceptor('sendDataStage', {
      send: { priority: 120, entry: sendInterceptor$1 },
    })
  }))
}
let sd$d
let _$b
let AjaxSender = {
  plugin_name: 'AjaxSender',
  init(e) {
    ((_$a = (sd$c = e)._), senderInit$4())
  },
}
let index$j = createPlugin$j(AjaxSender)
let sdkversion_placeholder$l = '1.27.11'
function wrapPluginInitFn$k(e, t, r) {
  if ((t && (e.plugin_name = t), r && e.init)) {
    let n = e.init
    e.init = function (i, a) {
      if (
        (wrapLogFn$k(i, e, t),
        (i.readyState && i.readyState.state >= 3) || !i.on)
      ) {
        return s()
      }
      function s() {
        n.call(e, i, a)
      }
      i.on(r, s)
    }
  }
  return e
}
function wrapLogFn$k(e, t, r) {
  function n(t, n) {
    e.logger
      ? e.logger.msg
          .apply(e.logger, n)
          .module(`${r}` || '')
          .level(t)
          .log()
      : e.log && e.log.apply(e, n)
  }
  ((t.log = function () {
    n('log', arguments)
  }),
  (t.warn = function () {
    n('warn', arguments)
  }),
  (t.error = function () {
    n('error', arguments)
  }))
}
function createPlugin$k(e, t, r) {
  return (
    wrapPluginInitFn$k(e, t, r),
    (e.plugin_version = sdkversion_placeholder$l),
    e
  )
}
function getSendUrl(e, t) {
  let r = sd$d.kit.encodeTrackData(t)
  return e.includes('?') ? `${e}&${r}` : `${e}?${r}`
}
function sendData$9(e) {
  new _$b.ImageSend(e).start()
}
function sendInterceptor$2(e, t) {
  let r = null
  _$b.isObject(e.config) && (r = _$b.optimizeServerUrl(e.config.server_url))
  let n = r || e.server_url
  let i = e.data;
  ((e.server_url = n),
  _$b.isArray(n) && n.length
    ? _$b.each(n, (t) => {
        t
        && ((e.data = getSendUrl(t, i)),
        (e.callback = null),
        (e.server_url = t),
        sendData$9(e))
      })
    : typeof n == 'string' && n !== ''
      ? ((e.data = getSendUrl(n, i)), sendData$9(e))
      : sd$d.logger
        && sd$d.logger
          .msg(
            '\u5F53\u524D server_url \u4E3A\u7A7A\u6216\u4E0D\u6B63\u786E\uFF0C\u53EA\u5728\u63A7\u5236\u53F0\u6253\u5370\u65E5\u5FD7\uFF0Cnetwork \u4E2D\u4E0D\u4F1A\u53D1\u6570\u636E\uFF0C\u8BF7\u914D\u7F6E\u6B63\u786E\u7684 server_url\uFF01',
          )
          .level('warn')
          .log(),
  t.cancellationToken.stop())
}
function initPara$5() {
  sd$d.para.send_type !== 'image'
  && sd$d.para.send_type !== 'ajax'
  && sd$d.para.send_type !== 'beacon'
  && (sd$d.para.send_type = 'image')
}
function senderInit$5() {
  (sd$d.on('sdkInitPara', () => {
    initPara$5()
  }),
  sd$d.on('sdkAfterInitPara', () => {
    sd$d.registerInterceptor('sendDataStage', {
      send: { priority: 130, entry: sendInterceptor$2 },
    })
  }))
}
let ImageSender = {
  plugin_name: 'ImageSender',
  init(e) {
    ((_$b = (sd$d = e)._), senderInit$5())
  },
}
let index$k = createPlugin$k(ImageSender)
function wrapPluginInitFn$l(e, t, r) {
  if ((t && (e.plugin_name = t), r && e.init)) {
    let n = e.init
    e.init = function (i, a) {
      if (
        (wrapLogFn$l(i, e, t),
        (i.readyState && i.readyState.state >= 3) || !i.on)
      ) {
        return s()
      }
      function s() {
        n.call(e, i, a)
      }
      i.on(r, s)
    }
  }
  return e
}
function wrapLogFn$l(e, t, r) {
  function n(t, n) {
    e.logger
      ? e.logger.msg
          .apply(e.logger, n)
          .module(`${r}` || '')
          .level(t)
          .log()
      : e.log && e.log.apply(e, n)
  }
  ((t.log = function () {
    n('log', arguments)
  }),
  (t.warn = function () {
    n('warn', arguments)
  }),
  (t.error = function () {
    n('error', arguments)
  }))
}
function createPlugin$l(e, t, r) {
  return (
    wrapPluginInitFn$l(e, t, r),
    (e.plugin_version = sdkversion_placeholder),
    e
  )
}
let _sd$1 = null
let _$c = null
let _cacheLogs = []
let ConsoleLogger = {
  init(e) {
    e
    && ((_$c = (_sd$1 = e)._),
    _sd$1.logger && _sd$1.logger.appendWriter(logWriter),
    _sd$1.on
    && _sd$1.on('sdkAfterInitPara', () => {
      for (let e = 0; e < _cacheLogs.length; e++) printLog(_cacheLogs[e])
      _cacheLogs = null
    }),
    _sd$1.on
    && _sd$1.on('sdkInitAPI', () => {
      ((_sd$1.enableLocalLog = enableLocalLog),
      (_sd$1.disableLocalLog = disableLocalLog))
    }))
  },
}
let consoleLogger = createPlugin$l(ConsoleLogger, 'ConsoleLogger')
function logWriter(e) {
  _cacheLogs !== null ? _cacheLogs.push(e) : printLog(e)
}
function printLog(e) {
  try {
    if (e.level === 'log' && canLog())
      return void writeLog(e)
    if (e.level === 'warn' && canWarn())
      return void writeLog(e)
    if (e.level === 'error' && canError())
      return void writeLog(e)
  }
  catch (t) {}
}
function canLog() {
  return (
    !!isLocalLogEnabled()
    || !0 === _sd$1.para.show_log
    || (_$c.isObject(_sd$1.para.show_log) && _sd$1.para.show_log.level === 'log')
  )
}
function canWarn() {
  return (
    !!isLocalLogEnabled()
    || canLog()
    || (_$c.isObject(_sd$1.para.show_log) && _sd$1.para.show_log.level === 'warn')
  )
}
function canError() {
  return (
    !!isLocalLogEnabled()
    || !_$c.isObject(_sd$1.para.show_log)
    || _sd$1.para.show_log.level !== 'none'
  )
}
function writeLog(e) {
  let t = e.content
  let r = _$c.isObject(t[0]) ? _$c.formatJsonString(t[0]) : t[0]
  let n = getLogHead(e)
  t[0] = n + (n.length > 0 ? ': ' : '') + r
  try {
    console
    && (_$c.isFunction(console[e.level])
      ? console[e.level].apply(console, t)
      : _$c.isObject(console[e.level]) && console[e.level](t[0]))
  }
  catch (i) {}
}
function getLogHead(e) {
  let t = ''
  let r = ''
  let n = _sd$1.para.show_log
  return (
    (_$c.isObject(n) && !1 === n.show_brand) || (t += e.brand),
    (_$c.isObject(n) && !1 === n.show_level)
    || (t += (t.length > 0 ? '-' : '') + e.level),
    t.length > 0 && (t = `[${t}]`),
    (_$c.isObject(n) && !1 === n.show_module) || (r = e.module),
    t + r
  )
}
let debugTag = 'sensorsdata_jssdk_debug'
function enableLocalLog() {
  _$c.sessionStorage.isSupport() && sessionStorage.setItem(debugTag, 'true')
}
function disableLocalLog() {
  _$c.sessionStorage.isSupport() && sessionStorage.removeItem(debugTag)
}
function isLocalLogEnabled() {
  return (
    _$c.sessionStorage.isSupport()
    && sessionStorage.getItem(debugTag) === 'true'
  )
}
sd.modules = sd.modules || {}
for (
  var builtinPlugins = [
      consoleLogger,
      index$1,
      index$2,
      index$3,
      index$4,
      index$5,
      index$6,
      index$7,
      index$8,
      index$9,
      index$a,
      index$b,
      index$c,
      index$d,
      index$e,
      index$f,
      index$g,
      index$h,
      index$i,
      index$j,
      index$k,
    ],
    autoUsePlugins = [
      consoleLogger,
      index,
      index$d,
      index$e,
      index$g,
      index$f,
      index$2,
      index$6,
      index$3,
      index$7,
      index$h,
      index$i,
      index$j,
      index$k,
    ],
    i = 0;
  i < builtinPlugins.length;
  i++
) {
  var p = builtinPlugins[i]
  sd._.isString(p.plugin_name)
    ? (sd.modules[p.plugin_name] = p)
    : sd._.isArray(p.plugin_name)
      && sd._.each(p.plugin_name, (e) => {
        sd.modules[e] = p
      })
}
for (i = 0; i < autoUsePlugins.length; i++) sd.use(autoUsePlugins[i])
let _sd$2 = sd
try {
  typeof window.sensorsDataAnalytic201505 == 'string'
    ? ((sd.para = window[sensorsDataAnalytic201505].para),
      (sd._q = window[sensorsDataAnalytic201505]._q),
      (window[sensorsDataAnalytic201505] = sd),
      (window.sensorsDataAnalytic201505 = sd),
      sd.init())
    : typeof window.sensorsDataAnalytic201505 == 'undefined'
      ? (window.sensorsDataAnalytic201505 = sd)
      : (_sd$2 = window.sensorsDataAnalytic201505)
}
catch (err) {
  sdError(err)
}
let sd$e = _sd$2
sd$e.DEFAULT_SEND_TYPE = 'image'
export default sd$e
