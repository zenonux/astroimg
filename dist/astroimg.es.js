import { openBlock as i, createElementBlock as f, defineComponent as y, createBlock as d, unref as p, withCtx as u, pushScopeId as S, popScopeId as x, createElementVNode as v } from "vue";
import T from "cos-js-sdk-v5";
import { ElUpload as C, ElIcon as I, ElMessage as _ } from "element-plus";
const m = (n, c) => {
  const e = n.__vccOpts || n;
  for (const [s, l] of c)
    e[s] = l;
  return e;
}, w = {};
function B(n, c) {
  return i(), f("button");
}
const M = /* @__PURE__ */ m(w, [["render", B]]), E = (n) => (S("data-v-fd2bb0f3"), n = n(), x(), n), V = ["src"], U = /* @__PURE__ */ E(() => /* @__PURE__ */ v("div", { class: "el-upload__tip" }, " 支持 jpg/jpeg/png 格式，大小不超过500kb，建议使用tinypng压缩后上传 ", -1)), j = /* @__PURE__ */ y({
  __name: "index",
  props: {
    modelValue: {},
    config: {}
  },
  emits: ["update:modelValue"],
  setup(n, { emit: c }) {
    const e = n, s = (t) => e.config.domain + "/" + t, l = () => new T({
      getAuthorization(t, r) {
        e.config.getTempSecret({
          region: e.config.region,
          bucket: e.config.bucket,
          resource: e.config.resource
        }).then((o) => {
          r({
            TmpSecretId: o.data.credentials.tmpSecretId,
            TmpSecretKey: o.data.credentials.tmpSecretKey,
            SecurityToken: o.data.credentials.token,
            StartTime: o.data.startTime,
            // 时间戳，单位秒，如：1580000000
            ExpiredTime: o.data.expiredTime
            // 时间戳，单位秒，如：1580000000
          });
        });
      }
    }), g = () => {
      const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (var r = "", o = 0; o < 10; o++) {
        var a = Math.floor(Math.random() * t.length);
        r += t.substring(a, a + 1);
      }
      return (/* @__PURE__ */ new Date()).getTime() + "-" + r;
    }, b = (t) => {
      var o;
      const r = (o = t.split(".").pop()) == null ? void 0 : o.toLowerCase();
      return e.config.resource + "/" + g() + "." + r;
    }, h = (t) => t.size / 1024 > 500 ? (_.error("图片不能超过500kb"), !1) : !0, k = (t) => l().uploadFile({
      Bucket: e.config.bucket,
      Region: e.config.region,
      Key: b(t.file.name),
      Body: t.file,
      onFileFinish: function(r, o, a) {
        r ? _.error("上传失败") : c("update:modelValue", a.Key);
      }
    });
    return (t, r) => (i(), d(p(C), {
      class: "a-uploader",
      "show-file-list": !1,
      "http-request": k,
      "before-upload": h,
      accept: ".jpg,.jpeg,.png"
    }, {
      tip: u(() => [
        U
      ]),
      default: u(() => [
        e.modelValue ? (i(), f("img", {
          key: 0,
          src: s(e.modelValue),
          class: "a-uploader__cover"
        }, null, 8, V)) : (i(), d(p(I), {
          key: 1,
          class: "a-uploader__icon"
        }))
      ]),
      _: 1
    }));
  }
});
const D = /* @__PURE__ */ m(j, [["__scopeId", "data-v-fd2bb0f3"]]);
export {
  M as ADebounceAsyncButton,
  D as AUploader
};
