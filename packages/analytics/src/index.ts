import sensorsdata from '../libs/sensorsdata.es6'

const sensors: any = sensorsdata
export interface AnalyticsOptions {
  project: string
  pageView: {
    urlPropertyMap: (url: string) => { page_type: string }
    isCollectUrl: (url: string) => boolean
  }
  sensorsConfig: any
}

export type AnalyticsInstance<E extends string, P extends Record<E, any>> = {
  track: (event: E, params: P[E]) => void
} & Record<string, any>

class Analytics<E extends string, P extends Record<E, any>> {
  public sensors: any
  private options: AnalyticsOptions

  constructor(sensors: any, options: AnalyticsOptions) {
    this.sensors = sensors
    this.options = options

    // 返回 Proxy 代理 sensors
    return new Proxy(this, {
      get: (target, prop, receiver) => {
        if (Reflect.has(target, prop))
          return Reflect.get(target, prop, receiver)
        if (Reflect.has(target.sensors, prop)) {
          const value = target.sensors[prop]
          return typeof value === 'function' ? value.bind(target.sensors) : value
        }
      },
    })
  }

  track(event: E, params: P[E]) {
    this.sensors.track(`${this.options.project}_${event}`, params || {})
  }
}

let analytics: AnalyticsInstance<any, any> | null = null

export function initAnalytics<E extends string, P extends Record<E, any>>(options: AnalyticsOptions) {
  sensors.use('PageLeave', {
    event_name_view: `${options.project}_page_view`,
    event_name_leave: `${options.project}_page_leave`,
    urlPropertyMap: options.pageView.urlPropertyMap,
    isCollectUrl: options.pageView.isCollectUrl,
  })
  sensors.init({ ...options.sensorsConfig })

  const ins = new Analytics<E, P>(sensors, options)
  analytics = ins
  return analytics as AnalyticsInstance<E, P>
}

export function getAnalytics<E extends string, P extends Record<E, any>>(): AnalyticsInstance<E, P> {
  if (!analytics)
    throw new Error('Analytics not initialized')
  return analytics as AnalyticsInstance<E, P>
}

export * from './vAnalytics'
