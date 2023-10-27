import { formatDate, formatDateShort, formatTime } from "../utils"

export default [
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
    label: 'IN_1_HOUR',
    parse: (diffSeconds: number, date: Date, locale: string) => {
      const locales = {
        'zh-CN': '%s分钟前',
        en: '%sm ago',
      }
      let value = Math.floor(diffSeconds / 60)
      return locales[locale].replace(/%s/gi, value)
    },
  },
  {
    label: 'IN_TODAY',
    parse: (diffSeconds: number, date: Date, locale: string) => {
      const locales = {
        'zh-CN': '%s小时前',
        en: '%sh ago',
      }
      let value = Math.floor(diffSeconds / 3600)
      return locales[locale].replace(/%s/gi, value)
    },
  },
  {
    label: 'IN_YESTERDAY',
    parse: (diffSeconds: number, date: Date, locale: string) => {
      const locales = {
        'zh-CN': '昨天 %s',
        en: 'yday %s',
      }
      return locales[locale].replace(/%s/gi, formatTime(date))
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
