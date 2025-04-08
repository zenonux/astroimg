# NativeJsBridge

native js bridge

## Install

```
npm install @astroimg/native-js-bridge -S
```

## Usage

```ts
import { useCallNative } from "@astroimg/native-js-bridge";
let { data, errcode, errmsg } = await useCallNative({
  action: "",
  params: {
    callback: true,
  },
});
```
