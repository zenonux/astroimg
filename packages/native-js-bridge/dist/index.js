// src/index.ts
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
        throw new Error(`window.NativeBridge.callNative(${payloads}) failed`);
      }
    } else {
      window.NativeBridge.callNative(JSON.stringify(payloads));
      resolve({ errcode: 0, data: null });
    }
  });
};
export {
  useCallNative
};
