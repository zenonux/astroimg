// src/index.ts
var generateRandomCallbackName = () => {
  const timestamp = Date.now().toString(16);
  const randomSegment = "xxxxxx".replace(/[x]/g, function() {
    return (Math.random() * 16 | 0).toString(16);
  });
  return timestamp + "-" + randomSegment;
};
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
      registerCallBack(callbackName, (res) => {
        unregisterCallBack(callbackName);
        resolve(res);
      });
      window.NativeBridge.callNative(JSON.stringify(payloads));
    } else {
      window.NativeBridge.callNative(JSON.stringify(payloads));
      resolve({ errcode: 0, data: null });
    }
  });
};
export {
  useCallNative
};
