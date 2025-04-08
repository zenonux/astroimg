interface NativePayloads {
    action: string;
    params: {
        [key: string]: any;
        callback?: string | boolean;
    };
}
interface NativeResponse {
    errcode: number;
    errmsg?: string;
    data: any;
}
declare const useCallNative: (payloads: NativePayloads) => Promise<NativeResponse>;
declare const callNative: (payloads: {
    action: string;
    params: {
        [key: string]: any;
    };
    callback?: boolean | string;
}) => Promise<NativeResponse>;

export { NativePayloads, NativeResponse, callNative, useCallNative };
