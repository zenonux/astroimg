import { openBlock as i, createElementBlock as f, defineComponent as y, createBlock as d, unref as p, withCtx as u, createElementVNode as b } from "vue";
import x from "cos-js-sdk-v5";
import { ElUpload as S, ElIcon as T, ElMessage as _ } from "element-plus";
const v = (r, c) => {
  const e = r.__vccOpts || r;
  for (const [l, s] of c)
    e[l] = s;
  return e;
}, C = {};
function B(r, c) {
  return i(), f("button");
}
const A = /* @__PURE__ */ v(C, [["render", B]]), E = ["src"], V = /* @__PURE__ */ b("div", { class: "el-upload__tip" }, " 支持 jpg/jpeg/png 格式，大小不超过500kb，建议使用tinypng压缩后上传 ", -1), F = /* @__PURE__ */ y({
  __name: "index",
  props: {
    modelValue: {},
    config: {}
  },
  emits: ["update:modelValue"],
  setup(r, { emit: c }) {
    const e = r, l = (t) => e.config.domain + "/" + t, s = () => new x({
      getAuthorization(t, n) {
        e.config.getTempSecret({
          region: e.config.region,
          bucket: e.config.bucket,
          resource: e.config.resource
        }).then((o) => {
          n({
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
    }), m = () => {
      const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (var n = "", o = 0; o < 10; o++) {
        var a = Math.floor(Math.random() * t.length);
        n += t.substring(a, a + 1);
      }
      return (/* @__PURE__ */ new Date()).getTime() + "-" + n;
    }, g = (t) => {
      var o;
      const n = (o = t.split(".").pop()) == null ? void 0 : o.toLowerCase();
      return e.config.resource + "/" + m() + "." + n;
    }, h = (t) => t.size / 1024 > 500 ? (_.error("图片不能超过500kb"), !1) : !0, k = (t) => s().uploadFile({
      Bucket: e.config.bucket,
      Region: e.config.region,
      Key: g(t.file.name),
      Body: t.file,
      onFileFinish: function(n, o, a) {
        n ? _.error("上传失败") : c("update:modelValue", a.Key);
      }
    });
    return (t, n) => (i(), d(p(S), {
      class: "a-uploader",
      "show-file-list": !1,
      "http-request": k,
      "before-upload": h,
      accept: ".jpg,.jpeg,.png"
    }, {
      tip: u(() => [
        V
      ]),
      default: u(() => [
        e.modelValue ? (i(), f("img", {
          key: 0,
          src: l(e.modelValue),
          class: "a-uploader__cover"
        }, null, 8, E)) : (i(), d(p(T), {
          key: 1,
          class: "a-uploader__icon"
        }))
      ]),
      _: 1
    }));
  }
});
export {
  A as ADebounceAsyncButton,
  F as AUploader
};
