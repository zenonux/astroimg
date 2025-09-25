import MoonPhase from './MoonPhase.vue'

// 获取 当前 UTC 时间对应的儒略日
function getJD_UTC(date: Date = new Date()): number {
  let year = date.getUTCFullYear()
  let month = date.getUTCMonth() + 1 // JS 月份从 0 开始
  const day = date.getUTCDate()
  const hour = date.getUTCHours()
  const minute = date.getUTCMinutes()
  const second = date.getUTCSeconds() + date.getUTCMilliseconds() / 1000

  // 时间换算成日的小数
  const dayFraction = (hour + minute / 60 + second / 3600) / 24

  // 如果月份是 Jan 或 Feb，视作前一年的 13/14 月
  if (month <= 2) {
    year -= 1
    month += 12
  }

  const A = Math.floor(year / 100)
  const B = 2 - A + Math.floor(A / 4)

  const JD = Math.floor(365.25 * (year + 4716))
    + Math.floor(30.6001 * (month + 1))
    + day + dayFraction + B - 1524.5

  return JD
}
function getMoonDay() {
  const totalMoonMonth = (getJD_UTC() - 2451550.09765) / 29.530588853
  return ((totalMoonMonth - Math.floor(totalMoonMonth)) * 29.530588853) + 0.28
}
function isUpMoon(moonDay: number) {
  return moonDay > 15
}
enum MoonPhaseType {
  NewMoon = 'NewMoon', // 新月
  WaxingCrescent = 'WaxingCrescent', // 娥眉月（上弦前）
  FirstQuarter = 'FirstQuarter', // 上弦月
  WaxingGibbous = 'WaxingGibbous', // 盈凸月
  FullMoon = 'FullMoon', // 满月
  WaningGibbous = 'WaningGibbous', // 亏凸月
  LastQuarter = 'LastQuarter', // 下弦月
  WaningCrescent = 'WaningCrescent', // 残月
}
function getMoonPhaseType(moonDay: number) {
  if (moonDay < 1 || moonDay > 29) {
    return MoonPhaseType.NewMoon
  }
  else if (moonDay > 1 && moonDay < 7) {
    return MoonPhaseType.WaxingCrescent
  }
  else if (moonDay >= 7.0 && moonDay <= 8.0) {
    return MoonPhaseType.FirstQuarter
  }
  else if (moonDay > 8 && moonDay < 14) {
    return MoonPhaseType.WaxingGibbous
  }
  else if (moonDay >= 14.0 && moonDay <= 16.0) {
    return MoonPhaseType.FullMoon
  }
  else if (moonDay > 16 && moonDay < 21) {
    return MoonPhaseType.WaningGibbous
  }
  else if (moonDay >= 21 && moonDay < 23) {
    return MoonPhaseType.LastQuarter
  }
  else if (moonDay >= 23 && moonDay <= 29) {
    return MoonPhaseType.WaningCrescent
  }
}

export { getMoonDay, getMoonPhaseType, isUpMoon, MoonPhase, MoonPhaseType }
