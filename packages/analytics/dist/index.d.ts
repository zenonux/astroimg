export interface AnalyticsOptions<E extends string, P extends Record<E, any>> {
    project: string;
    createTracker?: (track: (event: E, params: P[E]) => void) => (event: E, params: P[E]) => void;
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
    registerPage: (params: Record<string, any>) => void;
} & Record<string, any>;
export declare function initAnalytics<E extends string, P extends Record<E, any>>(options: AnalyticsOptions<E, P>): AnalyticsInstance<E, P>;
export declare function getAnalytics<E extends string, P extends Record<E, any>>(): AnalyticsInstance<E, P>;
export * from './vAnalytics';
