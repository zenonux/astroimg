export default {
  name: 'astroimg',
  build: {
    css: {
      preprocessor: 'sass',
    },
    site: {
      publicPath: '/astroimg/',
    },
  },
  site: {
    title: '@astroimg/vue',
    logo: 'https://i.cmoscool.com/mp-astroimg/logo_new.png',
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'debounce-async-button',
            title: 'DebounceAsyncButton',
          },
        ],
      },
    ],
  },
};
