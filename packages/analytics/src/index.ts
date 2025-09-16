import pageleave from '../libs/pageleave.es6'
import sensorsdata from '../libs/sensorsdata.es6'

const sensors = sensorsdata as any

export interface AnalyticsOptions {
  project: string
  pageLeave: {
    urlPropertyMap: (url: string) => {
      page_type: string
      page_id: string
    }
    isCollectUrl: (url: string) => boolean
  }
  sensorsConfig: any
}

class Analytics {
  public sensors: any
  private options: AnalyticsOptions

  constructor(sensors: any, options: any) {
    this.sensors = sensors
    this.options = options
    // 代理 sensors 的所有方法
    return new Proxy(this, {
      get: (target, prop, receiver) => {
        // 优先使用 Analytics 自己的方法/属性
        if (Reflect.has(target, prop)) {
          return Reflect.get(target, prop, receiver)
        }
        // 否则透传到 sensors
        if (Reflect.has(target.sensors, prop)) {
          const value = target.sensors[prop]
          if (typeof value === 'function') {
            return value.bind(target.sensors)
          }
          return value
        }
      },
    })
  }

  track(event: string, options?: Record<string, any>) {
    this.sensors.track(`${this.options.project}__${event}`, options)
  }
}

let analytics: Analytics

export function initAnalytics(options: AnalyticsOptions) {
  sensors.use(pageleave, {
    event_name_view: `${options.project}__page_view`,
    event_name_leave: `${options.project}__page_leave`,
    urlPropertyMap: options.pageLeave.urlPropertyMap,
    isCollectUrl: options.pageLeave.isCollectUrl,
  })
  sensors.init({
    ...options.sensorsConfig,
  })
  const ins = new Analytics(sensors, options)
  analytics = ins
  return analytics
}

export function getAnalytics() {
  return analytics
}
