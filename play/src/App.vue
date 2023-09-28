<template>
  <section>
    <h1>AUploader</h1>
    <AUploader v-model="fileList" :config="uploadConfig"></AUploader>
  </section>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { AUploader } from "../../src/components";
const uploadConfig = {
  domain: "",
  bucket: "",
  region: "",
  resource: "",
  async getTempSecret(q: { region: string; bucket: string; resource: string }) {
    return {
      data: {
        credentials: {
          tmpSecretId: "1",
          tmpSecretKey: "1",
          token: "1",
        },
        startTime: 100,
        expiredTime: 100,
      },
    };
  },
};
const fileList = ref('');
</script>
