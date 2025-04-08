const generateRandomCallbackName = () => {
  const timestamp = Date.now().toString(16); // 获取当前时间戳并转换为16进制
  const randomSegment = "xxxxxx".replace(/[x]/g, function () {
    return ((Math.random() * 16) | 0).toString(16); // 生成随机的16进制数
  });
  return "callback_" + randomSegment + timestamp;
};
const registerCallback = (name: string, func: (res: any) => void) => {
  if (!window.JSBridge) {
    window.JSBridge = {
      Callback: {},
    };
  }
  window.JSBridge.Callback[name] = (args: string) => {
    try {
      const res = JSON.parse(args);
      return func(res);
    } catch (e) {
      throw new Error(`JSON.parse(${args}) failed`);
    }
  };
};

const unregisterCallback = (name: string) => {
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

// 兼容老版本
export const useCallNative = (
  payloads: NativePayloads,
): Promise<NativeResponse> => {
  return new Promise((resolve, reject) => {
    if (!window.NativeBridge) {
      reject(new Error("Please make sure NativeBridge exist!!!"));
    }
    if (payloads.params.callback) {
      const callbackName =
        typeof payloads.params.callback === "string"
          ? payloads.params.callback
          : generateRandomCallbackName();
      // 重命名callback
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
            `window.NativeBridge.callNative(${JSON.stringify(payloads)}) failed`,
          ),
        );
      }
    } else {
      try {
        window.NativeBridge.callNative(JSON.stringify(payloads));
        resolve({ errcode: 0, data: null });
      } catch (e) {
        reject(
          new Error(
            `window.NativeBridge.callNative(${JSON.stringify(payloads)}) failed`,
          ),
        );
      }
    }
  });
};

export const callNative = (payloads: {
  action: string;
  params: {
    [key: string]: any;
  };
  callback?: boolean | string;
}) => {
  return useCallNative({
    action: payloads.action,
    params: {
      ...payloads.params,
      callback: payloads.callback || true,
    },
  });
};
