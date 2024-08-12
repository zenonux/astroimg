/// <reference path="./dist/index.d.ts" />

declare global {
  // 客户端向webview注入window.NativeBridge对象
  declare module NativeBridge {
    // 考虑到安卓传参只能以字符串形式，约定payloads,response均为json字符串
    export function callNative(nativePayloads: string): void;
  }

  // web向window注册JSBridge对象
  declare module JSBridge {
    export const Callback: {
      // 考虑到安卓传参只能以字符串形式，约定payloads,response均为json字符串
      [key: string]: (nativeResponse: string) => void;
    };
  }
}

export {};
