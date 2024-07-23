import { formatDateShortTime, formatDateTime, formatTime } from "../utils";

export default [
  {
    label: "IN_TODAY",
    parse: (diffSeconds: number, date: Date, locale: string) => {
      return formatTime(date);
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
