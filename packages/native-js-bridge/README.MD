# NativeJsBridge

native js bridge

## Install

```
npm install @astroimg/native-js-bridge -S
```

## Usage

```ts
import { callNative } from "@astroimg/native-js-bridge";
let { data, errcode, errmsg } = await callNative({
  action: "",
  params: {
    callback: true,
  },
});
```
