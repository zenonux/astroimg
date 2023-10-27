# timeago

timeago like douban & zhihu for social community.

## Install

`npm i @astroimg/timeago -S`

## Usage

```js
import timeago from "@astroimg/timeago";
timeago.register("customType", [
  {
    label: "IN_5_MIN",
    parse: (diffSeconds: number, date: Date, locale: string) => {
      const locales = {
        "zh-CN": "刚刚",
        en: "now",
      };
      return locales[locale];
    },
  },
  {
    label: "IN_1_HOUR",
    parse: (diffSeconds: number, date: Date, locale: string) => {
      const locales = {
        'zh-CN': "%s分钟前",
        en: "%sm ago",
      };
      let value = Math.floor(diffSeconds / 60);
      return locales[locale].replace(/%s/gi, value);
    },
  },
]);
timeago.format(new Date());
timeago.format(1544666010224);
timeago.format("2018-12-12", "customType");
```
