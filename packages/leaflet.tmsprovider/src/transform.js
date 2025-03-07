import { point } from "@turf/helpers";
import mainlandGeoJson from "./mainland.geo.json";
import { booleanPointInPolygon } from "@turf/boolean-point-in-polygon";
const pi = 3.1415926535897932384626;
const a = 6378245.0;
const ee = 0.00669342162296594323;
const x_pi = (pi * 3000.0) / 180.0;

const transformLat = (x, y) => {
  var ret =
    -100.0 +
    2.0 * x +
    3.0 * y +
    0.2 * y * y +
    0.1 * x * y +
    0.2 * Math.sqrt(Math.abs(x));
  ret +=
    ((20.0 * Math.sin(6.0 * x * pi) + 20.0 * Math.sin(2.0 * x * pi)) * 2.0) /
    3.0;
  ret +=
    ((20.0 * Math.sin(y * pi) + 40.0 * Math.sin((y / 3.0) * pi)) * 2.0) / 3.0;
  ret +=
    ((160.0 * Math.sin((y / 12.0) * pi) + 320 * Math.sin((y * pi) / 30.0)) *
      2.0) /
    3.0;
  return ret;
};

const transformLng = (x, y) => {
  var ret =
    300.0 +
    x +
    2.0 * y +
    0.1 * x * x +
    0.1 * x * y +
    0.1 * Math.sqrt(Math.abs(x));
  ret +=
    ((20.0 * Math.sin(6.0 * x * pi) + 20.0 * Math.sin(2.0 * x * pi)) * 2.0) /
    3.0;
  ret +=
    ((20.0 * Math.sin(x * pi) + 40.0 * Math.sin((x / 3.0) * pi)) * 2.0) / 3.0;
  ret +=
    ((150.0 * Math.sin((x / 12.0) * pi) + 300.0 * Math.sin((x / 30.0) * pi)) *
      2.0) /
    3.0;
  return ret;
};

const transform = (lng, lat) => {
  var dLat = transformLat(lng - 105.0, lat - 35.0);
  var dLng = transformLng(lng - 105.0, lat - 35.0);
  var radLat = (lat / 180.0) * pi;
  var magic = Math.sin(radLat);
  magic = 1 - ee * magic * magic;
  var sqrtMagic = Math.sqrt(magic);
  dLat = (dLat * 180.0) / (((a * (1 - ee)) / (magic * sqrtMagic)) * pi);
  dLng = (dLng * 180.0) / ((a / sqrtMagic) * Math.cos(radLat) * pi);
  var mgLat = lat + dLat;
  var mgLng = lng + dLng;
  var newCoord = {
    lng: mgLng,
    lat: mgLat,
  };
  return newCoord;
};

/**火星转百度*/
const gcj02ToBd09 = function (x, y) {
  var z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * x_pi);
  var theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * x_pi);
  var bd_lng = z * Math.cos(theta) + 0.0065;
  var bd_lat = z * Math.sin(theta) + 0.006;
  var newCoord = {
    lng: bd_lng,
    lat: bd_lat,
  };
  return newCoord;
};

// 判断某点是否在中国大陆境内
const isInsideMainland = (lon, lat) => {
  return mainlandGeoJson.features.some((feature) => {
    const polygon = feature.geometry;
    // 判断点是否在当前多边形内
    return booleanPointInPolygon(point([lon, lat]), polygon);
  });
};

// 火星转84
export const gcj02ToWgs84 = (lng, lat) => {
  if (!isInsideMainland(lng, lat)) {
    return { lng, lat };
  }
  var coord = transform(lng, lat);
  var lontitude = lng * 2 - coord.lng;
  var latitude = lat * 2 - coord.lat;
  var newCoord = {
    lng: lontitude,
    lat: latitude,
  };
  return newCoord;
};


/**84转火星*/
export const wgs84ToGcj02 = (lng, lat) => {
  if (!isInsideMainland(lng, lat)) {
    return { lng, lat };
  }

  var dLat = transformLat(lng - 105.0, lat - 35.0);
  var dLng = transformLng(lng - 105.0, lat - 35.0);
  var radLat = (lat / 180.0) * pi;
  var magic = Math.sin(radLat);
  magic = 1 - ee * magic * magic;
  var sqrtMagic = Math.sqrt(magic);
  dLat = (dLat * 180.0) / (((a * (1 - ee)) / (magic * sqrtMagic)) * pi);
  dLng = (dLng * 180.0) / ((a / sqrtMagic) * Math.cos(radLat) * pi);
  var mgLat = lat + dLat;
  var mgLng = lng + dLng;
  var newCoord = {
    lng: mgLng,
    lat: mgLat,
  };
  return newCoord;
};

/**84转百度*/
export const wgs84ToBd09 = (lng, lat) => {
  if (!isInsideMainland(lng, lat)) {
    return { lng, lat };
  }
  var gcj02 = wgs84ToGcj02(lng, lat);
  var bd09 = gcj02ToBd09(gcj02.lng, gcj02.lat);
  return bd09;
};
