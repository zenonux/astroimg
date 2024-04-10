<script setup lang="ts">
import data from './data.json'
import { EqualHeightWaterfall } from '../src/index'

let ins = new EqualHeightWaterfall({
  containerWidth: document.body.clientWidth,
  breakLineAspectRatioSum: 2.5,
  itemMaxHeight: 300
})
const { items, renderTotalHeight } = ins.add(
  data.map((v) => {
    return {
      width: v.post.attachments[0].width,
      height: v.post.attachments[0].height
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
    >
      <div class="item__index">{{ index }}</div>
    </div>
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
  background-repeat: no-repeat;
  background-size: cover;
}
.item__index {
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  z-index: 10;
  background: rgba(000, 000, 000, 0.5);
  color: #fff;
}
</style>
