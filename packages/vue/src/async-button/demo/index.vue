<template>
  <demo-block title="基础用法">
    <AiAsyncButton v-slot="slotProps" @click="() => testAsync('click')">
      <button :loading="slotProps.loading">button</button>
    </AiAsyncButton>
  </demo-block>
</template>

<script setup>
import AiAsyncButton from "../index.vue";
const delay = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const testAsync = async (args) => {
  await delay(3000);
  alert("test async ", args);
};
</script>
