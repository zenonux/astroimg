"use strict";
(() => {
  // src/index.ts
  var registerCallBack = (name, func) => {
    if (!window.JSBridge) {
      window.JSBridge = {
        Callback: {}
      };
    }
    window.JSBridge.Callback[name] = (args) => {
      const res = JSON.parse(args);
      return func(res);
    };
  };
  var useCallNative = (payloads) => {
    return new Promise((resolve, reject) => {
      if (!window.NativeBridge) {
        console.warn("Please make sure NativeBridge exist!!!");
        reject();
      }
      if (payloads.params.callback) {
        registerCallBack(payloads.params.callback, (res) => {
          resolve(res);
        });
        window.NativeBridge.callNative(JSON.stringify(payloads));
      } else {
        window.NativeBridge.callNative(JSON.stringify(payloads));
        resolve({ errcode: 0, data: null });
      }
    });
  };
})();
