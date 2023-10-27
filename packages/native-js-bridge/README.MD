# native-js-bridge

native js bridge

## Install

```
npm install @urlcoud/native-js-bridge -S
```

## Usage

```ts
import { useCallNative } from "@urcloud/native-js-bridge";
let { data, errcode, errmsg } = await useCallNative({
  action: "",
  params: {
    callback: "getUserInfoCallback",
  },
});
```
