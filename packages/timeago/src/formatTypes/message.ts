import { formatDate, formatDateShort, formatTime } from "../utils"

export default   [
  {
    label: 'IN_5_MIN',
    parse: (diffSeconds: number, date: Date, locale: string) => {
      const locales = {
        'zh-CN': '刚刚',
        en: 'now',
      }
      return locales[locale]
    },
  },
  {
    label: 'IN_TODAY',
    parse: (diffSeconds: number, date: Date, locale: string) => {
      return formatTime(date)
    },
  },
  {
    label: 'IN_YESTERDAY',
    parse: (diffSeconds: number, date: Date, locale: string) => {
      const locales = {
        'zh-CN': '昨天',
        en: 'yday',
      }
      return locales[locale]
    },
  },
  {
    label: 'IN_1_YEAR',
    parse: (diffSeconds: number, date: Date, locale: string) => {
      return formatDateShort(date)
    },
  },
  {
    label: 'IN_YEARS',
    parse: (diffSeconds: number, date: Date, locale: string) => {
      return formatDate(date)
    },
  },
]
