import {
  formatDate,
  formatDateShort,
  formatTime,
  formatDaysAgo,
} from "../utils";

export default [
  {
    label: "IN_1_HOUR",
    parse: (diffSeconds: number, date: Date, locale: string) => {
      const locales = {
        "zh-CN": "%s分钟前",
        en: "%sm ago",
      };
      let value = Math.floor(diffSeconds / 60);
      value = value > 0 ? value : 1;
      return locales[locale].replace(/%s/gi, value);
    },
  },
  {
    label: "IN_TODAY",
    parse: (diffSeconds: number, date: Date, locale: string) => {
      const locales = {
        "zh-CN": "%s小时前",
        en: "%sh ago",
      };
      let value = Math.floor(diffSeconds / 3600);
      return locales[locale].replace(/%s/gi, value);
    },
  },
  {
    label: "IN_YESTERDAY",
    parse: (diffSeconds: number, date: Date, locale: string) => {
      const locales = {
        "zh-CN": "昨天 %s",
        en: "yday %s",
      };
      return locales[locale].replace(/%s/gi, formatTime(date));
    },
  },
  {
    label: "IN_4_DAYS",
    parse: (diffSeconds: number, date: Date, locale: string) => {
      const locales = {
        "zh-CN": "%s天前",
        en: "%sd",
      };
      return locales[locale].replace(/%s/gi, formatDaysAgo(date));
    },
  },
  {
    label: "IN_1_YEAR",
    parse: (diffSeconds: number, date: Date, locale: string) => {
      return formatDateShort(date);
    },
  },
  {
    label: "IN_YEARS",
    parse: (diffSeconds: number, date: Date, locale: string) => {
      return formatDate(date);
    },
  },
];
