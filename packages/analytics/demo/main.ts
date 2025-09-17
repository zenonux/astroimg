import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { initAnalytics } from '../src'
import App from './App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./IndexPage.vue'),
    },
    {
      path: '/test',
      component: () => import('./TestPage.vue'),
    },
  ],
})

initAnalytics({
  project: 'test',
  pageLeave: {
    isCollectUrl() {
      return true
    },
    urlPropertyMap() {
      return {
        page_id: '',
        page_type: '',
      }
    },
  },
  sensorsConfig: {
    server_url: import.meta.env.VITE_SERVER_URL,
    use_client_time: true,
    send_type: 'beacon',
    show_log: true,
    heatmap: {
      clickmap: 'not_collect',
      scroll_notice_map: 'not_collect',
    },
  },
})
createApp(App).use(router).mount('#app')
