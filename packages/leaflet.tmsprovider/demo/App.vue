<template>
  <div id="map"></div>
</template>
<script setup>
import OriginL from "leaflet";
import { withTmsProvider } from "../src";
import "leaflet/dist/leaflet.css";
import { onMounted, onUnmounted } from "vue";

let map;

onMounted(() => {
  const L = withTmsProvider(OriginL, { locale: "zh_cn" });

  map = L.map("map", {
    crs: L.CRS.Baidu,
    center: [31.834912, 117.220102],
    zoom: 6,
    minZoom: 4,
    maxZoom: 18,
    zoomSnap: 0,
  });

  // 百度底图
  L.tileLayer
    .tmsProvider("Baidu.Normal.Map", {
      maxZoom: 18,
      minZoom: 2,
    })
    .addTo(map);

  // 光污染 WebMercator 层
  const PollutionLayer = L.TileLayer.extend({
    getTileUrl(coords) {
      const { x, y, z } = coords;
      return `https://cdn-assets.astroimg.com/light-pollution/static/202410250624_tiles/${z}/${x}/${y}.png`;
    },
  });

  new PollutionLayer("", {
    opacity: 0.45,
    minZoom: 2,
    maxZoom: 18,
    maxNativeZoom: 10,
  }).addTo(map);
});

onUnmounted(() => {
  if (map) {
    map.remove();
    map = null;
  }
});
</script>
<style>
html,
body,
#app,
#map {
  margin: 0;
  height: 100%;
}

.leaflet-tile {
  image-rendering: pixelated;
  /* 防止缩放模糊 */
}
</style>
