import { openBlock as r, createElementBlock as s } from "vue";
const a = (t, n) => {
  const c = t.__vccOpts || t;
  for (const [_, l] of n)
    c[_] = l;
  return c;
}, i = {};
function f(t, n) {
  return r(), s("button");
}
const u = /* @__PURE__ */ a(i, [["render", f]]), o = {
  install(t) {
    t.component("a-debounce-async-button", u);
  }
}, d = {};
function m(t, n) {
  return r(), s("div");
}
const p = /* @__PURE__ */ a(d, [["render", m]]), e = {
  install(t) {
    t.component("a-uploader", p);
  }
}, b = {
  install(t) {
    var n, c;
    (n = o.install) == null || n.call(o, t), (c = e.install) == null || c.call(e, t);
  }
};
export {
  u as ADebounceAsyncButton,
  o as ADebounceAsyncButtonPlugin,
  p as AUploader,
  e as AUploaderPlugin,
  b as default
};
