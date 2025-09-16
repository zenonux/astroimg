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

/**
 * 初始化 Analytics 实例
 */
export declare function initAnalytics(options: AnalyticsOptions): void

/**
 * 获取全局单例 Analytics
 */
export declare function getAnalytics(): any
