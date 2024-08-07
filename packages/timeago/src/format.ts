import { getFormatType } from "./register";
import { FormatTypeBreak } from "./type";
import {
  formatDateTime,
  isThisYear,
  isToday,
  isRealToday,
  isYesterday,
  toDate,
} from "./utils";

const handlers = {
  IN_5_MIN: (diffSeconds: number, date: Date) => {
    if (diffSeconds < 5 * 60) {
      return true;
    }
    return false;
  },
  IN_1_HOUR: (diffSeconds: number, date: Date) => {
    if (diffSeconds < 1 * 60 * 60) {
      return true;
    }
    return false;
  },
  IN_REAL_TODAY: (diffSeconds: number, date: Date) => {
    return isRealToday(date);
  },
  IN_TODAY: (diffSeconds: number, date: Date) => {
    return isToday(date);
  },
  IN_1_DAY: (diffSeconds: number, date: Date) => {
    if (diffSeconds < 12 * 60 * 60) {
      return true;
    }
    return false;
  },
  IN_YESTERDAY: (diffSeconds: number, date: Date) => {
    return isYesterday(date);
  },
  IN_4_DAYS: (diffSeconds: number, date: Date) => {
    if (diffSeconds < 4 * 12 * 60 * 60) {
      return true;
    }
    return false;
  },
  IN_1_YEAR: (diffSeconds: number, date: Date) => {
    return isThisYear(date);
  },
  IN_YEARS: (diffSeconds: number, date: Date) => {
    return !isThisYear(date);
  },
};

export const format = (
  time: string | number | Date,
  type = "DEFAULT",
  locale = "zh-CN"
) => {
  let date = toDate(time);
  let diffSeconds = (new Date().getTime() - date.getTime()) / 1000;
  let breaks: FormatTypeBreak[] = getFormatType(type);
  for (let i = 0; i < breaks.length; i++) {
    if (
      handlers[breaks[i].label] &&
      handlers[breaks[i].label](diffSeconds, date)
    ) {
      return breaks[i].parse(diffSeconds, date, locale);
    }
  }
  return formatDateTime(date);
};
