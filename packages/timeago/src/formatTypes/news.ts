import { formatDateShortTime, formatDateTime, formatTime } from "../utils";

export default [
  {
    label: "IN_TODAY",
    parse: (diffSeconds: number, date: Date, locale: string) => {
      const locales = {
        "zh-CN": "今天",
        en: "Today",
      };
      return locales[locale];
    },
  },
  {
    label: "IN_YESTERDAY",
    parse: (diffSeconds: number, date: Date, locale: string) => {
      const locales = {
        "zh-CN": "昨天",
        en: "yday",
      };
      return locales[locale];
    },
  },
  {
    label: "IN_1_YEAR",
    parse: (diffSeconds: number, date: Date, locale: string) => {
      return formatDateShortTime(date);
    },
  },
  {
    label: "IN_YEARS",
    parse: (diffSeconds: number, date: Date, locale: string) => {
      return formatDateTime(date);
    },
  },
];
