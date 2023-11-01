<template>
  <demo-block title="基础用法">
    <DebounceAsyncButton v-slot="slotProps" @click="() => testAsync('click')">
      <button :loading="slotProps.loading">button</button>
    </DebounceAsyncButton>
  </demo-block>
</template>

<script setup>
import DebounceAsyncButton from "../index.vue";
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
