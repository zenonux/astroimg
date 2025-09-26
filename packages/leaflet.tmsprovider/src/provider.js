import withProj from './proj4leaflet'
import proj4 from 'proj4'

export function withTmsProvider(L, opts) {
  withProj(L, proj4)
  if (L.Proj) {
    L.Projection.BaiduMercator = L.Util.extend({}, L.Projection.Mercator, {
      R: 6378206,
      R_MINOR: 6356584.314245179,
      bounds: L.bounds(
        [-20037725.11268234, -19994619.55417086],
        [20037725.11268234, 19994619.55417086],
      ),
    })
    L.CRS.Baidu = L.Util.extend({}, L.CRS.Earth, {
      code: 'EPSG:Baidu',
      projection: L.Projection.BaiduMercator,
      transformation: new L.Transformation(1, 0.5, -1, 0.5),
      scale(t) {
        return 1 / 2 ** (18 - t)
      },
      zoom(t) {
        return 18 - Math.log(1 / t) / Math.LN2
      },
      wrapLng: void 0,
    })
  }
  L.TileLayer.TmsProvider = L.TileLayer.extend({
    initialize(type, options) {
      // (type, Object)
      let providers = L.TileLayer.TmsProvider.providers

      options = options || {}

      let parts = type.split('.')

      let providerName = parts[0]
      let mapName = parts[1]
      let mapType = parts[2]

      let url = providers[providerName][mapName][mapType]
      options.subdomains = providers[providerName].Subdomains
      options.key = options.key || providers[providerName].key
      options.getUrlArgs = options.key || providers[providerName].getUrlArgs

      L.TileLayer.prototype.initialize.call(this, url, options)
    },

    getTileUrl(coords) {
      const { x, y, z } = this.options.getUrlArgs ? this.options.getUrlArgs(coords) : coords
      let data = {
        s: this._getSubdomain(coords),
        x,
        y,
        z,
        l: opts.locale,
      }
      data.sx = data.x >> 4
      data.sy = ((1 << data.z) - data.y) >> 4

      return L.Util.template(this._url, L.Util.extend(data, this.options))
    },
  })

  L.TileLayer.TmsProvider.providers = {
    TianDiTu: {
      Normal: {
        Map: '//t{s}.tianditu.gov.cn/DataServer?T=vec_w&X={x}&Y={y}&L={z}&tk={key}',
        Annotion:
          '//t{s}.tianditu.gov.cn/DataServer?T=cva_w&X={x}&Y={y}&L={z}&tk={key}',
      },
      Satellite: {
        Map: '//t{s}.tianditu.gov.cn/DataServer?T=img_w&X={x}&Y={y}&L={z}&tk={key}',
        Annotion:
          '//t{s}.tianditu.gov.cn/DataServer?T=cia_w&X={x}&Y={y}&L={z}&tk={key}',
      },
      Terrain: {
        Map: '//t{s}.tianditu.gov.cn/DataServer?T=ter_w&X={x}&Y={y}&L={z}&tk={key}',
        Annotion:
          '//t{s}.tianditu.gov.cn/DataServer?T=cta_w&X={x}&Y={y}&L={z}&tk={key}',
      },
      Subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
      key: '174705aebfe31b79b3587279e211cb9a',
    },

    GaoDe: {
      Normal: {
        Map: '//webrd0{s}.is.autonavi.com/appmaptile?lang={l}&size=1&scale=1&style=8&x={x}&y={y}&z={z}',
      },
      Satellite: {
        Map: '//webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
        Annotion:
          '//webst0{s}.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}',
      },
      Subdomains: ['1', '2', '3', '4'],
    },

    Google: {
      Normal: {
        Map: '//www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}',
      },
      Satellite: {
        Map: '//www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}',
        Annotion: '//www.google.cn/maps/vt?lyrs=y@189&gl=cn&x={x}&y={y}&z={z}',
      },
      Subdomains: [],
    },

    Geoq: {
      Normal: {
        Map: '//map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer/tile/{z}/{y}/{x}',
        PurplishBlue:
          '//map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}',
        Gray: '//map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer/tile/{z}/{y}/{x}',
        Warm: '//map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetWarm/MapServer/tile/{z}/{y}/{x}',
      },
      Theme: {
        Hydro:
          '//thematic.geoq.cn/arcgis/rest/services/ThematicMaps/WorldHydroMap/MapServer/tile/{z}/{y}/{x}',
      },
      Subdomains: [],
    },

    OSM: {
      Normal: {
        Map: '//{s}.tile.osm.org/{z}/{x}/{y}.png',
      },
      Subdomains: ['a', 'b', 'c'],
    },

    Baidu: {
      Normal: {
        Map: '//maponline{s}.bdimg.com/tile/?qt=vtile&x={x}&y={y}&z={z}&styles=pl&scaler=2&udt=&from=jsapi3_0',
      },
      getUrlArgs(t) {
        return { x: t.x, y: -1 - t.y, z: t.z }
      },
      Satellite: {
        Map: '//shangetu{s}.map.bdimg.com/it/u=x={x};y={y};z={z};v=009;type=sate&fm=46',
        Annotion:
          '//online{s}.map.bdimg.com/tile/?qt=tile&x={x}&y={y}&z={z}&styles=sl&v=020',
      },
      Subdomains: ['0', '1', '2'],
    },

    Tencent: {
      Normal: {
        Map: '//rt{s}.map.gtimg.com/tile?z={z}&x={x}&y={-y}&type=vector&styleid=3',
      },
      Satellite: {
        Map: '//p{s}.map.gtimg.com/sateTiles/{z}/{sx}/{sy}/{x}_{-y}.jpg',
      },
      Terrain: {
        Map: '//p{s}.map.gtimg.com/demTiles/{z}/{sx}/{sy}/{x}_{-y}.jpg',
      },
      Subdomains: '0123',
    },
  }

  L.tileLayer.tmsProvider = function (type, options) {
    options = options || {}
    options.corrdType = 'wgs84'
    return new L.TileLayer.TmsProvider(type, options)
  }

  return L
}
