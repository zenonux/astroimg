export interface AnalyticsOptions {
    project: string;
    pageLeave: {
        urlPropertyMap: (url: string) => {
            page_type: string;
            page_id: string;
        };
        isCollectUrl: (url: string) => boolean;
    };
    sensorsConfig: any;
}
export type AnalyticsInstance<E extends string, P extends Record<E, any>> = {
    track: (event: E, params: P[E]) => void;
    setProfile: (params: Record<string, any>) => void;
    setOnceProfile: (params: Record<string, any>) => void;
} & Record<string, any>;
export declare function initAnalytics<E extends string, P extends Record<E, any>>(options: AnalyticsOptions): AnalyticsInstance<E, P>;
export declare function getAnalytics<E extends string, P extends Record<E, any>>(): AnalyticsInstance<E, P>;
export * from './vAnalytics';
