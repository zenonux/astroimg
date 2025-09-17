import { Directive } from 'vue';
interface TrackBinding {
    trigger?: boolean;
    event: string;
    params?: Record<string, any>;
}
export declare const vAnalytics: Directive<HTMLElement, TrackBinding>;
export {};
