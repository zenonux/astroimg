<script setup lang="ts">
import data from './data.json'
import { EqualHeightWaterfall } from '../src/index'

let ins = new EqualHeightWaterfall({
  containerWidth: window.screen.width
})
const { items, renderTotalHeight } = ins.add(
  data.map((v) => {
    return {
      width: v.firstPost.images[0].fileWidth,
      height: v.firstPost.images[0].fileHeight,
    }
  })
)
</script>
<template>
  <main
    :style="{
      height: renderTotalHeight + 'px'
    }"
  >
    <div
      class="item"
      :style="{
        position: 'absolute',
        width: item.renderWidth + 'px',
        height: item.renderHeight + 'px',
        top: item.renderTop + 'px',
        left: item.renderLeft + 'px'
      }"
      v-for="(item, index) in items"
      :key="index"
    />
  </main>
</template>
<style>
html,
body,
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: scroll;
}
main {
  position: relative;
}
.item {
  object-fit: cover;
  background: red;
}
</style>
