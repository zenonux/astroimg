// src/index.ts
function kebabCase(key) {
  const result = key.replace(/([A-Z])/g, " $1").trim();
  return result.split(" ").join("-").toLowerCase();
}
function getModuleType(options) {
  const { ssr, module = "esm" } = options;
  if (ssr !== void 0) {
    return ssr ? "lib" : "es";
  }
  return module === "cjs" ? "lib" : "es";
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
export {
  AstroimgResolver
};
