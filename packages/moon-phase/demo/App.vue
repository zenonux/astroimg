<template>
  <MoonPhaseCanvas :illumination=".1" :moon-orient="20" :size="200" :is-up-moon="false" texture-url="https://cdn-assets.astroimg.com/www.astroimg.com/images/weather/moon.webp" />
</template>
<script setup lang="ts">
import MoonPhaseCanvas from '../src/MoonPhaseCanvas.vue';
</script>
