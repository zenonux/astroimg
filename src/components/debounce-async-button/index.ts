import { App, Plugin } from 'vue';
import ADebounceAsyncButton from './index.vue';

export const ADebounceAsyncButtonPlugin: Plugin = {
  install(app: App) {
    app.component('a-debounce-async-button', ADebounceAsyncButton);
  },
};

export { ADebounceAsyncButton };