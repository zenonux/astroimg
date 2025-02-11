<template>
  <div id="map"></div>
</template>
<script setup>
import OriginL from 'leaflet';
import { withTmsProvider } from '../src'
import 'leaflet/dist/leaflet.css';
import { onMounted } from 'vue';
onMounted(async () => {
  const L = withTmsProvider(OriginL, {
    locale: 'zh_cn',
    chinaTileAdapter: true
  })
  let location = await getLocation()
  let lat = location[1]
  let lng = location[0]
  const map = L.map('map').setView([lng, lat], 16);
  L.marker([lng, lat]).addTo(map);
  console.info('current gps location: ', location.reverse().join(','))
  L.tileLayer.tmsProvider('GaoDe.Normal.Map', { maxZoom: 18, minZoom: 2 }).addTo(map);
})

function getLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(function (position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      resolve([latitude, longitude])
    }, function (error) {
      reject(error)
    });
  })

}
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
