import { defineComponent as F, ref as f, onMounted as T, watch as _, createElementBlock as G, openBlock as N } from "vue";
const Q = 0.552284749831, L = /* @__PURE__ */ F({
  __name: "MoonPhaseCanvas",
  props: {
    size: { default: 200 },
    illumination: {},
    textureUrl: {},
    moonOrient: {},
    isUpMoon: { type: Boolean }
  },
  setup(e) {
    const n = e, c = window.devicePixelRatio || 1, g = f(null), o = f(null), l = f(Array.from({ length: 8 }).fill(0)), r = f(Array.from({ length: 16 }).fill(0)), v = f(Array.from({ length: 8 }).fill(0)), a = f(Array.from({ length: 16 }).fill(0)), x = f({ x: n.size / 2, y: n.size / 2 }), d = f(n.size / 2), w = f(null);
    function z(u) {
      if (o.value) {
        o.value.save();
        try {
          u();
        } finally {
          o.value.restore();
        }
      }
    }
    function U() {
      const u = d.value;
      l.value = [0, u, u, 0, 0, -u, -u, 0];
      const t = u * Q;
      r.value = [
        l.value[0] + t,
        l.value[1],
        l.value[2],
        l.value[3] + t,
        l.value[2],
        l.value[3] - t,
        l.value[4] + t,
        l.value[5],
        l.value[4] - t,
        l.value[5],
        l.value[6],
        l.value[7] - t,
        l.value[6],
        l.value[7] + t,
        l.value[0] - t,
        l.value[1]
      ];
    }
    function m(u) {
      v.value[0] = l.value[0], v.value[1] = l.value[1], v.value[2] = l.value[6] + (l.value[2] - l.value[6]) * u, v.value[3] = l.value[3], v.value[4] = l.value[4], v.value[5] = l.value[5], v.value[6] = l.value[6], v.value[7] = l.value[7], a.value[0] = r.value[14] + (r.value[0] - r.value[14]) * u, a.value[1] = r.value[1], a.value[2] = r.value[12] + (r.value[2] - r.value[12]) * u, a.value[3] = r.value[3], a.value[4] = r.value[10] + (r.value[4] - r.value[10]) * u, a.value[5] = r.value[5], a.value[6] = r.value[8] + (r.value[6] - r.value[8]) * u, a.value[7] = r.value[7];
      for (let t = 8; t < 16; t++)
        a.value[t] = r.value[t];
    }
    function p(u, t, s) {
      if (!o.value) return;
      const i = o.value;
      z(() => {
        U(), m(u), i.translate(x.value.x, x.value.y);
        const C = t + (s ? 180 : 0);
        i.rotate(C * Math.PI / 180), i.filter = `blur(${n.size / 100 * c}px)`;
        const h = new Path2D();
        h.moveTo(v.value[0], v.value[1]), h.bezierCurveTo(
          a.value[0],
          a.value[1],
          a.value[2],
          a.value[3],
          v.value[2],
          v.value[3]
        ), h.bezierCurveTo(
          a.value[4],
          a.value[5],
          a.value[6],
          a.value[7],
          v.value[4],
          v.value[5]
        ), h.bezierCurveTo(
          a.value[8],
          a.value[9],
          a.value[10],
          a.value[11],
          v.value[6],
          v.value[7]
        ), h.bezierCurveTo(
          a.value[12],
          a.value[13],
          a.value[14],
          a.value[15],
          v.value[0],
          v.value[1]
        );
        const M = i.createLinearGradient(
          -d.value,
          0,
          d.value,
          0
        );
        M.addColorStop(0, "rgba(0,0,0,1)"), M.addColorStop(1, "rgba(0,0,0,0.6)"), i.fillStyle = M, i.fill(h);
      });
    }
    function b(u, t, s) {
      if (!o.value) return;
      const i = o.value, C = n.size;
      i.clearRect(0, 0, C, C), w.value && i.drawImage(w.value, 0, 0, C, C), p(u, t, s);
    }
    function W(u) {
      return new Promise((t, s) => {
        const i = new Image();
        i.crossOrigin = "anonymous", i.onload = () => t(i), i.onerror = s, i.src = u;
      });
    }
    return T(async () => {
      var s;
      if (!g.value) return;
      o.value = g.value.getContext("2d");
      const u = g.value;
      u.width = n.size * c, u.height = n.size * c, u.style.width = n.size + "px", u.style.height = n.size + "px", (s = o.value) == null || s.scale(c, c), w.value = await W(n.textureUrl);
      const t = 1 - n.illumination;
      b(t, n.moonOrient, n.isUpMoon);
    }), _(
      () => [n.illumination, n.moonOrient, n.isUpMoon],
      ([u, t, s]) => {
        const i = 1 - u;
        b(i, t, s);
      }
    ), (u, t) => (N(), G("canvas", {
      ref_key: "canvasRef",
      ref: g
    }, null, 512));
  }
});
function A(e = /* @__PURE__ */ new Date()) {
  let n = e.getUTCFullYear(), c = e.getUTCMonth() + 1;
  const g = e.getUTCDate(), o = e.getUTCHours(), l = e.getUTCMinutes(), r = e.getUTCSeconds() + e.getUTCMilliseconds() / 1e3, v = (o + l / 60 + r / 3600) / 24;
  c <= 2 && (n -= 1, c += 12);
  const a = Math.floor(n / 100), x = 2 - a + Math.floor(a / 4);
  return Math.floor(365.25 * (n + 4716)) + Math.floor(30.6001 * (c + 1)) + g + v + x - 1524.5;
}
function O() {
  const e = (A() - 245155009765e-5) / 29.530588853;
  return (e - Math.floor(e)) * 29.530588853 + 0.28;
}
function R(e) {
  return e > 15;
}
var S = /* @__PURE__ */ ((e) => (e.NewMoon = "NewMoon", e.WaxingCrescent = "WaxingCrescent", e.FirstQuarter = "FirstQuarter", e.WaxingGibbous = "WaxingGibbous", e.FullMoon = "FullMoon", e.WaningGibbous = "WaningGibbous", e.LastQuarter = "LastQuarter", e.WaningCrescent = "WaningCrescent", e))(S || {});
function k(e) {
  if (e < 1 || e > 29)
    return "NewMoon";
  if (e > 1 && e < 7)
    return "WaxingCrescent";
  if (e >= 7 && e <= 8)
    return "FirstQuarter";
  if (e > 8 && e < 14)
    return "WaxingGibbous";
  if (e >= 14 && e <= 16)
    return "FullMoon";
  if (e > 16 && e < 21)
    return "WaningGibbous";
  if (e >= 21 && e < 23)
    return "LastQuarter";
  if (e >= 23 && e <= 29)
    return "WaningCrescent";
}
export {
  L as MoonPhaseCanvas,
  S as MoonPhaseType,
  O as getMoonDay,
  k as getMoonPhaseType,
  R as isUpMoon
};
