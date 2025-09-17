import type { Directive } from 'vue'
import { getAnalytics } from './index'

interface TrackBinding {
  trigger?: boolean
  event: string
  params?: Record<string, any>
}

export const vAnalytics: Directive<HTMLElement, TrackBinding> = {
  mounted(el, binding) {
    const events = Array.isArray(binding.value) ? binding.value : [binding.value]
    el.dataset.analytics = JSON.stringify(events)
    const handleClick = () => {
      const analytics = getAnalytics()
      events.forEach(({ event, params, trigger }) => {
        if (!event || (trigger !== undefined && !trigger)) {
          return
        }
        analytics.track(event, params || {})
      })
    }

    el.addEventListener('click', handleClick);
    // 临时保存到元素，方便卸载时移除
    (el as any).__trackClick__ = handleClick
  },

  unmounted(el) {
    const handler = (el as any).__trackClick__
    if (handler) {
      el.removeEventListener('click', handler)
      delete (el as any).__trackClick__
    }
    delete el.dataset.analytics
  },
}
