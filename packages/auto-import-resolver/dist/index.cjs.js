"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  AstroimgResolver: () => AstroimgResolver
});
module.exports = __toCommonJS(src_exports);
function kebabCase(key) {
  const result = key.replace(/([A-Z])/g, " $1").trim();
  return result.split(" ").join("-").toLowerCase();
}
function getModuleType(options) {
  const { ssr, module: module2 = "esm" } = options;
  if (ssr !== void 0) {
    return ssr ? "lib" : "es";
  }
  return module2 === "cjs" ? "lib" : "es";
}
function getSideEffects(dirName, options) {
  const { importStyle = true } = options;
  if (!importStyle) {
    return;
  }
  const moduleType = getModuleType(options);
  if (importStyle === "less")
    return `@astroimg/vue/${moduleType}/${dirName}/style/less`;
  return `@astroimg/vue/${moduleType}/${dirName}/style/index`;
}
function AstroimgResolver(options = {}) {
  const moduleType = getModuleType(options);
  return {
    type: "component",
    resolve: (name) => {
      if (name.startsWith("Ai")) {
        const partialName = name.slice(2);
        return {
          name: partialName,
          from: `@astroimg/vue/${moduleType}`,
          sideEffects: getSideEffects(kebabCase(partialName), options)
        };
      }
    }
  };
}
