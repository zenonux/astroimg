const g = (t, s) => {
  var r = -100 + 2 * t + 3 * s + 0.2 * s * s + 0.1 * t * s + 0.2 * Math.sqrt(Math.abs(t));
  return r += (20 * Math.sin(6 * t * pi) + 20 * Math.sin(2 * t * pi)) * 2 / 3, r += (20 * Math.sin(s * pi) + 40 * Math.sin(s / 3 * pi)) * 2 / 3, r += (160 * Math.sin(s / 12 * pi) + 320 * Math.sin(s * pi / 30)) * 2 / 3, r;
}, d = (t, s) => {
  var r = 300 + t + 2 * s + 0.1 * t * t + 0.1 * t * s + 0.1 * Math.sqrt(Math.abs(t));
  return r += (20 * Math.sin(6 * t * pi) + 20 * Math.sin(2 * t * pi)) * 2 / 3, r += (20 * Math.sin(t * pi) + 40 * Math.sin(t / 3 * pi)) * 2 / 3, r += (150 * Math.sin(t / 12 * pi) + 300 * Math.sin(t / 30 * pi)) * 2 / 3, r;
}, y = (t, s) => {
  var r = g(t - 105, s - 35), e = d(t - 105, s - 35), i = s / 180 * pi, n = Math.sin(i);
  n = 1 - ee * n * n;
  var o = Math.sqrt(n);
  r = r * 180 / (a * (1 - ee) / (n * o) * pi), e = e * 180 / (a / o * Math.cos(i) * pi);
  var l = s + r, m = t + e, p = {
    lng: m,
    lat: l
  };
  return p;
}, u = (t, s) => {
  var r = t - 65e-4, e = s - 6e-3, i = Math.sqrt(r * r + e * e) - 2e-5 * Math.sin(e * x_pi), n = Math.atan2(e, r) - 3e-6 * Math.cos(r * x_pi), o = i * Math.cos(n), l = i * Math.sin(n), m = {
    lng: o,
    lat: l
  };
  return m;
}, h = function(t, s) {
  var r = Math.sqrt(t * t + s * s) + 2e-5 * Math.sin(s * x_pi), e = Math.atan2(s, t) + 3e-6 * Math.cos(t * x_pi), i = r * Math.cos(e) + 65e-4, n = r * Math.sin(e) + 6e-3, o = {
    lng: i,
    lat: n
  };
  return o;
}, c = (t, s) => {
  var r = g(t - 105, s - 35), e = d(t - 105, s - 35), i = s / 180 * pi, n = Math.sin(i);
  n = 1 - ee * n * n;
  var o = Math.sqrt(n);
  r = r * 180 / (a * (1 - ee) / (n * o) * pi), e = e * 180 / (a / o * Math.cos(i) * pi);
  var l = s + r, m = t + e, p = {
    lng: m,
    lat: l
  };
  return p;
}, M = (t, s) => {
  var r = y(t, s), e = t * 2 - r.lng, i = s * 2 - r.lat, n = {
    lng: e,
    lat: i
  };
  return n;
}, T = () => {
  var t = u(lng, lat), s = M(t.lng, t.lat);
  return s;
}, v = (t, s) => {
  var r = c(t, s), e = h(r.lng, r.lat);
  return e;
};
function z(t, s) {
  return t.GridLayer.include({
    _setZoomTransform: function(r, e, i) {
      var n = e;
      n != null && this.options && (this.options.corrdType == "gcj02" ? n = c(e.lng, e.lat) : this.options.corrdType == "bd09" && (n = v(e.lng, e.lat)));
      var o = this._map.getZoomScale(i, r.zoom), l = r.origin.multiplyBy(o).subtract(this._map._getNewPixelOrigin(n, i)).round();
      t.Browser.any3d ? t.DomUtil.setTransform(r.el, l, o) : t.DomUtil.setPosition(r.el, l);
    },
    _getTiledPixelBounds: function(r) {
      var e = r;
      e != null && this.options && (this.options.corrdType == "gcj02" ? e = c(r.lng, r.lat) : this.options.corrdType == "bd09" && (e = v(r.lng, r.lat)));
      var i = this._map, n = i._animatingZoom ? Math.max(i._animateToZoom, i.getZoom()) : i.getZoom(), o = i.getZoomScale(n, this._tileZoom), l = i.project(e, this._tileZoom).floor(), m = i.getSize().divideBy(o * 2);
      return new t.Bounds(
        l.subtract(m),
        l.add(m)
      );
    }
  }), t.Proj && (t.CRS.Baidu = new t.Proj.CRS(
    "EPSG:900913",
    "+proj=merc +a=6378206 +b=6356584.314245179 +lat_ts=0.0 +lon_0=0.0 +x_0=0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs",
    {
      resolutions: function() {
        var r = 19, e = [];
        e[0] = Math.pow(2, 18);
        for (var i = 1; i < r; i++)
          e[i] = Math.pow(2, 18 - i);
        return e;
      }(),
      origin: [0, 0],
      bounds: t.bounds([20037508342789244e-9, 0], [0, 20037508342789244e-9])
    }
  )), t.TileLayer.TmsProvider = t.TileLayer.extend({
    initialize: function(r, e) {
      var i = t.TileLayer.TmsProvider.providers;
      e = e || {};
      var n = r.split("."), o = n[0], l = n[1], m = n[2], p = i[o][l][m];
      e.subdomains = i[o].Subdomains, e.key = e.key || i[o].key, "tms" in i[o] && (e.tms = i[o].tms), t.TileLayer.prototype.initialize.call(this, p, e);
    },
    getTileUrl: function(r) {
      var e = {
        s: this._getSubdomain(r),
        x: r.x,
        y: r.y,
        z: this._getZoomForUrl(),
        l: s.locale
      };
      if (this._map && !this._map.options.crs.infinite) {
        var i = this._globalTileRange.max.y - r.y;
        this.options.tms && (e.y = i), e["-y"] = i;
      }
      return e.sx = e.x >> 4, e.sy = (1 << e.z) - e.y >> 4, t.Util.template(this._url, t.Util.extend(e, this.options));
    }
  }), t.TileLayer.TmsProvider.providers = {
    TianDiTu: {
      Normal: {
        Map: "//t{s}.tianditu.gov.cn/DataServer?T=vec_w&X={x}&Y={y}&L={z}&tk={key}",
        Annotion: "//t{s}.tianditu.gov.cn/DataServer?T=cva_w&X={x}&Y={y}&L={z}&tk={key}"
      },
      Satellite: {
        Map: "//t{s}.tianditu.gov.cn/DataServer?T=img_w&X={x}&Y={y}&L={z}&tk={key}",
        Annotion: "//t{s}.tianditu.gov.cn/DataServer?T=cia_w&X={x}&Y={y}&L={z}&tk={key}"
      },
      Terrain: {
        Map: "//t{s}.tianditu.gov.cn/DataServer?T=ter_w&X={x}&Y={y}&L={z}&tk={key}",
        Annotion: "//t{s}.tianditu.gov.cn/DataServer?T=cta_w&X={x}&Y={y}&L={z}&tk={key}"
      },
      Subdomains: ["0", "1", "2", "3", "4", "5", "6", "7"],
      key: "174705aebfe31b79b3587279e211cb9a"
    },
    GaoDe: {
      Normal: {
        Map: "//webrd0{s}.is.autonavi.com/appmaptile?lang={l}&size=1&scale=1&style=8&x={x}&y={y}&z={z}"
      },
      Satellite: {
        Map: "//webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}",
        Annotion: "//webst0{s}.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}"
      },
      Subdomains: ["1", "2", "3", "4"]
    },
    Google: {
      Normal: {
        Map: "//www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
      },
      Satellite: {
        Map: "//www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}",
        Annotion: "//www.google.cn/maps/vt?lyrs=y@189&gl=cn&x={x}&y={y}&z={z}"
      },
      Subdomains: []
    },
    Geoq: {
      Normal: {
        Map: "//map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer/tile/{z}/{y}/{x}",
        PurplishBlue: "//map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}",
        Gray: "//map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer/tile/{z}/{y}/{x}",
        Warm: "//map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetWarm/MapServer/tile/{z}/{y}/{x}"
      },
      Theme: {
        Hydro: "//thematic.geoq.cn/arcgis/rest/services/ThematicMaps/WorldHydroMap/MapServer/tile/{z}/{y}/{x}"
      },
      Subdomains: []
    },
    OSM: {
      Normal: {
        Map: "//{s}.tile.osm.org/{z}/{x}/{y}.png"
      },
      Subdomains: ["a", "b", "c"]
    },
    Baidu: {
      Normal: {
        Map: "//online{s}.map.bdimg.com/onlinelabel/?qt=tile&x={x}&y={y}&z={z}&styles=pl&scaler=1&p=1"
      },
      Satellite: {
        Map: "//shangetu{s}.map.bdimg.com/it/u=x={x};y={y};z={z};v=009;type=sate&fm=46",
        Annotion: "//online{s}.map.bdimg.com/tile/?qt=tile&x={x}&y={y}&z={z}&styles=sl&v=020"
      },
      Subdomains: "0123456789",
      tms: !0
    },
    Tencent: {
      Normal: {
        Map: "//rt{s}.map.gtimg.com/tile?z={z}&x={x}&y={-y}&type=vector&styleid=3"
      },
      Satellite: {
        Map: "//p{s}.map.gtimg.com/sateTiles/{z}/{sx}/{sy}/{x}_{-y}.jpg"
      },
      Terrain: {
        Map: "//p{s}.map.gtimg.com/demTiles/{z}/{sx}/{sy}/{x}_{-y}.jpg"
      },
      Subdomains: "0123"
    }
  }, t.tileLayer.tmsProvider = function(r, e) {
    return e = e || {}, e.corrdType = i(r), new t.TileLayer.TmsProvider(r, e);
    function i(n) {
      var o = n.split("."), l = o[0], m = "wgs84";
      switch (l) {
        case "Geoq":
        case "GaoDe":
        case "Google":
          m = "gcj02";
          break;
        case "Baidu":
          m = "bd09";
          break;
        case "OSM":
        case "TianDiTu":
          m = "wgs84";
          break;
      }
      return m;
    }
  }, t;
}
export {
  T as bd09ToGps84,
  M as gcj02ToGps84,
  v as gps84ToBd09,
  c as gps84ToGcj02,
  z as withTmsProvider
};
