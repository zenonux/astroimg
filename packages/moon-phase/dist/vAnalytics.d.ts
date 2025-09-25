import { Directive } from 'vue';
interface TrackBinding {
    event: string;
    params?: Record<string, any>;
    trigger?: 'click' | 'exposure';
}
export declare const vAnalytics: Directive<HTMLElement, TrackBinding | TrackBinding[]>;
export {};
