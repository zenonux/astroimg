import { point } from '@turf/helpers'
import mainlandGeoJson from './mainland.geo.json'
import { booleanPointInPolygon } from '@turf/boolean-point-in-polygon'

const pi = 3.1415926535897932384626
const a = 6378245.0
const ee = 0.00669342162296594323
const x_pi = (pi * 3000.0) / 180.0

function transformLat(x, y) {
  let ret
    = -100.0
      + 2.0 * x
      + 3.0 * y
      + 0.2 * y * y
      + 0.1 * x * y
      + 0.2 * Math.sqrt(Math.abs(x))
  ret
    += ((20.0 * Math.sin(6.0 * x * pi) + 20.0 * Math.sin(2.0 * x * pi)) * 2.0)
      / 3.0
  ret
    += ((20.0 * Math.sin(y * pi) + 40.0 * Math.sin((y / 3.0) * pi)) * 2.0) / 3.0
  ret
    += ((160.0 * Math.sin((y / 12.0) * pi) + 320 * Math.sin((y * pi) / 30.0))
      * 2.0)
    / 3.0
  return ret
}

function transformLng(x, y) {
  let ret
    = 300.0
      + x
      + 2.0 * y
      + 0.1 * x * x
      + 0.1 * x * y
      + 0.1 * Math.sqrt(Math.abs(x))
  ret
    += ((20.0 * Math.sin(6.0 * x * pi) + 20.0 * Math.sin(2.0 * x * pi)) * 2.0)
      / 3.0
  ret
    += ((20.0 * Math.sin(x * pi) + 40.0 * Math.sin((x / 3.0) * pi)) * 2.0) / 3.0
  ret
    += ((150.0 * Math.sin((x / 12.0) * pi) + 300.0 * Math.sin((x / 30.0) * pi))
      * 2.0)
    / 3.0
  return ret
}

function transform(lng, lat) {
  let dLat = transformLat(lng - 105.0, lat - 35.0)
  let dLng = transformLng(lng - 105.0, lat - 35.0)
  let radLat = (lat / 180.0) * pi
  let magic = Math.sin(radLat)
  magic = 1 - ee * magic * magic
  let sqrtMagic = Math.sqrt(magic)
  dLat = (dLat * 180.0) / (((a * (1 - ee)) / (magic * sqrtMagic)) * pi)
  dLng = (dLng * 180.0) / ((a / sqrtMagic) * Math.cos(radLat) * pi)
  let mgLat = lat + dLat
  let mgLng = lng + dLng
  let newCoord = {
    lng: mgLng,
    lat: mgLat,
  }
  return newCoord
}

/** 火星转百度 */
export function gcj02ToBd09(x, y) {
  let z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * x_pi)
  let theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * x_pi)
  let bd_lng = z * Math.cos(theta) + 0.0065
  let bd_lat = z * Math.sin(theta) + 0.006
  let newCoord = {
    lng: bd_lng,
    lat: bd_lat,
  }
  return newCoord
}

/** 百度坐标 BD-09 -> 火星坐标 GCJ-02 */
export function bd09ToGcj02(bdLng, bdLat) {
  const x_pi = (Math.PI * 3000.0) / 180.0
  const x = bdLng - 0.0065
  const y = bdLat - 0.006
  const z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi)
  const theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi)
  const ggLng = z * Math.cos(theta)
  const ggLat = z * Math.sin(theta)
  return { lng: ggLng, lat: ggLat }
}

/** 百度坐标 BD-09 -> WGS84 */
export function bd09ToWgs84(bdLng, bdLat) {
  const gcj = bd09ToGcj02(bdLng, bdLat)
  const wgs = gcj02ToWgs84(gcj.lng, gcj.lat)
  return wgs
}

// 判断某点是否在中国大陆境内
function isInsideMainland(lon, lat) {
  return mainlandGeoJson.features.some((feature) => {
    const polygon = feature.geometry
    // 判断点是否在当前多边形内
    return booleanPointInPolygon(point([lon, lat]), polygon)
  })
}

// 火星转84
export function gcj02ToWgs84(lng, lat) {
  if (!isInsideMainland(lng, lat)) {
    return { lng, lat }
  }
  let coord = transform(lng, lat)
  let lontitude = lng * 2 - coord.lng
  let latitude = lat * 2 - coord.lat
  let newCoord = {
    lng: lontitude,
    lat: latitude,
  }
  return newCoord
}

/** 84转火星 */
export function wgs84ToGcj02(lng, lat) {
  if (!isInsideMainland(lng, lat)) {
    return { lng, lat }
  }

  let dLat = transformLat(lng - 105.0, lat - 35.0)
  let dLng = transformLng(lng - 105.0, lat - 35.0)
  let radLat = (lat / 180.0) * pi
  let magic = Math.sin(radLat)
  magic = 1 - ee * magic * magic
  let sqrtMagic = Math.sqrt(magic)
  dLat = (dLat * 180.0) / (((a * (1 - ee)) / (magic * sqrtMagic)) * pi)
  dLng = (dLng * 180.0) / ((a / sqrtMagic) * Math.cos(radLat) * pi)
  let mgLat = lat + dLat
  let mgLng = lng + dLng
  let newCoord = {
    lng: mgLng,
    lat: mgLat,
  }
  return newCoord
}

/** 84转百度 */
export function wgs84ToBd09(lng, lat) {
  if (!isInsideMainland(lng, lat)) {
    return { lng, lat }
  }
  const gcj02 = wgs84ToGcj02(lng, lat)
  const bd09 = gcj02ToBd09(gcj02.lng, gcj02.lat)
  return bd09
}
