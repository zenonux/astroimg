import { App, Plugin } from 'vue';
import AUploader from './index.vue';

export const AUploaderPlugin: Plugin = {
  install(app: App) {
    app.component('a-uploader', AUploader);
  },
};

export { AUploader };