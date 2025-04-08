var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/index.ts
var generateRandomCallbackName = () => {
  const timestamp = Date.now().toString(16);
  const randomSegment = "xxxxxx".replace(/[x]/g, function() {
    return (Math.random() * 16 | 0).toString(16);
  });
  return "callback_" + randomSegment + timestamp;
};
var registerCallback = (name, func) => {
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
var unregisterCallback = (name) => {
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
      reject(new Error("Please make sure NativeBridge exist!!!"));
    }
    if (payloads.params.callback) {
      const callbackName = typeof payloads.params.callback === "string" ? payloads.params.callback : generateRandomCallbackName();
      payloads.params.callback = callbackName;
      registerCallback(callbackName, (res) => {
        resolve(res);
        unregisterCallback(callbackName);
      });
      try {
        window.NativeBridge.callNative(JSON.stringify(payloads));
      } catch (e) {
        reject(
          new Error(
            `window.NativeBridge.callNative(${JSON.stringify(payloads)}) failed`
          )
        );
      }
    } else {
      try {
        let data = window.NativeBridge.callNative(JSON.stringify(payloads));
        resolve({ errcode: 0, data });
      } catch (e) {
        reject(
          new Error(
            `window.NativeBridge.callNative(${JSON.stringify(payloads)}) failed`
          )
        );
      }
    }
  });
};
var callNative = (payloads) => {
  return useCallNative({
    action: payloads.action,
    params: __spreadProps(__spreadValues({}, payloads.params), {
      callback: payloads.callback
    })
  });
};
export {
  callNative,
  useCallNative
};
