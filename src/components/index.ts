import { App, Plugin } from "vue";
import { ADebounceAsyncButtonPlugin } from "./debounce-async-button";
import { AUploaderPlugin } from "./uploader";

const AstroimgPlugin: Plugin = {
  install(app: App) {
    ADebounceAsyncButtonPlugin.install?.(app);
    AUploaderPlugin.install?.(app);
  },
};

export default AstroimgPlugin;
export * from "./debounce-async-button";
export * from "./uploader";
