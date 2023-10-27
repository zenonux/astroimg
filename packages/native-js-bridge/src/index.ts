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

interface NativePayloads {
  action: string;
  params: {
    [key: string]: any;
    // web向window注册的全局方法，用于客户端回调。注意：客户端只关心有没有callback参数， 不关心callback的具体值。
    callback?: string;
  };
}

interface NativeResponse {
  errcode: number;
  errmsg?: string;
  data: any;
}

export const useCallNative = (
  payloads: NativePayloads
): Promise<NativeResponse> => {
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
