<template>
  <MoonPhase :process=".8" :moon-orient="20" :is-up-moon="true" texture-url="https://cdn-assets.astroimg.com/www.astroimg.com/images/weather/moon.webp" />
</template>
<script setup lang="ts">
import MoonPhase from '../src/MoonPhase.vue';
</script>
