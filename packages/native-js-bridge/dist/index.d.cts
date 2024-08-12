interface NativePayloads {
    action: string;
    params: {
        [key: string]: any;
        callback?: string;
    };
}
interface NativeResponse {
    errcode: number;
    errmsg?: string;
    data: any;
}
declare const useCallNative: (payloads: NativePayloads) => Promise<NativeResponse>;

export { NativePayloads, NativeResponse, useCallNative };
