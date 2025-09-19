import type { Directive } from 'vue'
import { getAnalytics } from './index'

interface TrackBinding {
  event: string
  params?: Record<string, any>
  trigger?: 'click' | 'exposure'
}

export const vAnalytics: Directive<HTMLElement, TrackBinding | TrackBinding[]> = {
  mounted(el, binding) {
    const events = Array.isArray(binding.value) ? binding.value : [binding.value]
    const analytics = getAnalytics()

    const handlers: Array<() => void> = []

    events.forEach(({ event, params, trigger }) => {
      if (!event) {
        return
      }
      trigger = trigger || 'click'

      if (trigger === 'click' || !trigger) {
        const handleClick = () => {
          analytics.track(event, params || {})
        }
        // true 避免vue @click.top导致的不生效情况
        el.addEventListener('click', handleClick, true)
        handlers.push(() => el.removeEventListener('click', handleClick, true))
      }
    })

    ;(el as any).__trackHandlers__ = handlers
  },

  unmounted(el) {
    const handlers = (el as any).__trackHandlers__ as Array<() => void>
    if (handlers) {
      handlers.forEach(fn => fn())
      delete (el as any).__trackHandlers__
    }
  },
}
