import pageleave from '../libs/pageleave.es6'
import sensorsdata from '../libs/sensorsdata.es6'

const sensors = sensorsdata as any

export interface AnalyticsOptions<E extends string, P extends Record<E, any>> {
  project: string
  createTracker?: (track: (event: E, params: P[E]) => void) => (event: E, params: P[E]) => void
  pageLeave: {
    urlPropertyMap: (url: string) => { page_type: string, page_id: string }
    isCollectUrl: (url: string) => boolean
  }
  sensorsConfig: any
}

function prefixKeys<T extends Record<string, any>>(obj: T, prefix: string): Record<string, T[keyof T]> {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [`${prefix}${key}`, value]),
  ) as Record<string, T[keyof T]>
}
function withKeyPrefix<T extends Record<string, any>>(
  fn: (...args: any[]) => T,
  prefix: string,
): (...args: any[]) => Record<string, T[keyof T]> {
  return (...args) => {
    const result = fn(...args)
    return prefixKeys(result, prefix)
  }
}

// 包含 track + 其他任意方法
export type AnalyticsInstance<E extends string, P extends Record<E, any>> = {
  track: (event: E, params: P[E]) => void
  setProfile: (params: Record<string, any>) => void
  registerPage: (params: Record<string, any>) => void
} & Record<string, any>

class Analytics<E extends string, P extends Record<E, any>> {
  public sensors: any
  private options: AnalyticsOptions<E, P>

  // 使用箭头函数，避免 this 隐式类型问题
  track: (event: E, params: P[E]) => void
  setProfile: (params: Record<string, any>) => void
  registerPage: (params: Record<string, any>) => void

  constructor(sensors: any, options: AnalyticsOptions<E, P>) {
    this.sensors = sensors
    this.options = options

    // 默认 track 实现
    this.track = (event, params) => {
      this.sensors.track(`${this.options.project}_${event}`, params || {})
    }

    this.registerPage = (params: any) => {
      this.sensors.registerPage(withKeyPrefix(params || {}, `${this.options.project}_`))
    }
    this.setProfile = (params: any) => {
      this.sensors.setProfile(withKeyPrefix(params || {}, `${this.options.project}_`))
    }

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
}

let analytics: AnalyticsInstance<any, any> | null = null

export function initAnalytics<E extends string, P extends Record<E, any>>(options: AnalyticsOptions<E, P>) {
  sensors.use(pageleave, {
    event_duration: `page_duration`,
    event_name_view: `${options.project}__page_view`,
    event_name_leave: `${options.project}__page_leave`,
    urlPropertyMap: options.pageLeave.urlPropertyMap,
    isCollectUrl: options.pageLeave.isCollectUrl,
  })
  sensors.init({ ...options.sensorsConfig })

  const ins = new Analytics<E, P>(sensors, options)

  if (options.createTracker) {
    ins.track = options.createTracker(ins.track)
  }

  analytics = ins
  return analytics as AnalyticsInstance<E, P>
}

export function getAnalytics<E extends string, P extends Record<E, any>>(): AnalyticsInstance<E, P> {
  if (!analytics)
    throw new Error('Analytics not initialized')
  return analytics as AnalyticsInstance<E, P>
}

export * from './vAnalytics'
