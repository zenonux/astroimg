export default function TmsProvider(L,opts) {
  //坐标转换
  L.CoordConver = function () {
    /**百度转84*/
    this.bd09_To_gps84 = function (lng, lat) {
      var gcj02 = this.bd09_To_gcj02(lng, lat);
      var map84 = this.gcj02_To_gps84(gcj02.lng, gcj02.lat);
      return map84;
    };
    /**84转百度*/
    this.gps84_To_bd09 = function (lng, lat) {
      var gcj02 = this.gps84_To_gcj02(lng, lat);
      var bd09 = this.gcj02_To_bd09(gcj02.lng, gcj02.lat);
      return bd09;
    };
    /**84转火星*/
    this.gps84_To_gcj02 = function (lng, lat) {
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
    /**火星转84*/
    this.gcj02_To_gps84 = function (lng, lat) {
      var coord = transform(lng, lat);
      var lontitude = lng * 2 - coord.lng;
      var latitude = lat * 2 - coord.lat;
      var newCoord = {
        lng: lontitude,
        lat: latitude,
      };
      return newCoord;
    };
    /**火星转百度*/
    this.gcj02_To_bd09 = function (x, y) {
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
    /**百度转火星*/
    this.bd09_To_gcj02 = function (bd_lng, bd_lat) {
      var x = bd_lng - 0.0065;
      var y = bd_lat - 0.006;
      var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi);
      var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi);
      var gg_lng = z * Math.cos(theta);
      var gg_lat = z * Math.sin(theta);
      var newCoord = {
        lng: gg_lng,
        lat: gg_lat,
      };
      return newCoord;
    };

    var pi = 3.1415926535897932384626;
    var a = 6378245.0;
    var ee = 0.00669342162296594323;
    var x_pi = (pi * 3000.0) / 180.0;
    var R = 6378137;

    function transform(lng, lat) {
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
    }

    function transformLat(x, y) {
      var ret =
        -100.0 +
        2.0 * x +
        3.0 * y +
        0.2 * y * y +
        0.1 * x * y +
        0.2 * Math.sqrt(Math.abs(x));
      ret +=
        ((20.0 * Math.sin(6.0 * x * pi) + 20.0 * Math.sin(2.0 * x * pi)) *
          2.0) /
        3.0;
      ret +=
        ((20.0 * Math.sin(y * pi) + 40.0 * Math.sin((y / 3.0) * pi)) * 2.0) /
        3.0;
      ret +=
        ((160.0 * Math.sin((y / 12.0) * pi) + 320 * Math.sin((y * pi) / 30.0)) *
          2.0) /
        3.0;
      return ret;
    }

    function transformLng(x, y) {
      var ret =
        300.0 +
        x +
        2.0 * y +
        0.1 * x * x +
        0.1 * x * y +
        0.1 * Math.sqrt(Math.abs(x));
      ret +=
        ((20.0 * Math.sin(6.0 * x * pi) + 20.0 * Math.sin(2.0 * x * pi)) *
          2.0) /
        3.0;
      ret +=
        ((20.0 * Math.sin(x * pi) + 40.0 * Math.sin((x / 3.0) * pi)) * 2.0) /
        3.0;
      ret +=
        ((150.0 * Math.sin((x / 12.0) * pi) +
          300.0 * Math.sin((x / 30.0) * pi)) *
          2.0) /
        3.0;
      return ret;
    }
  };

  L.coordConver = function () {
    return new L.CoordConver();
  };

  L.GridLayer.include({
    _setZoomTransform: function (level, _center, zoom) {
      var center = _center;
      if (center != undefined && this.options) {
        if (this.options.corrdType == "gcj02") {
          center = L.coordConver().gps84_To_gcj02(_center.lng, _center.lat);
        } else if (this.options.corrdType == "bd09") {
          center = L.coordConver().gps84_To_bd09(_center.lng, _center.lat);
        }
      }
      var scale = this._map.getZoomScale(zoom, level.zoom),
        translate = level.origin
          .multiplyBy(scale)
          .subtract(this._map._getNewPixelOrigin(center, zoom))
          .round();

      if (L.Browser.any3d) {
        L.DomUtil.setTransform(level.el, translate, scale);
      } else {
        L.DomUtil.setPosition(level.el, translate);
      }
    },
    _getTiledPixelBounds: function (_center) {
      var center = _center;
      if (center != undefined && this.options) {
        if (this.options.corrdType == "gcj02") {
          center = L.coordConver().gps84_To_gcj02(_center.lng, _center.lat);
        } else if (this.options.corrdType == "bd09") {
          center = L.coordConver().gps84_To_bd09(_center.lng, _center.lat);
        }
      }
      var map = this._map,
        mapZoom = map._animatingZoom
          ? Math.max(map._animateToZoom, map.getZoom())
          : map.getZoom(),
        scale = map.getZoomScale(mapZoom, this._tileZoom),
        pixelCenter = map.project(center, this._tileZoom).floor(),
        halfSize = map.getSize().divideBy(scale * 2);

      return new L.Bounds(
        pixelCenter.subtract(halfSize),
        pixelCenter.add(halfSize),
      );
    },
  });

  if (L.Proj) {
    L.CRS.Baidu = new L.Proj.CRS(
      "EPSG:900913",
      "+proj=merc +a=6378206 +b=6356584.314245179 +lat_ts=0.0 +lon_0=0.0 +x_0=0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs",
      {
        resolutions: (function () {
          var level = 19;
          var res = [];
          res[0] = Math.pow(2, 18);
          for (var i = 1; i < level; i++) {
            res[i] = Math.pow(2, 18 - i);
          }
          return res;
        })(),
        origin: [0, 0],
        bounds: L.bounds([20037508.342789244, 0], [0, 20037508.342789244]),
      },
    );
  }

  L.TileLayer.TmsProvider = L.TileLayer.extend({
    initialize: function (type, options) {
      // (type, Object)
      var providers = L.TileLayer.TmsProvider.providers;

      options = options || {};

      var parts = type.split(".");

      var providerName = parts[0];
      var mapName = parts[1];
      var mapType = parts[2];

      var url = providers[providerName][mapName][mapType];
      options.subdomains = providers[providerName].Subdomains;
      options.key = options.key || providers[providerName].key;

      if ("tms" in providers[providerName]) {
        options.tms = providers[providerName]["tms"];
      }

      L.TileLayer.prototype.initialize.call(this, url, options);
    },

    getTileUrl: function (coords) {
      var data = {
        s: this._getSubdomain(coords),
        x: coords.x,
        y: coords.y,
        z: this._getZoomForUrl(),
        l:opts.locale,
      };
      if (this._map && !this._map.options.crs.infinite) {
        var invertedY = this._globalTileRange.max.y - coords.y;
        if (this.options.tms) {
          data["y"] = invertedY;
        }
        data["-y"] = invertedY;
      }

      data.sx = data.x >> 4;
      data.sy = ((1 << data.z) - data.y) >> 4;

      return L.Util.template(this._url, L.Util.extend(data, this.options));
    },
  });

  L.TileLayer.TmsProvider.providers = {
    TianDiTu: {
      Normal: {
        Map: "//t{s}.tianditu.gov.cn/DataServer?T=vec_w&X={x}&Y={y}&L={z}&tk={key}",
        Annotion:
          "//t{s}.tianditu.gov.cn/DataServer?T=cva_w&X={x}&Y={y}&L={z}&tk={key}",
      },
      Satellite: {
        Map: "//t{s}.tianditu.gov.cn/DataServer?T=img_w&X={x}&Y={y}&L={z}&tk={key}",
        Annotion:
          "//t{s}.tianditu.gov.cn/DataServer?T=cia_w&X={x}&Y={y}&L={z}&tk={key}",
      },
      Terrain: {
        Map: "//t{s}.tianditu.gov.cn/DataServer?T=ter_w&X={x}&Y={y}&L={z}&tk={key}",
        Annotion:
          "//t{s}.tianditu.gov.cn/DataServer?T=cta_w&X={x}&Y={y}&L={z}&tk={key}",
      },
      Subdomains: ["0", "1", "2", "3", "4", "5", "6", "7"],
      key: "174705aebfe31b79b3587279e211cb9a",
    },

    GaoDe: {
      Normal: {
        Map: "//webrd0{s}.is.autonavi.com/appmaptile?lang={l}&size=1&scale=1&style=8&x={x}&y={y}&z={z}",
      },
      Satellite: {
        Map: "//webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}",
        Annotion:
          "//webst0{s}.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}",
      },
      Subdomains: ["1", "2", "3", "4"],
    },

    Google: {
      Normal: {
        Map: "//www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}",
      },
      Satellite: {
        Map: "//www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}",
        Annotion: "//www.google.cn/maps/vt?lyrs=y@189&gl=cn&x={x}&y={y}&z={z}",
      },
      Subdomains: [],
    },

    Geoq: {
      Normal: {
        Map: "//map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer/tile/{z}/{y}/{x}",
        PurplishBlue:
          "//map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}",
        Gray: "//map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer/tile/{z}/{y}/{x}",
        Warm: "//map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetWarm/MapServer/tile/{z}/{y}/{x}",
      },
      Theme: {
        Hydro:
          "//thematic.geoq.cn/arcgis/rest/services/ThematicMaps/WorldHydroMap/MapServer/tile/{z}/{y}/{x}",
      },
      Subdomains: [],
    },

    OSM: {
      Normal: {
        Map: "//{s}.tile.osm.org/{z}/{x}/{y}.png",
      },
      Subdomains: ["a", "b", "c"],
    },

    Baidu: {
      Normal: {
        Map: "//online{s}.map.bdimg.com/onlinelabel/?qt=tile&x={x}&y={y}&z={z}&styles=pl&scaler=1&p=1",
      },
      Satellite: {
        Map: "//shangetu{s}.map.bdimg.com/it/u=x={x};y={y};z={z};v=009;type=sate&fm=46",
        Annotion:
          "//online{s}.map.bdimg.com/tile/?qt=tile&x={x}&y={y}&z={z}&styles=sl&v=020",
      },
      Subdomains: "0123456789",
      tms: true,
    },

    Tencent: {
      Normal: {
        Map: "//rt{s}.map.gtimg.com/tile?z={z}&x={x}&y={-y}&type=vector&styleid=3",
      },
      Satellite: {
        Map: "//p{s}.map.gtimg.com/sateTiles/{z}/{sx}/{sy}/{x}_{-y}.jpg",
      },
      Terrain: {
        Map: "//p{s}.map.gtimg.com/demTiles/{z}/{sx}/{sy}/{x}_{-y}.jpg",
      },
      Subdomains: "0123",
    },
  };

  L.tileLayer.tmsProvider = function (type, options) {
    options = options || {};
    options.corrdType = getCorrdType(type);
    return new L.TileLayer.TmsProvider(type, options);

    //获取坐标类型
    function getCorrdType(type) {
      var parts = type.split(".");
      var providerName = parts[0];
      var zbName = "wgs84";
      switch (providerName) {
        case "Geoq":
        case "GaoDe":
        case "Google":
          zbName = "gcj02";
          break;
        case "Baidu":
          zbName = "bd09";
          break;
        case "OSM":
        case "TianDiTu":
          zbName = "wgs84";
          break;
      }
      return zbName;
    }
  };

  return L;
}
