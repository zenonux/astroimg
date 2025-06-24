<template>
  <div id="map"></div>
</template>
<script setup>
import OriginL from 'leaflet';
import { withTmsProvider } from '../src'
import 'leaflet/dist/leaflet.css';
import { onMounted } from 'vue';
onMounted(() => {
  const L = withTmsProvider(OriginL, {
    locale: 'zh_cn',
  })
  const map = L.map('map',{
    crs: L.CRS.Baidu,
  }).setView([39.909031, 116.397451], 16);
  L.tileLayer.tmsProvider('Baidu.Normal.Map', { maxZoom: 18, minZoom: 2 }).addTo(map);
})


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
