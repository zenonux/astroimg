import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { PropType } from 'vue';
import { VNodeProps } from 'vue';

export declare const ADebounceAsyncButton: DefineComponent<{}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{}>>, {}, {}>;

export declare const AUploader: DefineComponent<{
    modelValue: {
        type: PropType<string>;
        required: true;
    };
    config: {
        type: PropType<{
            bucket: string;
            region: string;
            resource: string;
            domain: string;
            getTempSecret: (q: {
                region: string;
                bucket: string;
                resource: string;
            }) => Promise<{
                data: {
                    credentials: {
                        tmpSecretId: string;
                        tmpSecretKey: string;
                        token: string;
                    };
                    startTime: number;
                    expiredTime: number;
                };
            }>;
        }>;
        required: true;
    };
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    modelValue: {
        type: PropType<string>;
        required: true;
    };
    config: {
        type: PropType<{
            bucket: string;
            region: string;
            resource: string;
            domain: string;
            getTempSecret: (q: {
                region: string;
                bucket: string;
                resource: string;
            }) => Promise<{
                data: {
                    credentials: {
                        tmpSecretId: string;
                        tmpSecretKey: string;
                        token: string;
                    };
                    startTime: number;
                    expiredTime: number;
                };
            }>;
        }>;
        required: true;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, {}>;

export { }
