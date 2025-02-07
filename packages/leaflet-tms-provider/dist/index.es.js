function T(o, M) {
  return o.CoordConver = function() {
    this.bd09_To_gps84 = function(e, r) {
      var i = this.bd09_To_gcj02(e, r), s = this.gcj02_To_gps84(i.lng, i.lat);
      return s;
    }, this.gps84_To_bd09 = function(e, r) {
      var i = this.gps84_To_gcj02(e, r), s = this.gcj02_To_bd09(i.lng, i.lat);
      return s;
    }, this.gps84_To_gcj02 = function(e, r) {
      var i = g(e - 105, r - 35), s = v(e - 105, r - 35), p = r / 180 * a, l = Math.sin(p);
      l = 1 - n * l * l;
      var d = Math.sqrt(l);
      i = i * 180 / (t * (1 - n) / (l * d) * a), s = s * 180 / (t / d * Math.cos(p) * a);
      var u = r + i, h = e + s, y = {
        lng: h,
        lat: u
      };
      return y;
    }, this.gcj02_To_gps84 = function(e, r) {
      var i = c(e, r), s = e * 2 - i.lng, p = r * 2 - i.lat, l = {
        lng: s,
        lat: p
      };
      return l;
    }, this.gcj02_To_bd09 = function(e, r) {
      var i = Math.sqrt(e * e + r * r) + 2e-5 * Math.sin(r * m), s = Math.atan2(r, e) + 3e-6 * Math.cos(e * m), p = i * Math.cos(s) + 65e-4, l = i * Math.sin(s) + 6e-3, d = {
        lng: p,
        lat: l
      };
      return d;
    }, this.bd09_To_gcj02 = function(e, r) {
      var i = e - 65e-4, s = r - 6e-3, p = Math.sqrt(i * i + s * s) - 2e-5 * Math.sin(s * m), l = Math.atan2(s, i) - 3e-6 * Math.cos(i * m), d = p * Math.cos(l), u = p * Math.sin(l), h = {
        lng: d,
        lat: u
      };
      return h;
    };
    var a = 3.141592653589793, t = 6378245, n = 0.006693421622965943, m = a * 3e3 / 180;
    function c(e, r) {
      var i = g(e - 105, r - 35), s = v(e - 105, r - 35), p = r / 180 * a, l = Math.sin(p);
      l = 1 - n * l * l;
      var d = Math.sqrt(l);
      i = i * 180 / (t * (1 - n) / (l * d) * a), s = s * 180 / (t / d * Math.cos(p) * a);
      var u = r + i, h = e + s, y = {
        lng: h,
        lat: u
      };
      return y;
    }
    function g(e, r) {
      var i = -100 + 2 * e + 3 * r + 0.2 * r * r + 0.1 * e * r + 0.2 * Math.sqrt(Math.abs(e));
      return i += (20 * Math.sin(6 * e * a) + 20 * Math.sin(2 * e * a)) * 2 / 3, i += (20 * Math.sin(r * a) + 40 * Math.sin(r / 3 * a)) * 2 / 3, i += (160 * Math.sin(r / 12 * a) + 320 * Math.sin(r * a / 30)) * 2 / 3, i;
    }
    function v(e, r) {
      var i = 300 + e + 2 * r + 0.1 * e * e + 0.1 * e * r + 0.1 * Math.sqrt(Math.abs(e));
      return i += (20 * Math.sin(6 * e * a) + 20 * Math.sin(2 * e * a)) * 2 / 3, i += (20 * Math.sin(e * a) + 40 * Math.sin(e / 3 * a)) * 2 / 3, i += (150 * Math.sin(e / 12 * a) + 300 * Math.sin(e / 30 * a)) * 2 / 3, i;
    }
  }, o.coordConver = function() {
    return new o.CoordConver();
  }, o.GridLayer.include({
    _setZoomTransform: function(a, t, n) {
      var m = t;
      m != null && this.options && (this.options.corrdType == "gcj02" ? m = o.coordConver().gps84_To_gcj02(t.lng, t.lat) : this.options.corrdType == "bd09" && (m = o.coordConver().gps84_To_bd09(t.lng, t.lat)));
      var c = this._map.getZoomScale(n, a.zoom), g = a.origin.multiplyBy(c).subtract(this._map._getNewPixelOrigin(m, n)).round();
      o.Browser.any3d ? o.DomUtil.setTransform(a.el, g, c) : o.DomUtil.setPosition(a.el, g);
    },
    _getTiledPixelBounds: function(a) {
      var t = a;
      t != null && this.options && (this.options.corrdType == "gcj02" ? t = o.coordConver().gps84_To_gcj02(a.lng, a.lat) : this.options.corrdType == "bd09" && (t = o.coordConver().gps84_To_bd09(a.lng, a.lat)));
      var n = this._map, m = n._animatingZoom ? Math.max(n._animateToZoom, n.getZoom()) : n.getZoom(), c = n.getZoomScale(m, this._tileZoom), g = n.project(t, this._tileZoom).floor(), v = n.getSize().divideBy(c * 2);
      return new o.Bounds(
        g.subtract(v),
        g.add(v)
      );
    }
  }), o.Proj && (o.CRS.Baidu = new o.Proj.CRS(
    "EPSG:900913",
    "+proj=merc +a=6378206 +b=6356584.314245179 +lat_ts=0.0 +lon_0=0.0 +x_0=0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs",
    {
      resolutions: function() {
        var a = 19, t = [];
        t[0] = Math.pow(2, 18);
        for (var n = 1; n < a; n++)
          t[n] = Math.pow(2, 18 - n);
        return t;
      }(),
      origin: [0, 0],
      bounds: o.bounds([20037508342789244e-9, 0], [0, 20037508342789244e-9])
    }
  )), o.TileLayer.TmsProvider = o.TileLayer.extend({
    initialize: function(a, t) {
      var n = o.TileLayer.TmsProvider.providers;
      t = t || {};
      var m = a.split("."), c = m[0], g = m[1], v = m[2], e = n[c][g][v];
      t.subdomains = n[c].Subdomains, t.key = t.key || n[c].key, "tms" in n[c] && (t.tms = n[c].tms), o.TileLayer.prototype.initialize.call(this, e, t);
    },
    getTileUrl: function(a) {
      var t = {
        s: this._getSubdomain(a),
        x: a.x,
        y: a.y,
        z: this._getZoomForUrl(),
        l: M.locale
      };
      if (this._map && !this._map.options.crs.infinite) {
        var n = this._globalTileRange.max.y - a.y;
        this.options.tms && (t.y = n), t["-y"] = n;
      }
      return t.sx = t.x >> 4, t.sy = (1 << t.z) - t.y >> 4, o.Util.template(this._url, o.Util.extend(t, this.options));
    }
  }), o.TileLayer.TmsProvider.providers = {
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
  }, o.tileLayer.tmsProvider = function(a, t) {
    return t = t || {}, t.corrdType = n(a), new o.TileLayer.TmsProvider(a, t);
    function n(m) {
      var c = m.split("."), g = c[0], v = "wgs84";
      switch (g) {
        case "Geoq":
        case "GaoDe":
        case "Google":
          v = "gcj02";
          break;
        case "Baidu":
          v = "bd09";
          break;
        case "OSM":
        case "TianDiTu":
          v = "wgs84";
          break;
      }
      return v;
    }
  }, o;
}
export {
  T as default
};
