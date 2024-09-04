const generateRandomCallbackName = () => {
  const timestamp = Date.now().toString(16); // 获取当前时间戳并转换为16进制
  const randomSegment = "xxxxxx".replace(/[x]/g, function () {
    return ((Math.random() * 16) | 0).toString(16); // 生成随机的16进制数
  });
  return "callback_" + randomSegment + timestamp;
};
const registerCallBack = (name: string, func: (res: any) => void) => {
  if (!window.JSBridge) {
    window.JSBridge = {
      Callback: {},
    };
  }
  window.JSBridge.Callback[name] = (args: string) => {
    const res = JSON.parse(args);
    return func(res);
  };
};

const unregisterCallBack = (name: string) => {
  if (!window.JSBridge) {
    window.JSBridge = {
      Callback: {},
    };
  }
  delete window.JSBridge.Callback[name];
};

export interface NativePayloads {
  action: string;
  params: {
    [key: string]: any;
    // web向window注册的全局方法，用于客户端回调。注意：客户端只关心有没有callback参数， 不关心callback的具体值。
    callback?: string | boolean;
  };
}

export interface NativeResponse {
  errcode: number;
  errmsg?: string;
  data: any;
}

export const useCallNative = (
  payloads: NativePayloads,
): Promise<NativeResponse> => {
  return new Promise((resolve, reject) => {
    if (!window.NativeBridge) {
      console.warn("Please make sure NativeBridge exist!!!");
      reject();
    }
    if (payloads.params.callback) {
      const callbackName =
        typeof payloads.params.callback === "string"
          ? payloads.params.callback
          : generateRandomCallbackName();
      // 重命名callback
      payloads.params.callback = callbackName;
      registerCallBack(callbackName, (res) => {
        resolve(res);
        unregisterCallBack(callbackName);
      });
      window.NativeBridge.callNative(JSON.stringify(payloads));
    } else {
      window.NativeBridge.callNative(JSON.stringify(payloads));
      resolve({ errcode: 0, data: null });
    }
  });
};
