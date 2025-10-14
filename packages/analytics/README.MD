# @astroimg/analytic

wrapper for sensors sdk.

- 修改内置pageleave插件,改事件名
- 增加pageview事件

## Install

```bash
pnpm add @astroimg/analytic
```

## Usage

- 初始化

```js
import { initAnalytics } from "@astroimg/analytic";
const analytics = initAnalytics({
  project: "test",
  pageLeave: {
    isCollectUrl() {
      return false;
    },
    urlPropertyMap() {
      return {
        page_id: "",
        page_type: "",
      };
    },
  },
  sensorsConfig: {
    server_url: "",
    use_client_time: true,
    send_type: "beacon",
    show_log: true,
    heatmap: {
      clickmap: "not_collect",
      scroll_notice_map: "not_collect",
    },
  },
});
```

- 埋点

```js
import { getAnalytics } from "@astroimg/analytic";
getAnalytics().track();
```
