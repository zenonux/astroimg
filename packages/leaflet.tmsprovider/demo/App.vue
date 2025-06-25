<template>
  <div id="map"></div>
</template>
<script setup>
import OriginL from "leaflet";
import { withTmsProvider } from "../src";
import "leaflet/dist/leaflet.css";
import { onMounted } from "vue";
onMounted(() => {
  const L = withTmsProvider(OriginL, {
    locale: "zh_cn",
  });
  const MAX_BOUNDS = [
    [-80, -176],
    [84, 178],
  ];
  const map = L.map("map", {
    crs: L.CRS.Baidu,
    zoom: 13,
    zoomControl: false,
    attributionControl: false,
    center: [31.834912, 117.220102],
    minZoom: 4,
    maxZoom: 18,
    zoomSnap: 0,
    maxBounds: MAX_BOUNDS,
    worldCopyJump: false,
  });
  L.tileLayer
    .tmsProvider("Baidu.Normal.Map", { maxZoom: 18, minZoom: 2 })
    .addTo(map);
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
</style>
