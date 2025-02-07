<template>
  <div id="map"></div>
</template>
<script setup>
import OriginL from 'leaflet';
import TmsProvider from '../src'
import 'leaflet/dist/leaflet.css';
import { onMounted } from 'vue';
onMounted(() => {
  const L = TmsProvider(OriginL,{
    locale:'zh_cn'
  })
  const map = L.map('map').setView([39.915, 116.404], 10);
  L.tileLayer.tmsProvider('GaoDe.Normal.Map',{maxZoom:18,minZoom:2}).addTo(map);

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
