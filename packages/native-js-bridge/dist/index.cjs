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
  useCallNative: () => useCallNative
});
module.exports = __toCommonJS(src_exports);
var generateRandomCallbackName = () => {
  const timestamp = Date.now().toString(16);
  const randomSegment = "xxxxxx".replace(/[x]/g, function() {
    return (Math.random() * 16 | 0).toString(16);
  });
  return "callback_" + randomSegment + timestamp;
};
var registerCallBack = (name, func) => {
  if (!window.JSBridge) {
    window.JSBridge = {
      Callback: {}
    };
  }
  window.JSBridge.Callback[name] = (args) => {
    try {
      const res = JSON.parse(args);
      return func(res);
    } catch (e) {
      throw new Error(`JSON.parse(${args}) failed`);
    }
  };
};
var unregisterCallBack = (name) => {
  if (!window.JSBridge) {
    window.JSBridge = {
      Callback: {}
    };
  }
  delete window.JSBridge.Callback[name];
};
var useCallNative = (payloads) => {
  return new Promise((resolve, reject) => {
    if (!window.NativeBridge) {
      console.warn("Please make sure NativeBridge exist!!!");
      reject();
    }
    if (payloads.params.callback) {
      const callbackName = typeof payloads.params.callback === "string" ? payloads.params.callback : generateRandomCallbackName();
      payloads.params.callback = callbackName;
      registerCallBack(callbackName, (res) => {
        resolve(res);
        unregisterCallBack(callbackName);
      });
      try {
        window.NativeBridge.callNative(JSON.stringify(payloads));
      } catch (e) {
        throw new Error(
          `window.NativeBridge.callNative(${JSON.stringify(payloads)}) failed`
        );
      }
    } else {
      try {
        window.NativeBridge.callNative(JSON.stringify(payloads));
        resolve({ errcode: 0, data: null });
      } catch (e) {
        throw new Error(
          `window.NativeBridge.callNative(${JSON.stringify(payloads)}) failed`
        );
      }
    }
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useCallNative
});
