declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: import("vue").PropType<string>;
        required: true;
    };
    config: {
        type: import("vue").PropType<{
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
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<string>;
        required: true;
    };
    config: {
        type: import("vue").PropType<{
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
export default _default;
